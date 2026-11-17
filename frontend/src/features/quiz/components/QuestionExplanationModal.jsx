import { getCorrectExplanation, getWrongAnswers } from "../utils/explanationText.js";
import { Button, Modal, Typography, Divider } from "antd";
import jeliImage from "../../../assets/images/linhvatjler.gif";
import LoadingState from "../../../shared/components/LoadingState.jsx";

export default function QuestionExplanationModal({ item, current, aiLoading, aiExplanation, aiOpen, onClose }) {
  function renderWrongAnswers(text) {
    const wrongAnswers = getWrongAnswers(text, item?.a);

    if (!wrongAnswers.length) {
      return (
        <div
          style={{
            color: "#64748b",
            fontSize: 14,
            padding: "10px 0",
          }}
        >
          Không có đáp án sai cần giải thích.
        </div>
      );
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {wrongAnswers.map((answer, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "11px 13px",
              borderRadius: 9,
              background: "#fef2f2",
              border: "1px solid #fecaca",
            }}
          >
            {/* LETTER */}
            <div
              style={{
                flexShrink: 0,
                width: 29,
                height: 29,
                borderRadius: 7,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ef4444",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {answer.letter}
            </div>

            {/* CONTENT */}
            <div
              style={{
                flex: 1,
                fontSize: 14,
                lineHeight: 1.7,
                color: "#475569",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  color: "#dc2626",
                }}
              >
                Sai
              </span>

              <span> - {answer.content}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }


  return (
      <Modal
        open={aiOpen}
        centered
        width={760}
        closable={false}
        title={null}
        onCancel={onClose}
        footer={null}
        styles={{
          content: {
            padding: 0,
            overflow: "hidden",
            borderRadius: 16,
          },
          body: {
            padding: 0,
          },
        }}
      >
        {/* ================================================= */}
        {/* AI HEADER */}
        {/* ================================================= */}

        <div
          style={{
            padding: "18px 24px",
            background: "linear-gradient(135deg, #172554, #1e3a8a)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 21,
              }}
            >
              <img className="jeli-header-avatar" src={jeliImage} alt="Jeli" />
            </div>

            <div>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                Jeli giải thích câu hỏi
              </div>

              <div
                style={{
                  fontSize: 12,
                  opacity: 0.7,
                  marginTop: 2,
                }}
              >
                Jeli · Trợ lý học tập JLer
              </div>
            </div>
          </div>

          <Button
            type="text"
            onClick={onClose}
            style={{
              color: "#fff",
              fontSize: 20,
              width: 36,
              height: 36,
            }}
          >
            ×
          </Button>
        </div>

        {/* ================================================= */}
        {/* AI CONTENT */}
        {/* ================================================= */}

        <div
          style={{
            padding: "22px 24px 24px",
            background: "var(--panel)",
            maxHeight: "75vh",
            overflowY: "auto",
          }}
        >
          {aiLoading ? (
            /* ================================================= */
            /* LOADING */
            /* ================================================= */

            <div
              style={{
                textAlign: "center",
                padding: "55px 20px",
              }}
            >
              <LoadingState compact label="Đang chuẩn bị lời giải…" />

              <div
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                Jeli đang phân tích câu hỏi...
              </div>

              <div
                style={{
                  marginTop: 8,
                  color: "#6b7280",
                  fontSize: 14,
                }}
              >
                Đang tạo lời giải thích dễ hiểu cho bạn
              </div>
            </div>
          ) : (
            <>
              {/* ================================================= */}
              {/* QUESTION + CORRECT ANSWER */}
              {/* ================================================= */}

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 12,
                  padding: "17px 18px",
                  marginBottom: 22,
                }}
              >
                {/* QUESTION LABEL */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      background: "#e0f2fe",
                      color: "#0369a1",
                      borderRadius: 6,
                      padding: "4px 9px",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    CÂU {current + 1}
                  </span>

                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: 13,
                    }}
                  >
                    Nội dung câu hỏi
                  </span>
                </div>

                {/* QUESTION */}
                <Typography.Text
                  style={{
                    display: "block",
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "#1e293b",
                    fontWeight: 500,
                    marginBottom: 15,
                  }}
                >
                  {item?.q}
                </Typography.Text>

                {/* CORRECT ANSWER */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "12px 14px",
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: 9,
                  }}
                >
                  {/* LETTER */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 29,
                      height: 29,
                      borderRadius: 7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#22c55e",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {"ABCD"[item?.a]}
                  </div>

                  {/* ANSWER */}
                  <div
                    style={{
                      flex: 1,
                      color: "#166534",
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#15803d",
                        marginBottom: 2,
                      }}
                    >
                      ĐÁP ÁN ĐÚNG
                    </div>

                    {item?.o?.[item?.a]}
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* CORRECT ANSWER EXPLANATION */}
              {/* ================================================= */}

              <div
                style={{
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 11,
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 7,
                      background: "#dcfce7",
                      color: "#15803d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>

                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#15803d",
                    }}
                  >
                    GIẢI THÍCH ĐÁP ÁN ĐÚNG
                  </span>
                </div>

                <div
                  style={{
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: 10,
                    padding: "14px 16px",
                    color: "#334155",
                    fontSize: 14.5,
                    lineHeight: 1.8,
                  }}
                >
                  {getCorrectExplanation(aiExplanation)}
                </div>
              </div>

              {/* DIVIDER */}
              <Divider
                style={{
                  margin: "0 0 20px",
                }}
              />

              {/* ================================================= */}
              {/* WRONG ANSWERS */}
              {/* ================================================= */}

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 7,
                      background: "#fee2e2",
                      color: "#dc2626",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    ×
                  </span>

                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#dc2626",
                    }}
                  >
                    CÁC ĐÁP ÁN KHÁC
                  </span>
                </div>

                {renderWrongAnswers(aiExplanation)}
              </div>

              {/* ================================================= */}
              {/* FOOTER */}
              {/* ================================================= */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 22,
                }}
              >
                <Button
                  type="primary"
                  onClick={onClose}
                  style={{
                    minWidth: 90,
                    borderRadius: 8,
                  }}
                >
                  Đóng
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
  );
}
