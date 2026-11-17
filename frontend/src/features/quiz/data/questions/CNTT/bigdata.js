const QUIZ_SETS_BDT = [
  {
    id: "bigdata",
    majorId: "cntt",
    title: "Big Data & NoSQL",
    description: "Bộ câu hỏi trắc nhiệm Công nghệ dữ liệu lớn và NoSQL",
    questions: [
      {
        q: "Dữ liệu của Big Data là loại nào?",
        o: [
          "Structured Data",
          "Semi-Structured Data",
          "Unstructured Data",
          "Tất cả",
        ],
        a: 3,
      },
      {
        q: "Đặc trưng nào không phải của Big Data?",
        o: ["Volume", "Variety", "Vision", "Velocity"],
        a: 2,
      },
      {
        q: "NoSQL là?",
        o: ["Database", "Field", "Document", "Collection"],
        a: 0,
      },
      {
        q: "Mục tiêu của NoSQL là gì?",
        o: [
          "NoSQL cung cấp một giải pháp thay thế cho cơ sở dữ liệu SQL để lưu trữ dữ liệu dạng văn bản.",
          "Cơ sở dữ liệu NoSQL cho phép lưu trữ dữ liệu không có cấu trúc",
          "NoSQL không thích hợp để lưu trữ dữ liệu có cấu trúc",
          "NoSQL là một định dạng dữ liệu mới để lưu trữ các tập dữ liệu lớn.",
        ],
        a: 3,
      },
      {
        q: "Cloudera phát triển công cụ nào?",
        o: ["HCatalog", "Hbase", "Imphala", "Oozie"],
        a: 1,
      },
      {
        q: "Loại nào không phải là CSDL NoSQL?",
        o: ["SQL Server", "MongoDB", "Cassandra", "Không có"],
        a: 0,
      },
      {
        q: "Đâu là một kiểu của CSDL NoSQL?",
        o: ["SQL", "Document databases", "JSON", "Tất cả"],
        a: 1,
      },
      {
        q: "Chọn đúng 5 đặc trưng cho Big Data?",
        o: [
          "Volume, Velocity, Variety, Veracity, Value",
          "Volume, Videos, Velocity, Variability, Value",
          "Volume, Variability, Veracity, Visualization, Value",
          "Volume, Velocity, Veracity, Visualization, Value",
        ],
        a: 0,
      },
      {
        q: "Velocity (Tốc độ) là đặc trưng nói về?",
        o: [
          "Tốc độ gia tăng khối lượng dữ liệu lớn",
          "Tốc độ cập nhật dữ liệu lớn",
          "Tốc độ xử lý dữ liệu lớn",
          "Tốc độ lưu trữ dữ liệu lớn",
        ],
        a: 2,
      },
      {
        q: "Variety (Tính đa dạng) là đặc trưng về?",
        o: [
          "Kiểu dữ liệu thu thập",
          "Kiểu nội dung dữ liệu",
          "Nguồn thu thập dữ liệu",
          "Phương thức xử lý dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Đặc trưng quan trọng nhất của Big Data?",
        o: ["Khối lượng", "Tính đa dạng", "Tốc độ", "Tất cả"],
        a: 3,
      },
      {
        q: "Đâu là đặc trưng quyết định việc triển khai Dữ liệu lớn?",
        o: ["Khối lượng", "Giá trị", "Tốc độ", "Tính đa dạng"],
        a: 1,
      },
      {
        q: "Tích hợp dữ liệu là quá trình?",
        o: [
          "Kết hợp các dữ liệu không đồng nhất từ nhiều nguồn khác nhau",
          "Sao chép dữ liệu vào CSDL hệ thống để tiến hành phân tích",
          "Làm sạch các dữ liệu thu thập được từ các hệ thống thành phần",
          "Tăng giá trị từ các tài nguyên dữ liệu đang lưu trữ phân tán",
        ],
        a: 0,
      },
      {
        q: "Thuật ngữ Dữ liệu lớn ra đời năm nào?",
        o: ["1997", "2000", "1998", "1941"],
        a: 0,
      },
      {
        q: "Các dạng thức khoa học dữ liệu của Jim Gray?",
        o: ["Thực nghiệm", "Lý thuyết", "Tính toán", "Tất cả các ý"],
        a: 3,
      },
      {
        q: "Phát biểu nào không phải dạng thức nghiên cứu Khoa học dữ liệu của Jim Gray?",
        o: ["Khai thác dữ liệu", "Mô phỏng", "Tính toán", "Thực nghiệm"],
        a: 1,
      },
      {
        q: "Đâu không phải là phương thức xử lý dữ liệu lớn?",
        o: [
          "Thu thập (acquire)",
          "Đánh giá (reviews)",
          "Tổ chức (organize)",
          "Phân tích (analyze)",
        ],
        a: 1,
      },
      {
        q: "RDBMS là gì?",
        o: [
          "Relational Database Management System",
          "Relat Data Management System",
          "Relational Database Microsoft System",
          "Tất cả",
        ],
        a: 0,
      },
      {
        q: "Thị trường Big Data bao gồm:",
        o: ["Phần cứng", "Phần Mềm", "Tất cả", "Dịch vụ"],
        a: 2,
      },
      {
        q: "Nhược điểm của tích hợp dữ liệu theo phương pháp Tight Coupling?",
        o: [
          "Độ trễ",
          "Phản hồi truy vấn",
          "Phụ thuộc vào nguồn dữ liệu",
          "Tất cả",
        ],
        a: 0,
      },
      {
        q: "Nhược điểm của tích hợp dữ liệu theo phương pháp Loose Coupling?",
        o: ["Tất cả", "Chi phí cao", "Độ trễ", "Phụ thuộc mạng / băng thông"],
        a: 3,
      },
      {
        q: "Công cụ nào hỗ trợ tốt NoSQL?",
        o: [
          "SAP Data Services",
          "Oracle Data Integrator",
          "SQL Server Integration Services",
          "Tất cả",
        ],
        a: 3,
      },
      {
        q: "Công cụ tích hợp dữ liệu Boomi là của?",
        o: ["Dell", "IBM", "Microsoft", "SAP"],
        a: 0,
      },
      {
        q: "Công cụ SQL Server Integrator do ai phát triển?",
        o: ["Oracle", "IBM", "Microsoft", "SAP"],
        a: 2,
      },
      {
        q: "SAP Data Service là công cụ để làm gì?",
        o: [
          "Lưu trữ dữ liệu",
          "Tích hợp dữ liệu",
          "Phân tích dữ liệu",
          "Tất cả",
        ],
        a: 1,
      },
      {
        q: "Hệ quản trị CSDL DynamoDB là kiểu nào?",
        o: ["Key value", "Wide Column based", "Document based", "Graph based"],
        a: 0,
      },
      {
        q: "Hệ quản trị CSDL MongoDB là kiểu nào?",
        o: ["Document based", "Key value", "Wide Column based", "Graph based"],
        a: 0,
      },
      {
        q: "Hệ quản trị CSDL Neo4J là kiểu nào?",
        o: ["Key value", "Wide Column based", "Document based", "Graph based"],
        a: 3,
      },
      {
        q: "Hệ quản trị CSDL IBM Graph là kiểu nào?",
        o: ["Key value", "Document based", "Graph based", "Wide Column based"],
        a: 2,
      },
      {
        q: "Hệ quản trị CSDL Google Big Table là kiểu nào?",
        o: ["Key value", "Wide Column based", "Document based", "Graph based"],
        a: 1,
      },
      {
        q: "Đâu không phải là RDBMS?",
        o: ["IBM DB2", "MS SQL Server", "MS Access", "Cassandra"],
        a: 3,
      },
      {
        q: "Loại nào là dữ liệu Bán cấu trúc?",
        o: ["Tất cả", "JSON", "CSV", "XML"],
        a: 0,
      },
      {
        q: "Loại nào là dữ liệu Unstructured?",
        o: ["Video", "XML", "Table", "Tất cả"],
        a: 0,
      },
      {
        q: "Yếu tố nào quyết định để sử dụng NoSQL?",
        o: [
          "Tốc độ gia tăng CSDL",
          "Tính đa dạng của dữ liệu",
          "Tốc độ truy cập dữ liệu",
          "Tất cả",
        ],
        a: 3,
      },
      {
        q: "CSDL nào không phải kiểu Key-Value?",
        o: ["MongoDB", "DynamoDB", "Redis", "Riak"],
        a: 0,
      },
      {
        q: "CSDL nào không phải kiểu Document?",
        o: ["MongoDB", "CouchDB", "Elasticsearch", "Riak"],
        a: 3,
      },
      {
        q: "CSDL nào không phải kiểu Graph?",
        o: ["InfoGrid", "Hbase", "InfiniteGraph", "IBM Graph"],
        a: 1,
      },
      {
        q: "CSDL nào không phải kiểu Wide-Column?",
        o: ["Hbase", "Cassandra", "BigTable", "Dex"],
        a: 3,
      },
      {
        q: "Ưu điểm của hệ thống HDFS là gì?",
        o: [
          "Lưu trữ phân tán, xử lý song song, khả năng chịu lỗi cao",
          "Lưu trữ song song, xử lý phân tán, tính sẵn sàng cao",
          "Xử lý phân tán song song, khả năng chịu lỗi chấp nhận sai sót",
          "Tất cả",
        ],
        a: 0,
      },
      {
        q: "Ưu điểm của DFS là gì?",
        o: [
          "Hệ thống lưu trữ song song nên tránh được ảnh hưởng khi một máy chủ hoặc bộ nhớ bị lỗi",
          "Hệ thống được sao lưu tại Server thứ hai nên đảm bảo việc cung cấp dữ liệu",
          "Khi một máy chủ hoặc bộ nhớ bị lỗi, hệ thống tệp phân tán vẫn đảm bảo có thể cung cấp dữ liệu ổn định",
          "Tất cả",
        ],
        a: 2,
      },
      {
        q: "Ưu điểm của công nghệ Cluster?",
        o: [
          "Tất cả",
          "Hiệu quả chi phí",
          "Tính sẵn sàng cao",
          "Khả năng mở rộng linh hoạt",
        ],
        a: 0,
      },
      { q: "Cluster node có mấy loại?", o: ["1", "2", "3", "4"], a: 1 },
      {
        q: "Nguồn của kiến trúc HDFS trong Hadoop có nguồn gốc là?",
        o: [
          "Hệ thống tệp phân phối của Google",
          "Hệ thống tệp phân tán của Yahoo",
          "Hệ thống tệp phân tán của Facebook",
          "Hệ thống tệp phân tán Azure",
        ],
        a: 0,
      },
      {
        q: "Loại dữ liệu mà Hadoop có thể xử lý là?",
        o: [
          "Structured (Có cấu trúc)",
          "Semi-structured (Bán cấu trúc)",
          "Unstructured (Không có cấu trúc)",
          "All of the above (Tất cả những điều trên)",
        ],
        a: 3,
      },
      {
        q: "YARN là viết tắt của?",
        o: [
          "Yahoo's another resource name",
          "Yet another resource negotiator",
          "Yahoo's archived Resource names",
          "Yet another resource nee",
        ],
        a: 1,
      },
      {
        q: "Điều nào sau đây không phải là mục tiêu của HDFS?",
        o: [
          "Phát hiện lỗi và khôi phục",
          "Xử lý tập dữ liệu khổng lồ",
          "Ngăn chặn việc xóa dữ liệu",
          "Cung cấp băng thông mạng cao để di chuyển dữ liệu",
        ],
        a: 2,
      },
      {
        q: "Trong HDFS, các tệp không thể?",
        o: ["Đọc", "Xóa", "Thực thi", "Lưu trữ"],
        a: 2,
      },
      {
        q: "So với RDBMS, Hadoop?",
        o: [
          "Có tính toàn vẹn dữ liệu cao hơn.",
          "Có giao dịch ACID",
          "Thích hợp để đọc và truy vấn nhanh",
          "Hoạt động tốt hơn trên dữ liệu phi cấu trúc và bán cấu trúc",
        ],
        a: 3,
      },
      {
        q: "Vấn đề chính gặp phải khi đọc và ghi dữ liệu song song từ nhiều đĩa là gì?",
        o: [
          "Xử lý khối lượng lớn dữ liệu nhanh hơn.",
          "Kết hợp dữ liệu từ nhiều đĩa",
          "Phần mềm cần thiết để thực hiện nhiệm vụ này là cực kỳ tốn kém.",
          "Phần cứng cần thiết để thực hiện tác vụ này là cực kỳ tốn kém.",
        ],
        a: 1,
      },
      {
        q: "Tính năng định vị dữ liệu trong Hadoop có nghĩa là?",
        o: [
          "Lưu trữ cùng một dữ liệu trên nhiều nút.",
          "Chuyển vị trí dữ liệu từ nút này sang nút khác",
          "Đồng định vị dữ liệu với các nút tính toán.",
          "Phân phối dữ liệu trên nhiều nút.",
        ],
        a: 2,
      },
      {
        q: "Các tệp HDFS được thiết kế cho?",
        o: [
          "Nhiều người viết và sửa đổi ở các hiệu số tùy ý.",
          "Chỉ nối vào cuối tệp.",
          "Chỉ ghi thành tệp một lần.",
          "Truy cập dữ liệu có độ trễ thấp.",
        ],
        a: 1,
      },
      {
        q: "Hệ thống Apache Hadoop được viết bằng ngôn ngữ nào?",
        o: ["C++", "Python", "Java", "Go"],
        a: 2,
      },
      {
        q: "Cái nào không phải là một trong đặc trưng 3Vs của dữ liệu lớn?",
        o: [
          "Vận tốc - Velocity",
          "Tính xác thực - Veracity",
          "Khối lượng - Volume",
          "Đa dạng - Variety",
        ],
        a: 1,
      },
      {
        q: "Điều nào sau đây đúng đối với Hadoop?",
        o: [
          "Đây là một khung phân tán.",
          "Thuật toán chính được sử dụng trong đó là Map Reduce.",
          "Nó chạy có thể thực thi trên hạ tầng Cloud Computing.",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Loại nào sau đây lưu trữ dữ liệu?",
        o: ["Name node", "Data node", "Master node", "Không có"],
        a: 1,
      },
      {
        q: "Node nào sau đây quản lý các nút khác?",
        o: ["Name node", "Data node", "Slave node", "Tất cả"],
        a: 0,
      },
      {
        q: "Hadoop xử lý khối lượng lớn dữ liệu như thế nào?",
        o: [
          "Hadoop sử dụng song song rất nhiều máy. Điều này tối ưu hóa việc xử lý dữ liệu.",
          "Hadoop được thiết kế đặc biệt để xử lý lượng lớn dữ liệu bằng cách tận dụng phần cứng MPP.",
          "Hadoop gửi mã đến dữ liệu thay vì gửi dữ liệu đến mã.",
          "Hadoop sử dụng các kỹ thuật bộ nhớ đệm phức tạp trên NameNode để tăng tốc độ xử lý dữ liệu.",
        ],
        a: 2,
      },
      {
        q: "MapReduce do công ty nào phát triển?",
        o: ["Apache", "Google", "IBM", "Amazon"],
        a: 1,
      },
      {
        q: "Dịch vụ đám mây nào hỗ trợ tốt cho Big Data?",
        o: ["Amazon AWS", "Google Cloud", "Tất cả", "Microsoft Azure"],
        a: 2,
      },
      {
        q: "Nhược điểm khi triển khai Big Data trên nền tảng Cloud Computing là?",
        o: [
          "Nhiều rủi ro cho hệ thống",
          "Không có ý đúng",
          "Tốc độ xử lý không đảm bảo",
          "Phân tích theo thời gian thực kém",
        ],
        a: 1,
      },
      {
        q: "Mô hình Điện toán đám mây IaaS?",
        o: [
          "Cơ sở hạ tầng dưới dạng dịch vụ",
          "Nền tảng dưới dạng dịch vụ",
          "Phần mềm dưới dạng dịch vụ",
          "Internet dưới dạng dịch vụ",
        ],
        a: 0,
      },
      {
        q: "Mô hình Điện toán đám mây PaaS?",
        o: [
          "Cơ sở hạ tầng dưới dạng dịch vụ",
          "Nền tảng dưới dạng dịch vụ",
          "Phần mềm dưới dạng dịch vụ",
          "Internet dưới dạng dịch vụ",
        ],
        a: 1,
      },
      {
        q: "Mô hình Điện toán đám mây SaaS?",
        o: [
          "Cơ sở hạ tầng dưới dạng dịch vụ",
          "Nền tảng dưới dạng dịch vụ",
          "Phần mềm dưới dạng dịch vụ",
          "Internet dưới dạng dịch vụ",
        ],
        a: 2,
      },
      {
        q: "Lợi ích của Cloud Computing với Big Data là?",
        o: [
          "Triển khai hạ tầng nhanh chóng",
          "Phân tích theo thời gian thực",
          "Tối ưu chi phí duy trì hoạt động",
          "Tất cả",
        ],
        a: 3,
      },
      {
        q: "Lợi ích vượt trội của Cloud Computing với Big Data là?",
        o: [
          "Hạn chế đầu tư máy móc",
          "Phân tích theo thời gian thực",
          "Tối ưu chi phí duy trì hoạt động",
          "Tất cả",
        ],
        a: 1,
      },
      {
        q: "Dịch vụ lưu trữ dữ liệu của Amazon – AWS là?",
        o: ["Amazon S3", "Amazon RDS", "Amazon Lambda", "EC2"],
        a: 0,
      },
      {
        q: "Dịch vụ lưu trữ của Microsoft Azure là?",
        o: [
          "Virtual Machines",
          "Azure Function",
          "Azure Disk Storage",
          "Azure Cosmos DB",
        ],
        a: 2,
      },
      {
        q: "Dịch vụ lưu trữ của Google Cloud Platform là?",
        o: [
          "Google Driver",
          "Google Functions",
          "Google Cloud Storage",
          "Google Cloud Datastore",
        ],
        a: 2,
      },
      {
        q: "Đám mây AWS cung cấp dịch vụ NoSQL Database?",
        o: [
          "Amazon RDS",
          "Amazon EC2",
          "Amazon DynamoDB",
          "Amazon Container Service",
        ],
        a: 2,
      },
      {
        q: "Đám mây Microsoft Azure cung cấp dịch vụ NoSQL Database?",
        o: ["Table Storage", "SQL DB", "Azure Functions", "Cloud Service"],
        a: 0,
      },
      {
        q: "Dịch vụ tích hợp dữ liệu trên đám mây trên Google Cloud Platform?",
        o: [
          "Google Cloud Dataprep",
          "Google Cloud Data Fusion",
          "Google Data Catalog",
          "Google BigQuery",
        ],
        a: 1,
      },
      {
        q: "Dịch vụ thông minh giúp khám phá, làm sạch dữ liệu trên Google Cloud Platform?",
        o: [
          "Google Functions",
          "Google BigQuery",
          "Google Cloud Dataprep",
          "Google Data Catalog",
        ],
        a: 2,
      },
      {
        q: "Trên Google Cloud Platform dịch vụ nào quản lý CSDL NoSQL?",
        o: [
          "Google Cloud Dataprep",
          "Google Data Catalog",
          "Google BigQuery",
          "Cloud Bigtable",
        ],
        a: 3,
      },
      {
        q: "Trên Google Cloud Platform dịch vụ nào quản lý danh mục dữ liệu?",
        o: [
          "Google Data Catalog",
          "Google Cloud Dataprep",
          "Google BigQuery",
          "Cloud Bigtable",
        ],
        a: 0,
      },
      {
        q: "Trên Google Cloud Platform dịch vụ phân tích dữ liệu được cung cấp?",
        o: [
          "Google Data Catalog",
          "Google BigQuery",
          "Google Cloud Dataprep",
          "Google Functions",
        ],
        a: 1,
      },
      {
        q: "Nền tảng Cloudera hỗ trợ hệ CSDL quan hệ nào?",
        o: ["MySQL", "Oracle", "PostgreSQL", "Tất cả"],
        a: 3,
      },
      {
        q: "Hệ CSDL NoSQL trên nền tảng Cloudera là?",
        o: [
          "Apache Accumulo",
          "DynamoDB",
          "AppEngine Datastore",
          "Table Storage",
        ],
        a: 0,
      },
      {
        q: "Dịch vụ phân tích dữ liệu lớn Cloudera cung cấp là?",
        o: ["Hadoop", "BigQuery", "Elastic MapReduce", "Không có"],
        a: 2,
      },
      {
        q: "Cloudera Enterprise có thể được triển khai trên đám mây nào?",
        o: ["Google Cloud", "Amazon AWS", "Tất cả", "Microsoft Azure"],
        a: 2,
      },
      {
        q: "Công cụ trên Google Cloud Platform chuyển đổi dữ liệu hỗ trợ quyết định?",
        o: [
          "Google Cloud",
          "Google Data Catalog",
          "Google Data Studio",
          "Google Functions",
        ],
        a: 2,
      },
      {
        q: "Đâu là dạng thức khoa học hợp nhất lý thuyết, thực nghiệm và mô phỏng?",
        o: [
          "Dạng thức khoa học thực nghiệm",
          "Dạng thức khoa học lý thuyết",
          "Dạng thức khoa học khai thác dữ liệu",
          "Dạng thức khoa học tính toán",
        ],
        a: 2,
      },
      {
        q: "Đâu là dạng thức khoa học mô tả các hiện tượng thiên nhiên?",
        o: [
          "Dạng thức khoa học thực nghiệm",
          "Dạng thức khoa học lý thuyết",
          "Dạng thức khoa học tính toán",
          "Dạng thức khoa học khai thác dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Đâu là dạng thức khoa học dùng các mô hình, khái quát hoá?",
        o: [
          "Dạng thức khoa học lý thuyết",
          "Dạng thức khoa học thực nghiệm",
          "Dạng thức khoa học tính toán",
          "Dạng thức khoa học khai thác dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Đâu là dạng thức khoa học mô phỏng các hiện tượng phức tạp?",
        o: [
          "Dạng thức khoa học thực nghiệm",
          "Dạng thức khoa học tính toán",
          "Dạng thức khoa học lý thuyết",
          "Dạng thức khoa học khai thác dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Thành phần nào không thuộc Hadoop?",
        o: ["GFS", "HDFS", "MapReduce", "YARN"],
        a: 0,
      },
      {
        q: "Tích hợp dữ liệu Loose Coupling (ghép nối lỏng lẻo) là?",
        o: [
          "Lưu dữ liệu trực tiếp tại kho dữ liệu vật lý",
          "Liên kết dữ liệu từ nguồn về kho dữ liệu",
          "Sử dụng quá trình ETL để tạo dữ liệu ảo",
          "Tạo dựng lược đồ trung gian ảo của dữ liệu",
        ],
        a: 3,
      },
      {
        q: "Tích hợp dữ liệu sử dụng phương pháp Ghép nối chặt chẽ (Tight Coupling) là gì?",
        o: [
          "Lưu dữ liệu trực tiếp tại kho dữ liệu vật lý",
          "Xây dựng lược đồ trung gian của dữ liệu",
          "Lớp ETL giúp ánh xạ dữ liệu từ các nguồn về kho dữ liệu vật lý",
          "Sử dụng quá trình ETL để tạo dữ liệu ảo",
        ],
        a: 2,
      },
      {
        q: "Trong Big Data dữ liệu thô sẽ được xử lý thế nào?",
        o: [
          "Thu thập, chuyển đổi, xử lý, mô hình hóa dữ liệu đã phân tích",
          "Lưu trữ, mô hình hóa, xử lý, chuyển đổi",
          "Chuyển đổi, xử lý, mô hình hóa dữ liệu đã xử lý, lưu trữ",
          "Mô hình hóa dữ liệu thô, lưu trữ, chuyển đổi, xử lý",
        ],
        a: 0,
      },
      {
        q: "Phương thức xử lý dữ liệu lớn nào phù hợp nhất?",
        o: [
          "Thu thập, tổ chức, phân tích, quyết định",
          "Đánh giá, thu thập, quyết định, phân tích",
          "Tích hợp, thu thập, phân tích, quyết định",
          "Quyết định, thu thập, tổ chức, phân tích",
        ],
        a: 0,
      },
      {
        q: "Tích hợp dữ liệu là gì?",
        o: [
          "Phương pháp kết hợp các dữ liệu thành một kiểu thống nhất",
          "Quá trình sao chép dữ liệu về máy chủ hệ thống Bigdata",
          "Quá trình kết hợp các dữ liệu không đồng nhất từ nhiều nguồn khác nhau tạo ra một lược đồ duy nhất",
          "Tất cả",
        ],
        a: 2,
      },
      {
        q: "Cloudera hỗ trợ công cụ lưu trữ dữ liệu lớn của Apache nào?",
        o: ["Imphala", "HCatalog", "Hbase", "Tất cả"],
        a: 3,
      },
      {
        q: "Các quốc gia có thể ứng dụng Big Data làm gì?",
        o: [
          "Hỗ trợ các công cụ quốc phòng hiện đại",
          "Phòng chống thảm hoạ thiên nhiên",
          "Tất cả",
          "Đánh giá sự cố, rủi ro với các hệ thống hạt nhân, thuỷ điện...",
        ],
        a: 2,
      },
      {
        q: "Đâu không phải là ưu thế khi ứng dụng Big Data?",
        o: [
          "Thu thập thông tin, cải thiện trải nghiệm tương tác của khách hàng",
          "Xây dựng các sản phẩm và dịch vụ mới dựa trên đặc tính quá khứ",
          "Phân tích dấu hiệu hiện tại để dự báo bảo trì, khắc phục trục trặc tiềm ẩn",
          "Tiết kiệm chi phí triển khai",
        ],
        a: 3,
      },
      {
        q: "Ứng dụng phân tích dữ liệu lớn hỗ trợ ngành Y tế:",
        o: [
          "Tăng việc khai thác tối ưu hóa máy móc",
          "Tăng doanh thu từ phần mềm y tế",
          "Tăng tính chính xác của chuẩn đoán",
          "Tất cả",
        ],
        a: 2,
      },
      {
        q: "Phân tích chuẩn đoán sử dụng kỹ thuật nào?",
        o: [
          "Lấy mẫu dữ liệu",
          "Tương quan phân bổ",
          "Khai phá dữ liệu",
          "Thu thập dữ liệu",
        ],
        a: 2,
      },
      {
        q: "Hoạt động của Map Reduce bao gồm:",
        o: [
          "Trộn & sắp xếp - Map - Reduce",
          "Reduce - Map - Trộn & sắp xếp",
          "Map - Trộn & sắp xếp - Reduce",
          "Sắp xếp - Trộn & Map - Reduce",
        ],
        a: 2,
      },
      {
        q: "Đâu không phải là chế độ hoạt động của Hadoop?",
        o: [
          "Chế độ phân phối toàn cầu",
          "Chế độ phân phối giả",
          "Chế độ độc lập",
          "Chế độ phân phối hoàn toàn",
        ],
        a: 0,
      },
      {
        q: "Mô hình MapReduce thuộc lớp nào?",
        o: [
          "Lớp lưu trữ dữ liệu",
          "Lớp xử lý dữ liệu",
          "Lớp thu thập dữ liệu",
          "Lớp phân tích dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Phân tích mô tả không phù hợp sử dụng để?",
        o: [
          "Xây dựng các báo cáo",
          "Lập bảng số liệu truyền thông",
          "Mô hình hóa dữ liệu quá khứ",
          "Phân tích tương quan",
        ],
        a: 3,
      },
      {
        q: "Trong MapReduce loại nào sau đây theo dõi quá trình tiêu thụ tài nguyên trên Cluster Node?",
        o: ["Master node", "Name node", "Single Master", "Slave node"],
        a: 0,
      },
      {
        q: "Loại phân tích dữ liệu nào kết quả thu được cho ta biết làm thế nào để nó xảy ra?",
        o: [
          "Phân tích đề xuất",
          "Phân tích chuẩn đoán",
          "Phân tích dự án",
          "Phân tích mô tả",
        ],
        a: 0,
      },
      {
        q: "Trong kiến trúc Apache Hadoop, HDFS thuộc?",
        o: [
          "Lớp quản lý tài nguyên",
          "Lớp truyền tải",
          "Lớp lưu trữ",
          "Lớp xử lý dữ liệu",
        ],
        a: 2,
      },
      {
        q: "Trong MapReduce loại nào sau đây thực thi các tác vụ và cung cấp thông tin trạng thái tác vụ?",
        o: ["Name node", "Master node", "Single Master", "Slave node"],
        a: 3,
      },
      {
        q: "Công cụ nào hỗ trợ tích hợp dữ liệu?",
        o: ["Dell boomi", "Snaplogic", "Tất cả", "SAP Data Services"],
        a: 2,
      },
      {
        q: "Thành phần không thuộc Hadoop?",
        o: ["YARN", "GPS", "MapReduce", "HDFS"],
        a: 1,
      },
      {
        q: "Mô hình MapReduce thuộc lớp nào?",
        o: [
          "Lớp lưu trữ dữ liệu",
          "Lớp xử lý dữ liệu",
          "Lớp thu thập dữ liệu",
          "Lớp phân tích dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Apache Kafka là nền tảng mở được phát triển bởi?",
        o: ["IBM", "Facebook", "Google", "Linkedln"],
        a: 3,
      },
      {
        q: "Kiểu phân tích dữ liệu nào chuẩn đoán lý do cho kết quả?",
        o: [
          "Diagnostic Analysis",
          "Descriptive Analysis",
          "Predictive Analysis",
          "Prescriptive Analysis",
        ],
        a: 0,
      },
      {
        q: "Apache Kafka là công cụ hỗ trợ?",
        o: [
          "Thu thập dữ liệu",
          "Lưu trữ phân tán",
          "Hệ quản trị CSDL",
          "Xử lý phân tán",
        ],
        a: 3,
      },
      {
        q: "Trong kiến trúc Apache Hadoop, MapReduce là?",
        o: [
          "Lớp lưu trữ",
          "Lớp xử lý dữ liệu",
          "Lớp quản lý tài nguyên",
          "Lớp truyền tải",
        ],
        a: 1,
      },
      {
        q: "Kiểu phân tích dữ liệu nào cho ta biết điều gì đã xảy ra?",
        o: [
          "Descriptive Analysis",
          "Diagnostic Analysis",
          "Predictive Analysis",
          "Prescriptive Analysis",
        ],
        a: 0,
      },
      {
        q: "Apache Storm là công cụ hỗ trợ?",
        o: [
          "Phân tích dữ liệu",
          "Lưu trữ phân tán",
          "Xử lý phân tán",
          "Thu thập dữ liệu",
        ],
        a: 0,
      },
      {
        q: "So với RDBMS, Hadoop?",
        o: [
          "Có tính toàn vẹn dữ liệu cao hơn.",
          "Có giao dịch ACID",
          "Thích hợp để đọc và truy vấn nhanh",
          "Hoạt động tốt hơn trên dữ liệu phi cấu trúc và bán cấu trúc",
        ],
        a: 3,
      },
      {
        q: "Mô hình chính dành cho điện toán đám mây?",
        o: [
          "Cơ sở hạ tầng dưới dạng dịch vụ (IaaS)",
          "Nền tảng dưới dạng dịch vụ (PaaS)",
          "Tất cả",
          "Phần mềm dưới dạng dịch vụ (SaaS)",
        ],
        a: 2,
      },
      {
        q: "Thành phần chính của hệ thống Hadoop là?",
        o: ["Tất cả", "HDFS", "YARN", "MapReduce"],
        a: 0,
      },
      {
        q: "HDFS là viết tắt của?",
        o: [
          "Hệ thống tệp phân tán Hadoop (Hadoop Distributed File System)",
          "Hệ thống tệp được hướng dẫn Hadoop (Hadoop Directed File System)",
          "Hệ tệp phân tán cao (Highly Distributed file shell)",
          "Hệ thống tệp phân tán cao (Highly Distributed file system)",
        ],
        a: 0,
      },
      {
        q: "Loại phân tích dữ liệu nào kết quả thu được cho ta biết điều gì sẽ xảy ra?",
        o: [
          "Phân tích mô tả",
          "Phân tích dự đoán",
          "Phân tích chuẩn đoán",
          "Phân tích đề xuất",
        ],
        a: 1,
      },
      {
        q: "Khó khăn khi đọc và ghi dữ liệu song song từ nhiều nguồn là gì?",
        o: [
          "Xử lý khối lượng lớn dữ liệu nhanh hơn",
          "Phần cứng cần thiết để thực hiện tác vụ này là cực kỳ tốn kém",
          "Phần mềm cần thiết để thực hiện nhiệm vụ này là cực kỳ tốn kém",
          "Kết hợp dữ liệu từ nhiều nguồn",
        ],
        a: 3,
      },
      {
        q: "Yếu tố giới hạn hiện tại đối với kích thước của một cụm hadoop là?",
        o: [
          "Giới hạn trên của RAM trong NameNode",
          "Giới hạn trên của băng thông mạng",
          "Nhiệt lượng dư thừa tạo ra trong trung tâm dữ liệu",
          "4000 datanode",
        ],
        a: 0,
      },
      {
        q: "Kiến trúc Hadoop hỗ trợ những ngôn ngữ nào?",
        o: ["Tất cả", "Java", "C++", "Python"],
        a: 0,
      },
      {
        q: "Đâu là phân tích chuẩn đoán?",
        o: [
          "Mô tả tương quan dữ liệu",
          "Cung cấp cái nhìn sâu sắc về vấn đề",
          "Phân tích sự bất thường dữ liệu lưu trữ",
          "Mô hình hóa dữ liệu theo điều kiện",
        ],
        a: 1,
      },
      {
        q: "Loại phân tích dữ liệu nào kết quả thu được cho ta biết điều gì đã xảy ra?",
        o: [
          "Phân tích đề xuất",
          "Phân tích chuẩn đoán",
          "Phân tích dự đoán",
          "Phân tích mô tả",
        ],
        a: 3,
      },
      {
        q: "Mục tiêu đúng nhất của phân tích dữ liệu lớn là gì?",
        o: [
          "Tạo ra các dữ liệu phù hợp nhất với hệ thống",
          "Sắp xếp dữ liệu có ích để sử dụng",
          "Biến dữ liệu thành thông tin chi tiết hữu ích",
          "Xây dựng hệ thống để quản lý dữ liệu lớn",
        ],
        a: 2,
      },
      {
        q: "Kiểu phân tích dữ liệu nào dự đoán điều sẽ xảy ra?",
        o: [
          "Descriptive Analysis",
          "Predictive Analysis",
          "Diagnostic Analysis",
          "Prescriptive Analysis",
        ],
        a: 1,
      },
      {
        q: "Loại phân tích dữ liệu nào kết quả thu được cho ta biết tại sao điều đó xảy ra?",
        o: [
          "Phân tích chuẩn đoán",
          "Phân tích mô tả",
          "Phân tích dự đoán",
          "Phân tích đề xuất",
        ],
        a: 0,
      },
      {
        q: "Spark được Apache Software Foundation phát triển từ năm nào?",
        o: ["1993", "2013", "2009", "2007"],
        a: 1,
      },
      {
        q: "Lợi ích từ phân tích dữ liệu lớn là?",
        o: [
          "Cải tiến theo định hướng dữ liệu cho thị trường",
          "Ra quyết định nhanh hơn, tốt hơn",
          "Giảm chi phí và tăng hiệu quả hoạt động",
          "Tất cả",
        ],
        a: 3,
      },
      {
        q: "Các ứng dụng phân tích dữ liệu lớn cho lĩnh vực bán lẻ?",
        o: [
          "Tất cả",
          "Dự đoán hành vi mua sắm của khách hàng",
          "Xây dựng mô hình chỉ tiêu cho từng khách hàng",
          "Phân tích hành trình của khách hàng",
        ],
        a: 0,
      },
      {
        q: "Mô hình MapReduce có thể chạy trên số lượng máy chủ?",
        o: ["Vài máy", "Hàng nghìn máy", "Hàng trăm máy", "Một máy chủ Master"],
        a: 1,
      },
      {
        q: "Kiểu phân tích nào để hỗ trợ đưa ra quyết định?",
        o: [
          "Descriptive Analysis",
          "Predictive Analysis",
          "Diagnostic Analysis",
          "Prescriptive Analysis",
        ],
        a: 3,
      },
      {
        q: "Trong MapReduce loại nào sau đây được cung cấp task-status?",
        o: ["Name node", "JobTracker", "Single Master", "Slave node"],
        a: 1,
      },
      {
        q: "Trong kiến trúc Apache Hadoop, YARN là?",
        o: [
          "Lớp lưu trữ",
          "Lớp truyền tải",
          "Lớp quản lý tài nguyên",
          "Lớp xử lý dữ liệu",
        ],
        a: 2,
      },
    ],
  },
];

export default QUIZ_SETS_BDT;
