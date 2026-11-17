import { freshProgress, normalizeProgress } from "../utils/progress.js";
export const PROGRESS_KEY = "jler_learning_v1"; // Keep the key to migrate existing users.
export function createProgressStore(getStorage = () => window.localStorage, storageKey = PROGRESS_KEY) {
  const listeners = new Set();
  let snapshot, lastRaw;
  function read() {
    try {
      const raw = getStorage().getItem(storageKey);
      if (snapshot?.error && raw === lastRaw) return snapshot;
      lastRaw = raw;
      return { progress: normalizeProgress(JSON.parse(raw)), error: "" };
    } catch {
      return {
        progress: snapshot?.progress || freshProgress(),
        error:
          "Trình duyệt chưa lưu được tiến trình. Bạn vẫn chơi và ôn tập được, nhưng dữ liệu có thể mất khi đóng trang.",
      };
    }
  }
  snapshot = read();
  function publish(next) {
    if (JSON.stringify(next) === JSON.stringify(snapshot)) return;
    snapshot = next;
    listeners.forEach((fn) => fn());
  }
  return {
    getSnapshot: () => snapshot,
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    transact(mutator) {
      const latest = read();
      const next = mutator(latest.progress);
      if (next === latest.progress) {
        publish(latest);
        return;
      }
      let error = "";
      try {
        const raw = JSON.stringify(next);
        getStorage().setItem(storageKey, raw);
        lastRaw = raw;
      } catch {
        error =
          "Không lưu được tiến trình vào trình duyệt. Kết quả hiện chỉ giữ trong phiên này.";
      }
      publish({ progress: next, error });
    },
    restore(backup) {
      const storage = getStorage();
      const keys = [
        storageKey,
        ...(backup.examHistory !== undefined ? ["quizconsole_history"] : []),
      ];
      const before = Object.fromEntries(
        keys.map((key) => [key, storage.getItem(key)]),
      );
      try {
        storage.setItem(
          storageKey,
          JSON.stringify(normalizeProgress(backup.progress)),
        );
        if (backup.examHistory !== undefined)
          storage.setItem(
            "quizconsole_history",
            JSON.stringify(backup.examHistory),
          );
      } catch (error) {
        for (const key of keys)
          try {
            before[key] === null
              ? storage.removeItem(key)
              : storage.setItem(key, before[key]);
          } catch {}
        throw new Error(
          "Không lưu được bản nhập. Hãy kiểm tra dung lượng/quyền lưu của trình duyệt.",
        );
      }
      publish(read());
    },
    connect(target) {
      const refresh = (event) => {
        if (
          event.type === "storage" &&
          event.key !== storageKey &&
          event.key !== null
        )
          return;
        publish(read());
      };
      target.addEventListener("storage", refresh);
      target.addEventListener("focus", refresh);
      return () => {
        target.removeEventListener("storage", refresh);
        target.removeEventListener("focus", refresh);
      };
    },
  };
}
