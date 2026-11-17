import { BLOG_DATA, escapeHtml } from "../data/blogData.js";
import blogPoster from "../../../assets/media/blog-intro-poster.webp";
let html;
export function getBlogMarkup(introduction) { return introduction ? buildHtml(introduction) : (html || (html = buildHtml())); }

function buildHtml(introduction) {
  return `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-book" viewBox="0 0 24 24"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>
<symbol id="i-trophy" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.5 13l1.5 9-5-3-5 3 1.5-9"/></symbol>
<symbol id="i-pen" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></symbol>
<symbol id="i-x" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
<symbol id="i-up" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></symbol>
<symbol id="i-link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></symbol>
<symbol id="i-file" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></symbol>
<symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></symbol>
<symbol id="i-chart" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M8 17V9M13 17V5M18 17v-6"/></symbol>
<symbol id="i-grad" viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></symbol>
<symbol id="i-moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></symbol>
<symbol id="i-volume" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></symbol>
<symbol id="i-mute" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></symbol>
<symbol id="i-zap" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></symbol>
<symbol id="i-share" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></symbol>
<symbol id="i-logo" viewBox="0 0 24 24"><path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5"/><path d="M8.5 12.5l2.5 2.5 4.5-5.5"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="4"/><path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M16 4a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24" style="fill:currentColor"><path d="M7 4l13 8-13 8z" style="fill:currentColor"/></symbol>
<symbol id="i-pause" viewBox="0 0 24 24"><path d="M8 5v14M16 5v14" style="stroke-width:3.5"/></symbol>
<symbol id="i-expand" viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></symbol>
<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></symbol>
</defs></svg>
<div id="sn"><div class="sni"><a class="logo blog-brand" href="/" aria-label="JLer — Trang chủ"><span data-brand-logo></span></a>
<div class="sl"><a href="#vd">Video</a><a href="#tn">Tính năng</a><a href="#tv">Thư viện đề</a><a href="#dg">Đánh giá</a><a href="#hd">Hỏi đáp</a></div>
<div class="sact"><span data-blog-theme></span><button class="ibt" id="sh" aria-label="Chia sẻ trang này"><svg class="i"><use href="#i-share"/></svg></button><a class="btn" href="/">Vào thi</a></div></div></div>
<div id="ts" role="status"></div>
<a id="jw" href="/" aria-label="Vào ôn thi cùng Jeli"><span class="jb">Vào ôn thi cùng Jeli nhé!</span><span class="jeli jwi"></span></a>
<div id="lbx" role="dialog" aria-modal="true" aria-label="Xem ảnh lớn"><img alt="Giao diện JLer"></div>
<div id="pg"></div><div id="gl"></div>
<header class="hero" id="top">
  <canvas id="pc"></canvas><div class="blob b1"></div><div class="blob b2"></div>
  <div class="w">
    <nav><div class="nl"><a class="logo blog-brand" href="/" aria-label="JLer — Trang chủ"><span data-brand-logo></span></a><span class="dv"></span><span class="slg">Học chủ động mỗi ngày</span></div><div class="blog-nav-actions"><span data-blog-theme></span><a class="btn" href="/">Vào thi <svg class="i"><use href="#i-arrow"/></svg></a></div></nav>
    <div class="hg">
      <div>
        <div class="bdg"><svg class="i"><use href="#i-grad"/></svg> Ôn tập · Thi thử · Giải trí</div><h1>${escapeHtml(introduction?.title || "Ôn thi trắc nghiệm")}<br><span class="typed" id="ty"></span></h1>
        <p style="white-space:pre-line">${escapeHtml(introduction?.description || "JLer giúp bạn ôn tập theo trường và ngành, thử sức với đề trắc nghiệm và cùng Jeli xây thói quen ôn mỗi ngày.")}</p>
        <a class="btn" href="/">Vào thi ngay <svg class="i"><use href="#i-arrow"/></svg></a>
        <a class="btn g" href="#vd"><svg class="i"><use href="#i-play"/></svg> Xem video</a>
      </div>
      <div class="art"><div class="halo"></div><div class="jeli hero-j" role="img" aria-label="Linh vật Jeli của JLer"></div><div class="bub">Chào bạn, mình là Jeli!</div><span class="fl f1"><svg class="i"><use href="#i-book"/></svg></span><span class="fl f2"><svg class="i"><use href="#i-clock"/></svg></span><span class="fl f3"><svg class="i"><use href="#i-trophy"/></svg></span><span class="fl f4"><svg class="i"><use href="#i-chart"/></svg></span></div>
    </div>
  </div>
  <svg class="wave" viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0 30C200 70 400 0 600 25S1000 60 1200 20V60H0Z" style="fill:var(--bg)"/></svg>
</header>

<div class="mq" aria-hidden="true"><div id="mq"></div></div>

<section id="truong"><div class="w"><div class="eb rv">Trường của bạn</div><h2 class="t rv">Một nơi ôn tập, nhiều ngôi trường</h2><p class="sub rv">Chọn trường để khám phá thư viện đề đang có.</p><div data-blog-schools></div></div></section>
<section id="vd"><div class="w">
  <div class="eb rv">Video giới thiệu</div>
  <h2 class="t rv">Xem JLer hoạt động trong 17 giây</h2>
  <p class="sub rv">Video không có tiếng, xem nhanh toàn bộ quy trình từ chọn đề, làm bài đến xem kết quả.</p>
  <div class="vw rv"><div class="vp" id="vp">
    <video id="vv" muted loop playsinline preload="none" poster="${blogPoster}" aria-label="Video giới thiệu hệ thống JLer"></video>
    <button class="vplay" id="vpl" aria-label="Phát video"><svg class="i"><use href="#i-play"/></svg></button>
    <div class="vctl"><button id="vpp" aria-label="Phát"><svg class="i"><use href="#i-play"/></svg></button>
      <div class="vbar" id="vbar" role="slider" tabindex="0" aria-label="Tiến độ video" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i id="vfill"></i></div>
      <span class="vtm m" id="vtm">0:00 / 0:17</span><button id="vfs" aria-label="Toàn màn hình"><svg class="i"><use href="#i-expand"/></svg></button></div>
  </div></div>
  <div class="vch rv" id="vch"><button data-t="0">Giới thiệu</button><button data-t="3.2">Thư viện đề</button><button data-t="14.4">Bắt đầu</button></div>
</div></section>
<section><div class="w">
  <div class="eb rv">Tính năng</div><h2 id="tn" class="t rv">Vì sao nên dùng JLer?</h2>
  <p class="sub rv">Ôn thi là làm thật nhiều câu và biết ngay mình sai ở đâu. JLer được làm ra để việc đó nhẹ nhàng hơn.</p>
  <div class="fg"><div class="fc rv"><div class="ic" style="background:linear-gradient(135deg,#0f766e,#34e0d3)"><svg class="i"><use href="#i-book"/></svg></div><h3>Thư viện theo chuyên ngành</h3><p>${BLOG_DATA.majorCount} chuyên ngành, ${BLOG_DATA.setCount} bộ đề đang có trong thư viện. Chọn đúng môn bạn cần ôn.</p></div><div class="fc rv"><div class="ic" style="background:linear-gradient(135deg,#0369a1,#38bdf8)"><svg class="i"><use href="#i-file"/></svg></div><h3>Nhiều câu hỏi mỗi đề</h3><p>${BLOG_DATA.questionCount.toLocaleString("vi-VN")} câu hỏi đang có trong thư viện để bạn ôn tập.</p></div><div class="fc rv"><div class="ic" style="background:linear-gradient(135deg,#6d28d9,#a78bfa)"><svg class="i"><use href="#i-clock"/></svg></div><h3>Lịch sử làm bài</h3><p>Có mục Lịch sử để xem lại những gì bạn đã làm.</p></div><div class="fc rv"><div class="ic" style="background:linear-gradient(135deg,#b45309,#fbbf24)"><svg class="i"><use href="#i-volume"/></svg></div><h3>Âm thanh và thông báo</h3><p>Bật tắt âm thanh, nhận thông báo ngay trên thanh công cụ.</p></div><div class="fc rv"><div class="ic" style="background:linear-gradient(135deg,#be123c,#fb7185)"><svg class="i"><use href="#i-target"/></svg></div><h3>Học chủ động mỗi ngày</h3><p>Ôn đều tay từng ngày thay vì dồn sát ngày thi.</p></div><div class="fc rv"><div class="ic" style="background:linear-gradient(135deg,#0e7490,#22d3ee)"><svg class="i"><use href="#i-zap"/></svg></div><h3>Chạy ngay trên trình duyệt</h3><p>Không cần cài đặt, mở link là vào ôn tập.</p></div></div>
</div></section>

<section class="st"><div class="w sg"><div class="rv"><b data-n="${BLOG_DATA.majorCount}" data-s="">0</b><span>chuyên ngành</span></div><div class="rv"><b data-n="${BLOG_DATA.setCount}" data-s="">0</b><span>bộ đề ôn tập</span></div><div class="rv"><b data-n="${BLOG_DATA.questionCount}" data-s="">0</b><span>câu hỏi để luyện</span></div><div class="rv"><b data-n="0" data-s="">0</b><span>phần mềm cần cài</span></div></div></section>

<section><div class="w">
  <h2 class="t rv">Bắt đầu chỉ với 4 bước</h2>
  <p class="sub rv">Từ lúc mở trang đến lúc có điểm, mọi thứ diễn ra trong vài phút.</p>
  <div class="sp">
    <div class="s rv"><span class="em"><svg class="i"><use href="#i-link"/></svg></span><em>1</em><h3>Mở trang JLer</h3><p>Truy cập đường link trên điện thoại hoặc máy tính.</p></div>
    <div class="s rv"><span class="em"><svg class="i"><use href="#i-file"/></svg></span><em>2</em><h3>Chọn bài thi</h3><p>Chọn bộ câu hỏi bạn muốn luyện.</p></div>
    <div class="s rv"><span class="em"><svg class="i"><use href="#i-target"/></svg></span><em>3</em><h3>Làm bài</h3><p>Đọc kỹ và chọn một đáp án cho mỗi câu.</p></div>
    <div class="s rv"><span class="em"><svg class="i"><use href="#i-trophy"/></svg></span><em>4</em><h3>Xem kết quả</h3><p>Biết câu đúng, câu sai để ôn lại đúng chỗ.</p></div>
  </div>
</div></section>

<section><div class="w">
  <div class="eb rv">Khám phá thư viện</div>
  <div class="blog-major-links rv" aria-label="Các chuyên ngành">${BLOG_DATA.majors.map((major) => `<a href="/hubt/${encodeURIComponent(major.id)}">${escapeHtml(major.title)}</a>`).join("")}</div>
  <h2 id="tv" class="t rv">Thư viện đề ôn tập</h2>
  <p class="sub rv">Các đề đang có trong thư viện JLer. Hiện có ${BLOG_DATA.majorCount} chuyên ngành, ${BLOG_DATA.setCount} bộ đề và ${BLOG_DATA.questionCount.toLocaleString("vi-VN")} câu hỏi.</p>
  <div class="lbar rv"><div class="blog-search-slot" data-blog-search></div>
    <div class="lch" id="lf2"><button class="on" data-q="">Tất cả</button>${BLOG_DATA.subjects
      .slice(0, 6)
      .map(
        (title) =>
          `<button data-q="${escapeHtml(title)}">${escapeHtml(title)}</button>`,
      )
      .join("")}</div>
    <button class="library-motion-toggle" id="library-motion-toggle" type="button" aria-pressed="false">Tạm dừng</button>
    <span class="mono2">Hiển thị <b id="cnt2">${BLOG_DATA.cards.length}</b> đề</span></div>
  <div class="lib" id="lib">
    <div class="library-track"><div class="library-loop"><div class="library-originals" id="library-originals">
      ${BLOG_DATA.cardsHtml}
      <a class="lc lall rv" href="/"><div class="jeli lj"></div><h3>Xem toàn bộ ${BLOG_DATA.setCount} đề</h3><p>Khám phá thư viện ôn tập đang có trong dự án.</p><span class="go">Mở thư viện <svg class="i"><use href="#i-arrow"/></svg></span></a>
    </div></div></div>
    <div class="lem" id="lem"><div class="jeli lj2"></div><b>Chưa thấy đề phù hợp.</b><span>Thử từ khóa khác hoặc mở thư viện để xem các ngành.</span></div>
  </div>
</div></section>



<section><div class="w"><div class="mj">
  <div class="mjl rv l"><div class="halo"></div><button class="jeli mjb" id="jb" aria-label="Chạm vào Jeli để nghe lời động viên"></button><div class="bub2" id="jt">Chạm vào mình đi!</div></div>
  <div class="rv r"><div class="eb">Linh vật</div><h2 class="t">Gặp Jeli, bạn đồng hành của bạn</h2>
    <p>Jeli là linh vật của JLer: chú bạn nhỏ đeo tai nghe, mặc áo vàng in chữ JLer và luôn mang theo laptop. Jeli có mặt trên hệ thống để cổ vũ bạn học chủ động mỗi ngày.</p>
    <ul class="jl"><li><svg class="i"><use href="#i-target"/></svg> Học chủ động mỗi ngày</li><li><svg class="i"><use href="#i-book"/></svg> Ôn tập theo từng chuyên ngành</li><li><svg class="i"><use href="#i-users"/></svg> Tham gia cộng đồng học tập</li></ul></div>
</div></div></section>

<section style="padding-top:0"><div class="w" style="max-width:760px">
  <h2 class="t rv">Lộ trình ôn thi gợi ý</h2>
  <p class="sub rv">Cuộn xuống để xem đường tiến độ sáng dần theo từng bước.</p>
  <div class="tl" id="tl"><div class="tl-l"><i id="tli"></i></div>
    <div class="ti rv"><span class="dot"><svg class="i"><use href="#i-target"/></svg></span><h3>Làm thử để biết mức độ</h3><p>Làm một đề ngắn để biết mình đang ở đâu.</p></div>
    <div class="ti rv"><span class="dot"><svg class="i"><use href="#i-file"/></svg></span><h3>Xem lại câu sai</h3><p>Ghi chú các câu chưa đúng và hiểu vì sao đáp án đó đúng.</p></div>
    <div class="ti rv"><span class="dot"><svg class="i"><use href="#i-book"/></svg></span><h3>Ôn đúng phần còn yếu</h3><p>Quay lại phần kiến thức còn thiếu thay vì ôn dàn trải.</p></div>
    <div class="ti rv"><span class="dot"><svg class="i"><use href="#i-chart"/></svg></span><h3>Thi lại và so sánh</h3><p>Làm lại sau một ngày để thấy mình tiến bộ.</p></div>
  </div>
</div></section>





<div class="big" aria-hidden="true"><span id="bt">ÔN THI HUBT · ÔN THI HUBT · ÔN THI HUBT · ÔN THI HUBT · ÔN THI HUBT</span></div>

<section class="rvw"><div class="w">
  <h2 id="dg" class="t ctr rv">Mọi người nói gì về JLer?</h2>
  <p class="sub rv" style="margin:0 auto 26px;text-align:center">Cảm nhận được lưu trên trình duyệt của bạn. Chia sẻ trải nghiệm của mình bên dưới.</p>
  <div class="sum rv"><b id="av">0</b><div><div class="stars" id="avs"></div><div style="color:var(--muted)" id="cnt"></div></div></div>
  <div class="rv"><div class="trk" id="tk"></div><div class="dots" id="dt"></div></div>
  <div class="fm rv"><h3>Viết đánh giá của bạn</h3>
    <div class="pick" id="pk" role="radiogroup" aria-label="Chọn số sao"></div>
    <input id="nm" placeholder="Tên của bạn" maxlength="30" aria-label="Tên của bạn">
    <textarea id="cm" rows="3" placeholder="Bạn thấy JLer thế nào?" maxlength="200" aria-label="Nội dung đánh giá"></textarea>
    <button class="btn" id="sd" style="border:0;font:800 16px 'Be Vietnam Pro',sans-serif;cursor:pointer">Gửi đánh giá</button>
    <div class="note" id="nt">Các đánh giá có nhãn “Đánh giá mẫu” dùng để xem trước giao diện. Đánh giá bạn gửi chỉ lưu trên trình duyệt này và không đồng bộ cho người khác.</div>
  </div>
</div></section>

<section style="padding-top:0"><div class="w" style="max-width:760px">
  <h2 class="t rv">Mẹo ôn thi hiệu quả</h2>
  <p class="rv">Hãy làm đề theo từng lượt ngắn, khoảng 15 đến 20 phút. Sau mỗi lượt, ghi lại các câu sai rồi làm lại sau một ngày. Cách lặp lại ngắt quãng này giúp nhớ lâu hơn nhiều so với việc làm một mạch rồi bỏ đó.</p>
  <h2 id="hd" class="t rv" style="margin-top:44px">Câu hỏi thường gặp</h2>
  <details class="rv"><summary>Dùng JLer có mất phí không?</summary><p>Bạn có thể ôn tập và thi thử trên website. Tải PDF có bước xác nhận riêng được hiển thị tại trang thiết lập đề.</p></details>
  <details class="rv"><summary>Có dùng được trên điện thoại không?</summary><p>Có. Trang được thiết kế để hiển thị tốt trên điện thoại, máy tính bảng và máy tính.</p></details>
  <details class="rv"><summary>Tôi muốn góp ý hoặc báo lỗi thì làm sao?</summary><p>Hãy liên hệ người phát triển dự án. Mọi góp ý đều giúp JLer tốt hơn.</p></details>
</div></section>

<section style="padding-top:0"><div class="w"><div class="cta rv"><i class="rg1"></i><i class="rg2"></i><div class="jeli cj"></div>
  <h2>Sẵn sàng thi chưa?</h2><p>Chỉ mất vài giây để bắt đầu một bài thi.</p>
  <a class="btn" href="/">Mở JLer ngay <svg class="i"><use href="#i-arrow"/></svg></a>
</div></div></section>


`;
}
