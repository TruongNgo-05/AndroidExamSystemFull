const QUIZ_SETS_JAVA_NANG_CAO = [
  {
    id: "cong_nghe_java_nang_cao",
    majorId: "cntt",
    title: "Công nghệ Java",
    description: "UPDATE Java.",
    questions: [
      {
        q: "Câu 1: Lớp System.out dùng để?",
        o: [
          "Hiển thị kết quả trên màn hình",
          "Xuất dữ liệu ra ngoài màn hình",
          "Đọc các ký tự dữ liệu",
          "Xuất các kí tự dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Câu 2: Lớp System.in dùng để?",
        o: [
          "Hiển thị kết quả trên màn hình",
          "Xuất dữ liệu ra ngoài màn hình",
          "Đọc các ký tự dữ liệu",
          "Xuất các kí tự dữ liệu",
        ],
        a: 2,
      },
      {
        q: "Câu 3: Lớp System.err là?",
        o: [
          "Hiển thị kết quả trên màn hình",
          "Xuất dữ liệu ra ngoài màn hình",
          "Đọc các ký tự dữ liệu",
          "Dòng lỗi chuẩn",
        ],
        a: 3,
      },
      {
        q: "Câu 4: Lớp InputStream dùng để?",
        o: [
          "Đọc và dùng các dòng dữ liệu để làm đầu vào.",
          "Tạo ra, ghi và xử lý kết xuất các dòng",
          "Đọc các ký tự dữ liệu",
          "Xuất các kí tự dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Câu 5: Lớp OutputStream dùng để?",
        o: [
          "Đọc và dùng các dòng dữ liệu để làm đầu vào.",
          "Tạo ra, ghi và xử lý kết xuất các dòng",
          "Đọc các ký tự dữ liệu",
          "Xuất các kí tự dữ liệu",
        ],
        a: 1,
      },
      {
        q: "Câu 6: Phương thức read() dùng để?",
        o: [
          "Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.",
          "Trả về số byte đọc được hay '-1' nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.",
          "Phương thức này định vị lại dòng theo vị trí được đánh lần cuối cùng. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.",
          "Đánh dấu vị trí hiện tại của dòng",
        ],
        a: 0,
      },
      {
        q: "Câu 7: Phương thức read (byte []) dùng để?",
        o: [
          "Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.",
          "Trả về số byte đọc được hay '-1' nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.",
          "Phương thức này định vị lại dòng theo vị trí được đánh lần cuối cùng. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.",
          "Đánh dấu vị trí hiện tại của dòng",
        ],
        a: 1,
      },
      {
        q: "Câu 8: Phương thức mark() dùng để?",
        o: [
          "Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.",
          "Trả về số byte đọc được hay '-1' nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.",
          "Phương thức này định vị lại dòng theo vị trí được đánh lần cuối cùng. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.",
          "Đánh dấu vị trí hiện tại của dòng",
        ],
        a: 3,
      },
      {
        q: "Câu 9: Phương thức read (byte [], int, int) dùng để?",
        o: [
          "Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.",
          "Trả về số byte đọc được hay '-1' nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.",
          "Phương thức này định vị lại dòng theo vị trí được đánh lần cuối cùng. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.",
          "Đánh dấu vị trí hiện tại của dòng",
        ],
        a: 2,
      },
      {
        q: "Câu 10: Phương thức available() dùng để?",
        o: [
          "Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.",
          "Trả về số byte đọc được hay '-1' nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.",
          "Phương pháp này trả về số lượng byte có thể đọc được mà không phải chờ. Nó trả về số byte hiện tại có trong dòng. Nó không phải là phương thức tin cậy để thực hiện tiến trình xử lý đầu vào.",
          "Đánh dấu vị trí hiện tại của dòng",
        ],
        a: 2,
      },
      {
        q: "Câu 11: Phương thức write(int) dùng để?",
        o: [
          "Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.",
          "Phương thức này phong toả cho đến khi một byte được ghi. dòng phải chờ cho đến khi tác vụ ghi hoàn tất. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.",
          "Phương pháp này trả về số lượng byte có thể đọc được mà không phải chờ. Nó trả về số byte hiện tại có trong dòng. Nó không phải là phương thức tin cậy để thực hiện tiến trình xử lý đầu vào.",
          "Phương thức này ghi một byte",
        ],
        a: 3,
      },
      {
        q: "Câu 12: Phương thức flush() dùng để?",
        o: [
          "Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.",
          "Phương thức này xả sạch dòng.Đệm dữ liệu được ghi ra dòng. Nó kích hoạt IOException nếu lỗi xảy ra.",
          "Phương pháp này trả về số lượng byte có thể đọc được mà không phải chờ. Nó trả về số byte hiện tại có trong dòng. Nó không phải là phương thức tin cậy để thực hiện tiến trình xử lý đầu vào.",
          "Phương thức này ghi một byte",
        ],
        a: 1,
      },
      {
        q: "Câu 13: Phương thức close() dùng để?",
        o: [
          "Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.",
          "Phương thức này xả sạch dòng.Đệm dữ liệu được ghi ra dòng. Nó kích hoạt IOException nếu lỗi xảy ra.",
          "Phương thức đóng dòng.Nó được dùng để giải phóng mọi tài nguyên gắn với dòng. Nó kích hoạt IOException nếu lỗi xảy ra.",
          "Phương thức này ghi một byte",
        ],
        a: 2,
      },
      {
        q: "Câu 14: Thư viện hsqldb.jar dùng để làm gì?",
        o: [
          "Hỗ trợ tạo bảng và truy vấn trong Java, sử dụng CSDL hsqldb.",
          "Hỗ trợ giao diện đồ họa trong Java",
          "Hỗ trợ quản lý người dùng",
          "Hỗ trợ đọc/ghi tệp văn bản",
        ],
        a: 0,
      },
      {
        q: "Câu 15: Đối tượng java.sql.Connection được khởi tạo từ câu lệnh nào?",
        o: [
          "DriverManager.getConnection ()",
          "createStatement()",
          "executeUpdate()",
          "executeQuery()",
        ],
        a: 0,
      },
      {
        q: "Câu 16: Đối tượng java.sql.DriverManager có phương thức nào?",
        o: [
          "getConnection()",
          "getHSQLConnection()",
          "createStatement()",
          "executeUpdate()",
        ],
        a: 0,
      },
      {
        q: "Câu 17: Đối tượng java.sql.ResultSet được trả về từ phương thức nào sau đây?",
        o: [
          "executeQuery();",
          "getHSQLConnection()",
          "createStatement()",
          "getConnection()",
        ],
        a: 0,
      },
      {
        q: "Câu 18: Đối tượng java.sql.ResultSetMetaData được trả về từ phương thức nào sau đây?",
        o: [
          "getMetaData()",
          "getHSQLConnection()",
          "createStatement()",
          "executeUpdate()",
        ],
        a: 0,
      },
      {
        q: "Câu 19: Đối tượng java.sql.ResultSetMetaData có thuộc tính ColumnCount, thuộc tính này có thể\nxác định bằng hàm nào?",
        o: [
          "getColumnCount()",
          "getColumnsCount()",
          "getColumnCountIndex()",
          "getColumnIndex()",
        ],
        a: 0,
      },
      {
        q: "Câu 20: Để đóng một Connection chúng ta dùng phương thức:",
        o: ["close()", "finish()", "quit()", "exit()"],
        a: 0,
      },
      {
        q: "Câu 21: Để đóng một Statement chúng ta dùng phương thức:",
        o: ["close()", "finish()", "quit()", "exit()"],
        a: 0,
      },
      {
        q: "Câu 22: Để đóng một ResultSet chúng ta dùng phương thức:",
        o: ["close()", "finish()", "quit()", "exit()"],
        a: 0,
      },
      {
        q: "Câu 23: Để đăng ký sử dụng thư viện hsqldb chúng ta dùng câu lệnh nào?",
        o: [
          'Class.forName("org.hsqldb.jdbcDriver")',
          "getHSQLConnection()",
          "createStatement()",
          "executeUpdate()",
        ],
        a: 0,
      },
      {
        q: "Câu 24: Java kết nối dữ liệu với Oracle cần dùng tới thư viện gì?",
        o: [
          "OJDBC14.jar",
          "Hsqldb.jar",
          "Không cần thư viện ngoài",
          "Thư viện thsoft.jar",
        ],
        a: 0,
      },
      {
        q: "Câu 25: Để đăng ký sử dụng thư viện OJDBC chúng ta dùng câu lệnh nào?",
        o: [
          'Class.forName("oracle.jdbc.driver.OracleDriver")',
          "getHSQLConnection()",
          "createStatement()",
          "executeUpdate()",
        ],
        a: 0,
      },
      {
        q: "Câu 26: Để cập nhật dữ liệu vào bảng ta dùng câu lệnh nào?",
        o: [
          "executeUpdate();",
          "executeQuery();",
          "getHSQLConnection()",
          "createStatement()",
        ],
        a: 0,
      },
      {
        q: "Câu 27: Để tạo 1 bảng mới ta dùng lệnh nào?",
        o: [
          'executeUpdate("create table survey (id int, name CHAR(5) );");',
          'executeQuery("create table survey");',
          "getHSQLConnection()",
          "createStatement()",
        ],
        a: 0,
      },
      {
        q: "Câu 28: Câu lệnh nào sau đây viết đúng cú pháp?",
        o: [
          'executeUpdate("create table survey (id int, name CHAR(5) );");',
          'executeUpdate("table survey (id int, name CHAR(5) ); ");',
          'executeUpdate("create table (id int, name CHAR(5) ); ");',
          'executeUpdate("create table name survey (id int, name CHAR(5) );");',
        ],
        a: 0,
      },
      {
        q: "Câu 29: 2D API là gì?",
        o: [
          "Chứa các lớp hiện thực nhiều kiểu vẽ, các hình phức tạp, fonts, color.2D API không phải là một phần của Swing.",
          'Là bộ công cụ giúp người dùng kết nối với các thiết bị như bàn phím, bộ đọc chữ tự động… cho phép truy xuất trực tiếp tới các thành phần Swing."',
          'Chứa các lớp hiện thực nhiều kiểu vẽ, các hình phức tạp, fonts, color. 2D API là một phần của Swing."',
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 30: Trong kiến trúc MVC của Swing, thành phần có ghi giá trị như sau Minimum = 0. Vậy thành\nphần đó thuộc loại nào?",
        o: ["Model", "View", "Controller", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 31: Trong kiến trúc MVC của Swing, thành phần có ghi giá trị như sau Accept mouse clicks on\nend buttons. Vậy thành phần đó thuộc loại nào?",
        o: ["Controller", "View", "Model", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 32: Phát biểu đúng nhất về đối tượng Panel và ScrollPanes.",
        o: [
          "Đây là hai thành phần thuộc Container. Rất giống nhau, khác nhau ở điểm ScrollPanes có thêm hai thanh trượt.",
          "Đây là hai thành phần thuộc Container. Giống nhau hoàn toàn, đều có thêm hai thanh trượt.",
          "Đây là hai thành phần thuộc Component. Không giống nhau.",
          "Không có đáp án đúng.",
        ],
        a: 0,
      },
      {
        q: "Câu 33: Dialogs là đối tượng gì?",
        o: [
          "Là một cửa sổ dạng hộp thoại, dùng để đưa ra các thông báo, lấy dữ liệu nhập từ người dùng.",
          "Là hộp chứa, chuyên dùng để chứa mọi thành phần trong java.",
          "Là hộp dùng để kết nối cơ sở dữ liệu bên ngoài, rồi hiển thị.",
          "Không có đáp án đúng.",
        ],
        a: 0,
      },
      {
        q: "Câu 34: Phương thức mouseClicked(MouseEvent event) có được từ giao tiếp lắng nghe nào?",
        o: [
          "MouseListener",
          "MouseMotionListener",
          "MouseEvent",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 35: Phương thức mousePressed(MouseEvent event) có được từ giao tiếp lắng nghe nào?",
        o: [
          "MouseListener",
          "MouseMotionListener",
          "MouseEvent",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 36: Phương thức mouseDragged(MouseEvent event) có được từ giao tiếp lắng nghe nào?",
        o: [
          "MouseMotionListener",
          "MouseListener",
          "MouseEvent",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 37: Phương thức mouseMoved(MouseEvent event) có được từ giao tiếp lắng nghe nào?",
        o: [
          "MouseMotionListener",
          "MouseListener",
          "MouseEvent",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 38: Phương thức mouseMoved(MouseEvent event) có được từ giao tiếp lắng nghe nào?",
        o: [
          "MouseMotionListener",
          "MouseListener",
          "MouseEvent",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 39: Trong giao tiếp, xử lý sự kiện phím KeyListener. Hàm keyPressed là sự kiện gì?",
        o: [
          "Khi nhấn phím bất kỳ",
          "Khi thả phím bất kỳ",
          "Xác định kiểu phím nhấn",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 40: Trong giao tiếp, xử lý sự kiện phím KeyListener. Hàm keyReleased là sự kiện gì?",
        o: [
          "Khi thả phím bất kỳ",
          "Khi nhấn phím bất kỳ",
          "Xác định kiểu phím nhấn",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: 'Câu 41: Có Rem câu lệnh sau: Image img = kit.getImage("hand.jpg") ;. Hỏi bức ảnh hand.jpg được\nlưu ở đâu?',
        o: [
          "Được đặt trong thư mục dự án đang viết code.",
          "Được lưu ngoài desktop.",
          "Được lưu tại bất kỳ dự án nào về java.",
          "Cú pháp viết Rem câu lệnh sai.",
        ],
        a: 0,
      },
      {
        q: "Câu 42: Kiến trúc MVC của Swing chia mỗi thành phần giao diện thành mấy phần?",
        o: ["1", "2", "3", "4"],
        a: 2,
      },
      {
        q: "Câu 43: JFC (Java Foundation Classes) gồm?",
        o: [
          "Swing, AWT, Accessibility API, 2D API, Drag and Drop",
          "Swing, AWT, Accessibility API, 2D ACI",
          "Swing, AWT, Accessibility API, 2D ACI, Drag and Drop",
          "Swing, AWT, Accessibility AGI, 2D API, Drag and Drop",
        ],
        a: 0,
      },
      {
        q: "Câu 44: File chứa mã nguồn java sau khi được biên dịch có đuôi là gì?",
        o: [".java", ".class", ".jav", ".exe"],
        a: 1,
      },
      {
        q: "Câu 45: Java Virtual Machine là gì?",
        o: [
          "Là một thành phần của Java platform dùng để đọc mã bytecode trong file .class",
          "Là chương trình biên dịch của java dùng để biên dịch file nguồn java thành mã bytecode.",
          "Là chương trình chạy cho java",
          "Tất cả các đáp án đều đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 46: Java chạy trên hệ điều hành nào sau đây:",
        o: [
          "Microsoft Windows",
          "Linux",
          "Sun Solaris OS",
          "Tất cả các đáp án đều đúng.",
        ],
        a: 3,
      },
      {
        q: "Câu 47: API là gì?",
        o: [
          "Thư viện mã nguồn của Java.",
          "Là thư viện chứa các thành phần phần mềm tạo sẵn cung cấp các chức năng cho chương trình Java.",
          "Thư viện cung cấp giao diện đồ họa cho chương trình Java.",
          "Tất cả đều sai.",
        ],
        a: 1,
      },
      {
        q: "Câu 48: Ngôn ngữ lập trình Java cung cấp các tính năng nào sau đây?",
        o: [
          "Tất cả đáp án trên",
          "Giao diện lập trình ứng dụng",
          "Bộ công cụ giao diện người dùng",
          "Thư viện tích hợp",
        ],
        a: 0,
      },
      {
        q: "Câu 49: Có bao nhiêu cách viết chú thích?",
        o: ["1", "2", "3", "4"],
        a: 1,
      },
      {
        q: "Câu 50: Thứ tự các từ khóa public và static khi khai bao như thế nào?",
        o: [
          "public đứng trước static",
          "static đứng trước public",
          "Thứ tự bất kỳ nhưng thông thường public đứng trước",
          "Tất cả đều sai",
        ],
        a: 2,
      },
      {
        q: "Câu 51: Câu lệnh khai báo chuẩn cho phương thức main như thế nào?",
        o: [
          "public static void main(String[] a) {}",
          "public static int main(String args) {}",
          "public static main(String[] args) {}",
          "public static final void main(String[] args) {}",
        ],
        a: 0,
      },
      {
        q: "Câu 52: Câu nào sau đây là sai?",
        o: ["/**chú thích */", "/*chú thích */", "/*chú thích", "// chú thích"],
        a: 2,
      },
      {
        q: "Câu 53: Khi biên dịch gặp lỗi Exception in thread main java.lang.NoClassDefFoundError:\nmyprogram. Lỗi này có nghĩa gì?",
        o: [
          "Đường dẫn chương trình sai.",
          "Không có hàm main",
          "Không khai báo class",
          "Không có từ khóa public tại mở đầu khai báo class",
        ],
        a: 0,
      },
      {
        q: "Câu 54: Lớp là gì?",
        o: [
          "Là bản thiết kế từ đó tạo ra các đối tượng.",
          "Là một chức năng trong java dùng để chứa đối tượng.",
          "Là đối tượng được khai báo để hoạt động trong chương trình.",
          "Tất cả đều sai.",
        ],
        a: 0,
      },
      {
        q: "Câu 55: Cách đặt tên nào sau đây là sai?",
        o: ["2word", "d2word", "Main", "_string"],
        a: 0,
      },
      {
        q: "Câu 56: Một chương trình có bao nhiêu phương thức main?",
        o: ["1", "2", "3", "4"],
        a: 0,
      },
      {
        q: "Câu 57: Một lớp trong Java có thể có bao nhiêu lớp cha?",
        o: ["1", "2", "3", "4"],
        a: 0,
      },
      {
        q: "Câu 58: Một lớp trong Java có bao nhiêu lớp con?",
        o: ["2", "3", "4", "Vô số"],
        a: 3,
      },
      {
        q: "Câu 59: Để khai báo lớp Xedap1 kế thừa lớp Xedap phải làm như thế nào?",
        o: [
          "class Xedap1 extend Xedap {}",
          "public classs Xedap1 extend Xedap {}",
          "class Xedap1 extends Xedap {}",
          "Tất cả đều sai",
        ],
        a: 2,
      },
      {
        q: "Câu 60: Để khai báo một lớp giao diện cho lớp Xedap, ta làm thế nào?",
        o: [
          "class Xedap1 implement Xedap {}",
          "public class Xedap1 implement Xedap {}",
          "class Xedap1 implements Xedap {}",
          "public class Xedap1 extends Xedap {}",
        ],
        a: 2,
      },
      {
        q: "Câu 61: Biến dữ liệu là các biến dạng nào sau đây?",
        o: [
          "Biến lớp và Tham số",
          "Biến cục bộ và Tham số",
          "Biến cục bộ và biến lớp",
          "Các đáp án đều sai.",
        ],
        a: 1,
      },
      {
        q: "Câu 62: Cách đặt tên nào sau đây là không chính xác?",
        o: ["final", "dem", "_final", "$final"],
        a: 0,
      },
      {
        q: "Câu 63: Lệnh javac có tác dụng gì?",
        o: [
          "Biên dịch file .java thành file .class",
          "Chạy chương trình java",
          "Biên dịch file .class thành .java",
          "Dùng để debug chương trình",
        ],
        a: 0,
      },
      {
        q: "Câu 64: Lệnh java có tác dụng gì?",
        o: [
          "Biên dịch file .java thành file .class",
          "Chạy chương trình java có đuôi .class",
          "Biên dịch file .class thành .java",
          "Dùng để debug chương trình",
        ],
        a: 1,
      },
      {
        q: "Câu 65: Trong Java, kiểu char biểu diễn bộ mã code nào dưới đây?",
        o: ["UTF-8", "UTF-16", "UTF-32", "Tất cả các mã trên"],
        a: 1,
      },
      {
        q: 'Câu 66: Hai câu lệnh sau đưa ra kết quả s là bao nhiêu String greetings = " Hello ";\nstring s = greetings.substring(0,3);',
        o: ["Hell", "Hel", "ello", "Hello"],
        a: 1,
      },
      {
        q: 'Câu 67: Hai câu lệnh sau đưa ra kết quả s là bao nhiêu String greetings = " Hello ";\nstring s = greetings.substring(0,3);',
        o: ["Hell", "Hel", "Lệnh sai", "Hello"],
        a: 2,
      },
      {
        q: 'Câu 68: Trong hai câu lệnh sau, lệnh substring có tác dụng gì? String greetings = " Hello ";\nstring s = greetings.substring(0,3);',
        o: [
          "Lấy 3 ký tự từ vị trí chỉ mục 0 của chuỗi greetings và đưa vào s",
          "Thay đổi 3 ký tự đầu tiên của chuỗi greetings",
          "Sao chép chuỗi greetings vào chuỗi s",
          "Cắt các ký tự từ vị trí chỉ mục 0 đến chỉ mục 3 và đưa vào s",
        ],
        a: 0,
      },
      {
        q: "Câu 69: Phạm vi truy cập của một đối tượng khi khai báo private là gì?",
        o: [
          "Có thể được truy cập từ tất cả mọi nơi.",
          "Có thể được truy cập từ các lớp trong cùng package.",
          "Có thể được truy cập từ các lớp trong cùng package và lớp con nằm trong package khác.",
          "Chỉ có thể truy cập từ các phương thức khác trong class đó.",
        ],
        a: 3,
      },
      {
        q: "Câu 70: Phạm vi truy cập của một đối tượng khi được khai báo protected là gì?",
        o: [
          "Có thể được truy cập từ tất cả mọi nơi.",
          "Có thể được truy cập từ các lớp trong cùng package.",
          "Có thể được truy cập từ các lớp trong cùng package và lớp con nằm trong package khác.",
          "Chỉ có thể truy cập từ các phương thức khác trong class đó.",
        ],
        a: 2,
      },
      {
        q: "Câu 71: Phạm vi truy cập của một đối tượng khi được khai báo public là gì?",
        o: [
          "Có thể được truy cập từ tất cả mọi nơi.",
          "Có thể được truy cập từ các lớp trong cùng package.",
          "Có thể được truy cập từ các lớp trong cùng package và lớp con nằm trong package khác.",
          "Chỉ có thể truy cập từ các phương thức khác trong class đó.",
        ],
        a: 0,
      },
      {
        q: "Câu 72: Công nghệ J2ME là công nghệ gì?",
        o: [
          "Tất cả các ý trên.",
          "Cung cấp môi trường cho chương trình ứng dụng chạy trên các thiết bị cá nhân.",
          "Hỗ trợ chương trình chạy trên điện thoại di động, máy tính bỏ túi PDA hay Palm.",
          "Hỗ trợ phát triển các chương trình, phần mềm nhúng.",
        ],
        a: 0,
      },
      {
        q: "Câu 73: Phương thức nextInt() trong lớp Scanner có tác dụng?",
        o: [
          "Đọc 1 chuỗi ký tự từ bàn phìm, kể cả dấu cách",
          "Đọc 1 chuỗi ký tự từ bàn phím, không kể dấu cách",
          "Đọc 1 giá trị số nguyên từ bàn phím",
          "Đọc 1 giá trị số thực từ bàn phím BÀI TẬP:",
        ],
        a: 2,
      },
      {
        q: 'Câu 74: Cho khối lệnh như sau:\nswitch (thu) { case 2:\nsystem.out.println("Van, Toan"); break;\ncase 3:\nsystem.out.println("Hoa, Ly"); break;\nDefault:\nsystem.out.println("Ngay nghi"); Break;\n}\nKhối lệnh trên sẽ cho kết quả là bao nhiêu nếu ta nhập thu = 1?',
        o: ["Van, Toan", "Hoa, Ly", "Ngay nghi", "Không có đáp án đúng"],
        a: 2,
      },
      {
        q: 'Câu 75: Cho khối lệnh như sau:\nswitch (thu) { case 2:\nsystem.out.println("Van, Toan"); break;\ncase 3:\nsystem.out.println("Hoa, Ly"); break;\nDefault:\nsystem.out.println("Ngay nghi"); Break;\n}\nKhối lệnh trên sẽ cho kết quả là bao nhiêu nếu ta nhập thu = 2?',
        o: ["Van, Toan", "Hoa, Ly", "Ngay nghi", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: 'Câu 76: Cho khối lệnh như sau:\nswitch (thu) { case 2:\nsystem.out.println("Van, Toan"); break;\ncase 3:\nsystem.out.println("Hoa, Ly"); break;\nDefault:\nsystem.out.println("Ngay nghi"); Break;\n}\nKhối lệnh trên sẽ cho kết quả là bao nhiêu nếu ta nhập thu = 3?',
        o: ["Van, Toan", "Hoa, Ly", "Ngay nghi", "Không có đáp án đúng"],
        a: 1,
      },
      {
        q: 'Câu 77: Cho khối lệnh như sau:\nint[] mang = new int[10]; int s = 0;\nint j = 0;\nfor ( int i : mang) { i = ++j;\ns += i;\n}\nsystem.out.println("S = "+ s); Khối lệnh thực hiện chuyện gì?',
        o: [
          "Nhập dữ liệu cho mảng nguyên.",
          "Tính tổng mảng nguyên.",
          "Nhập dữ liệu và tính tổng mảng nguyên.",
          "Tất cả đều sai.",
        ],
        a: 2,
      },
      {
        q: 'Câu 78: Cho khối lệnh như sau:\nint[] mang = new int[10]; int s = 0;\nint j = 0;\nfor ( int i : mang) { i = ++j;\ns += i;\n}\nsystem.out.println("S = "+ s);\nKhi thực hiện khối lệnh sẽ cho kết quả là bao nhiêu?',
        o: ["S=40", "S=50", "S=55", "S=45"],
        a: 2,
      },
      {
        q: 'Câu 79: Cho khối lệnh sau:\nint[] mang = new int[10]; int s;\nint j = 0;\nfor ( int i : mang) { s = 0;\ni = ++j; s += i;\n}\nsystem.out.println("S = "+ s);\nKhi thực hiện khối lệnh trên sẽ cho kết quả là bao nhiêu?',
        o: ["S =9", "S=10", "S=45", "S=55"],
        a: 1,
      },
      {
        q: 'Câu 80: Khối lệnh sau sai ở dòng nào? int[] mang = new int[10];\nint s = 0; int j = 0;\nfor ( int i : mang) { i = ++j;\ns += i;\n}\nsystem.out.println("S = "+ s);',
        o: ["Dòng 3 và 5", "Dòng 2 và 3", "Dòng 3", "Không sai dòng nào"],
        a: 3,
      },
      {
        q: 'Câu 81: Khi chạy khối lệnh sẽ cho kết quả là bao nhiêu? int i=0;\nwhile (false) { i += 1;\n}\nsystem.out.println("i = " + i);',
        o: ["0", "1", "Chương trình báo lỗi", "i = 0"],
        a: 2,
      },
      {
        q: 'Câu 82: Khối lệnh sai ở dòng nào? int i=0;\nwhile (false) { i += 1;\n}\nsystem.out.println("i = " + i);',
        o: ["1", "2", "3", "4"],
        a: 1,
      },
      {
        q: 'Câu 83: Khi thực hiện khối lệnh sẽ cho kết quả là bao nhiêu? int i=0;\ndo {\ni += 1;\n} while (i == 0); System.out.println("i = " + i);',
        o: ["i = 0", "i = 1", "i = 2", "Tất cả đều sai."],
        a: 1,
      },
      {
        q: 'Câu 84: Khối lệnh sai ở dòng nào?\n1. int i=0;\n2. do {\n3. i += 1;\n4. } while (i == 0);\n5. System.out.println("i = " + i);',
        o: ["1", "2 và 3", "4", "Không sai ở dòng nào cả"],
        a: 3,
      },
      {
        q: "Câu 85: Có kết quả là bao nhiêu khi thực hiện khối lệnh? int i = 0;\nint s = 0; for ( ; ; ) {\nif i == 3 break; s = s + i;\ni++;\n}",
        o: ["6", "3", "Chương trình báo lỗi", "Không có đáp án đúng."],
        a: 2,
      },
      {
        q: "Câu 86: Chương trình sai ở dòng nào?\n2. int i = 0;\n3. int s = 0;\n4. for ( ; ; ) {\n5. if i == 3 break;\n6. s = s + i;\n7. i++;\n8. }",
        o: ["4", "1 và 2", "6", "Không sai dòng nào hết"],
        a: 0,
      },
      {
        q: "Câu 87: Đối tượng nào cho phép xử lý tương tác hành động giữa người dùng và applet",
        o: [
          "ActionListener",
          "MouseListener",
          "MouseMotionListener",
          "Không có đáp án đúng.",
        ],
        a: 0,
      },
      {
        q: "Câu 88: Đối tượng nào cho phép xử lý thao tác chuột trong applet?",
        o: [
          "ActionListener",
          "MouseListener",
          "MouseMotionListener",
          "Cả 3 đáp án.",
        ],
        a: 1,
      },
      {
        q: "Câu 89: Đối tượng nào cho phép xử lý thao tác di chuyển chuột trong applet?",
        o: [
          "ActionListener",
          "MouseListener",
          "MouseMotionListener",
          "Cả 3 đáp án.",
        ],
        a: 2,
      },
      {
        q: "Câu 90: Applet là gì?",
        o: [
          "Là một loại chương trình Java đặc biệt mà một trình duyệt cho phép công nghệ Java download từ Internet và chạy.",
          "Là một chương trình chạy sử dụng ngôn ngữ Java.",
          "Là chương trình Java gắn trên web.",
          "Không có đáp án đúng.",
        ],
        a: 0,
      },
      {
        q: "Câu 91: Câu nào sau đây là đúng có nội dung nói về đặc điểm của applet:",
        o: [
          "Applet thường được gắn trong website và phải là lớp con của lớp java.applet.Applet",
          "Applet thường được gắn trong website và phải là lớp con của lớp java.applet",
          "Applet được gắn trong website",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 92: Phương thức init() trong Applet có mục đích gì?",
        o: [
          "Phương thức được kích hoạt đầu tiên khi applet khởi động. init() chỉ chạy một lần duy nhất vào lúc bắt đầu chương trình.",
          "Phương thức khởi tạo của applet.",
          "Phương thức chạy song song với applet khi bắt đầu chương trình.",
          "Không có đáp án đúng.",
        ],
        a: 0,
      },
      {
        q: "Câu 93: Cho khối lệnh sau:\nint i = 10;\nint n = i++%5;\nsau khi thực hiện khối lệnh, kết quả sẽ là:",
        o: [
          "i = 10, n = 0;",
          "i = 11, n = 0",
          "i = 10, n = 1",
          "i = 11, n = 1",
        ],
        a: 1,
      },
      {
        q: "Câu 94: Cho khối lệnh sau:\nint i = 10;\nint n = ++i%5\nsau khi thực hiện khối lệnh, kết quả sẽ là:",
        o: ["i = 10, n = 0", "i = 11, n = 0", "i = 10, n = 1", "i = 11, n = 1"],
        a: 3,
      },
      {
        q: "Câu 95: Lệnh\nresult = condition? value1 : value2 có nghĩa gì?",
        o: [
          "nếu condition là true thì result = value2, nếu condition là false thì result = value1",
          "nếu condition là true thì result = value1, nếu condition là false thì result = value2",
          "Câu lệnh sai",
          "Nếu condition là true thì result sẽ đảo giá trị của value1 và value2",
        ],
        a: 1,
      },
      {
        q: "Câu 96: Mảng là gì?",
        o: [
          "Là một đối tượng chứa các một số hữu hạn các giá trị cùng kiểu.",
          "Là một biến chứa các giá trị cùng kiểu.",
          "Là một biến chứa một số hữu hạn các giá trị cùng kiểu.",
          "Tất cả đều sai.",
        ],
        a: 0,
      },
      {
        q: "Câu 97: Cách khai báo mảng nào sau đây là đúng?",
        o: [
          "int[] a;",
          "int a[];",
          "int a[] = new int[10];",
          "Cả 3 cách khai báo đều đúng.",
        ],
        a: 3,
      },
      {
        q: "Câu 98: Lệnh\nif CONDITION {Khối lệnh 1} else {Khối lệnh 2} có tác dụng gì?",
        o: [
          "nếu CONDITION đúng thì thực hiện Khối lệnh 1, nếu sai thì thực hiện Khối lệnh 2",
          "nếu CONDITION sai thì thực hiện Khối lệnh 1, nếu đúng thì thực hiện Khối lệnh 2",
          "Nếu CONDITION sai thì thực hiện Khối lệnh 1, nếu đúng thì bỏ qua.",
          "Nếu CONDITION đúng thì thực hiện Khối lệnh 2, nếu sai thì bỏ qua",
        ],
        a: 0,
      },
      {
        q: "Câu 99: Để kiểm tra 2 chuỗi có bằng nhau hay không, sử dụng phương thức nào?",
        o: [
          "string1== string2",
          "string1 = string2",
          "string1.equals(string2)",
          "string1.equal(string2)",
        ],
        a: 2,
      },
      {
        q: "Câu 100: Lệnh charAt(n) có tác dụng gì?",
        o: [
          "Tìm kiếm ký tự thứ n",
          "Trả về ký tự thứ n-1",
          "Trả về ký tự thứ n",
          "Trả về ký tự có vị trí chỉ mục n",
        ],
        a: 3,
      },
      {
        q: 'Câu 101: Lệnh sau trả về kết quả là bao nhiêu? String greetings = "Hello";\nchar letter = greetings.charAt(0);',
        o: ["H", "e", "l", "o"],
        a: 0,
      },
      {
        q: "Câu 102: Lệnh khai báo\nscanner in = new Scanner(System.in); có tác dụng gì?",
        o: [
          "Khai báo đối tượng tên là in, kết nối với stream input chuẩn",
          "Khai báo đối tượng kiểu Scanner để in dữ liệu",
          "Khai báo đối tượng tên là in, kết nối với stream output chuẩn",
          "Khai báo đối tượng Scanner kết nối tới dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Câu 103: Phương thức nextLine() trong lớp Scanner có tác dụng?",
        o: [
          "Đọc 1 chuỗi ký tự từ bàn phìm, kể cả dấu cách",
          "Đọc 1 chuỗi ký tự từ bàn phím, không kể dấu cách",
          "Đọc 1 giá trị số nguyên từ bàn phím",
          "Đọc 1 giá trị số thực từ bàn phím",
        ],
        a: 0,
      },
      {
        q: "Câu 104: Trong các phương thức sau phương thức nào thuộc Lớp OutputStream:",
        o: ["flush().", "mark().", "reset().", "skip()."],
        a: 0,
      },
      {
        q: "Câu 105: Trong các phương thức sau phương thức nào thuộc Lớp OutputStream:",
        o: ["write(byte[]).", "mark().", "reset().", "skip()."],
        a: 0,
      },
      {
        q: "Câu 106: Trong các phương thức sau phương thức nào thuộc Lớp InputStream:",
        o: ["Write(byte[]).", "Write(int).", "Flush().", "Read()."],
        a: 3,
      },
      {
        q: "Câu 107: Trong các phương thức sau phương thức nào thuộc Lớp InputStream:",
        o: ["Write(byte[]).", "Write(int).", "Flush().", "Mark()."],
        a: 3,
      },
      {
        q: "Câu 108: Lớp FileDescriptor:",
        o: [
          "Cung cấp khả năng truy cập các mô tả tập tin mà hệ điều hành sử dụng khi tập tin và thư mục đang được truy cập.",
          "Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng .",
          "Lớp này cho phép xuất ra một tập tin theo dòng.",
          "Lớp này cho phép đọc và xuất ra một tập tin theo dòng.",
        ],
        a: 0,
      },
      {
        q: "Câu 109: Lớp FileInputStream:",
        o: [
          "Cung cấp khả năng truy cập các mô tả tập tin mà hệ điều hành sử dụng khi tập tin và thư mục đang được truy cập.",
          "Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng .",
          "Lớp này cho phép xuất ra một tập tin theo dòng.",
          "Lớp này cho phép đọc và xuất ra một tập tin theo dòng.",
        ],
        a: 1,
      },
      {
        q: "Câu 110: Lớp FileOutputStream:",
        o: [
          "Cung cấp khả năng truy cập các mô tả tập tin mà hệ điều hành sử dụng khi tập tin và thư mục đang được truy cập.",
          "Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng .",
          "Lớp này cho phép xuất ra một tập tin theo dòng.",
          "Lớp này cho phép đọc và xuất ra một tập tin theo dòng.",
        ],
        a: 2,
      },
      {
        q: "Câu 111: Phương thức 'finalize()' được dùng để:",
        o: [
          "Đóng dòng khi nó được bộ gom rác Java nhặt.",
          "Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng .",
          "Trả về đối tượng FileDescriptor chứa thông tin về sự kết nối thực sự tới file mà 'FileInputStream' đang sử dụng.",
          "Lớp này cho phép đọc và xuất ra một tập tin theo dòng.",
        ],
        a: 0,
      },
      {
        q: "Câu 112: Phương thức 'getFD()' được dùng để:",
        o: [
          "Đóng dòng khi nó được bộ gom rác Java nhặt.",
          "Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng .",
          "Trả về đối tượng FileDescriptor chứa thông tin về sự kết nối thực sự tới file mà 'FileInputStream' đang sử dụng.",
          "Lớp này cho phép đọc và xuất ra một tập tin theo dòng.",
        ],
        a: 2,
      },
      {
        q: "Câu 113: Phương thức 'finalize()' và getFD():",
        o: [
          "Được sử dụng ở lớp FileOutputStream.",
          "Được sử dụng ở lớp FileIutputStream.",
          "Cả 2 lớp trên.",
          "Tất cả đều sai.",
        ],
        a: 2,
      },
      {
        q: "Câu 114: Lớp BufferedInputStream dùng để:",
        o: [
          "Cung cấp khả năng truy cập các mô tả tập tin mà hệ điều hành sử dụng khi tập tin và thư mục đang được truy cập.",
          "Lớp này tự động tạo ra và duy trì vùng đệm để hỗ trợ thao tác vào.",
          "Lớp này cho phép xuất ra một tập tin theo dòng.",
          "Lớp này cho phép đọc và xuất ra một tập tin theo dòng.",
        ],
        a: 1,
      },
      {
        q: "Câu 115: Lớp BufferedOutputStream dùng để:",
        o: [
          "Lớp này cũng định nghĩa hai phương thức thiết lập, một cho phép chỉ định kích cỡ của vùng đệm xuất, một sử dụng kích cỡ vùng đệm ngầm định.",
          "Lớp này tự động tạo ra và duy trì vùng đệm để hỗ trợ thao tác vào.",
          "Lớp này cho phép xuất ra một tập tin theo dòng.",
          "Lớp này cho phép đọc và xuất ra một tập tin theo dòng.",
        ],
        a: 0,
      },
      {
        q: "Câu 116: Phương thức reset() được dùng để:",
        o: [
          "Thiết lập lại vùng đệm.",
          "Trả về kích cỡ hiện hành của vùng đệm.",
          "Trả về bản sao mảng ký tự của vùng đệm xuất.",
          "Chuyển đổi vùng đệm xuất thành một đối tượng String.",
        ],
        a: 0,
      },
      {
        q: "Câu 117: Phương thức size() được dùng để:",
        o: [
          "Thiết lập lại vùng đệm.",
          "Trả về kích cỡ hiện hành của vùng đệm.",
          "Trả về bản sao mảng ký tự của vùng đệm xuất.",
          "Chuyển đổi vùng đệm xuất thành một đối tượng String.",
        ],
        a: 1,
      },
      {
        q: "Câu 118: Phương thức toCharArray() được dùng để:",
        o: [
          "Thiết lập lại vùng đệm.",
          "Trả về kích cỡ hiện hành của vùng đệm.",
          "Trả về bản sao mảng ký tự của vùng đệm xuất.",
          "Chuyển đổi vùng đệm xuất thành một đối tượng String.",
        ],
        a: 2,
      },
      {
        q: "Câu 119: Phương thức toString() được dùng để:",
        o: [
          "Thiết lập lại vùng đệm.",
          "Trả về kích cỡ hiện hành của vùng đệm.",
          "Trả về bản sao mảng ký tự của vùng đệm xuất.",
          "Chuyển đổi vùng đệm xuất thành một đối tượng String.",
        ],
        a: 3,
      },
      {
        q: "Câu 120: Phương thức writeTo() được dùng để:",
        o: [
          "Thiết lập lại vùng đệm.",
          "Trả về kích cỡ hiện hành của vùng đệm.",
          "Trả về bản sao mảng ký tự của vùng đệm xuất.",
          "Ghi vùng đệm ra một luồng xuất khác..",
        ],
        a: 3,
      },
      {
        q: "Câu 121: Phương thức 'getBuffer()' được dùng để:",
        o: [
          "Thiết lập lại vùng đệm.",
          "Trả về đối tượng StringBuffer tương ứng với vùng đệm xuất.",
          "Trả về bản sao mảng ký tự của vùng đệm xuất.",
          "Ghi vùng đệm ra một luồng xuất khác..",
        ],
        a: 1,
      },
      {
        q: "Câu 122: Phương thức toString() được dùng để:",
        o: [
          "Thiết lập lại vùng đệm.",
          "Trả về đối tượng StringBuffer tương ứng với vùng đệm xuất.",
          "Trả về bản sao mảng ký tự của vùng đệm xuất.",
          "Trả về một chuỗi chứa bản sao của vùng đệm xuất.",
        ],
        a: 3,
      },
      {
        q: "Câu 123: Phương thức byte readByte() là:",
        o: [
          "Đọc một byte.",
          "Đọc và trả về một giá trị ký tự.",
          "Đọc 2 byte và trả về giá trị kiểu short.",
          "Đọc 8 byte và trả về giá trị kiểu long.",
        ],
        a: 0,
      },
      {
        q: "Câu 124: Phương thức long readLong() là:",
        o: [
          "Đọc một byte.",
          "Đọc và trả về một giá trị ký tự.",
          "Đọc 2 byte và trả về giá trị kiểu short.",
          "Đọc 8 byte và trả về giá trị kiểu long.",
        ],
        a: 3,
      },
      {
        q: "Câu 125: Phương thức short redShort() là:",
        o: [
          "Đọc một byte.",
          "Đọc và trả về một giá trị ký tự.",
          "Đọc 2 byte và trả về giá trị kiểu short.",
          "Đọc 8 byte và trả về giá trị kiểu long.",
        ],
        a: 2,
      },
      {
        q: "Câu 126: Phương thức char readChar() là:",
        o: [
          "Đọc một byte.",
          "Đọc và trả về một giá trị ký tự.",
          "Đọc 2 byte và trả về giá trị kiểu short.",
          "Đọc 8 byte và trả về giá trị kiểu long.",
        ],
        a: 1,
      },
      {
        q: "Câu 127: Phương thức String readUTF() là:",
        o: [
          "Đọc một byte.",
          "Đọc một chuỗi.",
          "Đọc 2 byte và trả về giá trị kiểu short.",
          "Đọc 8 byte và trả về giá trị kiểu long.",
        ],
        a: 1,
      },
      {
        q: "Câu 128: Câu lệnh nào sau đây viết đúng cú pháp?",
        o: [
          'executeQuery("SELECT *FROM survey");',
          'executeQuery("SELECTED *FROM survey");',
          'executeQuery("SELECT *FROM tablesurvey");',
          'executeQuery("SELECT servey FROM survey");',
        ],
        a: 0,
      },
      {
        q: "Câu 129: Câu lệnh nào sau đây viết đúng cú pháp",
        o: [
          "executeUpdate(\"INSERT INTO survey(id, name)VALUES(111, '123456789')\");",
          "executeUpdate(\"INSERT INTO table survey(id, name)VALUES(111, '123456789')\");",
          "executeUpdate(\"INSERTED INTO survey(id, name)VALUES(111, '123456789')\");",
          "executeUpdate(\"INSERTING INTO survey(id, name)VALUES(111, '123456789')\");",
        ],
        a: 0,
      },
      {
        q: "Câu 130: Câu lệnh nào sau đây viết đúng cú pháp xóa bảng",
        o: [
          'executeUpdate("drop table survey");',
          'executeUpdate("drop survey");',
          'executeUpdate("drop *table survey");',
          'executeUpdate("drop all table survey");',
        ],
        a: 0,
      },
      {
        q: "Câu 131: Câu lệnh nào sau đây viết đúng cú pháp:",
        o: [
          'executeQuery("SELECT *FROM survey");',
          'executeQuery("SELECT all FROM survey");',
          'executeQuery("SELECT table FROM survey");',
          'executeQuery("SELECTED FROM survey");',
        ],
        a: 0,
      },
      {
        q: "Câu 132: Chuyển tới bản ghi tiếp theo trong ResultSet chúng ta dùng thủ tục nào?",
        o: ["next()", "nextTo()", "continue()", "continueTo()"],
        a: 0,
      },
      {
        q: "Câu 133: Câu lệnh nào sau đây viết đúng cú pháp:",
        o: [
          'executeUpdate("delete from survey");',
          'executeUpdate("delete *from survey");',
          'executeUpdate("delete all from survey");',
          'executeUpdate("deleted from survey");',
        ],
        a: 0,
      },
      {
        q: "Câu 134: Câu lệnh nào sau đây viết đúng cú pháp xóa dữ liệu trong bảng:",
        o: [
          'executeUpdate("delete from survey");',
          'executeUpdate("delete table from survey");',
          'executeUpdate("delete col from survey");',
          'executeUpdate("delete from survey at line 5");',
        ],
        a: 0,
      },
      {
        q: 'Câu 135: Câu lệnh DriverManager.getConnection(url, "sa", "") có 3 tham số gồm url, user name và:',
        o: ["Password", "Tài khoản", "Tên file", "Tên bảng"],
        a: 0,
      },
      {
        q: 'Câu 136: Câu lệnh DriverManager.getConnection(url, "sa", "") có 3 tham số gồm password, user\nname và:',
        o: ["Url", "Tài khoản", "Tên file", "Tên bảng"],
        a: 0,
      },
      {
        q: 'Câu 137: Câu lệnh DriverManager.getConnection(url, "sa", "") có 3 tham số gồm password, url và:',
        o: ["UserName", "Tài khoản", "Tên file", "Tên bảng"],
        a: 0,
      },
      {
        q: "Câu 138: Đối tượng ResultSet không có phương thức nào sau đây?",
        o: ["getNextItem();", "executeUpdate()", "executeQuery()", "close()"],
        a: 0,
      },
      {
        q: "Câu 139: Đối tượng ResultSet không có phương thức nào sau đây?",
        o: ["getRecord();", "executeUpdate()", "executeQuery()", "next()"],
        a: 0,
      },
      {
        q: "Câu 140: Đối tượng ResultSet không có phương thức nào sau đây?",
        o: ["getDataView();", "executeUpdate()", "executeQuery()", "next()"],
        a: 0,
      },
      {
        q: "Câu 141: Phương thức next của đối tượng ResultSet trả về giá trị gì?",
        o: ["Boolean", "Int", "Double", "Float"],
        a: 0,
      },
      {
        q: "Câu 142: Phương thức getColumnCount() của đối tượng ResultSetMetaData trả về giá trị kiểu gì?",
        o: ["Int", "Boolean", "Double", "String"],
        a: 0,
      },
      {
        q: "Câu 143: Câu lệnh nào sau đây viết sai cú pháp",
        o: [
          'executeUpdate("create survey (id int, name CHAR(5) );");',
          'executeUpdate("create table survey (id int, name CHAR(5) );");',
          'executeUpdate("create table persion (id int, name CHAR(5) );");',
          'executeUpdate("create table taxi (id int, name CHAR(5) );");',
        ],
        a: 0,
      },
      {
        q: "Câu 144: Câu lệnh nào sau đây viết sai cú pháp:",
        o: [
          'executeUpdate("delete all from survey");',
          'executeUpdate("delete from driver");',
          'executeUpdate("delete from survey");',
          'executeUpdate("delete from taxi");',
        ],
        a: 0,
      },
      {
        q: "Câu 145: Câu lệnh nào sau đây viết sai cú pháp",
        o: [
          'executeQuery("SELECT all FROM survey");',
          'executeQuery("SELECT *FROM survey");',
          'executeQuery("SELECT *FROM computers");',
          'executeQuery("SELECT *FROM taxi");',
        ],
        a: 0,
      },
      {
        q: "Câu 146: Câu lệnh nào sau đây viết sai cú pháp?",
        o: [
          'executeUpdate("drop table name survey");',
          'executeUpdate("drop table survey");',
          'executeUpdate("drop table taxi");',
          'executeUpdate("drop table computers");',
        ],
        a: 0,
      },
      {
        q: "Câu 147: Đối tượng Statement được trả về từ hàm nào?",
        o: [
          "createStatement();",
          'executeUpdate("drop table survey");',
          'executeUpdate("drop table taxi");',
          'executeUpdate("drop table computers");',
        ],
        a: 0,
      },
      {
        q: "Câu 148: Đối tượng ResultSet có hàm nào sau đây:",
        o: ["getString()", "getStr()", "getStrings()", "getValues()"],
        a: 0,
      },
      {
        q: "Câu 149: Đối tượng ResultSet có hàm nào sau đây:",
        o: [
          "updateString()",
          "updateStr()",
          "updateStrings()",
          "updateValues()",
        ],
        a: 0,
      },
      {
        q: "Câu 150: Đối tượng ResultSet có hàm nào sau đây:",
        o: ["updateRow()", "updateRows()", "updateInts()", "updateValues()"],
        a: 0,
      },
      {
        q: "Câu 151: Điền thêm từ vào ... để hoàn thành đoạn lệnh sau: try {\nUIManager.setLookAnd…(UIManager.getSystemLookAndFeelClassN a me()); }\ncatch (Exception e) {e.printStackTrace();}",
        o: ["Feel", "Show", "Look", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 152: Điền thêm từ vào ... để hoàn thành đoạn lệnh sau: try {\nUIManager.setLookAndFeel(UIManager.get…LookAndFeelClassNam e ()); }\ncatch (Exception e) {e.printStackTrace();}",
        o: ["System", "Show", "Container", "Component"],
        a: 0,
      },
      {
        q: "Câu 153: Điền thêm từ vào ... để hoàn thành đoạn lệnh sau: try {\nUIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClas s Name()); }…\n(Exception e) {e.printStackTrace();}",
        o: ["catch", "and", "CATCH", "And"],
        a: 0,
      },
      {
        q: "Câu 154: Điền thêm từ vào ... để hoàn thành đoạn lệnh sau: try {\nUIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClas s Name()); }\ncatch (…e) {e.printStackTrace();}",
        o: ["Exception", "EXCEPTION", "except", "Except"],
        a: 0,
      },
      {
        q: "Câu 155: Điền thêm từ vào ... để hoàn thành đoạn lệnh sau: addMouse…Listener (new\nMouseMotionAdapter(){ public void mouseDragged(MouseEvent event)\n{p = event.getPoint(); repaint();}});",
        o: ["Motion", "event", "Point", "Adapter"],
        a: 0,
      },
      {
        q: "Câu 156: Điền thêm từ vào ... để hoàn thành đoạn lệnh sau: addMouseMotionListener (new\nMouseMotion…(){ public void mouseDragged(MouseEvent event)\n{p = event.getPoint(); repaint();}});",
        o: ["Adapter", "Event", "Dragged", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 157: Điền thêm từ vào ... để hoàn thành đoạn lệnh sau: addMouseMotionListener (new\nMouseMotionAdapter (){ public void ... Dragged(MouseEvent event)\n{p = event.getPoint(); repaint();}});",
        o: ["mouse", "event", "repaint", "getPoint"],
        a: 0,
      },
      {
        q: "Câu 158: Kiến trúc MVC của Swing gồm có những thành phần nào?",
        o: [
          "Model, View, Controller",
          "Model, View, Controller, Connection",
          "Model, View, Console",
          "Model, View, Connection",
        ],
        a: 0,
      },
      {
        q: "Câu 159: Trong Java, AWT viết là gì?",
        o: [
          "Abstract Window Toolkit",
          "All Window Toolkit",
          "Add Window Toolkit",
          "Tất cả đều sai.",
        ],
        a: 0,
      },
      {
        q: "Câu 160: Trong Java, Container là gì?",
        o: [
          "Đối tượng vật chứa, có khả năng quản lý và nhóm các đối tượng khác lại",
          "Đối tượng thành phần hiển thị, nằm trong đối tượng chứa",
          "Đối tượng độc lập, được xây dựng riêng",
          "Đối tượng quản lý bố cục",
        ],
        a: 0,
      },
      {
        q: "Câu 161: Trong Java, Component là gì?",
        o: [
          "Là các đối tượng có biểu diễn đồ họa, được hiển thị lên màn hình mà người dùng tương tác được",
          "Là các đối tượng có biểu diễn đồ họa, được hiển thị lên màn hình mà người dùng không tương tác được",
          "Là đối tượng chứa, dùng để chứa các Container, quản lý bố cục",
          "Là đối tượng chuyên quản lý bố cục",
        ],
        a: 0,
      },
      {
        q: 'Câu 162: JFrame frame = new JFrame("HelloWorldSwing"); frame.pack();',
        o: [
          "Lệnh frame.pack() để làm gì?:",
          "Hiện thị frame với đủ các thành phần trên frame, với khung bé nhất",
          "Hiện thị frame với đủ các thành phần trên frame, với toàn màn hình",
          "Cố định frame ở một chỗ E. Tất cả đều sai",
        ],
        a: 1,
      },
      {
        q: "Câu 163: Menu, Label, Button, Textbox ... là thuộc loại nào?",
        o: ["Component", "Container", "Layout manager", "Event"],
        a: 0,
      },
      {
        q: "Câu 164: Những thành phần nào sau chỉ thuộc Container?",
        o: [
          "Dialog, Frame, Applet, Panel, Scroll pane",
          "Frame, Applet, Panel, Scroll pane, Slider, List",
          "Combo Box, List, Menu",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 165: Đồ họa trong Java, thành phần nào dùng để quản lý bố cục?",
        o: ["Layout manager", "Graphic", "Font", "Container"],
        a: 0,
      },
      {
        q: "Câu 166: Đồ họa trong Java, thành phần nào dùng để xử lý sự kiện?",
        o: ["Event", "Component", "Container", "Graphic"],
        a: 0,
      },
      {
        q: "Câu 167: Một số loại Layout có trong Java?",
        o: [
          "BorderLayout, BoxLayuot, CardLayout, FlowLayout, GridLayout",
          "BorderLayout, BoxLayuot, CardLayout, FlowLayout, PrintsLayout",
          "BorderLayout, BoxLayuot, PrintsLayout, ScannerLayout",
          "BorderLayout, BoxLayuot, CardLayout, FlowLayout, BagfwLayout",
        ],
        a: 0,
      },
      {
        q: "Câu 168: BorderLayout hoạt động thế nào?",
        o: [
          "Chia thành 5 phần: north, west, center, east, south",
          "Đưa các thành phần từ trái qua phải, từ trên xuống dưới",
          "Đưa các thành phần từ phải qua trái, từ trên xuống dưới",
          "Đưa các thành phần vào thành từng dòng hoặc từng cột",
        ],
        a: 0,
      },
      {
        q: "Câu 169: BoxLayout hoạt động thế nào?",
        o: [
          "Đưa các thành phần vào thành từng dòng hoặc từng cột",
          "Đưa các thành phần từ phải qua trái, từ trên xuống dưới",
          "Đưa các thành phần từ trái qua phải, từ trên xuống dưới",
          "Chia thành 5 phần: north, west, center, east, south",
        ],
        a: 0,
      },
      {
        q: "Câu 170: CardLayout hoạt động thế nào?",
        o: [
          "Cho phép hiển thị nhiều Component khác nhau tại nhiều thời điểm khác nhau",
          "Đưa các thành phần từ phải qua trái, từ trên xuống dưới",
          "Đưa các thành phần từ trái qua phải, từ trên xuống dưới",
          "Chia thành 5 phần: north, west, center, east, south",
        ],
        a: 0,
      },
      {
        q: "Câu 171: FlowLayout hoạt động thế nào?",
        o: [
          "Đưa các thành phần từ trái qua phải",
          "Đưa các thành phần từ phải qua trái, từ trên xuống dưới",
          "Đưa các thành phần vào thành từng dòng hoặc từng cột",
          "Chia thành 5 phần: north, west, center, east, south",
        ],
        a: 0,
      },
      {
        q: "Câu 172: GridLayout hoạt động thế nào?",
        o: [
          "Đưa các thành phần từ trái qua phải, từ trên xuống dưới vào các ô định sẵn",
          "Đưa các thành phần từ phải qua trái, từ trên xuống dưới",
          "Đưa các thành phần vào thành từng dòng hoặc từng cột",
          "Chia thành 5 phần: north, west, center, east, south",
        ],
        a: 0,
      },
      {
        q: "Câu 173: Cách khai báo (import) gói sự kiện nào sau đây đúng?",
        o: [
          "java.awt.event.*, java.swing.event.*",
          "java.awt.event.*, java.event.*",
          "java.awt.event, java.swing.event",
          "java.awt.even.*, java.swing.even.*",
        ],
        a: 0,
      },
      {
        q: "Câu 174: Câu lệnh Java nào đúng?",
        o: [
          "statusBar = new JLabel(); getContentPane().add(statusBar, BorderLayout.SOUTH);",
          "statusBar = new JLabel(); getContenPanel().add(statusBar, BorderLayout.SOUTH);",
          "statusBar = new JLabel(); getContentPanel().add(statusBar, BordLayout.SOUTH);",
          "statusBar = new JLabel(); getContentPane().add(statusBar, BorderLayout.IN);",
        ],
        a: 0,
      },
      {
        q: "Câu 175: Lệnh getContentPane().setBackground(Color.RED); để làm gì?",
        o: [
          "Đặt mầu nền của đối tượng thành mầu đỏ",
          "Lấy mầu đỏ từ thành phần",
          "Đặt mầu đỏ làm mặc định không đổi trong cả chương trình",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 176: Dòng lệnh nào sau đây đúng cú pháp?",
        o: [
          "public class xlsk extends JFrame implements MouseMotionListener, MouseListener",
          "public class xlsk extend JFrame implements MouseMotionListener, MouseListener",
          "public class xlsk extends JFrame implements MouseMotionListener; MouseListener",
          "public xlsk extends JFrame implements MouseMotionListener, MouseListener",
        ],
        a: 0,
      },
      {
        q: "Câu 177: Lệnh repaint(); dùng để làm gì?",
        o: [
          "Gọi đến hàm public void paint(Graphics g) {} để xử lý",
          "Gọi đến hàm repaint. Hàm này buộc phải xây dựng chương trình chạy",
          "Không có lệnh này trong Java",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 178: Lệnh đặt chiều dài, chiều rộng (x,y) cho đối tượng là gì?",
        o: ["setSize(x,y)", "SetSize(x,y)", "GetSize(x,y)", "getSize(x,y)"],
        a: 0,
      },
      {
        q: "Câu 179: Lệnh hiển thị 1 đối tượng kiểu JFrame là?",
        o: [
          "setVisible(true);",
          "setVisible(false);",
          "setEnabled(false);",
          "setEnabled(true);",
        ],
        a: 0,
      },
      {
        q: "Câu 180: Chức năng của JScrollPane là?",
        o: [
          "Giúp hiển thị các component với kích thước động",
          "Giúp hiển thị các component với kích thước tĩnh",
          "Là thành phần chứa container, chứa tất cả các thành phần khác",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 181: Chức năng của JSplitPane là gì?",
        o: [
          "Chia các component ra làm 2 phần, theo chiều ngang hoặc dọc",
          "Chia các component ra làm 2 phần, theo chiều ngang",
          "Chia các component ra làm 2 phần, theo chiều dọc",
          "Chia các component ra nhiều phần, chỉ theo chiều ngang",
        ],
        a: 0,
      },
      {
        q: "Câu 182: Các thành phần JRadioButton cùng thuộc vào 1 ButtonGroup thì?",
        o: [
          "Chương trình chạy, tại một thời điểm chỉ có một cái được chọn - setSelected(true)",
          "Chương trình chạy, tại một thời điểm có thể nhiều cái được chọn - setSelected(true)",
          "Chương trình chạy, tại một thời điểm có thể chọn hết hoặc không chọn",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 183: B là kiểu JButton. Lệnh B.setEnabled(false) để làm gì?",
        o: [
          "Vô hiệu hóa nút B. Vẫn nhìn thấy B nhưng không tác động được",
          "ẩn nút B",
          "Thay đổi mầu nút B nhưng vẫn tác động được",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 184: Đối tượng thuộc kiểu JTextField giống và khác nhau với JPasswordField?",
        o: [
          "Cùng tạo hộp nhập dữ liệu, nhưng một cái hiển thị rõ giá trị một cái không",
          "Không có sự phân biệt",
          "Khác nhau hoàn toàn",
          "Cùng tạo hộp nhập dữ liệu, nhưng khác nhau về mầu sắc.",
        ],
        a: 0,
      },
      {
        q: "Câu 185: phương thức hasNextLine() trong lớp Scanner có tác dụng?",
        o: [
          "Lớp Scanner không có phương thức này",
          "Kiểm tra xem có 1 chuỗi ký tự trong input không, không kể dấu cách",
          "Kiểm tra xem có 1 số nguyên trong input không",
          "Kiểm tra xem có 1 chuỗi ký tự nằm trong input không, kể cả dấu cách",
        ],
        a: 0,
      },
      {
        q: "Câu 186: Muốn cài đặt lại locate mặc định cho hệ thống thì dùng phương thức nào sau đây:",
        o: [
          "Static void setDefault(Locate loc)",
          "Static Locate getDefault()",
          "String getDisplayName()",
          "String getDisplayName(Locate loc)",
        ],
        a: 0,
      },
      {
        q: "Câu 187: Muốn lấy tên mô tả của một locate được biểu diễn trong locate hiện tại thì ta dùng phương\nthức nào:",
        o: [
          "String getDisplayName()",
          "String getDisplayName(Locate loc)",
          "Static Locate getDefault()",
          "Static void setDefault(Locate loc)",
        ],
        a: 0,
      },
      {
        q: "Câu 188: Muốn lấy tên của một locate được chỉ định thì ta dùng phương thức nào?",
        o: [
          "String getDisplayName(Locate loc)",
          "String getDisplayName()",
          "Static Locate getDefault()",
          "Static void setDefault(Locate loc)",
        ],
        a: 0,
      },
      {
        q: "Câu 189: Remote Method Invocation (RMI) do sun đưa ra vào năm nào?",
        o: ["1995", "1996", "1998", "2000"],
        a: 0,
      },
      {
        q: "Câu 190: Cho đoạn mã sau:\n1: class SuperDuper\n2: {\n3: void aMethod(){}\n4: }\n5: class sub extends SuperDuper\n6: {\n7: void aMethod(){}\n8: }\nHãy chọn từ khóa chỉ phạm vi hợp lệ đứng trước aMethod()?",
        o: ["Tất cả các đáp án đều đúng", "public", "default", "protected"],
        a: 0,
      },
      {
        q: "Câu 191: Cho biết kết quả của đoạn mã sau:\n1: int x = 3;\n2: int y = 10;\n3: System.out.println(y%x);",
        o: ["1", "0", "2", "3"],
        a: 0,
      },
      {
        q: "Câu 192: Lớp nào không thuộc gói java.net?",
        o: [
          "SocketOption",
          "SocketAddress",
          "DatagramPacket",
          "Các đáp án đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 193: Chọn phát biểu đúng trong các phát biểu sau:",
        o: [
          "Lớp DatagramSocket là lớp dùng để chuyển đi một gói dữ liệu theo giao thức UDP (2)",
          "Lớp DatagramSocket là lớp dùng để chuyển đi một gói dữ liệu theo giao thức TCP (1)",
          "Cả (1) và (2) đều đúng",
          "Cả (1) và (2) đều sai",
        ],
        a: 0,
      },
      {
        q: 'Câu 194: Tìm dòng sai trong đoạn mã sau:\n1: public class ChaoBan\n2: {\n3: public static void Main (String[] args)\n4: {\n5: System.out.println("Chào bạn đã đến với Java");\n6: }\n7: }',
        o: ["Dòng 3", "Dòng 1", "Dòng 5", "Đúng hoàn toàn"],
        a: 0,
      },
      {
        q: 'Câu 195: Tìm dòng sai trong đoạn mã sau:\n1: public Class Chao Ban\n2: {\n3: public static void main (String[] args)\n4: {\n5: System.out.println("Chào bạn đã đến với Java");\n6: }\n7: }',
        o: ["Dòng 1", "Dòng 3", "Dòng 5", "Đúng hoàn toàn"],
        a: 0,
      },
      {
        q: 'Câu 196: Tìm dòng sai trong đoạn mã sau:\n1: public class ChaoBan\n2: {\n3: public static void main (String[] args)\n4: {\n5: System.Out.println("Chào bạn đã đến với Java");\n6: }\n7: }',
        o: ["Dòng 5", "Dòng 1", "Dòng 3", "Đúng hoàn toàn"],
        a: 0,
      },
      {
        q: 'Câu 197: Khi chạy, chương trình sau cho kết quả nào? public class TinhToan\n{\npublic static void main(String[] args)\n{ a=1; b=2; c=3;\ns=a+b+c; System.out.println("S="+s);\n}\n}',
        o: ["Báo lỗi", "6", "S=6", "Không có kết quả nào được in ra"],
        a: 0,
      },
      {
        q: 'Câu 198: Khi chạy, chương trình sau cho kết quả nào? public class TinhToan\n{\npublic static void main(String[] args)\n{\nint a, b, c, s; a=10; b=20; c=30;\ns=a*b*c; System.out.println("S="+s);\n}',
        o: ["S=6000", "6000", "Báo lỗi", "Không có kết quả nào được in ra"],
        a: 0,
      },
      {
        q: 'Câu 199: Khi chạy chương trình sau cho kết quả nào? public class ViDu\n{\npublic static void main(String[] args)\n{\nint i; i=1;\nif (i<1)\n{\nsystem.out.println("I="+(i+3));\n}\nelse\n{\nsystem.out.println("I="+(i+5));\n}\n}\n}',
        o: ["I=6", "I=1", "I=3", "I=4"],
        a: 0,
      },
      {
        q: 'Câu 200: Khi chạy, chương trình sau cho kết quả nào? public class TinhTong\n{\npublic static void main(String[] args)\n{\nint s,i;\nfor (i=1;i<=3;i++)\n{ s=0;\ns=s+i;\n}\nsystem.out.println("s="+s);\n}\n}',
        o: ["s=3", "s=2", "s=1", "s=0"],
        a: 0,
      },
      {
        q: 'Câu 201: Khi chạy, chương trình sau cho kết quả nào? public class TinhTong {\npublic static void main(String[] args)\n{\nint s,i;\nfor (i=1;i<=3;i++)\n{\ns=s+i; s=0;\n}\nsystem.out.println("s="+s);\n}\n}',
        o: ["s=0", "s=1", "s=3", "s=6"],
        a: 0,
      },
      {
        q: 'Câu 202: Chương trình sau sai ở dòng nào?\n1:public class TuanMethod {\n2: public static void main(String[] args) {\n3: TenDiaChi(); }\n4: public static void TenDiaChi {\n5: System.out.println("Truong DHQL&KD ha noi");\n6: System.out.println("Vinh Tuy-HBT-HN");\n7: System.out.println("Tel 9712932"); } }',
        o: ["Dòng 4", "Dòng 3", "Dòng 2", "Không có lệnh sai"],
        a: 0,
      },
      {
        q: 'Câu 203: Khi chạy, chương trình sau cho kết quả nào? public class TinhTong\n{\npublic static void main(String[] args)\n{\nint s,i; s=0;\nfor (i=1;i<=3;i++)\n{\ns=s+i; s=s+1;\n}\nsystem.out.println("s="+s);\n}\n}',
        o: ["s=9", "s=8", "s=6", "s=3"],
        a: 0,
      },
      {
        q: 'Câu 204: Khi chạy, chương trình sau sẽ cho kết quả nào? public class TinhTong\n{\npublic static void main(string[] args)\n{\nint s,i; s=0; i=1;\nwhile (i<=3)\n{\ns=s+i; i=i+1;\n}\nsystem.out.println("s="+s);\n}\n}',
        o: ["Máy báo lỗi", "s=3", "s=6", "s=1"],
        a: 0,
      },
      {
        q: 'Câu 205: Khi chạy, chương trình sau sẽ cho kết quả nào? public class Mangxau\n{\npublic static void main(String[] args)\n{\nstring [] chr; int i;\nchr[0]="Toi di tim cai nua cua toi"; chr[1]="Ma tim mai den bay gio cha thay";\nchr[2]="Tinh yeu cua toi oi anh la ai vay"; for (i=0; i<3; i++) System.out.println(chr[2]);\n}\n}',
        o: [
          "Máy báo lỗi",
          "Toi di tim cai nua cua toi",
          "Ma tim mai den bay gio cha thay",
          "Không báo gì cả",
        ],
        a: 0,
      },
      {
        q: 'Câu 206: Khi chạy, chương trình sau sẽ cho kết quả nào? public class Mangxau\n{\npublic static void main(String[] args)\n{\nstring [] chr; int i;\nchr=new String[3];\nchr[0]="Toi di tim cai nua cua toi"; chr[1]="Ma tim mai den bay gio cha thay";\nchr[2]="Tinh yeu cua toi oi anh la ai vay";\nfor (i=0; i<3; i++) [CR]System.out.println(chr[2]);\n}\n}',
        o: [
          "Tinh yeu cua toi oi anh la ai vay",
          "Máy báo lỗi",
          "Ma tim mai den bay gio cha thay",
          "Không báo gì cả",
        ],
        a: 0,
      },
      {
        q: "Câu 207: Chọn phát biểu đúng:",
        o: [
          "Mọi lớp đều kế thừa trực tiếp hoặc gián tiếp từ lớp Object",
          "Lớp Object là một lớp final",
          "Lớp Class là lớp cha của lớp Object",
          "Tất cả các câu trên đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 208: Lớp nào sau đây dùng để thực hiện các thao tác nhập xuất cơ bản với console?",
        o: ["System", "Math", "String", "String Buffer"],
        a: 0,
      },
      {
        q: "Câu 209: Lớp nào sau đây không phải là lớp bao?",
        o: ["Boolean", "String", "Integer", "Character"],
        a: 0,
      },
      {
        q: "Câu 210: Phương thức nào sau đây sẽ làm cho giá trị biến s bị thay đổi?",
        o: [
          "s.toUpperCase()",
          "s.concat()",
          "s.replace()",
          "Câu a) và b) đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 211: Chọn phát biểu đúng cho hàm khởi tạo:",
        o: [
          "Tất cả các câu trên đều sai",
          "Tất cả các hàm khởi tạo có kiểu trả về là void",
          "Trình biên dịch sẽ tự động tạo hàm khởi tạo mặc định nếu lớp không định nghĩa hàm khởi tạo",
          "Một lớp sẽ kết thừa các hàm khởi tạo từ lớp cha",
        ],
        a: 0,
      },
      {
        q: "Câu 212: Một kiểu dữ liệu số có dấu có 2 giá trị +0 và -0 bằng nhau:",
        o: [
          "Đúng",
          "Sai",
          "Chỉ đúng với kiểu số nguyên",
          "Chỉ đúng với kiểu số thực",
        ],
        a: 0,
      },
      {
        q: "Câu 213: Một locale mô tả:",
        o: [
          "1 2 3",
          "Một từ ngữ (1)",
          "Tùy chọn vị trí (2)",
          "Tùy chọn biến thể khác nhau (option variant) (3)",
        ],
        a: 0,
      },
      {
        q: "Câu 214: Muốn lấy đối tượng Locate mặc định của hệ thống thì dùng phương thức nào sau đây:",
        o: [
          "Static Locate getDefault()",
          "Static void setDefault(Locate loc)",
          "String getDisplayName()",
          "String getDisplayName(Locate loc)",
        ],
        a: 0,
      },
      {
        q: "Câu 215: Lớp DatagramSocket dùng để?",
        o: [
          "Chuyển đi một gói dữ liệu theo giao thức UDP (1)",
          "Chứa dữ liệu để gửi đi trên mạng (2)",
          "Định vị địa chỉ tài nguyên trên mạng (3)",
          "Tất cả (1),(2),(3) đều sai.",
        ],
        a: 0,
      },
      {
        q: 'Câu 216: Đoạn mã lệnh dưới đây thực hiện việc gì: FileOutputStream os = new\nFileOutputStream("abc.txt"); String s = "Welcome to File Input Output Stream " ; for(int i =\n0; i< s.length(); ++i) os. write(s.charAt(i));',
        o: [
          "Tạo file abc.txt.",
          "Đọc một chuỗi.",
          "Sắp xếp chuỗi kí tự.",
          "Đếm độ dài chuỗi kí tự.",
        ],
        a: 0,
      },
      {
        q: 'Câu 217: Đoạn mã lệnh dưới đây sai ở dòng nào? FileOutputStream os = 1\nFileOutputStream("abc.txt"); String s = "Welcome to File Input Output Stream " ; for(int i =\n0; i< s.length(); ++i)[CR]os. write(s.charAt(i));',
        o: ["1", "2", "3", "4"],
        a: 0,
      },
      {
        q: 'Câu 218: Đoạn mã lệnh dưới đây thực hiện việc gì? FileInputStream is = new\nFileInputStream("abc.txt"); int ibyts = is.available(); & vbCrLf & _\nsystem.out.println("Input Stream has " + ibyts + " available bytes"); byte ibuf[ ] = new\nbyte[ibyts];\nint byrd = is.read(ibuf, 0, ibyts); System.out.println("Number of Bytes read are: " + byrd);\nSystem.out.println("They are: " + new String(ibuf)); is.close();\nfile fl = new File("abc.txt"); fl.delete();\n}\n}',
        o: [
          "Mở file abc.txt ra đọc.",
          "Mở file abc.txt ra xóa.",
          "Mở file abc.txt ra ghi.",
          "Mở file abc.txt ra viết.",
        ],
        a: 0,
      },
      {
        q: 'Câu 219: Đoạn mã lệnh dưới đây sai dòng nào? FileInputStream is = new\nFileInputStream("abc.txt"); int ibyts = os.available();\nsystem.out.println("Input Stream has " + ibyts + " available bytes"); byte ibuf[ ] = new\nbyte[ibyts];\nint byrd = is.read(ibuf, 0, ibyts); System.out.println("Number of Bytes read are: " + byrd);\nSystem.out.println("They are: " + new String(ibuf)); is.close();[CR]File fl = new\nFile("abc.txt");\nfl.delete();\n}\n}',
        o: ["1", "2", "3", "8"],
        a: 1,
      },
      {
        q: 'Câu 220: Đoạn mã lệnh dưới đây sai chỗ nào?\nfileInputStream is = new FileOnputStream("abc.txt"); int ibyts = is.available();\nsystem.out.println("Input Stream has " + ibyts + " available bytes"); byte ibuf[ ] = new\nbyte[ibyts];\nint byrd = is.read(ibuf, 0, ibyts); System.out.println("Number of Bytes read are: " + byrd);\nSystem.out.println("They are: " + new String(ibuf)); is.close();\nfile fl = new File("abc.txt"); fl.delete();\n}\n}',
        o: ["1", "4", "3", "5"],
        a: 0,
      },
      {
        q: 'Câu 221: Đoạn mã lệnh dưới đây sai chỗ nào? FileInputStream is = new FileInputStream("abc.txt");\nint ibyts = is.available();\nsystem.out.println("Input Stream has " + ibyts + " available bytes"); byte ibuf[ ] = new\nbyte[ibyts]; nt byrd = is.read(ibuf, 0, ibyts); System.out.println("Number of Bytes read\nare: " + byrd); System.out.println("They are: " + new String(ibuf)); is.close();\nfile fl = new File("abc.txt"); fl.delete();\n}\n}',
        o: ["6", "1", "5", "4"],
        a: 2,
      },
      {
        q: 'Câu 222: Đoạn mã lệnh dưới đây sai chỗ nào? FileInputStream is = new FileInputStream("abc.txt");\nint ibyts = is.available();\nsystem.out.println("Input Stream has " + ibyts + " available bytes"); byte ibuf[ ] = new\nbyte[ibyts];\nint byrd = is.read(ibuf, 0, ibyts); System.iut.println("Number of Bytes read are: " + byrd);\nSystem.out.println("They are: " " + new String(ibuf)); is.close();\nfile fl = new File("abc.txt"); fl.delete();\n}\n}',
        o: ["6", "1", "2", "3"],
        a: 0,
      },
      {
        q: 'Câu 223: Đoạn mã lệnh dưới đây sai chỗ nào?\n1. FileInputStream is = new FileInputStream("abc.txt");\n2. int ibyts = is.available();\n3. System.out.println("Input Stream has " + ibyts + " available bytes");\n4. byte ibuf[ ] = new byte[ibyts];\n5. int byrd = is.read(ibuf, 0, ibyts);\n6. System.iut.println("Number of Bytes read are: " + byrd);\n7. System.out.println("They are: " + new String(ibuf));\n8. is.close();\n9. File fl = new File("abc.txt");\n10. fl.delete();[CR]}[CR]}',
        o: ["Dòng 6.", "Dòng 1.", "Không sai chỗ nào.", "10"],
        a: 0,
      },
      {
        q: 'Câu 224: Cho biết kết quả sau khi hình thành chương trình sau:\n1. public class Short {\n2. public static void main (String [] args)\n3. StringBuffert s= new StringBuffert("Hello");\n4. if (s.leght()>5)&& s.sppend("three") equals("false"));\n5. System.out.println("value is" +s);\n6. }\n7. }',
        o: [
          "Value is Hello",
          "Lỗi biên dịch tại dòng 4 và dòng 5",
          "Không có giá trị xuất",
          "Thông báo NullPointerException",
        ],
        a: 0,
      },
      {
        q: "Câu 225: Lớp NumberFomat đơợc sử dụng để tạo ra các định dạng địa phương (Local fomat) cụ thể\nnào?\nA. Con số\nB. Tiền tệ\nC. Tỷ lệ phần trăm\nD. Ngày",
        o: ["A, B và C", "B, C và D", "A, B và D", "A, B, C và D"],
        a: 0,
      },
      {
        q: 'Câu 226: Cho biết kết quả sau khi biên dịch và thi hành chơương trình sau:\n1. public class Conditionnal\n2. public static void main (String [] args) {\n3. int x=4;\n4. System.out.println\n5. ("value is" + ((x>4?99,99:9));\n6. }\n7. }',
        o: ["Lỗi biên dịch tại dòng số 5", "9", "9,0", "99,99"],
        a: 0,
      },
      {
        q: "Câu 227: Chọn khai báo tên đúng:",
        o: [
          "Tất cả các câu trên đều đúng",
          "Big01LongStringWidthMeaninglessNam",
          "$int",
          "bytes",
        ],
        a: 0,
      },
      {
        q: "Câu 228: Chọn khai báo đúng cho phương thức main()",
        o: [
          "public static void main(String[] args)",
          "public void main(String[] arg)",
          "public static void main()",
          "public static int main(String[] arg)",
        ],
        a: 0,
      },
      {
        q: "Câu 229: Chọn thứ tự đúng của các thành phần trong một tập tin nguồn:",
        o: [
          "Khai báo package đầu tiên; thứ tự của câu lệnh import và khai báo lớp là tùy ý",
          "Câu lệnh import, khai báo package, khai báo lớp",
          "Câu lệnh import trơớc tiên; thứ tự của khai báo package và khai báo lớp là tùy ý",
          "Khai báo package, câu lệnh import, khai báo lớp",
        ],
        a: 0,
      },
      {
        q: 'Câu 230: Cho câu lệnh sau:\nint[] x = new int[25];\nchọn kết quả đúng sau khi thi hành câu lệnh trên: "',
        o: [
          "x.length = 25",
          "x[0] = có giá trị null",
          "x[25] có giá trị 0",
          "x[24] chưa được định nghĩa",
        ],
        a: 0,
      },
      {
        q: "Câu 231: Chọn phát biểu đúng:",
        o: [
          "Câu a) và b) đúng",
          "Lớp Writer có thể được dùng để ghi các ký tự có cách mã hóa khác nhau ra luồng xuất",
          "Lớp Writer có thể được dùng để ghi các ký tự Unicode ra luồng xuất",
          "Lớp Writer có thể được dùng để ghi giá trị cá kiểu dữ liệu cơ sở ra luồng xuất",
        ],
        a: 0,
      },
      {
        q: "Câu 232: Chọn phát biểu đúng:",
        o: [
          "Tất cả các câu trên đều đúng",
          "Một event adapter là một cung cấp các cài đặt mặc định cho các event listener tương ứng",
          "Lớp WindowAdapter được dùng để xử lý các sự kiện liên quan đến cửa sổ màn hình",
          "Các event listeners là các interface qui định các phương thức cần phải cài đặt để xử lý các sự kiên liên quan khi sự kiện đó xảy ra.",
        ],
        a: 0,
      },
      {
        q: 'Câu 233: Đoạn mã sau sai chổ nào?\n1. public class Question{\n2. public static viod main(String args[]){\n3. Boolean b=new Boolean("TRUE");\n4. if(b){\n5. for(Interger i=0;i<10;i++){\n6. System.out.println(i);\n7. }\n8. }\n9. }\n}',
        o: [
          "Câu b) và c) đúng",
          "Đoạn mã không có lỗi",
          "Điều kiện của câu lệnh if phải có kiểu boolean thay vì Boolean",
          "Chỉ số của câu lệnh for là int thay vì Integer",
        ],
        a: 0,
      },
      {
        q: "Câu 234: Đoạn chương trình sau biên dịch gặp lỗi do:\n1. public class MyClass{\n2. public static void main(String arguments[]){\n3. Amethod(arguments);\n4. }\n5. public void amethod(String [] arguments)\n6. {\n7. System.out.println(arguments);\n8. }\n9. }",
        o: [
          "Không tạo ra đối tượng tham chiếu tới lớp không tĩnh (non static class)",
          "Truy cập tới phần tử vượt quá chỉ số của mảng",
          "2 đúng",
          "2 sai",
        ],
        a: 0,
      },
      {
        q: "Câu 235: Chọn phát biểu đúng:",
        o: [
          "Một lớp final không thể chứa các phương thức trừu tượng (a)",
          "Một lớp trừu tượng không thể chứa phương thức final(b)",
          "a, b đều đúng",
          "a, b đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 236: Câu nào sau đây là đúng:",
        o: ["1. int = 10", "2. byte b=257", '3. char c="a', "4. float f=1.3"],
        a: 0,
      },
      {
        q: "Câu 237: Chọn câu phát biểu đúng:",
        o: [
          "Câu 1 và 3 đúng",
          "Một đối tượng của lớp file có thể đơợc dùng để truy cập các tập tin trong thư mục hiện hành (1)",
          "Khi một đối tượng của lớp file được tạo ra thì một tập tin tương ứng cũng được tạo ra trên 2 đĩa (2)",
          "Các đối tượng của lớp file được dùng truy cập đến các tập tin và thư mục trên đĩa (3)",
        ],
        a: 0,
      },
      {
        q: "Câu 238: Trong các khai báo giao diện sau khai báo nào đúng?",
        o: [
          "public interface MyInterface {}",
          "public interface MyInterface ()",
          "public class MyInterface {}",
          "public abtract MyInterface {}",
        ],
        a: 0,
      },
      {
        q: "Câu 239: Muốn lưu trữ một biến số nguyên dương mà có giá trị lớn nhất là một triệu thì sử dụng\nkiểu dữ liệu nào là tiết kiệm bộ nhớ nhất?",
        o: ["int", "float", "Double", "Byte"],
        a: 0,
      },
      {
        q: 'Câu 240: ArrayList Sử dụng cấu trúc mảng để lưu trữ phần tử, tuy nhiên có 2 đặc điểm khác mảng?"',
        o: [
          "tất cả đều đúng",
          "Không cần khai báo trước kiểu phần tử",
          "Không cần xác định trước số lượng phần tử(kích thước mảng)",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 241: Hàm Khởi tạo nào đúng .",
        o: [
          "tất cả đều đúng",
          "ArrayList(int initialCapactity)",
          "ArrayList(Collection c)",
          "ArrayList()",
        ],
        a: 0,
      },
      {
        q: 'Câu 242: Các methods chính là"',
        o: [
          "tất cả đều đúng",
          "add(Object o) , remove(Object o)",
          "get(int index) , size()",
          "isEmpty() , contains(Object o) , clear()",
        ],
        a: 0,
      },
      {
        q: 'Câu 243: Vector và ArrayList "',
        o: [
          "Hoàn toàn giống ArrayList về chức năng",
          "Hoàn toàn không giống ArrayList về chức năng",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 244: Khi không làm việc với thread thì nên sử dụng....................vì tốc độ nhanh hơn.........",
        o: [
          "ArrayList....................Vector",
          "Vector....................ArrayList",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 245: Khi có nhiều thread cùng....................phần tử trong Vector thì chỉ 1 thread được làm việc đó",
        o: [
          "add hoặc remove 1",
          "add hoặc remove 2",
          "add hoặc remove 3",
          "add hoặc remove 4",
        ],
        a: 0,
      },
      {
        q: "Câu 246: LinkedList là gì?",
        o: [
          "Vȃ̀ cấu trúc, các object trong LinkedList chứa liên kết đến object kế sau nó trong list.",
          "Vȃ̀ cấu trúc, các object trong LinkedList chứa liên kết đến object kế trước nó trong list.",
          "tất cả đều đúng",
          "tất cả đều sai.",
        ],
        a: 0,
      },
      {
        q: "Câu 247: Khi duyệt list, không truy nhập trực tiếp được mà phải đi từ phần tử đầu tiên chậm hơn rất\nnhiều so với arrayList hay vector . Tuy nhiên khi add hay remove 1 phần tử thì ......",
        o: [
          "rất nhanh vì không phải thực hiện dồn các phần tử",
          "rất chậm vì không phải thực hiện dồn các phần tử",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 248: Ngoài các method như ArrayList, LinkedList còn có thêm các method",
        o: ["tất cả đều sai", "add.First()", "add.Last()", "get.First()"],
        a: 0,
      },
      {
        q: "Câu 249: Ngoài các method như ArrayList, LinkedList còn có thêm các method",
        o: [
          "tất cả đều đúng",
          "poll() = getFirst() + removeFirst()",
          "removeFirst()",
          "peek() = getFirst()",
        ],
        a: 0,
      },
      {
        q: "Câu 250: Khi nào dùng ArrayList, khi nào dùng LinkedList?",
        o: [
          "Nȃ́u thường xuyên phải truy nhập trực tiȃ́p dữ liạ̑u trong list sử dụng ArrayList",
          "Nȃ́u ít thường xuyên phải truy nhập trực tiȃ́p dữ liạ̑u trong list sử dụng ArrayList",
          "Nȃ́u không phải truy nhập trực tiȃ́p dữ liạ̑u trong list sử dụng ArrayList",
          "tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 251: Khi nào dùng ArrayList, khi nào dùng LinkedList? => Nȃ́u chương trình thường xuyên phải\nthêm hoặ c xóa 1 phần tử trong list(đặ c biạ̑t là thêm hoặ c xóa ở giữa) .....",
        o: [
          "thì nên sử dụng LinkedList",
          "thì nên sử dụng ArrayList",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 252: Set? => Cũng là....................Điểm khác biệt giữa Set và List là trong Set\nKhông bao giờ có 2 phần tử giống nhau, có nghĩa là nếu add 2 lần cùng 1 object thì lần add\nthứ 2 không có tác dụng",
        o: [
          "kiểu collection như list",
          "kiểu collection như Linkedlist",
          "kiểu collection như Arraylist",
          "kiểu collection như Vectorlist",
        ],
        a: 0,
      },
      {
        q: "Câu 253: Cũng là kiểu collection như list. Điểm khác biệt giữa Set và List là trong Set....................., có\nnghĩa là nếu add 2 lần cùng 1 object thì lần add thứ 2 không có tác dụng",
        o: [
          "không bao giờ có 2 phần tử giống nhau",
          "không bao giờ có 3 phần tử giống nhau",
          "không bao giờ có 4 phần tử giống nhau",
          "không bao giờ có 1 phần tử giống nhau",
        ],
        a: 0,
      },
      {
        q: "Câu 254: khai b¸o HashSet",
        o: [
          "HashSet hs = new HashSet();",
          "HashSet hs = HashSet();",
          "HashSet hs = add new HashSet();",
          "HashSet hs = new HashSet;",
        ],
        a: 0,
      },
      {
        q: "Câu 255: Hàm khởi tạo HashSet",
        o: ["HashSet()", "HashSet", "New HashSet()", "Add new HashSet()"],
        a: 0,
      },
      {
        q: "Câu 256: Hàm khởi tạo HashSet",
        o: [
          "HashSet(Collection c)",
          "new HashSet(Collection c)",
          "Add new HashSet(Collection c)",
          "Set(Collection c)",
        ],
        a: 0,
      },
      {
        q: "Câu 257: Hàm khởi tạo HashSet",
        o: [
          "HashSet(int capactity)",
          "New HashSet(int capactity)",
          "Add New HashSet(int capactity)",
          "Hash (int capactity)",
        ],
        a: 0,
      },
      {
        q: "Câu 258: Hàm khởi tạo HashSet",
        o: [
          "tất cả đều đúng",
          "HashSet()",
          "HashSet(Collection c)",
          "HashSet(int capactity)",
        ],
        a: 0,
      },
      {
        q: 'Câu 259: Các method chính HashSet "',
        o: [
          "tất cả đều đúng",
          "add(Object o)",
          "remove(Object o)",
          "contains(Object o)",
        ],
        a: 0,
      },
      {
        q: "Câu 260: Các method chính HashSet",
        o: [
          "tất cả đều sai",
          "ad(Object o)",
          "rem (Object o)",
          "contain(Object o)",
        ],
        a: 0,
      },
      {
        q: "Câu 261: Tuy nhiên Set không có hàm....................để lấy ra 1 phần tử trực tiếp",
        o: ["get", "call", "take", "hand"],
        a: 0,
      },
      {
        q: "Câu 262: Muốn duyệt các phần tử của Set, sử dụng ........",
        o: [
          "con trỏ iterator",
          "biến iterator",
          "hàm iterator",
          "phần tử iterator",
        ],
        a: 0,
      },
      {
        q: "Câu 263: LinkedHashSet?",
        o: [
          "Giống như HashSet ngoại trừ thứ tự các phần tử trong set là thứ tự khi add vào;",
          "Giống như ArrayList ngoại trừ thứ tự các phần tử trong set là thứ tự khi add vào",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 264: TreeSet? => Thứ tự các phần tử trong TreeSet....................vào thứ tự lúc\nadd mà phụ thuộc vào thứ tự của các object trong set(nếu các object này có thế so sánh thứ\ntự được)",
        o: [
          "không phụ thuộc",
          "có phụ thuộc",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 265: Thứ tự các phần tử trong TreeSet không phụ thuộc vào thứ tự lúc add.....................trong\nset(nếu các object này có thế so sánh thứ tự được)",
        o: [
          "mà phụ thuộc vào thứ tự của các object",
          "mà phụ thuộc vào thứ tự của các Tree",
          "mà phụ thuộc vào thứ tự của các Set",
          "mà phụ thuộc vào thứ tự của các TreeSet",
        ],
        a: 0,
      },
      {
        q: "Câu 266: Map?",
        o: [
          "Map là kiểu dữ liệu dạng từ điển, mỗi phần tử bao gồm key và value",
          "Map là kiểu dữ liệu dạng từ điển, các phần tử bao gồm key và value",
          "Map là kiểu dữ liệu dạng từ điển, một phần tử bao gồm key và value",
          "Map là kiểu dữ liệu dạng từ điển, hai phần tử bao gồm key và value",
        ],
        a: 0,
      },
      {
        q: "Câu 267: Hàm khởi tạo HashMap?",
        o: [
          "tất cả đều đúng",
          "HashMap()",
          "HashMap(Collection c)",
          "HashMap(int capacity)",
        ],
        a: 0,
      },
      {
        q: "Câu 268: Các methods chính HashMap? .",
        o: [
          "tất cả đều đúng",
          "put(Object key, Object value) , get(Object key)",
          "remove(Object key) , containsKey(Object key)",
          "containsValue(Object value) , size() , isEmpty",
        ],
        a: 0,
      },
      {
        q: "Câu 269: Các methods chính HashMap?",
        o: [
          "tất cả đều sai",
          "puts(Object key, Object value) , gets(Object key)",
          "removes(Object key) , containsKeys(Object key)",
          "tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 270: HashTable cũng giống như HashMap ngoại trừ các....................là\nsynchronized",
        o: [
          "method của HashTable",
          "methods của HashTables",
          "HashTable của method",
          "tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 271: LinkedHashMap?",
        o: [
          "Là HashMap nhưng các phần tử được sắp xếp đúng như thứ tự insert vào map",
          "Là HashMap nhưng các đối tượng được sắp xếp đúng như thứ tự insert vào map",
          "Là HashMap nhưng các thành phần được sắp xếp đúng như thứ tự insert vào map",
          "Là HashMap nhưng các toán tử được sắp xếp đúng như thứ tự insert vào map",
        ],
        a: 0,
      },
      {
        q: "Câu 272: Các phần tử của TreeMap được sắp xếp theo thứ tự....................tự nhiên (natural order) của\ncác key",
        o: ["so sánh", "đối xứng", "trước sau", "tuần tự"],
        a: 0,
      },
      {
        q: "Câu 273: Những interface cơ bản trong Java Collections Framework?",
        o: ["tất cả đều đúng", "Collection", "Set", "List , Map"],
        a: 0,
      },
      {
        q: 'Câu 274: Collection, biểu thị cho...................., những đối tuợng này đưọc gọi là phần tử của tập hợp "',
        o: [
          "nhóm các đối tuợng",
          "mảng các đối tuợng",
          "vài các đối tuợng",
          "rất nhiều các đối tuợng",
        ],
        a: 0,
      },
      {
        q: "Câu 275: Set, là một tập hợp mà....................những phần từ trùng nhau.",
        o: ["không chứa", "có chứa", "tất cả đều đúng", "tất cả đều sai"],
        a: 0,
      },
      {
        q: "Câu 276: List, là một tập hợp....................và có thể chứa những phần tử trùng nhau.",
        o: ["đã sắp sếp", "chưa sắp sếp", "tất cả đều đúng", "tất cả đều sai"],
        a: 0,
      },
      {
        q: "Câu 277: Map, là....................mà ánh xạ các khoá vào các giá trị và không chứa những\nKhoá trùng nhau",
        o: [
          "là một đối tuợng",
          "là vài đối tuợng",
          "là nhóm đối tuợng",
          "là danh sách đối tuợng",
        ],
        a: 0,
      },
      {
        q: "Câu 278: Priority queue?",
        o: [
          "Hàng đợi ưu tiên",
          "hàng đợi chưa sắp xếp",
          "hàng đợi hỗn hợp",
          "một danh sách",
        ],
        a: 0,
      },
      {
        q: "Câu 279: Priority queue(hàng đợi ưu tiên) Thứ tự truy xuất các phần tử....................của\nchúng.",
        o: [
          "phụ thuộc vào giá trị",
          "phụ thuộc vào kiểu",
          "phụ thuộc vào toán tử",
          "phụ thuộc vào phạm vi",
        ],
        a: 0,
      },
      {
        q: "Câu 280: Các phần tử được truy xuất theo thứ tự .....",
        o: [
          "First In First Out (FIFO)",
          "Last In First Out (LIFO)",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 281: Các phương thức của Queue .",
        o: [
          "tất cả đều đúng",
          "offer() , peek ()",
          "poll() , remove()",
          "element ()",
        ],
        a: 0,
      },
      {
        q: "Câu 282: Lớp PriorityQueue? .",
        o: [
          "tất cả đều đúng",
          "Các phần tử được sắp xếp theo thứ tự tự nhiên hoặc dựa vào một comparator",
          "Không chấp nhận phần tử có giá trị null",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 283: Các phương thức của PriorityQueue .",
        o: [
          "tất cả đều đúng",
          "add(), clear()",
          "offer() , peek() , poll()",
          "remove(), size(),comparator()",
        ],
        a: 0,
      },
      {
        q: "Câu 284: Sự khác nhau giữa Array và ArrayList?",
        o: [
          "Array có thể chứa kiểu dữ liệu cơ bản và đối tưọng, trong khi ArrayList chỉ chứa đối tuợng",
          "Array không chứa kiểu dữ liệu cơ bản và đối tưọng, trong khi ArrayList chỉ chứa đối tuợng",
          "Array không chứa kiểu dữ liệu đối tưọng, trong khi ArrayList chỉ chứa đối tuợng",
          "Array có thể chứa kiểu dữ liệu đối tưọng, trong khi ArrayList chỉ chứa đối tuợng",
        ],
        a: 0,
      },
      {
        q: "Câu 285: Sự khác nhau giữa Array và ArrayList?",
        o: [
          "Array cố định số luợng phần từ, ArrayList thì động",
          "ArrayList cố định số luợng phần từ, Array thì động",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 286: Thế nào là Priority Queue? => PriorityQueue là...................., dựa trên\npriority heap và phần tử của nó đuợc sắp sắp theo trật tự ban đầu.",
        o: [
          "một queue(hàng đợi) không giới hạn (unbound)",
          "một queue(hàng đợi) có giới hạn (unbound)",
          "tất cả đều sai",
          "tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 287: Khác biệt giữa mảng có thứ tự và mảng không thứ tự? . Lợi ích chính của mảng có thứ tự là\nthời gian tìm kiếm có độ phức tạp là....................trong\nKhi mảng không có thứ tự sẽ là ..........",
        o: [
          "O(logn)....................O(n)",
          "O(n)....................O(logn)",
          "tất cả đều đúng",
          "tất cả đều sai",
        ],
        a: 0,
      },
      {
        q: "Câu 288: Collection là?",
        o: [
          "kiểu dữ liệu tập hợp cho phép lưu trữ và thao tác với một nhóm đối tượng",
          "kiểu dữ liệu tập hợp cho phép lưu trữ và thao tác với hai nhóm đối tượng",
          "kiểu dữ liệu tập hợp cho phép lưu trữ và thao tác với ba nhóm đối tượng",
          "kiểu dữ liệu tập hợp cho phép lưu trữ và thao tác với bốn nhóm đối tượng",
        ],
        a: 0,
      },
      {
        q: "Câu 289: Map là 1 interface độc lập....................kế thừa từ Collection.",
        o: ["không", "có", "tất cả đều đúng", "tất cả đều sai"],
        a: 0,
      },
    ],
  },
];

export default QUIZ_SETS_JAVA_NANG_CAO;
