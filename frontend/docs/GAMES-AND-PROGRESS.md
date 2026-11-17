# Trò chơi và tiến trình JLer

## Năm trò chơi

| Trò | Luật | Thời hạn |
| --- | --- | --- |
| Triệu phú Jeli | Tối đa 15 câu; sai/hết giờ dừng. Mốc 5, 10, 15 câu đúng liên tiếp được lưu. 50/50 loại 2 đáp án sai; gọi người thân đưa gợi ý; khán giả mô phỏng biểu đồ 100%. Mỗi trợ giúp dùng một lần mỗi lượt. | 30 giây/câu |
| Vua tiếng Việt | Tối đa 10 câu chính tả, 3 trái tim. Sai/hết giờ mất một tim. | 20 giây/câu |
| Thám tử lú | Tối đa 8 tình huống suy luận hài, 3 trái tim. | 25 giây/câu |
| Não đi ngược | Tối đa 8 câu, chọn nhận định SAI. Đúng nối combo cộng thêm điểm; sai xóa combo, vẫn được chơi tiếp. | 18 giây/câu |
| Chớp mắt mất ngọc | Tối đa 10 câu, đúng cộng điểm cơ bản và điểm tốc độ. Sai/hết giờ vẫn được chơi tiếp. | 10 giây/câu |

Điểm trò chơi không phải tiền. Trợ giúp mô phỏng tại máy, không gọi điện hay gửi dữ liệu cho người thật.

Đáp án đã chốt không đổi. Trả lời sau hạn được tính hết giờ, kể cả khi vừa quay lại tab. Tải lại giữ lượt đang chơi và thời điểm hết hạn; không cấp lại thời gian câu cũ. Khi xem phản hồi, nhấn Câu tiếp để bắt đầu thời hạn câu mới.

## Câu hỏi không lặp

Lưu ID theo từng trò/chủ đề. Một câu được đánh dấu đã xem khi xuất hiện, nên thoát ngang không làm câu ấy quay lại ngay. Những câu đã xếp vào lượt nhưng chưa xuất hiện vẫn là câu mới. Chơi tiếp lấy từ phần chưa xem; lượt cuối có thể ngắn hơn số câu chuẩn. Chỉ khi đã xem hết ngân hàng mới có nút Mở vòng mới. Việc đổi thứ tự đáp án không làm câu cũ thành câu mới.

Chỉ giữ một lượt đang chơi. Bắt đầu trò/chủ đề khác thay lượt cũ; các câu đã xem vẫn được ghi nhớ. Lưu 50 kết quả gần nhất và 100 hoạt động có thưởng gần nhất; ID câu đã xem và sự kiện đã thưởng vẫn được giữ.

## Thưởng và lửa

- **Nhận lửa:** nhấn nút một lần/ngày theo ngày địa phương, +10 XP và +1 ngọc. Nhận ngày liên tiếp tăng chuỗi. Bỏ ngày có thể khôi phục bằng lượt miễn phí; vượt hạn thì lần nhận tiếp theo bắt đầu chuỗi 1. Chơi hoặc ôn tập không tự nhận lửa.
- **Ôn luyện:** nhấn Hoàn thành lượt ôn tập ở cuối trang. **Thi thử/thi:** nộp bài có chọn ít nhất một đáp án. Cùng nhận +25 XP, +3 ngọc ở lần đầu mỗi đề/ngày; hai cách dùng chung hạn thưởng.
- **Trò chơi:** kết thúc lượt có ít nhất một câu đúng nhận +30 XP, +4 ngọc ở lần đủ điều kiện đầu mỗi trò/ngày. Các chủ đề của cùng trò dùng chung hạn thưởng; lượt tiếp theo vẫn chơi bình thường.
- Mỗi 100 XP lên một cấp; có thông báo lên cấp. Huy hiệu dựa trên hoạt động đã nhận thưởng, số trò đã trải nghiệm, XP và chuỗi tốt nhất.
- Ngọc đổi mũ, vịt và tên lửa trong cửa hàng Jeli. Vật phẩm đã mua không thu tiền lần nữa; có thể đổi trang bị.

Tiến trình phiên bản cũ vẫn giữ số dư, tên, trường và đồ đã mua. Chuỗi mới chỉ tăng qua nút nhận lửa; chuỗi tốt nhất cũ được giữ. Các huy hiệu đầu tiên đã đạt bằng bài lập trình trước đây vẫn được giữ. Dữ liệu bài lập trình cũ được giữ để không mất tiến trình đã kiếm, nhưng giao diện học lập trình đã gỡ.

## Kiến trúc

`data` chứa ngân hàng và cấu hình; `utils/gameEngine.js` chứa các phép chuyển trạng thái độc lập React; `sessionValidation.js` kiểm tra dữ liệu lưu; `pages/GamesPage.jsx` điều khiển timer và giao diện; `components/GameCards.jsx` dùng chung ở Home, Blog và danh sách trò. Mutation đi qua progressStore, lưu trước khi hiển thị và đọc dữ liệu mới nhất trước mỗi thay đổi.


## Lửa, khôi phục và Jeli (bản cập nhật)
- Nhận lửa vẫn cần bấm nút, không tự nhận khi truy cập. Mỗi ngày nhận 10 XP và 1 ngọc.
- Mỗi ngày bỏ lỡ dùng 1 lượt khôi phục của tháng chứa ngày đó, tối đa 3 lượt mỗi tháng dương lịch. Nhấn “Khôi phục và nhận lửa” để tiếp tục chuỗi. Ngày bỏ lỡ không có thêm XP/ngọc và không cộng vào số ngày chuỗi.
- Nếu số ngày bỏ lỡ vượt lượt còn lại thì chuỗi hiện tại mất, lần nhận tiếp bắt đầu từ 1. XP, vật phẩm và chuỗi tốt nhất vẫn giữ. Tháng mới có 3 lượt riêng; qua hai tháng tính từng ngày vào tháng tương ứng.
- Chúc mừng ở mốc 3, 7, mỗi 30 ngày (mốc tháng) và mỗi 365 ngày (mốc năm). Mốc tháng là quy ước 30 ngày, không phải tháng dương lịch.
- Màu lửa: cam dưới 3; vàng từ 3; xanh dương từ 7; xanh ngọc từ 30; tím từ 90; cầu vồng từ 365.
- Jeli tiến hóa ở cấp 1/3/5/10/20, dùng ảnh Jeli và component có sẵn. Phụ kiện mua bằng ngọc vẫn giữ nguyên và có thể trang bị trên các bậc Jeli.
- Mỗi lần tăng cấp có hiệu ứng chúc mừng. Không bật lại khi tải trang hoặc nhập bản sao. Chế độ giảm chuyển động tắt pháo giấy/chuyển động.
- Lượt khôi phục lưu cùng tiến trình, được xuất/nhập qua chuỗi, tệp và QR.

Các file sửa chính: progress.js, ProgressStrip.jsx, LevelUpNotice.jsx, JourneyPage.jsx, Home.jsx, Icon.jsx và campus.css.
