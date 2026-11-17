import { Radio, Checkbox } from "antd";

export default function LearningModeSettings({ settings, onChange }) {
  return (
    <>
          <Radio.Group
            aria-label="Chế độ học"
            value={settings.mode}
            onChange={(e) =>
              onChange({
                ...settings,
                mode: e.target.value,
              })
            }
          >
            <Radio className="mode-choice" value="study">
              <strong>Ôn luyện kiến thức</strong>

              <small>
                Xem toàn bộ câu hỏi và đáp án, tìm nhanh nội dung cần ôn.
              </small>
            </Radio>

            <Radio className="mode-choice" value="practice">
              <strong>Thi thử – chọn lại đáp án</strong>
              <small>
                Xem đáp án đúng/sai sau khi chọn. Làm lại các câu sai và câu
                chưa chọn; bỏ những câu đã đúng.
              </small>
            </Radio>

            <Radio className="mode-choice" value="exam">
              <strong>Thử sức với bài thi</strong>

              <small>
                Tự trả lời, theo dõi tiến trình và xem kết quả sau khi nộp bài.
              </small>
            </Radio>
          </Radio.Group>

          {settings.mode !== "study" && (
            <div className="exam-settings">
              <Checkbox
                checked={settings.random}
                onChange={(e) =>
                  onChange({
                    ...settings,
                    random: e.target.checked,
                  })
                }
              >
                Trộn thứ tự câu hỏi
              </Checkbox>

              <Checkbox
                checked={settings.autoNext}
                onChange={(e) =>
                  onChange({
                    ...settings,
                    autoNext: e.target.checked,
                  })
                }
              >
                Tự chuyển câu sau khi chọn đáp án
              </Checkbox>
            </div>
          )}

    </>
  );
}
