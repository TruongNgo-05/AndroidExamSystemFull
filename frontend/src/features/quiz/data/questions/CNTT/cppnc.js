const QUIZ_SETS_CPP_NANG_CAO = [
  {
    id: "cpp_nang_cao",
    majorId: "cntt",
    title: "Lập trình C++ nâng cao",
    description: "Ôn tập C++ nâng cao",
    questions: [
      {
        q: "Câu 1: Cho đoạn chương trình sau\n#include   <iostream.h>\nint main (void) {\n    cout << “Dai hoc Kinh doanh va Cong nghe Ha Noi”;\n    return 0;\n}\nLệnh #include dùng để làm gì?",
        o: [
          "Sử dụng thư viện iostream.h.",
          "Lấy code viết sẵn của chương trình khác đưa vào chương trình.",
          "Liên kết file iostream.h",
          "Đọc file iostream.h",
        ],
        a: 0,
      },
      {
        q: "Câu 2: Cho đoạn chương trình sau\n#include   <iostream.h>\nint main (void) \n{\n    cout << “Dai hoc Kinh doanh va Cong nghe Ha Noi”;\n    return 0;\n}\nMột chương trình C++ có bao nhiêu hàm main?",
        o: ["1", "2", "3", "4"],
        a: 0,
      },
      {
        q: "Câu 3: Đối tượng là gì?",
        o: [
          "Là một thực thể",
          "Là một khuôn mẫu được tạo ra trong phần mềm",
          "Là biểu diễn của một thực thể trong thế giới thực của phần mềm",
          "Là nhóm thực thể có thuộc tính chung",
        ],
        a: 2,
      },
      {
        q: "Câu 4: Lớp là gì?",
        o: [
          "Là một khuôn mẫu hoặc bản vẽ định nghĩa trạng thái và hành vi của tất cả các đối tượng thuộc về lớp đó",
          "Là một khuôn mẫu định nghĩa trong phần mềm",
          "Là một dạng hàm của chương trình",
          "Là khuôn mẫu hoặc bản vẽ định nghĩa các hàm giao tiếp với người dùng của chương trình hướng đối tượng",
        ],
        a: 0,
      },
      {
        q: "Câu 5: Các file .h trong C++ có tác dụng gì?",
        o: [
          "Thư viện mã nguồn của C++",
          "Các file header chứa các định nghĩa sẵn hỗ trợ cho việc lập trình C++",
          "Các chương trình đã được mã hóa, nhằm hỗ trợ cho việc lập trình C++",
          "Một bộ phận của trình biên dịch C++",
        ],
        a: 1,
      },
      {
        q: "Câu 6: Một khối lệnh trong C++ được biểu diễn dưới dạng nào?",
        o: ["{}", "[ ]", "< >", "Tất cả đáp án đều sai"],
        a: 0,
      },
      {
        q: "Câu 7: File C++ sau khi biên dịch có đuôi là gì?",
        o: [".C", ".EXE", ".BAK", ".CPP"],
        a: 1,
      },
      {
        q: "Câu 8: Đối tượng luồng nhập chuẩn nào trong C++ thường được dùng với toán tử >> để đọc dữ liệu từ bàn phím?",
        o: ["cout", "cin", "printf", "getline"],
        a: 1,
      },
      {
        q: "Câu 9: Lệnh nào sau đây dùng để in dữ liệu chuẩn trong C++?",
        o: ["cout", "cin", "printf", "getline"],
        a: 0,
      },
      {
        q: "Câu 10: Câu nào sau đây là SAI?",
        o: [
          "Lớp là một mô hình khái niệm",
          "Lớp là một thực thể trong thế giới thực",
          "Đối tượng là một vật thể thực",
          "Đối tượng là một đại diện của lớp",
        ],
        a: 1,
      },
      {
        q: "Câu 11: Trong các khai báo dưới đây, lệnh nào khai báo biến số nguyên?",
        o: [
          "signed songuyen;",
          "byte songuyen;",
          "unsigned long;",
          "signed int;",
        ],
        a: 0,
      },
      {
        q: "Câu 12: Trong các khai báo dưới đây, lệnh nào khai báo số nguyên có dấu?",
        o: [
          "unsigned short number ;",
          "short number ;",
          "unsigned long;",
          "signed byte number",
        ],
        a: 1,
      },
      {
        q: "Câu 13: Chọn phát biểu ĐÚNG?",
        o: [
          "Hàm thành viên biểu diễn hành vi của lớp",
          "Trường dữ liệu biểu diễn trạng thái của một đối tượng",
          "Trường dữ liệu là đại diện của lớp",
          "Hàm thành viên biểu diễn trạng thái của một đối tượng",
        ],
        a: 0,
      },
      {
        q: "Câu 14: Cho class tinhtong được định nghĩa như sau:\nclass tinhtong {\nint a,b;\npublic: int tong(void);\n};\nHai biến a, b có quyền truy cập là gì?",
        o: ["public", "private", "protected", "Tất cả các quyền"],
        a: 1,
      },
      {
        q: "Câu 15: Khai báo nào sau đây là SAI?",
        o: [
          "char kytu = “A”;",
          "char kytu = 28;",
          "signed char offset = -88;",
          "char kytu[ ] = “sinh vien”;",
        ],
        a: 0,
      },
      {
        q: "Câu 16: Lệnh nào sau đây sẽ báo lỗi khi biên dịch?",
        o: [
          "signed int i = 2.9;",
          "float y = y * 2;",
          "signed char = -1782;",
          "Không báo lỗi",
        ],
        a: 2,
      },
      {
        q: "Câu 17: Một lớp trong C++ có bao nhiêu lớp con?",
        o: ["2", "3", "4", "Vô số"],
        a: 3,
      },
      {
        q: "Câu 18: Tên nào sau đây là KHÔNG hợp lệ?",
        o: [
          "int _static;",
          "int average_weight_of_large_size;",
          "int object.oriented;",
          "int variable ;",
        ],
        a: 2,
      },
      {
        q: "Câu 19: Khai báo nào sau đây là hợp lệ?",
        o: [
          "int default;",
          "int 2by2;",
          "int object.oriented;",
          "int gross$income;",
        ],
        a: 3,
      },
      {
        q: "Câu 20: Một lớp trong C++ có thể có bao nhiêu lớp cha?",
        o: ["1", "2", "10", "Vô số"],
        a: 3,
      },
      {
        q: "Câu 21: Định nghĩa nào sau đây là định nghĩa về tính đóng kín trong lập trình hướng đối tượng của C++?",
        o: [
          "Tiến trình che dấu việc thực thi chi tiết một đối tượng",
          "Các hành động và thuộc tính định nghĩa trong một lớp có thể được thừa kế hoặc sử dụng lại bởi các lớp khác.",
          "Nhiều hình thức, hành động cùng tên có thể được thực hiện khác nhau đối với các đối tượng hoặc các lớp các khác nhau.",
          "Không có định nghĩa đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 22: Định nghĩa nào sau đây là định nghĩa về tính kế thừa trong lập trình hướng đối tượng của C++?",
        o: [
          "Tiến trình che dấu việc thực thi chi tiết một đối tượng",
          "Các hành động và thuộc tính định nghĩa trong một lớp có thể được thừa kế hoặc sử dụng lại bởi các lớp khác.",
          "Nhiều hình thức, hành động cùng tên có thể được thực hiện khác nhau đối với các đối tượng hoặc các lớp các khác nhau.",
          "Không có định nghĩa đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 23: Định nghĩa nào sau đây là định nghĩa về tính đa hình trong lập trình hướng đối tượng của C++?",
        o: [
          "Tiến trình che dấu việc thực thi chi tiết một đối tượng",
          "Các hành động và thuộc tính định nghĩa trong một lớp có thể được thừa kế hoặc sử dụng lại bởi các lớp khác.",
          "Nhiều hình thức, hành động cùng tên có thể được thực hiện khác nhau đối với các đối tượng hoặc các lớp các khác nhau.",
          "Không có định nghĩa đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 24: Con trỏ là gì?",
        o: [
          "Một biến chứa giá trị kiểu số thực, số nguyên hoặc ký tự",
          "Một biến chứa địa chỉ của biến khác",
          "Một biến có kiểu struct",
          "Một biến khai báo trong hàm",
        ],
        a: 1,
      },
      {
        q: "Câu 25: Trường dữ liệu tĩnh (static) còn gọi là gì?",
        o: ["Biến đại diện", "Biến lớp", "Biến cục bộ", "Biến toàn cục"],
        a: 3,
      },
      {
        q: "Câu 26: Trong các câu sau, câu nào biểu diễn địa chỉ của biến p?",
        o: ["*p", "&p", "p = new int;", "delete p;"],
        a: 1,
      },
      {
        q: "Câu 27: Lập trình hướng đối tượng là gì?",
        o: [
          "Chương trình thực hiện lần lượt các lệnh từ trên xuống dưới",
          "Chia nhỏ bài toán lớn thành các module và thực hiện việc lập trình các module đó. Sau đó ghép các kết quả của các module lại để thu được kết quả cuối cùng của bài toán",
          "Phương pháp thiết kế và phát triển phần mềm dựa trên kiến trúc lớp và đối tượng",
          "Tất cả các đáp án đều đúng",
        ],
        a: 2,
      },
      {
        q: "Câu 28: Trong lập trình hướng đối tượng, thành viên có quyền private có nghĩa:",
        o: [
          "Chỉ cho phép thành viên của chính lớp đó sử dụng",
          "Cho phép thành viên của chính lớp đó và lớp con của lớp đó sử dụng",
          "Cho phép tất cả các thành viên khác trong chương trình sử dụng",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 29: Trạng thái của đối tượng trong thế giới thực mô tả trong lập trình hướng đối tượng của C++ được gọi là gì?",
        o: [
          "Dữ liệu thành viên",
          "Hàm thành viên",
          "Kiểu dữ liệu",
          "Hàm dữ liệu",
        ],
        a: 0,
      },
      {
        q: "Câu 30: Các hành vi của đối tượng trong thế giới thực mô tả trong lập trình hướng đối tượng C++ được gọi là gì?",
        o: ["Dữ liệu thành viên", "Hàm thành viên", "Thuộc tính", "Hành động"],
        a: 1,
      },
      {
        q: 'Câu 31: Đoạn lệnh sau cho kết quả là bao nhiêu:\nfor (int i = 1; i <= 5; i++)\n    cout << i << ", " ;\ncout << "LAUNCH!" << endl;\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.',
        o: [
          "1, 2, 3, 4, 5, LAUNCH!",
          "0, 1, 2, 3, 4, LAUNCH!",
          "5, 4, 3, 2, 1, LAUNCH!",
          "4, 3, 2, 1, 0, LAUNCH!",
        ],
        a: 0,
      },
      {
        q: 'Câu 32: Đoạn lệnh sau cho kết quả là bao nhiêu:\nfor (int i = 5; i >= 1; i--)\n    cout << i << ", " ;\ncout << "LAUNCH!" << endl;\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.',
        o: [
          "1, 2, 3, 4, 5, LAUNCH!",
          "0, 1, 2, 3, 4, LAUNCH!",
          "5, 4, 3, 2, 1, LAUNCH!",
          "4, 3, 2, 1, 0, LAUNCH!",
        ],
        a: 2,
      },
      {
        q: "Câu 33: Cho đoạn mã sau:\nint i = 5;\nfor (i = 1; i < 5; i++) {\n    if (i == 3) continue;\n    cout << i << “, “;\n}\ncout << “END” << endl;\nĐoạn lệnh trên cho kết quả là bao nhiêu?",
        o: [
          "1, 2, 3, 4, 5, END",
          "1, 2, 4, END",
          "1, 2, 3, 4, END",
          "1, 2, 4, 5, END",
        ],
        a: 1,
      },
      {
        q: "Câu 34: Khi định nghĩa hàm thành viên ở ngoài lớp, ta dùng cú pháp nào?",
        o: [
          "Kiểu_trả_về_của_hàm Tên_lớp:Tên_hàm(danh sách tham số) {[nội dung hàm]}",
          "Kiểu_trả_về_của_hàm Tên_hàm:Tên_lớp(danh sách tham số) {[nội dung hàm]}",
          "Kiểu_trả_về_của_hàm Tên_hàm(danh sách tham số) {[nội dung hàm]}",
          "Kiểu_trả_về_của_hàm Tên_lớp::Tên_hàm(danh sách tham số) {[nội dung hàm]}",
        ],
        a: 3,
      },
      {
        q: "Câu 35: Cho đoạn mã sau:\n#include <iostream.h>\nint main()\nint a = 5;\n++a;\ncout << a;\nreturn 0;\n}\nKết quả khi in ra a là bao nhiêu?",
        o: ["5", "6", "4", "7"],
        a: 1,
      },
      {
        q: "Câu 36: Cho đoạn mã sau:\n#include <iostream.h>\nint main()\nint a = 5;\na++;\ncout << a;\nreturn 0;\n}\nKết quả khi in ra a là bao nhiêu?",
        o: ["5", "6", "4", "7"],
        a: 1,
      },
      {
        q: "Câu 37: Kết quả là bao nhiêu khi thực hiện đoạn lệnh sau:\n#include <iostream.h>\nint main() {\nint a = 5;\ncout << a++;\nreturn 0;\n}",
        o: ["4", "5", "6", "7"],
        a: 1,
      },
      {
        q: "Câu 38: Kết quả là bao nhiêu khi thực hiện đoạn lệnh sau:\n#include <iostream.h>\nint main() {\nint a = 5;\ncout << ++a;\nreturn 0;\n}",
        o: ["4", "5", "6", "7"],
        a: 2,
      },
      {
        q: "Câu 39: Kết quả khi thực hiện đoạn lệnh trên là bao nhiêu?\nchar hoten[] = “Dai hoc Kinh doanh va Cong nghe Ha noi”; \nint l = strlen(hoten);\ncout << ++l << endl;",
        o: ["37", "38", "39", "Đoạn lệnh báo lỗi"],
        a: 1,
      },
      {
        q: "Câu 40: Kết quả khi thực hiện đoạn lệnh trên là bao nhiêu?\nclass nhanvien {\n    double luong;\n    public:\n      void setLuong(double d) { luong = d; }\n      double getLuong() { return luong; }\n      void tangLuong(double d) { luong += d; }\n}\nclass quanly:public nhanvien {\n  double phucap;\n  public: quanly() { \n  setLuong(100); \n  phucap = getLuong() * 0.5 \n  cout << phucap;\n  }\n};\nvoid main() { quanly q; }",
        o: [
          "Không hiện gì hết",
          "50",
          "0",
          "Chương trình báo lỗi vì lớp nhanvien không có hàm constructor nào cả",
        ],
        a: 1,
      },
      {
        q: "Câu 41: Kế thừa là gì?",
        o: [
          "Tiến trình che dấu việc thực thi chi tiết một đối tượng",
          "Các hành động và thuộc tính định nghĩa trong một lớp có thể được tái sử dụng lại bởi các lớp khác",
          "Nhiều hình thức, hành động cùng tên có thể được thực hiện khác nhau đối với  các đối tượng hoặc các lớp khác nhau",
          "Không có kết quả đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 42: Con trỏ là gì?",
        o: [
          "Biến chứa giá trị kiểu số nguyên, số thực hoặc ký tự",
          "Biến có kiểu struct",
          "Biến chứa địa chỉ của biến khác",
          "Biến được khai báo ở bên trong hàm và luôn giữ giá trị không đổi",
        ],
        a: 2,
      },
      {
        q: "Câu 43: Cho đoạn lệnh sau:\nclass nhanvien {\n    double luong;\n    public:\n      void setLuong(double d) { luong = d; }\n      double getLuong() { return luong; }\n      void tangLuong(double d) { luong += d; } \n}\nint main() {\n  nhanvien A;\n  A.setLuong(700); \n  A.tangLuong(10); \n  cout << A.getLuong(); \n} \nKhi chạy chương trình cho kết quả là bao nhiêu?",
        o: ["700", "770", "0", "710"],
        a: 3,
      },
      {
        q: "Câu 44: Khi chạy chương trình cho kết quả là bao nhiêu\nclass nhanvien {\n    double luong;\n    public:\n      void setLuong(double d) { luong = d; }\n      double getLuong() { return luong; }\n      void tangLuong(double d) { luong += d; }\n}\nint main() {\n  nhanvien A, *p;\n  p = &A; \n  p->setLuong(100); \n  cout << p->luong; \n}",
        o: ["100", "0", "110", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 45: Hàm constructor là gì?",
        o: [
          "Là hàm tự động được gọi bất kỳ khi nào một đối tượng mới của lớp được tạo ra",
          "Là hàm được gọi sau khi thực hiện xong tất cả các hàm thành viên của lớp",
          "Là hàm được định nghĩa ở bên ngoài lớp và chịu trách nhiệm xoá các thành viên của lớp",
          "Không có đáp án đúng",
        ],
        a: 0,
      },
      {
        q: "Câu 46: Cho khối lệnh như sau:\nswitch (thu) {\n    case 2:\n        cout <<“Van, Toan”;\n        break;\n    case 3:\n        cout << “Hoa, Ly”;\n        break;\n    default:\n        cout << “Ngay nghi”;\n        break;\n}\nKhối lệnh trên sẽ cho kết quả là bao nhiêu nếu ta nhập thu = 1?",
        o: ["Van, Toan", "Hoa, Ly", "Ngay nghi", "Không có đáp án đúng"],
        a: 2,
      },
      {
        q: "Câu 47: Cho khối lệnh như sau:\nswitch (thu) {\n    case 2:\n        cout << “Van, Toan”;\n        break;\n    case 3:\n        cout << “Hoa, Ly”;\n        break;\n    default:\n        cout << “Ngay nghi”;\n        break;\n}\nKhối lệnh trên sẽ cho kết quả là bao nhiêu nếu ta nhập thu = 2?",
        o: ["Van, Toan", "Hoa, Ly", "Ngay nghi", "Không có đáp án đúng"],
        a: 0,
      },
      {
        q: "Câu 48: Cho khối lệnh như sau:\nswitch (thu) {\n    case 2:\n        cout << “Van, Toan”;\n        break;\n    case 3:\n        cout << “Hoa, Ly”;\n        break;\n    default:\n        cout << “Ngay nghi”;\n        break;\n}\nKhối lệnh trên sẽ cho kết quả là bao nhiêu nếu ta nhập thu = 3?",
        o: ["Van, Toan", "Hoa, Ly", "Ngay nghi", "Không có đáp án đúng"],
        a: 1,
      },
      {
        q: "Câu 49: Cho khối lệnh như sau:\nenum mausac { DEN, LAM, LUC, TRANG };\nmausac color;\nchar * t;\nswitch (color) {\n    case 0:\n        t = “Mau trang”;\n        break;\n    case 1:\n        t = “Mau den”;\n        break;\n    case 2: \n        t = “Mau lam”;\n        break;\n    case 3:\n        t = “Mau luc”;\n        break;\n    default:\n        t = “Khong co trong danh sach mau”;\n        break;\n}\ncout << t;\nNếu cho color = DEN thì đoạn lệnh trên in kết quả là bao nhiêu?",
        o: [
          "Mau trang.",
          "Mau den.",
          "Mau luc.",
          "Khong co trong danh sach mau.",
        ],
        a: 0,
      },
      {
        q: "Câu 50: Cho khối lệnh như sau:\nenum mausac { DEN = 3, LAM, LUC, TRANG };\nmausac color;\nchar * t;\nswitch (color) {\n    case 0:\n        t = “Mau trang”;\n        break;\n    case 1:\n        t = “Mau den”;\n        break;\n    case 2: \n        t = “Mau lam”;\n        break;\n    case 3:\n        t = “Mau luc”;\n        break;\n    default:\n        t = “Khong co trong danh sach mau”;\n        break;\n}\ncout << t;\nNếu cho color = DEN thì đoạn lệnh trên in kết quả là bao nhiêu?",
        o: ["Mau den", "Mau lam", "Mau trang", "Mau luc"],
        a: 3,
      },
      {
        q: "Câu 51: Cho khối lệnh sau:\nint s = 0;\nfor (int i = 0; i < 10; i++)\n    s+=i;\ncout << s << endl;\nKhi thực hiện khối lệnh trên sẽ cho kết quả là bao nhiêu?",
        o: ["45", "0", "55", "Không có kết quả đúng"],
        a: 0,
      },
      {
        q: "Câu 52: Cho khối lệnh sau:\nint s = 0;\nfor (int i = 0; i <= 10; i++)\n    s+=i;\ncout << s << endl;\nKhi thực hiện khối lệnh trên sẽ cho kết quả là bao nhiêu?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["45", "55", "0", "Chương trình báo lỗi"],
        a: 1,
      },
      {
        q: "Câu 53: Cho khối lệnh sau:\nint s = 0;\nfor (int i = 1; i < 10; i++)\n    s+=i;\ncout << i << end;\nKhi thực hiện khối lệnh trên sẽ cho kết quả là bao nhiêu?",
        o: ["45", "55", "Chuong trinh báo lỗi", "0"],
        a: 2,
      },
      {
        q: "Câu 54: Cho khối lệnh sau (không có biến hoặc hàm nào tên end được khai báo):\nint i = 0;\nint s = 0;\nfor (int i = 0; i < 10; i++)\n    s+=i;\ncout << i << end;\nKhi thực hiện khối lệnh trên sẽ cho kết quả là bao nhiêu?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["45", "Chương trình báo lỗi", "55", "0"],
        a: 1,
      },
      {
        q: "Câu 55: Khi thực hiện khối lệnh sẽ cho kết quả là bao nhiêu?\nint i=0;\ndo {\n    i += 1;\n} while (i == 0);\ncout << i << endl;",
        o: ["0", "1", "2", "Tất cả đều sai."],
        a: 1,
      },
      {
        q: "Câu 56: Khối lệnh sai ở dòng nào?\n1. int i=0;\n2. do {\n3.     i += 1;\n4. } while (i == 0);\n5. cout << i;",
        o: ["1", "2 và 3", "4", "Không sai ở dòng nào cả"],
        a: 3,
      },
      {
        q: "Câu 57: s có kết quả là bao nhiêu khi thực hiện khối lệnh?\nint i = 0;\nint s = 0;\nfor ( ; ; ) {\n    if  (i == 3) break;\n    s = s + i;\n    i++;\n}",
        o: ["6", "3", "Chương trình báo lỗi", "Không có đáp án đúng."],
        a: 1,
      },
      {
        q: "Câu 58: Chương trình sai ở dòng nào?\n1. int i = 0;\n2. int s = 0;\n3. for ( ; ; ) {\n4.     if  i == 3 break;\n5.     s = s + i;\n6.     i++;\n7. }",
        o: ["4", "1 và 2", "6", "Không sai dòng nào hết"],
        a: 0,
      },
      {
        q: "Câu 59: Cho đoạn chương trình sau:\ndouble i = 0, n = 10;\nwhile (i < n) {\n    double s = s + n;\n    n--;\n}\ncout << s;\nĐoạn lệnh trên cho kết quả là bao nhiêu khi chạy?",
        o: ["0", "55", "Chương trình lỗi", "45"],
        a: 2,
      },
      {
        q: "Câu 60: Cho đoạn chương trình sau:\ndouble i = 0, n = 10, s = 0;\nwhile (i < n) {\n    double s = s + n;\n    n--;\n}\ncout << s;\nĐoạn lệnh trên cho kết quả là bao nhiêu khi chạy?",
        o: ["0", "55", "45", "Chương trình báo lỗi"],
        a: 0,
      },
      {
        q: "Câu 61: Chương trình thực hiện công việc gì?\n#define    length(a)   (sizeof(a) / sizeof(*a))\nint main() {\n    int mang[] = {12, 37, 48, 51, 2, 9};\n    int tk = 51, i;\n    bool check = false;\n    for (i = 0; i < length(mang); i++) {\n        if (mang[i] == tk) {\n            check = true;\n            break;\n        }\n    }\n    if (check) cout << “Found “ << tk << “ at index “ << i << endl;\n    else cout <<“Not found”;\n    return 0;\n}",
        o: [
          "Tìm 1 phần tử trong mảng.",
          "So sánh các phần tử mảng với nhau.",
          "Tính tổng mảng.",
          "Chương trình báo lỗi.",
        ],
        a: 0,
      },
      {
        q: "Câu 62: Chương trình sai ở dòng nào?\n1.define   length(a)   (sizeof(a) / sizeof(*a))\n2.int main() {\n3. int mang[] = {12, 37, 48, 51, 2, 9};\n4. int tk = 51, i;\n5. bool check = false;\n6. for (i = 0; i < length(mang); i++) {\n7.     if (mang[i] = tk) {\n8.         check = true;\n9.         break;\n10.        }\n11.    }\n12.    cout << i ;\n14.    return 0;\n15.}",
        o: ["1, 3", "1, 7", "3, 5, 6", "Chương trình không sai."],
        a: 1,
      },
      {
        q: "Câu 63: Đoạn lệnh sau cho kết quả là bao nhiêu:\nchar chuoi[] = “peter pan put a pepper into pen”;\nint max = strlen(chuoi);\nint number = 0;\nfor (int i = 0; i < max; i++) {\n    if (chuoi[i] != 'p') continue;\n    number++;\n}\ncout << number << endl;",
        o: ["7", "8", "9", "Chương trình báo lỗi"],
        a: 0,
      },
      {
        q: "Câu 64: Đoạn lệnh sau cho kết quả là bao nhiêu:\nchar chuoi[] = “hoi dong dang di den huyen dinh dong”;\nint max = strlen(chuoi);\nint number = 0;\nfor (int i = 0; i < max; i++) {\n    if (chuoi[i] != 'd') continue;\n    number++;\n}\ncout << number << endl;",
        o: ["7", "6", "3", "Chương trình báo lỗi"],
        a: 1,
      },
      {
        q: "Câu 65: Đoạn lệnh sau in ra kết quả bao nhiêu:\nvoid indl (int *a) {\n    cout << *a;\n}\nint main() {\n    int a = 10;\n    indl (&a);\n    return 0;\n}",
        o: ["10", "11", "Địa chỉ của a", "Địa chỉ của bộ nhớ đứng trưóc a"],
        a: 0,
      },
      {
        q: "Câu 66: Đoạn lệnh sau in ra kết quả bao nhiêu:\nvoid indl (int *a) {\n    cout << ++*a;\n}\nint main() {\n    int a = 10;\n    indl (&a);\n    return 0;\n}",
        o: ["9", "10", "11", "Địa chỉ của biến a"],
        a: 2,
      },
      {
        q: "Câu 67: Đoạn lệnh sau in ra kết quả bao nhiêu:\nvoid indl (int a[4]) {\n    int *p = &a[1];\n    cout << *(p++);\n}\nint main() {\n    int a[4] = { 1, 2, 3, 4 };\n    indl (a);\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["1", "2", "3", "4"],
        a: 1,
      },
      {
        q: "Câu 68: Đoạn lệnh sau in ra kết quả bao nhiêu:\nvoid indl (int a[4]) {\n    int *p = &a[1];\n    cout << ++*p;\n}\nint main() {\n    int a[4] = { 2, 4, 6, 8 };\n    indl (a);\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["4", "5", "6", "7"],
        a: 1,
      },
      {
        q: "Câu 69: Đoạn lệnh sau in ra kết quả bao nhiêu:\nvoid indl (int a[4]) {\n    int *p = &a[1];\n    cout << *++p;\n}\nint main() {\n    int a[4] = { 2, 4, 6, 8 };\n    indl (a);\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["4", "5", "6", "7"],
        a: 2,
      },
      {
        q: "Câu 70: Đoạn lệnh sau in ra kết quả bao nhiêu:\nvoid indl (int &a) {\n    a--;\n}\nint main() {\n    int x = 5\n    indl (x);\n    cout << x;\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["4", "5", "6", "Chương trình báo lỗi"],
        a: 3,
      },
      {
        q: "Câu 71: Đoạn lệnh sau in ra kết quả bao nhiêu:\nvoid indl (int *a) {\n    a--;\n}\nint main() {\n    int x = 5\n    indl (x);\n    cout << x;\n    return 0;\n}",
        o: ["4", "5", "6", "Chương trình báo lỗi"],
        a: 3,
      },
      {
        q: "Câu 72: Cho đoạn chương trình sau: \nchar str[40];\ncin.getline (str,40);\nif ( strcmp(str, “Juliet”) == 0) cout << “Same here”;\nelse cout << str;\nNếu nhập vào từ bàn phím chuỗi Juliet, chương trình sẽ in ra kết quả?",
        o: ["Chương trình báo lỗi", "Same here", "str", "Juliet"],
        a: 1,
      },
      {
        q: "Câu 73: Cho đoạn chương trình sau: \nchar str[40];\ncin.getline (str,40);\nif ( strcmp(str, “Juliet”) == 0) cout << “Same here”;\nelse cout << str;\nNếu nhập vào từ bàn phím chuỗi Rome, chương trình sẽ in ra kết quả?",
        o: ["Same here", "Rome", "Chương trình báo lỗi", "Không in ra gì cả"],
        a: 1,
      },
      {
        q: "Câu 74: Cho đoạn chương trình sau: \nchar str[40];\ncin.getline (str,40);\nif ( strcmp(str,”Juliet”) = 0) cout << “Same here”;\nelse cout << str;\nNếu nhập vào từ bàn phím chuỗi Alvata, chương trình sẽ in ra kết quả?",
        o: ["Alvata", "Same here", "Chương trình báo lỗi", "Không in ra gì cả"],
        a: 2,
      },
      {
        q: "Câu 75: Cho đoạn chương trình sau: \nchar str[40];\ncin.getline (str,40);\nif ( strcmp(str, “Rome”) == 0) cout << “Same here”;\nelse cout << str;\nNếu nhập vào từ bàn phím chuỗi Rome, chương trình sẽ in ra kết quả?",
        o: ["Rome", "Chương trình báo lỗi", "Same here", "str"],
        a: 2,
      },
      {
        q: "Câu 76: Cho khối lệnh sau:\nint i = 10;\nint n = ++i%5;\nSau khi thực hiện khối lệnh, kết quả sẽ là:\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["i = 10, n = 0", "i = 11, n = 0", "i = 10, n = 1", "i = 11, n = 1"],
        a: 3,
      },
      {
        q: "Câu 77: Đoạn lệnh sau in ra kết quả nào?\nint s = 0;\nstring str;\nfor (int i = 0; i < 5; i++) {\n    int k = 0;\n    k += i;\n    s = k;\n}\nstr = ((k % 2 == 0) ? “true” : “false”;\ncout << str << endl;",
        o: ["true", "false", "Chương trình lỗi", "Không in ra gì cả"],
        a: 2,
      },
      {
        q: "Câu 78: Mảng là gì?",
        o: [
          "Là một đối tượng chứa các một số hữu hạn các giá trị cùng kiểu.",
          "Là một biến chứa các giá trị cùng kiểu.",
          "Là một biến chứa một số hữu hạn các giá trị cùng kiểu.",
          "Tất cả đều sai.",
        ],
        a: 2,
      },
      {
        q: "Câu 79: Đoạn lệnh sau in ra kết quả nào?\nint s = 0;\nstring str;\nfor (int i = 0; i < 5; i++) {\n    int k = 0;\n    k += i;\n    s = k;\n}\nstr = ((s % 2) == 0) ? “true” : “false”;\ncout << str << endl;",
        o: ["true", "false", "Không in ra gì cả", "Chương trình lỗi"],
        a: 0,
      },
      {
        q: "Câu 80: Chương trình sau in ra kết quả là bao nhiêu:\nconst int row = 3;\nconst int col = 4;\nint seasonTemp[row][col] = {\n    { 26, 34, 22, 17 },\n    { 24, 32, 19, 13 },\n    { 28, 38, 25, 20 }\n};\nint functionM (int temp[row][col]) {\n    int m = 0;\n    for (int i = 0; i < row; i++)\n    for (int j = 0; j < col; j++)\n        if (temp[i][j] > m) m = temp[i][j];\n    return m;\n}\nint main() {\n    cout << functionM (seasonTemp) << endl;\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["38", "13", "0", "60"],
        a: 0,
      },
      {
        q: "Câu 81: Chương trình sau in ra kết quả là bao nhiêu:\nconst int row = 3;\nconst int col = 4;\nint seasonTemp[row][col] = {\n    { 26, 34, 22, 17 },\n    { 24, 32, 19, 13 },\n    { 28, 38, 25, 20 }\n};\nint functionM (int temp[row][col]) {\n    int m = 0;\n    for (int i = 0; i < row; i++)\n    for (int j = 0; j < col; j++)\n        if (temp[i][j] < m) m = temp[i][j];\n    return m;\n}\nint main() {\n    cout << functionM (seasonTemp) << endl;\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["38", "13", "0", "60"],
        a: 2,
      },
      {
        q: "Câu 82: Chương trình sau in ra kết quả là bao nhiêu:\nconst int row = 3;\nconst int col = 4;\nint seasonTemp[row][col] = {\n    { 26, 34, 22, 17 },\n    { 24, 32, 19, 13 },\n    { 28, 38, 25, 20 }\n};\nint functionM (int temp[row][col]) {\n    int m = 0;\n    for (int i = 0; i < row; i++)\n    for (int j = 0; j < col; j++)\n        if (temp[i][j] > m) m += temp[i][j];\n    return m;\n}\nint main() {\n    cout << functionM (seasonTemp) << endl;\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["38", "264", "0", "60"],
        a: 3,
      },
      {
        q: "Câu 83: Chương trình sau in ra kết quả là bao nhiêu:\nconst int row = 3;\nconst int col = 4;\nint seasonTemp[row][col] = {\n    { 26, 34, 22, 17 },\n    { 24, 32, 19, 13 },\n    { 28, 38, 25, 20 }\n};\nint functionM (int temp[row][col]) {\n    int m = temp[0][0];\n    for (int i = 0; i < row; i++)\n    for (int j = 0; j < col; j++)\n        if (temp[i][j] < m) m += temp[i][j];\n    return m;\n}\nint main() {\n    cout << functionM (seasonTemp) << endl;\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["264", "60", "0", "38"],
        a: 0,
      },
      {
        q: "Câu 84: Chương trình sau in ra kết quả là bao nhiêu:\nconst int row = 3;\nconst int col = 4;\nint seasonTemp[row][col] = {\n    { 26, 34, 22, 17 },\n    { 24, 32, 19, 13 },\n    { 28, 38, 25, 20 }\n};\nint functionM (int temp[row][col]) {\n    int m = 38;\n    for (int i = 0; i < row; i++)\n    for (int j = 0; j < col; j++)\n        if (temp[i][j] < m) m = temp[i][j];\n    return m;\n}\nint main() {\n    cout << functionM (seasonTemp) << endl;\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["38", "264", "0", "13"],
        a: 3,
      },
      {
        q: "Câu 85: Biến message sau đây có kết quả là:\nstring expletive = “Expletive “;\nstring PG13 = “deleted”;\nstring message = expletive + PG13;",
        o: [
          "Expletive deleted",
          "Expletivedeleted",
          "deletedExpletive",
          "Chương trình báo lỗi",
        ],
        a: 0,
      },
      {
        q: "Câu 86: Chương trình sau in ra kết quả là bao nhiêu:\nint BinSearch (char *item,char *table[],int n, int (*Sosanh)(const char*,const char*)) {\n    int bot = 0, top = n - 1, mid, cmp;\n    while (bot < top) {\n        mid = (bot + top) / 2;\n        if ((cmp = Sosanh(item,table[mid])) == 0) return mid;\n        else if (cmp < 0) top = mid - 1;\n        else bot = mid + 1;\n    }\n    return -1;\n}\nint main() {\n    char *cities[] = { “Boston”, “London”, “Sydney”, “Tokyo” };\n    cout << BinSearch (“Sydney”,cities,4,strcmp) << endl;\n}",
        o: ["1", "2", "true", "Chương trình báo lỗi"],
        a: 1,
      },
      {
        q: "Câu 87: Chương trình sau thực hiện công việc gì?\nint BinSearch (char *item,char *table[],int n, int (*Sosanh)(const char*,const char*)) {\n    int bot = 0, top = n - 1, mid, cmp;\n    while (bot < top) {\n        mid = (bot + top) / 2;\n        if ((cmp = Sosanh(item,table[mid])) == 0) return mid;\n        else if (cmp < 0) top = mid - 1;\n        else bot = mid + 1;\n    }\n    return -1;\n}\nint main() {\n    char *cities[] = { “Boston”, “London”, “Sydney”, “Tokyo” };\n    cout << BinSearch (“Sydney”,cities,4,strcmp) << endl;\n}",
        o: [
          "Sắp xếp mảng tăng dần",
          "Sắp xếp mảng giảm dần",
          "Tìm kiếm một chuỗi trong mảng chuỗi ký tự",
          "Đếm xem có bao nhiêu thành phần trong mảng chứa chuỗi ký tự cho trước",
        ],
        a: 2,
      },
      {
        q: "Câu 88: Chương trình sau in ra kết quả bao nhiêu\nvoid functionSw (int &x, int &y) {\n    int tmp = x;\n    x = y;\n    y = tmp;\n}\nint main() {\n    int i = 10, j = 20;\n    functionSw (i,j);\n    cout << i << “, “ << j << endl;\n}",
        o: ["10, 20", "20, 10", "Lỗi biên dịch", "0, 0"],
        a: 1,
      },
      {
        q: "Câu 89: Chương trình sau in ra kết quả bao nhiêu\nvoid functionSw (int x, int y) {\n    int tmp = x;\n    x = y;\n    y = tmp;\n}\nint main() {\n    int i = 10, j = 20;\n    functionSw (i,j);\n    cout << i << “, “ << j << endl;\n}",
        o: ["10, 20", "20, 10", "Lỗi biên dịch", "0, 0"],
        a: 0,
      },
      {
        q: 'Câu 90: Chương trình sau in ra kết quả bao nhiêu\nvoid functionSw (int *x, int *y) {\n    int tmp = *x;\n    *x =* y;\n    *y = tmp;\n}\nint main() {\n    int i = 10, j = 20;\n    functionSw (i,j);\n    cout << i << ", " << j << endl;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.',
        o: ["10, 20", "20, 10", "0, 0", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 91: Chương trình sau thực hiện công việc gì?\nchar* ReChar (char* str) {\n    int len = strlen (str);\n    char* ketqua = new char[len+1];\n    for (int i = 0; i < len; i++) ketqua[i] = str[len-i-1];\n    ketqua[len] = '\\0';\n    return ketqua;\n}\nint main() {\n    char p[] = \"178892\";\n    char *result = ReChar(p);\n    cout << result << endl;\n    delete[] result;\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: [
          "Chuyển đổi ký tự thành số",
          "Đảo ngược chuỗi ký tự",
          "Sắp xếp chuỗi ký tự",
          "Không có đáp án đúng",
        ],
        a: 1,
      },
      {
        q: "Câu 92: Chương trình sau hiển thị kết quả nào?\nchar* ReChar (char* str) {\n    int len = strlen (str);\n    char* ketqua = new char[len+1];\n    for (int i = 0; i < len; i++) ketqua[i] = str[len-i-1];\n    ketqua[len] = '\\0';\n    return ketqua;\n}\nint main() {\n    char p[] = \"178892\";\n    char *result = ReChar(p);\n    cout << result << endl;\n    delete[] result;\n    return 0;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["178892", "298871", "127889", "988721"],
        a: 1,
      },
      {
        q: "Câu 93: Cần sửa kiểu dữ liệu trong hai dòng khai báo nào để chương trình sau biên dịch và đảo ngược chuỗi đúng? (Các lỗi phát sinh tại những dòng sử dụng biến không tính là dòng khai báo cần sửa.)\n1. char ReChar (char str) {\n2. int len = strlen (str);\n3. char ketqua = new char[len+1];\n4. for (int i = 0; i < len; i++) ketqua[i] = str[len-i-1];\n5. ketqua[len] = '\\0';\n6. return ketqua;\n7. }\n8. int main() {\n9. char p[] = \"178892\";\n10.    cout << ReChar (p) << endl;\n11.    return 0;\n12.}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["1, 3", "5, 10", "6", "Chương trình không sai"],
        a: 0,
      },
      {
        q: "Câu 94: Đoạn lệnh sau in ra kết quả là bao nhiêu?\nint val1, val2;\nint * pointer;\npointer = &val1;\n*pointer = 10;\npointer = &val2;\n*pointer = 20;\ncout << val1 * val2 << endl;",
        o: ["10 * 20", "200", "20", "Chương trình báo lỗi"],
        a: 1,
      },
      {
        q: "Câu 95: Đoạn lệnh sau in ra kết quả là bao nhiêu?\nint val1, val2;\nint * pointer;\npointer = val1;\n*pointer = 10;\npointer = val2;\n*pointer = 20;\ncout << val1 * val2 << endl;",
        o: ["10 * 20", "200", "20", "Chương trình báo lỗi"],
        a: 3,
      },
      {
        q: "Câu 96: Cho đoạn chương trình sau:\n1. int val1 = 5, val2 = 15;\n2. int *p1, *p2;\n3. p1 = &val1;\n4. p2 = &val2;\n5. *p1 = 10;\n6. *p2 = *p1;\n7. p1 = p2;\n8. *p2 = 20;\nTại dòng lệnh thứ 6, val2 có giá trị bao nhiêu?",
        o: ["10", "20", "30", "0"],
        a: 0,
      },
      {
        q: "Câu 97: Cho đoạn chương trình sau:\n1. int val1 = 5, val2 = 15;\n2. int *p1, *p2;\n3. p1 = &val1;\n4. p2 = &val2;\n5. *p1 = 10;\n6. *p2 = *p1;\n7. p1 = p2;\n8. *p2 = 20;\n9. cout << *p1 << endl;\nChương trình sau in ra kết quả bao nhiêu?",
        o: ["10", "20", "400", "200"],
        a: 1,
      },
      {
        q: "Câu 98: Cho đoạn chương trình sau:\n1. int val1 = 5, val2 = 15;\n2. int *p1, *p2;\n3. p1 = &val1;\n4. p2 = &val2;\n5. *p1 = 10;\n6. *p2 = *p1;\n7. p1 = p2;\n8. *p2 = 20;\n9. cout << *p1 * val2 << endl;\nChương trình in ra kết quả là bao nhiêu?",
        o: ["10", "20", "200", "400"],
        a: 3,
      },
      {
        q: "Câu 99: Đoạn lệnh sau in ra kết quả là bao nhiêu:\nint number[5] = { 10, 20, 30, 40, 50 };\nint *p;\np = number;\np++;\n*p += 60;\ncout << number[1] << endl;",
        o: ["10", "20", "50", "80"],
        a: 3,
      },
      {
        q: "Câu 100: Đoạn lệnh sau in ra kết quả là bao nhiêu:\nint number[5] = { 10, 20, 30, 40, 50 };\nint *p;\np = number;\np++;\n*p = number + 3;\ncout << number[3] / 2 << endl;",
        o: ["10", "20", "40", "Chương trình báo lỗi"],
        a: 3,
      },
      {
        q: "Câu 101: Cho khối lệnh sau:\nif (yourSale >= target)\nbonus = 100 + 0.01 * (yourSale - target);\nelse\nbonus = 0;\nVới yourSale = 3000, target = 2500, vậy bonus = ?",
        o: ["105", "150", "600", "0"],
        a: 0,
      },
      {
        q: "Câu 102: Cho khối lệnh sau:\nif (yourSale >= target)\nbonus = 100 + 0.01 * (yourSale - target);\nelse\nbonus = 0\nVới yourSale = 3000, target = 2500, vậy bonus = ?",
        o: ["105", "150", "600", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 103: Cho khối lệnh sau:\nif (yourSale >= target)\nbonus = 100 + 0.01 * (yourSale – target);\nelse\nbonus = 0;\nVới yourSale = 2400, target = 2500, vậy bonus = ?",
        o: ["105", "150", "600", "0"],
        a: 3,
      },
      {
        q: "Câu 104: Sau khi thực hiện khối lệnh, balance = ?\ndouble balance = 10, goal = 20, payment = 5;\nint years = 0;\nwhile (balance < goal) {\nbalance += payment;\ndouble interest = balance * 0.1 / 100;\nbalance += interest;\nyears ++;\n}",
        o: ["20.015", "15", "15.015", "20.035"],
        a: 3,
      },
      {
        q: "Câu 105: Sau khi thực hiện khối lệnh, balance = ?\ndouble balance = 20, goal = 20, payment = 5;\nint years = 0;\nwhile (balance <= goal) {\nbalance += payment;\ndouble interest = balance * 0.1 / 100;\nbalance += interest;\nyears ++;\n}\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["25.025", "15", "15.015", "20.035015"],
        a: 0,
      },
      {
        q: "Câu 106: Khi thực hiện đoạn lệnh, balance = ?\ndouble balance = 10, goal = 20, payment = 5;\nint years = 0;\nwhile (balance < goal) {\nbalance += payment;\ndouble interest = balance * 0.1 / 100;\nbalance += interest;\nyears ++\n}",
        o: ["20.015", "15", "15.015", "Lệnh sai"],
        a: 3,
      },
      {
        q: "Câu 107: Khi thực hiện, balance = ?\ndouble balance = 20, goal = 20, payment = 5;\nint years = 0;\ndo {\nbalance += payment;\ndouble interest = balance * 0.1 / 100;\nbalance += interest;\nyears ++;\n} while (balance < goal);",
        o: ["20.015", "15", "25.025", "20.035015"],
        a: 2,
      },
      {
        q: 'Câu 108: Khi thực hiện, balance = ?\ndouble balance = 20, goal = 20, payment = 5;\nint years = 0;\ndo {\nbalance += payment;\ndouble interest = balance * 0.1 / 100;\nbalance += interest;\nyears ++;\n} while (balance < goal)"',
        o: ["20.015", "15", "15.015", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 109: Khi thực hiện, years = ?\ndouble balance = 20, goal = 20, payment = 5;\nint years = 0;\ndo {\nbalance += payment;\ndouble interest = balance * 0.1 / 100;\nbalance += interest;\nyears ++;\n} while (balance < goal);",
        o: ["1", "2", "0", "3"],
        a: 0,
      },
      {
        q: "Câu 110: Cho khối lệnh sau:\nint s = 0;\nfor (int i = 0; i < 10; i++)\n    s += i;\ns -= 10;\nSau khi chạy khối lệnh s = ?",
        o: ["0", "55", "45", "35"],
        a: 3,
      },
      {
        q: "Câu 111: Cho khối lệnh sau:\nfor (int i = 0; i <= 10; i++) {\nint s = 0;\ns += i;}\ncout << s;\n Sau khi chạy khối lệnh s = ?",
        o: ["0", "55", "45", "Lệnh sai"],
        a: 3,
      },
      {
        q: "Câu 112: Cho khối lệnh sau:\nint s = 0;\nfor (int i = 0; i <= 10; i++)\ns += i;\nSau khi chạy khối lệnh s = ?",
        o: ["0", "55", "45", "50"],
        a: 1,
      },
      {
        q: "Câu 113: Cho khối lệnh sau:\nint s = 0;\n for (int i = 0; i < 10; i++) {\ns = 0;\ns += i;\n}\nSau khi chạy khối lệnh s = ?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["0", "55", "45", "9"],
        a: 3,
      },
      {
        q: "Câu 114: Đoạn lệnh sau đưa ra kết quả là bao nhiêu?\nvoid inc (void* data, int psize) {\n    if (psize == sizeof (char)) {\n        char* pchar;\n        pchar = (char*)data;\n        ++(*pchar);\n    } else if (psize == sizeof(int)) {\n        int* pint;\n        pint = (int*)data;\n        ++(*pint);\n    }\n}\nint main() {\n    int s = 1642;\n    inc (&s,sizeof(s));\n    cout << s << endl;\n    return 0;\n}",
        o: ["1642", "1641", "1643", "Lỗi biên dịch"],
        a: 2,
      },
      {
        q: "Câu 115: Đoạn lệnh sau đưa ra kết quả là bao nhiêu?\nvoid inc (void* data, int psize) {\n    if (psize == sizeof (char)) {\n        char* pchar;\n        pchar = (char*)data;\n        ++(*pchar);\n    } else if (psize == sizeof(int)) {\n        int* pint;\n        pint = (int*)data;\n        ++(*pint);\n    }\n}\nint main() {\n    char c = 'y';\n    inc (&s,sizeof(s));\n    cout << s << endl;\n    return 0;\n}",
        o: ["'y'", "'x'", "'z'", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 116: Đoạn lệnh sau đưa ra kết quả là bao nhiêu?\nvoid inc (void* data, int psize) {\n    if (psize == sizeof (char)) {\n        char* pchar;\n        pchar = (char*)data;\n        ++(*pchar);\n    } else if (psize == sizeof(int)) {\n        int* pint;\n        pint = (char*)data;\n        ++(*pint);\n    }\n}\nint main() {\n    int s = 1642;\n    inc (s);\n    void << s << endl;\n    return 0;\n}",
        o: ["1642", "1643", "1641", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 117: Chương trinh test.exe có code như sau:\nint main(int argc,char* argv[]) {\n    double s = 0;\n    for (int i = 1; i < argc; i++)  s += atof(argv[i]);\n    cout << s << endl;\n    return 0;\n}\nTại dấu nhắc DOS, chạy chương trình: test 32.1 4 5.6, chương trình sẽ cho kết quả là bao nhiêu?",
        o: ["41.7", "32.1", "32.1 4 5.6", "Lỗi biên dịch"],
        a: 0,
      },
      {
        q: "Câu 118: Chương trinh test.exe có code như sau:\nint main(int argc,char* argv[]) {\n    double s = atof(argv[1]);\n    for (int i = 2; i < argc; i++)  s -= atof(argv[i]);\n    cout << s << endl;\n    return 0;\n}\nTại dấu nhắc DOS, chạy chương trình: test 40 5 12 7, chương trình sẽ cho kết quả là bao nhiêu?",
        o: ["0", "40", "16", "Lỗi biên dịch"],
        a: 2,
      },
      {
        q: "Câu 119: Chương trinh test.exe có code như sau:\nint main(int argc,char* argv[]) {\n    double s = 1;\n    for (int i = 0; i < atof(argv[2]); i++)  s *= atof(argv[1]);\n    cout << s << endl;\n    return 0;\n}\nTại dấu nhắc DOS, chạy chương trình: test 3 3, chương trình sẽ cho kết quả là bao nhiêu?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["9", "27", "3", "Lỗi biên dịch"],
        a: 1,
      },
      {
        q: "Câu 120: Chương trinh test.exe có code như sau:\nint main(int argc,char* argv[]) {\n    double s = 1;\n    for (int i = 0; i < argv[2]; i++)  s += atof(argv[1]);\n    cou << s << endl;\n    return 0;\n}\nTại dấu nhắc DOS, chạy chương trình: test 3 3, chương trình sẽ cho kết quả là bao nhiêu?",
        o: ["27", "9", "3", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 121: Chương trình sau in ra kết quả gì:\nint add (int a, int b) { return (a + b); }\nint sub (int a, int b) { return (a - b); }\nint operation (int x, int y, int (*functocall) (int,int)) {\n    int s = (*functocall) (x,y);\n    return s;\n}\nint main() {\n    int m,n;\n    int (*minus)(int,int) = sub;\n    m = (7,5,add);\n    n = (20,m,minus);\n    return 0;\n}",
        o: ["12", "32", "8", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 122: Chương trình sau in ra kết quả gì:\nint add (int a, int b) { return (a + b); }\nint sub (int a, int b) { return (a - b); }\nint operation (int x, int y, int (*functocall) (int,int)) {\n    int s = (*functocall) (x,y);\n    return s;\n}\nint main() {\n    int m,n;\n    int (*minus)(int,int) = sub;\n    m = (7,5,add);\n    n = (operation(20,3,minus),m,minus);\n    return 0;\n}",
        o: ["12", "8", "5", "Chương trình báo lỗi"],
        a: 3,
      },
      {
        q: "Câu 123: Chương trình sau in ra kết quả gì:\nint add (int a, int b) { return (a + b); }\nint sub (int a, int b) { return (a - b); }\nint operation (int x, int y,int (*functocall) (int,int)) {\n    int s = (*functocall) (x,y);\n    return s;\n}\nint main() {\n    int s = 0;\n    int *p = new int[5];\n    for (int i = 0; i < 5; i++) {\n        p[i] = i + 1;\n        s = operation (s,p[i],add);\n    }\n    cout << s << endl;\n    return 0;\n}",
        o: ["15", "6", "3", "10"],
        a: 0,
      },
      {
        q: "Câu 124: Chương trình sau in ra kết quả gì:\nint add (int a, int b) { return (a + b); }\nint sub (int a, int b) { return (a - b); }\nint operation (int x, int y,int (*functocall) (int,int)) {\n    int s = (*functocall) (x,y);\n    return s;\n}\nint main() {\n    int s = 0, n = 10;\n    int *p = new int[5];\n    for (int i = 0; i < 5; i++) {\n        p[i] = n--;\n        s = operation (s,p[i],add);\n    }\n    cout << s << endl;\n    return 0;\n}",
        o: ["40", "55", "45", "36"],
        a: 0,
      },
      {
        q: "Câu 125: Thực hiện đoạn lệnh sau đưa ra kết quả bao nhiêu:\nint s = 0, n = 10;\nint number[3][3];\nfor (int i = 0,j = 0; i < 3,j < 3; i++, j++) {\n    number[i][j] = n --;\n    s += number[i][j];\n}\ncout << s << endl;",
        o: ["10", "9", "8", "27"],
        a: 3,
      },
      {
        q: "Câu 126: Thực hiện đoạn lệnh sau đưa ra kết quả bao nhiêu:\nint s = 0, n = 10;\nint number[3][4];\nfor (int i = 0,j = 0; i < 3,j < 4; i++, j++) {\n    number[i][j] = n --;\n    s += number[i][j];\n}\ncout << s << endl;",
        o: ["27", "19", "30", "14"],
        a: 3,
      },
      {
        q: "Câu 127: Chương trình sau in kết quả là bao nhiêu:\nvoid inc (void* data,int psize) {\n    if (psize == sizeof(char)) {\n        char *p;\n        p = (char*)data;\n        ++(*p);\n    }\n}\nstruct hocsinh {\n    string hoten;\n    int namsinh;\n};\nint main() {\n    char ten = 'A'; \n    hocsinh hs[3];\n    for (int i = 0; i < 3; i++) {\n        hs[i].hoten = ten;\n        hs[i].namsinh = 1990 + i;\n        inc (&ten,sizeof(ten));\n    }\n    cout << hs[1].hoten << “ - “ << hs[1].namsinh << endl;\n    return 0;\n}",
        o: ["A - 1990", "B - 1991", "C - 1992", "A – 1991"],
        a: 1,
      },
      {
        q: "Câu 128: Chương trình sau in kết quả là bao nhiêu:\nvoid inc (void* data,int psize) {\n    if (psize == sizeof(char)) {\n        char *p;\n        p = (char*)data;\n        ++(*p);\n    }\n}\nstruct hocsinh {\n    string hoten;\n    int namsinh;\n};\nint main() {\n    char ten = 'A'; \n    hocsinh hs[3];\n    for (int i = 0; i < 3; i++) {\n        hs[i].hoten = ten;\n        hs[i].namsinh = 1990 + i;\n        inc (&ten,sizeof(ten));\n    }\n    cout << hs[0].hoten << “ - “ << hs[1].namsinh << endl;\n    return 0;\n}",
        o: ["A - 1990", "A - 1991", "B - 1992", "Lỗi biên dịch"],
        a: 1,
      },
      {
        q: "Câu 129: Chương trình sau in kết quả là bao nhiêu:\nvoid inc (void* data,int psize) {\n    if (psize == sizeof(char)) {\n        char *p;\n        p = (char)data;\n        ++(*p);\n    }\n}\nstruct hocsinh {\n    string hoten;\n    int namsinh;\n};\nint main() {\n    char ten = 'A'; \n    hocsinh hs[3];\n    for (int i = 0; i < 3; i++) {\n        hs[i].hoten = ten;\n        hs[i].namsinh = 1990 + i;\n        inc (&ten,sizeof(ten));\n    }\n    cout << hs[0].hoten << “ - “ << hs[2].namsinh << endl;\n}",
        o: ["A - 1992", "B - 1991", "C - 1992", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 130: Chương trình sau in kết quả là bao nhiêu:\n struct hocsinh {\n    string hoten;\n    int namsinh;\n};\nint main() {\n    hocsinh hs[3];\n    hocsinh *p = hs;\n    for (int i = 0; i < 3; i++) {\n        p->namsinh = 1991 + i;\n        p++;\n    }\n    p = hs+1;\n    p->namsinh -= 20;\n    cout << hs[1].namsinh << endl;\n    return 0;\n}",
        o: ["1972", "1971", "1970", "1973"],
        a: 0,
      },
      {
        q: "Câu 131: Chương trình sau in kết quả là bao nhiêu:\n struct hocsinh {\n    string hoten;\n    int namsinh;\n};\nint main() {\n    hocsinh hs[3];\n    hocsinh *p = hs;\n    for (int i = 0; i < 3; i++) {\n        p->namsinh = 1991 + i;\n        p++;\n    }\n    p = hs+1;\n    p->namsinh -= 20;\n    cout << hs[0].namsinh << endl;\n    return 0;\n}",
        o: ["1972", "1991", "1992", "1971"],
        a: 1,
      },
      {
        q: "Câu 132: Chương trình sau sai ở dòng nào:\n1.struct hocsinh {\n2. string hoten;\n3. int namsinh;\n4.};\n5.int main() {\n6. hocsinh hs[3];\n7. hocsinh *p = hs;\n8. for (int i = 0; i < 3; i++) {\n9.     p->namsinh = 1991 + i;\n10.        p++;\n11.    }\n12.    *p = hs+1;\n13.    p.namsinh -= 20;\n14.    cout << *p.namsinh << endl;\n15.    return 0;\n16.}",
        o: ["Không sai dòng nào", "9, 12, 14", "12, 13, 14", "9, 13, 14"],
        a: 2,
      },
      {
        q: "Câu 133: Chương trình sau sai ở dòng nào:\n1.struct hocsinh {\n2. string hoten;\n3. int namsinh;\n4.};\n5.int main() {\n6. hocsinh hs[3];\n7. hocsinh *p = hs;\n8. for (int i = 0; i < 3; i++) {\n9.     (*p).namsinh = 1991 + i;\n10.        p++;\n11.    }\n12.    p = hs+1;\n13.    (*p).namsinh -= 20;\n14.    cout << (*p).namsinh << endl;\n15.    return 0;\n16.}",
        o: ["9, 14", "12, 13", "9, 13, 14", "Không sai ở dòng nào cả"],
        a: 2,
      },
      {
        q: "Câu 134: Chương trình sau đưa ra kết quả bao nhiêu?\nstruct hocsinh {\n    string hoten;\n    int namsinh;\n    double diem;\n};\ndouble bac3 (double a,int x) {\n    double d = 1;\n    for (int i = 0; i < x; i++) d *= a;\n    return d;\n}\nint main() {\n    hocsinh hs[3];\n    hocsinh *p;\n    p = hs;\n    for (int i = 0; i < 3; i++) {\n        p->diem = 5;\n        p++;\n    }\n    cout << hs[0].diem << “, “ << bac3(hs[1].diem,2);",
        o: ["5, 25, 125", "5, 25, 625", "5, 25", "5, 5"],
        a: 2,
      },
      {
        q: "Câu 135: Chương trình sau có kết quả là bao nhiêu?\ndouble bac3 (double a, int x) {\n    for (int i = 0; i < x; i++)  a = a * a;\n    return a;\n}\nint main() {\n    int i = 3;\n    cout << i << “, “ << bac3(i,2);\n    return 0;\n}",
        o: ["3, 81", "3, 9", "9, 81", "3, 18"],
        a: 0,
      },
      {
        q: "Câu 136: Chương trình sau cho kết quả là bao nhiêu?\nclass nhanvien {\n    double luong;\n    public:\n        void setLuong(double d) { luong = d; }\n        double getLuong() { return luong; }\n        void tangLuong(double d) { luong += d; } \n};\nint main() {\n    nhanvien A;\n    A.setLuong(700);\n    nhanvien B = A;\n    B.tangLuong(100);\n    cout << B.luong;\n    return 0;\n}",
        o: ["700", "800", "0", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 137: Chương trình sau cho kết quả là bao nhiêu?\nclass nhanvien {\n    double luong;\n    public:\n        void setLuong(double d) { luong = d; }\n        void getLuong() { return luong; }\n        void tangLuong(double d) { luong += d; } \n};\nint main() {\n    nhanvien A;\n    A.setLuong(700);\n    nhanvien B = A;\n    B.tangluong(100);\n    cout << B.getLuong();\n    return 0;\n}",
        o: ["700", "800", "0", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 138: Chương trình sau cho kết quả bao nhiêu khi chạy?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        int DT () { return (height * width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nint main() {\n    CRect cn (7,7);\n    cout << cn.DT();\n    return 0;\n}",
        o: ["Lỗi biên dịch", "7", "49", "14"],
        a: 2,
      },
      {
        q: "Câu 139: Chương trình sau cho kết quả bao nhiêu khi chạy?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        int DT () { return (height + width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nint main() {\n    CRect cn (7,7);\n    cout << cn.DT();\n    return 0;\n}",
        o: ["Lỗi biên dịch", "7", "49", "14"],
        a: 3,
      },
      {
        q: "Câu 140: Chương trình sau cho kết quả bao nhiêu khi chạy?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        int DT () { return (height * width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nint main() {\n    CRect cn;\n    cout << cn.DT();\n    return 0;\n}",
        o: ["Lỗi biên dịch", "7", "49", "14"],
        a: 0,
      },
      {
        q: "Câu 141: Chương trình sau cho kết quả bao nhiêu khi chạy?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        CRect ();\n        int DT (void) { return (height * width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nCRect::CRect () {\n    height = 5;\n    width = 5;\n}\nint main() {\n    CRect cn1 (3,4);\n    CRect cn2;\n    cout << cn1.DT() + cn2.DT();\n    return 0;\n}",
        o: ["12", "25", "37", "Lỗi biên dịch"],
        a: 2,
      },
      {
        q: "Câu 142: Chương trình sau cho kết quả bao nhiêu khi chạy?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        CRect ();\n        int DT (void) { return (height * width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nCRect::CRect () {\n    height = 5;\n    width = 5;\n}\nint main() {\n    CRect cn1 (3,4);\n    CRect cn2;\n    cout << cn2.DT();\n    return 0;\n}",
        o: ["12", "25", "37", "Lỗi biên dịch"],
        a: 1,
      },
      {
        q: "Câu 143: Chương trình sau cho kết quả bao nhiêu khi chạy?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        CRect ();\n        int DT (void) { return (height * width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nCRect::CRect () {\n    height = 5;\n    width = 5;\n}\nint main() {\n    CRect cn1 (3,4);\n    CRect cn2;\n    cout << cn2.height * cn2.width;\n    return 0;\n}",
        o: ["12", "25", "37", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 144: Chương trình sau cho kết quả bao nhiêu khi chạy?\nclass CRect {\n    int *height, *width;\n    public:\n        CRect (int,int);\n        ~CRect ();\n        int DT (void) { return (*height * *width); }\n};\nCRect::CRect (int a, int b) {\n    height = new int;\n    width = new int;\n    *height = a;\n    *width = b;\n}\nCRect::~CRect() {\n    delete height;\n    delete width;\n}\nint main() {\n    CRect cn1 (3,4);\n    cout << cn1.DT();\n    return 0;\n}",
        o: ["12", "20", "7", "Lỗi biên dịch"],
        a: 0,
      },
      {
        q: "Câu 145: Chương trình sau sai ở dòng nào?\n1. class CRect {\n2.  int *height, *width;\n3.   public:\n4.       CRect (int,int);\n5.       ~CRect ();\n6.       int DT (void) { return (*height * *width); }\n7. };\n8. CRect::CRect (int a, int b) {\n9.    height = new int;\n10.   width = new int;\n11.   *height = a;\n12.   *width = b;\n13.}\n14. CRect::~CRect() {\n15.    delete height;\n16.    delete width;\n17. }\n18. int main() {\n19.   CRect cn1 (3,4);\n20.   cout << cn1.DT();\n21.   return 0;\n22. }",
        o: ["6, 7", "7, 8", "9, 10", "Không sai dòng nào"],
        a: 3,
      },
      {
        q: "Câu 146: Chương trình sau sai ở dòng nào?\n1. class CRect {\n2.  int *height, *width;\n3.   public:\n4.       CRect (int,int);\n5.       ~CRect ();\n6.       int DT (void) { return (height * width); }\n7. }\n8. CRect::CRect (int a, int b) {\n9.    height = new int;\n10.   width = new int;\n11.   *height = a;\n12.   *width = b;\n13.}\n14. CRect::~CRect() {\n15.    delete height;\n16.    delete width;\n17. }\n18. int main() {\n19.   CRect cn1 (3,4);\n20.   cout << cn1.DT();\n21.   return 0;\n22. }",
        o: ["6, 7", "9, 10", "6, 11, 12", "Không sai dòng nào"],
        a: 0,
      },
      {
        q: "Câu 147: Chương trình sau sai ở dòng nào?\n1. class CRect {\n2.  int *height, *width;\n3.   public:\n4.       CRect (int,int);\n5.       ~CRect ();\n6.       int DT (void) { return (*height * *width); }\n7. };\n8. CRect::CRect (int a, int b) {\n9.    height = new short int;\n10.   width = new short int;\n11.   *height = a;\n12.   *width = b;\n13.}\n14. CRect::~CRect() {\n15.    delete height;\n16.    delete width;\n17. }\n18. int main() {\n19.   CRect cn1 (3,4);\n20.   cout << cn1.DT();\n21.   return 0;\n22. }",
        o: ["6, 7", "9, 10", "6, 11, 12", "Không sai dòng nào"],
        a: 1,
      },
      {
        q: "Câu 148: Chương trình sau sai ở dòng nào?\n1. class CRect {\n2.  int *height, *width;\n3.   public:\n4.       CRect (int,int);\n5.       ~CRect ();\n6.       int DT (void) { return (*height * width); }\n7. };\n8. CRect::CRect (int a, int b) {\n9.    height = new int;\n10.   width = new int;\n11.   height = a;\n12.   width = b;\n13.}\n14. CRect::~CRect() {\n15.    delete height;\n16.    delete width;\n17. }\n18. int main() {\n19.   CRect cn1 (3,4);\n20.   cout << cn1.DT();\n21.   return 0;\n22. }",
        o: ["6, 7", "9,10", "6, 11, 12", "Không sai dòng nào"],
        a: 2,
      },
      {
        q: "Câu 149: Chương trình cho kết quả là bao nhiêu?\n1. class CRect {\n2. int height, width;\n3. public:\n4.     void setGiatri(int a, int b) {\n5.         height = a;\n6.         width = b;\n7.     }\n8.     int DT() { return (height * width); }\n9. };\n10. int main() {\n11.    CRect a, *b, *c, *d;\n12.    d = new CRect[2];\n13.    b = new CRect;\n14.    c = &a;\n15.    a.setGiatri(1,2);\n16.    b->setGiatri(3,4);\n17.    d->setGiatri(5,6);\n18.    d[1].setGiatri(7,8);\n19.    cout << c->DT() << endl;\n20.    delete b;\n21.    delete[] d;\n22.    return 0;\n23. }",
        o: ["2", "12", "30", "56"],
        a: 0,
      },
      {
        q: "Câu 150: Chương trình cho kết quả là bao nhiêu?\n1. class CRect {\n2. int height, width;\n3. public:\n4.     void setGiatri(int a, int b) {\n5.         height = a;\n6.         width = b;\n7.     }\n8.     int DT() { return (height * width); }\n9. };\n10. int main() {\n11.    CRect a, *b, *c, *d;\n12.    d = new CRect[2];\n13.    b = new CRect;\n14.    c = &a;\n15.    a.setGiatri(1,2);\n16.    b->setGiatri(3,4);\n17.    d->setGiatri(5,6);\n18.    d[1].setGiatri(7,8);\n19.    cout << c->DT() * (*b).DT() << endl;\n20.    delete b;\n21.    delete[] d;\n22.    return 0;\n23. }\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["24", "12", "30", "56"],
        a: 0,
      },
      {
        q: "Câu 151: Chương trình cho kết quả là bao nhiêu?\n1. class CRect {\n2. int height, width;\n3. public:\n4.     void setGiatri(int a, int b) {\n5.         height = a;\n6.         width = b;\n7.     }\n8.     int DT() { return (height + width); }\n9. };\n10. int main() {\n11.    CRect a, *b, *c, *d;\n12.    d = new CRect[2];\n13.    b = new CRect;\n14.    c = &a;\n15.    a.setGiatri(1,2);\n16.    b->setGiatri(3,4);\n17.    d->setGiatri(5,6);\n18.    d[1].setGiatri(7,8);\n19.    cout << d->DT() << endl;\n20.    delete b;\n21.    delete[] d;\n22.    return 0;\n23. }",
        o: ["2", "11", "15", "30"],
        a: 1,
      },
      {
        q: "Câu 152: Chương trình sau sai ở dòng nào?\n1. class CRect {\n2. int height, width;\n3. public:\n4.     void setGiatri(int a, int b) {\n5.         height = a;\n6.         width = b;\n7.     }\n8.     int DT() { return (height * width); }\n9. };\n10. int main() {\n11.    CRect a, *b, *c, *d;\n12.    d = new CRect[2];\n13.    b = new CRect;\n14.    c = &a;\n15.    a.setGiatri(1,2);\n16.    b->setGiatri(3,4);\n17.    d->setGiatri(5,6);\n18.    d[1]->setGiatri(7,8);\n19.    cout << c->DT() * b.DT() << endl;\n20.    delete b;\n21.    delete[] d;\n22.    return 0;\n23. }",
        o: ["8, 9, 14", "18, 19", "2, 21", "Không có dòng nào sai"],
        a: 1,
      },
      {
        q: "Câu 153: Chương trình sau cho kết quả là bao nhiêu?\n1. class CVector {\n2.     public:\n3.     int x,y;\n4.     CVector () {}\n5.     CVector (int,int);\n6.     CVector operator+ (CVector);\n7. };\n8. CVector::CVector (int a,int b) {\n9.     x = a;\n10.    y = b;\n11. }\n12. CVector CVector::operator+ (CVector v) {\n13.    CVector tmp;\n14.    tmp.x = x + v.x;\n15.    tmp.y = y + v.y;\n16.    return tmp;\n17.}\n18.int main () {\n19.    CVector a (3,1);\n20.    CVector b(8,4);\n21.    CVector c;\n22.    c = a + b;\n23.    cout << c.x + c.y << endl;\n24.    return 0;\n25.}",
        o: ["-8", "5", "16", "4"],
        a: 2,
      },
      {
        q: "Câu 154: Chương trình sau cho kết quả là bao nhiêu?\n1. class CVector {\n2.    public:\n3.     int x,y;\n4.     CVector () {}\n5.     CVector (int,int);\n6.     CVector operator+ (CVector);\n7. };\n8. CVector::CVector (int a,int b) {\n9.     x = a;\n10.    y = b;\n11. }\n12. CVector CVector::operator+ (CVector v) {\n13.    CVector tmp;\n14.    tmp.x = x - v.x;\n15.    tmp.y = y - v.y;\n16.    return tmp;\n17.}\n18.int main () {\n19.    CVector a (3,1);\n20.    CVector b(8,4);\n21.    CVector c;\n22.    c = a + b;\n23.    cout << c.x + c.y << endl;\n24.    return 0;\n25.}",
        o: ["-8", "16", "5", "4"],
        a: 0,
      },
      {
        q: "Câu 155: Chương trình sau cho kết quả là bao nhiêu?\n1. class CVector {\n2.    public:\n3.     int x,y;\n4.     CVector () {}\n5.     CVector (int,int);\n6.     CVector operator+ (CVector);\n7. };\n8. CVector::CVector (int a,int b) {\n9.     x = a;\n10.    y = b;\n11. }\n12. CVector CVector::operator+ (CVector v) {\n13.    CVector tmp;\n14.    tmp.x = x % v.x;\n15.    tmp.y = y % v.y;\n16.    return tmp;\n17.}\n18.int main () {\n19.    CVector a (3,1);\n20.    CVector b(8,4);\n21.    CVector c;\n22.    c = a + b;\n23.    cout << c.x + c.y << endl;\n24.    return 0;\n25.}",
        o: ["-8", "16", "5", "4"],
        a: 3,
      },
      {
        q: "Câu 156: Khi chạy đoạn chương trình sau cho kết quả bằng bao nhiêu?\nint i;\nfloat p;\np=1;\nfor(i=1;i<3;i++) {\n    p=p*i;\n    p=p*p;\n    }\ncout << p << endl;",
        o: ["p=6", "p=4", "p=124", "p=144"],
        a: 1,
      },
      {
        q: "Câu 157: Chương trình cho kết quả là bao nhiêu? \nclass tinh {\npublic:\nint a;\ntinh() {}\ntinh(int i) {a = i;}\ntinh operator+(tinh t) {\ntinh tmp;\ntmp.a = a % t.a;\nreturn tmp\n}\n};\nvoid main() {\ntinh t1(1), t2(3),t3;\nt3 = t1 + t2;\ncout << t.a;\n}",
        o: ["1", "3", "4", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 158: Chương trình sau cho kết quả là bao nhiêu? \nclass rec {\npublic: \nint *w;\nrec(int a) { w = new int; *w = a; }\n};\nvoid main() {\nrec r(1);\ncout << r.w;\n}",
        o: ["1", "0", "Địa chỉ của r.w", "Lỗi biên dịch"],
        a: 2,
      },
      {
        q: "Câu 159: Chương trình sau sai ở dòng nào?\n1. class CVector {\n2.    int x,y;\n3.     public:\n4.     CVector () {}\n5.     CVector (int,int);\n6.     CVector operator+ (CVector);\n7. }\n8. CVector::CVector (int a,int b) {\n9.     x = a;\n10.    y = b;\n11. }\n12. CVector CVector::operator+ (CVector v) {\n13.    CVector tmp;\n14.    tmp.x = x % v.x;\n15.    tmp.y = y % v.y;\n16.    return tmp;\n17.}\n18.int main () {\n19.    CVector a (3,1);\n20.    CVector b(8,4);\n21.    CVector c;\n22.    c = a + b;\n23.    cout << c.x + c.y << endl;\n24.    return 0;\n25.}",
        o: ["1, 3", "7, 23", "14, 15", "Không sai dòng nào"],
        a: 1,
      },
      {
        q: "Câu 160: Cho khối lệnh như sau, kết quả in ra màn hình sẽ là\nclass rect {\nint x,y;\npublic:\n\t\t    void setValue(int a,int b) { x = a, y = b; } \t\n    int area() { return a * b; } \n}; \nint main() { \n    rect r; \n    r.setValue(2,3); \n    cout << “Chu vi hinh chu nhat: “ << r.area(); \n\t\t  return 0; \n\t\t}",
        o: ["Lỗi biên dịch", "6", "5", "0"],
        a: 0,
      },
      {
        q: "Câu 161: Cho khối lệnh như sau, kết quả in ra màn hình sẽ là\nclass test {\npublic:\n    int a;\n    test(int i) {a = i}\n    int b3(int b) { \n     for(int i = 1; i <= b; i++) a *= a;\n     return a;\n}\nvoid main() {\ntest t(3);\ncout << t.b(3);\n}",
        o: ["81", "3", "9", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: 'Câu 162: Cho đoạn chương trình sau:\nint i,j;\nchar c;\nfor (i = 2; i < 8; i++)\n        for (j = 0; j < 16; j++) {\n            if (j == 0) cout << endl;\n            c = i * 16 + j;\n            cout << " " << c;\n        }\nĐoạn chương trình trên thực hiện công việc gì?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.',
        o: [
          "In ra dãy số từ 0 đến 16",
          "Xuất các ký tự tương ứng với các mã ASCII từ 32 đến 127",
          "In ra các bội số của 16",
          "Lệnh sai",
        ],
        a: 1,
      },
      {
        q: "Câu 163: Cho đoạn chương trình sau:\nvoid stringRear (char s[], char d[], int x) {\n    for (int i = strlen(s); i > x; i--) d[i-x] = s[i];\n    d[0] = s[x];\n}\nint main() {\n    char str[11], tmp[11];\n    char *p;\n    char a[3];\n    p = strchr(str, “/ “);\n    int num = p - str;\n    strncpy(a,str,num);\n    a[2] = “\\0”;\n    cout << a << endl;\n    return 0;\n}\nĐoạn chương trình trên in ra kết quả bao nhiêu nếu cho str = 30/04/2011?",
        o: ["30", "04", "2011", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 164: Cho đoạn chương trình sau:\nvoid stringRear (char s[], char d[], int x) {\n    for (int i = strlen(s); i > x; i--) d[i-x] = s[i];\n    d[0] = s[x];\n}\nint main() {\n    char str[11] = \"30/04/2011\", tmp[11];\n    char *p;\n    char a[3];\n    p = strchr(str, '/');\n    int num = p - str;\n    strncpy(a,str,num);\n    a[2] = '\\0';\n    cout << (atof(a) - 26) << endl;\n    return 0;\n}\nĐoạn chương trình trên in ra kết quả bao nhiêu nếu cho str = 30/04/2011?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["30", "4", "2011", "Lỗi biên dịch"],
        a: 1,
      },
      {
        q: "Câu 165: Cho đoạn chương trình sau:\nvoid stringRear (char s[], char d[], int x) {\n    for (int i = strlen(s); i > x; i--) d[i-x] = s[i];\n    d[0] = s[x];\n}\nint main() {\n    char str[11] = \"30/04/2011\", tmp[11];\n    char *p;\n    char a[3];\n    p = strchr(str, '/');\n    int num = p - str;\n    strncpy(a,str,num);\n    a[2] = '\\0';\n    stringRear (str,tmp,p-str+1);\n    p = strchr(tmp,'/');\n    strncpy(a,tmp,p-tmp);\n    a[2] = '\\0';\n    cout << a << endl;\n    return 0;\n}\nĐoạn chương trình trên in ra kết quả bao nhiêu nếu cho str = 30/04/2011?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["30", "04", "2011", "Lỗi biên dịch"],
        a: 1,
      },
      {
        q: "Câu 166: Cho đoạn chương trình sau:\nvoid stringRear (char s[], char d[], int x) {\n    for (int i = strlen(s); i > x; i--) d[i-x] = s[i];\n    d[0] = s[x];\n}\nint main() {\n    char str[11] = \"30/04/2011\", tmp[11];\n    char *p;\n    char a[3];\n    p = strchr(str, '/');\n    int num = p - str;\n    strncpy(a,str,num);\n    a[2] = '\\0';\n    stringRear (str,tmp,p-str+1);\n    p = strchr(tmp,'/');\n    strncpy(a,tmp,p-tmp);\n    a[2] = '\\0';\n    stringRear (tmp,str,p-tmp+1);\n    cout << str << endl;\n    return 0;\n}\nĐoạn chương trình trên in ra kết quả bao nhiêu nếu cho str = 30/04/2011?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["30", "04", "2011", "Lỗi biên dịch"],
        a: 2,
      },
      {
        q: "Câu 167: Cho đoạn chương trình sau:\nvoid stringRear (char s[], char d[], int x) {\n    for (int i = strlen(s); i > x; i--) d[i-x] = s[i];\n    d[0] = s[x];\n}\nint main() {\n    char str[11] = \"30/04/2011\", tmp[11];\n    char *p;\n    char a[3];\n    p = strchr(str, '/');\n    int num = p - str;\n    strncpy(a,str,num);\n    a[2] = '\\0';\n    stringRear (str,tmp,p-str+1);\n    p = strchr(tmp,'/');\n    strncpy(a,tmp,p-tmp);\n    a[2] = '\\0';\n    stringRear (tmp,str,p-tmp+1);\n    cout << atof(str) * a << endl;\n    return 0;\n}\nĐoạn chương trình trên in ra kết quả bao nhiêu nếu cho str = 30/04/2011?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["30", "4", "2011", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 168: Cho đoạn chương trình sau:\nint main() {\n        int k;\n        for (k=0;k<100;k++) {\n            if ((k%3==0) && (k%7==0))\n                cout << k << “ “;\n        }\n        return 0;\n}\nĐoạn chương trình trên in ra kết quả bao nhiêu?",
        o: ["21 42 63 84", "0 21 42 63 84", "42 63 84", "Chương trình báo lỗi"],
        a: 1,
      },
      {
        q: 'Câu 169: Cho đoạn chương trình sau:\nint main() {\n        int k,n;\n        for (k=1;k<30;k++)\n            if ((k%3==0) && (k%7==0))\n                cout << k << " ";\n        return 0;\n}\nĐoạn chương trình trên in ra kết quả bao nhiêu?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.',
        o: ["21", "1 21", "14", "Chương trình báo lỗi"],
        a: 0,
      },
      {
        q: "Câu 170: Cho đoạn chương trình sau:\nint main() {\n        int num, dv, c, t;\n        for (num = 100; num < 160; num++) {\n            dv = num % 10;\n            c = (num / 10) % 10;\n            t = num / 100;\n            if (dv * dv * dv + c * c * c + t * t * t == num) cout << num << “ “;\n            }\n        return 0;\nĐoạn chương trình trên in ra kết quả bao nhiêu?",
        o: ["153", "110", "145", "Lỗi biên dịch"],
        a: 0,
      },
      {
        q: "Câu 171: Cho đoạn mã sau kết quả hiển thị sẽ là:\nint n=12,k=2;\nwhile(k<n){\n  for(k=2;k<=n;k++)\n        if(n%k==2){\n               cout << k << “ “;\n                n /= k;\n                break;\n        } \n}",
        o: ["2 2 3", "3 2 2", "5", "2 3 6"],
        a: 2,
      },
      {
        q: "Câu 172: Cho đoạn chương trình sau:\nint main() {\n        int n,k,dem;\n        for ( k = 1; k < 10; k++ ) {\n            dem = 0;\n            for ( n = 2; n <= k; n++ ) \n                if ( k%n==0) dem++;\n            if (dem > 1) cout << k;\n    }\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "468910", "8910", "4689"],
        a: 3,
      },
      {
        q: "Câu 173: Cho đoạn chương trình sau:\nint main() {\n        int n,k,dem;\n        for ( k = 1; k < 10; k++ ) {\n            dem = 0;\n            for ( n = 2; n <= k; n++ ) { \n                if ( k%n==0) dem++;\n            if (dem > 1) cout << k;\n }\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "468910", "8910", "68910"],
        a: 0,
      },
      {
        q: "Câu 174: Cho đoạn chương trình sau:\nint main() {\n        int n,k,dem;\n        for ( k = 7; k <= 10; k++ ) {\n            dem = 0;\n            for ( n = 2; n <= k; n++ ) \n                if ( k%n==0) dem++;\n            if (dem > 1) cout << k;\n    }\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "468910", "8910", "68910"],
        a: 2,
      },
      {
        q: "Câu 175: Cho đoạn chương trình sau:\ntypedef struct tagcomplex {\n    float thuc,ao;\n} complex;\ncomplex tich (complex a,complex b) {\n    complex c;\n    c.thuc = a.thuc * b.thuc - a.ao * b.ao;\n    c.ao = a.thuc * b.ao + a.ao * b.thuc;\n    return c;\n}\nvoid print_complex (complex a) {\n    printf(“%.2f + %.2fi”, a.thuc, a.ao);\n}\nint main() {\n    complex a, b, c;\n    a.thuc = 3.2; a.ao =2.8;\n    b.thuc = 5.0; b.ao = 3.5;\n    c = tich (a,b);\n    print_complex (c);\n    return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: [
          "Chương trình báo lỗi",
          "6.20 + 25.20i",
          "25.80 + -2.80i",
          "6.2 + 25.2",
        ],
        a: 1,
      },
      {
        q: "Câu 176: Cho đoạn chương trình sau:\ntypedef struct tagcomplex {\n    float thuc,ao;\n} complex;\ncomplex thuong (complex a,complex b) {\n    complex c;\n    float tong = b.thuc * b.thuc + b.ao * b.ao;\n    c.thuc = (a.thuc * a.ao + b.thuc * b.ao) / tong;\n    c.ao = (a.ao * b.thuc - a.thuc * b.ao) / tong;\n    return c;\n}\nvoid print_complex (complex a) {\n    printf(“%.2f + %.2fi”, a.thuc, a.ao);\n}\nint main() {\n    complex a, b, c;\n    a.thuc = 3.2; a.ao =2.8;\n    b.thuc = 5.0; b.ao = 3.5;\n    c = thuong (a,b);\n    print_complex (c);\n    return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "0.7 + 0.1i", "0.71 + 0.08i", "1 + 0.1i"],
        a: 2,
      },
      {
        q: "Câu 177: Cho đoạn chương trình sau:\n#include <math.h>\ntypedef struct tagcomplex {\n    float thuc,ao;\n} complex;\nfloat modul (complex a) {\n    return sqrt(a.thuc * a.thuc + a.ao * a.ao);\n}\n int main() {\n    complex a;\n    a.thuc = 3.2; a.ao =2.8;\n    cout << modul (a);\n    return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["4.25206", "4.97089", "0.71883", "Chương trình báo lỗi"],
        a: 0,
      },
      {
        q: "Câu 178: Cho đoạn chương trình sau:\n#include <math.h>\ntypedef struct tagcomplex {\n    float thuc,ao;\n} complex;\nfloat doiso (complex a) {\n    return acos (a.thuc / sqrt(a.thuc * a.thuc + a.ao * a.ao));\n}\n int main() {\n    complex a;\n    a.thuc = 3.2; a.ao =2.8;\n    cout << doiso (a);\n    return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "4.25206", "4.97089", "0.71883"],
        a: 3,
      },
      {
        q: "Câu 179: Cho đoạn chương trình sau:\n#include <math.h>\ntypedef struct tagcomplex {\n    float thuc,ao;\n} complex;\nfloat doiso (complex a) {\n    return acos (a.thuc / sqrt(a.thuc * a.thuc + a.ao * a.ao));\n}\nfloat modul (complex a) {\n    return sqrt (a.thuc * a.thuc + a.ao * a.ao);\n}\nint main() {\n    complex a;\n    a.thuc = 3.2; a.ao =2.8;\n    cout << doiso (a) + modul (a);\n    return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "4.25206", "4.97089", "0.71883"],
        a: 2,
      },
      {
        q: "Câu 180: Cho đoạn chương trình sau:\n#include <math.h>\ntypedef struct tagcomplex {\n    float thuc,ao;\n} complex;\nfloat doiso (complex a) {\n    return acos (a.thuc / modul(a));\n}\nfloat modul (complex a) {\n    return sqrt (a.thuc * a.thuc + a.ao * a.ao);\n}\nint main() {\n    complex a;\n    a.thuc = 3.2; a.ao =2.8;\n    cout << doiso (a) + modul (a);\n    return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "4.25206", "4.97089", "0.71883"],
        a: 0,
      },
      {
        q: "Câu 181: Cho đoạn chương trình sau:\nint main() {\n        int k=0,n,dem,j=0;\n        while(j<3) {\n            k++;\n            dem=0; \n            for(n=2;n<=k;n++)  if(k%n==0) dem++;\n            if(dem==1) {\n                cout << k << “ “;\n                j++;\n            }\n        }\n        return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "2 3 5", "2 3 5 7 11", "3 4 5 7 11"],
        a: 1,
      },
      {
        q: "Câu 182: Cho đoạn chương trình sau:\nint main() {\n        int k=0,n,dem,j=0;\n        while(j<5) {\n            k++;\n            dem=0; \n            for(n=2;n<=k;n++)  if(k%n==0) dem++;\n            if(dem==1) {\n                cout << k << “ “;\n                j++;\n            }\n        }\n        return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "2 3 5", "2 3 5 7 11", "3 4 5 7 11"],
        a: 2,
      },
      {
        q: "Câu 183: Cho đoạn chương trình sau:\nint main() {\n        int k=0,n,dem,j=0;\n        while(j<3) {\n            k++;\n            dem=0; { \n            for(n=2;n<=k;n++)  if(k%n==0) dem++;\n            if(dem==1) {\n                cout << k << “ “;\n                j++;\n            }\n        }\n        return 0;\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "2 3 5", "2 3 5 7 11", "3 4 5 7 11"],
        a: 0,
      },
      {
        q: "Câu 184: Cho đoạn chương trình sau:\npublic class Test {\n    public static void main(String[] args) {\n        int k=0,n,dem,j=0;\n        while(j<3) {\n            k=8;\n            dem=0; { \n            for(n=3;n<=k;n++) { \n                if(k%n==0)\n                    dem++;\n            }\n            if(dem==1) {\n                System.out.print(k+” “);\n                j++;\n            }\n        }\n    }\n}\nĐoạn chương trình trên cho kết quả là bao nhiêu?",
        o: ["Chương trình báo lỗi", "2 3 5", "2 3 5 7 11", "3 4 5 7 11"],
        a: 0,
      },
      {
        q: "Câu 185: Cho đoạn chương trình sau:\nint main() {\n        int k=0,n,dem,j=0;\n        while(j<3) {\n            k++;\n            dem=0; \n            for(n=2;n<=k;n++)  if(k%n==0) dem++;\n            if(dem==1) {\n                cout << k << “\\t”;\n                j++;\n            }\n        }\n        return 0;\n}\nĐoạn chương trình trên thực hiện công việc gì?",
        o: [
          "In ra các hợp số từ 1 đến 10",
          "In ra tổng các số từ 1 đến 10",
          "In ra 3 số nguyên tố đầu tiên",
          "In ra các số từ 1 đến 100 và chia hết cho 3,7",
        ],
        a: 2,
      },
      {
        q: "Câu 186: Cho đoạn chương trình sau:\nint main() {\n    unsigned nam = 1952;\n    char can[][5] = { “Giap”, “At”, “Binh”, “Dinh”, “Mau”,\n                “Ky”, “Canh”, “Tan”, “Nham”, “Quy” };\n    char chi[][5] = {   “Ty”, “Suu”, “Dan”, “Mao”, \n                “Thin”, “Ty.”, “Ngo”, “Mui”,\n                “Than”, “Dau”, “Tuat”, “Hoi” }; \n    cout << can[(nam+6)%10] << chi[(nam+8)%12];\n    return 0;\n}\nChương trình trên in ra kết quả là bao nhiêu?",
        o: ["NhamThin", "CanhThan", "QuyTy", "Chương trình báo lỗi"],
        a: 0,
      },
      {
        q: "Câu 187: Cho đoạn chương trình sau:\nint main() {\n    unsigned nam = 1971;\n    char can[][5] = { “Giap”, “At”, “Binh”, “Dinh”, “Mau”,\n                “Ky”, “Canh”, “Tan”, “Nham”, “Quy” };\n    char chi[][5] = {   “Ty”, “Suu”, “Dan”, “Mao”, \n                “Thin”, “Ty.”, “Ngo”, “Mui”,\n                “Than”, “Dau”, “Tuat”, “Hoi” }; \n    cout << can[(nam+6)%10] << chi[(nam+8)%12];\n    return 0;\n}\nChương trình trên in ra kết quả là bao nhiêu?",
        o: ["TanHoi", "AtSuu", "CanhTy", "Chương trình báo lỗi"],
        a: 0,
      },
      {
        q: "Câu 188: Cho đoạn chương trình sau:\nint main() {\n    unsigned nam = 1952;\n    char can[][5] = { “Giap”, “At”, “Binh”, “Dinh”, “Mau”,\n                “Ky”, “Canh”, “Tan”, “Nham”, “Quy” };\n    char chi[][5] = {   “Ty”, “Suu”, “Dan”, “Mao”, \n                “Thin”, “Ty.”, “Ngo”, “Mui”,\n                “Than”, “Dau”, “Tuat”, “Hoi” }; \n    cout << can[(nam+4)%10] << chi[(nam+10)%12];\n    return 0;\n}\nChương trình trên in ra kết quả là bao nhiêu?",
        o: ["NhamThin", "QuyTy", "CanhNgo", "Chương trình báo lỗi"],
        a: 2,
      },
      {
        q: "Câu 189: Cho đoạn chương trình sau:\nint main() {\n    unsigned nam = 1952;\n    char can[][5] = { “Giap”, “At”, “Binh”, “Dinh”, “Mau”,\n                “Ky”, “Canh”, “Tan”, “Nham”, “Quy” }\n    char chi[][5] = {   “Ty”, “Suu”, “Dan”, “Mao”, \n                “Thin”, “Ty”, “Ngo”, “Mui”,\n                “Than”, “Dau”, “Tuat”, “Hoi” }; \n    cout << ca[(nam+6)%10] << chi[(nam+8)%12];\n    return 0;\n}\nChương trình trên in ra kết quả là bao nhiêu?",
        o: ["NhamThin", "CanhThan", "QuyTy.", "Chương trình báo lỗi"],
        a: 3,
      },
      {
        q: "Câu 190: Đoạn chương trình sau thực hiện công việc gì:\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = “0123456789ABCDEF”;\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 16;\n    ketqua[17] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 2;\n    char number[17] = 123”;\n    cout << functionD(number,n,m);\n    return 0;\n}",
        o: [
          "In ra các số nguyên tố từ 0 đến số đã cho",
          "In ra các hợp số của số đã cho",
          "Chuyển đổi số phức",
          "Đổi số từ hệ cơ số này sang hệ cơ số khác",
        ],
        a: 3,
      },
      {
        q: "Câu 191: Đoạn chương trình sau in ra kết quả bao nhiêu:\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = “0123456789ABCDEF”;\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 16;\n    ketqua[17] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 2;\n    char number[17] = 123”;\n    cout << functionD(number,n,m);\n    return 0;\n}",
        o: ["1111011", "173", "146", "7B"],
        a: 0,
      },
      {
        q: "Câu 192: Đoạn chương trình sau có kết quả bao nhiêu?\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = “0123456789ABCDEF”;\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 16;\n    ketqua[17] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 9;\n    char number[17] = 123”;\n    cout << functionD(number,n,m);\n    return 0;\n}",
        o: ["1111011", "173", "146", "7B"],
        a: 2,
      },
      {
        q: "Câu 193: Đoạn chương trình sau có kết quả bao nhiêu?\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = “0123456789ABCDEF”;\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 16;\n    ketqua[17] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 8;\n    char number[17] = 123”;\n    cout << functionD(number,n,m);\n    return 0;\n}",
        o: ["173", "146", "A3", "7B"],
        a: 0,
      },
      {
        q: "Câu 194: Đoạn chương trình sau có kết quả bao nhiêu?\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = “0123456789ABCDEF”;\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 16;\n    ketqua[17] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 16;\n    char number[17] = 123”;\n    cout << functionD(number,n,m);\n    return 0;\n}",
        o: ["173", "146", "A3", "7B"],
        a: 3,
      },
      {
        q: "Câu 195: Đoạn chương trình sau thực hiện công việc gì:\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = “0123456789ABCDEF”;\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 16;\n    ketqua[17] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 12;\n    char number[17] = 123”;\n    cout << functionD(number,n,m);\n    return 0;\n}",
        o: ["173", "146", "7B", "A3"],
        a: 3,
      },
      {
        q: 'Câu 196: Cho đoạn mã sau:\n1:int [] a={3,1,7,0,10}\n2:int n=5,k,max;\n3:max=a[0];\n4:   for(k=0;k<n;k++)\n5:       if(max<a[k])\n6:           max=a[k];\n7:    cout << max << endl;\n8:    for(k=0;k<n;k++)\n9:           if(max==a[k])\n10:                cout << k << endl;\nKết quả cho ở dòng lệnh 7 là:"',
        o: ["10", "7", "4", "Lỗi biên dịch"],
        a: 0,
      },
      {
        q: 'Câu 197: Cho đoạn mã sau:\n1:int a[] = {3,1,7,0,10};\n2:int n=5,k,max;\n3:max=a[0];\n4:   for(k=0;k<n;k++)\n5:       if(max<a[k])\n6:           max=a[k];\n7:    cout << max;\n8:    for(k=0;k<n;k++)\n9:           if(max==a[k])\n10:                cout << k;\nKết quả hiển thị ở dòng lệnh 7 là:"',
        o: ["10", "7", "104", "4"],
        a: 0,
      },
      {
        q: 'Câu 198: Cho đoạn mã sau:\n1:int [] a={3,1,7,0,10};\n2:int n=5,k,max;\n3:max=a[0];\n4:   for(k=0;k<n;k++)\n5:       if(max<a[k])\n6:           max=a[k];\n7:    cout << max;\n8:    for(k=0;k<n;k++)\n9:           if(max==a[k])\n10:                cout << k;\nKết quả hiển thị là:"',
        o: ["10", "7", "104", "4"],
        a: 3,
      },
      {
        q: 'Câu 199: Cho đoạn mã sau:\n1: for(int i=0;i<2;i++)\n2:     for(int j=0;j<3;j++){\n3:             if(i==j) continue;\n6:     cout << “i = “ << i << “ j = “ << j << endl;\n7:   }\n"Dòng nào sẽ là một trong các kết quả được in ra?',
        o: ["i = 0 j = 0", "i = 2 j = 1", "i = 0 j = 2", "Lỗi biên dịch"],
        a: 2,
      },
      {
        q: 'Câu 200: Cho đoạn mã sau:\n1: for(i=0;i<2;i++)\n2:     for(j=0;j<3;j++){\n3:             if(i = j) continue;\n6:     cout << “i = “ << i << “ j = “ << j << endl;\n7:   }\n"Dòng nào sẽ là một trong các kết quả được in ra?',
        o: ["i = 0 j = 0", "i = 0 j = 1", "i = 0 j = 2", "Lỗi biên dịch"],
        a: 0,
      },
      {
        q: "Câu 201: Cho đoạn mã sau:\nint n=10,k;\nfor (k = 2;k <= n;k++) {\n    int dem = 0;\n    for (int i = 2; i <= k; i++) if (n % k == 0)  dem++;\n    if ((n % k == 0) && (dem == 1)) cout << k << “ “;\n }\nKết quả đoạn mã là bao nhiêu khi thực hiện?",
        o: ["2", "2 5 10", "2 3 5", "2 5"],
        a: 0,
      },
      {
        q: "Câu 202: Cho đoạn mã sau:\nint n=10,k;\nfor (k = 2;k <= n;k++) {\n    int dem = 0;\n    for (int i = 2; i <= k; i++) if (n % k == 0)  dem++;\n    if ((n % k == 0) || (dem == 1)) cout << k << “ “;\n }\nKết quả đoạn mã là bao nhiêu khi thực hiện?",
        o: ["2", "2 5 10", "2 3 5", "2 5"],
        a: 1,
      },
      {
        q: "Câu 203: Cho đoạn mã sau:\nint N,k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << “ “;\n        N = N/k;\n        k--;\n    }\n Nếu cho N =12, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?",
        o: ["2 2 3", "3 3", "5 5", "2 3 7"],
        a: 0,
      },
      {
        q: "Câu 204: Cho đoạn mã sau:\nint N,k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << “ “;\n        N = N/k;\n        k--;\n    }\n Nếu cho N =9, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?",
        o: ["2 2 3", "3 3", "5 5", "2 3 7"],
        a: 1,
      },
      {
        q: "Câu 205: Cho đoạn mã sau:\nint N,k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << “ “;\n        N = N/k;\n        k--;\n    }\n Nếu cho N =25, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?",
        o: ["2 2 3", "3 3", "5 5", "2 3 7"],
        a: 2,
      },
      {
        q: "Câu 206: Cho đoạn mã sau:\nint N,k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << “ “;\n        N = N/k;\n        k--;\n    }\n Nếu cho N =42, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?",
        o: ["2 2 3", "3 3", "5 5", "2 3 7"],
        a: 3,
      },
      {
        q: "Câu 207: Cho đoạn mã sau:\nint n,k;\nfor (k = 2;k <= N;k++) \n    if (n % k == 0) {\n        cout << k << “ “;\n        n = N/k;\n        k--;\n    }\n Nếu cho N =12, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?",
        o: ["2 2 3", "3 3", "5 5", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 208: Cho đoạn mã sau:\nint N,k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << “ “;\n        N = N/k;\n        k++;\n    }\n Nếu cho N =12, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?",
        o: ["2 6", "3", "5", "2 7"],
        a: 0,
      },
      {
        q: 'Câu 209: Cho đoạn mã sau:\nint N = 9, k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << " ";\n        N = N/k;\n        k--;\n    }\n Nếu cho N =9, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.',
        o: ["2 6", "3 3", "5", "2 7"],
        a: 1,
      },
      {
        q: 'Câu 210: Cho đoạn mã sau:\nint N = 42, k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << " ";\n        N = N/k;\n        k--;\n    }\n Nếu cho N =42, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.',
        o: ["2 6", "3", "5", "2 3 7"],
        a: 3,
      },
      {
        q: 'Câu 211: Cho đoạn mã sau:\nint N = 25, k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << " ";\n        N = N/k;\n        k--;\n    }\n Nếu cho N =25, khi thực hiện đoạn mã sẽ cho kết quả là bao nhiêu?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.',
        o: ["2 6", "3", "5 5", "2 7"],
        a: 2,
      },
      {
        q: "Câu 212: Cho đoạn mã sau; không có khai báo nguyên mẫu của hàm sum trước main:\nint main() {\n    float S = 0.0;\n    int N=2,k;\n    for (k = 1; k <= N; k++)\n        S += 1/sum(k);\n    cout << S;\n    return 0;\n}\nfloat sum(int k) {\n    int tong = 0;\n    for (int x = 1; x <= k; x++) tong += x;\n    return tong;\n}\nKết quả là bao nhiêu khi thực hiện đoạn lệnh trên?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["1", "1.33333", "1.5", "Chương trình báo lỗi"],
        a: 3,
      },
      {
        q: "Câu 213: Cho đoạn mã sau:\nfloat sum(int);\nint main() {\n    float S = 0.0;\n    int N=2,k;\n    for (k = 1; k <= N; k++)\n        S += 1/sum(k);\n    cout << S;\n    return 0;\n}\nfloat sum(int k) {\n    int tong = 0;\n    for (int x = 1; x <= k; x++) tong += x;\n    return tong;\n}\nKết quả là bao nhiêu khi thực hiện đoạn lệnh trên?",
        o: ["1", "1.33333", "1.5", "1.6"],
        a: 1,
      },
      {
        q: "Câu 214: Cho đoạn mã sau:\nfloat sum(int);\nint main() {\n    float S = 0.0;\n    int N=4,k;\n    for (k = 1; k <= N; k++)\n        S += 1/sum(k);\n    cout << S;\n    return 0;\n}\nfloat sum(int k) {\n    int tong = 0;\n    for (int x = 1; x <= k; x++) tong += x;\n    return tong;\n}\nKết quả là bao nhiêu khi thực hiện đoạn lệnh trên?",
        o: ["1", "1.3333334", "1.5", "1.6"],
        a: 3,
      },
      {
        q: "Câu 215: Cho đoạn mã sau:\nfloat sum(int);\nint main() {\n    float S = 0.0;\n    int N=5,k;\n    for (k = 1; k <= N; k++)\n        S += 1/sum(k);\n    cout << S;\n    return 0;\n}\nfloat sum(int k) {\n    int tong = 0;\n    for (int x = 1; x <= k; x++) tong += x;\n    return tong;\n}\nKết quả là bao nhiêu khi thực hiện đoạn lệnh trên?",
        o: ["1.6", "1.33333", "1.5", "1.66667"],
        a: 3,
      },
      {
        q: "Câu 216: Cho đoạn mã sau:\nint main() {\n    double a = 4, xn, kq, dem = 0;\n    xn = (a + 1) / 2;\n    do {\n        kq = xn;\n        xn = 0.5 * (xn + a/xn);\n        dem++;\n    } while (fabs(xn - kq) > 0.001);\n    cout << kq;\n    return 0;\n}\nKết quả là bao nhiêu khi thực hiện đoạn lệnh trên (lấy kết quả làm tròn 2 số thập phân)?\nGiả sử các thư viện chuẩn cần thiết đã được đưa vào và có using namespace std; các dòng đánh số chỉ là nhãn dòng.",
        o: ["2.00", "1.41", "1.73", "3"],
        a: 0,
      },
      {
        q: "Câu 217: Cho đoạn mã sau:\nint main() {\n    double a = 4, xn, kq, dem = 0;\n    xn = (a + 1) / 2;\n    do {\n        kq = xn;\n        xn = 0.5 * (xn + a/xn);\n        dem++;\n    } while (fabs(xn - kq) > 0.001);\n    cout << dem;\n    return 0;\n}\nKết quả là bao nhiêu khi thực hiện đoạn lệnh trên (lấy kết quả làm tròn 2 số thập phân)?",
        o: ["2", "1.41", "1.73", "3"],
        a: 3,
      },
      {
        q: "Câu 218: Cho đoạn mã sau:\nint main() {\n    double a = 3, xn, kq, dem = 0;\n    xn = (a + 1) / 2;\n    do {\n        kq = xn;\n        xn = 0.5 * (xn + a/xn);\n        dem++;\n    } while (fabs(xn - kq) > 0.001);\n    cout << kq;\n    return 0;\n}\nKết quả là bao nhiêu khi thực hiện đoạn lệnh trên (lấy kết quả làm tròn 2 số thập phân)?",
        o: ["2", "1.41", "1.73", "3"],
        a: 2,
      },
      {
        q: "Câu 219: Cho đoạn mã sau:\nint main() {\n    char chuoi[] = “tinhoc”;\n    int khoa = 1,i,len;\n    len = strlen(chuoi);\n    for (i = 0; i < len; i++) chuoi[i] = (char) ((int)chuoi[i] + khoa);\n    cout << chuoi;\nĐoạn chương trình trên in ra kết quả là?",
        o: ["ujoipd", "tinhoc", "TINHOC", "Lỗi biên dịch"],
        a: 0,
      },
      {
        q: "Câu 220: Cho đoạn mã sau:\nint main() {\n    char chuoi[] = “tinhoc”;\n    int khoa = 32,i,len;\n    len = strlen(chuoi);\n    for (i = 0; i < len; i++) chuoi[i] = (char) ((int)chuoi[i] - khoa);\n    cout << chuoi;\nĐoạn chương trình trên in ra kết quả là?",
        o: ["ujoipd", "tinhoc", "TINHOC", "Lỗi biên dịch"],
        a: 2,
      },
      {
        q: "Câu 221: Cho đoạn mã sau:\nint main() {\n    char chuoi[] = “tinhoc”;\n    int khoa = 32,i,len;\n    len = strlen(chuoi);\n    for (i = 0; i < len; i++) chuoi = (char) ((int)chuoi[i] - khoa);\n    cout << chuoi;\nĐoạn chương trình trên in ra kết quả là?",
        o: ["ujoipd", "tinhoc", "TINHOC", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 222: Cho đoạn mã sau:\n1. float tinhtich (int k) {\n2.     float tich =1;\n3.     for (int i = 1; i <=k; i++) tich *= i;\n4.     return tich;\n5. }\n6. float tinhtong (int k) {\n7.     float tong = 0;\n8.     for (int i = 1; i <= k; i++) tong += tinhtich(i);\n9.     return tong;\n10.    }\n11.    int main() {\n12.        float s = 0.0;\n13.        int n = 3, k;\n14.        for (k = 1; k <= n; k++) s += 1/tinhtong(k);\n15.        cout << s;\n16.        return 0;\n17.    }\nKhi thực hiện, đoạn mã trên cho kết quả là bao nhiêu?",
        o: ["1.44444", "1.33333", "1.47475", "Lỗi biên dịch"],
        a: 0,
      },
      {
        q: "Câu 223: Cho đoạn mã sau:\n1. float tinhtong (int k) {\n2.     float tong = 0;\n2.     for (int i = 1; i <= k; i++) tong += tinhtich(i);\n2.     return tong;\n5. }\n6. float tinhtich (int k) {\n7.     float tich =1;\n8.     for (int i = 1; i <=k; i++) tich *= i;\n9.     return tich;\n10.    }\n11.    int main() {\n12.        float s = 0.0;\n13.        int n = 3, k;\n14.        for (k = 1; k <= n; k++) s += 1/tinhtong(k);\n15.        cout << s;\n16.        return 0;\n17.    }\nKhi thực hiện, đoạn mã trên cho kết quả là bao nhiêu?",
        o: ["1.44444", "1.33333", "1.47475", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 224: Cho đoạn mã sau:\n1. float tinhtich (int k) {\n2.     float tich =1;\n3.     for (int i = 1; i <=k; i++) tich *= i;\n4.     return tich;\n5. }\n6. float tinhtong (int k) {\n7.     float tong = 0;\n8.     for (int i = 1; i <= k; i++) tong += tinhtich(i);\n9.     return tong;\n10.    }\n11.    int main() {\n12.        float s = 0.0;\n13.        int n = 4, k;\n14.        for (k = 1; k <= n; k++) s += 1/tinhtong(k);\n15.        cout << s;\n16.        return 0;\n17.    }\nKhi thực hiện, đoạn mã trên cho kết quả là bao nhiêu?",
        o: ["1.44444", "1.33333", "1.47475", "1"],
        a: 2,
      },
      {
        q: "Câu 225: Cho đoạn mã sau:\n1. float tinhtich (int k) {\n2.     float tich =1;\n3.     for (int i = 1; i <=k; i++) tich *= i;\n4.     return tich;\n5. }\n6. float tinhtong (int k) {\n7.     float tong = 0;\n8.     for (int i = 1; i <= k; i++) tong += tinhtich(i);\n9.     return tong;\n10.    }\n11.    int main() {\n12.        float s = 0.0;\n13.        int n = 4, k;\n14.        for (k = 1; k <= n; k++) {\n15.            s += 1/tinhtong(k);\n16.            s = 1;\n17.        }\n18.        cout << s;\n19.        return 0;\n20.    }\nKhi thực hiện, đoạn mã trên cho kết quả là bao nhiêu?",
        o: ["1.44444", "1.33333", "1.47475", "1"],
        a: 3,
      },
      {
        q: "Câu 226: Cho đoạn mã sau:\n1. int main () {\n2.     int n = 5, i, j, tong;\n3.     for (i = 2; i <= n; i++) {\n4.         tong = 1;\n5.         for (j = 2; j <= i/2; j++)\n6.             if ( i % j == 0 ) tong += j;\n7.             if ( tong == j ) cout << i << “ “;\n8.     }\n9.     return 0;\n10.    }\nĐoạn chương trình trên in ra kết quả là bao nhiêu?",
        o: [
          "4",
          "2 3 5",
          "3 5",
          "Lỗi biên dịch vì thiếu dấu {} ở lệnh for dòng 5",
        ],
        a: 0,
      },
      {
        q: "Câu 227: Cho đoạn mã sau:\n1. int main () {\n2.     int n = 5, i, j, tong;\n3.     for (i = 2; i <= n; i++) {\n4.         tong = 1;\n5.         for (j = 2; j <= i; j++)\n6.             if ( i % j == 0 ) tong += j;\n7.             if ( tong == j ) cout << i << “ “;\n8.     }\n9.     return 0;\n10.    }\nĐoạn chương trình trên in ra kết quả là bao nhiêu?",
        o: ["4", "2 3 5", "3 5", "Lỗi biên dịch"],
        a: 1,
      },
      {
        q: "Câu 228: Chương trình có kết quả là bao nhiêu khi thực hiện:\nunsigned long giaithua (int k) {\n    unsigned long kq = 1;\n    for (int i = 2; i <= k; i++) kq *= i;\n    return kq;\n}\nunsigned long th (int k, int n) {\n    return giaithua (n) / (giaithua (k) *  giaithua (n-k));\n}\nint main() {\n    int n = 3, k= 2;\n    cout << th(k,n);\n    return 0;\n}",
        o: ["3", "6", "0", "Lỗi biên dịch"],
        a: 0,
      },
      {
        q: "Câu 229: Chương trình có kết quả là bao nhiêu khi thực hiện:\nunsigned long giaithua (int k) {\n    unsigned long kq = 1;\n    for (int i = 2; i <= k; i++) kq *= i;\n    return kq;\n}\nunsigned long th (int k, int n) {\n    return giaithua (n) / (giaithua (k) *  giaithua (n-k));\n}\nint main() {\n    int n = 4, k= 2;\n    cout << th(k,n);\n    return 0;\n}",
        o: ["3", "6", "0", "Lỗi biên dịch"],
        a: 1,
      },
    ],
  },
];
export default QUIZ_SETS_CPP_NANG_CAO;
