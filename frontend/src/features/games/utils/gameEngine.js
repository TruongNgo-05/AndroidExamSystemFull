import { GAMES, TOPICS } from "../data/games.js";
import { GAME_QUESTIONS } from "../data/questions.js";
import { rewardProgress } from "../../gamification/utils/progress.js";
export const bankFor = (game, topic) =>
  GAME_QUESTIONS.filter((q) => q.game === game && q.topic === topic);
export function shuffled(values, random = Math.random) {
  const a = [...values];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function startGame(
  p,
  gameId,
  topicId,
  now = Date.now(),
  random = Math.random,
) {
  const game = GAMES.find((g) => g.id === gameId);
  if (!game || !TOPICS[gameId]?.some((t) => t.id === topicId)) return p;
  const key = `${gameId}/${topicId}`,
    seen = p.gameSeen[key] || [],
    bank = bankFor(gameId, topicId);
  const fresh = bank.filter((q) => !seen.includes(q.id));
  if (!fresh.length) return p;
  const queue = shuffled(fresh, random)
    .slice(0, game.rounds)
    .map((q) => {
      const order = shuffled([0, 1, 2, 3], random);
      return { ...q, o: order.map((i) => q.o[i]), a: order.indexOf(q.a) };
    });
  const session = {
    id: `${now}-${Math.floor(random() * 1e9)}`,
    gameId,
    topicId,
    queue,
    index: 0,
    answers: [],
    score: 0,
    combo: 0,
    lives: 3,
    checkpoint: 0,
    deadline: now + game.seconds * 1000,
    status: "playing",
    lifelines: {},
    hint: null,
    eliminated: [],
  };
  return {
    ...p,
    gameSeen: { ...p.gameSeen, [key]: [...new Set([...seen, queue[0].id])] },
    gameSession: session,
  };
}
function finish(p, s, now) {
  const earned = s.answers.filter((a) => a.correct).length >= 1;
  const next = {
    ...p,
    gameSession: { ...s, status: "finished" },
    gameHistory: [
      ...p.gameHistory,
      {
        id: s.id,
        game: s.gameId,
        topic: s.topicId,
        score: s.score,
        correct: s.answers.filter((a) => a.correct).length,
        total: s.answers.length,
        checkpoint: s.checkpoint,
        at: now,
      },
    ].slice(-50),
  };
  return earned
    ? rewardProgress(next, { kind: "game", id: s.gameId }, new Date(now))
    : next;
}
export function answerGame(p, sessionId, index, now = Date.now()) {
  const s = p.gameSession;
  if (!s || s.id !== sessionId || s.status !== "playing") return p;
  const q = s.queue[s.index],
    game = GAMES.find((g) => g.id === s.gameId);
  if (
    !q ||
    (!Number.isInteger(index) && index !== null) ||
    index < -1 ||
    index > 3 ||
    s.eliminated.includes(index)
  )
    return p;
  const pick = now >= s.deadline ? null : index,
    correct = pick === q.a;
  const combo = correct ? s.combo + 1 : 0;
  const score =
    s.score +
    (correct
      ? s.gameId === "sprint"
        ? 100 + Math.max(0, Math.ceil((s.deadline - now) / 1000)) * 5
        : s.gameId === "reverse"
          ? 100 + combo * 20
          : 100
      : 0);
  const count = s.answers.length + 1,
    checkpoint =
      s.gameId === "millionaire" && correct
        ? Math.floor(count / 5) * 5
        : s.checkpoint;
  const next = {
    ...s,
    score,
    combo,
    checkpoint,
    lives: s.lives - (correct ? 0 : 1),
    answers: [...s.answers, { id: q.id, pick, correct }],
    status: "feedback",
  };
  const ended =
    count === s.queue.length ||
    (s.gameId === "millionaire" && !correct) ||
    (["vietnamese", "detective"].includes(s.gameId) && next.lives <= 0);
  return ended ? finish(p, next, now) : { ...p, gameSession: next };
}
export function nextQuestion(p, id, now = Date.now()) {
  const s = p.gameSession;
  if (!s || s.id !== id || s.status !== "feedback") return p;
  const index = s.index + 1,
    q = s.queue[index];
  if (!q) return finish(p, s, now);
  const key = `${s.gameId}/${s.topicId}`;
  return {
    ...p,
    gameSeen: {
      ...p.gameSeen,
      [key]: [...new Set([...(p.gameSeen[key] || []), q.id])],
    },
    gameSession: {
      ...s,
      index,
      status: "playing",
      deadline: now + GAMES.find((g) => g.id === s.gameId).seconds * 1000,
      hint: null,
      eliminated: [],
    },
  };
}
export function useLifeline(p, id, type, now = Date.now()) {
  const s = p.gameSession;
  if (
    !s ||
    s.id !== id ||
    s.gameId !== "millionaire" ||
    s.status !== "playing" ||
    s.lifelines[type] ||
    now >= s.deadline ||
    !["half", "phone", "audience"].includes(type)
  )
    return p;
  const q = s.queue[s.index];
  let hint = s.hint,
    eliminated = s.eliminated;
  if (type === "half")
    eliminated = shuffled([0, 1, 2, 3].filter((i) => i !== q.a)).slice(0, 2);
  if (type === "phone")
    hint = {
      type,
      text: `Alo? Jeli đây! Mình nghiêng về ${String.fromCharCode(65 + q.a)}: ${q.o[q.a]}. Chốt vẫn là bạn nhé!`,
    };
  if (type === "audience") {
    const active = [0, 1, 2, 3].filter((i) => !eliminated.includes(i));
    const shares = [0, 0, 0, 0];
    shares[q.a] = 70;
    const wrong = active.filter((i) => i !== q.a);
    wrong.forEach(
      (i, j) =>
        (shares[i] =
          Math.floor(30 / wrong.length) + (j === 0 ? 30 % wrong.length : 0)),
    );
    hint = { type, shares };
  }
  return {
    ...p,
    gameSession: {
      ...s,
      lifelines: { ...s.lifelines, [type]: true },
      hint,
      eliminated,
    },
  };
}
export function stopGame(p, id, now = Date.now()) {
  const s = p.gameSession;
  if (!s || s.id !== id || s.status === "finished") return p;
  return finish(p, s, now);
}
export function resetBank(p, game, topic) {
  const key = `${game}/${topic}`;
  if (bankFor(game, topic).some((q) => !(p.gameSeen[key] || []).includes(q.id)))
    return p;
  return { ...p, gameSeen: { ...p.gameSeen, [key]: [] } };
}
