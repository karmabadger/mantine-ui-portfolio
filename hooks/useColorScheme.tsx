import { useEffect, useState } from "react";

const themeTypeKey = "theme-type" as const;
const useColorScheme = (): [
  "light" | "dark",
  (value?: "light" | "dark") => void
] => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // you can use any storage
    let theme = window.localStorage.getItem(themeTypeKey) as "light" | "dark";
    setColorScheme(theme || "dark");
  }, [colorScheme, setColorScheme]);

  const toggleTheme = (value?: "light" | "dark") => {
    const nextTheme = value || (colorScheme === "dark" ? "light" : "dark");
    window.localStorage.setItem(themeTypeKey, nextTheme); // you can use any storage
    setColorScheme(nextTheme);
  };

  return [colorScheme, toggleTheme];
};

export default useColorScheme;
