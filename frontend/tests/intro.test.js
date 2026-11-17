import test from "node:test";
import assert from "node:assert/strict";
import { startIntro } from "../src/shared/utils/introLifecycle.js";
function fakeClock() {
  let now = 0,
    id = 0;
  const jobs = new Map();
  return {
    setTimeout(fn, ms) {
      jobs.set(++id, { fn, at: now + ms });
      return id;
    },
    clearTimeout(i) {
      jobs.delete(i);
    },
    setInterval(fn, ms) {
      jobs.set(++id, { fn, at: now + ms, interval: ms });
      return id;
    },
    clearInterval(i) {
      jobs.delete(i);
    },
    advance(ms) {
      const end = now + ms;
      for (;;) {
        const entries = [...jobs]
          .filter(([, j]) => j.at <= end)
          .sort((a, b) => a[1].at - b[1].at);
        if (!entries.length) break;
        const [i, j] = entries[0];
        now = j.at;
        j.interval
          ? jobs.set(i, { ...j, at: now + j.interval })
          : jobs.delete(i);
        j.fn();
      }
      now = end;
    },
  };
}
test("intro always finishes even if its image never resolves and no animation frame runs", () => {
  const clock = fakeClock();
  let finished = 0,
    left = 0;
  startIntro({
    clock,
    ready: new Promise(() => {}),
    onProgress: () => {},
    onLeaving: () => left++,
    onFinish: () => finished++,
  });
  clock.advance(2399);
  assert.equal(finished, 0);
  clock.advance(251);
  assert.equal(left, 1);
  assert.equal(finished, 1);
  clock.advance(5000);
  assert.equal(finished, 1);
});
test("cleanup during StrictMode/remount cannot close a later page; skip is idempotent", async () => {
  const clock = fakeClock();
  let finished = 0;
  const old = startIntro({
    clock,
    ready: Promise.resolve(),
    onProgress: () => {},
    onLeaving: () => {},
    onFinish: () => finished++,
  });
  old.dispose();
  clock.advance(5000);
  await Promise.resolve();
  assert.equal(finished, 0);
  const next = startIntro({
    clock,
    ready: new Promise(() => {}),
    onProgress: () => {},
    onLeaving: () => {},
    onFinish: () => finished++,
  });
  next.finish();
  next.finish();
  clock.advance(250);
  assert.equal(finished, 1);
  next.dispose();
});
