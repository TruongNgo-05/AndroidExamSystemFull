import QuestionNavigator from "../components/QuestionNavigator.jsx";
import QuestionExplanationModal from "../components/QuestionExplanationModal.jsx";
import jeliImage from "../../../assets/images/linhvatjler.gif";
import { Button, Modal, Progress } from "antd";

import { useEffect, useRef, useState } from "react";

import {
  createSession,
  score,
  canChooseAnswer,
  chooseAnswer,
  isSessionComplete,
  resetWrongAnswers,
} from "../utils/quiz.js";

import QuestionImage from "../components/QuestionImage.jsx";

import { explainQuestion } from "../services/geminiService.js";

export default function Quiz({
  exam,
  questions,
  settings,
  onFinish,
  onExit,
  playSound,
  paused = false,
  submitting = false,
}) {
  const [session, setSession] = useState(() =>
    createSession(questions, settings.random),
  );

  const [current, setCurrent] = useState(0);
  const [confirm, setConfirm] = useState("");
  const [round, setRound] = useState(1);

  // =====================================================
  // AI STATE
  // =====================================================

  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState("");
  const [aiOpen, setAiOpen] = useState(false);

  const timer = useRef(null);
  const finished = useRef(false);
  const completedRounds=useRef([]);
  const [submitError,setSubmitError]=useState(false);
  const pickLock = useRef(false);

  const practice = settings.mode === "practice";
  const item = session[current];
  const stats = score(session);

  // =====================================================
  // CLEANUP TIMER
  // =====================================================

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  // =====================================================
  // AUTO FINISH
  // =====================================================

  useEffect(() => {
    if (
      !session.length ||
      confirm ||
      submitError ||
      paused ||
      !isSessionComplete(session, practice) ||
      (practice && current !== session.length - 1)
    ) {
      return;
    }

    const submitTimer = setTimeout(() => {
      finish(session);
    }, 650);

    return () => clearTimeout(submitTimer);
  }, [session, confirm, paused, practice, current]);

  // =====================================================
  // PAUSE
  // =====================================================

  useEffect(() => {
    if (paused) {
      clearTimeout(timer.current);
    }
  }, [paused]);

  // =====================================================
  // FINISH
  // =====================================================

  async function finish(values=session){
    if(finished.current||submitting)return;
    finished.current=true;clearTimeout(timer.current);setConfirm("");setSubmitError(false);
    const ok=await onFinish([...completedRounds.current,...values]);
    if(ok===false){finished.current=false;setSubmitError(true);}
  }

  // =====================================================
  // NAVIGATE
  // =====================================================

  function navigate(index) {
    if(paused||submitting)return;
    clearTimeout(timer.current);

    pickLock.current = false;

    setCurrent(Math.max(0, Math.min(session.length - 1, index)));
  }

  function retryWrong() {
    if (!practice || paused || confirm) return;
    const remaining = resetWrongAnswers(session);
    if (!remaining.length) return;
    completedRounds.current.push(...session.filter(q=>q.picked===q.a));
    clearTimeout(timer.current);
    pickLock.current = false;
    finished.current = false;
    setAiOpen(false);
    setAiExplanation("");
    setSession(remaining);
    setCurrent(0);
    setRound((value) => value + 1);
  }

  // =====================================================
  // NEXT
  // =====================================================

  function next() {
    if(paused||submitting)return;
    clearTimeout(timer.current);

    setSession((values) =>
      values.map((q, i) =>
        i === current && q.picked === null
          ? {
              ...q,
              skipped: true,
            }
          : q,
      ),
    );

    if (current === session.length - 1) {
      setConfirm("finish");
    } else {
      navigate(current + 1);
    }
  }

  // =====================================================
  // KEYBOARD
  // =====================================================

  useEffect(() => {
    function keydown(e) {
      if (
        paused ||
        e.repeat ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        confirm ||
        document.querySelector("dialog[open]") ||
        e.target.closest('input,textarea,select,[contenteditable="true"]')
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(current - 1);
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();

        if (current < session.length - 1) {
          next();
        }
      }
    }

    document.addEventListener("keydown", keydown);

    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, [current, session.length, confirm, paused]);

  // =====================================================
  // PICK ANSWER
  // =====================================================

  function pick(index) {
    if (paused || confirm || !canChooseAnswer(item) || pickLock.current) {
      return;
    }

    clearTimeout(timer.current);
    pickLock.current = true;
    const nextSession = chooseAnswer(session, current, index);

    setSession(nextSession);

    playSound(index === item.a);

    if (
      settings.autoNext &&
      !isSessionComplete(nextSession, practice) &&
      current < session.length - 1
    ) {
      timer.current = setTimeout(() => {
        pickLock.current = false;
        setCurrent(current + 1);
      }, 650);
    }
  }

  // =====================================================
  // AI EXPLAIN
  // =====================================================

  async function handleAIExplain() {
    if (!item) return;

    try {
      setAiLoading(true);
      setAiOpen(true);
      setAiExplanation("");

      const result = await explainQuestion(item,exam);

      setAiExplanation(result);
    } catch (error) {
      console.error("AI explanation error:", error);

      setAiExplanation(
        error.message || "Jeli chưa thể giải thích câu hỏi này. Vui lòng thử lại sau.",
      );
    } finally {
      setAiLoading(false);
    }
  }

  // =====================================================
  // CLEAN AI TEXT
  // =====================================================

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <>
      {/* ================================================= */}
      {/* PAGE HEADER */}
      {/* ================================================= */}

      <div className="section-heading">
        <div>
          <span className="eyebrow">
            {practice ? "THI THỬ · CHỌN LẠI ĐÁP ÁN" : "ĐANG LÀM BÀI"}
          </span>

          <h1>{exam.title}</h1>
        </div>

        <Button
          onClick={() => {
            clearTimeout(timer.current);
            setConfirm("exit");
          }}
        >
          Thoát bài thi
        </Button>
      </div>

      {/* ================================================= */}
      {/* QUIZ LAYOUT */}
      {/* ================================================= */}

      <div className="quiz-layout">
        {/* ================================================= */}
        {/* QUESTION */}
        {/* ================================================= */}

        <section className="panel question">
          <div className="section-heading">
            <b>
              Câu {current + 1} / {session.length}
            </b>

            <span className="muted">
              Đúng: {stats.correct} / {stats.total - stats.unanswered} đã trả
              lời
            </span>
          </div>

          {/* PROGRESS */}
          <Progress
            aria-label="Tiến trình trả lời"
            percent={Math.round(
              ((stats.total - stats.unanswered) / stats.total) * 100,
            )}
            showInfo={false}
            strokeColor="var(--accent)"
          />

          <div className="progress-caption">
            <span>
              Đã trả lời {stats.total - stats.unanswered}/{stats.total} câu
            </span>

            <b>
              {Math.round(
                ((stats.total - stats.unanswered) / stats.total) * 100,
              )}
              %
            </b>
          </div>

          {/* QUESTION */}
          <p className="question-text">{item.q}</p>

          <QuestionImage question={item} />

          {/* ANSWERS */}
          <div className="options">
            {item.o.map((o, i) => (
              <Button
                key={i}
                disabled={paused || Boolean(confirm) || !canChooseAnswer(item)}
                className={`option ${
                  item.picked !== null && i === item.a ? "correct" : ""
                } ${item.picked === i && i !== item.a ? "wrong" : ""}`}
                onClick={() => pick(i)}
              >
                <span className="answer-layout">
                  <b className="answer-letter">{"ABCD"[i]}</b>

                  <span className="answer-text">{o}</span>
                </span>
              </Button>
            ))}
          </div>

          {practice && <p className="muted practice-note">Lượt {round}</p>}

          {/* AI BUTTON */}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handleAIExplain}
              loading={aiLoading}
              style={{
                borderRadius: 8,
                fontWeight: 500,
              }}
            >
              <img className="jeli-button-avatar" src={jeliImage} alt="" />{" "}
              {aiLoading
                ? "Jeli đang giải thích..."
                : "Jeli giải thích câu này"}
            </Button>
          </div>

          {/* ACTIONS */}
          <div className="actions spaced">
            <Button disabled={!current} onClick={() => navigate(current - 1)}>
              ← Câu trước
            </Button>

            <Button className="primary" onClick={next}>
              {current === session.length - 1 ? "Nộp bài" : "Câu tiếp →"}
            </Button>
          </div>
        </section>

        {/* ================================================= */}
        {/* QUESTION LIST */}
        {/* ================================================= */}

        <QuestionNavigator
          session={session}
          current={current}
          stats={stats}
          practice={practice}
          paused={paused}
          confirm={confirm}
          onNavigate={navigate}
          onRetryWrong={retryWrong}
          onSubmit={() => {
            clearTimeout(timer.current);
            setConfirm("finish");
          }}
        />
      </div>

      {/* ================================================= */}
      {/* CONFIRM MODAL */}
      {/* ================================================= */}

      <Modal
        open={Boolean(confirm)}
        centered
        title={confirm === "exit" ? "Thoát bài đang làm?" : "Nộp bài thi?"}
        onCancel={() => setConfirm("")}
        onOk={() => (confirm === "exit" ? onExit() : finish())}
        okText={confirm === "exit" ? "Thoát bài thi" : "Nộp bài"}
        cancelText="Tiếp tục làm"
        maskClosable={false}
        confirmLoading={submitting}
      >
        <p>
          {confirm === "exit"
            ? "Thoát sẽ mất dữ liệu bài đang làm. Bạn có muốn thoát không?"
            : `Còn ${stats.unanswered} câu chưa trả lời.`}
        </p>
      </Modal>

      {/* ================================================= */}
      {/* AI EXPLANATION MODAL */}
      {/* ================================================= */}

      <QuestionExplanationModal
        item={item}
        current={current}
        aiLoading={aiLoading}
        aiExplanation={aiExplanation}
        aiOpen={aiOpen}
        onClose={() => setAiOpen(false)}
      />
    </>
  );
}
