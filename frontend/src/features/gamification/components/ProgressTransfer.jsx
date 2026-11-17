import {useAuth} from "../../auth/AuthContext.jsx";
import {api} from "../../../shared/services/api.js";
import { useEffect, useRef, useState } from "react";
import { Button, Input, Modal, QRCode, message } from "antd";
import { useLearning } from "../context/LearningProvider.jsx";
import {
  encodeBackup,
  decodeBackup,
  splitQr,
  addQrPart,
  verifyQrAssembly,
  HISTORY_KEY,
} from "../services/progressTransfer.js";
import { levelInfo } from "../utils/progress.js";
import QrReader from "./QrReader.jsx";
export default function ProgressTransfer() {
  const [qrSize, setQrSize] = useState(Math.min(280, window.innerWidth - 104));
  useEffect(() => {
    const resize = () => setQrSize(Math.max(180, Math.min(280, window.innerWidth - 104)));
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const { progress, restore } = useLearning();
  const {user}=useAuth();
  const [notice, holder] = message.useMessage();
  const [mode, setMode] = useState(""),
    [code, setCode] = useState(""),
    [parts, setParts] = useState([]),
    [index, setIndex] = useState(0),
    [input, setInput] = useState(""),
    [preview, setPreview] = useState(null),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [received, setReceived] = useState(null);
  const assembly = useRef(null),
    generation = useRef(0),
    qr = useRef(null),
    file = useRef(null),
    scanning = useRef(false);
  function close() {
    generation.current++;
    assembly.current = null;
    setMode("");
    setPreview(null);
    setInput("");
    setCode("");
    setParts([]);
    setReceived(null);
    setError("");
    setBusy(false);
  }
  async function exportCode() {
    const token = ++generation.current;
    setMode("export");
    setBusy(true);
    setError("");
    setCode("");
    setParts([]);
    setIndex(0);
    try {
      let history = [];
      try {
        history = user ? await api("/history") : JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      } catch {}
      const result = await encodeBackup(progress, history),
        chunks = await splitQr(result);
      if (token !== generation.current) return;
      setCode(result);
      setParts(chunks);
    } catch (e) {
      if (token === generation.current) setError(e.message);
    } finally {
      if (token === generation.current) setBusy(false);
    }
  }
  function openImport() {
    close();
    setMode("import");
  }
  async function check(value = input) {
    const token = generation.current;
    setBusy(true);
    setPreview(null);
    setError("");
    try {
      const backup = await decodeBackup(value);
      if (token === generation.current) setPreview(backup);
    } catch (e) {
      if (token === generation.current) setError(e.message);
    } finally {
      if (token === generation.current) setBusy(false);
    }
  }
  async function receive(text) {
    if (scanning.current || preview) return;
    scanning.current = true;
    const token = generation.current;
    try {
      if (text.startsWith("JLER1.")) {
        await check(text);
        return;
      }
      const next = addQrPart(assembly.current, text);
      assembly.current = next;
      setReceived(next);
      setError("");
      if (next.code) {
        const backup = await verifyQrAssembly(next);
        if (token === generation.current) {
          setInput(next.code);
          setPreview(backup);
        }
      }
    } catch (e) {
      if (token === generation.current) setError(e.message);
    } finally {
      scanning.current = false;
    }
  }
  function download() {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" }),
      url = URL.createObjectURL(blob),
      link = document.createElement("a");
    link.href = url;
    link.download = "jler-tien-trinh.jler";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function downloadQr() {
    const canvas = qr.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `jler-qr-${index + 1}-of-${parts.length}.png`;
    link.click();
  }
  return (
    <section className="panel progress-transfer">
      {holder}
      <span className="eyebrow">MANG HÀNH TRÌNH THEO BẠN</span>
      <h2>Đổi máy, giữ nguyên tiến trình.</h2>
      <p>
        Xuất mã rồi dán vào máy khác, hoặc dùng QR. Chuyển cả XP, ngọc, lửa, huy
        hiệu, phụ kiện, câu đã chơi, lượt game đang làm và lịch sử thi.
      </p>
      <div className="transfer-actions">
        <Button type="primary" onClick={exportCode}>
          Xuất mã / QR tiến trình
        </Button>
        <Button onClick={openImport}>Nhập tiến trình</Button>
      </div>
      <small>
        Đây là chuyển bản sao thủ công; hai máy không tự đồng bộ các thay đổi
        sau đó.
      </small>
      <Modal
        title={
          mode === "export" ? "Xuất tiến trình" : "Nhập tiến trình từ máy khác"
        }
        open={!!mode}
        onCancel={close}
        footer={null}
        destroyOnHidden
        width={680}
        className="progress-transfer-modal"
      >
        {busy && <p role="status">Jeli đang xử lý bản sao…</p>}
        {error && (
          <p role="alert" className="transfer-error">
            {error}
          </p>
        )}
        {mode === "export" && code && (
          <>
            <p>
              Bản sao được tạo tại lúc bạn nhấn xuất. Giữ mã cho riêng bạn;
              người có mã có thể nhập hồ sơ này.
            </p>
            <Input.TextArea
              aria-label="Mã xuất tiến trình"
              readOnly
              value={code}
              rows={4}
              onFocus={(e) => e.target.select()}
            />
            <div className="transfer-actions">
              <Button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(code);
                    notice.success("Đã sao chép mã tiến trình.");
                  } catch {
                    notice.info("Hãy chọn và sao chép mã trong ô phía trên.");
                  }
                }}
              >
                Sao chép mã
              </Button>
              <Button onClick={download}>Tải bản sao .jler</Button>
            </div>
            <div className="transfer-qr" ref={qr}>
              <QRCode
                value={parts[index]}
                size={qrSize}
                type="canvas"
                errorLevel="M"
                color="#086d70"
                bgColor="#fff"
              />
              <b>
                QR {index + 1}/{parts.length}
              </b>
            </div>
            <div className="transfer-actions">
              <Button disabled={!index} onClick={() => setIndex(index - 1)}>
                QR trước
              </Button>
              <Button
                disabled={index === parts.length - 1}
                onClick={() => setIndex(index + 1)}
              >
                QR tiếp
              </Button>
              <Button onClick={downloadQr}>Tải ảnh QR này</Button>
            </div>
            <p>
              Máy nhận cần quét đủ {parts.length} QR, thứ tự bất kỳ. Nếu có
              nhiều mã, sao chép chuỗi hoặc dùng tệp sẽ nhanh hơn.
            </p>
          </>
        )}
        {mode === "import" && !preview && (
          <>
            <Input.TextArea
              aria-label="Mã nhập tiến trình"
              disabled={busy}
              value={input}
              rows={4}
              placeholder="Dán mã JLER1… hoặc nội dung bản sao JSON cũ"
              onChange={(e) => {
                setInput(e.target.value);
                setError("");
              }}
              maxLength={400000}
            />
            <div className="transfer-actions">
              <Button
                type="primary"
                disabled={!input.trim() || busy}
                onClick={() => check()}
              >
                Kiểm tra mã
              </Button>
              <Button onClick={() => file.current.click()}>
                Chọn tệp sao lưu
              </Button>
              <input
                ref={file}
                type="file"
                accept=".jler,.json,.txt"
                hidden
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  e.target.value = "";
                  if (!f) return;
                  if (f.size > 1024 * 1024) {
                    setError("Tệp quá lớn. Chọn bản sao tiến trình dưới 1 MB.");
                    return;
                  }
                  const text = await f.text();
                  setInput(text);
                  await check(text);
                }}
              />
            </div>
            <QrReader onResult={receive} />
            {received && (
              <div className="qr-received" role="status">
                <b>
                  Đã nhận {received.count}/{received.total} QR
                </b>
                <p>
                  {Object.keys(received.parts)
                    .sort((a, b) => a - b)
                    .join(", ")}
                </p>
                <Button
                  onClick={() => {
                    assembly.current = null;
                    setReceived(null);
                    setError("");
                  }}
                >
                  Xóa các QR đã quét
                </Button>
              </div>
            )}
          </>
        )}
        {mode === "import" && preview && (
          <div className="transfer-preview">
            <span className="eyebrow">KIỂM TRA TRƯỚC KHI NHẬP</span>
            <h2>{preview.progress.displayName}</h2>
            <p>
              Cấp {levelInfo(preview.progress.xp).level} · {preview.progress.xp}{" "}
              XP · {preview.progress.gems} ngọc · {preview.progress.streak} ngày
              lửa
            </p>
            <p>
              {preview.progress.gameHistory.length} lượt game ·{" "}
              {preview.examHistory?.length ?? "Giữ nguyên"} lịch sử thi ·{" "}
              {preview.progress.owned.length} phụ kiện
            </p>
            <p>
              Bản sao:{" "}
              {preview.exportedAt
                ? new Date(preview.exportedAt).toLocaleString("vi-VN")
                : "Bản sao cũ"}
            </p>
            <p className="transfer-warning">
              Nhập sẽ thay thế tiến trình trên máy này, không cộng dồn XP/ngọc.
              Hãy xuất bản hiện tại trước nếu muốn giữ lại.
            </p>
            <div className="transfer-actions">
              <Button onClick={() => setPreview(null)}>Quay lại</Button>
              <Button
                type="primary"
                onClick={() => {
                  try {
                    restore(preview);
                    close();
                    notice.success("Đã nhập và lưu tiến trình trên máy này.");
                  } catch (e) {
                    setError(e.message);
                  }
                }}
              >
                Nhập và thay thế tiến trình
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
