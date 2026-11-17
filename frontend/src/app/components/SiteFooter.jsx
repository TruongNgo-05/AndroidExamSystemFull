import { POLICIES } from "../../features/policies/data/policies.js";
import { Link } from "react-router-dom";
import BrandLogo from "../../shared/components/BrandLogo.jsx";

export default function SiteFooter() {
  return (
    <footer className="site-footer business-footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-overview">
            <Link to="/" className="footer-logo" aria-label="JLer — Trang chủ">
              <BrandLogo />
            </Link>
            <p className="footer-desc">
              Không gian ôn thi trắc nghiệm theo trường và trò chơi giải trí.
              Ôn tập chủ động, thư giãn cùng Jeli và tiến bộ mỗi ngày.
            </p>
          </div>
          <nav className="footer-links" aria-label="Khám phá">
            <h2>Khám phá</h2>
            <Link to="/tro-choi">Trò chơi giải trí</Link>
            <Link to="/?tab=exams#exam-library">Ngành học & bộ đề</Link>
            <Link to="/hanh-trinh">Hành trình cùng Jeli</Link>
            <Link to="/history">Lịch sử làm bài</Link>
            <Link to="/gioi-thieu">Giới thiệu</Link>
          </nav>
          <nav className="footer-links" aria-label="Hỗ trợ">
            <h2>Hỗ trợ & liên hệ</h2>
            <a href="mailto:ngoquangtruong05work@gmail.com">
              Gửi góp ý / báo lỗi đề thi
            </a>
            <a
              href="https://www.facebook.com/nqtruong.05"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://nqt-beta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Về người phát triển
            </a>
            <a
              href="https://github.com/TruongNgo-05"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
          <nav
            className="footer-links footer-policies"
            aria-label="Điều khoản và chính sách"
          >
            <h2>Điều khoản & Chính sách</h2>
            {POLICIES.map((item) => (
              <Link key={item.slug} to={`/${item.slug}`}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} JLer. Phát triển bởi Ngô Quang Trường.
          </p>
          <p>Học chủ động · Ôn tập hiệu quả</p>
        </div>
      </div>
    </footer>
  );
}
