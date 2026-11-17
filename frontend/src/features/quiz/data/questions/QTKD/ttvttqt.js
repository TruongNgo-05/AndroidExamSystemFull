const QUIZ_SETS_TTQT = [
  {
    id: "tien_te_thanh_toan_quoc_te",
    majorId: "quan_tri_kinh_doanh",
    title: "Tiền tệ quốc tế & Thanh toán quốc tế",
    description:
      "Ôn tập trắc nghiệm môn Tiền tệ quốc tế & Thanh toán quốc tế (2 tín chỉ): tỷ giá, kỳ hạn, hối phiếu, séc, L/C, nhờ thu, chuyển tiền và hạch toán ngoại tệ.",
    questions: [
      {
        q: "Hối đoái là gì?",
        o: [
          "Là quan hệ thanh toán quốc tế",
          "Là thanh toán chuyển khoản qua NH bằng ngoại tệ",
          "Là sự chuyển đổi từ đồng tiền này sang đồng tiền khác",
          "Là buôn bán ngoại tệ trên thị trường",
        ],
        a: 2,
      },
      {
        q: "Thị trường nào được coi là trung tâm của thị trường ngoại hối?",
        o: [
          "Thị trường chứng khoán, nơi mua bán các chứng khoán bằng ngoại tệ",
          "Thị trường tiền tệ London nước Anh",
          "Nơi giao dịch giữa các NH thương mại và các công ty xuất nhập khẩu có ngoại tệ",
          "Thị trường ngoại tệ liên NH",
        ],
        a: 3,
      },
      {
        q: "Các doanh nghiệp tham gia thị trường kỳ hạn nhằm mục đích gì?",
        o: [
          "Kiếm lợi nhuận về chênh lệnh tỷ giá",
          "Thực hiện chính sách tiền tệ quốc gia",
          "Để bảo hiểm rủi ro tỷ giá và hạn chế ảnh hưởng của lãi suất",
          "Được mua bán ngoại tệ phục vụ thanh toán XNK.",
        ],
        a: 2,
      },
      {
        q: "Tỷ giá chéo là",
        o: [
          "Tỷ giá không tính theo đường thẳng mà tính theo đường chéo",
          "Tỷ giá không tính toán trực tiếp, mà tính toán gián tiếp",
          "Tỷ giá giữa hai đồng tiền được tính toán thông qua một “rổ” gồm nhiều đồng tiền mạnh",
          "Tỷ giá giữa hai đồng tiền được tình toán thông qua đồng tiền thứ ba.",
        ],
        a: 3,
      },
      {
        q: "Hãy chú thích các mũi tên (4) (5) (6) (7) trong sơ đồ dưới đây về lưu thông séc qua hai Ngân hàng.",
        image: "image/QTKD/ttqt/hinh-01.png",
        imageAlt:
          "Sơ đồ lưu thông séc qua hai ngân hàng, gồm ngân hàng bên mua, ngân hàng bên bán, người mua, người bán và các mũi tên đánh số",
        o: [
          "(4) Chuyển tiền sang Ngân hàng bên mua, (5) ghi Có báo Có, (6) chuyển nợ sang Ngân hàng bên bán, (7) Ghi Nợ, báo Nợ.",
          "(4) Chuyển nợ sang Ngân hàng bên mua, (5) ghi nợ, báo nợ người mua, (6) chuyển tiền sang Ngân hàng bên bán, (7) ghi Có báo Có người bán.",
          "(4) Chuyển séc sang Ngân hàng bên mua, (5) ghi nợ, báo nợ người mua, (6) chuyển tiền sang Ngân hàng bên bán, (7) Ghi Có, báo Có người bán.",
          "(4) Chuyển séc sang Ngân hàng bên mua, (5) ghi Có báo Có người mua, (6) chuyển tiền sang Ngân hàng bên bán, (7) Ghi Có, báo Có người bán.",
        ],
        a: 2,
      },
      {
        q: "Hãy chú thích các mũi tên trong sơ đồ dưới đây về quy trình chuyển tiền kiều hối?",
        image: "image/QTKD/ttqt/hinh-02.png",
        imageAlt:
          "Sơ đồ quy trình chuyển tiền giữa NH chuyển tiền, NH thanh toán, người chuyển tiền và người thụ hưởng, các mũi tên đánh số",
        o: [
          "(1) Giao hàng, giao chứng từ (2) chuyển tiền (3) chuyển tiền sang NH thanh toán (4) ghi Có, báo Có.",
          "(1) Giao hàng, giao chứng từ (2) giao séc hoặc lệnh phiếu, (3) Chuyển séc lệnh phiếu sang NH thanh toán (4) Ghi Có, báo Có.",
          "(1) Không Có nghiệp vụ này (2) chuyển tiền (3) chuyển tiền sang NH thanh toán (4) Ghi Có, báo Có.",
          "(1) Không Có quan hệ này (2) làm thủ tục chuyển tiền (nộp tiền hoặc trích tài khoản) (3) chuyển tiền tới NH thanh toán (4) ghi Có, báo Có cho người thụ hưởng.",
        ],
        a: 3,
      },
      {
        q: "Hãy chú thích các mũi tên trong sơ đồ dưới đây về quy trình thanh toán chuyển tiền thanh toán XNK",
        image: "image/QTKD/ttqt/hinh-03.png",
        imageAlt:
          "Sơ đồ quy trình chuyển tiền giữa NH chuyển tiền, NH thanh toán, người mua và người bán, các mũi tên đánh số",
        o: [
          "(1) Giao hàng, (2) giao lệnh phiếu (3) chuyển lệnh phiếu sang NH bên bán (4) chuyển lệnh phiếu cho người bán.",
          "(1) Giao hàng, (2) giao hối phiếu, (3) chuyển hối phiếu sang NH bên bán, (4) chuyển hối phiếu cho người bán",
          "(1) Giao hàng, (2) chuyển tiền, (3) chuyển tiền sang NH bên bán, (4) Ghi Có người bán.",
          "(1) Giao hàng và chứng từ (2) làm thủ tục yêu cầu NH chuyển tiền, (3) NH chuyển tiền, (4) NH bên bán Ghi Có báo Có cho người bán.",
        ],
        a: 3,
      },
      {
        q: "Công ty XNK Việt Nam trích tài khoản tiền gửi tại Ngân hàng Ngoại thương chi nhánh HN chuyển trả cho hãng Honda Nhật tại NH Tokyo, số tiền 30.000USD. Tại Ngân hàng Ngoại thương Việt Nam chi nhánh HN hạch toán như thế nào ?",
        o: [
          "Nợ TK 4221 (TG Cty XNK, USD): 30.000\nCó TK TG của Cty Honda Nhật: 30.000",
          "Nợ TK 4221 (TG Cty XNK, USD): 30.000\nCó TK 1331 (USD, TG NH ngoại thương): 30.000",
          "Nợ TK 4221 (TG Cty XNK, USD): 30.000\nCó TK 5191- Điều chuyển vốn (NH ngoại thương VN): 30.000",
          "Nợ TK 4221 (TG Cty XNK, USD): 30.000\nCó TK 455- Chuyển tiền phải trả: 30.000",
        ],
        a: 2,
      },
      {
        q: "Hãy chú thích các mũi tên (1), (2), (3) trong sơ đồ dưới đây về thanh toán nhờ thu phiếu trơn.",
        image: "image/QTKD/ttqt/hinh-04.png",
        imageAlt:
          "Sơ đồ nhờ thu giữa NH thu hộ, NH đại lý, người xuất khẩu và người nhập khẩu, các mũi tên đánh số từ 1 đến 7",
        o: [
          "(1) Trả tiền, (2) làm thủ tục trả tiền tại Ngân hàng, (3) NH chuyển tiền",
          "(1) Giao hàng, (2) lập hối phiếu gửi NH nhờ NH thu tiền, (3) NH chuyển hối phiếu sang NH đại lý",
          "(1) Giao hàng, (2) giao bộ chứng từ hàng hoá nhờ NH thu, (3) NH chuyển trả tiền.",
          "(1) Giao hàng, (2) gửi hối phiếu và bộ chứng từ giao hàng, (3) NH chuyển bộ chứng từ hàng hoá sang NH đại lí.",
        ],
        a: 1,
      },
      {
        q: "Tại NH mở L/C, một người nhập khẩu xin mở một L/C trị giá 100.000 JPY. Người nhập khẩu ký quỹ đảm bảo 30.000 bằng cách trích từ tiền gửi thanh toán. NH mở L/C hạch toán như thế nào?",
        o: [
          "Nợ TK người nhập khẩu 30.000\nNợ TK mở L/C 70.000\nCó TK người xuất khẩu 100.000",
          "Nợ TK người nhập khẩu 100.000\nCó TK ký quỹ mở L/C 100.000",
          "Nợ TK tiền gửi người nhập khẩu 30.000\nCó TK ký quỹ đảm bảo L/C 30.000",
          "Nợ TK tiền gửi người nhập khẩu 30.000\nNợ TK tạm ứng ngoại tệ 70.000\nCó TK ký quỹ đảm bảo L/C 100.000",
        ],
        a: 2,
      },
      {
        q: "Trong thanh toán quốc tế, một vận đơn vận tải phải có chữ kí của ai?",
        o: [
          "Người xuất khẩu, người giao hàng",
          "Người chuyên chở hoặc người thay mặt chuyên chở",
          "Thuyền trưởng hoặc người thay mặt thuyền trưởng",
          "Người chuyên chở (hoặc đại diện); hoặc thuyền trưởng (hoặc đại lý)",
        ],
        a: 3,
      },
      {
        q: "Trong Incoterms FOB là điều khoản gì?",
        o: [
          "Giao hàng tại xưởng",
          "Tiền hàng và cước phí",
          "Giao hàng trên tàu",
          "Tiền bảo hiểm",
        ],
        a: 2,
      },
      {
        q: "Tại một NH tỷ giá gián tiếp của 2 đồng tiền được yết giá như sau:\nUSD/CAD = 1,3945 – 55\nUSD/JPY = 110,75 – 85\nHãy tính tỷ giá chéo JPY/CAD",
        o: [
          "1,3945/110,75 và 1,3955/110,85",
          "1,3945/110,85 và 1,3955/110,75",
          "110,75/1,3945 và 110,85/1,3955",
          "110,85/1,3945 và 110,75/1,3955",
        ],
        a: 1,
      },
      {
        q: "Nội dung quan trọng nhất trong vận đơn để thanh toán quốc tế là cần thể hiện điều gì?",
        o: [
          "Tên người xuất khẩu",
          "Tên thuyền trưởng",
          "Mô tả hàng hoá",
          "Hàng đã được xếp lên tàu",
        ],
        a: 3,
      },
      {
        q: "Một hối phiếu trong đó không ghi thời gian thanh toán thì được coi là hối phiếu gì?",
        o: [
          "Kí phát cho chính mình",
          "Không được thanh toán",
          "Được coi là thanh toán sau 6 tháng",
          "Được coi là thanh toán ngay khi xuất trình",
        ],
        a: 3,
      },
      {
        q: "CFR là điều khoản gì?",
        o: [
          "Tiền hàng và cước phí",
          "Tiền hàng và bảo hiểm",
          "Tiền vận chuyển",
          "Bảo hiểm và cước phí",
        ],
        a: 0,
      },
      {
        q: "Tỷ giá giao ngay của đồng AUD được niêm yết trực tiếp, đồng JPY được niêm yết gián tiếp như sau:\nAUD/USD = 0,7166 – 72\nUSD/JPY = 108,75 – 85\nHãy tính tỷ giá chéo AUD/JPY",
        o: [
          "0,7166 x 108,85 và 0,7172 x 108,75",
          "0,7166 x 108,75 và 0,7172 x 108,85",
          "0,7166 x 108,85 và 0,7172 x 108,85",
          "0,7172 x 108,75 và 0,7172 x 108,85",
        ],
        a: 1,
      },
      {
        q: "Tỷ giá giao ngay đồng GBP được yết giá trực tiếp, đồng JPY được yết giá gián tiếp như sau:\nGBP/USD = 1,4540 – 50\nUSD/JPY = 108,75 – 85\nHãy tính tỷ giá chéo GBP/JPY",
        o: [
          "1,4540 x 108,85 và 1,4540 x 108,75",
          "1,4550 x 108,85 và 1,4550 x 108,75",
          "1,4540 x 108,75 và 1,4550 x 108,85",
          "1,4550 x 108,75 và 1,4550 x 108,85",
        ],
        a: 2,
      },
      {
        q: "Khi nhận được chứng từ xuất trình trả tiền ngay phù hợp với L/C, nhưng ngân hàng chỉ định không trả tiền thì ngân hàng xác nhận phải làm gì?",
        o: [
          "Trả lại chứng từ cho người xuất khẩu",
          "Chuyển chứng từ cho ngân hàng phát hành",
          "Thương lượng với ngân hàng chỉ định",
          "Thanh toán ngay",
        ],
        a: 3,
      },
      {
        q: "Tại 1 Ngân hàng, tỷ giá giao ngay của 2 đồng tiền được yết giá trực tiếp như sau:\nGBP/USD = 1,6630 – 50\nEUR/USD = 1,2318 – 38\nHãy tính tỷ giá chéo EUR/GBP",
        o: [
          "1,6630/1,2338 và 1,6650/1,2318",
          "1,2338/1,6630 và 1,2318/1,6650",
          "1,2318/1,6650 và 1,2338/1,6630",
          "1,6630/1,2318 và 1,6650/1,2338",
        ],
        a: 2,
      },
      {
        q: "Tại một Ngân hàng, tỷ giá giao ngay của 2 đồng tiền được yết giá trực tiếp như sau:\nGBP/USD = 1,6630 – 50\nEUR/USD = 1,2318 – 38\nHãy tính tỷ giá chéo GBP/EUR",
        o: [
          "1,6630/1,2338 và 1,6650/1,2318",
          "1,2338/1,6630 và 1,2318/1,6650",
          "1,2388/1,6650 và 1,2318/1,6630",
          "1,6630/1,2318 và 1,6650/1,2338",
        ],
        a: 0,
      },
      {
        q: "Tỷ giá giao ngay của 1 đồng tiền được yết giá trực tiếp và 1 đồng tiền được yết giá gián tiếp được 1 ngân hàng niêm yết như sau:\nGBP/USD = 1,6560 – 70\nUSD/SGD = 1,8215 – 25\nHãy tính tỷ giá chéo GBP/SGD",
        o: [
          "1,6560 x 1,8225 và 1,6570 x 1,8215",
          "1,6560 x 1,8215 và 1,6570 x 1,8215",
          "1,6560 x 1,8215 và 1,6570 x 1,8225",
          "1,6570 x 1,8225 và 1,6560 x 1,8225",
        ],
        a: 2,
      },
      {
        q: "Khách hàng đến ngân hàng VCB HN bán 10.000 USD tiền mặt, và nhận thanh toán bằng chuyển khoản VND tại ngân hàng này. Hỏi VCB HN hạch toán thế nào biết tỷ giá USD/VND = 23.020- 50",
        o: [
          "BT1: Nợ TK 1031 (USD): 10.000\nCó TK 4711 (USD): 10.000\nBT2: Nợ TK 4712 (tiểu khoản USD): 230.200.000\nCó TK 1011: 230.200.000",
          "BT1: Nợ TK 1031 (USD): 10.000\nCó TK 4711 (USD): 10.000\nBT2: Nợ TK 4712 (tiểu khoản USD): 230.200.000\nCó TK 4211: 230.200.000",
          "BT1: Nợ TK 1031 (USD): 10.000\nCó TK 4711 (USD): 10.000\nBT2: Nợ TK 4211: 230.200.000\nCó TK 4712 (tiểu khoản USD): 230.200.000",
          "BT1: Nợ TK 4711 (USD): 10.000\nCó TK 1031 (USD): 10.000\nBT2: Nợ TK 4211: 230.200.000\nCó TK 4712 (tiểu khoản USD): 230.200.000",
        ],
        a: 1,
      },
      {
        q: "Khách hàng đến ngân hàng VCB HN mua 10.000 USD tiền mặt, và thanh toán bằng chuyển khoản VND (khách hang có tài khoản tại ngân hang này). Hỏi VCB HN hạch toán thế nào biết tỷ giá USD/VND = 23.020- 50",
        o: [
          "BT1: Nợ TK 1031 (USD): 10.000\nCó TK 4711 (USD): 10.000\nBT2: Nợ TK 4712 (tiểu khoản USD): 230.200.000\nCó TK 1011: 230.200.000",
          "BT1: Nợ TK 1031 (USD): 10.000\nCó TK 4711 (USD): 10.000\nBT2: Nợ TK 4712 (tiểu khoản USD): 230.200.000\nCó TK 4211: 230.200.000",
          "BT1: Nợ TK 1031 (USD): 10.000\nCó TK 4711 (USD): 10.000\nBT2: Nợ TK 4211: 230.200.000\nCó TK 4712 (tiểu khoản USD): 230.200.000",
          "BT1: Nợ TK 4711 (USD): 10.000\nCó TK 1031 (USD): 10.000\nBT2: Nợ TK 4211: 230.200.000\nCó TK 4712 (tiểu khoản USD): 230.200.000",
        ],
        a: 3,
      },
      {
        q: "NH cổ phần Á Châu điện sang NH Tokyo thoả thuận trích tài khoản 1.000 USD để mua 120.000 JPY (tỷ giá USD/JPY = 120). Tại NH cổ phần Á Châu hạch toán như thế nào?",
        o: [
          "Bút toán 1: Nợ TK 455 chuyển tiền phải trả (USD): 1.000\nCó TK 1331 (USD): 1.000\nBút toán 2: Nợ TK 1331 (JPY): 120.000\nCó TK 455 chuyển tiền phải trả (JPY): 120.000",
          "Bút toán 1: Nợ TK 4711 (USD): 1.000\nCó TK 1331 (USD): 1.000\nBút toán 2: Nợ TK 1331 (JPY): 120.000\nCó TK 4711 (JPY): 120.000",
          "Bút toán 1: Nợ TK 1331 (USD): 1.000\nCó TK 4711 (USD): 1.000\nBút toán 2: Nợ TK 4711 (JPY): 120.000\nCó TK 1331 (JPY): 120.000",
          "Bút toán 1: Nợ TK 1331 (USD): 1.000\nCó TK 4711 (USD): 1.000\nBút toán 2a: Nợ TK 455 chuyển tiền phải trả (JPY): 120.000\nCó TK 1331 (JPY): 120.000\nBút toán 2b: Nợ TK 4711 (JPY): 120.000\nCó TK 455 chuyển tiền phải trả (JPY): 12.000",
        ],
        a: 1,
      },
      {
        q: "NH Ngoại thương Việt Nam điện sang NH Paris (Pháp) và đã thoả thuận trích tài khoản 26.500 USD để mua 20.000 EUR (theo tỷ giá 1 EUR = 1,3250 USD). Tại NH Ngoại thương Việt Nam hạch toán như thế nào?",
        o: [
          "Bút toán 1: Nợ TK mua bán ngoại tệ KD (USD): 26.500\nCó TK tiền mặt (USD): 26.500\nBút toán 2: Nợ TK tiền mặt (EUR): 20.000\nCó TK mua bán ngoại tệ KD (EUR): 20.000",
          "Bút toán 1: Nợ TK tiền mặt (USD): 26.500\nCó TK mua bán ngoại tệ KD (USD): 26.500\nBút toán 2: Nợ TK mua bán ngoại tệ KD (EUR): 26.500\nCó TK tiền mặt (EUR): 26.500",
          "Bút toán 1: Nợ TK 4711 (USD): 26.500\nCó TK tiền gửi USD tại Pháp: 26.500\nBút toán 2: Nợ TK tiền gửi EUR tại Pháp: 20.000\nCó TK 4711 (EUR): 20.000",
          "Bút toán 1: Nợ TK tiền gửi USD tại Pháp: 26.500\nCó TK 455 chuyển tiền phải trả (USD): 26.500\nBút toán 2: Nợ TK 4711 (EUR): 20.000\nCó TK tiền gửi EUR tại Pháp: 20.000",
        ],
        a: 2,
      },
      {
        q: "Công ty XNK Việt Nam trích tài khoản tiền gửi tại Ngân hàng Ngoại thương VN chi nhánh BĐ chuyển trả cho hãng Honda Nhật tại NH Tokyo, số tiền 30.000USD. Tại Ngân hàng Ngoại thương Việt Nam chi nhánh BĐ hạch toán như thế nào ?",
        o: [
          "Nợ TK Tiền gửi Cty XNK = USD: 30.000\nCó TK Tiền gửi hãng Honda: 30.000",
          "Nợ TK Tiền gửi Cty XNK = USD: 30.000\nCó TK 455- Chuyển tiền phải trả: 30.000",
          "Nợ TK 1331- Tiền gửi của NH ngoại thương tại Tokyo: 30.000\nCó TK Tiền gửi Cty XNK = USD: 30.000",
          "Nợ TK Tiền gửi Cty XNK = USD: 30.000\nCó TK 5192- Thu hộ chi hộ: 30.000",
        ],
        a: 3,
      },
      {
        q: "Cho biết:\nPm, Pb: là điểm Swap mua và bán\nSm, Sb là tỷ giá mua và tỷ giá bán giao ngay\nRgd: là lãi suất tiền gửi đồng tiền định giá\nRvd: là lãi suất cho vay đồng tiền định giá\nRgy: là lãi suất tiền gửi đồng tiền yết giá\nRvy: là lãi suất cho vay đồng tiền yết giá\nt: là kỳ hạn\nĐiểm Swap Pm được tính theo công thức nào",
        o: [
          "Pm = Sm(Rvy - Rgy)t/360",
          "Pm = Sm(Rvd - Rgy)t/(1 + Rgy.t)",
          "Pm = Sm(Rgd - Rvy)t/(1 + Rvy.t)",
          "Pm = Sm(Rvy - Rgd)t/(1 + Rgd.t)",
        ],
        a: 2,
      },
      {
        q: "NH cổ phần Á Châu điện sang NH Tokyo thoả thuận trích tài khoản 1.000 USD để mua 120.000 JPY (tỷ giá USD/JPY = 120). Tại NH cổ phần Á Châu hạch toán như thế nào?",
        o: [
          "Bút toán 1: Nợ TK 1031 (USD): 1.000\nCó TK 1331 (USD): 1.000\nBút toán 2: Nợ TK 1331 (JPY): 12.000\nCó TK 1031 (JPY): 12.000",
          "Bút toán 1: Nợ TK 4711 (USD): 1.000\nCó TK 1331 (USD): 1.000\nBút toán 2: Nợ TK 1331 (JPY): 12.000\nCó TK 4711 (JPY): 12.000",
          "Bút toán 1: Nợ TK 1331 (USD): 1.000\nCó TK 4711 (USD): 1.000\nBút toán 2: Nợ TK 4711 (JPY): 12.000\nCó TK 1331 (JPY): 12.000",
          "Bút toán 1: Nợ TK 1331 (USD): 1.000\nCó TK 4711 (USD): 1.000\nBút toán 2: Nợ TK 4711 (JPY): 120.000\nCó TK 1331 (JPY): 120.000",
        ],
        a: 1,
      },
      {
        q: "NH Ngoại thương Việt Nam điện sang NH Paris (Pháp) và đã thoả thuận trích tài khoản 20.000 EUR để mua 26.500 USD. Tại NH Ngoại thương Việt Nam hạch toán như thế nào?",
        o: [
          "Bút toán 1: Nợ TK mua bán ngoại tệ KD (EUR): 26.500\nCó TK tiền mặt (EUR): 26.500\nBút toán 2: Nợ TK tiền mặt (USD): 20.000\nCó TK mua bán ngoại tệ KD (USD): 20.000",
          "Bút toán 1: Nợ TK tiền mặt (EUR): 26.500\nCó TK mua bán ngoại tệ KD (EUR): 26.500\nBút toán 2: Nợ TK mua bán ngoại tệ KD (USD): 26.500\nCó TK tiền mặt (USD): 26.500",
          "Bút toán 1: Nợ TK 4711 mua bán ngoại tệ KD (EUR): 20.000\nCó TK tiền gửi EUR tại Pháp: 20.000\nBút toán 2: Nợ TK tiền gửi USD tại Pháp: 26.500\nCó TK 4711 (USD): 26.500",
          "Bút toán 1: Nợ TK EUR tại Pháp: 26.500\nCó TK 455 chuyển tiền phải trả (EUR): 26.500\nBút toán 2: Nợ TK 4711 (USD): 20.000\nCó TK tiền gửi USD tại Pháp: 20.000",
        ],
        a: 2,
      },
      {
        q: "NH Công Thương Việt Nam điện sang Tokyo và thoả thuận trích TK 128.000 JPY để mua 1.000 USD (theo tỷ giá 1USD = 128 JPY). Tại NH Công Thương Việt Nam hạch toán như thế nào?",
        o: [
          "Bút toán 1: Nợ TK mua bán ngoại tệ KD (USD): 1.000\nCó TK tiền mặt (USD): 1.000\nBút toán 2: Nợ TK tiền mặt (JPY): 128.000\nCó TK mua bán ngoại tệ KD (JPY): 128.000",
          "Bút toán 1: Nợ TK mua bán ngoại tệ KD (USD): 1.000\nCó TK 455 – chuyển tiền phải trả (USD): 1.000\nBút toán 2: Nợ TK 455 (JPY): 128.000\nCó TK 4711 mua bán ngoại tệ (JPY): 128.000",
          "Bút toán 1: Nợ TK 4711 - Mua bán ngoại tệ (JPY): 128.000\nCó TK tiền gửi JPY tại Tokyo: 128.000\nBút toán 2: Nợ TK tiền gửi USD tại Tokyo: 1.000\nCó TK 4711 (USD): 1.000",
          "Bút toán 1: Nợ TK tiền gửi USD tại Pháp: 1.000\nCó TK 455 (USD): 1.000\nBút toán 2: Nợ TK 455 (JPY): 128.000\nCó TK tiền gửi JPY tại Tokyo: 128.000",
        ],
        a: 2,
      },
      {
        q: "Cho biết:\nPm, Pb: là điểm Swap mua và bán\nSm, Sb là tỷ giá mua và tỷ giá bán giao ngay\nRgd: là lãi suất tiền gửi đồng tiền định giá\nRvd: là lãi suất cho vay đồng tiền định giá\nRgy: là lãi suất tiền gửi đồng tiền yết giá\nRvy: là lãi suất cho vay đồng tiền yết giá\nt: là kỳ hạn\nĐiểm Swap Pb được tính theo công thức nào?",
        o: [
          "Pb = Sb(Rvy - Rgy)t/360",
          "Pb = Sb(Rvd - Rgy)t/(1 + Rgy.t)",
          "Pb = Sb(Rvy - Rgd)t/(1 + Rgd.t)",
          "Pb = Sm(Rgd - Rvy)t/(1 + Rvy.t)",
        ],
        a: 1,
      },
      {
        q: "Công thức nào dưới đây là công thức tính tỷ giá mua kỳ hạn?\nNếu gọi:\nFm: là tỷ giá mua kỳ hạn\nSm: là tỷ giá mua giao ngay\nRgd: là lãi suất tiền gửi đồng tiền định giá\nRvy: là lãi suất cho vay đồng tiền định giá\nt: là kỳ hạn",
        o: [
          "Fm = Sm + [Sm(Rgd - Rgy)t/(Rvy + t)]",
          "Fm = Sm + [Sm(Rgd - Rvy)t/(1 + Rvy.t)]",
          "Fm = Sm + [Sm(Rvd - Rvy)t/(1 + Rgd.t)]",
          "Fm = Sm + [Sm(Rgd - Rvy)t/(1 + Rvd)]",
        ],
        a: 1,
      },
      {
        q: "Công thức nào dưới đây là công thức tính tỷ giá bán kỳ hạn?\nNếu gọi:\nFb: là tỷ giá mua kỳ hạn\nSb: là tỷ giá mua giao ngay\nRgd: là lãi suất tiền gửi đồng tiền định giá\nRvy: là lãi suất cho vay đồng tiền định giá\nt: là kỳ hạn",
        o: [
          "Fb = Sb + [Sb(Rgy - Rvd)t/(1 + Rgy)]",
          "Fb = Sb + [Sb(Rvd - Rgy)t/(1 + Rgy.t)]",
          "Fb = Sb + [Sb(Rgy - Rvd)t/(1 + Rvy.t)]",
          "Fb = Sb + [Sb(Rgd - Rvd)/(1 - Rgy.t)]",
        ],
        a: 1,
      },
      {
        q: "Công ty Vạn Xuân làm thủ tục trích tiền gửi 300.000 EUR chuyển đổi sang USD chuyển vào tài khoản tiền gửi.\nTỷ giá giao ngay:\nUSD/VND = 19.000 và 19.100.\nEUR/VND = 25.021 và 25.460.\nYêu cầu:\n- Công ty Vạn Xuân được chuyển vào tài khoản tiền gửi bao nhiêu (USD nhận được)?\n- Hạch toán vào các tài khoản thích hợp.",
        o: [
          "USD nhận được: 300.000 x (25.021/19.000) = 395.068\nGhi Nợ TK tiền gửi USD: 395.068\nCó TK tiền gửi EUR: 395.068",
          "USD nhận được: 300.000 x (25.021/19.100) = 393.000\nGhi Nợ TK tiền gửi EUR: 300.000\nCó TK 4711 EUR: 300.000\nvà Nợ TK 4711 USD: 393.000\nCó TK tiền gửi USD: 393.000.",
          "USD nhận được: 300.000 x (25.460/19.100) = 402.000\nGhi Nợ TK tiền gửi EUR: 300.000\nCó TK 4711 EUR: 300.000\nvà Nợ TK 4711 USD: 402.000\nCó TK tiền gửi USD: 402.000.\nĐồng thời ghi:\nNợ TK 4712 tiểu khoản USD: (402.000 x 19.000) = 7.638 triệu VND\nCó TK 4712 tiểu khoản EUR: 7.638 triệu VND",
          "USD nhận được: 300.000 x (25.021/19.100) = 393.000\nGhi Nợ TK tiền gửi EUR: 300.000\nCó TK 4711 EUR: 300.000\nvà Nợ TK 4711 USD: 393.000\nCó TK tiền gửi USD: 393.000\nĐồng thời ghi:\nNợ TK 4712 tiểu khoản EUR: (300.000 x 25.021) = 7.506 triệu VND\nCó TK 4712 tiểu khoản USD: 7.506 triệu VND.",
        ],
        a: 3,
      },
      {
        q: "Hãy chú thích các mũi tên (4), (5), (6) trong sơ đồ dưới đây về thanh toán nhờ thu phiếu trơn sau ?",
        image: "image/QTKD/ttqt/hinh-04.png",
        imageAlt:
          "Sơ đồ nhờ thu giữa NH thu hộ, NH đại lý, người xuất khẩu và người nhập khẩu, các mũi tên đánh số từ 1 đến 7",
        o: [
          "(4) NH đại lý trích tài khoản để thanh toán ; (5) Người nhập khẩu chấp nhận ; (6) NH đại lý chuyển tiền đi",
          "(4) NH đại lý yêu cầu người nhập khẩu trả tiền ; (5) Người nhập khẩu giao bộ chứng từ và lệnh phiếu ; (6) NH chuyển tiền.",
          "(4) NH yêu cầu người nhập khẩu trả tiền ; (5) Người nhập khẩu làm thủ tục trả tiền ; (6) NH trích tài khoản người nhập khẩu, chuyển tiền sang NH bên xuất khẩu.",
          "(4) NH gửi hối phiếu và bộ chứng từ cho người nhập khẩu ; (5) Người nhập khẩu trả tiền ; (6) Ngân hàng chuyển tiền sang NH bên xuất khẩu.",
        ],
        a: 2,
      },
      {
        q: "Hãy chú thích các mũi tên (5), (6), (7) trong sơ đồ dưới đây về phương thức thanh toán tín dụng chứng từ trong trường hợp NH xác nhận thanh toán tiền ngay, người xuất khẩu gửi đầy đủ chứng từ hợp lệ ?",
        image: "image/QTKD/ttqt/hinh-05.png",
        imageAlt:
          "Sơ đồ tín dụng chứng từ gồm NH mở L/C, NH thông báo đồng thời là NH xác nhận, người nhập khẩu, người xuất khẩu, các mũi tên đánh số từ 1 đến 10",
        o: [
          "(5) gửi hối phiếu và bộ chứng từ hàng hoá; (6) chấp nhận hối phiếu; (7) gửi bộ chứng từ sang NH mở L/C.",
          "(5) Gửi bộ chứng từ tới NH thông báo; (6) NH Ghi Có, báo Có; (7) NH thông báo ghi nợ NH mở L/C.",
          "(5) Ghi Nợ NH thông báo; (6) Ghi Có, báo Có cho người xuất khẩu; (7) đòi tiền NH mở L/C.",
          "(5) Gửi hối phiếu tới NH thông báo; (6) NH chấp nhận thanh toán; (7) NH thông báo Ghi Nợ NH mở L/C.",
        ],
        a: 1,
      },
      {
        q: "Một khách hàng đem đến ngân hàng 10.000 USD tiền mặt để chuyển đổi ngoại tệ sang JPY\nTỷ giá giao ngay:\nUSD/VND = 19.000 và 19.100.\nJPY/VND = 246 và 250.\nTính xem khách hàng này đổi (nhận) được bao nhiêu JPY?",
        o: [
          "10.000 x (19.000/246) = 77.236 JPY",
          "10.000 x (19.100/250) = 76.400 JPY",
          "10.000 x (19.100/246) = 77.600 JPY",
          "10.000 x (19.000/250) = 76.000 JPY",
        ],
        a: 3,
      },
      {
        q: "Hãy chú thích các mũi tên (1) (3) (4) (5) trong sơ đồ dưới đây về lưu thông séc qua hai ngân hàng ?",
        image: "image/QTKD/ttqt/hinh-01.png",
        imageAlt:
          "Sơ đồ lưu thông séc qua hai ngân hàng, gồm ngân hàng bên mua, ngân hàng bên bán, người mua, người bán và các mũi tên đánh số",
        o: [
          "(1) Giao hàng, (3) thanh toán qua Ngân hàng, (4) Ngân hàng bên bán chuyển tiền sang Ngân hàng bên mua (5) ghi có cho người mua.",
          "(1) Giao séc, (3) nộp séc (4) chuyển tiền qua hai ngân hàng, (5) Ghi Nợ, báo Nợ người mua.",
          "(1) Giao séc (3) nộp séc, (4) Ngân hàng bên bán chuyển séc sang Ngân hàng bên mua (5) Ngân hàng bên mua ghi Nợ, báo Nợ người mua.",
          "(1) giao séc và lấy hàng (3) nộp séc (4) Ngân hàng bên bán chuyển nợ qua Ngân hàng bên mua, (5) Ghi có, báo có người mua.",
        ],
        a: 2,
      },
      {
        q: "Ngân hàng Đầu tư Việt Nam nhận được một chuyển tiền (kiều hối) từ ngân hàng đại lý của Việt Nam ở Pháp chuyển về 5.000USD. Người thụ hưởng là ông Tám. Ngân hàng báo cho ông Tám. Ông Tám đã lĩnh tiền mặt NH Đầu tư Việt Nam chi nhánh Ba Đình. Hỏi tại NH Đầu tư Việt Nam (Hội sở) hạch toán như thế nào ?",
        o: [
          "Nợ TK 1331- Tiền gửi của NH BIDV tại Pháp (USD): 5.000\nCó TK 1031- Tiền mặt ngoại tệ (USD): 5.000",
          "Nợ TK 455- Chuyển tiền phải trả: 5.000\nCó TK 1031- Tiền mặt USD: 5.000",
          "BT1: Nợ TK 5191- Điều chuyển vốn: 5.000\nCó TK 455- Chuyển tiền phải trả: 5.000\nBT2: Nợ TK 455- Chuyển tiền phải trả: 5.000\nCó TK 1031- Tiền mặt USD: 5.000",
          "Nợ TK 1331- Tiền gửi của NH BIDV tại Pháp (USD): 5.000\nCó TK 5191- Điều chuyển vốn: 5.000",
        ],
        a: 3,
      },
      {
        q: "Hãy chú thích các mũi tên (1), (2), (3) trong sơ đồ dưới đây về nhờ thu hối phiếu kèm chứng từ?",
        image: "image/QTKD/ttqt/hinh-04.png",
        imageAlt:
          "Sơ đồ nhờ thu giữa NH thu hộ, NH đại lý, người xuất khẩu và người nhập khẩu, các mũi tên đánh số từ 1 đến 7",
        o: [
          "(1) Giao hàng, hối phiếu và bộ chứng từ ; (2) Nhờ NH thu tiền ; (3) NH đổi tiền từ NH đại lý",
          "(1) Giao hàng và bộ chứng từ ; (2) gửi hối phiếu nhờ NH thu hộ tiền ; (3) NH chuyển hối phiếu và bộ chứng từ sang NH đại lý.",
          "(1) Giao hàng ; (2) gửi hối phiếu và bộ chứng từ hàng hoá tới NH đại lý ; (3) NH thu hộ gửi hối phiếu và bộ chứng từ sang NH đại lý.",
          "(1) Giao hàng ; (2) Gửi hối phiếu và bộ chứng từ hàng hoá tới NH thu hộ ; (3) NH thu hộ gửi hối phiếu sang NH đại lý.",
        ],
        a: 2,
      },
      {
        q: "Hãy chú thích các mũi tên (3), (4), (5) trong sơ đồ dưới đây về nhờ thu hối phiếu kèm chứng từ?",
        image: "image/QTKD/ttqt/hinh-04.png",
        imageAlt:
          "Sơ đồ nhờ thu giữa NH thu hộ, NH đại lý, người xuất khẩu và người nhập khẩu, các mũi tên đánh số từ 1 đến 7",
        o: [
          "(3) Chuyển hối phiếu đến NH đại lý ; (4) Gửi hối phiếu cho người nhập khẩu yêu cầu trả tiền ; (5) Trả tiền.",
          "(3) Chuyển hối phiếu và bộ chứng từ hàng hoá sang NH đại lý ; (4) chuyển hối phiếu và bộ chứng từ hàng hoá cho người nhập khẩu ; (5) Người nhập khẩu trả tiền.",
          "(3) Chuyển hối phiếu và bộ chứng từ hàng hoá sang NH đại lý ; (4) Yêu cầu người nhập khẩu chấp nhận hối phiếu hoặc thanh toán ; (5) Người nhập khẩu làm thủ tục trả tiền.",
          "(3) Chuyển bộ chứng từ hàng hoá sang NH đại lý ; (4) NH đại lý ghi Nợ, báo Nợ người nhập khẩu ; (5) chuyển tiền sang NH thu hộ để trả cho người xuất khẩu.",
        ],
        a: 2,
      },
      {
        q: "Hãy chú thích các mũi tên (1), (2), (3), (4) trong sơ đồ dưới đây về phương thức thanh toán tín dụng chứng từ ?",
        image: "image/QTKD/ttqt/hinh-06.png",
        imageAlt:
          "Sơ đồ tín dụng chứng từ gồm NH mở L/C, NH thông báo (NH xác nhận), người nhập khẩu, người xuất khẩu, các mũi tên đánh số từ 1 đến 10",
        o: [
          "(1) Trích tiền trên tài khoản; (2) chuyển tiền sang NH thông báo; (3) Ghi Có báo Có; (4) Giao hàng.",
          "(1) Mở L/C; (2) chuyển tiền; (3) ghi Có báo Có; (4) Giao hàng.",
          "(1) Mở L/C; (2) Thông báo L/C tới NH thông báo; (3) Thông báo L/C tới người xuất khẩu; (4) giao hàng.",
          "(1) Ký quỹ mở L/C; (2) thông báo L/C tới ngân hàng thông báo; (3) NH thông báo ghi Có báo Có cho người xuất khẩu; (4) giao hàng.",
        ],
        a: 2,
      },
      {
        q: "Hãy chú thích các mũi tên (4), (5), (6), (7) trong sơ đồ dưới đây về phương thức thanh toán tín dụng chứng từ với điều kiện NH mở L/C thanh toán xong mới báo Nợ cho người nhập khẩu ?",
        image: "image/QTKD/ttqt/hinh-06.png",
        imageAlt:
          "Sơ đồ tín dụng chứng từ gồm NH mở L/C, NH thông báo (NH xác nhận), người nhập khẩu, người xuất khẩu, các mũi tên đánh số từ 1 đến 10",
        o: [
          "(4) Giao hàng; (5) gửi bộ chứng từ và hối phiếu tới NH thông báo; (6) gửi hối phiếu và chứng từ sang NH mở L/C; (7) chuyển tiền thanh toán.",
          "(4) Gửi hối phiếu tới người nhập khẩu; (5) gửi bộ chứng từ hàng hoá tới NH; (6) gửi tiếp bộ chứng từ hàng hoá; (7) thanh toán tiền.",
          "(4) giao hàng; (5) gửi hối phiếu tới NH; (6) chuyển hối phiếu sang NH mở L/C; (7) chấp nhận hối phiếu.",
          "(4) Gửi hối phiếu và bộ chứng từ hàng hoá; (5) gửi trả lại bản thông báo L/C trước đây đã nhận từ NH; (6) gửi giấy đổi tiền tới NH mở L/C; (7) chấp nhận thanh toán.",
        ],
        a: 0,
      },
      {
        q: "Tại NH phục vụ người nhập khẩu trước đây đã mở một L/C 200.000USD cho công ty Chiến Thắng, trong đó công ty có kí quỹ đảm bảo thanh toán L/C 60.000USD. Nay NH thông báo gửi bộ chứng từ tới yêu cầu thanh toán 200.000USD theo L/C. Chứng từ hợp lệ. NH mở L/C hạch toán như thế nào?",
        o: [
          "Nợ TK Công ty Chiến Thắng 200.000\nCó TK người xuất khẩu 200.000",
          "Nợ TK Công ty Chiến Thắng 140.000\nNợ TK ký quỹ đảm bảo 60.000\nCó TK người xuất khẩu 200.000",
          "Nợ TK Công ty Chiến Thắng 140.000\nNợ TK ký quỹ đảm bảo 60.000\nCó TK tiền gửi NH mình tại NH Thông báo (TK NOSTRO) 200.000",
          "Nợ TK tiền gửi NH mình tại NH thông báo 200.000\nCó TK Công ty Chiến Thắng 140.000\nCó TK ký quỹ đảm bảo 60.000",
        ],
        a: 2,
      },
      {
        q: "NH Ngoại thương Việt Nam điện sang NH Berlin (Đức) và thỏa thuận trích tài khoản 12.000 USD chuyển đổi sang EUR (tỷ giá EUR/USD = 1,2).\nTại Việt Nam:\nUSD/VND = 20.000 – 20.060\nEUR/VND = 22.000 – 22.070",
        o: [
          "Bút toán 1: Nợ TK 1331 (USD): 12.000\nCó TK 1031 (USD): 12.000\nBút toán 2: Nợ TK 1031 (EUR): 10.000\nCó TK 1331 (EUR): 10.000\nBút toán 3: Nợ TK 4712 (tiểu khoản EUR): 220 triệu VND\nCó TK 4712 (tiểu khoản USD): 220 triệu VND",
          "Bút toán 1: Nợ TK 4711 (USD): 12.000\nCó TK 1331 (USD): 12.000\nBút toán 2: Nợ TK 1331 (EUR): 10.000\nCó TK 4711 (EUR): 10.000\nBút toán 3: Nợ TK 4712 (tiểu khoản EUR): 220 triệu VND\nCó TK 4712 (tiểu khoản USD): 220 triệu VND",
          "Bút toán 1: Nợ TK 1331 (USD): 12.000\nCó TK 4711 (USD): 12.000\nBút toán 2: Nợ TK 4711 (EUR): 10.000\nCó TK 1331 (EUR): 10.000\nBút toán 3: Nợ TK 4712 (tiểu khoản EUR): 220,7 triệu VND\nCó TK 4712 (tiểu khoản USD): 220,7 triệu VND",
          "Bút toán 1: Nợ TK 4711 (USD): 12.000\nCó TK 1331 (USD): 12.000\nBút toán 2: Nợ TK 1331 (EUR): 10.000\nCó TK 1031 (EUR): 10.000\nBút toán 3: Nợ TK 4712 (tiểu khoản EUR): 220,7 triệu VND\nCó TK 4712 (tiểu khoản USD): 220,7 triệu VND",
        ],
        a: 1,
      },
      {
        q: "NH Công Thương Việt Nam điện sang Tokyo và thoả thuận trích TK 1.000 USD để chuyển đổi sang JPY (theo tỷ giá 1USD = 128 JPY). Tại Việt Nam:\nUSD/VND = 21.000 – 21.040\nJPY/VND = 180 - 185\nTại NH Công Thương Việt Nam hạch toán như thế nào?",
        o: [
          "Bút toán 1: Nợ TK mua bán ngoại tệ KD (USD): 1.000\nCó TK tiền mặt (USD): 1.000\nBút toán 2: Nợ TK tiền mặt (JPY): 128.000\nCó TK mua bán ngoại tệ KD (JPY): 128.000\nBút toán 3: Nợ TK 4712 (tiểu khoản USD): 21 triệu VND\nCó TK 4712 (tiểu khoản JPY): 21 triệu VND",
          "Bút toán 1: Nợ TK 4711 mua bán ngoại tệ KD (USD): 1.000\nCó TK 455 – chuyển tiền phải trả (USD): 1.000\nBút toán 2: Nợ TK 455 – chuyển tiền phải trả (JPY): 128.000\nCó TK mua bán ngoại tệ (JPY): 128.000\nBút toán 3: Nợ TK 4712 (tiểu khoản USD): 21 triệu VND\nCó TK 4712 (tiểu khoản JPY): 21 triệu VND",
          "Bút toán 1: Nợ TK 4711 mua bán ngoại tệ (USD): 1.000\nCó TK tiền gửi USD tại Tokyo: 1.000\nBút toán 2: Nợ TK tiền gửi JPY tại Tokyo: 128.000\nCó TK 4711 (JPY): 128.000\nBút toán 3: Nợ TK 4712 (tiểu khoản JPY): 23,04 triệu VND\nCó TK 4712 (tiểu khoản USD): 23,04 triệu VND",
          "Bút toán 1: Nợ TK tiền gửi USD tại Pháp: 1.000\nCó TK 4711 (USD): 1.000\nBút toán 2: Nợ TK 4711 (JPY): 128.000\nCó TK tiền gửi JPY tại Tokyo: 128.000\nBút toán 3: Nợ TK 4712 (tiểu khoản JPY): 23,04 triệu VND\nCó TK 4712 (tiểu khoản USD): 23,04 triệu VND",
        ],
        a: 2,
      },
      {
        q: "Tỷ giá tại 3 thị trường như sau\nTại New york EUR/USD = 1,2240 – 60\nTại Tokyo USD/JPY = 110,20 – 50\nTại Paris EUR/JPY = 131,50 – 70\nMột nhà kinh doanh acbit có 100.000 USD sẽ điện đi những nơi nào mua tiền gì bán tiền gì?",
        o: [
          "Điện đi Tokyo bán 100.000 USD lấy 11.020.000 JPY sau đó điện đi Newyork bán 100.000 USD lấy 100.000 : 1,2240 = 81.699 EUR",
          "Điện đi Tokyo bán 100.000 USD lấy 11.020.000 JPY sau đó điện đi Paris bán 11.020.000 JPY lấy 11.020.000 : 131,70 = 83.675 EUR",
          "Điện đi Tokyo bán 100.000 USD lấy 11.020.000 JPY sau đó điện đi Paris bán 11.020.000 JPY lấy 83.675 EUR (= 11.020.000 : 131,70), tiếp theo điện đi Newyork bán 83.675 EUR lấy 83.675 x 1,2260 = 102.585 USD",
          "Điện đi Tokyo bán 100.000 USD lấy 11.020.000 JPY sau đó điện đi Paris bán 11.020.000 JPY lấy 11.020.000 : 131,70 = 83.675 EUR. Sau đó gọi sang Newyork trích tài khoản EUR 83.675 để lấy USD thu được là 83.675 x 1,2240 = 102.418 USD",
        ],
        a: 3,
      },
      {
        q: "NH Ngoại thương Việt Nam điện sang NH Berlin (Đức) và thoả thuận trích tài khoản 12.000 USD chuyển đổi sang EUR (tỷ giá EUR/USD = 1,2).\nTại Việt Nam:\nEUR/VND = 23.000 – 23.080\nUSD/VND = 21.000 – 21.040\nHạch toán tại NH Ngoại thương Việt Nam như thế nào?",
        o: [
          "Bút toán 1: Nợ TK 1331 (USD): 12.000\nCó TK 455 (USD): 12.000\nBút toán 2: Nợ TK 1331 (EUR): 10.000\nCó TK 455 (EUR): 10.000",
          "Bút toán 1: Nợ TK 4711 (USD): 12.000\nCó TK 1331 (USD): 12.000\nBút toán 2: Nợ TK 1331 (EUR): 10.000\nCó TK 4711 (EUR): 10.000\nBút toán 3: Nợ TK 4712 (tiểu khoản EUR): 230 triệu VND\nCó TK 4712 (tiểu khoản USD): 230 triệu VND",
          "Bút toán 1: Nợ TK 1331 (USD): 12.000\nCó TK 1031 (USD): 12.000\nBút toán 2: Nợ TK 4711 (EUR): 10.000\nCó TK 1331 (EUR): 10.000\nBút toán 3: Nợ TK 4712 (tiểu khoản EUR): 230,8 triệu VND\nCó TK 4712 (tiểu khoản USD): 230,8 triệu VND",
          "Bút toán 1: Nợ TK 4711 (USD): 12.000\nCó TK 1331 (USD): 12.000\nBút toán 2: Nợ TK 1031 (EUR): 10.000\nCó TK 4711 (EUR): 10.000\nBút toán 3: Nợ TK 4712 (tiểu khoản EUR): 230,8 triệu VND\nCó TK 4712 (tiểu khoản USD): 230,8 triệu VND",
        ],
        a: 1,
      },
      {
        q: "Tính tỷ giá mua kỳ hạn 90 ngày dựa theo các số liệu sau đây:\n- Tỷ giá giao ngay USD/JPY = 130,30 ----- 40\n- Lãi suất tiền gửi JPY: Rgd = 6,3%/năm\n- Lãi suất cho vay JPY: Rvd = 7,6%/năm\n- Lãi suất tiền gửi USD: Rgy = 5,8%/năm\n- Lãi suất cho vay USD: Rvy = 6,0%/năm",
        o: [
          "130,30 + [{130,30(0,076 - 0,058)90/360}/{1 + 0,058(90/360)}]",
          "130,40 + [{130,30(0,076 - 0,058)90/360}/{1 + 0,058(90/360)}]",
          "130,30 + [{130,30(0,06 - 0,076)90/360}/{1 + 0,076(90/360)}]",
          "130,30 + [{130,30(0,063 - 0,060)90/360}/{1 + 0,060(90/360)}]",
        ],
        a: 3,
      },
      {
        q: "Tính tỷ giá bán kỳ hạn 90 ngày dựa theo các số liệu sau đây:\n- Tỷ giá giao ngay USD/JPY = 110,30 ----- 40\n- Lãi suất tiền gửi JPY: Rgd = 6,3%/năm\n- Lãi suất cho vay JPY: Rvd = 7,6%/năm\n- Lãi suất tiền gửi USD: Rgy = 5,8%/năm\n- Lãi suất cho vay USD: Rvy = 6,0%/năm",
        o: [
          "110,40 + [{110,40(0,063 - 0,060)90/360}/{1 + 0,060(90/360)}]",
          "110,40 + [{110,40(0,076 - 0,058)90/360}/{1 + 0,058(90/360)}]",
          "110,30 + [{110,30(0,076 - 0,058)90/360}/{1 + 0,058(90/360)}]",
          "110,40 + [{110,40(0,076 - 0,060)90/360}/{1 + 0,060(90/3)}]",
        ],
        a: 1,
      },
      {
        q: "Tính tỷ giá mua kỳ hạn 60 ngày dựa theo các số liệu sau đây:\n- Tỷ giá giao ngay USD/VND = 15.600 ----- 30\n- Lãi suất tiền gửi VND: Rgd = 7,8%/năm\n- Lãi suất cho vay VND: Rvd = 11,4%/năm\n- Lãi suất tiền gửi USD: Rgy = 5,4%/năm\n- Lãi suất cho vay USD: Rvy = 6,7%/năm",
        o: [
          "Fm = 15.630 + [{15.630(11,4 - 7,8)60}/(1 + 6,7)]",
          "Fm = 15.600 + [{15.600(0,078 - 0,067)60/360}/{1 + 0,067(60/360)}]",
          "Fm = 15.600 + [{15.600(0,067 - 0,054)60/360}/{1 + 0,054(60/360)}]",
          "Fm = 15.600 + [{15.600(0,114 - 0,054)60/360}/{1 + 0,054(60/3)}]",
        ],
        a: 1,
      },
      {
        q: "Tính tỷ giá bán kỳ hạn 90 ngày dựa theo các số liệu sau đây:\n- Tỷ giá giao ngay USD/VND = 15.600 ----- 30\n- Lãi suất tiền gửi VND: Rgd = 7,8%/năm\n- Lãi suất cho vay VND: Rvd = 11,4%/năm\n- Lãi suất tiền gửi USD: Rgy = 5,4%/năm\n- Lãi suất cho vay USD: Rvy = 6,7%/năm",
        o: [
          "Fb = 15.630 + 15.600(11,4 - 7,8)90",
          "Fb = 15.630 + [{15.630(0,067 - 0,054)90/360}/{1 + 0,054(90/360)}]",
          "Fb = 15.630 + [{15.630(0,114 - 0,054)90/360}/{1 + 0,054(90/360)}]",
          "Fb = 15.630 + [{15.630(0,114 - 0,078)90/360}/{1 + 0,078(90/360)}]",
        ],
        a: 2,
      },
      {
        q: "Công ti Phúc Lộc mở một L/C 200.000 USD tại NH Công thương Việt Nam chi nhánh HK để mua hàng của hãng Toshiba, có tài khoản tại TokyoBank. Đã kí quỹ đảm bảo thanh toán L/C 40.000 USD. Đến hạn thanh toán, NH Công thương chi nhánh HK đã thanh toán cho TokyoBank toàn bộ số tiền theo L/C. NH Công thương Việt Nam chi nhánh HK hạch toán như thế nào khi mở L/C và khi thanh toán?",
        o: [
          "Khi mở L/C:\nNợ TK 4282 Kí quỹ 40.000\nCó TK 4221 Tiền gửi Phúc Lộc 40.000\nKhi thanh toán:\nNợ TK 1331 NOSTRO tại Tokyo 200.000\nCó TK 4282 Kí quỹ 200.000",
          "Khi mở L/C:\nNợ TK 4221 Tiền gửi Phúc Lộc 40.000\nCó TK 4282 Kí quỹ 40.000\nKhi thanh toán:\nNợ TK 4282 Kí quỹ 40.000\nNợ TK 1331 NOSTRO tại Tokyo 160.000\nCó TK 4221 Tiền gửi Phúc Lộc 200.000",
          "Khi mở L/C:\nNợ TK 4221 Tiền gửi Phúc Lộc 200.000\nCó TK 4282 Kí quỹ 40.000\nCó TK 1331 NOSTRO tại Tokyo 160.000\nKhi thanh toán:\nNợ TK 4282 Kí quỹ 40.000\nNợ TK 1331 NOSTRO tại Tokyo 160.000\nCó TK 4221 Tiền gửi Phúc Lộc 200.000",
          "Khi mở L/C:\nNợ TK 4221 Tiền gửi Phúc Lộc 40.000\nCó TK 4282 Kí quỹ 40.000\nKhi thanh toán:\nNợ TK 4221 Tiền gửi Phúc Lộc 160.000\nNợ TK 4282 Kí quỹ 40.000\nCó TK 5191- Điều chuyển vốn 200.000",
        ],
        a: 3,
      },
      {
        q: "Tỷ giá hối đoái trên các thị trường như sau:\n- Tại Paris EUR/JPY = 136,50 – 70\n- Tại Tokyo USD/JPY = 105,25 – 45\n- Tại NewYork EUR/USD = 1,2838 – 61\nMột nhà kinh doanh acbit có 200.000 USD sẽ hoạt động như thế nào trên các thị trường trên?",
        o: [
          "Điện đến Tokyo mua 200.000 USD trả 21.090.000 JPY; Sau đó điện đi Paris bán 200.000 USD thu 27.300.000 EUR.",
          "Điện đi Tokyo bán 200.000 USD thu được 21.090.000 JPY; Sau đó điện đi Paris bán số JPY hơn thu được 21.090.000 : 136,500 = 154.505.500 EUR; điện đi NewYork bán số EUR trên thu 198.353.500 USD.",
          "Điện đi NewYork bán 200.000 USD thu 155.508,9 EUR (200.000 : 1,2861); Điện đi Paris bán số EUR trên thu 21.226.965 JPY; điện đi Tokyo bán số JPY trên thu 201.298,8 USD.",
          "Điện đi NewYork bán 200.000 USD thu 200.000 : 1,2861 = 155.508 EUR; Điện đi Paris bán số EUR trên thu (155.508 x 136,70) thu 21.258.067 JPY; điện đi Tokyo bán số JPY trên thu (21.258.067 x 105,45) = 224.166 USD.",
        ],
        a: 2,
      },
      {
        q: "Một khách đem đến Ngân hàng 10.000 EUR tiền mặt để đổi lấy 13.000 USD tiền mặt (theo tỷ giá chéo đã được tính chẵn là 1,30).\nTỷ giá giao ngay:\nUSD/VND = 19.000 và 19.100.\nEUR/VND = 25.000 và 25.200.\nHãy hạch toán vào các tài khoản thích hợp?",
        o: [
          "Nợ TK 1031 USD: 13.000\nCó TK 4711 USD: 13.000\nvà Nợ TK 1031 EUR: 10.000\nCó TK 4711 EUR: 10.000",
          "Nợ TK 1031 EUR: 10.000\nCó TK 4711 EUR: 10.000\nvà Nợ TK 4711 USD: 13.000\nCó TK 1031 USD: 13.000",
          "Nợ TK 1031 EUR: 10.000\nCó TK 4711 EUR: 10.000\nvà Nợ TK 4711 USD: 13.000\nCó TK 1031 USD: 13.000\nvà Nợ TK 4712 (tiểu khoản USD): 190 triệu VND\nCó TK 4712 (tiểu khoản EUR): 190 triệu VND",
          "Nợ TK 1031 EUR: 10.000\nCó TK 4711 EUR: 10.000\nvà Nợ TK 4711 USD: 13.000\nCó TK 1031 USD: 13.000\nvà Nợ TK 4712 (tiểu khoản EUR): 250 triệu VND\nCó TK 4712 (tiểu khoản USD): 250 triệu VND.",
        ],
        a: 3,
      },
    ],
  },
];
export default QUIZ_SETS_TTQT