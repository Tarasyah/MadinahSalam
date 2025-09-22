# Panduan Implementasi Tema Terang/Gelap dengan Transisi

Berikut adalah kode yang Anda butuhkan untuk mengimplementasikan sistem tema terang/gelap dengan animasi transisi melingkar yang mulus di proyek Next.js Anda.

---

### 1. Variabel CSS & Gaya Transisi

Salin kode berikut ke dalam file CSS global Anda (misalnya, `src/app/globals.css`). Ini mendefinisikan skema warna untuk `:root` (tema terang) dan `.dark` (tema gelap), serta menonaktifkan animasi default dari `View Transitions API` agar kita bisa membuat animasi kustom.

```css
/* src/app/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Tema Terang (Default) */
  :root {
    --background: 240 10% 98%;
    --foreground: 224 71% 4%;

    --card: 240 10% 100%;
    --card-foreground: 224 71% 4%;

    --popover: 240 10% 100%;
    --popover-foreground: 224 71% 4%;
    
    --primary: 148 82% 17%;
    --primary-foreground: 0 0% 100%;

    --secondary: 240 5% 90%;
    --secondary-foreground: 240 5.9% 10%;
    
    --muted: 240 5% 90%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 148 60% 30%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 6% 90%;
    --input: 240 6% 90%;
    --ring: 148 82% 17%;
    
    --radius: 0.5rem;
  }
 
  /* Tema Gelap */
  .dark {
    --background: 240 5% 9%;
    --foreground: 240 5% 95%;

    --card: 240 4% 12%;
    --card-foreground: 240 5% 95%;

    --popover: 240 4% 8%;
    --popover-foreground: 240 5% 95%;
    
    --primary: 148 72% 27%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 240 4% 15%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 4% 20%;
    --muted-foreground: 240 4% 65%;

    --accent: 148 60% 40%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 240 4% 25%;
    --input: 240 4% 25%;
    --ring: 148 72% 27%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* CSS untuk View Transition */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
```

---

### 2. Komponen Custom Theme Provider

Buat file ini untuk menangani logika transisi. Komponen ini menggunakan `next-themes` dan `document.startViewTransition`. Pastikan Anda telah menginstal `next-themes` (`npm install next-themes`).

```tsx
// src/components/custom-theme-provider.tsx

"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ReactNode } from "react";
import { useEffect } from "react";

// Fungsi untuk menangani animasi transisi
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
  
  // Cek apakah browser mendukung View Transitions API
  // @ts-ignore
  if (!document.startViewTransition) {
    setTheme(theme);
    return;
  }

  // Mulai transisi
  // @ts-ignore
  const transition = document.startViewTransition(() => {
    setTheme(theme);
  });

  // Setelah transisi siap, jalankan animasi kustom
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
        duration: 500, // Durasi animasi
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
};

// Konteks untuk menangani event click
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
        // Cari tombol toggle tema yang di-klik
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

// Provider utama yang membungkus aplikasi
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark" // Anda bisa ubah tema default
      enableSystem={false}
      disableTransitionOnChange // Penting untuk animasi kustom
    >
      <ThemeContext>{children}</ThemeContext>
    </NextThemesProvider>
  );
};
```

---

### 3. Komponen Tombol Theme Toggle

Buat komponen tombol ini untuk ditempatkan di UI Anda. Tombol ini memiliki atribut `data-theme-toggle` yang dideteksi oleh `CustomThemeProvider`. Pastikan Anda telah menginstal `lucide-react` (`npm install lucide-react`).

```tsx
// src/components/theme-toggle.tsx

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button" // Asumsi Anda punya komponen Button

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full" // Atur gaya sesuai kebutuhan
      data-theme-toggle // Atribut penting untuk event listener
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

---

### 4. Cara Menggunakan

1.  **Bungkus Layout Utama:** Dalam file `layout.tsx` utama Anda, bungkus konten `body` dengan `CustomThemeProvider`.

    ```tsx
    // src/app/layout.tsx
    import { CustomThemeProvider } from '@/components/custom-theme-provider';

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="id" suppressHydrationWarning>
          <head>
            {/* Tambahkan tag meta ini untuk mengaktifkan View Transitions */}
            <meta name="view-transition" content="same-origin" />
          </head>
          <body>
            <CustomThemeProvider>
              {/* <Header /> */}
              {children}
              {/* <Footer /> */}
            </CustomThemeProvider>
          </body>
        </html>
      );
    }
    ```

2.  **Tempatkan Tombol:** Letakkan komponen `<ThemeToggle />` di mana saja di dalam aplikasi Anda, misalnya di dalam komponen `Header`.

Dengan mengikuti langkah-langkah di atas, Anda akan memiliki sistem tema terang/gelap yang fungsional dengan animasi transisi yang sangat mulus.