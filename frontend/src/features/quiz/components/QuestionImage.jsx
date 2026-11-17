import { useEffect, useRef, useState } from "react";
import { asset } from "../utils/quiz.js";
export default function QuestionImage({ question }) {
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const dialog = useRef(null);
  useEffect(() => {
    setFailed(false);
    setZoom(1);
    dialog.current?.close();
  }, [question.image]);
  if (!question.image) return null;
  const src = asset(question.image),
    alt = question.imageAlt || "Ảnh minh họa câu hỏi";
  if (failed || !src)
    return (
      <p role="status">Không tải được ảnh. Kiểm tra file: {question.image}</p>
    );
  return (
    <figure className="question-image">
      <button
        className="image-button"
        onClick={() => dialog.current.showModal()}
        aria-label="Phóng to ảnh"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </button>
      <figcaption>Nhấn vào ảnh để phóng to</figcaption>
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label="Ảnh phóng to"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current.close();
        }}
      >
        <div className="actions">
          <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}>
            Thu nhỏ −
          </button>
          <button onClick={() => setZoom((z) => Math.min(3, z + 0.25))}>
            Phóng to +
          </button>
          <button onClick={() => setZoom(1)}>100%</button>
          <button autoFocus onClick={() => dialog.current.close()}>
            Đóng ✕
          </button>
        </div>
        <div className="image-scroll">
          <img
            src={src}
            alt={alt}
            style={{ width: `${zoom * 100}%`, maxWidth: "none" }}
          />
        </div>
      </dialog>
    </figure>
  );
}
