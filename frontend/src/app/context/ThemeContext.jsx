import { createContext, useContext, useLayoutEffect } from "react";
import { ConfigProvider, theme as antTheme } from "antd";
import { useLocalStorage } from "../../shared/hooks/useLocalStorage.js";

const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
  const [theme, setTheme, themeError] = useLocalStorage(
    "quizconsole_theme",
    "dark",
    (value) => ["dark", "light"].includes(value),
  );
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeError,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: theme === "dark" ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
          token: {
            colorPrimary: theme === "dark" ? "#34e0d3" : "#087f80",
            colorBgBase: theme === "dark" ? "#0b101b" : "#f3f8f9",
            borderRadius: 12,
            controlHeight: 44,
            fontFamily: "Inter, system-ui, sans-serif",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  return useContext(ThemeContext);
}
