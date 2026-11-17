import { useEffect, useState } from "react";
import loadingGif from "../../assets/images/loading.gif";

export default function LoadingState({ label = "Đang tải…", compact = false }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 300);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <div className={`loading-state ${compact ? "compact" : ""}`} role="status" aria-live="polite" aria-busy="true">
      {visible && <img src={loadingGif} alt="" />}
      <p>{label}</p>
      {visible && <small>Chờ mình một chút nhé.</small>}
    </div>
  );
}
