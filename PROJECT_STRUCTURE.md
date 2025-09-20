# Struktur Folder dan File Proyek

Dokumen ini memberikan penjelasan lengkap mengenai struktur folder dan file dalam proyek ini. Proyek ini dibangun menggunakan Next.js dengan App Router, TypeScript, Tailwind CSS, dan shadcn/ui.

## Direktori Utama (Root)

Berikut adalah file-file konfigurasi utama yang ada di direktori root:

-   `next.config.ts`: File konfigurasi utama untuk Next.js. Di sini Anda dapat mengatur hal-hal seperti aturan gambar, variabel lingkungan, dan pengalihan (redirect).
-   `tailwind.config.ts`: File konfigurasi untuk Tailwind CSS. Digunakan untuk menyesuaikan tema desain, seperti palet warna, jenis font (`fontFamily`), dan menambahkan plugin.
-   `package.json`: Menyimpan daftar semua pustaka/paket (dependencies) yang digunakan proyek, serta mendefinisikan skrip untuk menjalankan, membangun, dan mengelola aplikasi (misalnya, `npm run dev`).
-   `components.json`: File konfigurasi khusus untuk `shadcn/ui`. Ini menentukan di mana komponen UI kustom disimpan dan bagaimana mereka diintegrasikan ke dalam proyek.
-   `tsconfig.json`: File konfigurasi untuk TypeScript. Ini mengatur bagaimana kode TypeScript dikompilasi dan diperiksa tipenya.
-   `apphosting.yaml`: File konfigurasi untuk Firebase App Hosting, digunakan untuk mengatur perilaku backend saat di-deploy.
-   `.gitignore`: Berisi daftar file dan folder yang harus diabaikan oleh sistem kontrol versi Git (misalnya, `node_modules`).

---

## Direktori `src`

Ini adalah folder utama yang berisi semua kode sumber aplikasi Anda.

### `src/app`

Folder ini adalah inti dari aplikasi Anda yang menggunakan Next.js App Router. Setiap folder di dalamnya mewakili sebuah "rute" atau halaman.

-   `globals.css`: File CSS global tempat tema `shadcn/ui` (variabel warna, radius, dll.) didefinisikan. Anda dapat menyesuaikan skema warna utama aplikasi di sini.
-   `layout.tsx`: Ini adalah layout root yang membungkus seluruh aplikasi. Semua halaman akan dirender di dalam layout ini. File ini bagus untuk menempatkan elemen yang konsisten di semua halaman, seperti `Header` dan `Footer`.
-   `page.tsx`: Ini adalah file untuk halaman utama (homepage) Anda. Konten di sini akan ditampilkan saat pengguna mengunjungi rute `/`.
-   **`/about/page.tsx`**: Halaman "Tentang Kami".
-   **`/requirements/page.tsx`**: Halaman "Persyaratan".
-   **`/privacy-policy/page.tsx`**: Halaman "Kebijakan Privasi".
-   **`/terms-of-service/page.tsx`**: Halaman "Syarat & Ketentuan".

### `src/components`

Folder ini berisi semua komponen React yang dapat digunakan kembali.

-   **`/sections`**: Berisi komponen-komponen besar yang membentuk bagian-bagian dari sebuah halaman, seperti `HeroSection`, `GallerySection`, `TestimonialsSection`, dll.
-   **`/ui`**: Berisi komponen UI dasar dari `shadcn/ui` (misalnya, `Button.tsx`, `Card.tsx`, `Input.tsx`). Komponen-komponen ini adalah blok bangunan dasar untuk antarmuka pengguna Anda.
-   `header.tsx`: Komponen Header/Navbar yang muncul di bagian atas setiap halaman.
-   `footer.tsx`: Komponen Footer yang muncul di bagian bawah setiap halaman.
-   `custom-theme-provider.tsx`: Komponen kustom untuk mengelola pergantian tema terang/gelap dengan animasi transisi.
-   `theme-toggle.tsx`: Tombol yang digunakan untuk beralih antara mode terang dan gelap.

### `src/lib`

Folder ini ditujukan untuk fungsi utilitas, data, dan logika bisnis lainnya.

-   `utils.ts`: Berisi fungsi utilitas umum, seperti fungsi `cn` dari `shadcn/ui` yang berguna untuk menggabungkan nama kelas Tailwind CSS secara kondisional.
-   `data.ts`: File pusat untuk menyimpan data statis yang digunakan di seluruh aplikasi, seperti daftar paket umrah, testimoni, item galeri, dan fasilitas.
-   `placeholder-images.json`: File data JSON yang menyimpan informasi tentang semua gambar placeholder, termasuk URL dan deskripsi.
-   `placeholder-images.ts`: Mengekspor data dari file JSON di atas sebagai variabel yang dapat digunakan di dalam kode.

### `src/hooks`

Folder ini berisi React Hooks kustom.

-   `use-toast.ts`: Hook kustom untuk menampilkan notifikasi "toast".
-   `use-mobile.tsx`: Hook kustom untuk mendeteksi apakah pengguna sedang menggunakan perangkat seluler.

### `src/ai`

Folder ini dikhususkan untuk fungsionalitas terkait Kecerdasan Buatan (AI) menggunakan Genkit.

-   `genkit.ts`: File untuk menginisialisasi dan mengonfigurasi instance global Genkit, termasuk plugin yang digunakan (seperti `googleAI`).
-   `dev.ts`: File pengembangan yang digunakan untuk menjalankan dan menguji "flow" Genkit secara lokal.

### Direktori `public`

Folder ini digunakan untuk menyimpan aset statis yang dapat diakses langsung melalui URL.

-   **`/gallery`**: Berisi semua file gambar (`.webp`) yang ditampilkan di galeri.
-   File gambar lainnya seperti logo (`logo_lightmode.png`, `logo_darkmode.png`), ikon, dan gambar latar belakang. Aset di sini dapat diakses langsung dari root URL (misalnya, `/logo_lightmode.png`).
