# Rà soát và tách phần dùng lại

Dự án đã có cấu trúc `features`, `shared`, `app` phù hợp; không cần đổi toàn bộ folder. Nên tách theo trách nhiệm và phần có thể dùng lại, tránh tạo component chỉ để chia nhỏ vài dòng.

## Những phần đã tách

| Phần | File mới | Trách nhiệm |
| --- | --- | --- |
| Chọn chế độ và tùy chọn thi | `features/quiz/components/LearningModeSettings.jsx` | Nhận settings/onChange, hiển thị Radio và Checkbox |
| Danh sách câu và thao tác làm lại/nộp | `features/quiz/components/QuestionNavigator.jsx` | Dùng chung cho thi thử và thi |
| Hộp giải thích Jeli | `features/quiz/components/QuestionExplanationModal.jsx` | Chỉ nhận dữ liệu, trạng thái mở/tải và callback đóng |
| Tách nội dung lời giải | `features/quiz/utils/explanationText.js` | Xử lý văn bản độc lập với giao diện, có kiểm tra riêng |
| Cài đặt mặc định | `features/quiz/config/defaultSettings.js` | Tự chuyển câu mặc định bật; dùng khi khởi tạo và mở đề mới |
| Vòng đời trang Blog | `features/blog/hooks/useBlogPage.js` | Title, scroll padding, slot logo/search, dọn sự kiện khi rời trang |
| Tìm kiếm và chạy ngang | `features/blog/utils/blogLibrary.js` | Lọc đề, đếm đúng và tạo vòng lặp thẻ |
| Các tương tác Blog | `features/blog/utils/blogPageRuntime.js` | Video, câu hỏi mỗi ngày, đánh giá, cuộn và hiệu ứng |
| Nội dung Blog | `features/blog/templates/blogMarkup.js` | Mẫu HTML đang dùng để giữ giao diện hiện có |
| CSS Blog | `features/blog/styles/blog.css` | CSS có phạm vi Blog; hover chỉ hoạt động từ 768px, có chuột và hỗ trợ hover |

`BlogJLer.jsx` từ khoảng 1.809 dòng còn 33 dòng, chủ yếu ghép các phần dùng chung. `Quiz.jsx` từ 1.025 dòng còn khoảng 417 dòng. `Setup.jsx` từ 698 dòng còn khoảng 638 dòng.

## Hành vi đã chỉnh

- Mặc định bật “Tự chuyển câu sau khi chọn đáp án” cho thi thử và thi. Người dùng vẫn có thể bỏ chọn trong thiết lập. Mở đề mới sẽ nhận cài đặt mặc định mới.
- Thi thử và thi không còn chú thích “Xanh: đúng · Đỏ: sai · Vàng: bỏ qua”. Bỏ dòng giải thích dưới nút làm lại trong thi thử, giữ nút làm lại và màu phản hồi.
- Blog mobile bỏ hover, nghiêng thẻ/hero/nút theo con trỏ và vùng sáng theo con trỏ. Desktop giữ hiệu ứng. Việc bấm nút, câu hỏi mỗi ngày, tìm kiếm và thư viện chạy ngang vẫn hoạt động.
- Hoàn tất yêu cầu trước: bỏ “Làm thử” khỏi Blog, gồm liên kết, giao diện, logic và CSS riêng. Giữ “Câu hỏi mỗi ngày”.

## Những phần có thể tách tiếp

- `Setup.jsx`: phần tải PDF và biểu mẫu xác nhận còn liên quan nhiều trạng thái; có thể tách `PdfDownloadDialog` cùng hook điều khiển khi tiếp tục phát triển chức năng này.
- `App.jsx`: nếu thêm đăng nhập/backend, nên tách quản lý phiên thi, âm thanh và lịch sử thành hook riêng.
- Blog vẫn dùng mẫu HTML và tương tác DOM của giao diện cũ. Đã tách để dễ bảo trì; chưa chuyển toàn bộ các section sang component React. Có thể chuyển dần Video, DailyQuestion và Reviews sang React trong lần nâng cấp tiếp theo.
- Nhiều style inline trong hộp giải thích Jeli vẫn được giữ để hạn chế thay đổi giao diện; có thể chuyển sang stylesheet khi thiết kế lại phần này.

## Kiểm tra

Chạy `npm ci`, `npm test`, `npm run build`. Kiểm tra trình duyệt cần bao gồm desktop/mobile, mở/rời Blog, tìm kiếm thư viện, tự chuyển câu ở hai chế độ, làm lại câu sai và nút nộp bài.
