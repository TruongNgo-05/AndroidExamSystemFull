const QUIZ_SETS_TIN3 = [
  {
    id: "tin_hoc_3",
    majorId: "cntt",
    title: "Tin 3 Access",
    description:
      "Ôn tập Microsoft Access: bảng dữ liệu, thuộc tính trường, quan hệ và truy vấn.",
    questions: [
      {
        q: "Khi tạo cấu trúc của Table cột MSV có kiểu TEXT, tại thuộc tính Input mask nếu định dạng 00C00000L thì dữ liệu của trường MSV sẽ chấp nhận các giá trị nào.",
        o: [
          "14.C00010N",
          "14.D00001N",
          "Không chấp nhận giá trị nào cả.",
          "14.A0001NB",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Với các trường có kiểu dữ liệu Text tại tab Lookup của phần Thuộc tính Properties nhận giá trị nào?",
        o: ["Text Box", "List Box", "Cả 3 đáp án trên", "Combo Box"],
        a: 2,
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên , xác định trường nào là khoá chính cho bảng Khách hàng?",
        o: [
          "Điện thoại(DT)",
          "Tên công ty (TCT)",
          "Mã khách hàng(MKH)",
          "Thành phố",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table cột MSV có kiểu TEXT, tại thuộc tính Input mask nếu định dạng 00900000L thì dữ liệu của trường MSV sẽ chấp nhận các giá trị nào.",
        o: [
          "14C000010",
          "14D000001",
          "Không chấp nhận giá trị nào cả",
          "14A00001N",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Tại sao nói Excel hay Word không phải là hệ quản trị CSDL",
        o: [
          "Vì Excel hay Word không có công cụ lập trình.",
          "Vì Excel hay Word Không lưu trữ dữ liệu",
          "Vì Excel hay Word không xử lý được dữ liệu",
          "Vì Excel hay Word không phải dữ liệu có cấu trúc và không thoả mãn hết yêu cầu khai thác thông tin.",
        ],
        a: 3,
      },
      {
        q: "Khi tạo cấu trúc của Table Nếu nhập ký tự C trong khuôn dạng của thuộc tính Input mask.",
        o: [
          "Vị trí dành cho ký tự bất kỳ không bắt buộc phải nhập. (C )",
          "Vị trí dành cho cả chữ và số, không bắt buộc phải nhập. (a)",
          "Vị trí dành cho các chữ số 0..9, không bắt buộc phải nhập. (9)",
          "Vị trí dành cho các chữ số 0..9, bắt buộc phải nhập . (0)",
        ],
        a: 0,
      },
      {
        q: "Giả sử bảng Nhân viên : xác định mã nhân viên(MNV), họ tên(HT), ngày sinh(NS), giới tính(GT), địa chỉ(DC), ảnh(ANH), số điện thoại(SDT) Trường Ngày sinh có kiểu date/time nếu muốn ngày sinh được nhập dạng Ngày/tháng/năm thì tại Format gõ:",
        o: ["dddddd", "dd/mm/yy", "mm/dd/yy", "long date"],
        a: 1,
        image: "image/CNTT/tin3/hinh-03.png",
        imageAlt: "Cấu trúc bảng có trường ngày tháng trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table Nếu nhập số không (0) trong khuôn dạng của thuộc tính Input mask.",
        o: [
          "Vị trí dành cho các chữ số 0..9, không bắt buộc phải nhập.",
          "Vị trí dành cho các chữ số 0..9, bắt buộc phải nhập . (0)",
          "Vị trí dành cho cả chữ và số, không bắt buộc phải nhập (a).",
          "Vị trí dành cho cả chữ và số, bắt buộc phải nhập. (A)",
        ],
        a: 1,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table thuộc tính AllowZerolength dùng để:",
        o: [
          "Cho phép hay không cho phép các trường Text và memo nhận các chuỗi rỗng. (AllowZeroLength)",
          "Thông báo lỗi khi một bản ghi vi phạm điều kiện (Validation Text)",
          "Quy tắc hợp lệ. Kiểm tra các điều kiện trước khi nhập một mẫu tin mới. (Validation Rule)",
          "Dùng đề quy định một giá trị ban đầu của một loại dữ liệu. (Default Value)",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Dữ liệu của một trường có kiểu là AutoNumber",
        o: [
          "Luôn luôn tăng",
          "Access sẽ tự động tăng tuần tự hoặc ngẫu nhiên khi một mẫu tin mới được tạo",
          "Luôn luôn giảm",
          "Tùy ý người sử dụng",
        ],
        a: 0,
      },
      {
        q: "Khi nhập dữ liệu máy báo lỗi như hình 2, cho biết đó là lỗi gì?",
        o: [
          "Lỗi nhập trùng dữ liệu trường khoá.",
          "Lỗi do không nhập hoặc để trống giá trị trường khoá.",
          "Lỗi nhập giá trị không tương thích với kiểu dữ liệu của trường đã chỉ định.",
          "Lỗi do không nhập dữ liệu cho trường not null.",
        ],
        a: 1,
        image: "image/CNTT/tin3/hinh-04.png",
        imageAlt:
          "Hình minh họa thao tác hoặc thông báo trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table Nếu nhập số chín (9) trong khuôn dạng của thuộc tính Input mask.",
        o: [
          "Vị trí dành cho cả chữ và số, không bắt buộc phải nhập.",
          "Vị trí dành cho các chữ số 0..9, bắt buộc phải nhập .",
          "Vị trí dành cho các chữ số 0..9, không bắt buộc phải nhập.",
          "Vị trí dành cho cả chữ và số, bắt buộc phải nhập.",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: 'Khi thiết lập mối quan hệ giữa các bảng nếu lựa chọn thuộc tính " cascade update related fields" có nghĩa là:',
        o: [
          "Khi dữ liệu của bảng 1 xoá thì dữ liệu của bảng nhiều cũng sẽ bị xoá",
          "Khi dữ liệu của bảng 1 cập nhật thì dữ liệu của bảng nhiều không thay đổi",
          "Khi dữ liệu của bảng 1 cập nhật thì dữ liệu của bảng nhiều cũng thay đổi theo.",
          "Khi dữ liệu của bảng 1 xoá thì dữ liệu của bảng nhiều sẽ không bị xoá",
        ],
        a: 2,
      },
      {
        q: "Một dòng dữ liệu trong bảng được gọi là:",
        o: [
          "Trường khóa( Primari key)",
          "Trường( Field) (cột)",
          "Thuộc tính (Field properties)",
          "Bản ghi (Record) (dòng)",
        ],
        a: 2,
      },
      {
        q: "Khi tạo cấu trúc của Table thuộc tính Field Size dùng để: (Trường có kiểu Text)",
        o: [
          "Khuôn mặt nạ nhập liệu. (Input mask)",
          "Định dạng trường, xác định cung cách hiển thị... (Format)",
          "Độ dài tối đa cho phép của trường. (Field Size)",
          "Cho phép hay không cho phép các trường Text và memo nhận các chuỗi rỗng. (AllowZeroLength)",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Cho biết lỗi sau xuất hiện khi nào?",
        o: [
          "Khi nhập trường NGAYLAPHD trong bảng HOA DON sau ngày hiện tại trongmáy tính.",
          "Khi nhập trường NGAYLAPHD trong bảng HOA DON trước ngay hiện tại trong máy tính.",
          "Khi nhập trường NGAYLAPHD trong bảng HOA DON theo dạng dd/mm/yy.",
          "Khi nhập trường NGAYLAPHD trong bảng HOA DON trứoc ngày giao nhận hoá đơn.",
        ],
        a: 1,
        image: "image/CNTT/tin3/hinh-05.png",
        imageAlt: "Thông báo của Microsoft Access khi nhập dữ liệu.",
      },
      {
        q: "Khi tạo cấu trúc của Table nếu muốn dữ liệu trường đó nhận các giá trị số thì kiểu trường phải chọn là:",
        o: [
          "AutoNumber. (chèn số tự động tăng dần)",
          "Number . (Số )",
          "Yes/No . (Giới tính)",
          "Text. (Văn bản)",
        ],
        a: 1,
      },
      {
        q: "Để trường nào đó có kiểu Date/time được hiện thị dạng ngày/ tháng/ năm thì tại format ta gõ:",
        o: ["dd/mm/yy", "mm/dd/yy", "long date", "short date"],
        a: 0,
      },
      {
        q: "Qui định dữ liệu nhập kiểu ngày có dạng mm/dd/yy chọn Format là",
        o: ["General", "Medium Date", "Long Date", "Short Date"],
        a: 3,
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên , xác định trường nào là khoá ngoại cho bảng Chi tiết Hoá đơn",
        o: [
          "Mã sản phẩm(MSP)",
          "Mã hoá đơn(MHD)",
          "Mã hoá đơn(MHD),mã sản phẩm(MSP)",
          "Số luợng(SL)",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table Nếu nhập ký tự a trong khuôn dạng của thuộctính Input mask.",
        o: [
          "Vị trí dành cho các chữ số 0..9, bắt buộc phải nhập .",
          "Vị trí dành cho các chữ số 0..9, không bắt buộc phải nhập.",
          "Vị trí dành cho cả chữ và số, không bắt buộc phải nhập.",
          "Vị trí dành cho cả chữ và số, bắt buộc phải nhập.",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table thuộc tính Format dùng để:",
        o: [
          "Định dạng trường, xác định cung cách hiển thị...",
          "Độ dài tối đa cho phép của trường.",
          "Khuôn nạ nhập liệu.",
          "Cho phép hay không cho phép các trường Text và memo nhận các chuỗi rỗng.",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Cấu trúc của Bảng được xác định bởi?",
        o: [
          "Thuộc tính của trường",
          "Các thuộc tính của đối tượng quản lý",
          "Các trường và thuộc tính của trường",
          "Các bản ghi dữ liệu",
        ],
        a: 2,
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên , xác định xem cần xây dựng bảng Nhân viên gồm trường nào?",
        o: [
          "Mã nhân viên, họ tên, ngày sinh, giới tính , địa chỉ, ngày lập hoá đơn",
          "Mã nhân viên, họ tên, ngày sinh, giới tính , địa chỉ.",
          "Mã nhân viên, họ tên, ngày sinh, giới tính , địa chỉ, ảnh.",
          "Mã nhân viên, họ tên, ngày sinh, giới tính",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Hãy chọn câu trả lời đúng nhất : Thế nào là hệ quản trị CSDL?",
        o: [
          "Là công cụ dùng xử lý CSDL",
          "Là một công cụ lập trình CSDL",
          "Là một công cụ quản lý CSDL",
          "Là một công cụ cho phép quản lý và xử lý với CSDL.",
        ],
        a: 3,
      },
      {
        q: "Khi nhập dữ liệu máy báo lỗi như hình 3. Cho biết nguyên nhân của lỗi trên?",
        o: [
          "Lỗi nhập trùng dữ liệu trường khoá.",
          "Lỗi nhập giá trị không tương thích với kiểu dữ liệu của trường đã chỉ định.",
          "Một số dữ liệu đang tồn tại trong bảng quan hệ n không thoả mãn với bảng quan hệ 1.",
          "Lỗi do hai trường tham gia kết nối không cùng kiểu dữ liệu. (the same data types)",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-06.png",
        imageAlt: "Thông báo lỗi của Microsoft Access.",
      },
      {
        q: "Muốn mở CSDL bất kì và có thể thiết lập được bảo mật cho CSDL đó lựa chọn:",
        o: [
          "File/ Open/ tại Tab Open chọn Open",
          "File/ Open/ tại Tab Open chọn Open Read only",
          "File/ Open/ tại Tab Open chọn Open Exclusive",
          "File/ Open/ tại Tab Open chọn Open Exclusive read only",
        ],
        a: 2,
      },
      {
        q: "Khi nhập dữ liệu máy báo lỗi như hình 4. Cho biết nguyên nhân của lỗi trên?",
        o: [
          "Một số dữ liệu đang tồn tại trong bảng quan hệ n không thoả mãn với bảng quan hệ 1. (hình 2)",
          "Lỗi do hai trường tham gia kết nối không cùng kiểu dữ liệu. (Hình 3)",
          "Lỗi nhập giá trị không tương thích với kiểu dữ liệu của trường đã chỉ định.",
          "Lỗi nhập trùng dữ liệu trường khoá. (duplicate value in the index, primary key)",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-07.png",
        imageAlt: "Thông báo lỗi của Microsoft Access.",
      },
      {
        q: "Hình 3, để đảm bảo toàn vẹn dữ liệu khi cập nhật dữ liệu giữa hai bảng liên quan, ta tích kiểm vào mục?",
        o: [
          "Enforce Referential Integrity.",
          "Cascade Update Related Fields.",
          "Cascade Delete Related Record.",
          "Tất cả đều đúng.",
        ],
        a: 1,
        image: "image/CNTT/tin3/hinh-08.png",
        imageAlt:
          "Hình minh họa thao tác hoặc thông báo trong Microsoft Access.",
      },
      {
        q: "Trường DONGIA(đơn giá) có kiểu number nếu tại thuộc tính format gõ: 0;-0;;Null khi không nhập dữ liệu thì sẽ hiện thị trên bảng là:",
        o: ["Để trống", "Hiện thị chữ Null", "Hiện thị 0", "Hiện thị chữ zero"],
        a: 1,
      },
      {
        q: "Khi kết nối dữ liệu của hai bảng xảy ra lỗi như sau( hình ảnh) Hãy đưa ra cách khắc phục",
        o: [
          "Kiểm tra đã tạo khóa cho hai trường dữ liệu hay chưa?",
          "Kiểm tra hai trường tham gia liên kết đã cùng tên hay chưa?",
          "Kiểm tra hai trường tham gia liên kết đã cùng cùng thuộc tính field size hay chưa?",
          "Kiểm tra hai trường tham gia liên kết đã cùng kiểu hay chưa?",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-09.png",
        imageAlt: "Thông báo lỗi của Microsoft Access.",
      },
      {
        q: "Quan hệ Một- Nhiều (One-to-Many)",
        o: [
          "Không tồn tại mối quan hệ này.",
          "Là quan hệ các dòng dữ liệu có trong 2 bảng quan hệ phải tương ứng với nhau.",
          "Là quan hệ nhiều bản ghi bất kỳ trong bảng thứ nhất có mỗi quan hệ với nhiều bản ghi trong bảng thứ 2.",
          "Là quan hệ một dòng dữ liệu ở bảng bên một sẽ có tương ứng nhiều dòng dữ liệu ở bảng bên nhiều.",
        ],
        a: 3,
      },
      {
        q: "Khi nhập dữ liệu máy báo lỗi như hình 2, cho biết cách khắc phục?",
        o: [
          "Nhập đầy đủ giá trị cho trường khoá.",
          "Nhập lại cho đúng, đủ giá trị các trường đã yêu cầu cho đến khi không còn báo lỗi.",
          "Nhập lại giá trị trường khoá khác sao cho vừa đúng, đủ và không bị trùng.",
          "Phải nhập đủ dữ liệu cho các trường bắt buộc phải nhập dữ liệu.",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-04.png",
        imageAlt:
          "Hình minh họa thao tác hoặc thông báo trong Microsoft Access.",
      },
      {
        q: "Sau khi thiết lập mối quan hệ cho hai bảng không hiển thị kiểu quan hệ, như hình 1. Cho biết cách khắc phục của lỗi trên?",
        o: [
          "Nhập lại giá trị trường khoá khác sao cho vừa đúng, đủ và không bị trùng.",
          "Nhập lại cho đúng, đủ giá trị các trường đã yêu cầu cho đến khi không còn báo lỗi.",
          "Tích đủ ba mục để đảm bảo toàn vẹn dữ liệu.",
          "Phải nhập đủ dữ liệu cho các trường bắt buộc phải nhập dữ liệu.",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-10.png",
        imageAlt:
          "Hình minh họa thao tác hoặc thông báo trong Microsoft Access.",
      },
      {
        q: "Khi thiết kế cấu trúc của bảng để quy định kích thước của trường chọn thuộc tính",
        o: ["Field Size", "Format", "Input mask", "Decimal places"],
        a: 0,
      },
      {
        q: "Khi tạo cấu trúc của Table đối tượng FIELD NAME dùng để:",
        o: [
          "Mô tả trường.",
          "Chọn kiểu trường.",
          "Đặt tên trường.",
          "Thiết lập các thuộc tính trường.",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Khi kết nối dữ liệu của hai bảng xảy ra lỗi như sau( hình ảnh) Đó là lỗi gì?",
        o: [
          "Hai trường tham gia kết nối không cùng kiểu dữ liệu",
          "Hai trường tham gia kết nối có cùng kiểu dữ liệu",
          "Hai trường tham gia kết nối có tên không giống nhau",
          "Hai trường tham gia kết nối có thuộc tính Field size khác nhau",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-09.png",
        imageAlt: "Thông báo lỗi của Microsoft Access.",
      },
      {
        q: "Giả sử bảng Nhân viên : xác định mã nhân viên(MNV), họ tên(HT), ngày sinh(NS), giới tính(GT), địa chỉ(DC), ảnh(ANH), số điện thoại(SDT) Trường số điện thoại (SDT) có kiểu TEXT nếu muốn nhập số điện thoại theo nguyên tắc: 3 kí tự đầu là số mã vùng có thể nhập hoặc không (9), tiếp đến là kí tự - , 7 kí tự sau là số điện thoại bắt buộc phải nhập (0) tại input mask gõ:",
        o: ["!000-9999999", "!000-0000000", "!999\\-0000000", "!999-9999999"],
        a: 2,
      },
      {
        q: "Khi tạo cấu trúc của Table Nếu nhập ký tự A trong khuôn dạng của thuộc tính Input mask.",
        o: [
          "Vị trí dành cho cả chữ và số, bắt buộc phải nhập.",
          "Vị trí dành cho cả chữ và số, không bắt buộc phải nhập.",
          "Vị trí dành cho các chữ số 0..9, không bắt buộc phải nhập.",
          "Vị trí dành cho các chữ số 0..9, bắt buộc phải nhập .",
        ],
        a: 0,
      },
      {
        q: "Bảng Hoá đơn: gồm mã hoá đơn (MHD),loại hoá đơn(LHD), mã khách hàng(MKH),mã nhân viên lập hoá đơn(MNV), ngày lập hóa đơn (NLHD), ngày giao hàng(NGH). Yêu cầu: trường NLHD có kiểu Date/time chỉ được nhập từ 01/03/2013 đến 01/05/2013 chọn thuộc tính:",
        o: [
          "Validation rule : >=*01/03/2013 * and <= 01/05/2013",
          "Validation rule : >= 01/03/2013 and <=01/05/2013",
          "Validation rule : >=# 01/03/2013 # and <=# 01/05/2013#",
          "Validation rule : >= and <=",
        ],
        a: 2,
      },
      {
        q: "Một bảng dữ liệu trên Access bao gồm các thành phần:",
        o: [
          "Tên bảng, trường dữ liệu, bản ghi, dòng, cột, nội dung.",
          "Tên bảng, trường dữ liệu, bản ghi, dòng, cột.",
          "Tên bảng, các trường dữ liệu, thuộc tính của trường, các bản ghi.",
          "Tên bảng, các trường dữ liệu, bản ghi.",
        ],
        a: 2,
      },
      {
        q: "Trong access khi mở bảng bất kì muốn vừa đặt lọc dữ liệu vừa sắp xếp theo tiêu chí nào đó lựa chọn:",
        o: [
          "Home/Sort & Filter/Seletion",
          "Home/Sort & Filter/Advanced/Filter By Form",
          "Home/Sort & Filter/Filter",
          "Home/Sort & Filter/Advanced/Advanced Filter /Sort...",
        ],
        a: 2,
      },
      {
        q: "Quan hệ Một-Một (One-to-One):",
        o: [
          "Là quan hệ nhiều bản ghi bất kỳ trong bảng thứ nhất có mỗi quan hệ với nhiều bản ghi trong bảng thứ 2.",
          "Là quan hệ một dòng dữ liệu ở bảng bên một sẽ có tương ứng nhiều dòng dữ liệu ở bảng bên nhiều.",
          "Là quan hệ các dòng dữ liệu có trong 2 bảng quan hệ phải tương ứng với nhau.",
          "Không tồn tại mối quan hệ này.",
        ],
        a: 2,
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên , xác định Bảng Nhân viên có quan hệ với bảng nào",
        o: ["Hoá đơn", "Sản phẩm", "Khách hàng", "Chi tiết hoá đơn"],
        a: 0,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên , xác định Bảng Khách hàngcó quan hệ với bảng nào",
        o: ["Sản phẩm", "Chi tiết hoá đơn", "Nhân viên", "Hoá đơn"],
        a: 3,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên , xác định trường nào là khoá chính cho bảng Sản phẩm",
        o: [
          "Đơn giá",
          "Mã sản phẩm(MSP), số luợng(SL)",
          "Tên sản phẩm(TSP)",
          "Mã sản phẩm(MSP)",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Giả sử bảng Nhân viên : xác định mã nhân viên(MNV), họ tên(HT), ngày sinh(NS), giới tính(GT), địa chỉ(DC), ảnh(ANH), số điện thoại(SDT) Tại thuộc tính FORMAT của trường mã nhân viên (MNV) ta gõ: >[red] thì dữ liệu nhập vào sẽ là:",
        o: ["In hoa và màu đỏ", "Màu đỏ", "In hoa", "In thường và màu đỏ"],
        a: 0,
        image: "image/CNTT/tin3/hinh-03.png",
        imageAlt: "Cấu trúc bảng có trường ngày tháng trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table cột MSV có kiểu TEXT, tại thuộc tính Input mask nếu định dạng 00L00000C thì dữ liệu của trường MSV sẽ chấp nhận các giá trị nào.",
        o: [
          "Chấp nhận tất cả các giá trị.",
          "14D000001",
          "14C000010",
          "14A00001N",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table đối tượng DATA TYPE dùng để:",
        o: [
          "Chọn kiểu trường.",
          "Đặt tên trường.",
          "Mô tả trường.",
          "Thiết lập các thuộc tính trường .",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table cột MSV có kiểu TEXT, tại thuộc tính Input mask nếu định dạng 00L00000L thì dữ liệu của trường MSV sẽ chấp nhận các giá trị nào.",
        o: [
          "14C000010",
          "14D000001",
          "14A00001N",
          "Chấp nhận tất cả các giá trị.",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Để định dạng chuỗi kí tự nhập vào thành in hoa dùng kí tự:",
        o: ["@", "<", "!", ">"],
        a: 3,
      },
      {
        q: "Bảng (Table) là gì?.",
        o: [
          "Là thành phần cơ sở của Access dùng để lưu trữ dữ liệu. Một bảng bao gồm các cột(Trường, Fields), các dòng (Bản ghi, record).",
          "Là đối tượng thiết kế để nhập hoặc hiển thị dữ liệu giúp xây dựng các thành phần giao tiếp giữa người sử dụng với chương trình.",
          "Là công cụ được sử dụng để trích rút dữ liệu theo những điều kiện được xác định, tập dữ liệu trích rút cũng có dạng bảng biểu.",
          "Là tập hợp các thông tin được tổ chức cho một mục đích cụ thể, các thông tin này thường có hình ảnh bảng biểu",
        ],
        a: 0,
      },
      {
        q: "Microsoft Access là gì?",
        o: [
          "Là môt hệ quản trị cơ sở dữ liệu.",
          "Là một phần mềm dùng để tạo bảng tính.",
          "Là một phần mềm soạn thảo.",
          "Là một bảng tính dùng để lưu dữ và quản lý dữ liệu.",
        ],
        a: 0,
      },
      {
        q: "Các đối tượng chính trong CSDL access",
        o: [
          "Table, query, form, report, macro,code",
          "Table, query, form, report,macro,",
          "Table, query, form, report,label,macro,modul",
          "Table, query, form, report,code,",
        ],
        a: 0,
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên , xác định trường nào là khoá chính cho bảng Hoá đơn",
        o: [
          "Mã khách hàng(MKH)",
          "Loại hoá đơn(LHD)",
          "Mã hóa đơn(MHD)",
          "Mã nhân viên(MNV)",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Giả sử bảng Nhân viên : xác định mã nhân viên(MNV), họ tên(HT), ngày sinh(NS), giới tính(GT), địa chỉ(DC), ảnh(ANH) Hãy xác định kiểu dữ liệu thích hợp cho trường Ngày sinh(NS) trong bảng Nhân viên",
        o: ["Number.", "AutoNumber.", "Date/Time.", "Text.”"],
        a: 2,
        image: "image/CNTT/tin3/hinh-03.png",
        imageAlt: "Cấu trúc bảng có trường ngày tháng trong Microsoft Access.",
      },
      {
        q: "Tên trường (Fields) trong access được quy định như thế nào?",
        o: [
          "Không bắt đầu là dấu cách, không chứa ký tự :(.),(!),([),(]).",
          "Không bắt đầu là chữ số",
          "Bắt buộc phải là chữ cái đầu tiên.",
          "Không theo một quy cách nào cả",
        ],
        a: 0,
      },
      {
        q: "Thiết kế bảng với sự trợ giúp của MS Access ta sử dụng:",
        o: [
          "Create / Table",
          "Create / Table Design",
          "Create / Design View",
          "Create / Datasheet View",
        ],
        a: 0,
      },
      {
        q: "Khi tạo cấu trúc của Table đối tượng Description dùng để:",
        o: [
          "Thiết lập các thuộc tính trường.",
          "Đặt tên trường.",
          "Chọn kiểu trường.",
          "Mô tả trường.",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Tổng số ký tự tối đa trong Field kiểu Text",
        o: ["Không giới hạn", "1024", "64", "255"],
        a: 3,
      },
      {
        q: "Trong access khi mở bảng bất kì muốn đặt lọc dữ liệu có nội dung khác vị trí con trỏ đang đứng lựa chọn:",
        o: [
          'Home/Sort & Filter/Selection/Equal..."Nội dung"',
          'Home/Sort & Filter/Selection/Does Not Equal..."Nội dung"',
          'Home/Sort & Filter/Seletion/Contain..."Nội dung"',
          'Home/Sort & Filter/Seletion/Does Not Contain..."Nội dung"',
        ],
        a: 1,
      },
      {
        q: "Khi tạo cấu trúc của Table đối tượng nào dùng để thiết lập khuôn mặt nạ nhập liệu của trường.",
        o: ["Field Size.", "Input Mask.", "Format.", "Validation Rule."],
        a: 1,
      },
      {
        q: "Đâu là một hệ quản trị CSDL",
        o: ["Access", "Windows", "Word", "Excel"],
        a: 0,
      },
      {
        q: "Khi tạo cấu trúc của Table đối tượng nào dùng để thiết lập độ dài tối đa cho phép của trường.",
        o: ["Caption.", "Format.", "Input Mask.", "Field Size."],
        a: 3,
      },
      {
        q: "Tại sao cần phải lập mối quan hệ giữa các bảng",
        o: [
          "Di chuyển thông tin giữa các bảng",
          "Sao chép thông tin giữa các bảng",
          "Loại bỏ các giá trị trùng nhau .",
          "Truy nhập đúng dữ liệu của bảng có quan hệ với nhau",
        ],
        a: 3,
      },
      {
        q: "Trong access khi mở bảng bất kì muốn đặt lọc dữ liệu có nội dung giống như tại vị trí con trỏ đang đứng lựa chọn:",
        o: [
          'Home/Sort & Filter/Seletion/Contain..."Nội dung"',
          'Home/Sort & Filter/Selection/Does Not Equal..."Nội dung"',
          'Home/Sort & Filter/Selection/Equal..."Nội dung"',
          'Home/Sort & Filter/Seletion/Does Not Contain..."Nội dung"',
        ],
        a: 2,
      },
      {
        q: "Những trường có kiểu dữ liệu nào sau đây có thể làm khoá chính",
        o: ["Hyper link", "Memo", "OLE object", "Text"],
        a: 3,
      },
      {
        q: "Khi tạo cấu trúc của Table cột MSV có kiểu TEXT, tại thuộc tính Input mask nếu định dạng 00L00000CC thì dữ liệu của trường MSV sẽ chấp nhận các giá trị nào.",
        o: [
          "14C000010N",
          "14D000001N",
          "Chấp nhận tất cả các giá trị.",
          "14A00001NB",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Giả sử bảng Nhân viên : xác định mã nhân viên(MNV), họ tên(HT), ngày sinh(NS), giới tính(GT), địa chỉ(DC), ảnh(ANH) Hãy xác định kiểu dữ liệu thích hợp cho trường ảnh (ANH) trong bảng Nhân viên",
        o: ["Text.", "Memo.", "OLE Object.", "Hyperlink."],
        a: 2,
        image: "image/CNTT/tin3/hinh-03.png",
        imageAlt: "Cấu trúc bảng có trường ngày tháng trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table cột MSV có kiểu TEXT, tại thuộc tính Input mask nếu định dạng 00L00000C thì dữ liệu của trường MSV sẽ chấp nhận các giá trị nào.",
        o: [
          "14A001000",
          "14A00001N",
          "14A000100",
          "Chấp nhận tất cả các giá trị.",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Khi nhập dữ liệu vào bảng xảy ra lỗi như sau: Cho biết đó là lỗi gì?",
        o: [
          "Để trống giá trị trường khóa",
          "Nhập sai kiểu dữ liệu của trường khóa",
          "Giá trị của trường khóa không có thứ tự",
          "Giá trị trường khóa phải là giá trị kiểu số",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-11.png",
        imageAlt: "Thông báo lỗi của Microsoft Access.",
      },
      {
        q: 'Giả sử bảng Nhân viên : xác định mã nhân viên(MNV), họ tên(HT), ngày sinh(NS), giới tính(GT), địa chỉ(DC), ảnh(ANH), số điện thoại(SDT) Trường họ tên (HT) có kiểu text, nếu tại Fomat của trường HT gõ : @;"không có";"không biết" thì khi dữ liệu họ tên là rỗng thì trong bảng sẽ hiện thị:',
        o: ["@", "Không có", "Không biết", "Để trống"],
        a: 2,
        image: "image/CNTT/tin3/hinh-03.png",
        imageAlt: "Cấu trúc bảng có trường ngày tháng trong Microsoft Access.",
      },
      {
        q: "Mỗi cơ sở dữ liệu Access được lưu trên đĩa dưới dạng",
        o: [
          "Thành phần Table được lưu thành tập tin .DBF, còn các thành phần khác được lưu chung vào một tập tin .ACCDB",
          "Mỗi thành phần (Table, Query, Form, Report, Macro, Code) được lưu thành tập tin riêng",
          "Tất cả các thành phần được lưu chung vào tập tin duy nhất có phần mở rộng",
          "Thành phần code lưu thành tập tin .PRG, các thành phần còn lại lưu chung vào tập tin .ACCDB",
        ],
        a: 2,
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên, xác định bảng Hoá đơn có quan hệ với bảng Chi tiết hoá đơn là mối quan hệ",
        o: ["n-n", "1-1", "n-1", "1-n"],
        a: 3,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table nếu kiểu trường chọn AutoNumber thì trường đó sẽ nhận giá trị:",
        o: [
          "Dữ liệu kiểu ngày tháng .",
          "Dữ liệu kiểu văn bản.",
          "Tự động chèn dữ liệu số theo từng record.",
          "Dữ liệu kiểu logic .",
        ],
        a: 2,
      },
      {
        q: "Một sinh viên sau khi khảo sát CSDL quản lý hàng hoá và đưa ra gợi ý như hình vẽ: Dựa vào gợi ý trên , xác định Sản phẩm có quan hệ với bảng nào",
        o: ["Nhân viên", "Hoá đơn", "Khách hàng", "Chi tiết hoá đơn"],
        a: 3,
        image: "image/CNTT/tin3/hinh-02.png",
        imageAlt: "Sơ đồ các bảng dữ liệu trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table thuộc tính Default Value dùng để:",
        o: [
          "Quy tắc hợp lệ. Kiểm tra các điều kiện trước khi nhập một mẫu tin mới.",
          "Định dạng trường, xác định cung cách hiển thị...",
          "Dùng đề quy định một giá trị ban đầu của một loại dữ liệu.",
          "Cho phép hay không cho phép các trường Text và memo nhận các chuỗi rỗng.",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Khi tạo cấu trúc của Table cột MSV có kiểu TEXT, tại thuộc tính Input mask nếu định dạng 00C00000L thì dữ liệu của trường MSV sẽ chấp nhận các giá trị nào.",
        o: ["14.00001N", "14.000010", "14.000100", "14.001000"],
        a: 0,
        image: "image/CNTT/tin3/hinh-01.png",
        imageAlt:
          "Cấu trúc bảng và các thuộc tính trường trong Microsoft Access.",
      },
      {
        q: "Hai bảng có mối quan hệ 1-n khi nhập dữ liệu ta cần:",
        o: [
          "Nhập bảng N trước rồi mới nhập bảng 1",
          "Nhập bảng 1 trước rồi mới nhập bảng N",
          "Nhập cho bảng nào trước cũng được",
          "Xoá dữ liệu ở bảng 1 rồi nhập dữ liệu cho bảng N",
        ],
        a: 1,
      },
      {
        q: "Tại sao nói Excel hay Word không phải là hệ quản trị CSDL",
        o: [
          "Vì Excel hay Word không phải dữ liệu có cấu trúc và không thoả mãn hết yêu cầu khai thác thông tin.",
          "Vì Excel hay Word Không lưu trữ dữ liệu",
          "Vì Excel hay Word xử lý được dữ liệu",
          "Vì Excel hay Word không có công cụ lập trình.",
        ],
        a: 0,
      },
      {
        q: "Bảng Sản phẩm:Mã sản phẩm (MSP), tên sản phẩm(TSP), đơn vị tính(DVT), đơn giá(DG) Hãy xác định kiểu dữ liệu thích hợp cho trường Đơn giá(DG) trong bảng Sảnphẩm",
        o: ["Hyperlink.", "Memo.", "Text.", "Currency."],
        a: 3,
      },
      {
        q: "Giả sử trường giới tính có kiểu yes/ no tại format viết ; nam;nu thì dữ liệu hiện thị sẽ là:",
        o: [
          "Trường hợp True là “yes”, trường hợp false là “No”",
          "Trường hợp True là “nu”, trường hợp false là “nam”",
          "Trường hợp True là “nam”, trường hợp false là “nu”",
          "Trường hợp True là “No”, trường hợp false là “yes”",
        ],
        a: 2,
      },
      {
        q: "Khẳng định nào sau đây sai",
        o: [
          "Tên trường (Field) có tối đa 64 ký tự",
          "Trong một Table có thể có 2 trường trùng nhau",
          "Tên trường có thể có ký tự &",
          "Tên trường có thể có ký tự ( )",
        ],
        a: 1,
      },
      {
        q: "Khi nhập dữ liệu vào bảng xảy ra lỗi như sau (hình ảnh) Hãy nêu cách khác phục lỗi",
        o: [
          "Kiểm tra thuộc tính value của trường",
          "Phải nhập giá trị trường khóa có thứ tự",
          "Bỏ thuộc tính khóa chính của trường",
          "Phải nhập đầy đủ giá trị cho trường khoá.",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-11.png",
        imageAlt: "Thông báo lỗi của Microsoft Access.",
      },
      {
        q: "Khi nhập dữ liệu máy báo lỗi như hình 2. Cho biết cách khắc phục lỗitrên?",
        o: [
          "Tìm và nhập cho đúng giá trị theo bảng quan hệ tương ứng.",
          "Nhập lại cho đúng, đủ giá trị các trường đã yêu cầu cho đến khi không còn báo lỗi.",
          "Kiểm tra dữ liệu đang tồn tại trong bảng quan hệ n sao cho thoả mãn với bảng quan hệ 1.",
          "Nhập lại giá trị trường khoá khác sao cho vừa đúng, đủ và không bị trùng.",
        ],
        a: 2,
        image: "image/CNTT/tin3/hinh-12.png",
        imageAlt: "Thông báo lỗi của Microsoft Access.",
      },
      {
        q: "Muốn tính TIENLUONG bằng (LUONGCB * HESO)+ PHUCAP - BHYT - BHXH ta thực hiện:",
        o: [
          "Tại Update To của cột TIENLUONG nhập: (LUONGCB *'HESO)+PHUCAP- BHYT-BHXH",
          "Tại Update To của cột TIENLUONG nhập: (''LUONGCB''*''HESO'')+''PHUCAP''-''BHYT''-''BHXH''",
          "Tại Update To của cột TIENLUONG nhập: ({LUONGCB }*{HESO})+{PHUCAP}-{BHYT}-{BHXH}",
          "Tại Update To của cột TIENLUONG nhập: ([LUONGCB ]*[HESO])+[PHUCAP]-[BHYT]-[BHXH]",
        ],
        a: 3,
      },
      {
        q: "Muốn trích rút danh sách sinh viên có DIEML1 là 5 hoặc 8 hoặc 10 ta thực hiện:",
        o: [
          "Tại CRITERIA của cột DIEML1 nhập: 5 AND 8 AND 10",
          "Tại CRITERIA của cột DIEML1 nhập: 5 , 8, 10",
          "Tại CRITERIA của cột DIEML1 nhập: >=5 OR <=10",
          "Tại CRITERIA của cột DIEML1 nhập: 5 OR 8 OR 10",
        ],
        a: 3,
      },
      {
        q: "Hình 1, Cho biết Crosstab Query thuộc truy vấn nào dưới đây?",
        o: ["Cau 3", "Cau 4", "Cau 5", "Cau 2"],
        a: 2,
        image: "image/CNTT/tin3/hinh-13.png",
        imageAlt: "Các biểu tượng loại truy vấn được đánh số.",
      },
      {
        q: "ta có Q: DatePart(q,[ngaylaphd]) Cho biết tham số q có ý nghĩa gì?",
        o: [
          "lấy ra ngày trong tuần lập hóa đơn",
          "lấy ra ngày lập hóa đơn",
          "lấy ra quý lập hóa đơn",
          "lấy ra tháng lập hóa đơn",
        ],
        a: 2,
      },
      {
        q: "Muốn đưa ra thông tin bao gồm: MAHD, MAKH, TENNV, NGAYLAPHD, NGAYGNHANG, TENSP, SOLUONG, GIABAN Thêm cột GHICHU: nếu NGAYGNHANG là rỗng ghi là chưa nhận hàng, ngược lại đã nhận hàng",
        o: [
          "Tại FIELD gõ : GHICHU: iif(isNull([NGAYGNHANG]),chưa nhận hàng,đã nhận Hàng)",
          "Tại FIELD gõ : GHICHU:iif(isNull([NGAYGNHANG]),đã nhận Hàng), chưa nhận Hàng",
          "Tại FIELD gõ : GHICHU:iif(isNotNull([NGAYGNHANG]),chưa nhận hàng,đã nhận Hàng)",
          "Tại FIELD gõ : GHICHU:iif([NGAYGNHANG]),chưa nhận hàng,đã nhận Hàng)",
        ],
        a: 0,
      },
      {
        q: "ta có Q: DatePart(m,[ngaylaphd]) Cho biết tham số m có ý nghĩa gì?",
        o: [
          "lấy ra quý lập hóa đơn",
          "lấy ra tháng lập hóa đơn",
          "lấy ra ngày trong tuần lập hóa đơn",
          "lấy ra ngày lập hóa đơn",
        ],
        a: 1,
      },
      {
        q: "Để tạo 1 truy vấn thống kê Crosstab Query chúng ta cần có ít nhất mấy cột",
        o: ["5 cột", "2 cột", "3 cột", "4 cột"],
        a: 2,
        image: "image/CNTT/tin3/hinh-14.png",
        imageAlt: "Màn hình thiết kế truy vấn trong Microsoft Access.",
      },
      {
        q: "Để cập nhật dữ liệu cho bảng ta sử dụng truy vấn.",
        o: ["Update query", "Make table query", "Select query", "Append query"],
        a: 0,
      },
      {
        q: "Cho biết biểu tượng số 4 trong hình là gì?",
        o: [
          "Thêm một bảng mới vào Query",
          "Các kiểu Truy vấn",
          "Xây dựng biểu thức trong Query",
          "Thực hiện chạy Query",
        ],
        a: 1,
        image: "image/CNTT/tin3/hinh-15.png",
        imageAlt: "Các mục trên menu Query được đánh số.",
      },
      {
        q: "Cho biết mỗi khách hàng có tổng số bao nhiêu hoá đơn (Mã khách hàng là tham số nhập từ bàn phím) ta thực hiện:",
        o: [
          "Tại field chọn MAHD và MAKH; Tại Total của trường MAHD chọn count, tại Total của trường MAKH chọn group by; Tại criteria của MAKH đặt câu hỏi [Nhập Mã khách hàng]",
          "Tại field chọn MAHD và MAKH; Tại Total của trường MAHD chọn Sum, tại Total của trường MAKH chọn group by;Tại criteria của MAKH đặt câu hỏi [Nhập Mã khách hàng]",
          "Tại field chọn MAHD và MAKH; Tại Total của trường MAHD chọn group by, tại Total của trường MAKH chọn count;Tại criteria của MAKH đặt câu hỏi [Nhập Mã khách hàng]",
          "Tại field chọn MAHD và MAKH; Tại Total của trường MAHD chọn group by, tại Total của trường MAKH chọn Sum",
        ],
        a: 0,
      },
      {
        q: "Giả sử CSDL Hoadon.ACCDB đã nhập dữ liệu, muốn tạo query gồm Mã sản phẩm bán ra nhiều nhất.Thông tin bao gồm : MaSP, TriGia. Sử dụng truy vấn nào trong các truy vấn sau:",
        o: [
          "Make table query",
          "Select query( Dùng Total)",
          "Append query",
          "Crosstab query",
        ],
        a: 1,
      },
      {
        q: "Giả sử CSDL Hoadon.ACCDB đã nhập dữ liệu, muốn tạo query đưa thông tin sản phẩm bán ra của từng ngày, biết rằng ngày lập hoá đơn được nhập từ bàn phím, ta thực hiện",
        o: [
          "Tại field chọn Masp, ngaylaphd; Tại Criteria của ngaylaphd gõ Nhập ngày tháng năm cần xem",
          "Tại field chọn Masp, ngaylaphd; Tại Criteria của ngaylaphd gõ {Nhập ngày tháng năm cần xem}",
          "Tại field chọn Masp, ngaylaphd; Tại Criteria của ngaylaphd gõ month([ngaylaphd])",
          "Tại field chọn Masp, ngaylaphd; Tại Criteria của ngaylaphd gõ [Nhập ngày tháng năm cần xem]",
        ],
        a: 3,
      },
      {
        q: "Giả sử CSDL Hoadon.ACCDB đã nhập dữ liệu, muốn tạo query bao gồm MaSp, TongSoLuong. Trong đó TongSoLuong là sum của Soluong, kết nhóm theo Masp. Sử dụng truy vấn nào trong các truy vấn sau:",
        o: [
          "Select query( Dùng Total)",
          "Make table query",
          "Append query",
          "Crosstab query",
        ],
        a: 0,
      },
      {
        q: "Hình 1, Cho biết Select Query thuộc truy vấn nào dưới đây?",
        o: ["Cau 2", "Cau 4", "Cau 3", "Cau 1"],
        a: 3,
        image: "image/CNTT/tin3/hinh-13.png",
        imageAlt: "Các biểu tượng loại truy vấn được đánh số.",
      },
      {
        q: "Muốn trích rút danh sách sinh viên có DIEML1 từ 5 đến 10 ta thực hiện:",
        o: [
          "Tại CRITERIA của cột DIEML1 nhập: 5 AND 10",
          "Tại CRITERIA của cột DIEML1 nhập: >=5 , <=10",
          "Tại CRITERIA của cột DIEML1 nhập: >=5 OR <=10",
          "Tại CRITERIA của cột DIEML1 nhập: >=5 AND <=10",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-14.png",
        imageAlt: "Màn hình thiết kế truy vấn trong Microsoft Access.",
      },
      {
        q: "Muốn tính TONG bằng TOAN + LY + HOA ta thực hiện:",
        o: [
          "Tại Update To của cột TONG nhập: {TOAN}+{LY}+{HOA}",
          "Tại Update To của cột TONG nhập: ''TOAN''+''LY''+''HOA''",
          "Tại Update To của cột TONG nhập: [TOAN]+[LY]+[HOA]",
          "Tại Update To của cột TONG nhập: TOAN+LY+HOA",
        ],
        a: 2,
      },
      {
        q: "Cho biết mỗi Nhân viên lập bao nhiêu hoá đơn",
        o: [
          "Tại field chọn MAHD và MANV; Tại Total của trường MAHD chọn count, tại Total của trường MANV chọn group by",
          "Tại field chọn MAHD và MANV; Tại Total của trường MAHD chọn Sum, tại Total của trường MANV chọn group by",
          "Tại field chọn MAHD và MANV; Tại Total của trường MAHD chọn group by, tại Total của trường MANV chọn count",
          "Tại field chọn MAHD và MANV; Tại Total của trường MAHD chọn group by, tại Total của trường MANV chọn Sum",
        ],
        a: 0,
      },
      {
        q: "Truy vấn lựa chọn (Select Query).",
        o: [
          "Loại truy vấn dùng để thêm một hay nhiều dòng dữ liệu mới vào cuối một bảng. Mỗi truy vấn chỉ dùng để thêm dữ liệu vào cho một bảng.",
          "Loại truy tạo ra một bảng mới chứa dữ liệu",
          "Loại truy vấn dùng để cập nhật dữ liệu cho bảng từ một bảng khác.",
          "Loại truy vấn này chỉ mang tính chất cung cấp thông tin đã được lưu trữ trong bảng, không làm thay đổi dữ liệu của bảng.",
        ],
        a: 3,
      },
      {
        q: "Muốn tính BHXH bằng 20% LUONGCB ta thực hiện:",
        o: [
          "Tại Update To của cột BHXH nhập: ''LUONGCB '' * 0.2",
          "Tại Update To của cột BHXH nhập: [LUONGCB ] * 0.2",
          "Tại CRITERIA của cột BHXH nhập: [LUONGCB ] * 0.2",
          "Tại CRITERIA của cột BHXH nhập: ''LUONGCB '' * 0.2",
        ],
        a: 1,
      },
      {
        q: "Muốn trích rút danh sách sinh viên có DIEML1 được nhập từ bàn phím ta thực hiện:",
        o: [
          "Tại CRITERIA của cột DIEML1 nhập: [Bạn muốn hiện điểm bằng bao nhiêu?]",
          "Tại CRITERIA của cột DIEML1 nhập: ''Bạn muốn hiện điểm bằng bao nhiêu?]''",
          "Tại CRITERIA của cột DIEML1 nhập: {Bạn muốn hiện điểm bằng bao nhiêu?}",
          "Tại CRITERIA của cột DIEML1 nhập: Bạn muốn hiện điểm bằng bao nhiêu?",
        ],
        a: 0,
      },
      {
        q: "Hãy cập nhật cho trường DIENGIAI là Nhận hàng trước cho những hoá đơn có ngày lập hoá đơn(NGAYLAPHD) sau ngày giao nhận hàng(NGAYGNHANG)",
        o: [
          "Tại Field Chọn DIENGIAI, tại table chọn HOA DON, tại update to gõ: iif([NGAYLAPHD] <[NGAYGNHANG],nhận hàng trước, )",
          "Tại Field Chọn DIENGIAI, tại table chọn HOA DON, tại update to gõ: iif([NGAYLAPHD]> [NGAYGNHANG],nhận hàng trước, )",
          "Tại Field Chọn DIENGIAI, tại table chọn HOA DON, tại update to gõ: iif([NGAYLAPHD]> [NGAYGNHANG],nhận hàng trước)",
          "Tại Field Chọn DIENGIAI, tại table chọn HOA DON, tại update to gõ: iif([NGAYLAPHD]> [NGAYGNHANG], ,nhận hàng trước)",
        ],
        a: 0,
      },
      {
        q: "Giả sử CSDL Hoadon.ACCDB đã nhập dữ liệu, muốn tạo query bao gồm MaSp, TongSoLuong. Trong đó TongSoLuong là sum của Soluong, kết nhóm theo Masp. Ta thực hiện:",
        o: [
          "Tại field chọn Masp, Soluong; Tại total Masp chọn sum, của Soluong chọn group by",
          "Tại field chọn Masp, Tongsoluong:[Soluong]; Tại total: Masp chọn group by, Tongsoluong chọn Sum",
          "Tại field chọn Masp, Soluong; Tại total Masp chọn count , của Soluong chọn group by",
          "Tại field chọn Masp, Tongsoluong:[Soluong]; Tại total: Masp chọn group by, Tongsoluong chọn count",
        ],
        a: 1,
      },
      {
        q: "Hình 1, Cho biết biểu tượng số 3 trong hình thuộc kiểu truy vấn?",
        o: ["Select Query", "Make Table Query", "Append Query", "Update Query"],
        a: 1,
        image: "image/CNTT/tin3/hinh-13.png",
        imageAlt: "Các biểu tượng loại truy vấn được đánh số.",
      },
      {
        q: 'Hãy cập nhật cho trường DIENGIAI là “ đã nhận Hàng" cho Hoá đơn có NGAYGNHANG khác rỗng ngược lại “chưa nhận hàng"',
        o: [
          "Tại Field Chọn DIENGIAI, tại table chọn HOA DON, tại update to gõ: iif([ngaygnhang]<>Null,đã nhận Hàng, chưa nhận Hàng)",
          "Tại Field Chọn DIENGIAI, tại table chọn HOA DON, tại update to gõ: iif([ngaygnhang]=Null,Chưa nhận hàng,đã nhận Hàng)",
          "Tất cả đều đúng",
          "Tại Field Chọn DIENGIAI, tại table chọn HOA DON, tại update to gõ: iif(isnull([ngaygnhang]), chưa nhận Hàng,đã nhận hàng)",
        ],
        a: 2,
      },
      {
        q: "Khi tạo truy vấn đối tượng SORT có ý nghĩa gì?",
        o: [
          "Chứa giá trị hay biểu thức lọc ứng với cột",
          "Thể hiện các cột, biểu thức trong truy vấn.",
          "Tên bảng tương ứng của cột",
          "Cho phép sắp xếp thứ tự cột tăng hay giảm",
        ],
        a: 3,
      },
      {
        q: "Muốn tính TONG bằng TOAN + LY + HOA + Điểm KHUVUC (KHUVUC=1 cộng thên 1.5 điểm, KHUVUC=2NT cộng thêm 1 điểm, KHUVUC=2 cộng thên 0.5 điểm ) ta thực hiện:",
        o: [
          "Tại Update To của cột TONG nhập: TOAN+LY+HOA + IIF(KHUVUC=''1'',1.5, IIF(KHUVUC=''2NT'',1,IIF(KHUVUC=''2'',0.5,0)))",
          "Tại Update To của cột TONG nhập: ''TOAN''+''LY''+''HOA'' + IIF(KHUVUC=''1'',1.5, IIF(KHUVUC=''2NT'',1,IIF(KHUVUC=''2'',0.5,0)))",
          "Tại Update To của cột TONG nhập: {TOAN}+{LY}+{HOA} + IIF(KHUVUC=''1'',1.5, IIF(KHUVUC=''2NT'',1,IIF(KHUVUC=''2'',0.5,0)))",
          "Tại Update To của cột TONG nhập: [TOAN]+[LY]+[HOA] + IIF(KHUVUC=''1'',1.5, IIF(KHUVUC=''2NT'',1,IIF(KHUVUC=''2'',0.5,0)))",
        ],
        a: 3,
      },
      {
        q: "Muốn trích rút danh sách sinh viên có Họ là NGUYEN và tên PHUONG ta thực hiện:",
        o: [
          "Tại CRITERIA của cột TEN nhập: [PHUONG] và tại CRITERIA của cột HODEM nhập: Like ''NGUYEN*\"",
          "Tại CRITERIA của cột TEN nhập: ''PHUONG'' và tại CRITERIA của cột HODEM nhập: Like ''NGUYEN *''",
          "Tại CRITERIA của cột TEN nhập: {PHUONG} và tại CRITERIA của cột HODEM nhập: Like ''NGUYEN *\"",
          "Tại CRITERIA của cột TEN nhập: PHUONG và tại CRITERIA của cột HODEM nhập: Like ''NGUYEN *''",
        ],
        a: 1,
      },
      {
        q: "Cho biết biểu tượng số 3 trong hình là gì?",
        o: [
          "Xây dựng biểu thức truy vấn trong Query",
          "Truy vấn Tham số nhập điều kiện thực hiện truy vấn",
          "Thực hiện chạy Query",
          "Các kiểu Truy vấn",
        ],
        a: 1,
        image: "image/CNTT/tin3/hinh-15.png",
        imageAlt: "Các mục trên menu Query được đánh số.",
      },
      {
        q: "Thay tất cả đơn vị tính (DONVITINH) là chai thành lít ta thực hiện:",
        o: [
          "Tại update to của DONVITINH gõ :iif([DONVITINH]=chai,lit,)",
          "Tại update to của DONVITINH gõ :iif([DONVITINH]=chai,lit,chai)",
          "Tại update to của DONVITINH gõ :iif([DONVITINH]=chai,lit,[DONVITINH])",
          "Tại update to của DONVITINH gõ :iif([DONVITINH]=chai,[DONVITINH],lit)",
        ],
        a: 2,
      },
      {
        q: "Giảm giá bán trong bảng chi tiết hoá đơn 10% cho hoá đơn có ngày lập 02/09/2014",
        o: [
          "Tại field chọn DONGIA, tại table chọn Chitiethoadon, tại update to gõ:iif([NGAYLAPHD]=#02/09/2014#,[GIABAN]*0.9)",
          "Tại field chọn DONGIA, tại table chọn Chitiethoadon, tại update to gõ:iif([NGAYLAPHD]=02/09/2014,[GIABAN]*0.9,[GIABAN])",
          "Tại field chọn DONGIA, tại table chọn Chitiethoadon, tại update to gõ:iif([NGAYLAPHD]=#02/09/2014#,[GIABAN]*0.1,[GIABAN])",
          "Tại field chọn GIABAN, tại table chọn Chitiethoadon, tại update to gõ:iif([NGAYLAPHD]=#02/09/2014#,[GIABAN]*0.9,[GIABAN])",
        ],
        a: 3,
      },
      {
        q: "Truy vấn tạo bảng (Make - Table Query)",
        o: [
          "Loại truy vấn dùng để cập nhật dữ liệu cho bảng từ một bảng khác.",
          "Loại truy vấn này chỉ mang tính chất cung cấp thông tin đã được lưu trữ trong bảng, không làm thay đổi dữ liệu của bảng.",
          "Loại truy tạo ra một bảng mới chứa dữ liệu",
          "Loại truy vấn dùng để thêm một hay nhiều dòng dữ liệu mới vào cuối một bảng. Mỗi truy vấn chỉ dùng để thêm dữ liệu vào cho một bảng.",
        ],
        a: 2,
      },
      {
        q: "Đưa ra thông báo nhập ngày tháng năm hiện ra MAHD và SOLUONG tương ứng theo tham số vừa nhập",
        o: [
          "Tại field chọn MAHD ,SOLUONG,NGAYLAPHD; Tại criteria của NGAYLAPHD gõ [nhập ngày tháng năm ]",
          "Tại field chọn MAHD ,NGAYLAPHD; Tại criteria của NGAYLAPHD gõ nhập ngày tháng năm",
          "Tại field chọn MAHD ,SOLUONG,NGAYLAPHD; Tại criteria của NGAYLAPHD gõ #nhập ngày tháng năm #",
          "Tại field chọn MAHD ,NGAYLAPHD; Tại criteria của NGAYLAPHD gõ #nhập ngày tháng năm #",
        ],
        a: 0,
      },
      {
        q: "Giả sử CSDL HOADON gồm các bảng (Hình ảnh) đã nhập dữ liệu, muốn tạo query cho biết các thông tin về hóa đơn của khách hàng CINOTEC, FAHASA, SAFICO, SJC bao gồm : mã HD, mã KH, tên NV lập hoá đơn, ngày lập HD, ngày nhận hàng, tên sản phẩm, số lượng, đơn giá. Sử dụng loại truy vấn nào trong các truy vấn sau:",
        o: [
          "Make table query",
          "Select query",
          "Append query",
          "Crosstab query",
        ],
        a: 1,
      },
      {
        q: "ta có W: DatePart(w,[ngaylaphd]) Cho biết tham số w có ý nghĩa gì?",
        o: [
          "lấy ra ngày trong tuần lập hóa đơn",
          "lấy ra quý lập hóa đơn",
          "lấy ra thứ trong tuần lập hóa đơn",
          "lấy ra ngày lập hóa đơn",
        ],
        a: 0,
      },
      {
        q: "Cho biết MASP có số luợng bán nhiều nhất:",
        o: [
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn group by",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn Count",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn Max",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn Min",
        ],
        a: 2,
      },
      {
        q: "Hình 1, Cho biết biểu tượng số 6 trong hình thuộc kiểu truy vấn?",
        o: [
          "Select Query",
          "Make Table Query",
          "Crosstab Query",
          "Delete Query",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-13.png",
        imageAlt: "Các biểu tượng loại truy vấn được đánh số.",
      },
      {
        q: "Muốn trích rút danh sách sinh viên có DIEML1 nhỏ hơn 5 , nhưng có điểm thi ở DIEML2 (Thi lại) ta thực hiện:",
        o: [
          "Tại CRITERIA của cột DIEML1 nhập: 5 và tại CRITERIA của cột DIEML2 nhập: Not IsNull",
          "Tại CRITERIA của cột DIEML1 nhập: <5 và tại CRITERIA của cột DIEML2 nhập: IsNull",
          "Tại CRITERIA của cột DIEML1 nhập: <5 và tại CRITERIA của cột DIEML2 nhập: Not IsNull",
          "Tại CRITERIA của cột DIEML1 nhập: 5 và tại CRITERIA của cột DIEML2 nhập: IsNull",
        ],
        a: 2,
      },
      {
        q: "Trong Toán tử like dấu ?[a-z]* có ý nghĩa là?",
        o: [
          "Ký tự đầu bất kỳ, ký tự thứ hai là chữ cái, sau đó là một nhóm ký tự bất kỳ.",
          "Ký tự đầu là chữ hoặc số, ký tự thứ hai là chữ cái, ký tự cuối là bất kỳ.",
          "Ký tự đầu là số hoặc chữ , ký tự thứ hai bắt buộc là chữ, ký tự cuối là chữ.",
          "Ký tự đầu bắt kỳ , ký tự thứ hai bắt buộc là chữ, ký tự cuối là số.",
        ],
        a: 1,
      },
      {
        q: "Muốn trích rút danh sách sinh viên có tên là PHUONG sinh năm 1988 ta thực hiện:",
        o: [
          "Tại CRITERIA của cột TEN nhập: ''PHUONG'' và tại CRITERIA của cột NGAYSINH nhập: Year([ngaysinh]) = 1988",
          "Tại CRITERIA của cột TEN nhập: [PHUONG] và tại CRITERIA của cột NGAYSINH nhập: Year([ngaysinh]) = 1988",
          "Tại CRITERIA của cột TEN nhập: {PHUONG} và tại CRITERIA của cột NGAYSINH nhập: Year([ngaysinh]) = 1988",
          "Tại CRITERIA của cột TEN nhập: PHUONG và tại CRITERIA của cột NGAYSINH nhập: Year([ngaysinh]) = 1988",
        ],
        a: 0,
      },
      {
        q: "Hình 1, Cho biết biểu tượng số 1 trong hình thuộc kiểu truy vấn?",
        o: [
          "Select Query",
          "Make Table Query",
          "Crosstab Query",
          "Update Query",
        ],
        a: 0,
        image: "image/CNTT/tin3/hinh-13.png",
        imageAlt: "Các biểu tượng loại truy vấn được đánh số.",
      },
      {
        q: "Để thực hiện truy vấn cung cấp thông tin đã được lưu trữ trong bảng ta sử dụng truy vấn.",
        o: [
          "Select query",
          "Make table query",
          "Update query",
          "Crosstab query",
        ],
        a: 0,
      },
      {
        q: "Giả sử CSDL Hoadon.ACCDB đã nhập dữ liệu, muốn tạo query gồm Mã sản phẩm bán ra nhiều nhất.Thông tin bao gồm : MaSP, TriGia. Ta thực hiện:",
        o: [
          "Tại field chọn Masp, Trigia:[soluong]*[dongia]; Tại Total: Masp chọn group by, Trigia chọn Max",
          "Tại field chọn Masp, Trigia:[soluong]*[dongia]; Tại Total: Masp chọn group by, Trigia chọn Min",
          "Tại field chọn Masp, Trigia:[soluong]*[dongia]; Tại Total: Masp chọn Max, Trigia chọn group by",
          "Tại field chọn Masp, Trigia:[soluong]*[dongia]; Tại Total: Masp chọn group by, Trigia chọn sum",
        ],
        a: 0,
      },
      {
        q: "Muốn trích rút danh sách sinh viên có tháng sinh là 2 (cột NGAYSINH có dạng DD/MM/YYYY) ta thực hiện:",
        o: [
          "Tại CRITERIA của cột NGAYSINH nhập: Month(ngaysinh) = 2",
          "Tại CRITERIA của cột NGAYSINH nhập: = 2",
          "Tại CRITERIA của cột NGAYSINH nhập: ([ngaysinh]) = 2",
          "Tại CRITERIA của cột NGAYSINH nhập: Month([ngaysinh]) = 2",
        ],
        a: 3,
      },
      {
        q: "Cho biết mỗi MASP có tổng số luợng đuợc bán :",
        o: [
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn group by",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn Count",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn Sum",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn Sum, tại Total của trường SOLUONG chọn group by",
        ],
        a: 2,
      },
      {
        q: "Truy vấn cập nhật dữ liệu (Update Query).",
        o: [
          "Loại truy vấn dùng để thêm một hay nhiều dòng dữ liệu mới vào cuối một bảng. Mỗi truy vấn chỉ dùng để thêm dữ liệu vào cho một bảng.",
          "Loại truy tạo ra một bảng mới chứa dữ liệu",
          "Loại truy vấn này chỉ mang tính chất cung cấp thông tin đã được lưu trữ trong bảng, không làm thay đổi dữ liệu của bảng.",
          "Loại truy vấn dùng để cập nhật dữ liệu cho bảng.",
        ],
        a: 3,
      },
      {
        q: "Cho biết MASP có số luợng bán ít nhất:",
        o: [
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn Count",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn Min",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn group by",
          "Tại field chọn MASP và SOLUONG; Tại Total của trường MASP chọn group by, tại Total của trường SOLUONG chọn sum",
        ],
        a: 1,
      },
      {
        q: "Hình 1, Cho biết biểu tượng số 2 trong hình thuộc kiểu truy vấn?",
        o: [
          "Append Query",
          "Crosstab Query",
          "Make Table Query",
          "Update Query",
        ],
        a: 3,
        image: "image/CNTT/tin3/hinh-13.png",
        imageAlt: "Các biểu tượng loại truy vấn được đánh số.",
      },
      {
        q: "Khi tạo truy vấn đối tượng CRITERIA có ý nghĩa gì?",
        o: [
          "Chứa giá trị hay biểu thức lọc ứng với cột",
          "Thể hiện các cột, biểu thức trong truy vấn.",
          "Tên bảng tương ứng của cột",
          "Cho phép sắp xếp thứ tự cột tăng hay giảm",
        ],
        a: 0,
      },
      {
        q: "Để tạo 1 Crosstab Query chúng ta cần lựa chọn mấy giá trị Value",
        o: ["1 cột", "2 cột", "3 cột", "4 cột"],
        a: 0,
      },
      {
        q: "Truy vấn thêm dữ liệu (Append Query).",
        o: [
          "Loại truy vấn dùng để thực hiện xoá một hay nhiều dòng dữ liệu của một bảng.",
          "Loại truy tạo ra một bảng mới chứa dữ liệu",
          "Loại truy vấn này chỉ mang tính chất cung cấp thông tin đã được lưu trữ trong bảng, không làm thay đổi dữ liệu của bảng.",
          "Loại truy vấn dùng để thêm một hay nhiều dòng dữ liệu mới vào cuối một bảng. Mỗi truy vấn chỉ dùng để thêm dữ liệu vào cho một bảng.",
        ],
        a: 3,
      },
      {
        q: "Muốn trích rút danh sách sinh viên có DIEML1 là 5 hoặc10 ta thực hiện:",
        o: [
          "Tại CRITERIA của cột DIEML1 nhập: 5 , 10",
          "Tại CRITERIA của cột DIEML1 nhập: 5 OR 10",
          "Tại CRITERIA của cột DIEML1 nhập: >=5 OR <=10",
          "Tại CRITERIA của cột DIEML1 nhập: 5 AND 10",
        ],
        a: 1,
      },
      {
        q: "Cập nhật cho GIABAN của bảng CHITIETHOADON bằng DONGIA trong bảng sản phẩm",
        o: [
          "Tại update to GIABAN của table CHITIETHOADON gõ:=[SANPHAM.DONGIA]",
          "Tại update to GIABAN của table CHITIETHOADON gõ:=[DONGIA]![SANPHAM]",
          "Tại update to GIABAN của table CHITIETHOADON gõ:=”DONGIA”",
          "Tại update to GIABAN của table CHITIETHOADON gõ:=SANPHAM![dongia]",
        ],
        a: 0,
      },
    ],
  },
];
export default QUIZ_SETS_TIN3;
