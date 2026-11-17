import { createInterface } from "node:readline/promises";
import { writeFile } from "node:fs/promises";
const prompt = "Nhập key mới (8 ký tự, có chữ, số và dấu gạch): ";
let key = process.argv[2];
if (key === undefined) {
  if (process.stdin.isTTY) {
    const input = createInterface({ input: process.stdin, output: process.stdout });
    try { key = await input.question(prompt); }
    finally { input.close(); }
  } else {
    key = "";
    for await (const chunk of process.stdin) key += chunk;
  }
}
key = key.trim();
if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*-)[A-Za-z0-9-]{8}$/.test(key)) {
  console.error("Key phải đúng 8 ký tự, gồm chữ, số và ít nhất một dấu gạch.");
  process.exitCode = 1;
} else {
  await writeFile(new URL("../src/features/quiz/config/downloadKeyConfig.js", import.meta.url),
    `// Key tải PDF. Sửa ở đây hoặc chạy npm run key:set, sau đó build lại.\nexport const DOWNLOAD_KEY = ${JSON.stringify(key)};\n`);
  console.log("Đã lưu key vào src/features/quiz/config/downloadKeyConfig.js. Chạy npm run build để áp dụng.");
}
