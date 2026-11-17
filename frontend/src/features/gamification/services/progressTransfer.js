import { normalizeProgress } from "../utils/progress.js";
export const HISTORY_KEY = "quizconsole_history";
const MAX_RAW = 1024 * 1024,
  MAX_CODE = 400000;
const encoder = new TextEncoder();
const error = () =>
  new Error("Mã sao lưu không hợp lệ, bị thiếu hoặc đã bị thay đổi.");
async function digest(bytes) {
  return [...new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))]
    .map((n) => n.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 32);
}
function toBase64(bytes) {
  let text = "";
  for (let i = 0; i < bytes.length; i += 8192)
    text += String.fromCharCode(...bytes.subarray(i, i + 8192));
  return btoa(text)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
}
function fromBase64(text) {
  if (!/^[A-Za-z0-9_-]+$/.test(text)) throw error();
  return Uint8Array.from(
    atob(text.replaceAll("-", "+").replaceAll("_", "/")),
    (c) => c.charCodeAt(0),
  );
}
async function transform(bytes, compress) {
  if (typeof CompressionStream === "undefined" || typeof DecompressionStream === "undefined")
    throw new Error("Hãy cập nhật trình duyệt để xuất hoặc nhập mã tiến trình.");
  const stream = new Blob([bytes])
    .stream()
    .pipeThrough(
      compress
        ? new CompressionStream("gzip")
        : new DecompressionStream("gzip"),
    );
  const reader = stream.getReader(),
    chunks = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.length;
      if (length > MAX_RAW) {
        await reader.cancel();
        throw error();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const result = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}
export function validateBackup(value) {
  if (
    !value ||
    !value.progress ||
    ![1, 2, 3].includes(value.progress.version) ||
    (value.schema !== undefined && value.schema !== 1)
  )
    throw error();
  if (value.app !== undefined && !["JLer Campus", "JLer"].includes(value.app))
    throw error();
  const p = value.progress;
  if (
    !["xp", "gems", "streak", "bestStreak"].every(
      (k) =>
        p[k] === undefined ||
        (Number.isSafeInteger(p[k]) && p[k] >= 0 && p[k] <= 1e9),
    ) ||
    !Number.isSafeInteger(p.xp) ||
    !Number.isSafeInteger(p.gems)
  )
    throw error();
  for (const k of ["events", "completed", "owned"])
    if (
      p[k] !== undefined &&
      (!Array.isArray(p[k]) ||
        p[k].some((v) => typeof v !== "string" || v.length > 200))
    )
      throw error();
  if (
    value.examHistory !== undefined &&
    (!Array.isArray(value.examHistory) ||
      value.examHistory.length > 50 ||
      value.examHistory.some(
        (r) => !r || typeof r.title !== "string" || !Number.isFinite(r.date),
      ))
  )
    throw error();
  const history = value.examHistory?.map((r) =>
    Object.fromEntries(
      Object.entries(r).filter(
        ([k, v]) =>
          [
            "title",
            "examId",
            "schoolId",
            "date",
            "mode",
            "total",
            "correct",
            "wrong",
            "skipped",
            "unanswered",
            "pct",
          ].includes(k) && ["number", "string"].includes(typeof v),
      ),
    ),
  );
  return {
    app: "JLer",
    schema: 1,
    exportedAt: typeof value.exportedAt === "string" ? value.exportedAt : "",
    progress: normalizeProgress(p),
    ...(history !== undefined ? { examHistory: history } : {}),
  };
}
export async function encodeBackup(progress, examHistory = []) {
  const backup = validateBackup({
    app: "JLer",
    schema: 1,
    exportedAt: new Date().toISOString(),
    progress,
    examHistory,
  });
  const raw = encoder.encode(JSON.stringify(backup));
  if (raw.length > MAX_RAW)
    throw new Error("Tiến trình quá lớn. Hãy dùng bản sao JSON thay cho QR.");
  const packed = await transform(raw, true);
  return `JLER1.${await digest(packed)}.${toBase64(packed)}`;
}
export async function decodeBackup(input) {
  const code = input.trim();
  if (!code || code.length > MAX_CODE) throw error();
  if (code.startsWith("{")) return validateBackup(JSON.parse(code));
  const parts = code.split(".");
  if (
    parts.length !== 3 ||
    parts[0] !== "JLER1" ||
    !/^[a-f0-9]{32}$/.test(parts[1])
  )
    throw error();
  try {
    const packed = fromBase64(parts[2]);
    if ((await digest(packed)) !== parts[1]) throw error();
    const raw = await transform(packed, false);
    return validateBackup(
      JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(raw)),
    );
  } catch {
    throw error();
  }
}
export async function splitQr(code, size = 750) {
  if (
    !Number.isInteger(size) ||
    size < 100 ||
    size > 1000 ||
    !code.startsWith("JLER1.")
  )
    throw error();
  const total = Math.ceil(code.length / size);
  if (total > 256)
    throw new Error("Tiến trình quá lớn cho QR. Hãy sao chép mã hoặc tải tệp.");
  const id = (await digest(encoder.encode(code))).slice(0, 16);
  return Array.from(
    { length: total },
    (_, i) =>
      `JLERQR1|${id}|${i + 1}|${total}|${code.slice(i * size, (i + 1) * size)}`,
  );
}
export function addQrPart(previous, text) {
  const parts = text.split("|");
  if (
    parts.length !== 5 ||
    parts[0] !== "JLERQR1" ||
    !/^[a-f0-9]{16}$/.test(parts[1]) ||
    !/^\d+$/.test(parts[2]) ||
    !/^\d+$/.test(parts[3])
  )
    throw error();
  const index = Number(parts[2]),
    total = Number(parts[3]);
  if (
    total < 1 ||
    total > 256 ||
    index < 1 ||
    index > total ||
    !parts[4] ||
    parts[4].length > 1000
  )
    throw error();
  if (previous && previous.id !== parts[1])
    throw new Error(
      "Đây là QR của bản sao khác. Xóa các phần đã quét để bắt đầu lại.",
    );
  if (
    (previous && previous.total !== total) ||
    (previous?.parts[index] && previous.parts[index] !== parts[4])
  )
    throw error();
  const next = {
    id: parts[1],
    total,
    parts: { ...previous?.parts, [index]: parts[4] },
  };
  const count = Object.keys(next.parts).length;
  return {
    ...next,
    count,
    code:
      count === total
        ? Array.from({ length: total }, (_, i) => next.parts[i + 1]).join("")
        : null,
  };
}
export async function verifyQrAssembly(state) {
  if (
    !state?.code ||
    (await digest(encoder.encode(state.code))).slice(0, 16) !== state.id
  )
    throw error();
  return decodeBackup(state.code);
}
