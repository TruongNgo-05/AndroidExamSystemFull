import { useEffect, useState } from "react";
import { Alert, Button } from "antd";
import { startVersionMonitor } from "../utils/versionMonitor.js";

export default function UpdateNotice({ onReload, takingExam = false }) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    return startVersionMonitor({
      currentVersion: __APP_BUILD_VERSION__,
      versionUrl: `${import.meta.env.BASE_URL}version.json`,
      onUpdate: () => setAvailable(true),
    });
  }, []);

  // Keep checking and remember updates, but show nothing during an attempt.
  if (!available || takingExam) return null;
  return (
    <div className="app-update-notice" role="status" aria-live="polite">
      <Alert
        type="info"
        showIcon
        message="Có bản cập nhật mới"
        description="Vui lòng tải lại trang để sử dụng phiên bản mới nhất."
        action={<Button type="primary" onClick={onReload}>Tải lại trang</Button>}
      />
    </div>
  );
}
