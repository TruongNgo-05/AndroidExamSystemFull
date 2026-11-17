# Màu sáng/tối và banner Home

- ThemeProvider ở `src/app/context/ThemeContext.jsx` dùng hook useLocalStorage có sẵn. Khóa lưu `quizconsole_theme` không đổi. AppLayout và Blog nhận cùng trạng thái; ConfigProvider áp dụng màu Ant Design cho cả Blog và thông báo Jeli.
- Blog giữ bố cục cũ, không bo tròn, video cũ và hàng các trường. Màu sáng dùng nền trắng/mint, chữ tối và xanh ngọc; màu tối giữ nền tối. Nút ThemeToggle dùng Button và Icon có sẵn.
- CSS Blog nằm trong `src/features/blog/styles/blog.css`; phần palette sáng được giới hạn bởi `:root[data-theme="light"] .jler-root`. Không ghi đè màu toàn ứng dụng.
- Khung Jeli trong Hành trình dùng nền từ theme cho mọi bậc tiến hóa, thay nền trắng cố định.
- Banner mới: CTA ôn thi, trò chơi, thống kê thực của trường, ảnh Jeli, cấp và XP thực. CSS riêng ở `src/styles/home-banner.css`, giữ tràn màn hình; mobile xếp nội dung thành một cột.
- ProgressStrip được dùng lại ngay dưới banner; phần trợ giúp khôi phục đặt sau các chỉ số.

Key và dữ liệu đề/ảnh/trường giữ nguyên.
