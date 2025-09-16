"use client";

import { ThemeProvider, useTheme } from "next-themes";
import type { ReactNode } from "react";

// This is the function that will be called when the theme changes.
// It's a bit of a hack, but it's the only way to get the click event.
// We will override the `setTheme` function to get the click event.
// Then we will call the original `setTheme` function.
const onThemeChange = (theme: string, event?: React.MouseEvent) => {
  const x = event?.clientX ?? window.innerWidth / 2;
  const y = event?.clientY ?? window.innerHeight / 2;

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  // @ts-ignore
  const transition = document.startViewTransition(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
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
        easing: "ease-in",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
};

// We will create a new context to override the `setTheme` function.
const ThemeContext = ({ children }: { children: ReactNode }) => {
  const { setTheme: originalSetTheme, ...rest } = useTheme();

  const setTheme = (theme: string, event?: React.MouseEvent) => {
    onThemeChange(theme, event);
    originalSetTheme(theme);
  };

  return (
    <div
      onClick={(event) => {
        // Find the button that was clicked.
        // If it has the `data-theme-toggle` attribute, then we will change the theme.
        const target = event.target as HTMLElement;
        const button = target.closest("[data-theme-toggle]");
        if (button) {
          const currentTheme =
            document.documentElement.getAttribute("data-theme") || "dark";
          const newTheme = currentTheme === "dark" ? "light" : "dark";
          setTheme(newTheme, event);
        }
      }}
    >
      {children}
    </div>
  );
};

// This is the main component that will be used in the layout.
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeContext>{children}</ThemeContext>
    </ThemeProvider>
  );
};
