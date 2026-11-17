# Một tài khoản chỉ có một phiên đăng nhập

Cập nhật cả frontend và backend trong gói, sau đó khởi động lại backend. JPA tự thêm cột revoked_reason trong login_sessions, không cần xóa database.

Cách kiểm tra trên hai thiết bị hoặc hai trình duyệt có cookie riêng:
1. Đăng nhập tài khoản A trên máy 1.
2. Đăng nhập đúng tài khoản A trên máy 2.
3. Máy 1 không còn quyền dùng access/refresh token cũ. Trong khoảng 20 giây khi trang đang hiển thị và có mạng, app hiện thông báo đã đăng xuất.
4. Máy 2 vẫn dùng bình thường. Nếu máy 1 đăng nhập lại thành công, máy 2 sẽ bị thu hồi phiên.
5. Đăng nhập tài khoản B khác sẽ không làm tài khoản A bị đăng xuất.
6. Nhập sai mật khẩu không ảnh hưởng phiên cũ.

Lưu ý: đây là một phiên cho mỗi tài khoản, không khóa theo phần cứng. Các tab cùng trình duyệt chia sẻ cookie của một phiên. Trình duyệt ngủ, tab nền hoặc mất mạng không thể cập nhật giao diện ngay; khi quay lại app sẽ kiểm tra phiên. Bài chưa nộp không tự được nộp khi mất phiên.
