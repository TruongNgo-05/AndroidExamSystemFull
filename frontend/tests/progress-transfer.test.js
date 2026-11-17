import test from "node:test";
import assert from "node:assert/strict";
import {
  encodeBackup,
  decodeBackup,
  splitQr,
  addQrPart,
  verifyQrAssembly,
  validateBackup,
} from "../src/features/gamification/services/progressTransfer.js";
import {
  freshProgress,
  rewardProgress,
  claimFire,
} from "../src/features/gamification/utils/progress.js";
import {
  startGame,
  answerGame,
} from "../src/features/games/utils/gameEngine.js";
import {
  createProgressStore,
  PROGRESS_KEY,
} from "../src/features/gamification/services/progressStore.js";
const date = new Date(2026, 9, 11, 12);
function sample() {
  let p = claimFire(
    rewardProgress(freshProgress(), { kind: "exam", id: "example" }, date),
    date,
  );
  p = { ...p, displayName: "Trường Ngô 🐾", owned: ["hat"], equipped: "hat" };
  p = startGame(p, "millionaire", "world", date.getTime());
  p = answerGame(p, p.gameSession.id, p.gameSession.queue[0].a, date.getTime());
  return p;
}
test("code roundtrip keeps Unicode, balances, fire, active game, unseen IDs, accessories and exam history", async () => {
  const p = sample(),
    history = [
      {
        title: "Đề thử",
        date: date.getTime(),
        examId: "demo",
        total: 10,
        correct: 8,
        wrong: 2,
        pct: 80,
      },
    ];
  const code = await encodeBackup(p, history),
    decoded = await decodeBackup(code);
  assert.deepEqual(decoded.progress, p);
  assert.deepEqual(decoded.examHistory, history);
  assert.ok(code.startsWith("JLER1."));
});
test("corruption, unrelated JSON, newer schema, unreasonable balances and oversized input fail", async () => {
  const code = await encodeBackup(sample());
  await assert.rejects(() => decodeBackup(code.slice(0, -4)));
  await assert.rejects(() => decodeBackup(code.replace(/JLER1\./, "JLER1.f")));
  for (const value of [
    { progress: { ...freshProgress(), version: 999 } },
    { app: "OTHER", progress: freshProgress() },
    { schema: 3, progress: freshProgress() },
    { progress: { ...freshProgress(), xp: -1 } },
    { progress: { ...freshProgress(), owned: [{}] } },
  ])
    assert.throws(() => validateBackup(value));
  await assert.rejects(() => decodeBackup("x".repeat(400001)));
});
test("multipart QR accepts out of order and duplicates, refuses mixed backups; missing pieces cannot import", async () => {
  const p = sample(),
    a = await encodeBackup(p),
    b = await encodeBackup({ ...p, xp: 999 });
  const pieces = await splitQr(a, 100);
  let state = null;
  for (const text of [...pieces].reverse()) {
    state = addQrPart(state, text);
    state = addQrPart(state, text);
  }
  assert.equal(state.count, pieces.length);
  assert.deepEqual((await verifyQrAssembly(state)).progress, p);
  const other = await splitQr(b, 100);
  assert.throws(() => addQrPart(state, other[0]));
  let missing = addQrPart(null, pieces[0]);
  assert.equal(missing.code, null);
  await assert.rejects(() => verifyQrAssembly(missing));
});

test("legacy JSON backups keep destination exam history when absent", async () => {
  const old = {
    app: "JLer Campus",
    exportedAt: date.toISOString(),
    progress: sample(),
  };
  const decoded = await decodeBackup(JSON.stringify(old));
  assert.equal(decoded.examHistory, undefined);
  assert.deepEqual(decoded.progress, old.progress);
});
test("restore replaces progress/history and publishes immediately, never adds balances", async () => {
  const values = new Map([
      [PROGRESS_KEY, JSON.stringify(freshProgress())],
      ["quizconsole_history", "[]"],
    ]),
    storage = {
      getItem: (k) => values.get(k) ?? null,
      setItem: (k, v) => values.set(k, v),
      removeItem: (k) => values.delete(k),
    };
  const store = createProgressStore(() => storage);
  let calls = 0;
  store.subscribe(() => calls++);
  const backup = await decodeBackup(await encodeBackup(sample()));
  store.restore(backup);
  assert.equal(calls, 1);
  assert.deepEqual(store.getSnapshot().progress, backup.progress);
  store.restore(backup);
  assert.equal(store.getSnapshot().progress.xp, backup.progress.xp);
});
test("storage failure rolls back an incomplete import", () => {
  const before = JSON.stringify(freshProgress()),
    values = new Map([
      [PROGRESS_KEY, before],
      ["quizconsole_history", "[]"],
    ]);
  const storage = {
    getItem: (k) => values.get(k) ?? null,
    setItem: (k, v) => {
      if (k === "quizconsole_history" && v !== "[]") throw new Error("quota");
      values.set(k, v);
    },
    removeItem: (k) => values.delete(k),
  };
  const store = createProgressStore(() => storage);
  assert.throws(() =>
    store.restore({
      progress: sample(),
      examHistory: [{ title: "x", date: 123 }],
    }),
  );
  assert.equal(values.get(PROGRESS_KEY), before);
  assert.equal(store.getSnapshot().progress.xp, 0);
});
