import { useState } from "react";
import { Button, Empty, Modal, Progress } from "antd";
import { normalize } from "../../quiz/utils/quiz.js";
import Icon from "../../../shared/components/Icon.jsx";
import PaginationBar from "../../../shared/components/PaginationBar.jsx";
import SearchBar from "../../../shared/components/SearchBar.jsx";
export default function History({ records, onClear, onHome, onOpenExam }) {
  const [keyword, setKeyword] = useState(""),
    [page, setPage] = useState(1),
    [confirm, setConfirm] = useState(false);
  const filtered = records.filter((r) =>
    normalize(r.title).includes(normalize(keyword)),
  );
  const average = records.length
    ? Math.round(
        records.reduce((n, r) => n + Number(r.pct || 0), 0) / records.length,
      )
    : 0;
  const best = records.length
    ? Math.max(...records.map((r) => Number(r.pct || 0)))
    : 0;
  return (
    <section className="history-page">
      <Button onClick={onHome}>← Trang chủ</Button>
      <div className="section-heading history-heading">
        <div>
          <span className="eyebrow">HÀNH TRÌNH HỌC TẬP</span>
          <h1>Lịch sử làm bài</h1>
          <p className="muted">Nhìn lại kết quả, tiếp tục tiến bộ mỗi ngày.</p>
        </div>
        <Button
          danger
          disabled={!records.length}
          onClick={() => setConfirm(true)}
        >
          Xóa lịch sử
        </Button>
      </div>
      <div className="history-metrics">
        {[
          ["Số lần thi", records.length, "history"],
          ["Trung bình", `${average}%`, "chart"],
          ["Kết quả cao nhất", `${best}%`, "spark"],
        ].map(([label, value, icon]) => (
          <div className="panel history-metric" key={label}>
            <span className="metric-icon">
              <Icon name={icon} />
            </span>
            <div>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          </div>
        ))}
      </div>
      <section className="panel history-records">
        <div className="section-heading">
          <div>
            <h2>Các bài thi gần đây</h2>
            <p className="muted">
              50 lần thi gần nhất · Lưu theo tài khoản
            </p>
          </div>
          <SearchBar
            label="Tìm lịch sử theo tên môn"
            value={keyword}
            onChange={(value) => {
              setKeyword(value);
              setPage(1);
            }}
            hint="Tìm theo tên môn…"
            clearable
            className="history-search"
            inputProps={{
              allowClear: true,
            }}
          />
        </div>
        {filtered.length ? (
          <>
            <div className="attempt-list">
              {filtered.slice((page - 1) * 8, page * 8).map((r, i) => {
                const statusText =
                  r.pct >= 80
                    ? "Làm tốt lắm"
                    : r.pct >= 50
                      ? "Tiếp tục tiến bộ"
                      : "Cùng ôn lại nhé";
                return (
                  <article className="attempt-card" key={`${r.date}-${i}`}>
                    <div className="attempt-score">
                      <Progress
                        type="circle"
                        size={64}
                        percent={Number(r.pct || 0)}
                        strokeColor="var(--accent)"
                      />
                    </div>
                    <div className="attempt-info">
                      <h3>{r.title}</h3>
                      {r.mode === "practice" && (
                        <p className="muted">Thi thử · Kết quả lượt cuối</p>
                      )}
                      <time>{new Date(r.date).toLocaleString("vi-VN")}</time>
                      <div className="attempt-details">
                        <span>
                          {r.correct}/{r.total} câu đúng
                        </span>
                        {Number.isFinite(r.wrong) && <span>{r.wrong} sai</span>}
                        {Number.isFinite(r.unanswered) && (
                          <span>{r.unanswered} chưa trả lời</span>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="attempt-label"
                      onClick={() =>
                        onOpenExam?.(r.examId, r.schoolId || "hubt")
                      }
                      disabled={!r.examId && !onOpenExam}
                    >
                      {statusText}
                    </button>
                  </article>
                );
              })}
            </div>
            <PaginationBar
              current={page}
              total={filtered.length}
              pageSize={8}
              onChange={setPage}
            />
          </>
        ) : (
          <Empty
            description={
              keyword
                ? "Không có bài thi phù hợp"
                : "Bạn chưa có bài thi nào được lưu"
            }
          >
            {!keyword && (
              <Button type="primary" onClick={onHome}>
                Khám phá đề thi
              </Button>
            )}
          </Empty>
        )}
      </section>
      <Modal
        open={confirm}
        centered
        title="Xóa toàn bộ lịch sử?"
        okText="Xóa lịch sử"
        cancelText="Giữ lại"
        okButtonProps={{ danger: true }}
        onCancel={() => setConfirm(false)}
        onOk={() => {
          onClear();
          setPage(1);
          setConfirm(false);
        }}
      >
        <p>
          Các kết quả đã lưu trên trình duyệt này sẽ bị xóa và không thể khôi
          phục.
        </p>
      </Modal>
    </section>
  );
}
