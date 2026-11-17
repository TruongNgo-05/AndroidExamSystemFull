# JLer Admin — giao diện dashboard

Mở /admin bằng tài khoản ADMIN.

- Layout quản trị độc lập với trang người học; sidebar theo nhóm, có thu gọn trên desktop và drawer trên mobile/tablet.
- Thanh điều hướng cố định, tìm nhanh mục quản trị, đổi sáng/tối, thông báo, tài khoản và đăng xuất.
- Dashboard: số người học, số bộ đề/câu hỏi, lượt nộp và điểm trung bình.
- Biểu đồ hoạt động theo ngày, bộ lọc 7/30 ngày, bảng số liệu có thể mở để đọc.
- Biểu đồ phân bố tỷ lệ câu đúng từ 50% và dưới 50%. Đây là cách phân nhóm hiển thị, không thay đổi quy tắc chấm điểm hay kết luận đỗ/trượt.
- Kết quả gần đây, thư viện theo trường, các lối tắt quản lý.
- Không có số tăng trưởng hoặc trạng thái online giả. Thống kê kết quả dựa trên tối đa 500 lượt gần nhất từ API hiện tại; có ghi chú phạm vi trên giao diện.
- Giữ toàn bộ CRUD, KEY, luồng thi và quên mật khẩu OTP của bản trước.

Các file chính:
features/admin/AdminFrame.jsx — khung, sidebar, topbar
features/admin/Dashboard.jsx — dashboard
features/admin/dashboard.js — tổng hợp số liệu
features/admin/admin.css — giao diện và responsive
features/admin/AdminPage.jsx — các bảng/form quản trị hiện có
app/App.jsx — ẩn header/footer người học khi vào admin

Kiểm tra: npm run build thành công, npm test đạt 59/59. Chưa xác minh trực quan trong trình duyệt vì tải Chromium không thành công ở môi trường này.
Bản tiếp theo đã bổ sung một phiên đăng nhập mỗi tài khoản. Xem SINGLE_SESSION.md. Hướng dẫn SMTP giữ tại backend/HUONG_DAN_ADMIN_OTP.md.
