"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ReactNode } from "react";
import { useEffect } from "react";

const onThemeChange = (
  theme: string,
  setTheme: (theme: string) => void,
  event?: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const x = event?.clientX ?? window.innerWidth / 2;
  const y = event?.clientY ?? window.innerHeight / 2;

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );
  
  // @ts-ignore
  if (!document.startViewTransition) {
    setTheme(theme);
    return;
  }

  // @ts-ignore
  const transition = document.startViewTransition(() => {
    setTheme(theme);
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
      {
        clipPath: theme === "dark" ? clipPath.reverse() : clipPath,
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: theme === 'dark' ? "::view-transition-old(root)" : "::view-transition-new(root)",
      }
    );
  });
};

const ThemeContext = ({ children }: { children: ReactNode }) => {
  const { setTheme: originalSetTheme, theme: currentTheme } = useTheme();

  useEffect(() => {
    if (currentTheme) {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(currentTheme);
    }
  }, [currentTheme]);

  return (
    <div
      onClick={(event) => {
        const target = event.target as HTMLElement;
        const button = target.closest("[data-theme-toggle]");
        if (button) {
          const newTheme = currentTheme === "dark" ? "light" : "dark";
          onThemeChange(newTheme, originalSetTheme, event);
        }
      }}
    >
      {children}
    </div>
  );
};

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ThemeContext>{children}</ThemeContext>
    </NextThemesProvider>
  );
};
