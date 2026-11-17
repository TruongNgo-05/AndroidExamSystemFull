const QUIZ_SETS_LTNC = [
  {
    id: "lap_trinh_nang_cao",
    majorId: "cntt",
    title: "Lập trình nâng cao",
    description: "Ôn tập C#, Windows Forms, ADO.NET và SQL Server",
    questions: [
      {
        q: "Câu 1: Để lấy dữ liệu từ cơ sở dữ liệu, trước tiên bạn phải kết nối với cơ sở dữ liệu SQL Server bằng cách sử dụng .",
        o: ["OleDbDataReader", "SqlConnection", "SqlDataReader", "SqlCommand"],
        a: 1,
      },
      {
        q: "Câu 2: Một đối tượng là một đại diện của các đối tượng cơ sở dữ liệu trong bộ nhớ cache.",
        o: ["DataAdapter", "DataReader", "DataSet", "SqlCommand"],
        a: 2,
      },
      {
        q: "Câu 3: Sử dụng để lấy dữ liệu theo điều kiện nào đó 1 cách nhanh chóng.",
        o: ["DataAdapter", "DataSet", "DataTable", "DataView"],
        a: 3,
      },
      {
        q: "Câu 4: Lớp để tạo gắn kết giữa phần giao diện (UI) và dữ liệu",
        o: ["Binding", "Control", "BindingSource", "SqlConnection"],
        a: 0,
      },
      {
        q: "Câu 5: dùng để thực thi các câu truy vấn như INSERT,\nDELETE, UPDATE.",
        o: [
          "Cmd.ExecuteReader()",
          "Cmd.ExecuteScalar()",
          "Cmd.ExecuteNonQuery()",
          "Cmd.ExecuteUpdate()",
        ],
        a: 2,
      },
      {
        q: "Câu 6: Để thao tác với cơ sở dữ liệu trong C#,bạn cần những đối tượng nào ?",
        o: [
          "SqlConnection, SqlCommand, DataTable",
          "SqlConnection, DataTable, SqlDataReader",
          "SqlConnection, DataTable, SqlDataAdapter",
          "SqlConnection, SqlCommand, SqlDataAdapter",
        ],
        a: 3,
      },
      {
        q: "Câu 7: SqlConnection là đối tượng dùng để ?",
        o: [
          "Thực thi một câu truy vấn",
          "Tạo một kết nối đến cơ sở dữ liệu trên server",
          "Là một đối tượng dùng để đọc dữ liệu được trả về",
          "Không có đáp án đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 8: Để điền dữ liệu vào cho điều khiển\ndataGridView,bạn khai báo câu lệnh ?",
        o: [
          "dataGridView1.DataSource = nguồn dữ liệu",
          "dataGridView1.DataMember = nguồn dữ liệu",
          "dataGridView1.RowSource = nguồn dữ liệu",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 9: Khi kết nối SQL Server bằng Windows Authentication, bộ tham số nào sau đây gồm máy chủ, cơ sở dữ liệu và tùy chọn xác thực tích hợp (Integrated Security=true)?",
        o: [
          "server; password; database",
          "database; integrated security; password",
          "server; database; username",
          "server ; database, integrated security",
        ],
        a: 3,
      },
      {
        q: "Câu 10: Khi dùng SQL Server Authentication để đăng nhập vào máy chủ SQL Server, cần chuẩn bị đầy đủ thông tin nào sau đây?",
        o: [
          "Tên máy chủ cần kết nối, tên đăng nhập (Username) và mật khẩu (Password) của tài khoản SQL Server.",
          "Username; Password (nếu có) của Server cần kết nối đến.",
          "Tên Server muốn kết nối đến.",
          '"Địa chỉ IP của Server cần kết nối đến.',
        ],
        a: 0,
      },
      {
        q: "Câu 11: Cơ sở dữ liệu trong SQL Server chia thành hai loai:",
        o: [
          "CSDL hệ thống và CSDL người dùng.",
          "CSDL hệ thống và CSDL quản trị.",
          "CSDL người dùng và CSDL tính toán.",
          "CSDL quản trị và CSDL tương tự.",
        ],
        a: 0,
      },
      {
        q: "Câu 12: Trong CSDL SQL Server, cơ sở dữ liệu Master thuộc:",
        o: [
          "CSDL hệ thống.",
          "CSDL quản trị.",
          "CSDL tương tự.",
          "CSDL người dùng.",
        ],
        a: 0,
      },
      {
        q: "Câu 13: Để thiết lập chế độ bảo mật (Security Mode) ta thực hiện:",
        o: [
          "Kích phải chuột lên vùng làm việc của Server; Chọn Properties/ Security",
          "Vào Server và chọn Security.",
          "Vào Server/Database/Security",
          "Vào Server/Database/ Kích phải chuột chọn Security",
        ],
        a: 0,
      },
      {
        q: "Câu 14: Tạo CSDL. Khi cửa sổ New Database xuất hiện. Để xác định kích thước khởi tạo cho CSDL là 10 MB ta sẽ thiết lập tại mục:",
        o: ["Init Size", "Owner", "Filegroup", "Autogrowth"],
        a: 0,
      },
      {
        q: "Câu 15: Tạo CSDL. Khi cửa sổ New Database xuất hiện.\nMục Autogrowth sử dụng để thiết lập:",
        o: [
          "Kích thước tăng trưởng tự động của CSDL.",
          "Kích thước khởi tạo của file CSDl.",
          "Tên CSDL",
          "Đường dẫn đặt file CSDL.",
        ],
        a: 0,
      },
      {
        q: "Câu 16: Không gian tên nào chứa các điều khiển trên windows form.",
        o: [
          "System.Windows.Forms",
          "System.Windows.Controls",
          "System.Windows.Forms.UI",
          "System.Windows.Controls.UI",
        ],
        a: 0,
      },
      {
        q: "Câu 17: Tất cả các Windows Form đều thừa kế từ lớp ?",
        o: ["Window", "Form", "Page", "Tất cả đều sai."],
        a: 1,
      },
      {
        q: "Câu 18: Phương thức nào sau đây của lớp SqlCommand chắc chắn không làm thay đổi dữ liệu ?",
        o: [
          "ExecuteNonQuery",
          "ExecuteReader",
          "ExecuteScalar",
          "ExecuteReadOnly",
        ],
        a: 1,
      },
      {
        q: "Câu 19: Trong Windows Forms, để tạo một điều khiển tổng hợp (User Control) chứa các điều khiển con, lớp do bạn tạo thường kế thừa trực tiếp từ lớp nào?",
        o: ["Control", "UserControl", "TextBox", "Tất cả đều đúng"],
        a: 1,
      },
      {
        q: "Câu 20: Để một Form trở thành một MDI form ta làm thế nào?",
        o: [
          "Gán thuộc tính IsMdiContainer bằng true",
          "Gán thuộc tính IsMdiContainer bằng false",
          "Gán thuộc tính IsMdiChild bằng true",
          "Gán thuộc tính IsMdiChild bằng false",
        ],
        a: 0,
      },
      {
        q: "Câu 21: Sự kiện nào của TextBox chắc chắn xảy ra khi người dùng gõ một phím trên TextBox :",
        o: ["a. TextChange", "b. KeyPress", "Cả a và b đúng", "Cả a và b sai"],
        a: 2,
      },
      {
        q: "Câu 22: Phương thức nào sau đây dùng để hiện một form:",
        o: ["a. Show", "b. ShowDialog", "Cả a và b đúng", "Cả a và b sai"],
        a: 2,
      },
      {
        q: 'Câu 23: Để cho " textbox txtPW không hiển thị nội dung khi gõ vào. Cách nào sau đây là đúng:',
        o: [
          "txtPW.TextMode= TextMode.Password",
          "txtPW.Visible=False",
          "txtPW.PasswordChar = '*';",
          "Cả a, b, c đều đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 24: Thuộc tính nào cho biết chỉ số của phần tử được chọn trong ListBox:",
        o: [
          "a. SelectedIndex",
          "b. SelectedItem",
          "Cả a và b sai",
          "Cả a và b đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 25: Khi một listbox không có phần tử nào được chọn thì:",
        o: [
          "a) SelectedIndex bằng 0",
          "b) SelectedItem bằng null",
          "Cả a và b đúng",
          "Cả a và b sai",
        ],
        a: 2,
      },
      {
        q: 'Câu 26: Cho lst là một Listbox. Khi gọi phương thức\nlst.FindString("abc") thì kết quả trả về là gì?',
        o: [
          'Chỉ số phần tử đầu tiên có chuỗi bắt đầu bằng "abc"',
          'Chỉ số phần tử có nội dung là "abc"',
          'True/False cho biết có phần tử "abc" trong listbox không.',
          "Tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 27: Lớp SqlConnection nằm trong namespace nào:",
        o: [
          "System.Data",
          "System.Data.Sql",
          "System.Data.SqlClient",
          "System.Data.Connection",
        ],
        a: 2,
      },
      {
        q: "Câu 28: Phương thức nào của SqlDataAdapter dùng để select dữ liệu từ server và lưu vào DataTable",
        o: ["Select", "Fill", "ExecuteReader", "Save"],
        a: 1,
      },
      {
        q: "Câu 29: Phương thức nào của lớp SqlDataAdapter dùng để lưu những thay đổi dữ liệu từ một DataTable lên server",
        o: ["Save", "Update", "ExecuteNonQuery", "UpdateCommand"],
        a: 1,
      },
      {
        q: "Câu 30: Đối tượng nào trong ADO.NET cho phép thực thi các câu lệnh SQL.",
        o: [
          "SqlConnection",
          "SqlCommand",
          "SqlDataReader",
          "SqlExecuteCommand",
        ],
        a: 1,
      },
      {
        q: "Câu 31: Đối tượng SqlDataAdapter có thể đổ dữ liệu selected lên đối tượng nào sau đây:",
        o: ["a) Dataset", "b) DataTable", "Cả a và b đúng", "Cả a và b sai"],
        a: 2,
      },
      {
        q: "Câu 32: Phương thức thực thi các phát biểu SQL, thủ tục nội tại, và nó trả về số bản ghi được thực thi",
        o: [
          "ExecuteNonQuery",
          "ExecuteScalar",
          "ExecuteReader",
          "ExcuteXmlReader",
        ],
        a: 0,
      },
      {
        q: "Câu 33: Phương thức thực thi phát biểu SQL Server giá trị trả về là kiểu đối tượng (object)",
        o: [
          "ExecuteNonQuery",
          "ExecuteScalar",
          "ExecuteReader",
          "ExcuteXmlReader",
        ],
        a: 1,
      },
      {
        q: "Câu 34: Phương thức trả về tập các giá trị chỉ đọc một chiều và dùng đối tượng sqlDataReader để nắm giữ tập dữ liệu đó.",
        o: [
          "ExecuteNonQuery",
          "ExecuteScalar",
          "ExecuteReader",
          "ExcuteXmlReader",
        ],
        a: 2,
      },
      {
        q: "Câu 35: Phương thức trả về tập dữ liệu có định dạng\nXML và sử dụng đối tượng XMLReader để nắm giữ tập dữ liệu đó.",
        o: [
          "ExecuteNonQuery",
          "ExecuteScalar",
          "ExecuteReader",
          "ExcuteXmlReader",
        ],
        a: 3,
      },
      {
        q: "Câu 36: Để khai báo khởi tạo đối tượng sqlCommand ta chọn\nsqlCommand = new SqlCommand();\nsqlCommand = new SqlCommand(string CommandText);\nsqlCommand = new SqlCommand(string CommandText,\nSqlConnection sqlConnection);\nsqlCommand = new SqlCommand(string CommandText,\nSqlConnection sqlConnection, SqlTrasaction sqlTransaction);",
        o: ["a", "b", "Tất cả đều đúng", "a và c"],
        a: 2,
      },
      {
        q: "Câu 37: Thuộc tính cho phép khai báo một chuỗi phát biểu SQL Server",
        o: ["CommandText:", "CommandType", "CommandTimeout", "Connection"],
        a: 0,
      },
      {
        q: "Câu 38: Thuộc tính cho phép ta chọn một trong 3 giá trị enum là:\nText,TableDirect,StoredProcedure",
        o: ["CommandText", "CommandType", "CommandTimeout", "Connection"],
        a: 1,
      },
      {
        q: "Câu 39: Thuộc tính cho phép khai báo thời gian chờ thực thi phát biểu SQL được tính bằng giây",
        o: ["CommandText", "CommandType", "CommandTimeout", "Connection"],
        a: 2,
      },
      {
        q: "Câu 40: Thuộc tính cho phép ta khởi tạo đối tượng sqlConnection mà không cần phải thông báo qua Constructor",
        o: ["CommandText", "CommandType", "CommandTimeout", "Connection"],
        a: 3,
      },
      {
        q: "Câu 41: Trong chuỗi kết nối SqlConnection, phương án nào liệt kê đầy đủ nhất các cách chỉ định máy chủ trong các lựa chọn dưới đây? Giả sử máy chủ được cấu hình để nhận kết nối theo tên hoặc địa chỉ tương ứng.",
        o: [
          "(local) hoặc ( . )",
          "( . ) hoặc (địa chỉ IP)",
          "(local) hoặc ( . ) hoặc (địa chỉ IP)",
          "Tên bảng dữ liệu hoặc tên cột trong cơ sở dữ liệu",
        ],
        a: 2,
      },
      {
        q: "Câu 42: Trong C# Windows Forms, để đóng Form hiện tại từ mã của chính Form đó, dùng câu lệnh nào?",
        o: ["this.Close()", "me.Close()", "this.Hide()", "me.Hide()"],
        a: 0,
      },
      {
        q: "Câu 43: Thuộc tính AcceptButton của Form dùng để ?",
        o: [
          "Tạo một nút nhấn trên Form",
          "Tạo ra nút nhấn có nhãn là Accept",
          "Nút được click khi nhấn phím Enter",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 44: Để không cho phép người dùng sửa dữ liệu trong\nTextbox, chúng ta dùng thuộc tính ?",
        o: ["Text", "ReadOnly", "Enable", "Locked"],
        a: 1,
      },
      {
        q: "Câu 45: Để khai báo biến trong C#,bạn sử dụng câu lệnh ?",
        o: [
          "dim hoten",
          "dim hoten as string",
          "string hoten ;",
          "hoten string ;",
        ],
        a: 2,
      },
      {
        q: "Câu 46: Thuộc tính Visible dùng để ?",
        o: [
          "Hiển thị hình ảnh",
          "Cho phép nhập văn bản",
          "Không cho phép di chuyển điều khiển",
          "Ẩn hoặc hiện điều khiển",
        ],
        a: 3,
      },
      {
        q: "Câu 47: Để cho phép kích thước ảnh phù hợp với\nPictureBox,bạn dùng thuộc tính ?",
        o: ["Image", "SizeMode", "Size", "MaximumSize"],
        a: 1,
      },
      {
        q: "Câu 48: Thuộc tính nào dùng để đổi màu chữ của Form và các đối tượng khác trên Form?",
        o: ["FontColor", "BackColor", "ForeColor", "Color"],
        a: 2,
      },
      {
        q: "Câu 49: Để Form có kích thước to nhất khi chạy,bạn dùng thuộc tính?",
        o: ["WindowState", "SizeMode", "StartPosition", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 50: Câu lệnh nào dùng để đóng tất cả các ứng dụng trong C#?",
        o: ["return ;", "this.Close() ;", "Application.Exit() ;", "Exit Sub ;"],
        a: 2,
      },
      {
        q: "Câu 51: Phương thức nào dùng để đóng Form và giải phóng tài nguyên?",
        o: ["Close", "Hide", "Show", "Exit"],
        a: 0,
      },
      {
        q: "Câu 52: Để mở hộp thoại mở File bạn sử dụng câu lệnh nào ?",
        o: [
          "openFileDialog1.Open() ;",
          "openFileDialog1.ShowDialog() ;",
          "openFileDialog1.Show() ;",
          "openFileDialog1.OpenFile() ;",
        ],
        a: 1,
      },
      {
        q: "Câu 53: Điều khiển nào cho phép người dùng xem thông tin mà không cho phép sửa khi chương trình đang chạy ?",
        o: ["TextBox", "Label", "RichTextBox", "LitsBox"],
        a: 1,
      },
      {
        q: "Câu 54: Để thực hiện các câu lệnh Insert bạn sử dụng phương thức nào trong C#?",
        o: [
          "cmd.ExecuteReader() ;",
          "cmd.ExecuteScalar() ;",
          "cmd.ExecuteNonQuery() ;",
          "cmd.EndExecuteNonQuery() ;",
        ],
        a: 2,
      },
      {
        q: "Câu 55: Phương thức Focus() trong điều khiển TextBox dùng để làm gì?",
        o: [
          "Làm cho chữ trong điều khiển TextBox đậm lên",
          "Đặt con trỏ vào trong điều khiển TextBox",
          "Đổi màu chữ trong ô TextBox",
          "Không có đáp án đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 56: Để xóa dữ liệu trong TextBox bạn dùng câu lệnh nào?",
        o: [
          "TextBox1.Text=””;",
          "TextBox1.Clear() ;",
          "Cả hai đáp án trên đều đúng",
          "Không có đáp án nào đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 57: Điều khiển nào dùng để nhóm các thông tin có liên quan lại với nhau?",
        o: ["Panel", "GroupBox", "Form", "Combobox"],
        a: 1,
      },
      {
        q: "Câu 58: Để thực thi câu lệnh truy vấn Select bạn sử dụng câu lệnh nào ?",
        o: [
          "cmd.ExecuteNonQuery()",
          "cmd.ExecuteScalar()",
          "cmd.ExecuteReader()",
          "cmd.EndExecuteReader() ;",
        ],
        a: 2,
      },
      {
        q: "Câu 59: Để thực thi câu truy vấn Update bạn sử dụng câu lệnh nào sau đây ?",
        o: [
          "cmd.ExecuteNonQuery()",
          "cmd.ExecuteReader()",
          "cmd.EndExecuteNonQuery()",
          "cmd.ExecuteScalar()",
        ],
        a: 0,
      },
      {
        q: "Câu 60: Để thực thi câu lệnh truy vấn Delete bạn sử dụng câu lệnh nào sau đây?",
        o: [
          "cmd.ExecuteReader()",
          "cmd.ExecuteNonQuery()",
          "cmd.ExecuteScalar()",
          "cmd.EndExecuteNonQuery()",
        ],
        a: 1,
      },
      {
        q: "Câu 61: Trong đối tượng MessageBox, câu lệnh MessageBoxIcon dùng để ?",
        o: [
          "Hiển thị biểu tượng cho đối tượng MessageBox",
          "Hiển thị tiêu đề cho đối tượng MessageBox",
          "Hiển thị các nút nhấn cho đối tượng MessageBox",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 62: Delegate dùng để làm gì ?",
        o: [
          "Truyền dữ liệu từ Form sau về Form trước",
          "Cập nhật lại trạng thái dữ liệu",
          "Cả hai đáp án trên đều đúng",
          "Không có đáp án nào đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 63: Để khai báo Delegate, bạn sử dụng câu lệnh nào sau đây?",
        o: [
          "Public delegate void truyenDL() ;",
          "Public void delegate truyenDL() ;",
          "delegate truyenDL() ;",
          "Không có đáp án nào đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 64: Để xóa ảnh hiện tại trong đối tượng PictureBox bạn dùng câu lệnh nào sau đây ?",
        o: [
          "PictureBox1.FromFile=null",
          "PictureBox1.Image= “”",
          "PictureBox1.Image=null",
          "Không có đáp án nào đúng",
        ],
        a: 2,
      },
      {
        q: 'Câu 65: Câu lệnh sau sai ở dòng nào ?\n1. SqlConnection ketnoi = new SqlConnection(@"server=(local);"\n+"database=Quanlysinhvien; integrated security=true;");\n2. string truyvan = "select *from sinhvien";\n3. SqlCommand cmd = new SqlCommand(truyvan,ketnoi);\n4. cmd.ExecuteNonQuery();',
        o: ["1", "2", "3", "4"],
        a: 3,
      },
      {
        q: 'Câu 66: Câu lệnh sau sai ở dòng nào ?\n1. SqlConnection ketnoi = new SqlConnection(@"server=(local);"\n+"database=Quanlysinhvien; integrated security=true;");\n2. string truyvan = "delete from sinhvien";\n3. SqlCommand cmd = new SqlCommand(truyvan,ketnoi);\n4. cmd.ExecuteReader();',
        o: ["3", "2", "4", "1"],
        a: 2,
      },
      {
        q: "Câu 67: Để sử dụng được các đối tượng\nSqlConnection,SqlCommand bạn phải khai báo sử dụng thêm câu lệnh nào ?",
        o: [
          "using System.Data ;",
          "using System.Data.SqlClient ;",
          "using System.SqlClient.Data ;",
          "using System.Data.OLEDB ;",
        ],
        a: 1,
      },
      {
        q: "Câu 68: Để mở kết nối đến Server bạn sử dụng phương thức ?",
        o: [
          "ketnoi.Open() ;",
          "ketnoi.OpenConnection() ;",
          "ketnoi.OpenDatabase() ;",
          "Không có đáp án nào đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 69: Để lấy ra vị trí dòng hiện thời trong DataGridView bạn sử dụng câu lệnh nào ?",
        o: [
          "dataGridView1.CurrentCell.Index ;",
          "dataGridView1.CurrentRow.Count ;",
          "dataGridView1.CurrentRow.Index ;",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 70: Để lấy ra đường dẫn hiện tại của Project ?",
        o: [
          "App.Path ;",
          "Application.StartupPath ;",
          "App.StartupPath ;",
          "Application.Path ;",
        ],
        a: 1,
      },
      {
        q: "Câu 71: Để lấy ra giá trị của ô đang chọn hiện thời( dòng hiện thời đang là dòng đầu tiên), trong dataGridView bạn chọn ?",
        o: [
          "dataGridView1.CurrentRow.Cells[0].Text",
          "dataGridView1.CurrentCell.Row[0].Value",
          "dataGridView1.CurrentRow.Row[0].Value",
          "dataGridView1.CurrentRow.Cells[0].Value ;",
        ],
        a: 3,
      },
      {
        q: "Câu 72: Muốn lấy giá trị của cột thứ 2, ở dòng thứ 3 trong dataGridView bạn chọn ?",
        o: [
          "dataGridView1.CurrentRow[2].Cells[1].Value ;",
          "dataGridView1.Rows[2].Cells[1].Value ;",
          "dataGridView1.Cells[2].Rows[1].Value ;",
          "Không có đáp án đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 73: Để hiển thị dữ liệu dạng dòng và cột bạn sử dụng điều khiển nào ?",
        o: ["TextBox", "Combobox", "ListBox", "dataGridView"],
        a: 1,
      },
      {
        q: "Câu 74: Để cho phép điều khiển TextBox nhập dữ liệu được trên nhiều dòng,bạn sử dụng ?",
        o: ["Multiline", "MultiColumn", "MultiRow", "MultiText"],
        a: 0,
      },
      {
        q: "Câu 75: Để đóng Form nhưng không giải phóng tài nguyên ?",
        o: ["me.Close() ;", "this.Close() ;", "this.Hide() ;", "me.Hide() ;"],
        a: 2,
      },
      {
        q: "Câu 76: Để tạo ra các menu cho chương trình (VD : menu bar) bạn dùng điều khiển nào ?",
        o: ["ToolStrip", "MenuStrip", "StatusStrip", "ContextMenuStrip"],
        a: 1,
      },
      {
        q: "Câu 77: Để lấy ra các phần tử của điều khiển ListBox bạn dùng ?",
        o: ["Text", "Items", "ListItem", "Column"],
        a: 1,
      },
      {
        q: "Câu 78: Để cho phép chia ListBox thành nhiều cột, chúng ta dùng ?",
        o: ["Item", "Column", "MultiColumn", "Multimedia"],
        a: 2,
      },
      {
        q: "Câu 79: Thuộc tính nào dùng để lấy ra chỉ mục của dòng hiện thời trong ListBox?",
        o: ["SelectedIndex", "SelectedItem", "SelectedText", "SelectedValue"],
        a: 0,
      },
      {
        q: "Câu 80: Thuộc tính nào dùng để lấy ra giá trị của dòng đang được chọn trong ListBox ?",
        o: [
          "SelectedText",
          "SelectedValue",
          "SelectedItem",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 81: Thuộc tính nào cho phép ListBox được chọn trên nhiều dòng?",
        o: [
          "SelectionColumn",
          "SelectionMode",
          "SelectionRow",
          "Không có đáp án đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 82: Để thêm một dòng mới vào ListBox bạn sử dụng câu lệnh ?",
        o: [
          "listBox1.Items.AddNew(“hello”)",
          "listBox1.AddNewItem(“hello”)",
          "listBox1.Items.Add(“hello”)",
          "Không có đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Câu 83: Để xóa tất cả các dòng,bạn dùng phương thức?",
        o: ["Add()", "Delete()", "Remove()", "Clear()"],
        a: 3,
      },
      {
        q: "Câu 84: Muốn xóa phần tử 1 vị trí bất kỳ trên ListBox,bạn sử dụng phương thức?",
        o: [
          "Delete(vị trí dòng cần xóa)",
          "Clear(vị trí dòng cần xóa)",
          "RemoveAt(vị trí dòng cần xóa)",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 85: Dòng không được chọn trong ListBox có giá trị chỉ mục là bao nhiêu?",
        o: ["0", "-1", "1", "Một giá trị bất kỳ"],
        a: 1,
      },
      {
        q: "Câu 86: ComboBox là gì?",
        o: [
          "Là điều khiển cho phép xem thông tin",
          "Là điều khiển giống ListBox",
          "Là điều khiển cho phép nhập dữ liệu và lựa chọn dữ liệu",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 87: Đoạn chương trình sau thực hiện công việc gì?\ndataGridView1.Rows[current].Selected = false;\ncurrent = 0;\ndataGridView1.Rows[current].Selected = true;",
        o: [
          "Di chuyển đến bản ghi cuối cùng",
          "Di chuyển đến bản ghi đầu tiên",
          "Di chuyển đến bản ghi đằng sau bản ghi hiện hành",
          "Di chuyển đến bản ghi đằng trước bản ghi hiện hành",
        ],
        a: 1,
      },
      {
        q: "Câu 88: Đoạn chương trình sau thực hiện công việc gì?\nif (current >=dataGridView1.Rows.Count-2) \n “{\n\nreturn;\n}\ndataGridView1.Rows[current].Selected = false;\ncurrent = current + 1;\ndataGridView1.Rows[current].Selected = true;",
        o: [
          "Di chuyển đến bản ghi đầu tiên",
          "Di chuyển đến bản ghi đằng trước bản ghi hiện hành",
          "Di chuyển đến bản ghi đằng sau bản ghi hiện hành",
          "Di chuyển đến bản ghi cuối cùng",
        ],
        a: 2,
      },
      {
        q: "Câu 89: Đoạn chương trình sau thực hiện công việc gì?\nif (current <= 0)\n{\nreturn;\n}\ndataGridView1.Rows[current].Selected = false;\ncurrent = current-1;\ndataGridView1.Rows[current].Selected = true;",
        o: [
          "Di chuyển đến bản ghi cuối cùng",
          "Di chuyển đến bản ghi đằng sau bản ghi hiện hành",
          "Di chuyển đến bản ghi đầu tiên",
          "Di chuyển đến bản ghi đằng trước bản ghi hiện hành",
        ],
        a: 3,
      },
      {
        q: "Câu 90: Đoạn chương trình sau thực hiện công việc gì?\ndataGridView1.Rows[current].Selected = false;\ncurrent = dataGridView1.Rows.Count-2;\ndataGridView1.Rows[current].Selected = true;",
        o: [
          "Di chuyển đến bản ghi đầu tiên",
          "Di chuyển đến bản ghi đằng sau bản ghi hiện hành",
          "Di chuyển đến bản ghi cuối cùng",
          "Di chuyển đến bản ghi đằng trước bản ghi hiện hành",
        ],
        a: 2,
      },
      {
        q: "Câu 91: Đoạn chương trình sau thực hiện công việc gì?\nif (dataGridView1.Rows[current].IsNewRow)\n{\nreturn;\n}",
        o: [
          "Không có đáp án đúng",
          "Chương trình bị lỗi vì điều khiển dataGridView không có thuộc tính IsNewRow",
          "Kiểm tra xem điều khiển dataGridView có chứa dòng trắng hay không",
          "Kiểm tra xem người dùng có nhấn vào dòng trắng trong điều khiển dataGridView hay không",
        ],
        a: 3,
      },
      {
        q: "Câu 92: Đoạn chương trình sau thực hiện công việc gì?\nif (current >=dataGridView1.Rows.Count-2)\n{\nreturn;\n}",
        o: [
          "Kiểm tra xem đã đi đến bản ghi cuối cùng chưa, nếu chưa đến bản ghi cuối cùng thì thoát khỏi chương trình",
          "Kiểm tra xem đã đi đến bản ghi cuối cùng chưa,nếu đến bản ghi cuối cùng thì thoát khỏi chương trình",
          "Không có đáp án đúng",
          "Chương trình bị lỗi vì viết sai cú pháp",
        ],
        a: 1,
      },
      {
        q: "Câu 93: Để hiển thị hình ảnh cho điều khiển MenuStrip bạn sử dụng thuộc tính nào?",
        o: ["Source", "Image", "Picture", "Image Source"],
        a: 1,
      },
      {
        q: "Câu 94: Thế nào là ứng dụng MDI?",
        o: [
          "Là ứng dụng không cho phép người dùng thao tác với nhiều cửa sổ ở một thời điểm",
          "Là ứng dụng cho phép người dùng thao tác với một cửa sổ duy nhất ở mọi thời điểm",
          "Là ứng dụng cho phép người dùng thao tác với nhiều cửa sổ ở một thời điểm",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 95: Câu lệnh nào cho biết đâu là Form cha của một\nForm con trong ứng dụng MDI?",
        o: [
          "frmChildForm.Parent=this;",
          "frmChildForm.MdiParent=this;",
          "frmChildForm.MdiChildren=this;",
          "Không có đáp án nào đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 96: Để điền dữ liệu từ database vào điều khiển\nComboBox, bạn sử dụng câu lệnh?",
        o: [
          "ComboBox1.Source=tập dữ liệu",
          "ComboBox1.LoadDataSource=tập dữ liệu",
          "ComboBox1.DataSource=tập dữ liệu",
          "Không có đáp án nào đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 97: Để chú thích trong c# ta dùng ?",
        o: ["a) //", "b) /**/", "c) <!-- -->", "a và b"],
        a: 3,
      },
      {
        q: "Câu 98: Chương trình sau sai ở dòng nào?\nshort x;\nint y =100;\nx = (short)y;",
        o: ["1", "2", "3", "Không sai dòng nào"],
        a: 3,
      },
      {
        q: "Câu 99: Chương trình sau sai ở dòng nào?\nshort x;\nint y =100;\nx = y;",
        o: ["1", "2", "3", "Không sai dòng nào"],
        a: 2,
      },
      {
        q: 'Câu 100: Chương trình sau cho kết quả là gì?\nstatic void Main(string[] args)\n{\nint[] intArray = {1,2,3,4,5,6,7,8,9,10 }; foreach(int item in intArray)\n{\nConsole.Write("{0}",item);\n}\nConsole.ReadLine();\n}',
        o: [
          "Chương trình báo lỗi",
          "In ra: 0",
          "In ra: 1 2 3 4 5 6 7 8 9 10",
          "In ra: 10 9 8 7 6 5 4 3 2 1",
        ],
        a: 2,
      },
      {
        q: "Câu 101: Chương trình sau cho kết quả là gì?\nstatic void Main(string[] args)\n{\nint a= 30; int b = ++a;\nConsole.Write(a);\nConsole.ReadLine();\n}",
        o: ["29", "30", "31", "32"],
        a: 2,
      },
      {
        q: "Câu 102: Kết quả của chương trình sau là gì ?\nstatic void Main(string[] args)\n{\nint a= 30; int b = a++;\nConsole.Write(a);\nConsole.ReadLine();\n}",
        o: ["29", "30", "31", "32"],
        a: 1,
      },
      {
        q: "Câu 103: Kết quả của chương trình sau là gì ?\nstatic void Main(string[] args)\n{\nint a= 30;\n++a;\nConsole.Write(a);\nConsole.ReadLine();\n}",
        o: ["29", "30", "31", "32"],
        a: 2,
      },
      {
        q: 'Câu 104: Khi nhập chuỗi : Đại Học Kinh Doanh & Công Nghệ Hà Nội\nKết quả của chương trình sau là gì?\nstatic void Main(string[] args)\n{\nstring hoten;\nConsole.Write("\\\nNhap Chuoi:"); hoten = Console.ReadLine(); string HT= hoten.ToLower();\nConsole.Write("{0}", HT);\nConsole.ReadLine();\n}',
        o: [
          "Đại Học Kinh Doanh & Công Nghệ Hà Nội",
          "đại học kinh doanh & công nghệ hà nội",
          "ĐạI HọC KINH DOANH & CÔNG NGHệ Hà NộI",
          "ĐẠI HỌC KINH DOANH & CÔNG NGHỆ HÀ NỘI",
        ],
        a: 1,
      },
      {
        q: "Câu 105: Anh Chị hãy cho biết chương trình sau để làm gì\n?\nprivate void textBox1_KeyPress(object sender, KeyPressEventArgs e)\n{\ne.Handled = !((e.KeyChar > 65 && e.KeyChar < 122) || (e.KeyChar == 8));\n}",
        o: [
          "Chỉ cho phép nhập chữ vào textbox",
          "Chỉ cho phép nhập số vào textbox",
          "Nhập được cả chữ và số",
          "Không nhập được chữ và số",
        ],
        a: 0,
      },
      {
        q: "Câu 106: Anh Chị hãy cho biết chương trình sau để làm gì?\nprivate void textBox2_KeyPress(object sender, KeyPressEventArgs e)\n{\nif (!char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar))\n{\ne.Handled = true;\n}\n}",
        o: [
          "Chỉ cho phép nhập chữ vào textbox",
          "Chỉ cho phép nhập số vào textbox",
          "Nhập được cả chữ và số",
          "Không nhập được chữ và số",
        ],
        a: 1,
      },
      {
        q: "Câu 107: Anh chị hãy cho biết khi muốn tạo chú thích cho 1 đoạn chương trình ta nhấn ?",
        o: [
          "Ctrl + K, Ctrl + C",
          "Ctrl + K, Ctrl + U",
          "Ctrl + K, Ctrl + F",
          "Ctrl + Space",
        ],
        a: 0,
      },
      {
        q: "Câu 108: Anh chị hãy cho biết khi muốn bỏ chú thích cho 1 đoạn chương trình ta nhấn ?",
        o: [
          "Ctrl + K, Ctrl + C",
          "Ctrl + K, Ctrl + U",
          "Ctrl + K, Ctrl + F",
          "Ctrl + Space",
        ],
        a: 1,
      },
      {
        q: "Câu 109: Anh chị hãy cho biết khi muốn định dạng một đoạn chương trình cho ngay hàng thẳng lối ta nhấn ?",
        o: [
          "Ctrl + K, Ctrl + C",
          "Ctrl + K, Ctrl + U",
          "Ctrl + K, Ctrl + F",
          "Ctrl + Space",
        ],
        a: 2,
      },
      {
        q: "Câu 110: Anh chị hãy cho biết khi muốn hiển thị gợi ý cú pháp ta nhấn ?",
        o: [
          "Ctrl + K, Ctrl + C",
          "Ctrl + K, Ctrl + U",
          "Ctrl + K, Ctrl + F",
          "Ctrl + Space",
        ],
        a: 3,
      },
      {
        q: "Câu 111: Anh chị hãy cho biết. Ngôn ngữ C# không hỗ trợ",
        o: [
          "Đơn kế thừa",
          "Đa kế thừa",
          "Implement nhiều Interface",
          "Implement một Interface",
        ],
        a: 1,
      },
      {
        q: "Câu 112: Anh chị hãy : Lựa chọn phát biểu đúng. Trong C#:",
        o: [
          "Một lớp có thể có nhiều lớp cha.",
          "Một lớp chỉ có thể được kế thừa tối đa một lớp cha.",
          "Có thể tạo một thể hiện của một Interface.",
          "Có thể tạo thể hiện của một lớp trừu tượng (abstract)",
        ],
        a: 1,
      },
      {
        q: "Câu 113: Đoạn chương trình sau cho kết quả là bao nhiêu ?\nint tich, i;\ntich = 0; for (i = 1; i <= 5; i++)\n{\ntich= tich *i;\n}\nConsole.WriteLine(tich);",
        o: ["1", "120", "0", "5"],
        a: 2,
      },
      {
        q: "Câu 114: Đoạn chương trình sau cho kết quả là gì?\nint tich, i;\ntich = 1; for (i = 1; i <= 5; i=i+2)\n{\ntich = tich *i;\n}\nConsole.WriteLine(tich);",
        o: ["15", "16", "17", "18"],
        a: 0,
      },
      {
        q: "Câu 115: Đoạn chương trình sau cho kết quả là gì?\nint tich, i;\ntich = 1;\nfor (i = 1; i <= 3; i++)\n{\ntich= tich *1;\n}\nConsole.WriteLine(tich);",
        o: ["8", "6", "3", "1"],
        a: 3,
      },
      {
        q: "Câu 116: Đoạn chương trình sau cho kết quả là gì?\nint tong, i;\ntong = 1; for (i = 1; i <= 7; i=i+2)\n{\ntong =tong +i;\n}\nConsole.WriteLine(tong);",
        o: ["17", "16", "15", "18"],
        a: 0,
      },
      {
        q: "Câu 117: Câu lệnh nào dùng để khai báo thủ tục khởi tạo cho class diem",
        o: [
          "public diem(){}",
          "public string diem(){}",
          "public diem{}",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 118: Cách khai báo và khởi tạo đối tượng trong C#?",
        o: [
          "tên_lớp tên_đối_tượng = tên_lớp()",
          "tên_lớp tên_đối_tượng ()",
          "tên_đối_tượng tên_lớp()",
          "tên_lớp tên_đối_tượng = new tên_lớp()",
        ],
        a: 3,
      },
      {
        q: "Câu 119: Một ứng dụng C# dạng thực thi có bao nhiêu điểm vào (entry point) được chọn để bắt đầu chạy? Câu hỏi xét điểm vào được chọn, không xét số phương thức có thể đặt tên Main trong mã nguồn.",
        o: ["1", "2", "3", "Không giới hạn"],
        a: 0,
      },
      {
        q: "Câu 120: Lớp nhanvien kế thừa được những gì ở lớp nguoi?\nclass nhanvien : nguoi\n{ } class nguoi\n{\nprivate string hoten; public string getName {get { return hoten; }} public void hienthi(){ }\n}",
        o: [
          "hoten, getName, hienthi",
          "getName, hienthi",
          "hoten, hienthi",
          "hoten, getName",
        ],
        a: 1,
      },
      {
        q: "Câu 121: Chương trình sau sẽ gọi thủ tục khởi tạo nào ?\nclass Program\n{\nstatic void Main(string[] args)\n{\nnguoi obj = new nhanvien();\n}\n}\nclass nguoi\n{\nprivate string hoten;\npublic nguoi() { }\npublic nguoi(string name, int age) { }\n3.\npublic nguoi(string name) { }\n}",
        o: ["2", "1", "3", "Chương trình bị lỗi"],
        a: 1,
      },
      {
        q: 'Câu 122: Chương trình sau sẽ gọi thủ tục khởi tạo nào ?\nclass Program\n{\nstatic void Main(string[] args)\n{\nnguoi obj = new nhanvien(23);\n}\n}\nclass nguoi {" &\nvbcrlf & "private string hoten;\npublic nguoi()\n{ }\npublic nguoi(string name, int age) { }\npublic nguoi(string name) { }\n}',
        o: ["3", "1", "2", "Chương trình bị lỗi"],
        a: 3,
      },
      {
        q: 'Câu 123: Chương trình sau sẽ gọi thủ tục khởi tạo nào ?\nclass Program\n{\nstatic void Main(string[] args)\n{\nnguoi obj = new nhanvien("nguyen thi lan");\n}\n}\nclass nguoi\n{\nprivate string hoten;\npublic nguoi()\n{ }\npublic nguoi(string name, int age) { }\npublic nguoi(string name) { }\n}',
        o: ["3", "1", "2", "Chương trình bị lỗi"],
        a: 0,
      },
      {
        q: "Câu 124: Trong C#, để khai báo một phương thức của lớp là phương thức tĩnh ta dùng từ khoá",
        o: ["public", "void", "static", "intenal"],
        a: 2,
      },
      {
        q: "Câu 125: Từ khoá nào sau đây được dùng khi lớp con muốn cài đặt lại phương thức được thừa kế từ lớp cha",
        o: ["new", "override", "virtual", "abstract"],
        a: 1,
      },
      {
        q: "Câu 126: Trong C#, cấu trúc nào sau đây được dùng để bắt và xử lý các ngoại lệ ?",
        o: ["if/else", "Catch/Finaly", "do/loop", "Try/Catch"],
        a: 3,
      },
      {
        q: "Câu 127: Một câu lệnh try trong C# có thể có tối đa bao nhiêu khối finally gắn trực tiếp với nó?",
        o: ["1", "2", "3", "Vô số"],
        a: 0,
      },
      {
        q: "Câu 128: Kết quả đoạn chương trình sau là gì ?\nint giatri=1;\nint i;\nfor (i = 1; i\n<= 7; i += 2)\n{\ngiatri = giatri *i;\n}\nConsole.WriteLine(giatri);",
        o: ["110", "7", "35", "105"],
        a: 3,
      },
      {
        q: "Câu 129: Đoạn chương trình sau có hành vi nào?\nint giatri=1; int i=1;\nwhile (i <= 5)\n{\ngiatri = giatri *i;\n}\nConsole.WriteLine(giatri);",
        o: ["Vòng lặp vô hạn", "120", "20", "100"],
        a: 0,
      },
      {
        q: "Câu 130: Đoạn chương trình sau cho kết quả là gì?\nint giatri=1; int i=1;\nwhile (i <= 5)\n{\ngiatri = giatri *i;\ni = i + 2;\n}\nConsole.WriteLine(giatri);",
        o: ["5", "15", "120", "25"],
        a: 1,
      },
      {
        q: "Câu 131: Đoạn chương trình sau cho kết quả là gì?\nint giatri=0; int i=1; while (i\n<= 5)\n{\ngiatri = giatri *i;\ni = i + 2;\n}\nConsole.WriteLine(giatri);",
        o: ["15", "120", "25", "0"],
        a: 3,
      },
      {
        q: 'Câu 132: Đoạn chương trình sau cho kết quả là gì?\nint so;\nso = 7;\nif (so\n> 9)\n{ Console.Write("hello"); } else if (so > 5) { Console.Write("good day!"); } else{Console.Write("good luck!");}',
        o: ["hello", "good luck !", "good day !", "Không có đáp án đúng"],
        a: 2,
      },
      {
        q: "Câu 133: Đoạn chương trình sau thực hiện công việc gì?\nint tich, i;\ntich = 1;\nfor(i=1;i<=6;i++)\n{\ntich = tich *i;\n}\nConsole.Write(tich);",
        o: [
          "Tính tích các số từ 1 đến 6",
          "Tính 6 giai thừa",
          "Cả 2 đáp án trên đều đúng",
          "Không có đáp án đúng",
        ],
        a: 2,
      },
      {
        q: 'Câu 134: Câu lệnh sau sai ở dòng nào ? \n1. SqlConnection ketnoi = new SqlConnection(@"server=(local);"\n+"database=Quanlysinhvien; integrated security=true;");\n2. string truyvan = "select *from sinhvien";\n3. SqlCommand cmd = new SqlCommand(ketnoi);\n4. SqlDataAdapter da = new SqlDataAdapter(cmd);',
        o: ["2", "3", "4", "1"],
        a: 0,
      },
      {
        q: "Câu 135: Trong C# có tối đa là bao nhiêu phương thức Main()?",
        o: ["1", "2", "3", "Không giới hạn"],
        a: 3,
      },
    ],
  },
];
export default QUIZ_SETS_LTNC;
