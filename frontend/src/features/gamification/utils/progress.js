import {
  validGameSession,
  validHistory,
} from "../../games/utils/sessionValidation.js";
import { BUGS } from "../data/bugs.js";
export const freshProgress = () => ({
  version: 3,
  lastClaimDay: "",
  fireRecoveries: {},
  gameSeen: {},
  gameSession: null,
  gameHistory: [],
  displayName: "Bạn học",
  bugSessions: {},
  xp: 0,
  gems: 0,
  streak: 0,
  bestStreak: 0,
  lastDay: "",
  completed: [],
  events: [],
  activity: [],
  owned: [],
  equipped: "",
  school: "hubt",
  lastLesson: "",
});
export function dayKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function yesterday(date = new Date()) {
  const d = new Date(date);
  d.setDate(d.getDate() - 1);
  return dayKey(d);
}
export function normalizeProgress(value) {
  const base = freshProgress();
  if (!value || ![1, 2, 3].includes(value.version)) return base;
  for (const key of ["xp", "gems", "streak", "bestStreak"])
    if (Number.isSafeInteger(value[key]) && value[key] >= 0)
      base[key] = value[key];
  for (const key of ["completed", "events", "owned"])
    if (Array.isArray(value[key]))
      base[key] = [...new Set(value[key].filter((v) => typeof v === "string"))];
  for (const key of [
    "lastDay",
    "lastClaimDay",
    "school",
    "equipped",
    "lastLesson",
    "displayName",
  ])
    if (typeof value[key] === "string") base[key] = value[key];
  if (value.fireRecoveries && typeof value.fireRecoveries === "object")
    base.fireRecoveries = Object.fromEntries(Object.entries(value.fireRecoveries).filter(([month, used]) => /^\d{4}-(0[1-9]|1[0-2])$/.test(month) && Number.isInteger(used) && used >= 0 && used <= 3));
  if (Array.isArray(value.activity))
    base.activity = value.activity
      .filter(
        (v) =>
          v &&
          typeof v.day === "string" &&
          ["lesson", "exam", "bug", "review", "game", "fire"].includes(v.kind),
      )
      .slice(-100);
  if (value.gameSeen && typeof value.gameSeen === "object")
    base.gameSeen = Object.fromEntries(
      Object.entries(value.gameSeen)
        .filter(([k, v]) => /^[a-z]+\/[a-z]+$/.test(k) && Array.isArray(v))
        .map(([k, v]) => [
          k,
          [...new Set(v.filter((id) => typeof id === "string"))],
        ]),
    );
  if (Array.isArray(value.gameHistory))
    base.gameHistory = value.gameHistory.filter(validHistory).slice(-50);
  if (validGameSession(value.gameSession)) base.gameSession = value.gameSession;
  base.displayName = base.displayName.trim().slice(0, 40) || "Bạn học";
  if (value.bugSessions && typeof value.bugSessions === "object") {
    for (const [day, session] of Object.entries(value.bugSessions).slice(-60)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(day) && session && session.day === day) {
        const picks = {};
        for (const bug of BUGS) {
          const n = session.picks?.[bug.id];
          if (Number.isInteger(n) && n >= 0 && n < bug.options.length)
            picks[bug.id] = n;
        }
        base.bugSessions[day] = {
          day,
          picks,
          cursor: Number.isInteger(session.cursor)
            ? Math.max(0, Math.min(2, session.cursor))
            : 0,
          solved: BUGS.filter(
            (b) =>
              picks[b.id] === b.answer &&
              Array.isArray(session.solved) &&
              session.solved.includes(b.id),
          ).map((b) => b.id),
          mistakes:
            Number.isSafeInteger(session.mistakes) && session.mistakes >= 0
              ? session.mistakes
              : 0,
          finished: session.finished === true,
          legacy: session.legacy === true,
        };
      }
    }
  }
  // Version 1 recorded rewards but not individual choices. Preserve known completions.
  for (const event of base.events) {
    const match = /^bug:daily:(\d{4}-\d{2}-\d{2})$/.exec(event);
    if (match && !base.bugSessions[match[1]]) {
      const day = match[1],
        offset = Number(day.replaceAll("-", "")) % BUGS.length;
      const rounds = [0, 1, 2].map((i) => BUGS[(offset + i) % BUGS.length]);
      base.bugSessions[day] = {
        day,
        cursor: 2,
        picks: Object.fromEntries(rounds.map((b) => [b.id, b.answer])),
        solved: rounds.map((b) => b.id),
        mistakes: 0,
        finished: true,
        legacy: true,
      };
    }
  }
  base.bugSessions = Object.fromEntries(
    Object.entries(base.bugSessions)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-60),
  );
  return base;
}
export function rewardProgress(state, event, date = new Date()) {
  if (!["exam", "game"].includes(event.kind) || !event.id) return state;
  const day = dayKey(date),
    eventId = `${event.kind}:${event.id}:${day}`;
  if (state.events.includes(eventId)) return state;
  const xp = event.kind === "game" ? 30 : 25,
    gems = event.kind === "game" ? 4 : 3;
  return {
    ...state,
    xp: state.xp + xp,
    gems: state.gems + gems,
    lastDay: day,
    events: [...state.events, eventId],
    activity: [
      ...state.activity,
      { day, kind: event.kind, id: event.id, xp },
    ].slice(-100),
  };
}
export const ITEMS = [
  {
    id: "hat",
    name: "Mũ pháp sư Jeli",
    emoji: "🧙",
    cost: 15,
    line: "Câu khó xuất hiện? Úm ba la… đọc lại đề một lần nữa!",
  },
  {
    id: "duck",
    name: "Vịt trợ giảng",
    emoji: "🦆",
    cost: 20,
    line: "Kể câu đố cho vịt nghe. Vịt chưa trả lời, bạn đã bật cười!",
  },
  {
    id: "rocket",
    name: "Tên lửa tri thức",
    emoji: "🚀",
    cost: 30,
    line: "Phóng chậm cũng được. Miễn là hôm nay có học thêm một chút.",
  },
];
export function buyItem(state, id) {
  const item = ITEMS.find((x) => x.id === id);
  if (!item || state.owned.includes(id) || state.gems < item.cost) return state;
  return {
    ...state,
    gems: state.gems - item.cost,
    owned: [...state.owned, id],
    equipped: id,
  };
}
export function currentStreak(state, date = new Date()) {
  return [dayKey(date), yesterday(date)].includes(state.lastClaimDay)
    ? state.streak
    : 0;
}

