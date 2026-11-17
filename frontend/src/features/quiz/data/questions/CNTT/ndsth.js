const QUIZ_SETS_CSCNNDSH = [
  {
    id: "co_so_cong_nghe_nhan_dang_sinh_hoc",
    majorId: "cntt",
    title: "Cơ sở công nghệ của nhận dạng sinh học",
    description:
      "Ôn tập xử lý ảnh, vân tay, giải thuật Zhang-Suen, Crossing Number và nhận dạng sinh trắc học",
    questions: [
      {
        q: "Yếu tố nào sau đây của vân tay được chọn để nhận dạng sinh trắc học?",
        o: [
          "Yếu tố duy nhất",
          "Yếu tố phổ biến ai cũng có, trừ trường hợp bị bong da",
          "Yếu tố bất biến theo thời gian",
          "Tất cả yếu tố trên",
        ],
        a: 3,
      },
      {
        q: "Biểu diễn ảnh trong xử lý ảnh có nhiệm vụ gì?",
        o: [
          "Biến đổi số liệu thành dạng thích hợp, trích chọn đặc trưng, tách các đặc tính ảnh dưới dạng thông tin định lượng",
          "Tách ảnh đầu vào thành các vùng thành phần để biểu diễn phân tích, nhận dạng",
          "Mô tả liên kết các điểm ảnh lân cận",
          "Dùng các giải thuật mã hóa hoặc ma trận để biểu diễn",
        ],
        a: 0,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, vòng lặp 2, điều kiện thứ 3 là gì?",
        o: ["P2*P4*P8=0", "BP<=6 và >=2", "AP=1", "P2*P6*P8=0"],
        a: 0,
      },
      {
        q: "Cơ sở tri thức trong xử lý ảnh là gì?",
        o: [
          "Là các công đoạn như tiền xử lý, nhận dạng nội suy, biểu diễn ảnh",
          "Bắt chước các quy trình nhận dạng và xử lý ảnh theo cách con người",
          "Là phương pháp nội suy ảnh",
          "Là tổng hợp các hiểu biết về thông tin, kích cỡ, bảng màu của ảnh",
        ],
        a: 1,
      },
      {
        q: "Giải thuật làm mảnh ảnh Zhang-Suen có mấy điều kiện?",
        o: [
          "Hai điều kiện: Số lần chuyển từ 0 sang 1 khi đi theo chiều kim đồng hồ, và số lân cạnh có ảnh xung quanh nó",
          "Ba điều kiện: AP=1, BP<6, P2*P4*P6=0",
          "Có 5 điều kiện",
          "Bốn điều kiện: AP=1, BP<6, P2*P4*P6=0, P4*P6*P8=0",
        ],
        a: 3,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, vòng lặp 2, điều kiện thứ 2 là gì?",
        o: ["AP=1", "BP<=6 và >=2", "P2*P4*P8=0", "P2*P6*P8=0"],
        a: 1,
      },
      {
        q: "Nhận dạng sinh trắc học là gì?",
        o: [
          "Công nghệ sử dụng những thuộc tính vật lý, đặc điểm sinh học riêng của mỗi cá nhân như vân tay, mống mắt, khuôn mặt... để nhận diện",
          "Công nghệ nhận dạng sinh học như mồ hôi, hình dáng",
          "Công nghệ nhận dạng dựa trên cử chỉ, tính tình",
          "Công nghệ nhận dạng dựa trên màu da, màu tóc",
        ],
        a: 0,
      },
      {
        q: "Các ứng dụng chính của xử lý ảnh là gì ?",
        o: [
          "Làm mảnh và tăng cường ảnh",
          "Nâng cao chất lượng ảnh và phân tích ảnh",
          "Làm mờ ảnh",
          "Tăng độ tương phản",
        ],
        a: 1,
      },
      {
        q: "Cửa sổ dùng trong giải thuật Crossing Number sổ có kích thước bao nhiêu?",
        o: ["2 x 2", "4 x 4", "5 x 5", "3 x 3"],
        a: 3,
      },
      {
        q: "Tại sao đặc điểm sinh trắc học lại là đối tượng để nhận dạng?",
        o: [
          "Vì nó phổ biến, duy nhất và không thay đổi theo thời gian",
          "Vì nó dễ nhận dạng bằng các thiết bị công nghệ",
          "Vì nó không thay đổi",
          "Vì nó là duy nhất và mỗi người đều có",
        ],
        a: 0,
      },
      {
        q: "Trong giải thuật Zhang-Suen, Nếu A[i,j] là ô trung tâm, trục tung là I, trục hoành là J, thì P10 là gì?",
        o: ["A[i-1,j+1]", "A[i-1,j]", "A[i+1,j-1]", "A[i,j-1]"],
        a: 1,
      },
      {
        q: "Phương án nào sau đây có các công đoạn chính trong đối sánh vân tay?",
        o: [
          "Hai công đoạn: Rút trích và chọn đặc trưng",
          "Ba công đoạn: Làm mảnh, rút trích, lưu trữ đặc trưng",
          "Hai công đoạn: Khớp mẫu(alignment) và đối sánh(matching)",
          "Một công đoạn: Khớp mẫu",
        ],
        a: 2,
      },
      {
        q: "Phương án nào sau đây định nghĩa độ phân giải ảnh?",
        o: [
          "Độ phân giải ảnh là số điểm ảnh lân cận khác 0",
          "Độ phân giải ảnh là mật độ điểm ảnh được ấn định trên một ảnh số được hiển thị",
          "Độ phân giải ảnh là phần tử 0 hoặc 1",
          "Độ phân giải ảnh là kích thước chiều ngang và chiều dọc của ảnh",
        ],
        a: 1,
      },
      {
        q: "Trong giải thuật Crossing Number, nếu ô (i,j) là ô trung tâm, I là trục tung, J là trục hoành thì P6 tương ứng thế nào?",
        o: ["(i+1,j-1)", "(i-1.j+1)", "(i-1,j)", "(i+1,j+1)"],
        a: 0,
      },
      {
        q: "Độ phân giải ảnh là gì?",
        o: [
          "Là số điểm ảnh lân cận khác 0",
          "Là kích thước chiều ngang và chiều dọc của ảnh.",
          "Là phần tử 0 hoặc 1",
          "Là mật độ điểm ảnh được ấn định trên một ảnh số được hiển thị",
        ],
        a: 3,
      },
      {
        q: "Người ta dùng mấy bít để biểu diễn mức xám ?",
        o: ["4 byte", "3 byte, 24 bít", "2 byte", "1 byte, 8 bít"],
        a: 3,
      },
      {
        q: "Nhận dạng và nội suy ảnh vân tay là gì?",
        o: [
          "Tách ảnh đầu vào thành các vùng thành phần để biểu diễn phân tích, nhận dạng",
          "Biến đổi số liệu thành dạng thích hợp, trích chọn đặc trưng, tách các đặc tính ảnh dưới dạng thông tin định lượng",
          "Mô tả liên kết các điểm ảnh lân cận",
          "Xác định ảnh và so sánh với mẫu chuẩn đã được học từ trước",
        ],
        a: 3,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, vòng lặp 1, điều kiện thứ 3 là gì?",
        o: ["P2*P4*P6=0", "BP<=6 và >=2", "AP=1", "P4*P6*P8=0"],
        a: 0,
      },
      {
        q: "Trong giải thuật Crossing Number, nếu ô (i,j) là ô trung tâm, I là trục tung, J là trục hoành thì P4 tương ứng là gì?",
        o: ["(i-1,j)", "(i-1.j+1)", "(i+1,j+1)", "(i+1,j)"],
        a: 2,
      },
      {
        q: "Giải thuật Crossing Number là gì ?",
        o: [
          "Là giải thuật làm mảnh ảnh",
          "Là giải thuật đối sánh vân tay",
          "Là giải thuật nhận dạng đặc trưng vân tay",
          "Là giải thuật khớp mẫu vân tay",
        ],
        a: 2,
      },
      {
        q: "Công thức tính CNP của Crossing Number thế nào?",
        o: [
          "CNP=1/2(|P[i]+P[i+1]|) (i=1->8)",
          "CNP=1/2(|P[i]-P[i-1]|) (i=1->8)",
          "CNP=1/2(|P[i]-P[i+1]|) (i=1->8)",
          "CNP=1/2(|P[i]-P[i+1]|) (i=1->9)",
        ],
        a: 2,
      },
      {
        q: "Giải thuật khớp mẫu Alignment bao gồm các bước nào?",
        o: [
          "Chọn hai cặp của input và template, và đối sánh",
          "Chọn minutiae của input và template, xoay template theo input, tính mức độ phù hợp của input và template theo ngưỡng",
          "So sánh các cặp minutiae của input và template",
          "Khớp các mẫu",
        ],
        a: 1,
      },
      {
        q: "Tiền xử lý ảnh có chức năng gì?",
        o: [
          "Làm mảnh",
          "Tăng cường các nét",
          "Nối các nét",
          "Lọc nhiễu và tăng độ tương phản",
        ],
        a: 3,
      },
      {
        q: "Những đặc trưng chính nào của vân tay dùng để nhận dạng?",
        o: [
          "Các lằn(ridges) và các lõm(valley)",
          "Các điểm đứt đoạn",
          "Các điểm chia hai(bifurcation) và điểm kết thúc lằn(ridge ending)",
          "Tất cả các điểm trên",
        ],
        a: 2,
      },
      {
        q: "Khớp mẫu vân tay là gì?",
        o: [
          "Biến đổi input vân tay thành template vân tay",
          "Biến đổi template vân tay thành input vân tay",
          "Khớp hai mẫu input và tempate thành một mẫu mới",
          "Đặt vân tay cần đối sánh với vân tay mẫu ở một vị trí sao cho có sự phù hợp giữa chúng theo một ngưỡng nhất định.",
        ],
        a: 3,
      },
      {
        q: "Mô tả và biểu diễn ảnh là gì?",
        o: [
          "Là dùng các giải thuật mã hóa ảnh",
          "Số hóa ảnh",
          "Là phương pháp nội suy ảnh",
          "Đặc tả và biểu diễn, mã hóa lại theo các đặc điểm của ảnh được gọi là đặc trưng ảnh như biên ảnh, vùng ảnh",
        ],
        a: 3,
      },
      {
        q: "Điều kiện kết thúc giải thuật Zhang-Suen là gì?",
        o: [
          "Hết vòng lặp 1, không xóa được điểm ảnh nào sẽ kết thúc",
          "Hết vòng lặp 2, không xóa được điểm ảnh nào trong vòng lặp 2 sẽ kết thúc",
          "Hết hai vòng lặp, sẽ lặp thêm 1 vòng nữa để xóa tiếp",
          "Hết hai vòng lặp, không xóa được điểm ảnh nào sẽ kết thúc",
        ],
        a: 3,
      },
      {
        q: "Đối sánh vân tay là gì?",
        o: [
          "Gồm khớp mẫu và đối sánh",
          "So sánh với ngưỡng cho trước",
          "Tìm các điểm đặc trưng tương ứng giữa vân tay quét vào và vân tay mẫu, nếu lớn hơn ngưỡng cho trước thì là tương đương",
          "Tìm các điểm đặc trưng tương ứng giữa vân tay quét vào và vân tay mẫu và so sánh với ngưỡng nào đó chấp nhận được",
        ],
        a: 3,
      },
      {
        q: "Trong giải thuật Zhang-Suen, Nếu A[i,j] là ô trung tâm, trục tung là I, trục hoành là J, thì P7 tương đương là gì?",
        o: ["A[i-1,j]", "A[i+1,j-1]", "A[i-1,j+1]", "A[i,j-1]"],
        a: 1,
      },
      {
        q: "Nhận dạng đặc trưng vân tay nằm trong bước nào sau đây của chu trình xử lý ảnh?",
        o: [
          "Tiền xử lý ảnh",
          "Phân tích ảnh",
          "Phân đoạn ảnh",
          "Nhận dạng và nội suy",
        ],
        a: 3,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, vòng lặp 2, điều kiện thứ 4 là gì?",
        o: ["AP=1", "P2*P6*P8=0", "P2*P4*P8=0", "BP<=6 và >=2"],
        a: 1,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, vòng lặp 2, điều kiện thứ 1 là gì?",
        o: ["AP=1", "BP<=6 và >=2", "P2*P4*P8=0", "P2*P6*P8=0"],
        a: 0,
      },
      {
        q: "Một hệ thống nhận dạng sinh trắc học phải có những yêu cầu gì?",
        o: [
          "Có 3 yêu cầu: Hiệu suất về tóc độ, tài nguyên và độ chính xác, Vô hại với con người và Bảo mật an toàn",
          "Có 2 yêu cầu: chính xác và tiết kiệm",
          "Có 3 yêu cầu: Chính xác, tốc độ và bảo mật",
          "Có 2 yêu cầu: Tốc độ và bảo mật",
        ],
        a: 0,
      },
      {
        q: "Trong giải thuật Crossing Number, nếu ô (i,j) là ô trung tâm, I là trục tung, J là trục hoành thì P9 tương ứng là gì?",
        o: ["(i+1,j+1)", "(i-1.j+1)", "(i+1,j-1)", "(i-1,j)"],
        a: 3,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, BP có ý nghĩa gì?",
        o: [
          "Số lân cận điểm ảnh xung quanh bằng 1.",
          "Số lần chuyển từ 0 sang 1 khi đi từ P2->P9",
          "Số lần chuyển từ 0 sang 1 khi đi theo chiều kim đồng hồ P2->P9 rồi trở về P2",
          "Cả 3 điều trên",
        ],
        a: 0,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, vòng lặp 1, điều kiện thứ 2 là gì?",
        o: ["BP<=6 và >=2", "AP=1", "P2*P4*P6=0", "P4*P6*P8=0"],
        a: 0,
      },
      {
        q: "Điểm ảnh là gì?",
        o: [
          "Là ảnh nhị phân trong ma trận",
          "Là Pixel ảnh",
          "Là phần tử 0 hoặc 1",
          "Là phần tử của ảnh số tại tọa độ x,y với độ xám hoặc màu nhất định",
        ],
        a: 3,
      },
      {
        q: "Trong giải thuật Zhang-Suen, Nếu A[i,j] là ô trung tâm, trục tung là I, trục hoành là J, thì P11 tương ứng là gì?",
        o: ["Không tồn tại", "A[i-1,j]", "A[i+1,j-1]", "A[i,j-1]"],
        a: 0,
      },
      {
        q: "Có mấy bước chính trong tiền xử lý ảnh vân tay?",
        o: [
          "Hai bước, lọc và làm mảnh ảnh",
          "Ba bước, lọc, nhị phân cục bộ, làm mảnh ảnh",
          "Bốn bước: khử nhiễu, lọc, làm mảnh, đối sánh vân tay",
          "Có một bước: Làm mảnh ảnh",
        ],
        a: 1,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, AP có ý nghĩa gì?",
        o: [
          "Số lần chuyển từ 0 sang 1 khi đi theo chiều kim đồng hồ P2->P9 rồi trở về P2",
          "Số lần chuyển từ 0 sang 1 khi đi từ P2->P9",
          "Số lân cận điểm ảnh xung quanh",
          "Cả 3 điều trên",
        ],
        a: 0,
      },
      {
        q: "Trong giải thuật Crossing Number, nếu ô (i,j) là ô trung tâm, I là trục tung, J là trục hoành thì P2 tương ứng là gì?",
        o: ["(i-1,j+1)", "(i-1.j+1)", "(i+1,j)", "(i+1,j+1)"],
        a: 0,
      },
      {
        q: "Tại sao phải tiền xử lý ảnh vân tay trước khi nhận dạng?",
        o: [
          "Vì ảnh vân tay thu được qua thiết bị chưa đủ độ nét",
          "Vì ảnh vân tay thu được qua thiết bị bị nhiễu",
          "Vì các nét vân tay thu được qua thiết bị chưa nhận dạng được",
          "Tất cả các đáp án đều đúng",
        ],
        a: 3,
      },
      {
        q: "Phân đoạn hoặc phân vùng ảnh có chức năng gì?",
        o: [
          "Liên kết các điểm ảnh lân cận",
          "Xóa các điểm ảnh lân cận để phân đoạn điểm ảnh",
          "Tách ảnh đầu vào thành các vùng thành phần để biểu diễn phân tích, nhận dạng",
          "Lọc nhiễu và tăng độ tương phản",
        ],
        a: 2,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, vòng lặp 1, điều kiện thứ 1 tương ứng là gì?",
        o: ["AP=1", "BP<=6 và >=2", "P2*P4*P6=0", "P4*P6*P8=0"],
        a: 0,
      },
      {
        q: "Trong giải thuật Crossing Number, nếu ô (i,j) là ô trung tâm, I là trục tung, J là trục hoành thì P10 tương ứng là gì?",
        o: ["(i-1, j)", "Không có", "(i+1, j-1)", "(i+1, j+1)"],
        a: 1,
      },
      {
        q: "Trong giải thuật Zhang-Suen, Nếu A[i,j] là ô trung tâm, trục tung là I, trục hoành là J, thì P3 tương ứng là gì?",
        o: ["A[i-1,j]", "A[i+1,j+1]", "A[i-1,j+1]", "A[i,j-1]"],
        a: 2,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, vòng lặp 1, điều kiện thứ 4 là gì?",
        o: ["AP=1", "BP<=6 và >=2", "P2*P4*P6=0", "P4*P6*P8=0"],
        a: 3,
      },
      {
        q: "Các toán tử nào dùng trong khớp mẫu vân tay?",
        o: [
          "Tịnh tiến",
          "Ma trận quay",
          "Ma trận quay và tịnh tiến",
          "Quay và biến đổi Fourier",
        ],
        a: 2,
      },
      {
        q: "Trong giải thuật Crossing Number, nếu ô (i,j) là ô trung tâm, I là trục tung, J là trục hoành thì P1 tương ứng là gì?",
        o: ["(i+1,j+1)", "(i-1.j+1)", "(i+1,j)", "(i-1,j)"],
        a: 3,
      },
      {
        q: "Trong giải thuật Zhang-Suen, Nếu A[i,j] là ô trung tâm, trục tung là I, trục hoành là J, thì P2 tương ứng là gì?",
        o: ["A[i-1,j+1]", "A[i-1,j-1]", "A[i-1,j]", "A[i,j-1]"],
        a: 2,
      },
      {
        q: "Trong mô hình các bước rút trích đặc trưng vân tay. Tìm các bước sai trong chuỗi tiến trình sau: (1)Nâng cao chất lượng ảnh ->(2)Phân tích ảnh -> (3)Nhị phân hóa - > (4)Làm mảnh ảnh -> (5) Rút trích đặc trưng vân tay -> (6) Tái tạo cấu trúc đường vân?",
        o: ["Bước 1 và 2", "Bước 4 và 5", "Bước 3 và 4", "Bước 5 và 6"],
        a: 3,
      },
      {
        q: "Trong quá trình tiền xử lý ảnh vân tay, Tìm các bước sai trong chuỗi tiến trình sau: (1)ảnh vân tay ->(2)Lọc -> (3)ảnh chất lượng cao -> (4)Nhị phân cục bộ -> (5) ảnh nhị phân -> (6) ảnh đã được làm mảnh ->(7) Làm mảnh ảnh?",
        o: ["Bước 1 và 2", "Bước 6 và 7", "Bước 5 và 6", "Bước 2 và 3"],
        a: 1,
      },
      {
        q: "Bảng màu của file ảnh ghi những thông tin gì?",
        o: [
          "Số màu dùng trong ảnh và bảng màu được dùng để hiển thị ảnh",
          "Chứa header file",
          "Chứa mã xích",
          "Số liệu ảnh được mã hóa bởi kiểu mã hóa được chỉ ra trong Header",
        ],
        a: 0,
      },
      {
        q: "Vì sao khi đối sánh vân tay người ta cần phải thực hiện phép tịnh tiến?",
        o: [
          "Tất cả các đáp án đều đúng",
          "Vì vân tay cần phải quay cùng về một hướng",
          "Để tính góc",
          "Vì sau khi quay người ta cần tịnh tiến để đo độ sai số",
        ],
        a: 3,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, P là điểm trung tâm, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 01000001, với P1=1, hãy tính B(P1)?",
        o: ["4", "6", "3", "2"],
        a: 3,
      },
      {
        q: "Anh (Chị) hãy nêu công thức Maxwell ?",
        o: [
          "Đỏ+Lục+Lơ=1",
          "R+G+B=1024",
          "R * G * B=256 * 256 * 256",
          "Đỏ*Luc*Lơ=1",
        ],
        a: 0,
      },
      {
        q: "Nhận dạng thân nhiệt tay có phải là nhận dạng sinh trắc học không?",
        o: [
          "Có vì nó là thuộc tính vật lý và đặc điểm sinh học duy nhất của mỗi cá nhân",
          "Không vì nó là thuộc tính vật lý và đặc điểm sinh học duy nhất của mỗi cá nhân",
          "Có vì thân nhiệt tay không thể đo đạc định lượng",
          "Không vì nó có thể giống nhau",
        ],
        a: 0,
      },
      {
        q: "Anh (Chị) hãy cho biết giai đoạn tiền xử lý ảnh vân tay có mấy bước?",
        o: [
          "1 bước: rút trích",
          "2 bước: tiền xử lý, rút trích",
          "3 bước: lọc, nhị phân cục bộ, làm mảnh",
          "4 bước: tiền xử lý, rút trích đặc trưng, hậu xử lý, đối sánh",
        ],
        a: 2,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, P là điểm trung tâm, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 11001001, với P1=1, hãy tính B(P1)?",
        o: ["4", "6", "3", "2"],
        a: 0,
      },
      {
        q: "Mức xám của ảnh là gì?",
        o: [
          "Là hệ tọa độ màu RGB của ảnh",
          "Là cường độ sáng của nó được gán bằng giá trị số tại điểm đó",
          "Là phần tử 0 hoặc 1",
          "Là mật độ điểm ảnh được ấn định trên một ảnh số được hiển thị",
        ],
        a: 1,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 11110111, hãy tính BP?",
        o: ["3", "1", "7", "0"],
        a: 2,
      },
      {
        q: "Ảnh số là gì?",
        o: [
          "Là tập hợp điểm ảnh với các giá trị 0,1",
          "Là ảnh được số hóa",
          "Tập hợp các điểm ảnh với mức xám phù hợp dùng để mô tả ảnh gần với ảnh thật",
          "Là tập hợp điểm ảnh có giá trị số bất kỳ",
        ],
        a: 2,
      },
      {
        q: "Công nghệ nhận dạng sinh trắc đa nhân tố là gì?",
        o: [
          "Nhận dạng sinh trắc học",
          "Nhận dạng tròng mắt",
          "Nhận dạng khuôn mặt",
          "Sự kết hợp giữa các đặc điểm sinh trắc học như mắt, khuôn mặt, vân tay",
        ],
        a: 3,
      },
      {
        q: "Anh (Chị) hãy nêu quy trình đọc 1 tệp ảnh?",
        o: [
          "Đọc header, dữ liệu, giải nén, giải mã",
          "Đọc dữ liệu nén",
          "Đọc bảng màu",
          "Đọc header, bảng màu và dữ liệu nén",
        ],
        a: 3,
      },
      {
        q: "Tính bảo mật an toàn trong nhận sạng sinh trắc học là gì?",
        o: [
          "Độ bền vững trước các phương pháp tấn công, gian lận",
          "Mọi người hay dùng",
          "Duy nhất",
          "Tất cả các đáp án đều đúng",
        ],
        a: 0,
      },
      {
        q: "Khi nhận dạng sinh trắc học, mẫu input chọn được 10 template giống đặc điểm của input nhất, bước tiếp theo phải chọn mẫu dựa trên đặc điểm nào?",
        o: [
          "Chọn mẫu có sai số ít nhất",
          "Chọn mẫu có sai số ít nhất và nhỏ hơn ngưỡng cho trước",
          "Chọn ngẫu nhiên",
          "Chọn kết hợp",
        ],
        a: 1,
      },
      {
        q: "Dữ liệu nén của file ảnh ghi những thông tin gì?",
        o: [
          "Chứa mã xích",
          "Chứa header file",
          "Số liệu ảnh được mã hóa bởi kiểu mã hóa được chỉ ra trong Header",
          "Chứa kích cỡ ảnh",
        ],
        a: 2,
      },
      {
        q: "Anh (Chị) hãy nêu ý nghĩa của mã tứ phân?",
        o: [
          "Chia vùng ảnh thành 4 phần và đệ quy",
          "Chia vùng ảnh thành 4 phần và mã hóa từng phần",
          "Chia vùng ảnh thành 4 phần một cách đệ quy, tạo ra 1 cây chia làm 4 phần gọi là cây tứ phân",
          "Là mã xích mở rộng",
        ],
        a: 2,
      },
      {
        q: "DNA, Tóc, nước bọt, hình dáng. Đâu là nhận dạng sinh trắc học?",
        o: ["Tất cả các đáp án đều đúng", "Tóc", "Nước bọt", "DNA"],
        a: 0,
      },
      {
        q: "Trong mô hình các bước rút trích đặc trưng vân tay. Tìm các bước sai trong chuỗi tiến trình sau: (1)Nâng cao chất lượng ảnh ->(2)Phân tích ảnh -> (3)Làm mảnh ảnh -> (4) Nhị phân hóa -> (5)Tái tạo cấu trúc đường vân -> (6)Rút trích đặc trưng vân tay?",
        o: ["Bước 1 và 2", "Bước 2 và 3", "Bước 4 và 5", "Bước 3 và 4"],
        a: 3,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 11001111, với P1=1, hãy tính P8*P4*P6 ?",
        o: ["2", "0", "3", "1"],
        a: 1,
      },
      {
        q: "Trong giải thuật Crossing Number, nếu ô (i,j) là ô trung tâm, thì P5 tương ứng là gì?",
        o: ["(i,j+1)", "(i-1,j+1)", "(i+1,j)", "(i+1,j-1)"],
        a: 2,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 01110111, hãy tính AP?",
        o: ["2", "1", "3", "0"],
        a: 0,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 01110111, Điểm ảnh này có bị đánh dấu xóa không?",
        o: [
          "Có vì thỏa mãn 4 điều kiện",
          "Không vì AP=2",
          "Không vì AP=1",
          "Không vì BP=9",
        ],
        a: 1,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, P là điểm trung tâm, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 11111001, với P1=1, hãy tính B(P1)?",
        o: ["2", "4", "3", "6"],
        a: 3,
      },
      {
        q: "Vân tay, võng mạc, chữ ký, giọng nói. Đâu là nhận sạng sinh trắc học?",
        o: ["Vân tay", "Võng mạc", "Tất cả các đáp án đều đúng", "Chữ ký"],
        a: 2,
      },
      {
        q: "Ridge ending là gì?",
        o: [
          "Là điểm vân tay chia làm hai, rẽ nhánh",
          "Là điểm kết thúc vân tay",
          "Là lõm vân tay",
          "Là nét mờ vân tay",
        ],
        a: 1,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, P1 là điểm trung tâm, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 11001111, với P1=1, hãy tính B(P1)?",
        o: ["6", "2", "3", "4"],
        a: 0,
      },
      {
        q: "Anh (Chị) hãy nêu quy trình đọc tệp ảnh?",
        o: [
          "Đọc header và dừng",
          "Đọc header, thông tin chung và thông tin điều khiển, đọc bảng màu vào bộ nhớ, đọc dữ liệu nén, giải mã và hiển thị ảnh",
          "Đọc dữ liệu nén, giải nén, hiển thị ảnh",
          "Số màu dùng trong ảnh và bảng màu được dùng để hiển thị ảnh",
        ],
        a: 1,
      },
      {
        q: "Đoạn code sau đây nằm trong đoạn code tính điều kiện nào của giải thuật Zhang-Suen? If (P[i]==0 && P[i+1]==1) ?",
        o: ["Tính CNP", "Tính AP", "Tính BP", "Tất cả"],
        a: 1,
      },
      {
        q: "Trong quá trình tiền xử lý ảnh vân tay, Tìm các bước sai trong chuỗi tiến trình sau: (1)ảnh vân tay ->(2) ảnh chất lượng cao -> (3) Lọc -> (4)Nhị phân cục bộ -> (5) ảnh nhị phân -> (6) Làm mảnh ảnh ->(7)ảnh đã được làm mảnh?",
        o: ["Bước 2 và 3", "Bước 1 và 2", "Bước 3 và 4", "Bước 4 và 5"],
        a: 0,
      },
      {
        q: "Trong giải thuật làm mảnh ảnh Zhang-Suen, P là điểm trung tâm, khi đi từ P2 đến P9 ta thu được chuỗi ảnh như sau 11101001, với P1=1, hãy tính P4 * P6 * P8?",
        o: ["2", "0", "3", "1"],
        a: 1,
      },
      {
        q: "Trong giải thuật Crossing Number, nếu ô (i,j) là ô trung tâm, thì P3 tương ứng là gì?",
        o: ["(i,j+1)", "(i-1.j+1)", "(i+1,j-1)", "(i+1,j+1)"],
        a: 0,
      },
      {
        q: "Lân cận điểm ảnh NPP là gì?",
        o: [
          "Là tập hợp điểm ảnh có giá trị số bất kỳ",
          "Là 4 điểm ảnh lân cận gần nhất theo hướng Đông, Tây, Nam, Bắc",
          "Là các điểm ảnh xung quanh",
          "Là các điểm ảnh gần nhất theo hướng 2 đường chéo với điểm ảnh ở trung tâm",
        ],
        a: 3,
      },
      {
        q: "Header của file ảnh ghi những thông tin gì?",
        o: [
          "Chứa thông tin về ảnh: kích cỡ, kiểu ảnh, độ phân giải, số bít dùng cho 1 pixel, bảng màu, cách mã hóa",
          "Chứa dữ liệu nén",
          "Chứa mã xích",
          "Chứa kích cỡ ảnh",
        ],
        a: 0,
      },
      {
        q: "Trong giải thuật Zhang-Suen, Nếu A[i,j] là ô trung tâm, thì P8 tương ứng là gì?",
        o: ["A[i-1,j]", "A[i,j+1]", "A[i,j-1]", "A[i+1,j]"],
        a: 2,
      },
      {
        q: "Anh(Chị) hãy nêu sự khác nhau giữa ảnh màu và ảnh đen trắng?",
        o: [
          "Mức xám khác nhau",
          "ảnh màu có nhiều màu hơn",
          "ảnh đen trắng chỉ có 2 màu đen và trắng",
          "ảnh đen trắng dùng 1 byte để biểu diễn mức xám, ảnh màu dùng 3 byte và là tổ hợp của 3 màu cơ bản",
        ],
        a: 3,
      },
      {
        q: "Nhận dạng sinh trắc học để đăng nhập mạng máy tính ATM, thẻ tín dụng nằm trong lĩnh vực nào?",
        o: ["Pháp y", "Công nghệ", "Chính phủ", "Thương mại"],
        a: 3,
      },
      {
        q: "Trong giải thuật Zhang-Suen, Nếu A[i,j] là ô trung tâm, thì P4 tương ứng là gì?",
        o: ["A[i,j+1]", "A[i-1,j]", "A[i+1,j-1]", "A[i,j-1]"],
        a: 0,
      },
      {
        q: "Bifurcation là gì ?",
        o: [
          "Là điểm kết thúc vân tay",
          "Là điểm vân tay chia làm hai, rẽ nhánh",
          "Là lõm vân tay",
          "Là nét mờ vân tay",
        ],
        a: 1,
      },
      {
        q: "Tính riêng biệt trong nhận sạng sinh trắc học là gì?",
        o: [
          "Mọi người hay dùng",
          "Khác nhau nếu hai người khác nhau",
          "Duy nhất",
          "Tất cả",
        ],
        a: 1,
      },
      {
        q: "Vì sao khi đối sánh vân tay người ta cần phải thực hiện phép quay?",
        o: [
          "Vì vân tay lúc lấy và vân tay lúc quét có lệch hướng nhau",
          "Vì vân tay cần phải quay cùng về một hướng",
          "Để đo độ sai số cho dễ",
          "Tất cả các đáp án đều đúng",
        ],
        a: 0,
      },
      {
        q: "Lân cận điểm ảnh N4P là gì?",
        o: [
          "Là các điểm ảnh trên 4 đường chéo với điểm ảnh ở trung tâm",
          "Là các điểm ảnh xung quanh",
          "Là 4 điểm ảnh lân cận gần nhất theo hướng Đông, Tây, Nam, Bắc",
          "Là tập hợp điểm ảnh có giá trị số bất kỳ",
        ],
        a: 2,
      },
      {
        q: "Trong giải thuật Zhang-Suen, khi thỏa mãn 4 điều kiện, người ta thực hiện thao tác gì với điểm ảnh ấy?",
        o: [
          "Xóa điểm ảnh ấy ngay",
          "Không làm gì",
          "Biến điểm ảnh ấy từ 0 thành 1, hoặc từ 1 thành 0",
          "Đánh dấu xóa",
        ],
        a: 3,
      },
      {
        q: "Khả năng chấp nhận trong nhận sạng sinh trắc học là gì?",
        o: [
          "Tất cả các đáp án đều đúng",
          "Mọi người hay dùng",
          "Duy nhất",
          "Tính vô hại với con người",
        ],
        a: 3,
      },
      {
        q: "Nhận dạng tĩnh mạch tay có phải là nhận dạng sinh trắc học không ?",
        o: [
          "Không vì tĩnh mạch tay không thể đo đạc định lượng",
          "Có vì nó là thuộc tính vật lý và đặc điểm sinh học duy nhất của mỗi cá nhân",
          "Có vì tĩnh mạch tay có thể đo đạc định lượng",
          "Không vì nó có thể giống nhau",
        ],
        a: 1,
      },
      {
        q: "Trong quá trình tiền xử lý ảnh vân tay, Tìm các bước sai trong chuỗi tiến trình sau: (1) Lọc ->(2) ảnh vân tay -> (3)ảnh chất lượng cao -> (4)Nhị phân cục bộ -> (5) ảnh nhị phân -> (6) Làm mảnh ảnh ->(7)ảnh đã được làm mảnh?",
        o: ["Bước 1 và 2", "Bước 2 và 3", "Bước 5 và 6", "Bước 6 và 7"],
        a: 0,
      },
      {
        q: "Trong mô hình các bước rút trích đặc trưng vân tay. Tìm các bước sai trong chuỗi tiến trình sau: (1) Phân tích ảnh ->(2) Nâng cao chất lượng ảnh -> (3)Nhị phân hóa -> (4)Làm mảnh ảnh -> (5)Tái tạo cấu trúc đường vân -> (6)Rút trích đặc trưng vân tay?",
        o: ["Bước 3 và 4", "Bước 2 và 3", "Bước 1 và 2", "Bước 4 và 5"],
        a: 2,
      },
      {
        q: "Trong giải thuật Crossing Number, Đi từ P1 đến P8 lần lượt là 00010001, hãy cho biết điểm vân tay trung tâm P0 thuộc loại đặc trưng gì ?",
        o: [
          "Trên đường vân",
          "Ridge ending",
          "Điểm chia đôi",
          "Tất cả các đáp án đều đúng",
        ],
        a: 0,
      },
    ],
  },
];
export default QUIZ_SETS_CSCNNDSH;
