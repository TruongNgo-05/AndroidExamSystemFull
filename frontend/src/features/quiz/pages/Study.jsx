import { useLearning } from "../../gamification/context/LearningProvider.jsx";
import { useLocalDay } from "../../gamification/utils/useLocalDay.js";
import { Button, Input } from "antd";
import { useMemo, useState } from "react";
import { normalize } from "../utils/quiz.js";
import QuestionImage from "../components/QuestionImage.jsx";
export default function Study({ exam, onBack }) {
  const { progress, reward } = useLearning();
  const day = useLocalDay();
  const rewardId =
    exam.schoolId && exam.schoolId !== "hubt"
      ? `${exam.schoolId}/${exam.id}`
      : String(exam.id);
  const done = progress.events.includes(`exam:${rewardId}:${day}`);
  const [keyword, setKeyword] = useState("");
  const filtered = useMemo(
    () =>
      exam.questions
        .map((q, i) => ({ ...q, number: i + 1 }))
        .filter((q) =>
          normalize(q.q + " " + q.o.join(" ")).includes(normalize(keyword)),
        ),
    [exam, keyword],
  );
  return (
    <>
      <Button onClick={onBack}>← Quay lại cài đặt</Button>
      <h1>{exam.title}</h1>
      <p className="muted">Ôn luyện · Đáp án đúng được đánh dấu màu xanh.</p>
      <Input
        className="full-input"
        aria-label="Tìm câu hỏi"
        placeholder="Tìm nội dung câu hỏi hoặc đáp án…"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p role="status">
        {filtered.length} / {exam.questions.length} câu
      </p>
      {filtered.map((q) => (
        <article
          className="panel question study-question"
          key={q.number}
          onCopy={(event) => event.preventDefault()}
          onContextMenu={(event) => event.preventDefault()}
        >
          <span className="eyebrow">CÂU {q.number}</span>
          <p className="question-text">{q.q}</p>
          <QuestionImage question={q} />
          <div className="options">
            {q.o.map((o, j) => (
              <div key={j} className={`option ${j === q.a ? "correct" : ""}`}>
                <b>{"ABCD"[j]}</b>
                <span>{o}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
      {!filtered.length && <p>Không tìm thấy câu hỏi phù hợp.</p>}
      <section className="panel study-completion">
        <h2>Ôn xong rồi? Ghi nhận một bước tiến.</h2>
        <p>
          Nhấn hoàn thành để nhận 25 XP và 3 ngọc ở lượt đầu của đề này trong
          ngày. Ôn luyện và thi dùng chung hạn thưởng; lửa chỉ tăng khi nhấn
          Nhận lửa.
        </p>
        <Button
          type="primary"
          disabled={done}
          onClick={() => reward({ kind: "exam", id: rewardId })}
        >
          {done ? "Đã nhận thưởng đề này hôm nay" : "Hoàn thành lượt ôn tập"}
        </Button>
        {done && (
          <p role="status">
            Tiến trình đã lưu. Bạn vẫn có thể tiếp tục ôn tập.
          </p>
        )}
      </section>
    </>
  );
}
