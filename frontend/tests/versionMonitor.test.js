import test from "node:test";
import assert from "node:assert/strict";
import { startVersionMonitor } from "../src/shared/utils/versionMonitor.js";

function harness(fetcher, visibilityState = "visible") {
  const runtime = new EventTarget();
  const page = new EventTarget();
  page.visibilityState = visibilityState;
  runtime.setInterval = (fn) => {
    runtime.tick = fn;
    return 1;
  };
  runtime.clearInterval = () => {
    runtime.tick = null;
  };
  runtime.setTimeout = () => 2;
  runtime.clearTimeout = () => {};
  const updates = [];
  const stop = startVersionMonitor({
    currentVersion: "loaded-A",
    versionUrl: "/version.json",
    fetcher,
    runtime,
    page,
    onUpdate: (v) => updates.push(v),
  });
  return { runtime, page, updates, stop };
}
const flush = () => new Promise((resolve) => setImmediate(resolve));
const response = (version) => ({ ok: true, json: async () => ({ version }) });

test("uses loaded build, detects later deployment, and never marks old tab updated", async () => {
  let version = "loaded-A";
  const h = harness(async (url, options) => {
    assert.match(url, /^\/version.json\?ts=/);
    assert.equal(options.cache, "no-store");
    return response(version);
  });
  await flush();
  assert.deepEqual(h.updates, []);
  version = "deployed-B";
  await h.runtime.tick();
  await h.runtime.tick();
  assert.deepEqual(h.updates, ["deployed-B", "deployed-B"]);
  h.stop();
});

test("ignores offline/HTML/error/empty responses and retries on focus", async () => {
  const replies = [
    () => {
      throw new Error("offline");
    },
    () => ({
      ok: true,
      json: async () => {
        throw new SyntaxError("HTML fallback");
      },
    }),
    () => ({ ok: false }),
    () => response(" "),
    () => response("deployed-B"),
  ];
  const h = harness(async () => replies.shift()());
  await flush();
  for (let i = 0; i < 3; i++) await h.runtime.tick();
  assert.deepEqual(h.updates, []);
  h.runtime.dispatchEvent(new Event("focus"));
  await flush();
  assert.deepEqual(h.updates, ["deployed-B"]);
  h.stop();
});

test("waits while hidden and checks when tab becomes visible", async () => {
  let calls = 0;
  const h = harness(async () => {
    calls++;
    return response("deployed-B");
  }, "hidden");
  await h.runtime.tick();
  assert.equal(calls, 0);
  h.page.visibilityState = "visible";
  h.page.dispatchEvent(new Event("visibilitychange"));
  await flush();
  assert.deepEqual(h.updates, ["deployed-B"]);
  h.stop();
});

test("deduplicates requests and ignores a response arriving after cleanup", async () => {
  let complete;
  let calls = 0;
  let signal;
  const h = harness((_url, options) => {
    calls++;
    signal = options.signal;
    return new Promise((resolve) => {
      complete = resolve;
    });
  });
  await h.runtime.tick();
  h.runtime.dispatchEvent(new Event("online"));
  assert.equal(calls, 1);
  h.stop();
  assert.equal(signal.aborted, true);
  complete(response("deployed-B"));
  await flush();
  assert.deepEqual(h.updates, []);
  h.runtime.dispatchEvent(new Event("focus"));
  assert.equal(calls, 1);
});
