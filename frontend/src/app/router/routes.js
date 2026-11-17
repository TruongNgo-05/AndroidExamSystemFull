import { GAMES, TOPICS } from "../../features/games/data/games.js";
import { POLICIES } from "../../features/policies/data/policies.js";
import { SCHOOLS } from "../../features/schools/data/schools.js";
const examScreens = new Set(["setup", "study", "exam", "result"]);
const notFound = () => ({
  screen: "not-found",
  major: "",
  examId: "",
  schoolId: "",
});
export const examSchool = (exam) => exam?.schoolId || "hubt";
export function schoolPath(schoolId = "hubt", major = "") {
  return `/${encodeURIComponent(schoolId)}${major ? `/${encodeURIComponent(major)}` : ""}`;
}
export function parseRoute(pathname, search, sets, majors, schools = SCHOOLS) {
  let parts;
  try {
    parts = pathname.split("/").filter(Boolean).map(decodeURIComponent);
  } catch {
    return notFound();
  }
  if (parts[0] === "hoc")
    return {
      screen: "games",
      major: "",
      examId: "",
      schoolId: "",
      legacyLearning: true,
    };
  if (parts[0] === "tro-choi" && parts.length <= 3) {
    if (parts[1] && !GAMES.some((g) => g.id === parts[1])) return notFound();
    if (parts[2] && !TOPICS[parts[1]]?.some((t) => t.id === parts[2]))
      return notFound();
    return {
      screen: "games",
      gameId: parts[1] || "",
      topicId: parts[2] || "",
      major: "",
      examId: "",
      schoolId: "",
    };
  }
  if (parts.length === 1 && parts[0] === "hanh-trinh")
    return { screen: "journey", major: "", examId: "", schoolId: "" };
  const validMajor = (id) => id === "dung" || majors.some((m) => m.id === id);
  if(parts[0]==="admin" && parts.length<=2 && (!parts[1]||["users","students","exams","topics","majors","schools","pages","notifications","results","keys"].includes(parts[1])))return {screen:"admin",adminSection:parts[1]||"dashboard",major:"",examId:"",schoolId:""};
  if(parts.length===1 && ["login","register","forgot-password","profile"].includes(parts[0])) return {screen:parts[0],major:"",examId:"",schoolId:""};
  const screens = {
    exam: "quiz",
    quiz: "quiz",
    setup: "setup",
    study: "study",
    result: "result",
    history: "history",
  };
  if (parts.length === 1 && POLICIES.some((item) => item.slug === parts[0]))
    return {
      screen: "policy",
      policySlug: parts[0],
      major: "",
      examId: "",
      schoolId: "",
    };
  if (!parts.length)
    return { screen: "home", major: "", examId: "", schoolId: "" };
  const school = schools.find((s) => s.id === parts[0]);
  if (school) {
    if (parts.length === 1 || (parts.length === 2 && validMajor(parts[1])))
      return {
        screen: "home",
        major: parts[1] === "dung" ? "" : parts[1] || "",
        examId: "",
        schoolId: school.id,
      };
    if (
      parts.length === 4 &&
      validMajor(parts[1]) &&
      examScreens.has(parts[3])
    ) {
      const exam = sets.find(
        (s) => String(s.id) === parts[2] && examSchool(s) === school.id,
      );
      const ownMajor = String(exam?.majorId || "").trim();
      if (exam && (!ownMajor || ownMajor === "null" || ownMajor === parts[1]))
        return {
          screen: screens[parts[3]],
          major: parts[1],
          examId: parts[2],
          schoolId: school.id,
        };
    }
    return notFound();
  }
  // Keep old bookmarks/share links and redirect them to school-scoped URLs.
  if (parts.length === 1 && validMajor(parts[0]))
    return {
      screen: "home",
      major: parts[0] === "dung" ? "" : parts[0],
      examId: "",
      schoolId: "hubt",
      legacyMajor: true,
    };
  if (parts.length === 3 && validMajor(parts[0]) && examScreens.has(parts[2])) {
    const exam = sets.find(
      (s) => String(s.id) === parts[1] && examSchool(s) === "hubt",
    );
    const ownMajor = String(exam?.majorId || "").trim();
    if (exam && (!ownMajor || ownMajor === "null" || ownMajor === parts[0]))
      return {
        screen: screens[parts[2]],
        major: parts[0],
        examId: parts[1],
        schoolId: "hubt",
        legacy: true,
      };
  }
  if (parts.length === 1 && screens[parts[0]])
    return {
      screen: screens[parts[0]],
      major: "",
      examId: new URLSearchParams(search).get("exam") || "",
      schoolId: "",
      legacy: parts[0] !== "history",
    };
  return notFound();
}
export function examPath(screen, exam, contextMajor = "") {
  if (!exam) return "/";
  const major = contextMajor || String(exam.majorId || "").trim();
  return `${schoolPath(examSchool(exam), major && major !== "null" ? major : "dung")}/${encodeURIComponent(exam.id)}/${screen === "quiz" ? "exam" : screen}`;
}
