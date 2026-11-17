import test from "node:test";
import assert from "node:assert/strict";
import {
  freshProgress,
  normalizeProgress,
  rewardProgress,
  levelInfo,
  dayKey,
} from "../src/features/gamification/utils/progress.js";
import {
  createProgressStore,
  PROGRESS_KEY,
} from "../src/features/gamification/services/progressStore.js";
const date = new Date(2026, 9, 9, 12),
  day = dayKey(date);
function memory(initial = null) {
  let raw = initial;
  return {
    getItem: () => raw,
    setItem: (_, v) => {
      raw = v;
    },
    value: () => raw,
  };
}
test("old progress migrates without losing earned currency and legacy daily completion remains done", () => {
  const p = normalizeProgress({
    version: 1,
    xp: 215,
    gems: 12,
    completed: ["html/a"],
    events: [`bug:daily:${day}`],
    lastDay: day,
    streak: 2,
  });
  assert.equal(p.version, 3);
  assert.equal(p.xp, 215);
  assert.equal(p.gems, 12);
  assert.deepEqual(p.completed, ["html/a"]);
  assert.equal(p.bugSessions[day].finished, true);
  assert.equal(levelInfo(p.xp).level, 3);
});
test("sequential tab writes read latest persisted state and storage/focus events refresh the other tab", () => {
  const storage = memory();
  const a = createProgressStore(() => storage),
    b = createProgressStore(() => storage);
  const target = new EventTarget();
  const cleanup = a.connect(target);
  a.transact((p) => rewardProgress(p, { kind: "exam", id: "html/a" }, date));
  b.transact((p) => rewardProgress(p, { kind: "exam", id: "css/b" }, date));
  target.dispatchEvent(
    Object.assign(new Event("storage"), { key: PROGRESS_KEY }),
  );
  assert.equal(a.getSnapshot().progress.xp, 50);
  assert.equal(b.getSnapshot().progress.xp, 50);
  assert.equal(
    createProgressStore(() => storage).getSnapshot().progress.xp,
    50,
  );
  cleanup();
});
test("unavailable or full browser storage keeps learning state in memory", () => {
  const storage = {
    getItem: () => null,
    setItem: () => {
      throw new Error("quota");
    },
  };
  const store = createProgressStore(() => storage);
  store.transact((p) => rewardProgress(p, { kind: "exam", id: "a" }, date));
  store.transact((p) => rewardProgress(p, { kind: "exam", id: "b" }, date));
  assert.equal(store.getSnapshot().progress.xp, 50);
  assert.ok(store.getSnapshot().error);
});
test("removed learning/bug reward routes cannot award new currency", () => {
  const p = freshProgress();
  for (const kind of ["lesson", "review", "bug"])
    assert.equal(rewardProgress(p, { kind, id: "old" }, date), p);
});
