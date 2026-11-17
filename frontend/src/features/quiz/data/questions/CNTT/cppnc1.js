const QUIZ_SETS_CPP_NANG_CAO1 = [
  {
    id: "lap_trinh_cpp_nang_cao_update",
    majorId: "cntt",
    title: "Lập Trình C++ Nâng Cao UPDATE",
    description:
      "Ôn tập lập trình hướng đối tượng, lớp, kế thừa, con trỏ, chuỗi, mảng và thuật toán trong C++. Với đoạn C++, giả sử đã khai báo các header chuẩn cần thiết và using namespace std khi đề không ghi.",
    questions: [
      {
        q: "Câu 1: Anh (Chị) hãy cho biết, đối tượng là gì?",
        o: [
          "Là một thực thể.",
          "Là một khuôn mẫu được tạo ra trong phần mềm.",
          "Là biểu diễn của một thực thể trong thế giới thực của phần mềm.",
          "Là nhóm thực thể có thuộc tính chung.",
        ],
        a: 2,
      },
      {
        q: "Câu 2: Anh (Chị) hãy cho biết, lớp là gì?",
        o: [
          "Là một khuôn mẫu hoặc bản vẽ định nghĩa trạng thái và hành vi của tất cả các đối tượng thuộc về lớp đó.",
          "Là một khuôn mẫu định nghĩa trong phần mềm.",
          "Là một dạng hàm của chương trình.",
          "Là khuôn mẫu hoặc bản vẽ định nghĩa các hàm giao tiếp với người dùng của chương trình hướng đối tượng.",
        ],
        a: 0,
      },
      {
        q: "Câu 3: Anh (Chị) hãy cho biết, câu nào sau đây là SAI?",
        o: [
          "Lớp là một mô hình khái niệm.",
          "Lớp là một thực thể trong thế giới thực.",
          "Đối tượng là một vật thể thực.",
          "Đối tượng là một đại diện của lớp.",
        ],
        a: 1,
      },
      {
        q: "Câu 4: Anh (Chị) hãy cho biết, trong các khai báo dưới đây, lệnh nào khai báo số nguyên có dấu?",
        o: [
          "unsigned short number ;",
          "short number ;",
          "unsigned long;",
          "signed byte number",
        ],
        a: 1,
      },
      {
        q: "Câu 5: Anh (Chị) hãy cho biết vai trò của hàm thành viên trong một lớp?",
        o: [
          "Hàm thành viên biểu diễn hành vi của lớp.",
          "Trường dữ liệu biểu diễn trạng thái của một đối tượng.",
          "Trường dữ liệu là đại diện của lớp.",
          "Hàm thành viên biểu diễn trạng thái của một đối tượng.",
        ],
        a: 0,
      },
      {
        q: "Câu 6: Anh (Chị) hãy cho biết, hai biến a, b trong đoạn lệnh dưới đây có quyền truy cập là gì?\nclass tinhtong {\nint a,b;\npublic: int tong(void);\n};",
        o: ["public", "private", "protected", "Tất cả các quyền."],
        a: 1,
      },
      {
        q: "Câu 7: Anh (Chị) hãy chọn đáp án SAI?",
        o: [
          'char kytu = "A";',
          "char kytu = 28;",
          "signed char offset = -88;",
          'char kytu[ ] = "sinh vien";',
        ],
        a: 0,
      },
      {
        q: "Câu 8: Anh (Chị) hãy cho biết, một lớp trong C++ có bao nhiêu lớp con?",
        o: ["2", "3", "4", "Vô số."],
        a: 3,
      },
      {
        q: "Câu 9: Anh (Chị) hãy cho biết, một lớp trong C++ có thể có bao nhiêu lớp cha?",
        o: ["1", "2", "10", "Vô số."],
        a: 3,
      },
      {
        q: "Câu 10: Anh (Chị) hãy chọn phát biểu đúng về tính đóng kín trong lập trình hướng đối tượng của C++?",
        o: [
          "Tiến trình che dấu việc thực thi chi tiết một đối tượng.",
          "Các hành động và thuộc tính định nghĩa trong một lớp có thể được thừa kế hoặc sử dụng lại bởi các lớp khác.",
          "Nhiều hình thức, hành động cùng tên có thể được thực hiện khác nhau đối với các đối tượng hoặc các lớp các khác nhau.",
          "Tiến trình truyền dữ liệu vào biến của đối tượng.",
        ],
        a: 0,
      },
      {
        q: "Câu 11: Anh (Chị) hãy chọn phát biểu đúng về tính kế thừa trong lập trình hướng đối tượng của C++?",
        o: [
          "Tiến trình che dấu việc thực thi chi tiết một đối tượng.",
          "Các hành động và thuộc tính định nghĩa trong một lớp có thể được thừa kế hoặc sử dụng lại bởi các lớp khác.",
          "Nhiều hình thức, hành động cùng tên có thể được thực hiện khác nhau đối với các đối tượng hoặc các lớp các khác nhau.",
          "Tiến trình viết lại hàm thành viên của lớp cha.",
        ],
        a: 1,
      },
      {
        q: "Câu 12: Anh (Chị) hãy chọn phát biểu đúng về tính đa hình trong lập trình hướng đối tượng của C++?",
        o: [
          "Tiến trình che dấu việc thực thi chi tiết một đối tượng.",
          "Các hành động và thuộc tính định nghĩa trong một lớp có thể được thừa kế hoặc sử dụng lại bởi các lớp khác.",
          "Nhiều hình thức, hành động cùng tên có thể được thực hiện khác nhau đối với các đối tượng hoặc các lớp các khác nhau.",
          "Tiến trình viết đè lên một hàm thành viên của lớp con.",
        ],
        a: 2,
      },
      {
        q: "Câu 13: Anh (Chị) hãy cho biết, con trỏ là gì?",
        o: [
          "Một biến chứa giá trị kiểu số thực, số nguyên hoặc ký tự.",
          "Một biến chứa địa chỉ của biến khác.",
          "Một biến có kiểu struct.",
          "Một biến khai báo trong hàm.",
        ],
        a: 1,
      },
      {
        q: "Câu 14: Anh (Chị) hãy cho biết, trường dữ liệu tĩnh (static) còn gọi là gì?",
        o: ["Biến đại diện.", "Biến lớp.", "Biến cục bộ.", "Biến toàn cục."],
        a: 1,
      },
      {
        q: "Câu 15: Anh (Chị) hãy cho biết, trạng thái của đối tượng trong thế giới thực mô tả trong lập trình hướng đối tượng của C++ được gọi là gì?",
        o: [
          "Dữ liệu thành viên.",
          "Hàm thành viên.",
          "Kiểu dữ liệu.",
          "Hàm dữ liệu.",
        ],
        a: 0,
      },
      {
        q: "Câu 16: Anh (Chị) hãy cho biết, các hành vi của đối tượng trong thế giới thực mô tả trong lập trình hướng đối tượng C++ được gọi là gì?",
        o: [
          "Dữ liệu thành viên.",
          "Hàm thành viên.",
          "Thuộc tính.",
          "Hành động.",
        ],
        a: 1,
      },
      {
        q: 'Câu 17: Anh (Chị) hãy cho biết kết quả đoạn lệnh là gì?\nfor (int i = 1; i <= 5; i++)\n    cout << i << ", " ;\ncout << "LAUNCH!" << endl;',
        o: [
          "1, 2, 3, 4, 5, LAUNCH!",
          "0, 1, 2, 3, 4, LAUNCH!",
          "5, 4, 3, 2, 1, LAUNCH!",
          "4, 3, 2, 1, 0, LAUNCH!",
        ],
        a: 0,
      },
      {
        q: 'Câu 18: Anh (Chị) hãy cho biết kết quả đoạn lệnh sau là gì?\nint i = 5;\nfor (i = 1; i < 5; i++) {\n    if (i == 3) continue;\n    cout << i << ", ";\n}\ncout << "END" << endl;',
        o: [
          "1, 2, 3, 4, 5, END",
          "1, 2, 4, END",
          "1, 2, 3, 4, END",
          "1, 2, 4, 5, END",
        ],
        a: 1,
      },
      {
        q: "Câu 19: Anh (Chị) hãy chọn cách khai báo đúng khi định nghĩa hàm thành viên ở ngoài lớp?",
        o: [
          "Kiểu_trả_về_của_hàm Tên_lớp:Tên_hàm(danh sách tham số) {[nội dung hàm]}",
          "Kiểu_trả_về_của_hàm Tên_hàm:Tên_lớp(danh sách tham số) {[nội dung hàm]}",
          "Kiểu_trả_về_của_hàm Tên_hàm(danh sách tham số) {[nội dung hàm]}",
          "Kiểu_trả_về_của_hàm Tên_lớp::Tên_hàm(danh sách tham số) {[nội dung hàm]}",
        ],
        a: 3,
      },
      {
        q: "Câu 20: Anh (Chị) hãy cho biết kết quả đoạn mã sau là gì?\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 5;\n++a;\ncout << a;\nreturn 0;\n}",
        o: ["5", "6", "4", "7"],
        a: 1,
      },
      {
        q: 'Câu 21: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nchar hoten[] = "Dai hoc Kinh doanh va Cong nghe Ha noi"; \nint l = strlen(hoten);\ncout << ++l << endl;',
        o: ["37", "38", "39", "40"],
        a: 2,
      },
      {
        q: "Câu 22: Anh (Chị) hãy cho biết đoạn lệnh sau in ra kết quả nào?\nclass nhanvien {\n    double luong;\n    public:\n      void setLuong(double d) { luong = d; }\n      double getLuong() { return luong; }\n      void tangLuong(double d) { luong += d; }\n};\nclass quanly:public nhanvien {\n  double phucap;\n  public: quanly() { \n  setLuong(100); \n  phucap = getLuong() * 0.5; \n  cout << phucap;\n  }\n};\nint main() { quanly q; }",
        o: [
          "Không hiện gì hết.",
          "50",
          "0",
          "Chương trình báo lỗi vì lớp nhanvien không có hàm constructor nào cả.",
        ],
        a: 1,
      },
      {
        q: "Câu 23: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass nhanvien {\n    double luong;\n    public:\n      void setLuong(double d) { luong = d; }\n      double getLuong() { return luong; }\n      void tangLuong(double d) { luong += d; } \n};\nint main() {\n  nhanvien A;\n  A.setLuong(700); \n  A.tangLuong(10); \n  cout << A.getLuong(); \n}",
        o: ["700", "770", "0", "710"],
        a: 3,
      },
      {
        q: "Câu 24: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass nhanvien {\n    double luong;\n    public:\n      void setLuong(double d) { luong = d; }\n      double getLuong() { return luong; }\n      void tangLuong(double d) { luong += d; }\n};\nint main() {\n  nhanvien A, *p;\n  p = &A; \n  p->setLuong(100); \n  cout << p->luong; \n}",
        o: ["100", "0", "110", "Lỗi biên dịch."],
        a: 3,
      },
      {
        q: "Câu 25: Anh (Chị) hãy cho biết hàm constructor là gì?",
        o: [
          "Là hàm tự động được gọi bất kỳ khi nào một đối tượng mới của lớp được tạo ra.",
          "Là hàm được gọi sau khi thực hiện xong tất cả các hàm thành viên của lớp.",
          "Là hàm được định nghĩa ở bên ngoài lớp và chịu trách nhiệm xoá các thành viên của lớp.",
          "Là hàm được gọi sau khi xóa đối tượng.",
        ],
        a: 0,
      },
      {
        q: 'Câu 26: Anh (Chị) hãy cho biết kết quả đoạn lệnh khi thu = 2?\nswitch (thu) {\n    case 2:\n        cout << "Van, Toan";\n        break;\n    case 3:\n        cout << "Hoa, Ly";\n        break;\n    default:\n        cout << "Ngay nghi";\n        break;\n}',
        o: ["Van, Toan", "Hoa, Ly", "Ngay nghi", "Lỗi biên dịch."],
        a: 0,
      },
      {
        q: 'Câu 27: Anh (Chị) hãy cho biết kết quả đoạn lệnh sau khi color = DEN?\nenum mausac { DEN = 3, LAM, LUC, TRANG };\nmausac color = DEN;\nchar * t;\nswitch (color) {\n    case 0:\n        t = "Mau trang";\n        break;\n    case 1:\n        t = "Mau den";\n        break;\n    case 2: \n        t = "Mau lam";\n        break;\n    case 3:\n        t = "Mau luc";\n        break;\n    default:\n        t = "Khong co trong danh sach mau";\n        break;\n}\ncout << t;',
        o: ["Mau den", "Mau lam", "Mau trang", "Mau luc"],
        a: 3,
      },
      {
        q: "Câu 28: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint s = 0;\nfor (int i = 0; i < 10; i++)\n    s+=i;\ncout << s << endl;",
        o: ["45", "0", "55", "50"],
        a: 0,
      },
      {
        q: "Câu 29: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint i = 0;\nint s = 0;\nfor (int i = 0; i < 10; i++)\n    s+=i;\ncout << i << end;",
        o: ["45", "Chương trình báo lỗi.", "55", "0"],
        a: 1,
      },
      {
        q: "Câu 30: Anh (Chị) hãy cho biết khối lệnh sai ở dòng nào?\n1. int i=0;\n2. do {\n3.     i += 1;\n4. } while (i == 0);\n5. cout << i;",
        o: ["1", "2 và 3", "4", "Không sai ở dòng nào cả"],
        a: 3,
      },
      {
        q: "Câu 31: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\ndouble i = 0, n = 10, s = 0;\nwhile (i < n) {\n    double s = s + n;\n    n--;\n}\ncout << s;",
        o: [
          "Hành vi không xác định do biến s cục bộ được đọc trước khi được khởi tạo; không có kết quả số được bảo đảm.",
          "55",
          "45",
          "10",
        ],
        a: 0,
      },
      {
        q: 'Câu 32: Anh (Chị) hãy cho biết chương trình sau thực hiện công việc gì?\n#define    length(a)   (sizeof(a) / sizeof(*a))\nint main() {\n    int mang[] = {12, 37, 48, 51, 2, 9};\n    int tk = 51, i;\n    bool check = false;\n    for (i = 0; i < length(mang); i++) {\n        if (mang[i] == tk) {\n            check = true;\n            break;\n        }\n    }\n    if (check) cout << "Found " << tk << " at index " << i << endl;\n    else cout <<"Not found";\n    return 0;\n}',
        o: [
          "Tìm 1 phần tử trong mảng.",
          "So sánh các phần tử mảng với nhau.",
          "Tính tổng mảng.",
          "Tìm phần tử lớn nhất.",
        ],
        a: 0,
      },
      {
        q: "Câu 33: Anh (Chị) hãy cho biết chương trình có lỗi cú pháp ở dòng nào và dùng phép gán thay cho phép so sánh ở dòng nào?\n1.define   length(a)   (sizeof(a) / sizeof(*a))\n2.int main() {\n3. int mang[] = {12, 37, 48, 51, 2, 9};\n4. int tk = 51, i;\n5. bool check = false;\n6. for (i = 0; i < length(mang); i++) {\n7.     if (mang[i] = tk) {\n8.         check = true;\n9.         break;\n10.        }\n11.    }\n12.    cout << i ;\n14.    return 0;\n15.}",
        o: ["1, 3", "1, 7", "3, 5, 6", "12, 14"],
        a: 1,
      },
      {
        q: "Câu 34: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nchar chuoi[] = \"peter pan put a pepper into pen\";\nint max = strlen(chuoi);\nint number = 0;\nfor (int i = 0; i < max; i++) {\n    if (chuoi[i] != 'p') continue;\n    number++;\n}\ncout << number << endl;",
        o: ["7", "8", "9", "Chương trình báo lỗi."],
        a: 0,
      },
      {
        q: "Câu 35: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nvoid indl (int *a) {\n    cout << *a;\n}\nint main() {\n    int a = 10;\n    indl (&a);\n    return 0;\n}",
        o: ["10", "11", "Địa chỉ của a.", "Địa chỉ của bộ nhớ đứng trưóc a."],
        a: 0,
      },
      {
        q: 'Câu 36: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau nếu nhập chuỗi Rome từ bàn phím? \nchar str[40];\ncin.getline (str,40);\nif ( strcmp(str, "Juliet") == 0) cout << "Same here";\nelse cout << str;',
        o: ["Same here", "Rome", "Chương trình báo lỗi.", "Không in ra gì cả."],
        a: 1,
      },
      {
        q: "Câu 37: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint i = 10;\nint n = ++i%5;",
        o: ["i = 10, n = 0", "i = 11, n = 0", "i = 10, n = 1", "i = 11, n = 1"],
        a: 3,
      },
      {
        q: 'Câu 38: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint s = 0;\nstring str;\nfor (int i = 0; i < 5; i++) {\n    int k = 0;\n    k += i;\n    s = k;\n}\nstr = ((k % 2) == 0) ? "true" : "false";\ncout << str << endl;',
        o: ["true", "false", "Chương trình lỗi.", "Không in ra gì cả."],
        a: 2,
      },
      {
        q: "Câu 39: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nconst int row = 3;\nconst int col = 4;\nint seasonTemp[row][col] = {\n    { 26, 34, 22, 17 },\n    { 24, 32, 19, 13 },\n    { 28, 38, 25, 20 }\n};\nint functionM (int temp[row][col]) {\n    int m = 0;\n    for (int i = 0; i < row; i++)\n    for (int j = 0; j < col; j++)\n        if (temp[i][j] > m) m = temp[i][j];\n    return m;\n}\nint main() {\n    cout << functionM (seasonTemp) << endl;\n    return 0;\n}",
        o: ["38", "13", "0", "60"],
        a: 0,
      },
      {
        q: "Câu 40: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nconst int row = 3;\nconst int col = 4;\nint seasonTemp[row][col] = {\n    { 26, 34, 22, 17 },\n    { 24, 32, 19, 13 },\n    { 28, 38, 25, 20 }\n};\nint functionM (int temp[row][col]) {\n    int m = 0;\n    for (int i = 0; i < row; i++)\n    for (int j = 0; j < col; j++)\n        if (temp[i][j] < m) m = temp[i][j];\n    return m;\n}\nint main() {\n    cout << functionM (seasonTemp) << endl;\n    return 0;\n}",
        o: ["38", "13", "0", "60"],
        a: 2,
      },
      {
        q: 'Câu 41: Anh (Chị) hãy cho biết giá trị của biến message sau đoạn lệnh dưới đây là gì?\nstring expletive = "Expletive ";\nstring PG13 = "deleted";\nstring message = expletive + PG13;',
        o: [
          "Expletive deleted",
          "Expletivedeleted",
          "deletedExpletive",
          "Lỗi biên dịch.",
        ],
        a: 0,
      },
      {
        q: 'Câu 42: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint BinSearch (const char *item,const char *table[],int n, int (*Sosanh)(const char*,const char*)) {\n    int bot = 0, top = n - 1, mid, cmp;\n    while (bot < top) {\n        mid = (bot + top) / 2;\n        if ((cmp = Sosanh(item,table[mid])) == 0) return mid;\n        else if (cmp < 0) top = mid - 1;\n        else bot = mid + 1;\n    }\n    return -1;\n}\nint main() {\n    const char *cities[] = { "Boston", "London", "Sydney", "Tokyo" };\n    cout << BinSearch ("Sydney",cities,4,strcmp) << endl;\n}',
        o: ["1", "2", "true", "Chương trình báo lỗi."],
        a: 1,
      },
      {
        q: 'Câu 43: Anh (Chị) hãy cho biết đoạn chương trình sau thực hiện công việc gì?\nint BinSearch (const char *item,const char *table[],int n, int (*Sosanh)(const char*,const char*)) {\n    int bot = 0, top = n - 1, mid, cmp;\n    while (bot < top) {\n        mid = (bot + top) / 2;\n        if ((cmp = Sosanh(item,table[mid])) == 0) return mid;\n        else if (cmp < 0) top = mid - 1;\n        else bot = mid + 1;\n    }\n    return -1;\n}\nint main() {\n    const char *cities[] = { "Boston", "London", "Sydney", "Tokyo" };\n    cout << BinSearch ("Sydney",cities,4,strcmp) << endl;\n}',
        o: [
          "Sắp xếp mảng tăng dần.",
          "Sắp xếp mảng giảm dần.",
          "Tìm kiếm một chuỗi trong mảng chuỗi ký tự.",
          "Đếm xem có bao nhiêu thành phần trong mảng chứa chuỗi ký tự cho trước.",
        ],
        a: 2,
      },
      {
        q: 'Câu 44: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nvoid functionS w (int *x, int *y) {\n    int tmp = *x;\n    *x =* y;\n    *y = tmp;\n}\nint main() {\n    int i = 10, j = 20;\n    functionSw (i,j);\n    cout << i << ", " << j << endl;\n}',
        o: ["10, 20", "20, 10", "0, 0", "Lỗi biên dịch."],
        a: 3,
      },
      {
        q: "Câu 45: Anh (Chị) hãy cho biết đoạn lệnh sau thực hiện công việc gì?\nchar* ReChar (const char* str) {\n    int len = strlen (str);\n    char* ketqua = new char[len+1];\n    for (int i = 0; i < len; i++) ketqua[i] = str[len-i-1];\n    ketqua[len] = '\\0';\n    return ketqua;\n}\nint main() {\n    const char *p = \"178892\";\n    cout << ReChar (p) << endl;\n    return 0;\n}",
        o: [
          "Chuyển đổi ký tự thành số.",
          "Đảo ngược chuỗi ký tự.",
          "Sắp xếp chuỗi ký tự.",
          "In các chuỗi ký tự theo chiều tăng dần.",
        ],
        a: 1,
      },
      {
        q: "Câu 46: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nchar* ReChar (const char* str) {\n    int len = strlen (str);\n    char* ketqua = new char[len+1];\n    for (int i = 0; i < len; i++) ketqua[i] = str[len-i-1];\n    ketqua[len] = '\\0';\n    return ketqua;\n}\nint main() {\n    const char *p = \"178892\";\n    cout << ReChar (p) << endl;\n    return 0;\n}",
        o: ["178892", "298871", "127889", "988721"],
        a: 1,
      },
      {
        q: "Câu 47: Anh (Chị) hãy cho biết, cặp dòng nào khai báo hàm ReChar và biến ketqua với kiểu char trong khi bài toán cần kiểu con trỏ char*?\n1. char ReChar (char str) {\n2. int len = strlen (str);\n3. char ketqua = new char[len+1];\n4. for (int i = 0; i < len; i++) ketqua[i] = str[len-i-1];\n5. ketqua[len] = '\\0';\n6. return ketqua;\n7. }\n8. int main() {\n9. char p[] = \"178892\";\n10.    cout << ReChar (p) << endl;\n11.    return 0;\n12.}",
        o: ["1, 3", "5, 10", "6", "Chương trình không sai."],
        a: 0,
      },
      {
        q: "Câu 48: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint val1, val2;\nint * pointer;\npointer = &val1;\n*pointer = 10;\npointer = &val2;\n*pointer = 20;\ncout << val1 * val2 << endl;",
        o: ["10 * 20", "200", "20", "Chương trình báo lỗi."],
        a: 1,
      },
      {
        q: "Câu 49: Anh (Chị) hãy cho biết, tại dòng thứ 6, val2 có giá trị là gì?\n1. int val1 = 5, val2 = 15;\n2. int *p1, *p2;\n3. p1 = &val1;\n4. p2 = &val2;\n5. *p1 = 10;\n6. *p2 = *p1;\n7. p1 = p2;\n8. *p2 = 20;",
        o: ["10", "20", "30", "0"],
        a: 0,
      },
      {
        q: "Câu 50: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint number[5] = { 10, 20, 30, 40, 50 };\nint *p;\np = number;\np++;\n*p += 60;\ncout << number[1] << endl;",
        o: ["10", "20", "50", "80"],
        a: 3,
      },
      {
        q: "Câu 51: Khi thực hiện đoạn lệnh, balance = ?\ndouble balance = 10, goal = 20, payment = 5;\nint years = 0;\nwhile (balance < goal) {\nbalance += payment;\ndouble interest = balance * 0.1 / 100;\nbalance += interest;\nyears ++;\n}",
        o: ["20.015", "15", "15.015", "20.035"],
        a: 3,
      },
      {
        q: "Câu 52: Khi thực hiện đoạn lệnh sau, years = ?\ndouble balance = 20, goal = 20, payment = 5;\nint years = 0;\ndo {\nbalance += payment;\ndouble interest = balance * 0.1 / 100;\nbalance += interest;\nyears ++;\n} while (balance < goal);",
        o: ["1", "2", "0", "3"],
        a: 0,
      },
      {
        q: "Câu 53: Anh (Chị) hãy cho biết kết quả, s = ?\nint s = 0;\nfor (int i = 0; i < 10; i++)\n    s += i;\ns -= 10;\nSau khi chạy khối lệnh s = ?",
        o: ["0", "55", "45", "35"],
        a: 3,
      },
      {
        q: "Câu 54: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nvoid inc (void* data, int psize) {\n    if (psize == sizeof (char)) {\n        char* pchar;\n        pchar = (char*)data;\n        ++(*pchar);\n    } else if (psize == sizeof(int)) {\n        int* pint;\n        pint = (int*)data;\n        ++(*pint);\n    }\n}\nint main() {\n    int s = 1642;\n    inc (&s,sizeof(s));\n    cout << s << endl;\n    return 0;\n}",
        o: ["1642", "1641", "1643", "Lỗi biên dịch."],
        a: 2,
      },
      {
        q: "Câu 55: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nvoid inc (void* data, int psize) {\n    if (psize == sizeof (char)) {\n        char* pchar;\n        pchar = (char*)data;\n        ++(*pchar);\n    } else if (psize == sizeof(int)) {\n        int* pint;\n        pint = (int*)data;\n        ++(*pint);\n    }\n}\nint main() {\n    char c = 'y';\n    inc (&s,sizeof(s));\n    cout << s << endl;\n    return 0;\n}",
        o: ["'y'", "'x'", "'z'", "Lỗi biên dịch."],
        a: 3,
      },
      {
        q: "Câu 56: Đoạn lệnh sau đưa ra kết quả là gì?\nvoid inc (void* data, int psize) {\n    if (psize == sizeof (char)) {\n        char* pchar;\n        pchar = (char*)data;\n        ++(*pchar);\n    } else if (psize == sizeof(int)) {\n        int* pint;\n        pint = (char*)data;\n        ++(*pint);\n    }\n}\nint main() {\n    int s = 1642;\n    inc (s);\n    void << s << endl;\n    return 0;\n}",
        o: ["1642", "1643", "1641", "Lỗi biên dịch."],
        a: 3,
      },
      {
        q: "Câu 57: Chương trình tên test.exe với mã lệnh như bên dưới. Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau khi chạy lệnh chương trình: test 3 3?\nint main(int argc,char* argv[]) {\n    double s = 1;\n    for (int i = 0; i < argv[2]; i++)  s += atof(argv[1]);\n    cou << s << endl;\n    return 0;\n}",
        o: ["27", "9", "3", "Lỗi biên dịch."],
        a: 3,
      },
      {
        q: "Câu 58: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint add (int a, int b) { return (a + b); }\nint sub (int a, int b) { return (a - b); }\nint operation (int x, int y, int (*functocall) (int,int)) {\n    int s = (*functocall) (x,y);\n    return s;\n}\nint main() {\n    int m,n;\n    int (*minus)(int,int) = sub;\n    m = (7,5,add);\n    n = (20,m,minus);\n    return 0;\n}",
        o: ["12", "32", "8", "Lỗi biên dịch."],
        a: 3,
      },
      {
        q: "Câu 59: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint s = 0, n = 10;\nint number[3][3];\nfor (int i = 0,j = 0; i < 3,j < 3; i++, j++) {\n    number[i][j] = n --;\n    s += number[i][j];\n}\ncout << s << endl;",
        o: ["10", "9", "8", "27"],
        a: 3,
      },
      {
        q: "Câu 60: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nvoid inc (void* data,int psize) {\n    if (psize == sizeof(char)) {\n        char *p;\n        p = (char*)data;\n        ++(*p);\n    }\n}\nstruct hocsinh {\n    string hoten;\n    int namsinh;\n};\nint main() {\n    char ten = 'A'; \n    hocsinh hs[3];\n    for (int i = 0; i < 3; i++) {\n        hs[i].hoten = ten;\n        hs[i].namsinh = 1990 + i;\n        inc (&ten,sizeof(ten));\n    }\n    cout << hs[1].hoten << \" - \" << hs[1].namsinh << endl;\n    return 0;\n}",
        o: ["A - 1990", "B - 1991", "C - 1992", "A – 1991"],
        a: 1,
      },
      {
        q: "Câu 61: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\n struct hocsinh {\n    string hoten;\n    int namsinh;\n};\nint main() {\n    hocsinh hs[3];\n    hocsinh *p = hs;\n    for (int i = 0; i < 3; i++) {\n        p->namsinh = 1991 + i;\n        p++;\n    }\n    p = hs+1;\n    p->namsinh -= 20;\n    cout << hs[1].namsinh << endl;\n    return 0;\n}",
        o: ["1972", "1971", "1970", "1973"],
        a: 0,
      },
      {
        q: "Câu 62: Anh (Chị) hãy cho biết, chương trình sau sai ở dòng nào?\n1.struct hocsinh {\n2. string hoten;\n3. int namsinh;\n4.};\n5.int main() {\n6. hocsinh hs[3];\n7. hocsinh *p = hs;\n8. for (int i = 0; i < 3; i++) {\n9.     p->namsinh = 1991 + i;\n10.        p++;\n11.    }\n12.    *p = hs+1;\n13.    p.namsinh -= 20;\n14.    cout << *p.namsinh << endl;\n15.    return 0;\n16.}",
        o: ["Không sai dòng nào.", "9, 12, 14", "12, 13, 14", "9, 13, 14"],
        a: 2,
      },
      {
        q: 'Câu 63: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nstruct hocsinh {\n    string hoten;\n    int namsinh;\n    double diem;\n};\ndouble bac3 (double a,int x) {\n    double d = 1;\n    for (int i = 0; i < x; i++) d *= a;\n    return d;\n}\nint main() {\n    hocsinh hs[3];\n    hocsinh *p;\n    p = hs;\n    for (int i = 0; i < 3; i++) {\n        p->diem = 5;\n        p++;\n    }\n    cout << hs[0].diem << ", " << bac3(hs[1].diem,2);\n    return 0;\n}',
        o: ["5, 25, 125", "5, 25, 625", "5, 25", "5, 5"],
        a: 2,
      },
      {
        q: 'Câu 64: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\ndouble bac3 (double a, int x) {\n    for (int i = 0; i < x; i++)  a = a * a;\n    return a;\n}\nint main() {\n    int i = 3;\n    cout << i << ", " << bac3(i,2);\n    return 0;\n}',
        o: ["3, 81", "3, 9", "9, 81", "3, 18"],
        a: 0,
      },
      {
        q: "Câu 65: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass nhanvien {\n    double luong;\n    public:\n        void setLuong(double d) { luong = d; }\n        double getLuong() { return luong; }\n        void tangLuong(double d) { luong += d; } \n};\nint main() {\n    nhanvien A;\n    A.setLuong(700);\n    nhanvien B = A;\n    B.tangLuong(100);\n    cout << B.luong;\n    return 0;\n}",
        o: ["700", "800", "0", "Lỗi biên dịch."],
        a: 3,
      },
      {
        q: "Câu 66: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        int DT () { return (height * width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nint main() {\n    CRect cn (7,7);\n    cout << cn.DT();\n    return 0;\n}",
        o: ["Lỗi biên dịch.", "7", "49", "14"],
        a: 2,
      },
      {
        q: "Câu 67: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        int DT () { return (height + width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nint main() {\n    CRect cn (7,7);\n    cout << cn.DT();\n    return 0;\n}",
        o: ["21", "7", "49", "14"],
        a: 3,
      },
      {
        q: "Câu 68: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass CRect {\n    int height, width;\n    public:\n        CRect (int,int);\n        CRect ();\n        int DT (void) { return (height * width); }\n};\nCRect::CRect (int a, int b) {\n    height = a;\n    width = b;\n}\nCRect::CRect () {\n    height = 5;\n    width = 5;\n}\nint main() {\n    CRect cn1 (3,4);\n    CRect cn2;\n    cout << cn1.DT() + cn2.DT();\n    return 0;\n}",
        o: ["12", "25", "37", "21"],
        a: 2,
      },
      {
        q: "Câu 69: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass CRect {\n    int *height, *width;\n    public:\n        CRect (int,int);\n        ~CRect ();\n        int DT (void) { return (*height * *width); }\n};\nCRect::CRect (int a, int b) {\n    height = new int;\n    width = new int;\n    *height = a;\n    *width = b;\n}\nCRect::~CRect() {\n    delete height;\n    delete width;\n}\nint main() {\n    CRect cn1 (3,4);\n    cout << cn1.DT();\n    return 0;\n}",
        o: ["12", "20", "7", "10"],
        a: 0,
      },
      {
        q: "Câu 70: Anh (Chị) hãy cho biết, chương trình sau sai ở dòng nào?\n1. class CRect {\n2.  int *height, *width;\n3.   public:\n4.       CRect (int,int);\n5.       ~CRect ();\n6.       int DT (void) { return (height * width); }\n7. }\n8. CRect::CRect (int a, int b) {\n9.    height = new int;\n10.   width = new int;\n11.   *height = a;\n12.   *width = b;\n13.}\n14. CRect::~CRect() {\n15.    delete height;\n16.    delete width;\n17. }\n18. int main() {\n19.   CRect cn1 (3,4);\n20.   cout << cn1.DT();\n21.   return 0;\n22. }",
        o: ["6, 7", "9, 10", "6, 11, 12", "Không sai dòng nào."],
        a: 0,
      },
      {
        q: "Câu 71: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\n1. class CRect {\n2. int height, width;\n3. public:\n4.     void setGiatri(int a, int b) {\n5.         height = a;\n6.         width = b;\n7.     }\n8.     int DT() { return (height * width); }\n9. };\n10. int main() {\n11.    CRect a, *b, *c, *d;\n12.    d = new CRect[2];\n13.    b = new CRect;\n14.    c = &a;\n15.    a.setGiatri(1,2);\n16.    b->setGiatri(3,4);\n17.    d->setGiatri(5,6);\n18.    d[1].setGiatri(7,8);\n19.    cout << c->DT() << endl;\n20.    delete b;\n21.    delete[] d;\n22.    return 0;\n23. }",
        o: ["2", "12", "30", "56"],
        a: 0,
      },
      {
        q: "Câu 72: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\n1. class CRect {\n2. int height, width;\n3. public:\n4.     void setGiatri(int a, int b) {\n5.         height = a;\n6.         width = b;\n7.     }\n8.     int DT() { return (height * width); }\n9. };\n10. int main() {\n11.    CRect a, *b, *c, *d;\n12.    d = new CRect[2];\n13.    b = new CRect;\n14.    c = &a;\n15.    a.setGiatri(1,2);\n16.    b->setGiatri(3,4);\n17.    d->setGiatri(5,6);\n18.    d[1].setGiatri(7,8);\n19.    cout << c->DT() * (*b).DT() << endl;\n20.    delete b;\n21.    delete[] d;\n22.    return 0;\n23. }",
        o: ["24", "12", "30", "56"],
        a: 0,
      },
      {
        q: "Câu 73: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\n1. class CVector {\n2.     public:\n3.     int x,y;\n4.     CVector () {}\n5.     CVector (int,int);\n6.     CVector operator+ (CVector);\n7. };\n8. CVector::CVector (int a,int b) {\n9.     x = a;\n10.    y = b;\n11. }\n12. CVector CVector::operator+ (CVector v) {\n13.    CVector tmp;\n14.    tmp.x = x + v.x;\n15.    tmp.y = y + v.y;\n16.    return tmp;\n17.}\n18.int main () {\n19.    CVector a (3,1);\n20.    CVector b(8,4);\n21.    CVector c;\n22.    c = a + b;\n23.    cout << c.x + c.y << endl;\n24.    return 0;\n25.}",
        o: ["-8", "5", "16", "4"],
        a: 2,
      },
      {
        q: "Câu 74: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint i;\nfloat p;\np=1;\nfor(i=1;i<3;i++) {\n    p=p*i;\n    p=p*p;\n    }\ncout << p << endl;",
        o: ["p=6", "p=4", "p=124", "p=144"],
        a: 1,
      },
      {
        q: "Câu 75: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass tinh {\npublic:\nint a;\ntinh() {}\ntinh(int i) {a = i;}\ntinh operator+(tinh t) {\ntinh tmp;\ntmp.a = a % t.a;\nreturn tmp\n}\n};\nint main() {\ntinh t1(1), t2(3),t3;\nt3 = t1 + t2;\ncout << t.a;\n}",
        o: ["1", "3", "4", "Lỗi biên dịch"],
        a: 3,
      },
      {
        q: "Câu 76: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì? \nclass rec {\npublic: \nint *w;\nrec(int a) { w = new int; *w = a; }\n};\nint main() {\nrec r(1);\ncout << r.w;\n}",
        o: [
          "1",
          "0",
          "Địa chỉ vùng nhớ kiểu int mà r.w đang trỏ tới.",
          "Lỗi biên dịch.",
        ],
        a: 2,
      },
      {
        q: "Câu 77: Anh (Chị) hãy cho biết, chương trình sau sai ở dòng nào?\n1. class CVector {\n2.    int x,y;\n3.     public:\n4.     CVector () {}\n5.     CVector (int,int);\n6.     CVector operator+ (CVector);\n7. }\n8. CVector::CVector (int a,int b) {\n9.     x = a;\n10.    y = b;\n11. }\n12. CVector CVector::operator+ (CVector v) {\n13.    CVector tmp;\n14.    tmp.x = x % v.x;\n15.    tmp.y = y % v.y;\n16.    return tmp;\n17.}\n18.int main () {\n19.    CVector a (3,1);\n20.    CVector b(8,4);\n21.    CVector c;\n22.    c = a + b;\n23.    cout << c.x + c.y << endl;\n24.    return 0;\n25.}",
        o: ["1, 3", "7, 23", "14, 15", "Không sai dòng nào."],
        a: 1,
      },
      {
        q: 'Câu 78: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass rect {\nint x,y;\npublic:\n    void setValue(int a,int b) { x = a, y = b; } \t\n    int area() { return a * b; } \n}; \nint main() { \n    rect r; \n    r.setValue(2,3); \n    cout << "Chu vi hinh chu nhat: " << r.area(); \n  return 0; \n}',
        o: ["Lỗi biên dịch.", "6", "5", "0"],
        a: 0,
      },
      {
        q: "Câu 79: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nclass test {\npublic:\n    int a;\n    test(int i) {a = i}\n    int b3(int b) { \n     for(int i = 1; i <= b; i++) a *= a;\n     return a;\n}\nint main() {\ntest t(3);\ncout << t.b(3);\n}",
        o: ["81", "3", "9", "Lỗi biên dịch."],
        a: 3,
      },
      {
        q: 'Câu 80: Anh (Chị) hãy cho biết đoạn lệnh sau thực hiện công việc gì?\nint i,j;\nchar c;\nfor (i = 2; i < 16; i++)\n        for (j = 0; j < 16; j++) {\n            if (j == 0) cout << endl;\n            c = i * 16 + j;\n            cout <<  " " << c;\n        }',
        o: [
          "In ra dãy số từ 0 đến 16.",
          "In ra các ký tự có mã từ 32 đến 255 theo bảng mã của môi trường.",
          "In ra các bội số của 16.",
          "Lệnh sai.",
        ],
        a: 1,
      },
      {
        q: 'Câu 81: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint main() {\n        int k,n;\n        for (k=1;k<30;k++)\n            if ((k%3==0) && (k%7==0))\n                cout << k << " ";\n        }\n        return 0;\n}',
        o: ["21", "1 21", "14", "Chương trình báo lỗi."],
        a: 3,
      },
      {
        q: 'Câu 82: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint main() {\n        int num, dv, c, t;\n        for (num = 100; num < 160; num++) {\n            dv = num % 10;\n            c = (num / 10) % 10;\n            t = num / 100;\n            if (dv * dv * dv + c * c * c + t * t * t == num) cout << num << " ";\n            }\n        return 0;\n}',
        o: ["153", "110", "145", "Lỗi biên dịch."],
        a: 0,
      },
      {
        q: 'Câu 83: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint n=12,k=2;\nwhile(k<n){\n  for(k=2;k<=n;k++)\n        if(n%k==2){\n               cout << k << " ";\n                n /= k;\n                break;\n        } \n}',
        o: ["2 2 3", "3 2 2", "5", "2 3 6"],
        a: 2,
      },
      {
        q: "Câu 84: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint main() {\n        int n,k,dem;\n        for ( k = 1; k < 10; k++ ) {\n            dem = 0;\n            for ( n = 2; n <= k; n++ ) \n                if ( k%n==0) dem++;\n            if (dem > 1) cout << k;\n    }\n}",
        o: ["Chương trình báo lỗi.", "468910", "8910", "4689"],
        a: 3,
      },
      {
        q: 'Câu 85: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\ntypedef struct tagcomplex {\n    float thuc,ao;\n} complex;\ncomplex tich (complex a,complex b) {\n    complex c;\n    c.thuc = a.thuc * b.thuc - a.ao * b.ao;\n    c.ao = a.thuc * b.ao + a.ao * b.thuc;\n    return c;\n}\nvoid print_complex (complex a) {\n    printf("%.2f + %.2fi", a.thuc, a.ao);\n}\nint main() {\n    complex a, b, c;\n    a.thuc = 3.2; a.ao =2.8;\n    b.thuc = 5.0; b.ao = 3.5;\n    c = tich (a,b);\n    print_complex (c);\n    return 0;\n}',
        o: [
          "Chương trình báo lỗi.",
          "6.20 + 25.20i",
          "25.80 + -2.80i",
          "6.2 + 25.2",
        ],
        a: 1,
      },
      {
        q: 'Câu 86: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint main() {\n        int k=0,n,dem,j=0;\n        while(j<3) {\n            k++;\n            dem=0; \n            for(n=2;n<=k;n++)  if(k%n==0) dem++;\n            if(dem==1) {\n                cout << k << " ";\n                j++;\n            }\n        }\n        return 0;\n}',
        o: ["Chương trình báo lỗi.", "2 3 5", "2 3 5 7 11", "3 4 5 7 11"],
        a: 1,
      },
      {
        q: 'Câu 87: Anh (Chị) hãy cho biết kết quả khi biên dịch đoạn mã Java sau là gì?\npublic class Test {\n    public static void main(String[] args) {\n        int k=0,n,dem,j=0;\n        while(j<3) {\n            k=8;\n            dem=0; { \n            for(n=3;n<=k;n++) { \n                if(k%n==0)\n                    dem++;\n            }\n            if(dem==1) {\n                System.out.print(k+" ");\n                j++;\n            }\n        }\n    }\n}',
        o: ["Chương trình báo lỗi.", "2 3 5", "2 3 5 7 11", "3 4 5 7 11"],
        a: 0,
      },
      {
        q: 'Câu 88: Anh (Chị) hãy cho biết đoạn lệnh sau thực hiện công việc gì?\nint main() {\n        int k=0,n,dem,j=0;\n        while(j<3) {\n            k++;\n            dem=0; \n            for(n=2;n<=k;n++)  if(k%n==0) dem++;\n            if(dem==1) {\n                cout << k << "\\t";\n                j++;\n            }\n        }\n        return 0;\n}',
        o: [
          "In ra các hợp số từ 1 đến 10.",
          "In ra tổng các số từ 1 đến 10.",
          "In ra 3 số nguyên tố đầu tiên.",
          "In ra các số từ 1 đến 100 và chia hết cho 3,7.",
        ],
        a: 2,
      },
      {
        q: 'Câu 89: Anh (Chị) hãy cho biết đoạn lệnh sau thực hiện công việc gì?\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = "0123456789ABCDEF";\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 15;\n    ketqua[16] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 2;\n    char number[17] = "123";\n    cout << functionD(number,n,m);\n    return 0;\n}',
        o: [
          "In ra các số nguyên tố từ 0 đến số đã cho.",
          "In ra các hợp số của số đã cho.",
          "Chuyển đổi số phức.",
          "Đổi số từ hệ cơ số này sang hệ cơ số khác.",
        ],
        a: 3,
      },
      {
        q: 'Câu 90: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = "0123456789ABCDEF";\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 15;\n    ketqua[16] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 2;\n    char number[17] = "123";\n    cout << functionD(number,n,m);\n    return 0;\n}',
        o: ["1111011", "173", "146", "7B"],
        a: 0,
      },
      {
        q: 'Câu 91: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nchar * functionD (char *number,int n,int m) {\n    static char ketqua[17];\n    char chuso[] = "0123456789ABCDEF";\n    int i = 0, giatri = 0, len;\n    len = strlen(number);\n    while (i < len) {\n        giatri = giatri * n + (strchr(chuso,number[i]) - chuso);\n        i++;\n    }\n    i = 15;\n    ketqua[16] = 0;\n    do {\n        ketqua[i] = chuso[giatri % m];\n        giatri /= m;\n        i--;\n    } while (giatri > 0);\n    return (ketqua + i + 1);\n}\nint main() {\n    unsigned n = 10,m = 9;\n    char number[17] = "123";\n    cout << functionD(number,n,m);\n    return 0;\n}',
        o: ["1111011", "173", "146", "7B"],
        a: 2,
      },
      {
        q: "Câu 92: Anh (Chị) hãy cho biết kết quả của dòng lệnh 7 là gì?\n1:int a[] = {3,1,7,0,10};\n2:int n=5,k,max;\n3:max=a[0];\n4:   for(k=0;k<n;k++)\n5:       if(max<a[k])\n6:           max=a[k];\n7:    cout << max;\n8:    for(k=0;k<n;k++)\n9:           if(max==a[k])\n10:                cout << k;",
        o: ["10", "7", "104", "4"],
        a: 0,
      },
      {
        q: "Câu 93: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\n1:int a[]={3,1,7,0,10};\n2:int n=5,k,max;\n3:max=a[0];\n4:   for(k=0;k<n;k++)\n5:       if(max<a[k])\n6:           max=a[k];\n7:    cout << max;\n8:    for(k=0;k<n;k++)\n9:           if(max==a[k])\n10:                cout << k;",
        o: ["10", "7", "104", "4"],
        a: 2,
      },
      {
        q: 'Câu 94: Anh (Chị) hãy cho biết dòng nào trong các lựa chọn sau xuất hiện trong kết quả của đoạn lệnh?\n1: for(int i=0;i<2;i++)\n2:     for(int j=0;j<3;j++){\n3:             if(i==j) continue;\n6:     cout << "i = " << i << " j = " << j << endl;\n7:   }',
        o: ["i = 0 j = 0", "i = 2 j = 1", "i = 0 j = 2", "Lỗi biên dịch."],
        a: 2,
      },
      {
        q: 'Câu 95: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint n=10,k;\nfor (k = 2;k <= n;k++) {\n    int dem = 0;\n    for (int i = 2; i <= k; i++) if (n % k == 0)  dem++;\n    if ((n % k == 0) && (dem == 1)) cout << k << " ";\n }',
        o: ["2", "2 5 10", "2 3 5", "2 5"],
        a: 0,
      },
      {
        q: 'Câu 96: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint N = 9 ,k;\nfor (k = 2;k <= N;k++) \n    if (N % k == 0) {\n        cout << k << " ";\n        N = N/k;\n        k--;\n    }',
        o: ["2 2 3", "3 3", "5 5", "2 3 7"],
        a: 1,
      },
      {
        q: "Câu 97: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nint main() {\n    float S = 0.0;\n    int N=2,k;\n    for (k = 1; k <= N; k++)\n        S += 1/sum(k);\n    cout << S;\n    return 0;\n}\nfloat sum(int k) {\n    int tong = 0;\n    for (int x = 1; x <= k; x++) tong += x;\n    return tong;\n}",
        o: ["1", "1.33333", "1.5", "Chương trình báo lỗi."],
        a: 3,
      },
      {
        q: "Câu 98: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\nfloat sum(int);\nint main() {\n    float S = 0.0;\n    int N=2,k;\n    for (k = 1; k <= N; k++)\n        S += 1/sum(k);\n    cout << S;\n    return 0;\n}\nfloat sum(int k) {\n    int tong = 0;\n    for (int x = 1; x <= k; x++) tong += x;\n    return tong;\n}",
        o: ["1", "1.33333", "1.5", "1.6"],
        a: 1,
      },
      {
        q: "Câu 99: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì? (Kết quả lấy tròn 2 số sau dấu thập phân)\nint main() {\n    double a = 4, xn, kq, dem = 0;\n    xn = (a + 1) / 2;\n    do {\n        kq = xn;\n        xn = 0.5 * (xn + a/xn);\n        dem++;\n    } while (fabs(xn - kq) > 0.001);\n    cout << kq;\n    return 0;\n}",
        o: ["2", "1.41", "1.73", "3"],
        a: 0,
      },
      {
        q: 'Câu 100: Anh (Chị) hãy cho biết kết quả của đoạn lệnh sau là gì?\n1. int main () {\n2.     int n = 5, i, j, tong;\n3.     for (i = 2; i <= n; i++) {\n4.         tong = 1;\n5.         for (j = 2; j <= i/2; j++)\n6.             if ( i % j == 0 ) tong += j;\n7.             if ( tong == j ) cout << i << " ";\n8.     }\n9.     return 0;\n10.    }',
        o: [
          "4",
          "2 3 5",
          "3 5",
          "Lỗi biên dịch vì thiếu dấu {} ở lệnh for dòng 5.",
        ],
        a: 0,
      },
    ],
  },
];
export default QUIZ_SETS_CPP_NANG_CAO1;
