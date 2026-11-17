import ProgressTransfer from "./ProgressTransfer.jsx";
import LearnerProfile from "./LearnerProfile.jsx";
import ProgressStrip from "./ProgressStrip.jsx";
import { useLocalDay } from "../utils/useLocalDay.js";
import { Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLearning } from "../context/LearningProvider.jsx";
import { ITEMS, jeliEvolution, levelInfo } from "../utils/progress.js";
import jeli from "../../../assets/images/linhvatjler.gif";

export default function JourneyPage() {
  const { progress, buy, update, storageError } = useLearning();
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#mini-game") {
      navigate("/tro-choi", { replace: true });
    }
  }, [hash, navigate]);

  const day = useLocalDay();
  const today = progress.activity.filter((a) => a.day === day);
  const level = levelInfo(progress.xp);
  const evolution = jeliEvolution(level.level);
  const equipped = ITEMS.find((i) => i.id === progress.equipped);

  const quests = [
    {
      name: "Nhận lửa hôm nay",
      done: progress.lastClaimDay === day,
      link: "/hanh-trinh",
      text: "Nhấn nút Nhận lửa · 10 XP và 1 ngọc/ngày",
    },
    {
      name: "Thử sức với một đề thi",
      done: today.some((a) => a.kind === "exam"),
      link: "/?tab=exams#exam-library",
      text: "25 XP · 3 ngọc cho lần nộp đầu mỗi đề/ngày",
    },
    {
      name: "Chơi một trò cùng Jeli",
      done: today.some((a) => a.kind === "game"),
      link: "/tro-choi",
      text: "30 XP · 4 ngọc ở lượt đủ điều kiện đầu mỗi trò/ngày",
    },
  ];

  return (
    <section className="campus-page">
      <span className="eyebrow">HÀNH TRÌNH CỦA BẠN</span>
      <h1>Ôn tập, bật cười. Lên cấp cùng Jeli.</h1>

      <ProgressStrip />
      <LearnerProfile />

      {storageError && <p role="alert">{storageError}</p>}

      <div className="journey-grid">
        <div className={`jeli-room jeli-evolution fire-${evolution.color}`}>
          <span className="jeli-stage">
            {evolution.icon} {evolution.name} · Cấp {level.level}
          </span>

          <span className="jeli-accessory" aria-label={equipped?.name}>
            {equipped?.emoji || "🌱"}
          </span>

          <img src={jeli} alt="Jeli đồng hành học tập" />

          <p className="jeli-next">
            {evolution.next
              ? `Lên cấp ${evolution.next.level} để mở ${evolution.next.name}`
              : "Bạn đã mở hình thái huyền thoại!"}
          </p>

          <h2>{equipped?.name || "Tân binh mê học"}</h2>
          <p>
            {equipped?.line ||
              "Hôm nay chưa hiểu? Không sao. Não đang tải bản cập nhật đấy!"}
          </p>
        </div>

        <div className="quest-panel">
          <h2>Nhiệm vụ hôm nay</h2>

          {quests.map((q) => (
            <Link className="quest-row" to={q.link} key={q.name}>
              <span>{q.done ? "✅" : "🎯"}</span>
              <div>
                <b>{q.name}</b>
                <small>{q.text}</small>
              </div>
              <span>→</span>
            </Link>
          ))}

          <p>
            Nhấn Nhận lửa mỗi ngày để giữ chuỗi. Ôn thi và chơi trò chơi
            mang lại XP và ngọc; dùng ngọc đổi phụ kiện Jeli.
          </p>

          <h3>Huy hiệu của bạn</h3>

          <div className="badges">
            {[
              {
                name: "Bước đầu tiên",
                icon: "🌱",
                done:
                  progress.completed.length >= 1 ||
                  progress.events.some((e) => /^(exam|game):/.test(e)),
              },
              {
                name: "Bộ ba niềm vui",
                icon: "📚",
                done:
                  progress.completed.length >= 3 ||
                  new Set(
                    progress.events
                      .filter((e) => e.startsWith("game:"))
                      .map((e) => e.split(":")[1]),
                  ).size >= 3,
              },
              ...[7, 30, 90, 365].map((days) => ({
                name: `${days} ngày giữ lửa`,
                icon: "🔥",
                done: progress.bestStreak >= days,
              })),
              {
                name: "100 XP đầu tiên",
                icon: "⚡",
                done: progress.xp >= 100,
              },
              {
                name: "Ba ngày đều đặn",
                icon: "🔥",
                done: (progress.bestStreak || progress.streak) >= 3,
              },
            ].map((b) => (
              <span
                key={b.name}
                className={b.done ? "badge-earned" : "badge-locked"}
              >
                {b.icon} {b.name}
                {b.done ? " ✓" : " · Chưa mở"}
              </span>
            ))}
          </div>
        </div>
      </div>
      <LearnerProfile activityOnly />
      <div className="section-heading">
        <div>
          <span className="eyebrow">CỬA HÀNG JELI</span>
          <h2>Ngọc để làm gì? Đổi một chút vui.</h2>
        </div>
      </div>

      <div className="course-grid">
        {ITEMS.map((item) => {
          const owned = progress.owned.includes(item.id);

          return (
            <div className="course-card" key={item.id}>
              <span className="shop-emoji">{item.emoji}</span>
              <h3>{item.name}</h3>
              <p>{item.line}</p>

              <Button
                type={progress.equipped === item.id ? "primary" : "default"}
                disabled={
                  owned
                    ? progress.equipped === item.id
                    : progress.gems < item.cost
                }
                onClick={() =>
                  owned ? update({ equipped: item.id }) : buy(item.id)
                }
              >
                {owned
                  ? progress.equipped === item.id
                    ? "Đang dùng"
                    : "Trang bị"
                  : `Đổi ${item.cost} 💎`}
              </Button>
            </div>
          );
        })}
      </div>


      <ProgressTransfer />

      <p className="campus-muted">
        Tiến trình lưu trên trình duyệt này. Dùng mã hoặc QR ở trên để
        chuyển sang thiết bị khác. Các phần thưởng là vật phẩm trong
        ứng dụng.
      </p>
    </section>
  );
}