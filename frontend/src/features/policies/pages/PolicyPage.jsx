import { Link, NavLink } from "react-router-dom";
import { POLICIES, POLICY_UPDATED, POLICY_CONTACT } from "../data/policies.js";

export default function PolicyPage({ slug }) {
  const policy = POLICIES.find((item) => item.slug === slug);
  if (!policy) return null;
  return (
    <div className="policy-page">
      <div className="policy-breadcrumb">
        <Link to="/">Trang chủ</Link>
        <span aria-hidden="true">/</span>
        <span>Điều khoản & Chính sách</span>
      </div>
      <header className="policy-heading">
        <p className="policy-eyebrow">JLer · Thông tin dịch vụ</p>
        <h1>{policy.title}</h1>
        <p>{policy.intro}</p>
        <span className="policy-updated">
          Cập nhật: <time dateTime="2026-10-07">{POLICY_UPDATED}</time>
        </span>
      </header>
      <div className="policy-layout">
        <aside className="policy-sidebar">
          <nav aria-label="Điều khoản và chính sách">
            <h2>Điều khoản & Chính sách</h2>
            {POLICIES.map((item) => (
              <NavLink key={item.slug} to={`/${item.slug}`}>
                {item.title}
              </NavLink>
            ))}
          </nav>
        </aside>
        <article className="policy-content" aria-label={policy.title}>
          <nav className="policy-toc" aria-label="Mục lục">
            <h2>Trong trang này</h2>
            {policy.sections.map((section, i) => (
              <a href={`#muc-${i + 1}`} key={section.title}>
                {i + 1}. {section.title}
              </a>
            ))}
          </nav>
          {policy.sections.map((section, i) => (
            <section id={`muc-${i + 1}`} key={section.title}>
              <h2>
                {i + 1}. {section.title}
              </h2>
              {section.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.links?.map((link) => (
                <p key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </p>
              ))}
            </section>
          ))}
          <div className="policy-contact">
            <h2>Cần trao đổi thêm?</h2>
            <p>
              Gửi góp ý hoặc yêu cầu hỗ trợ đến{" "}
              <a href={`mailto:${POLICY_CONTACT}`}>{POLICY_CONTACT}</a>.
            </p>
            <Link to="/">Về trang chủ →</Link>
          </div>
        </article>
      </div>
    </div>
  );
}
