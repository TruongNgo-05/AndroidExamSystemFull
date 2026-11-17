# Kiến trúc và quy ước

Không có một cấu trúc thư mục duy nhất áp dụng cho mọi doanh nghiệp. Dự án này dùng cách nhóm theo chức năng, phù hợp với ứng dụng React hiện tại.

## Ranh giới

- `app`: lắp ghép tính năng, quản lý trạng thái và điều hướng toàn ứng dụng.
- `features`: giữ trang, thành phần, dữ liệu và logic gắn với một chức năng.
- `shared`: thành phần có thể dùng lại ở nhiều tính năng. Tiện ích nghiệp vụ thi vẫn nằm trong `features/quiz/utils`.
- `assets`: tài nguyên import bởi mã nguồn; `public` dành cho URL tĩnh.
- `styles`: CSS toàn cục giữ thứ tự tải hiện có để không đổi giao diện.

Thành phần History, Catalog dùng các tiện ích của Quiz vì chúng xử lý cùng dữ liệu đề thi. Router dùng dữ liệu đường dẫn Policies. Những phụ thuộc này được giữ rõ ràng qua import trực tiếp.

## Mở rộng

Thêm chức năng mới dưới `features/<ten-chuc-nang>`. Chỉ tạo thư mục con khi có file sử dụng. Không thêm thư mục rỗng hay lớp trung gian không cần thiết. Dịch vụ API nằm trong feature sở hữu nó; dịch vụ dùng chung có thể chuyển sang `shared/services` khi thực sự cần.

Đây là lần sắp xếp mã nguồn; đăng nhập và backend chưa được bổ sung. Trạng thái ứng dụng vẫn do App hiện tại quản lý.

## Kiểm tra khi đổi tên hoặc di chuyển

Cập nhật cả import thường, lazy import, asset có `?url` và tests. Chạy `npm test` và `npm run build`. Không đổi tên đường dẫn trong `public` nếu dữ liệu câu hỏi đang tham chiếu URL đó.
