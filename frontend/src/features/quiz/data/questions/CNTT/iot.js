const QUIZ_SETS_IOT = [
  // ---------------------------------------------------------------
  // IOT
  // ---------------------------------------------------------------
  {
    id: "iot",
    majorId: "cntt",
    title: "Internet vạn vật",
    description: "Bộ câu hỏi trắc nghiệm Internet of Things (IoT)",
    questions: [
      // ===== PHẦN 1 =====
      {
        q: "Giao thức MQTT là viết tắt của những chữ nào?",
        o: [
          "Message Query Telemetry Transport",
          "MetaQuery Telemetry Transport",
          "Multiple Query Telemetry Transport",
          "Multi-Queue Query Telemetry Transport",
        ],
        a: 0,
      },
      {
        q: "Ai đặt ra thuật ngữ IoT?",
        o: ["Kevin Ashton", "IBM", "Ross Ihaka", "Guido van Rossum"],
        a: 0,
      },
      {
        q: "Trong Cảm biến lực Loadcell, thành phần thân loadcell là gì?",
        o: [
          "Là một thanh kim loại chịu tải có tính đàn hồi, thường là hợp kim nhôm",
          "Là một loại điện trở đặc biệt. Được cấp nguồn điện và giá trị điện trở thay đổi khi bị tác động lực lên nó",
          "Là một hình thanh kim loại vòng tròn cố định trên thiết bị, có khả năng chịu tải tốt chuyên truyền điện và nhiệt",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Thiết bị nào không phải thiết bị mạng?",
        o: ["Traffic analyzer", "Bridge", "Switch", "Router"],
        a: 0,
      },
      {
        q: "Công nghệ cảm biến hình ảnh nào cần ít điện năng hơn?",
        o: ["CMOS", "CCD", "ADC", "Nikon Coolpix"],
        a: 0,
      },
      {
        q: "Chip xử lý hình ảnh CMOS viết tắt là gì?",
        o: [
          "Complementary Metal Oxide Semiconductor",
          "Complementary Metal Oxide Silicon",
          "Complementary Metal Oxide Substrate",
          "Cargo Movement Operating System",
        ],
        a: 0,
      },
      {
        q: "Thông số kỹ thuật quan trọng của cảm biến hình ảnh?",
        o: [
          "Độ phân giải, kích thước điểm ảnh",
          "Độ nhạy sáng, tốc độ phản hồi",
          "Độ lệch màu",
          "Tất cả phương án",
        ],
        a: 3,
      },
      {
        q: "Hệ thống nhúng được thiết kế để thực hiện nhiệm vụ chuyên dụng nào?",
        o: [
          "Đảm bảo tính an toàn và ứng dụng trong các lĩnh vực cụ thể",
          "Tối ưu hóa hiệu suất và giảm thiểu chi phí sản xuất",
          "Tăng cường tính linh hoạt và đa dạng của hệ thống",
          "Tất cả các phương án trên",
        ],
        a: 0,
      },
      {
        q: "DHCP sử dụng giao thức lớp vận chuyển nào?",
        o: ["UDP", "TCP", "RSVP", "DCCP"],
        a: 0,
      },
      {
        q: "Phát biểu đúng nhất về dữ liệu khi sử dụng IoT là gì?",
        o: [
          "Dữ liệu thu được theo thời gian thực",
          "Dữ liệu thu được hạn chế",
          "Dữ liệu thu được rất khó quan sát",
          "Dữ liệu thu được rất khó phân tích",
        ],
        a: 0,
      },
      {
        q: "Nền tảng Internet of Things?",
        o: [
          "Cho phép các thiết bị và ứng dụng giao tiếp với nhau",
          "Cung cấp các dịch vụ để truy cập, sử dụng hoặc tham gia vào Internet",
          "Cho phép các cá nhân và tổ chức làm cho trang web của họ có thể truy cập được",
          "Không có phát biểu đúng",
        ],
        a: 0,
      },
      {
        q: "Mô hình mạng sử dụng cho ZigBee Smart Energy?",
        o: [
          "Star Topology",
          "Bus Topology",
          "Ring Topology",
          "Không cần mô hình",
        ],
        a: 0,
      },
      {
        q: "Giao thức nhẹ (lightweight protocol) là giao thức nào trong số các giao thức sau?",
        o: ["IP", "CoAP", "HTTP", "MQTT"],
        a: 3,
      },
      {
        q: "Giao thức mạng dùng IPv6, cho phép quy định cơ chế đóng gói bản tin và nén header là giao thức nào?",
        o: ["6LoWPAN", "Zigbee", "Bluetooth", "Z-wave"],
        a: 0,
      },
      {
        q: "Thuật ngữ IoT được đặt ra vào năm nào?",
        o: ["1999", "2000", "2001", "1998"],
        a: 0,
      },
      {
        q: "Hệ thống nhúng được hiểu như thế nào?",
        o: [
          "Là hệ thống tự trị các nhúng trong môi trường hoặc hệ thống mẹ",
          "Là hệ thống kết hợp phần mềm và phần cứng để giải quyết các bài toán chuyên dụng",
          "Là hệ thống có khả năng tự động hóa cao và hoạt động ổn định",
          "Tất cả các phương án trên",
        ],
        a: 3,
      },
      {
        q: "Lợi thế nào không chính xác đối với IoT?",
        o: [
          "Bảo mật",
          "Giảm thiểu lãng phí",
          "Thu thập dữ liệu nâng cao",
          "Cải thiện sự tham gia của khách hàng",
        ],
        a: 0,
      },
      {
        q: "I2C là viết tắt của những chữ nào?",
        o: [
          "Inter-Integrated Communication",
          "Internet Integrated Communication",
          "Integrated Internet Communication",
          "Internet Instigate Communication",
        ],
        a: 0,
      },
      {
        q: "IoT tiến hóa từ sự hội tụ của các công nghệ nào?",
        o: [
          "Công nghệ không dây, hệ thống vi cơ điện tử và Internet",
          "Điện toán di động, dữ liệu lớn và internet",
          "Công nghệ không dây, trí tuệ nhân tạo và dữ liệu lớn",
          "Cảm biến, điện toán đám mây và công nghệ máy học",
        ],
        a: 0,
      },
      {
        q: "Một thiết bị nhận thông tin từ nhiều điểm trên mạng và truyền nó đến một mạng khác là gì?",
        o: ["Cảm biến", "Máy với Máy (M2M)", "Dữ liệu lớn", "Thiết bị đeo tay"],
        a: 0,
      },
      {
        q: "Các công nghệ nào được sử dụng trong IoT?",
        o: ["RFID", "Bluetooth", "Wifi", "Tất cả"],
        a: 3,
      },
      {
        q: "Thành phần nào tham gia vận hành phần tử cốt lõi của IoT?",
        o: ["SaaS", "PaaS", "IaaS", "Nhà cung cấp dịch vụ IoT"],
        a: 3,
      },
      {
        q: "Cơ chế nào giúp bảo đảm tính toàn vẹn dữ liệu trong khi truyền IoT?",
        o: ["WEP", "AES", "FTP", "HTTP"],
        a: 1,
      },
      {
        q: "Tuyên bố nào phù hợp nhất với Internet of Things?",
        o: [
          "Internet of Things bao gồm hàng tỷ thiết bị trên khắp thế giới được kết nối với internet",
          "Internet of Things nhằm mục đích xây dựng phần mềm đáng tin cậy",
          "Internet of Things nhằm kết nối con người và vạn vật",
          "Không có tuyên bố nào phù hợp",
        ],
        a: 0,
      },
      {
        q: "Công nghệ nào sau đây không phải là công nghệ ở lớp liên kết dữ liệu?",
        o: ["HTTP", "UART", "Wifi", "Bluetooth"],
        a: 0,
      },
      {
        q: "Giao thức CoAP sử dụng mô hình truyền thông nào?",
        o: [
          "Publish-subscribe",
          "Request-response",
          "Peer-to-peer",
          "Streaming",
        ],
        a: 1,
      },
      {
        q: "Cảm biến hồng ngoại thụ động có đặc điểm gì?",
        o: [
          "Chỉ phát hiện ra được bức xạ từ các vật thể khác như người, động vật hay nguồn nhiệt, chứ sẽ không phát ra tia hồng ngoại",
          "Phát hiện mọi vật thể, với khoảng cách giới hạn",
          "Khi vật thể đến gần với cảm biến, thiết bị sẽ phát ra ánh sáng hồng ngoại từ đèn Led và sẽ phản xạ vào vật thể trở lại mà người nhận có thể nhận thấy được",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Thiết bị nào sau đây là actuator trong hệ thống IoT?",
        o: ["Nhiệt kế", "Servo motor", "Router", "Bridge"],
        a: 1,
      },
      {
        q: "Giao thông công cộng được hưởng lợi như thế nào từ internet vạn vật?",
        o: [
          "Thông tin từ các thiết bị được kết nối với nhau được sử dụng để cải thiện chất lượng và bảo mật",
          "Nếu tất cả ô tô cá nhân đều có IoT, thì phương tiện giao thông công cộng không còn cần thiết nữa",
          "IoT làm giảm nhu cầu giao thông công cộng trong giờ cao điểm",
          "Thông tin từ các thiết bị được kết nối với nhau được sử dụng để cung cấp dịch vụ được cá nhân hóa",
        ],
        a: 0,
      },
      {
        q: "Mạng IoT có phạm vi ngắn nhất là mạng nào trong các mạng sau?",
        o: ["SigFox", "LPWAN", "Short network", "Short-range wireless network"],
        a: 3,
      },
      {
        q: "NFC (Near-Field Communications) là công nghệ kết nối không dây trong phạm vi tầm ngắn trong khoảng cách?",
        o: ["4 cm", "15 cm", "20 cm", "25 cm"],
        a: 0,
      },
      {
        q: "Trong Cảm biến lực Loadcell, thành phần Strain gauge là gì?",
        o: [
          "Là một loại điện trở đặc biệt. Được cấp nguồn điện và giá trị điện trở thay đổi khi bị tác động lực lên nó",
          "Là một thanh kim loại chịu tải có tính đàn hồi, thường là hợp kim nhôm",
          "Là một hình thanh kim loại vòng tròn cố định trên thiết bị, có khả năng chịu tải tốt chuyên truyền điện và nhiệt",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Lợi ích của việc sử dụng IPv6 trong IoT là gì?",
        o: [
          "Hỗ trợ được nhiều địa chỉ hơn",
          "Giảm tốc độ truyền",
          "Tăng độ trễ",
          "Chỉ sử dụng cho mạng nội bộ",
        ],
        a: 0,
      },
      {
        q: "Ngôn ngữ ưa thích cho phân tích IoT là ngôn ngữ nào?",
        o: ["Python", "HTML", "PHP", "C++"],
        a: 0,
      },
      {
        q: "Công nghệ nhiều lớp cho phép cung cấp, quản lý và tự động hóa đơn giản các thiết bị được kết nối trong IoT?",
        o: [
          "IoT Platform",
          "Machine Learning (ML)",
          "Artificial Intelligence (AI)",
          "Robotic Process Automation (RPA)",
        ],
        a: 0,
      },
      {
        q: "Tổ chức hay ai là người tham gia chính sáng tạo ra Arduino?",
        o: [
          "Sinh viên Hernando Barragan",
          "Eben Upton",
          "Bởi hãng Espressif Systems",
          "Google",
        ],
        a: 0,
      },
      {
        q: "Cổng bảo mật tiêu chuẩn của MQTT là cổng nào?",
        o: ["8000", "8888", "1883", "8883"],
        a: 3,
      },
      {
        q: "Thách thức nào giữa thiết bị IoT với các thiết bị thông minh hoặc thiết bị được kết nối?",
        o: [
          "Giá trị mà chúng mang lại",
          "Chi phí đầu tư",
          "Các cách chúng được sử dụng",
          "Tất cả các ý đều đúng",
        ],
        a: 0,
      },
      {
        q: "Raspberry Pi hỗ trợ trên nền tảng và phần mềm nào?",
        o: ["Raspbian", "Raspbmc", "OSMC", "Tất cả đáp án đều đúng"],
        a: 3,
      },
      {
        q: "Thành phần của hệ thống IoT thực thi một chương trình là gì?",
        o: [
          "Cảm biến",
          "Bộ chuyển đổi kỹ thuật số sang tương tự",
          "Bộ truyền động",
          "Bộ vi điều khiển",
        ],
        a: 3,
      },
      {
        q: "Người được gọi là cha đẻ của IoT là ai?",
        o: [
          "Kevin Ashton",
          "Vinton Gray Cerf",
          "Satoshi Nakamoto",
          "Hal Finney",
        ],
        a: 0,
      },
      {
        q: "NFC có thể truyền dữ liệu ở tốc độ nào?",
        o: [
          "424 Kb/giây",
          "848 Kb/giây",
          "216 Kb/giây",
          "Tất cả các phương án trên",
        ],
        a: 3,
      },
      {
        q: "Thuật ngữ LPWAN là viết tắt của những chữ nào?",
        o: [
          "Low Power Wide Area Network",
          "Low Protocol Wide Area Network",
          "Long Power Wide Area Network",
          "Long Protocol Wide Area Network",
        ],
        a: 0,
      },
      {
        q: "Thiết bị IoT nào dùng để thu thập dữ liệu từ thế giới thực?",
        o: ["Sensors", "Actuators", "Microprocessors", "Microcontrollers"],
        a: 0,
      },
      {
        q: "IoT được hiểu như thế nào so với hệ thống nhúng?",
        o: [
          "IoT là một công nghệ độc lập, trong khi hệ thống nhúng là một phần của IoT",
          "IoT là một hệ thống tổng hợp, trong khi hệ thống nhúng là một phần của hệ thống IoT",
          "IoT là một công nghệ chủ đạo, trong khi hệ thống nhúng chủ yếu tập trung vào việc điều khiển các thiết bị trong một hệ thống cụ thể",
          "IoT là một mạng lưới các thiết bị kết nối qua Internet, trong khi hệ thống nhúng là một tập hợp con của IoT",
        ],
        a: 3,
      },
      {
        q: "Light Sensor/Photoelectric Sensor là tên gọi của cảm biến nào?",
        o: [
          "Cảm biến chuyển động",
          "Cảm biến hạt",
          "Cảm biến rò rỉ",
          "Cảm biến quang",
        ],
        a: 3,
      },
      {
        q: "Arduino đã chính thức được giới thiệu năm?",
        o: ["2005", "2006", "2007", "2008"],
        a: 0,
      },
      {
        q: "Chip xử lý hình ảnh CCD viết tắt là gì?",
        o: [
          "Charge Coupled Device",
          "Computer Controlled Display",
          "Computer Crimes Division",
          "Coarse Control Damper",
        ],
        a: 0,
      },
      {
        q: "Trong ý tưởng về thiết bị di động, điểm hấp dẫn chính của máy tính xách tay khiến nó trở thành thiết bị phổ biến là gì?",
        o: [
          "Máy tính xách tay có chức năng máy tính để bàn có thể mang đi mọi nơi",
          "Chi phí của máy tính xách tay thấp hơn máy tính để bàn",
          "Máy tính xách tay hiệu quả hơn máy tính để bàn",
          "Không câu trả lời nào trong số này đúng",
        ],
        a: 0,
      },
      {
        q: "Cảm biến khói nào sử dụng các chất đồng vị phóng xạ để hoạt động?",
        o: [
          "Cảm biến khói Ion hóa",
          "Cảm biến khói quang điện",
          "Cả (a) và (b) đều đúng",
          "Cả (a) và (b) đều sai",
        ],
        a: 0,
      },
      // ===== PHẦN 2 =====
      {
        q: "Cảm biến quang loại nào sử dụng trong công nghiệp sản xuất và tự động hóa có khả năng phát hiện vật thể khá xa?",
        o: [
          "Cảm biến quang khuếch tán",
          "Cảm biến quang hồng ngoại",
          "Cảm biến gương phản xạ",
          "Tầm xa đều như nhau",
        ],
        a: 0,
      },
      {
        q: "Giao thức được sử dụng để liên kết tất cả các thiết bị trong IoT?",
        o: ["Mạng", "UDP", "HTTP", "TCP/IP"],
        a: 3,
      },
      {
        q: "Phạm vi của Z-Wave có khoảng cách là bao nhiêu mét?",
        o: ["30-100m", "300-1000m", "<10m", "100-1000m"],
        a: 0,
      },
      {
        q: "Các thiết bị IoT phải được cập nhật khi nào?",
        o: [
          "1 tuần cập nhật 1 lần",
          "1 ngày cập nhật 1 lần",
          "1 tháng cập nhật 1 lần",
          "Phải luôn được cập nhật",
        ],
        a: 3,
      },
      {
        q: "Phần cứng của IoT thu thập dữ liệu thông qua việc sử dụng?",
        o: [
          "Khúc xạ ánh sáng",
          "Thiết bị Giám sát",
          "Thiết bị truyền động",
          "Cảm biến",
        ],
        a: 3,
      },
      {
        q: "Đâu là các hãng sản xuất hình ảnh?",
        o: ["AUTONICS", "MISUMI", "SUNX", "Tất cả các ý trên"],
        a: 3,
      },
      {
        q: "5G là gì và vai trò của nó trong IoT là gì?",
        o: [
          "Một loại cảm biến tiên tiến được sử dụng trong IoT",
          "Một dạng phân tích dữ liệu trong IoT",
          "Một mô hình kinh doanh cho các ứng dụng IoT",
          "Tiêu chuẩn kết nối không dây mới với tốc độ nhanh và độ trễ thấp, hỗ trợ việc triển khai IoT",
        ],
        a: 3,
      },
      {
        q: "Tần số của Z-Wave là bao nhiêu GHz?",
        o: ["708,49 GHz", "888,42 GHz", "928,49 GHz", "908,42 GHz"],
        a: 3,
      },
      {
        q: "Zigbee hoạt động chủ yếu ở băng tần nào?",
        o: ["868 MHz", "900 MHz", "2.4 GHz", "5 GHz"],
        a: 2,
      },
      {
        q: "Broker trong MQTT có vai trò gì?",
        o: [
          "Lưu trữ dữ liệu dài hạn",
          "Điều phối tin nhắn giữa các client",
          "Mạng chuyển tín hiệu không dây",
          "Chuẩn hóa định dạng dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Arduino UNO là gì?",
        o: ["Protocol", "Network", "Software", "Hardware device"],
        a: 3,
      },
      {
        q: "Một cảm biến tốt tuân theo quy tắc nào?",
        o: [
          "Nó nhạy cảm với thuộc tính được đo lường",
          "Nó không nhạy cảm đến bất kỳ thuộc tính nào khác có thể gặp trong ứng dụng của nó",
          "Nó không ảnh hưởng đến thuộc tính được đo lường",
          "Tất cả phương án",
        ],
        a: 3,
      },
      {
        q: "Arduino ra đời ở nước nào?",
        o: ["Ý", "Pháp", "Mỹ", "Nga"],
        a: 0,
      },
      {
        q: "Giao thức nào không tồn tại trong tầng liên kết dữ liệu (data link)?",
        o: ["ZigBee Smart Energy", "LoRaWAN", "WirelessHART", "Secure MQTT"],
        a: 3,
      },
      {
        q: "Thành phần nào sau đây không phải là thành phần cơ bản của hệ thống IoT?",
        o: [
          "Máy biến áp",
          "Cảm biến",
          "Giao diện người dùng",
          "Kết nối và xử lý dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Một trong những topology phổ biến của mạng LoRaWAN là gì?",
        o: [
          "Ring topology",
          "Mesh topology",
          "Star-of-stars topology",
          "Bus topology",
        ],
        a: 2,
      },
      {
        q: "Raspberry Pi dùng ngôn ngữ lập trình nào chính thức?",
        o: ["Python", "Java", "C#", "Go"],
        a: 0,
      },
      {
        q: "IoT phải có 2 thuộc tính nào sau đây?",
        o: [
          "Phải có là ứng dụng internet và lấy được thông tin vật chủ",
          "Phải có cảm biến và kết nối bluetooth",
          "Phải có trao đổi dữ liệu và phân tích hệ thống",
          "Không có câu trả lời nào đúng",
        ],
        a: 0,
      },
      {
        q: "Bước cuối cùng của việc truyền dữ liệu đáng tin cậy là gì?",
        o: [
          "Khởi tạo",
          "Chuyển tiếp tin nhắn",
          "Phát hiện tin nhắn bị mất",
          "Phục hồi có chọn lọc",
        ],
        a: 3,
      },
      {
        q: "Mạng nào sau đây không phải là mạng không dây tầm ngắn?",
        o: ["VPN", "Wifi", "Bluetooth", "Điểm phát sóng"],
        a: 0,
      },
      {
        q: "Khi làm việc với UPnP, một thiết bị tự gán cái gì của chính nó?",
        o: [
          "Địa chỉ IP",
          "Địa chỉ gửi thư",
          "Địa chỉ doanh nghiệp",
          "Địa chỉ UPnP",
        ],
        a: 0,
      },
      {
        q: "Dịch vụ nào đã được sử dụng làm mẫu thử các mối đe dọa của trung tâm điều khiển?",
        o: ["Amazon Echo", "Apple Store", "Google Play", "Tất cả đáp án"],
        a: 0,
      },
      {
        q: "Trong các thành phần liên kết trong IoT, thành phần nào nằm ở giữa sơ đồ biểu diễn IoT?",
        o: ["Định danh", "Cảm biến", "Kết nối", "Đối tượng"],
        a: 3,
      },
      {
        q: "Phạm vi của Bluetooth 4.2?",
        o: ["50m-150m", "1m-20m", "20m-40m", "300m - 500m"],
        a: 0,
      },
      {
        q: '"Digital Twin" trong IoT có nghĩa là gì?',
        o: [
          "Bản sao sao chép dữ liệu",
          "Mô hình số hóa của thiết bị thực",
          "Thiết bị thay thế",
          "Công cụ phân tích mã nguồn",
        ],
        a: 1,
      },
      {
        q: "Mục đích chính của IoT là gì?",
        o: [
          "Kết nối các thiết bị và đối tượng để chia sẻ dữ liệu",
          "Tạo ra một Internet mới dành riêng cho các thiết bị di động",
          "Mở rộng sự phổ biến của trò chơi trực tuyến",
          "Tăng cường an ninh mạng cho doanh nghiệp",
        ],
        a: 0,
      },
      {
        q: "Gateway trong kiến trúc IoT có chức năng chính là gì?",
        o: [
          "Kết nối trực tiếp cảm biến với người dùng",
          "Chuẩn hóa dữ liệu, chuyển đổi giao thức và định tuyến",
          "Lưu trữ dữ liệu dài hạn",
          "Cung cấp điện năng cho cả hệ thống",
        ],
        a: 1,
      },
      {
        q: "Phân loại cảm biến hình ảnh dựa trên tiêu chí nào?",
        o: [
          "Công nghệ sản xuất chip",
          "Kích thước và độ phân giải",
          "Ứng dụng",
          "Tất cả phương án",
        ],
        a: 3,
      },
      {
        q: "Raspberry Pi 4 Model B dùng vi điều khiển gì?",
        o: [
          "Quad core Cortex-A72",
          "Atmega 328",
          "Intel® Atom™ SOC",
          "Tensilica Diamond Standard 106Micro",
        ],
        a: 0,
      },
      {
        q: "IoT là viết tắt của?",
        o: [
          "Internet of Things",
          "Internet of Think",
          "Internet of Technology",
          "Intelligent of Technology",
        ],
        a: 0,
      },
      {
        q: "Giao thức nào làm trung gian cho các gói tin trên lớp ứng dụng với mục đích thay thế các hệ thống truyền tin độc quyền và không tương thích trong IoT?",
        o: ["DDS", "MQTT", "COAP", "AMQP"],
        a: 3,
      },
      {
        q: "Đâu là công nghệ không dây sử dụng các bóng đèn LED để truyền dữ liệu với tốc độ nhanh hơn Wifi tới 100 lần?",
        o: ["LIFI", "Sigfox", "Neul", "Thread"],
        a: 0,
      },
      {
        q: "Arduino Uno R3 dùng vi điều khiển gì?",
        o: [
          "Atmega 328",
          "Quad core Cortex-A72",
          "Intel® Atom™ SOC",
          "Tensilica Diamond Standard 106Micro",
        ],
        a: 0,
      },
      {
        q: "Đâu không phải là đặc điểm của hệ thống nhúng?",
        o: [
          "Tính tương tác và kết nối mạng lưới rộng lớn",
          "Tính hoạt động ổn định và tự động hóa cao",
          "Tính linh hoạt và đa dạng trong việc thực hiện các nhiệm vụ",
          "Tính chuyên dụng, không phải là hệ thống máy tính đa chức năng",
        ],
        a: 0,
      },
      {
        q: "Một số tính năng mà ô tô thông minh có thể cung cấp là gì?",
        o: [
          "Xác định vị trí các điểm đỗ xe có sẵn",
          "Gọi dịch vụ khẩn cấp trong trường hợp xảy ra tai nạn",
          "Tự lái xe",
          "Tất cả các tùy chọn đều đúng",
        ],
        a: 3,
      },
      {
        q: "Những thách thức lớn của IoT là gì?",
        o: [
          "An ninh và sự riêng tư",
          "Không có gì cả",
          "Chia sẻ thông tin",
          "Nó rất dễ tạo và thực hiện",
        ],
        a: 0,
      },
      {
        q: "LoRaWAN là gì?",
        o: [
          "Giao thức truyền thông không dây cho IoT",
          "Ngôn ngữ lập trình cho IoT",
          "Công nghệ kết nối dữ liệu sản xuất",
          "Màn hình cảm ứng cho IoT",
        ],
        a: 0,
      },
      {
        q: "Bốn lĩnh vực công nghệ chính luôn gắn liền với sự phát triển xu thế IoT, chọn phương án đúng nhất?",
        o: [
          "Phần cứng, truyền thông kết nối, phần mềm, ứng dụng",
          "Phần cứng, phần mềm, thương mại, năng lượng",
          "Phần cứng, phần mềm, dữ liệu lớn, internet",
          "Phần mềm, internet, mã hóa, dữ liệu",
        ],
        a: 0,
      },
      {
        q: "MQTT dựa trên kiến trúc nào?",
        o: [
          "Publish-subscribe architecture",
          "Client-server architecture",
          "Peer-to-peer architecture",
          "Request-response architecture",
        ],
        a: 0,
      },
      {
        q: "Điều nào sau đây là nhược điểm của việc sử dụng IoT?",
        o: [
          "Chi phí quá đắt",
          "Lối sống xấu đi",
          "Năng suất không tăng",
          "Quá phụ thuộc vào công nghệ",
        ],
        a: 3,
      },
      {
        q: "Đâu là ưu điểm của cảm biến hồng ngoại?",
        o: [
          "Có độ nhạy cao trong việc xác định vật thể phát ra bức xạ hồng ngoại trong không gian",
          "Điều kiện nhiệt độ môi trường. Những môi trường có nhiệt độ cao thì cảm biến sẽ hoạt động hiệu quả",
          "Phạm vi quét cảm biến hồng ngoại không có góc bị chết",
          "Không bị nhầm lẫn khi phát hiện ra chuyển động",
        ],
        a: 0,
      },
      {
        q: "Sóng WiFi truyền và phát tín hiệu ở tần số?",
        o: [
          "1.4 GHz hoặc 2.3 GHz",
          "6 GHz hoặc 10 GHz",
          "15 GHz hoặc 30 GHz",
          "2.4 GHz hoặc 5 GHz",
        ],
        a: 3,
      },
      {
        q: "Thuật ngữ IIoT là viết tắt của những chữ nào?",
        o: [
          "Industrial Internet of Things",
          "Index Internet of Technology",
          "Intense Internet of Things",
          "Incorporate Internet of Technology",
        ],
        a: 0,
      },
      {
        q: "Arduino IDE được viết bằng ngôn ngữ lập trình nào?",
        o: ["C/C++", "Java", "JavaScript", "Python"],
        a: 0,
      },
      {
        q: "Tổ chức hay ai là người sáng tạo ra Raspberry Pi?",
        o: [
          "Eben Upton",
          "Sinh viên Hernando Barragan",
          "Bởi hãng Espressif Systems",
          "Google",
        ],
        a: 0,
      },
      {
        q: "Thiết bị nào sau đây không thể được coi là thiết bị IoT?",
        o: [
          "Đồng hồ thông minh",
          "Điện thoại Android",
          "Máy tính xách tay",
          "Đèn huỳnh quang",
        ],
        a: 3,
      },
      {
        q: "Cách thức truyền dữ liệu trong IoT là gì?",
        o: ["Bluetooth", "Zigbee", "Z-wave", "Tất cả đáp án"],
        a: 3,
      },
      {
        q: "Thiết bị nào không phải thiết bị truyền động (actuator) trong IoT?",
        o: ["Stepper motor", "Ceiling fan", "RGB LED", "Raspberry Pi"],
        a: 3,
      },
      {
        q: 'Định nghĩa "edge computing" trong IoT là gì?',
        o: [
          "Xử lý dữ liệu ngay tại thiết bị hoặc gần nguồn dữ liệu",
          "Lưu trữ tập trung trên điện toán đám mây (cloud)",
          "Chuyển hệ thống lên máy chủ trung tâm",
          "Sử dụng mạng 5G để truyền dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Các thiết bị IoT trong nhà giúp ích trong việc nào sau đây?",
        o: [
          "Tự động hóa",
          "Tiết kiệm năng lượng",
          "An toàn và bảo mật",
          "Tất cả các câu trả lời là chính xác",
        ],
        a: 3,
      },
      // ===== PHẦN 3 =====
      {
        q: "Các thiết bị trong hệ thống IoT thường tích hợp những gì?",
        o: [
          "Chỉ có cảm biến",
          "Chỉ có cơ cấu truyền động",
          "Cảm biến và cơ cấu truyền động",
          "Không cần tích hợp gì",
        ],
        a: 2,
      },
      {
        q: "Kiến trúc IoT phổ biến nhất gồm bao nhiêu lớp?",
        o: ["3 lớp", "4 lớp", "5 lớp", "6 lớp"],
        a: 1,
      },
      {
        q: "Các lớp trong kiến trúc IoT phổ biến bao gồm:",
        o: [
          "Trí giác, mạng, ứng dụng, bảo mật",
          "Trí giác, mạng, hỗ trợ, ứng dụng",
          "Trí giác, ứng dụng, lưu trữ, bảo mật",
          "Mạng, hỗ trợ, lưu trữ, ứng dụng",
        ],
        a: 1,
      },
      {
        q: "Giao thức MQTT được thiết kế để làm gì?",
        o: [
          "Truyền dữ liệu video",
          "Truyền thông tin giữa các thiết bị với năng lượng thấp",
          "Quản lý cơ sở dữ liệu",
          "Kết nối mạng WiFi",
        ],
        a: 1,
      },
      {
        q: "CoAP được thiết kế cho loại thiết bị nào?",
        o: [
          "Thiết bị tốc độ cao",
          "Thiết bị ràng buộc về tài nguyên",
          "Thiết bị lưu trữ lớn",
          "Thiết bị không cần kết nối Internet",
        ],
        a: 1,
      },
      {
        q: "AMQP là viết tắt của:",
        o: [
          "Advanced Messaging Queue Protocol",
          "Advanced Message Queue Protocol",
          "Application Messaging Queue Protocol",
          "Active Message Queue Protocol",
        ],
        a: 1,
      },
      {
        q: "Giao thức AMQP thường sử dụng Message Broker nào?",
        o: ["Mosquitto", "RabbitMQ", "Apache Kafka", "ActiveMQ"],
        a: 1,
      },
      {
        q: "DDS (Data Distribution Service) phù hợp với ứng dụng nào?",
        o: [
          "Truyền dữ liệu video streaming",
          "Hệ thống thời gian thực",
          "Quản lý cơ sở dữ liệu",
          "Gửi email",
        ],
        a: 1,
      },
      {
        q: "Công nghệ truyền dữ liệu nào có phạm vi 50-150m?",
        o: ["Zigbee", "Bluetooth", "Z-Wave", "LoRa"],
        a: 1,
      },
      {
        q: "BLE (Bluetooth Low Energy) được thiết kế để:",
        o: [
          "Truyền file dung lượng lớn",
          "Tiêu thụ năng lượng thấp",
          "Truyền dữ liệu tốc độ cao",
          "Kết nối mạng di động",
        ],
        a: 1,
      },
      {
        q: "Zigbee hoạt động ở tần số nào? (Phần 3)",
        o: ["900 MHz", "2.4 GHz", "5 GHz", "868 MHz"],
        a: 1,
      },
      {
        q: "Zigbee phù hợp với ứng dụng nào?",
        o: [
          "Truyền dữ liệu qua mạng di động",
          "Smarthome và khu vực đô thị",
          "Truyền video trực tuyến",
          "Kết nối vệ tinh",
        ],
        a: 1,
      },
      {
        q: "Z-Wave hoạt động ở dải tần nào?",
        o: ["900 MHz", "2.4 GHz", "5 GHz", "868 MHz"],
        a: 0,
      },
      {
        q: "Z-Wave có tốc độ truyền dữ liệu tối đa bao nhiêu?",
        o: ["250 kbps", "100 kbps", "1 Mbps", "600 Mbps"],
        a: 1,
      },
      {
        q: "6LoWPAN là giao thức thuộc lớp nào?",
        o: ["Ứng dụng", "Mạng", "Trí giác", "Hỗ trợ"],
        a: 1,
      },
      {
        q: "6LoWPAN sử dụng giao thức nào làm nền tảng?",
        o: ["Bluetooth", "IPv6", "Zigbee", "WiFi"],
        a: 1,
      },
      {
        q: "Thread là giao thức được thiết kế cho:",
        o: [
          "Truyền dữ liệu tốc độ cao",
          "Tự động hóa trong nhà và tòa nhà",
          "Kết nối mạng di động",
          "Truyền video",
        ],
        a: 1,
      },
      {
        q: "Tốc độ tối đa của WiFi chuẩn 802.11n là bao nhiêu?",
        o: ["150 Mbps", "600 Mbps", "1 Gbps", "300 Mbps"],
        a: 1,
      },
      {
        q: "Mạng di động Cellular hỗ trợ chuẩn nào?",
        o: ["Zigbee", "GSM, UMTS, LTE", "Z-Wave", "Thread"],
        a: 1,
      },
      {
        q: "Sigfox phù hợp với ứng dụng nào?",
        o: [
          "Truyền video",
          "Ứng dụng IoT cần truyền dữ liệu nhỏ, khoảng cách xa",
          "Kết nối mạng nội bộ",
          "Truyền dữ liệu tốc độ cao",
        ],
        a: 1,
      },
      {
        q: "LoRa có phạm vi truyền tối đa bao nhiêu?",
        o: ["1 km", "15 km", "50 km", "100 km"],
        a: 1,
      },
      {
        q: "LiFi sử dụng công nghệ gì để truyền dữ liệu?",
        o: ["Sóng vô tuyến", "Ánh sáng khả kiến", "Sóng siêu âm", "Từ trường"],
        a: 1,
      },
      {
        q: "Neul là công nghệ truyền dữ liệu thuộc loại nào?",
        o: [
          "Mạng di động",
          "Mạng diện rộng công suất thấp",
          "Mạng nội bộ",
          "Mạng vệ tinh",
        ],
        a: 1,
      },
      {
        q: "Cảm biến được định nghĩa là gì?",
        o: [
          "Thiết bị lưu trữ dữ liệu",
          "Thiết bị thu nhận và chuyển đổi tín hiệu vật lý thành tín hiệu điện",
          "Thiết bị truyền dữ liệu qua Internet",
          "Thiết bị điều khiển động cơ",
        ],
        a: 1,
      },
      {
        q: "Cảm biến được phân loại dựa trên lĩnh vực nào?",
        o: [
          "Vật lý, hóa học, sinh học",
          "Cơ khí, điện tử, quang học",
          "Tần số, công suất, năng lượng",
          "Kích thước, trọng lượng, độ bền",
        ],
        a: 0,
      },
      {
        q: "Cảm biến chủ động khác cảm biến thụ động ở điểm nào?",
        o: [
          "Cảm biến chủ động không cần nguồn năng lượng",
          "Cảm biến chủ động cần nguồn năng lượng để hoạt động",
          "Cảm biến thụ động có độ chính xác cao hơn",
          "Cảm biến chủ động không thu nhận tín hiệu",
        ],
        a: 1,
      },
      {
        q: "Cảm biến tiếp xúc là gì?",
        o: [
          "Cảm biến không cần tiếp xúc với vật thể",
          "Cảm biến cần tiếp xúc trực tiếp với vật thể",
          "Cảm biến sử dụng sóng vô tuyến",
          "Cảm biến hoạt động qua ánh sáng",
        ],
        a: 1,
      },
      {
        q: "Độ lệch của cảm biến được hiểu là:",
        o: [
          "Độ phân giải tối đa của cảm biến",
          "Sai số giữa giá trị đo và giá trị thực",
          "Tốc độ phản hồi của cảm biến",
          "Phạm vi đo của cảm biến",
        ],
        a: 1,
      },
      {
        q: "Độ phân giải của cảm biến là gì?",
        o: [
          "Đơn vị nhỏ nhất mà cảm biến có thể đo được",
          "Khoảng cách tối đa cảm biến có thể hoạt động",
          "Tốc độ truyền dữ liệu của cảm biến",
          "Độ bền của cảm biến",
        ],
        a: 0,
      },
      {
        q: "Cảm biến hình ảnh được sử dụng để:",
        o: [
          "Đo nhiệt độ",
          "Chụp và xử lý hình ảnh",
          "Đo áp suất",
          "Phát hiện chuyển động",
        ],
        a: 1,
      },
      {
        q: "Cảm biến nhiệt độ thường sử dụng nguyên lý nào?",
        o: [
          "Sự thay đổi điện trở hoặc điện áp theo nhiệt độ",
          "Sự thay đổi tần số sóng vô tuyến",
          "Sự thay đổi áp suất",
          "Sự thay đổi từ trường",
        ],
        a: 0,
      },
      {
        q: "Cảm biến gia tốc được ứng dụng trong:",
        o: [
          "Đo độ ẩm",
          "Phát hiện chuyển động và gia tốc",
          "Đo áp suất",
          "Đo ánh sáng",
        ],
        a: 1,
      },
      {
        q: "Cảm biến bức xạ mặt trời được gọi là gì?",
        o: ["Thermometer", "Pyranometer", "Hygrometer", "Barometer"],
        a: 1,
      },
      {
        q: "Cảm biến bức xạ mặt trời silicon-cell có đặc điểm gì?",
        o: [
          "Độ chính xác cao trong điều kiện nhiều mây",
          "Thời gian đáp ứng nhanh, giá thành thấp",
          "Hiệu suất tốt trong mọi điều kiện thời tiết",
          "Không cần bảo trì",
        ],
        a: 1,
      },
      {
        q: "Cảm biến bức xạ được ứng dụng trong lĩnh vực nào?",
        o: [
          "Năng lượng tái tạo, nông nghiệp, khoa học",
          "Truyền thông không dây",
          "Giao thông vận tải",
          "Công nghệ phần mềm",
        ],
        a: 0,
      },
      {
        q: "Cảm biến tiệm cận có chức năng chính là gì?",
        o: [
          "Đo nhiệt độ",
          "Phát hiện vật thể gần mà không cần tiếp xúc",
          "Đo áp suất",
          "Đo độ ẩm",
        ],
        a: 1,
      },
      {
        q: "Cảm biến tiệm cận hoạt động dựa trên nguyên lý nào?",
        o: [
          "Từ trường, điện dung, hoặc quang học",
          "Nhiệt độ",
          "Áp suất",
          "Độ ẩm",
        ],
        a: 0,
      },
      {
        q: "Cảm biến áp suất thường được sử dụng để đo gì?",
        o: ["Nhiệt độ", "Áp suất khí hoặc chất lỏng", "Độ ẩm", "Ánh sáng"],
        a: 1,
      },
      {
        q: "Cảm biến áp suất nước được sử dụng để:",
        o: [
          "Đo tốc độ gió",
          "Đo mực nước trong bể hoặc đường ống",
          "Đo độ ẩm",
          "Đo ánh sáng",
        ],
        a: 1,
      },
      {
        q: "Cảm biến áp suất khí nén thường được sử dụng trong:",
        o: [
          "Hệ thống chiếu sáng",
          "Hệ thống khí nén công nghiệp",
          "Hệ thống tưới tiêu",
          "Hệ thống âm thanh",
        ],
        a: 1,
      },
      {
        q: "Cảm biến áp suất màng phù hợp với ngành nào?",
        o: ["Giao thông", "Thực phẩm", "Viễn thông", "Xây dựng"],
        a: 1,
      },
      {
        q: "Cảm biến vị trí được sử dụng để:",
        o: [
          "Đo nhiệt độ",
          "Xác định vị trí hoặc khoảng cách của vật thể",
          "Đo áp suất",
          "Đo độ ẩm",
        ],
        a: 1,
      },
      {
        q: "Cảm biến vị trí quang hoạt động dựa trên:",
        o: [
          "Từ trường",
          "Ánh sáng phản xạ hoặc giao thoa",
          "Nhiệt độ",
          "Áp suất",
        ],
        a: 1,
      },
      {
        q: "Cảm biến vị trí được ứng dụng trong:",
        o: [
          "Định vị GPS, điều khiển máy bay không người lái",
          "Đo độ ẩm",
          "Truyền dữ liệu qua mạng",
          "Đo ánh sáng",
        ],
        a: 0,
      },
      {
        q: "Cảm biến quang điện được sử dụng để:",
        o: [
          "Đo áp suất",
          "Phát hiện ánh sáng hoặc vật thể qua ánh sáng",
          "Đo nhiệt độ",
          "Đo độ ẩm",
        ],
        a: 1,
      },
      {
        q: "Cảm biến chuyển động thường được sử dụng trong:",
        o: [
          "Hệ thống tưới tiêu",
          "Hệ thống an ninh",
          "Hệ thống chiếu sáng công cộng",
          "Hệ thống âm thanh",
        ],
        a: 1,
      },
      {
        q: "Cảm biến độ ẩm được sử dụng để:",
        o: [
          "Đo áp suất",
          "Đo độ ẩm trong môi trường",
          "Đo ánh sáng",
          "Đo gia tốc",
        ],
        a: 1,
      },
      {
        q: "Cảm biến khuyết tật được ứng dụng trong:",
        o: [
          "Kiểm tra chất lượng sản phẩm công nghiệp",
          "Đo nhiệt độ",
          "Truyền dữ liệu",
          "Đo ánh sáng",
        ],
        a: 0,
      },
      {
        q: "Cảm biến ngọn lửa thường được sử dụng trong:",
        o: [
          "Hệ thống tưới tiêu",
          "Hệ thống phòng cháy chữa cháy",
          "Hệ thống chiếu sáng",
          "Hệ thống âm thanh",
        ],
        a: 1,
      },
      {
        q: "Cảm biến điện được sử dụng để:",
        o: [
          "Đo độ ẩm",
          "Đo các thông số điện như điện áp, dòng điện",
          "Đo ánh sáng",
          "Đo áp suất",
        ],
        a: 1,
      },
      {
        q: "Cảm biến không tiếp xúc có đặc điểm gì?",
        o: [
          "Cần tiếp xúc trực tiếp với vật thể",
          "Phát hiện vật thể mà không cần tiếp xúc",
          "Chỉ hoạt động trong môi trường nước",
          "Chỉ đo được nhiệt độ",
        ],
        a: 1,
      },
      {
        q: "Cảm biến bức xạ RK200-04 được sử dụng để đo gì?",
        o: ["Nhiệt độ", "Bức xạ mặt trời", "Áp suất", "Độ ẩm"],
        a: 1,
      },
      {
        q: "Cảm biến áp suất lò hơi cần lưu ý điều gì khi chọn mua?",
        o: [
          "Nhiệt độ hoạt động của lò",
          "Độ ẩm môi trường",
          "Tần số sóng vô tuyến",
          "Phạm vi truyền dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Lớp vận chuyển trong IoT đảm nhiệm vai trò gì?",
        o: [
          "Lưu trữ dữ liệu",
          "Truyền dữ liệu giữa các thiết bị",
          "Xử lý dữ liệu",
          "Hiển thị dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Lớp mạng trong IoT sử dụng giao thức nào?",
        o: ["HTTP", "IPv4, IPv6", "FTP", "SMTP"],
        a: 1,
      },
      {
        q: "Tường lửa trong IoT có vai trò gì?",
        o: [
          "Truyền dữ liệu",
          "Bảo vệ hệ thống khỏi các cuộc tấn công mạng",
          "Lưu trữ dữ liệu",
          "Xử lý dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Cisco Packet Tracer được sử dụng để làm gì?",
        o: [
          "Lập trình phần mềm",
          "Mô phỏng và xây dựng hệ thống mạng IoT",
          "Thiết kế phần cứng",
          "Quản lý cơ sở dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Arduino được sử dụng để làm gì trong IoT?",
        o: [
          "Lập trình và điều khiển thiết bị IoT",
          "Truyền dữ liệu qua mạng di động",
          "Lưu trữ dữ liệu",
          "Thiết kế giao diện người dùng",
        ],
        a: 0,
      },
      {
        q: "Ứng dụng IoT hàng đầu thuộc lĩnh vực nào?",
        o: [
          "Smarthome, y tế, nông nghiệp",
          "Truyền thông quảng cáo",
          "Phát triển phần mềm",
          "Giáo dục trực tuyến",
        ],
        a: 0,
      },
      {
        q: "Mạng vệ tinh trong IoT được sử dụng khi nào?",
        o: [
          "Trong phạm vi nội bộ",
          "Khi cần kết nối ở khoảng cách xa và vùng sâu vùng xa",
          "Trong mạng LAN",
          "Trong mạng WiFi",
        ],
        a: 1,
      },
      {
        q: "Phần cứng trong IoT bao gồm những gì?",
        o: [
          "Chỉ có phần mềm",
          "Cảm biến, bộ vi điều khiển, thiết bị truyền thông",
          "Chỉ có giao diện người dùng",
          "Chỉ có cơ sở dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Giao thức liên kết trong IoT là gì?",
        o: [
          "Giao thức kết nối các thiết bị trong mạng",
          "Giao thức lưu trữ dữ liệu",
          "Giao thức hiển thị dữ liệu",
          "Giao thức xử lý dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Mạng di động trong IoT hỗ trợ chuẩn nào?",
        o: ["Zigbee", "3G, 4G, LTE", "Z-Wave", "Thread"],
        a: 1,
      },
      {
        q: "MQTT có ưu điểm gì so với các giao thức khác?",
        o: [
          "Truyền dữ liệu video tốt hơn",
          "Nhẹ nhàng, tiêu thụ năng lượng thấp",
          "Hỗ trợ lưu trữ dữ liệu",
          "Tốc độ truyền cao hơn",
        ],
        a: 1,
      },
      {
        q: "CoAP sử dụng DTLS để làm gì?",
        o: [
          "Truyền dữ liệu tốc độ cao",
          "Bảo mật dữ liệu",
          "Lưu trữ dữ liệu",
          "Xử lý dữ liệu",
        ],
        a: 1,
      },
      {
        q: "AMQP có đặc điểm gì nổi bật?",
        o: [
          "Độ tin cậy và bảo mật cao",
          "Tốc độ truyền thấp",
          "Không hỗ trợ định dạng dữ liệu",
          "Chỉ dùng trong mạng nội bộ",
        ],
        a: 0,
      },
      {
        q: "Zigbee có ưu điểm gì so với Bluetooth?",
        o: [
          "Tốc độ truyền cao hơn",
          "Hỗ trợ số lượng node lớn hơn",
          "Phạm vi truyền xa hơn",
          "Tiêu thụ năng lượng cao hơn",
        ],
        a: 1,
      },
      {
        q: "Z-Wave có đặc điểm gì nổi bật?",
        o: [
          "Tốc độ truyền cao",
          "Tiêu thụ năng lượng cực thấp",
          "Không hỗ trợ smarthome",
          "Phạm vi truyền rất xa",
        ],
        a: 1,
      },
      {
        q: "6LoWPAN hỗ trợ giao thức nào?",
        o: [
          "TCP, UDP, HTTP, CoAP",
          "FTP, SMTP",
          "Zigbee, Z-Wave",
          "Bluetooth, WiFi",
        ],
        a: 0,
      },
      {
        q: "Thread có khả năng xử lý bao nhiêu nút?",
        o: ["50 nút", "250 nút", "100 nút", "500 nút"],
        a: 1,
      },
      {
        q: "WiFi có nhược điểm gì trong IoT?",
        o: [
          "Tiêu thụ năng lượng cao",
          "Tốc độ truyền thấp",
          "Không hỗ trợ mạng LAN",
          "Phạm vi truyền ngắn",
        ],
        a: 0,
      },
      {
        q: "Cellular phù hợp với ứng dụng nào?",
        o: [
          "Truyền dữ liệu khoảng cách xa",
          "Truyền dữ liệu trong mạng nội bộ",
          "Truyền video tốc độ cao",
          "Truyền dữ liệu năng lượng thấp",
        ],
        a: 0,
      },
      {
        q: "NFC thường được sử dụng trong:",
        o: [
          "Truyền dữ liệu khoảng cách xa",
          "Thanh toán không tiếp xúc",
          "Truyền video",
          "Kết nối mạng nội bộ",
        ],
        a: 1,
      },
      {
        q: "Cảm biến nhiệt độ có ứng dụng nào?",
        o: [
          "Giám sát môi trường, y tế",
          "Truyền dữ liệu qua mạng",
          "Đo khoảng cách",
          "Phát hiện chuyển động",
        ],
        a: 0,
      },
      {
        q: "Cảm biến gia tốc có ứng dụng nào?",
        o: [
          "Đo độ ẩm",
          "Phát hiện chuyển động trong thiết bị di động",
          "Đo ánh sáng",
          "Đo áp suất",
        ],
        a: 1,
      },
      {
        q: "Cảm biến áp suất màng có đặc điểm gì?",
        o: [
          "Không phù hợp với thực phẩm",
          "Chống bám bẩn, đạt tiêu chuẩn vệ sinh",
          "Chỉ đo được áp suất khí",
          "Không cần bảo trì",
        ],
        a: 1,
      },
      {
        q: "Cảm biến vị trí GPS được sử dụng trong:",
        o: [
          "Đo nhiệt độ",
          "Xác định vị trí trên bản đồ",
          "Đo áp suất",
          "Đo độ ẩm",
        ],
        a: 1,
      },
      {
        q: "Cảm biến quang học có ưu điểm gì?",
        o: [
          "Không bị nhiễu điện từ",
          "Tiêu thụ năng lượng cao",
          "Chỉ hoạt động trong môi trường nước",
          "Phạm vi đo ngắn",
        ],
        a: 0,
      },
      {
        q: "Cảm biến MEMS là gì?",
        o: [
          "Cảm biến sử dụng sóng vô tuyến",
          "Cảm biến cơ điện vi mô",
          "Cảm biến sử dụng ánh sáng",
          "Cảm biến sử dụng nhiệt độ",
        ],
        a: 1,
      },
      {
        q: "Cảm biến áp suất điện trở hoạt động dựa trên:",
        o: [
          "Sự thay đổi điện trở của strain gauge",
          "Sự thay đổi tần số sóng",
          "Sự thay đổi từ trường",
          "Sự thay đổi ánh sáng",
        ],
        a: 0,
      },
      {
        q: "Cảm biến áp suất điện dung có đặc điểm gì?",
        o: [
          "Độ nhạy cao, đo áp suất thấp",
          "Không chịu được quá tải",
          "Chỉ đo áp suất khí",
          "Tiêu thụ năng lượng cao",
        ],
        a: 0,
      },
      {
        q: "Cảm biến áp suất quang học phù hợp với môi trường nào?",
        o: [
          "Môi trường nhiễu điện từ cao",
          "Môi trường nước",
          "Môi trường nhiệt độ thấp",
          "Môi trường áp suất thấp",
        ],
        a: 0,
      },
      {
        q: "Cảm biến vị trí từ tính hoạt động dựa trên:",
        o: ["Ánh sáng", "Từ trường", "Nhiệt độ", "Áp suất"],
        a: 1,
      },
      {
        q: "Cảm biến vị trí quang hoạt động dựa trên cơ chế nào?",
        o: [
          "Từ trường",
          "Phản xạ hoặc giao thoa ánh sáng",
          "Nhiệt độ",
          "Điện dung",
        ],
        a: 1,
      },
      {
        q: "Cảm biến bức xạ mặt trời có ứng dụng nào trong nông nghiệp?",
        o: [
          "Đo độ ẩm",
          "Tối ưu hóa môi trường trồng trọt",
          "Đo áp suất",
          "Đo gia tốc",
        ],
        a: 1,
      },
      {
        q: "Cảm biến tiệm cận được ứng dụng trong:",
        o: [
          "Đo nhiệt độ",
          "Kiểm soát chất lượng sản phẩm",
          "Đo độ ẩm",
          "Đo ánh sáng",
        ],
        a: 1,
      },
      {
        q: "Cảm biến áp suất lò hơi thường được sử dụng để đo gì?",
        o: ["Độ ẩm", "Áp suất hơi hoặc quạt", "Nhiệt độ", "Ánh sáng"],
        a: 1,
      },
      {
        q: "Cảm biến vị trí được ứng dụng trong y tế để làm gì?",
        o: [
          "Đo nhiệt độ",
          "Xác định vị trí bệnh nhân hoặc thiết bị y tế",
          "Đo áp suất",
          "Đo độ ẩm",
        ],
        a: 1,
      },
    ],
  },
];

export default QUIZ_SETS_IOT;
