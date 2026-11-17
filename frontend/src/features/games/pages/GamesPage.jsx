import GameCards from "../components/GameCards.jsx";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Progress } from "antd";
import { GAMES, TOPICS } from "../data/games.js";
import {
  bankFor,
  startGame,
  answerGame,
  nextQuestion,
  useLifeline,
  stopGame,
  resetBank,
} from "../utils/gameEngine.js";
import { useLearning } from "../../gamification/context/LearningProvider.jsx";
import ProgressStrip from "../../gamification/components/ProgressStrip.jsx";
import jeli from "../../../assets/images/linhvatjler.gif";
export default function GamesPage({ gameId, topicId }) {
  const { progress, mutate, storageError } = useLearning(),
    navigate = useNavigate();
  const [now, setNow] = useState(Date.now());
  const game = GAMES.find((g) => g.id === gameId),
    topic = TOPICS[gameId]?.find((t) => t.id === topicId);
  const s = progress.gameSession;
  const active = s && s.gameId === gameId && s.topicId === topicId ? s : null;
  useEffect(() => {
    setNow(Date.now());
    if (active?.status !== "playing") return;
    const timer = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(timer);
  }, [active?.id, active?.status, active?.deadline]);
  useEffect(() => {
    if (active?.status === "playing" && now >= active.deadline)
      mutate((p) => answerGame(p, active.id, null, Date.now()));
  }, [now, active?.id, active?.status, active?.deadline]);
  const begin = () => mutate((p) => startGame(p, gameId, topicId));
  if (!game)
    return (
      <section className="campus-page games-page">
        <span className="eyebrow">NGHỈ MỘT CHÚT · VUI MỘT CHÚT</span>
        <h1>Não đang tải… chơi cùng Jeli!</h1>
        <p>
          Đố mẹo, chính tả, suy luận và phản xạ. Chọn trò rồi chọn chủ đề. Câu
          trả lời có thời hạn nhé!
        </p>
        <ProgressStrip />
        <GameCards />
        {s && s.status !== "finished" && (
          <Link
            className="campus-button"
            to={`/tro-choi/${s.gameId}/${s.topicId}`}
          >
            Tiếp tục lượt đang chơi →
          </Link>
        )}
      </section>
    );
  if (!topic)
    return (
      <section className="campus-page games-page">
        <Link to="/tro-choi">← Các trò chơi</Link>
        <h1>
          {game.emoji} {game.name}
        </h1>
        <p>{game.description}</p>
        <div className="topic-grid">
          {TOPICS[game.id].map((t) => {
            const left = bankFor(game.id, t.id).filter(
              (q) =>
                !(progress.gameSeen[`${game.id}/${t.id}`] || []).includes(q.id),
            ).length;
            return (
              <Link
                className="game-card"
                key={t.id}
                to={`/tro-choi/${game.id}/${t.id}`}
              >
                <span className="game-emoji">{t.emoji}</span>
                <h3>{t.name}</h3>
                <p>
                  {left} câu chưa chơi · {game.seconds} giây/câu
                </p>
                <b>Vào chơi →</b>
              </Link>
            );
          })}
        </div>
      </section>
    );
  const bank = bankFor(gameId, topicId),
    remaining = bank.filter(
      (q) => !(progress.gameSeen[`${gameId}/${topicId}`] || []).includes(q.id),
    ).length;
  if (!active)
    return (
      <section className="campus-page games-page game-lobby">
        <Link to={`/tro-choi/${gameId}`}>← Chủ đề</Link>
        <img className="game-jeli" src={jeli} alt="Jeli chờ bạn" />
        <h1>{game.name}</h1>
        <h2>
          {topic.emoji} {topic.name}
        </h2>
        <p>{game.description}</p>
        <p>
          {game.seconds} giây/câu · {remaining} câu chưa chơi. Tối đa{" "}
          {game.rounds} câu mỗi lượt.
        </p>
        <p>
          Trả lời đúng ít nhất một câu để nhận 30 XP và 4 ngọc ở lượt kết thúc
          đầu tiên của trò này trong ngày. Lượt sau vẫn chơi được.
        </p>
        {game.id === "millionaire" && (
          <p>
            Mốc 5 · 10 · 15 câu đúng liên tiếp. Trả lời sai sẽ dừng lượt; mốc đã
            đạt được giữ trong kết quả. Điểm là điểm trò chơi, không phải tiền
            thật.
          </p>
        )}
        {s && s.status !== "finished" && (
          <p>
            Lượt cũ đang chờ ở trò {GAMES.find((g) => g.id === s.gameId)?.name}.
            Bắt đầu lượt này sẽ thay lượt cũ; câu đã xem vẫn được lưu.
          </p>
        )}
        {remaining ? (
          <Button type="primary" size="large" onClick={begin}>
            Bắt đầu chơi
          </Button>
        ) : (
          <>
            <p>Bạn đã xem hết câu của chủ đề này.</p>
            <Button
              onClick={() => mutate((p) => resetBank(p, gameId, topicId))}
            >
              Mở vòng câu hỏi mới
            </Button>
          </>
        )}
      </section>
    );
  const q = active.queue[active.index],
    last = active.answers.at(-1),
    seconds = Math.min(
      game.seconds,
      Math.max(0, Math.ceil((active.deadline - now) / 1000)),
    ),
    locked = active.status !== "playing";
  return (
    <section className="campus-page games-page">
      <div className="game-top">
        <Link to={`/tro-choi/${gameId}`}>← Chủ đề</Link>
        <span>
          {game.emoji} {game.name} · {topic.name}
        </span>
        <Button
          disabled={active.status === "finished"}
          onClick={() => mutate((p) => stopGame(p, active.id))}
        >
          Dừng lượt
        </Button>
      </div>
      {storageError && <p role="alert">{storageError}</p>}
      {active.status === "finished" ? (
        <div className="game-result">
          <img className="game-jeli" src={jeli} alt="Jeli ăn mừng" />
          <span className="eyebrow">LƯỢT CHƠI ĐÃ LƯU</span>
          <h1>
            {active.answers.some((a) => a.correct)
              ? "Não vừa lên sóng! 🎉"
              : "Não đang khởi động, thử lại nhé!"}
          </h1>
          <h2>{active.score} điểm</h2>
          <p>
            {active.answers.filter((a) => a.correct).length}/
            {active.answers.length} câu đúng
            {gameId === "millionaire"
              ? ` · Mốc giữ lại: ${active.checkpoint}/15`
              : ""}
          </p>
          {last && (
            <p>
              Đáp án câu cuối: <b>{q.o[q.a]}</b> · {q.e}
            </p>
          )}
          <ProgressStrip />
          <p>
            Đã lưu kết quả. XP và ngọc chỉ trao một lượt đủ điều kiện mỗi
            trò/ngày.
          </p>
          <div className="game-actions">
            {remaining ? (
              <Button type="primary" onClick={begin}>
                Chơi tiếp · {remaining} câu mới
              </Button>
            ) : (
              <Button
                onClick={() =>
                  mutate((p) => ({
                    ...resetBank(p, gameId, topicId),
                    gameSession: null,
                  }))
                }
              >
                Hết câu · Mở vòng mới
              </Button>
            )}
            <Link className="campus-button" to="/tro-choi">
              Chọn trò khác
            </Link>
            <Link to="/hanh-trinh">Huy hiệu & phụ kiện Jeli →</Link>
          </div>
        </div>
      ) : (
        <>
          <div className="game-scoreboard">
            <b>
              Câu {active.index + 1}/{active.queue.length}
            </b>
            <span>⭐ {active.score} điểm</span>
            {["vietnamese", "detective"].includes(gameId) && (
              <span aria-label={`${active.lives} trái tim`}>
                {"❤️".repeat(active.lives)}
              </span>
            )}
            {gameId === "reverse" && <span>Combo ×{active.combo}</span>}
            <strong role="timer" className={seconds <= 5 ? "timer-urgent" : ""}>
              {locked ? "Đã chốt" : `${seconds}s`}
            </strong>
          </div>
          <Progress
            percent={locked ? 100 : (seconds / game.seconds) * 100}
            showInfo={false}
            strokeColor={seconds <= 5 ? "#e65d70" : "#12ada7"}
          />
          {gameId === "millionaire" && (
            <div className="milestones">
              {[5, 10, 15].map((n) => (
                <span
                  key={n}
                  className={active.checkpoint >= n ? "achieved" : ""}
                >
                  {active.checkpoint >= n ? "✅" : "🔒"} Mốc {n}
                </span>
              ))}
            </div>
          )}
          <div className="question-panel">
            <span className="eyebrow">
              {gameId === "reverse"
                ? "CHỌN NHẬN ĐỊNH SAI"
                : "ĐỌC KỸ RỒI CHỐT NHÉ"}
            </span>
            <h2>{q.q}</h2>
            <div className="game-options">
              {q.o.map((option, i) => (
                <button
                  key={`${q.id}-${i}`}
                  disabled={locked || active.eliminated.includes(i)}
                  className={
                    locked
                      ? i === q.a
                        ? "correct"
                        : last?.pick === i
                          ? "incorrect"
                          : ""
                      : ""
                  }
                  onClick={() =>
                    mutate((p) => answerGame(p, active.id, i, Date.now()))
                  }
                >
                  <b>{String.fromCharCode(65 + i)}</b>
                  <span>
                    {active.eliminated.includes(i) ? "Đã loại" : option}
                  </span>
                </button>
              ))}
            </div>
            {gameId === "millionaire" && (
              <div className="lifelines">
                {[
                  ["half", "½ 50/50"],
                  ["phone", "☎ Gọi người thân"],
                  ["audience", "👥 Hỏi khán giả"],
                ].map(([id, label]) => (
                  <Button
                    key={id}
                    disabled={locked || !!active.lifelines[id]}
                    onClick={() => mutate((p) => useLifeline(p, active.id, id))}
                  >
                    {label}
                    {active.lifelines[id] ? " · Đã dùng" : ""}
                  </Button>
                ))}
              </div>
            )}
            {active.hint?.text && (
              <p role="status" className="game-hint">
                {active.hint.text}
              </p>
            )}
            {active.hint?.shares && (
              <div
                className="audience-poll"
                aria-label="Bình chọn khán giả mô phỏng"
              >
                {active.hint.shares.map((n, i) => (
                  <div key={i}>
                    <b>
                      {String.fromCharCode(65 + i)} · {n}%
                    </b>
                    <progress value={n} max={100} />
                  </div>
                ))}
                <small>
                  Khán giả và cuộc gọi được mô phỏng, không liên hệ người thật.
                </small>
              </div>
            )}
            {locked && (
              <div className="game-feedback" role="status">
                <h3>
                  {last?.correct
                    ? "Chuẩn! Jeli xin một tràng vỗ tay 👏"
                    : last?.pick == null
                      ? "Hết giờ rồi, não vừa đi lấy trà sữa 🧋"
                      : "Ôi, Jeli cũng suýt dính bẫy 🤭"}
                </h3>
                <p>{q.e}</p>
                <Button
                  type="primary"
                  onClick={() => mutate((p) => nextQuestion(p, active.id))}
                >
                  Câu tiếp theo →
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}
