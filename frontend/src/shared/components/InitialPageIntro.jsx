import { useEffect, useRef, useState } from "react";
import jeliImage from "../../assets/images/linhvatjler.gif";
import BrandLogo from "./BrandLogo.jsx";
import { startIntro } from "../utils/introLifecycle.js";
export default function InitialPageIntro({
  children,
  enabled = true,
  label = "Jeli đang chuẩn bị không gian học tập…",
}) {
  const [visible, setVisible] = useState(enabled),
    [leaving, setLeaving] = useState(false),
    [progress, setProgress] = useState(8);
  const lifecycle = useRef(null);
  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      lifecycle.current = null;
      return;
    }
    setVisible(true);
    setLeaving(false);
    setProgress(8);
    const image = new Image();
    const ready = new Promise((resolve) => {
      image.onload = image.onerror = resolve;
      image.src = jeliImage;
      if (image.complete) resolve();
    });
    lifecycle.current = startIntro({
      ready,
      onProgress: setProgress,
      onLeaving: () => setLeaving(true),
      onFinish: () => setVisible(false),
      fade: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 250,
    });
    return () => {
      lifecycle.current.dispose();
      image.onload = image.onerror = null;
    };
  }, [enabled]);
  const showIntro = enabled && visible;
  // Avoid locking document.body: it also affects route changes and Blog dialogs.
  return (
    <>
      <div inert={showIntro ? true : undefined} aria-busy={showIntro}>
        {children}
      </div>
      {showIntro && (
        <div
          className={`initial-page-intro${leaving ? " is-leaving" : ""}`}
          role="status"
          aria-live="polite"
        >
          <div className="initial-page-intro-content">
            <img
              src={jeliImage}
              alt="Jeli đang chuẩn bị không gian học tập"
              width="150"
              height="150"
            />
            <BrandLogo />
            <div
              className="initial-page-intro-track"
              role="progressbar"
              aria-label="Đang chuẩn bị trang"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <i style={{ transform: `scaleX(${progress / 100})` }} />
            </div>
            <p>{label}</p>
            <button
              type="button"
              className="intro-skip"
              onClick={() => lifecycle.current?.finish()}
            >
              Vào ngay →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
