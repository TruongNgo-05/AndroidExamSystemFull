const QUIZ_SETS_MNM1 = [
  {
    id: "ma_nguon_mo_update",
    majorId: "cntt",
    title: "Mã Nguồn Mở UPDATE (2026)",
    description:
      "Ôn tập giấy phép nguồn mở, Linux, máy chủ web và thư điện tử, Moodle, Joomla, NukeViet và WordPress.",
    questions: [
      {
        q: "Câu 1: Quan niệm nào sau đây sai về Copyleft:",
        o: [
          "Được đưa ra dựa trên Copyright",
          "Nghĩa vụ phân phối và cho phép truy xuất công khai các tác phẩm phái sinh",
          "Người sở hữu quyền cấp quyền để: sử dụng, sữa đổi, phân phối lại",
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
        q: "Câu 4: OpenOffice Writer tương đương với chức năng gì trong Micorsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Outlook"],
        a: 0,
      },
      {
        q: "Câu 5: OpenOffice Impress tương đương với chức năng gì trong Micorsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Outlook"],
        a: 1,
      },
      {
        q: "Câu 6: OpenOffice Calc tương đương với chức năng gì trong Micorsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Access"],
        a: 2,
      },
      {
        q: "Câu 7: OpenOffice Draw tương đương với chức năng gì trong Micorsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Không có đáp án đúng"],
        a: 3,
      },
      {
        q: "Câu 8: OpenOffice Base tương đương với chức năng gì trong Micorsoft Office",
        o: ["Word", "PowerPoint", "Excel", "Access"],
        a: 3,
      },
      {
        q: "Câu 9: OpenOffice Math tương đương với chức năng gì trong Micorsoft Office",
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
          "Miễn phí toàn bộ",
        ],
        a: 0,
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
        q: "Câu 13: Mail server đi, hoặc còn gọi là Giao thức truyền thư đơn giản viết tắt là gì",
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
        q: "Câu 17: Cổng mặc định cho dịch vụ web, cấu hình trên web server",
        o: ["80", "81", "8080", "Không cần dùng cổng"],
        a: 0,
      },
      {
        q: "Câu 18: Mail server đến (hay mail server nhận) gồm có mấy giao thức chính",
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
          "a. Apache",
          "b. ISS của Microsoft",
          "c. Sun Java System Web",
          "không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 21: Webserver ISS của Microsoft dành cho:",
        o: ["*.asp; *.aspx,…", "php", "jps", "không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 22: Webserver Apache dành cho:",
        o: ["*.PHP,…", "asp", "XML", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 23: Webserver SUN Java dành cho:",
        o: ["*.jps,…", "php", "asp", "Không có đáp án đúng"],
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
          "Phần mềm mã nguồn mở không có bảo hành",
        ],
        a: 3,
      },
      {
        q: "Câu 27: Bạn hãy cho biết phần mềm văn phòng nào sau đây sử dụng giấy phép mã  nguồn mở :",
        o: [
          "a. Microsoft Office",
          "b. Libre Office",
          "Cả a và b",
          "Không câu nào đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 28: Bạn hãy cho biết phần mềm nào sau đây sử dụng giấp phép BSD :",
        o: [
          "Ubuntu",
          "Window Xfree86",
          "JavaFBP toolkit",
          "Không câu nào đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 29: Phần mềm GIMP sử dụng giấy phép mã nguồn mở nào :",
        o: [
          "GNU GPL License",
          "Apache Public License",
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
        o: ["GNU/GPL", "GNU/GPC", "GUI / GPL", "GNU/GPLs"],
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
        q: "Câu 35: Quy trình triển khai hệ thống Moodle gồm có mấy bước",
        o: ["2", "3", "4", "Không có đáp án đúng"],
        a: 2,
      },
      {
        q: "Câu 36: Bước 1 trong quy trình triển khai hệ thống Moodle thực hiện công viêc?",
        o: [
          "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên serer localhost",
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
          "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên serer localhost",
          "Cài đặt và cấu hình hệ thống Moodle Elearning",
          "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
          "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning",
        ],
        a: 1,
      },
      {
        q: "Câu 41: Bước 3 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        o: [
          "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên serer localhost",
          "Cài đặt và cấu hình hệ thống Moodle Elearning",
          "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
          "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning",
        ],
        a: 2,
      },
      {
        q: "Câu 42: Bước 4 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        o: [
          "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên serer localhost",
          "Cài đặt và cấu hình hệ thống Moodle Elearning",
          "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
          "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning",
        ],
        a: 3,
      },
      {
        q: "Câu 43: Ưu điểm của Moodle Elearning là?",
        o: [
          "a. Can thiệp vào code",
          "b. Cộng đồng người sử dụng lớn, nên có thể giúp chúng ta vận hành, phát triển",
          "c. Tương thích với nhiều công cụ tạo bài giảng, dễ quảng trị, cấu hình,..",
          "Cả a, b, c đều đúng",
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
        q: "Câu 45: Anh (chị) hãy cho biết hai hệ thống giấy phép tư liệu mở phổ biến là?",
        o: [
          "Giấy phép của GNU và giấy phép của OSI",
          "Giấy phép Open Document Format (ODF) và giấy phép Open Education Resource (OER)",
          "Giấy phép Open Public Document  (OPD) và giấy phép Open Licence Free (OLF)",
          "Giấy phép Creative Commons và GNU General Free Document Licence",
        ],
        a: 3,
      },
      {
        q: "Câu 46: Anh (chị) hãy cho biết phần để người dùng cài đặt ứng dụng của hệ điều hành Linux gọi là gì?",
        o: ["Shell", "Application", "Terminal", "Kernel"],
        a: 1,
      },
      {
        q: "Câu 47: Anh (chị) hãy cho biết định nghĩa phần cứng mở (Open Source Hardware Definition – OSHW) được tạo ra bởi ai?",
        o: [
          "Simon Phipps và tổ chức sáng kiến nguồn mở Open Source Initiative",
          "Linus Tovalds và tổ chức quốc tế về tiêu chuẩn hóa ISO cho phần cứng",
          "Richard Stallman và quỹ phát triển phần mềm tự do FSF (Free Software Foundation)",
          "Bruce Perens và các nhà phát triển Debian như Debian Free Software Guidelines",
        ],
        a: 3,
      },
      {
        q: "Câu 48: Bạn hãy cho biết phần mềm nào sau đây sử dụng giấp phép GNU GPL:",
        o: [
          "Ubuntu",
          "Window Xfree86",
          "JavaFBP toolkit",
          "Không câu nào đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 49: Anh (chị) hãy cho biết định dạng tài liệu mở (OpenOffice - math ) dưới dạng mẫu tệp mặc định viết tắt là gì?",
        o: ["ODS", "ODT", "ODF", "DFD"],
        a: 2,
      },
      {
        q: "Câu 50: Anh (chị) hãy cho biết thỏa thuận cộng tác CLA (Contributor License Agreement) có đặc điểm là gì?",
        o: [
          "Người đóng góp thực sự chuyển giao quyền sở hữu bản quyền đối với những đóng góp cho dự án.",
          "Người đóng góp ban đầu giữ lại quyền sở hữu bản quyền đối với những đóng góp của họ",
          "Người đóng góp cho phép các dự án phân phối các khoản đóng góp của họ theo bất kỳ giấy phép nào dự án muốn",
          "Người đóng góp chỉ có quyền phân phối các khoản đóng góp mới theo giấy phép nguồn mở hiện tại của dự án",
        ],
        a: 1,
      },
      {
        q: "Câu 51: Anh (chị) hãy cho biết theo định nghĩa phần cứng mở (Open-source Hardware) phát biểu nào là đúng?",
        o: [
          "Nếu thiết kế phần cứng được cấp phép, nó yêu cầu phải có phần mềm nhúng hoặc cách khác để hoạt động đúng và thực hiện các chức năng.",
          "Phần cứng mở cho phép mọi người tự do kiểm soát công nghệ của họ, chia sẻ kiến thức thông qua việc trao đổi thiết kế mở và phi thương mại",
          "Phần cứng phải được phát hành cùng với tài liệu bao gồm các tệp thiết kế và phải cho phép sửa đổi và phân phối các tệp thiết kế",
          "Phần cứng không được trang bị tài liệu kèm theo, tài liệu chỉ được công bố miễn phí qua mạng internet",
        ],
        a: 2,
      },
      {
        q: "Câu 52: Anh (chị) hãy cho biết phần cứng mở (Open-source Hardware) có tài liệu thiết kế là gì?",
        o: [
          "Là tài liệu theo định dạng tài liệu mở.",
          "Là tài liệu thiết kế độc quyền được chia sẻ.",
          "Là tài liệu thiết kế dạng hình ảnh hoặc CAD.",
          "Là tài liệu thiết kế gốc được đóng dấu bản quyền.",
        ],
        a: 0,
      },
      {
        q: "Câu 53: Chọn phát biểu đúng về Joomla",
        o: [
          "Giúp tiết kiệm thời gian và công sức thiết kế Website",
          "Tự ngồi lập trình lại từ đầu",
          "Tự phát triển ngay từ đầu",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 54: Trong các đối tượng sau, đối tượng nào không phục vụ Moodle Elearning",
        o: [
          "a. Quản lý viên",
          "b. Giảng viên",
          "c. Sinh viên",
          "Cả a, b, c đều sai",
        ],
        a: 3,
      },
      {
        q: "Câu 55: Trong các đối tượng sau, đối tượng nào phục vụ Moodle Elearning?",
        o: [
          "a. Quản lý viên",
          "b. Giảng viên",
          "c. Sinh viên",
          "Cả a, b, c đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 56: Moodle là một giải pháp học tập lý tưởng trên mạng cho?",
        o: [
          "a.  Các trường phổ thông",
          "b. Các trường đại học, cao đẳng",
          "c. Các tổ chức doang nghiệp, bệnh viện",
          "cả a, b, c đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 57: Công cụ Moodle dùng chủ yếu trong site nào?",
        o: ["Giáo dục", "Tin tức", "Thương mại điện tử", "Thể thao, giải trí"],
        a: 0,
      },
      {
        q: "Câu 58: Moodle viết tắt của?",
        o: [
          "Modular Object-Oriented Dynamic Learning Environment",
          "Modular -Oriented Dynamic Learning Environment",
          "Modular Object- Dynamic Learning Environment",
          "Modular Object-Oriented Learning Environment",
        ],
        a: 0,
      },
      {
        q: "Câu 59: Joomla có thể sử dụng vào những site?",
        o: [
          "a. Blog cá nhân, tin tức, trường học",
          "b. Thể thao, giải trí, mua sắm, thương mại điện tử",
          "c. Danh bạ trực tuyến, mạng xã hội, mạng cộng đồng",
          "cả a, b, c đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 60: Joomla không thể sử dụng vào những site?",
        o: [
          "a. Blog cá nhân, tin tức, trường học",
          "b. Thể thao, giải trí, mua sắm, thương mại điện tử",
          "c. Danh bạ trực tuyến, mạng xã hội, mạng cộng đồng",
          "d. Không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 61: Anh (chị) hãy cho biết phần có chức năng thực thi các lệnh (command) của hệ điều hành Linux gọi là gì?",
        o: ["Shell", "Script", "Terminal", "Kernel"],
        a: 0,
      },
      {
        q: "Câu 62: Chức năng phần mềm nào khác với những phần mềm còn lại?",
        o: [
          "Microsoft Exchange",
          "Mail server MDaemon",
          "Mail server Zimbra",
          "Không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 63: Phần mềm nào không có chức năng chống Spam?",
        o: [
          "Microsoft Exchange",
          "Mail server MDaemon",
          "Mail server Zimbra",
          "Không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 64: OpenOffice mã nguồn mở được phát triển bởi",
        o: [
          "Sun Microsystems và cộng đổng mở",
          "Microsoft và cộng đổng mở",
          "Object Management Group",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 65: Phần mềm nào gọi là Learning Management System – LMS?",
        o: ["Opencart", "WordPress", "Moodle", "Phpcoin"],
        a: 2,
      },
      {
        q: "Câu 66: Moodle (Modular Object-Oriented Dynamic Leanring Environment) được sáng lập năm?",
        o: ["1998", "1999", "2000", "2001"],
        a: 1,
      },
      {
        q: "Câu 67: CentOS Có nguồn gốc hoàn toàn từ bản phân phối nào?",
        o: ["Red Hat", "Ubuntu", "Linux Mint", "Debian"],
        a: 0,
      },
      {
        q: "Câu 68: Những phần mềm mã nguồn mở miễn phí nào sau đây giúp chạy các ứng  dụng windows trên môi trường Ubuntu",
        o: [
          "Wine và CrossOver",
          "Wine door và Cedega",
          "Wine và PlayOnlinux",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 69: Đâu không phải là hệ điều hành mã nguồn mở?",
        o: ["Red Hat", "Fedora", "Debian", "Không có đáp án đúng"],
        a: 3,
      },
      {
        q: "Câu 70: BIND là phần mềm mã nguồn mở gì?",
        o: ["Máy chủ tên miền", "Mail server", "Website", "Hệ điều hành"],
        a: 0,
      },
      {
        q: "Câu 71: Phần mềm mã nguồn mở nào dùng để xây dựng thương mại điện tử?",
        o: ["a.Opencart", "b.Joomla", "c.Wordpress", "Cả a, b, c đều đúng"],
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
          "a. Appserv",
          "b. IIS và SQL Server",
          "Cả a, b đều đúng",
          "Cả a, b đều sai",
        ],
        a: 2,
      },
      {
        q: "Câu 76: Phát biểu nào sau đây không phải là phát biểu đúng",
        o: [
          "Phần mềm mã nguồn mở là phần mềm tự do",
          "Phần mềm mã nguồn mở là phần mềm miễn phí",
          "Phần mềm mã nguồn mở cho phép người dùng được sửa mã nguồn",
          "Phần mềm mã nguồn mở cho phép người dùng được tự do chia sẻ cho người khác",
        ],
        a: 0,
      },
      {
        q: "Câu 77: Phần mềm tự do nguồn mở mục đích là?",
        o: [
          "Giải phóng những cản trở về tư duy tự do trong sáng tạo, phát triển, chia sẻ của phần mềm",
          "Giải phóng những rào cản của sự phức tạp công nghệ bằng khả năng –tự dộng hóa",
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
        q: "Câu 79: Loại giấy phép nào không phải là giấy phép nguồn mở?",
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
        q: "Câu 83: Phần mềm nào không phải mã nguồn mở",
        o: ["Drupal", "MongoDB", "Chef", "Không có đáp án"],
        a: 3,
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
        q: "Câu 91: File đổi cổng 80 trong Xampp",
        o: ["httpd.conf", "httpd-ssl.conf", "httpd-xampp.conf", "PHP.ini"],
        a: 0,
      },
      {
        q: "Câu 92: Những cổng nào là cổng được dùng mặc định của một số ứng dụng webserver",
        o: ["80", "443", "3306", "Tất cả đáp án đều đúng"],
        a: 3,
      },
      {
        q: "Câu 93: File đổi cổng 443 trong Xampp",
        o: ["httpd.conf", "httpd-ssl.conf", "httpd-xampp.conf", "php.ini"],
        a: 1,
      },
      {
        q: "Câu 94: File đổi cổng 3306 trong Xampp",
        o: ["httpd.conf", "httpd-ssl.conf", "httpd-xampp.conf", "my.ini"],
        a: 3,
      },
      {
        q: "Câu 95: File không thể dùng để đổi bất cứ cổng nào của xampp",
        o: ["httpd.conf", "httpd-ssl.conf", "httpd-xampp.conf", "my.ini"],
        a: 2,
      },
      {
        q: "Câu 96: VirtualHost _default là cổng nào?",
        o: ["441", "442", "443", "444"],
        a: 2,
      },
      {
        q: "Câu 97: Một cơ sở dữ liệu có thể cài bao nhiêu sản phẩm",
        o: ["1 sản phẩm", "2 sản phẩm", "3 sản phẩm", "Nhiều hơn 3 sản phẩm"],
        a: 3,
      },
      {
        q: "Câu 98: Đường dẫn admin của Wordpress",
        o: ["wp - admin", "admin", "administrator", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 99: Đường dẫn trang quản trị: localhost/ten_san_pham/administrator, là của sản phẩm nào?",
        o: ["Joomla", "Wordpress", "Nukeviet", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 100: Đường dẫn trang quản trị: localhost/ten_san_pham/adminitrator, là của sản phẩm nào?",
        o: ["Joomla", "Wordpress", "Nukeviet", "Không có đáp án đúng"],
        a: 3,
      },
      {
        q: "Câu 101: Đường dẫn trang quản trị: localhost/ten_san_pham/wordpress_admin, là của sản phẩm nào",
        o: ["Joomla", "Wordpress", "Nukeviet", "Không có đáp án đúng"],
        a: 3,
      },
      {
        q: "Câu 102: Đường dẫn admin của Nukeviet",
        o: ["wp - admin", "admin", "administrator", "Không có đáp án đúng"],
        a: 1,
      },
      {
        q: "Câu 103: Thư mục gốc chạy localhost của nền tảng USBWebserver",
        o: ["a.root", "b.www", "c. htdocs", "cả a,b,c đều không đúng"],
        a: 0,
      },
      {
        q: "Câu 104: Cài nukeviet kết quả báo không tương thích dòng: php hỗ trợ thư viện xử lý hình ảnh gd? Ta chỉnh dòng lệnh nào?",
        o: [
          "extension=gd",
          "extension=sockets",
          "extension=graphd",
          "extension=gmp",
        ],
        a: 0,
      },
      {
        q: "Câu 105: file nào trong Xampp có dòng lệnh extension=gd",
        o: ["httpd.conf", "httpd-ssl.conf", "php.ini", "my.ini"],
        a: 2,
      },
      {
        q: "Câu 106: Chỉnh bảng mã khi tạo csdl loại nào hợp lý để nhận tiếng việt ( cài nukeviet )?",
        o: [
          "utf8mb4_0900_ai_ci",
          "utf8_unicode_ci",
          "cp1250_bin",
          "ascii_general_ci",
        ],
        a: 1,
      },
      {
        q: "Câu 107: Khi tạo cơ sở dữ liệu cho NukeViet trong môi trường MySQL 5.7 dùng bộ ký tự utf8, chọn phương án đầy đủ nhất về các collation hợp lệ để lưu tiếng Việt trong các lựa chọn sau.",
        o: [
          "utf8_unicode_ci",
          "utf8_general_ci",
          "utf8mb4_0900_ai_ci",
          "utf8_unicode_ci và utf8_general_ci",
        ],
        a: 3,
      },
      {
        q: "Câu 108: Nukeviet được trao giải nhân tài đất việt vào năm bao nhiêu?",
        o: ["2011", "2012", "2013", "2014"],
        a: 0,
      },
      {
        q: "Câu 109: NukeViet eGovernment: Cổng thông tin dành cho các cơ quan nhà nước ra mắt vào năm bao nhiêu",
        o: ["2017", "2018", "2019", "2020"],
        a: 0,
      },
      {
        q: "Câu 110: Những trang web nổi tiếng sử dụng Joomla?",
        o: [
          "a. Harvard University",
          "b.IKEA",
          "c.LINUX",
          "cả a, b, c đều thiết kế bằng joomla",
        ],
        a: 3,
      },
      {
        q: "Câu 111: Đâu là công cụ SEO mạnh mẽ được xây dựng sẵn của Joomla?",
        o: [
          "a. Metadata và Từ khóa",
          "b. Mod_rewrite hỗ trợ tối ưu URL thân thiện với công cụ tìm kiếm",
          "c. Tốc độ trang web được tối ưu, nhiều Plugin hỗ trợ SEO",
          "Cả a,b,c đều đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 112: Component joomla là gì?",
        o: [
          "Là thành phần mở rộng của Joomla, là các đơn vị chức năng chính của Joomla, chúng có thể được coi là các ứng dụng nhỏ...",
          "Là một dạng tiện ích mở rộng của Joomla, cung cấp các chức năng được kích hoạt bởi các sự kiện",
          "Là một gói bao gồm các file PHP, HTML, CSS, JS (Javascript)… và các tấm hình, ảnh, biểu tượng, video, flash kèm theo tạo nên giao diện",
          "Là một trong các thành phần mở rộng của Joomla, nó là một ứng dụng nhỏ (thường chỉ có vài file và phần lập trình cũng không nhiều) được sử dụng chủ yếu để lấy dữ liệu và hiển thị thông tin",
        ],
        a: 0,
      },
      {
        q: "Câu 113: Module trong joomla là gì?",
        o: [
          "Là thành phần mở rộng của Joomla, là các đơn vị chức năng chính của Joomla, chúng có thể được coi là các ứng dụng nhỏ...",
          "Là một dạng tiện ích mở rộng của Joomla, cung cấp c8ác chức năng được kích hoạt bởi các sự kiện",
          "Là một gói bao gồm các file PHP, HTML, CSS, JS (Javascript)… và các tấm hình, ảnh, biểu tượng, video, flash kèm theo tạo nên giao diện",
          "Là một trong các thành phần mở rộng của Joomla, nó là một ứng dụng nhỏ (thường chỉ có vài file và phần lập trình cũng không nhiều) được sử dụng chủ yếu để lấy dữ liệu và hiển thị thông tin",
        ],
        a: 3,
      },
      {
        q: "Câu 114: Joomla template là gì?",
        o: [
          "Là thành phần mở rộng của Joomla, là các đơn vị chức năng chính của Joomla, chúng có thể được coi là các ứng dụng nhỏ...",
          "Là một dạng tiện ích mở rộng của Joomla, cung cấp các chức năng được kích hoạt bởi các sự kiện",
          "Là một gói bao gồm các file PHP, HTML, CSS, JS (Javascript)… và các tấm hình, ảnh, biểu tượng, video, flash kèm theo tạo nên giao diện",
          "Là một trong các thành phần mở rộng của Joomla, nó là một ứng dụng nhỏ (thường chỉ có vài file và phần lập trình cũng không nhiều) được sử dụng chủ yếu để lấy dữ liệu và hiển thị thông tin",
        ],
        a: 2,
      },
      {
        q: "Câu 115: Plugin joomla là gì?",
        o: [
          "Là thành phần mở rộng của Joomla, là các đơn vị chức năng chính của Joomla, chúng có thể được coi là các ứng dụng nhỏ...",
          "Là một dạng tiện ích mở rộng của Joomla, cung cấp các chức năng được kích hoạt bởi các sự kiện",
          "Là một gói bao gồm các file PHP, HTML, CSS, JS (Javascript)… và các tấm hình, ảnh, biểu tượng, video, flash kèm theo tạo nên giao diện",
          "Là một trong các thành phần mở rộng của Joomla, nó là một ứng dụng nhỏ (thường chỉ có vài file và phần lập trình cũng không nhiều) được sử dụng chủ yếu để lấy dữ liệu và hiển thị thông tin",
        ],
        a: 1,
      },
      {
        q: "Câu 116: Chọn đáp án đúng nhất về sự phân biệt WordPress.com và WordPress.org?",
        o: [
          "a. WordPress.com là nơi cho bạn tạo luôn một web/ Blog",
          "b. WordPress.org đây là trang chủ của WordPress. Đây là nơi bạn tải bộ cài WordPress về, tự cài lên host của bạn cũng như dễ dàng tùy chỉnh, quản trị, là nơi để tải Plugin, theme",
          "c. Cả WordPress.com và WordPress.org là như nhau",
          "Đáp án a và b đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 117: WordPress Multisite (WP Multisite)là gì?",
        o: [
          "Phiên bản đặc biệt của WordPress có thể hỗ trợ nhiều trang web và không miễn phí",
          "Một plugin WP hỗ trợ nhiều trang web",
          "Một tính năng cho phép tạo một network để chạy nhiều website từ một WordPress installation",
          "Một chủ đề WP phổ biến hỗ trợ hỗ trợ di động",
        ],
        a: 2,
      },
      {
        q: "Câu 118: Tiền tố của bảng WordPress theo mặc định là gì?",
        o: ["wp_", "wrdp_", "wordpress_", "wptb_"],
        a: 0,
      },
      {
        q: "Câu 119: Plugin nào sau đây trong worpdress có chức năng tối ưu hình ảnh của khi load trang?",
        o: [
          "Contact Form 7",
          "Google Analytics Dashboard for WP (GADWP)",
          "Wordfence Security",
          "Imagify Image Optimizer",
        ],
        a: 3,
      },
      {
        q: "Câu 120: Plugin nào sau đây trong worpdress thường dùng làm trang liên hệ?",
        o: [
          "Contact Form 7",
          "Google Analytics Dashboard for WP (GADWP)",
          "Wordfence Security",
          "Imagify Image Optimizer",
        ],
        a: 0,
      },
    ],
  },
];
export default QUIZ_SETS_MNM1;
