import {savePdfDocument} from "../../../shared/services/savePdf.js";
import { verifyDownloadKey } from "../services/downloadKey.js";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import regularFontUrl from "../../../assets/fonts/Roboto-Regular.ttf?url";
import boldFontUrl from "../../../assets/fonts/Roboto-Bold.ttf?url";
import logoUrl from "../../../assets/images/logoTHI.png?url";

// =====================================================
// LOAD FONT TTF
// =====================================================
async function loadFont(doc, fontUrl, fileName, fontName, fontStyle) {
  const response = await fetch(fontUrl);

  if (!response.ok) {
    throw new Error(`Không tải được font: ${fontUrl}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);

  let binary = "";

  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, Math.min(i + chunkSize, bytes.length));

    binary += String.fromCharCode(...chunk);
  }

  const base64 = btoa(binary);

  doc.addFileToVFS(fileName, base64);
  doc.addFont(fileName, fontName, fontStyle);
}

// =====================================================
// LOAD IMAGE
// =====================================================
async function loadImage(url) {
  if (!url) {
    return null;
  }

  try {
    let imageUrl = url;

    if (
      typeof imageUrl === "string" &&
      !imageUrl.startsWith("/") &&
      !imageUrl.startsWith("http://") &&
      !imageUrl.startsWith("https://") &&
      !imageUrl.startsWith("data:")
    ) {
      imageUrl = `/${imageUrl}`;
    }

    const response = await fetch(imageUrl);

    if (!response.ok) {
      console.warn(`Không tải được ảnh: ${imageUrl}`);
      return null;
    }

    const blob = await response.blob();

    return await new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.warn(`Lỗi load ảnh: ${url}`, error);
    return null;
  }
}

// =====================================================
// LẤY KÍCH THƯỚC ẢNH
// =====================================================
async function getImageSize(imageBase64) {
  if (!imageBase64) {
    return null;
  }

  return await new Promise((resolve) => {
    const img = new Image();

    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };

    img.onerror = () => {
      resolve(null);
    };

    img.src = imageBase64;
  });
}

// =====================================================
// XÁC ĐỊNH FORMAT ẢNH
// =====================================================
function getImageFormat(imageBase64) {
  if (!imageBase64) {
    return "PNG";
  }

  if (imageBase64.startsWith("data:image/jpeg")) {
    return "JPEG";
  }

  if (imageBase64.startsWith("data:image/jpg")) {
    return "JPEG";
  }

  if (imageBase64.startsWith("data:image/webp")) {
    return "WEBP";
  }

  return "PNG";
}

// =====================================================
// DOWNLOAD QUIZ PDF
// =====================================================
export async function downloadQuizPDF(quizSet, key) {
  if (!(await verifyDownloadKey(key))) throw new Error("DOWNLOAD_KEY_REQUIRED");
  // ===================================================
  // KIỂM TRA DỮ LIỆU
  // ===================================================
  if (!quizSet?.questions?.length) {
    alert("Không có câu hỏi để tải PDF.");
    return;
  }

  try {
    // =================================================
    // TẠO PDF
    // =================================================
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // =================================================
    // LOAD ROBOTO REGULAR
    // =================================================
    await loadFont(
      doc,
      regularFontUrl,
      "Roboto-Regular.ttf",
      "Roboto",
      "normal",
    );

    // =================================================
    // LOAD ROBOTO BOLD
    // =================================================
    await loadFont(doc, boldFontUrl, "Roboto-Bold.ttf", "Roboto", "bold");

    // =================================================
    // LOAD LOGO
    // =================================================
    const logoBase64 = await loadImage(logoUrl);

    // =================================================
    // HEADER - LOGO
    // =================================================
    if (logoBase64) {
      const logoWidth = 42;
      const logoHeight = 18;

      const logoX = (pageWidth - logoWidth) / 2;
      const logoY = 10;

      doc.addImage(logoBase64, "PNG", logoX, logoY, logoWidth, logoHeight);
    }

    // =================================================
    // HEADER - TITLE
    // =================================================
    doc.setFont("Roboto", "bold");
    doc.setFontSize(17);
    doc.setTextColor(20, 20, 20);

    const title = quizSet.title || "BỘ CÂU HỎI";

    const titleLines = doc.splitTextToSize(title, pageWidth - 40);

    const titleY = 36;

    doc.text(titleLines, pageWidth / 2, titleY, {
      align: "center",
      lineHeightFactor: 1.3,
    });

    // =================================================
    // DESCRIPTION
    // =================================================
    const titleHeight = titleLines.length * 7;

    const description = quizSet.description || "";

    const descriptionLines = description
      ? doc.splitTextToSize(description, pageWidth - 45)
      : [];

    const descriptionY = titleY + titleHeight + 7;

    if (descriptionLines.length > 0) {
      doc.setFont("Roboto", "normal");
      doc.setFontSize(10);
      doc.setTextColor(90, 90, 90);

      doc.text(descriptionLines, pageWidth / 2, descriptionY, {
        align: "center",
        lineHeightFactor: 1.4,
      });
    }

    // =================================================
    // THÔNG TIN
    // =================================================
    const descriptionHeight =
      descriptionLines.length > 0 ? descriptionLines.length * 5 : 0;

    const infoY = descriptionY + descriptionHeight + 7;

    doc.setFont("Roboto", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);

    const questionText = `Số câu hỏi: ${quizSet.questions.length}`;

    const infoGap = 8;

    // Số câu hỏi
    doc.text(questionText, pageWidth / 2 + infoGap, infoY, {
      align: "left",
    });

    // =================================================
    // ĐƯỜNG KẺ
    // =================================================
    const lineY = infoY + 8;

    doc.setDrawColor(150, 160, 170);
    doc.setLineWidth(0.5);

    doc.line(20, lineY, pageWidth - 20, lineY);

    // =================================================
    // LOAD ẢNH CỦA CÁC CÂU HỎI
    // =================================================
    const preparedQuestions = await Promise.all(
      quizSet.questions.map(async (question) => {
        let imageBase64 = null;
        let imageSize = null;

        if (question.image) {
          imageBase64 = await loadImage(question.image);

          if (imageBase64) {
            imageSize = await getImageSize(imageBase64);
          }
        }

        return {
          ...question,
          _imageBase64: imageBase64,
          _imageSize: imageSize,
        };
      }),
    );

    // =================================================
    // TẠO DATA CÂU HỎI
    // =================================================
    const letters = ["A", "B", "C", "D"];

    const rows = [];

    preparedQuestions.forEach((question, index) => {
      // ---------------------------------------------
      // CÂU HỎI
      // ---------------------------------------------
      const questionRow = [`Câu ${index + 1}`, question.q || ""];

      rows.push(questionRow);

      // ---------------------------------------------
      // ẢNH
      // ---------------------------------------------
      if (question._imageBase64 && question._imageSize) {
        const imageRow = ["", ""];

        imageRow._imageBase64 = question._imageBase64;

        imageRow._imageSize = question._imageSize;

        rows.push(imageRow);
      }

      // ---------------------------------------------
      // ĐÁP ÁN
      // ---------------------------------------------
      question.o?.forEach((option, optionIndex) => {
        const isCorrect = optionIndex === question.a;

        rows.push([
          isCorrect ? `* ${letters[optionIndex]}.` : `${letters[optionIndex]}.`,
          option || "",
        ]);
      });

      // ---------------------------------------------
      // DÒNG TRỐNG
      // ---------------------------------------------
      rows.push(["", ""]);
    });

    // =================================================
    // AUTOTABLE
    // =================================================
    autoTable(doc, {
      startY: lineY + 8,

      head: [],

      body: rows,

      theme: "plain",

      rowPageBreak: "avoid",

      margin: {
        left: 15,
        right: 15,
        bottom: 15,
      },

      styles: {
        font: "Roboto",
        fontStyle: "normal",

        // Font nội dung
        fontSize: 10,

        // Khoảng cách trong cell
        cellPadding: 2.5,

        textColor: [30, 41, 59],

        lineColor: [220, 225, 230],

        lineWidth: 0,

        valign: "top",

        overflow: "linebreak",
      },

      // =================================================
      // COLUMN WIDTH
      // =================================================
      columnStyles: {
        0: {
          cellWidth: 22,
          fontStyle: "bold",
        },

        1: {
          cellWidth: 158,
        },
      },

      // =================================================
      // STYLE CELL
      // =================================================
      didParseCell(data) {
        const firstColumn = data.row.raw?.[0];

        // ---------------------------------------------
        // CÂU HỎI
        // ---------------------------------------------
        if (typeof firstColumn === "string" && firstColumn.startsWith("Câu ")) {
          data.cell.styles.font = "Roboto";

          data.cell.styles.fontStyle = "bold";

          data.cell.styles.textColor = [17, 24, 39];
        }

        // ---------------------------------------------
        // ĐÁP ÁN ĐÚNG
        // ---------------------------------------------
        if (typeof firstColumn === "string" && firstColumn.startsWith("*")) {
          data.cell.styles.font = "Roboto";

          data.cell.styles.fontStyle = "bold";

          data.cell.styles.textColor = [22, 101, 52];
        }

        // ---------------------------------------------
        // DÒNG CÓ ẢNH
        // ---------------------------------------------
        const imageBase64 = data.row.raw?._imageBase64;

        const imageSize = data.row.raw?._imageSize;

        if (imageBase64 && imageSize && data.column.index === 1) {
          const maxWidth = 120;
          const maxHeight = 60;

          let imageWidth = maxWidth;

          let imageHeight = (imageSize.height / imageSize.width) * imageWidth;

          // Không cho ảnh quá cao
          if (imageHeight > maxHeight) {
            imageHeight = maxHeight;

            imageWidth = (imageSize.width / imageSize.height) * imageHeight;
          }

          data.cell.styles.minCellHeight =
            imageHeight +
            data.cell.padding("top") +
            data.cell.padding("bottom");

          // Lưu kích thước
          data.row.raw._pdfImageWidth = imageWidth;

          data.row.raw._pdfImageHeight = imageHeight;
        }

        // ---------------------------------------------
        // DÒNG TRỐNG
        // ---------------------------------------------
        if (firstColumn === "" && data.row.raw?.[1] === "" && !imageBase64) {
          data.cell.styles.minCellHeight = 3;
        }
      },

      // =================================================
      // VẼ ẢNH VÀO CELL
      // =================================================
      didDrawCell(data) {
        // Chỉ vẽ ở cột nội dung
        if (data.column.index !== 1) {
          return;
        }

        const row = data.row.raw;

        const imageBase64 = row?._imageBase64;

        if (!imageBase64) {
          return;
        }

        const imageWidth = row._pdfImageWidth || 100;

        const imageHeight = row._pdfImageHeight || 50;

        // ---------------------------------------------
        // Tính vị trí ảnh
        // ---------------------------------------------
        const x = data.cell.x + (data.cell.width - imageWidth) / 2;

        const y = data.cell.y + data.cell.padding("top");

        // ---------------------------------------------
        // Thêm ảnh
        // ---------------------------------------------
        try {
          doc.addImage(
            imageBase64,
            getImageFormat(imageBase64),
            x,
            y,
            imageWidth,
            imageHeight,
          );
        } catch (error) {
          console.warn("Không thể chèn ảnh vào PDF:", error);
        }
      },

      // =================================================
      // WATERMARK
      // VẼ TRƯỚC NỘI DUNG
      // =================================================
      // =================================================
      // WATERMARK - JLER
      // CHỈ HIỂN THỊ Ở KHU VỰC NỘI DUNG
      // KHÔNG ĐÈ HEADER
      // =================================================
      willDrawPage() {
        doc.saveGraphicsState();

        doc.setFont("Roboto", "bold");
        doc.setFontSize(48);

        // Rất nhạt giống watermark EDUQUIZ
        doc.setTextColor(242, 242, 242);

        // -------------------------------------------------
        // Vùng watermark bắt đầu SAU HEADER
        // -------------------------------------------------
        const watermarkTop = lineY + 25;
        const watermarkBottom = pageHeight - 25;

        const watermarkHeight = watermarkBottom - watermarkTop;

        // 4 watermark / trang
        const watermarkPositions = [
          [pageWidth * 0.3, watermarkTop + watermarkHeight * 0.25],
          [pageWidth * 0.7, watermarkTop + watermarkHeight * 0.25],
          [pageWidth * 0.3, watermarkTop + watermarkHeight * 0.7],
          [pageWidth * 0.7, watermarkTop + watermarkHeight * 0.7],
        ];

        watermarkPositions.forEach(([x, y]) => {
          doc.text("JLER", x, y, {
            align: "center",
            angle: 45,
          });
        });

        doc.restoreGraphicsState();
      },

      // =================================================
      // FOOTER
      // =================================================
      didDrawPage() {
        const currentPage = doc.internal.getCurrentPageInfo().pageNumber;

        doc.setFont("Roboto", "normal");

        doc.setFontSize(8);

        doc.setTextColor(120, 120, 120);

        // ---------------------------------------------
        // Footer trái
        // ---------------------------------------------
        doc.text("JLer - Learn · Practice · Grow", 15, pageHeight - 8);

        // ---------------------------------------------
        // Footer phải
        // ---------------------------------------------
        doc.text(`Trang ${currentPage}`, pageWidth - 15, pageHeight - 8, {
          align: "right",
        });
      },
    });

    // =================================================
    // TỔNG SỐ TRANG
    // =================================================
    const totalPages = doc.internal.getNumberOfPages();

    // Chuyển về trang đầu
    doc.setPage(1);

    doc.setFont("Roboto", "normal");

    doc.setFontSize(10);

    doc.setTextColor(80, 80, 80);

    // =================================================
    // HIỂN THỊ TỔNG SỐ TRANG
    // =================================================
    doc.text(`Số trang: ${totalPages}`, pageWidth / 2 - infoGap, infoY, {
      align: "right",
    });

    // =================================================
    // SAVE PDF
    // =================================================
    const fileName = sanitizeFileName(quizSet.title || "bo-cau-hoi");

    await savePdfDocument(doc,`${fileName}.pdf`);
  } catch (error) {
    console.error("Lỗi xuất PDF:", error);

    throw error;
  }
}

// =====================================================
// SANITIZE FILE NAME
// =====================================================
function sanitizeFileName(name) {
  return String(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9\s_-]/g, "")
    .trim()
    .replace(/\s+/g, "_")
    .substring(0, 100);
}
