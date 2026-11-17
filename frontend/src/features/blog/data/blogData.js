import quizSets from "../../quiz/data/quizSets.js";
import { QUIZ_MAJORS, SUBJECT_IMAGE } from "../../catalog/data/majors.js";
import { asset, catalog, majorId } from "../../quiz/utils/quiz.js";
import { examPath } from "../../../app/router/routes.js";
export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
}
export function buildBlogData(sets, configuredMajors) {
  const majors = catalog(configuredMajors, sets);
  return {
    majors,
    majorCount: majors.length,
    setCount: sets.length,
    questionCount: sets.reduce((n, s) => n + (s.questions?.length || 0), 0),
    cards: sets.map((s) => ({
      id: s.id,
      title: s.title,
      description: s.description || "Chọn đề để ôn tập hoặc thi thử.",
      count: s.questions?.length || 0,
      major: majors.find((m) => m.id === majorId(s))?.title || "Môn dùng chung",
      path: examPath("setup", s),
      image: asset(SUBJECT_IMAGE),
    })),
  };
}
const data = buildBlogData(quizSets, QUIZ_MAJORS);
export const BLOG_DATA = {
  ...data,
  subjects: data.cards.map(card => card.title),
  cardsHtml: data.cards.map(card => `<a class="lc rv" href="${escapeHtml(card.path)}"><div class="lh"><img src="${escapeHtml(card.image)}" alt="" loading="lazy" /><span>Thư viện ôn tập JLer</span></div><div class="lcb"><span class="mono">${escapeHtml(card.major)}</span><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.description)}</p><div class="lf"><span class="mono2">${card.count} câu hỏi</span><span class="go">Bắt đầu →</span></div></div></a>`).join(""),
};
