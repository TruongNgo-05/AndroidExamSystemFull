const QUIZ_SETS_MNM = [
  {
    id: "ma_nguon_mo",
    majorId: "cntt",
    title: "Mã Nguồn Mở",
    description:
      "Ôn tập mã nguồn mở, giấy phép, Linux, XAMPP, phpMyAdmin, Moodle và quản trị dự án nguồn mở.",
    questions: [
      {
        q: "Câu 1: Quan niệm nào sau đây sai về Copyleft:",
        o: [
          "Được đưa ra dựa trên Copyright",
          "Khi phân phối bản phái sinh, phải duy trì các quyền tự do theo điều kiện copyleft áp dụng",
          "Người sở hữu quyền cấp quyền để: sử dụng, sửa đổi, phân phối lại",
          "Cấm sao chép chỉnh sửa, phân phối",
        ],
        a: 3,
      },
      {
        q: "Câu 2: Ký hiệu của Copyleft:",
        o: [
          "Ký hiệu chữ C ngược trong vòng tròn",
          "Ký hiệu chữ C trong vòng tròn",
          "Ký hiệu bằng số",
          "ký hiệu trong hình vuông",
        ],
        a: 0,
      },
      {
        q: "Câu 3: Ký hiệu của Copyright:",
        o: [
          "Ký hiệu chữ C ngược trong vòng tròn",
          "Ký hiệu chữ C trong vòng tròn",
          "Ký hiệu bằng số",
          "ký hiệu trong hình vuông",
        ],
        a: 1,
      },
      {
        q: "Câu 4: OpenOffice Writer tương đương với chức năng gì trong Microsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Outlook"],
        a: 0,
      },
      {
        q: "Câu 5: OpenOffice Impress tương đương với chức năng gì trong Microsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Outlook"],
        a: 1,
      },
      {
        q: "Câu 6: OpenOffice Calc tương đương với chức năng gì trong Microsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Access"],
        a: 2,
      },
      {
        q: "Câu 7: OpenOffice Draw tương đương với chức năng gì trong Microsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Không có đáp án đúng"],
        a: 3,
      },
      {
        q: "Câu 8: OpenOffice Base tương đương với chức năng gì trong Microsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Access"],
        a: 3,
      },
      {
        q: "Câu 9: OpenOffice Math tương đương với chức năng gì trong Microsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Không có đáp án đúng"],
        a: 3,
      },
      {
        q: "Câu 10: Phần mềm mail nào là mã nguồn mở",
        o: [
          "Microsoft Exchange",
          "Mail server MDaemon",
          "Mail server Zimbra",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 11: Phần mềm mail nào tính phí đắt nhất",
        o: [
          "Microsoft Exchange",
          "Mail server MDaemon",
          "Mail server Zimbra",
          "Không thể xác định nếu chưa biết phiên bản, quy mô sử dụng và gói dịch vụ",
        ],
        a: 3,
      },
      {
        q: "Câu 12: Mail User Agent (MUA) là gì",
        o: [
          "Trình tương tác với người dùng, soạn thảo, gửi hoặc nhận e- mail",
          "Chuyển e-mail từ người gửi đến Mail Server",
          "Lưu các thư nhận được vào hệ thống, sử dụng chương trình mail client lấy các thư này về máy tính để đọc",
          "Tạo tài khoản Mail",
        ],
        a: 0,
      },
      {
        q: "Câu 13: Giao thức truyền thư đơn giản dùng để gửi thư điện tử được viết tắt là gì?",
        o: ["MUA", "IMAP", "SMTP", "SENT"],
        a: 2,
      },
      {
        q: "Câu 14: Thư mục hiển thị Localhost của Xampp",
        o: ["www", "htdocs", "application", "root"],
        a: 1,
      },
      {
        q: "Câu 15: Thư mục hiển thị Localhost của Appserv",
        o: ["www", "htdocs", "application", "root"],
        a: 0,
      },
      {
        q: "Câu 16: phpmyadmin để làm gì?",
        o: [
          "Quản trị MySQL",
          "Quản trị MSSQL",
          "Quản trị Localhost",
          "Quản trị Web Server",
        ],
        a: 0,
      },
      {
        q: "Câu 17: Cổng mặc định của dịch vụ HTTP là cổng nào?",
        o: ["80", "81", "8080", "Không cần dùng cổng"],
        a: 0,
      },
      {
        q: "Câu 18: Theo tài liệu, có mấy giao thức chính dùng để truy cập hộp thư từ máy chủ?",
        o: ["1", "2", "3", "4"],
        a: 1,
      },
      {
        q: "Câu 19: Giao thức chính của Mail server đến, chọn phương án đúng nhất",
        o: ["POP3", "IMAP", "POP3, IMAP", "RECEIVE"],
        a: 2,
      },
      {
        q: "Câu 20: Theo bạn có những Webserver nào sau đây không tồn tại?",
        o: [
          "Apache",
          "IIS của Microsoft",
          "Sun Java System Web",
          "không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 21: Những phần mở rộng nào gắn với các công nghệ ASP và ASP.NET của Microsoft trên IIS?",
        o: [".asp và .aspx", "Php", "JSP", "không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 22: Trong bộ phần mềm XAMPP, ngôn ngữ kịch bản phía máy chủ nào sau đây thường được dùng cùng Apache?",
        o: ["PHP", "ASP", "XML", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 23: Công nghệ JavaServer Pages trên máy chủ web Java thường sử dụng phần mở rộng tệp nào?",
        o: [".jsp", "php", "asp", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 24: Anh (chị) hãy cho biết hệ điều hành nào là hệ điều hành mã nguồn mở?",
        o: ["Slackware", "AIX", "HP-UX", "Solaris"],
        a: 0,
      },
      {
        q: "Câu 25: Anh (chị) hãy cho biết phần nhân (core) của hệ điều hành Linux gọi là gì?",
        o: ["Shell", "Script", "Terminal", "Kernel"],
        a: 3,
      },
      {
        q: "Câu 26: Câu nào sau đây là đúng",
        o: [
          "Phần mềm mã nguồn mở không mang lại lợi nhuận",
          "Phần mềm mã nguồn mở không cho phép phân phối lại",
          "Phần mềm mã nguồn mở không có bản quyền",
          "Nhiều giấy phép nguồn mở cung cấp phần mềm không kèm bảo hành mặc định; có thể có thỏa thuận bảo hành riêng",
        ],
        a: 3,
      },
      {
        q: "Câu 27: Bạn hãy cho biết phần mềm văn phòng nào sau đây sử dụng giấy phép mã nguồn mở :",
        o: [
          "Microsoft Office",
          "Libre Office",
          "Cả a và b",
          "Không câu nào đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 28: Bạn hãy cho biết phần mềm nào sau đây sử dụng giấy phép BSD :",
        o: [
          "Ubuntu",
          "FreeBSD (phần mã thuộc giấy phép BSD)",
          "JavaFBP toolkit",
          "Không câu nào đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 29: Phần mềm GIMP sử dụng giấy phép mã nguồn mở nào :",
        o: [
          "GNU GPL License",
          "Apache License",
          "BSD License",
          "Artistic License",
        ],
        a: 0,
      },
      {
        q: "Câu 30: Phần mềm Mozilla Firefox sử dụng giấy phép mã nguồn mở nào :",
        o: [
          "Mozilla Public License",
          "BSD License",
          "Artistic License",
          "GPL License",
        ],
        a: 0,
      },
      {
        q: "Câu 31: Phần mềm Apache Server sử dụng giấy phép nào sau đây :",
        o: ["BSD License", "Artistic License", "GPL License", "Apache License"],
        a: 3,
      },
      {
        q: "Câu 32: Nukeviet được viết bằng ngôn ngữ và sử dụng CSDL nào?",
        o: ["PHP và MySQL", "PHP và Access", "PHP và DB4.0", "PHP và O2"],
        a: 0,
      },
      {
        q: "Câu 33: Nukeviet sử dụng bộ giấy phép nào?",
        o: ["GNU/GPL", "GNU/GPC", "GUI/GPL", "GNU/GPLs"],
        a: 0,
      },
      {
        q: "Câu 34: Chọn phát biểu đúng?",
        o: [
          "Joomla là mã nguồn mở và được cung cấp hoàn toàn miễn phí",
          "Joomla là một công cụ lập trình web",
          "Joomla được phát triển bởi Microsoft",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 35: Theo quy trình triển khai Moodle được trình bày trong bộ tài liệu này, quy trình gồm mấy bước?",
        o: ["2", "3", "4", "Không có đáp án đúng"],
        a: 2,
      },
      {
        q: "Câu 36: Bước 1 trong quy trình triển khai hệ thống Moodle thực hiện công viêc?",
        o: [
          "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost",
          "Cài đặt và cấu hình hệ thống Moodle Elearning",
          "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
          "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning",
        ],
        a: 0,
      },
      {
        q: "Câu 37: Theo thông tư số 20/2014/TT-BTTTT của Bộ Thông tin và Truyền thông danh sách các hệ điều hành nguồn mở được ưu tiên mua sắm, sử dụng trong cơ quan, tổ chức nhà nước là gì?",
        o: [
          "Ubuntu, Fedora, OpenBSD, Debian",
          "FreeBSD, Debian, Ubuntu, Inferno",
          "OpenSUSE, Ubuntu, ChromeOS, Fedora",
          "CentOS, Debian, Ubuntu, Fedora",
        ],
        a: 3,
      },
      {
        q: "Câu 38: Theo thông tư số 20/2014/TT-BTTTT của Bộ Thông tin và Truyền thông danh sách các hệ quản trị nội dung Web nguồn mở được ưu tiên trong cơ quan, tổ chức nhà nước là gì?",
        o: [
          "Joomla, Wordpress, Moodle",
          "Drupal, Joomla, NukeViet",
          "Wordpress, Joomla, Alfresco",
          "Magento, Joomla, Opencart",
        ],
        a: 1,
      },
      {
        q: "Câu 39: Theo thông tư số 20/2014/TT-BTTTT của Bộ Thông tin và Truyền thông danh sách các phần mềm trình duyệt Web nguồn mở được ưu tiên trong cơ quan, tổ chức nhà nước là gì?",
        o: [
          "Mozilla Firefox, Opera",
          "Google Chrome, Mozilla Firefox",
          "Mozilla Firefox, Microsoft Edge",
          "Mozilla Firefox, Chromium",
        ],
        a: 3,
      },
      {
        q: "Câu 40: Bước 2 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        o: [
          "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost",
          "Cài đặt và cấu hình hệ thống Moodle Elearning",
          "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
          "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning",
        ],
        a: 1,
      },
      {
        q: "Câu 41: Bước 3 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        o: [
          "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost",
          "Cài đặt và cấu hình hệ thống Moodle Elearning",
          "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
          "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning",
        ],
        a: 2,
      },
      {
        q: "Câu 42: Bước 4 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        o: [
          "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost",
          "Cài đặt và cấu hình hệ thống Moodle Elearning",
          "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
          "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning",
        ],
        a: 3,
      },
      {
        q: "Câu 43: Ưu điểm của Moodle Elearning là?",
        o: [
          "Can thiệp vào code",
          "Cộng đồng người sử dụng lớn, nên có thể giúp chúng ta vận hành, phát triển",
          "Tương thích với nhiều công cụ tạo bài giảng, dễ quản trị, cấu hình,..",
          "Cả ‘a’, ‘b’, ‘c’ đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 44: Theo thông tư số 20/2014/TT-BTTTT của Bộ Thông tin và Truyền thông danh sách các hệ quản trị cơ sở dữ liệu nguồn mở được ưu tiên trong cơ quan, tổ chức nhà nước là gì?",
        o: [
          "MariaDB, Oracle, MongoDB",
          "PostgreSQL, MySQL, MariaDB",
          "MongoDB, Hadoop, Foxpro",
          "MySQL, Hadoop, Zimbra",
        ],
        a: 1,
      },
      {
        q: "Câu 45: Anh (chị) hãy cho biết hai hệ thống giấy phép tư liệu mở phổ biến là ?",
        o: [
          "Giấy phép của GNU và giấy phép của OSI",
          "Giấy phép Open Document Format (ODF) và giấy phép Open Education Resource (OER)",
          "Giấy phép Open Public Document (OPD) và giấy phép Open Licence Free (OLF)",
          "Giấy phép Creative Commons và GNU Free Documentation License",
        ],
        a: 3,
      },
      {
        q: "Câu 46: Anh (chị) hãy cho biết phần có chức năng thực thi các lệnh (command) của hệ điều hành Linux gọi là gì?",
        o: ["Shell", "Script", "Terminal", "Kernel"],
        a: 0,
      },
      {
        q: "Câu 47: Chức năng phần mềm nào khác với những phần mềm còn lại?",
        o: [
          "Microsoft Exchange",
          "Mail server MDaemon",
          "Mail server Zimbra",
          "Không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 48: Phần mềm nào không có chức năng chống Spam?",
        o: [
          "Microsoft Exchange",
          "Mail server MDaemon",
          "Mail server Zimbra",
          "Không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 49: Trong giai đoạn dự án OpenOffice.org ban đầu, đơn vị nào cùng cộng đồng phát triển bộ phần mềm này?",
        o: [
          "Sun Microsystems và cộng đồng mở",
          "Microsoft và cộng đồng mở",
          "Object Management Group",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 50: Phần mềm nào gọi là Learning Management System – LMS?",
        o: ["Opencart", "WordPress", "Moodle", "Phpcoin"],
        a: 2,
      },
      {
        q: "Câu 51: Martin Dougiamas bắt đầu thử nghiệm các nguyên mẫu ban đầu của Moodle vào năm nào?",
        o: ["1998", "1999", "2000", "2001"],
        a: 1,
      },
      {
        q: "Câu 52: CentOS Linux truyền thống được xây dựng lại từ mã nguồn của bản phân phối nào?",
        o: ["Red Hat", "Ubuntu", "Linux Mint", "Debian"],
        a: 0,
      },
      {
        q: "Câu 53: Những phần mềm mã nguồn mở miễn phí nào sau đây giúp chạy các ứng dụng windows trên môi trường Ubuntu",
        o: [
          "Wine và CrossOver",
          "Wine door và Cedega",
          "Wine và PlayOnlinux",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 54: Đâu không phải là hệ điều hành mã nguồn mở?",
        o: ["Red Hat", "Fedora", "Debian", "Không có đáp án đúng"],
        a: 3,
      },
      {
        q: "Câu 55: BIND là phần mềm mã nguồn mở gì?",
        o: ["Máy chủ tên miền", "Mail server", "Website", "Hệ điều hành"],
        a: 0,
      },
      {
        q: "Câu 56: Anh (chị) hãy cho biết phần để người dùng cài đặt ứng dụng của hệ điều hành Linux gọi là gì?",
        o: ["Shell", "Application", "Terminal", "Kernel"],
        a: 1,
      },
      {
        q: "Câu 57: Định nghĩa nguồn mở OSD, làm nền tảng cho định nghĩa phần cứng mở OSHW, bắt nguồn từ Debian Free Software Guidelines do ai xây dựng?",
        o: [
          "Simon Phipps và tổ chức sáng kiến nguồn mở Open Source Initiative",
          "Linus Tovalds và tổ chức quốc tế về tiêu chuẩn hóa ISO cho phần cứng",
          "Richard Stallman và quỹ phát triển phần mềm tự do FSF (Free Software Foundation)",
          "Bruce Perens và các nhà phát triển Debian",
        ],
        a: 3,
      },
      {
        q: "Câu 58: Bạn hãy cho biết phần mềm nào sau đây sử dụng giấy phép GNU GPL:",
        o: [
          "Nhân Linux được sử dụng trong Ubuntu",
          "Window Xfree86",
          "JavaFBP toolkit",
          "Không câu nào đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 59: Phần mở rộng tệp công thức OpenDocument mặc định của OpenOffice Math là gì?",
        o: ["ODS", "ODT", "ODF", "DFD"],
        a: 2,
      },
      {
        q: "Câu 60: Theo thỏa thuận đóng góp cá nhân ICLA của Apache, ai giữ quyền sở hữu bản quyền đối với đóng góp?",
        o: [
          "Người đóng góp thực sự chuyển giao quyền sở hữu bản quyền đối với những đóng góp cho dự án.",
          "Người đóng góp ban đầu giữ lại quyền sở hữu bản quyền đối với những đóng góp của họ",
          "Apache tự động trở thành chủ sở hữu duy nhất của toàn bộ bản quyền",
          "Người đóng góp chỉ có quyền phân phối các khoản đóng góp mới theo giấy phép nguồn mở hiện tại của dự án",
        ],
        a: 1,
      },
      {
        q: "Câu 61: Anh (chị) hãy cho biết theo định nghĩa phần cứng mở (Open-source Hardware) phát biểu nào là đúng?",
        o: [
          "Nếu thiết kế phần cứng được cấp phép, nó yêu cầu phải có phần mềm nhúng hoặc cách khác để hoạt động đúng và thực hiện các chức năng.",
          "Phần cứng mở cho phép mọi người tự do kiểm soát công nghệ của họ, chia sẻ kiến thức thông qua việc trao đổi thiết kế mở và phi thương mại",
          "Phần cứng phải được phát hành cùng với tài liệu bao gồm các tệp thiết kế và phải cho phép sửa đổi và phân phối các tệp thiết kế",
          "Phần cứng không được trang bị tài liệu kèm theo, tài liệu chỉ được công bố miễn phí qua mạng internet",
        ],
        a: 2,
      },
      {
        q: "Câu 62: Anh (chị) hãy cho biết phần cứng mở (Open-source Hardware) có tài liệu thiết kế là gì?",
        o: [
          "Các tệp thiết kế ở định dạng gốc thuận tiện cho sửa đổi, được công khai và cho phép sửa đổi, phân phối",
          "Là tài liệu thiết kế độc quyền được chia sẻ.",
          "Chỉ cần ảnh chụp thiết kế, không cần tệp gốc có thể sửa đổi",
          "Là tài liệu thiết kế gốc được đóng dấu bản quyền.",
        ],
        a: 0,
      },
      {
        q: "Câu 63: Chọn phát biểu đúng về Joomla",
        o: [
          "Giúp tiết kiệm thời gian và công sức thiết kế Website",
          "Tự ngồi lập trình lại từ đầu",
          "Tự phát triển ngay từ đầu",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 64: Nhóm nào sau đây không phải là đối tượng sử dụng của hệ thống Moodle E-learning?",
        o: [
          "Quản lý viên",
          "Giảng viên",
          "Sinh viên",
          "Không có nhóm nào trong ba nhóm trên bị loại trừ",
        ],
        a: 3,
      },
      {
        q: "Câu 65: Trong các đối tượng sau, đối tượng nào phục vụ Moodle Elearning?",
        o: [
          "Quản lý viên",
          "Giảng viên",
          "Sinh viên",
          "Cả ‘a’, ‘b’, ‘c’ đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 66: Moodle là một giải pháp học tập lý tưởng trên mạng cho?",
        o: [
          "Các trường phổ thông",
          "Các trường đại học, cao đẳng",
          "Các tổ chức doanh nghiệp, bệnh viện",
          "cả ‘a’, ‘b’, ‘c’ đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 67: Công cụ Moodle dùng chủ yếu trong site nào?",
        o: ["Giáo dục", "Tin tức", "Thương mại điện tử", "Thể thao, giải trí"],
        a: 0,
      },
      {
        q: "Câu 68: Moodle viết tắt của?",
        o: [
          "Modular Object-Oriented Dynamic Learning Environment",
          "Modular -Oriented Dynamic Learning Environment",
          "Modular Object- Dynamic Learning Environment",
          "Modular Object-Oriented Learning Environment",
        ],
        a: 0,
      },
      {
        q: "Câu 69: Joomla có thể sử dụng vào những site?",
        o: [
          "Blog cá nhân, tin tức, trường học",
          "Thể thao, giải trí, mua sắm, thương mại điện tử",
          "Danh bạ trực tuyến, mạng xã hội, mạng cộng đồng",
          "cả ‘a’, ‘b’, ‘c’ đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 70: Joomla không thể sử dụng vào những site?",
        o: [
          "Blog cá nhân, tin tức, trường học",
          "Thể thao, giải trí, mua sắm, thương mại điện tử",
          "Danh bạ trực tuyến, mạng xã hội, mạng cộng đồng",
          "Không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 71: Phần mềm mã nguồn mở nào dùng để xây dựng thương mại điện tử?",
        o: ["Opencart", "Joomla", "Wordpress", "Cả a, b, c đều đúng"],
        a: 3,
      },
      {
        q: "Câu 72: Quá trình cài đặt mới, bộ nào không cần tạo cơ sở dữ liệu?",
        o: [
          "Nukeviet",
          "Wordpress",
          "Joomla",
          "Cả a, b, c đều cần database trong quá trình cài",
        ],
        a: 3,
      },
      {
        q: "Câu 73: Để tạo môi trường Web trên localhost bạn chọn cách nào sau đây?",
        o: [
          "Cài đặt IIS trong Window",
          "Cài đặt SQL Server",
          "Cài đặt MySQL",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 74: Để tạo môi trường Web và CSDL trên Localhost bạn phải cài đặt?",
        o: ["Cài đặt XamPP", "Cài đặt XML", "Cài đặt PHP", "Cài đặt IIS"],
        a: 0,
      },
      {
        q: "Câu 75: Để tạo môi trường Web và CSDL trên Localhost bạn phải cài đặt?",
        o: [
          "Appserv",
          "IIS và SQL Server",
          "Cả ‘a’, ‘b’ đều đúng",
          "Cả ‘a’, ‘b’ đều sai",
        ],
        a: 2,
      },
      {
        q: "Câu 76: Phát biểu nào sau đây không phải là phát biểu đúng",
        o: [
          "Phần mềm nguồn mở cho phép tiếp cận mã nguồn theo giấy phép nguồn mở",
          "Phần mềm nguồn mở luôn được cung cấp miễn phí về giá tiền",
          "Phần mềm mã nguồn mở cho phép người dùng được sửa mã nguồn",
          "Phần mềm mã nguồn mở cho phép người dùng được tự do chia sẻ cho người khác",
        ],
        a: 1,
      },
      {
        q: "Câu 77: Mục tiêu nào sau đây trực tiếp thể hiện các quyền tự do của người dùng trong phần mềm tự do nguồn mở?",
        o: [
          "Giải phóng những cản trở về tư duy tự do trong sáng tạo, phát triển, chia sẻ của phần mềm",
          "Giải phóng những rào cản của sự phức tạp công nghệ bằng khả năng –tự động hóa",
          "Liên kết nguồn tri thức vô tận trong xã hội, cạnh tranh bình đẳng và tự do trong sáng tạo",
          "Tất cả các đáp án",
        ],
        a: 0,
      },
      {
        q: "Câu 78: Phát biểu đúng về giấy phép dạng Copyleft?",
        o: [
          "Một loại giấy phép mà hạn chế sự tự do để sử dụng, chỉnh sửa, mở rộng và phân phối lại các phiên bản mã nguồn",
          "Là loại giấy phép được cấp phép cho tất cả các phần mềm miễn phí",
          "BSD và MIT là giấy phép ở dạng này",
          "Không có đáp án",
        ],
        a: 3,
      },
      {
        q: "Câu 79: Loại giấy phép nào không phải là giấy phép nguồn mở ?",
        o: [
          "New BSD License",
          "MIT License",
          "Eclipse Public License",
          "Không có đáp án",
        ],
        a: 3,
      },
      {
        q: "Câu 80: GNU General Public License tất cả các phiên bản là loại giấy phép gì?",
        o: ["Copyright", "Copyleft", "Copyfree", "Copyfull"],
        a: 1,
      },
      {
        q: "Câu 81: Trong Joomla, chức năng cho member gửi bài viết là",
        o: ["Virtuemart", "JoomFish", "Free template", "JA Submit"],
        a: 3,
      },
      {
        q: "Câu 82: Phần mềm nào không phải mã nguồn mở",
        o: ["Drupal", "Nukeviet", "Photoshop", "Debian"],
        a: 2,
      },
      {
        q: "Câu 83: Phần mềm/phiên bản nào dưới đây không được coi là nguồn mở theo tiêu chí OSI?",
        o: [
          "Drupal",
          "MongoDB Community Server phát hành theo SSPL",
          "Chef Infra Client phát hành theo Apache License 2.0",
          "Không có đáp án",
        ],
        a: 1,
      },
      {
        q: "Câu 84: Dòng phiên bản Nukeviet 2.0 do những ai phát triển?",
        o: [
          "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Nga phát triển",
          "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Đức phát triển",
          "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Pháp phát triển",
          "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Nhật phát triển",
        ],
        a: 0,
      },
      {
        q: "Câu 85: Akismet (wordpress plugin) chức năng làm gì?",
        o: ["Chống spam", "Quản lý link", "Tăng tốc web", "Quản lý quảng cáo"],
        a: 0,
      },
      {
        q: "Câu 86: Jetpack (wordpress plugin) có mấy chức năng?",
        o: ["1", "2", "3", "Nhiều hơn 3 chức năng"],
        a: 3,
      },
      {
        q: "Câu 87: Plugin nào trong wordpress dùng bán hàng trực tuyến?",
        o: ["WooCommerce", "Jetpack", "WP Optimize", "Bloom"],
        a: 0,
      },
      {
        q: "Câu 88: Phát biểu đúng về module 123HOST LSCache trong Nukeviet?",
        o: [
          "Chỉ dành riêng cho khách hàng sử dụng Hosting tại 123HOST",
          "Dùng thoải mái ở tại các Hosting khác nhau",
          "Tăng tốc gấp nhiều lần cho Website ở các Hosting khác nhau.",
          "Tính phí khi tải về cài đặt",
        ],
        a: 0,
      },
      {
        q: "Câu 89: Block Facebook Like Box của tác giả nào?",
        o: ["binm8.4356", "mynukeviet", "vinades.,jsc", "info.vndes"],
        a: 2,
      },
      {
        q: "Câu 90: Phát biểu đúng Module (Nukeviet) - Hỗ trợ thiết bị di động",
        o: [
          "Cho phép người dùng thay đổi giao diện tương thích (từ phiên bản 1.3 - do admin cấu hình)",
          "Cho phép người dùng thay đổi giao diện tương thích (từ phiên bản 2.3 - do admin cấu hình)",
          "Cho phép người dùng thay đổi giao diện tương thích (từ phiên bản 3.3 - do admin cấu hình)",
          "Cho phép người dùng thay đổi giao diện tương thích (từ phiên bản 4.3 - do admin cấu hình)",
        ],
        a: 2,
      },
      {
        q: "Câu 91: Theo hướng dẫn áp dụng GNU GPL, thông báo bản quyền và giấy phép nên được đặt ở vị trí nào trong mỗi tệp mã nguồn?",
        o: [
          "Một thông báo độc lập đi kèm",
          "Đính kèm vào phần đầu của tập tin mã nguồn 'dưới dạng ghi chú'",
          "Đính kèm vào phần cuối của tập tin mã nguồn 'dưới dạng ghi chú)'",
          "Cả 3 phương pháp trên đều đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 92: Giấy phép BSD (Berkeley Software Distribution) ban đầu gắn với hệ thống phần mềm nào?",
        o: ["Free BSD", "BSD Unix", "Net BSD", "Unix"],
        a: 1,
      },
      {
        q: "Câu 93: Giấy phép mã nguồn mở là tập hợp các quy tắc đòi hỏi ai là người phải tuân theo:",
        o: [
          "Người sáng chế ra phần mềm mã nguồn mở.",
          "Nhà bảo hành phần mềm mã nguồn mở.",
          "Người sử dụng phần mềm mã nguồn mở.",
          "Cả 3",
        ],
        a: 2,
      },
      {
        q: "Câu 94: Mô tả nào đầy đủ nhất về OSI (Open Source Initiative)?",
        o: [
          "Là một tổ chức phi lợi nhuận mà mục đích của nó là thúc đẩy sự phát triển phần mềm nguồn mở. (2)",
          "Hoạt động quan trọng nhất của tổ chức này là xem xét phê duyệt giấy phép mã nguồn mở. (3)",
          "Tổ chức phi lợi nhuận thúc đẩy nguồn mở, đồng thời xem xét và phê duyệt giấy phép nguồn mở",
          "Là một tổ chức phần mềm nguồn mở, trực tiếp phát triển các dự án phần mềm nguồn mở. (1)",
        ],
        a: 2,
      },
      {
        q: "Câu 95: Tổ chức FSF là tổ chức",
        o: [
          "Phần mềm mã nguồn mở",
          "Phần mềm tự do",
          "Quỹ Phần mềm Tự do (Free Software Foundation)",
          "Phần mềm miễn phí",
        ],
        a: 2,
      },
      {
        q: "Câu 96: Đặc điểm nào sau đây không được bảo đảm chỉ bởi việc phần mềm được cấp phép nguồn mở?",
        o: [
          "Có thể tạo điều kiện cạnh tranh và giảm sự phụ thuộc vào một nhà cung cấp",
          "Luôn không mất tiền mua hoặc sử dụng dịch vụ kèm theo",
          "Người dùng có thể kiểm tra mã nguồn để góp phần cải thiện độ ổn định",
          "Phần mềm mã nguồn mở cung cấp kèm mã nguồn",
        ],
        a: 1,
      },
      {
        q: "Câu 97: Phát biểu nào sau đây không đúng về giấy phép nguồn mở?",
        o: [
          "Giấy phép quy định các quyền sử dụng, sửa đổi và phân phối phần mềm",
          "Mọi giấy phép nguồn mở đều buộc bản phái sinh dùng cùng giấy phép",
          "Một số giấy phép copyleft yêu cầu bản phái sinh được phân phối theo cùng giấy phép",
          "Giấy phép nguồn mở phải cho phép sửa đổi phần mềm",
        ],
        a: 1,
      },
      {
        q: "Câu 98: Phiên bản GNU GPL được FSF công bố năm 2007 là phiên bản nào?",
        o: ["1.0", "2.0", "3.0", "4.0"],
        a: 2,
      },
      {
        q: "Câu 99: Khi phân phối một chương trình kết hợp tạo thành tác phẩm phái sinh, giấy phép nào sau đây thường không cho phép giữ độc quyền phần kết hợp nếu không có ngoại lệ hoặc giấy phép riêng?",
        o: [
          "GNU General Public License",
          "Apache License",
          "BSD License",
          "Artistic License",
        ],
        a: 0,
      },
      {
        q: "Câu 100: Giấy phép nào có khả năng kết hợp một phần mềm với một phần mềm/ thư viện mang giấy phép mở tương ứng.",
        o: ["Apache License", "BSD License", "MIT License", "Cả 3 License"],
        a: 3,
      },
      {
        q: "Câu 101: Theo cách phân chia lịch sử thành dòng NukeViet 2.0 trở về trước và dòng 3.0 trở về sau, NukeViet có mấy dòng chính?",
        o: ["2", "1", "3", "4"],
        a: 0,
      },
      {
        q: "Câu 102: Theo cách phân chia lịch sử trong tài liệu, phương án nào liệt kê đầy đủ hai dòng chính của NukeViet?",
        o: [
          "1. Dòng 2.0 trở về trước",
          "2. Dòng 3.0 trở về sau",
          "3. Dòng 4.0",
          "Dòng NukeViet 2.0 trở về trước và dòng NukeViet 3.0 trở về sau",
        ],
        a: 3,
      },
      {
        q: "Câu 103: Mô tả nào đầy đủ nhất về cộng đồng xây dựng và đóng gói Joomla?",
        o: [
          "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những chuyên gia hàng đầu và những thành viên tích cực",
          "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những chuyên gia hàng đầu",
          "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những thành viên tích cực",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 104: Chọn phát biểu đúng",
        o: [
          "khi gặp khó khăn không có ai giúp đỡ",
          "Khi gặp khó thì tự mình giải quyết",
          "Không có đáp án đúng",
          "Joomla có 1 cộng đồng phát triển cũng như sử dụng, điều đó có nghĩa là ngay khi gặp vấn đề khó khăn, rất nhiều người tình nguyện giúp đỡ bạn",
        ],
        a: 3,
      },
      {
        q: "Câu 105: Moodle hỗ trợ chuẩn đóng gói nội dung học tập nào sau đây?",
        o: ["SCORM", "MCOM", "Powerpoint", "SCOM"],
        a: 0,
      },
      {
        q: "Câu 106: Theo mô hình cấu trúc Moodle E-learning được sử dụng trong bộ tài liệu này, hệ thống gồm mấy phần?",
        o: ["5", "4", "3", "2"],
        a: 0,
      },
      {
        q: "Câu 107: Trong các tính năng sau, tính năng nào là của Moodle?",
        o: [
          "Tạo và quản lý khóa học",
          "Đưa nội dung bài học tới học viên",
          "Quản lý học viên",
          "Cả 'a', 'b', 'c' đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 108: Trong các tính năng sau, tính năng nào là của Moodle?",
        o: [
          "đánh giá, thảo luận, bài học, kiểm tra, bài tập lớn,...",
          "Quản lý tài nguyên",
          "Tổ chức hội thảo",
          "Cả 'a', 'b', 'c' đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 109: Trong các tính năng sau, tính năng nào là của Moodle?",
        o: [
          "Quản lý sự kiện",
          "Báo cáo tiến trình học tập của học viên",
          "Trợ giúp nội dung khóa học",
          "Cả 'a', 'b', 'c' đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 110: Web server được hiểu theo nghĩa máy tính phục vụ web là gì?",
        o: [
          "Là máy tính mà trên đó cài đặt phần mềm phục vụ Web",
          "Là máy tính cài đặt các phần mềm ứng dụng",
          "Là máy tính mà trên đó cài đặt Office",
          "là máy tính trên đó cài đặt phần mềm",
        ],
        a: 0,
      },
      {
        q: "Câu 111: Nhìn vào Hình 01, để mở XAMPP Control Panel, bạn chọn mục nào?",
        image: "image/CNTT/mnm/hinh-01.png",
        imageAlt:
          "Hình 01: menu thiết lập XAMPP 1.7.2 với các lựa chọn 1–7 và x",
        o: ["1", "2", "3", "4"],
        a: 0,
      },
      {
        q: "Câu 112: Nhìn vào Hình 01, để đổi vị trí cài đặt XAMPP (relocate XAMPP), bạn chọn mục nào?",
        image: "image/CNTT/mnm/hinh-01.png",
        imageAlt:
          "Hình 01: menu thiết lập XAMPP 1.7.2 với các lựa chọn 1–7 và x",
        o: ["2", "3", "4", "5"],
        a: 0,
      },
      {
        q: "Câu 113: Nhìn vào Hình 01, để vô hiệu hóa HTTPS (SSL), bạn chọn mục nào?",
        image: "image/CNTT/mnm/hinh-01.png",
        imageAlt:
          "Hình 01: menu thiết lập XAMPP 1.7.2 với các lựa chọn 1–7 và x",
        o: ["3", "5", "4", "6"],
        a: 0,
      },
      {
        q: "Câu 114: Nhìn vào Hình 01, để vô hiệu hóa Server Side Includes (SSI), bạn chọn mục nào?",
        image: "image/CNTT/mnm/hinh-01.png",
        imageAlt:
          "Hình 01: menu thiết lập XAMPP 1.7.2 với các lựa chọn 1–7 và x",
        o: ["4", "5", "6", "7"],
        a: 0,
      },
      {
        q: "Câu 115: Nhìn vào Hình 01, để chỉ sử dụng IPv4 (enable IPv4 only), bạn chọn mục nào?",
        image: "image/CNTT/mnm/hinh-01.png",
        imageAlt:
          "Hình 01: menu thiết lập XAMPP 1.7.2 với các lựa chọn 1–7 và x",
        o: ["1", "5", "6", "7"],
        a: 1,
      },
      {
        q: "Câu 116: Nhìn vào Hình 01, để vô hiệu hóa mod_perl, bạn chọn mục nào?",
        image: "image/CNTT/mnm/hinh-01.png",
        imageAlt:
          "Hình 01: menu thiết lập XAMPP 1.7.2 với các lựa chọn 1–7 và x",
        o: ["6", "7", "4", "2"],
        a: 0,
      },
      {
        q: "Câu 117: Nhìn vào Hình 01, để vô hiệu hóa Apache::ASP, bạn chọn mục nào?",
        image: "image/CNTT/mnm/hinh-01.png",
        imageAlt:
          "Hình 01: menu thiết lập XAMPP 1.7.2 với các lựa chọn 1–7 và x",
        o: ["7", "6", "5", "4"],
        a: 0,
      },
      {
        q: "Câu 118: Nhìn vào Hình 01, để thoát khỏi cửa sổ thiết lập XAMPP, bạn nhập lựa chọn nào?",
        image: "image/CNTT/mnm/hinh-01.png",
        imageAlt:
          "Hình 01: menu thiết lập XAMPP 1.7.2 với các lựa chọn 1–7 và x",
        o: ["x", "exit", "cmd", "không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 119: Nhìn vào hình 02, để tạo môi trường Web và CSDL bạn chọn?",
        o: ["9 và 10", "8", "3", "1 và 2"],
        a: 0,
        image: "image/CNTT/mnm/hinh-02.png",
        imageAlt: "Hình 02: bảng điều khiển XAMPP với các nút được đánh số",
      },
      {
        q: "Câu 120: Nhìn vào hình 02, để kiểm tra lại các cổng trong công cụ XAMPP bạn chọn?",
        o: ["3", "1", "2", "4"],
        a: 0,
        image: "image/CNTT/mnm/hinh-02.png",
        imageAlt: "Hình 02: bảng điều khiển XAMPP với các nút được đánh số",
      },
      {
        q: "Câu 121: Nhìn vào hình 02, để làm tươi lại các cổng trong công cụ XAMPP bạn chọn?",
        o: ["6", "5", "7", "8"],
        a: 0,
        image: "image/CNTT/mnm/hinh-02.png",
        imageAlt: "Hình 02: bảng điều khiển XAMPP với các nút được đánh số",
      },
      {
        q: "Câu 122: Nhìn vào hình 02, để xem hướng dẫn cấu hình công cụ XAMPP bạn chọn?",
        o: ["7", "8", "9", "10"],
        a: 0,
        image: "image/CNTT/mnm/hinh-02.png",
        imageAlt: "Hình 02: bảng điều khiển XAMPP với các nút được đánh số",
      },
      {
        q: "Câu 123: Nhìn vào hình 02, để thoát khỏi công cụ sau khi thiết lập trong XAMPP bạn chọn?",
        o: ["8", "9", "10", "11"],
        a: 0,
        image: "image/CNTT/mnm/hinh-02.png",
        imageAlt: "Hình 02: bảng điều khiển XAMPP với các nút được đánh số",
      },
      {
        q: "Câu 124: Nhìn vào hình 02, để quay trở lại môi trường DOS trong XAMPP bạn chọn?",
        o: ["1", "2", "3", "4"],
        a: 0,
        image: "image/CNTT/mnm/hinh-02.png",
        imageAlt: "Hình 02: bảng điều khiển XAMPP với các nút được đánh số",
      },
      {
        q: "Câu 125: Nhìn vào hình 02, phiên bản XAMPP là?",
        o: ["1.7.2", "1.7.2.x", "1.7.7", "1.7.8"],
        a: 0,
        image: "image/CNTT/mnm/hinh-02.png",
        imageAlt: "Hình 02: bảng điều khiển XAMPP với các nút được đánh số",
      },
      {
        q: "Câu 126: Nhìn vào hình 02, bạn hãy cho biết XAMPP được lưu trữ tại?",
        o: ["ổ C", "ổ D", "ổ E", "Không có đáp án đúng"],
        a: 0,
        image: "image/CNTT/mnm/hinh-02.png",
        imageAlt: "Hình 02: bảng điều khiển XAMPP với các nút được đánh số",
      },
      {
        q: "Câu 127: Nhìn vào hình 03, để backup được 1 CSDL, sau thao tác chọn CSDL cần Backup bạn chọn?",
        o: ["9", "8", "10", "7"],
        a: 0,
        image: "image/CNTT/mnm/hinh-03.png",
        imageAlt: "Hình 03: giao diện phpMyAdmin với các mục được đánh số",
      },
      {
        q: "Câu 128: Nhìn vào hình 03, để khôi phục được 1 CSDL, sau thao tác chọn CSDL cần khôi phục bạn chọn?",
        o: ["10", "11", "12", "13"],
        a: 0,
        image: "image/CNTT/mnm/hinh-03.png",
        imageAlt: "Hình 03: giao diện phpMyAdmin với các mục được đánh số",
      },
      {
        q: "Câu 129: Nhìn vào hình 03, để kiểm tra trong hệ thống có bao nhiêu CSDL bạn chọn?",
        o: ["1", "2", "3", "4"],
        a: 0,
        image: "image/CNTT/mnm/hinh-03.png",
        imageAlt: "Hình 03: giao diện phpMyAdmin với các mục được đánh số",
      },
      {
        q: "Câu 130: Nhìn vào hình 03, để tạo ra một câu truy vấn trong CSDL bạn chọn?",
        o: ["2", "3", "4", "5"],
        a: 0,
        image: "image/CNTT/mnm/hinh-03.png",
        imageAlt: "Hình 03: giao diện phpMyAdmin với các mục được đánh số",
      },
      {
        q: "Câu 131: Nhìn vào hình 03, để xem trạng thái của CSDL bạn chọn?",
        o: ["3", "4", "5", "6"],
        a: 0,
        image: "image/CNTT/mnm/hinh-03.png",
        imageAlt: "Hình 03: giao diện phpMyAdmin với các mục được đánh số",
      },
      {
        q: "Câu 132: Nhìn vào hình 03, để chọn gói ngôn ngữ bạn chọn?",
        o: ["11", "1", "12", "14"],
        a: 0,
        image: "image/CNTT/mnm/hinh-03.png",
        imageAlt: "Hình 03: giao diện phpMyAdmin với các mục được đánh số",
      },
      {
        q: "Câu 133: Với giao diện phpMyAdmin cũ dùng nhãn 'Create new database' và máy chủ cài trên localhost, thao tác nào sau đây tạo cơ sở dữ liệu?",
        o: [
          "localhost/phpMyadmin gõ tên CSDL vào mục 'Create new database'",
          "localhost/phpMyadmin gõ tên CSDL vào mục 'Create new databas'",
          "localhost/phpMyadmin gõ tên CSDL vào mục 'Create database'",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 134: Nhìn vào Hình 05, để mở trang My home (trang riêng của người dùng), bạn chọn mục số nào?",
        o: ["1", "2", "3", "4"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 135: Nhìn vào hình 05, để xem các trang của hệ thống bạn chọn?",
        o: ["2", "1", "3", "4"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 136: Nhìn vào hình 05, để xem thông tin cá nhân của tài khoản bạn chọn?",
        o: ["3", "2", "1", "4"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 137: Nhìn vào hình 05, để lập thẻ đánh dấu một trang bạn chọn?",
        o: ["4", "3", "2", "1"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 138: Nhìn vào hình 05, bạn hãy cho biết để thêm một khối bạn chọn?",
        o: ["5", "4", "3", "2"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 139: Nhìn vào hình 05, bạn hãy cho biết click vào đâu để xem được các thông tin Tài khoản, thêm, sửa, xóa tài khoản?",
        o: ["9", "10", "11", "12"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 140: Nhìn vào hình 05, bạn hãy cho biết click vào đâu để có thể thêm được các khóa học, sửa khóa học, xóa khóa học?",
        o: ["10", "11", "12", "13"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 141: Nhìn vào hình 05, bạn hãy cho biết click vào đâu để có thể xem điểm số của các học viên?",
        o: ["11", "12", "13", "14"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 142: Nhìn vào hình 05, bạn hãy cho biết click vào đâu để thiết lập lại múi giờ?",
        o: ["12", "13", "14", "15"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 143: Nhìn vào hình 05, bạn hãy cho biết click vào đâu để thiết lập lại ngôn ngữ cho website?",
        o: ["13", "14", "15", "16"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 144: Nhìn vào hình 05, bạn hãy cho biết click vào đâu để thiết lập các chính sách bảo mật cho Web?",
        o: ["18", "19", "20", "17"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 145: Nhìn vào hình 05, bạn hãy cho biết click vào đâu để thiết lập hình thức trình bày của web",
        o: ["19", "18", "17", "16"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 146: Nhìn vào hình 05, bạn hãy cho biết click vào đâu để xem đường dẫn hệ thống, thư điện tử, quản lý phiên làm việc",
        o: ["15", "16", "17", "18"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 147: Nhìn vào hình 05, hãy cho biết click vào đâu để xem các lời bình, nhật ký lưu, thống kê,...",
        o: ["16", "17", "18", "19"],
        a: 0,
        image: "image/CNTT/mnm/hinh-05.png",
        imageAlt:
          "Hình 05: bảng điều hướng và quản trị Moodle với các mục được đánh số",
      },
      {
        q: "Câu 148: Nhìn vào hình 06, bạn hãy cho biết trước khi thêm 1 khóa học mới bạn phải chọn chủ đề 'mục' cho khóa học đó. Bạn phải click chọn?",
        o: ["1", "2", "3", "4"],
        a: 0,
        image: "image/CNTT/mnm/hinh-06.png",
        imageAlt:
          "Hình 06: biểu mẫu thiết lập khóa học Moodle với các trường được đánh số",
      },
      {
        q: "Câu 149: Nhìn vào hình 06, bạn hãy cho biết để ghi thông tin mã số của khóa học bạn chọn?",
        o: ["4", "3", "2", "1"],
        a: 0,
        image: "image/CNTT/mnm/hinh-06.png",
        imageAlt:
          "Hình 06: biểu mẫu thiết lập khóa học Moodle với các trường được đánh số",
      },
      {
        q: "Câu 150: Nhìn vào hình 06, bạn hãy cho biết để đưa thông tin tóm tắt về khóa học bạn chọn?",
        o: ["5", "4", "3", "2"],
        a: 0,
        image: "image/CNTT/mnm/hinh-06.png",
        imageAlt:
          "Hình 06: biểu mẫu thiết lập khóa học Moodle với các trường được đánh số",
      },
      {
        q: "Câu 151: Nhìn vào hình 06, bạn hãy cho biết để định dạng bài giảng theo chuẩn SCORM bạn click chọn?",
        o: ["7", "6", "5", "4"],
        a: 0,
        image: "image/CNTT/mnm/hinh-06.png",
        imageAlt:
          "Hình 06: biểu mẫu thiết lập khóa học Moodle với các trường được đánh số",
      },
      {
        q: "Câu 152: Nhìn vào hình 06, bạn hãy cho biết để thiết lập dung lượng của 1 file khi upload lên hệ thống bạn chọn?",
        o: ["13", "12", "11", "10"],
        a: 0,
        image: "image/CNTT/mnm/hinh-06.png",
        imageAlt:
          "Hình 06: biểu mẫu thiết lập khóa học Moodle với các trường được đánh số",
      },
      {
        q: "Câu 153: Nhìn vào hình 06, bạn hãy cho biết để thiết lập chế độ xem báo cáo hoạt động, bạn click chọn?",
        o: ["12", "13", "14", "10"],
        a: 0,
        image: "image/CNTT/mnm/hinh-06.png",
        imageAlt:
          "Hình 06: biểu mẫu thiết lập khóa học Moodle với các trường được đánh số",
      },
      {
        q: "Câu 154: Nhìn vào hình 06, bạn hãy cho biết để thiết lập ngày bắt đầu khóa học bạn chọn?",
        o: ["8", "7", "6", "5"],
        a: 0,
        image: "image/CNTT/mnm/hinh-06.png",
        imageAlt:
          "Hình 06: biểu mẫu thiết lập khóa học Moodle với các trường được đánh số",
      },
      {
        q: "Câu 155: Trong mô hình dự án nguồn mở công khai cả kho mã và tài liệu, phương án nào mô tả đầy đủ nhất các khả năng tham gia?",
        o: [
          "Bất kỳ ai cũng có thể tải về toàn bộ các tài liệu",
          "Bất kỳ ai cũng có thể cùng cộng tác đóng góp",
          "Bất kỳ ai cũng có thể làm tài liệu cho dự án",
          "Bất kỳ ai cũng có thể tải về toàn bộ các tài liệu; Bất kỳ ai cũng có thể cùng cộng tác đóng góp; Bất kỳ ai cũng có thể làm tài liệu cho dự án; Bất kỳ ai cũng có thể tải về toàn bộ kho mã nguồn",
        ],
        a: 3,
      },
      {
        q: "Câu 156: Với dự án nguồn mở công khai kho mã và tài liệu, phát biểu nào sau đây sai?",
        o: [
          "Bất kỳ ai cũng có thể tải về toàn bộ kho mã nguồn",
          "Bất kỳ ai cũng có thể tải về toàn bộ các tài liệu",
          "Tất cả tài liệu dự án phải có giấy phép CC-BY hoặc CC-BY-SA",
          "Tất cả những người tham gia vào dự án có thể trở thành người đóng góp",
        ],
        a: 2,
      },
      {
        q: "Câu 157: Trong mô hình phân biệt contributor chưa có quyền commit với committer, contributor là thành viên như thế nào?",
        o: [
          "Thành viên đã viết mã nguồn và được chấp nhận đặt trong dự án, tuy nhiên không có quyền ghi trực tiếp vào kho mã nguồn của dự án",
          "Thành viên có quyền ghi trực tiếp vào kho mã nguồn của dự án, thường xuyên viết mã nguồn cho các chức năng cũng như sửa các bug cho dự án",
          "Thành viên thực hiện việc xét duyệt các bản đóng góp vào dự án, thăng cấp hoặc giáng cấp thành viên và quản lý tổng thể cả dự án",
          "Không có đáp án",
        ],
        a: 0,
      },
      {
        q: "Câu 158: Trong dự án nguồn mở, committer (người có quyền ghi vào kho mã) là thành viên như thế nào?",
        o: [
          "Thành viên đã viết mã nguồn và được chấp nhận đặt trong dự án, tuy nhiên không có quyền ghi trực tiếp vào kho mã nguồn của dự án",
          "Thành viên có quyền ghi trực tiếp vào kho mã nguồn của dự án, thường xuyên viết mã nguồn cho các chức năng cũng như sửa các bug cho dự án",
          "Thành viên thực hiện việc xét duyệt các bản đóng góp vào dự án, thăng cấp hoặc giáng cấp thành viên và quản lý tổng thể cả dự án",
          "Không có đáp án",
        ],
        a: 1,
      },
      {
        q: "Câu 159: Trong các dự án nguồn mở, Reviewer là thành viên như thế nào?",
        o: [
          "Thành viên đã viết mã nguồn và được chấp nhận đặt trong dự án, tuy nhiên không có quyền ghi trực tiếp vào kho mã nguồn của dự án",
          "Thành viên có quyền ghi trực tiếp vào kho mã nguồn của dự án, thường xuyên viết mã nguồn cho các chức năng cũng như sửa các bug cho dự án",
          "Thành viên rà soát và nhận xét các thay đổi mã nguồn hoặc đóng góp trước khi tích hợp",
          "Không có đáp án",
        ],
        a: 2,
      },
      {
        q: "Câu 160: Phần mềm tự do tham chiếu tới 4 quyền tự do cho người sử dụng phần mềm, quyền tự do số 0 là gì?",
        o: [
          "Tự do chạy chương trình phần mềm vì bất kỳ mục đích nào",
          "Tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
          "Tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn",
          "Tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn (và các phiên bản đã được sửa đổi nói chung) cho mọi người, sao cho toàn bộ cộng đồng được hưởng lợi. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
        ],
        a: 0,
      },
      {
        q: "Câu 161: Phần mềm tự do tham chiếu tới 4 quyền tự do cho người sử dụng phần mềm, quyền tự do số 1 là gì?",
        o: [
          "Tự do chạy chương trình phần mềm vì bất kỳ mục đích nào",
          "Tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
          "Tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn",
          "Tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn (và các phiên bản đã được sửa đổi nói chung) cho mọi người, sao cho toàn bộ cộng đồng được hưởng lợi. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
        ],
        a: 1,
      },
      {
        q: "Câu 162: Phần mềm tự do tham chiếu tới 4 quyền tự do cho người sử dụng phần mềm, quyền tự do số 2 là gì?",
        o: [
          "Tự do chạy chương trình phần mềm vì bất kỳ mục đích nào",
          "Tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
          "Tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn",
          "Tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn (và các phiên bản đã được sửa đổi nói chung) cho mọi người, sao cho toàn bộ cộng đồng được hưởng lợi. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
        ],
        a: 2,
      },
      {
        q: "Câu 163: Phần mềm tự do tham chiếu tới 4 quyền tự do cho người sử dụng phần mềm, quyền tự do số 3 là gì?",
        o: [
          "Tự do chạy chương trình phần mềm vì bất kỳ mục đích nào",
          "Tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
          "Tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn",
          "Tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn (và các phiên bản đã được sửa đổi nói chung) cho mọi người, sao cho toàn bộ cộng đồng được hưởng lợi. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
        ],
        a: 3,
      },
      {
        q: "Câu 164: Tính tương thích của 2 loại giấy phép mã nguồn mở nghĩa là?",
        o: [
          "Bạn có thể tạo ra mã nguồn mà nó xuất xứ từ cả 2 loại giấy phép",
          "Hai loại giấy phép sử dụng giống y hệt nhau",
          "Là hai loại giấy phép cùng được cấp phép bởi OSI",
          "Việc đưa mã nguồn theo giấy phép này đòi hỏi bạn phải thay đổi những điều khoản của giấy phép kia",
        ],
        a: 0,
      },
      {
        q: "Câu 165: Phần mềm nguồn mở là gì?",
        o: [
          "Phần mềm có mã nguồn được cung cấp theo giấy phép đáp ứng Định nghĩa nguồn mở của OSI",
          "Phần mềm chỉ công khai mã nguồn nhưng cấm sửa đổi và phân phối lại",
          "Là phần mềm sử dụng giấy phép được cấp phép bởi GNU",
          "Là phần mềm sử dụng giấy phép được cấp phép bởi FSF",
        ],
        a: 0,
      },
      {
        q: "Câu 166: Phần mềm tự do là gì?",
        o: [
          "Là phần mềm sử dụng giấy phép được cấp phép bởi OSI",
          "Phần mềm chỉ cho xem mã nguồn nhưng cấm sửa đổi",
          "Là phần mềm sử dụng giấy phép được cấp phép bởi GNU",
          "Phần mềm bảo đảm quyền chạy, nghiên cứu và sửa đổi, phân phối bản sao, phân phối bản đã sửa đổi",
        ],
        a: 3,
      },
      {
        q: "Câu 167: Phần mềm miễn phí (freeware) là gì?",
        o: [
          "Là một loại phần mềm tự do",
          "Là một loại phần mềm nguồn mở",
          "Là phần mềm tự do và cũng là phần mềm nguồn mở",
          "Phần mềm được cung cấp không thu phí, nhưng không mặc nhiên có quyền sửa đổi hoặc truy cập mã nguồn",
        ],
        a: 3,
      },
      {
        q: "Câu 168: Phần mềm nguồn mở là gì?",
        o: [
          "Phần mềm chỉ cho xem mã nguồn và cấm phân phối lại",
          "Là phần mềm không có chi phí về tài chính",
          "Phần mềm chỉ cần miễn phí là tự động được chứng nhận nguồn mở",
          "Phần mềm có mã nguồn và giấy phép đáp ứng đầy đủ tiêu chí của Định nghĩa nguồn mở",
        ],
        a: 3,
      },
      {
        q: "Câu 169: Phần mềm tự do là gì?",
        o: [
          "Giống như phần mềm nguồn mở nhưng mã nguồn không được chia sẻ",
          "Là loại phần mềm sử dụng tự do, không mất chi phí",
          "Phần mềm bảo đảm bốn quyền tự do: chạy, nghiên cứu/sửa đổi, chia sẻ bản sao và chia sẻ bản đã sửa đổi",
          "Phần mềm bắt buộc chỉ được cấp phép bằng GNU GPL",
        ],
        a: 2,
      },
      {
        q: "Câu 170: Những thành viên nào đóng góp nhiều nhất trong một dự án nguồn mở?",
        o: [
          "Là những lập trình viên phần mềm",
          "Là những người đóng góp",
          "Là những người đề xuất",
          "Không thể xác định chỉ từ tên vai trò; mức đóng góp phụ thuộc từng dự án và cá nhân",
        ],
        a: 3,
      },
      {
        q: "Câu 171: Người mới chưa được cấp quyền quản trị hoặc commit có thể trực tiếp làm việc nào sau đây mà không cần các quyền đó?",
        o: [
          "Giúp những người sử dụng mới, đưa ra các ý kiến phản hồi...",
          "Tự phê duyệt mọi thay đổi kiến trúc của dự án",
          "Ghi thẳng mã vào kho chính dù chưa được cấp quyền",
          "Tự cấp quyền quản trị cho tài khoản của mình",
        ],
        a: 0,
      },
      {
        q: "Câu 172: Xét theo cơ chế duy trì quyền tự do đối với bản phái sinh, GNU GPLv2 thuộc nhóm giấy phép nào?",
        o: [
          "Giấy phép được phê chuẩn là mở",
          "Giấy phép được phê chuẩn là tự do",
          "Giấy phép riêng của tổ chức GNU",
          "Giấy phép dạng Copyleft",
        ],
        a: 3,
      },
      {
        q: "Câu 173: Việc ra quyết định trong các dự án nguồn mở theo thứ tự như thế nào?",
        o: [
          "Đề xuất, thảo luận, biểu quyết, quyết định",
          "Thảo luận, đề xuất, biểu quyết, quyết định",
          "Đề xuất, quyết định, thảo luận, biểu quyết",
          "Đề xuất, quyết định, thảo luận, rà soát lại",
        ],
        a: 0,
      },
      {
        q: "Câu 174: Khi giấy phép Creative Commons ghi là CC-BY nghĩa là gì?",
        o: [
          "Ghi công – Bắt buộc",
          "Ghi công – Phi thương mại",
          "Ghi công – Chia sẻ tương tự",
          "Ghi công – Không có phái sinh",
        ],
        a: 0,
      },
      {
        q: "Câu 175: Khi giấy phép Creative Commons ghi là CC-BY-NC nghĩa là gì?",
        o: [
          "Ghi công – Bắt buộc",
          "Ghi công – Phi thương mại",
          "Ghi công – Chia sẻ tương tự",
          "Ghi công – Không có phái sinh",
        ],
        a: 1,
      },
      {
        q: "Câu 176: Khi giấy phép Creative Commons ghi là CC-BY-SA nghĩa là gì?",
        o: [
          "Ghi công – Bắt buộc",
          "Ghi công – Phi thương mại",
          "Ghi công – Chia sẻ tương tự",
          "Ghi công – Không có phái sinh",
        ],
        a: 2,
      },
      {
        q: "Câu 177: Khi giấy phép Creative Commons ghi là CC-BY-ND nghĩa là gì?",
        o: [
          "Ghi công – Bắt buộc",
          "Ghi công – Phi thương mại",
          "Ghi công – Chia sẻ tương tự",
          "Ghi công – Không có phái sinh",
        ],
        a: 3,
      },
      {
        q: "Câu 178: Khi giấy phép Creative Commons ghi là CC-BY-NC-SA nghĩa là gì?",
        o: [
          "Ghi công – Bắt buộc – Chia sẻ tương tự",
          "Ghi công – Phi thương mại – Chia sẻ tương tự",
          "Ghi công – Phi thương mại – Không có phái sinh",
          "Ghi công – Không có phái sinh – Chia sẻ tương tự",
        ],
        a: 1,
      },
      {
        q: "Câu 179: Khi giấy phép Creative Commons ghi là CC-BY-NC-ND nghĩa là gì?",
        o: [
          "Ghi công – Bắt buộc – Chia sẻ tương tự",
          "Ghi công – Phi thương mại – Chia sẻ tương tự",
          "Ghi công – Không có phái sinh",
          "Ghi công – Phi thương mại – Không có phái sinh",
        ],
        a: 3,
      },
      {
        q: "Câu 180: Trong thuật ngữ bản quyền, Public Domain (No Rights Reserved) có nghĩa là gì?",
        o: [
          "Miền công cộng",
          "Giữ lại một số quyền",
          "Giữ lại tất cả các quyền",
          "ở mức độ tự do, tin cậy",
        ],
        a: 0,
      },
      {
        q: "Câu 181: Khẩu hiệu Some Rights Reserved của Creative Commons có nghĩa là gì?",
        o: [
          "Miền công cộng",
          "Giữ lại một số quyền",
          "Giữ lại tất cả các quyền",
          "ở mức độ tự do, tin cậy",
        ],
        a: 1,
      },
      {
        q: "Câu 182: Trong thuật ngữ bản quyền, All Rights Reserved có nghĩa là gì?",
        o: [
          "Miền công cộng",
          "Giữ lại một số quyền",
          "Giữ lại tất cả các quyền",
          "ở mức độ tự do, tin cậy",
        ],
        a: 2,
      },
      {
        q: "Câu 183: Phiên bản GNU Free Documentation License nào bổ sung cơ chế chuyển một số nội dung wiki đủ điều kiện sang CC-BY-SA 3.0 trong thời hạn quy định tại mục 11?",
        o: [
          "GNU Free Documentation License 1.1",
          "GNU Free Documentation License 1.2",
          "GNU Free Documentation License 1.3",
          "GNU Free Documentation License 1.4",
        ],
        a: 2,
      },
      {
        q: "Câu 184: Định nghĩa nguồn mở OSD của OSI gồm bao nhiêu tiêu chí?",
        o: ["10", "12", "8", "4"],
        a: 0,
      },
      {
        q: "Câu 185: Về bản quyền, việc sử dụng phần mềm nguồn mở đúng giấy phép có đặc điểm nào sau đây?",
        o: [
          "Hoàn toàn tôn trọng bản quyền và sở hữu trí tuệ",
          "Không tôn trọng bản quyển, chia sẻ miễn phí",
          "Tôn trọng quyền sở hữu của cộng đồng hơn là sở hữu cá nhân",
          "Quyền sở hữu nắm trong tay của cộng đồng nguồn mở",
        ],
        a: 0,
      },
      {
        q: "Câu 186: Cộng đồng là gì?",
        o: [
          "Là các nhóm cá nhân chia sẻ những lợi ích chung",
          "Là những người có khả năng tương tác với nhau",
          "Là những người có nhiều đóng góp cho một dự án",
          "Là một nhóm các lập trình viên và người sử dụng",
        ],
        a: 0,
      },
      {
        q: "Câu 187: Một giấy phép được coi là copyfree khi nào?",
        o: [
          "Nó phải phù hợp với 'Copyfree Standard Definition'",
          "Nó không phải là một giấy phép dạng Copyleft",
          "Nó không đặt bất kỳ hạn chế về việc sửa đổi và phân phối",
          "Không có đáp án",
        ],
        a: 0,
      },
      {
        q: "Câu 188: Phương án nào liệt kê đầy đủ các nhóm tiêu chí của Copyfree Standard Definition?",
        o: [
          "Tự do sử dụng",
          "Tự do phân phối",
          "Tự do sửa đổi và tạo bản phái sinh",
          "Tự do sử dụng; Tự do phân phối; Tự do sửa đổi và tạo bản phái sinh; Tự do kết hợp; Áp dụng phổ quát",
        ],
        a: 3,
      },
      {
        q: "Câu 189: Đặc trưng chính xác định phần mềm nguồn mở là gì?",
        o: ["Là tự do", "Là miễn phí", "Là mã nguồn", "Là giấy phép"],
        a: 3,
      },
      {
        q: "Câu 190: Nhận định nào là đúng về phần mềm nguồn mở?",
        o: [
          "Phần mềm nguồn mở thực tế là giống hệt như phần mềm tự do",
          "Phần mềm nguồn mở và phần mềm tự do có điểm giống và khác nhau",
          "Phần mềm nguồn mở là chia sẻ miễn phí và không được kiếm tiền từ nó",
          "Phần mềm nguồn mở là sự tự do, nó có thể coi là phần mềm miễn phí",
        ],
        a: 1,
      },
      {
        q: "Câu 191: Trong 4 quyền tự do của phần mềm tự do, nếu không được phép truy cập vào mã nguồn thì quyền tự do nào không thực hiện được",
        o: ["Số 0 và số 1", "Số 1 và số 2", "Số 1 và số 3", "Số 0 và số 3"],
        a: 2,
      },
      {
        q: "Câu 192: Bước thực hiện nào không có trong thủ tục đệ trình một yêu cầu đề nghị OSI phê duyệt giấy phép nguồn mở (giai đoạn chuẩn bị và gửi hồ sơ)?",
        o: [
          "Đọc định nghĩa nguồn mở và đảm bảo rằng giấy phép của bạn phù hợp",
          "Xác định dạng đệ trình (để rút lui, để chấp thuận phiên bản giấy phép đã có, để phê chuẩn)",
          "Đảm bảo đơn vị có tư cách phù hợp để đệ trình một yêu cầu như vậy",
          "Cộng đồng thảo luận xét duyệt sau khi hồ sơ đã được gửi",
        ],
        a: 3,
      },
      {
        q: "Câu 193: Quá trình xét duyệt giấy phép nguồn mở nhằm mục đích gì?",
        o: [
          "Đảm bảo các giấy phép được phê duyệt tuân thủ định nghĩa nguồn mở",
          "Xác định chủng loại giấy phép",
          "Không khuyến khích các giấy phép hư danh và trùng lặp",
          "Đảm bảo các giấy phép được phê duyệt tuân thủ định nghĩa nguồn mở; Xác định chủng loại giấy phép; Không khuyến khích các giấy phép hư danh và trùng lặp; Bảo đảm quá trình xét duyệt kỹ lưỡng, minh bạch và có thời gian thảo luận phù hợp",
        ],
        a: 3,
      },
      {
        q: "Câu 194: Với mục đích xin cấp giấy phép mới hoàn toàn, bạn sẽ xác định dạng đệ trình nào?",
        o: [
          "Để phê chuẩn",
          "Để rút lui",
          "Để nâng cấp",
          "Để cho một chủng loại mới",
        ],
        a: 0,
      },
      {
        q: "Câu 195: Trong dự án nguồn mở, tập hợp thay đổi mã nguồn để sửa một lỗi thường được gửi dưới dạng nào?",
        o: ["Bản vá", "Phiên bản mới", "Mô đun mới", "Người đề xuất"],
        a: 0,
      },
      {
        q: "Câu 196: Bước thực hiện nào không có trong thủ tục đệ trình một yêu cầu đề nghị OSI phê duyệt giấy phép nguồn mở (giai đoạn chuẩn bị và gửi hồ sơ)?",
        o: [
          "Đọc định nghĩa nguồn mở và đảm bảo rằng giấy phép của bạn phù hợp",
          "Xác định dạng đệ trình (để rút lui, để chấp thuận phiên bản giấy phép đã có, để phê chuẩn)",
          "Đệ trình một yêu cầu chính thức để xét duyệt giấy phép",
          "Không có đáp án",
        ],
        a: 3,
      },
      {
        q: "Câu 197: Bước thực hiện nào không có trong thủ tục đệ trình một yêu cầu đề nghị OSI phê duyệt giấy phép nguồn mở (giai đoạn chuẩn bị và gửi hồ sơ)?",
        o: [
          "Xác định dạng đệ trình (để rút lui, để chấp thuận phiên bản giấy phép đã có, để phê chuẩn)",
          "Đảm bảo đơn vị có tư cách phù hợp để đệ trình một yêu cầu như vậy",
          "Đệ trình một yêu cầu chính thức để xét duyệt giấy phép",
          "Không có đáp án",
        ],
        a: 3,
      },
      {
        q: "Câu 198: Bước thực hiện nào không có trong thủ tục đệ trình một yêu cầu đề nghị OSI phê duyệt giấy phép nguồn mở (giai đoạn chuẩn bị và gửi hồ sơ)?",
        o: [
          "Đọc định nghĩa nguồn mở và đảm bảo rằng giấy phép của bạn phù hợp",
          "Đảm bảo đơn vị có tư cách phù hợp để đệ trình một yêu cầu như vậy",
          "Đăng ký danh sách thư license-review nếu chưa tham gia",
          "Cộng đồng thảo luận xét duyệt sau khi hồ sơ đã được gửi",
        ],
        a: 3,
      },
      {
        q: "Câu 199: Bước thực hiện nào có trong thủ tục đệ trình một yêu cầu đề nghị OSI phê duyệt giấy phép nguồn mở (giai đoạn chuẩn bị và gửi hồ sơ)?",
        o: [
          "Đọc Định nghĩa nguồn mở và kiểm tra giấy phép phù hợp trước khi gửi hồ sơ",
          "Cộng đồng xét duyệt hồ sơ sau khi nhận được đề nghị",
          "Hội đồng OSI ra quyết định sau khi xét duyệt",
          "Không cần gửi nội dung giấy phép cho OSI",
        ],
        a: 0,
      },
      {
        q: "Câu 200: Theo quy trình OSI, mốc ra quyết định thông thường đối với giấy phép nộp mới lần đầu là bao lâu tính từ khi gửi lên license-review?",
        o: ["30 ngày", "60 ngày", "20 ngày", "40 ngày"],
        a: 1,
      },
      {
        q: "Câu 201: Trong các giấy phép nguồn mở, giấy phép không sử dụng lại được nghĩa là?",
        o: [
          "Nội dung giấy phép gắn riêng với tác giả/sản phẩm, nên bên khác không thể dùng nguyên văn để cấp phép cho mã của mình",
          "Giấy phép nằm trong chủng loại giấy phép hư danh và đặc biệt với tác giả",
          "Giấy phép bỏ đi không dùng bởi có những phiên bản mới hơn của chúng",
          "Không có đáp án",
        ],
        a: 0,
      },
      {
        q: "Câu 202: Trong các giấy phép nguồn mở,giấy phép chưa được xếp loại nghĩa là?",
        o: [
          "Giấy phép hiện đang tìm kiếm sự chấp nhận",
          "Giấy phép mà mã nguồn sẵn có nhưng không do OSI cấp",
          "Giấy phép mà mã nguồn sẵn có và không phải là phần mềm tự do",
          "Giấy phép chưa được gán vào một nhóm phân loại cụ thể",
        ],
        a: 3,
      },
      {
        q: "Câu 203: Loại giấy phép nào không phải là giấy phép nguồn mở?",
        o: [
          "Apache License 2.0",
          "New BSD License",
          "MIT License",
          "Không có đáp án",
        ],
        a: 3,
      },
      {
        q: "Câu 204: Loại giấy phép nào không phải là giấy phép nguồn mở?",
        o: [
          "Mozilla Public License 1.1",
          "NASA Open Source Agreement 1.3",
          "W3C License",
          "Xamp Public License",
        ],
        a: 3,
      },
      {
        q: "Câu 205: Loại giấy phép nào không phải là giấy phép nguồn mở?",
        o: [
          "GNU Open Software License",
          "Simplified BSD License",
          "MIT License",
          "W3C License",
        ],
        a: 0,
      },
      {
        q: "Câu 206: Phát biểu nào sau đây là đúng về phần mềm nguồn mở?",
        o: [
          "Là một loại phần mềm tự do",
          "Là một loại phần mềm miễn phí",
          "Là không tôn trọng bản quyền",
          "Là được phép chia sẻ mã nguồn với hàng xóm",
        ],
        a: 3,
      },
      {
        q: "Câu 207: Trong dự án nguồn mở, thành viên có nhiều đóng góp cho dự án và được phép ghi trực tiếp vào kho mã nguồn là?",
        o: ["Committer", "Contributor", "Reviewer", "Code leader"],
        a: 0,
      },
      {
        q: "Câu 208: Trong dự án nguồn mở, thành viên có nhiều đóng góp cho dự án và không được phép ghi trực tiếp vào kho mã nguồn là?",
        o: ["Là Committer", "Là Committee", "Là Commuter", "Không có đáp án"],
        a: 3,
      },
      {
        q: "Câu 209: Giấy phép tư liệu mở chỉ có các loại giấy phép là?",
        o: [
          "Creative Common và GNU Free Documentation License",
          "Apache License và GNU General Public License",
          "BSD License và MIT License",
          "Không có đáp án",
        ],
        a: 3,
      },
      {
        q: "Câu 210: Trong các dự án nguồn mở, tài liệu điều hành của dự án đóng vai trò như thế nào?",
        o: [
          "Một tài liệu điều hành rõ ràng và minh bạch là phần chính của bất kỳ dự án phát triển mở nào",
          "Nó xác định các quy tắc tham gia trong cộng đồng và mô tả mức độ ảnh hưởng của thành viên với dự án",
          "Nó cho phép các thành viên quyết định mức độ tham gia của họ với cộng đồng đó",
          "Tất cả các đáp án",
        ],
        a: 3,
      },
      {
        q: "Câu 211: Hai mô hình điều hành phổ biến trong các dự án nguồn mở là gì?",
        o: [
          "Nhà độc tài nhân từ",
          "Chế độ người tài lãnh đạo",
          "Kiểm soát tập trung như nhà thờ lớn",
          "Nhà độc tài nhân từ; Chế độ người tài lãnh đạo",
        ],
        a: 3,
      },
      {
        q: "Câu 212: Trong cách phân loại được nêu trong bộ tài liệu này, nhóm mô hình nào mô tả cơ chế tập trung, phi tập trung và hội đồng?",
        o: [
          "Nhà độc tài nhân từ",
          "Chế độ người tài lãnh đạo",
          "Kiểm soát tập trung như nhà thờ lớn",
          "Kiểm soát tập trung như nhà thờ lớn; Kiểm soát phi tập trung như cái chợ; Kiểm soát tập trung như hội đồng",
        ],
        a: 3,
      },
      {
        q: "Câu 213: Trong các dự án nguồn mở, mô hình nhà độc tài nhân từ là?",
        o: [
          "Do một cá nhân lãnh đạo",
          "Do một ban lãnh đạo dự án",
          "Do tất cả các thành viên tham gia quyết định",
          "Do một tổ chức lãnh đạo",
        ],
        a: 0,
      },
      {
        q: "Câu 214: Với các dự án nguồn mở, mô hình điều hành 'nhà độc tài nhân từ', quyết định cuối cùng thuộc về ai?",
        o: [
          "Người lãnh đạo dự án",
          "Người đề xuất",
          "Người đóng góp",
          "Người sử dụng",
        ],
        a: 0,
      },
      {
        q: "Câu 215: Trong mô hình meritocracy có ban quản lý dự án (PMC) như tại Apache, cơ quan nào chịu trách nhiệm quản lý và các quyết định chính thức của dự án?",
        o: [
          "Người lãnh đạo dự án",
          "Người đề xuất",
          "Người đóng góp",
          "Ban quản lý dự án",
        ],
        a: 3,
      },
      {
        q: "Câu 216: Trong các dự án nguồn mở, ai có thể trở thành người đóng góp (contributor) cho dự án?",
        o: [
          "Có thể là bất kỳ ai",
          "Người được người đóng góp khác giới thiệu",
          "Người được người đề xuất khác giới thiệu",
          "Người được chỉ định",
        ],
        a: 0,
      },
      {
        q: "Câu 217: Theo mô hình vai trò được trình bày trong tài liệu, với các dự án nguồn mở, các vai trò nào không có trong mô hình điều hành 'nhà độc tài nhân từ'",
        o: [
          "Người có quyền ghi mã (Committer)",
          "Người đóng góp (Contributor)",
          "Lãnh đạo dự án (Project lead)",
          "Chủ tịch ban quản lý dự án",
        ],
        a: 3,
      },
      {
        q: "Câu 218: Theo mô hình vai trò được trình bày trong tài liệu, với các dự án nguồn mở, các vai trò nào không có trong mô hình điều hành 'chế độ người tài lãnh đạo'",
        o: [
          "Người có quyền ghi mã (Committer)",
          "Người đóng góp (Contributor)",
          "Lãnh đạo dự án (Project lead)",
          "Chủ tịch ban quản lý dự án",
        ],
        a: 2,
      },
      {
        q: "Câu 219: Theo cách áp dụng lazy consensus phổ biến tại Apache, đề xuất thường được coi là chấp thuận khi không có phản đối sau khoảng thời gian nào?",
        o: [
          "ít nhất 72 giờ đồng hồ khi giả thiết rằng không có sự phản đối",
          "ít nhất 24 giờ đồng hồ khi giả thiết rằng không có sự phản đối",
          "ít nhất 48 giờ đồng hồ khi giả thiết rằng không có sự phản đối",
          "ít nhất 36 giờ đồng hồ khi giả thiết rằng không có sự phản đối",
        ],
        a: 0,
      },
      {
        q: "Câu 220: Khi khởi xướng dự án nguồn mở, phương án nào mô tả đầy đủ nhất yêu cầu đối với tài liệu điều hành phiên bản đầu tiên?",
        o: [
          "Chi tiết hóa đầy đủ khung công việc và đưa ra các quan điểm",
          "Phải tính tới mọi kịch bản có thể trong tương lai",
          "Đưa ra một mô hình đơn giản có khả năng quản lý được",
          "Đưa ra một mô hình đơn giản có khả năng quản lý được; Ngắn gọn, súc tích, truy cập được và dễ dàng tham chiếu tới",
        ],
        a: 3,
      },
      {
        q: "Câu 221: Theo nhóm công cụ nền tảng được nêu trong tài liệu, phương án nào liệt kê đầy đủ bốn công cụ cốt lõi nên có khi khởi động dự án nguồn mở?",
        o: [
          "Website của dự án",
          "Danh sách thư của những người lập trình",
          "Kiểm soát phiên bản",
          "Website của dự án; Danh sách thư của những người lập trình; Kiểm soát phiên bản; Trình theo dõi các vấn đề",
        ],
        a: 3,
      },
    ],
  },
];

export default QUIZ_SETS_MNM;
