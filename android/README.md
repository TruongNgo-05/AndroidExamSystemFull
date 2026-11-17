# Android Java 3.0.0

Mở thư mục này bằng Android Studio, dùng Gradle JDK 17. Chạy backend trước, rồi Run app trên Medium Phone API 26 trở lên.

Launcher `WebActivity.java` mở giao diện Quiz-HUBT từ backend, mặc định http://10.0.2.2:8080. Menu ⋮ cho phép đổi URL, tải lại, mở trình duyệt hoặc giao diện native Java `MainActivity.java` đã giữ lại.

Backend phục vụ web build sẵn nên không cần npm khi chỉ chạy. Với điện thoại thật, đổi URL thành IP LAN máy tính. APK debug cho phép HTTP; release cần HTTPS. Không nhúng API key vào app.

Build: `gradlew.bat assembleDebug lintDebug`. Xem ../README.md để cấu hình MySQL/backend và ../VERIFICATION.md để biết giới hạn kiểm tra.
