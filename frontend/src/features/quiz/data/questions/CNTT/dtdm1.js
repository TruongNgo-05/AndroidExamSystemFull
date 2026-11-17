const QUIZ_SETS_DTDM_T = [
  {
    id: "dien_toan_dam_may_va_ung_dung_1",
    majorId: "cntt",
    title: "Điện toán đám mây và ứng dụng - UPDATE",
    description:
      "212 câu gộp từ ba tài liệu, loại câu trùng và hiệu chỉnh các đáp án mâu thuẫn. Một số câu dùng bối cảnh sản phẩm lịch sử.",
    questions: [
      {
        q: "Câu 1: Phát biểu nào sau đây là chính xác nhất về hình mẫu của điện toán đám mây?",
        o: [
          "Thông tin được lưu trữ tạm thời tại các máy chủ trên Internet và được lưu trữ thường trực ở các máy khách",
          "Thông tin được lưu trữ thường trực tại các máy chủ trên Internet và chỉ được lưu trữ tạm thời ở các máy khách",
          "Không có phát biểu nào đúng",
          "Thông tin được lưu trữ thường trực tại các máy chủ trên Internet và chỉ được lưu trữ thường trực ở các máy khách",
        ],
        a: 1,
      },
      {
        q: "Câu 2: Trong điện toán đám mây, thuật ngữ nào mô tả bản chất về cơ sở hạ tầng và việc mở rộng hạ tầng tùy thuộc vào nhu cầu tài nguyên?",
        o: ["Virtualization", "Clustering", "Elasticity", "Consolidation"],
        a: 2,
      },
      {
        q: "Câu 3: Mô hình dịch vụ Service category của loại PaaS gồm có những gì?",
        o: [
          "VM rental, online storage",
          "Online operating environment, online database, online message queues",
          "Không có đáp án đúng",
          "Application and software rental",
        ],
        a: 1,
      },
      {
        q: "Câu 4: Kiến trúc SOA viết tắt của từ gì?",
        o: [
          "Service of architecture",
          "Không có đáp án đúng",
          "Single oriented architecture",
          "Service oriented architecture",
        ],
        a: 3,
      },
      {
        q: "Câu 5: Mô hình dịch vụ Service customization của loại IaaS gồm có những gì?",
        o: [
          "Application template",
          "Logic resource template",
          "Logic resource template and Application template",
          "Server template",
        ],
        a: 3,
      },
      {
        q: "Câu 6: Điện toán đám mây còn gọi là gì?",
        o: [
          "Điện toán máy chủ thật",
          "Điện toán lưới",
          "Điện toán máy chủ ảo",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 7: Dịch vụ PaaS là viết tắt của từ gì?",
        o: [
          "Platform as a Service",
          "Platform and a Service",
          "Platform as a Server",
          "Plat as a Service",
        ],
        a: 0,
      },
      {
        q: "Câu 8: Kiểu dịch vụ Service monitoring của loại PaaS gồm có những gì?",
        o: [
          "Physical resource monitoring",
          "Application monitoring",
          "Logic resource monitoring",
          "Application monitoring, logic resource monitoring",
        ],
        a: 2,
      },
      {
        q: "Câu 9: Kiểu dịch vụ Service monitoring của loại IaaS gồm có những gì?",
        o: [
          "Application monitoring",
          "Physical resource monitoring",
          "Application monitoring, logic resource monitoring",
          "Logic resource monitoring",
        ],
        a: 1,
      },
      {
        q: "Câu 10: Đâu là nhược điểm của điện toán đám mây, chọn đáp án đúng nhất?",
        o: [
          "Tính riêng tư, tính sẵn dùng, mất dữ liệu, khả năng bảo mật, quyền sở hữu",
          "Tính riêng tư, tính di động dữ liệu, mất dữ liệu, khả năng bảo mật, quyền sở hữu",
          "Tính riêng tư, tính sẵn dùng, tính di động dữ liệu, mất dữ liệu, khả năng bảo mật, quyền sở hữu",
          "Tính riêng tư, tính sẵn dùng, tính di động dữ liệu, mất dữ liệu, khả năng bảo mật",
        ],
        a: 2,
      },
      {
        q: "Câu 11: Theo mô hình phân lớp điện toán đám mây được sử dụng trong tài liệu ôn tập, có bao nhiêu lớp thành phần?",
        o: ["5", "2", "3", "4"],
        a: 0,
      },
      {
        q: "Câu 12: Loại dịch vụ nào mà người sử dụng sau khi thuê xong còn phải xây dựng thêm các thành phần nhiều nhất?",
        o: ["SaaS", "IaaS", "Không có đáp án đúng", "PaaS"],
        a: 1,
      },
      {
        q: "Câu 13: Trong hoạt động của điện toán đám mây, lớp Back-End để làm gì?",
        o: [
          "Là lớp chứa giao diện người dùng của ứng dụng",
          "Là lớp chứa hạ tầng thiết bị",
          "Là lớp chứa toàn bộ các thành phần hoạt động",
          "Không có đáp án đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 14: Mô hình dịch vụ Service accessing and using của loại SaaS gồm có những gì?",
        o: [
          "Remote console, web services",
          "Web services and web 2.0 access technology",
          "Online development and debugging, integration of offline development tools and cloud",
          "Web 2.0 access technology",
        ],
        a: 3,
      },
      {
        q: "Câu 15: Những loại dịch vụ nào khi thuê có Database?",
        o: ["SaaS", "IaaS, PaaS", "PaaS, SaaS", "PaaS"],
        a: 2,
      },
      {
        q: "Câu 16: Mô hình dịch vụ Service accessing and using của loại IaaS gồm có những gì?",
        o: [
          "Web 2.0 access technology",
          "Remote console, web services",
          "Web services and web 2.0 access technology",
          "Online development and debugging, integration of offline development tools and cloud",
        ],
        a: 1,
      },
      {
        q: "Câu 17: Trong hoạt động của điện toán đám mây, lớp Front-End để làm gì?",
        o: [
          "Là lớp chứa hạ tầng thiết bị",
          "Không có đáp án đúng",
          "Là lớp chứa toàn bộ các thành phần hoạt động",
          "Là lớp chứa giao diện người dùng của ứng dụng",
        ],
        a: 3,
      },
      {
        q: "Câu 18: Kiến trúc SOA là kiến trúc gì?",
        o: [
          "Kiến trúc hướng dịch vụ",
          "Kiến trúc đa tác vụ",
          "Không có đáp án đúng",
          "Kiến trúc hướng theo định hướng duy nhất",
        ],
        a: 0,
      },
      {
        q: "Câu 19: Mô hình dịch vụ Service category của loại SaaS gồm có những gì?",
        o: [
          "VM rental, online storage",
          "Application and software rental",
          "Không có đáp án đúng",
          "Online operating environment, online database, online message queues",
        ],
        a: 1,
      },
      {
        q: "Câu 20: Điện toán đám mây có thể được xem như là giai đoạn tự nhiên tiếp theo từ mô hình điện toán nào?",
        o: [
          "Mô hình điện toán tự trị",
          "Không có đáp án đúng",
          "Mô hình điện toán lưới",
          "Mô hình điện toán theo nhu cầu",
        ],
        a: 2,
      },
      {
        q: "Câu 21: Những loại dịch vụ nào khi thuê có Operating System?",
        o: ["PaaS", "IaaS, PaaS", "SaaS", "PaaS, SaaS"],
        a: 3,
      },
      {
        q: "Câu 22: Loại dịch vụ nào mà người sử dụng có được môi trường để lập trình chương trình ứng dụng?",
        o: ["SaaS", "IaaS", "Không có đáp án đúng", "PaaS"],
        a: 3,
      },
      {
        q: "Câu 23: Những loại dịch vụ nào khi thuê có Networking?",
        o: [
          "IaaS, PaaS, SaaS, Standalone Server",
          "PaaS",
          "SaaS",
          "IaaS, PaaS, SaaS",
        ],
        a: 3,
      },
      {
        q: "Câu 24: Google Compute Engine là dịch vụ thuộc loại gì?",
        o: ["PaaS", "Không có đáp án đúng", "IaaS", "SaaS"],
        a: 2,
      },
      {
        q: "Câu 25: Mô hình dịch vụ Service category của loại IaaS gồm có những gì?",
        o: [
          "Application and software rental",
          "VM rental, online storage",
          "Không có đáp án đúng",
          "Online operating environment, online database, online message queues",
        ],
        a: 1,
      },
      {
        q: "Câu 26: Tổng thể các thành phần của môi trường điện toán đám mây?",
        o: [
          "Application, platform, infrastructure",
          "Client, application, session, network, data",
          "Application, presentation, transport, network, data",
          "Client, application, platform, infrastructure, server",
        ],
        a: 3,
      },
      {
        q: "Câu 27: Những loại dịch vụ nào khi thuê có Storage?",
        o: [
          "PaaS, SaaS",
          "IaaS, PaaS, SaaS, Standalone Server",
          "IaaS, PaaS",
          "IaaS, PaaS, SaaS",
        ],
        a: 3,
      },
      {
        q: "Câu 28: Google App Engine là dịch vụ thuộc loại gì?",
        o: ["PaaS", "SaaS", "Không có đáp án đúng", "IaaS"],
        a: 0,
      },
      {
        q: "Câu 29: Mô hình dịch vụ Service customization của loại PaaS gồm có những gì?",
        o: [
          "Server template",
          "Logic resource template",
          "Logic resource template and Application template",
          "Application template",
        ],
        a: 1,
      },
      {
        q: "Câu 30: Gmail là ứng dụng thuộc loại dịch vụ gì?",
        o: ["IaaS", "Không có đáp án đúng", "PaaS", "SaaS"],
        a: 3,
      },
      {
        q: "Câu 31: Với mô hình dịch vụ SaaS, người sử dụng phải tự xây dựng cái gì?",
        o: [
          "Ứng dụng, dữ liệu",
          "Thực thi, ứng dụng, dữ liệu",
          "Dữ liệu",
          "Nền tảng, thực thi, ứng dụng, dữ liệu",
        ],
        a: 2,
      },
      {
        q: "Câu 32: Trong điện toán đám mây, thuật ngữ ảo hóa (Virtualization) có ý nghĩa là?",
        o: [
          "Nó tự động tải thêm các nền tảng hạ tầng",
          "Nó tối ưu hóa việc sử dụng tài nguyên máy tính",
          "Nó cải thiện hiệu quả sử dụng các ứng dụng web",
          "Nó loại bỏ các hệ điều hành không hiệu quả",
        ],
        a: 1,
      },
      {
        q: "Câu 33: Facebook thuộc loại dịch vụ điện toán đám mây nào?",
        o: ["PaaS", "IaaS", "Không có đáp án đúng", "SaaS"],
        a: 3,
      },
      {
        q: "Câu 34: Thuật ngữ nào mô tả việc thanh toán dựa trên sự đóng gói các tài nguyên máy tính và tổng dung lượng sử dụng tài nguyên đó?",
        o: ["Metered", "Subscription", "Per user based", "Recurring"],
        a: 0,
      },
      {
        q: "Câu 35: Theo cách chia bốn nhóm trong tài liệu (nền tảng, thực thi, ứng dụng, dữ liệu), dịch vụ IT truyền thống phải tự quản lý những nhóm nào?",
        o: [
          "Ứng dụng, dữ liệu",
          "Nền tảng, thực thi, ứng dụng, dữ liệu",
          "Nền tảng, thực thi",
          "Thực thi, ứng dụng, dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Câu 36: Mô hình dịch vụ Service customization của loại SaaS gồm có những gì?",
        o: [
          "Server template",
          "Logic resource template",
          "Application template",
          "Logic resource template and Application template",
        ],
        a: 2,
      },
      {
        q: "Câu 37: Những loại dịch vụ nào khi thuê có Runtimes?",
        o: ["SaaS", "IaaS, PaaS", "PaaS", "PaaS, SaaS"],
        a: 3,
      },
      {
        q: "Câu 38: Điện toán đám mây viết là gì?",
        o: [
          "Cloud Mobile",
          "Cloud Computing",
          "Không có phương án đúng",
          "Cloud Internet",
        ],
        a: 1,
      },
      {
        q: "Câu 39: Dịch vụ IaaS là viết tắt của từ gì?",
        o: [
          "Infra as a Service",
          "Infrastructure as a Server",
          "Infrastructure as a Service",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 40: Theo NIST, điện toán đám mây có bao nhiêu mô hình triển khai?",
        o: ["4", "2", "5", "3"],
        a: 0,
      },
      {
        q: "Câu 41: SaaS được xem như đã bao gồm tích hợp với lớp nào của các dịch vụ điện toán đám mây?",
        o: ["Client", "Data", "Infrastructure", "Application"],
        a: 3,
      },
      {
        q: "Câu 42: Những loại dịch vụ nào khi thuê có Virtualization?",
        o: [
          "PaaS, SaaS",
          "IaaS, PaaS, SaaS",
          "IaaS, PaaS",
          "IaaS, PaaS, SaaS, Standalone Server",
        ],
        a: 1,
      },
      {
        q: "Câu 43: Tài liệu nội bộ Compaq mang tên “Internet Solutions Division Strategy for Cloud Computing”, ghi nhận việc sử dụng thuật ngữ Cloud Computing, được lập vào năm nào?",
        o: ["2009", "2010", "2008", "1996"],
        a: 3,
      },
      {
        q: "Câu 44: Những loại dịch vụ nào khi thuê có Application?",
        o: ["PaaS", "SaaS", "IaaS, PaaS, SaaS", "PaaS, SaaS"],
        a: 1,
      },
      {
        q: "Câu 45: Với mô hình IaaS, ngoài hạ tầng do nhà cung cấp quản lý, khách hàng chịu trách nhiệm chính về những thành phần nào?",
        o: [
          "Hệ điều hành, môi trường thực thi, ứng dụng và dữ liệu",
          "Dữ liệu",
          "Ứng dụng, dữ liệu",
          "Thực thi, ứng dụng, dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Câu 46: Trong ba mô hình dịch vụ đám mây chuẩn, mô hình nào có máy chủ vật lý do nhà cung cấp quản lý?",
        o: [
          "PaaS, SaaS",
          "IaaS, PaaS",
          "IaaS, PaaS, SaaS, Standalone Server",
          "IaaS, PaaS, SaaS",
        ],
        a: 3,
      },
      {
        q: "Câu 47: Với mô hình dịch vụ PaaS, người sử dụng phải tự xây dựng cái gì?",
        o: [
          "Dữ liệu",
          "Ứng dụng, dữ liệu",
          "Nền tảng, thực thi, ứng dụng, dữ liệu",
          "Thực thi, ứng dụng, dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Câu 48: Dịch vụ SaaS là viết tắt của từ gì?",
        o: [
          "Software and a Service",
          "Soft as a Service",
          "Software as a Server",
          "Software as a Service",
        ],
        a: 3,
      },
      {
        q: "Câu 49: Mô hình dịch vụ Service accessing and using của loại PaaS gồm có những gì?",
        o: [
          "Online development and debugging, integration of offline development tools and cloud",
          "Web 2.0 access technology",
          "Remote console, web services",
          "Web services and web 2.0 access technology",
        ],
        a: 0,
      },
      {
        q: "Câu 50: Loại dịch vụ nào mà người sử dụng chỉ cần thuê và đưa dữ liệu vào ứng dụng luôn?",
        o: ["PaaS", "IaaS", "SaaS", "Không có đáp án đúng"],
        a: 2,
      },
      {
        q: "Câu 51: Google Search là dịch vụ thuộc loại gì?",
        o: ["PaaS", "SaaS", "Không có đáp án đúng", "IaaS"],
        a: 1,
      },
      {
        q: "Câu 52: Mô hình Private Cloud sau khi xây dựng sẽ cung cấp các loại dịch vụ nào?",
        o: ["IaaS, PaaS, SaaS", "IaaS", "PaaS", "IaaS, SaaS"],
        a: 0,
      },
      {
        q: "Câu 53: Phần nào không cần khai báo khi cấu hình máy chủ ảo?",
        o: ["Zone", "Name", "Cloud SQL", "Tag"],
        a: 2,
      },
      {
        q: "Câu 54: Điện toán máy chủ ảo hoạt động gồm có mấy lớp?",
        o: ["5 lớp", "3 lớp", "2 lớp", "4 lớp"],
        a: 2,
      },
      {
        q: "Câu 55: Dịch vụ nào là nền tảng đám mây cho việc triển khai xây dựng ứng dụng công nghệ thông tin trực tuyến?",
        o: ["XaaS", "IaaS", "SaaS", "PaaS"],
        a: 3,
      },
      {
        q: "Câu 56: Tổ chức hỗ trợ cộng đồng phù hợp với việc triển khai mô hình đám mây nào?",
        o: ["Community Cloud", "Hybrid Cloud", "Public Cloud", "Private Cloud"],
        a: 0,
      },
      {
        q: "Câu 57: Đâu là dịch vụ của Microsoft được phát triển theo mô hình SaaS?",
        o: [
          "Windows Azure Platform",
          "Office 365",
          "Windows Azure",
          "OneDrive",
        ],
        a: 1,
      },
      {
        q: "Câu 58: Dạng dịch vụ nào sau đây không thuộc phạm vi cung cấp của PaaS?",
        o: [
          "Các bộ lưu trữ dữ liệu",
          "Các hệ điều hành máy tính",
          "Các phần mềm ứng dụng",
          "Các bộ nhớ mở rộng",
        ],
        a: 2,
      },
      {
        q: "Câu 59: Thành phần nào thể hiện rõ nhất việc PaaS cung cấp nền tảng thực thi ứng dụng, thay vì chỉ cung cấp máy ảo?",
        o: [
          "Lớp bộ nhớ đệm (caching layer)",
          "Tự động mở rộng quy mô",
          "Thời gian chạy trừu tượng (abstracted runtime)",
          "Là tổng hợp tất cả các đáp án khác",
        ],
        a: 2,
      },
      {
        q: "Câu 60: IaaS là từ?",
        o: [
          "Infra as a Service",
          "Infrastructure as a Server",
          "Không có đáp án đúng",
          "Infrastructure as all Service",
        ],
        a: 2,
      },
      {
        q: "Câu 61: Thuật ngữ Multi-tenancy trong điện toán đám mây được hiểu như thế nào?",
        o: [
          "Là dịch vụ bảo mật ứng dụng trên điện toán đám mây.",
          "Một hệ thống ứng dụng phục vụ nhiều khách hàng (tenant), có cơ chế tách biệt dữ liệu giữa các khách hàng.",
          "Là dịch vụ đáp ứng nhanh theo nhu cầu người dùng.",
          "Là dịch vụ sử dụng được truy cập qua Internet.",
        ],
        a: 1,
      },
      {
        q: "Câu 62: Đặc trưng nào không thể hiện trên PaaS?",
        o: ["Nền tảng web.", "Đáp ứng nhu cầu.", "Máy tính mở.", "Độc lập."],
        a: 3,
      },
      {
        q: "Câu 63: Trong mô hình SaaS, ứng dụng được nhà cung cấp vận hành trên hạ tầng đám mây và người dùng truy cập qua mạng. Phát biểu này đúng hay sai?",
        o: [
          "Sai.",
          "Đúng.",
          "Chỉ đúng khi người dùng tự vận hành máy chủ vật lý.",
          "Chỉ đúng khi ứng dụng không sử dụng mạng.",
        ],
        a: 1,
      },
      {
        q: "Câu 64: Hãng IBM mở trung tâm điện toán đám mây tại thị trường Việt Nam vào năm nào?",
        o: ["2011", "2010", "2008", "2009"],
        a: 2,
      },
      {
        q: "Câu 65: Public Cloud được hiểu đơn giản là gì?",
        o: [
          "Một kiến trúc đám mây riêng duy trì trong trung tâm dữ liệu doanh nghiệp.",
          "Một dịch vụ điện toán đám mây tiêu chuẩn cung cấp qua mạng Internet.",
          "Không chọn đáp án này.",
          "Một dịch vụ điện toán đám mây cho một cộng đồng nào đó.",
        ],
        a: 1,
      },
      {
        q: "Câu 66: Kiểu dịch vụ Service measurement của loại IaaS gồm có những gì?",
        o: [
          "Application usage metering",
          "Logic resource usage metering",
          "Network, storage, and server virtualization",
          "Physical resource metering",
        ],
        a: 3,
      },
      {
        q: "Câu 67: Kiểu dịch vụ security của loại SaaS gồm có những gì?",
        o: [
          "Data isolation, operating environment isolation, SSL, Web authentication and authorization",
          "Storage encryption and isolation, VM isolation",
          "Data isolation, operating environment isolation, SSL",
          "Storage encryption and isolation, VM isolation, VLAN, SSL/SSH",
        ],
        a: 0,
      },
      {
        q: "Câu 68: Dịch vụ điện toán đám mây nào không phải do Google cung cấp?",
        o: ["YouTube", "Chrome", "Dropbox", "OneDrive"],
        a: 3,
      },
      {
        q: "Câu 69: Điều nào sau đây không phải là lợi thế của điện toán đám mây?",
        o: [
          "Truy cập trực tuyến vào các tài nguyên mạng.",
          "Duy trì một mạng lưới điện toán đám mây là dễ dàng.",
          "Chỉ trả tiền cho những gì mình sử dụng.",
          "Không bận tâm đến không gian lưu trữ dữ liệu.",
        ],
        a: 3,
      },
      {
        q: "Câu 70: Google là công ty máy tính cung cấp dịch vụ triển khai mô hình điện toán đám mây nào?",
        o: [
          "Hybrid Cloud.",
          "Public Cloud.",
          "Private Cloud.",
          "Public Cloud và Private Cloud.",
        ],
        a: 1,
      },
      {
        q: "Câu 71: VPS là gì?",
        o: [
          "Video Programming System.",
          "Virtual Pet Site.",
          "Virtual Private Server.",
          "Vietnamese Professionals Society.",
        ],
        a: 2,
      },
      {
        q: "Câu 72: Dịch vụ đám mây Google Compute Engine và Cloud SDK để thao tác với loại dịch vụ nào?",
        o: [
          "Platform as a Service.",
          "Infrastructure as a Service.",
          "Software as a Service.",
          "Không có đáp án đúng.",
        ],
        a: 1,
      },
      {
        q: "Câu 73: Kiểu dịch vụ Service optimization của loại IaaS gồm có những gì?",
        o: [
          "Multi-tenancy",
          "Network, storage, and server virtualization",
          "Large-scale distributed file system, database, middleware",
          "Multi-tenancy, network, storage",
        ],
        a: 1,
      },
      {
        q: "Câu 74: Khi một công ty muốn phân phối sản phẩm theo mô hình SaaS thì cần tổ chức nó thế nào?",
        o: [
          "Thanh toán theo thuê bao",
          "Truy cập qua Internet",
          "Là tất cả các lý do khác",
          "Kiến trúc chia sẻ cho nhiều người dùng (multi-tenant)",
        ],
        a: 2,
      },
      {
        q: "Câu 75: Kiểu dịch vụ Service optimization của loại PaaS gồm có những gì?",
        o: [
          "Network, storage, and server virtualization",
          "Multi-tenancy, network, storage",
          "Multi-tenancy",
          "Large-scale distributed file system, database, middleware",
        ],
        a: 3,
      },
      {
        q: "Câu 76: Một công ty cung cấp các dịch vụ điện toán đám mây là một môi trường, sao cho khách hàng xây dựng ứng dụng trên đó. Vậy, các dịch vụ của công ty thuộc loại mô hình nào?",
        o: [
          "Platform as a Service",
          "Computing as a Service",
          "Infrastructure as a Service",
          "Software as a Service",
        ],
        a: 0,
      },
      {
        q: "Câu 77: Hybrid Cloud là gì?",
        o: [
          "Là hệ thống mạng cộng đồng.",
          "Là một mô hình triển khai điện toán đám mây.",
          "Là hệ thống mạng Internet trong điện toán đám mây.",
          "Là hệ thống mạng nội bộ của một tổ chức xã hội có kết nối mạng toàn cầu.",
        ],
        a: 1,
      },
      {
        q: "Câu 78: Một công ty cần cung cấp dịch vụ sử dụng các thiết bị đa dạng công nghệ thông tin cho khách hàng trên toàn thế giới. Thuộc tính nào của điện toán đám mây có thể giúp công ty thực hiện công việc này?",
        o: [
          "Theo cấu trúc mở rộng máy chủ",
          "Giá cả linh hoạt",
          "Truy cập mạng rộng rãi (broad network access), hỗ trợ nhiều loại thiết bị khách.",
          "Theo cấu trúc phát triển của phần mềm ứng dụng",
        ],
        a: 2,
      },
      {
        q: "Câu 79: Mô tả nào là đúng về dịch vụ Platform as a Service của điện toán đám mây?",
        o: [
          "Cung cấp các dịch vụ hạ tầng để người dùng có thể chạy các ứng dụng trên đó",
          "Cung cấp một môi trường để các ứng dụng có thể chạy được và bao gồm một tập các dịch vụ cơ bản như bộ nhớ ngoài và cơ sở dữ liệu",
          "Cung cấp các nền tảng để người dùng có thể tạo được máy tính ảo và lưu trữ ảo",
          "Cung cấp các dịch vụ hạ tầng để cho các ứng dụng web có thể chạy được",
        ],
        a: 1,
      },
      {
        q: "Câu 80: Năm 2008, hãng IBM có khách hàng đầu tiên tại Việt Nam là công ty nào?",
        o: ["VNPT", "VNTT", "Viettel IDC", "FPT"],
        a: 1,
      },
      {
        q: "Câu 81: Dịch vụ Google Drive có phải là một dạng của điện toán đám mây?",
        o: [
          "Sai",
          "Đúng",
          "Không chọn đáp án này.",
          "Cả ba phương án còn lại đều sai.",
        ],
        a: 1,
      },
      {
        q: "Câu 82: Các dịch vụ theo mô hình SaaS đóng góp phần nào trong đám mây lai – Hybrid Cloud?",
        o: [
          "Nền tảng hệ thống",
          "Tối ưu hóa quản lý phần cứng",
          "Cung cấp giải pháp hệ thống",
          "Phần mềm ứng dụng trên đám mây",
        ],
        a: 3,
      },
      {
        q: "Câu 83: Kiểu dịch vụ Security của loại PaaS gồm có những gì?",
        o: [
          "Data isolation, operating environment isolation, SSL",
          "Load balance",
          "Storage encryption and isolation, VM isolation, VLAN, SSL/SSH",
          "Data isolation, operating environment isolation, SSL, Web authentication and authorization",
        ],
        a: 0,
      },
      {
        q: "Câu 84: Các bước tạo máy chủ ảo Google Compute Engine theo thứ tự như thế nào?",
        o: [
          "Config VM / Compute Engine / VM instances / New instances",
          "Compute Engine / VM instances / Config VM / New instances",
          "Compute Engine / VM instances / New instances / Config VM",
          "VM instances / Compute Engine / New instances / Config VM",
        ],
        a: 2,
      },
      {
        q: "Câu 85: Khó khăn khi triển khai sử dụng SaaS ở các doanh nghiệp?",
        o: [
          "An ninh thông tin",
          "Tất cả",
          "Thói quen người dùng",
          "Hệ thống cũ đang hoạt động",
        ],
        a: 1,
      },
      {
        q: "Câu 86: Private Cloud là mô hình dịch vụ điện toán đám mây được xây dựng để phục vụ cho?",
        o: [
          "Công cộng.",
          "Nội bộ một tổ chức xã hội.",
          "Nền tảng điện toán đám mây.",
          "Riêng cho một cộng đồng nào đó.",
        ],
        a: 1,
      },
      {
        q: "Câu 87: Khả năng đáp ứng nhanh theo nhu cầu của dịch vụ đám mây được hiểu như thế nào?",
        o: [
          "Là dịch vụ bảo mật ứng dụng trên điện toán đám mây.",
          "Là dịch vụ chia sẻ ứng dụng cho nhiều người dùng.",
          "Là dịch vụ đáp ứng nhanh theo nhu cầu người dùng.",
          "Là dịch vụ sử dụng được truy cập qua Internet.",
        ],
        a: 2,
      },
      {
        q: "Câu 88: Đám mây công cộng cung cấp những dịch vụ nào?",
        o: [
          "Platform-as-a-Service và Software-as-a-Service",
          "Infrastructure-as-a-Service",
          "Infrastructure-as-a-Service và Software-as-a-Service",
          "Infrastructure-as-a-Service, Platform-as-a-Service và Software-as-a-Service",
        ],
        a: 3,
      },
      {
        q: "Câu 89: Dịch vụ lưu trữ đám mây OneDrive là sản phẩm của công ty nào?",
        o: ["Microsoft", "Google", "Amazon", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 90: Nền tảng nào không phải là nền tảng của điện toán đám mây?",
        o: [
          "Windows Azure",
          "Amazon Web Services",
          "Facebook",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 91: Tính năng nào không được Google hỗ trợ cho một máy chủ ảo?",
        o: ["Quotas", "E-mail", "Metadata", "Image"],
        a: 1,
      },
      {
        q: "Câu 92: Hình thức được sử dụng nhiều nhất trong điện toán đám mây là?",
        o: [
          "Dữ liệu như một dịch vụ (DaaS)",
          "Nền tảng như một dịch vụ (PaaS)",
          "Cơ sở hạ tầng như một dịch vụ (IaaS)",
          "SaaS",
        ],
        a: 3,
      },
      {
        q: "Câu 93: Thứ tự đúng của mô hình điện toán máy chủ ảo?",
        o: [
          "Client – Application – Platform – Infrastructure – Server.",
          "Client – Infrastructure – Platform – Application – Server.",
          "Client – Platform – Application – Infrastructure – Server.",
          "Client – Application – Infrastructure – Server – Platform.",
        ],
        a: 0,
      },
      {
        q: "Câu 94: Kiểu dịch vụ Service measurement của loại SaaS gồm có những gì?",
        o: [
          "Physical resource metering",
          "Application usage metering",
          "Network, storage, and server virtualization",
          "Logic resource usage metering",
        ],
        a: 1,
      },
      {
        q: "Câu 95: Công nghệ điện toán đám mây được dùng để thay thế cho?",
        o: [
          "Các hệ thống phần mềm nâng cấp thường xuyên.",
          "Các máy tính có cấu hình cao, đắt tiền.",
          "Tất cả các đáp án khác đều đúng.",
          "Trung tâm dữ liệu tập trung.",
        ],
        a: 2,
      },
      {
        q: "Câu 96: Muốn triển khai xây dựng mô hình điện toán đám mây riêng Private Cloud thì lựa chọn mô hình của nhà cung cấp nào?",
        o: ["VMware.", "Microsoft.", "IBM.", "IBM, VMware, Microsoft."],
        a: 3,
      },
      {
        q: "Câu 97: App Engine PHP SDK của hãng nào?",
        o: ["Google.", "IBM.", "Amazon.", "Oracle."],
        a: 0,
      },
      {
        q: "Câu 98: Theo sơ đồ Google App Engine được sử dụng trong tài liệu ôn tập, có bao nhiêu thành phần chính?",
        o: ["8", "5", "7", "6"],
        a: 3,
      },
      {
        q: "Câu 99: Doanh nghiệp muốn giữ dữ liệu nhạy cảm trên đám mây riêng và mở rộng tải sang đám mây công cộng khi cần. Mô hình nào phù hợp?",
        o: [
          "Đám mây công cộng.",
          "Đám mây cộng đồng.",
          "Đám mây lai.",
          "Đám mây riêng.",
        ],
        a: 2,
      },
      {
        q: "Câu 100: Kiểu dịch vụ Service measurement của loại PaaS gồm có những gì?",
        o: [
          "Network, storage, and server virtualization",
          "Logic resource usage metering",
          "Application usage metering",
          "Physical resource metering",
        ],
        a: 1,
      },
      {
        q: "Câu 101: Dịch vụ nào sau đây không phải là một dạng của điện toán đám mây?",
        o: [
          "Platform as a Service.",
          "Infrastructure as a Service.",
          "Hardware as a Service.",
          "Software as a Service.",
        ],
        a: 2,
      },
      {
        q: "Câu 102: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ IaaS?",
        o: ["2", "4", "1", "3"],
        a: 3,
      },
      {
        q: "Câu 103: Một tổ chức quyết định sử dụng SaaS khi cần?",
        o: [
          "Bảo trì.",
          "Giá cả.",
          "Tất cả các lý do khác.",
          "Kinh doanh phần mềm.",
        ],
        a: 2,
      },
      {
        q: "Câu 104: Doanh nghiệp có thể lựa chọn Public Cloud cho trường hợp nào sau đây nếu nhà cung cấp đáp ứng yêu cầu an ninh, tuân thủ và nghiệp vụ?",
        o: [
          "Người dùng có các ứng dụng Software-as-a-Service từ một nhà cung cấp có chiến lược an ninh thực hiện tốt.",
          "Người dùng có các ứng dụng Infrastructure-as-a-Service từ một nhà cung cấp có chiến lược an ninh thực hiện tốt.",
          "Người dùng có các ứng dụng Platform-as-a-Service từ một nhà cung cấp có chiến lược an ninh thực hiện tốt.",
          "Cả 3 phương án khác.",
        ],
        a: 3,
      },
      {
        q: "Câu 105: Kiểu dịch vụ Service monitoring của loại SaaS gồm có những gì?",
        o: [
          "Physical resource monitoring",
          "Logic resource monitoring",
          "Application monitoring",
          "Application monitoring, logic resource monitoring",
        ],
        a: 2,
      },
      {
        q: "Câu 106: Public Clouds là gì?",
        o: [
          "Là đám mây được chia sẻ bởi một số tổ chức và hỗ trợ một cộng đồng cụ thể có mối quan tâm chung.",
          "Hạ tầng đám mây được cung cấp để công chúng sử dụng, do nhà cung cấp vận hành.",
          "Là đám mây được cung cấp bên trong của một tổ chức xã hội.",
          "Là đám mây công cộng cố gắng cung cấp cho người tiêu dùng các phần tử công nghệ thông tin tốt nhất.",
        ],
        a: 1,
      },
      {
        q: "Câu 107: Dịch vụ nào sau đây cung cấp dung lượng lưu trữ tệp miễn phí cho tài khoản Google cá nhân?",
        o: [
          "Cloud SQL",
          "Compute Engine",
          "Google Drive",
          "Preview Cloud Datastore",
        ],
        a: 2,
      },
      {
        q: "Câu 108: Một ứng dụng SaaS có thể dùng kiến trúc multi-tenant để phục vụ nhiều khách hàng, đồng thời tách biệt dữ liệu của họ. Đúng hay sai?",
        o: [
          "Sai.",
          "Đúng.",
          "Không chọn đáp án này.",
          "Cả ba phương án còn lại đều sai.",
        ],
        a: 1,
      },
      {
        q: "Câu 109: Kiểu dịch vụ Security của loại IaaS gồm có những gì?",
        o: [
          "Storage encryption and isolation, VM isolation, VLAN, SSL/SSH",
          "Data isolation, operating environment isolation, SSL",
          "Load balance",
          "Data isolation, operating environment isolation, SSL, Web authentication and authorization",
        ],
        a: 0,
      },
      {
        q: "Câu 110: Mô hình dịch vụ trong kiến trúc của điện toán đám mây là gì?",
        o: [
          "Software-as-a-Service",
          "Infrastructure-as-a-Service",
          "Cả 3 mô hình dịch vụ",
          "Platform-as-a-Service",
        ],
        a: 2,
      },
      {
        q: "Câu 111: Multi-tenancy là một dạng kiến trúc trong SaaS, nó cho phép:",
        o: [
          "Các doanh nghiệp cùng thuê một tòa nhà.",
          "Một ứng dụng phần mềm phục vụ nhiều khách hàng.",
          "Không chọn đáp án này.",
          "Mỗi ứng dụng chỉ được phép phục vụ đúng một khách hàng và không chia sẻ hạ tầng.",
        ],
        a: 1,
      },
      {
        q: "Câu 112: Phát biểu nào sai về đám mây công cộng?",
        o: [
          "Các đám mây được lưu trữ đầy đủ và được nhà cung cấp đám mây quản lý.",
          "Là mô hình các dịch vụ đám mây được bên thứ ba cung cấp.",
          "Đám mây tồn tại bên trong tường lửa của các tổ chức và được tổ chức quản lý trực tiếp.",
          "Các đám mây tồn tại ngoài tường lửa của công ty và tổ chức sử dụng.",
        ],
        a: 2,
      },
      {
        q: "Câu 113: Dịch vụ nào của đám mây Google không phát triển theo mô hình SaaS?",
        o: ["Google Maps", "Google App Engine", "Google Drive", "Gmail"],
        a: 1,
      },
      {
        q: "Câu 114: Phát biểu nào sau đây sai về App Engine standard environment?",
        o: [
          "App Engine cung cấp các môi trường thực thi do Google quản lý.",
          "Delphi là một runtime tích hợp được App Engine standard hỗ trợ chính thức.",
          "Nhà phát triển có thể triển khai ứng dụng viết bằng một runtime được hỗ trợ.",
          "App Engine hỗ trợ các runtime như Python, Java và PHP.",
        ],
        a: 1,
      },
      {
        q: "Câu 115: Phát biểu nào đúng về việc tiếp cận dịch vụ Public Cloud?",
        o: [
          "Chỉ nhân viên nội bộ của một tổ chức được phép sử dụng.",
          "Mọi dịch vụ đều được miễn phí không giới hạn.",
          "Dịch vụ được cung cấp rộng rãi theo điều kiện của nhà cung cấp; có thể miễn phí trong hạn mức hoặc tính phí.",
          "Người dùng không cần tuân thủ điều khoản dịch vụ.",
        ],
        a: 2,
      },
      {
        q: "Câu 116: Nền tảng như một dịch vụ PaaS được phát triển dựa trên nền tảng nào?",
        o: [
          "Software as a Service.",
          "Infrastructure as a Service.",
          "Desktop as a Service (DaaS).",
          "Communications as a Service (CaaS).",
        ],
        a: 1,
      },
      {
        q: "Câu 117: Kiểu dịch vụ Service level management của loại IaaS gồm có những gì?",
        o: [
          "Dynamic orchestration of applications",
          "Multi-tenancy, network, storage",
          "Dynamic orchestration of physical resources",
          "Dynamic orchestration of logic resources",
        ],
        a: 2,
      },
      {
        q: "Câu 118: Trong giai đoạn preview khi Google App Engine ra mắt năm 2008, hạn mức lưu trữ miễn phí ban đầu là bao nhiêu?",
        o: ["100MB", "1GB", "500MB", "250MB"],
        a: 2,
      },
      {
        q: "Câu 119: Community Cloud là mô hình dịch vụ điện toán đám mây được xây dựng để phục vụ cho?",
        o: [
          "Công cộng.",
          "Riêng cho một cộng đồng nào đó.",
          "Nền tảng điện toán đám mây.",
          "Nội bộ một tổ chức xã hội.",
        ],
        a: 1,
      },
      {
        q: "Câu 120: Kiểu dịch vụ Service integration and combination của loại PaaS gồm có những gì?",
        o: ["Usage metering", "SOA", "SOA, mashup", "Load balance"],
        a: 1,
      },
      {
        q: "Câu 121: Kiểu dịch vụ Service level management của loại SaaS gồm có những gì?",
        o: [
          "Dynamic orchestration of physical resources",
          "Dynamic orchestration of applications",
          "Multi-tenancy, network, storage",
          "Dynamic orchestration of logic resources",
        ],
        a: 1,
      },
      {
        q: "Câu 122: Doanh nghiệp triển khai đám mây riêng gặp những khó khăn gì?",
        o: [
          "Trách nhiệm thiết lập và bảo trì đám mây.",
          "Chi phí hoạt động liên tục của đám mây có thể vượt chi phí sử dụng một đám mây chung.",
          "Chi phí của việc thiết lập đám mây bên trong có thể có chiều hướng ngăn cản việc sử dụng.",
          "Cả 3 đáp án khác.",
        ],
        a: 3,
      },
      {
        q: "Câu 123: Các phần mềm dịch vụ (SaaS) được cài đặt ở đâu khi sử dụng?",
        o: [
          "Trên máy tính.",
          "Trên thiết bị di động.",
          "Không cần cài đặt, nó được phân phối thông qua mạng.",
          "Thiết bị nào sử dụng đều phải cài đặt phần mềm.",
        ],
        a: 2,
      },
      {
        q: "Câu 124: Khi sử dụng một dịch vụ Public Cloud có tính phí, bên nào thu phí tài nguyên đám mây theo hợp đồng sử dụng?",
        o: [
          "Miễn phí.",
          "Nhà cung cấp dịch vụ mạng và nhà cung cấp dịch vụ điện toán đám mây.",
          "Nhà cung cấp dịch vụ điện toán đám mây.",
          "Nhà cung cấp dịch vụ mạng.",
        ],
        a: 2,
      },
      {
        q: "Câu 125: Kiểu dịch vụ Service level management của loại PaaS gồm có những gì?",
        o: [
          "Dynamic orchestration of physical resources",
          "Application usage metering",
          "Dynamic orchestration of applications",
          "Dynamic orchestration of logic resources",
        ],
        a: 3,
      },
      {
        q: "Câu 126: Ứng dụng nào sau đây không sử dụng dịch vụ của đám mây?",
        o: ["Google Drive", "OpenOffice", "Facebook", "Google Docs"],
        a: 1,
      },
      {
        q: "Câu 127: Hãng Viettel IDC là nhà cung cấp các dịch vụ điện toán đám mây được thành lập vào năm nào?",
        o: ["2011", "2008", "2010", "2009"],
        a: 1,
      },
      {
        q: "Câu 128: Công ty bạn đang làm việc kinh doanh bằng cách cho thuê các máy chủ host làm dịch vụ cho web và email, đây là mô hình kinh doanh dựa trên loại dịch vụ nào?",
        o: ["SaaS", "IaaS", "PaaS và IaaS", "PaaS"],
        a: 1,
      },
      {
        q: "Câu 129: Phần mềm như một dịch vụ SaaS được phát triển dựa trên nền tảng nào?",
        o: [
          "Desktop as a Service (DaaS)",
          "Infrastructure as a Service",
          "Communications as a Service (CaaS)",
          "Platform as a Service",
        ],
        a: 3,
      },
      {
        q: "Câu 130: Đâu là lợi thế khi sử dụng các phần mềm dịch vụ (SaaS)?",
        o: [
          "Được dùng miễn phí",
          "Không mất phí đầu tư hạ tầng và nhân sự quản lý",
          "Không mất chi phí đầu tư phần cứng, chỉ phải mua phần mềm cài đặt",
          "Chi phí đầu tư rẻ, cần ít người quản lý",
        ],
        a: 1,
      },
      {
        q: "Câu 131: Một doanh nghiệp cung cấp dịch vụ SaaS thì các sản phẩm của nó thuộc loại mô hình nào?",
        o: [
          "Infrastructure as a Service",
          "Computing as a Service",
          "Software as a Service (SaaS)",
          "Platform as a Service",
        ],
        a: 2,
      },
      {
        q: "Câu 132: Kiểu dịch vụ Service integration and combination của loại SaaS gồm có những gì?",
        o: ["Usage metering", "SOA, mashup", "Load balance", "SOA"],
        a: 1,
      },
      {
        q: "Câu 133: Phát biểu nào đúng về đám mây riêng?",
        o: [
          "Các đám mây được lưu trữ đầy đủ và được nhà cung cấp đám mây quản lý.",
          "Các đám mây tồn tại ngoài tường lửa của công ty và tổ chức sử dụng.",
          "Là mô hình các dịch vụ đám mây được bên thứ ba cung cấp.",
          "Đám mây tồn tại bên trong tường lửa của các tổ chức và được tổ chức quản lý trực tiếp.",
        ],
        a: 3,
      },
      {
        q: "Câu 134: Chức năng Preview Cloud Datastore (cơ sở dữ liệu ảo) của điện toán máy chủ ảo do hãng nào cung cấp?",
        o: ["Microsoft", "IBM", "Google", "Amazon"],
        a: 2,
      },
      {
        q: "Câu 135: Mô hình triển khai nào của điện toán đám mây sẽ cho phép các nhà quản lý IT toàn quyền điều khiển các nguồn lực sẵn có?",
        o: ["Hybrid Cloud", "Private Cloud", "Public Cloud", "Community Cloud"],
        a: 1,
      },
      {
        q: "Câu 136: Dịch vụ EC2 của Amazon ra mắt lần đầu vào năm nào?",
        o: ["2008", "2007", "2009", "2006"],
        a: 3,
      },
      {
        q: "Câu 137: EC2 là nền tảng cơ sở hạ tầng điện toán đám mây do hãng nào cung cấp?",
        o: ["Google", "Amazon", "Microsoft", "IBM"],
        a: 1,
      },
      {
        q: "Câu 138: Dịch vụ bảo mật (secure service) trong môi trường đám mây hướng tới mục tiêu nào?",
        o: [
          "Là dịch vụ đáp ứng nhanh theo nhu cầu người dùng.",
          "Là dịch vụ sử dụng được truy cập qua Internet.",
          "Là dịch vụ bảo mật ứng dụng trên điện toán đám mây.",
          "Là dịch vụ chia sẻ ứng dụng cho nhiều người dùng.",
        ],
        a: 2,
      },
      {
        q: "Câu 139: Các dịch vụ điện toán đám mây theo mô hình triển khai thực tế Private Cloud cho phép:",
        o: [
          "Miễn phí truy cập và phổ biến.",
          "Bảo mật truy cập và không phổ biến.",
          "Không cho truy cập.",
          "Trả tiền cho truy cập.",
        ],
        a: 1,
      },
      {
        q: "Câu 140: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ SaaS?",
        o: ["3", "4", "1", "2"],
        a: 2,
      },
      {
        q: "Câu 141: Một trong số các hạn chế của SaaS là gì?",
        o: [
          "Hệ thống máy chủ",
          "Hệ điều hành máy tính",
          "Cấu hình xử lý của máy tính",
          "Kết nối mạng Internet",
        ],
        a: 3,
      },
      {
        q: "Câu 142: Dịch vụ Email web-based thực hiện dựa trên nền tảng dịch vụ nào của điện toán đám mây?",
        o: [
          "Infrastructure as a Service",
          "Software as a Service",
          "Computing as a Service",
          "Platform as a Service",
        ],
        a: 1,
      },
      {
        q: "Câu 143: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ PaaS?",
        o: ["3", "1", "2", "4"],
        a: 2,
      },
      {
        q: "Câu 144: Phần mềm dịch vụ (SaaS) có thể được ứng dụng cho những thiết bị nào?",
        o: [
          "Máy tính",
          "Điện thoại",
          "Ô tô",
          "Tất cả các thiết bị có kết nối mạng, Internet",
        ],
        a: 3,
      },
      {
        q: "Câu 145: Kiểu dịch vụ Service integration and combination của loại IaaS gồm có những gì?",
        o: ["SOA, mashup", "Load balance", "Usage metering", "SOA"],
        a: 1,
      },
      {
        q: "Câu 146: Mô hình đám mây riêng có lợi thế gì so với đám mây chung?",
        o: [
          "Phân bố tải workload cho các ứng dụng được sử dụng bởi nhiều người.",
          "Đám mây được lưu trữ đầy đủ và được quản lý chặt chẽ.",
          "Kiểm soát chi tiết hơn trên các tài nguyên khác nhau đang tạo thành một đám mây, mang lại tất cả các tùy chọn cấu hình có sẵn.",
          "Có thể phục vụ tốt các quy trình nghiệp vụ tới hạn, an toàn, như các khoản thanh toán của khách, xử lý bảng lương của nhân viên…",
        ],
        a: 2,
      },
      {
        q: "Câu 147: Phần mềm Office 365 của Microsoft tương thích với hệ điều hành nào?",
        o: ["Linux", "Windows 8", "Tất cả", "Mac"],
        a: 2,
      },
      {
        q: "Câu 148: Kiểu dịch vụ Service optimization của loại SaaS gồm có những gì?",
        o: [
          "Network, storage, and server virtualization",
          "Multi-tenancy",
          "Application usage metering",
          "Large-scale distributed file system, database, middleware",
        ],
        a: 1,
      },
      {
        q: "Câu 149: Private Cloud được hiểu đơn giản là gì?",
        o: [
          "Một dịch vụ điện toán đám mây cho một cộng đồng nào đó.",
          "Một kiến trúc đám mây riêng duy trì trong trung tâm dữ liệu doanh nghiệp.",
          "Không chọn đáp án này.",
          "Một dịch vụ điện toán đám mây tiêu chuẩn cung cấp qua mạng Internet.",
        ],
        a: 1,
      },
      {
        q: "Câu 150: Trong công nghệ điện toán đám mây hiện đại thì vấn đề số một là gì?",
        o: ["Khả năng truy cập", "Bảo mật", "Quá nhiều nền tảng", "Đắt đỏ"],
        a: 1,
      },
      {
        q: "Câu 151: Dịch vụ Google Docs có phải là một dạng của điện toán đám mây?",
        o: [
          "Sai",
          "Không chọn đáp án này.",
          "Đúng",
          "Cả ba phương án còn lại đều sai.",
        ],
        a: 2,
      },
      {
        q: "Câu 152: Một môi trường máy tính cho phép người dùng có thể truy cập vào các máy tính ảo thì thuộc mô hình nào của điện toán đám mây?",
        o: [
          "Computing as a Service",
          "Platform as a Service",
          "Infrastructure as a Service",
          "Software as a Service",
        ],
        a: 2,
      },
      {
        q: "Câu 153: Software as a Service có thể được hiểu như thế nào?",
        o: [
          "Dịch vụ giao hàng các phần mềm.",
          "Dịch vụ cho phép Download các phần mềm.",
          "Dịch vụ cho thuê phần mềm qua mạng.",
          "Mô hình phân phối các phần mềm.",
        ],
        a: 3,
      },
      {
        q: "Câu 154: Hội thảo “Hành trình tới công nghệ điện toán đám mây” do Microsoft tổ chức ngày 2/3/2011 ở đâu?",
        o: ["Huế", "Đà Nẵng", "Hà Nội", "Thành phố Hồ Chí Minh"],
        a: 2,
      },
      {
        q: "Câu 155: Bộ phần mềm Visual Studio Online của Microsoft ứng dụng công nghệ nào?",
        o: [
          "Web 2.0",
          "Client – Server",
          "Điện toán đám mây",
          "Máy chủ ảo hóa",
        ],
        a: 2,
      },
      {
        q: "Câu 156: Nhà cung cấp ứng dụng hoàn chỉnh qua mạng để khách hàng sử dụng trực tiếp thuộc mô hình dịch vụ nào?",
        o: [
          "Nó thuộc loại dịch vụ đo lường cho khách hàng",
          "Nó thuộc loại SaaS",
          "Nó thuộc dạng dịch vụ máy tính hạ tầng",
          "Nó thuộc loại dịch vụ truy cập qua Internet",
        ],
        a: 1,
      },
      {
        q: "Câu 157: Giả sử công ty của bạn cần xây dựng hệ thống Email cho toàn bộ nhân viên và quản lý thông tin Email như một diễn đàn.Khi đó, cần lựa chọn dạng dịch vụ nào để triển khai?",
        o: ["Community Cloud", "Public Cloud", "Private Cloud", "Hybrid Cloud"],
        a: 2,
      },
      {
        q: "Câu 158: Dịch vụ nào không phải là dịch vụ lưu trữ đám mây?",
        o: ["Google Drive", "Office 365", "Dropbox", "SkyDrive"],
        a: 1,
      },
      {
        q: "Câu 159: Trong các loại phần mềm sau, loại nào có thể được cung cấp theo mô hình SaaS?",
        o: [
          "Phần mềm quản lý khách hàng",
          "Phần mềm kế toán",
          "Phần mềm quản lý nhân sự",
          "Cả ba loại phần mềm A, B và C",
        ],
        a: 3,
      },
      {
        q: "Câu 160: Các đám mây lai (Hybrid Cloud) phù hợp cho những đối tượng nào?",
        o: [
          "Cá nhân",
          "Doanh nghiệp",
          "Tổ chức nhà nước",
          "Doanh nghiệp, cá nhân",
        ],
        a: 1,
      },
      {
        q: "Câu 161: Doanh nghiệp công nghệ Việt Nam nào duy nhất tham gia sự kiện tại Nhật, ngày 26/2/2014, do tập đoàn Nikkei tổ chức?",
        o: ["VNTT", "VNPT", "FPT", "Viettel IDC"],
        a: 2,
      },
      {
        q: "Câu 162: Google App Engine cung cấp bao nhiêu loại môi trường chính: standard và flexible?",
        o: ["3", "4", "1", "2"],
        a: 3,
      },
      {
        q: "Câu 163: Sử dụng Google App Engine và App Engine PHP SDK để chạy website hỗ trợ ngôn ngữ và cơ sở dữ liệu nào?",
        o: ["Java và Oracle", "PHP và MySQL", "ASP và Access", "PHP và SQL"],
        a: 1,
      },
      {
        q: "Câu 164: Các dịch vụ như Gmail, Google Docs, Facebook thuộc loại dịch vụ nào của điện toán đám mây?",
        o: [
          "Platform-as-a-Service",
          "Infrastructure-as-a-Service",
          "Không có đáp án đúng",
          "Software-as-a-Service",
        ],
        a: 3,
      },
      {
        q: "Câu 165: Yếu tố nào không phải là lợi thế của SaaS so với các đám mây riêng?",
        o: [
          "Chi phí triển khai và nâng cấp",
          "Bảo mật",
          "Tốc độ triển khai",
          "Hỗ trợ người dùng",
        ],
        a: 1,
      },
      {
        q: "Câu 166: Tính năng nào sau đây không có trong ứng dụng điện toán đám mây Private Cloud?",
        o: [
          "Tính đàn hồi nhanh (rapid elasticity)",
          "Cổng thông tin tự phục vụ",
          "Thanh toán tiền theo đồng hồ đo",
          "Kết nối trực tiếp đến nhà hỗ trợ",
        ],
        a: 2,
      },
      {
        q: "Câu 167: Theo chương trình AWS Free Tier cũ dành cho tài khoản tạo trước ngày 15/07/2025, ưu đãi EC2 trong hạn mức áp dụng bao lâu kể từ khi tạo tài khoản?",
        o: ["3 tháng", "9 tháng", "12 tháng", "6 tháng"],
        a: 2,
      },
      {
        q: "Câu 168: Công việc nào thuộc quản trị hạ tầng của nhà cung cấp, thay vì sử dụng chức năng ứng dụng SaaS?",
        o: [
          "Đọc và gửi email qua webmail.",
          "Quản trị cụm máy chủ vật lý chạy dịch vụ.",
          "Quản lý khách hàng trong ứng dụng CRM trực tuyến.",
          "Soạn thảo tài liệu trong ứng dụng web.",
        ],
        a: 1,
      },
      {
        q: "Câu 169: Các đám mây lai hầu hết thường được sử dụng làm:",
        o: [
          "Khả năng bổ sung hay khả năng bùng nổ, nơi đám mây được sử dụng cho các đột biến bất ngờ.",
          "Một nơi thí nghiệm, nơi đám mây được sử dụng với vùng làm việc tạm thời.",
          "Tất cả các ý",
          "Một đối tác, nơi các ứng dụng lưu trú trong đám mây và các ứng dụng quan trọng vẫn còn trên trang web.",
        ],
        a: 2,
      },
      {
        q: "Câu 170: VMware vSphere là phần mềm gì?",
        o: [
          "Công cụ chỉ dùng để thiết kế giao diện web.",
          "Nền tảng ảo hóa máy chủ và quản lý hạ tầng máy ảo.",
          "Hệ quản trị cơ sở dữ liệu quan hệ.",
          "Ứng dụng soạn thảo văn bản.",
        ],
        a: 1,
      },
      {
        q: "Câu 171: Khi đưa một phần dữ liệu và ứng dụng lên đám mây công cộng trong mô hình lai, những rủi ro nào cần được đánh giá?",
        o: [
          "Không biết các vị trí vật lý của dữ liệu.",
          "Tất cả các ý",
          "Không trực tiếp kiểm soát về sao lưu, tăng nguy cơ mất dữ liệu.",
          "Không kiểm soát trên dữ liệu, bảo mật và bảo trì được giao phó cho nhà cung cấp dịch vụ của bạn.",
        ],
        a: 1,
      },
      {
        q: "Câu 172: Storage vMotion trong vSphere để làm gì?",
        o: [
          "Đảm bảo tính liên tục của công việc khi một hệ thống có lỗi",
          "Di chuyển động các máy ảo sang các phân vùng storage khác mà không có downtime",
          "Mở rộng tài nguyên CPU, RAM của host mà không cần có downtime",
          "Tự động sao lưu toàn bộ máy ảo theo lịch cố định.",
        ],
        a: 1,
      },
      {
        q: "Câu 173: Điều nào không được tự động bảo đảm chỉ bằng việc triển khai đám mây lai?",
        o: [
          "Có thể kết hợp tài nguyên đám mây riêng và công cộng.",
          "An toàn tuyệt đối và không cần cấu hình hay giám sát bảo mật.",
          "Có thể mở rộng tải sang đám mây công cộng.",
          "Có thể giữ một phần dữ liệu trong hạ tầng riêng.",
        ],
        a: 1,
      },
      {
        q: "Câu 174: Google Compute Engine là giải pháp gì?",
        o: [
          "Giải pháp cung cấp nền tảng để phát triển ứng dụng trên đám mây",
          "Giải pháp máy chủ ảo trên đám mây của Google cho các cá nhân và doanh nghiệp",
          "Giải pháp triển khai đám mây riêng cho doanh nghiệp",
          "Giải pháp ảo hóa cho máy chủ vật lý cá nhân",
        ],
        a: 1,
      },
      {
        q: "Câu 175: Các dịch vụ từ đám mây công cộng nào có thể kết hợp đưa vào đám mây lai?",
        o: ["Google", "Microsoft", "Tất cả", "Amazon"],
        a: 2,
      },
      {
        q: "Câu 176: Đâu là lợi ích của đám mây lai?",
        o: [
          "Hỗ trợ khả năng kiểm soát dữ liệu đa dạng, tăng tốc độ truy cập giữa hệ thống và các ứng dụng.",
          "Đám mây lai hỗ trợ xử lý cao điểm - nhiều thời điểm khi khả năng xử lý của đám mây nội bộ không thể đáp ứng được nhu cầu trong doanh nghiệp.",
          "Doanh nghiệp có thể cắt giảm khả năng lưu trữ nội bộ bởi vì bạn có thể di chuyển tất cả các dữ liệu không cần thiết lên đám mây bên ngoài của bạn và chỉ lưu trữ tại chỗ dữ liệu quan trọng nhất.",
          "Tất cả các ý",
        ],
        a: 3,
      },
      {
        q: "Câu 177: Nhóm ngôn ngữ nào dưới đây có runtime được hỗ trợ trên Google App Engine?",
        o: [
          "VB 6.0 và Pascal.",
          "Delphi và VB 6.0.",
          "Python, Java và PHP.",
          "Assembly và Pascal.",
        ],
        a: 2,
      },
      {
        q: "Câu 178: Dịch vụ điện toán đám mây Google cung cấp gồm những gì?",
        o: [
          "Google Compute Engine",
          "Google Apps",
          "Tất cả các ý",
          "Google App Engine",
        ],
        a: 2,
      },
      {
        q: "Câu 179: Đám mây Hybrid (lai) là gì?",
        o: [
          "Là mô hình trong đó hạ tầng đám mây được sở hữu bởi một tổ chức và phục vụ cho người dùng của tổ chức đó.",
          "Là mô hình mà hạ tầng đám mây được một tổ chức sở hữu và cung cấp dịch vụ rộng rãi cho tất cả các khách hàng thông qua hạ tầng mạng Internet hoặc các mạng công cộng diện rộng.",
          "Là mô hình bắt buộc mọi ứng dụng phải chạy trên một máy chủ vật lý duy nhất.",
          "Là mô hình bao gồm hai hoặc nhiều hơn các đám mây (đám mây riêng và đám mây công cộng) tích hợp với nhau cho phép chia sẻ hạ tầng hoặc đáp ứng nhu cầu trao đổi dữ liệu.",
        ],
        a: 3,
      },
      {
        q: "Câu 180: Trong Windows Azure PaaS thời kỳ đầu, việc nào không phải mục tiêu trực tiếp của dịch vụ triển khai ứng dụng?",
        o: [
          "Chạy ứng dụng xử lý song song.",
          "Triển khai ứng dụng web có khả năng mở rộng.",
          "Cấu hình các thiết bị mạng vật lý trong mạng LAN của khách hàng.",
          "Chạy ứng dụng web sử dụng cơ sở dữ liệu quan hệ.",
        ],
        a: 2,
      },
      {
        q: "Câu 181: Trong kiến trúc Windows Azure Platform thời kỳ đầu, bộ ba thành phần nào sau đây là phù hợp?",
        o: [
          "Windows Server 2008, SQL Azure, Windows Azure Platform AppFabric",
          "Windows Server 2008, SQL Server, IIS",
          "Windows Server 2008, SQL Azure, Apache, Windows Azure Platform AppFabric",
          "Windows Azure, SQL Azure, Windows Azure Platform AppFabric",
        ],
        a: 3,
      },
      {
        q: "Câu 182: Distributed Resource Scheduler & Distributed Power Manager trong vSphere để làm gì?",
        o: [
          "Quản lý tập trung và theo dõi các kết nối mạng.",
          "Tạo các máy ảo thông qua các template.",
          "Tự động cân bằng tải trên storage.",
          "DRS phân bổ, cân bằng tài nguyên CPU/RAM; DPM điều chỉnh trạng thái nguồn của host để tiết kiệm điện.",
        ],
        a: 3,
      },
      {
        q: "Câu 183: Theo tài liệu Configuration Maximums của VMware vSphere 5.5, mỗi ESXi host hỗ trợ tối đa bao nhiêu CPU logic và RAM?",
        o: [
          "160 CPU logic và 2 TB RAM",
          "8 CPU logic và 1 TB RAM",
          "32 CPU logic và 3 TB RAM",
          "320 CPU logic và 4 TB RAM",
        ],
        a: 3,
      },
      {
        q: "Câu 184: Trong bộ sản phẩm VMware vCloud Suite thời kỳ đầu được đề cập trong tài liệu, nhóm sản phẩm nào sau đây được sử dụng?",
        o: [
          "VMware vCloud Director",
          "VMware vSphere",
          "VMware vCloud Networking and Security và vCenter Site Recovery Manager",
          "Tất cả các ý trên",
        ],
        a: 3,
      },
      {
        q: "Câu 185: Google App Engine là gì?",
        o: [
          "Là dịch vụ cung cấp ứng dụng trên đám mây.",
          "Là dịch vụ PaaS.",
          "Là phần mềm ảo hóa của Google.",
          "Là dịch vụ phân phối hạ tầng máy tính.",
        ],
        a: 1,
      },
      {
        q: "Câu 186: SQL Azure là gì?",
        o: [
          "Phần mềm chỉ cài đặt trên máy cá nhân.",
          "Dịch vụ chỉ lưu tệp ảnh và video.",
          "Dịch vụ cơ sở dữ liệu quan hệ do Microsoft quản lý trên đám mây, dựa trên công nghệ SQL Server.",
          "Một hệ điều hành máy chủ.",
        ],
        a: 2,
      },
      {
        q: "Câu 187: Dịch vụ Google Cloud SQL của Google là loại hình dịch vụ nào (trả lời đúng nhất)?",
        o: [
          "Infrastructure as a Service",
          "Software as a Service",
          "Platform as a Service",
          "Application monitoring, logic resource monitoring",
        ],
        a: 2,
      },
      {
        q: "Câu 188: SmartCloud Enterprise là giải pháp đám mây do công ty nào phát triển?",
        o: ["VMware", "Oracle", "Microsoft", "IBM"],
        a: 3,
      },
      {
        q: "Câu 189: SQL Azure dựa vào cơ cấu cơ sở dữ liệu quan hệ nào sau đây?",
        o: ["Oracle", "MySQL", "Microsoft SQL Server", "DB2"],
        a: 2,
      },
      {
        q: "Câu 190: Đám mây SmartCloud Enterprise làm việc với các hệ điều hành nào?",
        o: [
          "Windows, Mac OS",
          "Linux, Windows, MS-DOS, Android",
          "Windows, Linux",
          "Linux, Windows, Ubuntu, Mac OS",
        ],
        a: 2,
      },
      {
        q: "Câu 191: Chức năng Storage DRS trong vSphere để làm gì?",
        o: [
          "Bảo vệ dữ liệu, backup và restore các máy ảo",
          "Tự động cân bằng tải trên storage",
          "Cho phép tạo, cấu hình các vùng bảo mật",
          "Thiết lập lưu trữ trong ảo hóa",
        ],
        a: 1,
      },
      {
        q: "Câu 192: VMware vCloud Suite là sản phẩm của công ty nào?",
        o: ["IBM", "Microsoft", "VMware Inc.", "Oracle"],
        a: 2,
      },
      {
        q: "Câu 193: Tính năng chính của Hyper-V là gì?",
        o: [
          "Xây dựng hệ quản trị cơ sở dữ liệu.",
          "Soạn thảo tài liệu văn phòng.",
          "Tạo và vận hành máy ảo trên nền tảng ảo hóa của Microsoft.",
          "Chỉ sao lưu tệp văn bản.",
        ],
        a: 2,
      },
      {
        q: "Câu 194: Chức năng của VMware vCloud Networking and Security là gì?",
        o: [
          "Tạo ra các dịch vụ và mạng ảo độc lập với phần cứng mạng vật lý",
          "Phân bố tài nguyên đám mây",
          "Sao lưu và phục hồi cấu hình đám mây",
          "Khôi phục thảm họa trên đám mây",
        ],
        a: 0,
      },
      {
        q: "Câu 195: vMotion trong vSphere để làm gì?",
        o: [
          "Đảm bảo tính liên tục của công việc khi một hệ thống có lỗi",
          "Di chuyển động các máy ảo sang các phân vùng storage khác mà không có downtime",
          "Di chuyển nhanh chóng các máy ảo sang một hệ thống khác mà không có downtime",
          "Mở rộng tài nguyên CPU, RAM của host mà không cần có downtime",
        ],
        a: 2,
      },
      {
        q: "Câu 196: Sản phẩm VMware Inc. nào cung cấp giải pháp ảo hóa - điện toán đám mây?",
        o: [
          "VMware vCloud Director",
          "Microsoft Word",
          "Cả VMware vCloud Director và VMware vSphere",
          "VMware vSphere",
        ],
        a: 2,
      },
      {
        q: "Câu 197: Chức năng của vCenter Site Recovery Manager là gì?",
        o: [
          "Cho phép tạo ra các dịch vụ mạng ảo",
          "Khôi phục và phục hồi trạng thái trước khi cài đặt",
          "Tự động hóa khôi phục thảm họa cho các ứng dụng trên đám mây",
          "Tự động cập nhật các phiên bản mới cho VMware vCloud Suite",
        ],
        a: 2,
      },
      {
        q: "Câu 198: Windows Azure là gì?",
        o: [
          "Là một phần mềm hỗ trợ cho Windows Server",
          "Là hệ điều hành chạy trên các máy ảo trên đám mây",
          "Nền tảng điện toán đám mây của Microsoft, trước đây mang tên Windows Azure.",
          "Là hệ điều hành máy chủ mới của Microsoft",
        ],
        a: 2,
      },
      {
        q: "Câu 199: Google Compute Engine cung cấp các image hệ điều hành thuộc những nhóm nào?",
        o: [
          "Chỉ Windows desktop.",
          "Windows Server và nhiều bản phân phối Linux được hỗ trợ.",
          "Chỉ hệ điều hành dành cho điện thoại.",
          "Mọi phiên bản hệ điều hành đều được bảo đảm hỗ trợ.",
        ],
        a: 1,
      },
      {
        q: "Câu 200: Máy ảo Azure hỗ trợ các nhóm hệ điều hành nào?",
        o: [
          "Các phiên bản Windows Server và bản phân phối Linux được Azure hỗ trợ.",
          "Chỉ MS-DOS.",
          "Chỉ Android.",
          "Chỉ iOS.",
        ],
        a: 0,
      },
      {
        q: "Câu 201: VMware vCloud Director cung cấp khả năng quản lý tài nguyên ảo qua giao diện nào?",
        o: [
          "Giao diện trên Linux",
          "Giao diện thiết bị chuyên dụng",
          "Giao diện trên Windows",
          "Giao diện web",
        ],
        a: 3,
      },
      {
        q: "Câu 202: Google Cloud Storage chủ yếu cung cấp loại lưu trữ nào?",
        o: [
          "Lưu trữ đối tượng (object storage).",
          "Cơ sở dữ liệu quan hệ.",
          "Bộ nhớ RAM của máy cá nhân.",
          "Kho mã nguồn Git duy nhất.",
        ],
        a: 0,
      },
      {
        q: "Câu 203: Mục nào sau đây là một sản phẩm quản lý đám mây riêng biệt, không phải tính năng của vSphere Distributed Switch?",
        o: [
          "Network Health Check",
          "Configuration Backup & Restore",
          "Roll-back và Recovery",
          "VMware vCloud Director",
        ],
        a: 3,
      },
      {
        q: "Câu 204: Dịch vụ nào của Google dùng để làm nền tảng xây dựng các ứng dụng SaaS?",
        o: [
          "Google Docs",
          "Google Search",
          "Google App Engine",
          "Google Drive",
        ],
        a: 2,
      },
      {
        q: "Câu 205: Trong mô hình Windows Azure thời kỳ đầu gồm Compute, Storage và Fabric, mục nào sau đây là mô hình dịch vụ, không phải tên một thành phần của kiến trúc đó?",
        o: [
          "Windows Azure Fabric",
          "SaaS",
          "Storage Service",
          "Compute Service",
        ],
        a: 1,
      },
      {
        q: "Câu 206: Windows Azure do công ty nào phát triển?",
        o: ["IBM", "Oracle", "Microsoft", "Không có đáp án đúng"],
        a: 2,
      },
      {
        q: "Câu 207: Ba dịch vụ lưu trữ cơ bản được giới thiệu trong Windows Azure Storage thời kỳ đầu là gì?",
        o: [
          "Table, SQL Azure",
          "Blob, Table, Queue",
          "SQL, Table, Queue, Sheet",
          "Blob, Table, Sheet",
        ],
        a: 1,
      },
      {
        q: "Câu 208: Windows Azure Platform là gì?",
        o: [
          "Phần mềm quản lý đám mây ảo",
          "Một hệ điều hành cho máy tính",
          "Nền tảng dịch vụ đám mây của Microsoft để xây dựng, triển khai và vận hành ứng dụng.",
          "Hệ điều hành Windows cho máy chủ đám mây",
        ],
        a: 2,
      },
      {
        q: "Câu 209: Chức năng của VMware vCloud Director là gì?",
        o: [
          "Quản lý mạng ảo",
          "Quản lý tài nguyên vật lý để tạo thành những datacenter ảo",
          "Ảo hóa các máy chủ",
          "Ảo hóa hệ thống mạng",
        ],
        a: 1,
      },
      {
        q: "Câu 210: CPU/Memory Hot Add trong vSphere, khi máy ảo và hệ điều hành khách hỗ trợ, cho phép làm gì?",
        o: [
          "Di chuyển máy ảo sang host khác.",
          "Tự động phục hồi sau thảm họa.",
          "Bổ sung vCPU hoặc RAM cho máy ảo đang chạy mà không cần tắt máy ảo.",
          "Tăng số CPU vật lý lắp trong host bằng phần mềm.",
        ],
        a: 2,
      },
      {
        q: "Câu 211: SmartCloud Enterprise được phát triển theo mô hình nào sau đây?",
        o: ["SaaS", "IaaS", "Tất cả các mô hình", "PaaS"],
        a: 1,
      },
      {
        q: "Câu 212: Khi sử dụng đám mây công cộng, khách hàng phải trả những chi phí nào?",
        o: [
          "Chi phí về quản lý phần cứng.",
          "Chi phí về phần mềm dịch vụ.",
          "Chi phí về bảo trì hệ thống.",
          "Chi phí cho các tài nguyên sử dụng.",
        ],
        a: 3,
      },
    ],
  },
];

export default QUIZ_SETS_DTDM_T;
