"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ReactNode } from "react";
import { useEffect } from "react";

const onThemeChange = (
  theme: string,
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
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    return;
  }

  // @ts-ignore
  const transition = document.startViewTransition(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
      {
        clipPath: clipPath,
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
};

const ThemeContext = ({ children }: { children: ReactNode }) => {
  const { setTheme: originalSetTheme, theme: currentTheme } = useTheme();

  const setTheme = (
    theme: string,
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onThemeChange(theme, event);
    originalSetTheme(theme);
  };
  
  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme) {
        root.classList.remove("dark", "light");
        root.classList.add(currentTheme);
    }
  }, [currentTheme]);

  return (
    <div
      onClick={(event) => {
        const target = event.target as HTMLElement;
        const button = target.closest("[data-theme-toggle]");
        if (button) {
          const newTheme = currentTheme === "dark" ? "light" : "dark";
          setTheme(newTheme, event);
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
      enableSystem
      disableTransitionOnChange
    >
      <ThemeContext>{children}</ThemeContext>
    </NextThemesProvider>
  );
};
