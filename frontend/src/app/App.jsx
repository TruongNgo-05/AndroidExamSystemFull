import Profile from "../features/auth/Profile.jsx";
import ForgotPassword from "../features/auth/ForgotPassword.jsx";
import {AuthProvider,useAuth} from "../features/auth/AuthContext.jsx";
import AuthPage from "../features/auth/AuthPage.jsx";
import RequireAuth from "../features/auth/RequireAuth.jsx";
import {CatalogProvider,useCatalog} from "../features/catalog/CatalogContext.jsx";
import {api} from "../shared/services/api.js";
import AdminPage from "../features/admin/AdminPage.jsx";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
import CampusHeader from "./components/CampusHeader.jsx";
import PageErrorBoundary from "../shared/components/PageErrorBoundary.jsx";
import { dayKey } from "../features/gamification/utils/progress.js";
import {
  LearningProvider,
  useLearning,
} from "../features/gamification/context/LearningProvider.jsx";
import { createDefaultQuizSettings } from "../features/quiz/config/defaultSettings.js";
import InitialPageIntro from "../shared/components/InitialPageIntro.jsx";
import PolicyPage from "../features/policies/pages/PolicyPage.jsx";
import { POLICIES } from "../features/policies/data/policies.js";
import CommunityMascot from "../features/community/components/CommunityMascot.jsx";
import UpdateNotice from "../shared/components/UpdateNotice.jsx";
import LoadingState from "../shared/components/LoadingState.jsx";
import NotFound from "../shared/pages/NotFound.jsx";
import BackToTop from "../shared/components/BackToTop.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import History from "../features/history/components/History.jsx";
import Notices from "../features/notifications/components/Notices.jsx";
import { Button, message } from "antd";
import { lazy, Suspense, useEffect, useRef, useState } from "react";


import { useLocalStorage } from "../shared/hooks/useLocalStorage.js";
import { score } from "../features/quiz/utils/quiz.js";
import Home from "../features/catalog/pages/Home.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import { catalog } from "../features/quiz/utils/quiz.js";
import { QUIZ_MAJORS } from "../features/catalog/data/majors.js";
import {
  schoolPath,
  examSchool,
  parseRoute,
  examPath,
} from "./router/routes.js";
const Setup = lazy(() => import("../features/quiz/pages/Setup.jsx"));
const Study = lazy(() => import("../features/quiz/pages/Study.jsx"));
const Quiz = lazy(() => import("../features/quiz/pages/Quiz.jsx"));
const Result = lazy(() => import("../features/quiz/pages/Result.jsx"));
const BlogJLer = lazy(() => import("../features/blog/BlogJLer.jsx"));
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
  useBlocker,
} from "react-router-dom";
const GamesPage = lazy(() => import("../features/games/pages/GamesPage.jsx"));
const JourneyPage = lazy(
  () => import("../features/gamification/components/JourneyPage.jsx"),
);
const LAST_EXAM = "quizconsole_last_exam";

function readLastExam() {
  try {
    return sessionStorage.getItem(LAST_EXAM) || "";
  } catch {
    return "";
  }
}

