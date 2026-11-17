import { useState } from "react";
import { Alert, Button, Modal } from "antd";
import mascotImage from "../../../assets/images/linhvatthamgiacongdong.png";
import { communityGroups } from "../data/community.js";

export default function CommunityMascot({ hidden = false, onOpenChange }) {
  const [open, setOpen] = useState(false);
  function changeOpen(value) {
    setOpen(value);
    onOpenChange?.(value);
  }
  if (hidden) return null;
  return (
    <>
      <button
        type="button"
        className="community-mascot"
        aria-label="Jeli — Tham gia cộng đồng học tập"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => changeOpen(true)}
      >
        <img src={mascotImage} alt="Jeli mời bạn tham gia cộng đồng học tập" />
      </button>
      <Modal
        className="community-modal"
        title="Tham gia cộng đồng học tập"
        open={open}
        onCancel={() => changeOpen(false)}
        footer={null}
        centered
        width={550}
      >
        <Alert
          type="info"
          showIcon
          message="Nơi chia sẻ, cập nhật đề cương ôn tập và hỗ trợ tìm đề ôn thi của môn học bạn cần!"
        />
        <div className="community-group-list">
          {communityGroups.map((group) => (
            <article key={group.id} className="community-group">
              <div className="community-group-heading">
                <span aria-hidden="true" className={`community-platform ${group.id}`}>
                  {group.id === "facebook" ? "f" : "Zalo"}
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <Button
                type="primary"
                className="community-join"
                href={group.url || undefined}
                target={group.url ? "_blank" : undefined}
                rel={group.url ? "noopener noreferrer" : undefined}
                disabled={!group.url}
              >
                {group.url ? "Tham gia ngay" : "Sắp mở đăng ký"}
              </Button>
            </article>
          ))}
        </div>
      </Modal>
    </>
  );
}