export function levelInfo(xp) {
  const level = Math.floor(xp / 100) + 1;
  const titles = [
    "Tân binh Jeli",
    "Người ôn tập chăm chỉ",
    "Cao thủ câu đố",
    "Bạn học bền bỉ",
    "Chiến binh tri thức",
  ];
  return {
    level,
    title: titles[Math.min(titles.length - 1, Math.floor((level - 1) / 2))],
    current: xp % 100,
    remaining: 100 - (xp % 100),
    next: level + 1,
  };
}

// Recovery costs one allowance per missed day, in that day's calendar month.
export function fireStatus(state, date = new Date()) {
  const day = dayKey(date), month = day.slice(0, 7);
  const remaining = Math.max(0, 3 - (state.fireRecoveries?.[month] || 0));
  const parse = (value) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
    const [y, m, d] = value.split("-").map(Number);
    const utc = Date.UTC(y, m - 1, d);
    return new Date(utc).toISOString().slice(0, 10) === value ? utc : NaN;
  };
  const gap = Math.round((parse(day) - parse(state.lastClaimDay)) / 86400000);
  const missed = Number.isFinite(gap) ? Math.max(0, gap - 1) : 0;
  const costs = {};
  if (missed > 0 && missed <= 6) {
    for (let i = 1; i < gap; i++) {
      const key = new Date(parse(state.lastClaimDay) + i * 86400000).toISOString().slice(0, 7);
      costs[key] = (costs[key] || 0) + 1;
    }
  }
  const canRestore = state.streak > 0 && missed > 0 && missed <= 6 &&
    Object.entries(costs).every(([key, count]) => (state.fireRecoveries?.[key] || 0) + count <= 3);
  return { remaining, missed, canRestore, costs, month, validLast: Number.isFinite(gap) };
}
export function fireTheme(streak) {
  if (streak >= 365) return { name: "Lửa cầu vồng", color: "rainbow" };
  if (streak >= 90) return { name: "Lửa tím", color: "violet" };
  if (streak >= 30) return { name: "Lửa xanh ngọc", color: "teal" };
  if (streak >= 7) return { name: "Lửa xanh dương", color: "blue" };
  if (streak >= 3) return { name: "Lửa vàng", color: "gold" };
  return { name: "Lửa cam", color: "orange" };
}
export function streakMilestone(streak) {
  if (streak > 0 && streak % 365 === 0) return `${streak / 365} năm giữ lửa`;
  if (streak > 0 && streak % 30 === 0) return `${streak / 30} tháng giữ lửa`;
  if ([3, 7].includes(streak)) return `${streak} ngày giữ lửa`;
  return "";
}
export function jeliEvolution(level) {
  const stages = [
    { level: 1, name: "Jeli mầm nhỏ", icon: "🌱", color: "orange" },
    { level: 3, name: "Jeli chăm chỉ", icon: "🍀", color: "gold" },
    { level: 5, name: "Jeli tinh anh", icon: "⭐", color: "teal" },
    { level: 10, name: "Jeli cao thủ", icon: "💎", color: "violet" },
    { level: 20, name: "Jeli huyền thoại", icon: "👑", color: "rainbow" },
  ];
  const stage = stages.findLast((s) => level >= s.level) || stages[0];
  return { ...stage, next: stages.find((s) => s.level > level) };
}
export function claimFire(state, date = new Date()) {
  const day = dayKey(date);
  const status = fireStatus(state, date);
  if ((status.validLast && state.lastClaimDay >= day) || state.events.includes(`fire:${day}`)) return state;
  const streak = state.lastClaimDay === yesterday(date) || status.canRestore ? state.streak + 1 : 1;
  const fireRecoveries = { ...(state.fireRecoveries || {}) };
  if (status.canRestore) for (const [month, count] of Object.entries(status.costs))
    fireRecoveries[month] = (fireRecoveries[month] || 0) + count;
  return {
    ...state, fireRecoveries, lastClaimDay: day, streak,
    bestStreak: Math.max(state.bestStreak, streak), xp: state.xp + 10, gems: state.gems + 1,
    events: [...state.events, `fire:${day}`],
    activity: [...state.activity, { day, kind: "fire", id: day, xp: 10 }].slice(-100),
  };
}
