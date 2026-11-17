import { useEffect, useRef, useState } from "react";
export function useLocalStorage(key, fallback, valid = () => true) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch {
        parsed = raw;
      }
      return valid(parsed) ? parsed : fallback;
    } catch {
      return fallback;
    }
  });
  const [error, setError] = useState("");
  const validRef = useRef(valid);
  validRef.current = valid;
  useEffect(() => {
    const refresh = (event) => {
      if (event.type === "storage" && event.key !== key && event.key !== null)
        return;
      try {
        const raw = localStorage.getItem(key);
        let parsed;
        try {
          parsed = JSON.parse(raw);
        } catch {
          parsed = raw;
        }
        setValue(raw !== null && validRef.current(parsed) ? parsed : fallback);
        setError("");
      } catch {
        setError("Chưa đọc được dữ liệu đã lưu.");
      }
    };
    refresh({type:"load"});
    window.addEventListener("storage", refresh);
    window.addEventListener("jler:restore", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("jler:restore", refresh);
    };
  }, [key]);
  function update(next) {
    const resolved = typeof next === "function" ? next(value) : next;
    setValue(resolved);
    try {
      localStorage.setItem(key, JSON.stringify(resolved));
      setError("");
    } catch {
      setError(
        "Trình duyệt không lưu được dữ liệu. Thay đổi chỉ có hiệu lực trong phiên này.",
      );
    }
  }
  return [value, update, error];
}
