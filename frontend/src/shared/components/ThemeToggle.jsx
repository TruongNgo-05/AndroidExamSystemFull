import { Button } from "antd";
import Icon from "./Icon.jsx";
import { useTheme } from "../../app/context/ThemeContext.jsx";
export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? "Chuyển giao diện sáng" : "Chuyển giao diện tối";
  return <Button className={className} aria-label={label} title={label} onClick={toggleTheme} icon={<Icon name={theme === "dark" ? "sun" : "moon"} />} />;
}
