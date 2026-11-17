const QUIZ_SETS_RHM = [
  {
    id: "chuyen_khoa_rang_ham_mat_va_mat",
    majorId: "suc_khoe",
    schoolId: "vmu",
    title: "Chuyên Khoa Răng-Hàm-Mặt và Mắt",
    description:
      "Ôn tập bệnh lý, chăm sóc điều dưỡng, vệ sinh răng miệng, chấn thương hàm mặt và các bệnh mắt theo nội dung tài liệu.",
    questions: [
      {
        q: "Nguyên nhân phổ biến nhất gây viêm lợi:",
        o: [
          "Vi khuẩn mảng bám răng",
          "Viêm tai",
          "Thiếu vitamin C",
          "Chấn thương",
        ],
        a: 0,
      },
      {
        q: "Dấu hiệu sớm của viêm lợi là:",
        o: [
          "Lợi đỏ, sưng nhẹ, chảy máu khi chải răng",
          "Lợi tím, có mủ",
          "Lung lay răng",
          "Sốt cao",
        ],
        a: 0,
      },
      {
        q: "Điều dưỡng hướng dẫn người bệnh sau nhổ răng:",
        o: [
          "Cắn chặt bông 30 phút",
          "Không súc miệng mạnh trong 24h",
          "Tránh ăn nóng, cứng",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Biến chứng sớm sau nhổ răng thường gặp:",
        o: [
          "Chảy máu kéo dài",
          "Viêm ổ răng khô",
          "Nhiễm trùng ổ răng",
          "Tất cả đều đúng",
        ],
        a: 0,
      },
      {
        q: "Dấu hiệu của viêm tủy răng:",
        o: [
          "Đau nhói, nhất là về đêm",
          "Đau âm ỉ",
          "Không đau",
          "Răng lung lay",
        ],
        a: 0,
      },
      {
        q: "Điều dưỡng chăm sóc người bệnh áp xe quanh chóp răng cần:",
        o: [
          "Chườm ấm vùng má",
          "Không chườm lạnh",
          "Cho súc miệng nước muối",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Chấn thương gãy xương hàm dưới cần:",
        o: [
          "Cố định tạm bằng băng ức - cằm",
          "Cho ăn lỏng",
          "Theo dõi hô hấp, tránh tụt lưỡi",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Chảy máu sau nhổ răng kéo dài là do:",
        o: [
          "Rối loạn đông máu",
          "Không cắn bông đủ thời gian",
          "Chọc ổ máu đông",
          "Cả 3 đáp án đúng",
        ],
        a: 3,
      },
      {
        q: "Việc súc miệng bằng nước muối sau nhổ răng giúp:",
        o: [
          "Sạch miệng, giảm viêm",
          "Làm tan cục máu đông",
          "Gây chảy máu lại",
          "Không có tác dụng",
        ],
        a: 0,
      },
      {
        q: "Đau răng dữ dội lan lên đầu thường gặp trong:",
        o: [
          "Viêm tủy răng cấp",
          "Viêm xoang hàm",
          "Viêm quanh cuống",
          "Nứt răng",
        ],
        a: 0,
      },
      {
        q: "Người bệnh sau nhổ răng bị chảy máu lại, điều dưỡng cần:",
        o: [
          "Cho cắn lại bông 30 phút",
          "Rửa mạnh bằng nước",
          "Khuyến súc miệng bằng nước muối đặc",
          "Đặt bông tẩm cồn",
        ],
        a: 0,
      },
      {
        q: "Bệnh nhân áp xe quanh chóp răng đau sưng vùng má, điều dưỡng thực hiện:",
        o: [
          "Chườm ấm, súc miệng nước muối",
          "Chườm lạnh",
          "Cho uống nước đá",
          "Không chườm",
        ],
        a: 0,
      },
      {
        q: "Biến chứng nguy hiểm của viêm mô tế bào vùng hàm mặt là:",
        o: ["Nhiễm khuẩn huyết, khó thở", "Chảy máu", "Rụng răng", "Mất ngủ"],
        a: 0,
      },
      {
        q: "Sau nhổ răng, điều dưỡng khuyên người bệnh không nên:",
        o: ["Súc miệng mạnh", "Ăn mềm nguội", "Cắn chặt bông", "Nghỉ ngơi"],
        a: 0,
      },
      {
        q: "Bệnh nhân bị gãy xương hàm dưới, điều dưỡng cần theo dõi đặc biệt:",
        o: ["Đường thở, hô hấp", "Đại tiện", "Huyết áp", "Da niêm mạc"],
        a: 0,
      },
      {
        q: "Khi cố định tạm xương hàm gãy, điều dưỡng dùng:",
        o: [
          "Băng ức - cằm",
          "Băng chẩm - cằm",
          "Băng cổ - cằm",
          "Băng ngực - đầu",
        ],
        a: 0,
      },
      {
        q: "Biến chứng “ổ răng khô” sau nhổ răng thường do:",
        o: [
          "Lấy mất cục máu đông sớm",
          "Nhiễm khuẩn máu",
          "Rối loạn đông máu",
          "Dụi răng",
        ],
        a: 0,
      },
      {
        q: "Người bệnh viêm lợi, điều dưỡng khuyên:",
        o: [
          "Đánh răng nhẹ nhàng sau ăn",
          "Không chải răng",
          "Dùng tăm xỉa thường xuyên",
          "Uống nước lạnh",
        ],
        a: 0,
      },
      {
        q: "Sau phẫu thuật áp xe vùng hàm mặt, điều dưỡng cần:",
        o: [
          "Thay băng, theo dõi dịch mủ",
          "Cho ăn mềm, lỏng",
          "Theo dõi sốt",
          "Tất cả đúng",
        ],
        a: 3,
      },
      {
        q: "Đau nhói dữ dội về đêm là đặc trưng của:",
        o: ["Viêm tủy răng cấp", "Viêm quanh cuống", "Viêm lợi", "Áp xe lợi"],
        a: 0,
      },
      {
        q: "Viêm quanh chóp răng chưa điều trị có thể dẫn đến:",
        o: [
          "Áp xe, viêm mô tế bào lan tỏa",
          "Viêm tai",
          "Viêm xoang",
          "Không biến chứng",
        ],
        a: 0,
      },
      {
        q: "Người bệnh sau nhổ răng kêu đau tăng, hôi miệng, nghi ổ răng khô, điều dưỡng cần:",
        o: [
          "Báo bác sĩ, không tự rửa ổ răng",
          "Cho ngậm nước muối đặc",
          "Đặt bông khô",
          "Cho uống giảm đau mạnh",
        ],
        a: 0,
      },
      {
        q: "Người bệnh sau nhổ răng 2 giờ thấy máu rỉ ra. Điều dưỡng cần:",
        o: [
          "Cho bệnh nhân cắn lại bông 30 phút",
          "Cho súc miệng nước muối",
          "Đặt bông khô vào ổ răng",
          "Cho uống nước lạnh",
        ],
        a: 0,
      },
      {
        q: "Sau nhổ răng, điều dưỡng khuyên không nên:",
        o: [
          "Ăn thức ăn cứng, nóng",
          "Nghỉ ngơi",
          "Cắn bông 30 phút",
          "Uống thuốc theo chỉ định",
        ],
        a: 0,
      },
      {
        q: "Bệnh nhân đau nhức dữ dội vùng răng hàm, đau lan lên thái dương, sốt \\(39^{\\circ }\\text{C}\\). Điều dưỡng nhận định có thể là:",
        o: ["Viêm tủy răng cấp", "Sâu răng", "Viêm lợi", "Viêm quanh cuống"],
        a: 0,
      },
      {
        q: "Người bệnh áp xe quanh răng, sưng vùng má, điều dưỡng thực hiện:",
        o: [
          "Chườm ấm, vệ sinh miệng sạch, theo dõi sốt",
          "Chườm lạnh",
          "Cho uống nước đá",
          "Không chườm",
        ],
        a: 0,
      },
      {
        q: "Sau nhổ răng, bệnh nhân đau tăng, hôi miệng, nghi “ổ răng khô”. Điều dưỡng cần:",
        o: [
          "Báo bác sĩ, không tự rửa ổ răng",
          "Cho ngậm nước muối đặc",
          "Đặt bông khô",
          "Cho uống giảm đau mạnh",
        ],
        a: 0,
      },
      {
        q: "Người bệnh gãy xương hàm dưới, điều dưỡng ưu tiên theo dõi:",
        o: ["TIÊU HÓA", "Đường thở", "Tiết niệu", "Da niêm mạc"],
        a: 1,
      },
      {
        q: "Khi cố định tạm xương hàm gãy, loại băng được dùng là:",
        o: [
          "Băng ức - cằm",
          "Băng cổ - cằm",
          "Băng chẩm - cằm",
          "Băng đầu - cằm",
        ],
        a: 0,
      },
      {
        q: "Sau phẫu thuật áp xe vùng hàm mặt, điều dưỡng cần:",
        o: [
          "Theo dõi dẫn lưu, thay băng vô khuẩn, ăn mềm",
          "Cho ăn đặc",
          "Không cần thay băng",
          "Không theo dõi mủ",
        ],
        a: 0,
      },
      {
        q: "Người bệnh viêm lợi chảy máu khi đánh răng, điều dưỡng hướng dẫn:",
        o: [
          "Chải răng nhẹ, sau ăn, dùng nước muối loãng",
          "Ngừng chải răng",
          "Dùng bàn chải cứng",
          "Súc miệng nước muối đặc",
        ],
        a: 0,
      },
      {
        q: "Biến chứng nguy hiểm nhất của viêm mô tế bào vùng hàm mặt là:",
        o: ["Khó thở, nhiễm khuẩn huyết", "Sốt nhẹ", "Rụng răng", "Đau đầu"],
        a: 0,
      },
      {
        q: "Đau nhói dữ dội, đặc biệt về đêm, là đặc trưng của:",
        o: ["Viêm tủy răng cấp", "Viêm quanh cuống", "Viêm lợi", "Áp xe lợi"],
        a: 0,
      },
      {
        q: "Bệnh nhân sưng vùng má, há miệng hạn chế, nghi viêm mô tế bào vùng hàm. Điều dưỡng nên:",
        o: [
          "Theo dõi chặt đường thở, chuẩn bị đường truyền",
          "Cho ăn đặc",
          "Không cần theo dõi",
          "Chườm lạnh",
        ],
        a: 0,
      },
      {
        q: "Theo Keyes nguyên nhân chủ yếu gây sâu răng là:",
        o: [
          "Răng + Vi khuẩn.",
          "Vi khuẩn + Đường.",
          "Đường + Răng.",
          "Răng + Đường + Vi khuẩn.",
        ],
        a: 3,
      },
      {
        q: "Độ pH của nước bọt bình thường từ:",
        o: ["4,5 – 5,5.", "5,5 – 6,0.", "5,8 – 7,1.", "6,0 – 6,5."],
        a: 1,
      },
      {
        q: "Dấu hiệu chính của sâu ngà là:",
        o: ["Ê buốt.", "Đau âm ỉ.", "Sưng đau.", "Đau từng cơn."],
        a: 0,
      },
      {
        q: "Mỗi đợt hoạt động hoặc ngừng hoạt động của sâu ngà răng từ:",
        o: ["6 – 8 tháng.", "6 – 10 tháng.", "6 – 12 tháng.", "6 – 14 tháng."],
        a: 2,
      },
      {
        q: "Biến chứng đầu tiên của sâu răng là:",
        o: [
          "Viêm quanh cuống răng.",
          "Viêm tủy răng.",
          "Viêm mô tế bào.",
          "Viêm xương tủy hàm.",
        ],
        a: 0,
      },
      {
        q: "Biện pháp loại trừ vi khuẩn thông thường nhất là:",
        o: ["Súc miệng.", "Dùng chỉ tơ.", "Lấy cao răng.", "Chải răng."],
        a: 3,
      },
      {
        q: "Thời điểm thích hợp để thay bàn chải răng là:",
        o: ["1 – 2 tháng.", "2 – 3 tháng.", "3 – 4 tháng.", "4 – 5 tháng."],
        a: 1,
      },
      {
        q: "Chất quan trọng tăng cường sự cứng chắc của răng là:",
        o: ["Fluor.", "Canxi.", "Phospho.", "Magne."],
        a: 0,
      },
      {
        q: "Vùng quanh răng bao gồm:",
        o: ["Lợi.", "Xương ổ răng.", "Dây chằng.", "Cả 3 thành phần trên."],
        a: 3,
      },
      {
        q: "Nguyên nhân tại chỗ quan trọng nhất gây viêm quanh răng là:",
        o: ["Cao răng.", "Mảng bám răng.", "Răng lệch lạc.", "Ngách lợi nông."],
        a: 2,
      },
      {
        q: "Nguyên nhân toàn thân quan trọng nhất gây viêm quanh răng là:",
        o: [
          "Thiếu sinh tố C.",
          "Đái tháo đường.",
          "Đáp ứng miễn dịch.",
          "Thay đổi nội tiết.",
        ],
        a: 1,
      },
      {
        q: "Triệu chứng nào dưới đây không phải của bệnh viêm lợi:",
        o: ["Tụt lợi.", "Ngứa lợi.", "Chảy máu lợi.", "Lợi nề đỏ."],
        a: 3,
      },
      {
        q: "Răng lung lay dài dằn ra là triệu chứng của bệnh:",
        o: [
          "Viêm quanh cuống răng.",
          "Viêm quanh răng.",
          "Viêm lợi.",
          "Viêm tủy răng.",
        ],
        a: 1,
      },
      {
        q: "Biến chứng thường gặp nhất của viêm quanh răng là:",
        o: [
          "Áp xe quanh răng.",
          "Viêm mô tế bào.",
          "Viêm xương tủy hàm.",
          "Viêm tủy răng.",
        ],
        a: 2,
      },
      {
        q: "Điều trị viêm quanh răng cần:",
        o: [
          "Loại trừ các kích thích",
          "Bơm rửa và chấm thuốc.",
          "Cố định răng lung lay.",
          "Cả 3 biện pháp trên",
        ],
        a: 0,
      },
      {
        q: "Việc quyết định nhổ hay giữ răng cho người bệnh phụ thuộc vào:",
        o: [
          "Tình trạng bệnh lý của răng.",
          "Tình trạng sức khỏe chung của người bệnh.",
          "Khả năng chuyên môn của thầy thuốc.",
          "Cả 3 yếu tố trên.",
        ],
        a: 3,
      },
      {
        q: "Ngất là trạng thái mất:",
        o: ["Trí giác.", "Xúc giác.", "Cảm giác.", "Khứu giác."],
        a: 0,
      },
      {
        q: "Ngất có thể xảy ra ra:",
        o: [
          "Trước nhổ răng.",
          "Trong khi nhổ răng.",
          "Sau khi nhổ răng.",
          "Cả 3 thời điểm trên.",
        ],
        a: 3,
      },
      {
        q: "Ngất giai đoạn đầu, da người bệnh:",
        o: ["Xám.", "Xanh tái.", "Đỏ tím.", "Tím tái."],
        a: 1,
      },
      {
        q: "Nguyên nhân tại chỗ nào dưới đây không gây chảy máu kéo dài sau nhổ răng:",
        o: [
          "Sốt tổ chức hạt.",
          "Vỡ xương ổ răng.",
          "Vỡ răng.",
          "Sang chấn răng bên cạnh.",
        ],
        a: 0,
      },
      {
        q: "Triệu chứng quan trọng của chảy máu kéo dài sau nhổ răng là:",
        o: ["Người bệnh sợ hãi.", "Miệng đầy máu.", "Da xanh tái.", "Mệt mỏi."],
        a: 1,
      },
      {
        q: "Xác định sót chân răng gây chảy máu sau nhổ răng cần phải:",
        o: [
          "Lấy chân răng.",
          "Nạo ổ răng.",
          "Khâu ổ răng.",
          "Cả 3 biện pháp trên.",
        ],
        a: 3,
      },
      {
        q: "Nguyên nhân gây viêm ổ răng là:",
        o: [
          "Vệ sinh miệng sau nhổ răng không tốt.",
          "Nhổ răng làm sang chấn nhiều.",
          "Không đảm bảo vô trùng khi nhổ răng.",
          "Cả 3 nguyên nhân trên.",
        ],
        a: 3,
      },
      {
        q: "Triệu chứng nào dưới đây không phải của viêm ổ răng khô:",
        o: [
          "Đau nhức ổ răng.",
          "Ổ răng bẩn.",
          "Ổ răng khô.",
          "Đáy ổ răng màu trắng xám.",
        ],
        a: 1,
      },
      {
        q: "Xử trí viêm ổ răng sau nhổ răng cần:",
        o: [
          "Gây tê tại chỗ sau đó nạo huyết ổ răng.",
          "Bơm rửa ổ răng.",
          "Dùng thuốc theo y lệnh.",
          "Cả 3 biện pháp trên.",
        ],
        a: 3,
      },
      {
        q: "Tư thế đặt người bệnh khi bị ngất:",
        o: [
          "Nằm nghiêng, đầu thấp.",
          "Nằm ngửa, đầu thấp.",
          "Nằm ngửa, đầu cao.",
          "Nằm ngửa, đầu bình thường.",
        ],
        a: 1,
      },
      {
        q: "Để tránh nguy cơ ngất, trước khi nhổ răng khuyên người bệnh không nên:",
        o: [
          "Ăn no.",
          "Căng thẳng.",
          "Dùng an thần.",
          "Trao đổi tiền sử bệnh và thuốc đang dùng với bác sĩ.",
        ],
        a: 1,
      },
      {
        q: "Khi cho người bệnh cắn bông hoặc gạc nên:",
        o: [
          "Cắn thật chặt.",
          "Cắn lỏng.",
          "Cắn vừa phải.",
          "Cắn thế nào cũng được.",
        ],
        a: 2,
      },
      {
        q: "Sau nhổ răng, hướng dẫn người bệnh nên:",
        o: [
          "Súc miệng nhẹ nhàng.",
          "Nằm đầu thấp.",
          "Dùng tăm lấy thức ăn ở ổ răng.",
          "Đẩy vào má bên nhổ.",
        ],
        a: 0,
      },
      {
        q: "Thời gian cắn bông hoặc gạc sau nhổ răng là:",
        o: ["15 phút.", "20 phút.", "25 phút.", "30 phút."],
        a: 1,
      },
      {
        q: "Nguyên nhân hay gặp nhất gây chấn thương vùng hàm mặt là:",
        o: [
          "Tai nạn giao thông.",
          "Tai nạn lao động.",
          "Tai nạn sinh hoạt.",
          "Chiến tranh.",
        ],
        a: 0,
      },
      {
        q: "Đặc điểm nào dưới đây không của chấn thương hàm mặt:",
        o: [
          "Chảy máu nhiều.",
          "Sưng nề nhanh.",
          "Kháng khuẩn tốt.",
          "Liền sẹo chậm.",
        ],
        a: 2,
      },
      {
        q: "Đặc điểm của xương hàm trên:",
        o: [
          "Cố định liền với khối xương sọ.",
          "Nhiều mạch máu nuôi dưỡng.",
          "Ít cơ bám dính.",
          "Cả 3 đặc điểm trên.",
        ],
        a: 3,
      },
      {
        q: "Bầm tím dưới da gặp trong vết thương:",
        o: ["Xây xát.", "Đụng dập.", "Rách da.", "Xuyên thủng."],
        a: 1,
      },
      {
        q: "Dấu hiệu quan trọng nhất trong gãy xương hàm dưới di lệch là:",
        o: [
          "Khớp cắn sai.",
          "Ấn đau chói.",
          "Sưng nề tại chỗ.",
          "Há miệng hạn chế.",
        ],
        a: 0,
      },
      {
        q: "Dấu hiệu đeo kính râm gặp trong gãy xương hàm trên:",
        o: ["Lefort I.", "Lefort II.", "Lefort III.", "Cả 3 loại trên."],
        a: 2,
      },
      {
        q: "Xử trí rách phần mềm cần phải cắt lọc tiết kiệm để:",
        o: [
          "Tránh chảy máu.",
          "Đảm bảo thẩm mỹ.",
          "Nhanh liền sẹo.",
          "Tránh nhiễm trùng.",
        ],
        a: 3,
      },
      {
        q: "Thời gian cố định chỉ thép ở người lớn từ:",
        o: ["2 - 4 tuần.", "4 - 6 tuần.", "6 - 8 tuần.", "8 - 10 tuần."],
        a: 1,
      },
      {
        q: "Ưu tiên cấp cứu số 1 cho người bệnh chấn thương hàm mặt là:",
        o: [
          "Phòng chống sốc.",
          "Phòng chống tắc đường thở.",
          "Xử trí vết thương.",
          "Giảm đau.",
        ],
        a: 1,
      },
      {
        q: "Thời gian theo dõi dấu hiệu sinh tồn của người bệnh chấn thương hàm mặt:",
        o: [
          "10 - 15 phút/lần.",
          "15 - 30 phút/lần.",
          "30 - 40 phút/lần.",
          "40 - 45 phút/lần.",
        ],
        a: 1,
      },
      {
        q: "Tư thế cho người bệnh ăn tốt nhất là:",
        o: ["Nằm ngửa.", "Nằm nghiêng.", "Ngồi.", "Nửa nằm, nửa ngồi."],
        a: 2,
      },
      {
        q: "Chế độ ăn tốt nhất cho người bệnh cố định 2 hàm là:",
        o: ["Ăn lỏng.", "Ăn nhiều bữa.", "Ăn đủ chất.", "Cả 3 ý trên."],
        a: 3,
      },
      {
        q: "Sau tháo cố định hàm không khuyên người bệnh:",
        o: [
          "Tập há miệng.",
          "Ăn thức ăn mềm.",
          "Hạn chế há miệng.",
          "Vệ sinh răng miệng kỹ.",
        ],
        a: 2,
      },
      {
        q: "Biện pháp giảm đau tốt nhất cho người bệnh gãy xương hàm là:",
        o: ["Uống giảm đau.", "Băng cố định.", "Chườm lạnh.", "Chườm nóng."],
        a: 1,
      },
      {
        q: "Điểm yếu của xương hàm dưới là:",
        o: ["Góc hàm.", "Cổ hàm dưới.", "Mỏm vẹt.", "Cả 3 vị trí trên."],
        a: 3,
      },
      {
        q: "Nguyên nhân hay gặp nhất gây viêm mô tế bào là:",
        o: [
          "Biến chứng mọc răng.",
          "Biến chứng của sâu răng.",
          "Viêm quanh răng.",
          "Viêm nang lông.",
        ],
        a: 1,
      },
      {
        q: "Biến chứng của răng khôn là:",
        o: ["Mọc ngầm.", "Mọc lệch.", "Lệch trục.", "Cả 3 loại trên."],
        a: 3,
      },
      {
        q: "Hiện tượng sưng nóng đỏ đau gặp trong:",
        o: [
          "Giai đoạn viêm thanh dịch.",
          "Giai đoạn áp xe.",
          "Giai đoạn viêm mủ.",
          "Giai đoạn viêm toả lan.",
        ],
        a: 0,
      },
      {
        q: "Dấu hiệu ấn lõm ngón tay gặp trong:",
        o: [
          "Giai đoạn viêm thanh dịch.",
          "Giai đoạn áp xe.",
          "Giai đoạn viêm toả lan.",
          "Giai đoạn viêm mủ.",
        ],
        a: 1,
      },
      {
        q: "Viêm tủy giai đoạn mủ có triệu chứng:",
        o: [
          "Da nhăn nheo hoặc tím sạm.",
          "Thâm nhiễm cứng dưới da.",
          "Lỗ dò chảy dịch.",
          "Cả 3 triệu chứng trên.",
        ],
        a: 3,
      },
      {
        q: "Viêm tấy toả lan vùng hàm mặt tiến triển:",
        o: ["Nhanh.", "Chậm.", "Rất nhanh.", "Từ từ."],
        a: 2,
      },
      {
        q: "Dấu hiệu nhiễm trùng nhiễm độc điển hình:",
        o: [
          "Mạch chậm, nhiệt độ tăng.",
          "Mạch nhiệt phân ly.",
          "Mạch nhanh, nhiệt độ tăng.",
          "Mạch chậm, nhiệt độ giảm.",
        ],
        a: 2,
      },
      {
        q: "Tư thế nửa nằm nửa há gặp trong:",
        o: [
          "Viêm tấy sàn miệng.",
          "Viêm tấy toả lan nửa mặt.",
          "Viêm thanh dịch.",
          "Áp xe má.",
        ],
        a: 1,
      },
      {
        q: "Khít hàm dữ dội gặp trong:",
        o: [
          "Áp xe má.",
          "Áp xe vùng mang tai.",
          "Áp xe vùng cơ cắn.",
          "Áp xe dưới cằm.",
        ],
        a: 1,
      },
      {
        q: "Áp xe vùng mang tai khi khám trong miệng thấy:",
        o: [
          "Niêm mạc bờ trước cành cao nề đỏ.",
          "Niêm mạc thành bên hầu nề đỏ.",
          "Niêm mạc sàn miệng nề đỏ.",
          "Niêm mạc vùng răng khôn nề đỏ.",
        ],
        a: 1,
      },
      {
        q: "Nâng cao thể trạng giúp cơ thể:",
        o: [
          "Khôi phục lại tổ chức.",
          "Tăng sức đề kháng.",
          "Tăng khả năng miễn dịch.",
          "Cả 3 ý trên.",
        ],
        a: 3,
      },
      {
        q: "Dẫn lưu trong viêm tấy phải bơm rửa:",
        o: ["1 - 2h/lần.", "2 - 3h/lần.", "3 - 4h/lần.", "4 - 5h/lần."],
        a: 0,
      },
      {
        q: "Năng lượng cần thiết cho người bệnh viêm mô tế bào vùng hàm mặt:",
        o: [
          "1500 - 2000 calo/ngày.",
          "2000 - 2500 calo/ngày.",
          "2500 - 3600 calo/ngày.",
          "3600 - 4000 calo/ngày.",
        ],
        a: 2,
      },
      {
        q: "Hướng điều trị thích hợp trong giai đoạn áp xe:",
        o: ["Trích tháo mủ.", "Chườm lạnh.", "Chườm nóng.", "Dùng kháng sinh."],
        a: 0,
      },
      {
        q: "Khi người bệnh khít hàm cần hướng dẫn:",
        o: ["Tập há miệng.", "Ăn lỏng.", "Vệ sinh răng miệng.", "Cả 3 ý trên."],
        a: 3,
      },
      {
        q: "Viêm kết mạc do vi khuẩn hoặc virus có đặc điểm lây truyền nào?",
        o: [
          "Có thể lây dễ qua tay, dịch tiết và đồ dùng bị nhiễm bẩn.",
          "Chỉ lây qua thức ăn.",
          "Không thể lây từ người này sang người khác.",
          "Chỉ lây khi có tổn thương xuyên thủng nhãn cầu.",
        ],
        a: 0,
      },
      {
        q: "Khi được bác sĩ chỉ định thuốc mỡ tetracyclin 1% cho viêm kết mạc do vi khuẩn, điều dưỡng cần làm gì?",
        o: [
          "Tra thuốc đúng y lệnh, đúng kỹ thuật và giữ sạch đầu tuýp thuốc.",
          "Dùng chung tuýp thuốc với người bệnh khác.",
          "Tự tăng số lần tra thuốc khi chưa có chỉ định.",
          "Tra thuốc trực tiếp lên da mi mà không đưa thuốc vào túi cùng kết mạc.",
        ],
        a: 0,
      },
      {
        q: "Trong viêm kết mạc đơn thuần, nhận định nào về thị lực phù hợp nhất?",
        o: [
          "Thị lực thường được bảo tồn; nhìn mờ kéo dài cần được khám để loại trừ bệnh khác.",
          "Thị lực luôn mất hoàn toàn ngay khi khởi phát.",
          "Thị lực giảm nhanh là dấu hiệu bắt buộc của mọi ca viêm kết mạc.",
          "Thị lực luôn tăng rõ sau khi xuất hiện ghèn.",
        ],
        a: 0,
      },
      {
        q: "Khi trẻ sơ sinh bị viêm kết mạc do lậu cầu, việc xử trí đối với mẹ và bạn tình của mẹ là gì?",
        o: [
          "Được đánh giá, xét nghiệm và điều trị nhiễm lậu theo hướng dẫn chuyên môn.",
          "Chỉ nhỏ thuốc mắt cho cả bố và mẹ, không cần đánh giá nhiễm lậu.",
          "Không cần xử trí vì nhiễm lậu không thể truyền từ mẹ sang con.",
          "Chỉ khuyên rửa mắt bằng nước sạch, không cần khám.",
        ],
        a: 0,
      },
      {
        q: "Đặc điểm đồng tử có thể gặp trong viêm mống mắt cấp là gì?",
        o: [
          "Đồng tử co nhỏ; có thể méo hoặc phản xạ kém khi có dính.",
          "Đồng tử luôn giãn tối đa và phản xạ bình thường.",
          "Đồng tử luôn có hình vuông.",
          "Đồng tử không thể thay đổi kích thước trong bệnh này.",
        ],
        a: 0,
      },
      {
        q: "Nhìn mờ, nhìn đèn có quầng màu, đau nhức mắt dữ dội và buồn nôn gợi ý rõ nhất bệnh nào?",
        o: [
          "Glôcôm góc đóng cơn cấp.",
          "Viêm kết mạc đơn thuần.",
          "Viêm bờ mi mạn tính.",
          "Đục thủy tinh thể tuổi già chưa biến chứng.",
        ],
        a: 0,
      },
      {
        q: "Những nhóm thuốc nào thường được bác sĩ sử dụng trong điều trị viêm mống mắt cấp?",
        o: [
          "Thuốc chống viêm và thuốc giãn đồng tử/liệt thể mi theo chỉ định.",
          "Thuốc co đồng tử cho mọi trường hợp, không cần khám.",
          "Chỉ dùng nước muối, không cần thuốc điều trị.",
          "Thuốc an thần là biện pháp điều trị duy nhất.",
        ],
        a: 0,
      },
      {
        q: "Kiểu cương tụ kết mạc nào gợi ý viêm mống mắt hơn viêm kết mạc đơn thuần?",
        o: [
          "Cương tụ rìa quanh giác mạc.",
          "Chỉ đỏ ở da mi mắt.",
          "Chỉ đỏ ở góc ngoài mắt, không có tổn thương trong mắt.",
          "Kết mạc luôn trắng hoàn toàn.",
        ],
        a: 0,
      },
      {
        q: "Có ....... triệu chứng cơ năng trong bệnh loét giác mạc.",
        o: ["1", "2", "3", "4"],
        a: 3,
      },
      {
        q: "Có ....... biến chứng trong loét giác mạc.",
        o: ["1", "2", "3", "4"],
        a: 3,
      },
      {
        q: "Thuốc mỡ Cloroxit H chứa hydrocortison. Trong tình huống nào dưới đây cần tránh dùng corticoid tra mắt?",
        o: [
          "Loét giác mạc do nấm đang hoạt động.",
          "Viêm kết mạc dị ứng đã được bác sĩ xác định chỉ định corticoid.",
          "Viêm mống mắt không nhiễm trùng có chỉ định chống viêm của bác sĩ.",
          "Viêm kết mạc mùa xuân có chỉ định chuyên khoa.",
        ],
        a: 0,
      },
      {
        q: "Có ....... triệu chứng cơ năng trong bệnh viêm mống mắt.",
        o: ["1", "2", "3", "4"],
        a: 3,
      },
      {
        q: "Tra dung dịch atropin sulfat 1% trong bệnh viêm mống mắt ngày mấy lần.",
        o: ["1 lần", "2 lần", "3 lần", "4 lần"],
        a: 2,
      },
      {
        q: "Phụ giúp thầy thuốc tiêm hydrocortison + kháng sinh vào vị trí .....",
        o: ["hậu nhãn cầu", "cạnh nhãn cầu", "kết mạc rìa", "kết mạc cùng đồ"],
        a: 1,
      },
      {
        q: "Nguyên tắc sử dụng corticoid nhỏ mắt ở người bệnh loét giác mạc là gì?",
        o: [
          "Không tự ý dùng; chỉ sử dụng khi bác sĩ chuyên khoa xác định chỉ định và theo dõi.",
          "Tự dùng corticoid ngay cho mọi trường hợp loét giác mạc.",
          "Dùng thuốc của người khác nếu có cùng triệu chứng.",
          "Tăng liều tùy theo cảm giác đau, không cần khám lại.",
        ],
        a: 0,
      },
      {
        q: "Loét giác mạc ở vùng trung tâm có thể ảnh hưởng thị lực như thế nào?",
        o: [
          "Có thể làm giảm thị lực đáng kể do tổn thương trên trục thị giác.",
          "Luôn không ảnh hưởng thị lực.",
          "Luôn làm thị lực tăng lên.",
          "Chỉ ảnh hưởng màu da mi, không ảnh hưởng chức năng nhìn.",
        ],
        a: 0,
      },
      {
        q: "Lông quặm có thể gây loét giác mạc bằng cơ chế nào?",
        o: [
          "Lông mi cọ xát vào giác mạc, gây tổn thương biểu mô.",
          "Làm thay đổi màu mống mắt mà không tổn thương giác mạc.",
          "Làm tăng độ trong suốt của giác mạc.",
          "Chỉ gây đục thủy tinh thể, không ảnh hưởng giác mạc.",
        ],
        a: 0,
      },
      {
        q: "Người bệnh loét giác mạc có dấu hiệu nghi thủng giác mạc. Xử trí nào phù hợp đối với việc đo nhãn áp?",
        o: [
          "Ấn trực tiếp lên mắt để ước lượng nhãn áp.",
          "Tránh đo nhãn áp bằng thao tác gây áp lực lên mắt và báo bác sĩ chuyên khoa khẩn cấp.",
          "Đo nhãn áp tiếp xúc nhiều lần ngay trên vùng loét.",
          "Đè ép nhãn cầu trước khi chuyển khám.",
        ],
        a: 1,
      },
      {
        q: "Người bệnh loét giác mạc có nên tự đắp lá hoặc thuốc dân gian vào mắt không?",
        o: [
          "Không; cần điều trị theo chỉ định chuyên khoa và tránh đưa chất không vô khuẩn vào mắt.",
          "Có, nếu lá được hái trong ngày.",
          "Có, chỉ cần lá có màu xanh.",
          "Có, vì mọi loại lá đều thay thế được thuốc mắt.",
        ],
        a: 0,
      },
      {
        q: "Nhóm bệnh nhiễm virus nào có thể gây biến chứng tổn thương giác mạc?",
        o: [
          "Sởi và thủy đậu.",
          "Viêm ruột thừa và sỏi thận.",
          "Thoái hóa cột sống và gãy xương kín.",
          "Thiếu máu do mất máu và bong gân.",
        ],
        a: 0,
      },
      {
        q: "Khi y lệnh tra mắt cho người bệnh loét giác mạc ghi tên thuốc không rõ, như “polydecan”, điều dưỡng cần làm gì trước khi dùng?",
        o: [
          "Tự chọn một thuốc có tên gần giống.",
          "Dùng bất kỳ thuốc kháng sinh phối hợp corticoid nào.",
          "Xác minh tên thuốc, hoạt chất và y lệnh với bác sĩ trước khi sử dụng.",
          "Bỏ qua kiểm tra thuốc vì tất cả thuốc nhỏ mắt đều có cùng tác dụng.",
        ],
        a: 2,
      },
      {
        q: "Mục đích của kính râm khi chăm sóc người bệnh loét giác mạc bị sợ ánh sáng là gì?",
        o: [
          "Giảm khó chịu do ánh sáng, đồng thời vẫn điều trị theo chỉ định.",
          "Thay thế hoàn toàn thuốc kháng khuẩn.",
          "Làm tăng nhãn áp để chữa loét.",
          "Che kín để không cần theo dõi thị lực.",
        ],
        a: 0,
      },
      {
        q: "Chấn thương mắt có thể xảy ra trong những hoàn cảnh nào?",
        o: [
          "Lao động công nghiệp, nông nghiệp và sinh hoạt hằng ngày.",
          "Chỉ trong khi ngủ.",
          "Chỉ ở phòng mổ.",
          "Chỉ ở người đã bị đục thủy tinh thể.",
        ],
        a: 0,
      },
      {
        q: "Vết thương xuyên thủng rộng nhãn cầu có thể làm nhãn áp thay đổi như thế nào?",
        o: [
          "Nhãn áp có thể hạ do mất tính kín của nhãn cầu.",
          "Nhãn áp luôn bình thường bất kể mức độ tổn thương.",
          "Nhãn áp luôn tăng và không bao giờ hạ.",
          "Nhãn áp không có liên quan đến tính kín của nhãn cầu.",
        ],
        a: 0,
      },
      {
        q: "Vai trò của thuốc tê bề mặt khi bác sĩ lấy dị vật giác mạc nông là gì?",
        o: [
          "Giảm đau và tạo thuận lợi cho thao tác theo chỉ định; không dùng kéo dài tùy ý tại nhà.",
          "Làm dị vật tự tan hoàn toàn.",
          "Thay thế việc khám và xác định độ sâu của dị vật.",
          "Điều trị mọi bệnh tăng nhãn áp.",
        ],
        a: 0,
      },
      {
        q: "Trong chăm sóc người bệnh xuất huyết tiền phòng do chấn thương, biện pháp nào giúp hạn chế tái xuất huyết?",
        o: [
          "Khuyến khích vận động mạnh ngay.",
          "Cho dụi mắt để máu tan nhanh.",
          "Cho tự dùng aspirin để giảm đau.",
          "Hạn chế hoạt động, kê đầu cao và dùng tấm che bảo vệ mắt theo chỉ định.",
        ],
        a: 3,
      },
      {
        q: "Cách bảo vệ mắt phù hợp khi có xuất huyết tiền phòng do chấn thương là gì?",
        o: [
          "Dùng tấm che bảo vệ, tránh đè ép mắt và tuân thủ chỉ định chuyên khoa.",
          "Băng ép thật chặt lên nhãn cầu.",
          "Luôn băng kín cả hai mắt, không cần đánh giá.",
          "Dụi mắt mạnh để làm tan máu.",
        ],
        a: 0,
      },
      {
        q: "Khi thủy tinh thể lệch vào tiền phòng và gây nghẽn đồng tử, nhãn áp có thể thay đổi như thế nào?",
        o: [
          "Tăng do cản trở lưu thông thủy dịch.",
          "Luôn giữ nguyên ở mọi người bệnh.",
          "Luôn giảm về bằng không.",
          "Không thể thay đổi vì thủy tinh thể không liên quan đến lưu thông thủy dịch.",
        ],
        a: 0,
      },
      {
        q: "Khi bị hóa chất hoặc vôi bắn vào mắt, biện pháp sơ cứu ưu tiên là gì?",
        o: [
          "Rửa mắt ngay bằng nhiều nước sạch hoặc NaCl 0,9% và chuyển khám chuyên khoa.",
          "Rửa bằng dung dịch glucoza 20% để trung hòa vôi.",
          "Chờ hết đau rồi mới rửa mắt.",
          "Đắp lá cây rồi băng ép chặt.",
        ],
        a: 0,
      },
      {
        q: "Điều nào cần tránh khi sơ cứu bỏng hóa chất ở mắt?",
        o: [
          "Băng ép chặt hoặc trì hoãn việc rửa mắt.",
          "Rửa mắt ngay bằng nước sạch khi chưa có dung dịch chuyên dụng.",
          "Tiếp tục rửa mắt trong lúc chuẩn bị chuyển khám.",
          "Báo bác sĩ để được đánh giá tổn thương.",
        ],
        a: 0,
      },
      {
        q: "Khi còn hạt vôi trong mắt sau tai nạn, xử trí nào phù hợp nhất?",
        o: [
          "Bắt đầu rửa mắt ngay; đồng thời loại bỏ hạt còn lưu ở kết mạc theo kỹ thuật chuyên môn.",
          "Chờ lấy hết mọi hạt vôi rồi mới bắt đầu rửa.",
          "Chỉ lau ngoài mi và ngừng xử trí.",
          "Dùng acid để trung hòa trực tiếp trong mắt.",
        ],
        a: 0,
      },
      {
        q: "Thị lực của người bệnh viêm loét giác mạc là:",
        o: [
          "Giảm trầm trọng.",
          "Giảm ít.",
          "Không giảm.",
          "Giảm tùy vị trí tổn thương.",
        ],
        a: 3,
      },
      {
        q: "Triệu chứng thực thể đúng nhất trong loét giác mạc là:",
        o: [
          "Mi sưng nề bầm tím.",
          "Kết mạc cương tụ chu biên.",
          "Giác mạc phù đục.",
          "Giác mạc bắt thuốc nhuộm.",
        ],
        a: 2,
      },
      {
        q: "Viêm loét giác mạc không được điều trị kịp thời sẽ dẫn đến:",
        o: ["Mù lòa", "Đau đầu", "Tăng nhãn áp", "Song thị"],
        a: 0,
      },
      {
        q: "Người bệnh đau mắt đỏ do virus, điều dưỡng cần hướng dẫn:",
        o: [
          "Cách ly, nhỏ thuốc theo chỉ định",
          "Nhỏ thuốc kháng sinh mạnh",
          "Dán mắt kín",
          "Nhỏ thuốc co mạch",
        ],
        a: 0,
      },
      {
        q: "Khi tra thuốc nhỏ mắt, điều dưỡng phải:",
        o: [
          "Nhỏ vào túi cùng kết mạc, không để đầu lọ chạm mắt",
          "Nhỏ trực tiếp lên giác mạc",
          "Cho bệnh nhân chớp mạnh",
          "Dùng lọ thuốc chung",
        ],
        a: 0,
      },
      {
        q: "Bệnh nhân bị dị vật giác mạc, điều dưỡng cần:",
        o: [
          "Không tự lấy dị vật, che mắt, chuyển chuyên khoa",
          "Dụi mắt để dị vật rơi ra",
          "Rửa nước",
          "Tra thuốc giảm đau",
        ],
        a: 0,
      },
      {
        q: "Tăng nhãn áp mạn nếu không điều trị sẽ dẫn đến:",
        o: [
          "Mù lòa do tổn thương thần kinh thị",
          "Viêm màng bồ đào",
          "Viêm kết mạc",
          "Giảm phản xạ ánh sáng",
        ],
        a: 0,
      },
      {
        q: "Trong viêm kết mạc dị ứng, điều dưỡng khuyên:",
        o: [
          "Không dụi mắt, tránh bụi phấn, dùng thuốc kháng histamin",
          "Rửa mắt bằng xà phòng",
          "Nhỏ corticoid kéo dài",
          "Dán kín mắt",
        ],
        a: 0,
      },
      {
        q: "Triệu chứng cơ năng có giá trị nhất trong bệnh viêm kết mạc:",
        o: [
          "Đau nhức mắt dữ dội.",
          "Sợ ánh sáng.",
          "Chảy nhiều nước mắt",
          "Ra nhiều gỉ mắt.",
        ],
        a: 1,
      },
      {
        q: "Kết quả đúng nhất khi đo thị lực cho người bệnh viêm kết mạc:",
        o: ["Giảm nhiều.", "Giảm ít.", "Không giảm.", "Mất hoàn toàn."],
        a: 0,
      },
      {
        q: "Dung dịch chỉ định rộng rãi nhất để rửa mắt là:",
        o: [
          "Nước muối sinh lý.",
          "Nước đun sôi để nguội.",
          "Dung dịch thuốc tím 1/5000.",
          "Dung dịch natribicarbonat 2%.",
        ],
        a: 0,
      },
      {
        q: "Bệnh nhân viêm kết mạc cấp, đỏ mắt, chảy ghèn nhiều. Điều dưỡng hướng dẫn:",
        o: [
          "Rửa tay thường xuyên, không dùng chung khăn",
          "Dùng chung thuốc với người khác",
          "Dán mắt kín",
          "Dụi mắt",
        ],
        a: 0,
      },
      {
        q: "Người bệnh đau nhức, sợ ánh sáng, chảy nước mắt, thị lực giảm nhanh. Gợi ý bệnh:",
        o: [
          "Viêm giác mạc",
          "Viêm kết mạc",
          "Viêm màng bồ đào",
          "Đục thủy tinh thể",
        ],
        a: 0,
      },
      {
        q: "Triệu chứng nào đúng nhất trong bệnh viêm mống mắt:",
        o: [
          "Kết mạc cương tụ toả lan.",
          "Giác mạc phù đục.",
          "Đồng tử co nhỏ, phản xạ kém.",
          "Mi mắt sưng nề đỏ.",
        ],
        a: 1,
      },
      {
        q: "Nguyên nhân chính gây bệnh viêm mống mắt:",
        o: [
          "Do thiếu nước mắt.",
          "Do viêm xoang.",
          "Do sang chấn.",
          "Do yếu tố di truyền.",
        ],
        a: 1,
      },
      {
        q: "Theo dõi thị lực trong bệnh viêm mống mắt kết quả nào đúng nhất:",
        o: [
          "Giảm nhiều.",
          "Giảm ít.",
          "Giảm dần dần.",
          "Giảm tuỳ mức độ viêm.",
        ],
        a: 3,
      },
      {
        q: "Tra thuốc đúng nhất cho người bệnh viêm mống mắt:",
        o: [
          "Dd cloroxit 4‰.",
          "Dd atropin sulfat 1%.",
          "Dd gentamixin 0,5%.",
          "Dd hydrocortison.",
        ],
        a: 1,
      },
      {
        q: "Người bệnh glôcôm cấp, đau nhức mắt dữ dội, buồn nôn, nhìn quầng xanh. Điều dưỡng ưu tiên:",
        o: [
          "Cho nhỏ thuốc hạ nhãn áp, báo bác sĩ ngay",
          "Cho chườm lạnh",
          "Che mắt",
          "Cho nằm nghỉ",
        ],
        a: 0,
      },
      {
        q: "Có mấy nguyên tắc điều trị glôcôm góc đóng cơn cấp:",
        o: ["2", "3", "4", "5"],
        a: 1,
      },
      {
        q: "Khám và ..... hằng loạt cho những người trên 35 tuổi để phát hiện sớm bệnh glôcôm.",
        o: ["Đo huyết áp", "Đo thị lực", "Đo nhãn áp", "Siêu âm võng mạc"],
        a: 2,
      },
      {
        q: "Trong nghi ngờ glôcôm góc đóng cơn cấp, điều dưỡng cần tránh việc nào?",
        o: [
          "Tự ý dùng atropin làm giãn đồng tử khi chưa có chỉ định chuyên khoa.",
          "Báo bác sĩ khẩn cấp.",
          "Theo dõi thị lực và tình trạng đau mắt.",
          "Chuẩn bị thực hiện điều trị hạ nhãn áp theo y lệnh.",
        ],
        a: 0,
      },
      {
        q: "Nếu bác sĩ chỉ định kháng sinh quanh phẫu thuật glôcôm, mục đích của thuốc là gì?",
        o: [
          "Phòng hoặc điều trị nhiễm khuẩn theo chỉ định.",
          "Thay thế hoàn toàn thuốc hạ nhãn áp.",
          "Làm đồng tử giãn tối đa trong mọi trường hợp.",
          "Làm tăng nhãn áp để cải thiện thị lực.",
        ],
        a: 0,
      },
      {
        q: "Nhận định nào đúng về việc dùng pilocarpin trước can thiệp điều trị glôcôm?",
        o: [
          "Phải dùng cho mọi loại glôcôm trước mọi phương pháp mổ.",
          "Việc dùng thuốc phụ thuộc cơ chế bệnh và chỉ định của bác sĩ; không áp dụng cho mọi trường hợp.",
          "Không bao giờ được dùng trong bất kỳ glôcôm nào.",
          "Người bệnh tự tăng liều để chuẩn bị mổ mà không cần y lệnh.",
        ],
        a: 1,
      },
      {
        q: "Điển hình thị lực của người bệnh glôcôm góc đóng cơn cấp:",
        o: [
          "Nhìn mờ dần dần.",
          "Nhìn đôi.",
          "Nhìn rõ rất nhanh.",
          "Nhìn mờ tùy mức độ bệnh.",
        ],
        a: 0,
      },
      {
        q: "Theo dõi quan trọng nhất trên người bệnh bị bệnh glôcôm:",
        o: ["Mạch, nhiệt độ.", "Nhịp thở.", "Nhãn áp.", "Huyết áp."],
        a: 2,
      },
      {
        q: "Người bệnh sau mổ glôcôm cách băng nào đúng nhất:",
        o: [
          "Băng chặt 1 mắt bằng băng cuộn.",
          "Băng kín 1 mắt bằng băng dính.",
          "Băng kín 2 mắt bằng băng dính.",
          "Băng chặt 2 mắt bằng băng cuộn.",
        ],
        a: 3,
      },
      {
        q: "Thuốc được sử dụng duy nhất khi thay băng cho người bệnh sau mổ glôcôm (cắt mống mắt chu biên):",
        o: [
          "Dung dịch atropin sunphat 1%.",
          "Dung dịch hydrocortison.",
          "Dung dịch dicloroxit 4%.",
          "Dung dịch pilocarpin 1%.",
        ],
        a: 3,
      },
      {
        q: "Vào lúc 23h có 1 người bệnh 40 tuổi đến khoa mắt. Người bệnh kêu đau mắt trái, đau 1/2 đầu trái, nhìn mờ, buồn nôn, người bệnh không bị chấn thương. Người điều dưỡng trực phải làm ngay:",
        o: [
          "Báo cho thầy thuốc.",
          "Đo nhãn áp, thị lực.",
          "Hẹn người bệnh sáng mai đến khám.",
          "Cho người bệnh uống thuốc an thần.",
        ],
        a: 1,
      },
      {
        q: "Khi phụ giúp thầy thuốc thay băng cho người bệnh mổ glôcôm 2 mắt. Thầy thuốc nói: mắt phải bị xuất huyết tiền phòng, công việc nào người điều dưỡng phải làm ngay trong trường hợp này:",
        o: [
          "Cho người bệnh uống nhiều nước.",
          "Băng chặt mắt phải cho người bệnh.",
          "Cho người bệnh uống thêm thuốc an thần.",
          "Băng 2 mắt cho người bệnh.",
        ],
        a: 1,
      },
      {
        q: "Dấu hiệu đặc trưng của viêm kết mạc cấp:",
        o: [
          "Mắt đỏ, rỉ nhiều, ngứa",
          "Mắt sưng đau dữ dội",
          "Giảm thị lực nhanh",
          "Nhìn mờ",
        ],
        a: 0,
      },
      {
        q: "Nguyên nhân phổ biến gây viêm kết mạc cấp:",
        o: ["Virus Adeno", "Vi khuẩn", "Dị ứng", "Cả 3 đều đúng"],
        a: 3,
      },
      {
        q: "Khi nhỏ thuốc tra mắt, điều dưỡng cần:",
        o: [
          "Rửa tay, kéo mi dưới, nhỏ vào túi cùng kết mạc",
          "Nhỏ trực tiếp vào giác mạc",
          "Cho bệnh nhân chớp mạnh",
          "Dùng lọ thuốc chung",
        ],
        a: 0,
      },
      {
        q: "Viêm giác mạc nặng có thể dẫn đến:",
        o: ["Mù lòa", "Song thị", "Tăng nhãn áp", "Viêm tai"],
        a: 0,
      },
      {
        q: "Dấu hiệu nhận biết viêm loét giác mạc:",
        o: [
          "Đau nhức, sợ ánh sáng, chảy nước mắt",
          "Ngứa nhẹ",
          "Không đau",
          "Mắt đỏ khô",
        ],
        a: 0,
      },
      {
        q: "Có mấy loại đục thể thuỷ tinh.",
        o: ["1", "2", "3", "4"],
        a: 2,
      },
      {
        q: "Bất động ..... mắt cho người bệnh sau mổ đục thể thuỷ tinh.",
        o: [
          "1 mắt bằng băng cuộn",
          "2 mắt bằng băng cuộn",
          "1 mắt bằng băng dính",
          "2 mắt bằng băng dính",
        ],
        a: 0,
      },
      {
        q: "Sau mổ lấy thể thuỷ tinh đục tuổi già cho người bệnh đeo kính ..... điop.",
        o: [
          "+5\\({}^{\\text{D}}\\)",
          "+6\\({}^{\\text{D}}\\)",
          "+7\\({}^{\\text{D}}\\)",
          "+10\\({}^{\\text{D}}\\)",
        ],
        a: 3,
      },
      {
        q: "Diễn biến thị lực điển hình của đục thủy tinh thể tuổi già chưa biến chứng là gì?",
        o: [
          "Nhìn mờ tăng dần, thường không đau.",
          "Mất thị lực tức thì kèm đau dữ dội là dấu hiệu bắt buộc.",
          "Thị lực luôn tăng dần theo tuổi.",
          "Chỉ thấy đỏ mắt và ghèn, thị lực luôn không thay đổi.",
        ],
        a: 0,
      },
      {
        q: "Vì sao cần theo dõi nhãn áp ở người bệnh bị lệch thủy tinh thể?",
        o: [
          "Vì nhãn áp chắc chắn giảm ở mọi vị trí lệch.",
          "Vì chỉ cần dựa vào mức đau để biết nhãn áp.",
          "Vì lệch thủy tinh thể có thể gây nghẽn đồng tử và tăng nhãn áp.",
          "Vì việc lệch thủy tinh thể luôn bảo vệ mắt khỏi glôcôm.",
        ],
        a: 2,
      },
      {
        q: "Nhận định nào đúng về nguyên nhân đục thủy tinh thể tuổi già?",
        o: [
          "Chủ yếu liên quan đến biến đổi của thủy tinh thể khi lão hóa.",
          "Luôn là biến chứng trực tiếp của mắt hột.",
          "Luôn do viêm kết mạc cấp.",
          "Chỉ do thiếu ngủ một đêm.",
        ],
        a: 0,
      },
      {
        q: "Sau phẫu thuật mắt có bơm khí vào tiền phòng, vì sao cần theo dõi nhãn áp và tình trạng bóng khí theo chỉ định?",
        o: [
          "Vì bóng khí luôn làm nhãn áp giảm về bằng không.",
          "Vì có bóng khí thì không cần khám lại.",
          "Vì bóng khí thay thế hoàn toàn thuốc sau mổ.",
          "Vì bóng khí có thể cản trở lưu thông thủy dịch và làm tăng nhãn áp.",
        ],
        a: 3,
      },
      {
        q: "Nhận định nào về đục thủy tinh thể là đúng?",
        o: [
          "Lão hóa là nguyên nhân thường gặp; đái tháo đường làm tăng nguy cơ.",
          "Thiếu đường là nguyên nhân duy nhất của mọi trường hợp.",
          "Bệnh chỉ xảy ra ở người có đường huyết thấp.",
          "Đái tháo đường loại trừ hoàn toàn nguy cơ đục thủy tinh thể.",
        ],
        a: 0,
      },
      {
        q: "Cương tụ rìa có phải dấu hiệu điển hình của đục thủy tinh thể tuổi già đơn thuần không?",
        o: [
          "Không; dấu hiệu này gợi ý cần tìm bệnh viêm hoặc bệnh khác của mắt.",
          "Có; luôn xuất hiện trước khi thủy tinh thể đục.",
          "Có; là dấu hiệu duy nhất để chẩn đoán đục thủy tinh thể.",
          "Có; không cần khám các cấu trúc khác của mắt.",
        ],
        a: 0,
      },
      {
        q: "Nguyên nhân đục thể thuỷ tinh tuổi già là:",
        o: [
          "Do nhiễm trùng.",
          "Do tăng huyết áp.",
          "Do rối loạn chuyển hoá thể thuỷ tinh.",
          "Do viêm màng bồ đào.",
        ],
        a: 2,
      },
      {
        q: "Triệu chứng đúng nhất trong đục thể thuỷ tinh tuổi già là:",
        o: [
          "Mi mắt không sưng nề.",
          "Kết mạc cương tụ toả lan.",
          "Giác mạc trong thoái hoá rìa.",
          "Đồng tử trắng, phản xạ (+).",
        ],
        a: 3,
      },
      {
        q: "Theo dõi thị lực trong đục thể thuỷ tinh tuổi già chúng ta thấy:",
        o: [
          "Giảm nhiều.",
          "Giảm ít.",
          "Giảm tuỳ mức độ đục.",
          "Giảm hoàn toàn.",
        ],
        a: 2,
      },
      {
        q: "Sau mổ thay thủy tinh thể, điều dưỡng khuyên:",
        o: [
          "Không cúi đầu, không dụi mắt, đeo kính bảo vệ",
          "Rửa mắt bằng nước",
          "Dụi mắt khi ngứa",
          "Nhỏ thuốc tùy ý",
        ],
        a: 0,
      },
      {
        q: "Người bệnh đục thủy tinh thể than nhìn mờ dần, ánh sáng chói, thị lực giảm. Điều dưỡng giải thích đúng là:",
        o: [
          "Thủy tinh thể bị đục làm cản ánh sáng vào võng mạc",
          "Viêm kết mạc",
          "Giác mạc bị viêm",
          "Tăng nhãn áp",
        ],
        a: 0,
      },
      {
        q: "Tra thuốc nhỏ mắt đúng cách là:",
        o: [
          "Nhỏ vào túi cùng kết mạc, không để đầu lọ chạm vào mắt",
          "Nhỏ trực tiếp lên giác mạc",
          "Cho bệnh nhân chớp mạnh",
          "Dùng chung lọ thuốc",
        ],
        a: 0,
      },
      {
        q: "Bệnh nhân bị đau mắt đỏ do virus, điều dưỡng cần:",
        o: [
          "Hướng dẫn cách ly, vệ sinh mắt, nhỏ thuốc đúng",
          "Dán mắt kín",
          "Nhỏ thuốc co mạch kéo dài",
          "Dùng khăn chung",
        ],
        a: 0,
      },
      {
        q: "Người bệnh tăng nhãn áp mạn nếu không điều trị sẽ bị:",
        o: ["Mù lòa", "Viêm giác mạc", "Viêm kết mạc", "Giảm thị lực tạm thời"],
        a: 0,
      },
      {
        q: "Sau mổ mắt, điều dưỡng phải theo dõi:",
        o: [
          "Đau, đỏ, chảy nước mắt, giảm thị lực",
          "Sốt cao",
          "Đau bụng",
          "Buồn nôn",
        ],
        a: 0,
      },
      {
        q: "Viêm kết mạc dị ứng thường gặp ở người hay tiếp xúc bụi phấn. Điều dưỡng hướng dẫn:",
        o: [
          "Tránh bụi, không dụi mắt, dùng thuốc kháng histamin",
          "Nhỏ corticoid kéo dài",
          "Che mắt kín",
          "Dùng thuốc co mạch",
        ],
        a: 0,
      },
      {
        q: "Sau chấn thương mắt do vật nhọn, điều dưỡng không được làm gì?",
        o: [
          "Không rút dị vật ra",
          "Không băng ép chặt",
          "Che mắt nhẹ, chuyển tuyến",
          "Dùng tay kiểm tra vết thương",
        ],
        a: 3,
      },
      {
        q: "Nguyên tắc chăm sóc người bệnh glôcôm (tăng nhãn áp):",
        o: [
          "Dùng thuốc hạ nhãn áp đúng giờ",
          "Tránh xúc động, ho, cúi người",
          "Theo dõi thị lực",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Glôcôm cấp có triệu chứng:",
        o: [
          "Đau nhức mắt dữ dội, nhìn mờ, buồn nôn",
          "Mắt đỏ ngứa nhẹ",
          "Không đau",
          "Chảy nước mắt nhẹ",
        ],
        a: 0,
      },
      {
        q: "Trong viêm kết mạc, điều dưỡng cần hướng dẫn người bệnh:",
        o: [
          "Không dùng chung khăn, chậu",
          "Rửa tay thường xuyên",
          "Vệ sinh mắt hàng ngày",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Bệnh đục thủy tinh thể thường gặp ở:",
        o: ["Người cao tuổi", "Trẻ sơ sinh", "Thanh niên", "Phụ nữ mang thai"],
        a: 0,
      },
      {
        q: "Sau mổ thay thủy tinh thể, điều dưỡng cần lưu ý:",
        o: [
          "Không dụi mắt, không cúi người",
          "Dùng thuốc tra đúng giờ",
          "Đeo kính bảo vệ",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Bệnh nhân glôcôm góc đóng cấp, đau nhức mắt, nhìn quầng xanh, buồn nôn — điều dưỡng cần làm gì đầu tiên?",
        o: [
          "Cho nghỉ ngơi, nhỏ thuốc hạ nhãn áp ngay",
          "Cho chườm lạnh",
          "Che mắt lại",
          "Cho nhỏ thuốc co đồng tử",
        ],
        a: 0,
      },
      {
        q: "Bệnh nhân sau mổ thay thủy tinh thể, điều dưỡng cần lưu ý:",
        o: [
          "Không cúi đầu, không dụi mắt",
          "Dùng thuốc đúng giờ",
          "Đeo kính bảo vệ",
          "Tất cả đều đúng",
        ],
        a: 3,
      },
      {
        q: "Người bệnh đục thủy tinh thể thường than phiền:",
        o: [
          "Nhìn mờ, giảm thị lực từ từ",
          "Mắt đỏ đau",
          "Sợ ánh sáng",
          "Chảy nước mắt nhiều",
        ],
        a: 0,
      },
      {
        q: "Trong chấn thương mắt có mấy loại.",
        o: ["2", "3", "4", "5"],
        a: 1,
      },
      {
        q: "Có ..... nguyên tắc xử trí bỏng mắt.",
        o: ["2", "3", "4", "5"],
        a: 2,
      },
      {
        q: "Khi tiên lượng 1 người bệnh bị bỏng mắt dựa vào ..... yếu tố.",
        o: ["1", "2", "3", "4"],
        a: 2,
      },
      {
        q: "Sau mổ mắt, điều dưỡng phải theo dõi đặc biệt:",
        o: [
          "Đau, đỏ, chảy nước mắt, giảm thị lực",
          "Đau bụng",
          "Sốt cao",
          "Nôn",
        ],
        a: 0,
      },
      {
        q: "Một người bị vảy bụi sắt vào mắt, đau nhức dữ dội. Xử trí ban đầu:",
        o: [
          "Che mắt, chuyển chuyên khoa mắt ngay",
          "Tự rửa bằng tay",
          "Dụi mạnh",
          "Dán băng chặt",
        ],
        a: 0,
      },
      {
        q: "Lượng nước cho người bệnh xuất huyết tiền phòng là:",
        o: [
          "10 ml/kg/24 giờ",
          "15 ml/kg/24 giờ",
          "20 ml/kg/24 giờ",
          "25 ml/kg/24 giờ",
        ],
        a: 3,
      },
      {
        q: "Người bệnh bị bỏng vôi rửa mắt bằng dung dịch:",
        o: ["Cloroxit 4‰", "NaCl 9‰", "Glucoza 5%", "Acygrol 1%"],
        a: 1,
      },
      {
        q: "Người bệnh xuất huyết tiền phòng, uống thuốc đông y đúng nhất là:",
        o: ["Cam thảo", "Ngũ gia bì", "Tam thất", "Bông mã đề"],
        a: 2,
      },
      {
        q: "Người bệnh Nguyễn Văn Ấn 50 tuổi vào viện hồi 21h với lý do bị đấm vào mắt phải. Hành động đúng nhất của điều dưỡng là:",
        o: [
          "Đo thị lực, nhãn áp",
          "Cho uống thuốc giảm đau",
          "Tra dung dịch cloroxit 0,4%",
          "Báo cáo thầy thuốc",
        ],
        a: 3,
      },
      {
        q: "Người bệnh Vũ Thị Oanh 47 tuổi bị vữa vôi bắn vào mắt. Điều dưỡng phải làm gì đầu tiên:",
        o: [
          "Rửa mắt bằng dung dịch NaCl 0,9%",
          "Rửa mắt bằng dung dịch acid acetic",
          "Gạt hết vữa và rửa bằng dung dịch glucoza 20%",
          "Rửa mắt bằng nước sạch",
        ],
        a: 3,
      },
      {
        q: "Dị vật bay vào mắt, đau nhức, chảy nước mắt. Điều dưỡng xử trí:",
        o: [
          "Che mắt, chuyển chuyên khoa",
          "Rửa nước",
          "Dụi mạnh",
          "Dán bằng kín",
        ],
        a: 0,
      },
      {
        q: "Trong chăm sóc người bệnh nha khoa, công tác nào là ưu tiên trước khi tiến hành thủ thuật?",
        o: [
          "Rửa tay, sát khuẩn đầy đủ",
          "Chuẩn bị dụng cụ phục hình",
          "Găng tay vô khuẩn là đủ, không cần rửa tay",
          "Thực hiện thủ thuật ngay nếu bệnh nhân đau",
        ],
        a: 0,
      },
      {
        q: "Cơ chế gây sâu răng là:",
        o: [
          "Mòn răng cơ học",
          "Vi khuẩn lên men hydrat carbon tạo acid làm mất khoáng men răng",
          "Thiếu fluor",
          "Rối loạn hormon tuyến cận giáp",
        ],
        a: 1,
      },
      {
        q: "Tổn thương sâu răng giai đoạn sớm có đặc điểm:",
        o: [
          "Lỗ sâu lớn, đau nhức nhiều",
          "Đốm trắng mờ trên men răng, chưa mất tổ chức răng",
          "Tủy răng hoại tử",
          "Viêm lợi lan tỏa",
        ],
        a: 1,
      },
      {
        q: "Đau nhức tăng khi ăn đồ ngọt, giảm khi ngừng kích thích – đây là biểu hiện của:",
        o: ["Viêm tủy răng", "Sâu men", "Sâu ngà", "Viêm cuống răng"],
        a: 2,
      },
      {
        q: "Biện pháp dự phòng sâu răng hiệu quả nhất:",
        o: [
          "Trám bít hố rãnh",
          "Súc miệng nước muối",
          "Đánh răng sau ăn, dùng kem có fluor",
          "Khám nha định kỳ 2 năm/lần",
        ],
        a: 2,
      },
      {
        q: "Nguyên nhân chính của viêm quanh răng là:",
        o: [
          "Vi khuẩn mảng bám răng",
          "Chấn thương khớp cắn",
          "Thiếu vitamin C",
          "Dị ứng thức ăn",
        ],
        a: 0,
      },
      {
        q: "Triệu chứng đặc trưng của viêm lợi:",
        o: [
          "Lợi sưng đỏ, chảy máu khi chải răng",
          "Răng lung lay",
          "Lợi trắng nhợt",
          "Hơi thở thơm",
        ],
        a: 0,
      },
      {
        q: "Dấu hiệu phân biệt viêm quanh răng với viêm lợi đơn thuần là:",
        o: [
          "Có mảng bám răng",
          "Có túi nha chu, tiêu xương ổ răng",
          "Chảy máu lợi",
          "Hơi thở hôi",
        ],
        a: 1,
      },
      {
        q: "Biến chứng thường gặp của viêm quanh răng:",
        o: ["Viêm xoang", "Rụng răng", "Viêm tủy", "Sâu răng lan rộng"],
        a: 1,
      },
      {
        q: "Biện pháp điều trị hỗ trợ quan trọng trong viêm quanh răng:",
        o: [
          "Kháng sinh toàn thân",
          "Cạo vôi răng, hướng dẫn vệ sinh răng miệng",
          "Nhổ răng ngay",
          "Dùng thuốc giảm đau",
        ],
        a: 1,
      },
      {
        q: "Viêm cuống răng là hậu quả của:",
        o: [
          "Viêm lợi",
          "Viêm tủy không được điều trị",
          "Sâu răng sớm",
          "Viêm xoang",
        ],
        a: 1,
      },
      {
        q: "Triệu chứng lâm sàng thường gặp:",
        o: [
          "Đau tự nhiên, tăng khi gõ răng",
          "Đau khi ăn đồ ngọt",
          "Đau khi chải răng",
          "Lợi sưng đỏ nhẹ",
        ],
        a: 0,
      },
      {
        q: "Hình ảnh X-quang đặc trưng của viêm cuống răng mạn:",
        o: [
          "Hình mờ vùng chóp răng",
          "Hình sáng quanh chóp răng rõ nét",
          "Ranh giới chóp răng rõ nét",
          "Không thay đổi",
        ],
        a: 1,
      },
      {
        q: "Mục tiêu điều trị viêm cuống răng:",
        o: [
          "Cắt cuống răng",
          "Loại bỏ nhiễm khuẩn trong ống tủy, bảo tồn răng",
          "Nhổ bỏ răng viêm",
          "Chỉ dùng thuốc giảm đau",
        ],
        a: 1,
      },
      {
        q: "Mục tiêu của điều dưỡng trong chăm sóc bệnh nhân sâu răng, viêm quanh răng:",
        o: [
          "Giảm đau, kiểm soát nhiễm khuẩn, cải thiện vệ sinh răng miệng",
          "Giảm viêm, khuyên bệnh nhân dùng kháng sinh",
          "Làm thay bác sĩ trong điều trị",
          "Theo dõi dinh dưỡng",
        ],
        a: 0,
      },
      {
        q: "Khi chăm sóc người bệnh đau răng cấp, điều dưỡng cần:",
        o: [
          "Cho bệnh nhân nằm nghỉ, chườm lạnh vùng đau",
          "Cho bệnh nhân tự uống thuốc giảm đau",
          "Không cần ghi hồ sơ",
          "Hướng dẫn bệnh nhân ăn đồ cứng",
        ],
        a: 0,
      },
      {
        q: "Trong chăm sóc bệnh nhân viêm quanh răng, điều dưỡng cần:",
        o: [
          "Hướng dẫn đánh răng đúng kỹ thuật (Bass, cuộn vòng)",
          "Động viên bỏ thuốc lá, kiểm soát bệnh nền (đái tháo đường)",
          "Theo dõi chảy máu lợi, hơi thở sưng đau",
          "Tất cả các ý trên",
        ],
        a: 3,
      },
      {
        q: "Sau điều trị viêm cuống răng, điều dưỡng cần hướng dẫn:",
        o: [
          "Tránh ăn nhai bên răng điều trị trong 24h đầu",
          "Giữ vệ sinh răng miệng sạch",
          "Tái khám đúng hẹn",
          "Tất cả các ý trên",
        ],
        a: 3,
      },
      {
        q: "Răng người gồm mấy phần chính?",
        o: ["2 phần", "3 phần", "4 phần", "5 phần"],
        a: 1,
      },
      {
        q: "Thân răng là phần:",
        o: [
          "Nằm trong xương ổ răng",
          "Nằm trong nướu",
          "Nằm trên lợi, được phủ men răng",
          "Nối với dây chằng quanh răng",
        ],
        a: 2,
      },
      {
        q: "Cổ răng là phần:",
        o: [
          "Nối thân và chân răng, nằm ở bờ lợi",
          "Gắn răng với xương hàm",
          "Là phần cứng nhất của răng",
          "Nơi có lỗ chóp",
        ],
        a: 0,
      },
      {
        q: "Chân răng là phần:",
        o: [
          "Nằm trong xương ổ răng, cố định răng",
          "Nằm trên lợi",
          "Gồm men răng",
          "Là phần tiếp xúc với môi",
        ],
        a: 0,
      },
      {
        q: "Lớp cứng ngoài cùng của thân răng là:",
        o: ["Men răng", "Ngà răng", "Xê măng răng", "Tủy răng"],
        a: 0,
      },
      {
        q: "Thành phần chiếm thể tích lớn nhất trong răng là:",
        o: ["Men răng", "Ngà răng", "Tủy răng", "Xê măng răng"],
        a: 1,
      },
      {
        q: "Men răng chứa khoảng bao nhiêu phần trăm chất vô cơ?",
        o: ["50%", "70%", "96-97%", "80%"],
        a: 2,
      },
      {
        q: "Chất vô cơ chủ yếu trong men răng là:",
        o: [
          "Calcium carbonate",
          "Hydroxyapatite (\\(\\text{Ca}_{10}(\\text{PO}_4)_6(\\text{OH})_2\\))",
          "Magnesium sulfate",
          "Silic dioxide",
        ],
        a: 1,
      },
      {
        q: "Ngà răng có đặc điểm:",
        o: [
          "Mềm hơn men răng",
          "Có ống ngà dẫn truyền cảm giác",
          "Bị lộ ra khi men răng mòn",
          "Tất cả các ý trên",
        ],
        a: 3,
      },
      {
        q: "Tủy răng gồm các thành phần:",
        o: [
          "Mạch máu, thần kinh, mô liên kết",
          "Xương xốp, mạch máu",
          "Dây chằng, men, ngà",
          "Cơ và mô mỡ",
        ],
        a: 0,
      },
      {
        q: "Mô quanh răng KHÔNG bao gồm:",
        o: ["Lợi", "Dây chằng quanh răng", "Xương ổ răng", "Men răng"],
        a: 3,
      },
      {
        q: "Dây chằng quanh răng có chức năng:",
        o: [
          "Giúp răng cố định nhưng vẫn có độ đàn hồi khi nhai",
          "Dẫn truyền cảm giác vị giác",
          "Là nơi tiết men răng",
          "Làm răng trắng hơn",
        ],
        a: 0,
      },
      {
        q: "Chất bao phủ chân răng là:",
        o: ["Men răng", "Xê măng răng (cementum)", "Ngà răng", "Tủy răng"],
        a: 1,
      },
      {
        q: "Răng sữa có bao nhiêu chiếc?",
        o: ["20", "24", "28", "32"],
        a: 0,
      },
      {
        q: "Răng vĩnh viễn có bao nhiêu chiếc?",
        o: ["20", "24", "28-32", "36"],
        a: 2,
      },
      {
        q: "Răng cửa có chức năng:",
        o: [
          "Cắt thức ăn",
          "Nghiền thức ăn",
          "Xé thức ăn",
          "Giữ hướng mọc răng khác",
        ],
        a: 0,
      },
      {
        q: "Răng nanh có chức năng:",
        o: ["Cắt", "Xé", "Nghiền", "Nghiền nhỏ thức ăn"],
        a: 1,
      },
      {
        q: "Nguyên nhân chủ yếu gây viêm lợi là:",
        o: [
          "Do thiếu vitamin C",
          "Do vi khuẩn mảng bám răng",
          "Do sang chấn khớp cắn",
          "Do thay đổi nội tiết",
        ],
        a: 1,
      },
      {
        q: "Dấu hiệu đặc trưng nhất của viêm lợi là:",
        o: [
          "Đau nhức dữ dội",
          "Lợi sưng đỏ, chảy máu khi chải răng",
          "Lung lay răng",
          "Áp xe quanh răng",
        ],
        a: 1,
      },
      {
        q: "Viêm lợi thường gặp ở lứa tuổi nào nhất?",
        o: [
          "Trẻ em",
          "Thiếu niên và người lớn trẻ tuổi",
          "Người cao tuổi",
          "Mọi lứa tuổi như nhau",
        ],
        a: 1,
      },
      {
        q: "Yếu tố nào dưới đây không phải là nguyên nhân gây viêm lợi?",
        o: [
          "Mảng bám răng",
          "Vệ sinh răng miệng kém",
          "Sử dụng kháng sinh kéo dài",
          "Răng mọc lệch",
        ],
        a: 2,
      },
      {
        q: "Khi khám răng, điều dưỡng thấy lợi sưng đỏ, dễ chảy máu, bệnh nhân có mảng bám răng. Chẩn đoán thích hợp nhất là:",
        o: ["Viêm quanh răng", "Viêm lợi", "Viêm tuỷ răng", "Áp xe quanh chóp"],
        a: 1,
      },
      {
        q: "Biện pháp điều dưỡng quan trọng nhất trong chăm sóc bệnh nhân viêm lợi là:",
        o: [
          "Cho uống thuốc giảm đau",
          "Hướng dẫn vệ sinh răng miệng đúng cách",
          "Dùng nước súc miệng sát khuẩn",
          "Cạo vôi răng",
        ],
        a: 1,
      },
      {
        q: "Thuốc súc miệng thường được dùng trong điều trị viêm lợi là:",
        o: ["Chlorhexidine", "NaCl 0,9%", "Nước oxy già", "Cồn iốt 10%"],
        a: 0,
      },
      {
        q: "Mục đích của việc cạo vôi răng trong điều trị viêm lợi là:",
        o: [
          "Làm trắng răng",
          "Loại bỏ ổ vi khuẩn gây viêm",
          "Giảm đau lợi",
          "Ngăn chảy máu lợi",
        ],
        a: 1,
      },
      {
        q: "Nếu viêm lợi không được điều trị, có thể tiến triển thành:",
        o: ["Viêm quanh răng", "Viêm tuỷ răng", "Áp xe răng", "Viêm xoang"],
        a: 0,
      },
      {
        q: "Khi hướng dẫn bệnh nhân viêm lợi chải răng, điều dưỡng nên khuyên:",
        o: [
          "Dùng bàn chải lông cứng để sạch mảng bám",
          "Chải mạnh vùng lợi để loại bỏ vi khuẩn",
          "Dùng bàn chải lông mềm, chải nhẹ nhàng theo chiều dọc",
          "Chỉ cần súc miệng bằng nước muối",
        ],
        a: 2,
      },
      {
        q: "Viêm quanh răng là tình trạng viêm:",
        o: [
          "Chỉ ở lợi",
          "Ở tổ chức quanh răng gồm lợi, dây chằng, xương ổ răng",
          "Ở tủy răng",
          "Ở nướu và má",
        ],
        a: 1,
      },
      {
        q: "Dấu hiệu đặc trưng của viêm quanh răng là:",
        o: [
          "Lợi sưng đỏ",
          "Răng lung lay, có túi lợi sâu",
          "Răng đổi màu",
          "Đau nhức dữ dội từng cơn",
        ],
        a: 1,
      },
      {
        q: "Nguyên nhân chủ yếu gây viêm quanh răng là:",
        o: [
          "Vi khuẩn trong mảng bám răng",
          "Dị ứng thức ăn",
          "Thiếu canxi",
          "Do răng mọc lệch",
        ],
        a: 0,
      },
      {
        q: "Yếu tố nguy cơ cao dẫn đến viêm quanh răng là:",
        o: ["Hút thuốc lá", "Uống nước lạnh", "Ăn nhiều đồ ngọt", "Thiếu ngủ"],
        a: 0,
      },
      {
        q: "Mục tiêu điều trị chính của bệnh viêm quanh răng là:",
        o: [
          "Làm giảm đau",
          "Làm trắng răng",
          "Loại bỏ mảng bám, vi khuẩn và duy trì mô nâng đỡ răng",
          "Giảm sưng lợi",
        ],
        a: 2,
      },
      {
        q: "Triệu chứng thường gặp của viêm quanh răng mạn tính là:",
        o: [
          "Đau nhức dữ dội",
          "Hơi thở hôi, răng lung lay",
          "Sốt cao",
          "Chảy mủ vùng lợi",
        ],
        a: 1,
      },
      {
        q: "Khi phát hiện răng lung lay, điều dưỡng cần hướng dẫn bệnh nhân:",
        o: [
          "Tự nhổ răng tại nhà",
          "Hạn chế nhai bên răng đó và đi khám nha sĩ sớm",
          "Chườm nóng để giảm sưng",
          "Súc miệng bằng cồn",
        ],
        a: 1,
      },
      {
        q: "Một trong các biến chứng của viêm quanh răng không điều trị là:",
        o: ["Mất răng", "Viêm xoang", "Sâu răng", "Viêm tuỷ"],
        a: 0,
      },
      {
        q: "Trong chăm sóc người bệnh viêm quanh răng, điều dưỡng không nên:",
        o: [
          "Hướng dẫn vệ sinh răng miệng đúng cách",
          "Động viên người bệnh bỏ thuốc lá",
          "Cho bệnh nhân chải răng mạnh để sạch mảng bám",
          "Theo dõi dấu hiệu nhiễm trùng lan rộng",
        ],
        a: 2,
      },
      {
        q: "Chỉ định cạo vôi răng được áp dụng khi:",
        o: [
          "Có mảng bám cứng quanh cổ răng",
          "Răng đau nhức",
          "Lợi rớm máu",
          "Răng lung lay",
        ],
        a: 0,
      },
      {
        q: "Chlorhexidine thường được khuyên dùng tối đa trong bao lâu để tránh nhiễm màu răng?",
        o: ["1–2 ngày", "1 tuần", "2 tuần", "3 tháng"],
        a: 2,
      },
      {
        q: "Khi chăm sóc bệnh nhân sau cạo vôi răng, điều dưỡng nên hướng dẫn:",
        o: [
          "Ăn thức ăn mềm trong 1-2 ngày đầu",
          "Không đánh răng",
          "Dùng tăm xỉa thường xuyên",
          "Uống nước đá để giảm sưng",
        ],
        a: 0,
      },
      {
        q: "Bệnh viêm quanh răng có thể ảnh hưởng đến:",
        o: [
          "Hệ tiêu hóa",
          "Hệ tuần hoàn và tim mạch",
          "Hệ thần kinh trung ương",
          "Hệ bài tiết",
        ],
        a: 1,
      },
      {
        q: "Khi chảy máu lợi kéo dài, điều dưỡng cần khuyên bệnh nhân:",
        o: [
          "Uống thuốc cầm máu tại nhà",
          "Ngừng chải răng",
          "Đi khám răng miệng để loại trừ bệnh viêm quanh răng hoặc rối loạn đông máu",
          "Dùng tăm bông cầm máu",
        ],
        a: 2,
      },
      {
        q: "Phòng bệnh viêm quanh răng tốt nhất là:",
        o: [
          "Chải răng đúng cách và khám răng định kỳ",
          "Uống vitamin C thường xuyên",
          "Tránh ăn đồ chua",
          "Dùng tăm sau mỗi bữa ăn",
        ],
        a: 0,
      },
      {
        q: "Trong hướng dẫn bệnh nhân vệ sinh răng miệng, điều dưỡng nên khuyên dùng chỉ nha khoa vì:",
        o: [
          "Làm trắng răng",
          "Loại bỏ mảng bám giữa các răng mà bàn chải không tới",
          "Giảm đau lợi",
          "Làm lợi cứng chắc",
        ],
        a: 1,
      },
      {
        q: "Biện pháp hỗ trợ tại chỗ trong điều trị viêm quanh răng là:",
        o: [
          "Súc miệng dung dịch sát khuẩn",
          "Uống kháng sinh mạnh",
          "Dán thuốc giảm đau",
          "Tự chọc túi mủ",
        ],
        a: 0,
      },
      {
        q: "Điều dưỡng cần theo dõi gì ở bệnh nhân viêm quanh răng mạn tính?",
        o: [
          "Mức độ lung lay răng, chảy máu, hơi thở hôi",
          "Nhiệt độ cơ thể",
          "Huyết áp",
          "Cảm giác đau đầu",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu giáo dục sức khỏe trong phòng bệnh viêm lợi, viêm quanh răng là:",
        o: [
          "Giúp người dân nhận biết sớm và phòng bệnh bằng vệ sinh răng miệng",
          "Khuyến khích tự mua thuốc",
          "Giảm chi phí nha khoa",
          "Tránh ăn đồ ngọt",
        ],
        a: 0,
      },
      {
        q: "Ngay sau khi nhổ răng, bệnh nhân cần:",
        o: [
          "Ngậm chặt bông gạc trong 30–45 phút",
          "Khạc nhổ liên tục cho sạch máu",
          "Súc miệng bằng nước muối",
          "Uống nước lạnh",
        ],
        a: 0,
      },
      {
        q: "Nếu bệnh nhân nhổ răng bị chảy máu kéo dài, điều dưỡng nên:",
        o: [
          "Cho bệnh nhân súc miệng mạnh",
          "Cho bệnh nhân uống nước nóng",
          "Báo bác sĩ kiểm tra và thay gạc cầm máu",
          "Dán bông gạc khô ở ngoài má",
        ],
        a: 2,
      },
      {
        q: "Trong 24 giờ đầu sau nhổ răng, bệnh nhân không nên làm gì?",
        o: [
          "Ăn thức ăn mềm, nguội",
          "Súc miệng bằng nước muối ấm",
          "Chườm lạnh ngoài má vùng nhổ răng",
          "Khạc nhổ hoặc súc miệng mạnh",
        ],
        a: 3,
      },
      {
        q: "Tác dụng của chườm lạnh sau nhổ răng là:",
        o: [
          "Giảm đau, giảm sưng, co mạch cầm máu",
          "Làm tê vùng mặt",
          "Giảm sốt",
          "Làm khô ổ răng",
        ],
        a: 0,
      },
      {
        q: "Chảy máu thứ phát sau nhổ răng thường xảy ra sau bao lâu?",
        o: ["1–2 giờ", "6–12 giờ", "24–48 giờ", "5–7 ngày"],
        a: 2,
      },
      {
        q: "Biến chứng thường gặp sau nhổ răng là:",
        o: [
          "Sốt, đau, sưng nề vùng nhổ",
          "Huyết áp tăng",
          "Viêm tuỷ",
          "Viêm xoang",
        ],
        a: 0,
      },
      {
        q: "Khi bệnh nhân có đau dữ dội sau vài ngày nhổ răng, hôi miệng, ổ răng trống, điều dưỡng cần nghĩ đến:",
        o: [
          "Nhiễm trùng huyết",
          "Viêm ổ răng khô (dry socket)",
          "Áp xe chân răng",
          "Viêm quanh răng",
        ],
        a: 1,
      },
      {
        q: "Nguyên nhân gây viêm ổ răng khô thường là:",
        o: [
          "Mất cục máu đông sớm",
          "Nhiễm khuẩn trong ổ răng",
          "Chấn thương khi nhổ",
          "Cả A và B đúng",
        ],
        a: 3,
      },
      {
        q: "Điều dưỡng hướng dẫn bệnh nhân ăn uống sau nhổ răng:",
        o: [
          "Ăn nóng để mau lành thương",
          "Ăn mềm, nguội, tránh nhai bên răng mới nhổ",
          "Ăn đồ cứng để tập nhai lại",
          "Uống nước chanh để sát trùng",
        ],
        a: 1,
      },
      {
        q: "Thuốc thường dùng sau nhổ răng để giảm đau và chống viêm là:",
        o: [
          "Paracetamol, Ibuprofen",
          "Penicillin",
          "Amoxicillin + Clavulanic",
          "Vitamin C",
        ],
        a: 0,
      },
      {
        q: "Khi bệnh nhân bị sưng nhiều sau nhổ răng 2 ngày, điều dưỡng hướng dẫn:",
        o: [
          "Chườm lạnh",
          "Chườm ấm",
          "Không chườm gì cả",
          "Súc miệng bằng nước đá",
        ],
        a: 1,
      },
      {
        q: "Thời điểm bắt đầu súc miệng nước muối sau nhổ răng là:",
        o: ["Ngay sau khi nhổ", "Sau 6 giờ", "Sau 24 giờ", "Sau 3 ngày"],
        a: 2,
      },
      {
        q: "Trong chăm sóc người bệnh nhổ răng, điều dưỡng cần theo dõi gì?",
        o: [
          "Mức độ chảy máu, sưng, đau và dấu hiệu nhiễm trùng",
          "Huyết áp",
          "Màu da",
          "Cảm giác chóng mặt",
        ],
        a: 0,
      },
      {
        q: "Nguyên tắc vô khuẩn trong khi nhổ răng có ý nghĩa gì?",
        o: [
          "Giúp giảm đau",
          "Ngăn ngừa nhiễm khuẩn tại chỗ và toàn thân",
          "Giúp dễ nhổ hơn",
          "Không có ý nghĩa đặc biệt",
        ],
        a: 1,
      },
      {
        q: "Khi bệnh nhân có tiền sử bệnh tim mạch hoặc đái tháo đường, trước khi nhổ răng cần:",
        o: [
          "Cho nhổ ngay",
          "Chuẩn bị và theo dõi đặc biệt theo chỉ định bác sĩ",
          "Không cần chú ý",
          "Cho dùng thuốc tế nhiều hơn",
        ],
        a: 1,
      },
      {
        q: "Thời gian lành thương hoàn toàn của ổ răng trung bình là:",
        o: ["2–3 ngày", "5–7 ngày", "7–10 ngày", "2–3 tuần"],
        a: 3,
      },
      {
        q: "Trong hướng dẫn vệ sinh răng miệng sau nhổ răng, điều dưỡng nên khuyên:",
        o: [
          "Không chải răng 3 ngày",
          "Chải răng nhẹ nhàng, tránh vùng nhổ",
          "Dùng tăm để lấy thức ăn",
          "Dùng bàn chải cứng",
        ],
        a: 1,
      },
      {
        q: "Khi ổ răng có mủ hoặc mùi hôi, điều dưỡng nên:",
        o: [
          "Cho bệnh nhân súc miệng nước muối đặc",
          "Báo bác sĩ khám lại, xử lý và dùng kháng sinh",
          "Tự lấy bông gạc lau sạch",
          "Cho uống giảm đau",
        ],
        a: 1,
      },
      {
        q: "Giáo dục sức khỏe sau nhổ răng nhằm mục đích:",
        o: [
          "Giúp bệnh nhân tự theo dõi biến chứng",
          "Tăng hiệu quả lành thương và phòng nhiễm khuẩn",
          "Giúp tiết kiệm chi phí",
          "Giảm đau nhanh",
        ],
        a: 1,
      },
      {
        q: "Biến chứng nguy hiểm khi cố định hàm mà không có đường thở dự phòng là:",
        o: ["Tụt lưỡi gây ngạt", "Nhiễm trùng nướu", "Viêm phổi", "Mất nước"],
        a: 0,
      },
      {
        q: "Trong trường hợp bệnh nhân nôn khi đang cố định hàm, điều dưỡng phải:",
        o: [
          "Nới dây cố định ngay và nghiêng đầu sang bên",
          "Cho bệnh nhân nằm ngửa",
          "Dùng gạc lau miệng",
          "Không làm gì",
        ],
        a: 0,
      },
      {
        q: "Khi bệnh nhân có vết thương phần mềm vùng mặt, điều dưỡng cần:",
        o: [
          "Làm sạch và băng vô khuẩn",
          "Dùng cồn sát khuẩn mạnh",
          "Không cần băng",
          "Đắp thuốc dân gian",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu chăm sóc người bệnh chấn thương vùng hàm mặt là:",
        o: [
          "Giảm đau, phòng biến chứng, phục hồi chức năng",
          "Chỉ cần cầm máu",
          "Làm đẹp lại khuôn mặt",
          "Cho bệnh nhân ăn đầy đủ",
        ],
        a: 0,
      },
      {
        q: "Theo dõi toàn thân bệnh nhân chấn thương hàm mặt cần chú ý:",
        o: [
          "Dấu hiệu sinh tồn, tình trạng hô hấp, chảy máu",
          "Màu da",
          "Nhịp tim",
          "Nhiệt độ",
        ],
        a: 0,
      },
      {
        q: "Trong 24 giờ đầu sau chấn thương vùng mặt, nên chườm gì để giảm sưng?",
        o: ["Chườm ấm", "Chườm lạnh", "Chườm cồn", "Không cần chườm"],
        a: 1,
      },
      {
        q: "Sau 48 giờ, nếu còn sưng nề, điều dưỡng hướng dẫn:",
        o: [
          "Tiếp tục chườm lạnh",
          "Chườm ấm để tan máu tụ",
          "Không làm gì",
          "Dùng thuốc giảm đau mạnh",
        ],
        a: 1,
      },
      {
        q: "Khi có dấu hiệu sưng đau, sốt, chảy mủ vùng chấn thương, điều dưỡng cần:",
        o: [
          "Báo bác sĩ, nghi ngờ nhiễm trùng vết thương",
          "Cho bệnh nhân uống giảm đau",
          "Đắp lá cây",
          "Cho về nhà theo dõi",
        ],
        a: 0,
      },
      {
        q: "Giáo dục sức khỏe cho người bệnh sau chấn thương hàm mặt cần tập trung vào:",
        o: [
          "Giữ vệ sinh răng miệng, ăn uống đủ chất, tái khám định kỳ",
          "Tránh soi gương",
          "Uống nhiều thuốc giảm đau",
          "Không cần kiêng gì",
        ],
        a: 0,
      },
      {
        q: "nguyên nhân gây viêm nhiễm vùng mặt là :",
        o: [
          "Nhiễm khuẩn từ răng và mô quanh răng lan ra",
          "Do dị ứng",
          "Do thiếu vitamin",
          "Do chấn thương cơ học",
        ],
        a: 0,
      },
      {
        q: "Tác nhân thường gặp gây viêm nhiễm vùng mặt là:",
        o: [
          "Liên cầu, tụ cầu, vi khuẩn yếm khí",
          "Virus cúm",
          "Vi nấm Candida",
          "Ký sinh trùng",
        ],
        a: 0,
      },
      {
        q: "Dấu hiệu đặc trưng của viêm nhiễm vùng mặt là:",
        o: ["Đau, sưng, nóng, đỏ", "Sưng không đau", "Mặt tái nhợt", "Tê bì"],
        a: 0,
      },
      {
        q: "Ổ viêm nhiễm vùng mặt thường xuất phát từ:",
        o: [
          "tai giữa",
          "Răng sâu, viêm quanh răng hoặc sau nhổ răng",
          "Viêm xoang",
          "Viêm mũi dị ứng",
        ],
        a: 1,
      },
      {
        q: "Dấu hiệu toàn thân của viêm nhiễm vùng mặt có thể là:",
        o: ["Sốt, mệt mỏi, chán ăn", "Hạ huyết áp", "Buồn nôn", "Mất ngủ"],
        a: 0,
      },
      {
        q: "Biến chứng nguy hiểm nhất của viêm nhiễm vùng mặt là:",
        o: [
          "Viêm xoang",
          "Viêm màng tai",
          "Viêm mô tế bào lan tỏa hoặc nhiễm trùng huyết",
          "Tụ mủ nhỏ",
        ],
        a: 2,
      },
      {
        q: "Viêm mô tế bào vùng hàm mặt thường có đặc điểm:",
        o: [
          "Sưng cứng, lan rộng, đau nhiều, sốt cao",
          "Sưng mềm, có mủ rõ",
          "Sưng không đau",
          "Chỉ sưng tại chỗ",
        ],
        a: 0,
      },
      {
        q: "Khi bệnh nhân bị viêm mô tế bào vùng mặt, điều dưỡng cần theo dõi gì?",
        o: [
          "Dấu hiệu nhiễm trùng toàn thân (sốt, mạch, huyết áp)",
          "Màu da",
          "Nhịp thở",
          "Hơi thở",
        ],
        a: 0,
      },
      {
        q: "Biện pháp chăm sóc ban đầu đối với viêm mô tế bào vùng mặt là:",
        o: [
          "Nghỉ ngơi, chườm lạnh, theo dõi sát",
          "Chườm ấm ngay",
          "Nặn mủ",
          "Cho ăn uống bình thường",
        ],
        a: 0,
      },
      {
        q: "Sau 48 giờ nếu sưng không giảm, điều dưỡng cần:",
        o: [
          "Chườm ấm để tăng tuần hoàn, làm tan dịch viêm",
          "Tiếp tục chườm lạnh",
          "Không làm gì",
          "Cho uống nhiều nước",
        ],
        a: 0,
      },
      {
        q: "Khi có ổ mủ vùng mặt, điều dưỡng cần phối hợp với bác sĩ để:",
        o: [
          "Rạch dẫn lưu mủ",
          "Chườm nóng nhiều lần",
          "Tự nặn mủ",
          "Đắp lá thuốc",
        ],
        a: 0,
      },
      {
        q: "Mục tiêu điều trị chủ yếu trong viêm nhiễm vùng mặt là:",
        o: [
          "Giảm đau, giảm sưng, ngăn lan rộng nhiễm khuẩn",
          "Giảm sốt",
          "Làm đẹp vùng mặt",
          "Giảm mủ",
        ],
        a: 0,
      },
      {
        q: "Bệnh nhân viêm mô tế bào vùng mặt có khó há miệng, điều dưỡng cần:",
        o: [
          "Theo dõi đường thở",
          "Cho ăn đặc",
          "Đắp thuốc nam",
          "Chườm lạnh liên tục",
        ],
        a: 0,
      },
      {
        q: "Khi bệnh nhân có biểu hiện sưng lan nhanh lên mắt, cổ hoặc khó thở, điều dưỡng cần:",
        o: [
          "Cho chườm ấm",
          "Cho uống thuốc giảm đau",
          "Theo dõi thêm",
          "Báo bác sĩ khẩn cấp, chuẩn bị đường thở",
        ],
        a: 3,
      },
      {
        q: "Thuốc điều trị chủ yếu trong viêm nhiễm vùng mặt là:",
        o: [
          "Kháng sinh, thuốc giảm đau, kháng viêm",
          "Vitamin tổng hợp",
          "Thuốc ngủ",
          "Hạ sốt đơn thuần",
        ],
        a: 0,
      },
      {
        q: "Hướng dẫn bệnh nhân sau điều trị viêm nhiễm vùng mặt:",
        o: [
          "Không cần đánh răng",
          "Vệ sinh răng miệng tốt, điều trị triệt để răng nguyên nhân",
          "Dừng kháng sinh sớm khi đỡ",
          "Uống nước lạnh để giảm sưng",
        ],
        a: 1,
      },
      {
        q: "Giáo dục sức khỏe phòng viêm nhiễm vùng mặt tập trung vào:",
        o: [
          "Giữ vệ sinh răng miệng, khám răng định kỳ, không tự ý nặn mụn vùng mặt",
          "Dùng kháng sinh dự phòng",
          "Chườm ấm hằng ngày",
          "Hạn chế cười nói",
        ],
        a: 0,
      },
      {
        q: "Nguyên nhân thường gặp của viêm kết mạc cấp là:",
        o: [
          "Do khô mắt",
          "Virus, vi khuẩn, dị ứng hoặc kích thích hóa chất",
          "Do viêm xoang",
          "Do tăng nhãn áp",
        ],
        a: 1,
      },
      {
        q: "Triệu chứng đặc trưng của viêm kết mạc là:",
        o: [
          "Đỏ mắt, cộm, chảy nước mắt, ghèn",
          "Đau nhức sâu trong hốc mắt",
          "Mắt nhìn mờ không đau",
          "Mất thị lực đột ngột",
        ],
        a: 0,
      },
      {
        q: "Đặc điểm phân biệt viêm kết mạc do vi khuẩn là:",
        o: [
          "Ghèn đặc, màu vàng hoặc xanh",
          "Chảy nước trong",
          "Không ghèn",
          "Ngứa nhiều",
        ],
        a: 0,
      },
      {
        q: "Viêm kết mạc do virus thường kèm theo:",
        o: [
          "sốt",
          "Chảy nước mắt trong, sưng hạch trước tai",
          "Mủ nhiều",
          "Loét giác mạc ngay lập tức",
        ],
        a: 1,
      },
      {
        q: "Điều dưỡng khi chăm sóc người bệnh viêm kết mạc cần:",
        o: [
          "Hướng dẫn rửa mắt bằng nước muối sinh lý, tránh dụi mắt",
          "Đắp lá thuốc",
          "Rửa mắt bằng nước lạnh",
          "Không cần vệ sinh",
        ],
        a: 0,
      },
      {
        q: "Trong viêm kết mạc do vi khuẩn, thuốc nhỏ mắt thường dùng là:",
        o: [
          "Kháng sinh nhỏ mắt (như chloramphenicol, tobramycin)",
          "Thuốc co mạch",
          "Corticoid đơn thuần",
          "Vitamin nhỏ mắt",
        ],
        a: 0,
      },
      {
        q: "Nguyên tắc nhỏ thuốc vào mắt đúng là:",
        o: [
          "Nhỏ vào cùng đồ dưới, không chạm đầu lọ vào mắt",
          "Nhỏ trực tiếp lên giác mạc",
          "Nhỏ thuốc nhiều lần liên tục",
          "Dùng chung lọ thuốc",
        ],
        a: 0,
      },
      {
        q: "Nguyên nhân chủ yếu gây viêm loét giác mạc là:",
        o: [
          "Nhiễm khuẩn sau chấn thương, dị vật, đeo kính áp tròng không đúng cách",
          "Viêm kết mạc dị ứng",
          "Do tăng nhãn áp",
          "Do bệnh tiểu đường",
        ],
        a: 0,
      },
      {
        q: "Dấu hiệu lâm sàng đặc trưng của viêm loét giác mạc là:",
        o: [
          "Vết loét tròn, đục, có quầng thâm quanh",
          "Đỏ nhẹ quanh giác mạc",
          "Mắt bình thường",
          "Không thấy tổn thương",
        ],
        a: 0,
      },
      {
        q: "Biến chứng nặng của viêm loét giác mạc là:",
        o: [
          "Thủng giác mạc, viêm mủ tiền phòng, mù lòa",
          "Đau đầu",
          "Viêm xoang",
          "Viêm tai",
        ],
        a: 0,
      },
      {
        q: "Trong chăm sóc bệnh nhân viêm loét giác mạc, điều dưỡng cần lưu ý:",
        o: [
          "Tuyệt đối không tự ý dùng corticoid nhỏ mắt",
          "Nhỏ thuốc giảm đau tùy ý",
          "Tự rửa bằng nước lã",
          "Bịt chặt cả hai mắt",
        ],
        a: 0,
      },
      {
        q: "Thuốc thường dùng trong viêm loét giác mạc do vi khuẩn là:",
        o: [
          "dung dịch muối",
          "Corticoid nhỏ mắt",
          "Kháng sinh nhỏ mắt phổ rộng",
          "Vitamin nhỏ mắt",
        ],
        a: 2,
      },
      {
        q: "Khi nhỏ nhiều loại thuốc vào mắt, điều dưỡng cần:",
        o: [
          "Cách nhau ít nhất 5–10 phút",
          "Nhỏ liên tục các loại cùng lúc",
          "Nhỏ ngẫu nhiên",
          "Trộn thuốc lại",
        ],
        a: 0,
      },
    ],
  },
];
export default QUIZ_SETS_RHM;
