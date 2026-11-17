# Cập nhật header, tìm kiếm admin, ảnh và hồ sơ

## Chức năng
- Sửa CSS chung từng ghi đè input của Ant Design, gây ô tìm kiếm admin lệch khung và viền lồng nhau. Tìm kiếm vẫn lọc danh sách khi nhập, hỗ trợ không dấu.
- Header mới: điều hướng rõ trạng thái, trường hiện tại, chuỗi học, đổi sáng/tối, thông báo và menu tài khoản. Menu gọn ở tablet/mobile; hover chỉ áp dụng thiết bị có chuột. Giữ title website hiện tại.
- Menu tài khoản → Thông tin cá nhân (`/profile`): xem mã SV, lớp, quyền; sửa tên, email và trường. Email trùng bị từ chối. Đổi email không đổi ID tài khoản, lịch sử hoặc quyền.
- Đăng ký có ô chọn trường đại học lấy từ catalog backend. Khi đăng nhập, trường trong tài khoản được chọn cho trang chủ/thư viện. Liên kết đề thi có trường cụ thể vẫn được ưu tiên; người dùng có thể chuyển trường khi ôn tập.
- Tài khoản cũ chưa có trường: giữ lựa chọn trước đây, có thể vào hồ sơ để bổ sung. API đăng ký vẫn nhận client cũ không gửi schoolId; giao diện mới yêu cầu chọn trường.
- Admin xem/sửa trường trong quản lý tài khoản/học sinh.
- Trường, ngành, đề thi và từng câu hỏi có ô URL + nút chọn ảnh từ máy tính/điện thoại + xem trước. Ảnh riêng cho đề/ngành ưu tiên hơn ảnh chung; không thay ảnh cũ nếu chưa chỉnh sửa.
- Ảnh JPG/PNG/GIF, tối đa 30 MB; mỗi chiều tối đa 12.000px, tổng tối đa 40 triệu điểm ảnh. HEIC/WebP cần đổi sang JPG/PNG trước. Chặn lưu khi ảnh còn tải lên.

## Chạy và triển khai
Chạy backend cùng phiên bản trước, rồi `npm install` và `npm run dev` trong frontend. Không cần Docker.
Vite chuyển tiếp `/api` sang localhost:8080. Ảnh mới dùng `/api/public/images/<uuid>.<ext>`; production cũng phải chuyển `/api` tới backend, hoặc cấu hình VITE_API_BASE_URL trỏ tới API backend. Không chép ảnh upload vào frontend/public.

JPA `ddl-auto: update` thêm cột nullable `school_id` trong `app_users`; không cần xóa hoặc import lại database. Không chạy schema.sql lên database đang có dữ liệu.

## Kiểm tra
- Frontend: npm run build thành công; 62 test pass.
- Vite khởi động thành công và trả HTTP 200 cho /profile.
- Backend: mvn clean package thành công; 22 test pass, 2 test MySQL thật bỏ qua vì chưa cấu hình môi trường tích hợp.
- Kiểm tra đăng ký trường, sửa tên/email, từ chối trường sai/email trùng, không nâng quyền STUDENT; tải ảnh chỉ ADMIN, ảnh giả bị từ chối, ảnh đã tải truy cập công khai được.
- Dữ liệu câu hỏi và ảnh có sẵn giữ nguyên so với bản trước.
- Chưa kiểm thử trực quan trên trình duyệt/mobile/iPad thật; chưa kết nối MySQL/Redis/SMTP thật trong môi trường này. Build vẫn có cảnh báo bundle lớn sẵn có.
