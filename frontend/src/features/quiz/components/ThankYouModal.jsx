import { Modal, Button } from "antd";
import thankiuGif from "../../../assets/images/thankiu.gif";

export default function ThankYouModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      centered
      footer={null}
      closable={false}
      maskClosable={false}
      width={440}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px 10px 12px",
        }}
      >
        <img
          src={thankiuGif}
          alt="Thank you"
          style={{
            width: 180,
            maxWidth: "70%",
            display: "block",
            margin: "0 auto 18px",
            borderRadius: 12,
          }}
        />

        <h2
          style={{
            margin: "0 0 12px",
            color: "var(--text)",
            fontSize: 22,
          }}
        >
          Gửi thông tin thành công! ^^
        </h2>

        <p
          style={{
            margin: "0 0 22px",
            color: "var(--muted)",
            fontSize: 14,
            lineHeight: 1.8,
          }}
        >
          Chờ 1 lát Admin sẽ check và xác nhận,
          <br />
          sau đó gửi Key qua Mail cho bạn nhé tình yêu ^^.
        </p>

        {/* NÚT ĐÓNG */}
        <Button type="primary" size="large" onClick={onClose}>
          Đóng
        </Button>
      </div>
    </Modal>
  );
}
