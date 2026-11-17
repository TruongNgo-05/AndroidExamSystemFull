import { useState } from "react";
import { Button, Divider, Input, Modal, QRCode, message } from "antd";
import {
  CopyOutlined,
  FacebookFilled,
  LinkedinFilled,
  QrcodeOutlined,
} from "@ant-design/icons";

export default function ShareExam({ title, path }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [qrOpen, setQrOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const url = new URL(path, window.location.origin).href;
  const encodedUrl = encodeURIComponent(url);
  const socialLinks = [
    { label: "Facebook", icon: <FacebookFilled />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: "LinkedIn", icon: <LinkedinFilled />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
  ];

  async function copyLink() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(url);
      setCopyStatus("");
      messageApi.success({ content: "Đã sao chép link đề thi!", key: "exam-share-copy" });
    } catch {
      messageApi.warning({ content: "Không thể sao chép tự động. Bạn có thể sao chép link trong hộp thoại.", key: "exam-share-copy" });
      setCopyStatus("Bạn có thể chọn và sao chép đường dẫn bên dưới.");
      setQrOpen(true);
    }
  }

  return (
    <section className="exam-share" aria-label="Chia sẻ đề thi">
      {contextHolder}
      <h2>Chia sẻ đề thi</h2>
      <div className="exam-share-socials">
        {socialLinks.map(({ label, icon, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="exam-share-social" aria-label={`Chia sẻ đề thi qua ${label}`} title={label}>
            {icon}
          </a>
        ))}
      </div>
      <Divider plain className="exam-share-divider">hoặc</Divider>
      <div className="exam-share-actions">
        <Button icon={<CopyOutlined />} onClick={copyLink}>Sao chép link</Button>
        <Button icon={<QrcodeOutlined />} onClick={() => setQrOpen(true)}>Quét mã QRCode</Button>
      </div>
      <Modal title="Quét mã QR bằng điện thoại để mở đề thi JLer" open={qrOpen} onCancel={() => setQrOpen(false)} footer={<Button onClick={copyLink} icon={<CopyOutlined />}>Sao chép link</Button>}>
        <div className="exam-share-qr">
          <QRCode value={url} size={220} color="#087f80" bgColor="#ffffff" />
          <p>{title}</p>
          <Input readOnly value={url} aria-label="Đường dẫn đề thi" onFocus={(event) => event.target.select()} />
          {copyStatus && <p role="status">{copyStatus}</p>}
        </div>
      </Modal>
    </section>
  );
}
