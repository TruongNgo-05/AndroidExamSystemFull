import { useState } from "react";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { useLearning } from "../context/LearningProvider.jsx";
import { dayKey, levelInfo } from "../utils/progress.js";
import { GAMES } from "../../games/data/games.js";

export default function LearnerProfile({ activityOnly = false }) {
  const { progress, update } = useLearning();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(progress.displayName);

  const level = levelInfo(progress.xp);
  const games = progress.gameHistory.length;
  const correct = progress.gameHistory.reduce((n, s) => n + s.correct, 0);

  const titleFor = (a) =>
    a.kind === "fire"
      ? "Nhận lửa hằng ngày"
      : a.kind === "game"
        ? GAMES.find((g) => g.id === a.id)?.name || "Chơi cùng Jeli"
        : a.kind === "exam"
          ? "Hoàn thành ôn tập / thi thử"
          : "Hoạt động trước đây";

  function exportData() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            app: "JLer Campus",
            exportedAt: new Date().toISOString(),
            progress,
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jler-tien-trinh-${dayKey()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  if (activityOnly) {
    return (
      <section className="activity-panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">BẠN ĐÃ TIẾN BỘ NHƯ THẾ NÀO?</span>
            <h2>Dấu chân học tập</h2>
          </div>
          <Link to="/tro-choi">Chơi thêm →</Link>
        </div>

        {progress.activity.length ? (
          <ol>
            {progress.activity
              .slice(-6)
              .reverse()
              .map((a, i) => (
                <li key={`${a.kind}:${a.id}:${a.day}:${i}`}>
                  <span className="activity-dot" aria-hidden="true" />
                  <div>
                    <b>{titleFor(a)}</b>
                    <small>{a.day}</small>
                  </div>
                  <span>
                    +
                    {a.xp ??
                      (a.kind === "lesson"
                        ? 40
                        : a.kind === "exam"
                          ? 25
                          : a.kind === "bug"
                            ? 15
                            : 10)}{" "}
                    XP
                  </span>
                </li>
              ))}
          </ol>
        ) : (
          <p>
            Ôn tập một đề hoặc chơi cùng Jeli để thấy dấu chân đầu tiên của bạn.
          </p>
        )}
      </section>
    );
  }

  return (
    <section className="learner-profile">
      <div className="profile-heading">
        <div className="profile-avatar" aria-hidden="true">
          {progress.displayName[0]?.toUpperCase() || "J"}
        </div>

        <div>
          <span className="eyebrow">HỒ SƠ TRÊN TRÌNH DUYỆT NÀY</span>
          <h2>{progress.displayName}</h2>
          <p>
            {level.title} · Cấp {level.level}
          </p>
        </div>

        <Button
          onClick={() => {
            setName(progress.displayName);
            setEditing(!editing);
          }}
        >
          Đổi tên
        </Button>
      </div>

      {editing && (
        <form
          className="profile-edit"
          onSubmit={(e) => {
            e.preventDefault();
            update({ displayName: name.trim().slice(0, 40) || "Bạn học" });
            setEditing(false);
          }}
        >
          <Input
            maxLength={40}
            aria-label="Tên hiển thị"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button htmlType="submit" type="primary">
            Lưu tên
          </Button>
        </form>
      )}

      <div className="level-meter">
        <div>
          <b>Cấp {level.level}</b>
          <span>
            Còn {level.remaining} XP lên cấp {level.next}
          </span>
        </div>

        <progress
          aria-label="Tiến trình lên cấp"
          value={level.current}
          max="100"
        />

        <small>
          {level.current}/100 XP của cấp hiện tại · Tổng {progress.xp} XP
        </small>
      </div>

      <div className="profile-stats">
        <div>
          <b>{progress.activity.filter((a) => a.kind === "exam").length}</b>
          <span>Lượt ôn có thưởng</span>
        </div>
        <div>
          <b>{correct}</b>
          <span>Câu game đúng</span>
        </div>
        <div>
          <b>{games}</b>
          <span>Lượt game đã lưu</span>
        </div>
        <div>
          <b>{progress.bestStreak || progress.streak}</b>
          <span>Chuỗi tốt nhất</span>
        </div>
      </div>

      <div className="profile-bottom">
        <small>
          Trình duyệt khác có hồ sơ riêng. Các tab cùng địa chỉ web dùng chung
          tiến trình.
        </small>
        <Button onClick={exportData}>Tải bản sao tiến trình</Button>
      </div>
    </section>
  );
}