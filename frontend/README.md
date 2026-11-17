> Bản tích hợp 3.0.0: backend đã chứa UI build sẵn. `npm run build:backend` cập nhật UI cho cả web và app Java. Hướng dẫn chạy toàn bộ ở ../README.md.

# Frontend JLer — bản nối backend

1. Chạy backend và MySQL theo ../backend/README.md.
2. Chép .env.example thành .env.
3. npm ci
4. npm run dev → http://localhost:5173

.env mặc định VITE_API_BASE_URL=/api. Vite đã proxy /api tới localhost:8080.
Các URL trường/ngành/đề cũ được giữ; thêm /login, /register và /admin.
Khách vẫn xem trang chủ và ôn tập. Thi, lịch sử, KEY cần tài khoản.

- Đăng nhập bằng mã sinh viên hoặc email.
- Tiện ích → Đăng xuất; trong bài thi cần thoát bài trước.
- Access token chỉ ở bộ nhớ, refresh token cookie HttpOnly.
- Token hết hạn: request được refresh và thử lại một lần.
- Lỗi nộp bài không tự chuyển sang kết quả giả.
- KEY do admin quản lý trong DB; không dùng npm run key:set nữa.
- Games/Jeli vẫn local, tách theo tài khoản. Nhập QR không thay kết quả server.
- Các file docs/ cũ lưu lịch sử thiết kế; hành vi tích hợp hiện tại theo README này và ../backend/README.md.

npm test; npm run build; npm run data:export để xuất dữ liệu câu hỏi nguyên trạng sang backend/database.
Triển khai Vercel cần cấu hình proxy /api tới backend thật, xem phần Deployment của backend/README.md.

## Admin và OTP
Admin mở tại /admin, các mục có URL riêng. Người học dùng /forgot-password để nhận OTP và đổi mật khẩu. Xem backend/HUONG_DAN_ADMIN_OTP.md trong gói gốc để bật SMTP và cập nhật database an toàn.
