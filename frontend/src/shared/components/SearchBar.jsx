import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import Icon from "./Icon.jsx";

export default function SearchBar({
  value = "",
  onChange = () => {},
  label,
  hint = "Bạn muốn ôn môn gì?",
  className = "",
  clearable = true,
  inputProps = {},
  icon = "search",
}) {
  const [focused, setFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState(hint);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;

    const start = () => {
      clearTimeout(timer);
      setPlaceholder(hint);
      if (motion.matches || focused || value || document.hidden) return;

      let length = hint.length;
      let deleting = true;

      const tick = () => {
        length += deleting ? -1 : 1;
        setPlaceholder(hint.slice(0, length));

        if (length === 0) deleting = false;
        else if (length === hint.length) deleting = true;

        timer = setTimeout(
          tick,
          length === hint.length
            ? 2600
            : length === 0
              ? 450
              : deleting
                ? 35
                : 90,
        );
      };

      timer = setTimeout(tick, 2600);
    };

    start();
    motion.addEventListener("change", start);
    document.addEventListener("visibilitychange", start);

    return () => {
      clearTimeout(timer);
      motion.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", start);
    };
  }, [hint, value, focused]);

  return (
    <div className={`search animated-search ${className}`.trim()}>
      <Icon name={icon} />
      <Input
        aria-label={label}
        value={value}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(event) => onChange(event.target.value)}
        {...inputProps}
      />
      {clearable && value && (
        <Button
          onClick={() => onChange("")}
          aria-label={label ? `Xóa ${label.toLowerCase()}` : "Xóa tìm kiếm"}
        >
          ✕
        </Button>
      )}
    </div>
  );
}
