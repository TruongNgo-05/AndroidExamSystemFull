import { useEffect, useState } from "react";
import { dayKey } from "./progress.js";
export function useLocalDay() {
  const [day, setDay] = useState(() => dayKey());
  useEffect(() => {
    let timer;
    const refresh = () => {
      clearTimeout(timer);
      setDay(dayKey());
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 100);
      timer = setTimeout(refresh, midnight.getTime() - Date.now());
    };
    refresh();
    window.addEventListener("focus", refresh);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("focus", refresh);
    };
  }, []);
  return day;
}
