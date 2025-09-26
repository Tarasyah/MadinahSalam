# Panduan Kode: Efek Gradien Batas Melayang (Hover Border Gradient)

Berikut adalah kode untuk komponen `HoverBorderGradient` yang menciptakan efek "cahaya berjalan" di sekitar kartu saat tidak di-hover, dan berubah menjadi sorotan saat di-hover.

Komponen ini menggunakan **React**, **Framer Motion** untuk animasi, dan **Tailwind CSS** untuk styling. Jika Anda ingin menggunakannya di platform seperti CodePen, pastikan untuk mengimpor pustaka React dan Framer Motion.

---

### 1. Kode Komponen `HoverBorderGradient`

Buat file komponen, misalnya `HoverBorderGradient.tsx`, dan salin kode di bawah ini. Komponen ini membungkus elemen lain dan menambahkan efek visual padanya.

```tsx
// src/components/ui/hover-border-gradient.tsx

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Fungsi utilitas untuk menggabungkan kelas Tailwind

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "div", 
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  // Fungsi untuk memutar arah gradien (cahaya berjalan)
  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // Peta gradien untuk setiap arah
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(25_5, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  // Gradien saat kursor berada di atas elemen (hover)
  // Anda bisa mengganti `hsl(var(--menu-background))` dengan warna yang Anda inginkan
  const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, hsl(var(--primary)) 0%, rgba(255, 255, 255, 0) 100%)";

  // Efek untuk mengubah arah gradien secara berkala
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex items-center justify-center overflow-visible p-px",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 h-full w-full rounded-[inherit] bg-card text-foreground",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration }}
      />
      <div className="absolute z-1 inset-[2px] flex-none rounded-[inherit] bg-card" />
    </Tag>
  );
}
```

---

### 2. Contoh Penggunaan

Berikut adalah cara menggunakan komponen `HoverBorderGradient` untuk membungkus sebuah kartu.

```tsx
import { HoverBorderGradient } from "./HoverBorderGradient"; // Sesuaikan path

export default function MyCard() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <HoverBorderGradient
        containerClassName="rounded-lg w-96"
        className="bg-gray-800" // Kelas untuk konten di dalamnya
        as="div"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">Rangkaian Perjalanan</h2>
          <p className="mt-2 text-gray-400">
            Ini adalah contoh kartu dengan efek cahaya berjalan di sekelilingnya.
            Arahkan kursor ke sini untuk melihat efek sorotan.
          </p>
        </div>
      </HoverBorderGradient>
    </div>
  );
}

```

### Penjelasan:

*   **`containerClassName`**: Digunakan untuk menerapkan gaya ke elemen pembungkus terluar, contohnya `rounded-lg` untuk membuat sudutnya membulat.
*   **`className`**: Diterapkan ke `div` yang berisi konten Anda (`children`). Ini berguna untuk mengatur warna latar belakang atau padding internal.
*   **`as`**: Anda bisa mengubah elemen HTML yang dirender. Defaultnya adalah `div`, tapi bisa juga diubah menjadi `button` atau `a` jika diperlukan.
*   **Animasi**: Komponen ini menciptakan tiga lapisan:
    1.  **Lapisan Atas**: Konten Anda (`children`).
    2.  **Lapisan Tengah**: Animasi gradien dari **Framer Motion** yang menciptakan efek cahaya.
    3.  **Lapisan Bawah**: Latar belakang solid yang sedikit lebih kecil dari lapisan animasi, menciptakan ilusi "batas" (border).
*   **Styling**: Efek ini sangat bergantung pada variabel warna CSS (`--primary`, `--card`) yang didefinisikan di file `globals.css` Anda. Jika Anda menggunakannya di tempat lain, pastikan untuk mendefinisikan warna-warna ini atau menggantinya langsung di dalam kode.

Semoga panduan ini membantu Anda menerapkan efek keren ini di proyek lain