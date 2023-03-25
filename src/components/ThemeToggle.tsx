"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

export default function ThemeToggle({ theme: propTheme }: { theme: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState(propTheme);

  const toggleTheme = useCallback(function () {
    if (typeof window == "undefined") return;
    document.documentElement.classList.toggle("dark");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.cookie = `theme=${
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    }`;
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (
      document.cookie.includes("theme") &&
      window.matchMedia("(refers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      document.cookie = `theme=dark`;
    }
  });

  return (
    <>
      <button ref={ref} className="p-2 hover:underline" onClick={toggleTheme}>
        Theme Toggle: {theme == "dark" ? "dark" : "light"}
      </button>
    </>
  );
}

const useIsomorphicLayoutEffect =
  typeof window != "undefined"
    ? useLayoutEffect
    : () => {
        /* do nothing */
      };
