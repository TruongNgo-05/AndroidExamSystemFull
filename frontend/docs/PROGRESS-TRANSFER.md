# Chuyển tiến trình và cập nhật Blog

## Chuyển máy
1. Hành trình → Xuất mã / QR tiến trình.
2. Sao chép chuỗi, tải tệp .jler hoặc mở lần lượt các QR.
3. Máy nhận → Hành trình → Nhập tiến trình → dán mã, chọn tệp, quét camera hoặc chọn ảnh QR.
4. Quét đủ các phần; có thể quét không theo thứ tự hoặc quét lại một phần.
5. Đọc bản xem trước rồi xác nhận thay thế. Tiến trình máy nhận bị thay thế, không cộng dồn thưởng.

Bản sao là ảnh chụp tiến trình tại lúc xuất. Chơi tiếp trên máy cũ không tự cập nhật máy mới. Giữ lịch sử thi, hồ sơ, XP/ngọc/lửa, phụ kiện, ID câu game đã chơi và phiên game đang dở. Deadline giữ nguyên, không tạo thêm thời gian khi nhập. Bản JSON cũ được hỗ trợ; nếu không chứa lịch sử thi thì giữ lịch sử đang có trên máy nhận.

Mã nén gzip, SHA-256 phát hiện lỗi, nhiều QR được ghép và kiểm tra trước khi nhập. Đây không phải chữ ký xác thực hoặc mã hóa riêng tư. Dữ liệu nằm trong trình duyệt, không phải cơ sở dữ liệu tài khoản.

## File chính
- `src/features/gamification/services/progressTransfer.js`: đóng gói, kiểm tra, ghép QR.
- `src/features/gamification/services/progressStore.js`: thay thế và hoàn tác nếu ghi lỗi.
- `src/features/gamification/components/ProgressTransfer.jsx`: xuất, xem trước, xác nhận nhập.
- `src/features/gamification/components/QrReader.jsx`: camera và đọc ảnh QR; dừng camera khi đóng.
- `src/styles/transfer.css`: giao diện responsive.
- `src/features/blog/hooks/useBlogPage.js` và `utils/blogPageRuntime.js`: hiệu ứng Blog gốc; hàng trường dùng ContentRail.jsx.

## Tải đề bằng console
Thêm kiểm tra key trực tiếp tại `downloadQuizPDF(quizSet, key)`, bên cạnh kiểm tra giao diện. Key lưu trực tiếp ở `config/downloadKeyConfig.js` theo yêu cầu, sửa bằng `npm run key:set` với ký tự hiện khi gõ. Tuy nhiên dữ liệu đề vẫn nằm trong JavaScript công khai; không ngăn được trích xuất bundle và tự tạo Word/PDF. Muốn bảo vệ dữ liệu cần backend với xác thực và kiểm tra quyền trước khi trả câu hỏi/file. Key hiện tại không đổi.

## Dọn mã
Bỏ component tìm kiếm cũ, mini game bug cũ và service thưởng bug không còn dùng. Bỏ CSS học lập trình, nhánh thưởng lesson/bug và HTML Blog cũ. Giữ các trường dữ liệu cũ cần thiết để không mất tiến trình khi nâng cấp.

## Kiểm thử
42 kiểm thử tự động đạt. Build production đạt. Kiểm tra trình duyệt: 5 game, lửa/vật phẩm, ôn tập/thi, tải PDF key đúng và từ chối key sai; chuyển giữa hai trình duyệt, 5 QR đảo thứ tự, tải lại, nhập lặp; QR ở màn hình 320px và dừng camera khi đóng. Blog desktop có hiệu ứng, mobile không hover.