const router = createBrowserRouter([
  {
    path: "/gioi-thieu",
    element: (
      <PageErrorBoundary>
        <Suspense
          fallback={<LoadingState label="Jeli đang mở trang giới thiệu…" />}
        >
          <InitialPageIntro label="Jeli đang mở trang giới thiệu…">
            <BlogJLer />
          </InitialPageIntro>
        </Suspense>
      </PageErrorBoundary>
    ),
  },
  { path: "*", element: <AppLayout /> },
]);
export default function App() {
  return (
    <ThemeProvider>
    <AuthProvider><AccountLearning><CatalogProvider>
      <RouterProvider router={router} />
    </CatalogProvider></AccountLearning></AuthProvider>
    </ThemeProvider>
  );
}
function AccountLearning({children}){
  const {user,loading}=useAuth();
  return <LearningProvider accountId={user?.id}>{children}</LearningProvider>;
}
function AppLayout() {
  const {user,loading:authLoading}=useAuth();
  const {exams:quizSets,notifications,majors:serverMajors,schools}=useCatalog();
  const serverAttempt=useRef(null),serverResult=useRef(null),starting=useRef(false),submitting=useRef(false);
  const [requestBusy,setRequestBusy]=useState(false);

  const { progress, reward, update } = useLearning();
  const [rewardMessage, rewardMessageHolder] = message.useMessage();
  const location = useLocation();
  const navigate = useNavigate();
  const route = parseRoute(
    location.pathname,
    location.search,
    quizSets,
    catalog(serverMajors, quizSets),
    schools,
  );
  const screen = route.screen;
  const [lastExamId, setLastExamId] = useState(readLastExam);
  const examId = route.examId || (route.legacy ? lastExamId : "");
  const exam =
    quizSets.find(
      (item) =>
        String(item.id) === examId &&
        (!route.schoolId || examSchool(item) === route.schoolId),
    ) || null;
  // Account school is selected once on login/profile change. Explicit deep links win.
  const accountSchool = schools.some(s=>s.id===user?.schoolId)?user.schoolId:"";
  const appliedSchool=useRef("");
  const schoolIdentity=`${user?.id||"guest"}:${accountSchool}`;
  const activeSchool = route.schoolId || (appliedSchool.current!==schoolIdentity&&accountSchool) || progress.school || accountSchool || "hubt";
  useEffect(()=>{
    if(appliedSchool.current===schoolIdentity)return;
    appliedSchool.current=schoolIdentity;
    if(!route.schoolId&&accountSchool)update({school:accountSchool});
  },[schoolIdentity,accountSchool,route.schoolId,update]);
  const activeAttempt = useRef(false);
  const attemptExam = useRef(null);
  const resultExam = useRef(null);
  const routeFor = (name, id = exam?.id) => {
    if (name === "home") return "/";
    if (name === "history") return "/history";
    return examPath(
      name,
      quizSets.find(
        (item) =>
          String(item.id) === String(id) &&
          (!route.schoolId || examSchool(item) === route.schoolId),
      ),
      route.major,
    );
  };
  useEffect(() => {
    if (route.legacyLearning) navigate("/tro-choi", {replace:true});
    if (route.legacy && exam) navigate(routeFor(screen), { replace: true });
    if (route.legacyMajor)
      navigate(schoolPath("hubt", route.major), { replace: true });
  }, [location.pathname, location.search, exam]);
  function setScreen(name) {
    navigate(routeFor(name));
  }
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      activeAttempt.current &&
      parseRoute(
        currentLocation.pathname,
        currentLocation.search,
        quizSets,
        catalog(serverMajors, quizSets),
    schools,
      ).screen === "quiz" &&
      (currentLocation.pathname !== nextLocation.pathname ||
        currentLocation.search !== nextLocation.search),
  );
  useEffect(() => {
    if (blocker.state !== "blocked") return;
    if (
      window.confirm(
        "Thoát bài thi đang làm? Kết quả chưa nộp sẽ không được lưu.",
      )
    ) {
      if(serverAttempt.current)api(`/attempts/${serverAttempt.current}/abandon`,{method:"POST"}).catch(()=>{});
      activeAttempt.current = false;
      blocker.proceed();
    } else blocker.reset();
  }, [blocker]);
  useEffect(() => {
    const warn = (event) => {
      if (!activeAttempt.current) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, []);
  useEffect(() => {
    if (screen !== "quiz") activeAttempt.current = false;
    if (exam) {
      setLastExamId(String(exam.id));
      try {
        sessionStorage.setItem(LAST_EXAM, String(exam.id));
      } catch {
        /* Optional storage. */
      }
    }
  }, [location.pathname, exam]);
  useEffect(() => {
    if (route.schoolId && route.schoolId !== progress.school)
      update({ school: route.schoolId });
  }, [route.schoolId, progress.school]);
  const selected = screen === "home" ? route.major : "";
  const [keyword, setKeyword] = useState(""),
    [allSubjects, setAllSubjects] = useState(false);
  useEffect(() => {
    setAllSubjects(new URLSearchParams(location.search).get("tab") === "exams");
  }, [location.pathname, location.search]);
  function changeAllSubjects(value) {
    setAllSubjects(value);
    navigate(
      value
        ? `${schoolPath(activeSchool)}?tab=exams#exam-library`
        : schoolPath(activeSchool),
    );
  }
  function selectMajor(majorId) {
    const value = majorId || "";
    navigate(schoolPath(activeSchool, value));
    setKeyword("");
    setAllSubjects(false);
  }
  const [settings, setSettings] = useState(createDefaultQuizSettings);
  const [questions, setQuestions] = useState([]),
    [result, setResult] = useState([]),
    [attempt, setAttempt] = useState(0),
    [retry, setRetry] = useState(false);
  useEffect(()=>{
    serverAttempt.current=null;serverResult.current=null;activeAttempt.current=false;
    attemptExam.current=null;resultExam.current=null;setQuestions([]);setResult([]);
  },[user?.id]);
  const { theme, setTheme, themeError } = useTheme();
  const [sound, setSound, soundError] = useLocalStorage(
    "quizconsole_sound",
    "on",
    (x) => ["on", "off"].includes(x),
  );
  const [history,setHistory]=useState([]);
  const [historyError,setHistoryError]=useState("");
  useEffect(()=>{
    let alive=true;setHistory([]);setHistoryError("");
    if(user?.role==="STUDENT")api("/history").then(rows=>{if(alive)setHistory(rows.slice(0,50));}).catch(e=>{if(alive)setHistoryError(e.message);});
    return ()=>{alive=false;};
  },[user?.id]);
  async function clearHistory(){try{await api("/history",{method:"DELETE"});setHistory([]);}catch(e){rewardMessage.error(e.message);}}
  const [readIds, setReadIds, notifError] = useLocalStorage(
    `quizconsole_notif_read:${user?.id||"guest"}`,
    [],
    Array.isArray,
  );
  const [noticeOpen, setNoticeOpen] = useState(false);
  const audio = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      screen === "policy"
        ? `${POLICIES.find((item) => item.slug === route.policySlug)?.title} | JLer`
        : "JLer - Ôn thi và chơi cùng Jeli";
  }, [location.pathname, location.search]);
  useEffect(
    () => () => {
      audio.current?.close();
    },
    [],
  );
  function playSound(correct) {
    if (sound !== "on") return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      audio.current ||= new Audio();
      const ctx = audio.current;
      ctx.resume().catch(() => {});
      const osc = ctx.createOscillator(),
        gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = correct ? 740 : 220;
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      /* Audio is optional. */
    }
  }
  function openExam(value) {
    setLastExamId(String(value.id));
    try {
      sessionStorage.setItem(LAST_EXAM, String(value.id));
    } catch {
      /* Optional storage. */
    }
    setSettings(createDefaultQuizSettings());
    navigate(examPath("setup", value, selected));
  }
  async function start(values = exam?.questions, isRetry = false, forceExam = false) {
    if (!exam || starting.current || !Array.isArray(values) || !values.length) return;
    const takingExam = forceExam || isRetry || settings.mode !== "study";
    if(takingExam && !user){navigate(`/login?next=${encodeURIComponent(routeFor("setup"))}`);return;}
    if(takingExam && user.role!=="STUDENT"){rewardMessage.info("Hãy dùng tài khoản STUDENT để làm bài.");return;}
    starting.current=true;setRequestBusy(true);
    try{
      let loaded=values;
      if(takingExam){
        const created=await api("/attempts",{method:"POST",body:{examId:exam.id,schoolId:examSchool(exam),mode:settings.mode,
          ...(isRetry&&serverResult.current?{retryFrom:serverResult.current.id}:{})}});
        serverAttempt.current=created.id;loaded=created.questions;
      }
      activeAttempt.current=takingExam;
      attemptExam.current=`${examSchool(exam)}/${exam.id}`;
      setQuestions(loaded);setRetry(isRetry);setAttempt(n=>n+1);setScreen(takingExam?"quiz":"study");
    }catch(e){rewardMessage.error(e.message);}finally{starting.current=false;setRequestBusy(false);}
  }
  async function finish(session) {
    if(!activeAttempt.current||!exam||submitting.current)return false;
    submitting.current=true;setRequestBusy(true);
    try{
      const saved=await api(`/attempts/${serverAttempt.current}/submit`,{method:"POST",body:{answers:session.map(q=>({index:q._sourceIndex,order:q._choiceOrder,picked:q.picked}))}});
      serverResult.current=saved;
      activeAttempt.current=false;
      resultExam.current=`${examSchool(exam)}/${exam.id}`;
      setResult(saved.session);
      const stats=saved;
      if(!retry)setHistory(h=>[saved,...h.filter(r=>r.id!==saved.id)].slice(0,50));
    // Reward a submitted attempt only when at least one answer was selected.
    if (session.some((q) => q.picked != null)) {
      const rewardId =
        examSchool(exam) === "hubt"
          ? String(exam.id)
          : `${examSchool(exam)}/${exam.id}`;
      if (!progress.events.includes(`exam:${rewardId}:${dayKey()}`))
        rewardMessage.success("Đã nộp bài! +25 XP và +3 ngọc cùng Jeli 🎉");
      reward({ kind: "exam", id: rewardId });
    }
    playSound(stats.pct >= 50);
    setScreen("result");return true;
    }catch(e){rewardMessage.error(`Chưa nộp được bài: ${e.message}. Bài làm vẫn được giữ, hãy thử nộp lại.`);return false;}
    finally{submitting.current=false;setRequestBusy(false);}
  }
  const unread = notifications.filter((n) => !readIds.includes(n.id)).length;
  const storageError = historyError || themeError || soundError || notifError;
  return (
      <div className={`app-shell${screen==="admin"?" admin-app-shell":""}`}>
        {rewardMessageHolder}
        {screen!=="admin"&&<ParticleBackground theme={theme} />}
        {screen!=="admin"&&<CampusHeader
          screen={screen}
          library={
            !!route.schoolId ||
            allSubjects ||
            new URLSearchParams(location.search).get("tab") === "exams"
          }
          schoolId={activeSchool}
          theme={theme}
          sound={sound}
          unread={unread}
          onTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
          onSound={() => setSound(sound === "on" ? "off" : "on")}
          onNotice={() => setNoticeOpen(true)}
        />}
        <UpdateNotice
          takingExam={screen === "quiz" && activeAttempt.current}
          onReload={() => {
            if (
              activeAttempt.current &&
              !window.confirm(
                "Bạn đang làm bài thi. Tải lại trang sẽ mất bài chưa nộp. Bạn có muốn tải lại ngay không?",
              )
            )
              return;
            activeAttempt.current = false;
            window.location.reload();
          }}
        />
        <main>
          {screen==="quiz"&&!user&&<p role="alert" className="warning">Phiên đăng nhập đã hết hạn. <Button onClick={()=>navigate(`/login?next=${encodeURIComponent(routeFor("setup"))}`)}>Đăng nhập lại</Button></p>}
          {storageError && (
            <p role="alert" className="warning">
              {storageError}
            </p>
          )}
          <Suspense
            fallback={<LoadingState label="Đang mở không gian học tập…" />}
          >
            <Routes
              location={{
                ...location,
                pathname:
                  screen === "home"
                    ? "/"
                    : screen === "quiz"
                      ? "/exam"
                      : `/${screen}`,
              }}
            >
              <Route
                path="/"
                element={
                  <InitialPageIntro
                    enabled={
                      location.pathname === "/" &&
                      !selected &&
                      !allSubjects &&
                      new URLSearchParams(location.search).get("tab") !==
                        "exams"
                    }
                  >
                    <Home
                      schoolId={route.schoolId}
                      preferredSchoolId={activeSchool}
                      onSchoolChange={(id) => {
                        update({ school: id });
                        if (route.schoolId) navigate(schoolPath(id));
                      }}
                      sets={quizSets}
                      selected={selected}
                      onSelect={selectMajor}
                      keyword={keyword}
                      onSearch={setKeyword}
                      allSubjects={allSubjects}
                      onAllSubjects={changeAllSubjects}
                      onOpen={openExam}
                    />
                  </InitialPageIntro>
                }
              />
              <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
              <Route path="/login" element={<AuthPage/>}/>
              <Route path="/register" element={<AuthPage register/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/admin" element={<RequireAuth role="ADMIN"><AdminPage section={route.adminSection||"dashboard"} theme={theme} onTheme={()=>setTheme(theme==="dark"?"light":"dark")}/></RequireAuth>}/>
              <Route path="/games" element={<GamesPage gameId={route.gameId} topicId={route.topicId} />} />
              <Route path="/journey" element={<JourneyPage />} />
              <Route
                path="/setup"
                element={
                  exam ? (
                    <Setup
                      contextMajor={route.major}
                      exam={exam}
                      settings={settings}
                      onChange={setSettings}
                      onStart={() => start()}
                      busy={requestBusy||authLoading}
                      onBack={() =>
                        navigate(
                          schoolPath(
                            examSchool(exam),
                            route.major !== "dung" ? route.major : "",
                          ),
                        )
                      }
                    />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="/study"
                element={
                  exam ? (
                    <Study exam={exam} onBack={() => setScreen("setup")} />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="/exam"
                element={
                  exam &&
                  activeAttempt.current &&
                  attemptExam.current === `${examSchool(exam)}/${exam.id}` ? (
                    <Quiz
                      key={attempt}
                      exam={exam}
                      questions={questions}
                      settings={settings}
                      paused={noticeOpen || blocker.state === "blocked" || requestBusy || !user}
                      submitting={requestBusy}
                      onFinish={finish}
                      onExit={() => {
                        // Quiz's existing exit control owns its confirmation dialog.
                        if(serverAttempt.current)api(`/attempts/${serverAttempt.current}/abandon`,{method:"POST"}).catch(()=>{});
                        activeAttempt.current = false;
                        setScreen("setup");
                      }}
                      playSound={playSound}
                    />
                  ) : (
                    <Navigate to={exam ? routeFor("setup") : "/"} replace />
                  )
                }
              />
              <Route
                path="/quiz"
                element={<Navigate to={routeFor("quiz")} replace />}
              />
              <Route
                path="/result"
                element={
                  exam &&
                  resultExam.current === `${examSchool(exam)}/${exam.id}` ? (
                    <Result
                      exam={exam}
                      session={result}
                      mode={settings.mode}
                      onRetry={(values) => start(values, true)}
                      onRestart={() => start(exam.questions,false,true)}
                      onHome={() => setScreen("home")}
                    />
                  ) : (
                    <Navigate to={exam ? routeFor("setup") : "/"} replace />
                  )
                }
              />
              <Route
                path="/history"
                element={
                  <RequireAuth><History
                    records={history}
                    onClear={clearHistory}
                    onHome={() => setScreen("home")}
                    onOpenExam={(examId, schoolId = "hubt") => {
                      const target = quizSets.find(
                        (item) =>
                          String(item.id) === String(examId) &&
                          examSchool(item) === schoolId,
                      );
                      if (target) openExam(target);
                    }}
                  /></RequireAuth>
                }
              />
              <Route
                path="/policy"
                element={
                  <PolicyPage key={route.policySlug} slug={route.policySlug} />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        {screen !== "setup" && screen !== "quiz" && screen !== "admin" && <SiteFooter />}
        {screen === "home" && (
          <div className="floating-community">
            <CommunityMascot />
          </div>
        )}
        {screen!=="admin"&&<BackToTop />}
        <Notices
          open={noticeOpen}
          onClose={() => setNoticeOpen(false)}
          items={notifications}
          readIds={readIds}
          onRead={(id) =>
            setReadIds((ids) => (ids.includes(id) ? ids : [...ids, id]))
          }
          onReadAll={() => setReadIds(notifications.map((n) => n.id))}
        />
      </div>

  );
}
