import { Button } from "antd";

export default function QuestionNavigator({ session, current, stats, practice, paused, confirm, onNavigate, onRetryWrong, onSubmit }) {
  return (
        <aside className="panel">
          <h2>Danh sách câu</h2>

          <div className="question-grid">
            {session.map((q, i) => (
              <Button
                key={i}
                aria-label={`Câu ${i + 1}`}
                aria-current={i === current ? "step" : undefined}
                className={`${
                  q.picked !== null
                    ? q.picked === q.a
                      ? "correct"
                      : "wrong"
                    : q.skipped
                      ? "skipped"
                      : ""
                } ${i === current ? "current" : ""}`}
                onClick={() => onNavigate(i)}
              >
                {i + 1}
              </Button>
            ))}
          </div>


          {practice && (
            <div className="practice-retry-actions">
              <Button
                type="primary"
                disabled={!(stats.wrong + stats.unanswered) || paused || Boolean(confirm)}
                onClick={onRetryWrong}
              >
                Làm lại câu sai / chưa chọn ({stats.wrong + stats.unanswered})
              </Button>

            </div>
          )}

          <Button
            className="primary"
            onClick={onSubmit}
          >
            Nộp bài
          </Button>
        </aside>
  );
}
