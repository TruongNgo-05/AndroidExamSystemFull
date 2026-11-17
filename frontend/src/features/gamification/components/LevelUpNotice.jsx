import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import { useLearning } from "../context/LearningProvider.jsx";
import { levelInfo, jeliEvolution, streakMilestone, fireTheme } from "../utils/progress.js";
import jeli from "../../../assets/images/linhvatjler.gif";
export default function LevelUpNotice() {
  const { progress } = useLearning();
  const previous = useRef(progress);
  const [notice, setNotice] = useState(null);
  useEffect(() => {
    const reset = () => { previous.current = null; setNotice(null); };
    window.addEventListener("jler:restore", reset);
    return () => window.removeEventListener("jler:restore", reset);
  }, []);
  useEffect(() => {
    const old = previous.current;
    previous.current = progress;
    if (!old) return;
    const level = levelInfo(progress.xp);
    const leveled = level.level > levelInfo(old.xp).level;
    const milestone = progress.lastClaimDay !== old.lastClaimDay && progress.streak > old.streak ? streakMilestone(progress.streak) : "";
    if (leveled || milestone) setNotice({ level, leveled, milestone, evolution: jeliEvolution(level.level), theme: fireTheme(progress.streak) });
  }, [progress]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 10000);
    return () => clearTimeout(timer);
  }, [notice]);
  return (
    <Modal open={!!notice} onCancel={() => setNotice(null)} centered width={480}
      title="Chúc mừng bạn!" footer={<Button type="primary" onClick={() => setNotice(null)}>Tiếp tục cùng Jeli</Button>}>
      {notice && <div className={`jeli-celebration fire-${notice.milestone ? notice.theme.color : notice.evolution.color}`} role="status">
        <div className="celebration-sparks" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ "--i": i }} />)}</div>
        <img src={jeli} alt="Jeli ăn mừng cùng bạn" />
        {notice.leveled && <><h2>Lên cấp {notice.level.level} rồi!</h2><p>{notice.evolution.icon} {notice.evolution.name} · {notice.level.title}</p></>}
        {notice.milestone && <><h2>🔥 {notice.milestone}!</h2><p>{notice.theme.name} đã bừng sáng. Jeli tự hào về bạn!</p></>}
        <p>Não vừa cập nhật phiên bản xịn hơn. Cho mình một tràng pháo tay nào! 👏</p>
      </div>}
    </Modal>
  );
}
