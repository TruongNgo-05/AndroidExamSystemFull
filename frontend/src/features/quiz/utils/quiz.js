export const normalize = (value) =>
  String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
export function majorId(set) {
  const id = typeof set.majorId === "string" ? set.majorId.trim() : "";
  return id.toLowerCase() === "null" ? "" : id;
}
export function catalog(majors, sets) {
  const result = majors.map((m) => ({ ...m }));
  sets.forEach((s) => {
    const id = majorId(s);
    if (id && !result.some((m) => m.id === id)) result.push({ id, title: id });
  });
  return result;
}
export function filterSets(sets, selected = "", keyword = "") {
  const term = normalize(keyword);
  return sets.filter(
    (s) =>
      (!selected || !majorId(s) || majorId(s) === selected) &&
      normalize(s.title).includes(term),
  );
}
export function shuffle(values) {
  const a = [...values];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function createSession(questions, random = false) {
  const ordered = random ? shuffle(questions) : [...questions];
  return ordered.map((q) => {
    const choices = shuffle(
      q.o.map((text, i) => ({ text, correct: i === q.a, index:i })),
    );
    return {
      ...q,
      o: choices.map((c) => c.text),
      a: choices.findIndex((c) => c.correct),
      _choiceOrder: choices.map(c=>c.index),
      picked: null,
      skipped: false,
    };
  });
}
export function score(session) {
  const correct = session.filter(
    (q) => q.picked !== null && q.picked === q.a,
  ).length;
  const answered = session.filter((q) => q.picked !== null).length;
  return {
    total: session.length,
    correct,
    wrong: answered - correct,
    unanswered: session.length - answered,
    pct: session.length ? Math.round((correct * 100) / session.length) : 0,
  };
}
export function asset(path) {
  if (!path) return "";
  if (path.startsWith("/api/public/images/")) return (import.meta.env?.VITE_API_BASE_URL || "/api").replace(/\/$/, "") + path.slice(4);
  if (/^https?:\/\//i.test(path)) return path;
  if (/^[a-z][a-z\d+.-]*:/i.test(path) || path.startsWith("//")) return "";
  return (import.meta.env?.BASE_URL || "./") + path.replace(/^\.?\//, "");
}

// Answers stay locked until a new round is started.
export function canChooseAnswer(question) {
  return question.picked === null;
}
export function chooseAnswer(session, current, index) {
  const question = session[current];
  if (!question || !canChooseAnswer(question) ||
      !Number.isInteger(index) || index < 0 || index >= question.o.length) {
    return session;
  }
  return session.map((q, i) => i === current
    ? { ...q, picked: index, skipped: false }
    : q);
}
export function isSessionComplete(session, practice = false) {
  return session.length > 0 && session.every((q) =>
    practice ? q.picked === q.a : q.picked !== null);
}

// Keep incorrect and unanswered questions; reset them without reshuffling options.
export function resetWrongAnswers(session) {
  return session
    .filter((q) => q.picked !== q.a)
    .map((q) => ({ ...q, picked: null, skipped: false }));
}
