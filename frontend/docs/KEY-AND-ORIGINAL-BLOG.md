# Đổi key và khôi phục Blog

Key tải PDF hiện tại giữ nguyên: `J7m-Q2x9`. Sửa hằng DOWNLOAD_KEY trong `src/features/quiz/config/downloadKeyConfig.js`, hoặc chạy:

```sh
npm run key:set
```

Gõ/dán key 8 ký tự gồm chữ, số và dấu gạch, nhấn Enter. Ký tự hiện khi gõ; Backspace hoạt động bình thường. Nếu terminal không tương tác, dùng:

```sh
npm run key:set -- "Ab3-4xY8"
```

Sau khi đổi, chạy `npm run build` và cập nhật bản triển khai. Key sai định dạng không ghi đè cấu hình. Key và API trong geminiService.js được giữ trong source theo yêu cầu; frontend không phải ranh giới bảo vệ dữ liệu.

Blog khôi phục từ `upload/thi-jler-campus - Copy.zip`: bố cục gốc, nền tối, Jeli, hạt nền, chữ chạy, video cũ, thư viện một hàng, đánh giá và hỏi đáp. Bỏ nội dung học lập trình đã bị gỡ, không đưa lại module đó. Bổ sung hàng các trường từ SCHOOLS bằng ContentRail.jsx; dùng lại BrandLogo, SearchBar, SiteFooter và BackToTop. Khối nội dung, video, thẻ và nút không bo tròn; hiệu ứng hover chỉ chạy desktop.

Tiến trình, QR chuyển máy, màu lửa, khôi phục chuỗi và bậc Jeli giữ nguyên bản mới.
