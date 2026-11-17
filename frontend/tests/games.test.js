import test from "node:test";
import assert from "node:assert/strict";
import { GAMES, TOPICS } from "../src/features/games/data/games.js";
import { GAME_QUESTIONS } from "../src/features/games/data/questions.js";
import {
  bankFor,
  startGame,
  answerGame,
  nextQuestion,
  useLifeline,
  stopGame,
  resetBank,
} from "../src/features/games/utils/gameEngine.js";
import {
  freshProgress,
  normalizeProgress,
  claimFire,
  rewardProgress,
  buyItem,
  currentStreak,
} from "../src/features/gamification/utils/progress.js";
import { parseRoute } from "../src/app/router/routes.js";
const now = new Date(2026, 9, 10, 12).getTime(),
  date = (n) => new Date(2026, 9, n, 12);
function win(p) {
  const id = p.gameSession.id;
  while (p.gameSession.status !== "finished") {
    const s = p.gameSession;
    p =
      s.status === "feedback"
        ? nextQuestion(p, id, now)
        : answerGame(p, id, s.queue[s.index].a, now);
  }
  return p;
}
test("five games and every topic have valid unique authored questions and routes", () => {
  assert.equal(GAMES.length, 5);
  assert.equal(
    new Set(GAME_QUESTIONS.map((q) => q.id)).size,
    GAME_QUESTIONS.length,
  );
  for (const g of GAMES)
    for (const t of TOPICS[g.id]) {
      const bank = bankFor(g.id, t.id);
      assert.ok(bank.length >= g.rounds);
      for (const q of bank) {
        assert.equal(q.o.length, 4);
        assert.equal(new Set(q.o).size, 4);
        assert.ok(q.a >= 0 && q.a < 4);
        assert.ok(q.e);
      }
      const r = parseRoute(`/tro-choi/${g.id}/${t.id}`, "", [], []);
      assert.equal(r.gameId, g.id);
      assert.equal(r.topicId, t.id);
    }
  assert.equal(parseRoute("/tro-choi/nope", "", [], []).screen, "not-found");
  assert.equal(
    parseRoute("/tro-choi/millionaire/nope", "", [], []).screen,
    "not-found",
  );
  assert.equal(parseRoute("/hoc/java", "", [], []).legacyLearning, true);
});
test("streak increases only when claimed; daily claims are idempotent, gap recovers and rewards do not maintain fire", () => {
  let p = rewardProgress(
    freshProgress(),
    { kind: "exam", id: "hubt/one" },
    date(10),
  );
  assert.equal(p.streak, 0);
  p = claimFire(p, date(10));
  assert.equal(p.streak, 1);
  assert.equal(p.xp, 35);
  assert.equal(p.gems, 4);
  assert.equal(claimFire(p, date(10)), p);
  p = claimFire(p, date(11));
  assert.equal(p.streak, 2);
  p = rewardProgress(p, { kind: "game", id: "sprint" }, date(12));
  assert.equal(p.streak, 2);
  assert.equal(currentStreak(p, date(13)), 0);
  p = claimFire(p, date(13));
  assert.equal(p.streak, 3);
  assert.equal(p.bestStreak, 3);
});
test("migration keeps balances/accessories and reload keeps seen questions/session/deadline", () => {
  let p = normalizeProgress({
    version: 2,
    xp: 400,
    gems: 19,
    streak: 5,
    bestStreak: 5,
    owned: ["hat"],
    lastDay: "2026-10-10",
  });
  assert.equal(p.xp, 400);
  assert.deepEqual(p.owned, ["hat"]);
  assert.equal(p.lastClaimDay, "");
  p = startGame(p, "millionaire", "world", now);
  assert.deepEqual(normalizeProgress(JSON.parse(JSON.stringify(p))), p);
  const deadline = p.gameSession.deadline;
  assert.equal(normalizeProgress(p).gameSession.deadline, deadline);
  assert.equal(buyItem(p, "hat"), p);
});
test("all three lifelines are once per session, 50/50 preserves correct choice, audience totals 100", () => {
  let p = startGame(freshProgress(), "millionaire", "world", now),
    s = p.gameSession;
  p = useLifeline(p, s.id, "half", now);
  assert.equal(p.gameSession.eliminated.length, 2);
  assert.ok(!p.gameSession.eliminated.includes(s.queue[0].a));
  assert.equal(useLifeline(p, s.id, "half", now), p);
  p = useLifeline(p, s.id, "audience", now);
  assert.equal(
    p.gameSession.hint.shares.reduce((a, b) => a + b),
    100,
  );
  p.gameSession.eliminated.forEach((i) =>
    assert.equal(p.gameSession.hint.shares[i], 0),
  );
  p = useLifeline(p, s.id, "phone", now);
  assert.ok(p.gameSession.hint.text.includes(s.queue[0].o[s.queue[0].a]));
  assert.equal(Object.keys(p.gameSession.lifelines).length, 3);
});
test("15 correct millionaire answers reach all milestones and reward atomically only once per game/day", () => {
  let p = win(startGame(freshProgress(), "millionaire", "world", now));
  assert.equal(p.gameSession.checkpoint, 15);
  assert.equal(p.gameHistory.length, 1);
  assert.equal(p.xp, 30);
  assert.equal(p.gems, 4);
  assert.equal(stopGame(p, p.gameSession.id, now), p);
  const ids = p.gameSession.queue.map((q) => q.id);
  p = startGame(p, "millionaire", "world", now + 1);
  assert.ok(p.gameSession.queue.every((q) => !ids.includes(q.id)));
  assert.equal(p.gameSession.queue.length, 5);
  p = win(p);
  assert.equal(p.xp, 30);
  assert.equal(p.gameHistory.length, 2);
  assert.equal(startGame(p, "millionaire", "world", now + 2), p);
  p = resetBank(p, "millionaire", "world");
  assert.equal(p.gameSeen["millionaire/world"].length, 0);
});
test("unseen data remain playable after exit; bank cannot be reset early", () => {
  let p = startGame(freshProgress(), "sprint", "animals", now);
  const shown = p.gameSession.queue[0].id;
  p = stopGame(p, p.gameSession.id, now);
  assert.equal(resetBank(p, "sprint", "animals"), p);
  p = startGame(p, "sprint", "animals", now + 1);
  assert.ok(p.gameSession.queue.every((q) => q.id !== shown));
});
test("deadline beats late answer, timeout is single, incorrect choice locked, three hearts end word game", () => {
  let p = startGame(freshProgress(), "millionaire", "world", now),
    s = p.gameSession;
  p = answerGame(p, s.id, s.queue[0].a, s.deadline);
  assert.equal(p.gameSession.answers[0].pick, null);
  assert.equal(p.gameSession.status, "finished");
  assert.equal(p.xp, 0);
  assert.equal(answerGame(p, s.id, null, s.deadline + 1), p);
  p = startGame(freshProgress(), "vietnamese", "words", now);
  const id = p.gameSession.id;
  for (let i = 0; i < 3; i++) {
    s = p.gameSession;
    p = answerGame(p, id, (s.queue[s.index].a + 1) % 4, now);
    assert.equal(answerGame(p, id, s.queue[s.index].a, now), p);
    if (i < 2) p = nextQuestion(p, id, now);
  }
  assert.equal(p.gameSession.lives, 0);
  assert.equal(p.gameSession.status, "finished");
});
test("reverse combo resets on error; sprint rewards speed and keeps playing after error", () => {
  let p = startGame(freshProgress(), "reverse", "world", now),
    s = p.gameSession;
  p = answerGame(p, s.id, s.queue[0].a, now + 1000);
  assert.equal(p.gameSession.combo, 1);
  assert.equal(p.gameSession.score, 120);
  p = nextQuestion(p, s.id, now);
  s = p.gameSession;
  p = answerGame(p, s.id, (s.queue[1].a + 1) % 4, now);
  assert.equal(p.gameSession.combo, 0);
  assert.equal(p.gameSession.status, "feedback");
  p = startGame(freshProgress(), "sprint", "animals", now);
  s = p.gameSession;
  p = answerGame(p, s.id, s.queue[0].a, now + 1000);
  assert.equal(p.gameSession.score, 145);
});

test("corrupt saved game session is discarded while earned balances remain", () => {
  const p = normalizeProgress({
    version: 3,
    xp: 150,
    gems: 8,
    gameSession: {
      id: "bad",
      queue: [null],
      index: 0,
      answers: [],
      deadline: 123,
      status: "playing",
    },
    gameHistory: [{ id: "bad" }],
  });
  assert.equal(p.gameSession, null);
  assert.equal(p.xp, 150);
  assert.equal(p.gems, 8);
  assert.deepEqual(p.gameHistory, []);
});
