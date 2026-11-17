const QUIZ_SETS_QTM = [
  // ---------------------------------------------------------------
  // QUẢN TRỊ MẠNG
  // ---------------------------------------------------------------

  {
    id: "quan_tri_mang",
    majorId: "cntt",
    title: "Quản Trị Mạng",
    description: "Bộ câu hỏi trắc nghiệm Quản Trị Mạng và Mạng Máy tính",
    questions: [
      {
        q: "Mô hình tường lửa ISA là viết tắt của?",
        o: [
          "Microsoft International Security and Acceleration",
          "Manager Internet Security and Association",
          "Microsoft Internet Security and Acceleration",
          "Microsoft Internet System and Acknowledgement",
        ],
        a: 2,
      },
      {
        q: "Khi cấu hình cho dịch vụ DNS mục Reverse lookup Zone là?",
        o: [
          "Vùng ánh xạ từ địa chỉ IP thành địa chỉ tên miền",
          "Vùng ánh xạ từ địa chỉ tên miền thành địa chỉ IP",
          "Chứa các zone không sử dụng",
          "Chứa toàn bộ zone của DNS",
        ],
        a: 0,
      },
      {
        q: "Thông tin về DNS được ghi ở đâu?",
        o: [
          "Window\\system32\\DNS",
          "Win/bin/etc/DNS",
          "Unix/etc/bin",
          "system32\\etc\\DNS",
        ],
        a: 0,
      },
      {
        q: "DNS chủ yếu hoạt động trên mô hình mạng nào?",
        o: ["Client/Server", "Peer to peer", "Server-based", "Tất cả đều đúng"],
        a: 0,
      },
      {
        q: "Hệ thống phân giải tên miền DNS ra đời năm nào?",
        o: ["1984", "1981", "1985", "1995"],
        a: 0,
      },
      {
        q: "Trường hợp nào sau đây là sai đối với DNS Root server?",
        o: [
          "Không nhất thiết phải có DNS root server",
          "Root server được sử dụng để định tuyến các yêu cầu tới các server tiếp theo",
          "Root DNS database được duy trì bởi người có thẩm quyền",
          "Các Root server cung cấp các địa chỉ để các server domain kết hợp với root đó",
        ],
        a: 0,
      },
      {
        q: "DNS name root được quản lý bởi tổ chức nào?",
        o: ["ICANN", "INIC", "ISO", "ICAN"],
        a: 0,
      },
      {
        q: "Ký hiệu mặc định của Root name là gì?",
        o: ["(.)", "Không có", "(*)", "()"],
        a: 0,
      },
      {
        q: "Chọn phát biểu đúng?",
        o: [
          "Địa chỉ IP của máy trạm do người dùng tự cài đặt",
          "Địa chỉ IP của máy trạm do máy chủ tự động cấp phát",
          "Các phương án trên đều đúng",
          "(Không có dữ liệu)",
        ],
        a: 2,
      },
      {
        q: "Truy vấn đệ quy là gì?",
        o: [
          "Truy vấn giữa DNS server và DNS server",
          "Không được sử dụng trong DNS",
          "Là một truy vấn trong quá trình cấp phát IP động",
          "Truy vấn giữa Resolver và DNS server",
        ],
        a: 3,
      },
      {
        q: "Thành phần của DNS gồm?",
        o: [
          "DNS server, các Zone, các Resolver và các Resource Record",
          "DNS server, các Zone, các Resolver, client và các Resource Record",
          "DNS server, các Zone, và các Resource Record",
          "DNS server, các Resolver, client và các Resource Record",
        ],
        a: 0,
      },
      {
        q: "Khi bạn dùng lệnh nslookup, nếu thấy báo có địa chỉ IP nhưng tên Server là Unknow có nghĩa là?",
        o: [
          "DNS server đã cài đặt chưa thành công",
          "Chưa tìm được DNS server",
          "Máy của bạn không kết nối mạng",
          "Dùng lệnh sai",
        ],
        a: 0,
      },
      {
        q: "Khi cấu hình cho dịch vụ DNS mục Forward lookup Zone là?",
        o: [
          "Vùng ánh xạ từ địa chỉ tên miền thành địa chỉ IP",
          "Vùng ánh xạ từ địa chỉ IP thành địa chỉ tên miền",
          "Chứa các zone không sử dụng",
          "Chứa toàn bộ zone của DNS",
        ],
        a: 0,
      },
      {
        q: "Hệ thống tên miền DNS được cài đặt nhằm để làm gì?",
        o: [
          "Dễ nhớ địa chỉ máy tính hơn",
          "Định danh 1 máy tính trên mạng cục bộ",
          "Để thay thế địa chỉ IP, máy tính sẽ không cần dùng địa chỉ IP nữa",
          "Giúp Server cấp phát địa chỉ IP cho client",
        ],
        a: 0,
      },
      {
        q: "Khi dùng lệnh Ping www.google.com bạn không thấy reply. Nguyên nhân là gì?",
        o: [
          "Do bạn chưa khai báo địa chỉ server DNS cho máy bạn",
          "Trong cơ sở dữ liệu của DNS server không có tên máy này",
          "Do máy có tên miền này không cùng Netid với máy bạn",
          "Tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Truy vấn tương tác là?",
        o: [
          "Truy vấn giữa Resolver và DNS server",
          "Không được sử dụng trong DNS",
          "Truy vấn giữa DNS server và DNS server",
          "Tất cả đều sai",
        ],
        a: 2,
      },
      {
        q: "Nếu một DNS server không phân giải được tên miền trong cơ sở dữ liệu cục bộ nó sẽ làm gì?",
        o: [
          "Dừng phân giải ngay lập tức",
          "DNS server sẽ tiếp tục gửi truy vấn tới các DNS server khác ở mức cao hơn",
          "Gửi trả thông báo không tồn tại tên miền đó cho Resolver",
          "DNS server sẽ tiếp tục gửi truy vấn tới các DNS server khác ở mức cao hơn, để name server này sẽ tự gủi trả địa chỉ cho các Resolver",
        ],
        a: 1,
      },
      {
        q: "Resource Records là gì?",
        o: [
          "Nơi lưu giữ các Top level name",
          "Bản ghi nhật ký của các DNS client khi tham gia vào truy vấn đệ quy",
          "Là các Root server",
          "Là danh sách cơ sở dữ liệu được sử dụng để trả lời các truy vấn từ DNS client",
        ],
        a: 3,
      },
      {
        q: "Theo bạn nếu không có DNS thì sẽ ra sao?",
        o: [
          "Phải nhớ địa chỉ IP khi gõ vào một trình duyệt",
          "Không thể truy cập Internet",
          "Chỉ sử dụng mạng Lan",
          "Phải ghi tên miền ra danh bạ như sử dụng danh bạ điện thoại",
        ],
        a: 0,
      },
      {
        q: "Một DNS domain namespace gồm?",
        o: [
          "Root name, Top-Level Domain, Second-level-domain,zone, Subdomain, host",
          "Root name, Top-Level Domain, zone, Subdomain, host",
          "Root name, Top-Level Domain, Second-level-domain, Subdomain",
          "Root name, Top-Level Domain, Second-level-domain, Subdomain, host",
        ],
        a: 3,
      },
      {
        q: "Bạn có thể tạo ra máy loại DNS zone?",
        o: ["1", "2", "3", "4"],
        a: 2,
      },
      {
        q: "Truy vấn tới 1 name Server là công việc của?",
        o: ["Resolver", "DHCP server", "Root hint", "Zone"],
        a: 0,
      },
      {
        q: "ISA là sản phẩm của hãng nào?",
        o: ["Bekerly", "Apple", "Microsoft", "Novell"],
        a: 2,
      },
      {
        q: "ISA server 2006 có mấy phiên bản?",
        o: ["1", "2", "3", "4"],
        a: 1,
      },
      {
        q: "Microsoft ISA Server 2006 có khả năng bảo vệ như thế nào?",
        o: [
          "Bảo vệ toàn hệ thống mạng",
          "Bảo vệ một máy duy nhất có cài đặt ISA",
          "Bảo vệ Web server và Mail server",
          "Tuỳ vào người quản trị cấu hình ISA",
        ],
        a: 0,
      },
      {
        q: "ISA server tối thiểu cần bao nhiêu card mạng?",
        o: ["1", "2", "3", "4"],
        a: 1,
      },
      {
        q: "ISA client nào không thể chứng thực được User?",
        o: [
          "SecureNAT client",
          "Firewall client",
          "Web Proxy client",
          "Tất cả các ý trên đều sai",
        ],
        a: 0,
      },
      {
        q: "ISA client nào phải sử dụng cài Software?",
        o: [
          "SecureNAT client",
          "Firewall client",
          "Web Proxy client",
          "Tất cả các ý trên",
        ],
        a: 1,
      },
      {
        q: "Firewall client có thể cài được trên môi trường nào?",
        o: ["Window", "MSDOS", "Unix", "Tất cả các hệ điều hành"],
        a: 0,
      },
      {
        q: "Web proxy trên ISA chạy port là bao nhiêu?",
        o: ["80", "8080", "25", "8098"],
        a: 1,
      },
      {
        q: "Mô hình ISA nào cho phép ta có thể cài đặt nhiều ISA server trong mạng?",
        o: [
          "Edge Firewall",
          "3-Leg Perimeter",
          "Front/Back Firewall",
          "Tất cả đều đúng",
        ],
        a: 2,
      },
      {
        q: "Khi muốn xin lại IP address, DHCP client sẽ gửi lại gói tin DHCP REQUEST trực tiếp cho DHCP server mà nó đã xin ban đầu với dạng truyền gói tin nào?",
        o: ["Unicast", "Broadcast", "Multicast", "Tất cả đều sai"],
        a: 0,
      },
      {
        q: "ISA client chỉ có thể cài trên hệ điều hành Window?",
        o: [
          "Web Proxy client",
          "SecureNAT client",
          "Firewall client",
          "Tất cả các ý trên",
        ],
        a: 2,
      },
      {
        q: "Theo thời gian mặc định của DHCP server thì mỗi IP lease chỉ được 8 ngày. Sau khoảng thời gian bao lâu thì DHCP client phải tự động gửi một DHCP request trực tiếp tới DHCP server mà nó xin ban đầu để xin lại IP address?",
        o: [
          "4 ngày (sau 50% thời gian xin cấp phát IP)",
          "8 ngày (sau khi hết thời gian xin cấp phát IP)",
          "Không phải gửi lại gói tin xin cấp lại, vẫn hoạt động bình thường với IP đã được cấp",
          "Không thể xin cấp lại, DHCP server chỉ cấp phát 1 lần duy nhất",
        ],
        a: 0,
      },
      {
        q: "Cổng mặc định của Remote desktop là?",
        o: ["8098", "3389", "8080", "2120"],
        a: 1,
      },
      {
        q: "Cổng mặc định của Remote web brower là?",
        o: ["8098", "3389", "8080", "2120"],
        a: 0,
      },
      {
        q: "Nếu sau 50% thời gian hoạt động DHCP client gủi DHCP request tới DHCP server đã cấp phát cho nó địa chỉ IP, nhưng DHCP đó đã ngưng hoạt động, thì sẽ xẩy ra vấn đề gì?",
        o: [
          "DHCP vẫn hoạt động bình thường đến hết 87,5 thời gian Lease mặc định thì xin DHCP khác cấp phát địa chỉ IP cho mình",
          "DHCP client đó không thể kết nối vào mạng nữa",
          "DHCP client vẫn hoạt động bình thường cho đến hết thời gian Lease mặc định ban đầu thì ngừng hoạt động, không thể xin cấp phát IP một lần nữa",
          "DHCP vẫn hoạt động bình thường đến hết thời gian Lease mặc định thì xin DHCP khác cấp phát địa chỉ IP cho mình",
        ],
        a: 0,
      },
      {
        q: "Thông tin người dùng được lưu trong tệp nào tại Domain controller server khi sử dụng dịch vụ Active Directory?",
        o: ["SAM", "Gpedit.msc", "NTDS.DIT", "SYSTEM32"],
        a: 2,
      },
      {
        q: "Tệp SAM viết tắt của?",
        o: [
          "Security Accounts Manager",
          "Set Accounts Manager",
          "Security Accounts Management",
          "Security Access Manager",
        ],
        a: 0,
      },
      {
        q: "Bạn quản trị mạng trong công ty A, tất cả các máy kiểm soát miền là Window server 2003, bạn sẽ phải cài đặt dịch vụ gì để có thể cấu hình một máy thành Web server?",
        o: ["IIS", "DNS", "DHCP", "Active directory"],
        a: 0,
      },
      {
        q: "Chọn phát biểu đúng về tài khoản cục bộ được tạo trên máy trạm?",
        o: [
          "Có trên Domain controller",
          "Đăng nhập được trên máy cục bộ và máy chủ",
          "Quản lý việc đăng nhập",
          "Không thể truy nhập tài nguyên miền",
        ],
        a: 3,
      },
      {
        q: "Muốn cài đặt dịch vụ AD (Active Directory) ta sử dụng lệnh nào sau đây?",
        o: [
          "Start run dcpromo",
          "Khởi động tệp active directory.exe",
          "Không cần cài đặt vì đã tự động chạy khi cài Window",
          "Start run gpedit.msc",
        ],
        a: 0,
      },
      {
        q: "Chọn phát biểu đúng nhất về Domain controller là gì?",
        o: [
          "Chỉ lưu thông tin DNS",
          "Được sử dụng để quản lý miền",
          "Một máy trạm được quyền truy xuất tài nguyên miền",
          "Được dùng để lưu thông tin account cục bộ",
        ],
        a: 1,
      },
      {
        q: "Chọn phát biểu đúng về OU (Organizational Unit)?",
        o: [
          "Là một thành phần trong cấu trúc AD",
          "Một nhóm địa chỉ IP để cấp phát động",
          "Là đối tượng để làm tăng số miền (domain)",
          "OU không thể thay thế cho Subdomain",
        ],
        a: 0,
      },
      {
        q: "Thế nào được gọi là một Domain?",
        o: [
          "Gồm các máy hoạt động riêng lẻ",
          "Một vùng dùng chung cơ sở dữ liệu",
          "Một vùng làm việc với hạn chế về tài nguyên",
          "Chỉ gồm các server được cài đặt hệ điều hành Window server",
        ],
        a: 1,
      },
      {
        q: "Exchange là sản phẩm của hãng nào?",
        o: ["Bekerly", "Apple", "Microsoft", "Novell"],
        a: 2,
      },
      {
        q: "Khi cài đặt xong DNS, có mấy thành phần trong DNS?",
        o: ["2", "3", "4", "5"],
        a: 1,
      },
      {
        q: "Khi cài đặt xong DNS, những thành phần nào có trong DNS?",
        o: [
          "Forward Lookup Zones, Reverse Lookup Zones, Event Viewer",
          "Forward Lookup Server, Reverse Lookup Server, Event Viewer",
          "Forward Lookup Zones, Reverse Lookup Zones, Event Lookup Zones",
          "Forward Lookup Server, Reverse Lookup Server, Event Lookup Server",
        ],
        a: 0,
      },
      {
        q: "Chức năng của Event Viewer trong DNS là?",
        o: [
          "Đây là trình theo dõi sự kiện nhật ký dịch vụ DNS, nó sẽ lưu trữ các thông tin về cảnh giác alert, cảnh báo warnings, lỗi errors",
          "Chứa tất cả các Zone thuận của dịch vụ DNS, zone này được lưu tại máy DNS Server",
          "Chứa tất cả các Zone nghịch của dịch vụ DNS, zone này được lưu tại máy DNS Server.",
          "Tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Chức năng của Forward Lookup Zones trong DNS là?",
        o: [
          "Đây là trình theo dõi sự kiện nhật ký dịch vụ DNS, nó sẽ lưu trữ các thông tin về cảnh giác alert, cảnh báo warnings, lỗi errors",
          "Chứa tất cả các Zone thuận của dịch vụ DNS, zone này được lưu tại máy DNS Server",
          "Chứa tất cả các Zone nghịch của dịch vụ DNS, zone này được lưu tại máy DNS Server.",
          "Tất cả đều sai",
        ],
        a: 1,
      },
      {
        q: "Chức năng của Reverse Lookup Zones trong DNS là?",
        o: [
          "Đây là trình theo dõi sự kiện nhật ký dịch vụ DNS, nó sẽ lưu trữ các thông tin về cảnh giác alert, cảnh báo warnings, lỗi errors",
          "Chứa tất cả các Zone thuận của dịch vụ DNS, zone này được lưu tại máy DNS Server",
          "Chứa tất cả các Zone nghịch của dịch vụ DNS, zone này được lưu tại máy DNS Server.",
          "Tất cả đều sai",
        ],
        a: 2,
      },
      {
        q: "Chính sách mật khẩu Password Policies, chính sách này?",
        o: [
          "Cho phép bạn qui định chiều dài ngắn nhất của mật khẩu, độ phức tạp của mật khẩu…",
          "Cho phép bạn hạn chế tấn công thông qua hình thức logon từ xa",
          "Cho phép bạn giám sát và ghi nhận các sự kiện xảy ra trong hệ thống, trên các đối tượng cũng như đối với các người dùng.",
          "Tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Chính sách khóa tài khoản Account Lockout Policy, chính sách này?",
        o: [
          "Cho phép bạn qui định chiều dài ngắn nhất của mật khẩu, độ phức tạp của mật khẩu…",
          "Cho phép bạn hạn chế tấn công thông qua hình thức logon từ xa",
          "Cho phép bạn giám sát và ghi nhận các sự kiện xảy ra trong hệ thống, trên các đối tượng cũng như đối với các người dùng.",
          "Tất cả đều đúng",
        ],
        a: 1,
      },
      {
        q: "Chính sách kiểm tra Audit Policies, chính sách này?",
        o: [
          "Cho phép bạn qui định chiều dài ngắn nhất của mật khẩu, độ phức tạp của mật khẩu…",
          "Cho phép bạn hạn chế tấn công thông qua hình thức logon từ xa",
          "Cho phép bạn giám sát và ghi nhận các sự kiện xảy ra trong hệ thống, trên các đối tượng cũng như đối với các người dùng.",
          "Tất cả đều đúng",
        ],
        a: 2,
      },
      {
        q: "Chọn phát biểu đúng?",
        o: [
          "Chính sách nhóm chỉ xuất hiện trên miền Active Directory. Chính sách nhóm làm được nhiều điều hơn chính sách hệ thống.",
          "Chính sách nhóm tự động hủy bỏ tác dụng khi được gỡ bỏ. Chính sách nhóm được áp dụng thường xuyên hơn chính sách hệ thống.",
          "Có nhiều mức độ để gán chính sách nhóm này cho người từng nhóm hoặc từng nhóm từng đối tượng.",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      // phần 2
      {
        q: "Group policy trên Hệ điều hành Window là gì?",
        o: [
          "Lưu giữ thông tin về tài khoản và mật khẩu đã tạo trên máy cục bộ",
          "Lưu giữ thông tin về quyền chia sẻ và bảo mật dữ liệu",
          "Dùng để tạo chính sách nhóm và là tệp ứng dụng được tạo ra bởi công cụ MMC",
          "Thông tin về tài khoản người dùng quản lý trên máy chủ",
        ],
        a: 2,
      },
      {
        q: "Microsoft Exchange Server 2003 tồn tại mấy phiên bản chính?",
        o: ["1", "2", "3", "4"],
        a: 2,
      },
      {
        q: "Muốn cài đặt thêm một máy chủ Mail exchange server trong hệ thống mạng mà bạn đang quản trị, bạn chọn tuỳ chọn nào khi cài đặt Microsoft Exchange server 2003?",
        o: [
          "Install Exchange 2003 on additions Server",
          "Deploy the First Exchange 2003 Server",
          "Additions mail Server",
          "Deploy the additions Exchange 2003 Server",
        ],
        a: 0,
      },
      {
        q: "Giao thức nào cho phép Web server và web client có thể giao tiếp với nhau qua dịch vụ WWW?",
        o: ["POP3", "HTML", "SMTP", "HTTP"],
        a: 3,
      },
      {
        q: "ứng dụng máy khách loại nào được hỗ trợ bởi Exchange Server 2003?",
        o: [
          "SMTP",
          "Microsoft word 2003",
          "Các ứng dụng Internet e-mail",
          "Microsoft",
        ],
        a: 2,
      },
      {
        q: "Cổng hoạt động TCP của dịch vụ Web là?",
        o: ["21", "80", "81", "8080"],
        a: 1,
      },
      {
        q: "Một máy chủ Domain controler phải được cài đặt?",
        o: ["Active directory", "DHCP", "DNS", "WINS"],
        a: 0,
      },
      {
        q: "Để hệ thống AD (Active directory) hoạt động được thì trong Domain phải có?",
        o: [
          "Một máy làm DNS server",
          "Một máy làm DHCP server",
          "Hoạt động bình thờng không cần phụ thuộc vào dich vụ nào khác",
          "Chỉ cần cài đặt dịch vụ AD trên máy Domain controller",
        ],
        a: 0,
      },
      {
        q: "Công việc quản trị chính của DC (Domain Controller) là?",
        o: [
          "Account người dùng",
          "DNS",
          "Quản lý địa chỉ cấp phát IP động",
          "Tất cả đáp án trên",
        ],
        a: 3,
      },
      {
        q: "Một Domain có thể có bao nhiêu DC (Domain Controller)?",
        o: [
          "Chỉ được một DC",
          "Tối đa là hai DC",
          "Có thể cài đặt nhiều DC",
          "Không thể cài đặt DC",
        ],
        a: 2,
      },
      {
        q: "Active Directory được xây dựng dựa trên?",
        o: ["DNS và LDAP", "DHCP và DNS", "MMC", "LDAP"],
        a: 0,
      },
      {
        q: "Công cụ nào có chức năng tạo và quản lý các đối tượng cơ bản của hệ thống Active Directory?",
        o: [
          "Active Directory User and Computer",
          "Computer Management",
          "Active Directory Domains and Trusts",
          "Active Directory Sites and Services",
        ],
        a: 0,
      },
      {
        q: "Cấu trúc vật lý của AD gồm?",
        o: [
          "Domain controller và site",
          "Object, Organization Unit, Domain, Domain tree, Forest",
          "Domain controller, Domain tree, Forest, Object, Organization Unit",
          "Domain controller, Domain tree, Forest và site",
        ],
        a: 0,
      },
      {
        q: "Cấu trúc logic của AD gồm",
        o: [
          "Domain controller và site",
          "Domain controller, Domain tree, Forest, Object, Organization Unit",
          "Object, Organization Unit, Domain, Domain tree, Forest",
          "Domain controller, Domain tree, Forest và site",
        ],
        a: 2,
      },
      {
        q: "Một nút trong DNS name space quy định tối đa bao nhiêu ký tự?",
        o: ["255", "63", "256", "60"],
        a: 1,
      },
      {
        q: "Bạn tạo tài khoản trên máy trạm, thì thông tin tài khoản cục bộ sẽ tồn tại ở đâu?",
        o: ["Máy chủ", "Máy trạm", "Máy chủ và máy trạm", "Tất cả đều đúng"],
        a: 1,
      },
      {
        q: "Lợi ích khi sử dụng dịch vụ active directory?",
        o: [
          "Quản trị tài khoản và tài nguyên tập trung, cần ít người quản trị",
          "Cho phép người sử dụng tự log on",
          "Cung cấp một server chứng thực",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Tệp NTDS.DIT là viết tắt của?",
        o: [
          "New technology directory service. Directory Information Tree",
          "Network technology directory service. Directory Information Tree",
          "New technology domain service. Directory Internet Tree",
          "New technology directory service. Directory Information Training",
        ],
        a: 0,
      },
      {
        q: "Firewall phần mềm hoạt động trên tầng nào trong mô hình TCP/IP?",
        o: [
          "Tầng ứng dụng và Tầng mạng",
          "Tầng mạng và Tầng vận chuyển",
          "Tầng vật lý",
          "Tầng vận chuyển",
        ],
        a: 1,
      },
      {
        q: "Nếu sau 50% thời gian hoạt động DHCP client gửi DHCP Request tới DHCP server đã cấp phát cho nó địa chỉ IP, nhưng DHCP server đó đã ngưng hoạt động, thì sẽ xẩy ra vấn đề gì?",
        o: [
          "DHCP client đó không thể kết nối vào mạng nữa",
          "DHCP client vẫn hoạt động bình thường cho đến hết thời gian Lease mặc định ban đầu thì ngừng hoạt động, không thể xin cấp phát IP một lần nữa",
          "DHCP vẫn hoạt động bình thường đến hết khoảng 87,5% thời gian Lease mặc định thì xin DHCP server khác cấp phát địa chỉ IP cho mình",
          "DHCP vẫn hoạt động bình thường đến hết khoang 60% thời gian Lease mặc định thì xin DHCP server khác cấp phát địa chỉ IP cho mình",
        ],
        a: 2,
      },
      {
        q: "Firewall phần cứng hoạt động trên tầng nào trong mô hình TCP/IP?",
        o: ["Tầng ứng dụng", "Tầng mạng", "Tầng vận chuyển", "Tầng Vật lý"],
        a: 0,
      },
      {
        q: "Bạn đang muốn ngưng dịch vụ DNS trên máy chủ, bạn sẽ chọn lệnh nào sau đây?",
        o: ["Net stop dns", "Net start dns", "Stop dns", "Start dns"],
        a: 0,
      },
      {
        q: "Bạn đang muốn khởi động dịch vụ DNS trên máy chủ, bạn sẽ chọn lệnh nào sau đây?",
        o: ["Net stop dns", "Net start dns", "Stop dns", "Start dns"],
        a: 1,
      },
      {
        q: "Có mấy loại ISA client?",
        o: ["1", "2", "3", "4"],
        a: 2,
      },
      {
        q: "DHCP server phụ trách công việc gì?",
        o: [
          "Cấp phát và thu hồi IP động cho, từ các máy DHCP client",
          "Quản lý tệp tin trong mạng",
          "Cấp phát địa chỉ gửi Email",
          "Quản lý và chia sẻ tài nguyên trên mạng",
        ],
        a: 0,
      },
      {
        q: "SMTP viết tắt của cụm từ nào sau đây?",
        o: [
          "Simple Mail Transfer Protocol",
          "Simplex Mail Transfer Protocol",
          "Source Mail Transfer Protocol",
          "Simple Message Transfer Protocol",
        ],
        a: 0,
      },
      {
        q: "Tường lửa là gì?",
        o: [
          "Một hệ thống được xây dựng để đảm bảo an ninh cho công ty",
          "Một hệ thống có mục đích chống lại sự xâm nhập trái phép từ Internet",
          "Một hệ thống báo cháy",
          "Một hệ thống bảo vệ thông tin",
        ],
        a: 1,
      },
      {
        q: "Trong các mô hình hoạt động của thư điện tử, mô hình Internet cho phép các máy chủ phục vụ thư kết nối Internet và chuyển thư cho nhau qua giao thức?",
        o: ["SMTP", "POP3", "FTP", "HTTP"],
        a: 0,
      },
      {
        q: "Những biện pháp gì để bảo vệ an toàn thông tin trên mạng?",
        o: ["Tường lửa", "Phần mềm virus", "Mã hoá dữ liệu", "Tất cả đều đúng"],
        a: 3,
      },
      {
        q: "Tại sao phải duy trì an ninh mạng?",
        o: [
          "Bảo vệ tài nguyên máy tính",
          "Đảm bảo danh tiếng",
          "An toàn dữ liệu",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Mô hình ISA nào có độ bảo mật cao nhưng chi phí đầu tư ban đầu rất lớn?",
        o: [
          "Edge Firewall",
          "3-Leg Perimeter",
          "Front/Back Firewall",
          "Tất cả các phương án trên",
        ],
        a: 2,
      },
      {
        q: "Bạn là một quản trị viên, trên Server bạn đã bật chức năng Remote desktop, vậy tại máy trạm bạn phải gõ lệnh gì tiếp theo khi đã chọn Start- Run để thực hiện điều khiển server?",
        o: ["MSTSC", "GPEDIT.MSC", "NSLOOKUP", "CMD"],
        a: 0,
      },
      {
        q: "IIS 6.0 cung cấp những công cụ gì để hỗ trợ và quản lý Website?",
        o: [
          "IIS Manager",
          "Remote Administration (HTML) Tool",
          "Command –line administration scipts",
          "Tất cả các đều đúng",
        ],
        a: 3,
      },
      {
        q: "HTTP viết tắt của cụm từ nào sau đây?",
        o: [
          "Hexa Transfer Protocol",
          "Hypertext Transfer Program",
          "Hypertext Transfer Protocol",
          "Header Transfer Protocol",
        ],
        a: 2,
      },
      {
        q: "DNS name space quy định tối đa bao nhiêu ký tự?",
        o: ["255", "63", "256", "60"],
        a: 0,
      },
      {
        q: "Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 25Mbps, yêu cầu cho bộ nhớ máy chủ để cài đặt được ISA server là bao nhiêu?",
        o: ["512Mb", "1Gb", "2Gb", "4Gb"],
        a: 0,
      },
      {
        q: "Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 7.5Mbps, , yêu cầu cho bộ nhớ máy chủ để cài đặt được ISA server là bao nhiêu?",
        o: ["512Mb", "1Gb", "2Gb", "4Gb"],
        a: 0,
      },
      {
        q: "Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 90Mbps, cho phép số VPN đồng thới kết nối là bao nhiêu?",
        o: ["850", "2000", "150", "700"],
        a: 1,
      },
      {
        q: "Những thông số có thể lọc được của một packet, khi bạn áp dụng tường lửa có chức năng Packet filtering?",
        o: [
          "Địa chỉ IP nguồn",
          "Địa chỉ Ip đích",
          "Cổng TCP nguồn và đích",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 45Mbps, , yêu cầu cho bộ nhớ máy chủ để cài đặt được ISA server là bao nhiêu?",
        o: ["512Mb", "1Gb", "2Gb", "4Gb"],
        a: 1,
      },
      {
        q: "Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 45Mbps, cho phép số VPN đồng thới kết nối là bao nhiêu?",
        o: ["2000", "700", "850", "150"],
        a: 2,
      },
      {
        q: "Hệ điều hành Window Server 2003 gồm mấy phiên bản?",
        o: ["1", "2", "3", "4"],
        a: 3,
      },
      {
        q: "Khi bạn sử dụng công cụ quản trị MMC, bạn sẽ cài đặt chế độ làm việc nào để cho phép người sử dụng có quyền truy cập đầy đủ tới các chức năng trong MMC nhưng không thể thêm bớt các Snap-in?",
        o: [
          "Author mode",
          "User mode-limited access multiple window",
          "User mode-limited access single window",
          "User mode – full access",
        ],
        a: 3,
      },
      {
        q: "Khi bạn sử dụng công cụ quản trị MMC, bạn sẽ cài đặt chế độ làm việc nào để cho phép người sử dụng chỉ có quyền truy cập các chức năng trong MMC đã được lưu có thể tạo cửa sổ mới nhưng không thể đóng cửa sổ hiện tại?",
        o: [
          "Author mode",
          "User mode – full access",
          "User mode-limited access multiple window",
          "User mode-limited access single window",
        ],
        a: 2,
      },
      {
        q: "Khi bạn sử dụng công cụ quản trị MMC, bạn sẽ cài đặt chế độ làm việc nào để cho phép người sử dụng chỉ có quyền truy cập các chức năng trong MMC đã được lưu nhưng không thể mở cửa sổ mới?",
        o: [
          "Author mode",
          "User mode – full access",
          "User mode-limited access multiple window",
          "User mode-limited access single window",
        ],
        a: 3,
      },
      {
        q: "Công cụ quản trị MMC viết tắt của?",
        o: [
          "Microsoft Management Console",
          "Microsoft Management Control",
          "Management Module Control",
          "Microsoft Manager Console",
        ],
        a: 0,
      },
      {
        q: "Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 90Mbps, , yêu cầu cho bộ nhớ máy chủ để cài đặt được ISA server là bao nhiêu?",
        o: ["1Gb", "2Gb", "4Gb", "512Mb"],
        a: 1,
      },
      {
        q: "Trước khi cài đặt dịch DHCP trên Window 2003 server, cần thiết lập các thành phần nào sau?",
        o: [
          "Địa chỉ IP tĩnh, subnet mask và default gateway",
          "Subnet mask và DNS",
          "Địa chỉ IP tĩnh và DNS",
          "Subnet mask và default gateway",
        ],
        a: 0,
      },
      {
        q: "Thiết lập địa chỉ IP tĩnh chỉ dùng khi nào?",
        o: [
          "Quy mô hoạt động mạng nhỏ",
          "Khó thiết lập IP động",
          "Tất cả đều đúng",
          "Không có DHCP server",
        ],
        a: 2,
      },
      {
        q: "Sau khi tạo Scope trong việc cấu hình dịch vụ DHCP, làm thế nào để hiệu chỉnh địa chỉ mạng?",
        o: [
          "Hiệu chỉnh bình thường bằng cách nhập địa chỉ mạng mới",
          "Xoá và tạo lại Scope",
          "Hiệu chỉnh subnetmask",
          "Không thể thay đổi được",
        ],
        a: 0,
      },
      {
        q: "Lấy thông tin cấu hình TCP/IP từ DHCP server ta dùng lệnh nào trên máy client?",
        o: ["Ipconfig/renew", "Ipconfig/all", "Ipconfig/release", "Ping"],
        a: 0,
      },
      {
        q: "Một client phải gửi một gói tin Broadcast nào để yêu cầu DHCP server cấp phát IP cho mình?",
        o: ["DHCP OFFER", "DHCP ACK", "DHCP DISCOVER", "Không cần gửi"],
        a: 2,
      },
      {
        q: "Khi nào Client phải gửi gói tin DHCP Request tới DHCP server?",
        o: [
          "Khi Client chấp nhận lời đề nghị cấp phát IP DHCP OFFER từ một DHCP server",
          "Khi client yêu cầu cấp phát IP từ một DHCP server",
          "Khi client chấp nhận lời đề nghị cấp phát Ip DHCP ACK từ một DHCP server",
          "Tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Lệnh Ipconfig/release dùng để làm gì?",
        o: [
          "Lấy thông tin TCP/IP cho DHCP server",
          "Trả thông tin TCP/IP cho DHCP server",
          "Khi muốn xem cấu hình trên máy client",
          "Tất cả đều sai",
        ],
        a: 1,
      },
      {
        q: "Giao thức DHCP được phát triển bởi tổ chức nào?",
        o: ["IETF", "IEEE", "INIC", "IETT"],
        a: 0,
      },
      {
        q: "DHCP server gửi gói tin DHCP ACK cho client để làm gì?",
        o: [
          "Không chấp nhận cấp phát địa chỉ IP cho client đó",
          "Chấp nhận lời đề nghị cấp phát Ip cho client",
          "Tất cả đều sai",
          "Xác nhận lời đề nghị cấp phát địa chỉ IP của Client từ DHCP server đó",
        ],
        a: 3,
      },
      {
        q: "Khi cài đặt cấu hình DHCP thì mục IP Address Range là?",
        o: [
          "Khoảng địa chỉ cấp cho client",
          "Khoảng địa chỉ không cấp cho Client",
          "Địa chỉ riêng",
          "Để nhập địa chỉ mạng",
        ],
        a: 0,
      },
      {
        q: "Khi cài đặt cấu hình DHCP thì mục Add Exclusion là?",
        o: [
          "Khoảng địa chỉ cấp cho client",
          "Khoảng điạ chỉ để dành",
          "Địa chỉ riêng",
          "Để nhập địa chỉ mạng",
        ],
        a: 1,
      },
      {
        q: "Trong gói tin DHCP OFFER được gửi từ DHCP server tới client gồm những nội dung gì?",
        o: [
          "Địa chỉ IP sẽ cấp phát cho client",
          "Defaul gateway",
          "Địa chỉ IP của DHCP server đó",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Tên miền nào là thuộc các trung tâm hỗ trợ về mạng?",
        o: [".NET", ".COM", ".EDU", "INT"],
        a: 0,
      },
      {
        q: "Tên miền nào là thuộc các tổ chức quân sự?",
        o: [".INT", ".MIL", ".EDU", ".COM"],
        a: 1,
      },
      {
        q: "Tên miền nào là thuộc các tổ chức giáo dục?",
        o: [".INT", ".MIL", ".EDU", ".COM"],
        a: 2,
      },
      {
        q: "Tên miền nào là thuộc các tổ chức thương mại?",
        o: [".NET", ".MIL", ".EDU", ".COM"],
        a: 3,
      },
      {
        q: "Tên miền nào thuộc các tổ chức được thành lập bởi các hiệp ước quốc tế?",
        o: [".INT", ".MIL", ".EDU", ".COM"],
        a: 0,
      },
      {
        q: "LDAP là viết tắt của?",
        o: [
          "Lightweight Directory Access Protocol",
          "Light Directory Access Program",
          "Light Directory Access Protocol",
          "Lightweight Directory Access program",
        ],
        a: 0,
      },
      {
        q: "Giao thức nào được hỗ trợ bởi Exchange 2003 để các ứng dụng nhận Mail có thể truy xuất mail trên máy chủ Exchange và tải các thư điện tử này về?",
        o: ["POP3", "PPTP", "BITS", "SMTP"],
        a: 3,
      },
      {
        q: "Trên máy client, bạn không thể kết nối vào mạng Internet. Bạn dùng lệnh PING vẫn có thể kết nối tới địa chỉ 172.28.220.1, đây là địa chỉ của một máy chủ ở trong mạng của bạn. Bạn thử PING tên một Website và nhận được thông báo lỗi sau PING REQUEST COULD NOT FIND HOST. Bạn nên kiểm tra gì trước?",
        o: ["Card mạng", "Switch", "Máy chủ DNS", "Máy chủ DHCP"],
        a: 2,
      },
      {
        q: "Khi cài đặt cấu hình cho DHCP thì thời gian mặc định để cấp phát 1 địa chỉ IP là bao nhiêu?",
        o: [
          "Trong 8 ngày",
          "Vô thời gian đến khi nào client tắt kết nối",
          "Cấp phát đến khi DHCP server thu hồi địa chỉ IP",
          "Trong 4 ngày",
        ],
        a: 0,
      },
      {
        q: "Một máy chủ được gọi là một DHCP server khi nào?",
        o: [
          "Được cài đặt dịch vụ DHCP, được cấu hình bằng địa chỉ IP tĩnh",
          "Được cài đặt dịch vụ DHCP, được cấu hình bằng địa chỉ IP động",
          "Được cài đặt dịch vụ DNS",
          "Tự động mặc định khi cài đặt hệ điều hành Window Server",
        ],
        a: 0,
      },
      {
        q: "DHCP viết tắt của cụm từ nào",
        o: [
          "Dynamic Home Configuration Protocol",
          "Driver Host Configuration Protocol",
          "Dynamic Host Configuration Program",
          "Dynamic Host Configuration Protocol",
        ],
        a: 3,
      },
      {
        q: "Hãy chọn phát biểu đúng?",
        o: [
          "Một mô hình mạng chỉ cài đặt được duy nhất một DHCP server",
          "Một mô hình mạng có thể tồn tại nhiều DHCP server",
          "Một mô hình mạng hoạt động không thể cài đặt được DHCP server",
          "DHCP server chỉ hoạt động trên những mô hình mạng nhỏ",
        ],
        a: 1,
      },
      {
        q: "Công ty A đang dự kiến triển khai hệ thống thư điện tử Exchange 2003. Để đảm bảo kiến trúc AD (Active directory) được chuẩn bị hỗ trợ cho việc cài đặt. Công ty đó cần phải làm gì?",
        o: [
          "Thực hiện cài đặt DHCP",
          "Thực hiện cài đặt IIS",
          "Thực hịên lệnh chuẩn bị về rừng setup/forestprep",
          "Thực hiện tạo nhóm người dùng cho Exchange",
        ],
        a: 2,
      },
      {
        q: "Trong Group Policy có 3 từ khoá quan trọng là:",
        o: [
          "Not Config, Enable và Disable",
          "Not Config, Enable và Config",
          "Not Config, Enable",
          "Tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Trong Group Policy, ý nghĩa của từ khoá Not Config là:",
        o: [
          "Registry sẽ giữ nguyên trạng thái ban đầu của nó",
          "Thực thi hành động trong gpedit và Registry sẽ phát sinh 1 khoá mới để thực thi",
          "Cấm không cho phép thực thi hành động đó",
          "Tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Trong Group Policy, ý nghĩa của từ khoá Enable là:",
        o: [
          "Thực thi hành động trong gpedit và Registry sẽ phát sinh 1 khoá mới để thực thi",
          "Registry sẽ giữ nguyên trạng thái ban đầu của nó",
          "Cấm ko cho phép thực thi hành động đó",
          "Tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Trong Group Policy, ý nghĩa của từ khoá Disable là:",
        o: [
          "Cấm không cho phép thực thi hành động đó",
          "Thực thi hành động trong gpedit và Registry sẽ phát sinh 1 khoá mới để thực thi",
          "Registry sẽ giữ nguyên trạng thái ban đầu của nó",
          "Cho phép thực thi hành động đó",
        ],
        a: 0,
      },
      {
        q: "Thao tác thực hiện cấm truy cập vào ổ D là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        o: ["Windows Component", "Start Menu và TaskBar", "Desktop", "System"],
        a: 0,
      },
      {
        q: "Thao tác thực hiện ẩn ổ D là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        o: ["Windows Component", "Start Menu và TaskBar", "Desktop", "System"],
        a: 0,
      },
      {
        q: "Thao tác thực hiện ẩn Folder Option của Menu Tools là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        o: ["Windows Component", "Desktop", "System", "Control Panel"],
        a: 0,
      },
      {
        q: "Thao tác thực hiện tắt chức năng All Programs là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        o: ["Start Menu và TaskBar", "Windows Component", "Desktop", "System"],
        a: 0,
      },
      {
        q: "Thao tác thực hiện loại bỏ nút Logoff là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        o: ["Start Menu và TaskBar", "Windows Component", "Desktop", "System"],
        a: 0,
      },
      {
        q: "Thao tác thực hiện bỏ thuộc tính (Properties) của Recycle Bin là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        o: ["Desktop", "Windows Component", "Start Menu và TaskBar", "System"],
        a: 0,
      },
      {
        q: "Thao tác thực hiện loại bỏ thuộc tính (Properties) của My Computer là thao tác thuộc thành phần xử lý nào trong Group Policy",
        o: ["Desktop", "Windows Component", "Start Menu và TaskBar", "System"],
        a: 0,
      },
      {
        q: "Thao tác thực hiện vô hiệu hóa chức năng Add/Remove Programs là thao tác thuộc thành phần xử lý nào trong Group Policy",
        o: [
          "Control Panel",
          "Windows Component",
          "Start Menu và TaskBar",
          "System",
        ],
        a: 0,
      },
      {
        q: "Thao tác thực hiện ẩn danh sách các chương trình ứng dụng trong danh mục Add/Remove Programs là thao tác thuộc thành phần xử lý nào trong Group Policy",
        o: [
          "Control Panel",
          "Windows Component",
          "Start Menu và TaskBar",
          "System",
        ],
        a: 0,
      },
      {
        q: "Thao tác thực hiện không cho phép dùng trình ứng dụng Command Promtp (CMD) là thao tác thuộc thành phần xử lý nào trong Group Policy",
        o: [
          "System",
          "Windows Component",
          "Start Menu và TaskBar",
          "Control Panel",
        ],
        a: 0,
      },
      {
        q: "Hãy chọn phát biểu đúng về Recursive Query (truy vấn đệ quy) trong quá trình hoạt động của dịch vụ DNS?",
        o: [
          "Khi Name server nhận được truy vấn đệ quy , nó không nhất thiết phải trả về kết quả tìm được hoặc thông báo lỗi nếu như truy vấn này không phân giải được",
          "Khi Name server nhận được truy vấn đệ quy, nó trả lời cho DNS client với thông tin tốt nhất mà nó có được vào thời điểm đó",
          "Khi Name server nhận được truy vấn đệ quy, nó không cần trả lời ngay cho DNS client với thông tin tốt nhất mà nó có được vào thời điểm đó",
          "Khi Name server nhận được truy vấn đệ quy thông báo lỗi nếu như truy vấn này phân giải được",
        ],
        a: 1,
      },
      {
        q: "Hãy chọn phát biểu đúng về Interactive query (truy vấn tương tác) trong quá trình hoạt động của dịch vụ DNS?",
        o: [
          "Khi Name server nhận được truy vấn tương tác , nó không nhất thiết phải trả về kết quả tìm được hoặc thông báo lỗi nếu như truy vấn này không phân giải được",
          "Khi Name server nhận được truy vấn tương tác, nó trả lời cho DNS client với thông tin tốt nhất mà nó có được vào thời điểm đó",
          "Khi Name server nhận được truy vấn tương tác, nó không cần trả lời ngay cho DNS client với thông tin tốt nhất mà nó có được vào thời điểm đó",
          "Khi Name server nhận được truy vấn tương tác, nó bắt buộc phải trả về kết quả tìm được hoặc thông báo lỗi nếu như truy vấn này không phân giải được",
        ],
        a: 3,
      },
      {
        q: "Sau khi cài đặt và cấu hình dịch vụ DHCP server, một số máy tính đặt địa chỉ IP tĩnh rơi vào trong vùng địa chỉ cần cấp phát của DHCP. Như vậy, hệ thống mạng hiện tại có ảnh hưởng gì không? Nếu có thì cách khắc phục thế nào?",
        o: [
          "Các máy tính đặt địa chỉ IP tĩnh có thể bị đụng địa chỉ IP với các máy nhận IP động. Do đó chúng ta cần phải khai báo vùng loại trừ để loại bỏ các địa chỉ IP đã khai báo",
          "Các máy tính đặt địa chỉ IP tĩnh sẽ không ảnh hưởng gì",
          "Các máy tính đặt địa chỉ IP tĩnh không bị đụng địa chỉ IP với các máy nhận IP động. Do đó chúng ta không cần phải khai báo vùng loại trừ để loại bỏ các địa chỉ IP đã khai báo",
          "Các phương án trên đều sai",
        ],
        a: 0,
      },
      {
        q: "Tài khoản tạo sẵn nào trên Windows cho phép người dùng truy cập vào các máy tính nếu họ không có mật mã riêng. Mặc định là tài khoản này không được sử dụng, nếu được sử dụng thì nó bị giới hạn về quyền?",
        o: ["Administrator", "User", "Remote local user", "Guest"],
        a: 3,
      },
      {
        q: "Khi một người dùng nào đó đăng nhập vào mạng, Domain controller (DC) sẽ kiểm tra tính hợp lệ của Username và password họ nhập vào có chính xác và khớp với dữ liệu lưu trong máy chủ hay không. Vậy DC đã cung cấp dịch vụ gì?",
        o: [
          "Dịch vụ thẩm định",
          "Dịch vụ cấp phép",
          "Dịch vụ DNS",
          "Dịch vụ bảo mật",
        ],
        a: 0,
      },
      {
        q: "Cùng một công ty nhưng đó là công ty cực lớn và cần nhiều người quản lý các vùng khác nhau để đảm bảo việc quản lý DNS một cách dễ dàng. Khi một hệ thống tên miền được chia nhỏ ra để dễ quản lý được gọi là gì?",
        o: ["Các Domain", "Các Domain tree", "Các Zone", "Không thể chia nhỏ"],
        a: 2,
      },
      {
        q: "Một DNS name space như Servertt.hubt.edu.vn còn được gọi là gì?",
        o: ["FQND", "QDFN", "FFQD", "FQDN"],
        a: 3,
      },
      {
        q: "Bạn có dự tính sử dụng hệ thống thư điện tử Exchange 2003 và sẽ sử dụng http, SMTP/POP3 để kết nối tới Exchange servers. Hãy lựa chọn các thành phần chỉ định của Windows server 2003 được yêu cầu?",
        o: [
          "SMTP service",
          "World Wide Web Service",
          "NNTP service",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Tài khoản thực hiện cài đặt Exchange Server 2003 trên một máy Windows server 2003 phải thuộc nhóm tài khoản nào dưới đây?",
        o: [
          "Domain Users",
          "Domain name",
          "Administrators",
          "Local Administrators",
        ],
        a: 3,
      },
      {
        q: "Một công ty A đang lập kế hoạch cài đặt MS ISA server 2006 và muốn có một vài chọn lọc để giới hạn sự truy cập của người dùng tới Internet. Bước đầu tiên nên làm gì khi cài đặt ISA server 2006?",
        o: [
          "Cài đặt ISA server 2006",
          "Thiết kế các quy tắc truy cập sẽ cho phép truy cập Internet",
          "Tạo dựng một chính sách sử dụng Internet định nghĩa các đòi hỏi an toàn của tổ chức",
          "Thiết kế một chiến lược xuất bản máy chủ (server Publishing)",
        ],
        a: 2,
      },
      {
        q: "Hình ảnh mô tả mô hình ISA nào?",
        o: [
          "Edge Firewall",
          "3-Leg Perimeter",
          "Front/Back Firewall",
          "Tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Hình ảnh trên mô tả mô hình ISA nào?",
        o: [
          "Edge Firewall",
          "3-Leg Perimeter",
          "Front/Back Firewall",
          "Tất cả đều đúng",
        ],
        a: 1,
      },
      {
        q: "Hình ảnh trên thể hiện mô hình ISA nào?",
        o: [
          "Edge Firewall",
          "3-Leg Perimeter",
          "Front/Back Firewall",
          "Tất cả đều đúng",
        ],
        a: 2,
      },
      {
        q: "Hãy cho biết ý nghĩa của hình ảnh trên?",
        o: [
          "Máy ABC luôn nhận địa chỉ 192.168.0.19 từ server DHCP",
          "Máy ABC có địa chỉ tĩnh là 192.168.0.19",
          "Máy ABC luôn nhận địa chỉ Ip động trừ địa chỉ 192.168.0.19",
          "Máy ABC không thể đặt địa chỉ tĩnh là 192.168.0.19 trong mọi trường hợp",
        ],
        a: 0,
      },
      {
        q: "Bạn hãy cho biết Domain mới được tạo ra dưới dạng nào sau đây khi chọn tùy chọn 1 trong hình?",
        o: [
          "Tạo Domain đầu tiên trong một rừng mới",
          "Tạo Domain dựa trên cây đã có sẵn",
          "Tạo ra một cây Domain mới trong một rừng có sẵn",
          "Không tạo được cây Domain",
        ],
        a: 0,
      },
      {
        q: "Bạn hãy cho biết Domain mới được tạo ra dưới dạng nào sau đây khi chọn tùy chọn 2 trong hình?",
        o: [
          "Tạo Domain đầu tiên trong một rừng mới",
          "Tạo Domain dựa trên cây đã có sẵn",
          "Tạo ra một cây Domain mới trong một rừng có sẵn",
          "Không tạo được cây Domain",
        ],
        a: 1,
      },
      {
        q: "Bạn hãy cho biết Domain mới được tạo ra dưới dạng nào sau đây khi chọn tùy chọn 3 trong hình?",
        o: [
          "Tạo Domain đầu tiên trong một rừng mới",
          "Tạo Domain dựa trên cây đã có sẵn",
          "Tạo ra một cây Domain mới trong một rừng có sẵn",
          "Không tạo được cây Domain",
        ],
        a: 2,
      },
      {
        q: "Hãy cho biết biểu tượng máy tính bị chéo đỏ cho biết Card mạng đang ở trạng thái nào sau đây?",
        o: [
          "Card mạng đang nhận IP",
          "Card mạng không nhận được IP",
          "Card mạng bị trùng IP với một card mạng khác",
          "Card mạng không được gắn cáp",
        ],
        a: 3,
      },
      {
        q: "Khi cài đặt dịch vụ AD. Ta chọn tùy chọn 1 trong hình, thì hệ điều hành nào được sử dụng?",
        o: [
          "Window 2000 server và window 2003 server",
          "Window XP và window 2003 server",
          "Những hệ điều hành trước win 2000 server",
          "Window NT",
        ],
        a: 2,
      },
      {
        q: "Khi cài đặt dịch vụ AD. Ta chọn tùy chọn 2 trong hình, thì hệ điều hành nào được sử dụng?",
        o: [
          "Window 2000 server và window 2003 server",
          "Window XP và window 2003 server",
          "Những hệ điều hành trước win 2000 server",
          "Window NT",
        ],
        a: 0,
      },
      {
        q: "Hãy cho biết ý nghĩa của hình ảnh trên trong quá trình cấu hình dịch vụ DHCP?",
        o: [
          "Client nhận được Ip và Subnet mask",
          "Client nhận được Default getway",
          "DHCP không được cấu hình",
          "Client nhận được địa chỉ DNS",
        ],
        a: 2,
      },
      {
        q: "Mô hình ISA nào có độ bảo mật kém nhất trong các mô hình dưới đây?",
        o: [
          "Edge Firewall",
          "Front/Back Firewall",
          "3-Leg Perimeter",
          "Tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Thông số 1 trong hình có ý nghĩa là gì trong quá trình cấu hình dịch vụ DHCP?",
        o: [
          "Tên máy tính được phép sử dụng 1 địa chỉ IP cố định trên mạng",
          "Tên máy chủ DHCP cấp địa chỉ IP động cho toàn mạng",
          "Tên client đã được cấu hình địa chỉ IP tĩnh từ trước do người quản trị cài đặt",
          "Các phương án đều sai",
        ],
        a: 0,
      },
      {
        q: "Thông số 3 trong hình có ý nghĩa gìtrong quá trình cấu hình dịch vụ DHCP?",
        o: [
          "Địa chỉ vật lý của một máy tính",
          "Tên máy tính cho người dùng đặt ngẫu nhiên",
          "Số ký tự của thông số trong chip của máy tính",
          "Các phương án đều sai",
        ],
        a: 0,
      },
      {
        q: "Thông số 2 trong hình có ý nghĩa gìtrong quá trình cấu hình dịch vụ DHCP?",
        o: [
          "Địa chỉ IP chỉ dành riêng cho May ABC",
          "Địa chỉ IP của máy chủ DHCP",
          "Địa chỉ Ip tĩnh của May ABC đã được cài đặt, không thể cấp phát cho máy khác",
          "Địa chỉ Ip có thể cấp phát cho các máy trong mạng trừ May ABC",
        ],
        a: 0,
      },
      {
        q: "Hãy cho biết trong quá trình cấu hình dịch vụ DHCP ta chọn tùy chọn Yes, I want to configure these options now có tác dụng gì?",
        o: [
          "Đồng ý lưu toàn bộ thông tin cấu hình vào máy tính và thoát khỏi quá trình cài đặt",
          "Đồng ý tiếp tục khai báo các lựa chọn cơ bản trong quá trình cấu hình DHCP",
          "DHCP không được cấu hình",
          "Đồng ý xóa hoàn toàn các cài đặt trong quá trình cấu hình DHCP",
        ],
        a: 1,
      },
      {
        q: "Để xem địa chỉ MAC của một PC, chúng ta dùng lệnh nào?",
        o: ["Ipconfig/renew", "Ipconfig/all", "Ipconfig/release", "Ping"],
        a: 1,
      },
      {
        q: "Chức năng của Group Policy?",
        o: [
          "Triển khai phần mềm ứng dụng. Gán các quyền hệ thống cho người dùng. Giới hạn những ứng dụng mà người dùng được phép thi hành. Kiểm soát các thiết lập hệ thống. Thiết lập các kịch bản đăng nhập, thoát, khởi động và tắt máy. Đơn giản hóa và hạn chế các chương trình. Hạn chế tổng quát màn hình của người dùng",
          "Triển khai phần mềm ứng dụng. Gán các quyền hệ thống cho người dùng. Giới hạn những ứng dụng mà người dùng được phép thi hành. Kiểm soát các thiết lập hệ thống",
          "Triển khai phần mềm ứng dụng. Gán các quyền hệ thống cho người dùng. Giới hạn những ứng dụng mà người dùng được phép thi hành. Kiểm soát các thiết lập hệ thống. Thiết lập các kịch bản đăng nhập, thoát, khởi động và tắt máy. Đơn giản hóa và hạn chế các chương trình",
          "D.	Triển khai phần mềm ứng dụng. Gán các quyền hệ thống cho người dùng. Giới hạn những ứng dụng mà người dùng được phép thi hành. Kiểm soát các thiết lập hệ thống. Thiết lập các kịch bản đăng nhập, thoát, khởi động và tắt máy. Đơn giản hóa và hạn chế các chương trình. Hạn chế tổng quát màn hình của người dùng. Hạn chế hệ thống",
        ],
        a: 0,
      },
      {
        q: "Chọn câu sai, phân loại Domain Name Server gồm có?",
        o: [
          "Primary Name Server",
          "Secondary Name Server",
          "Cachinh Name Server",
          "Address Name Server",
        ],
        a: 3,
      },
      {
        q: "Có mấy loại tài khoản người dùng?",
        o: ["2", "3", "4", "5"],
        a: 0,
      },
      {
        q: "Có mấy loại tài khoản nhóm?",
        o: ["2", "3", "4", "5"],
        a: 0,
      },
      {
        q: "Tài khoản người dùng cục bộ được quản lý bằng công cụ?",
        o: [
          "Computer Management COMPMGMT.MSC",
          "Active Directory Users and Computer DSA.MSC",
          "Security Accounts Manager SAM",
          "Domain Controller",
        ],
        a: 0,
      },
      {
        q: "Tài khoản người dùng miền được quản lý bằng công cụ?",
        o: [
          "Computer Management COMPMGMT.MSC",
          "Active Directory Users and Computer DSA.MSC",
          "Security Accounts Manager SAM",
          "Domain Controller",
        ],
        a: 1,
      },
      {
        q: "Mail Server là?",
        o: [
          "Chứa mailbox của người dùng.",
          "Những chương trình hỗ trợ chức năng đọc và soạn thảo thư",
          "Máy giữ vai trò máy chủ mail chính trong hệ thống mạng",
          "Máy kết nối giữa các mạng dùng các giao thức truyền thông khác nhau hoặc kết nối các mạng khác nhau dùng chung giao thức.",
        ],
        a: 0,
      },
      // phần 3
      {
        q: "Để nâng cao bảo mật trong mạng bạn thực hiện chính sách Maximum Password Age là 7 ngày. Chính sách này sẽ yêu cầu người sử dụng phải đổi mật khẩu hàng tuần. Tuy nhiên sau một thời gian bạn nhận thấy có một vài người sử dụng sau khi đổi sang mật khẩu mới lại đôỉ ngay về mật khẩu cũ. Bạn sẽ dụng chính sách nào dưới đây để tránh tình trạng này",
        o: [
          "Mini Password Age",
          "Store Passwords Using Reversible Encryption",
          "Enforce password history",
          "Maximum Password Age",
        ],
        a: 2,
      },
      {
        q: "Địa chỉ IP v4 được hiểu thế nào?",
        o: [
          "Là một dãy gồm 4 nhóm số, mỗi nhóm có giá trị 1 bit dùng để định danh địa chỉ máy tính trong một mạng nào đó",
          "là một dãy gồm 6 nhóm số, mỗi nhóm có giá trị 2 byte dùng để định danh địa chỉ máy tính trong một mạng nào đó",
          "là một dãy gồm 4 nhóm số, mỗi nhóm có giá trị 1 byte dùng để định danh địa chỉ máy tính trong một mạng nào đó",
          "là một dãy gồm 6 nhóm số, mỗi nhóm có giá trị 1 byte dùng để định danh địa chỉ máy tính trong một mạng nào đó",
        ],
        a: 2,
      },
      {
        q: "Địa chỉ IP được cấp phát thế nào?",
        o: [
          "Do người dùng tự cài đặt",
          "Do máy chủ tự động cấp phát",
          "Các phương án trên đều đúng",
          "(Không có dữ liệu)",
        ],
        a: 2,
      },
      {
        q: "IIS 6.0 cung cấp những cộng cụ gì để hỗ trợ và quản lý Website?",
        o: [
          "IIS manager",
          "Remote Administration (HTML) Tool",
          "Command-line administration scipts",
          "Tất cả các đều đúng",
        ],
        a: 3,
      },
      {
        q: "Server (máy chủ) là gì?",
        o: [
          "Là một máy tính dùng để cung cấp dịch vụ WEB",
          "Là một máy tính dùng để cung cấp dịch vụ tên miền",
          "là một máy tính dùng để cung cấp các thông tin dịch vụ mà người quản trị cài đặt trên đó",
          "Là một máy tính dùng để quản trị mạng",
        ],
        a: 2,
      },
      {
        q: "HTTP viết tắt của cụm từ nào sau đây?",
        o: [
          "Hexa Transfer Protocol",
          "Hypertext Transfer Program",
          "Hypertext Transfer Protocol",
          "Header Transfer Protocol",
        ],
        a: 2,
      },
      {
        q: "Hệ điều hành máy chủ là gì?",
        o: [
          "Là phần mềm đóng vai trò như là một môi trường trên đó người quản trị có thể cài đặt thêm các phần mềm ứng dụng theo yêu cầu",
          "Là một phần mềm quản trị nội dung Web và các tài nguyên như email hay chia sẻ ứng dụng",
          "Là phần cứng đóng vai trò như là một môi trường trên đó người quản trị có thể cài đặt thêm các phần mềm ứng dụng theo yêu cầu",
          "Là một chương trình ứng dụng hỗ trợ soạn thảo van bản và in ấn",
        ],
        a: 0,
      },
      {
        q: "DNS name space quy định tối đa bao nhiêu ký tự?",
        o: ["255", "63", "256", "60"],
        a: 0,
      },
      {
        q: "Subdomain (tên miền con) là gì?",
        o: [
          "Không có tên miền con",
          "Là tên một máy tính trong workgroup",
          "Là tên đặt theo tên miền chính nhằm chia nhỏ tên miền chính",
          "Tên miền con được xem như là một tên miền chính",
        ],
        a: 2,
      },
      {
        q: "ICANN viết tắt là gì?",
        o: [
          "International Corporation for Assigned Names and Numbers",
          "Internet Corporate for Assigned Names and Nations",
          "Internet Corporation for Assigned Names and Numbers",
          "Internet Corporate for Assigned Names and Numbers",
        ],
        a: 2,
      },
      {
        q: "Máy chủ Web là gì?",
        o: [
          "là một máy tính trong đó cài các hệ điều hành dòng server và được cài đặt các phần mềm xử lý yêu cầu truy cập dịch vụ Web",
          "là một máy tính trong đó cài các hệ điều hành Window XP và được cài đặt các phần mềm xử lý yêu cầu truy cập dịch vụ Web",
          "là một máy tính trong đó cài các hệ điều hành Window và được cài đặt các phần mềm xử lý yêu cầu truy cập dịch vụ Web",
          "là một máy tính trong đó cài các hệ điều hành Unix được cài đặt các phần mềm xử lý yêu cầu truy cập dịch vụ Web",
        ],
        a: 0,
      },
      {
        q: "Các đối tượng (Object) lưu trữ trong Active directory gồm?",
        o: [
          "User, Printers",
          "Server, Computer",
          "Tất cả đều đúng",
          "Database, Groups",
        ],
        a: 2,
      },
      {
        q: "Chọn phát biểu đúng về Forest trong cấu trúc AD (Active directory)?",
        o: [
          "Forest gồm một nhóm hay tổ chức phân cấp của nhiều cây domain độc lập hoàn toàn",
          "Forest tồn tại trong cấu trúc vật lý của AD",
          "Forest là một đối tượng trong OU",
          "Tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Domain name (tên miền) là gì?",
        o: [
          "Là một tên định danh trên mạng Internet dùng để thay thế cho một địa chỉ Ip của một máy chủ nào đó",
          "Là một tên định danh trên mạng Internet dùng để phân chia thành nhiều lớp mạng con",
          "Là tên một máy trạm",
          "là tên máy tính do người dùng đặt tuỳ ý",
        ],
        a: 0,
      },
      {
        q: "Phiên bản Web Edition thuộc hệ điều hành nào sau đây?",
        o: [
          "Window XP",
          "Unix",
          "Window server 2003",
          "Tất cả các phương án trên",
        ],
        a: 2,
      },
      {
        q: "Mục đích chính của việc đăng nhập (logging) vào AD (active directory) của một user Account?",
        o: [
          "Để truy nhập Domain Controller",
          "Để truy nhập các dịch vụ mạng",
          "Để truy nhập file trong máy tính cục bộ",
          "Để duy trì bảo mật cục bộ",
        ],
        a: 0,
      },
      {
        q: "Bạn phải hoàn thành những tác vụ gì trước khi nâng cấp một máy chủ Domain controller?",
        o: [
          "Cấu hình địa chỉ IP động và cài đặt DNS",
          "Cấu hình địa chỉ IP tĩnh và cài đặt DNS",
          "Cài đặt dịch vụ DHCP và DNS",
          "Cấu hình địa chỉ IP tĩnh và cài đặt DHCP",
        ],
        a: 1,
      },
      {
        q: "OU trong cấu trúc của AD (active directory) là viết tắt của?",
        o: [
          "Organizational Unit",
          "Object Unkhown",
          "Object Unit",
          "Organizational Unique",
        ],
        a: 0,
      },
      {
        q: "Chọn một phát biểu sai về AD(Active Directory)?",
        o: [
          "AD có thể lưu trữ phân bố trên nhiều máy",
          "Thông tin trong AD được sử dụng cho việc quản lý và xử lý các tài nguyên trên mạng",
          "Cấu trúc logic của AD gồm nhiều Site nối với nhau",
          "Cấu trúc logic hoàn toàn khác với cấu trúc vật lý của AD",
        ],
        a: 2,
      },
      {
        q: "Phần mềm Web server là gì?",
        o: [
          "Là một phần mềm chia sẻ ứng dụng Web",
          "Là một hệ điều hành quản lý quá trình duyệt Web và dịch vụ Email",
          "Là một phần mềm đóng vai trò xử lý các yêu cầu duyệt Web và các dịch vụ trên Internet từ phía người dùng",
          "Tất cả đều đúng",
        ],
        a: 2,
      },
      {
        q: "Với hình vẽ sau bạn hãy cho biết máy tính của bạn đang hoạt động trong môi trường nào?",
        o: [
          "Môi trường Domain",
          "Môi trường Workgroup",
          "Môi trường là một Domain controller",
          "Môi trường là một máy cấp phát địa chỉ IP",
        ],
        a: 1,
      },
      {
        q: "Bạn hãy cho biết 24 dưới có ý nghĩa như thế nào?",
        o: [
          "Số máy tối đa trong mạng có thể nhận được địa chỉ IP",
          "Địa chỉ cuối cùng trong vùng cấp Ip động",
          "Số Bit thuộc vùng mạng",
          "Số bit thuộc vùng Host",
        ],
        a: 2,
      },
      {
        q: "Chọn đáp án đúng cho ý nghĩa của hình ảnh trên trong các bước cấu hình DHCP?",
        o: [
          "Server sẽ cấp địa chỉ từ 172.29.1.100 đến 172.29.1.200",
          "Server sẽ không cấp địa chỉ từ 172.29.1.100 đến172.29.1.200",
          "Server sẽ cấp địa chỉ theo lớp địa chỉ 172.29.1.0",
          "Server không được cài đặt dịch vụ DHCP",
        ],
        a: 0,
      },
      {
        q: "Để đăng nhập một máy con vào một máy Domain Controller bạn phải đảm bảo những yêu cầu nào sau đây?",
        o: [
          "Khai báo IP DNS",
          "Tất cả các đáp án đều đúng",
          "Thay đổi môi trường Workgroup thành Domain",
          "Tất cả các đáp án đều sai",
        ],
        a: 1,
      },
      {
        q: "Dịch vụ mạng nào sau đây có thể đảm bảo cho máy tính của bạn nhận được IP, Default gateway, subnet mask, DNS . . .?",
        o: ["DHCP", "DNS", "IIS", "FTP"],
        a: 0,
      },
      {
        q: "Khi cài đặt AD, Password trên đặt trong trường hợp nào sau đây?",
        o: [
          "Password đặt cho user adminitrator",
          "Password đặt cho hệ thống khởi động ở chế độ safe mode",
          "Password đặt cho hệ thống khởi động ở chế độ Directory service restore mode.",
          "Tất cả các đáp án trên đều sai",
        ],
        a: 2,
      },
      {
        q: "Để đảm bảo cho việc quản lý một cách dễ dàng và thuận tiện thì người quản trị mạng phải tạo ra các user như thế nào?",
        o: [
          "Tạo ra một Organiztional Units và tạo các user trong đó",
          "Tạo ra một group riêng và tạo các user vào group đó",
          "Tạo ra các user và phân quyền đặc trưng cho các user đó",
          "Tạo ra các user và gán cho các user vào nhóm Administrator",
        ],
        a: 0,
      },
      {
        q: "Hãy cho biết ý nghĩa của hình ảnh trên?",
        o: [
          "Vùng địa chỉ không được cấp phát bởi DHCP server",
          "Vùng địa chỉ được ưu tiên khi cấp phát",
          "Vùng địa chỉ từ 172.29.14.100 đến 172.29.14.110 không có trong danh sách địa chỉ IP của DHCP server",
          "(Không có dữ liệu)",
        ],
        a: 0,
      },
      {
        q: "Tại công ty A, có hệ thống mạng Workgroup với 60 máy, dữ liệu hiện tại của công ty được lưu trữ phân tán tại mỗi PC .Nhu cầu của công ty muốn quản lý hệ thống mạng tập trung với mọi thông tin, dữ liệu, tài nguyên . . . Công ty sẽ phải làm gì để có thể triển khai hệ thống mạng theo yêu cầu trên?",
        o: [
          "Chọn một Server chuyên dụng và cài đặt Win server 2003",
          "Cài đặt dịch vụ Active Directory cho server",
          "Gia nhập hệ thống client vào domain",
          "Các đáp án đều đúng",
        ],
        a: 3,
      },
      {
        q: "Các phiên bản Windows Server sau đây, phiên bản nào không có dịch vụ Active Directory?",
        o: [
          "MS Windows Server 2003 Web Edition",
          "MS Windows Server 2003 Standard",
          "MS Windows Server 2003 Enterprise",
          "MS Windows Server 2003 DataCenter",
        ],
        a: 0,
      },
      {
        q: "Cấu hình mặc định khi chúng ta thực hiện các policy là?",
        o: ["Not Configured", "Disabled", "Default Configured", "Enabled"],
        a: 0,
      },
      {
        q: "Trên máy tính sử dụng Window 2000 Pro, bạn tạo ra phân vùng D: sử dụng file hệ thống FAT32, sau một thời gian sử dụng để tăng tính bảo mật, bạn quyết định chuyển phân vùng này thành NTFS. Ban sẽ dùng lệnh nào?",
        o: [
          "Convert D:/FS:NTFS",
          "Convert D:/FS-NTFS",
          "Convert D:/FS/NTFS",
          "Convert D:/NTFS",
        ],
        a: 0,
      },
      {
        q: "Bạn là quản trị mạng cho một công ty A, công ty bạn muốn triển khai 2 NetID khác nhau cho hai phòng ban, bạn làm thế nào để trên mạng không bị trùng IP và tiết kiệm công sức nhất cho người quản trị?",
        o: [
          "Sử dụng Ip tĩnh trên mỗi nhánh mạng",
          "Cài đặt và cấu hình DHCP server trên mỗi nhánh mạng",
          "Một nhánh mạng dùng DHCP server, nhánh còn lại sử dung IP tĩnh",
          "Cấu hình DHCP server và DNS server",
        ],
        a: 1,
      },
      {
        q: "Tại hệ thống mạng của công ty A đã cài đặt và cấu hình DHCP server. Công ty hiện triển khai thêm một vài server và muốn giành riêng một số địa chỉ IP cho các server này, bạn sẽ là gì để thực hiện việc cấp IP cho các server mới như yêu cầu?",
        o: [
          "Xóa và tạo lại Scope",
          "Trong DHCP server không cho phép bổ sung",
          "Trong DHCP server chọn Addess Pool",
          "Trong DHCP server chọn DHCP Reservation",
        ],
        a: 3,
      },
      {
        q: "Dịch vụ nào sau đây cần phải cài đặt khi cài đặt Mail Exchange Server 2003 trên các Mail server?",
        o: [
          "ASP.NET, IIS",
          "ASP.NET, IIS, SMTP, NNTP",
          "ASP.NET, IIS, SMTP, NNTP, FTP",
          "Không yêu cầu dịch vụ nào",
        ],
        a: 1,
      },
      {
        q: "Tổ chức IETF viết tắt là?",
        o: [
          "Internet Engineering Task Force",
          "International Engineering Task Force",
          "Internet Engineering Task Form",
          "Internet Electric Task Force",
        ],
        a: 0,
      },
      {
        q: "Trước khi cài đặt DNS hay DHCP cần phải đảm bảo vấn đề nào sau đây?",
        o: [
          "Máy được cài đặt phải đảm bảo là một máy điều khiển vùng",
          "Máy được cài đặt phải đảm bảo nằm trong Domain của một máy điều khiển vùng",
          "Máy được cài đặt phải đảm bảo cấu hình IP",
          "Máy được cài đặt phải đảm bảo không cài dịch vụ khác trên máy DNS hay máy DHCP",
        ],
        a: 2,
      },
      {
        q: "Phần nào dưới đây không phải là một dịch vụ mạng?",
        o: ["File", "In ấn", "Remote Desktop", "cơ sở dữ liệu"],
        a: 0,
      },
      {
        q: "Giao thức truyền mail trên Window 2003 server?",
        o: ["SMTP và POP 3", "SMTP", "FTP", "HTTP và SMTP"],
        a: 0,
      },
      {
        q: "Sau bao nhiêu thời gian thuê thì client gửi tín hiệu DHCP Request?",
        o: ["87.5%", "100%", "80%", "50%"],
        a: 0,
      },
      {
        q: "Địa chỉ IP 172.28.146.2 là địa chỉ của server nào?",
        o: ["Server DNS", "Mail Server", "Server FTP", "Server DHCP"],
        a: 0,
      },
      {
        q: "Để cấu hình cho client nhận địa chỉ IP động ta chọn tùy chọn nào trong hình trên?",
        o: ["1", "3", "2", "Không thể cấu hình IP động"],
        a: 0,
      },
      {
        q: "Để cấu hình cho client nhận địa chỉ IP tĩnh ta chọn tùy chọn nào trong hình trên?",
        o: ["1", "3", "2", "Không thể cấu hình IP tĩnh"],
        a: 2,
      },
      {
        q: "Để cấu hình địa chỉ DNS server trên client ta chọn tùy chọn nào trong hình trên?",
        o: ["1", "3", "2", "Tất cả đều sai"],
        a: 1,
      },
      {
        q: "Khi cài đặt cấu hình Web server để chỉ định địa chỉ sử dụng cho Website trong mục 1 nếu ta nhập 172.18.100.2 có nghĩa là gì?",
        o: [
          "HTTP không thể hoạt động trên địa chỉ 172.18.100.2 của server mà bạn đang cấu hình",
          "HTTP được hoạt động trên địa chỉ IP của server là 172.18.100.2",
          "Chưa khai báo địa chỉ server",
          "Địa chỉ của Client khi tham gia truy cập tới Web server",
        ],
        a: 1,
      },
      {
        q: "Khi cài đặt cấu hình Web server mục 2 trong hình có tác dụng làm gì?",
        o: [
          "Chỉ định cổng hoạt động cho dịch vụ",
          "Chỉ định số máy client có thể truy cập tới Web server",
          "Chỉ định số Web server có trong mạng",
          "Các phương án đều sai",
        ],
        a: 0,
      },
      {
        q: "Khi cài đặt cấu hình Web server , khi nào thì ta không cần cài đặt thông số cho mục 3 trong hình?",
        o: [
          "Khi ta tổ chức 1 Website tương ứng với 1 địa chỉ IP",
          "Khi ta tổ chức nhiều Website tương ứng với 1 địa chỉ IP",
          "Khi ta tổ chức 1 Website tương ứng với nhiều địa chỉ IP",
          "Các phương án đều đúng",
        ],
        a: 0,
      },
      {
        q: "Khi cài đặt cấu hình Web server, khi nào thì ta cần cài đặt thông số (Ví dụ: www.hubt.edu.vn) cho mục 3 trong hình?",
        o: [
          "Khi ta tổ chức 1 Website tương ứng với 1 địa chỉ IP",
          "Khi ta tổ chức nhiều Website cùng dùng chung 1 địa chỉ IP",
          "Khi ta tổ chức 1 Website tương ứng với nhiều địa chỉ IP",
          "Các phương án đều đúng",
        ],
        a: 1,
      },
      {
        q: "Hình ảnh trên là?",
        o: [
          "Cấu trúc logic của Active Directory",
          "Cấu trúc vật lý của Active Directory",
          "Mô hình dịch vụ DNS",
          "Mô hình dịch vụ DHCP",
        ],
        a: 0,
      },
      {
        q: "Tạo tài khoản đăng nhập trên Window server 2003 có thể tối đa bao nhiêu ký tự?",
        o: ["104", "20", "100", "255"],
        a: 0,
      },
      {
        q: "Giao thức HTTP sử dụng Port bao nhiêu?",
        o: ["443", "80", "8080", "21"],
        a: 0,
      },
      {
        q: "DNS nhận nhiệm vụ gì?",
        o: [
          "Phân giải IP thành tên miền và tên miền thành IP",
          "Phân giải IP thành tên miền",
          "Phân giải tên miền thành IP",
          "Là máy điều khiển vùng",
        ],
        a: 0,
      },
      {
        q: "Trên Domain, bạn cấu hình Password Policy đặt thông số Minimum Password Age là 1 ngày. Hãy chọn đáp án đúng đối với người sử dụng thông thường trong Domain này?",
        o: [
          "Các đáp án đều sai",
          "Người sử dụng sau khi thay đổi mật khẩu phải đợi một ngày sau mới thay đổi mật khẩu lần nữa",
          "Người sử dụng có thể thay đổi mật khẩu ngay tức khắc",
          "Sau một ngày người sử dụng này sẽ nhận được thông báo Mật khẩu của bạn đã hết hạn",
        ],
        a: 1,
      },
      {
        q: "Có thể áp dụng chính sách nhóm (group policy) trực tiếp cho những đối tượng nào sau đây?",
        o: ["OU", "Domain", "Group", "Các đáp án đều đúng"],
        a: 3,
      },
      {
        q: "Windows 2003 server hỗ trợ bộ giao thức nào?",
        o: ["Các đáp án đều đúng", "Apple Talk", "IPX/SPX", "TCP/IP"],
        a: 0,
      },
      {
        q: "Windows Server 2003 có thêm những chức năng nào so với các hệ điều hành Window thông thường",
        o: [
          "Web server",
          "Application server",
          "File server",
          "Các đáp án đều đúng",
        ],
        a: 0,
      },
      {
        q: "Sử dụng công cụ MMC trong Window 2003 server có tác dụng lớn là gì?",
        o: [
          "Quản trị tập trung từ máy tính",
          "Cấu hình dịch vụ Web",
          "Quản lý phân tán tài nguyên các máy client",
          "Cấu hình dịch vụ DNS",
        ],
        a: 0,
      },
      {
        q: "Công cụ nào được sử ụng để kích hoạt Remote Desktop trên một máy chủ?",
        o: [
          "System Properties",
          "Terminal Services Licensing",
          "Services Manager",
          "Terminal Services Configuration",
        ],
        a: 0,
      },
      {
        q: "Một máy tính khi bắt đầu tham gia vào mạng thì đã tồn tại địa chỉ gì?",
        o: [
          "Địa chỉ vật lý",
          "Địa chỉ IP",
          "Địa chỉ IP và vật lý",
          "không có địa chỉ nào",
        ],
        a: 0,
      },
      {
        q: "Công ty của bạn kết nối Internet. Bạn mở cửa sổ trình duyệt trên máy để truy nhập vào một trong Web trên Internet nhưng thông báo lỗi. Bạn chạy lệnh Ipconfig và nhận được thông báo Media disconnected và cũng không thể thực hiện được lệnh Ping tới bất kỳ một địa chỉ nào khác. Nguyên nhân nào gây ra trục trặc này?",
        o: ["Máy chủ DHCP", "Card mạng", "Máy chủ Web", "Máy chủ DNS"],
        a: 1,
      },
      {
        q: "Bạn đang quản trị mạng tại một công ty. Công ty này đang sử dụng một server với dịch vụ Proxy để chia sẻ quyền truy cập Internet cho các máy trong công ty. Bạn cần triển khai một tường lửa nào để cung cấp một kết nối an toàn giữa mạng bên trong và Internet",
        o: [
          "Packet filtering",
          "Stateful filtering",
          "Intrusion detection",
          "Application gateway",
        ],
        a: 3,
      },
      {
        q: "Khi cài đặt cấu hình Web server để chỉ định địa chỉ sử dụng cho Wesite trong mục Enter the IP address to use for this Website, nếu ta chỉ định all Unassigned có nghĩa là gì?",
        o: [
          "HTTP không thể hoạt động trên địa chỉ của server mà bạn đang cấu hình",
          "HTTP được hoạt động trên tất cả các địa chỉ của server",
          "Chưa khai báo địa chỉ server",
          "Mặc định không cần chỉ định",
        ],
        a: 1,
      },
      {
        q: "Khi tiến hành cài đặt dịch vụ Active Directory, muốn nâng cấp thành Domain Controller để quản lý một miền con của một một Domain đã có sẵn thì sẽ chọn mục nào?",
        o: [
          "Domain in a new forest",
          "Domain tree in an existing forest",
          "Tất cả đều đúng",
          "Child domain in an existing domain tree",
        ],
        a: 3,
      },
      {
        q: "Để xây dựng thêm một Server đảm nhiệm cùng nhiệm vụ với Domain Controller Server đã có trong hệ thống mạng, về việc quản lý tài nguyên, tài khoản và chính sách hệ thống. Bạn cần xây dựng Server nàocho hệ thống mạng của mình?",
        o: [
          "Child Domain Controller server",
          "Sub Domain Controller server",
          "Backup Domain Controller server",
          "Domain Controller server.",
        ],
        a: 3,
      },
      {
        q: "Cấu hình DHCP như trong hình. Hãy cho biết máy nhận IP động sẽ nhận địa chỉ nào sau đây?",
        o: [
          "Default Gateway",
          "IP Address",
          "Subnet mask",
          "Preferred DNS server",
        ],
        a: 0,
      },
      {
        q: "Hãy chọn phát biểu đúng khi nói về quá trình cài đặt Window Server 2003?",
        o: [
          "Trình cài đặt có thể được nạp bằng cách khởi động từ đĩa CD",
          "Trình cài đặt yêu cầu mật khẩu của tài khoản Administrator không là trống để đáp ứng các yêu cầu về tính phức tạp",
          "Trình cài đặt yêu cầu bạn phải kích hoạt bản quyền sản phẩm trước khi cài đặt hệ điều hành",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Tạo tên tài khoản đăng nhập trên Window 2000/XP có thể tối đa bao nhiêu ký tự?",
        o: ["104", "20", "255", "105"],
        a: 1,
      },
      {
        q: "Mail Gateway là?",
        o: [
          "máy kết nối giữa các mạng dùng các giao thức truyền thông khác nhau hoặc kết nối các mạng khác nhau dùng chung giao thức",
          "máy giữ vai trò máy chủ Mail chính trong hệ thống mạng.",
          "Chứa mailbox của người dùng",
          "Chương trình hỗ trợ chức năng đọc và soạn thảo thư.",
        ],
        a: 0,
      },
      {
        q: "Hãy chọn phương án đúng cho biết thứ tự các tầng của mô hình OSI là thế nào ?",
        o: [
          "Physical, Data-Link, Network, Transport, Session, Presentation, Application.",
          "Physical, Data-Link, Transport, Network, Session, Presentation, Application.",
          "Physical, Data-Link, Network, Session, Transport, Presentation, Application.",
          "Physical, Data-Link, Network, Transport, Presentation, Session, Application.",
        ],
        a: 0,
      },
      {
        q: "Hãy xác định độ dài của địa chỉ IPv6 là bao nhiêu trong các phương án sau đây?",
        o: ["8 bits.", "128 bits.", "256 bits.", "32 bits."],
        a: 1,
      },
      {
        q: "Thiết bị nào sau đây có chức năng quyết định đường đi của các gói tin tới đích?",
        o: ["Repeater", "Switch", "Router", "Bridge"],
        a: 2,
      },
      {
        q: "Hãy chọn mục tiêu chính nào để kết nối các máy tính thành một mạng trong các phương án sau đây?",
        o: [
          "Để cung cấp các dịch vụ mạng đa dạng và chia sẻ tài nguyên chung.",
          "Để hạn chế sử dụng nhiều thiết bị cùng lúc.",
          "Để cung cấp tài nguyên trên mạng và sử dụng các thiết bị giá thành rẻ.",
          "Để cung cấp được nhiều thông tin cho nhiều người biết.",
        ],
        a: 0,
      },
      {
        q: "POF là loại cáp gì?",
        o: [
          "Cáp quang làm bằng Plastic",
          "Cáp quang làm bằng thuỷ tinh",
          "Cáp đồng trục Thinnet",
          "Cáp đồng trục Thicknet",
        ],
        a: 0,
      },
      {
        q: "Xác định Mask default của địa chỉ 200.50.2.4 là?",
        o: ["255.0.0.0", "255.255.255.4", "255.255.0.0", "255.255.255.0"],
        a: 3,
      },
      {
        q: "Hãy chọn khái niệm nào đúng về giao thức (Protocol) trong phương án sau đây?",
        o: [
          "Giao thức là một tập các quy ước mà các thiết bị trên mạng phải tuân theo để có thể liên lạc được với nhau.",
          "Giao thức là các tín hiệu nhị phân truyền đi trước khi truyền dữ liệu thực sự.",
          "Giao thức là cơ chế '' bắt tay ba lần'' mà mọi thiết bị trên mạng phải tuân theo để có thể liên lạc được với nhau.",
          "Giao thức là chương trình mà các máy tính phải có để hoạt động được trong mạng.",
        ],
        a: 0,
      },
      {
        q: "Hãy chọn phương án đúng cho biết cáp xoắn đôi CAT 6 có tốc độ truyền là bao nhiêu?",
        o: ["1000Mbps", "50Mbps", "10Mbps", "100Mbps"],
        a: 3,
      },
      {
        q: "Hãy cho biết nhược điểm chính của mạng dạng Star là gì trong các phương án sau đây ?",
        o: [
          "Cần quá nhiều cáp để kết nối tới nút mạng trung tâm.",
          "Khó cài đặt và bảo trì.",
          "Khó khắc phục khi lỗi cáp xảy ra, và ảnh hường tới các nút mạng khác.",
          "Không có khả năng thay đổi khi đã lắp đặt.",
        ],
        a: 0,
      },
      {
        q: "Hãy quan sát hình ảnh, cho biết đây là loại cáp nào trong các phương án sau đây?",
        o: ["Cáp UTP.", "Cáp quang.", "Cáp STP.", "Cáp đồng trục."],
        a: 2,
      },
      {
        q: "Phương pháp truy nhập nào dưới đây lắng nghe lưu thông mạng trên đường truyền trước khi truyền dữ liệu?",
        o: ["CSMA/CD", "Token RING", "CSMA/CA", "Token BUS"],
        a: 0,
      },
      {
        q: "Hãy chọn nguyên nhân chính phá vỡ hệ thống của mạng Token ring là gì trong các phương án sau đây ?",
        o: [
          "Là do mất thẻ bài.",
          "Là do không khởi tạo vòng logic.",
          "Là do khôi phục dữ liệu bị mất do gẫy vòng logic.",
          "Là do dung lượng của dữ liệu quá nhẹ.",
        ],
        a: 0,
      },
      {
        q: "Chuẩn nào sau đây đặc tả mạng cục độ hình vòng, sử dụng thẻ bài (Token) để điều khiển truy nhập đường truyền?",
        o: ["IEEE 802.4", "IEEE 802.2", "IEEE 802.3", "IEEE 802.5"],
        a: 3,
      },
      {
        q: "Tia hồng ngoại thuộc?",
        o: [
          "Đường truyền vô tuyến",
          "Hữu tuyến và vô tuyến",
          "Đường truyền hữu tuyến",
          "Không được sử dụng trên mạng",
        ],
        a: 0,
      },
      {
        q: "3G là viết tắt của?",
        o: ["3rd Generation", "3rd Gopher", "3rd Group", "Goto 3"],
        a: 0,
      },
      {
        q: "Phương thức định tuyến nào không sử dụng giao thức định tuyến?",
        o: [
          "Định tuyến giao nhau",
          "Định tuyến tĩnh",
          "Định tuyến động",
          "Định tuyến ngẫu nhiên",
        ],
        a: 1,
      },
      {
        q: "Chọn đáp án sai về chức năng của Card mạng?",
        o: [
          "Chuyển dữ liệu từ CPU tới các slot thích hợp trong máy tính",
          "Định dạng dữ liệu theo những giao thức tương ứng",
          "Truyền và nhận dữ liệu dựa trên địa chỉ vật lý của card mạng",
          "Chuyển đổi dữ liệu từ các đường truyền song song thành chuỗi dữ liệu tuần tự để có thể truyền thông qua mạng",
        ],
        a: 0,
      },
      {
        q: "Loại thiết bị nào cho phép sử dụng toàn bộ băng thông của đường truyền?",
        o: ["Repeater", "Switch", "Hub", "Transceiver"],
        a: 1,
      },
      {
        q: "Địa chỉ mạng riêng (Private IP address) được quy định trong lớp C là?",
        o: [
          "200.168.0.0 đến 200.168.255.255",
          "195.168.0.0 đến 195.168.255.255",
          "192.168.0.0 đến 192.168.255.255",
          "192.100.0.0 đến 192.100.255.255",
        ],
        a: 2,
      },
      {
        q: "Đặc điểm của Subnet Mask là gì?",
        o: [
          "Tất cả các bit của phần Netid là 1, tất cả các bit của phần Hostid là 0",
          "Tất cả các bit của phần Netid là 1, tất cả các bit của phần Hostid là 1",
          "Mask là một số nhị phân 32 bit",
          "Tất cả các bit của phần Netid là 0, tất cả các bit của phần Hostid là 1",
        ],
        a: 0,
      },
      {
        q: "Địa chỉ 191 .10.255.255 là điạ chỉ gì?",
        o: [
          "Subnet mask lớp B",
          "Broadcast lớp A",
          "Broadcast lớp B",
          "Broadcast lớp C",
        ],
        a: 2,
      },
      {
        q: "Mỗi phần trong một địa chỉ Ipv4 chiếm bao nhiêu Bit?",
        o: ["8", "4", "16", "32"],
        a: 3,
      },
      {
        q: "Mạng FDDI sử dụng loại cáp nào?",
        o: ["Cáp S", "Cáp quang", "Cáp đồng trục", "Cáp xoắn"],
        a: 1,
      },
      {
        q: "Sự giống nhau giữa 2 mô hình OSI và TCP /IP là?",
        o: [
          "Sử dụng kỹ thuật chuyển mạch gói",
          "Đều có lớp trình diễn",
          "Cấu trúc 7 tầng",
          "Sử dụng kỹ thuật chuyển mạch kênh",
        ],
        a: 0,
      },
      {
        q: "Địa chỉ mạng riêng (Private IP address) được quy định trong lớp A là?",
        o: [
          "5.0.0.0 đến 10.255.255.255.255",
          "10.0.0.0 đến 10.255.255.255.255",
          "20.0.0.0 đến 20.255.255.255.255",
          "10.0.0.0 đến 15.255.255.255.255",
        ],
        a: 1,
      },
      {
        q: "Địa chỉ trang web ‘[www.hubt.edu.vnʼ.ʼvnʼ](http://www.hubt.edu.xn--vn-o2t.xn--vn-m2tc/) trên địa chỉ có nghĩ là g ì?",
        o: [
          "Ký hiệu tên nước Việt Nam",
          "Ký hiệu nào đó",
          "Hiển thị thông tin tổ chức kinh doanh",
          "Khác",
        ],
        a: 0,
      },
      {
        q: "Trong chuẩn 10BaseT. Chữ T viết tắt của từ nào?",
        o: ["Twisted pair", "Tall", "Thinet", "Thicknet"],
        a: 0,
      },
      {
        q: "Hãy xác định giao thức nào sau đây là một giao thức kết nối song công (Full - Duplex), đáng tin cậy và chịu trách nhiệm trong việc truyền dữ liệu ?",
        o: ["ARP", "TCP", "IP", "UDP"],
        a: 2,
      },
      {
        q: "Chiều dài giới hạn của dây cáp xoắn nối giữa 2 thiết bị (PC, Hub, Switch…) là bao nhiêu trong các phương án sau đây ?",
        o: ["10 mét.", "50 mét.", "100 mét.", "200 mét."],
        a: 2,
      },
      {
        q: "Hãy quan sát hình ảnh, cho biết đây là loại cáp nào trong các phương án sau đây?",
        o: ["Cáp UTP.", "Cáp đồng trục.", "Cáp STP.", "Cáp quang."],
        a: 0,
      },
      {
        q: "Khi thi công giải cáp mạng (cáp xoắn đôi), hãy cho biết góc giới hạn của cáp là bao nhiêu trong các phương án sau đây?",
        o: ["45 độ.", "90 độ.", "60 độ.", ">90 độ."],
        a: 3,
      },
      {
        q: "Hãy chọn tầng nào sau đây trong mô hình OSI có chức năng kiểm soát lỗi và kiểm soát luồng dữ liệu?",
        o: [
          "Tầng liên kết dữ liệu.",
          "Tầng vật lý.",
          "Tầng vận chuyển.",
          "Tầng mạng.",
        ],
        a: 0,
      },
      {
        q: "Hãy xác định đâu là mạng cục bộ (LAN) trong các trường hợp sau đây?",
        o: [
          "Hai máy tính, một ở Đại học Kinh Doanh và Công nghệ HN, một ở Đại học Hải Phòng được nối mạng và gửi thông tin cho nhau.",
          "Một máy tính và một máy in trong một văn phòng, nối với nhau thông qua một Printer Switch box.",
          "Một số máy tính đặt trong các phòng học tại khu D - Đại học Kinh Doanh và Công Nghệ HN nối cáp với nhau, chia sẻ và sử dụng chung các tài nguyên.",
          "Các máy tính trong một công ty cùng kết nối vào Internet bằng USB 3G.",
        ],
        a: 2,
      },
      {
        q: "Việc phân loại mạng thường được tuân theo những tiêu chí nào sau đây?",
        o: [
          "Địa lý, kỹ thuật chuyển mạch, kiến trúc mạng và nguyên tắc quản lý.",
          "Kỹ thuật chuyển mạch, kiến trúc mạng, nguyên tắc quản lý và hệ điều hành mạng.",
          "Hệ điều hành, kỹ thuật chuyển mạch và nguyên tắc quản lý .",
          "Địa lý, kiến trúc mạng và nguyên tắc quản lý",
        ],
        a: 0,
      },
      {
        q: "Hệ thống mạng của Trường Đại Học Kinh Doanh và Công nghệ Hà nội đang sử dụng một địa chỉ mạng lớp C, khi cần chia 12 subnets thì ta phải dùng Subnet Mask nào trong các phương án sau đây?",
        o: [
          "255.255.255.240",
          "255.255.255.0",
          "255.255.12.0",
          "255.255.255.12",
        ],
        a: 0,
      },
      {
        q: "Hãy xác định độ dài của địa chỉ MAC là bao nhiêu trong các phương án sau đây?",
        o: ["36 bits.", "48 bits.", "8 bits.", "24 bits."],
        a: 1,
      },
      {
        q: "Phương pháp thẻ bài trong mạng Token Ring hoạt động hiệu quả ở điều kiện nào sau đây?",
        o: ["Tắc nghẽn đường truyền", "Tải nặng.", "Tải nhẹ.", "Có xung đột."],
        a: 3,
      },
      {
        q: "Hãy chọn phương án đúng cho biết một địa chỉ mạng lớp C được phép mượn tối đa bao nhiêu bit cho Subnet?",
        o: ["8 bits", "2 bits", "4 bits", "6 bits"],
        a: 3,
      },
      {
        q: "Theo chuẩn T568B của cáp xoắn đôi UTP (Unshielded Twisted Pair), hãy xác định dây Xanh dương nằm ở chân số mấy trong các phương án sau đây?",
        o: ["Số 5", "Số 3", "Số 6", "Số 4"],
        a: 3,
      },
      {
        q: "Hãy xác định cổng giao tiếp SC (Subscriber Connector) nối Card mạng với loại cáp nào trong các phương án sau đây?",
        o: [
          "Cáp Quang.",
          "Cáp Xoắn đôi.",
          "Cáp Đồng trục gầy.",
          "Cáp Đồng trục béo.",
        ],
        a: 0,
      },
      {
        q: "Hãy xác định giao thức UDP được sử dụng cho các ứng dụng nào trong các phương án sau đây?",
        o: [
          "Các ứng dụng không yêu cầu độ tin cậy cao.",
          "Các ứng dụng yêu cầu kiểm soát luồng và kiểm soát lỗi.",
          "Các ứng dụng không yêu cầu liên kết vật lý.",
          "Các ứng dụng yêu cầu độ tin cậy cao.",
        ],
        a: 0,
      },
      {
        q: "Hãy chọn phương án nào sau đây cho biết chức năng chính của giao thức ICMP trong bộ giao thức TCP/IP?",
        o: [
          "Hiện thị thông tin các gói tin không theo thứ tự.",
          "Thông báo lỗi và các thông tin trạng thái khác.",
          "Định hướng tìm đường cho gói tin.",
          "Kiểm soát luồng dữ liệu truyền trên mạng.",
        ],
        a: 1,
      },
      {
        q: "Trong mô hình TCP/IP, giao thức nào dùng để tìm địa chỉ MAC khi biết địa chỉ IP trong các phương án sau đây?",
        o: ["ARP", "TCP", "UDP", "RARP"],
        a: 0,
      },
      {
        q: "Dùng phương pháp bấm cáp xoắn - chéo giữa hai thiết bị nào?",
        o: ["Hub - Hub", "Modem - Pc", "Hub - Nic", "Switch - PC"],
        a: 0,
      },
      {
        q: "Giao thức OSPF hoạt động theo phương thức định tuyến nào?",
        o: [
          "Vector khoảng cách",
          "Trạng thái liên kết",
          "Định tuyến tĩnh",
          "Tất cả đều sai",
        ],
        a: 1,
      },
      {
        q: "Hãy xác định đâu là Subnet mask của địa chỉ mạng lớp C trong các phương án sau đây?",
        o: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "225.255.255.255"],
        a: 0,
      },
      {
        q: "Một mạng sử dụng địa chỉ lớp B cần chia thành 9 mạng con, hãy xác định Subnet mask là gì trong các phương án sau đây?",
        o: ["255.255.240.0", "255.0.0.255", "255.224.255.0", "255.255.255.224"],
        a: 0,
      },
      {
        q: "Hãy xác định cổng giao tiếp RJ-45 (Registered Jack – 45) nối Card mạng với loại cáp nào trong các phương án sau đây?",
        o: [
          "Cáp Đồng trục gày",
          "Cáp Quang",
          "Cáp Xoắn đôi",
          "Cáp Đồng trục béo",
        ],
        a: 2,
      },
      {
        q: "Hãy chọn phương án đúng nào say đây cho biết địa chỉ Broadcast của lớp C?",
        o: [
          "221.218.2.255",
          "190.44.255.255",
          "129.219.145.255",
          "190.12.2.255",
        ],
        a: 0,
      },
      {
        q: "Hãy xác định địa chỉ IP nào sau đây là địa chỉ quảng bá nội bộ cho một mạng bất kỳ?",
        o: [
          "10.16.1.255",
          "230.20.30.255",
          "255.255.255.255",
          "12.255.255.255",
        ],
        a: 2,
      },
      {
        q: "Hãy xác định các giao thức RIP, OSPF hoạt động ở tầng nào trong mô hình TCP/IP trong các phương án sau đây?",
        o: [
          "Application layer",
          "Network layer",
          "Presentation layer",
          "Transport layer",
        ],
        a: 1,
      },
      {
        q: "Subnet Mask mặc định của địa chỉ 112.50.30.4 là gì trong các phương án sau đây?",
        o: ["255.255.255.0", "255.0.0.0", "255.255.0.0", "255.255.255.4"],
        a: 1,
      },
      {
        q: "Hãy cho biết địa chỉ 182.18.8.1 thuộc lớp nào trong các phương án sau đây?",
        o: ["Lớp C", "Lớp B", "Lớp D", "Lớp A"],
        a: 1,
      },
      {
        q: "Một mạng lớp B mượn 5 bit để chia subnet, hãy xác định Subnet mask của mạng là bao nhiêu trong các phương án sau đây?",
        o: [
          "255.255.248.0",
          "255.255.255.1",
          "255.255.255.248",
          "255.255.255.128",
        ],
        a: 0,
      },
      {
        q: "Để chia thành 5 mạng con của 1 địa chỉ lớp C, ta sử dụng Subnet Mask nào trong các phương án sau đây?",
        o: [
          "255.0.0.224",
          "255.255.255.224",
          "255.255.224.255",
          "255.225.255.0",
        ],
        a: 1,
      },
      {
        q: "Hãy xác định phương thức định tuyến nào sau đây có thể tính toán đường đi ngắn nhất độc lập?",
        o: [
          "Vector khoảng cách (DistanceVector).",
          "Trạng thái liên kết (Link state).",
          "Định tuyến tĩnh (Static routing)",
          "Không tồn tại phương thức này.",
        ],
        a: 0,
      },
      {
        q: "Hãy xác định chiều dài giới hạn của các dây cáp xoắn đôi khi tách xoắn là bao nhiêu trong các phương án sau đây?",
        o: ["5 cm", "10cm", "< 5cm", "20 cm"],
        a: 1,
      },
      {
        q: "Đâu là subnet mask của lớp C?",
        o: ["255.255.255.0", "255.0.0.0", "255.255.0.0", "225.255.255.255"],
        a: 0,
      },
      {
        q: "Địa chỉ nào được dành riêng cho những chức năng Loopback cục bộ?",
        o: ["1.0.0.0", "121.0.0.0", "0.0.0.0", "127.0.0.0"],
        a: 3,
      },
      {
        q: "Địa chỉ 19.219.255.255 là địa chỉ gì?",
        o: [
          "Broadcast lớp A",
          "Broadcast lớp B",
          "Subnet mask lớp A",
          "Subnet mask lớp B",
        ],
        a: 0,
      },
      {
        q: "Một mạng con lớp A mượn 1 bit để chia Subnet thì Subnet Mask sẽ là?",
        o: ["255.255.128.0", "255.255.128.0", "255.128.0.0", "255.255.255.240"],
        a: 2,
      },
      {
        q: "Trong địa chỉ lớp B, một mạng cần chia thành 9 mạng con, sử dụng Subnet mask là?",
        o: ["255.255.240.0", "255.224.255.0", "255.255.255.224", "255.0.0.255"],
        a: 0,
      },
      {
        q: "Đại chỉ lớp C được phép mượn tối đa bao nhiêu bit cho Subnet?",
        o: ["2", "4", "8", "6"],
        a: 3,
      },
      {
        q: "Trong địa chỉ lớp C, một mạng cần chia thành 3 mạng con thì phải sử dụng Subnet Mask nào sau đây?",
        o: ["255.255.255.1", "255.255.255.224", "255.255.224.0", "255.0.0.255"],
        a: 1,
      },
      {
        q: "Địa chỉ Broadcast của lớp C là?",
        o: [
          "221.218.2.255",
          "190.12.2.255",
          "190.44.255.255",
          "129.219.145.255",
        ],
        a: 0,
      },
      {
        q: "Địa chỉ lớp B được phép mượn tối đa bao nhiêu bit cho Subnet?",
        o: ["14", "2", "6", "8"],
        a: 0,
      },
      {
        q: "Địa chỉ IP nào sau đây là địa chỉ quảng bá cho một mạng bất kỳ ?",
        o: [
          "10.16.1.255",
          "12.255.255.255",
          "255.255.255.255",
          "230.20.30.255",
        ],
        a: 2,
      },
      {
        q: "Phương thức nào cho phép thiết bị Router truyền bảng chỉ đường của mình cho các router khác cập nhật?",
        o: [
          "Không tồn tại phương thức này",
          "Trạng thái liên kết",
          "Vector khoảng cách",
          "Định tuyến tĩnh",
        ],
        a: 1,
      },
      {
        q: "Trong mô hình OSI, thiết bị nào hoạt động ở tầng vật lý?",
        o: ["Modem", "Bridge", "Repeater", "Switch"],
        a: 2,
      },
      {
        q: "Giao thức định tuyến nào tính toán đường đi ngắn nhất độc lập?",
        o: [
          "Link state",
          "DistanceVector",
          "Không có phương thức nào",
          "Static routing",
        ],
        a: 1,
      },
      {
        q: "Chức năng chung của các giao thức định tuyến là gì?",
        o: [
          "Lựa chọn đường đi được coi là ' ngắn nhất'",
          "Tất cả đều đúng",
          "Gửi gói tin trên mạng",
          "Trao đổi thông tin định tuyến",
        ],
        a: 1,
      },
      {
        q: "Trong mô hình TCP/IP, giao thức TCP hoạt động cùng tầng với các giao thức nào?",
        o: ["UDP", "ARP", "IP", "FTP"],
        a: 0,
      },
      {
        q: "Xác định Mask default của địa chỉ 122.50.30.4 là?",
        o: ["255.255.255.0", "255.0.0.0", "255.255.0.0", "255.255.255.4"],
        a: 2,
      },
      {
        q: "Mỗi mạng muốn hoạt động trong môi trường liên mạng thì cần phải đăng ký gì?",
        o: [
          "Một địa chỉ mạng",
          "Một địa chỉ IP",
          "Một địa chỉ IPX",
          "Một địa chỉ default gateway",
        ],
        a: 3,
      },
      {
        q: "Chọn một phát biểu đúng?",
        o: [
          "Mỗi card mạng có một địa chỉ IP cố định",
          "Mỗi thiết bị trong mạng có một địa chỉ IP cố định",
          "Địa chỉ IP là duy nhất trong một hệ thống mạng",
          "Địa chỉ IP được thiết lập từ nhà sản xuất",
        ],
        a: 2,
      },
      {
        q: "Địa chỉ IP 190.50.1.2?",
        o: ["Thuộc lớp A", "Thuộc lớp B", "Là địa chỉ riêng", "Thuộc lớp C"],
        a: 1,
      },
      {
        q: "Địa chỉ nào sau đây thuộc lớp A?",
        o: ["100.1.1.10", "192.34.14.10", "140.8.8.8", "20.5.6.7"],
        a: 0,
      },
      {
        q: "Muốn chia sẻ ẩn một thư mục nằm trong ổ đĩa với tên MangMayTinh, trong ô share name, ta nhập chuỗi ký tự nào sau đây?",
        o: ["MangMayTinh #", "MangMayTinh\\", "MangMayTinh%", "MangMayTinh$"],
        a: 3,
      },
      {
        q: "Một mạng con lớp B mượn 5 bit để chia subnet thì Subnet mask là?",
        o: [
          "255.255.248.0",
          "255.255.255.248",
          "255.255.255.1",
          "255.255.255.128",
        ],
        a: 0,
      },
      {
        q: "Một mạng có địa chỉ lớp B cần chia thành 3 mạng con, ta sử dụng Subnet mask nào?",
        o: ["255.0.0.255", "255.255.1 .0", "255.255.224.0", "255.255.255.224"],
        a: 2,
      },
      {
        q: "Giao thức RIP hoạt động theo phương thức định tuyến nào?",
        o: [
          "Vector khoảng cách",
          "Trạng thái liên kết",
          "Định tuyến tĩnh",
          "Tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "IEEE được viết tắt của cụm từ nào sau đây",
        o: [
          "Institute of Electrical and Electronics Engineers",
          "Institute of Electrical and Electronics Editting",
          "Internation of Electrical and Electronics Engineers",
          "Institute Electrical and Electronics Engineers",
        ],
        a: 0,
      },
      {
        q: "CIDR viết tắt của cụm từ nào sau đây?",
        o: [
          "Classless Inter Domain Routing",
          "Classless Inter Dos Routing",
          "Class Inter Domain Routing",
          "Clear Inter Domain Routing",
        ],
        a: 0,
      },
      {
        q: "Một địa chỉ IP được viết 200.23.16.0/23 có ý nghĩa gì?",
        o: [
          "Sử dụng 23 bit cho Net Id",
          "Sử dụng 23 bit cho Host Id",
          "Không thể viết dưới dạng địa chỉ đó",
          "200.23.16.0 là địa chỉ mạng, 23 là địa chỉ máy",
        ],
        a: 0,
      },
      {
        q: "Địa chỉ mạng con (Subnet Address) được sử dụng từ năm nào?",
        o: ["1984", "1985", "1990", "1995"],
        a: 1,
      },
      // phần 2

      {
        q: "Phân loại theo khu vực địa lý thì có mấy loại mạng máy tính?",
        o: ["4", "1", "2", "3"],
        a: 0,
      },
      {
        q: 'Mạng cục bộ "LAN" được viết tắt cho cụm từ nào?',
        o: [
          "Local Area Connection",
          "Local Area Net",
          "Local Area Name",
          "Local Area Network",
        ],
        a: 3,
      },
      {
        q: "Chọn định nghĩa đúng nhất về mô hình mạng ngang hàng (Peer to Peer)?",
        o: [
          "Mạng ngang hàng cung cấp kết nối cơ bản giữa các máy tính nhưng không có máy tính nào đóng vai trò phục vụ",
          "Mạng ngang hàng cung cấp kết nối cơ bản giữa các máy tính đóng vai trò Server",
          "Mạng ngang hàng cung cấp kết nối cơ bản giữa các máy tính, trong đó có 1 máy tính đóng vai tro phục vụ",
          "Mạng ngang hàng cung cấp kết nối cơ bản giữa các máy tính đóng vai trò client",
        ],
        a: 0,
      },
      {
        q: "Các trạm hoạt động trong một mạng vừa như máy phục vụ(Server) vừa như máy khách(Client) có thể tìm thấy ở mạng nào?",
        o: ["LAN", "Ethernet", "Client - server", "Peer to Peer"],
        a: 3,
      },
      {
        q: "Mô hình mạng nào có máy phục vụ cung cấp các tài nguyên và dịch vụ cho các máy máy khách trong mạng?",
        o: ["Ethernet Peer ", "LAN", "Server", " to Peer Client"],
        a: 0,
      },
      {
        q: "Topo mạng cục bộ nào mà tất cả các trạm phân chia chung một đường truyền chính?",
        o: ["Star", "Hybird", "Ring", "Bus"],
        a: 3,
      },
      {
        q: "Có những hình trạng mạng Lan thông dụng (Topology Lan) nào?",
        o: ["Ethernet", "Ring,Star,Bus", "Client - Server ", "Peer to Peer"],
        a: 1,
      },
      {
        q: "Công nghệ mạng Lan nào sử dụng phổ biến hiện nay?",
        o: ["ADSL", "FDDI", "Ethernet", "Token ring"],
        a: 2,
      },
      {
        q: "Hiện nay có những loại đường truyền nào trong mạng LAN?",
        o: [
          "Sóng viba, hồng ngoại, sóng vô tuyền(radio) ",
          "Cáp đồng trục, cáp xoắn đôi",
          "Tất cả các đáp án trên",
          "Cáp quang, sóng vố tuyến",
        ],
        a: 2,
      },
      {
        q: "Có mấy loại kỹ thuật chuyển mạch trong mạng LAN?",
        o: ["1", "4", "2", "3"],
        a: 3,
      },
      {
        q: 'Phương pháp đa truy nhập sử dụng sóng mang có phát hiện xung đột CSMA/CD, trong đó " CSMA/CD " được viết tắt cho cụm từ nào?',
        o: [
          "Console Sense Multiple Access With Collision Detection",
          "Carrier Sense Multiple Access With Control Data",
          "Carrier Sense Multiple Access With Collision Detection ",
          "Carrier Sense Multiple Access With Collision Data",
        ],
        a: 2,
      },
      {
        q: "Có mấy loại chuẩn hóa mạng?",
        o: ["4", "2", "1", "3"],
        a: 1,
      },
      {
        q: "Mô hình tham chiếu OSI có mấy lớp?",
        o: ["7", "3", "5", "4"],
        a: 0,
      },
      {
        q: "Lớp nào cung cấp các phương tiện để người sử dụng có thể truy nhập được vào môi trường OSI và cung cấp các dịch vụ thông tin phân tán?",
        o: ["Application  ", "Transport", "Session", "Presentation"],
        a: 0,
      },
      {
        q: "Tầng 2 trong mô hình OSI tách luồng bit từ tầng vật lý chuyển lên thành?",
        o: ["Packet ", "Frame", "Segment", " PSU"],
        a: 1,
      },
      {
        q: "Các đơn vị dữ liệu trong giao thức lớp 2 của mô hình OSI được gọi là?",
        o: ["Segment", "Packet", "Frame", "PSU"],
        a: 2,
      },
      {
        q: "Các đơn vị dữ liệu trong giao thức lớp 3 của mô hình OSI được gọi là?",
        o: ["Segment ", "Packet", "Frame", " PSU"],
        a: 1,
      },
      {
        q: "Các đơn vị dữ liệu trong giao thức lớp 7 của mô hình OSI được gọi là?",
        o: ["Frame", "Data  ", "Packet", "Segment"],
        a: 1,
      },
      {
        q: "Thiết bị chọn đường (Router) hoạt động ở lớp nào trong mô hình OSI?",
        o: [
          "Tầng ứng dụng (Application Layer)",
          "Tầng mạng (Network Layer)",
          "Tầng vận chuyển (Transport Layer)",
          "Tầng liên kết dữ liệu (Data link Layer)",
        ],
        a: 1,
      },
      {
        q: "IEEE là gì?",
        o: [
          "Là tổ chức trong lĩnh vực cấp phép sản xuất thiết bị mạng",
          "Là tổ chức quản lý tên miền trên mạng",
          "Là tổ chức trong lĩnh vực chuẩn hoá mạng cục bộ",
          " Là tổ chức quản lý các chuẩn giao thức mạng",
        ],
        a: 2,
      },
      {
        q: "IEEE 802.3 là chuẩn đặc tả gì?",
        o: [
          "Kiến trúc mạng",
          "Mạng cục bộ với Tôp mạng dạng Bus",
          "Tầng dịch vụ giao thức của mạng",
          "Mạng cục bộ dựa trên mạng Ethernet",
        ],
        a: 3,
      },
      {
        q: "IEEE 802.11 là chuẩn đặc tả gì?",
        o: [
          "Mạng cục bộ với Tôp mạng dạng Ring",
          "Mạng cục bộ không dây ",
          "Mạng cục bộ dựa trên mạng Ethernet",
          "Kiến trúc mạng",
        ],
        a: 1,
      },
      {
        q: "Mô hình OSI được chia thành bao nhiêu lớp?",
        o: ["6", "8", "5", "7"],
        a: 3,
      },
      {
        q: "Các giao thức TCP và UDP làm việc trên lớp bào trong mô hình tham chiếu OSI?",
        o: ["Physical  ", "Transport", "Data link", "Application"],
        a: 1,
      },
      {
        q: "Đối với lớp Mạng trong mô hình tham chiếu OSI, chúng ta có thể phát biểu?",
        o: [
          "Nó chịu trách nhiệm mã hoá các gói dữ liệu mạng",
          "Tất cả đều đúng",
          "Các router làm việc trên lớp này",
          "Nó chịu trách nhiệm cho việc định tuyến các gói tin cần đưa đến đích",
        ],
        a: 1,
      },
      {
        q: "Lớp nào trong mô hình tham chiếu OSI có trách nhiệm mã hóa và nén dữ liệu?",
        o: ["Session", "Presentation  ", "Application", "Data link"],
        a: 1,
      },
      {
        q: "Các giao thức HTTP, DNS, FTP và SMTP làm việc trên lớp nào trong mô hình OSI?",
        o: ["Application ", "Session", "Data link", " Presentation"],
        a: 0,
      },
      {
        q: "Lớp nào trong mô hình tham chiếu OSI nó ghi rõ các thông tin chi tiết về môi trường truyền dẫn, mức điện áp, điều khiển, cáp kết nối,  ?",
        o: ["Physical  ", "Network", "Transport", "Data link"],
        a: 0,
      },
      {
        q: "Các Switch có khả năng đọc trường địa chỉ MAC từ các khung gửi dữ liệu đến chúng. Vậy chúng ta có thể nói rằng chúng làm việc trên lớp nào trong mô hình tham chiếu",
        o: ["Transport  ", "Data link", "Physical", "Session"],
        a: 1,
      },
      {
        q: "Khi gửi đi một gói dữ liệu vào mạng (đến từ các lớp cao hơn), lớp Sessions sẽ xử lý yêu cầu này, đưa thêm vào các bit thông tin chịu trách nhiệm cho việc gửi gói dữ liệu đến đúng lớp bên dưới nó, đó là lớp?",
        o: ["Network", "Transport  ", "Application", "Presentation"],
        a: 1,
      },
      {
        q: "Khi nhận một gói dữ liệu từ mạng (đến từ các lớp thấp hơn), lớp Mạng sẽ xử lý yêu cầu này tách bớt các bit thông tin cần thiết và gửi gói đó lên lớp cao hơn ở trên nó, đó là lớp?",
        o: ["Presentation ", "Transport", "Session", "Data link "],
        a: 1,
      },
      {
        q: "Trong mô hình OSI, giao thức ARP thuộc tầng",
        o: ["Data link", "Session", "Network", "Presentation"],
        a: 2,
      },
      {
        q: "Mô hình TCP/IP có mấy lớp?",
        o: ["5", "4", "2", "3"],
        a: 1,
      },
      {
        q: "Mô hình TCP/IP gồm những lớp nào?",
        o: [
          "Physical, Data link, Network, Transport",
          "	Network access, Internet, Transport, Application ",
          "Network access, Internet, Network, Transport",
          " Physical, Data link, Transport, Application",
        ],
        a: 1,
      },
      {
        q: "Địa chỉ IP dài bao nhiêu Bit?",
        o: ["16", "126", "32", "256"],
        a: 2,
      },
      {
        q: "Địa chỉ IP chia làm mấy phần?",
        o: [
          "1 phần là: địa chỉ mạng",
          "Không chia",
          "1 phần là: địa chỉ máy",
          "2 phần là : địa chỉ mạng và địa chỉ máy",
        ],
        a: 3,
      },
      {
        q: "Địa chỉ lớp A nhận trong khoảng nào?",
        o: [
          "1.0.0.0 đến 127.0.0.0",
          "1.0.0.0 đến 191.255.0.0",
          "1.0.0.0 đến 128.0.0.0",
          "1.0.0.0 đến 223.255.255.0",
        ],
        a: 0,
      },
      {
        q: "Địa chỉ lớp B nhận trong khoảng nào?",
        o: [
          "128.0.0.0 đến 240.0.0.0",
          "128.0.0.0 đến 191.255.0.0",
          "1.0.0.0 đến 127.0.0.0",
          "128.0.0.0 đến 192.0.0.0",
        ],
        a: 1,
      },
      {
        q: "Giao thức TCP có định hướng kết nối không?",
        o: ["Có", "Không", "", ""],
        a: 0,
      },
      {
        q: "Giao thức UDP có định hướng kết nối không?",
        o: ["Không", "Có", "", ""],
        a: 0,
      },
      {
        q: "Phần cứng trong router Cisco có NVRAM, FLASH tương đương với thành phần nào trong máy PC?",
        o: ["HDD  ", "RAM", "MAIN", "CPU"],
        a: 0,
      },
      {
        q: "Phần cứng trong Router Cisco, đầy đủ là gồm?",
        o: [
          "MAIN, CPU, RAM, FLASH",
          "MAIN, CPU, RAM, NVRAM, FLASH",
          "MAIN, CPU, RAM,NVRAM",
          " MAIN, CPU, RAM",
        ],
        a: 1,
      },
      {
        q: "Trong router, nơi nào lưu file cấu hình: Startup config?",
        o: ["FLASH  ", "NVRAM", "RAM", "CPU"],
        a: 1,
      },
      {
        q: "Tên phần mềm giả lập mạng, được hãng Cisco cung cấp, dùng trong học tập sử dụng các thiết bị mạng của Cisco ?",
        o: [
          "Packet Tracer  ",
          "NetSim Standard",
          "Advanced IP Scanner",
          "Network Simulator",
        ],
        a: 0,
      },
      {
        q: "Cáp Console kết nối từ Router hoặc Switch đến máy tính, trên máy tính sẽ là cổng nào?",
        o: ["Cổng DisplayPort", "Cổng VGA", "Cổng LAN", "Cổng COM"],
        a: 3,
      },
      {
        q: "Trong các cổng sau, cổng nào chỉ hỗ trợ trên Router, cho phép kết nối từ xa thông qua đường truyền Modem, ít được sử dụng.",
        o: ["TELNET", "SSH", "AUX", "CONSOLE"],
        a: 2,
      },
      {
        q: "Cáp có một đầu là cổng COM để cắm vào máy tính, một đầu cáp là cổng RJ45 kết nối với Router .Hỏi cáp đó dùng để kết nối cổng gì trên Router ?",
        o: [" SSH", "CONSOLE ", "AUX", "TELNET"],
        a: 1,
      },
      {
        q: "Phát biểu nào sau đây là đúng về sự so sánh hai loại kế nối Telnet và SSH?",
        o: [
          "Kết nối Telnet và SSH đều không hỗ trợ bảo mật, tốc độ tương đương",
          "Kết nối Telnet có tốc độ chậm hơn, nhưng hỗ trợ bảo mật tốt hơn SSH",
          "Kết nối Telnet có tốc độ nhanh hơn, nhưng hỗ trợ bảo mật kém hơn SSH ",
          "Kết nối Telnet và SSH đều có hỗ trợ bảo mật tốt, tốc độ tương đương",
        ],
        a: 2,
      },
      {
        q: "Hệ điều hành Cisco IOS cung cấp cho các thiết bị với các dịch vụ mạng gì?",
        o: [
          "Chức năng định tuyến và chuyển mạch, tin cậy và truy cập bảo mật vào tài nguyên mạng",
          "Chức năng định tuyến và chuyển mạch, tin cậy và truy cập bảo mật vào tài nguyên mạng, khả năng mở rộng hệ thống",
          "Chức năng định tuyến và chuyển mạch, khả năng mở rộng hệ thống",
          "Tin cậy cà truy cập bảo mật vào tài nguyên mạng, khả năng mở rộng hệ thống",
        ],
        a: 1,
      },
      {
        q: "Quá trình khởi động của Router?",
        o: [
          "Điện sẽ được nạp vào ROM , kiểm tra các thiết bị phần cứng , IOS sẽ được load từ bộ nhớ Flash , Bootstrap sẽ liên lạc với 10s , IOS và Startup Config được load vào RAM tạo thành file chạy Running config , file cấu hình được copy từ bộ nhở NVRAM .",
          "Điện sẽ được nạp vào ROM , kiểm tra các thiết bị phần cứng , Bootstrap sẽ liên lạc với IOS , IOS sẽ được load từ bộ nhớ Flash , file cấu hình được copy từ bộ nhớ NVRAM , IOS và Startup Config được load vào RAM tạo thành file chạy Running config .",
          "Điện sẽ được nạp vào ROM , kiểm tra các thiết bị phần cứng , IOS sẽ được load từ bộ nhớ Flash , file cấu hình được Copy từ bộ nhớ NVRAM , Bootstrap sẽ liên lạc với IOS , IOS và Startup Config được load vào RAM tạo thành file chạy Running config .",
          "Điện sẽ được nạp vào ROM , kiểm tra các thiết bị phần cứng , Bootstrap sẽ liên lạc với IOS , IOS sẽ được load từ bộ nhớ Flash , IOS và Startup Config được load vào RAM tạo thành file chạy Running config , file cấu hình được copy từ bộ nhớ NVRAM .",
        ],
        a: 1,
      },
      {
        q: "Vị trí PIN trên loại cáp chéo (tương tự 1 đầu chuẩn T-568A, 1 đầu chuẩn T-568B)?",
        o: [
          "	pin 1 - pin 3, pin 2 - pin 6, pin 3- pin 1, pin 4 - pin 4, pin 5 - pin 5, pin 6 - pin 2, pin 7 - pin 7, pin 8 pin 8",
          "Pin 1- Pin 2, Pin 2 - Pin 1, Pin 3 - Pin 6, Pin 4 - pin 4, pin 5 - pin 5, pin 6 - pin 3, pin 7 - pin 7, pin 8 -pin 8",
          "pin 1 - pin 1, pin 2 - pin 2, pin 3 - pin 3, pin 4 - pin 4, pin 5 - pin 5, pin 6 - pin 6, pin 7 - Pin 7, Pin 8-pin 8",
          "pin 1 - pin 4, pin 2 - pin 6 , pin 3 -pin 3, pin 4 -pin1, pin 5 - pin 5, pin 6 - pin 2, pin 7 - pin 7, pin 8 -pin 8",
        ],
        a: 0,
      },
      {
        q: "Telnet và SSH kết nối tới Router hay Switch thông qua cổng nào?",
        o: ["Cổng Serial Ports ", "Cổng mạng", "Cổng AUX", "Cổng Console"],
        a: 1,
      },
      {
        q: "Router là thiết bị thuộc lớp nào của mô hình OSI",
        o: [
          "Transport Layer",
          "Network Layer  ",
          "Data-link layer",
          "Physical Layer",
        ],
        a: 1,
      },
      {
        q: "Trong cấu hình Router, Mode đầu tiên khi Telnet truy cập, Mode này bị giới hạn chỉ có thể sử dụng một số lệnh như ping hay ssh, là Mode gì?",
        o: ["Mode user ", "Mode vào cổng", "Mode Previlidge", " Mode cấu hình"],
        a: 0,
      },
      {
        q: "Trong cấu hình Router, User Mode (chế độ User) có ký hiệu thế nào?",
        o: ["Router>", " Router(config)#", " Router#", "Router(config)"],
        a: 0,
      },
      {
        q: "Trong cấu hình Router, Previlidge Mode (chế độ Previlidge) có ký hiệu thế nào",
        o: ["Router# ", "Router(config)# ", "Router(config-if)#", "Router>"],
        a: 0,
      },
      {
        q: "Trong cấu hình Router, Global Configuration Mode (Chế độ Global Configuration) có ký hiệu thế nào?",
        o: ["Router# ", "Router(config)# ", "Router(config-if)#", "Router>"],
        a: 1,
      },
      {
        q: "Trong cấu hình Router, nếu đầu dòng lệnh đang ở ký hiệu: Router(config-if)#, thì đang ở chế độ nào?",
        o: [
          "Chế độ Previlidge",
          "Chế độ User",
          "Chế độ Global Configuration",
          "Chế độ Interface Configuratioon Mode",
        ],
        a: 3,
      },
      {
        q: "Dòng lệnh sau dùng để làm gì: Router(config)# line vty 0 4",
        o: [
          "Vào chế độ line console  ",
          "Vào chế độ line vty để cho phép telnet",
          "Vào chế độ line auxiliary",
          "không có đáp án đúng",
        ],
        a: 1,
      },
      {
        q: "Dòng lệnh sau dùng để làm gì: Router# configure terminal",
        o: [
          "Vào chế độ Global Configuration",
          "Vào chế độ Previlidge",
          "Vào chế độ Interface Configuratioon Mode",
          "Vào chế độ User",
        ],
        a: 0,
      },
      {
        q: "Dòng lệnh sau dùng để làm gì: Router> enable ",
        o: [
          "Chuyển vào chế độ Privileged",
          " Chuyển vào chế độ User",
          "Chuyển chế độ Interface Configuration Mode",
          " Chuyển chế độ Global Configuration",
        ],
        a: 0,
      },
      {
        q: "Tại 01 domain member bất kì , thực hiện lệnh ping IP public và nhận được reply, nhưng các domain member không thể truy cập internet. Trình bày cách khắc phục?",
        o: [
          "Chưa khai báo default getway trên DNS server ",
          "Chưa khai báo địa chỉ IP trên adress trên DNS server",
          "Chưa khai báo Preferrent DNS trên DNS server",
          "Chưa khai báo Subnet mask trên DNS server",
        ],
        a: 0,
      },
      {
        q: "Chức năng chính của bản ghi DNS record Cname",
        o: [
          "Chỉ ra toàn bộ DNS Server trong Domain",
          "Chỉ ra Primary DNS server",
          "chỉ ra ánh xạ Domain tành địa chỉ IP",
          "Chỉ ra tên miền có nhiều bí danh để truy cập vào",
        ],
        a: 0,
      },
      {
        q: "Chức năng chính của bản ghi DNS record A",
        o: [
          "Chỉ ra Primary DNS server",
          "Chỉ ra ánh xạ Domain thành địa chỉ IP ",
          "Chỉ ra dịch vụ sử dụng máy tính sử dụng",
          "Chỉ ra toàn bộ DNS server trong Domain",
        ],
        a: 1,
      },
      {
        q: "Chức năng chính của bản ghi DNS record Name Server(NS)",
        o: [
          "Chỉ ra dịch vụ máy tính sử dụng",
          "Chỉ ra Primary DNS Server",
          "Chỉ ra tên máy tính",
          "Chỉ ra toàn bộ DNS Server domain",
        ],
        a: 3,
      },
      {
        q: "Chức năng chính của bản ghi DNS record Start Of Authority(SOA)",
        o: [
          "Chỉ ra toàn bộ DNS Server domain",
          "Chỉ ra Primary DNS Server ",
          "Chỉ ra dịch vụ máy tính sử dụng",
          "Chỉ ra tên máy tính",
        ],
        a: 1,
      },
      {
        q: "DNS record SOA là viết tắt của từ nào sau đây?",
        o: [
          "Start Of Auther",
          "Start Of Authen",
          "Start Of Authority",
          "Start Of Autthor",
        ],
        a: 2,
      },
      {
        q: "Trình bày cách truy vấn để biết được tên và địa chỉ IP SMTP mail server của một domain. A.Nslookup>Set type=CNAME<gõ tên domain muốn truy vấn mail server của nó> D.Nslookup>Set type=SOA<gõ tên domain muốn truy vấn mail server của nó>",
        o: [
          "Nslookup>Set type=CNAME<gõ tên domain muốn truy vấn mail server của nó>",
          "Nslookup>Set type=SOA<gõ tên domain muốn truy vấn mail server của nó>",
          "Nslookup>Set type=MX",
          "Nslookup>Set type=NS<gõ tên domain muốn truy vấn mail server của no>",
        ],
        a: 2,
      },
      {
        q: "Trình bày cách truy vấn để biết được tên và địa chỉ IP primary DNS server của một domain.",
        o: [
          "Nslookup>Set type=NS<gõ tên domain muốn truy vấn mail server của no>",
          "Nslookup>Set type=SOA",
          "Nslookup>Set type=CNAME<gõ tên domain muốn truy vấn mail server của nó>",
          "Nslookup>Set type=MX<gõ tên domain muốn truy vấn mail server của nó>",
        ],
        a: 1,
      },
      {
        q: "Trình bày cách truy vấn để biết được tên và địa chỉ IP các DNS server của một domain.",
        o: [
          "Nslookup>Set type=SOA<gõ tên domain muốn truy vấn mail server của nó>",
          "Nslookup>Set type=NS",
          "Nslookup>Set type=CNAME<gõ tên domain muốn truy vấn mail server của nó>",
          "Nslookup>Set type=MX<gõ tên domain muốn truy vấn mail server của nó>",
        ],
        a: 1,
      },
      {
        q: "Giao thức DNS làm việc ở tầng nào trong mô hình OSI?",
        o: [
          "Network Layer",
          "Session Layer",
          "Applicaton Layer",
          "Transport Layer",
        ],
        a: 2,
      },
      {
        q: "Trong dịch vụ DNS, record nào sau đây được dùng trong trường hợp ánh xạ tên miền thành địa chỉ IP?",
        o: ["CNAME", "PTR", "A", "MX"],
        a: 2,
      },
      {
        q: "MX Record dùng để làm gì?",
        o: [
          "Dùng cho mạng Lan",
          "Dùng cho dịch vụ chuyển mail",
          "Dùng cho dịch vụ FTP",
          "Định chuyển gói tin",
        ],
        a: 1,
      },
      {
        q: "Record nào sau đây hỗ trợ cơ chế chứng thực cho miền?",
        o: ["SOA Record", "SOS Record", "SOV Record", "SRV Record"],
        a: 0,
      },
      {
        q: "Tên FQND (fully qualified domain name) được hiểu như là tên DNS …",
        o: ["Host name", "Đầy đủ", "Tên gọi tắt", "Server name"],
        a: 1,
      },
      {
        q: "Phương thức nào sau đây là phương thức ánh xạ tên miền tới địa chỉ IP có tần suất thay đổi cao",
        o: ["DNS Server", "Dynamic DNS", "Dynamic Routing", "DNS Lookup"],
        a: 1,
      },
      {
        q: "Lệnh nào dùng để kiểm tra dịch vụ DNS?",
        o: ["Nslookup", "Ping", "Ipconfig", "Net map"],
        a: 0,
      },
      {
        q: "Các loại Resource Record nào sau đây được mô tả trong DNS",
        o: ["NS", "MS", "Name server(NS)", "NAMED"],
        a: 2,
      },
      {
        q: "Dịch vụ DNS Server có chức năng chính là gì?",
        o: [
          "Phân giải tên netbios",
          "Phân giải tên miền ( IP sang tên miền và ngược lại) ",
          "Tất cả đều sai",
          "Phân giải địa chỉ MAC",
        ],
        a: 1,
      },
      {
        q: "Dòng lệnh sau dùng để làm gì: Router (config)# exit",
        o: [
          "CHuyển về chế độ cấu hình Global",
          "Chuyển về chế độ cấu hinh interface Configuration Mode",
          "Chuyển về chế độ Previlidge",
          "Chuyển về chế độ cấu hình User",
        ],
        a: 2,
      },
      {
        q: "Dòng lệnh sau dùng để làm gì: Router(config-line)# exit",
        o: [
          "Chuyển về chế độ Previlidge",
          "CHuyển về chế độ cấu hình Global",
          "Chuyển về chế độ cấu hình interface Configuration Mode",
          "Chuyển về chế độ cấu hình User",
        ],
        a: 1,
      },
    ],
  },
];

export default QUIZ_SETS_QTM;
