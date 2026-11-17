import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
export default function QrReader({ onResult }) {
  const [camera, setCamera] = useState(false),
    [error, setError] = useState("");
  const video = useRef(null),
    file = useRef(null),
    callback = useRef(onResult);
  const alive = useRef(true);
  useEffect(() => {
    alive.current = true;
    return () => { alive.current = false; };
  }, []);
  callback.current = onResult;
  useEffect(() => {
    if (!camera) return;
    let cancelled = false,
      stream,
      timer;
    const canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d", { willReadFrequently: true });
    (async () => {
      try {
        if (!navigator.mediaDevices?.getUserMedia)
          throw new Error(
            "Camera cần HTTPS và trình duyệt hỗ trợ. Bạn có thể tải ảnh QR thay thế.",
          );
        const { default: jsQR } = await import("jsqr");
        if (cancelled) return;
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1280 },
          },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        video.current.srcObject = stream;
        await video.current.play();
        const scan = () => {
          if (cancelled) return;
          const el = video.current;
          if (el?.readyState >= 2 && el.videoWidth) {
            const scale = Math.min(1, 1280 / el.videoWidth);
            canvas.width = Math.round(el.videoWidth * scale);
            canvas.height = Math.round(el.videoHeight * scale);
            ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
            const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(pixels.data, pixels.width, pixels.height, {
              inversionAttempts: "dontInvert",
            });
            if (code) callback.current(code.data);
          }
          timer = setTimeout(scan, 300);
        };
        scan();
      } catch (e) {
        if (!cancelled) {
          setError(
            e.name === "NotAllowedError"
              ? "Bạn chưa cho phép camera. Hãy cấp quyền hoặc tải ảnh QR."
              : e.message,
          );
          setCamera(false);
        }
      }
    })();
    return () => {
      cancelled = true;
      clearTimeout(timer);
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, [camera]);
  async function readImages(event) {
    setError("");
    try {
      const { default: jsQR } = await import("jsqr");
      for (const image of Array.from(event.target.files || [])) {
        if (!alive.current) return;
        if (image.size > 15 * 1024 * 1024)
          throw new Error("Ảnh quá lớn, hãy chọn ảnh dưới 15 MB.");
        const bitmap = await createImageBitmap(image);
        try {
          const scale = Math.min(
            1,
            1600 / Math.max(bitmap.width, bitmap.height),
          );
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(bitmap.width * scale);
          canvas.height = Math.round(bitmap.height * scale);
          const ctx = canvas.getContext("2d", { willReadFrequently: true });
          ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
          const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(pixels.data, pixels.width, pixels.height);
          if (!code)
            throw new Error(
              "Chưa đọc được QR trong ảnh. Chọn ảnh nét, đầy đủ bốn mép mã.",
            );
          if (alive.current) await callback.current(code.data);
        } finally {
          bitmap.close();
        }
      }
    } catch (e) {
      if (alive.current) setError(e.message);
    }
    event.target.value = "";
  }
  return (
    <div className="transfer-reader">
      <div className="transfer-actions">
        <Button
          onClick={() => {
            setError("");
            setCamera(!camera);
          }}
        >
          {camera ? "Tắt camera" : "Bật camera quét QR"}
        </Button>
        <Button onClick={() => file.current.click()}>Chọn ảnh QR</Button>
        <input
          ref={file}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={readImages}
        />
      </div>
      {camera && (
        <video
          ref={video}
          autoPlay
          muted
          playsInline
          aria-label="Camera quét tiến trình"
        />
      )}
      {error && <p role="alert">{error}</p>}
      <small>
        Mở Hành trình trên máy nhận → Nhập tiến trình → quét đủ các QR. Không
        gửi ảnh lên máy chủ.
      </small>
    </div>
  );
}
