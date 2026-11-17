import resultGif from "../../../assets/images/ketqua.gif";
import { Button } from "antd";
import { useState } from "react";
import { score } from "../utils/quiz.js";
import QuestionImage from "../components/QuestionImage.jsx";
export default function Result({ exam, session, mode = "exam", onRetry, onRestart, onHome }) {
  const [filter, setFilter] = useState("all");
  const stats = score(session);
  const missed = session.filter((q) => q.picked !== q.a);
  const shown = session
    .map((q, i) => ({ ...q, number: i + 1 }))
    .filter(
      (q) =>
        filter === "all" ||
        (filter === "correct" ? q.picked === q.a : q.picked !== q.a),
    );
  return (
    <>
      <section className="panel result-summary">
        <span className="eyebrow">KẾT QUẢ · {exam.title}</span>
        <div className="result-celebration">
          <div className="result-illustration"><img src={resultGif} alt="Nhân vật chúc mừng bạn hoàn thành bài thi" /></div>
          <div className="result-score">
            <span className="eyebrow">BẠN ĐÃ HOÀN THÀNH</span>
            <h1>{stats.pct}<span>%</span></h1>
            <p>Tỷ lệ trả lời đúng</p>
          </div>
        </div>
        <p>
          {stats.correct} đúng · {stats.wrong} sai · {stats.unanswered} chưa trả
          lời / {stats.total} câu
        </p>
        {mode === "practice" && (
          <p className="muted">
            Thi thử – chọn lại đáp án: kết quả sau các lượt làm lại, gồm cả câu đã đúng ở lượt trước.
          </p>
        )}
        <div className="actions">
          <Button onClick={onHome}>Về trang chủ</Button>
          <Button onClick={onRestart}>Làm lại toàn bộ</Button>
          {missed.length > 0 && (
            <Button className="primary" onClick={() => onRetry(missed)}>
              Làm lại câu sai / chưa trả lời ({missed.length})
            </Button>
          )}
        </div>
      </section>
      <div className="actions tabs">
        {[
          ["all", "Tất cả"],
          ["correct", "Câu đúng"],
          ["wrong", "Sai / chưa trả lời"],
        ].map(([id, name]) => (
          <Button
            key={id}
            className={filter === id ? "active" : ""}
            onClick={() => setFilter(id)}
          >
            {name}
          </Button>
        ))}
      </div>
      {shown.map((q) => (
        <article key={q.number} className="panel question">
          <b>
            Câu {q.number} ·{" "}
            {q.picked === q.a
              ? "Đúng"
              : q.picked === null
                ? "Chưa trả lời"
                : "Sai"}
          </b>
          <p className="question-text">{q.q}</p>
          <QuestionImage question={q} />
          <div className="options">
            {q.o.map((o, i) => {
              const isCorrect = i === q.a;
              const isSelected = q.picked === i;
              const isWrongSelected = isSelected && !isCorrect;

              return (
                <div
                  key={i}
                  className={`option ${isCorrect ? "correct" : ""} ${isWrongSelected ? "wrong" : ""}`}
                >
                  <b>{"ABCD"[i]}</b>
                  <span>{o}</span>
                  {isCorrect && <span>✓ Đáp án đúng</span>}
                  {isWrongSelected && <span>Đã chọn</span>}
                </div>
              );
            })}
          </div>
        </article>
      ))}
      {!shown.length && <p>Không có câu trong nhóm này.</p>}
    </>
  );
}
