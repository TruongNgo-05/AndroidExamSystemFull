import Icon from "../../../shared/components/Icon.jsx";
import { useLearning } from "../context/LearningProvider.jsx";
import { useLocalDay } from "../utils/useLocalDay.js";
import { Button } from "antd";
import { currentStreak, levelInfo, fireStatus, fireTheme } from "../utils/progress.js";
export default function ProgressStrip() {
  const { progress, claim } = useLearning();
  const day = useLocalDay();
  const level = levelInfo(progress.xp);
  const status = fireStatus(progress);
  const theme = fireTheme(currentStreak(progress));
  return (
    <div className="campus-progress" aria-label="Tiến trình học tập">
      <Button
        type="primary"
        onClick={claim}
        disabled={progress.lastClaimDay === day}
      >
        {progress.lastClaimDay === day
          ? "🔥 Đã nhận lửa"
          : status.canRestore ? "🔥 Khôi phục và nhận lửa" : "🔥 Nhận lửa hôm nay"}
      </Button>
      <span className={`fire-counter fire-${theme.color}`} title={theme.name}>
        <Icon name="fire" className="fire-flame" fill="currentColor" aria-hidden="true" /> <b>{currentStreak(progress)}</b> ngày nhận lửa · {theme.name}
      </span>
      <span>
        💎 <b>{progress.gems}</b> ngọc
      </span>
      <span>
        ⚡ <b>{progress.xp}</b> XP
      </span>
      <span>
        🌱 Cấp <b>{level.level}</b>
        <progress aria-label="XP lên cấp" max="100" value={level.current} />
      </span>
      <small className="fire-help">Còn {status.remaining}/3 lượt khôi phục tháng này.
        {status.missed > 0 && (status.canRestore ? ` Bỏ lỡ ${status.missed} ngày: dùng ${status.missed} lượt để giữ chuỗi ${progress.streak} ngày.` : " Đã vượt lượt khôi phục: nhận lửa để bắt đầu chuỗi mới.")}
      </small>
    </div>
  );
}
