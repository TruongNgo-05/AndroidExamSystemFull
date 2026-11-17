import {useAuth} from "../../auth/AuthContext.jsx";
import {useNavigate,useLocation} from "react-router-dom";
import LearningModeSettings from "../components/LearningModeSettings.jsx";
import { useState } from "react";

import { Button, Modal, Input, Form } from "antd";

import { DownloadOutlined } from "@ant-design/icons";

import ShareExam from "../components/ShareExam.jsx";
import { examPath } from "../../../app/router/routes.js";

import QuestionImage from "../components/QuestionImage.jsx";
import LoadingState from "../../../shared/components/LoadingState.jsx";
import ThankYouModal from "../components/ThankYouModal.jsx";
import qrUrl from "../../../assets/images/qr.jpg?url";

import {
  verifyDownloadKey,
  isDownloadKeyFormat,
} from "../services/downloadKey.js";

const PDF_PRICE = "20.000đ";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfiRxl293BojxknzUBbd_HtuZy6ExBveZ3cKR2RXZwTlFgAHg/formResponse";

const GOOGLE_FORM_ENTRIES = {
  hoTen: "entry.1105431845",
  soDienThoai: "entry.1700537877",
  email: "entry.1789011564",
};

export default function Setup({
  exam,
  settings,
  onChange,
  onStart,
  onBack,
  contextMajor = "",
  busy = false,
}) {
  // =====================================================
  // STATE
  // =====================================================

  const {user}=useAuth();
  const navigate=useNavigate(),location=useLocation();
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // payment -> qr -> form -> code
  const [downloadStep, setDownloadStep] = useState("payment");

  const [downloadCode, setDownloadCode] = useState("");
  const [downloadError, setDownloadError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [paymentEmail, setPaymentEmail] = useState("");
  const [paymentEmailError, setPaymentEmailError] = useState("");

  // Modal cảm ơn
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const [form] = Form.useForm();

  // =====================================================
  // MỞ MODAL DOWNLOAD
  // =====================================================

  const openDownloadModal = () => {
    if(!user){navigate(`/login?next=${encodeURIComponent(location.pathname+location.search)}`);return;}
    setDownloadStep("payment");

    setDownloadCode("");
    setDownloadError("");

    setPaymentEmail("");
    setPaymentEmailError("");

    form.resetFields();

    setDownloadModalOpen(true);
  };

  // =====================================================
  // ĐÓNG MODAL DOWNLOAD
  // =====================================================

  const closeDownloadModal = () => {
    if (downloading || submitting) {
      return;
    }

    setDownloadModalOpen(false);

    setDownloadStep("payment");

    setDownloadCode("");
    setDownloadError("");

    setPaymentEmail("");
    setPaymentEmailError("");

    form.resetFields();
  };

  // =====================================================
  // XÁC NHẬN MUA
  // =====================================================

  const handleConfirmPurchase = () => {
    setDownloadError("");
    setDownloadStep("qr");
  };

  // =====================================================
  // KIỂM TRA EMAIL
  // =====================================================

  const validatePaymentEmail = () => {
    const email = paymentEmail.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setPaymentEmailError("Vui lòng nhập email.");
      return false;
    }

    if (!emailRegex.test(email)) {
      setPaymentEmailError("Email không hợp lệ.");
      return false;
    }

    setPaymentEmailError("");

    return true;
  };

  // =====================================================
  // XÁC NHẬN THANH TOÁN
  // =====================================================

  const handleConfirmPayment = () => {
    if (!validatePaymentEmail()) {
      return;
    }

    // Đưa email sang form tiếp theo
    form.setFieldValue("email", paymentEmail.trim());

    setDownloadStep("form");
  };

  // =====================================================
  // GỬI THÔNG TIN GOOGLE FORM
  // =====================================================

  const handleSubmitInfo = async (values) => {
    if (submitting) return;
    setSubmitting(true);
    setDownloadError("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const formData = new FormData();

      formData.append(GOOGLE_FORM_ENTRIES.hoTen, values.hoTen.trim());

      formData.append(
        GOOGLE_FORM_ENTRIES.soDienThoai,
        values.soDienThoai.trim(),
      );

      formData.append(GOOGLE_FORM_ENTRIES.email, values.email.trim());

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        signal: controller.signal,
        body: formData,
      });

      // =================================================
      // RESET DỮ LIỆU
      // =================================================

      form.resetFields();

      setPaymentEmail("");
      setPaymentEmailError("");

      setDownloadCode("");
      setDownloadError("");

      setDownloadStep("payment");

      setDownloadModalOpen(false);
      setThankYouOpen(true);
    } catch (error) {
      console.error("Lỗi gửi Google Form:", error);
      setDownloadError(
        "Chưa gửi được thông tin. Vui lòng kiểm tra kết nối và thử lại.",
      );
    } finally {
      clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!exam?.questions?.length) {
      setDownloadError("Bộ câu hỏi hiện không có dữ liệu.");
      return;
    }

    try {
      setDownloading(true);
      setDownloadError("");
      if (!(await verifyDownloadKey(downloadCode.trim()))) {
        setDownloadError("Key không đúng. Vui lòng kiểm tra lại.");
        return;
      }

      const { downloadQuizPDF } = await import("../utils/pdfGenerator.js");
      await downloadQuizPDF(exam, downloadCode.trim());

      setDownloadModalOpen(false);

      setDownloadStep("payment");

      setDownloadCode("");
      setPaymentEmail("");
      setPaymentEmailError("");
    } catch (error) {
      console.error("Lỗi tải PDF:", error);

      setDownloadError(error.message || "Không thể tạo file PDF. Vui lòng thử lại.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section className="setup setup-workspace">
      <Button onClick={onBack}>← Quay lại danh sách</Button>

      <div className="setup-columns">
        <div className="setup-intro panel">
          <div className="setup-intro-heading">
            <span className="eyebrow block">SẴN SÀNG BẮT ĐẦU</span>

            <Button
              icon={<DownloadOutlined />}
              disabled={!exam?.questions?.length}
              onClick={openDownloadModal}
            >
              Tải PDF
            </Button>
          </div>

          <h1>{exam?.title}</h1>

          <p className="muted">{exam?.description}</p>

          <div className="setup-metrics">
            <div>
              <strong>{exam?.questions?.length || 0}</strong>

              <span>CÂU HỎI</span>
            </div>

            <div>
              <strong>04</strong>

              <span>LỰA CHỌN / CÂU</span>
            </div>
          </div>

          <div className="setup-intro-note">
            <ShareExam
              title={exam?.title}
              path={examPath("setup", exam, contextMajor)}
            />
          </div>
        </div>

        <div className="setup-controls panel">
          <span className="eyebrow">THIẾT LẬP PHIÊN HỌC</span>

          <h2 className="mode-heading">Bạn muốn học theo cách nào?</h2>

          <LearningModeSettings settings={settings} onChange={onChange} />

          <Button
            type="primary"
            className="primary"
            style={{
              marginTop: 24,
            }}
            disabled={!exam?.questions?.length}
            onClick={onStart} loading={busy}
          >
            Bắt đầu{" "}
            {settings.mode === "study"
              ? "ôn luyện"
              : settings.mode === "practice"
                ? "thi thử"
                : "thi"}{" "}
            →
          </Button>
        </div>
      </div>

      <section
        className="setup-preview panel"
        aria-labelledby="setup-preview-title"
      >
        <div className="setup-preview-heading">
          <div>
            <span className="eyebrow">NỘI DUNG ĐỀ THI</span>
            <h2 id="setup-preview-title">Xem trước câu hỏi</h2>
          </div>
          <span className="setup-preview-count">
            {Math.min(5, exam?.questions?.length || 0)} /{" "}
            {exam?.questions?.length || 0} câu
          </span>
        </div>
        <p className="setup-preview-note">
          Xem trước tối đa 5 câu đầu của đề. Bắt đầu ôn luyện hoặc thi để xem
          toàn bộ nội dung.
        </p>
        {exam?.questions?.length ? (
          <div className="setup-preview-list">
            {exam.questions.slice(0, 5).map((question, index) => (
              <article
                className="setup-preview-question"
                key={`${exam.id}-${index}`}
              >
                <h3>Câu {index + 1}</h3>
                <p className="setup-preview-text">{question.q}</p>
                <QuestionImage question={question} />
                <ol className="setup-preview-options" type="A">
                  {question.o.map((option, optionIndex) => (
                    <li key={optionIndex}>{option}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        ) : (
          <p className="muted">Bộ đề hiện chưa có câu hỏi để xem trước.</p>
        )}
        {!!exam?.questions?.length && (
          <div className="setup-preview-end">
            <p>
              {exam.questions.length > 5
                ? `Còn ${exam.questions.length - 5} câu trong bộ đề.`
                : "Bạn đã xem trước toàn bộ câu hỏi của bộ đề."}
            </p>
            <Button type="primary" className="primary" onClick={onStart} loading={busy}>
              Bắt đầu{" "}
              {settings.mode === "study"
                ? "ôn luyện"
                : settings.mode === "practice"
                  ? "thi thử"
                  : "thi"}{" "}
              →
            </Button>
          </div>
        )}
      </section>

      <Modal
        open={downloadModalOpen}
        centered
        footer={null}
        onCancel={closeDownloadModal}
        maskClosable={!downloading && !submitting}
        closable={!downloading && !submitting}
        keyboard={!downloading && !submitting}
        width={600}
        destroyOnHidden
        className="key-modal"
        title="Key thư viện JLer"
      >
        {downloadStep === "payment" && (
          <div className="key-offer">
            <span className="key-badge">MỘT KEY · TRỌN THƯ VIỆN</span>
            <h2>
              Mở khóa hôm nay.
              <br />
              <em>Ôn tập dài lâu.</em>
            </h2>
            <p className="key-lead">
              Mua một lần để tải PDF của tất cả môn được hỗ trợ trên JLer, sử
              dụng vĩnh viễn.
            </p>
            <div className="key-price">
              <strong>{PDF_PRICE}</strong>
              <span>
                thanh toán một lần
                <br />
                không phí gia hạn
              </span>
            </div>
            <div className="key-purchase-actions">
              <Button
                type="primary"
                size="large"
                block
                onClick={handleConfirmPurchase}
              >
                Mua key vĩnh viễn · {PDF_PRICE}
              </Button>
              <Button
                className="key-existing"
                type="link"
                block
                onClick={() => {
                  setDownloadStep("code");
                  setDownloadError("");
                }}
              >
                Tôi đã có key — Tải PDF
              </Button>
            </div>
            <div className="key-benefits">
              <div>
                <b>01</b>
                <span>
                  <strong>Dùng cho nhiều môn</strong>
                  <small>
                    Một key dùng chung cho tất cả bộ đề hỗ trợ tải PDF.
                  </small>
                </span>
              </div>
              <div>
                <b>02</b>
                <span>
                  <strong>Sử dụng vĩnh viễn</strong>
                  <small>
                    Key không hết hạn, không phải mua lại theo từng môn.
                  </small>
                </span>
              </div>
              <div>
                <b>03</b>
                <span>
                  <strong>Tải lại không giới hạn</strong>
                  <small>
                    Lưu và in tài liệu để chủ động ôn tập bất cứ khi nào cần.
                  </small>
                </span>
              </div>
            </div>
            <div className="key-current">
              <span>PDF bạn đang muốn tải</span>
              <strong>{exam?.title}</strong>
              <small>Môn này nằm trong quyền lợi của key dùng chung.</small>
            </div>
            <p className="key-footnote">
              Admin gửi key qua email sau khi kiểm tra thanh toán.
            </p>
          </div>
        )}
        {downloadStep === "qr" && (
          <div className="key-checkout">
            <span className="eyebrow">BƯỚC 1 / 2 · THANH TOÁN</span>
            <h2>Key dùng chung vĩnh viễn</h2>
            <div className="key-order">
              <span>Tất cả môn hỗ trợ · Một lần thanh toán</span>
              <strong>{PDF_PRICE}</strong>
            </div>
            <label htmlFor="payment-email">Email nhận key</label>
            <Input
              id="payment-email"
              size="large"
              type="email"
              placeholder="example@gmail.com"
              value={paymentEmail}
              onChange={(e) => {
                setPaymentEmail(e.target.value);
                setPaymentEmailError("");
              }}
            />
            {paymentEmailError && (
              <p className="key-error" role="alert">
                {paymentEmailError}
              </p>
            )}
            <img
              className="payment-qr"
              src={qrUrl}
              alt="Mã QR chuyển khoản mua key JLer"
            />
            <div className="key-current">
              <span>Nội dung chuyển khoản</span>
              <strong>{paymentEmail || "Nhập email ở trên"}</strong>
            </div>
            <p className="key-footnote">
              Sau khi chuyển khoản, gửi thông tin ở bước tiếp theo để Admin đối
              chiếu và gửi key qua email.
            </p>
            <div className="key-actions">
              <Button size="large" onClick={() => setDownloadStep("payment")}>
                Quay lại
              </Button>
              <Button
                size="large"
                type="primary"
                onClick={handleConfirmPayment}
              >
                Tôi đã chuyển khoản
              </Button>
            </div>
          </div>
        )}
        {downloadStep === "form" && (
          <div className="key-checkout">
            <span className="eyebrow">BƯỚC 2 / 2 · NHẬN KEY</span>
            <h2>Thông tin nhận key</h2>
            <p className="key-lead">
              Key dùng cho tất cả môn hỗ trợ, không hết hạn. Vui lòng nhập đúng
              email để Admin gửi key.
            </p>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmitInfo}
              disabled={submitting}
            >
              <Form.Item
                label="Họ và tên"
                name="hoTen"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Vui lòng nhập họ và tên",
                  },
                ]}
              >
                <Input size="large" autoComplete="name" />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="soDienThoai"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                  {
                    pattern: /^0\d{9}$/,
                    message: "Số điện thoại gồm 10 chữ số, bắt đầu bằng 0",
                  },
                ]}
              >
                <Input
                  size="large"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="tel"
                />
              </Form.Item>
              <Form.Item
                label="Email nhận key"
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email" },
                  { type: "email", message: "Email không hợp lệ" },
                ]}
              >
                <Input size="large" type="email" autoComplete="email" />
              </Form.Item>
              {downloadError && (
                <p className="key-error" role="alert">
                  {downloadError}
                </p>
              )}
              {submitting && (
                <LoadingState compact label="Đang gửi thông tin nhận key…" />
              )}
              <div className="key-actions">
                <Button
                  size="large"
                  disabled={submitting}
                  onClick={() => setDownloadStep("qr")}
                >
                  Quay lại
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={submitting}
                >
                  Gửi thông tin nhận key
                </Button>
              </div>
            </Form>
          </div>
        )}
        {downloadStep === "code" && (
          <div className="key-checkout">
            <span className="eyebrow">KEY CỦA BẠN · DÙNG CHUNG MỌI MÔN</span>
            <h2>Nhập key để tải PDF</h2>
            <p className="key-lead">
              Dùng key được Admin đã gửi qua email.
              Key này dùng được cho các môn khác và không hết hạn.
            </p>
            <div className="key-current">
              <span>Tài liệu sẽ tải</span>
              <strong>{exam?.title}</strong>
            </div>
            <Input.Password
              aria-label="Key tải PDF"
              value={downloadCode}
              maxLength={8}
              inputMode="text"
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              size="large"
              placeholder="Nhập key "
              disabled={downloading}
              onChange={(e) => {
                setDownloadCode(
                  e.target.value.replace(/[^A-Za-z0-9-]/g, "").slice(0, 8),
                );
                setDownloadError("");
              }}
              onPressEnter={() => {
                if (isDownloadKeyFormat(downloadCode) && !downloading)
                  handleDownloadPDF();
              }}
            />
            {downloadError && (
              <p className="key-error" role="alert">
                {downloadError}
              </p>
            )}
            {downloading && (
              <LoadingState compact label="Đang tạo tài liệu PDF của bạn…" />
            )}
            <div className="key-actions">
              <Button
                size="large"
                disabled={downloading}
                onClick={() => setDownloadStep("payment")}
              >
                Quay lại
              </Button>
              <Button
                type="primary"
                size="large"
                loading={downloading}
                disabled={!isDownloadKeyFormat(downloadCode)}
                onClick={handleDownloadPDF}
              >
                Tải PDF môn này
              </Button>
            </div>
          </div>
        )}
      </Modal>
      <ThankYouModal
        open={thankYouOpen}
        onClose={() => setThankYouOpen(false)}
      />
    </section>
  );
}
