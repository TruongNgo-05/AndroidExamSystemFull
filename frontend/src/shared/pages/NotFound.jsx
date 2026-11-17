import { Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="not-found panel" aria-labelledby="not-found-title">
      <span className="eyebrow">JLER · LẠC KHỎI LỘ TRÌNH</span>
      <div className="not-found-art" aria-hidden="true"><span>4</span><span className="not-found-orbit">0<i /></span><span>4</span></div>
      <h1 id="not-found-title">Trang này chưa có trong đề.</h1>
      <p>Đường dẫn có thể đã thay đổi hoặc không còn tồn tại.<br />Về thư viện để tìm môn học và tiếp tục hành trình của bạn nhé.</p>
      <div className="actions">
        <Button type="primary" size="large" onClick={() => navigate("/", { replace: true })}>Về trang chủ</Button>
        <Button size="large" onClick={() => navigate("/history", { replace: true })}>Xem lịch sử thi</Button>
      </div>
      <small>Không sao, kiến thức vẫn đang chờ bạn.</small>
    </section>
  );
}
