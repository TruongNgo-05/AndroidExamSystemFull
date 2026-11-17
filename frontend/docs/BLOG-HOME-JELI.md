# Home, Blog và Jeli

Home ưu tiên ôn thi: banner tràn hai mép, chọn trường, thư viện ngành/đề, rồi trò chơi và video. Blog là trang React dùng BrandLogo, SearchBar, Footer, BackToTop và ProgressStrip có sẵn. Giữ video MP4 cũ trong `src/assets/media/blog-intro.mp4` và poster; Home dùng URL YouTube trong `src/shared/config/media.js`.

Blog lấy trực tiếp `quizSets.js`, `majors.js`, `SUBJECT_IMAGE`, `schools.js` và cấu hình trò chơi. Hai hàng trường/đề dùng chung ContentRail: một hàng duy nhất, hai nhóm cùng nội dung để lặp từ phải sang trái. Nhóm bản sao không được tab tới. Máy cảm ứng không có hiệu ứng hover; người dùng bàn phím có thể lấy focus để dừng hàng; chế độ giảm chuyển động tắt animation và cho cuộn ngang.

Đánh giá mẫu tiếp tục lấy từ `mockReviews.js`, hiển thị nhãn dữ liệu mẫu. Không còn phần Học CNTT/lộ trình lập trình. Hero đầu Blog không bo góc và chiếm toàn chiều ngang.

InitialPageIntro chạy ở trang chủ thật `/` và `/gioi-thieu`; không chạy khi vào thư viện bằng nút Ôn thi, trong setup, bài thi hay trò chơi. Đây là hiệu ứng mở trang có thời hạn, không biểu diễn phần trăm tải mạng chính xác.
