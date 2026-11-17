const QUIZ_SETS_CSDLNC = [
  {
    "id": "lap_trinh_quan_tri_csdl_nang_cao",
    "majorId": "cntt",
    "title": "Lập trình quản trị cơ sở dữ liệu nâng cao",
    "description": "Ôn tập lập trình kết nối CSDL với ADO.NET và ngôn ngữ SQL: truy vấn, thủ tục, hàm, trigger.",
    "questions": [
      {
        "q": "Câu 1: Hãy chọn phương án đúng ứng với từ mô tả đối tượng kết nối?",
        "o": [
          "SqlNetwork",
          "SqlCommand",
          "SqlConnection",
          "SqlDataAdapter"
        ],
        "a": 2
      },
      {
        "q": "Câu 2: Hãy chọn phương án đúng chỉ ra mục đích của lập trình kết nối cơ sở dữ liệu?",
        "o": [
          "Thao tác với dữ liệu thực của hệ thống.(1)",
          "Đa dạng hóa chức năng của hệ thống, tạo sự dễ dàng cho người lập trình.",
          "Cả phương (1) và (2) đều đúng.",
          "Gắn kết giao diện sử dụng trực quan với dữ liệu cần xử lý.(2)"
        ],
        "a": 2
      },
      {
        "q": "Câu 3: Đối tượng cho phép quản lý các bảng là đối tượng nào trong các đối tượng sau đây?",
        "o": [
          "DataReader.",
          "SqlDataReader.",
          "DataSet.",
          "DataView."
        ],
        "a": 2
      },
      {
        "q": "Câu 4: Hãy chọn phương án đúng ứng với quy trình truy xuất dữ liệu từ cơ sở dữ liệu?",
        "o": [
          "DataSource->Connection->DataSet->DataAdapter->Web Form/Windows Form",
          "DataSource->DataAdapter->Connection->DataSet->Web Form/Windows Form",
          "DataSource->DataSet->DataAdapter->Connection->Web Form/Windows Form",
          "DataSource->Connection->DataAdapter->DataSet->Web Form/Windows Form."
        ],
        "a": 3
      },
      {
        "q": "Câu 5: Hãy chọn phương án đúng ứng với mục đích sử dụng của đối tượng SqlConnection?",
        "o": [
          "Thực hiện mở một bảng dữ liệu để truy xuất.",
          "Thực thi một truy vấn dạng SQL.",
          "Thực thi một truy vấn cơ sở dữ liệu dạng Select.",
          "Thực hiện tạo kết nối đến cơ sở dữ liệu."
        ],
        "a": 3
      },
      {
        "q": "Câu 6: Hãy chọn phương án đúng ứng với tác dụng của thuộc tính ConnectionString của đối\ntượng SqlConnection?",
        "o": [
          "Chứa tên server cần kết nối.",
          "Tất cả các phương án.",
          "Chứa tên cơ sở dữ liệu cần kết nối.",
          "Chứa chuỗi kết nối (đường dẫn)."
        ],
        "a": 1
      },
      {
        "q": "Câu 7: Hãy chọn phương án đúng ứng với câu lệnh khai báo một đối tượng kết nối trong VB.NET?",
        "o": [
          "Public oconn as SqlCommand.",
          "Public oconn as SqlNetWork.",
          "Public oconn as SqlConnection.",
          "Public oconn as SqlDataReader."
        ],
        "a": 2
      },
      {
        "q": "Câu 8: Visual Basic.Net có thể kết nối được những loại cơ sở dữ liệu nào trong các phương án sau\nđây?",
        "o": [
          "Foxpro, MySQL, SQL Server.",
          "SQL Server, Oracel.",
          "Access, SQL Server và Oracel.",
          "Access, Foxpro, MySQL và SQL Server."
        ],
        "a": 2
      },
      {
        "q": "Câu 9: Để sử dụng các đối tượng truy cập cơ sở dữ liệu SQL Server ta phải khai báo sử dụng thư\nviện. Câu lệnh khai báo nào sau đây là đúng?",
        "o": [
          "Imports System.Data.SqlClient.",
          "Imports System.SqlClient.",
          "Imports System.Data.Oledb.",
          "Imports System.Oledb."
        ],
        "a": 0
      },
      {
        "q": "Câu 10: Hãy chọn câu khẳng định đúng?",
        "o": [
          "Để kết nối được đến cơ sở dữ liệu bất kỳ bạn cần phải mở cơ sở dữ liệu đó đầu tiên.",
          "Quy trình kết nối cơ sở dữ liệu trong C#, ASP.NET, PHP… là giống nhau.",
          "Quy trình truy cập cơ sở dữ liệu trong ngôn ngữ lập trình Web và lập trình Desktop là khác\nnhau.",
          "Mọi đối tượng kết nối đến cơ sở dữ liệu là như nhau đối với mọi hệ quản trị cơ sở dữ liệu."
        ],
        "a": 1
      },
      {
        "q": "Câu 11: Hãy chọn phương án chỉ ra tác dụng của phương thức GetChanges của đối tượng\nDataSet?",
        "o": [
          "Không chấp nhận sự thay đổi dữ liệu.",
          "Lọc ra các dữ liệu thay đổi.",
          "Chấp nhận sự thay đổi dữ liệu.",
          "Ghi và đọc dữ liệu trong tập tin XML."
        ],
        "a": 1
      },
      {
        "q": "Câu 12: Hãy chọn phương án đúng ứng với khái niệm về đối tượng DataTable?",
        "o": [
          "Là đối tượng cho phép trình bày dữ liệu trong đối tượng DataSet với các tính năng như sắp xếp, lọc, tìm kiếm, sửa đổi và điều hướng.",
          "Là đối tượng lưu trữ dữ liệu lấy từ trình điều khiển dữ liệu; chứa các đối tượng DataSet,\nDataView; nhận dữ liệu thông qua phương thức Fill của đối tượng DataAdapter.",
          "Là thành phần chính của đối tượng DataAdapter sử dụng để chứa dữ liệu của bộ điều phối.",
          "Là thành phần chính trong DataSet; các DataTable có thể có quan hệ với nhau; DataTable\ncũng chứa dữ liệu từ bộ điều phối dữ liệu."
        ],
        "a": 3
      },
      {
        "q": "Câu 13: Hãy chọn câu khái niệm tương ứng với khái niệm về đối tượng DataView?",
        "o": [
          "Là đối tượng cho phép trình bày dữ liệu trong đối tượng DataSet với các tính năng như sắp\nxếp, lọc, tìm kiếm, sửa đổi và điều hướng.",
          "Là đối tượng lưu trữ dữ liệu lấy từ trình điều khiển dữ liệu; chứa các đối tượng DataSet,\nDataView; nhận dữ liệu thông qua phương thức Fill của đối tượng DataAdapter.",
          "Là thành phần chính của đối tượng DataAdapter sử dụng để chứa dữ liệu của bộ điều phối.",
          "Là thành phần chính trong DataSet; các DataView có thể có quan hệ với nhau; DataView cũng\nchứa dữ liệu từ bộ điều phối dữ liệu."
        ],
        "a": 0
      },
      {
        "q": "Câu 14: Hãy chọn phương án đúng ứng với ý nghĩa của thuộc tính HasError của đối tượng DataSet và DataTable?",
        "o": [
          "Trả về sự trùng khớp hay không trùng khớp giữa các đối tượng DataTable trong DataSet.",
          "Trả lại trạng thái lỗi của các thành phần trong DataTable, DataSet dạng true/false.",
          "Trả lại tập quan hệ cha/con giữa hai bảng DataTable trong DataSet.",
          "Trả về kết quả của việc lấy dữ liệu về trên DataSet, DataTable dạng true/false."
        ],
        "a": 1
      },
      {
        "q": "Câu 15: Đối tượng DataTable có thuộc tính Columns để trả về tập các đối tượng DataColumn trong DataTables. Để biết được số lượng cột của bảng ta sử dụng câu lệnh nào trong các câu lệnh sau?",
        "o": [
          "Tên_DataTable.countcolumns.",
          "Tên_DataTable.columns().count.",
          "Tên_DataTable.count.columns.",
          "Tên_DataTable.columns.count."
        ],
        "a": 3
      },
      {
        "q": "Câu 16: Đối tượng DataTable có thuộc tính Rows để trả về tập các đối tượng DataRow trong\nDataTables. Để biết được số lượng dòng của bảng ta sử dụng câu lệnh nào trong các câu lệnh\nsau?",
        "o": [
          "Tên_DataTable.Rows().count.",
          "Tên_DataTable.countrows.",
          "Tên_DataTable.Rows.count.",
          "Tên_DataTable.count.Rows."
        ],
        "a": 2
      },
      {
        "q": "Câu 17: Đối tượng DataTable có thuộc tính Rows để trả về tập các đối tượng DataRow trong\nDataTables và thuộc tính Columns để trả về tập các đối tượng DataColumn trong DataTables. Để\ntruy cập vào dữ liệu tại các ô bảng ta sử dụng câu lệnh nào trong các câu lệnh sau?",
        "o": [
          "Tên_DataTable.Columns(chỉ số dòng)(chỉ số cột).",
          "Tên_DataTable.Rows(chỉ số dòng)(chỉ số cột).",
          "Tên_DataTable.Columns(chỉ số cột)(chỉ số dòng).",
          "Tên_DataTable.Rows(chỉ số cột)(chỉ số dòng)."
        ],
        "a": 1
      },
      {
        "q": "Câu 18: Hãy chọn phương án đúng chỉ ra tác dụng của phương thức RejectChange của đối tượng\nDataSet?",
        "o": [
          "Chấp nhận sự thay đổi dữ liệu trên DataSet.",
          "Không chấp nhận sự thay đổi dữ liệu trên DataSet.",
          "Lọc ra các dữ liệu thay đổi trên DataSet.",
          "Đối chiếu các dữ liệu trên DataSet với nhau."
        ],
        "a": 1
      },
      {
        "q": "Câu 19: Hãy chọn phương án đúng chỉ ra tác dụng của phương thức GetChanges của đối tượng\nDataSet?",
        "o": [
          "Lọc ra các dữ liệu thay đổi trên DataSet.",
          "Chấp nhận sự thay đổi dữ liệu trên DataSet.",
          "Không chấp nhận sự thay đổi dữ liệu trên DataSet.",
          "Đối chiếu các dữ liệu trên DataSet với nhau."
        ],
        "a": 0
      },
      {
        "q": "Câu 20: Hãy chọn đối tượng cần sử dụng khi muốn thực thi một câu truy vấn dạng Select?",
        "o": [
          "SqlDataReader.",
          "Cả phương án (1) và (2) đều đúng.",
          "SqlCommand.(2)",
          "SqlDataAdapter.(1)"
        ],
        "a": 1
      },
      {
        "q": "Câu 21: Khi cần truyền tham số cho đối tượng SqlCommand ta sử dụng đối tượng nào trong các\nđối tượng sau?",
        "o": [
          "SqlParameter.",
          "SqlAvarialbe.",
          "SqlConnection.",
          "SqlDataAdapter."
        ],
        "a": 0
      },
      {
        "q": "Câu 22: Khi lập trình kết nối cơ sở dữ liệu ta phải khai báo các Namespace tương ứng với loại đối\ntượng cần sử dụng. Để sử dụng đối tượng DataTable hay DataSet ta phải khai báo Namespace\nnào?",
        "o": [
          "System.Data.DataSet.",
          "System.Data.",
          "System.Data.Oledb.",
          "System.Data.SqlClient."
        ],
        "a": 1
      },
      {
        "q": "Câu 23: Kiến trúc mô hình lập trình MVC bao gồm những thành phần nào trong các thành phần\nsau đây?",
        "o": [
          "Model, Connection, View.",
          "Map, Controller, View.",
          "Model, Controller, View.",
          "Map, Connection, View."
        ],
        "a": 2
      },
      {
        "q": "Câu 24: Thành phần Model trong mô hình MVC làm nhiệm vụ gì trong các trách nhiệm vụ đây?",
        "o": [
          "Xử lý các thao tác trên Database, gửi kết quả trả về thông qua View.",
          "Thực thi các câu lệnh không cần truy cập cơ sở dữ liệu.",
          "Điều hướng các Request tới những tác vụ tương ứng.",
          "Hiển thị thông tin lên website, sau khi đi qua Controller và nhận kết quả."
        ],
        "a": 0
      },
      {
        "q": "Câu 25: Hãy chọn phương án ứng với các tham số cần thiết khi kết nối đến SQL Server từ ngôn\nngữ lập trình?",
        "o": [
          "Chỉ cần giá trị timeout của kết nối; cơ chế xác thực dùng khi kết nối đến các cơ sở dữ liệu được bảo mật, bao gồm việc cung cấp username và password.",
          "Tên server cơ sở dữ liệu đích; tên cơ sở dữ liệu cần mở vào lúc đầu; giá trị timeout của kết nối;\ncơ chế xác thực dùng khi kết nối đến các cơ sở dữ liệu được bảo mật, bao gồm việc cung cấp\nusername và password.",
          "Tên server cơ sở dữ liệu đích; tên cơ sở dữ liệu cần mở vào lúc đầu; cơ chế xác thực dùng khi\nkết nối đến các cơ sở dữ liệu được bảo mật, bao gồm việc cung cấp username và password.",
          "Tên server cơ sở dữ liệu đích; tên cơ sở dữ liệu cần mở vào lúc đầu."
        ],
        "a": 1
      },
      {
        "q": "Câu 26: Hãy chọn phương án đúng ứng với tính chất của thao tác ràng buộc dữ liệu DataBinding?",
        "o": [
          "Dữ liệu tự ràng buộc với các điều khiển thông qua một phương thức không cần kết nối đến cơ\nsở dữ liệu.",
          "Dữ liệu hiển thị lên các điều khiển một cách tự động mà không cần kết nối cơ sở dữ liệu.",
          "Dữ liệu hiển thị lên các điều khiển sẽ không phụ thuộc vào nguồn dữ liệu có trong DataSet hay DataAdapter.",
          "Dữ liệu hiển thị lên các điều khiển sẽ phụ thuộc vào nguồn dữ liệu có trong DataSet hay DataAdapter."
        ],
        "a": 3
      },
      {
        "q": "Câu 27: Hãy chọn phương án đúng ứng với tác dụng của đoạn chương trình?\n\n[Đoạn mã minh họa bổ sung; không có trong DOCX gốc.]\nGiả sử DataSet datPubs đã chứa hai bảng Publishers và Titles, đều có cột pub_id với kiểu dữ liệu tương thích và dữ liệu hợp lệ.\nDim parentColumn As DataColumn = datPubs.Tables(\"Publishers\").Columns(\"pub_id\")\nDim childColumn As DataColumn = datPubs.Tables(\"Titles\").Columns(\"pub_id\")\nDim relation As New DataRelation(\"Publishers_Titles\", parentColumn, childColumn)\ndatPubs.Relations.Add(relation)",
        "o": [
          "Tạo cột pub_id cho bảng Publishers và cột pub_id cho bảng Titles của DataSet datPubs.",
          "Tạo kết nối giữa hai bảng Publishers, Titles của đối tượng DataSet datPubs.",
          "Thêm vào DataSet hai bảng Publishers và Titles.",
          "Tạo hai bảng Publishers, Title cho đối tượng DataSet là datPubs."
        ],
        "a": 1
      },
      {
        "q": "Câu 28: Hãy chọn phương án đúng ứng với quy trình đầy đủ để thêm một thông tin vào trong bảng dữ liệu trong cơ sở dữ liệu?",
        "o": [
          "Tiến hành thêm vào cơ sở dữ liệu; Thông báo kết quả thêm thông tin.",
          "Kiểm tra sự tồn tại của thông tin cần thêm trong bảng dữ liệu; Kiểm tra tính hợp lệ của dữ liệu cần thêm; Tiến hành thêm vào cơ sở dữ liệu; Thông báo kết quả thêm thông tin.",
          "Kiểm tra tính hợp lệ của dữ liệu cần thêm; Kiểm tra sự tồn tại của thông tin cần thêm trong\nbảng dữ liệu; Tiến hành thêm vào cơ sở dữ liệu; Thông báo kết quả thêm thông tin.",
          "Kiểm tra tính hợp lệ của dữ liệu cần thêm; Tiến hành thêm vào cơ sở dữ liệu; Kiểm tra sự tồn tại của thông tin cần thêm trong bảng dữ liệu; Thông báo kết quả thêm thông tin."
        ],
        "a": 2
      },
      {
        "q": "Câu 29: Hãy chọn phương án đúng ứng với quy trình đầy đủ để xóa một thông tin trong bảng dữ\nliệu trong cơ sở dữ liệu?",
        "o": [
          "Kiểm tra sự ràng buộc toàn vẹn của cơ sở dữ liệu; Kiểm tra sự tồn tại của thông tin xóa trong\nbảng dữ liệu; Tiến hành xóa thông tin khỏi bảng cơ sở dữ liệu; Thông báo kết quả xóa thông tin.",
          "Kiểm tra sự tồn tại của thông tin xóa trong bảng dữ liệu; Kiểm tra sự ràng buộc toàn vẹn của\ncơ sở dữ liệu; Tiến hành xóa thông tin khỏi bảng cơ sở dữ liệu; Thông báo kết quả xóa thông tin.",
          "Kiểm tra sự tồn tại của thông tin xóa trong bảng dữ liệu; Thông báo kết quả xóa thông tin.",
          "Kiểm tra sự tồn tại của thông tin xóa trong bảng dữ liệu; Tiến hành xóa thông tin khỏi bảng cơ\nsở dữ liệu; Thông báo kết quả xóa thông tin."
        ],
        "a": 1
      },
      {
        "q": "Câu 30: Hãy chọn phương án đúng ứng với các đối tượng tham gia vào quá trình lập trình kết nối\ncơ sở dữ liệu?",
        "o": [
          "Connection, DataAdapter, DataSet(2)",
          "Cả phương án (1) và (2) đều đúng.",
          "Connection, Command, DataSet(1)",
          "Connection, DataSet, DataCommand."
        ],
        "a": 1
      },
      {
        "q": "Câu 31: Hãy cho biết thuộc tính CommandText của đối tượng SqlCommand chứa thông tin nào\ntrong các phương án sau?",
        "o": [
          "Chuỗi truy vấn.",
          "Đối tượng kết nối.",
          "Thời gian chờ khi kết thúc thực thi.",
          "Thông tin về loại truy vấn: Select, Insert, Delete, Update."
        ],
        "a": 0
      },
      {
        "q": "Câu 32: Phương thức ExecuteNonQuery() của đối tượng SqlCommand sẽ trả về nội dung nào\ntrong các nội dung sau?",
        "o": [
          "Trả về một câu lệnh truy vấn dạng Insert, Update, Delete.",
          "Trả về giá trị số nguyên tương ứng với số mẩu tin đã thực thi, được sử dụng cho các phát biểu SQL dạng cập nhật dữ liệu, xóa, thêm mới mẩu tin hay các phát biểu dạng hành động và thủ tục nội tại trong SQL Server.",
          "Trả về trạng thái của đối tượng SqlCommand.",
          "Trả về kiểu đối tượng tương ứng với giá trị của cột và hàng đầu tiên."
        ],
        "a": 1
      },
      {
        "q": "Câu 33: Hãy chọn phương án đúng ứng với khái niệm về bộ điều phối SqlDataAdapter?",
        "o": [
          "Là bộ điều phối dữ liệu phân chia dữ liệu từ cơ sở dữ liệu nguồn vào các bảng trong đối tượng\nDataSet.",
          "Là bộ điều phối dữ liệu đọc trực tiếp dữ liệu từ cơ sở dữ liệu nguồn thông qua phương thức\nExecuteNonQuery().",
          "Là bộ điều phối dữ liệu cho phép thực thi các truy vấn dạng Insert, Update, Delete và trả về số\nbộ dữ liệu được thực thi thông qua phương thức ExecuteNonQuery().",
          "Là bộ điều phối dữ liệu cho phép sử dụng phương thức Fill để điền dữ liệu từ một hay nhiều\nbảng vào đối tượng DataSet hay DataTable."
        ],
        "a": 3
      },
      {
        "q": "Câu 34: Hãy chọn phương án đúng ứng với cụm từ viết tắt ADO?",
        "o": [
          "Active Dentifition Object.",
          "Access Data Object.",
          "Access Dentifition Object.",
          "ActiveX Data Object."
        ],
        "a": 3
      },
      {
        "q": "Câu 35: Hãy cho biết ADO.NET được sử dụng bởi các ngôn ngữ lập trình nào trong các phương án dưới đây?",
        "o": [
          "Visual Basic.NET, Visual Basic, C++, ASP.(1)",
          "ASP.NET, Visual Basic.NET, C#.(2)",
          "Cả (1) và (2).",
          "Java, ASP, Visual Basic."
        ],
        "a": 1
      },
      {
        "q": "Câu 36: Phương thức Dispose() của các đối tượng trong quy trình kết nối cơ sở dữ liệu làm nhiệm\nvụ gì trong các nhiệm vụ sau?",
        "o": [
          "Hủy bỏ đối tượng.",
          "Đóng đối tượng.",
          "Sắp xếp lại các đối tượng.",
          "Ngắt tạm thời các đối tượng."
        ],
        "a": 0
      },
      {
        "q": "Câu 37: Hãy chọn phương án không đúng với cách thực thi một đối tượng SqlCommand?",
        "o": [
          "ExecuteScalar.",
          "ExecuteCommand.",
          "ExecuteNonQuery.",
          "ExecuteReader."
        ],
        "a": 1
      },
      {
        "q": "Câu 38: Để thực thi một Procedure có sẵn trong cơ sở dữ liệu SQL Server ta cần thiết lập thuộc\ntính CommandType của đối tượng SqlCommand bằng giá trị nào trong các giá trị sau?",
        "o": [
          "CommandType.Sql.",
          "CommandType.Text.",
          "CommandType.Procedure.",
          "CommandType.StoredProcedure."
        ],
        "a": 3
      },
      {
        "q": "Câu 39: Để thiết lập các tham biến cho thủ tục được thực thi bởi đối tượng SqlCommand ta sử\ndụng phương thức nào trong các phương thức sau?",
        "o": [
          "Phương thức Add().",
          "Phương thức Parameter().",
          "Phương thức Fill().",
          "Phương thức Insert()."
        ],
        "a": 0
      },
      {
        "q": "Câu 40: Hãy cho biết các đối tượng kết nối trong đoạn chương trình trên có thể kết nối đến cơ sở\ndữ liệu nào trong các cơ sở dữ liệu sau?\n\n[Đoạn mã minh họa bổ sung; không có trong DOCX gốc.]\nDim oconn As New System.Data.OleDb.OleDbConnection(\n    \"Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\Data\\QLSV.mdb;\")\nDim da As New System.Data.OleDb.OleDbDataAdapter(\"SELECT * FROM SinhVien\", oconn)",
        "o": [
          "SQL Server.",
          "Access.",
          "Oracle.",
          "FoxPro."
        ],
        "a": 1
      },
      {
        "q": "Câu 41: Hãy chọn phương án đúng chỉ ra kết quả trả về của hàm Table_dl được xây dựng trong\nđoạn mã?\n\n[Đoạn mã minh họa bổ sung; không có trong DOCX gốc.]\nGiả sử đã Imports System.Data và System.Data.OleDb; oconn là kết nối hợp lệ, sql là truy vấn SELECT hợp lệ và việc thực thi thành công.\nFunction Table_dl(sql As String, oconn As OleDbConnection) As DataTable\n    Dim dt As New DataTable()\n    Using da As New OleDbDataAdapter(sql, oconn)\n        da.Fill(dt)\n    End Using\n    Return dt\nEnd Function",
        "o": [
          "Trả về bảng dữ liệu trắng.",
          "Trả về đối tượng kết nối đến bảng dữ liệu trong câu lệnh SQL được truyền vào.",
          "Trả về các dữ liệu là kết quả thực thi câu lệnh SQL được truyền vào.",
          "Trả về bảng dữ liệu là kết quả thực thi câu lệnh SQL được truyền vào."
        ],
        "a": 3
      },
      {
        "q": "Câu 42: Cho đoạn chương trình. Hãy chọn khẳng định đúng trong các khẳng định sau?\n\n[Đoạn mã minh họa bổ sung; không có trong DOCX gốc.]\nGiả sử đã Imports System.Data và System.Data.OleDb; các tham số kết nối và truy vấn hợp lệ.\nFunction LayBang(sql As String, oconn As OleDbConnection) As DataTable\n    Dim dt As New DataTable\n    Dim da As OleDbDataAdapter\n    da = New OleDbDataAdapter(sql, oconn)\n    da.Fill(dt)\n    Return dt\n    da.Dispose()\nEnd Function",
        "o": [
          "Câu lệnh da.Dispose() sẽ không bao giờ được thực thi.",
          "Câu lệnh da.Fill(dt) là câu lệnh cập nhật dữ liệu từ dt vào đối tượng da.",
          "Câu lệnh da = New OleDbDataAdapter(sql, oconn) là câu lệnh thực hiện quá trình kết nối đến cơ sở dữ liệu.",
          "Câu lệnh Dim dt As New DataTable bị lỗi vì không khai báo phần tên bảng."
        ],
        "a": 0
      },
      {
        "q": "Câu 43: Hãy chọn phương án đúng ứng với tác dụng của điều khiển AdomdConnection?",
        "o": [
          "Cho phép thực hiện thu hồi kết nối đến cơ sở dữ liệu.",
          "Cho phép thực hiện kết nối đến cơ sở dữ liệu.",
          "Cho phép thực hiện mở bảng dữ liệu từ cơ sở dữ liệu.",
          "Cho phép ngắt toàn bộ các kết nối đến một cơ sở dữ liệu bất kỳ."
        ],
        "a": 1
      },
      {
        "q": "Câu 44: Tạo cấu trúc bảng trong SQL có 3 thành phần: Column Name, Data Type, Allow Nulls.\nColumn Name để:",
        "o": [
          "Người dùng đặt tên bản ghi cho bảng",
          "Người dùng chọn tên cột trong danh sách cho bảng",
          "Người dùng đặt tên cột cho bảng",
          "Người dùng đặt tên bảng"
        ],
        "a": 2
      },
      {
        "q": "Câu 45: Tạo cấu trúc bảng trong SQL có 3 thành phần: Column Name, Data Type, Allow Null. Khi người dùng không tích chọn mục Allow Null, nghĩa là cột tương ứng trong bảng:",
        "o": [
          "Bắt buộc phải nhập dữ liệu",
          "Ràng buộc dữ liệu theo điều kiện",
          "Không ràng buộc dữ liệu theo điều kiện",
          "Không bắt buộc phải nhập dữ liệu"
        ],
        "a": 0
      },
      {
        "q": "Câu 46: SQL là:",
        "o": [
          "Ngôn ngữ hỏi có cấu trúc",
          "Ngôn ngữ để thiết lập các câu hỏi",
          "Ngôn ngữ truy vấn",
          "Ngôn ngữ trả lời các câu hỏi"
        ],
        "a": 0
      },
      {
        "q": "Câu 47: Tạo cấu trúc bảng trong SQL có 3 thành phần: Column Name, Data Type, Allow Nulls. Khi người dùng tích chọn mục Allow Null cho cột tương ứng trong bảng, nghĩa là:",
        "o": [
          "Không ràng buộc dữ liệu theo điều kiện",
          "Bắt buộc nhập dữ liệu cho cột đó",
          "Không bắt buộc nhập dữ liệu cho cột đó",
          "Ràng buộc dữ liệu theo điều kiện"
        ],
        "a": 2
      },
      {
        "q": "Câu 48: Tạo cấu trúc bảng trong SQL có 3 thành phần: Column Name, Data Type, Allow Nulls. Tác dụng của Data Type:",
        "o": [
          "Chọn kiểu cột tương ứng",
          "Tạo mới kiểu dữ liệu cho cột tương ứng",
          "Tạo mới kiểu cột tương ứng",
          "Chọn kiểu dữ liệu cho cột tương ứng"
        ],
        "a": 3
      },
      {
        "q": "Câu 49: Cấu trúc lời gọi SP:",
        "o": [
          "exec <tên SP> [<danh sách các tham số> <kiểu dữ liệu>]",
          "exec[]",
          "exec <tên SP>",
          "run <tên SP> [<danh sách các tham số> <kiểu dữ liệu>]"
        ],
        "a": 1
      },
      {
        "q": "Câu 50: Inner Join là kiểu liên kết:",
        "o": [
          "bằng",
          "trái",
          "bình thường",
          "đầy đủ"
        ],
        "a": 0
      },
      {
        "q": "Câu 51: Tạo cấu trúc bảng trong SQL có 3 thành phần: Column Name, Data Type, Allow Nulls.\nAllow Nulls có tác dụng:",
        "o": [
          "Không bắt buộc người dùng nhập dữ liệu",
          "Ràng buộc người dùng bắt buộc nhập dữ liệu cho cột tương ứng hoặc không",
          "Bắt buộc người dùng nhập dữ liệu",
          "Người dùng không được để trống tất cả các cột trong bảng"
        ],
        "a": 1
      },
      {
        "q": "Câu 52: Trong cú pháp câu lệnh ràng buộc Foreign Key, từ khóa ON UPDATE có nghĩa:",
        "o": [
          "Ràng buộc được phép cập nhật khóa FK",
          "Bắt buộc phải cập nhật dữ liệu cho bảng",
          "Không được cập nhật dữ liệu",
          "Áp dụng câu lệnh cho thao tác cập nhật dữ liệu"
        ],
        "a": 3
      },
      {
        "q": "Câu 53: Cú pháp câu lệnh xóa thủ tục?",
        "o": [
          "delete store procedure <tên thủ tục>",
          "delete procedure <tên thủ tục>",
          "drop store procedure <tên thủ tục>",
          "drop procedure"
        ],
        "a": 3
      },
      {
        "q": "Câu 54: Câu lệnh xóa bảng trong SQL:",
        "o": [
          "Drop table <tên bảng cần xóa> Where <điều kiện xóa>",
          "Delete table <tên bảng cần xóa> Where <điều kiện xóa>",
          "Drop table",
          "Delete table <tên bảng cần xóa>"
        ],
        "a": 2
      },
      {
        "q": "Câu 55: Cú pháp câu lệnh khai báo tham số:",
        "o": [
          "<kiểu dữ liệu> @<tên tham số>",
          "declare @<tên tham số> <kiểu dữ liệu>",
          "var @<tên tham số> <kiểu dữ liệu>",
          "@"
        ],
        "a": 3
      },
      {
        "q": "Câu 56: Câu lệnh thêm một cột vào bảng trong SQL:",
        "o": [
          "Insert table <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
          "Alter tableAdd [ràng buộc]",
          "Add table <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
          "Add <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]"
        ],
        "a": 1
      },
      {
        "q": "Câu 57: Trong khai báo thủ tục, thân thủ tục chính bắt đầu sau từ khoá nào?",
        "o": [
          "begin",
          "create",
          "as",
          "create procedure"
        ],
        "a": 2
      },
      {
        "q": "Câu 58: Tạo cấu trúc bảng trong SQL, nếu tại Data Type của cột tương ứng người dùng chọn kiểu ‘‘Nchar(n)’’ thì dữ liệu của cột đó nhận giá trị dạng:",
        "o": [
          "Chuỗi với độ dài chính xác hỗ trợ Unicode",
          "Chuỗi với độ dài cố định",
          "Chuỗi với độ dài chính xác",
          "Chuỗi với độ dài cố định hỗ trợ Unicode"
        ],
        "a": 3
      },
      {
        "q": "Câu 59: Tạo cấu trúc bảng trong SQL, nếu tại Data Type của cột tương ứng người dùng chọn kiểu ‘‘float’’ thì dữ liệu của cột đó nhận giá trị dạng:",
        "o": [
          "Logic",
          "Số thực",
          "Văn bản",
          "Số Nguyên"
        ],
        "a": 1
      },
      {
        "q": "Câu 60: Cú pháp câu lệnh khai báo biến:",
        "o": [
          "var @<tên biến> <kiểu dữ liệu>",
          "declare @",
          "var <tên biến> <kiểu dữ liệu>",
          "@<tên biến><kiểu dữ liệu>"
        ],
        "a": 1
      },
      {
        "q": "Câu 61: Trong Cú pháp câu lệnh ràng buộc Forein Key, từ khoá On Delete có nghĩa?",
        "o": [
          "áp dụng câu lệnh cho thao tác xoá dữ liệu",
          "không bắt buộc xoá dữ liệu cho bảng",
          "bắt buộc phải xoá dữ liệu trong bảng",
          "ràng buộc được phép xoá khoá FK"
        ],
        "a": 0
      },
      {
        "q": "Câu 62: Left Join là kiểu liên kết:",
        "o": [
          "đầy đủ",
          "trái",
          "bình thường",
          "phải"
        ],
        "a": 1
      },
      {
        "q": "Câu 63: Từ khoá khai báo hàm:",
        "o": [
          "create function",
          "create procedure",
          "create table",
          "create scala"
        ],
        "a": 0
      },
      {
        "q": "Câu 64: Prameter là:",
        "o": [
          "chú thích",
          "biến",
          "lời gọi",
          "tham số"
        ],
        "a": 3
      },
      {
        "q": "Câu 65: Tạo cấu trúc bảng trong SQL, nếu tại mục Data Type của cột tương ứng người dùng chọn kiểu ‘‘Nvarchar(50)’’ thì dữ liệu của cột đó nhận giá trị dạng:",
        "o": [
          "Chuỗi với độ dài cố định",
          "Chuỗi với độ dài chính xác",
          "Chuỗi với độ dài cố định hỗ trợ Unicode",
          "Chuỗi với độ dài chính xác hỗ trợ Unicode"
        ],
        "a": 3
      },
      {
        "q": "Câu 66: Right Join là kiểu liên kết:",
        "o": [
          "trái",
          "phải",
          "bình thường",
          "đầy đủ"
        ],
        "a": 1
      },
      {
        "q": "Câu 67: Cú pháp câu lệnh sửa thủ tục?",
        "o": [
          "alter procedure[]",
          "alter table <tên thủ tục>",
          "alter store procedure <tên thủ tục>[<danh sách các tham số>]",
          "alter procedure <tên thủ tục> [<danh sách các tham số><kiểu dữ liệu>]"
        ],
        "a": 0
      },
      {
        "q": "Câu 68: Câu lệnh tạo cấu trúc bảng trong SQL:",
        "o": [
          "Insert into Table <tên bảng> (<danh sách các cột> <kiểu dữ liệu> [<ràng buộc>])",
          "Creat New Table <tên bảng> (<danh sách các cột> <kiểu dữ liệu> [<ràng buộc>])",
          "Creat Table( [])",
          "Creat into Table <tên bảng> (<danh sách các cột> <kiểu dữ liệu> [<ràng buộc>])"
        ],
        "a": 2
      },
      {
        "q": "Câu 69: Cú pháp câu lệnh nhập dữ liệu trong SQL:",
        "o": [
          "INSERT <tên bảng> INTO <các giá trị ứng với các thuộc tính>",
          "INSERT INTOVALUES ()",
          "INSERT INTO <tên bảng> <các giá trị ứng với các thuộc tính>",
          "INSERT <tên bảng> VALUES <các giá trị ứng với các thuộc tính>"
        ],
        "a": 1
      },
      {
        "q": "Câu 70: Câu lệnh sửa cấu trúc bảng trong SQL:",
        "o": [
          "Alter New Table <tên bảng> (<danh sách các cột cần sửa> <kiểu dữ liệu> [<ràng buộc>])",
          "Alter into Table <tên bảng> (<danh sách các cột cần sửa> <kiểu dữ liệu> [<ràng buộc>])",
          "Alter Table( [])",
          "Update into Table <tên bảng> (<danh sách các cột cần sửa> <kiểu dữ liệu> [<ràng buộc>])"
        ],
        "a": 2
      },
      {
        "q": "Câu 71: Từ khoá tạo SP:",
        "o": [
          "create new procedure",
          "create procedure",
          "create function",
          "create store procedure"
        ],
        "a": 1
      },
      {
        "q": "Câu 72: Tạo cấu trúc bảng trong SQL, nếu tại Data Type của cột tương ứng người dùng chọn kiểu ‘‘int’’ thì dữ liệu của cột đó nhận giá trị dạng:",
        "o": [
          "Số nguyên (1 byte)",
          "Số nguyên lớn (8 byte)",
          "Số nguyên (2 byte)",
          "Số nguyên (4 byte)"
        ],
        "a": 3
      },
      {
        "q": "Câu 73: Cú pháp câu lệnh cập nhật (hoặc sửa) dữ liệu:",
        "o": [
          "UPDATESET = FROM WHERE",
          "UPDATE <tên bảng> <các thuộc tính cần cập nhật> SET (<các giá trị cập nhật>) FROM <tên các bảng> WHERE <biểu thức điều kiện>",
          "UPDATE <tên bảng> <thuộc tính cần cập nhật> = <giá trị cập nhật> FROM <tên các bảng>WHERE <biểu thức điều kiện>",
          "UPDATE INTO <tên bảng> SET <thuộc tính cần cập nhật> = <giá trị cập nhật> FROM <tên các bảng> WHERE <biểu thức điều kiện>"
        ],
        "a": 0
      },
      {
        "q": "Câu 74: Tạo cấu trúc bảng trong SQL, nếu tại mục Data Type của cột tương ứng người dùng chọn kiểu ‘‘Bigint’’ thì dữ liệu của cột đó nhận giá trị dạng:",
        "o": [
          "Số thực dài",
          "Số thực",
          "Số nguyên (4 byte)",
          "Số nguyên lớn (8 byte)"
        ],
        "a": 3
      },
      {
        "q": "Câu 75: Tạo cấu trúc bảng trong SQL, nếu tại Data Type của cột tương ứng người dùng chọn kiểu ‘‘Bit’’ thì dữ liệu của cột đó nhận giá trị dạng:",
        "o": [
          "Nhị phân",
          "Logic",
          "Số",
          "Ký tự"
        ],
        "a": 1
      },
      {
        "q": "Câu 76: Full Join là kiểu liên kết:",
        "o": [
          "bình thường",
          "bằng",
          "tổng hợp",
          "đầy đủ"
        ],
        "a": 3
      },
      {
        "q": "Câu 77: Cấu trúc khai báo một SP:",
        "o": [
          "create store procedure <tên thủ tục> [<danh sách các tham số><kiểu dữ liệu tương ứng>] as\n<thân thủ tục>",
          "create procedure[] as",
          "create procedure <tên thủ tục> [<danh sách các tham số>] as <thân thủ tục>",
          "create procedure <tên thủ tục> ([<danh sách các tham số><kiểu dữ liệu tương ứng>]) as <thân thủ tục>"
        ],
        "a": 1
      },
      {
        "q": "Câu 78: Cú pháp câu lệnh xoá dữ liệu:",
        "o": [
          "DELETEWHERE <điều kiện>",
          "DROP <tên bảng>",
          "DROP <tên bảng> WHERE <điều kiện>",
          "DELETE <tên bảng>"
        ],
        "a": 0
      },
      {
        "q": "Câu 79: Tạo cấu trúc bảng trong SQL có 3 thành phần: Column Name, Data Type, Allow Nulls. Column Name để:",
        "o": [
          "Người dùng đặt tên bản ghi cho bảng",
          "Người dùng chọn tên cột trong danh sách cho bảng",
          "Người dùng đặt tên cột cho bảng",
          "Người dùng đặt tên bảng"
        ],
        "a": 2
      },
      {
        "q": "Câu 80: Cú pháp đầy đủ của câu lệnh ràng buộc Primary Key?",
        "o": [
          "PRIMARY KEY [(danh sách cột)]",
          "[CONSTRAINT tên ràng buộc] PRIMARY KEY [(danh sách cột)]",
          "PRIMARY KEY",
          "CONSTRAINT tên ràng buộc PRIMARY KEY (danh sách cột)"
        ],
        "a": 1
      },
      {
        "q": "Câu 81: Cú pháp xoá khung nhìn View:",
        "o": [
          "drop view",
          "delete view <tên khung nhìn> [(danh sách các cột)] as Câu lệnh select",
          "drop view <tên khung nhìn> [(danh sách các cột)] as Câu lệnh select",
          "erase view <tên khung nhìn> [(danh sách các cột)] as Câu lệnh select"
        ],
        "a": 0
      },
      {
        "q": "Câu 82: Câu lệnh SELECT…FROM kết hợp với mệnh đề nào để lọc các dòng dữ liệu bên trong\nbảng thỏa mãn điều kiện cho trước?",
        "o": [
          "WHERE …ORDER BY…GROUP BY",
          "WHERE",
          "GROUP BY",
          "GROUP BY…HAVING"
        ],
        "a": 1
      },
      {
        "q": "Câu 83: Cú pháp của truy vấn lồng sử dụng HAVING?",
        "o": [
          "Select (tên trường) Where (điều kiện) Group by (tên trường) Having (điều kiện)",
          "Select (tên trường, tên bảng) From (tên bảng) Where (điều kiện) Group by (tên bảng) Having\n(điều kiện)",
          "Select (tên trường) From (tên bảng) Where (điều kiện) Group by (tên trường) Having (điều\nkiện)",
          "Select (tên trường) From (tên bảng) Where (điều kiện) Having (điều kiện)"
        ],
        "a": 2
      },
      {
        "q": "Câu 84: Sử dụng từ khoá GROUP BY trong câu lệnh SELECT khi:",
        "o": [
          "Ta muốn xử lý các bảng theo nhóm",
          "Ta muốn hiển thị dữ liệu theo nhóm",
          "Ta muốn xử lý dữ liệu trên từng nhóm",
          "Ta muốn nhóm dữ liệu theo thứ tự tăng dần"
        ],
        "a": 2
      },
      {
        "q": "Câu 85: Muốn chèn một cột từ bảng cũ sang bảng mới ta sử dụng câu lệnh gì?",
        "o": [
          "select <tên cột> from <tên bảng> where <bảng mới>",
          "select <bảng mới> where <bảng cũ> into <tên cột>",
          "select <bảng cũ> where <bảng mới> into <tên cột>",
          "selectinto from"
        ],
        "a": 3
      },
      {
        "q": "Câu 86: Trong câu lệnh chọn dữ liệu, sau từ khoá ‘‘From’’ sẽ là:",
        "o": [
          "Danh sách các bảng chứa các cột được hiển thị",
          "Danh sách tất cả các bảng",
          "Danh sách cột được sử dụng trong câu lệnh select",
          "Danh sách bảng chứa các cột được sử dụng trong câu lệnh select"
        ],
        "a": 3
      },
      {
        "q": "Câu 87: Trong một bảng, một cột có thể chứa nhiều giá trị giống nhau, và đôi khi bạn chỉ muốn liệt kê các giá trị khác nhau (khác biệt). Phải dùng cú pháp gì?",
        "o": [
          "SELECT DISTINCT cột truy vấn FROM bảng truy vấn",
          "SELECT cột truy vấn FROM bảng truy vấn",
          "Select * from bảng truy vấn",
          "SELECT cột truy vấn FROM bảng truy vấn where cột truy vấn operator value"
        ],
        "a": 0
      },
      {
        "q": "Câu 88: Để hiển thị bảng theo thứ tự giảm dần của cột ‘‘TongDiem’’, trong câu lệnh select ta sử\ndụng lệnh:",
        "o": [
          "order by TongDiem Desc",
          "sort on TongDiem Desc",
          "order by TongDiem/D",
          "sort on TongDiem/D"
        ],
        "a": 0
      },
      {
        "q": "Câu 89: Muốn lấy 2 cột giá cả và tên sản phẩm trong n cột của bảng hóa đơn thực hiện?",
        "o": [
          "Select giaca,tensanpham from hoadon.",
          "Select tensanpham from hoadon where stt>3",
          "Select * from hoadon.",
          "Select giaca from sanpham."
        ],
        "a": 0
      },
      {
        "q": "Câu 90: Hàm nội tuyến là:",
        "o": [
          "Chỉ trả về một kết quả nội bộ",
          "Là hàm đọc bảng từ câu lệnh select",
          "Là hàm định nghĩa bảng từ nhiều câu lệnh",
          "Là hàm đọc bảng từ nhiều câu lệnh"
        ],
        "a": 1
      },
      {
        "q": "Câu 91: Hàm SELECT COUNT(DISTINCT column_name) FROM table_name trả về giá trị gì?",
        "o": [
          "Trả về giá trị trùng với giá trị được chỉ định",
          "Cú pháp trên sai",
          "Không trả về gì cả",
          "Trả về số lượng giá trị khác nhau của cột được chỉ định"
        ],
        "a": 3
      },
      {
        "q": "Câu 92: Từ khoá LIKE(NOT LIKE) sử dụng trong câu lệnh SELECT nhằm:",
        "o": [
          "Tất cả đáp án đều đúng",
          "Mô tả khuôn dạng của dữ liệu cần tìm kiếm.",
          "Tạo một bảng mới có cấu trúc và dữ liệu được xác định từ kết quả của truy vấn",
          "Để kiểm tra xem giá trị dữ liệu nằm trong (ngoài) một khoảng nào đó"
        ],
        "a": 1
      },
      {
        "q": "Câu 93: Từ khoá lệnh sửa hàm?",
        "o": [
          "Alter Function",
          "Alter procedure",
          "Update Function",
          "Edit Funtion"
        ],
        "a": 0
      },
      {
        "q": "Câu 94: Câu lệnh Mysql nào được dùng để trích xuất dữ liệu từ database:",
        "o": [
          "open",
          "Get",
          "Extract",
          "Select"
        ],
        "a": 3
      },
      {
        "q": "Câu 95: Trong câu lệnh hiển thị dữ liệu Select, từ khoá ‘‘Top n’’ có tác dụng:",
        "o": [
          "Chỉ hiển thị n giá trị trong bảng",
          "Hiển thị n bản ghi đầu tiên trong bảng",
          "Hiển thị n giá trị lớn nhất trong bảng",
          "Hiển thị n cột đầu tiền trong bảng"
        ],
        "a": 1
      },
      {
        "q": "Câu 96: Cho bảng sinhvien gồm các trường sau: masv, hoten, gioitinh, ngaysinh, diachi, malop,\nhocbong. Câu lệnh nào trả về kết quả những sinh viên có năm sinh từ 1991 đến 1993 và nhóm\ntheo masv?",
        "o": [
          "SELECT* FROM sinhvien WHERE year(ngaysinh)= 1991 and 1993 ORDER BY masv",
          "SELECT* FROM sinhvien WHERE year(ngaysinh) between 1991 and 1993 ORDER BY masv",
          "SELECT* FROM sinhvien WHERE ngaysinh between 1991 and 1993 ORDER BY masv",
          "SELECT* FROM sinhvien WHERE year(ngaysinh)= 1991 or 1993 ORDER BY masv"
        ],
        "a": 1
      },
      {
        "q": "Câu 97: Hàm kiểu Scalar là:",
        "o": [
          "Hàm mà kết quả trả về là một bảng",
          "Hàm mà kết quả trả về có thể một hoặc nhiều giá trị",
          "Hàm mà kết quả trả về một giá trị",
          "Hàm mà kết quả trả về nhiều giá trị"
        ],
        "a": 2
      },
      {
        "q": "Câu 98: Trong câu lệnh hiển thị dữ liệu Select, từ khoá ‘‘INTO’’ có tác dụng:",
        "o": [
          "Cập nhật dữ liệu vào bảng đã có",
          "Cập nhật dữ liệu vào bảng mới",
          "Trả kết quả từ lệnh select vào bảng đã có",
          "Tạo bảng mới là kết quả của lệnh select"
        ],
        "a": 3
      },
      {
        "q": "Câu 99: Cú pháp tạo khung nhìn View:",
        "o": [
          "create new view <tên khung nhìn> [(danh sách các cột)] as Câu lệnh select",
          "create new <tên khung nhìn> [(danh sách các cột)] as Câu lệnh select",
          "create view[(danh sách các cột)] as Câu lệnh select",
          "create view <tên khung nhìn> [(danh sách các cột)] Begin Câu lệnh select End"
        ],
        "a": 2
      },
      {
        "q": "Câu 100: Trong CSDL QLDIEM, cho 2 bảng LOP(MALOP, TENLOP), HOCSINH(MASV, HOTEN, MALOP). Bảng HOCSINH liên kết với bảng LOP qua cấu trúc nào?",
        "o": [
          "Constraint HOCSINH_LOP foreign key LOP(MALOP) references HOCSINH(MALOP)",
          "Constraint LOP_HOCSINH foreign key LOP(MALOP) references HOCSINH(MALOP)",
          "Constraint HOCSINH_LOP foreign key HOCSINH(MALOP) references LOP(MALOP)",
          "Constraint LOP_HOCSINH foreign key HOCSINH(MALOP) references LOP(MALOP)"
        ],
        "a": 2
      },
      {
        "q": "Câu 101: Cho lệnh truy vấn sau:\nSELECT hodem, ten, diemtb, MAX(diemtb) FROM sv ORDER BY diemtb DESC;\nLệnh trên đưa ra kết quả nào sau đây?",
        "o": [
          "Tất cả đáp án trên đều sai",
          "Đưa ra thông tin của sinh viên theo các trường đã chọn sắp xếp giảm dần",
          "Đưa ra thông tin của sinh viên theo các trường đã chọn",
          "Đưa ra thông tin của sinh viên theo các trường đã chọn sắp xếp giảm dần theo trường diemtb"
        ],
        "a": 3
      },
      {
        "q": "Câu 102: Cú pháp tạo hàm dạng Scalar:",
        "o": [
          "create function <tên hàm> returns <kiểu dữ liệu trả về> as begin <các câu lệnh> end",
          "create function([ ]) returns as begin end",
          "create function <tên hàm> ([<danh sách tham số> <kiểu dữ liệu>]) returns table as begin <các câu lệnh> end",
          "create function <tên hàm> ([<danh sách tham số> <kiểu dữ liệu>]) returns @<tên bảng> table\n<định nghĩa bảng> as begin <các câu lệnh> end"
        ],
        "a": 1
      },
      {
        "q": "Câu 103: Trong thân chương trình hàm nội tuyến:",
        "o": [
          "Chỉ có một lệnh Select",
          "Tồn tại nhiều câu lệnh tạo thành một bảng",
          "Đọc bảng từ nhiều câu lệnh",
          "Tập hợp nhiều câu lệnh khác nhau nhưng trả về một giá trị"
        ],
        "a": 0
      },
      {
        "q": "Câu 104: Cấu trúc câu lệnh Case trong SQL:",
        "o": [
          "case when <điều kiện i> do <kết quả thứ i> …. Else <kết quả thứ n+1> end",
          "select case when <điều kiện i> then <kết quả thứ i> …. Else <kết quả thứ n+1> end",
          "case when <điều kiện i> then…. Else end",
          "case if <điều kiện i> then <kết quả thứ i> …. Else <kết quả thứ n+1> end"
        ],
        "a": 2
      },
      {
        "q": "Câu 105: Trong câu lệnh chọn dữ liệu, sau từ khoá ‘‘Having’’ sẽ là:",
        "o": [
          "Biểu thức điều kiện của nhóm",
          "Ràng buộc cột trong nhóm",
          "Ràng buộc bản ghi trong bảng",
          "Biểu thức điều kiện của lệnh select"
        ],
        "a": 0
      },
      {
        "q": "Câu 106: Các phép toán gộp nhóm được sử dụng sau mệnh đề?",
        "o": [
          "SELECT",
          "WHERE",
          "GROUP BY",
          "FROM"
        ],
        "a": 2
      },
      {
        "q": "Câu 107: Câu lệnh đưa ra nhân viên có lương cao hơn lương tất cả nhân viên phòng NS?",
        "o": [
          "Select MNV,Tennv From nhanvien Where luong > (Select max(luong) From nhanvien Where phongban=’NS’)",
          "Select MNV,Tennv From nhanvien Where luong > (Select max(luong) From nhanvien)",
          "Select MNV,Tennv From nhanvien Where max(luong) Where phongban=’NS’",
          "Select MNV,Tennv From nhanvien Where luong > (Select max(luong) From nhanvien)"
        ],
        "a": 0
      },
      {
        "q": "Câu 108: Sau khi tạo Trigger, bảng Deleted được tạo:",
        "o": [
          "bởi lệnh create trigger",
          "được tạo bởi sau khi chạy trigger bởi lệnh exec<tên trigger>",
          "bởi lệnh create Delete <tên trigger>",
          "tự động sau khi biên dịch trigger vừa tạo"
        ],
        "a": 3
      },
      {
        "q": "Câu 109: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar(50)). Câu lệnh đếm tổng số thí sinh có kết quả ‘‘đỗ’’:",
        "o": [
          "SELECT count(‘đỗ’) as SoLuongThiSinhDo FROM DiemKhoiA",
          "SELECT count(*) as SoLuongThiSinhDo FROM DiemKhoiA WHERE KetQua=‘đỗ’",
          "UPDATE DiemKhoiA SET SoLuongThiSinhDo = count(‘đỗ’)",
          "SELECT count(‘đỗ’) as SoLuongThiSinhDo FROM DiemKhoiA GROUP BY KetQua"
        ],
        "a": 1
      },
      {
        "q": "Câu 110: Các lệnh sau đây lệnh nào đúng?",
        "o": [
          "SELECT * FROM t1 ORDER BY id ASC;",
          "SELECT * FROM t1 ORDER BY id DESC;",
          "SELECT * FROM t1 ORDER BY id;",
          "Tất cả đều đúng"
        ],
        "a": 3
      },
      {
        "q": "Câu 111: Câu lệnh nào sau đây giúp lấy dữ liệu của các cột bên trong bảng đồng thời sắp xếp theo\nthứ tự tăng dần?",
        "o": [
          "SELECT…FROM…WHERE …[ORDER BY…[DESC,…]]",
          "SELECT…FROM…ORDER BY…[ASC,…]",
          "SELECT…FROM…WHERE",
          "SELECT…FROM…ORDER BY…[DESC,…]"
        ],
        "a": 1
      },
      {
        "q": "Câu 112: Trong toán tử Like, kí tự [_] biểu thị điều gì?",
        "o": [
          "Kí tự không nằm trong các giới hạn",
          "Kí tự đơn bất kì trong giới hạn",
          "Thể hiện nhiều kí tự trong xâu",
          "Bắt buộc chỉ được 1 kí tự"
        ],
        "a": 1
      },
      {
        "q": "Câu 113: Cú pháp của ‘’order by’’ là gì?",
        "o": [
          "ORDER BY {col_name | formula} [ASC | DESC] ,...",
          "ORDER BY {col_name | formula}",
          "ORDER BY {row_name | formula}",
          "ORDER BY {row_name | formula} [ASC | DESC] ,..."
        ],
        "a": 0
      },
      {
        "q": "Câu 114: Câu lệnh DELEDE sử dụng để?",
        "o": [
          "Cập nhật hồ sơ hiện có trong một bảng",
          "Tất cả đáp án đều chính xác",
          "Chèn một hàng mới trong một bảng",
          "Xóa các hàng trong một bảng"
        ],
        "a": 3
      },
      {
        "q": "Câu 115: Phép chọn được thực hiện sau mệnh đề nào trong SELECT-FROM-WHERE?",
        "o": [
          "GROUP BY HAVING",
          "WHERE",
          "FROM",
          "SELECT"
        ],
        "a": 3
      },
      {
        "q": "Câu 116: Trong kết quả của truy vấn có thể xuất hiện các dòng dữ liệu trùng nhau. Để loại bỏ bớt\ncác dòng này, ta chỉ định thêm từ khóa gì ngay sau từ khoá SELECT?",
        "o": [
          "DELETE",
          "DISTINCT",
          "WHERE",
          "TOP"
        ],
        "a": 1
      },
      {
        "q": "Câu 117: Thứ tự đúng trong câu lệnh SELECT là?",
        "o": [
          "SELECT, FROM, GROUP BY HAVING, ORDER BY",
          "SELECT, FROM, WHERE, GROUP BY HAVING, ORDER BY",
          "SELECT, FROM, GROUP BY HAVING, ORDER BY",
          "SELECT, FROM, GROUP BY HAVING, WHERE, ORDER BY"
        ],
        "a": 1
      },
      {
        "q": "Câu 118: Trong câu lệnh chọn dữ liệu, sau từ khoá ‘‘Where’’ sẽ là:",
        "o": [
          "Các cột cần dùng trong bảng select",
          "Biểu thức điều kiện ràng buộc các cột hiển thị trong lệnh select",
          "Các bảng cần dùng trong lệnh select",
          "Biểu thức điều kiện ràng buộc các bản ghi hiển thị trong lệnh select"
        ],
        "a": 3
      },
      {
        "q": "Câu 119: Trường hợp nào ta cần sử dụng cấu trúc lệnh SELECT lồng nhau:",
        "o": [
          "Khi trong câu lệnh có nhiều điều kiện cùng phải thoả mãn",
          "Khi giá trị điều kiện sau mệnh đề Where chưa xác định",
          "Khi có mỗi cột hiển thị phải thoả mãn một điều kiện khác nhau",
          "Khi có các cột muốn hiển thị trên nhiều bảng khác nhau"
        ],
        "a": 1
      },
      {
        "q": "Câu 120: Chọn câu trả lời đúng.",
        "o": [
          "ORDER BY sắp xếp thứ tự các hàng kết quả. Bạn có thể chọn sắp xếp các hàng kết quả bằng\nchỉ thị ASC (sắp theo thứ tự giảm dần) hay DESC (sắp theo thứ tự tăng dần). Giá trị mặc định là\nASC.",
          "ORDER BY sắp xếp thứ tự các hàng kết quả. Bạn có thể chọn sắp xếp các hàng kết quả bằng\nchỉ thị ASC (sắp theo thứ tự giảm dần) hay DESC (sắp theo thứ tự tăng dần)",
          "ORDER BY sắp xếp thứ tự các hàng kết quả. Bạn có thể chọn sắp xếp các hàng kết quả bằng\nchỉ thị ASC (sắp theo thứ tự tăng dần) hay DESC (sắp theo thứ tự giảm dần)",
          "ORDER BY sắp xếp thứ tự các hàng kết quả. Bạn có thể chọn sắp xếp các hàng kết quả bằng\nchỉ thị ASC (sắp theo thứ tự tăng dần) hay DESC (sắp theo thứ tự giảm dần). Giá trị mặc định là\nASC."
        ],
        "a": 3
      },
      {
        "q": "Câu 121: Các lệnh ALTER TABLE được sử dụng để?",
        "o": [
          "Xóa một bảng trong một cơ sở dữ liệu",
          "Thêm, xóa hoặc sửa đổi các cột trong một bảng hiện tại",
          "Tất cả đáp án đều đúng",
          "Tạo ra một bảng trong một cơ sở dữ liệu"
        ],
        "a": 1
      },
      {
        "q": "Câu 122: Cú pháp nào sau đây dùng để xóa bảng?",
        "o": [
          "DROP TABLE",
          "CREAT TABLE",
          "DROP COLUMN",
          "ALTER TABLE"
        ],
        "a": 0
      },
      {
        "q": "Câu 123: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar(50)).\nCho biết thông tin của các thí sinh có ít nhất một trong 3 môn thi bị điểm liệt (điểm liệt = 0)?",
        "o": [
          "SELECT * FROM DiemKhoiA WHERE min(DiemToan, DiemLy, DiemHoa)=0",
          "SELECT * FROM DiemKhoiA WHERE DiemToan=0 or DiemLy=0 or DiemHoa=0",
          "SELECT * FROM DiemKhoiA WHERE DiemToan>=0 or DiemLy>=0 or DiemHoa>=0",
          "SELECT * FROM DiemKhoiA WHERE DiemToan=0 and DiemLy=0 and DiemHoa=0"
        ],
        "a": 1
      },
      {
        "q": "Câu 124: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar(50)).\nCâu lệnh hiển thị thông tin người có tổng điểm 3 môn cao nhất:",
        "o": [
          "SELECT * FROM DiemKhoiA WHERE TongDiem=max(DiemToan+ DiemLy+ DiemHoa)",
          "SELECT * FROM DiemKhoiA WHERE DiemToan+ DiemLy+ DiemHoa = max(DiemToan+DiemLy+ DiemHoa)",
          "SELECT * FROM DiemKhoiA WHERE max(DiemToan+ DiemLy+ DiemHoa)",
          "SELECT max(DiemToan+ DiemLy+ DiemHoa) FROM DiemKhoiA"
        ],
        "a": 1
      },
      {
        "q": "Câu 125: Trong câu lệnh hiển thị dữ liệu Select, từ khoá Distinct có tác dụng:",
        "o": [
          "Bổ sung dòng dữ liệu khác với điều kiện",
          "Loại bỏ các dòng dữ liệu khác biệt trong bảng",
          "Bổ sung dòng dữ liệu giống với điều kiện",
          "Loại bỏ các dòng dữ liệu giống nhau trong bảng"
        ],
        "a": 3
      },
      {
        "q": "Câu 126: Cho lệnh sau truy vấn sau:\nSELECT * FROM sv ORDER BY diemtb DESC;\nLệnh trên đưa ra kết quả nào?",
        "o": [
          "Đưa ra dữ liệu bảng sv sắp xếp giảm dần theo trường diemtb",
          "Cú pháp lệnh sai",
          "Đưa ra dữ liệu bảng sv sắp xếp tăng dần theo trường diemtb",
          "Đưa ra dữ liệu bảng sv"
        ],
        "a": 0
      },
      {
        "q": "Câu 127: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar(50)).\nCâu lệnh chọn lọc danh sách những thí sinh có tổng điểm (TongDiem) từ 13 điểm trở lên:",
        "o": [
          "SELECT * FROM DiemKhoiA WHERE TongDiem>=13 GROUP BY TongDiem",
          "SELECT * FROM DiemKhoiA WHERE TongDiem>=13",
          "SELECT * FROM DiemKhoiA WHERE TongDiem>13",
          "SELECT SoBaoDanh, DiemToan, DiemLy, DiemHoa FROM DiemKhoiA WHERE TongDiem>=13"
        ],
        "a": 1
      },
      {
        "q": "Câu 128: Trong Trigger, Dữ liệu trong bảng Delete được cập nhật khi:",
        "o": [
          "có một hành động xoá của bảng có ràng buộc trigger",
          "có một hành động xoá của bảng bất kỳ trong SQL",
          "trong bảng Delete không cập nhật dữ liệu",
          "Khi người dùng nhập dữ liệu cho bảng"
        ],
        "a": 0
      },
      {
        "q": "Câu 129: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar(50)).\nCâu lệnh cập nhật thông tin cho cột kết quả (cột KetQua) cho từng thí sinh, với thí sinh có tổng\nđiểm từ 13 điểm trở lên thì ghi kết quả ‘‘đỗ’’, ngược lại ghi kết quả là ‘‘trượt’’):",
        "o": [
          "UPDATE DiemKhoiA SET KetQua = CASE WHEN TongDiem>=13 THEN N‘đỗ’ ELSE N‘trượt’",
          "UPDATE DiemKhoiA SET KetQua = CASE WHEN TongDiem>=13 THEN N‘đỗ’ ELSE N‘trượt’ END",
          "UPDATE DiemKhoiA SET CASE WHEN TongDiem>=13 THEN KetQua = N‘đỗ’ ELSE KetQua = N‘trượt’ END",
          "UPDATE DiemKhoiA SET KetQua = CASE WHEN TongDiem>=13 THEN N‘đỗ’ ELSE N‘trượt’ END FROM DiemKhoiA"
        ],
        "a": 1
      },
      {
        "q": "Câu 130: Người dùng thường tạo Trigger cấm nhập dữ liệu áp dụng cho:",
        "o": [
          "Cả bảng cha và bảng con",
          "Cho tất cả các bảng trong Database",
          "Bảng con",
          "Bảng cha"
        ],
        "a": 2
      },
      {
        "q": "Câu 131: Ràng buộc check được sử dụng:",
        "o": [
          "Tất cả đều sai",
          "Định nghĩa khoá chính của bảng",
          "Chỉ định điều kiện hợp lệ đối với dữ liệu",
          "Dùng trong câu lệnh CREATE TABLE để định nghĩa khoá phụ cho bảng"
        ],
        "a": 2
      },
      {
        "q": "Câu 132: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar(50)).\nCâu lệnh Hiển thị thông tin người có tổng điểm thấp nhất:",
        "o": [
          "SELECT * FROM DiemKhoiA WHERE TongDiem=min(TongDiem)",
          "SELECT min(TongDiem) FROM DiemKhoiA GROUP BY TongDiem",
          "SELECT * FROM DiemKhoiA WHERE min(TongDiem)",
          "SELECT min(TongDiem) FROM DiemKhoiA"
        ],
        "a": 0
      },
      {
        "q": "Câu 133: My SQL là viết tắt của:",
        "o": [
          "My Structured Query Language",
          "Tất cả đều sai",
          "My System Query Language",
          "Tất cả đều đúng(trừ đáp án này)"
        ],
        "a": 0
      },
      {
        "q": "Câu 134: Trong câu lệnh hiển thị dữ liệu Select, dấu ‘‘*’’ có tác dụng:",
        "o": [
          "Chọn tất cả các dòng dữ liệu có trong bảng",
          "Chọn tất cả các cột có trong bảng",
          "Hiển thị toàn bộ bảng",
          "Hiển thị cột khoá trong bảng"
        ],
        "a": 1
      },
      {
        "q": "Câu 135: Trong câu lệnh chọn dữ liệu, sau từ khoá Select sẽ là:",
        "o": [
          "[ * | DISTINCT] [ TOP n] [ INTO tên bảng mới ]",
          "[ * | DISTINCT] [ TOP n] danh_sách_các cột",
          "[ * | DISTINCT] [ TOP n] danh_sách_các cột [ INTO tên bảng mới]",
          "[ * | DISTINCT] danh_sách_các cột [ INTO tên bảng mới ]"
        ],
        "a": 2
      },
      {
        "q": "Câu 136: Để lấy ra 3 ký tự đầu của chuỗi lệnh nào là đúng:",
        "o": [
          "SELECT LEN('123456')",
          "SELECT REPLICATE('123456',5)",
          "SELECT RIGHT('123456',3)",
          "SELECT LEFT('123456',3)"
        ],
        "a": 3
      },
      {
        "q": "Câu 137: Xóa tất cả các ký tự rỗng, khoảng trắng ở ĐầU chuỗi",
        "o": [
          "SELECT REVERSE('ABCDEF')",
          "SELECT LTRIM(' ABC ')",
          "Tất cả các đáp án đều sai",
          "SELECT RTRIM(' ABC ')"
        ],
        "a": 1
      },
      {
        "q": "Câu 138: Câu lệnh INSERT dung để làm gì?",
        "o": [
          "Là câu lệnh cập nhập/ sửa đổi trong CSDL",
          "Là câu lệnh thêm thông tin vào CSDL",
          "Là câu lệnh tìm kiếm/xóa thông tin trong CSDL",
          "Là câu lệnh lấy dữ liệu trong CSDL"
        ],
        "a": 1
      },
      {
        "q": "Câu 139: Câu Lệnh Insert Into dung để làm gì trong CSDL?",
        "o": [
          "Câu lệnh INSERT INTO được dùng để chèn dòng mới vào bảng",
          "Câu lệnh INSERT INTO được dùng để thiết lập điều kiện truy xuất.",
          "Câu lệnh INSERT INTO được dùng để xóa các dòng ra khỏi bảng",
          "Câu lệnh INSERT INTO được sử dụng để cập nhật/sửa đổi dữ liệu đã có trong bảng"
        ],
        "a": 0
      },
      {
        "q": "Câu 140: Tìm cú pháp đúng của insert into.",
        "o": [
          "INSERT INTO Tên_bảng(tên_cột) VALUES(Giá_trị_tương_ứng)",
          "INSERT INTO Tên_bảng VALUES(Giá_trị_tương_ứng)",
          "INSERT INTO Tên_cột VALUES(Giá_trị_tương_ứng)",
          "INSERT VALUES(Giá_trị_tương_ứng) INTO Tên_bảng(tên_cột)"
        ],
        "a": 0
      },
      {
        "q": "Câu 141: Câu lệnh UPDATE được sử dụng:",
        "o": [
          "Chọn dữ liệu từ một bảng và chèn nó vào một bảng khác nhau.",
          "Cập nhật hồ sơ hiện có trong một bảng",
          "Trở lại chỉ có giá trị khác nhau trong một cột",
          "Xoá các hàng trong một bảng"
        ],
        "a": 1
      },
      {
        "q": "Câu 142: Làm thế nào để chọn tất cả các bản ghi từ bảng Employees với giá trị trong cột FirstName bắt đầu bằng giá trị a?",
        "o": [
          "Select * from Employees where FirstName=’a’",
          "Select * from Employees where FirstName like ’a%’",
          "Select * from Employees where FirstName like ’%a’",
          "Select * from Employees where FirstName=’%a%’"
        ],
        "a": 1
      },
      {
        "q": "Câu 143: Truy vấn lồng phân cấp là?",
        "o": [
          "Mệnh đề WHERE của truy vấn con tham chiếu ít nhất một thuộc tính của các quan hệ trong\nmệnh đề FROM ở truy vấn cha",
          "Mệnh đề WHERE của truy vấn cha tham chiếu ít nhất một thuộc tính của các quan hệ trong\nmệnh đề FROM ở truy vấn con.",
          "Mệnh đề WHERE của truy vấn cha không tham chiếu đến thuộc tính của các quan hệ trong\nmệnh đề FROM ở truy vấn con.",
          "Mệnh đề WHERE của truy vấn con không tham chiếu đến thuộc tính của các quan hệ trong\nmệnh đề FROM ở truy vấn cha."
        ],
        "a": 3
      },
      {
        "q": "Câu 144: Cơ sở dữ liệu ‘‘QuanLyCuaHang’’ có bảng:\nDmHangHoa(DmHangHoaID Nvarchar(50), TenHang Nvarchar(200), DmNhaSanXuatREF\nNvarchar(50), TenHang Nvarchar(50))\nĐể chọn lọc thông tin: tên hàng, đơn vị tính của các mặt hàng. Ta thực hiện lệnh nào hợp lý nhất?",
        "o": [
          "SELECT TenHang, TenHang FROM DmHangHoa",
          "SELECT DISTINCT TenHang, TenHang FROM DmHangHoa WHERE DmHangHoaID",
          "SELECT TOP N TenHang, TenHang FROM DmHangHoa",
          "SELECT DISTINCT TenHang, TenHang FROM DmHangHoa"
        ],
        "a": 3
      },
      {
        "q": "Câu 145: Cho biết đoạn mã sau thực hiện công việc gì:\nSELECT HoaDonBanHangID, NgayLapHoaDon, DmNhanVienREF, DmKhachHangREF,\nTongTienBan\nFROM HoaDonBanHang\nINNER JOIN DmKhachHang\nON HoaDonBanHang.DmKhachHangREF = DmKhachHang.DmKhachHangID\nWHERE HoTenKhachHang = N‘Phạm Thu Vân’ AND YEAR(NgayLapHoaDon)=2011",
        "o": [
          "Hiển thị thông khách hàng ‘’Phạm Thu Vân’’ trong năm 2011",
          "Hiển thị thông tin của những hoá đơn bán cho khách hàng ‘’Phạm Thu Vân’’ trong năm 2011",
          "Hiển thị thông tin của những hoá đơn bán cho từng khách hàng ‘’Phạm Thu Vân’’ trong từng\nnăm 2011",
          "Hiển thị thông tin của những hoá đơn bán cho tất cả các khách hàng trong năm 2011"
        ],
        "a": 1
      },
      {
        "q": "Câu 146: Cơ sở dữ liệu ‘‘QuanLyCuaHang’’ có bảng:\nHoaDonBanHangChiTiet(HoaDonBanHangChiTietID Nvarchar(50), HoaDonBanHangFK\nNvarchar(50), DmTenKhachHangREF Nvarchar(50), DmHangHoaREF Nvarchar(50), SoLuongBan\nInt, DonGiaBan Bigint, ThanhTienBan Bigint)\nCho biết thông tin những mặt hàng bán được từ 10 sản phẩm trở lên?",
        "o": [
          "SELECT * FROM HoaDonBanHangChiTiet WHERE SoLuongBan>10",
          "SELECT * FROM HoaDonBanHangChiTiet WHERE SoLuongBan>=’10’",
          "SELECT * TOP 10 FROM HoaDonBanHangChiTiet",
          "SELECT * FROM HoaDonBanHangChiTiet WHERE SoLuongBan>=10"
        ],
        "a": 3
      },
      {
        "q": "Câu 147: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar)\nCâu lệnh sắp xếp danh sách thí sinh theo tổng điểm từ cao xuống thấp:",
        "o": [
          "SELECT * FROM DiemKhoiA ORDER BY TongDiem/A",
          "SELECT * FROM DiemKhoiA ORDER BY TongDiem Asc",
          "SELECT * FROM DiemKhoiA ORDER BY TongDiem Desc",
          "SELECT * FROM DiemKhoiA ORDER BY TongDiem/D"
        ],
        "a": 2
      },
      {
        "q": "Câu 148: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nHoSoThiSinh(SoBaoDanh Nvarchar(50), HoDem Nvarchar(50), Ten Nvarchar(50), NgaySinh Date, KhuVuc Nvarchar(50), DoiTuong Nvarchar(50), KhoiThi Nvarchar(50), DiaChi Nvarchar(400), NguyenVong1 Nvarchar(200), NguyenVong2 Nvarchar(200)) đã được nhập dữ liệu.\nViết câu lệnh cho biết thông tin những thí sinh có cùng họ tên là ‘‘Trần Bình Minh’’:",
        "o": [
          "SELECT * FROM HoSoThiSinh WHERE HoVaTen = N‘Trần Bình Minh’",
          "SELECT * FROM HoSoThiSinh WHERE HoDem = N‘Trần Bình’ and Ten = N‘Minh’",
          "SELECT HoDem, Ten FROM HoSoThiSinh WHERE HoDem = N‘Trần Bình’ and Ten = N‘Minh’",
          "SELECT HoDem = N‘Trần Bình’ and Ten = N‘Minh’ FROM HoSoThiSinh"
        ],
        "a": 1
      },
      {
        "q": "Câu 149: Cơ sở dữ liệu ‘‘QuanLyCuaHang’’ có bảng:\nHoaDonBanHang(HoaDonBanHangID Nvarchar(50), NgayLapHoaDon Date, DmNhanVienREF\nNvarchar(50), DmKhachHangREF Nvarchar(50), TongTienBan Bigint)\nCho biết thông tin hoá đơn bán trong ngày 20/3/2011:",
        "o": [
          "SELECT * FROM HoaDonBanHang WHERE NgayLapHoaDon=‘2011/3/20’",
          "SELECT * FROM HoaDonBanHang WHERE NgayLapHoaDon=‘20/3/2011’",
          "SELECT * FROM HoaDonBanHang WHERE NgayLapHoaDon=‘3/20/2011’",
          "a. SELECT * FROM HoaDonBanHang WHERE NgayLapHoaDon= ‘‘20/3/2011’’"
        ],
        "a": 2
      },
      {
        "q": "Câu 150: Lấy tất cả nhân viên có ngày sinh trong tháng 5",
        "o": [
          "SELECT NV.HOTEN FROM NHANVIEN AS NV WHERE MONTH(NV.NGAYSINH) < 5",
          "SELECT NV.HOTEN FROM NHANVIEN AS NV WHERE MONTH(NV.NGAYSINH) =< 5",
          "SELECT NV.HOTEN FROM NHANVIEN AS NV WHERE MONTH(NV.NGAYSINH)>=5",
          "SELECT NV.HOTEN FROM NHANVIEN AS NV WHERE MONTH(NV.NGAYSINH) = 5"
        ],
        "a": 3
      },
      {
        "q": "Câu 151: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nHoSoThiSinh(SoBaoDanh Nvarchar(50), HoDem Nvarchar(50), Ten Nvarchar(50), NgaySinh Date, KhuVuc Nvarchar(50), DoiTuong Nvarchar(50), KhoiThi Nvarchar(50), DiaChi Nvarchar(400), NguyenVong1 Nvarchar(200), NguyenVong2 Nvarchar(200)) đã được nhập dữ liệu.\nViết câu lệnh tính số lượng thí sinh thi khối A?",
        "o": [
          "SELECT count(*) FROM HoSoThiSinh WHERE KhoiThi= ‘A’",
          "SELECT KhoiThi, count(KhoiThi) = ‘A’ FROM HoSoThiSinh",
          "SELECT sum(*) FROM HoSoThiSinh WHERE KhoiThi= ‘A’",
          "SELECT KhoiThi, count(*) FROM HoSoThiSinh WHERE KhoiThi= ‘A’"
        ],
        "a": 3
      },
      {
        "q": "Câu 152: Cơ sở dữ liệu ‘‘QuanLyCuaHang’’ có bảng:\nDmHangHoa(DmHangHoaID Nvarchar(50), TenHang Nvarchar(200), DmNhaSanXuatREF\nNvarchar(50), DonViTinh Nvarchar(50))\nCho biết nhà tổng số lượng các mặt hàng?",
        "o": [
          "SELECT count(*) as SoLuongMatHang FROM DmHangHoa GROUP BY DmHangHoaID",
          "SELECT count(*) as SoLuongMatHang FROM DmHangHoa",
          "SELECT count(*) as SoLuongMatHang FROM DmHangHoa WHERE DmHangHoaID",
          "SELECT sum(*) SoLuongMatHang FROM DmHangHoa"
        ],
        "a": 1
      },
      {
        "q": "Câu 153: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nHoSoThiSinh(SoBaoDanh Nvarchar(50), HoDem Nvarchar(50), Ten Nvarchar(50), NgaySinh Date, KhuVuc Nvarchar(50), DoiTuong Nvarchar(50), KhoiThi Nvarchar(50), DiaChi Nvarchar(400), NguyenVong1 varchar(200), NguyenVong2 Nvarchar(200)) đã được nhập dữ liệu.\nThực hiện câu lệnh sửa tên của thí sinh có số báo danh ‘‘DQKD.2789’’ là ‘‘Hằng’’ thành ‘‘Hạnh’’:",
        "o": [
          "EDIT Ten=N‘Hằng’ TO Ten=N‘Hạnh’ WHERE SoBaoDanh= ‘DQKD.2789’",
          "UPDATE HoSoThiSinh SET Ten=N‘Hạnh’ WHERE SoBaoDanh= ‘DQKD.2789’",
          "UPDATE HoSoThiSinh SET Ten=N‘‘Hạnh’’ WHERE SoBaoDanh= ‘‘DQKD.2789’’",
          "UPDATE Ten=N‘Hằng’ TO Ten=N‘Hạnh’ WHERE SoBaoDanh= ‘DQKD.2789’"
        ],
        "a": 1
      },
      {
        "q": "Câu 154: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar(50))\nCâu lệnh cho biết với mỗi loại tổng điểm có bao nhiêu thí sinh?",
        "o": [
          "SELECT TongDiem, count(*) FROM DiemKhoiA GROUP BY TongDiem",
          "SELECT TongDiem, count(*) FROM DiemKhoiA WHERE TongDiem = count(TongDiem)",
          "SELECT TongDiem, count(*) FROM DiemKhoiA WHERE TongDiem",
          "SELECT count(TongDiem) FROM DiemKhoiA"
        ],
        "a": 0
      },
      {
        "q": "Câu 155: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nDiemKhoiA(SoBaoDanh Nvarchar(50), DiemToan Float, DiemLy Float, DiemHoa Float, DiemUuTien Float, TongDiem Float, KetQua Nvarchar(50))\nSử dụng câu lệnh hợp lý để đếm số thí sinh của từng loại tổng điểm cho những thí sinh có kết quả đỗ:",
        "o": [
          "SELECT TongDiem, count(*) FROM DiemKhoiA WHERE KetQua = ‘đỗ’ GROUP BY TongDiem",
          "SELECT TongDiem, count(*) FROM DiemKhoiA GROUP BY TongDiem WHERE KetQua = ‘đỗ’",
          "SELECT TongDiem, count(*) FROM DiemKhoiA GROUP BY TongDiem = count(TongDiem)\nWHERE KetQua = ‘đỗ’",
          "SELECT TongDiem, count(*) FROM DiemKhoiA WHERE KetQua = ‘đỗ’"
        ],
        "a": 0
      },
      {
        "q": "Câu 156: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nHoSoThiSinh(SoBaoDanh Nvarchar(50), HoDem Nvarchar(50), Ten Nvarchar(50), NgaySinh Date, KhuVuc Nvarchar(50), DoiTuong Nvarchar(50), KhoiThi Nvarchar(50), DiaChi Nvarchar(400), NguyenVong1 Nvarchar(200), NguyenVong2 Nvarchar(200)) đã được nhập dữ liệu.\nMuốn biết thông tin thí sinh có địa chỉ ở các tỉnh: Nghệ An, Hà Tĩnh, Quảng Bình. Ta thực hiện\nlệnh?",
        "o": [
          "SELECT * FROM HoSoThiSinh WHERE DiaChi IN(N‘Nghệ An’, N‘Hà Tĩnh’, N‘Quảng Bình’)",
          "SELECT * FROM HoSoThiSinh WHERE right(DiaChi,7)= N‘Nghệ An’ or right(DiaChi,7)= N‘Hà Tĩnh’ or right(DiaChi,10)= N‘Quảng Bình’",
          "SELECT * FROM HoSoThiSinh WHERE DiaChi Like (‘%Nghệ An’, ‘%Hà Tĩnh’, ‘%Quảng Bình’)",
          "SELECT * FROM HoSoThiSinh WHERE right(DiaChi,7)= N‘Nghệ An’ and right(DiaChi,7)= N‘Hà Tĩnh’ and right(DiaChi,10)= N‘Quảng Bình’"
        ],
        "a": 1
      },
      {
        "q": "Câu 157: Cơ sở dữ liệu ‘‘QuanLyTuyenSinh’’ có bảng:\nHoSoThiSinh(SoBaoDanh Nvarchar(50), HoDem Nvarchar(50), Ten Nvarchar(50), NgaySinh Date, KhuVuc Nvarchar(50), DoiTuong Nvarchar(50), KhoiThi Nvarchar(50), DiaChi Nvarchar(400), NguyenVong1 Nvarchar(200), NguyenVong2 Nvarchar(200)) đã được nhập dữ liệu.\nViết câu lệnh tính số lượng thí sinh thi khối D:",
        "o": [
          "SELECT sum(*) FROM HoSoThiSinh WHERE KhoiThi= ‘D’",
          "SELECT count(*) FROM HoSoThiSinh WHERE KhoiThi= ‘D’",
          "SELECT KhoiThi, count(KhoiThi) = ‘D’ FROM HoSoThiSinh",
          "SELECT KhoiThi, count(*) FROM HoSoThiSinh WHERE KhoiThi= ‘D’"
        ],
        "a": 3
      },
      {
        "q": "Câu 158: Cho bảng dữ liệu NHAN VIEN với các cột như sau: MANV, HOTEN, NGAYSINH.\nLọc những nhân viên có năm sinh nhỏ hơn 1983?",
        "o": [
          "HOTEN FORM NHANVIEN WHERE YEAR <1983",
          "SELECT NHANVIEN.HOTEN FROM NHANVIEN WHERE YEAR(NHANVIEN.NGAYSINH) < 1983",
          "SELECT HOTEN.NV FORM NV WHERE YEAR(NGAYSINH.NV)<1983",
          "SELECT HOTEN FROM NHANVIEN WHERE YEAR(NGAYSINH) > 1987"
        ],
        "a": 1
      },
      {
        "q": "Câu 159: Cho bảng dữ liệu NHAN VIEN với các cột như sau: MANV, HOTEN, NGAYSINH.\nCú pháp lệnh sau sẽ cho ta kết quả gì?\nSELECT NHANVIEN.HOTEN FROM NHANVIEN WHERE MONTH(NHANVIEN.NGAYSINH) = 5",
        "o": [
          "Hiển thị HOTEN của một người sinh tháng 5",
          "Hiển thị MANV của tất cả sinh tháng 5",
          "Hiển thị MANV của một người sinh tháng 5",
          "Hiển thị HOTEN của tất cả người sinh tháng 5"
        ],
        "a": 3
      },
      {
        "q": "Câu 160: Lấy nhân viên có năm sinh nhỏ hơn 1983:",
        "o": [
          "SELECT NV.HOTEN FROM NHANVIEN AS NV WHERE YEAR(NV.NGAYSINH)= < 1983",
          "SELECT NV.HOTEN FROM NHANVIEN AS NV WHERE YEAR(NV.NGAYSINH) =1983",
          "SELECT NV.HOTEN FROM NHANVIEN AS NV WHERE YEAR(NV.NGAYSINH) >1983",
          "SELECT NV.HOTEN FROM NHANVIEN AS NV WHERE YEAR(NV.NGAYSINH) < 1983"
        ],
        "a": 3
      },
      {
        "q": "Câu 161: Tạo cấu trúc bảng trong SQL, nếu tại Data Type của cột tương ứng người dùng chọn kiểu \"Bit\" thì dữ liệu của cột đó nhận giá trị dạng:",
        "o": [
          "Nhị phân",
          "Logic",
          "Số",
          "Ký tự"
        ],
        "a": 1
      },
      {
        "q": "Câu 162: Full Join là kiểu liên kết:",
        "o": [
          "Bình thường",
          "Bằng",
          "Tổng hợp",
          "Đầy đủ"
        ],
        "a": 3
      },
      {
        "q": "Câu 163: Cấu trúc khai báo một SP:",
        "o": [
          "CREATE STORE PROCEDURE",
          "CREATE PROCEDURE",
          "CREATE FUNCTION",
          "ALTER PROCEDURE"
        ],
        "a": 1
      },
      {
        "q": "Câu 164: Cú pháp câu lệnh xoá dữ liệu:",
        "o": [
          "DELETE",
          "DROP",
          "DROP",
          "SELECT"
        ],
        "a": 0
      }
    ]
  }
];

export default QUIZ_SETS_CSDLNC;
