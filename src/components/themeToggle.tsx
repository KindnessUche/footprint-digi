"use client";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full relative text-xl cursor-pointer"
    >
      <FaMoon className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-0 dark:scale-100 rotate-90 dark:rotate-0" />
      <FaSun className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 dark:scale-0 scale-100 dark:rotate-90 rotate-0" />
    </button>
  );
}
