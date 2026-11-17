import { GAMES, TOPICS } from "../data/games.js";
export function validGameSession(s) {
  return (
    !!s &&
    typeof s.id === "string" &&
    GAMES.some((g) => g.id === s.gameId) &&
    TOPICS[s.gameId].some((t) => t.id === s.topicId) &&
    Array.isArray(s.queue) &&
    s.queue.length > 0 &&
    s.queue.length <= 15 &&
    s.queue.every(
      (q) =>
        q &&
        typeof q.id === "string" &&
        typeof q.q === "string" &&
        typeof q.e === "string" &&
        Array.isArray(q.o) &&
        q.o.length === 4 &&
        q.o.every((o) => typeof o === "string") &&
        Number.isInteger(q.a) &&
        q.a >= 0 &&
        q.a < 4,
    ) &&
    Number.isInteger(s.index) &&
    s.index >= 0 &&
    s.index < s.queue.length &&
    ["playing", "feedback", "finished"].includes(s.status) &&
    Number.isFinite(s.deadline) &&
    Array.isArray(s.answers) &&
    s.answers.length <= s.queue.length &&
    s.answers.every(
      (a) =>
        a &&
        typeof a.id === "string" &&
        typeof a.correct === "boolean" &&
        (a.pick === null ||
          (Number.isInteger(a.pick) && a.pick >= 0 && a.pick < 4)),
    ) &&
    ["score", "combo", "lives", "checkpoint"].every(
      (k) => Number.isSafeInteger(s[k]) && s[k] >= 0,
    ) &&
    s.lives <= 3 &&
    [0, 5, 10, 15].includes(s.checkpoint) &&
    s.lifelines &&
    typeof s.lifelines === "object" &&
    Array.isArray(s.eliminated) &&
    s.eliminated.length <= 2 &&
    s.eliminated.every((i) => Number.isInteger(i) && i >= 0 && i < 4) &&
    (!s.hint ||
      (s.hint.type === "phone" && typeof s.hint.text === "string") ||
      (s.hint.type === "audience" &&
        Array.isArray(s.hint.shares) &&
        s.hint.shares.length === 4 &&
        s.hint.shares.every((n) => Number.isInteger(n) && n >= 0 && n <= 100)))
  );
}
export function validHistory(h) {
  return (
    h &&
    typeof h.id === "string" &&
    GAMES.some((g) => g.id === h.game) &&
    TOPICS[h.game]?.some((t) => t.id === h.topic) &&
    ["score", "correct", "total", "checkpoint", "at"].every(
      (k) => Number.isFinite(h[k]) && h[k] >= 0,
    )
  );
}
