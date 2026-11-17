const QUIZ_SETS_UNIX = [
  {
    id: "he_dieu_hanh_unix",
    majorId: "cntt",
    title: "Hệ điều hành Unix",
    description: "Bộ câu hỏi trắc nghiệm Hệ điều hành Unix",
    questions: [
      {
        q: "Mật khẩu đảm bảo cho mỗi phiên làm việc trong Unix. Để thay đổi mật khẩu, ta dùng lệnh nào?",
        o: ["passwd", "Passwd", "password", "pass"],
        a: 0,
      },
      {
        q: "Lệnh passwd sử dụng để làm gì?",
        o: [
          "Thay đổi mật khẩu của user",
          "Không có lệnh này",
          "Xem quyền truy nhập của user",
          "Xem tất cả thông tin của các user",
        ],
        a: 0,
      },
      {
        q: "Lệnh nào sau đây dùng để kết thúc phiên làm việc trong Unix?",
        o: ["$w", "$q", "$exit", "$D"],
        a: 2,
      },
      {
        q: "Lệnh nào sau đây dùng để kết thúc phiên làm việc trong Unix?",
        o: ["Ctrl+D", "Alt+D", "$x", "Ctrl+G"],
        a: 0,
      },
      {
        q: "Lệnh wc dùng để làm gì?",
        o: [
          "Xem người làm việc trên mạng",
          "Hiển thị tên người sử dụng",
          "Hiển thị quyền sở hữu của file",
          "Đếm và hiển thị số dòng, từ và ký tự của một file",
        ],
        a: 3,
      },
      {
        q: "Lệnh who dùng làm gì?",
        o: [
          "Hiển thị tên người sử dụng",
          "Hiển thị quyền sở hữu của file",
          "Đếm và hiển thị số dòng, từ và ký tự của một file",
          "Liệt kê tên những người đang sử dụng hệ",
        ],
        a: 3,
      },
      {
        q: "Muốn xem ai là người đang làm việc tại terminal, ta sử dụng lệnh nào?",
        o: ["whoami", "who", "tty", "tee"],
        a: 0,
      },
      {
        q: "Muốn xem ai là người đang làm việc tại terminal, ta sử dụng lệnh nào?",
        o: ["who", "who am I", "whoiam", "tty"],
        a: 1,
      },
      {
        q: "Xem tên terminal ta đang làm việc sử dụng lệnh?",
        o: ["tty", "tee", "who am I", "whoami"],
        a: 0,
      },
      {
        q: "Lệnh echo dùng để làm gì?",
        o: [
          "Liệt kê tiến trình",
          "Hiển thị các thông báo trên màn hình",
          "Tất cả đều đúng",
          "Liệt kê danh sách file",
        ],
        a: 1,
      },
      {
        q: "Lệnh man dùng để làm gì?",
        o: [
          "Hiển thị chú thích của một lệnh cụ thể",
          "Liệt kê tiến trình",
          "Hiển thị các thông báo trên màn hình",
          "Liệt kê danh sách file",
        ],
        a: 0,
      },
      {
        q: "Lệnh cal dùng để làm gì?",
        o: [
          "Hiển thị lịch của tháng hoặc năm cụ thể",
          "Hiển thị ngày tháng hiện thời",
          "Liệt kê danh sách file",
          "Liệt kê tiến trình",
        ],
        a: 0,
      },
      {
        q: "Lệnh uname dùng để làm gì?",
        o: [
          "Hiển thị ngày tháng hiện thời",
          "Hiển thị thông tin về tên hệ điều hành",
          "Liệt kê tiến trình",
          "Liệt kê danh sách file",
        ],
        a: 1,
      },
      {
        q: "Lệnh rm dùng để làm gì?",
        o: [
          "Liệt kê tiến trình",
          "Hiển thị các thông báo trên màn hình",
          "Xóa file",
          "Liệt kê danh sách file",
        ],
        a: 2,
      },
      {
        q: "Lệnh ps dùng để làm gì?",
        o: [
          "Hiển thị các thông báo trên màn hình",
          "Tất cả đều đúng",
          "Liệt kê danh sách file",
          "Liệt kê các tiến trình đã và đang hoạt động trong hệ thống",
        ],
        a: 3,
      },
      {
        q: "Unix có mấy kiểu file?",
        o: ["4", "2", "1", "3"],
        a: 3,
      },
      {
        q: "Kiểu file bình thường trong Unix là:",
        o: [
          "Chứa danh sách các tên có thể truy cập tới như file thường, file đặc biệt hoặc các thư mục con",
          "Tập hợp các thông tin (ASCII hoặc binary)",
          "Tất cả đều đúng",
          "Các file liên quan đến các thiết bị ngoại vi cứng và/hoặc cơ chế truyền tin",
        ],
        a: 1,
      },
      {
        q: "Kiểu file thư mục trong Unix là:",
        o: [
          "Tất cả đều đúng",
          "Tập hợp các thông tin (ASCII hoặc binary)",
          "Chứa danh sách các tên có thể truy cập tới như file thường, file đặc biệt hoặc các thư mục con",
          "Các file liên quan đến các thiết bị ngoại vi cứng và/hoặc cơ chế truyền tin",
        ],
        a: 2,
      },
      {
        q: "Kiểu file đặc biệt trong Unix là:",
        o: [
          "Các file liên quan đến các thiết bị ngoại vi cứng và/hoặc cơ chế truyền tin",
          "Tập hợp các thông tin (ASCII hoặc binary)",
          "Tất cả đều đúng",
          "Chứa danh sách các tên có thể truy cập tới như file thường, file đặc biệt hoặc các thư mục con",
        ],
        a: 0,
      },
      {
        q: "Lệnh pwd dùng để làm gì?",
        o: [
          "Đổi tên file",
          "Hiển thị tên thư mục đang làm việc",
          "Hiển thị file trong thư mục hiện thời",
          "Di chuyển thư mục",
        ],
        a: 1,
      },

      {
        q: "Để di chuyển giữa từ thư mục gốc tới thư mục etc ta sử dụng lệnh nào?",
        o: ["$pwd", "$cd /etc", "$cd ..", "$cd"],
        a: 1,
      },
      {
        q: "Từ thư mục con muốn trở về thư mục cha ta làm thế nào?",
        o: ["Tất cả đều đúng", "$cd", "$cd ..", "$cd/"],
        a: 2,
      },
      {
        q: "Tại vị trí thư mục bất kỳ, muốn trở về thư mục tiếp dẫn, ta dùng lệnh thế nào?",
        o: ["$cd", "Tất cả đều sai", "$cd\\", "$cd ../"],
        a: 0,
      },
      {
        q: "Lệnh $ls có tác dụng gì?",
        o: [
          "Di chuyển thư mục",
          "Liệt kê các thư mục",
          "Hiển thị nội dung của thư mục",
          "Hiển thị nội dung của file",
        ],
        a: 2,
      },
      {
        q: "Tại thư mục tiếp dẫn, muốn xem nội dung của thư mục bin, ta dùng lệnh?",
        o: ["$ls /bin", "$ls -l", "$ls", "$ls bin"],
        a: 0,
      },
      {
        q: "Muốn hiển thị nội dung thư mục đồng thời xem thêm thông tin chi tiết của file, ta dùng lệnh nào?",
        o: ["$ls /", "$ls", "$ls -l", "$ls -i"],
        a: 2,
      },
      {
        q: "Muốn hiển thị nội dung thư mục đồng thời xem thêm thông tin chi tiết của tất cả các file, kể cả file ẩn, ta dùng lệnh nào?",
        o: ["$ls -i", "$ll", "$ls -r", "$ls"],
        a: 1,
      },
      {
        q: "Xem nội dung thư mục theo cột ta dùng lệnh?",
        o: ["$ls", "$ll", "$lc", "$ls -c"],
        a: 2,
      },
      {
        q: "Khi dùng lệnh $ls -l, các file bình thường được biểu diễn như thế nào?",
        o: [
          "Có ký tự d ở đầu",
          "Có ký tự c ở đầu",
          "Có ký tự - ở đầu",
          "Có ký tự b ở đầu",
        ],
        a: 2,
      },
      {
        q: "Khi dùng lệnh $ll, các file thư mục được biểu diễn như thế nào?",
        o: [
          "Có ký tự b ở đầu",
          "Có ký tự c ở đầu",
          "Có ký tự - ở đầu",
          "Có ký tự d ở đầu",
        ],
        a: 3,
      },
      {
        q: "Khi dùng lệnh $ls -l, các file đặc biệt được biểu diễn như thế nào? Tìm câu trả lời đúng nhất.",
        o: [
          "Có ký tự b ở đầu",
          "Có ký tự d ở đầu",
          "Có ký tự c hoặc b ở đầu",
          "Có ký tự c ở đầu",
        ],
        a: 2,
      },
      {
        q: "Để tạo thư mục mới, ta dùng lệnh:",
        o: ["$rm", "$mkdir", "$makedir", "$md"],
        a: 1,
      },
      {
        q: "Xóa một thư mục rỗng ta dùng lệnh:",
        o: [
          "$rm -ri [tên thư mục]",
          "$rmdir [tên thư mục]",
          "$rm [tên thư mục]",
          "$rdir [tên thư mục]",
        ],
        a: 1,
      },
      {
        q: "Xóa một thư mục không rỗng, ta dùng lệnh",
        o: ["$rm", "$rmdir -r", "$rmdir -i", "$rm -ri"],
        a: 3,
      },
      {
        q: "Muốn hiển thị tính chất của một file, ta dùng lệnh:",
        o: ["$cat", "$vedit", "$file", "$view"],
        a: 2,
      },
      {
        q: "Muốn xem nội dung của một file thường ASCII",
        o: ["$cat", "$vedit", "$vi", "$file"],
        a: 0,
      },
      {
        q: "Muốn tạo một file thường ASCII",
        o: ["$cat", "$vi", "$file", "$vedit"],
        a: 0,
      },
      {
        q: "Trong các quy tắc đặt tên file của Unix, quy tắc nào sau đây là sai?",
        o: [
          "Không dùng ký tự đặc biệt",
          "Tất cả đều đúng",
          "Tên có dấu chấm ở đầu là file ẩn",
          "Phân biệt chữ thường và chữ hoa",
        ],
        a: 1,
      },
      {
        q: "Trong các quy tắc đặt tên file của Unix, quy tắc nào sau đây là sai?",
        o: [
          "Tên có dấu chấm ở đầu là file ẩn",
          "Tất cả đều đúng",
          "Phân biệt chữ thường và chữ hoa",
          "Dùng ký tự đặc biệt",
        ],
        a: 3,
      },
      {
        q: "Trong các quy tắc đặt tên file của Unix, quy tắc nào sau đây là sai?",
        o: [
          "Tên có dấu gạch dưới ở đầu là file ẩn",
          "Phân biệt chữ thường và chữ hoa",
          "Không dùng ký tự đặc biệt",
          "Tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Trong các quy tắc đặt tên file của Unix, quy tắc nào sau đây là sai?",
        o: [
          "Tên có dấu chấm ở đầu là file ẩn",
          "Không dùng ký tự đặc biệt",
          "Không phân biệt chữ thường và chữ hoa",
          "Tất cả đều đúng",
        ],
        a: 2,
      },
      {
        q: "Muốn xóa một file thường, ta dùng lệnh:",
        o: ["Tất cả đều đúng", "$rm -f", "$rm", "$rm -i"],
        a: 0,
      },
      {
        q: "Khi xóa một file thường, nếu không muốn hiển thị thông báo nhắc nhở, ta sử dụng lệnh:",
        o: ["$rm -r", "$rm -i", "$rm -f", "Tất cả đều đúng"],
        a: 2,
      },
      {
        q: "Khi xóa một file thường, nếu muốn hiển thị thông báo nhắc nhở ta dùng lệnh:",
        o: ["$rm -f", "$rm -i", "Tất cả đều đúng", "$rm -r"],
        a: 1,
      },
      {
        q: "Người sử dụng trong Unix được mô tả bằng mấy loại thông tin?",
        o: ["2", "7", "4", "5"],
        a: 1,
      },
      {
        q: "Các thông tin người sử dụng được lưu trong file nào?",
        o: ["password", "passwd", "loginame", "logname"],
        a: 1,
      },
      {
        q: "Muốn hiển thị thông tin người dùng ta sử dụng lệnh nào?",
        o: [
          "$pw groupshow",
          "$cat /etc/passwd",
          "$defuser /etc/passwd",
          "$pw usershow",
        ],
        a: 3,
      },
      {
        q: "Muốn hiển thị thông tin tất cả người dùng ta sử dụng lệnh nào?",
        o: [
          "$cat /etc/passwd",
          "$cat /passwd",
          "$ee /usr/passwd",
          "$cat /password",
        ],
        a: 0,
      },
      {
        q: "Muốn hiển thị thông tin người tên là administrator dùng ta sử dụng lệnh nào?",
        o: [
          "$cat /etc/group",
          "$eec /etc/passwd",
          "$pw show administrator",
          "$cat /password/administrator",
        ],
        a: 2,
      },
      {
        q: "Trong Unix, muốn tạo người dùng mới ta sử dụng lệnh?",
        o: ["$defuser", "$defgrp", "$adduser", "$define username"],
        a: 2,
      },
      {
        q: "Trong Unix, muốn tạo người dùng mới ta sử dụng lệnh?",
        o: ["$define username", "$defgrp", "$defuser", "$pw useradd"],
        a: 3,
      },
      {
        q: "Nhóm người sử dụng là gì?",
        o: [
          "Những người sử dụng dùng chung một terminal",
          "Tập hợp người sử dụng có chung một mục đích",
          "Tập hợp những người dùng có chung một công việc",
          "Những người sử dụng dùng chung các file của nhau",
        ],
        a: 3,
      },
      {
        q: "Thông tin nhóm người dùng được lưu ở file nào?",
        o: ["/bin/groupinfo", "/etc/group", "/etc/groupinfo", "/etc/password"],
        a: 1,
      },
      {
        q: "Thông tin người dùng được lưu ở file nào?",
        o: ["/etc/passwd", "/etc/password", "/usr/passwd", "/etc/user"],
        a: 3,
      },
      {
        q: "Muốn hiển thị danh sách nhóm của người dùng tham gia, ta dùng lệnh?",
        o: ["$define", "$cat /etc/groupinfo", "$create", "$id [username]"],
        a: 3,
      },
      {
        q: "Muốn tạo nhóm người dùng mới ta dùng lệnh?",
        o: [
          "$define groupname",
          "$defgrp groupname",
          "$create groupname",
          "$pw groupadd groupname",
        ],
        a: 3,
      },
      {
        q: "Muốn thêm user mới vào nhóm ta dùng lệnh?",
        o: [
          "$adduser username groupname",
          "$define groupname",
          "$defgrp groupname",
          "$pw groupmod username",
        ],
        a: 3,
      },
      {
        q: "Quyền thâm nhập file được chia làm mấy nhóm?",
        o: ["2", "1", "3", "4"],
        a: 2,
      },
      {
        q: "Đối với thư mục, quyền r là quyền gì?",
        o: [
          "Tạo và xóa trong thư mục",
          "Qua lại giữa các thư mục",
          "Đọc nội dung thư mục",
          "Tất cả đều sai",
        ],
        a: 2,
      },
      {
        q: "Đối với thư mục, quyền w là quyền gì?",
        o: [
          "Qua lại giữa các thư mục",
          "Đọc nội dung thư mục",
          "Tất cả đều sai",
          "Tạo và xóa trong thư mục",
        ],
        a: 3,
      },
      {
        q: "Đối với thư mục, quyền x là quyền gì?",
        o: [
          "Tạo và xóa trong thư mục",
          "Tìm được file và thư mục con trong thư mục đó",
          "Đọc nội dung thư mục",
          "Tất cả đều sai",
        ],
        a: 1,
      },
      {
        q: "Đối với file, quyền r là quyền gì?",
        o: [
          "Tạo và xóa trong thư mục",
          "Tất cả đều sai",
          "Qua lại giữa các thư mục",
          "Đọc nội dung file",
        ],
        a: 3,
      },
      {
        q: "Đối với file, quyền w là quyền gì?",
        o: [
          "Ghi file",
          "Đọc nội dung file",
          "Tìm kiếm file",
          "Qua lại giữa các thư mục",
        ],
        a: 0,
      },
      {
        q: "Đối với file, quyền x là quyền gì?",
        o: [
          "Chạy file",
          "Tạo và xóa",
          "Tất cả đều sai",
          "Truyền thông tin giữa các file",
        ],
        a: 0,
      },
      {
        q: "Muốn thay đổi quyền thâm nhập file ta dùng lệnh?",
        o: ["$chgrp", "$mask", "$chuser", "$chmod"],
        a: 3,
      },
      {
        q: "Lệnh $chmod 754 file1 có tác dụng gì?",
        o: [
          "Nhóm sở hữu file1 không có quyền ghi file1",
          "Người sở hữu file1 có tất cả các quyền với file1",
          "Những người sử dụng khác có quyền đọc file1",
          "Tất cả các câu trên",
        ],
        a: 3,
      },
      {
        q: "Lệnh $chmod 712 file1 có tác dụng gì?",
        o: [
          "Người sở hữu có tất cả các quyền, nhóm sở hữu có quyền ghi, người sử dụng khác có quyền chạy",
          "Người sở hữu có tất cả các quyền, nhóm sở hữu có quyền chạy, người sử dụng khác có quyền ghi",
          "Người sở hữu có tất cả các quyền, nhóm sở hữu có quyền đọc và chạy, người sử dụng khác có quyền ghi và chạy",
          "Người sở hữu có tất cả các quyền, nhóm sở hữu có quyền chạy, người sử dụng khác có quyền đọc",
        ],
        a: 1,
      },
      {
        q: "Lệnh $chmod u-x file1 có tác dụng gì?",
        o: [
          "Bớt quyền ghi của người sở hữu",
          "Bớt quyền chạy của người sử dụng khác",
          "Bớt quyền chạy của người sở hữu",
          "Bớt quyền chạy của nhóm sở hữu",
        ],
        a: 2,
      },
      {
        q: "Lệnh $chmod g-w file1 có tác dụng gì?",
        o: [
          "Bớt quyền ghi của nhóm sở hữu",
          "Bớt quyền ghi của người sử dụng khác",
          "Bớt quyền ghi của người sở hữu",
          "Bớt quyền chạy của người sở hữu",
        ],
        a: 0,
      },
      {
        q: "Lệnh $chmod a+x file1 có tác dụng gì?",
        o: [
          "Thêm quyền ghi cho người sở hữu",
          "Thêm quyền chạy cho nhóm sở hữu",
          "Thêm quyền chạy cho người sử dụng khác",
          "Thêm quyền chạy cho tất cả",
        ],
        a: 3,
      },
      {
        q: "Lệnh $chmod u=w file2 có tác dụng gì?",
        o: [
          "Người sở hữu có quyền đọc",
          "Người sở hữu có quyền ghi",
          "Người sở hữu có quyền chạy",
          "Người sở hữu có quyền thiết lập",
        ],
        a: 1,
      },
      {
        q: "Muốn đặt quyền truy cập ngầm định ta dùng lệnh nào?",
        o: ["$chgrp", "$unmask", "$umask", "$chmod"],
        a: 2,
      },
      {
        q: "Thay đổi người sở hữu ta dùng lệnh?",
        o: ["$chown", "$chmod", "$chuser", "$chgrp"],
        a: 0,
      },
      {
        q: "Thay đổi nhóm sở hữu ta dùng lệnh?",
        o: ["$chgrp", "$chgroup", "$chown", "$chmod"],
        a: 0,
      },
      {
        q: "Muốn sao chép file hoặc thư mục ta dùng lệnh?",
        o: ["copy con", "$cp", "$copie", "$copy"],
        a: 1,
      },
      {
        q: "Để di chuyển file hoặc thư mục ta dùng lệnh?",
        o: ["$mvdir hoặc $mv", "$mv", "$move", "$mv -d hoặc $mv -i"],
        a: 1,
      },
      {
        q: "Để tạo ra một liên kết với file hiện thời ta dùng lệnh?",
        o: ["$linkfile", "$ln", "$link và $ln", "$link"],
        a: 1,
      },
      {
        q: "Muốn tìm kiếm một file hoặc thư mục ta dùng lệnh?",
        o: ["$find", "$go", "Ctrl+F", "$search"],
        a: 0,
      },
      {
        q: "Tìm kiếm file theo tên file ta sử dụng lệnh?",
        o: ["$find -n", "$find -name", "$search -name", "$search -n"],
        a: 1,
      },
      {
        q: "Tìm kiếm file theo tên người sở hữu ta dùng lệnh?",
        o: [
          "$search -username",
          "$find -user",
          "$search -user",
          "$find -username",
        ],
        a: 1,
      },
      {
        q: "Tìm kiếm file theo nội dung của file ta dùng lệnh?",
        o: ["grep", "$find -user", "$find -username", "$search -user"],
        a: 0,
      },
      {
        q: "Có bao nhiêu chế độ hoạt động trong hệ thống Unix?",
        o: ["7", "5", "4", "6"],
        a: 0,
      },
      {
        q: "Chế độ hoạt động ngầm định trong Unix là chế độ nào?",
        o: [
          "Chế độ đa người dùng, giao diện text, không hỗ trợ kết nối ACPI",
          "Chế độ Safe Mode",
          "Chế độ đơn người dùng",
          "Chế độ đa người dùng, giao diện text, hỗ trợ mạng",
        ],
        a: 3,
      },
      {
        q: "Chế độ hoạt động 1 của hệ điều hành Unix có tác dụng gì?",
        o: [
          "Chế độ đơn người dùng",
          "Chế độ Safe Mode",
          "Chế độ đa người dùng, giao diện text",
          "Chế độ đa người dùng, giao diện text, không hỗ trợ kết nối mạng",
        ],
        a: 2,
      },
      {
        q: "Chế độ hoạt động 2 của hệ điều hành Unix có tác dụng gì?",
        o: [
          "Chế độ đơn người dùng",
          "Chế độ Safe Mode",
          "Chế độ đa người dùng, giao diện text",
          "Chế độ đa người dùng, giao diện text, không hỗ trợ kết nối mạng",
        ],
        a: 3,
      },
      {
        q: "Chế độ hoạt động 3 của hệ điều hành Unix có tác dụng gì?",
        o: [
          "Chế độ Safe Mode",
          "Chế độ đơn người dùng",
          "Chế độ đa người dùng, giao diện text, không hỗ trợ kết nối mạng",
          "Chế độ đa người dùng, giao diện text",
        ],
        a: 0,
      },
      {
        q: "Chế độ hoạt động 5 của hệ điều hành Unix có tác dụng gì?",
        o: [
          "Chế độ đơn người dùng",
          "Chế độ đa người dùng, giao diện text, không hỗ trợ kết nối mạng",
          "Chế độ login chi tiết",
          "Chế độ đa người dùng, giao diện text",
        ],
        a: 2,
      },
      {
        q: "Chế độ hoạt động 6 của hệ điều hành Unix có tác dụng gì?",
        o: [
          "Trở về màn hình loading",
          "Chế độ đa người dùng, giao diện text",
          "Chế độ đơn người dùng",
          "Chế độ đa người dùng, giao diện text, không hỗ trợ kết nối mạng",
        ],
        a: 0,
      },
      {
        q: "Có bao nhiêu cách thêm người dùng mới trong Unix?",
        o: ["3", "4", "1", "2"],
        a: 3,
      },
      {
        q: "Lệnh nào sau đây sử dụng để sửa đổi thông tin người sử dụng?",
        o: ["pw usermod", "groupmod", "usermod", "pw useradd"],
        a: 0,
      },
      {
        q: 'Sử dụng lệnh date, máy đưa ra kết quả là Thursday Mar 25 11:13:48 ICT 2011. Nếu gõ lệnh $date "+DATE: %Y - %m - %d", máy sẽ hiển thị kết quả nào?',
        o: [
          "DATE: 2011 - Mar - 25",
          "DATE: Fri Jan 1 00:00:00 ICT 2010",
          "DATE: 2011 - 03 - 25",
          "Thu Thursday Mar March",
        ],
        a: 2,
      },
      {
        q: 'Sử dụng lệnh date, máy đưa ra kết quả là Thu Apr 19 21:00:29 ICT 2012. Nếu gõ lệnh $date "TIME: %H:%M:%S", máy sẽ hiển thị kết quả nào?',
        o: [
          "TIME: 11:00:48",
          "TIME: 22:00:20",
          "Không có đáp án đúng",
          "TIME: 21:00:29",
        ],
        a: 3,
      },
      {
        q: "Sử dụng lệnh date, máy đưa ra kết quả là Thu Apr 19 21:00:29 ICT 2012. Nếu gõ lệnh $date -v1m -v+1y, máy sẽ hiển thị kết quả nào?",
        o: [
          "Wed Jan 3 23:50:50 ICT 2011",
          "Thu Thursday Mar March",
          "Sat Jan 19 21:00:29 ICT 2013",
          "Thu Thursday",
        ],
        a: 2,
      },
      {
        q: "Lệnh date -v1d -v3m -v0y -v-1d in ra kết quả gì?",
        o: [
          "Thu Thursday Mar March",
          "Fri Jan 1 00:00:00 ICT 2010",
          "Tue Fed 29 21:12:26 ITC 2000",
          "Wed Jan 3 23:50:50 ICT 2001",
        ],
        a: 2,
      },
      {
        q: "Sử dụng lệnh date, máy đưa ra kết quả là Thu Apr 19 21:00:29 ICT 2012. Nếu gõ lệnh $date -v1d -v+1m -v-1d -v-fri, máy sẽ hiển thị kết quả nào?",
        o: [
          "Fri Friday",
          "Fri Apr 27 21:00:29 ICT 2012",
          "27/04/2012",
          "Fri Jan 1 00:00:00 ICT 2010",
        ],
        a: 1,
      },
      {
        q: "Lệnh $cal 1 2011 có tác dụng gì?",
        o: [
          "Hiển thị lịch tháng hiện tại",
          "Hiển thị lịch của tháng 1 năm 2011, với số ngày trong tháng được biểu diễn dưới dạng số ngày trong năm",
          "Hiển thị lịch tháng 1 năm 2011",
          "Hiển thị lịch của năm hiện thời",
        ],
        a: 2,
      },
      {
        q: "Lệnh $cal -y có tác dụng gì?",
        o: [
          "Hiển thị lịch tháng 1 năm 2011",
          "Hiển thị lịch của năm hiện thời",
          "Hiển thị lịch tháng hiện tại",
          "Hiển thị lịch của tháng 1 năm 2011, với số ngày trong tháng được biểu diễn dưới dạng số ngày trong năm",
        ],
        a: 1,
      },
      {
        q: "Lệnh $cal -j 1 2011 có tác dụng gì?",
        o: [
          "Hiển thị lịch tháng 1 năm 2011",
          "Hiển thị lịch của tháng 1 năm 2011, với số ngày trong tháng được biểu diễn dưới dạng số ngày trong năm",
          "Hiển thị lịch của năm hiện thời",
          "Hiển thị lịch tháng hiện tại",
        ],
        a: 1,
      },
      {
        q: "Lệnh $cal -m 1 2011 có tác dụng gì?",
        o: [
          "Hiển thị lịch tháng 1 năm 2011",
          "Hiển thị lịch của năm hiện thời",
          "Hiển thị tháng 1 năm 2011 với định dạng thứ Hai là ngày đầu tiên trong tuần",
          "Hiển thị lịch tháng hiện tại",
        ],
        a: 2,
      },
      {
        q: 'Lệnh $PS1="[\\h@\\u \\w : \\d]$" có tác dụng gì?',
        o: [
          "Hiển thị ngày tháng trong dấu nhắc cấp 1",
          "Đổi dấu nhắc cấp 2 thành dấu nhắc mới",
          "Đổi dấu nhắc cấp 1 thành dấu nhắc mới",
          "Chèn thêm các trường hiển thị ngày giờ vào dấu nhắc cấp 2",
        ],
        a: 2,
      },
      {
        q: 'Người dùng gõ lệnh $PS1="[\\h@\\u \\w : \\d]$". Dấu nhắc cấp 1 sẽ hiển thị những thông tin gì?',
        o: [
          "Tên người sử dụng",
          "Tất cả các thông tin trên",
          "Tên máy",
          "Tên đầy đủ của thư mục hiện thời",
        ],
        a: 1,
      },
      {
        q: 'Người dùng gõ lệnh $PS1="[\\h]$". Dấu nhắc cấp 1 sẽ hiển thị những thông tin gì?',
        o: [
          "Ngày hiện tại",
          "Tên đầy đủ của thư mục hiện thời",
          "Tên máy",
          "Tên người sử dụng",
        ],
        a: 2,
      },
      {
        q: 'Người dùng gõ lệnh $PS1="[\\u]$". Dấu nhắc cấp 1 sẽ hiển thị những thông tin gì?',
        o: [
          "Tên người sử dụng",
          "Ngày hiện tại",
          "Tên đầy đủ của thư mục hiện thời",
          "Tên máy",
        ],
        a: 0,
      },
      {
        q: 'Người dùng gõ lệnh $PS1="[\\d]$". Dấu nhắc cấp 1 sẽ hiển thị những thông tin gì?',
        o: [
          "Ngày hiện tại",
          "Tên người sử dụng",
          "Tên máy",
          "Tên đầy đủ của thư mục hiện thời",
        ],
        a: 0,
      },
      {
        q: 'Người dùng gõ lệnh $PS1="[\\w]$". Dấu nhắc cấp 1 sẽ hiển thị những thông tin gì?',
        o: [
          "Ngày hiện tại",
          "Tên người sử dụng",
          "Tên đầy đủ của thư mục hiện thời",
          "Tên máy",
        ],
        a: 2,
      },
      {
        q: "Có bao nhiêu loại file liên kết?",
        o: ["1", "2", "3", "4"],
        a: 1,
      },
      {
        q: "Liên kết cứng là gì?",
        o: [
          "Bản sao của 1 file",
          "File đang tồn tại",
          "File liên kết tới ổ cứng",
          "File tham chiếu theo tên tới một file khác",
        ],
        a: 1,
      },
      {
        q: "Liên kết tượng trưng là gì?",
        o: [
          "File đang tồn tại",
          "Bản sao của 1 file",
          "File liên kết tới ổ cứng",
          "File tham chiếu theo tên tới một file khác",
        ],
        a: 3,
      },
      {
        q: "Muốn tạo 1 liên kết tượng trưng sử dụng lệnh?",
        o: ["cp", "makefile", "ln -s", "mv"],
        a: 2,
      },
      {
        q: "File manual.txt là file text, nó có quyền thâm nhập rw-r-----. Vậy quyền truy nhập của người sở hữu file manual.txt là?",
        o: ["Đọc, ghi", "Chỉ ghi", "Chỉ đọc", "Đọc, ghi, chạy"],
        a: 0,
      },
      {
        q: "File manual.txt là file text, nó có quyền thâm nhập rw-r-----. Vậy quyền truy nhập của nhóm sở hữu file manual.txt là?",
        o: ["Đọc, ghi, chạy", "Chỉ ghi", "Chỉ đọc", "Đọc, ghi"],
        a: 2,
      },
      {
        q: "File manual.txt là file text, nó có quyền thâm nhập rw-r-----. Vậy quyền truy nhập của người sử dụng khác là?",
        o: ["Không có quyền nào", "Đọc, ghi, chạy", "Đọc, ghi", "Chỉ đọc"],
        a: 0,
      },
      {
        q: "Test là một thư mục, dùng lệnh $chmod 751 Test, thư mục có những thay đổi gì?",
        o: [
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có xem thư mục",
          "Thông báo lỗi",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có quyền tìm kiếm thư mục",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác không có quyền đối với thư mục Test",
        ],
        a: 1,
      },
      {
        q: "Test là một thư mục, dùng lệnh $chmod 750 Test, thư mục có những thay đổi gì?",
        o: [
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có quyền tìm kiếm thư mục",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác không có quyền đối với thư mục Test",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có quyền ghi thư mục",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có xem thư mục",
        ],
        a: 0,
      },
      {
        q: "Test là một thư mục, dùng lệnh $chmod 747 Test, thư mục có những thay đổi gì?",
        o: [
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có xem thư mục",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có quyền tìm kiếm thư mục",
          "Thông báo lỗi",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác không có quyền đối với thư mục Test",
        ],
        a: 2,
      },
      {
        q: "Test là một thư mục, dùng lệnh $chmod 707 Test, thư mục có những thay đổi gì?",
        o: [
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có xem thư mục",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu không có quyền đối với thư mục và người sử dụng khác đầy đủ các quyền",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác có quyền tìm kiếm thư mục",
          "Người sở hữu có đầy đủ các quyền, nhóm sở hữu có quyền đọc, ghi và người sử dụng khác không có quyền đối với thư mục Test",
        ],
        a: 1,
      },
      {
        q: "Test là một thư mục, có thể gán tổ hợp các quyền như thế nào cho Test?",
        o: ["r-x", "Tất cả các quyền trên", "rwx", "---"],
        a: 1,
      },
      {
        q: "Muốn xem tất cả các file trong thư mục Test, kể cả file ẩn, đồng thời hiển thị dưới dạng cột, ta làm thế nào?",
        o: ["ls -aC", "ls -lR", "ls -lC", "ls -a1"],
        a: 0,
      },
      {
        q: "Muốn xem thông tin chi tiết một thư mục, kể cả các thư mục con, ta làm thế nào?",
        o: ["ls -a1", "ls -lR", "ls -aC", "ls -lC"],
        a: 1,
      },
      {
        q: "Muốn xem tất cả các file trong thư mục Test, kể cả file ẩn, đồng thời hiển thị trên từng dòng, ta làm thế nào?",
        o: ["ls -a1", "ls -lC", "ls -lR", "ls -aC"],
        a: 0,
      },
      {
        q: "Muốn xem thông tin chi tiết một thư mục, hiển thị dưới dạng cột, ta làm thế nào?",
        o: ["ls -a1", "ls -lC", "ls -aC", "ls -lR"],
        a: 1,
      },
      {
        q: "Muốn xem thông tin chi tiết một thư mục, các file và thư mục được liệt kê cách nhau bởi dấu phẩy, ta làm thế nào?",
        o: ["ls -lC", "ls -lm", "ls -aC", "ls -lR"],
        a: 1,
      },
      {
        q: "Muốn xem số liên kết của 1 file, ta sử dụng lệnh gì?",
        o: ["ln", "ls -l", "cp", "dir"],
        a: 1,
      },
      {
        q: "Lệnh $mkdir -m=777 Test1 có tác dụng gì?",
        o: [
          "Hiển thị thông báo đối với mỗi thư mục được tạo",
          "Lệnh sai",
          "Tạo thư mục Test1 và xác định quyền truy nhập rwxrwxrwx cho nó",
          "Tạo thư mục Test1 và không thông báo lỗi nếu Test1 đã tồn tại",
        ],
        a: 1,
      },
      {
        q: "Lệnh $mkdir -m=757 Test1 có tác dụng gì?",
        o: [
          "Hiển thị thông báo đối với mỗi thư mục được tạo",
          "Tạo thư mục Test1 và không thông báo lỗi nếu Test1 đã tồn tại",
          "Tạo thư mục Test1",
          "Tạo thư mục Test1 và xác định quyền truy nhập rwxr-xrwx cho nó",
        ],
        a: 3,
      },
      {
        q: "Lệnh $mkdir -p Test1 có tác dụng gì?",
        o: [
          "Tạo thư mục Test1 và xác định quyền truy nhập rwxr-xrwx cho nó",
          "Tạo thư mục Test1 và không thông báo lỗi nếu Test1 đã tồn tại",
          "Hiển thị thông báo đối với mỗi thư mục được tạo",
          "Tạo thư mục Test1",
        ],
        a: 1,
      },
      {
        q: "Lệnh $mkdir --verbose có tác dụng gì?",
        o: [
          "Hiển thị thông báo đối với mỗi thư mục được tạo",
          "Tạo thư mục Test1 và không thông báo lỗi nếu Test1 đã tồn tại",
          "Tạo thư mục Test1 và xác định quyền truy nhập rwxr-xrwx cho nó",
          "Tạo thư mục Test1",
        ],
        a: 0,
      },
      {
        q: "Lệnh $rmdir có tác dụng gì?",
        o: [
          "Xóa một thư mục rỗng, bỏ qua các lỗi nếu thư mục không rỗng",
          "Xóa một thư mục bất kỳ",
          "Xóa một thư mục rỗng",
          "Xóa một thư mục, sau đó xóa tiếp các thư mục được cung cấp trên đường dẫn chứa thư mục vừa xóa, nếu thư mục đó rỗng",
        ],
        a: 2,
      },
      {
        q: "Lệnh $rmdir -p có tác dụng gì?",
        o: [
          "Xóa một thư mục rỗng",
          "Xóa một thư mục rỗng, bỏ qua các lỗi nếu thư mục không rỗng",
          "Xóa một thư mục bất kỳ",
          "Xóa một thư mục, sau đó xóa tiếp các thư mục được cung cấp trên đường dẫn chứa thư mục vừa xóa, nếu thư mục đó rỗng",
        ],
        a: 3,
      },
      {
        q: "Lệnh $rmdir --ignore-fail-on-non-empty có tác dụng gì?",
        o: [
          "Xóa một thư mục bất kỳ",
          "Xóa một thư mục rỗng",
          "Xóa một thư mục, sau đó xóa tiếp các thư mục được cung cấp trên đường dẫn chứa thư mục vừa xóa, nếu thư mục đó rỗng",
          "Xóa một thư mục rỗng, bỏ qua các lỗi nếu thư mục không rỗng",
        ],
        a: 3,
      },
      {
        q: "Lệnh $mv fileUnix fileLinux có tác dụng gì?",
        o: [
          "Tạo 1 file liên kết với fileLinux và đặt tên file liên kết đó là fileUnix",
          "Di chuyển file fileUnix tới vị trí fileLinux",
          "Sao chép fileUnix thành fileLinux",
          "Đổi tên fileUnix thành fileLinux",
        ],
        a: 3,
      },
      {
        q: "Lệnh $mv ./fileUnix /bin/fileLinux có tác dụng gì?",
        o: [
          "Di chuyển file tên gọi fileUnix tới thư mục bin và đổi tên thành fileLinux",
          "Đổi tên fileUnix thành fileLinux",
          "Tạo 1 file liên kết với fileLinux và đặt tên file liên kết đó là fileUnix",
          "Sao chép fileUnix thành fileLinux",
        ],
        a: 0,
      },
      {
        q: "Cách nào dưới đây dùng để tạo file mới?",
        o: [
          "ls -l /bin > newfile",
          "Tất cả các lệnh trên",
          "cat > newfile",
          "touch newfile",
        ],
        a: 1,
      },
      {
        q: "Lệnh $ls -l /bin >> /home/thu/lenhls có tác dụng gì?",
        o: [
          "Thực hiện lệnh ls với thư mục bin và lưu thông báo lỗi, nếu có, vào cuối file lenhls",
          "Thực hiện lệnh ls với thư mục bin và lưu thông báo lỗi, nếu có, vào file lenhls được tạo mới",
          "Thực hiện lệnh ls với thư mục bin và lưu kết quả vào cuối file lenhls",
          "Thực hiện lệnh ls với thư mục bin và tạo ra file lenhls để lưu kết quả",
        ],
        a: 2,
      },
      {
        q: "Lệnh $ls -l /bin > /home/thu/lenhls có tác dụng gì?",
        o: [
          "Thực hiện lệnh ls với thư mục bin và lưu kết quả vào cuối file lenhls",
          "Thực hiện lệnh ls với thư mục bin và lưu thông báo lỗi, nếu có, vào file lenhls được tạo mới",
          "Thực hiện lệnh ls với thư mục bin và lưu thông báo lỗi, nếu có, vào cuối file lenhls",
          "Thực hiện lệnh ls với thư mục bin và tạo ra file lenhls để lưu kết quả",
        ],
        a: 3,
      },
      {
        q: "Lệnh $cp --directory=/home/vanpn/document Unix[a-s].pdf có tác dụng gì?",
        o: [
          "Sao chép tất cả các file có tên Unix và có ký tự cuối nằm trong đoạn từ a đến s vào thư mục document",
          "Sao chép các file có tên Unix và có ký tự cuối nằm trong đoạn từ a đến s vào thư mục document, ghi đè file trùng tên",
          "Sao chép các file Unixa và Unixs vào thư mục document, ghi đè file trùng tên",
          "Sao chép các file Unixa, Unixs vào thư mục document",
        ],
        a: 0,
      },
      {
        q: "Lệnh $cp -f --directory=/home/vanpn/document Unix[a-s].pdf có tác dụng gì?",
        o: [
          "Sao chép các file Unixa và Unixs vào thư mục document, ghi đè file trùng tên",
          "Sao chép tất cả các file có tên Unix và có ký tự cuối nằm trong đoạn từ a đến s vào thư mục document",
          "Sao chép các file Unixa, Unixs vào thư mục document",
          "Sao chép các file có tên Unix và có ký tự cuối nằm trong đoạn từ a đến s vào thư mục document, ghi đè file trùng tên",
        ],
        a: 3,
      },
      {
        q: "Lệnh $cp -l --directory=/home/vanpn/document Unix[a-s].pdf có tác dụng gì?",
        o: [
          "Sao chép các file Unixa và Unixs vào thư mục document, ghi đè file trùng tên",
          "Sao chép các file có tên Unix và có ký tự cuối nằm trong đoạn từ a đến s vào thư mục document, ghi đè file trùng tên",
          "Tạo các file liên kết tới các file có tên Unix và có ký tự cuối nằm trong đoạn từ a đến s vào thư mục document",
          "Tạo các file liên kết tới các file Unixa, Unixs vào thư mục document",
        ],
        a: 2,
      },
      {
        q: "Lệnh $cp -dp --directory=/home/vanpn/document Unix[a-s].pdf có tác dụng gì?",
        o: [
          "Sao chép các file có tên Unix và có ký tự cuối nằm trong đoạn từ a đến s vào thư mục document, ghi đè file trùng tên",
          "Sao chép các file Unixa và Unixs vào thư mục document, ghi đè file trùng tên",
          "Sao chép các file có tên Unix và có ký tự cuối nằm trong đoạn từ a đến s vào thư mục document, duy trì các liên kết và các thuộc tính của file cũ",
          "Sao chép các file Unixa, Unixs vào thư mục document, duy trì các liên kết và các thuộc tính của file",
        ],
        a: 2,
      },
      {
        q: "Lệnh $rm -d Test có tác dụng gì?",
        o: [
          "Đưa ra thông báo nhắc nhở trước khi xóa thư mục Test",
          "Loại bỏ liên kết của thư mục Test",
          "Xóa thư mục Test và cả thư mục con",
          "Bỏ qua các thông báo lỗi nếu file Test không tồn tại",
        ],
        a: 1,
      },
      {
        q: "Lệnh $rm -f Test có tác dụng gì?",
        o: [
          "Bỏ qua các thông báo lỗi nếu file Test không tồn tại",
          "Loại bỏ liên kết của thư mục Test",
          "Đưa ra thông báo nhắc nhở trước khi xóa thư mục Test",
          "Xóa thư mục Test và cả thư mục con",
        ],
        a: 0,
      },
      {
        q: "Lệnh $rm -r Test có tác dụng gì?",
        o: [
          "Đưa ra thông báo nhắc nhở trước khi xóa thư mục Test",
          "Xóa thư mục Test và cả thư mục con",
          "Bỏ qua các thông báo lỗi nếu file Test không tồn tại",
          "Loại bỏ liên kết của thư mục Test",
        ],
        a: 1,
      },
      {
        q: "Lệnh $rm -i Test có tác dụng gì?",
        o: [
          "Đưa ra thông báo nhắc nhở trước khi xóa thư mục Test",
          "Loại bỏ liên kết của thư mục Test",
          "Bỏ qua các thông báo lỗi nếu file Test không tồn tại",
          "Xóa thư mục Test và cả thư mục con",
        ],
        a: 0,
      },
      {
        q: "Lệnh $wc -c Linux.html có tác dụng gì?",
        o: [
          "Hiển thị số ký tự trong file Linux.html",
          "Hiển thị số dòng có trong file Linux.html",
          "Đưa ra độ dài của dòng dài nhất trong file Linux.html",
          "Hiển thị số từ trong file Linux.html",
        ],
        a: 0,
      },
      {
        q: "Lệnh $wc -w Linux.html có tác dụng gì?",
        o: [
          "Đưa ra độ dài của dòng dài nhất trong file Linux.html",
          "Hiển thị số dòng có trong file Linux.html",
          "Hiển thị số từ trong file Linux.html",
          "Hiển thị số ký tự trong file Linux.html",
        ],
        a: 2,
      },
      {
        q: "Lệnh $wc -L Linux.html có tác dụng gì?",
        o: [
          "Hiển thị số dòng có trong file Linux.html",
          "Hiển thị số từ trong file Linux.html",
          "Đưa ra độ dài của dòng dài nhất trong file Linux.html",
          "Hiển thị số ký tự trong file Linux.html",
        ],
        a: 2,
      },
      {
        q: "Lệnh $wc -l Linux.html có tác dụng gì?",
        o: [
          "Hiển thị số dòng có trong file Linux.html",
          "Hiển thị số từ trong file Linux.html",
          "Hiển thị số ký tự trong file Linux.html",
          "Đưa ra độ dài của dòng dài nhất trong file Linux.html",
        ],
        a: 0,
      },
      {
        q: "Lệnh $wordcount -w Linux.html có tác dụng gì?",
        o: [
          "Hiển thị số dòng có trong file Linux.html",
          "Không có lệnh này",
          "Hiển thị số ký tự trong file Linux.html",
          "Đưa ra độ dài của dòng dài nhất trong file Linux.html",
        ],
        a: 1,
      },
      {
        q: "Lệnh $uniq -c Unix.html có tác dụng gì?",
        o: [
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ các dòng bị trùng lặp và chỉ giữ lại duy nhất một dòng có nội dung bị trùng",
          "Hiển thị dòng bị trùng lặp lên màn hình",
          "Đếm và hiển thị số lần xuất hiện của các dòng trùng nhau trong file Unix.html",
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ toàn bộ các dòng bị trùng lặp, không giữ lại dòng nào",
        ],
        a: 2,
      },
      {
        q: "Lệnh $uniq -d Unix.html có tác dụng gì?",
        o: [
          "Hiển thị dòng bị trùng lặp lên màn hình",
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ toàn bộ các dòng bị trùng lặp, không giữ lại dòng nào",
          "Đếm và hiển thị số lần xuất hiện của các dòng trùng nhau trong file Unix.html",
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ các dòng bị trùng lặp và chỉ giữ lại duy nhất một dòng có nội dung bị trùng",
        ],
        a: 0,
      },
      {
        q: "Lệnh $uniq -u Unix.html có tác dụng gì?",
        o: [
          "Hiển thị dòng bị trùng lặp lên màn hình",
          "Đếm và hiển thị số lần xuất hiện của các dòng trùng nhau trong file Unix.html",
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ các dòng bị trùng lặp và chỉ giữ lại duy nhất một dòng có nội dung bị trùng",
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ toàn bộ các dòng bị trùng lặp, không giữ lại dòng nào",
        ],
        a: 3,
      },
      {
        q: "Lệnh $uniq -i Unix.html có tác dụng gì?",
        o: [
          "Đếm và hiển thị số lần xuất hiện của các dòng trùng nhau trong file Unix.html",
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ toàn bộ các dòng bị trùng lặp, không giữ lại dòng nào",
          "Hiển thị dòng bị trùng lặp lên màn hình",
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ các dòng bị trùng lặp và chỉ giữ lại duy nhất một dòng có nội dung bị trùng",
        ],
        a: 3,
      },
      {
        q: "Lệnh $uniq -D Unix.html có tác dụng gì?",
        o: [
          "Hiển thị dòng bị trùng lặp lên màn hình",
          "Hiển thị nội dung file Unix.html sau khi xóa bỏ toàn bộ các dòng bị trùng lặp, không giữ lại dòng nào",
          "Đếm và hiển thị số lần xuất hiện của các dòng trùng nhau trong file Unix.html",
          "Hiển thị tất cả các dòng trùng lặp lên màn hình",
        ],
        a: 3,
      },
      {
        q: "Lệnh file được sử dụng để?",
        o: [
          "Hiển thị các thông tin về kích thước file",
          "Xác định và in ra kiểu thông tin chứa trong file",
          "Xác định chủ sở hữu và nhóm sở hữu của file",
          "Xác định quyền và các thuộc tính của file",
        ],
        a: 1,
      },
      {
        q: "Lệnh cat -A noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung của file noname.c và thêm số thứ tự ở mỗi dòng",
          "Hiển thị nội dung của file noname.c",
          "Hiển thị nội dung của file noname.c, đồng thời hiển thị các ký tự không in ra được, trừ LFD và TAB, dấu TAB được hiển thị dưới dạng ^I, và cuối mỗi dòng có ký tự $",
          "Hiển thị nội dung của file noname.c và cuối mỗi dòng có ký tự $ kèm theo",
        ],
        a: 2,
      },
      {
        q: "Lệnh cat -b noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung của file noname.c, đồng thời hiển thị các ký tự không in ra được, trừ LFD và TAB, dấu TAB được hiển thị dưới dạng ^I, và cuối mỗi dòng có ký tự $",
          "Hiển thị nội dung của file noname.c và thêm số thứ tự ở mỗi dòng",
          "Hiển thị nội dung của file noname.c",
          "Hiển thị nội dung của file noname.c và cuối mỗi dòng có ký tự $ kèm theo",
        ],
        a: 1,
      },
      {
        q: "Lệnh cat -E noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung của file noname.c",
          "Hiển thị nội dung của file noname.c, đồng thời hiển thị các ký tự không in ra được, trừ LFD và TAB, dấu TAB được hiển thị dưới dạng ^I, và cuối mỗi dòng có ký tự $",
          "Hiển thị nội dung của file noname.c và thêm số thứ tự ở mỗi dòng",
          "Hiển thị nội dung của file noname.c và cuối mỗi dòng có ký tự $ kèm theo",
        ],
        a: 3,
      },
      {
        q: "Lệnh cat -v noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung của file noname.c và thêm số thứ tự ở mỗi dòng",
          "Hiển thị nội dung của file noname.c",
          "Hiển thị nội dung của file noname, cả các ký tự không in ra được trừ LFD và TAB",
          "Hiển thị nội dung của file noname.c, đồng thời hiển thị các ký tự không in ra được, trừ LFD và TAB, dấu TAB được hiển thị dưới dạng ^I, và cuối mỗi dòng có ký tự $",
        ],
        a: 2,
      },
      {
        q: "Lệnh cat -e noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung của file noname.c và thêm số thứ tự ở mỗi dòng",
          "Hiển thị nội dung của file noname.c, đồng thời hiển thị các ký tự không in ra được, trừ LFD và TAB, dấu TAB được hiển thị dưới dạng ^I, và cuối mỗi dòng có ký tự $",
          "Hiển thị nội dung của file noname.c",
          "Hiển thị nội dung của file noname, cả các ký tự không in ra được trừ LFD và TAB, cuối mỗi dòng có ký tự $ kèm theo",
        ],
        a: 3,
      },
      {
        q: "Lệnh cat -t noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung của file noname, cả các ký tự không in ra được trừ LFD, dấu TAB được biểu diễn dưới dạng ^I",
          "Hiển thị nội dung của file noname.c và thêm số thứ tự ở mỗi dòng",
          "Hiển thị nội dung của file noname.c",
          "Hiển thị nội dung của file noname.c, đồng thời hiển thị các ký tự không in ra được, trừ LFD và TAB, dấu TAB được hiển thị dưới dạng ^I, và cuối mỗi dòng có ký tự $",
        ],
        a: 0,
      },
      {
        q: "Lệnh more -d noname.c có tác dụng gì?",
        o: [
          "Hiển thị 150 dòng đầu tiên của file noname.c",
          "Hiển thị nội dung file noname.c theo trang màn hình, không cuộn màn hình mà xóa màn hình hiện thời để hiện nội dung của trang mới",
          "Hiển thị nội dung file noname.c theo trang màn hình, đồng thời hiển thị các thông báo hỗ trợ người dùng",
          "Hiển thị nội dung file noname theo trang, thay thế dòng chứa ^L bằng một dòng trống",
        ],
        a: 2,
      },
      {
        q: "Lệnh more -150 noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung file noname.c theo trang màn hình, đồng thời hiển thị các thông báo hỗ trợ người dùng",
          "Hiển thị nội dung file noname.c theo trang màn hình, không cuộn màn hình mà xóa màn hình hiện thời để hiện nội dung của trang mới",
          "Hiển thị 150 dòng đầu tiên của file noname.c",
          "Hiển thị nội dung file noname theo trang, thay thế dòng chứa ^L bằng một dòng trống",
        ],
        a: 2,
      },
      {
        q: "Lệnh more -l noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung file noname theo trang, thay thế dòng chứa ^L bằng một dòng trống",
          "Hiển thị 150 dòng đầu tiên của file noname.c",
          "Hiển thị nội dung file noname.c theo trang màn hình, không cuộn màn hình mà xóa màn hình hiện thời để hiện nội dung của trang mới",
          "Hiển thị nội dung file noname.c theo trang màn hình, đồng thời hiển thị các thông báo hỗ trợ người dùng",
        ],
        a: 0,
      },
      {
        q: "Lệnh more -p noname.c có tác dụng gì?",
        o: [
          "Hiển thị 150 dòng đầu tiên của file noname.c",
          "Hiển thị nội dung file noname.c theo trang màn hình, đồng thời hiển thị các thông báo hỗ trợ người dùng",
          "Hiển thị nội dung file noname theo trang, thay thế dòng chứa ^L bằng một dòng trống",
          "Hiển thị nội dung file noname.c theo trang màn hình, không cuộn màn hình mà xóa màn hình hiện thời để hiện nội dung của trang mới",
        ],
        a: 3,
      },
      {
        q: "Lệnh more -s noname.c có tác dụng gì?",
        o: [
          "Hiển thị nội dung file noname.c, xóa các dòng trống liền nhau trong nội dung của file",
          "Hiển thị 150 dòng đầu tiên của file noname.c",
          "Hiển thị nội dung file noname.c theo trang màn hình, đồng thời hiển thị các thông báo hỗ trợ người dùng",
          "Hiển thị nội dung file noname theo trang, thay thế dòng chứa ^L bằng một dòng trống",
        ],
        a: 0,
      },
      {
        q: "vanpn và quyenct là 2 thư mục. Lệnh $diff vanpn quyenct có tác dụng gì?",
        o: [
          "So sánh tất cả các file văn bản ở trong 2 thư mục theo từng dòng",
          "So sánh tất cả các file ở trong 2 thư mục với nhau",
          "So sánh các file của 2 thư mục với nhau, tìm ra sự khác biệt nhỏ",
          "So sánh các file của 2 thư mục với nhau, bỏ qua sự thay đổi về số lượng ký tự trống",
        ],
        a: 1,
      },
      {
        q: "vanpn và quyenct là 2 thư mục. Lệnh $diff -a vanpn quyenct có tác dụng gì?",
        o: [
          "So sánh các file của 2 thư mục với nhau, tìm ra sự khác biệt nhỏ",
          "So sánh các file của 2 thư mục với nhau, bỏ qua sự thay đổi về số lượng ký tự trống",
          "So sánh tất cả các file ở trong 2 thư mục với nhau",
          "So sánh tất cả các file văn bản ở trong 2 thư mục theo từng dòng",
        ],
        a: 3,
      },
      {
        q: "Muốn thêm user db vào nhóm th13, sử dụng lệnh nào?",
        o: [
          "pw usermod th13 -m db",
          "usermod th13 -m db",
          "pw groupmod th13 -m db",
          "groupmod th13 db",
        ],
        a: 2,
      },
      {
        q: "Muốn xem các thành viên trong nhóm th13, sử dụng lệnh?",
        o: [
          "pw groupshow th13",
          "pw groupadd th13 -m db",
          "pw usermod th13 -m db",
          "usermod th13 -m db",
        ],
        a: 0,
      },
      {
        q: "vanpn và quyenct là 2 thư mục. Lệnh $diff -b vanpn quyenct có tác dụng gì?",
        o: [
          "So sánh các file của 2 thư mục với nhau, bỏ qua sự thay đổi về số lượng ký tự trống",
          "So sánh tất cả các file ở trong 2 thư mục với nhau",
          "So sánh các file của 2 thư mục với nhau, tìm ra sự khác biệt nhỏ",
          "So sánh tất cả các file văn bản ở trong 2 thư mục theo từng dòng",
        ],
        a: 0,
      },
      {
        q: "vanpn và quyenct là 2 thư mục. Lệnh $diff -d vanpn quyenct có tác dụng gì?",
        o: [
          "So sánh các file của 2 thư mục với nhau, bỏ qua sự thay đổi về số lượng ký tự trống.",
          "So sánh tất cả các file ở trong 2 thư mục với nhau.",
          "So sánh tất cả các file văn bản ở trong 2 thư mục theo từng dòng.",
          "So sánh các file của 2 thư mục với nhau, tìm ra sự khác biệt nhỏ.",
        ],
        a: 3,
      },
      {
        q: "vanpn và quyenct là 2 thư mục. Lệnh $diff -i vanpn quyenct có tác dụng gì?",
        o: [
          "So sánh tất cả các file ở trong 2 thư mục với nhau.",
          "So sánh tất cả các file văn bản ở trong 2 thư mục theo từng dòng.",
          "So sánh các file của 2 thư mục với nhau, tìm ra sự khác biệt nhỏ.",
          "So sánh các file của 2 thư mục với nhau, bỏ qua sự thay đổi về số lượng ký tự trống.",
        ],
        a: 1,
      },
      {
        q: "vanpn và quyenct là 2 thư mục. Lệnh $diff -ar vanpn quyenct có tác dụng gì?",
        o: [
          "So sánh tất cả các file văn bản ở trong 2 thư mục theo từng dòng.",
          "So sánh các file của 2 thư mục với nhau, bỏ qua sự thay đổi về số lượng ký tự trống.",
          "So sánh các file của 2 thư mục với nhau, tìm ra sự khác biệt nhỏ.",
          "So sánh tất cả các file ở trong 2 thư mục với nhau, và thực hiện so sánh đệ quy trên thư mục.",
        ],
        a: 3,
      },
      {
        q: "vanpn và quyenct là 2 thư mục. Lệnh $diff -Bi vanpn quyenct có tác dụng gì?",
        o: [
          "So sánh tất cả các file ở trong 2 thư mục với nhau.",
          "So sánh tất cả các file văn bản ở trong 2 thư mục theo từng dòng.",
          "So sánh các file của 2 thư mục với nhau, tìm ra sự khác biệt nhỏ.",
          "So sánh các file của 2 thư mục với nhau, bỏ qua mọi sự thay đổi mà chỉ chèn các dòng trống, không phân biệt chữ hoa, chữ thường.",
        ],
        a: 3,
      },
      {
        q: "vanpn và quyenct là 2 thư mục. Lệnh $diff -ds vanpn quyenct có tác dụng gì?",
        o: [
          "So sánh các file của 2 thư mục với nhau, bỏ qua sự thay đổi về số lượng ký tự trống.",
          "So sánh tất cả các file văn bản ở trong 2 thư mục theo từng dòng.",
          "So sánh các file của 2 thư mục với nhau, tìm các khác biệt nhỏ và hiện thông báo khi 2 file giống nhau.",
          "So sánh tất cả các file ở trong 2 thư mục với nhau.",
        ],
        a: 2,
      },
      {
        q: "Lệnh grep được sử dụng để?",
        o: [
          "Tìm kiếm file theo thuộc tính nào đó của file.",
          "Tìm dòng chứa mẫu trong file.",
          "Tìm dòng chứa mẫu đã định trong file và lọc đầu ra của một lệnh khác.",
          "Tìm kiếm các file trong kết quả đưa ra từ một lệnh cho trước.",
        ],
        a: 2,
      },
      {
        q: "Kết quả của lệnh grep tương ứng với mẫu Roger Federer là gì?",
        o: [
          "File chứa chuỗi Rog Federer.",
          "File chứa chuỗi Rog Federer hoặc Roger Federer.",
          "File chứa chuỗi Federer.",
          "File chứa chuỗi Roger Federer.",
        ],
        a: 1,
      },
      {
        q: 'Lệnh $grep "Ben (trai | phai)" file đưa ra kết quả là:',
        o: [
          "File chứa chuỗi Ben trai và Ben phai.",
          "File chứa chuỗi Ben trai.",
          "File chứa chuỗi Ben trai hoặc Ben phai.",
          "File chứa chuỗi Ben phai.",
        ],
        a: 2,
      },
      {
        q: "Lệnh $find . -name test -print 2> /dev/null đưa ra kết quả là:",
        o: [
          "Tìm các file được truy cập 10 phút trước.",
          "Tìm các file được truy cập trong vòng 2 ngày.",
          "Tìm các file do user test sở hữu.",
          "Tìm file có tên test.c trong thư mục hiện thời.",
        ],
        a: 3,
      },
      {
        q: "Lệnh $find . -user test -print 2> /dev/null đưa ra kết quả là:",
        o: [
          "Tìm file có tên test.c trong thư mục hiện thời.",
          "Tìm các file được truy cập 10 phút trước.",
          "Tìm các file được truy cập trong vòng 2 ngày.",
          "Tìm các file do user test sở hữu.",
        ],
        a: 3,
      },
      {
        q: "Lệnh $find . -amin 10 -print 2> /dev/null đưa ra kết quả là:",
        o: [
          "Tìm file được truy cập 10 giờ trước đó.",
          "Tìm file do admin sở hữu.",
          "Tìm các file được truy cập trong vòng 2 ngày.",
          "Tìm các file được truy cập 10 phút trước.",
        ],
        a: 3,
      },
      {
        q: "Lệnh $find . -atime 2 -print 2> /dev/null đưa ra kết quả là:",
        o: [
          "Tìm file do admin sở hữu.",
          "Tìm file được truy cập 2 giờ trước đó.",
          "Tìm các file được truy cập trong vòng 2 ngày.",
          "Tìm các file được truy cập 2 phút trước.",
        ],
        a: 2,
      },
      {
        q: "Lệnh $find . -empty -print 2> /dev/null đưa ra kết quả là:",
        o: [
          "Tìm file được truy cập 2 giờ trước đó.",
          "Tìm file do admin sở hữu.",
          "Tìm các file rỗng, file bình thường hoặc thư mục trong thư mục hiện thời.",
          "Tìm các file được truy cập 2 phút trước.",
        ],
        a: 2,
      },
      {
        q: "Có mấy kiểu sao lưu dữ liệu?",
        o: ["4", "3", "2", "1"],
        a: 2,
      },
      {
        q: "Lệnh $tar -c -f /dev/ftape /urs/src có tác dụng gì?",
        o: [
          "Tạo 1 file sao lưu của thư mục /urs/src vào thư mục /dev/ftape.",
          "Cập nhật file sao lưu của thư mục /dev/ftape tại thư mục /urs/src.",
          "Cập nhật file sao lưu của thư mục /urs/src tại thư mục /dev/ftape.",
          "Tạo 1 file sao lưu của thư mục /dev/ftape vào thư mục /urs/src.",
        ],
        a: 0,
      },
      {
        q: "Lệnh $tar --create --file /dev/ftape /urs/src có tác dụng gì?",
        o: [
          "Tạo 1 file sao lưu của thư mục /dev/ftape vào thư mục /urs/src.",
          "Tạo 1 file sao lưu của thư mục /urs/src vào thư mục /dev/ftape.",
          "Cập nhật file sao lưu của thư mục /urs/src tại thư mục /dev/ftape.",
          "Cập nhật file sao lưu của thư mục /dev/ftape tại thư mục /urs/src.",
        ],
        a: 1,
      },
      {
        q: 'Lệnh $tar --create --newer "13 Mar 2011" --file /dev/ftape /urs/src --verbose có tác dụng gì?',
        o: [
          "Tạo 1 file sao lưu của thư mục /dev/ftape vào thư mục /urs/src.",
          "Cập nhật file sao lưu của thư mục /dev/ftape tại thư mục /urs/src.",
          "Cập nhật file sao lưu của thư mục /urs/src tại thư mục /dev/ftape.",
          "Tạo 1 file sao lưu của thư mục /urs/src vào thư mục /dev/ftape.",
        ],
        a: 2,
      },
      {
        q: 'Lệnh $tar -c -N "13 Mar 2011" --file /dev/ftape /urs/src -v có tác dụng gì?',
        o: [
          "Tạo 1 file sao lưu của thư mục /urs/src vào thư mục /dev/ftape.",
          "Cập nhật file sao lưu của thư mục /dev/ftape tại thư mục /urs/src.",
          "Tạo 1 file sao lưu của thư mục /dev/ftape vào thư mục /urs/src.",
          "Cập nhật file sao lưu của thư mục /urs/src tại thư mục /dev/ftape.",
        ],
        a: 3,
      },
      {
        q: "Một quá trình gồm mấy thành phần?",
        o: ["2", "4", "3", "1"],
        a: 2,
      },
      {
        q: "Thành phần nào sau đây không phải là thành phần của một quá trình?",
        o: ["Phần text.", "Phần data.", "Stack.", "Header."],
        a: 3,
      },
      {
        q: "Thành phần nào sau đây không phải là thành phần của chương trình sau khi biên dịch?",
        o: [
          "Các thành phần trên đều đúng.",
          "Header.",
          "Các giá trị mở đầu phân phối vùng nhớ.",
          "Text.",
        ],
        a: 0,
      },
      {
        q: "Có bao nhiêu mức trong cấu trúc điều khiển của Unix?",
        o: ["2", "4", "1", "3"],
        a: 3,
      },
      {
        q: "Thành phần nào sau đây là quan trọng nhất trong mức nhân của cấu trúc điều khiển Unix?",
        o: [
          "Hệ thống con điều khiển File.",
          "Chương trình điều khiển phần cứng.",
          "Chương trình điều khiển thiết bị.",
          "Cache bộ đệm.",
        ],
        a: 0,
      },
      {
        q: "Thành phần nào sau đây là quan trọng nhất trong mức nhân của cấu trúc điều khiển Unix?",
        o: [
          "Hệ thống con điều khiển quá trình.",
          "Chương trình điều khiển thiết bị.",
          "Chương trình điều khiển phần cứng.",
          "Cache bộ đệm.",
        ],
        a: 0,
      },
      {
        q: "Nhân sử dụng mấy cấu trúc dữ liệu để điều khiển quá trình?",
        o: ["1", "3", "4", "2"],
        a: 2,
      },
      {
        q: "Thành phần nào sau đây không phải là thành phần nằm trong bảng quá trình?",
        o: [
          "Chỉ số thành phần tương ứng với bảng quá trình.",
          "Trạng thái của quá trình.",
          "Chủ sở hữu.",
          "Trường liên quan đến trạng thái ngừng.",
        ],
        a: 0,
      },
      {
        q: "Thành phần nào sau đây không phải là thành phần nằm trong bảng quá trình?",
        o: [
          "Địa chỉ của vùng sử dụng tương ứng với quá trình.",
          "Chủ sở hữu.",
          "Tất cả các chương trình trên.",
          "Trạng thái của quá trình.",
        ],
        a: 2,
      },
      {
        q: "Một quá trình trải qua bao nhiêu trạng thái từ lúc bắt đầu đến lúc kết thúc?",
        o: ["9", "8", "7", "6"],
        a: 0,
      },
      {
        q: "Trạng thái đầu tiên của quá trình là trạng thái nào?",
        o: ["2", "9", "8", "3"],
        a: 2,
      },
      {
        q: "Khi CPU nạp các thành phần của quá trình vào bộ nhớ xong thì quá trình đang nằm ở trạng thái nào?",
        o: ["9", "8", "2", "3"],
        a: 3,
      },
      {
        q: "Nhân bắt đầu thực hiện các lệnh liên quan đến quá trình. Quá trình đang ở trạng thái nào?",
        o: ["8", "2", "9", "3"],
        a: 1,
      },
      {
        q: "Quá trình chờ đợi CPU xử lý tại RAM, vậy quá trình đang ở trạng thái nào?",
        o: ["3", "8", "2", "4"],
        a: 3,
      },
      {
        q: 'Thực hiện lệnh ps -o "%U %p %P %y". Thông tin nào sau đây không được hiển thị?',
        o: [
          "Tên người sử dụng.",
          "Chỉ số tiến trình.",
          "Chỉ số tiến trình cha.",
          "Nhóm người sử dụng.",
        ],
        a: 3,
      },
      {
        q: "Đoạn chương trình sử dụng 'who | grep -s $1 > /dev/null' thực hiện công việc gì?",
        o: [
          "Tìm một user trên hệ thống file.",
          "Kiểm tra tất cả các user đang làm việc trên hệ thống.",
          "Kiểm tra một user đang có mặt trong hệ thống hay không.",
          "Kiểm tra các user không login vào hệ thống.",
        ],
        a: 2,
      },
      {
        q: "Hệ điều hành UNIX là một hệ điều hành mang tính chất gì?",
        o: [
          "Mã nguồn mở",
          "Đóng kín",
          "Không phải hệ điều hành",
          "Phần mềm ứng dụng",
        ],
        a: 0,
      },
      {
        q: "UNIX do ai khởi xướng và phát triển?",
        o: ["Bill Gate", "John Kendy", "Ken Thompson", "Đoàn Văn Hùng"],
        a: 2,
      },
      {
        q: "Một đặc điểm cơ bản khác nhau giữa UNIX và DOS là gì?",
        o: [
          "Đa nhiệm",
          "Shell",
          "Nhân và các tệp điều khiển thiết bị",
          "Lập trình tập tin bó",
        ],
        a: 0,
      },
      {
        q: "Unix có mấy dạng tập tin?",
        o: ["5 dạng", "3 dạng", "2 dạng", "4 dạng"],
        a: 1,
      },
      {
        q: "Kernel là gì?",
        o: [
          "Là một dạng tệp điều khiển thiết bị",
          "Là nhân của hệ điều hành",
          "Là một cấu trúc file điều khiển hệ thống",
          "Một dạng tệp điều khiển vào ra",
        ],
        a: 1,
      },
      {
        q: "Khái niệm Swap là gì?",
        o: [
          "Là một dạng tệp quản lý thiết bị vào ra",
          "Là một tệp hệ thống",
          "Là một dạng bộ nhớ ảo được tạo ra khi cài đặt",
          "Là một dạng tệp quản lý đĩa tương tự",
        ],
        a: 2,
      },
      {
        q: "Shell là gì?",
        o: [
          "Là một vùng đặc biệt cho phép người sử dụng xoá hệ thống",
          "Là một vùng đặc biệt cho phép người sử dụng lập trình và quản lý",
          "Là một vùng đặc biệt cho phép người sử dụng quản lý domain",
          "Là một vùng đặc biệt cho phép người sử dụng tạo ra các phiên làm việc",
        ],
        a: 1,
      },
      {
        q: "Khái niệm đường ống trong UNIX có nghĩa là gì?",
        o: [
          "Là một dòng các tin truyền dẫn",
          "Là các tiến trình được tạo ra theo luồng nhất định làm nền cho các chương khác chạy",
          "Là xuất của chương trình này là dữ liệu đầu vào của chương trình khác",
          "Tất cả đều đúng",
        ],
        a: 2,
      },
      {
        q: "UNIX có phân biệt được các ổ đĩa không?",
        o: [
          "Hoàn toàn phân biệt được các ổ C, D, E...",
          "Không thể phân biệt được",
          "Chỉ phân biệt được ổ C với A",
          "Tất cả đều đúng",
        ],
        a: 1,
      },
      {
        q: "Bắt đầu phiên làm việc với UNIX, thông báo nào đúng?",
        o: ["loging", "user name:", "logon:", "login:"],
        a: 3,
      },
      {
        q: "Khi kết thúc phiên làm việc phải gõ lệnh gì?",
        o: ["exit", "shutdown", "ltsys", "reboot"],
        a: 0,
      },
      {
        q: "Tệp đặc biệt (special file) là:",
        o: [
          "Các tệp liên quan tới các thiết bị ngoại vi cứng hoặc cơ chế truyền tin",
          "Các tệp liên quan tới các thông tin dưới dạng ASCII",
          "Các tệp liên quan tới các thông tin dưới dạng thiết bị ổ cứng, ổ mềm",
          "Các tệp liên quan tới các thông tin dưới dạng binary",
        ],
        a: 0,
      },
      {
        q: "Các tệp của UNIX được tổ chức theo dạng:",
        o: ["Dạng hình cây", "Dạng sơ đồ mạng", "Dạng hình lưới", "Phân cấp"],
        a: 0,
      },
      {
        q: "Để di chuyển giữa các thư mục dùng lệnh nào?",
        o: ["ls và pwd", "cd", "rm và cd", "lc và cd"],
        a: 1,
      },
      {
        q: "Ký tự phân cách trong đường dẫn các thư mục của HĐH UNIX là?",
        o: ["\\", "_", "/", "."],
        a: 2,
      },
      {
        q: "Tạo thư mục bằng lệnh nào?",
        o: ["create dir", "crdir", "md", "mkdir"],
        a: 3,
      },
      {
        q: "Xem nội dung thư mục dùng lệnh nào?",
        o: ["ln", "lc", "ls", "lm"],
        a: 2,
      },
      {
        q: "Xoá thư mục không rỗng dùng lệnh nào?",
        o: ["rm -ri", "delete", "del", "rmdir"],
        a: 0,
      },
      {
        q: "Nhận biết một tệp thường dùng lệnh nào?",
        o: ["edit", "file (*)", "more", "cat"],
        a: 1,
      },
      {
        q: "Xem nội dung của một tệp ASCII sử dụng lệnh nào?",
        o: ["md", "cut", "cd", "more hoặc cat"],
        a: 3,
      },
      {
        q: "Tạo một tệp thường ASCII sử dụng lệnh nào?",
        o: [
          "edit > text_file",
          "cat > text_file",
          "more > text_file",
          "cd > text_file",
        ],
        a: 1,
      },
      {
        q: "Tệp bắt đầu bằng dấu chấm '.' là gì?",
        o: ["Thư mục", "Tệp đặc biệt", "Tệp ẩn", "Tệp thường"],
        a: 2,
      },
      {
        q: "Số nhận dạng (uid) là gì?",
        o: [
          "Số nhận dạng của thư mục chủ",
          "Số nhận dạng của nhóm",
          "Số nhận dạng của user",
          "Số nhận dạng của mật khẩu",
        ],
        a: 2,
      },
      {
        q: "Chỉ số GID là gì?",
        o: [
          "Số nhận dạng của nhóm",
          "Số nhận dạng của user",
          "Số nhận dạng của thư mục chủ",
          "Số nhận dạng của mật khẩu",
        ],
        a: 0,
      },
      {
        q: "Đối với thư mục quyền w để làm gì?",
        o: ["Không có lệnh này", "Tạo và xóa tệp", "Đọc tệp", "Sao chép tệp"],
        a: 1,
      },
      {
        q: "Đối với thư mục quyền x để làm gì?",
        o: [
          "Quyền đọc file",
          "Quyền ghi file",
          "Quyền xoá file",
          "Quyền chạy file",
        ],
        a: 3,
      },
      {
        q: "Các quyền với thư mục có hiệu lực như thế nào?",
        o: [
          "Tại một mức nhất định là thư mục hiện thời",
          "Thư mục con",
          "Cả cây thư mục bắt đầu là thư mục hiện thời",
          "Từ thư mục gốc đến thư mục con",
        ],
        a: 0,
      },
      {
        q: "Lệnh ls -l thực hiện công việc gì?",
        o: [
          "Đếm các byte của một tệp",
          "Liệt kê danh sách các tệp và các thuộc tính của chúng",
          "Cho biết ngày tháng của một tệp",
          "Cho biết quyền sở hữu của tệp",
        ],
        a: 1,
      },
      {
        q: "Thay đổi quyền thâm nhập tệp sử dụng lệnh nào?",
        o: ["defuser", "chuser", "umask", "chgrp"],
        a: 2,
      },
      {
        q: "Thay đổi quyền thâm nhập tệp sử dụng lệnh nào?",
        o: ["chmod", "chgrp", "defuser", "chuser"],
        a: 0,
      },
      {
        q: "Muốn cho phép các user cùng nhóm truy nhập vào một tệp sử dụng lệnh nào?",
        o: [
          "chmod g+rwx tệp",
          "chmod u+rwx tệp",
          "chmod a+rwx tệp",
          "chmod o-rwx tệp",
        ],
        a: 0,
      },
      {
        q: "Có thể thực hiện lệnh chmod theo mấy cách?",
        o: ["5 cách", "4 cách", "3 cách", "2 cách"],
        a: 3,
      },
      {
        q: "Muốn copy một tệp dùng lệnh nào trong Unix?",
        o: ["unixcp", "copy", "doscp", "cp"],
        a: 3,
      },
      {
        q: "Sao chép cả thư mục con sử dụng lệnh gì?",
        o: ["copy -R", "cp -R", "doscopy -R", "unixcp -R"],
        a: 1,
      },
      {
        q: "Xóa cây thư mục sử dụng lệnh nào?",
        o: ["rm", "rmdir", "del", "deldir"],
        a: 0,
      },
      {
        q: "Lệnh cp cho phép ta sao chép bao nhiêu tệp?",
        o: ["Hai tệp", "Ba tệp", "Một hoặc nhiều tệp", "Một tệp"],
        a: 2,
      },
      {
        q: "Đổi tên tệp sử dụng lệnh nào?",
        o: ["cp và del", "rename", "ren", "mv"],
        a: 3,
      },
      {
        q: "Muốn chuyển một tệp sử dụng lệnh nào?",
        o: ["ren", "mv", "rename", "cp và del"],
        a: 1,
      },
      {
        q: "Chuyển nhiều tệp sử dụng lệnh nào?",
        o: ["rename", "cp và del", "ren", "mv"],
        a: 3,
      },
      {
        q: "Chuyển cây thư mục sử dụng lệnh nào?",
        o: ["mv", "rename -R", "cp và del -R", "ren -R"],
        a: 0,
      },
      {
        q: "Sử dụng lệnh gì để hiển thị thư mục hiện thời?",
        o: ["pd", "md", "cd", "pwd"],
        a: 3,
      },
      {
        q: "Tìm kiếm một tệp theo tên sử dụng cú pháp nào?",
        o: [
          "find -print đường_dẫn -name tên_tệp",
          "find -name đường_dẫn tên_tệp -print",
          "find tên_tệp đường_dẫn -name -print",
          "find đường_dẫn -name tên_tệp -print",
        ],
        a: 3,
      },
      {
        q: "Tìm kiếm một tệp theo i-node sử dụng cú pháp nào?",
        o: [
          "find -print đường_dẫn -name number",
          "find -inum đường_dẫn number -print",
          "find number đường_dẫn -name -print",
          "find đường_dẫn -inum number -print",
        ],
        a: 3,
      },
      {
        q: "Tìm kiếm một tệp theo chủ sở hữu sử dụng cú pháp nào?",
        o: [
          "find -print pathname -user username",
          "find -user đường_dẫn username -print",
          "find pathname username -print -user",
          "find pathname -user username -print",
        ],
        a: 3,
      },
      {
        q: "Để gửi thư giữa các user sử dụng lệnh nào?",
        o: ["mail", "sendmail", "sentmail", "putmail"],
        a: 0,
      },
      {
        q: "Để nhận thư giữa các user sử dụng lệnh nào?",
        o: ["getmail", "receivemail", "mail", "Rmail"],
        a: 2,
      },
      {
        q: "Gửi thông báo tức thời giữa những người đang trong phiên làm việc sử dụng lệnh nào?",
        o: ["msg", "message", "send", "write"],
        a: 3,
      },
      {
        q: "Gửi thông báo cho tất cả những người sử dụng sử dụng lệnh nào?",
        o: ["wall", "msg", "message", "write"],
        a: 0,
      },
      {
        q: "Chương trình vi là gì?",
        o: [
          "Hệ soạn thảo văn bản",
          "Một ngôn ngữ lập trình",
          "Chương trình soạn thảo văn bản text",
          "Chương trình soạn thảo chương trình nhị phân",
        ],
        a: 2,
      },
      {
        q: "Thoát khỏi vi sử dụng lệnh nào?",
        o: ["exit hoặc :kk", "logout", "quit hoặc :pp", ":zz hoặc :z"],
        a: 3,
      },
      {
        q: "Trong vi muốn làm việc với SHELL cú pháp nào đúng?",
        o: [":$SHELL", ":~SHELL", ":!SHELL", ":#SHELL"],
        a: 2,
      },
      {
        q: "Trong hệ soạn thảo vi muốn chèn ký tự vào sau con trỏ ta chọn lệnh nào?",
        o: ["c", "b", "d", "a"],
        a: 3,
      },
      {
        q: "Trong hệ soạn thảo vi muốn chèn ký tự vào trước cursor ta chọn lệnh nào?",
        o: ["A", "a", "I", "i"],
        a: 3,
      },
      {
        q: "Trong hệ soạn thảo vi muốn chèn một dòng vào trước dòng chứa cursor ta chọn lệnh nào?",
        o: ["I", "i", "o", "A"],
        a: 2,
      },
      {
        q: "Trong hệ soạn thảo vi muốn chèn các ký tự không in được (non printable) ta phải gõ gì?",
        o: [
          "Ctrl + D trước chúng",
          "Ctrl + C trước chúng",
          "Ctrl + V trước chúng",
          "Ctrl + E trước chúng",
        ],
        a: 2,
      },
      {
        q: "Trong hệ soạn thảo vi muốn di chuyển cursor trong tệp về cuối dòng chọn gì?",
        o: ["Nhấn phím b", "Nhấn phím $", "Nhấn phím 0", "Nhấn phím Enter"],
        a: 1,
      },
      {
        q: "Trong hệ soạn thảo vi muốn di chuyển cursor về đầu màn hình chọn gì?",
        o: ["Nhấn phím W", "Nhấn phím L", "Nhấn phím M", "Nhấn phím H"],
        a: 3,
      },
      {
        q: "Trong hệ soạn thảo vi muốn di chuyển cursor về đầu câu chọn gì?",
        o: ["Nhấn phím )", "Nhấn phím {", "Nhấn phím }", "Nhấn phím ("],
        a: 3,
      },
      {
        q: "Trong hệ soạn thảo vi muốn di chuyển cursor về đầu đoạn văn bản chọn gì?",
        o: ["Nhấn phím {", "Nhấn phím (", "Nhấn phím )", "Nhấn phím }"],
        a: 1,
      },
      {
        q: "Trong hệ soạn thảo vi muốn di chuyển cursor về đầu cửa sổ chọn gì?",
        o: ["Nhấn phím z", "Nhấn phím Z", "Nhấn phím ^U", "Nhấn phím ^D"],
        a: 0,
      },
      {
        q: "Trong hệ soạn thảo vi muốn hiển thị số thứ tự của các dòng soạn thảo sử dụng lệnh nào?",
        o: ["set digit", "set number", "set no", "set nu"],
        a: 3,
      },
      {
        q: "Tìm dãy ký tự sử dụng lệnh nào?",
        o: ["/string", "%string", "|string", "\\string"],
        a: 0,
      },
      {
        q: "Trong hệ soạn thảo vi muốn xoá ký tự tại vị trí cursor sử dụng lệnh nào?",
        o: ["X", "3x", "XX", "x"],
        a: 3,
      },
      {
        q: "Trong hệ soạn thảo vi muốn xóa dòng văn bản chứa cursor sử dụng lệnh nào?",
        o: ["dd", "d$", "3dd", "dw"],
        a: 0,
      },
      {
        q: "Trong hệ soạn thảo vi muốn xóa dòng văn bản cho đến cuối dòng sử dụng lệnh nào?",
        o: ["3dd", "dd", "dw", "d$"],
        a: 3,
      },
      {
        q: "Trong hệ soạn thảo vi muốn thay thế dòng hiện tại bằng text sử dụng lệnh nào?",
        o: ["S", "R", "cw", "c2w"],
        a: 0,
      },
      {
        q: "Lệnh who là lệnh gì?",
        o: [
          "Không có lệnh này",
          "Cả hai lệnh trên",
          "Lệnh xem mình là ai",
          "Lệnh xem những user nào đang tồn tại trong hệ thống",
        ],
        a: 3,
      },
      {
        q: "Trong shell có mấy loại tiến trình?",
        o: ["2 loại", "3 loại", "4 loại", "5 loại"],
        a: 0,
      },
      {
        q: "Liệt kê các tiến trình sử dụng lệnh nào?",
        o: ["ps", "pd", "pl", "pa"],
        a: 0,
      },
      {
        q: "Để chạy shell sử dụng lệnh nào?",
        o: ["do proc", "sh proc", "run proc", "exec proc"],
        a: 1,
      },
      {
        q: "Để hiển thị dòng lệnh trước khi triển khai lệnh chọn gì?",
        o: ["set -e", "set -t", "set -v", "set -x"],
        a: 2,
      },
      {
        q: "Các tệp vào chuẩn fd = ?",
        o: ["fd = 0", "fd = 2", "fd = 1", "fd = 3"],
        a: 0,
      },
      {
        q: "Các tệp ra chuẩn fd = ?",
        o: ["fd = 1", "fd = 3", "fd = 0", "fd = 2"],
        a: 0,
      },
      {
        q: "Đổi hướng đầu ra chuẩn sử dụng lệnh nào?",
        o: [
          "lệnh | tên_tệp",
          "lệnh < tên_tệp",
          "lệnh $ tên_tệp",
          "lệnh > tên_tệp",
        ],
        a: 3,
      },
      {
        q: "Khi đổi hướng đầu ra, nếu tệp tồn tại sẽ xảy ra trạng thái nào?",
        o: [
          "Nội dung cũ sẽ được lưu lại",
          "Chèn vào nội dung cũ",
          "Ghi thêm vào nội dung cũ",
          "Nội dung cũ sẽ bị xoá",
        ],
        a: 3,
      },
      {
        q: "Đổi hướng kép (double) đầu ra chuẩn sử dụng lệnh nào?",
        o: ["lệnh kee", "lệnh pee", "lệnh mee", "lệnh tee"],
        a: 3,
      },
      {
        q: "Chỉ số PPID là gì?",
        o: [
          "Là chỉ số hoạt động",
          "Là chỉ số tiến trình cha",
          "Là chỉ số tiến trình cha và con",
          "Là chỉ số tiến trình chung",
        ],
        a: 1,
      },
      {
        q: "Truyền tham số cho một shell_script sử dụng phương thức gì?",
        o: ["Dòng lệnh", "Giao diện cửa sổ hội thoại", "Chọn menu", "Hỏi đáp"],
        a: 0,
      },
      {
        q: "Đâu là biến số các tham số?",
        o: ["$$", "$#", "$0", "$*"],
        a: 1,
      },
      {
        q: "Đâu là biến tất cả các tham số?",
        o: ["$0", "$*", "$#", "$$"],
        a: 1,
      },
      {
        q: "Đâu là biến PID của shell_script?",
        o: ["$*", "$0", "$$", "$#"],
        a: 2,
      },
      {
        q: "Có mấy kiểu biến trong ksh?",
        o: ["2", "4", "5", "3"],
        a: 1,
      },
      {
        q: "Có mấy cách thay thế các biến Shell?",
        o: ["4", "5", "6", "3"],
        a: 1,
      },
      {
        q: "Các biến sau biến nào được định nghĩa trước?",
        o: ["PS1", "USER_NAME", "HOME_DIR", "PASSWORD"],
        a: 0,
      },
      {
        q: "Biến xuất được thực hiện bằng lệnh export, câu nào đúng?",
        o: [
          "Biến xuất của một tiến trình chỉ có thể dùng cho tiến trình đó",
          "Biến xuất của một tiến trình có thể dùng chung cho mọi tiến trình con của nó",
          "Biến xuất của một tiến trình có thể dùng chung cho tiến trình con của nó",
          "Biến xuất của một tiến trình có thể dùng chung cho tiến trình cha và tiến trình con của nó",
        ],
        a: 1,
      },
      {
        q: "Sử dụng câu lệnh nào để biết tệp tồn tại và là tệp thường?",
        o: [
          "test -d filename",
          "test -x filename",
          "test -f filename",
          "test -r filename",
        ],
        a: 2,
      },
      {
        q: "Sử dụng câu lệnh nào để biết tệp tồn tại và thực hiện được?",
        o: [
          "test -s filename",
          "test -x filename",
          "test -w filename",
          "test -r filename",
        ],
        a: 1,
      },
      {
        q: "So sánh file1 mới hơn file2 sử dụng lệnh nào?",
        o: [
          "[ file1 -ot file2 ]",
          "[ file1 -nt file2 ]",
          "[ file1 -ef file2 ]",
          "[ file1 -t file2 ]",
        ],
        a: 1,
      },
      {
        q: "Phát biểu kết quả của câu lệnh 'test $A -gt $B'?",
        o: [
          "false nếu giá trị của biến A lớn hơn giá trị của biến B",
          "true nếu giá trị của biến B lớn hơn giá trị của biến A",
          "false nếu giá trị của biến B lớn hơn giá trị của biến A",
          "true nếu giá trị của biến A lớn hơn giá trị của biến B",
        ],
        a: 3,
      },
      {
        q: "Lệnh let được dùng để làm gì?",
        o: [
          "Cho phép truy nhập thư mục",
          "Thực hiện các phép tính số học",
          "Cho phép truy nhập file",
          "Cho phép các user truy nhập",
        ],
        a: 1,
      },
      {
        q: "Lệnh expr có thể thực hiện những phép toán nào?",
        o: [
          "Chỉ trừ (-)",
          "Cộng (+), trừ (-), nhân (*), chia (/), lấy số dư (%)",
          "Chỉ cộng (+)",
          "Chỉ lấy số dư (%)",
        ],
        a: 1,
      },
      {
        q: "Muốn một tiến trình chạy dạng nền (background) ta thêm ký tự gì vào sau nó?",
        o: ["@", "&", "^", "$"],
        a: 1,
      },
      {
        q: "Lệnh set -m cho phép gì?",
        o: [
          "Quản lý tiến trình ngầm đang chạy",
          "Khoá tiến trình ngầm",
          "Khởi tạo biến trung gian làm việc",
          "Khởi tạo shell_script",
        ],
        a: 0,
      },
    ],
  },
];

export default QUIZ_SETS_UNIX;
