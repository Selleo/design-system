import type { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import { isDarkTheme } from "../../stores";

const themes = ["light", "dark"];

const icons = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>,
];

const ThemeToggle: FunctionalComponent = () => {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== undefined && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      isDarkTheme.set(true);
      root.classList.remove("dark");
    } else {
      isDarkTheme.set(false);
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <div className="inline-flex items-center gap-[0.25em] py-[0.33em] px-[0.67em] rounded-full bg-theme-gray-950 dark:bg-theme-gray-100">
      {themes.map((t, i) => {
        const icon = icons[i];
        const checked = t === theme;
        return (
          <label
            className={`relative flex items-center justify-center opacity-50 focus-within:outline focus-within:outline-transparent focus-within:ring-1 focus-within:ring-theme-accent ${
              checked
                ? "text-theme-accent dark:text-theme-accent opacity-100"
                : ""
            }`}
          >
            {icon}
            <input
              type="radio"
              className="absolute opacity-0 top-0 right-0 bottom-0 left-0 z-[-1]"
              checked={checked}
              value={t}
              title={`Use ${t} theme`}
              aria-label={`Use ${t} theme`}
              onChange={() => {
                localStorage.setItem("theme", t);
                setTheme(t);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
