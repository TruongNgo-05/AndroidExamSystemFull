import { Component } from "react";
export default class PageErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <section className="page-recovery" role="alert">
        <h1>Trang chưa mở được</h1>
        <p>
          Tiến trình đã lưu trên trình duyệt vẫn còn. Bạn có thể tải lại trang
          hoặc trở về Home.
        </p>
        <button type="button" onClick={() => window.location.reload()}>
          Tải lại trang
        </button>
        <a href="/">Về trang chủ</a>
      </section>
    );
  }
}
