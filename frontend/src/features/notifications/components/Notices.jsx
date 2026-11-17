import { useState } from "react";
import { Button, Drawer, Segmented, Empty } from "antd";
import Icon from "../../../shared/components/Icon.jsx";

export default function Notices({
  open,
  onClose,
  items,
  readIds,
  onRead,
  onReadAll,
}) {
  const [filter, setFilter] = useState("all");

  const unread = items.filter((n) => !readIds.includes(n.id)).length;

  const shown = items.filter(
    (n) => filter === "all" || !readIds.includes(n.id),
  );

  // Lấy ngày giờ hiện tại
  const currentDateTime = new Date().toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Drawer
      title={
        <div className="notice-drawer-title">
          <Icon name="bell" />
          <span>Thông báo</span>
          <b>{unread}</b>
        </div>
      }
      open={open}
      onClose={onClose}
      width={480}
      className="notice-drawer"
    >
      <div className="notice-intro">
        <span className="eyebrow">CẬP NHẬT TỪ JLER</span>

        <h2>Đừng bỏ lỡ điều mới</h2>

        <p>Cập nhật đề thi và thông tin dành cho bạn.</p>
      </div>

      <div className="notice-toolbar">
        <Segmented
          aria-label="Lọc thông báo"
          value={filter}
          onChange={setFilter}
          options={[
            {
              label: "Tất cả",
              value: "all",
            },
            {
              label: `Chưa đọc (${unread})`,
              value: "unread",
            },
          ]}
        />

        <Button type="text" disabled={!unread} onClick={onReadAll}>
          Đọc tất cả
        </Button>
      </div>

      <div className="notice-items">
        {shown.map((n) => {
          const isUnread = !readIds.includes(n.id);

          return (
            <article
              className={`notice-card ${isUnread ? "unread" : ""}`}
              key={n.id}
            >
              <div className="notice-card-meta">
                <span>{isUnread ? "MỚI" : "ĐÃ ĐỌC"}</span>

                <time>{currentDateTime}</time>
              </div>

              <h3>{n.tieu_de}</h3>

              <p>{n.noi_dung}</p>

              {isUnread && (
                <Button size="small" type="text" onClick={() => onRead(n.id)}>
                  Đánh dấu đã đọc
                </Button>
              )}
            </article>
          );
        })}
      </div>

      {/* Liên hệ ở cuối danh sách */}
      {shown.length > 0 && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              marginBottom: "20px",
            }}
          />

          <p> Bạn có thắc mắc hay vấn đề gì xin liên hệ</p>

          <a href="mailto:ngoquangtruongjk05@gmail.com">
            ngoquangtruong05work@gmail.com
          </a>
        </div>
      )}
    </Drawer>
  );
}
