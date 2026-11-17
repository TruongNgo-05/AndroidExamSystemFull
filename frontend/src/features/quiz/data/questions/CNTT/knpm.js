const QUIZ_SETS_KNPM = [
  // Kỹ NGHỆ PHẦN MỀM
  {
    id: "ky_nghe_phan_mem",
    majorId: "cntt",
    title: "Kỹ nghệ phần mềm",
    description: "Bộ câu hỏi trắc nghiệm Kỹ nghệ phần mềm ",
    questions: [
      {
        q: "Khái niệm vòng đời phần mềm là gì?",
        o: [
          "Quá trình phát triển từ khi nhận dự án đến khi phần mềm bị loại bỏ.",
          "Quá trình phát triển từ giai đoạn đặc tả đến kiểm định phần mềm.",
          "Quá trình phát triển từ giai đoạn thiết kế đến bảo trì phần mềm.",
          "Quá trình phát triển theo chu kỳ từ giai đoạn đặc tả đến giai đoạn bảo trì phần mềm.",
        ],
        a: 3,
      },
      {
        q: "Trong quá trình phát triển phần mềm, giai đoạn nào có thể lặp lại nhiều lần?",
        o: [
          "Đặc tả, thiết kế, kiểm định.",
          "Đặc tả, thiết kế.",
          "Đặc tả, lập trình, bảo trì.",
          "Đặc tả, thiết kế, lập trình, kiểm định, bảo trì.",
        ],
        a: 3,
      },
      {
        q: "Mô hình thác nước gồm mấy tiến trình?",
        o: ["5", "7", "4", "6"],
        a: 3,
      },
      {
        q: "Trong các mô hình sau, mô hình nào không phải là mô hình phát triển phần mềm?",
        o: [
          "Mô hình làm bản mẫu",
          "Mô hình tuần tự tuyến tính",
          "Mô hình song song",
          "Mô hình RAD",
        ],
        a: 2,
      },
      {
        q: "Trong các mô hình phát triển phần mềm sau, mô hình nào là mô hình thác nước?",
        o: [
          "Mô hình xoắn ốc",
          "Tất cả các phương án đều sai",
          "Mô hình tuần tự tuyến tính",
          "Mô hình làm bản mẫu",
        ],
        a: 2,
      },
      {
        q: "Trong quá trình bàn giao sản phẩm, yêu cầu về đào tạo nghĩa là gì?",
        o: [
          "Công ty phần mềm phải hướng dẫn sử dụng phần mềm cho người sử dụng.",
          "Công ty phần mềm đã phải được đào tạo để sử dụng tốt phần mềm.",
          "Hướng dẫn sử dụng phần mềm cho các nhân viên kỹ thuật.",
          "Tất cả các phương án trên đều sai.",
        ],
        a: 0,
      },
      {
        q: "Các mức đặc tả yêu cầu gồm những gì?",
        o: [
          "Định ra yêu cầu, đặc tả phần mềm, đặc tả thiết kế.",
          "Định ra yêu cầu, đặc tả yêu cầu, đặc tả thiết kế.",
          "Đặc tả chức năng, đặc tả phần mềm, đặc tả thiết kế.",
          "Định ra yêu cầu, đặc tả yêu cầu, đặc tả chức năng.",
        ],
        a: 1,
      },
      {
        q: "Khái niệm đặc tả yêu cầu nghĩa là gì?",
        o: [
          "Yêu cầu được đặc tả bởi các biểu đồ ngữ cảnh, đồ thị và lược đồ quan hệ.",
          "Yêu cầu được viết bằng ngôn ngữ chuyên ngành để mô tả chi tiết phần mềm.",
          "Yêu cầu được viết bằng ngôn ngữ tự nhiên về các dịch vụ mà hệ thống phải cung cấp.",
          "Các dịch vụ được đặc tả chi tiết, chính xác để làm cơ sở hợp đồng giữa hai bên.",
        ],
        a: 3,
      },
      {
        q: "Khái niệm đặc tả thiết kế nghĩa là gì?",
        o: [
          "Yêu cầu được viết bằng ngôn ngữ chuyên ngành để mô tả chi tiết phần mềm.",
          "Các dịch vụ được đặc tả chi tiết, chính xác để làm cơ sở hợp đồng giữa hai bên.",
          "Yêu cầu được đặc tả bởi các biểu đồ ngữ cảnh, đồ thị và lược đồ quan hệ.",
          "Yêu cầu được viết bằng ngôn ngữ tự nhiên về các dịch vụ mà hệ thống phải cung cấp.",
        ],
        a: 0,
      },
      {
        q: "Xác định yêu cầu chức năng nghĩa là gì?",
        o: [
          "Đặc tả các yêu cầu của người dùng.",
          "Đặc tả trừu tượng các dịch vụ mà hệ thống phải cung cấp.",
          "Đặc tả trừu tượng các ràng buộc mà hệ thống phải tuân theo.",
          "Đặc tả trừu tượng các nhu cầu của người dùng mà hệ thống phải cung cấp.",
        ],
        a: 1,
      },
      {
        q: "Xác định yêu cầu phi chức năng nghĩa là gì?",
        o: [
          "Đặc tả trừu tượng các ràng buộc mà hệ thống phải tuân theo.",
          "Đặc tả các yêu cầu của người dùng.",
          "Đặc tả trừu tượng các nhu cầu của người dùng.",
          "Đặc tả các chức năng hệ thống.",
        ],
        a: 0,
      },
      {
        q: "Hệ thống phần mềm phải tuân thủ các ràng buộc về thời gian và tốc độ xử lý thuộc loại yêu cầu nào?",
        o: [
          "Chức năng và phi chức năng",
          "Phi chức năng",
          "Hệ thống phần cứng",
          "Chức năng",
        ],
        a: 1,
      },
      {
        q: "Nếu phần mềm thỏa mãn yêu cầu các chức năng không gây mâu thuẫn thì đáp ứng nguyên tắc nào?",
        o: ["Hợp lý", "Không mâu thuẫn", "Tráng kiện", "Đầy đủ"],
        a: 2,
      },
      {
        q: "Yêu cầu về tốc độ, bộ nhớ, độ tin cậy, tính di chuyển được thuộc loại nào?",
        o: [
          "Yêu cầu ngoại lai",
          "Yêu cầu về sản phẩm",
          "Yêu cầu quá trình",
          "Yêu cầu phương pháp",
        ],
        a: 1,
      },
      {
        q: "Yêu cầu về chuẩn, ngôn ngữ lập trình, phương pháp thiết kế thuộc loại nào?",
        o: [
          "Yêu cầu quá trình phát triển phần mềm",
          "Yêu cầu sản phẩm",
          "Yêu cầu phương pháp thiết kế",
          "Yêu cầu ngoại lai",
        ],
        a: 0,
      },
      {
        q: "Lý do tạo nguyên mẫu phần mềm là gì?",
        o: [
          "Tất cả đều đúng",
          "Làm cơ sở viết đặc tả",
          "Giảm chi phí sửa lỗi",
          "Dùng làm bản test",
        ],
        a: 0,
      },
      {
        q: "Thẩm định được thực hiện sau giai đoạn nào?",
        o: [
          "Đặc tả, thiết kế, lập trình",
          "Tất cả các giai đoạn",
          "Đặc tả",
          "Thiết kế và lập trình",
        ],
        a: 1,
      },
      {
        q: "Chức năng nghiệp vụ là gì?",
        o: [
          "Công việc mà tổ chức cần thực hiện trong hoạt động của nó",
          "Quy trình sản xuất sản phẩm",
          "Tất cả đều đúng",
          "Quá trình thực hiện một công việc",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu của phân tích hệ thống về chức năng là gì?",
        o: [
          "Xây dựng mô hình dữ liệu quan hệ",
          "Tất cả đều đúng",
          "Xây dựng mô hình thực thể liên kết",
          "Xây dựng mô hình chức năng của hệ thống",
        ],
        a: 3,
      },
      {
        q: "Trong thiết kế phần mềm, đặc tả trừu tượng là gì?",
        o: [
          "Đặc tả dịch vụ và ràng buộc của hệ con",
          "Thiết kế dữ liệu chi tiết",
          "Phân chia dịch vụ cho thành phần",
          "Xác định hệ tổng thể",
        ],
        a: 0,
      },
      {
        q: "Trong thiết kế phần mềm, thiết kế cấu trúc dữ liệu là gì?",
        o: [
          "Xác định hệ tổng thể",
          "Đặc tả dịch vụ hệ con",
          "Phân chia dịch vụ",
          "Thiết kế chi tiết cấu trúc dữ liệu",
        ],
        a: 3,
      },
      {
        q: "Trong thiết kế phần mềm, thiết kế giao diện là gì?",
        o: [
          "Thiết kế dữ liệu",
          "Xác định hệ tổng thể và quan hệ giữa các hệ con",
          "Phân chia dịch vụ",
          "Đặc tả dịch vụ hệ con",
        ],
        a: 1,
      },
      {
        q: "Trong thiết kế phần mềm, thiết kế thành phần là gì?",
        o: [
          "Đặc tả dịch vụ hệ con",
          "Phân chia dịch vụ qua các thành phần",
          "Thiết kế dữ liệu",
          "Thiết kế giao diện",
        ],
        a: 1,
      },
      {
        q: "Thiết kế dữ liệu là gì?",
        o: [
          "Chi tiết hóa giao diện",
          "Chuyển mô hình dữ liệu thành cấu trúc dữ liệu cài đặt",
          "Xác định mô đun",
          "Xác định thành phần hệ thống",
        ],
        a: 1,
      },
      {
        q: "Đặc tính nào không phải đặc tính của thông tin?",
        o: ["Tính an toàn", "Tính sai lệch", "Tính thích hợp", "Tính kịp thời"],
        a: 1,
      },
      {
        q: "Khái niệm phần mềm?",
        o: [
          "Chương trình phần mềm được phát triển cho một phạm vi các khách hàng khác nhau, sản xuất phần mềm đại trà.",
          "Được mô tả với ba bộ phận cấu thành là các chương trình máy tính, các cấu trúc dữ liệu và các tài liệu liên quan.",
          "Hệ thống chương trình được phát triển cho một tập thể hoặc cá nhân, sản xuất phần mềm theo đơn đặt hàng.",
          "Chương trình phần mềm được viết bằng một hoặc nhiều ngôn ngữ lập trình nhằm giải quyết một bài toán cụ thể.",
        ],
        a: 1,
      },
      {
        q: "Chỉ ra những giai đoạn trong tiến trình phần mềm?",
        o: [
          "Đặc tả yêu cầu, thiết kế, lập trình.",
          "Phân tích, thiết kế, lập trình, bảo trì.",
          "Thiết kế, lập trình, vận hành.",
          "Xác định, phát triển, bảo trì.",
        ],
        a: 3,
      },
      {
        q: "Tập hợp yêu cầu, thiết kế nhanh, xây dựng bản mẫu, đánh giá của khách hàng, làm mịn yêu cầu, sản phẩm cuối cùng là các pha của mô hình nào?",
        o: [
          "Mô hình xoắn ốc",
          "Mô hình thác nước",
          "Mô hình làm bản mẫu",
          "Mô hình kỹ thuật thế hệ thứ tư",
        ],
        a: 2,
      },
      {
        q: "Đặc điểm của mô hình xoắn ốc?",
        o: [
          "Có thể kiểm soát rủi ro ở từng mức tiến hóa",
          "Sử dụng bộ CASE trong quá trình phát triển",
          "Tách biệt giữa các pha, tiến hành tuần tự",
          "Nhanh chóng xác định được yêu cầu",
        ],
        a: 0,
      },
      {
        q: "Phân loại theo phạm vi sử dụng, sản phẩm phần mềm có những loại nào?",
        o: [
          "Phần mềm đặt, phần mềm dùng chung",
          "Phần mềm công cụ, phần mềm tiện ích",
          "Phần mềm hệ thống, phần mềm ứng dụng",
          "Phần mềm nhúng, phần mềm tiện ích",
        ],
        a: 0,
      },
      {
        q: "Khái niệm kỹ nghệ phần mềm?",
        o: [
          "Việc thiết lập và sử dụng các nguyên lý công nghệ đúng đắn để thu được phần mềm một cách kinh tế vừa tin cậy vừa làm việc hiệu quả trên các máy thực.",
          "Được mô tả với ba bộ phận cấu thành là các chương trình máy tính, các cấu trúc dữ liệu và các tài liệu liên quan.",
          "Bao gồm ba yếu tố chính: phương pháp, công cụ, thủ tục.",
          "Chương trình phần mềm được viết bằng một hoặc nhiều ngôn ngữ lập trình theo một trật tự xác định.",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu của hoạt động quản lý rủi ro?",
        o: [
          "Đảm bảo phục vụ, trợ giúp tốt nhất mọi hoạt động dự án.",
          "Đảm bảo hạn chế và ngăn ngừa thiệt hại do sự cố xảy ra.",
          "Đảm bảo kiểm soát mọi thay đổi, đồng bộ sản phẩm.",
          "Đảm bảo thu thập, lưu trữ đủ thông tin và cung cấp kịp thời.",
        ],
        a: 1,
      },
      {
        q: "Tên người quản lý, tên nhà tài trợ, tuyên bố dự án bắt đầu... là thông tin của tài liệu nào?",
        o: [
          "Bản xây dựng dự án",
          "Bản đề xuất dự án",
          "Bản ký hợp đồng",
          "Bản công bố dự án",
        ],
        a: 3,
      },
      {
        q: "Có thể phân loại phần mềm theo cách nào?",
        o: [
          "Phạm vi sử dụng, miền ứng dụng",
          "Phần mềm thời gian thực, phần mềm nhúng",
          "Phần mềm đặt, phần mềm dùng chung",
          "Phần mềm hệ thống, phần mềm ứng dụng",
        ],
        a: 0,
      },
      {
        q: "Chiến lược kiểm thử nào bắt đầu với mô đun mức cao nhất?",
        o: [
          "Kiểm thử dưới lên",
          "Kiểm thử song song",
          "Kiểm thử gây áp lực",
          "Kiểm thử trên xuống",
        ],
        a: 3,
      },
      {
        q: "Thế nào là hoạt động bảo trì hiệu chỉnh?",
        o: [
          "Thay đổi để cải thiện tính năng bảo trì.",
          "Quá trình phân tích và hiệu chỉnh một hay nhiều lỗi của chương trình.",
          "Hoạt động sửa đổi phần mềm để thích ứng môi trường.",
          "Thay đổi các chức năng đã có.",
        ],
        a: 1,
      },
      {
        q: "Trong chất lượng thiết kế phần mềm, kết dính gom góp là gì?",
        o: [
          "Tất cả các thành phần cùng hoạt hóa một lúc được bó lại với nhau.",
          "Các phần tử trong mô đun được ghép lại trong một dãy điều khiển.",
          "Các thành phần cùng thực hiện các chức năng tương tự.",
          "Các công việc không liên quan với nhau nhưng bị bó vào một mô đun.",
        ],
        a: 3,
      },
      {
        q: "Vai trò của thiết kế phần mềm?",
        o: [
          "Pha duy nhất quyết định chất lượng phần mềm.",
          "Công cụ giao tiếp giữa nhà phát triển và khách hàng.",
          "Pha đầu tiên của quá trình phát triển phần mềm.",
          "Cung cấp đầy đủ thông tin cho việc bảo trì sau này.",
        ],
        a: 3,
      },
      {
        q: "Thứ tự các hoạt động trong tiến trình hình thành yêu cầu?",
        o: [
          "Nghiên cứu khả thi, xác định yêu cầu, phân tích yêu cầu, đặc tả yêu cầu.",
          "Xác định yêu cầu, nghiên cứu khả thi, đặc tả yêu cầu, phân tích yêu cầu.",
          "Xác định yêu cầu, phân tích yêu cầu, đặc tả yêu cầu, nghiên cứu khả thi.",
          "Nghiên cứu khả thi, phân tích yêu cầu, đặc tả yêu cầu, xác định yêu cầu.",
        ],
        a: 3,
      },
      {
        q: "Trong xác định yêu cầu, các yêu cầu được chia thành hai loại nào?",
        o: [
          "Yêu cầu phi chức năng, yêu cầu sản phẩm.",
          "Yêu cầu chức năng, yêu cầu quá trình.",
          "Yêu cầu sản phẩm, yêu cầu quá trình.",
          "Yêu cầu chức năng, yêu cầu phi chức năng.",
        ],
        a: 3,
      },
      {
        q: "Yêu cầu chức năng là gì?",
        o: [
          "Các ràng buộc mà hệ phần mềm phải tuân thủ.",
          "Các yêu cầu về tiêu chuẩn sản phẩm phần mềm.",
          "Các dịch vụ mà hệ phần mềm phải cung cấp.",
          "Các yêu cầu về quá trình phát triển phần mềm.",
        ],
        a: 2,
      },
      {
        q: "Các đặc tả cho mỗi hệ con về các dịch vụ mà nó cung cấp là hoạt động gì?",
        o: [
          "Thiết kế kiến trúc",
          "Đặc tả trừu tượng",
          "Thiết kế thành phần",
          "Thiết kế hệ con",
        ],
        a: 1,
      },
      {
        q: "Tài liệu nào có thể dùng làm cơ sở ký kết hợp đồng giữa khách hàng và nhà phát triển?",
        o: [
          "Đặc tả yêu cầu",
          "Tài liệu yêu cầu",
          "Phân tích yêu cầu",
          "Mô hình hệ thống",
        ],
        a: 1,
      },
      {
        q: "Nhiệm vụ của phân tích và nắm bắt yêu cầu?",
        o: [
          "Thiết lập các dịch vụ mà hệ phải cung cấp và các ràng buộc mà hệ phải tuân theo khi hoạt động.",
          "Mô tả chính xác hơn về các chức năng.",
          "Mô tả trừu tượng về dịch vụ hệ thống.",
          "Xây dựng kiến trúc hệ thống.",
        ],
        a: 0,
      },
      {
        q: "Khái niệm xác định yêu cầu?",
        o: [
          "Phát biểu chính thức về những yêu cầu phần mềm.",
          "Thiết lập các dịch vụ mà hệ phải cung cấp.",
          "Mô tả trừu tượng về các dịch vụ mà hệ cần cung cấp và các ràng buộc.",
          "Mô tả chi tiết về các dịch vụ mà hệ cần cung cấp.",
        ],
        a: 2,
      },
      {
        q: "Các yêu cầu trong xác định yêu cầu phải đảm bảo yếu tố nào?",
        o: [
          "Đầy đủ, hiện thực",
          "Chính xác, hiện thực",
          "Đầy đủ, nhất quán",
          "Chính xác, nhất quán",
        ],
        a: 2,
      },
      {
        q: "Phát biểu đúng nhất về tài liệu đặc tả yêu cầu?",
        o: [
          "Là tài liệu phục vụ thiết kế và mã hóa.",
          "Xác định hệ cần làm như thế nào.",
          "Mô tả các yêu cầu chức năng và phi chức năng.",
          "Xác định hệ cần phải làm gì.",
        ],
        a: 3,
      },
      {
        q: "Yêu cầu thường được mô tả ở những mức nào?",
        o: [
          "Phân tích yêu cầu, xác định yêu cầu",
          "Xác định yêu cầu, phân tích yêu cầu",
          "Yêu cầu chức năng, yêu cầu phi chức năng",
          "Xác định yêu cầu, đặc tả yêu cầu",
        ],
        a: 3,
      },
      {
        q: "Mức đặc tả yêu cầu là gì?",
        o: [
          "Mô tả yêu cầu phi chức năng.",
          "Mô tả mức chi tiết về yêu cầu.",
          "Mô tả yêu cầu chức năng.",
          "Mô tả trừu tượng mức cao.",
        ],
        a: 1,
      },
      {
        q: "Ưu điểm của mô hình kiến trúc khách - phục vụ?",
        o: [
          "Khi một hệ con thay đổi ảnh hưởng đến hệ con khác.",
          "Hỗ trợ sự phát triển tăng trưởng của các hệ con.",
          "Hiệu quả khi chia sẻ một số lượng lớn dữ liệu.",
          "Sử dụng hiệu quả mạng, phân tán dữ liệu dễ dàng.",
        ],
        a: 3,
      },
      {
        q: "Hiểu phạm vi, thu thập yêu cầu, phân loại yêu cầu, giải quyết xung đột, ưu tiên hóa, thẩm định yêu cầu là các giai đoạn của tiến trình nào?",
        o: [
          "Hình thành yêu cầu",
          "Phân tích yêu cầu",
          "Thu thập yêu cầu",
          "Xác định yêu cầu",
        ],
        a: 1,
      },
      {
        q: "Thế nào là bảo trì không cấu trúc?",
        o: [
          "Phần mềm có cấu hình duy nhất là mã nguồn, hoạt động bảo trì bắt đầu với việc đánh giá chi tiết mã nguồn.",
          "Bảo trì đáp ứng các thay đổi chức năng đã có.",
          "Phần mềm có cấu hình hoàn thiện, bảo trì bắt đầu từ tài liệu thiết kế.",
          "Bảo trì cải thiện các tính năng bảo trì.",
        ],
        a: 0,
      },
      {
        q: "Cho công thức bảo trì M = p(Kexp(c-d)), tham số p là gì?",
        o: [
          "Hằng số kinh nghiệm",
          "Đánh giá mức độ hiểu biết về phần mềm",
          "Công việc làm",
          "Đánh giá độ phức tạp",
        ],
        a: 0,
      },
      {
        q: "Trong thiết kế phần mềm, thiết kế sơ bộ là gì?",
        o: [
          "Tập trung làm mịn biểu diễn kiến trúc.",
          "Định nghĩa mối quan hệ giữa các thành phần cấu trúc chính.",
          "Chuyển mô hình dữ liệu thành cấu trúc dữ liệu.",
          "Dịch các yêu cầu thành kiến trúc dữ liệu và kiến trúc phần mềm.",
        ],
        a: 3,
      },
      {
        q: "Phát biểu đúng nhất về lập trình thứ lỗi?",
        o: [
          "Ngăn chặn sự xâm nhập của file lạ.",
          "Đánh dấu các bất thường trong vận hành.",
          "Đảm bảo hệ thống không bị ảnh hưởng khi có lỗi.",
          "Đảm bảo hệ thống có khả năng dung thứ lỗi khi có thành phần sinh lỗi.",
        ],
        a: 3,
      },
      {
        q: "Khái niệm đặc tả yêu cầu?",
        o: [
          "Mô tả chi tiết về các dịch vụ mà hệ cần cung cấp và các ràng buộc.",
          "Mô tả trừu tượng về các dịch vụ mà hệ cần cung cấp.",
          "Thiết lập các dịch vụ mà hệ phải cung cấp.",
          "Phát biểu chính thức về những yêu cầu phần mềm.",
        ],
        a: 0,
      },
      {
        q: "Định nghĩa dự án?",
        o: [
          "Một tập hợp các hoạt động có liên quan với nhau.",
          "Một tập hợp các nhiệm vụ nhằm đạt kết quả dự kiến.",
          "Một tập hồ sơ tài liệu chi tiết.",
          "Một nhiệm vụ cần hoàn thành để có được sản phẩm hoặc dịch vụ duy nhất trong thời hạn và kinh phí dự kiến.",
        ],
        a: 3,
      },
      {
        q: "Ưu điểm của mô hình kiến trúc lớp?",
        o: [
          "Hiệu quả khi chia sẻ dữ liệu.",
          "Khi giao diện một lớp thay đổi chỉ lớp kế cận bị ảnh hưởng.",
          "Sự phát triển tăng trưởng của các lớp tách biệt nên dễ nâng cấp.",
          "Sử dụng hiệu quả mạng.",
        ],
        a: 2,
      },
      {
        q: "Ưu điểm của mô hình kho dữ liệu?",
        o: [
          "Hỗ trợ sự phát triển tăng trưởng của các phân hệ.",
          "Hiệu quả khi chia sẻ một số lượng lớn dữ liệu.",
          "Sử dụng hiệu quả mạng.",
          "Khi một hệ con thay đổi chỉ hệ kế cận ảnh hưởng.",
        ],
        a: 1,
      },
      {
        q: "Bảo trì phần mềm được định nghĩa qua bốn hoạt động nào?",
        o: [
          "Bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì hoàn thiện, bảo trì phòng ngừa.",
          "Bảo trì vận hành, bảo trì hiệu chỉnh, bảo trì hoàn thiện, bảo trì phòng ngừa.",
          "Bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì thiết kế, bảo trì hoàn thiện.",
          "Bảo trì hệ thống, bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì hoàn thiện.",
        ],
        a: 0,
      },
      {
        q: "Đặc điểm của mô hình thác nước?",
        o: [
          "Nhanh chóng xác định được yêu cầu.",
          "Tách biệt giữa các pha, tiến hành tuần tự.",
          "Có thể kiểm soát rủi ro ở từng mức tiến hóa.",
          "Sử dụng bộ CASE trong quá trình phát triển.",
        ],
        a: 1,
      },
      {
        q: "Theo quan điểm quản lý dự án, thiết kế phần mềm được chia thành hai giai đoạn nào?",
        o: [
          "Thiết kế dữ liệu - thiết kế thuật toán",
          "Thiết kế sơ bộ - thiết kế chi tiết",
          "Thiết kế thành phần - thiết kế giao diện",
          "Thiết kế kiến trúc - thiết kế dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Trong chất lượng thiết kế phần mềm, sự kết dính là gì?",
        o: [
          "Độ ghép nối giữa các mô đun.",
          "Các phần tử ghép trong dãy điều khiển.",
          "Độ đo về tính khớp lại với nhau của các phần trong mô đun.",
          "Các thành phần cùng chức năng trong một mô đun.",
        ],
        a: 2,
      },
      {
        q: "Một số độ đo chất lượng thiết kế phần mềm?",
        o: [
          "Sự kết dính, sự đầy đủ, sự hiểu được, sự thích nghi được.",
          "Sự đầy đủ, sự hiểu được, sự thích nghi được, sự phổ dụng.",
          "Sự kết dính, sự ghép nối, sự hiểu được, sự thích nghi được.",
          "Sự kết dính, sự đầy đủ, sự ghép nối, sự phổ dụng.",
        ],
        a: 2,
      },
      {
        q: "Thế nào là thiết kế hướng chức năng?",
        o: [
          "Bản thiết kế được phân giải thành một bộ các đơn thể tác động lẫn nhau, mỗi đơn thể có một chức năng xác định.",
          "Thiết kế tập trung vào đối tượng.",
          "Thiết kế dựa trên dữ liệu.",
          "Thiết kế dựa trên thành phần.",
        ],
        a: 0,
      },
      {
        q: "Đặc điểm của giao diện đồ họa?",
        o: [
          "Giao diện đơn giản, có thể tương tác song song.",
          "Có nhiều cửa sổ, nhập lệnh từ bàn phím.",
          "Có nhiều cửa sổ, có thể tương tác song song.",
          "Giao diện đơn giản, thao tác tuần tự.",
        ],
        a: 2,
      },
      {
        q: "Trong thiết kế kiến trúc, thế nào là mô hình lớp?",
        o: [
          "Tổ chức hệ thống thành một tập hợp các lớp cung cấp tập hợp các dịch vụ.",
          "Mô hình vận hành đồng bộ.",
          "Dữ liệu được lưu trữ tại cơ sở dữ liệu trung tâm.",
          "Mô hình hệ thống phân tán.",
        ],
        a: 0,
      },
      {
        q: "Đặc trưng của phần mềm?",
        o: [
          "Hao mòn, được chế tạo theo nghĩa cổ điển.",
          "Không hỏng đi, thoái hóa theo thời gian.",
          "Đơn giản, dễ hiểu, hữu hình.",
          "Được lắp ráp từ mẫu có sẵn.",
        ],
        a: 1,
      },
      {
        q: "Yếu tố nào trong kỹ nghệ phần mềm cung cấp sự hỗ trợ tự động hay bán tự động cho các phương pháp?",
        o: ["Công cụ", "Kỹ thuật", "Thủ tục", "Phương pháp"],
        a: 0,
      },
      {
        q: "Tiêu chuẩn tính tin cậy trong đánh giá phần mềm là gì?",
        o: [
          "Phần mềm không gây thiệt hại vật lý và kinh tế khi hệ thống thất bại.",
          "Phần mềm dễ sửa chữa và nâng cấp.",
          "Phần mềm có giao diện thích hợp.",
          "Phần mềm không lãng phí tài nguyên.",
        ],
        a: 0,
      },
      {
        q: "Để kiểm tra phần mềm có những hoạt động nào?",
        o: [
          "Xác minh và sửa lỗi",
          "Kiểm thử và tìm lỗi",
          "Tìm lỗi và gỡ lỗi",
          "Xác minh và thẩm định",
        ],
        a: 3,
      },
      {
        q: "Chỉ ra các phương pháp đặc tả yêu cầu?",
        o: [
          "Đặc tả phi hình thức và đặc tả hình thức.",
          "Đặc tả yêu cầu và đặc tả sản phẩm.",
          "Đặc tả yêu cầu và đặc tả phi chức năng.",
          "Đặc tả chức năng và đặc tả phi chức năng.",
        ],
        a: 0,
      },
      {
        q: "UML là viết tắt của?",
        o: [
          "Unified Modeling Language",
          "User Model Language",
          "Unique Modeling Language",
          "Unified Mode Language",
        ],
        a: 0,
      },
      {
        q: "Mô hình UML nào dùng để mô tả tương tác giữa các đối tượng?",
        o: [
          "Use Case Diagram",
          "Class Diagram",
          "Sequence Diagram",
          "Component Diagram",
        ],
        a: 2,
      },
      {
        q: "Use Case Diagram dùng để mô tả gì?",
        o: [
          "Cấu trúc dữ liệu",
          "Các chức năng hệ thống và tác nhân tương tác",
          "Luồng dữ liệu",
          "Kiến trúc triển khai",
        ],
        a: 1,
      },
      {
        q: "Actor trong UML là gì?",
        o: [
          "Một lớp trong hệ thống",
          "Một thành phần giao diện",
          "Thực thể bên ngoài tương tác với hệ thống",
          "Một cơ sở dữ liệu",
        ],
        a: 2,
      },
      {
        q: "Class Diagram dùng để mô tả gì?",
        o: [
          "Luồng xử lý của chương trình",
          "Cấu trúc tĩnh của hệ thống",
          "Các chức năng của hệ thống",
          "Mô hình triển khai",
        ],
        a: 1,
      },
      {
        q: "Sequence Diagram mô tả điều gì?",
        o: [
          "Cấu trúc dữ liệu",
          "Trình tự tương tác giữa các đối tượng",
          "Mối quan hệ giữa các lớp",
          "Các thành phần phần mềm",
        ],
        a: 1,
      },
      {
        q: "Activity Diagram dùng để mô tả?",
        o: [
          "Luồng công việc hoặc quy trình nghiệp vụ",
          "Cấu trúc lớp",
          "Kiến trúc hệ thống",
          "Cấu trúc cơ sở dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Thành phần nào không thuộc UML?",
        o: [
          "Use Case Diagram",
          "Class Diagram",
          "Entity Relationship Diagram",
          "Sequence Diagram",
        ],
        a: 2,
      },
      {
        q: "Mục tiêu chính của kiểm thử phần mềm là gì?",
        o: [
          "Chứng minh phần mềm không có lỗi",
          "Tìm lỗi trong phần mềm",
          "Làm tăng tốc độ thực thi",
          "Giảm kích thước chương trình",
        ],
        a: 1,
      },
      {
        q: "Kiểm thử đơn vị (Unit Test) tập trung vào?",
        o: [
          "Toàn bộ hệ thống",
          "Một mô đun hoặc hàm riêng lẻ",
          "Tương tác người dùng",
          "Cơ sở dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Kiểm thử tích hợp (Integration Test) nhằm mục đích?",
        o: [
          "Kiểm tra giao diện người dùng",
          "Kiểm tra các mô đun hoạt động cùng nhau",
          "Kiểm tra hiệu năng",
          "Kiểm tra bảo mật",
        ],
        a: 1,
      },
      {
        q: "Kiểm thử hệ thống (System Test) được thực hiện trên?",
        o: [
          "Một hàm riêng lẻ",
          "Một lớp",
          "Toàn bộ hệ thống hoàn chỉnh",
          "Một giao diện",
        ],
        a: 2,
      },
      {
        q: "Kiểm thử chấp nhận (Acceptance Test) thường được thực hiện bởi?",
        o: [
          "Lập trình viên",
          "Quản trị mạng",
          "Khách hàng hoặc người dùng",
          "Nhà phân tích hệ thống",
        ],
        a: 2,
      },
      {
        q: "Kiểm thử hộp đen (Black Box Testing) dựa trên?",
        o: [
          "Mã nguồn chương trình",
          "Cấu trúc thuật toán",
          "Yêu cầu và chức năng hệ thống",
          "Kiến trúc phần mềm",
        ],
        a: 2,
      },
      {
        q: "Kiểm thử hộp trắng (White Box Testing) dựa trên?",
        o: [
          "Tài liệu yêu cầu",
          "Mã nguồn chương trình",
          "Ý kiến khách hàng",
          "Thiết kế giao diện",
        ],
        a: 1,
      },
      {
        q: "Mục tiêu của bảo trì phòng ngừa là gì?",
        o: [
          "Sửa lỗi phát sinh",
          "Thích nghi môi trường mới",
          "Ngăn ngừa lỗi trong tương lai",
          "Thêm chức năng mới",
        ],
        a: 2,
      },
      {
        q: "Bảo trì tiếp hợp (Adaptive Maintenance) là gì?",
        o: [
          "Sửa lỗi chương trình",
          "Thích nghi phần mềm với môi trường mới",
          "Tối ưu giao diện",
          "Viết lại chương trình",
        ],
        a: 1,
      },
      {
        q: "Bảo trì hoàn thiện (Perfective Maintenance) nhằm?",
        o: [
          "Tăng hiệu năng và mở rộng chức năng",
          "Sửa lỗi",
          "Chuyển hệ điều hành",
          "Khôi phục dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Yêu cầu phi chức năng thường liên quan đến?",
        o: [
          "Chức năng hệ thống",
          "Hiệu năng, bảo mật, độ tin cậy",
          "Thuật toán",
          "Mã nguồn",
        ],
        a: 1,
      },
      {
        q: "CASE là viết tắt của?",
        o: [
          "Computer Aided Software Engineering",
          "Computer Application Software Engineering",
          "Computer Aided System Environment",
          "Computer Analysis Software Engineering",
        ],
        a: 0,
      },
      {
        q: "Vai trò của công cụ CASE?",
        o: [
          "Tự động hóa một phần quá trình phát triển phần mềm",
          "Thay thế lập trình viên",
          "Quản lý mạng",
          "Quản lý cơ sở dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Rủi ro trong dự án phần mềm là gì?",
        o: [
          "Sự kiện chắc chắn xảy ra",
          "Sự kiện có thể xảy ra gây ảnh hưởng tiêu cực",
          "Một lỗi chương trình",
          "Một yêu cầu chức năng",
        ],
        a: 1,
      },
      {
        q: "Quản lý rủi ro gồm những hoạt động nào?",
        o: [
          "Nhận diện, phân tích và kiểm soát rủi ro",
          "Lập trình và kiểm thử",
          "Thiết kế và triển khai",
          "Thu thập và lưu trữ dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Mô hình RAD là viết tắt của?",
        o: [
          "Rapid Application Development",
          "Rapid Analysis Design",
          "Random Application Development",
          "Reliable Application Development",
        ],
        a: 0,
      },
      {
        q: "Ưu điểm lớn nhất của mô hình RAD là gì?",
        o: [
          "Phát triển nhanh",
          "Dễ kiểm soát rủi ro",
          "Chi phí thấp nhất",
          "Không cần khách hàng tham gia",
        ],
        a: 0,
      },
      {
        q: "Mô hình bản mẫu (Prototype) phù hợp khi nào?",
        o: [
          "Yêu cầu chưa rõ ràng",
          "Yêu cầu hoàn toàn ổn định",
          "Dự án nhỏ",
          "Không có khách hàng",
        ],
        a: 0,
      },
      {
        q: "Mô hình xoắn ốc tập trung mạnh vào?",
        o: ["Lập trình", "Kiểm thử", "Quản lý rủi ro", "Thiết kế giao diện"],
        a: 2,
      },
      {
        q: "Mô hình nào phù hợp khi yêu cầu ổn định và rõ ràng?",
        o: ["Thác nước", "Xoắn ốc", "Bản mẫu", "RAD"],
        a: 0,
      },
      {
        q: "Mục đích chính của quản lý cấu hình phần mềm là gì?",
        o: [
          "Theo dõi và kiểm soát các thay đổi của sản phẩm phần mềm",
          "Tăng tốc độ lập trình",
          "Giảm số lượng nhân viên",
          "Tăng kích thước cơ sở dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Baseline trong quản lý cấu hình là gì?",
        o: [
          "Phiên bản chuẩn được phê duyệt",
          "Bản sao lưu dữ liệu",
          "Tài liệu hướng dẫn",
          "Mã nguồn lỗi",
        ],
        a: 0,
      },
      {
        q: "Mục đích của kiểm soát thay đổi là gì?",
        o: [
          "Đảm bảo mọi thay đổi được đánh giá và phê duyệt",
          "Ngăn cấm mọi thay đổi",
          "Tăng tốc độ phát triển",
          "Giảm tài liệu dự án",
        ],
        a: 0,
      },
      {
        q: "Chất lượng phần mềm là gì?",
        o: [
          "Mức độ đáp ứng các yêu cầu đã xác định",
          "Tốc độ chạy của chương trình",
          "Số lượng chức năng",
          "Kích thước mã nguồn",
        ],
        a: 0,
      },
      {
        q: "Độ tin cậy của phần mềm phản ánh điều gì?",
        o: [
          "Khả năng hoạt động chính xác trong thời gian xác định",
          "Tốc độ xử lý",
          "Khả năng mở rộng",
          "Khả năng bảo trì",
        ],
        a: 0,
      },
      {
        q: "Khả năng bảo trì của phần mềm là?",
        o: [
          "Mức độ dễ dàng sửa đổi và nâng cấp",
          "Khả năng chạy nhanh",
          "Khả năng kết nối mạng",
          "Khả năng nén dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Khả năng di chuyển (Portability) là gì?",
        o: [
          "Khả năng chạy trên nhiều môi trường khác nhau",
          "Khả năng sao lưu dữ liệu",
          "Khả năng kết nối internet",
          "Khả năng mở rộng hệ thống",
        ],
        a: 0,
      },
      {
        q: "Khả năng sử dụng (Usability) đánh giá điều gì?",
        o: [
          "Mức độ dễ học và dễ sử dụng của phần mềm",
          "Khả năng bảo mật",
          "Khả năng xử lý dữ liệu",
          "Khả năng mở rộng",
        ],
        a: 0,
      },
      {
        q: "Kiến trúc phần mềm là gì?",
        o: [
          "Cấu trúc tổng thể của hệ thống và mối quan hệ giữa các thành phần",
          "Mã nguồn chương trình",
          "Giao diện người dùng",
          "Cơ sở dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Thiết kế chi tiết tập trung vào?",
        o: [
          "Thuật toán và cấu trúc dữ liệu cụ thể",
          "Yêu cầu khách hàng",
          "Quản lý dự án",
          "Kiểm thử hệ thống",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu của thiết kế giao diện người dùng?",
        o: [
          "Tạo môi trường tương tác hiệu quả giữa người dùng và hệ thống",
          "Giảm kích thước mã nguồn",
          "Tăng số lượng chức năng",
          "Thay thế tài liệu hướng dẫn",
        ],
        a: 0,
      },
      {
        q: "Nguyên lý cơ bản của thiết kế giao diện là?",
        o: [
          "Đơn giản, nhất quán và dễ sử dụng",
          "Nhiều màu sắc",
          "Nhiều cửa sổ",
          "Nhiều hiệu ứng",
        ],
        a: 0,
      },
      {
        q: "Mục đích của tài liệu phần mềm là gì?",
        o: [
          "Hỗ trợ phát triển, sử dụng và bảo trì phần mềm",
          "Thay thế mã nguồn",
          "Giảm chi phí phần cứng",
          "Tăng tốc độ xử lý",
        ],
        a: 0,
      },
      {
        q: "Tài liệu người dùng dùng để?",
        o: [
          "Hướng dẫn cài đặt và sử dụng hệ thống",
          "Mô tả thuật toán",
          "Mô tả cơ sở dữ liệu",
          "Mô tả mã nguồn",
        ],
        a: 0,
      },
      {
        q: "Tài liệu kỹ thuật chủ yếu phục vụ cho?",
        o: [
          "Lập trình viên và nhân viên bảo trì",
          "Khách hàng",
          "Người sử dụng cuối",
          "Nhà cung cấp phần cứng",
        ],
        a: 0,
      },
      {
        q: "Ước lượng chi phí phần mềm nhằm mục đích?",
        o: [
          "Dự đoán nguồn lực và kinh phí cần thiết",
          "Kiểm thử phần mềm",
          "Thiết kế cơ sở dữ liệu",
          "Bảo trì hệ thống",
        ],
        a: 0,
      },
      {
        q: "COCOMO là gì?",
        o: [
          "Mô hình ước lượng chi phí phát triển phần mềm",
          "Ngôn ngữ lập trình",
          "Công cụ kiểm thử",
          "Mô hình cơ sở dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Một dự án phần mềm thành công khi nào?",
        o: [
          "Đúng phạm vi, đúng tiến độ, đúng ngân sách và đạt chất lượng",
          "Hoàn thành sớm",
          "Có nhiều chức năng",
          "Ít tài liệu",
        ],
        a: 0,
      },
      {
        q: "Yếu tố quan trọng nhất trong quản lý dự án phần mềm?",
        o: ["Con người", "Máy tính", "Ngôn ngữ lập trình", "Cơ sở dữ liệu"],
        a: 0,
      },
      {
        q: "Biểu đồ Gantt được sử dụng để?",
        o: [
          "Lập kế hoạch và theo dõi tiến độ dự án",
          "Thiết kế cơ sở dữ liệu",
          "Kiểm thử phần mềm",
          "Quản lý mã nguồn",
        ],
        a: 0,
      },
      {
        q: "Đường găng (Critical Path) trong dự án là gì?",
        o: [
          "Chuỗi công việc quyết định thời gian hoàn thành dự án",
          "Đường truyền dữ liệu",
          "Mô hình thiết kế",
          "Kế hoạch kiểm thử",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu của quản lý chất lượng phần mềm?",
        o: [
          "Đảm bảo sản phẩm đáp ứng các tiêu chuẩn chất lượng",
          "Tăng tốc độ xử lý",
          "Giảm tài liệu",
          "Tăng số lượng nhân viên",
        ],
        a: 0,
      },
      {
        q: "ISO 9126 liên quan đến?",
        o: [
          "Chất lượng phần mềm",
          "Mạng máy tính",
          "Cơ sở dữ liệu",
          "Bảo mật thông tin",
        ],
        a: 0,
      },
      {
        q: "Đâu là một thuộc tính chất lượng phần mềm theo ISO 9126?",
        o: ["Functionality", "Marketing", "Hardware", "Compiler"],
        a: 0,
      },
      {
        q: "Mục tiêu cuối cùng của kỹ nghệ phần mềm là gì?",
        o: [
          "Tạo ra phần mềm chất lượng cao với chi phí hợp lý",
          "Viết nhiều mã nguồn nhất",
          "Tăng số lượng nhân viên",
          "Sử dụng nhiều công nghệ nhất",
        ],
        a: 0,
      },
      {
        q: "Yếu tố nào ảnh hưởng lớn nhất đến năng suất phát triển phần mềm?",
        o: [
          "Chất lượng đội ngũ phát triển",
          "Tốc độ CPU",
          "Dung lượng ổ cứng",
          "Kích thước màn hình",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu của tái sử dụng phần mềm là gì?",
        o: [
          "Giảm thời gian và chi phí phát triển",
          "Tăng số lượng lỗi",
          "Tăng kích thước hệ thống",
          "Loại bỏ tài liệu",
        ],
        a: 0,
      },
      {
        q: "Component-Based Software Engineering (CBSE) là?",
        o: [
          "Phát triển phần mềm dựa trên các thành phần tái sử dụng",
          "Phát triển bằng một ngôn ngữ duy nhất",
          "Phát triển không cần thiết kế",
          "Phát triển không cần kiểm thử",
        ],
        a: 0,
      },
      {
        q: "Refactoring là gì?",
        o: [
          "Cải tiến cấu trúc mã nguồn mà không thay đổi chức năng",
          "Viết lại toàn bộ hệ thống",
          "Thêm chức năng mới",
          "Xóa cơ sở dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu chính của Refactoring?",
        o: [
          "Nâng cao khả năng bảo trì và chất lượng mã nguồn",
          "Tăng kích thước chương trình",
          "Giảm tài liệu",
          "Loại bỏ kiểm thử",
        ],
        a: 0,
      },
      {
        q: "Agile là gì?",
        o: [
          "Phương pháp phát triển phần mềm linh hoạt",
          "Ngôn ngữ lập trình",
          "Hệ quản trị cơ sở dữ liệu",
          "Mô hình mạng",
        ],
        a: 0,
      },
      {
        q: "Giá trị cốt lõi của Agile là gì?",
        o: [
          "Cá nhân và tương tác hơn quy trình và công cụ",
          "Quy trình hơn con người",
          "Tài liệu hơn phần mềm chạy được",
          "Hợp đồng hơn hợp tác",
        ],
        a: 0,
      },
      {
        q: "Scrum là gì?",
        o: [
          "Một framework trong Agile",
          "Một ngôn ngữ lập trình",
          "Một cơ sở dữ liệu",
          "Một mô hình kiểm thử",
        ],
        a: 0,
      },
      {
        q: "Sprint trong Scrum là gì?",
        o: [
          "Một vòng lặp phát triển ngắn có thời hạn cố định",
          "Một tài liệu yêu cầu",
          "Một cuộc họp khách hàng",
          "Một mô hình dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Product Backlog là gì?",
        o: [
          "Danh sách các yêu cầu và chức năng cần thực hiện",
          "Danh sách lỗi",
          "Danh sách nhân viên",
          "Danh sách máy chủ",
        ],
        a: 0,
      },
      {
        q: "Daily Scrum được tổ chức nhằm mục đích gì?",
        o: [
          "Đồng bộ công việc hàng ngày trong nhóm",
          "Kiểm thử phần mềm",
          "Ký hợp đồng",
          "Bảo trì hệ thống",
        ],
        a: 0,
      },
      {
        q: "Vai trò Product Owner trong Scrum là?",
        o: [
          "Đại diện khách hàng và quản lý Product Backlog",
          "Lập trình viên",
          "Kiểm thử viên",
          "Quản trị mạng",
        ],
        a: 0,
      },
      {
        q: "Vai trò Scrum Master là?",
        o: [
          "Hỗ trợ nhóm tuân thủ Scrum và loại bỏ trở ngại",
          "Quản trị cơ sở dữ liệu",
          "Khách hàng",
          "Lập trình viên chính",
        ],
        a: 0,
      },
      {
        q: "Extreme Programming (XP) thuộc loại nào?",
        o: [
          "Phương pháp Agile",
          "Ngôn ngữ lập trình",
          "Mô hình dữ liệu",
          "Hệ điều hành",
        ],
        a: 0,
      },
      {
        q: "Pair Programming là kỹ thuật của?",
        o: ["Extreme Programming", "Waterfall", "Spiral", "RAD"],
        a: 0,
      },
      {
        q: "Continuous Integration (CI) là gì?",
        o: [
          "Tích hợp và kiểm tra mã nguồn thường xuyên",
          "Triển khai phần mềm thủ công",
          "Quản lý tài liệu",
          "Bảo trì dữ liệu",
        ],
        a: 0,
      },
      {
        q: "DevOps là sự kết hợp giữa?",
        o: [
          "Development và Operations",
          "Design và Operations",
          "Development và Optimization",
          "Database và Operations",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu của DevOps là?",
        o: [
          "Tăng tốc độ phát hành phần mềm và nâng cao chất lượng",
          "Giảm số lượng lập trình viên",
          "Loại bỏ kiểm thử",
          "Giảm tài liệu",
        ],
        a: 0,
      },
      {
        q: "CI/CD là viết tắt của?",
        o: [
          "Continuous Integration / Continuous Delivery",
          "Continuous Interface / Continuous Design",
          "Computer Integration / Computer Delivery",
          "Code Integration / Code Deployment",
        ],
        a: 0,
      },
      {
        q: "Kiểm thử hồi quy (Regression Testing) nhằm?",
        o: [
          "Đảm bảo thay đổi mới không làm hỏng chức năng cũ",
          "Tăng hiệu năng",
          "Kiểm tra bảo mật",
          "Kiểm tra cơ sở dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Kiểm thử hiệu năng (Performance Testing) đánh giá?",
        o: [
          "Tốc độ, khả năng đáp ứng và độ ổn định",
          "Chức năng nghiệp vụ",
          "Thiết kế giao diện",
          "Cấu trúc dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Kiểm thử tải (Load Testing) nhằm?",
        o: [
          "Đánh giá hệ thống dưới khối lượng công việc dự kiến",
          "Kiểm tra giao diện",
          "Kiểm tra mã nguồn",
          "Kiểm tra tài liệu",
        ],
        a: 0,
      },
      {
        q: "Kiểm thử bảo mật (Security Testing) nhằm?",
        o: [
          "Phát hiện lỗ hổng và nguy cơ tấn công",
          "Kiểm tra tốc độ",
          "Kiểm tra cấu trúc dữ liệu",
          "Kiểm tra giao diện",
        ],
        a: 0,
      },
      {
        q: "Technical Debt (Nợ kỹ thuật) là gì?",
        o: [
          "Chi phí phát sinh trong tương lai do lựa chọn giải pháp ngắn hạn",
          "Khoản nợ tài chính của dự án",
          "Lỗi phần cứng",
          "Chi phí mua phần mềm",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu cuối cùng của kỹ nghệ phần mềm hiện đại là?",
        o: [
          "Phát triển phần mềm đáp ứng nhu cầu người dùng với chất lượng cao, chi phí hợp lý và dễ bảo trì",
          "Viết nhiều mã nguồn nhất có thể",
          "Giảm tối đa tài liệu",
          "Loại bỏ hoàn toàn kiểm thử",
        ],
        a: 0,
      },
    ],
  },
];

export default QUIZ_SETS_KNPM;
