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
-   `PROJECT_STRUCTURE.md`: File ini, yang berisi penjelasan struktur proyek.

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

---

## Panduan Mengedit Konten Situs

Sebagian besar konten di situs ini dipisahkan dari kode tampilan untuk memudahkan pengeditan. Berikut adalah panduan untuk mengubah konten di berbagai bagian.

### 1. Mengganti Gambar & Teks di Hero Section

Konten pada *Hero Section* (slider gambar di halaman utama) diatur dalam dua file:
-   **Teks (Judul & Deskripsi)**: Buka file `src/lib/data.ts`. Cari variabel `heroDestinations`. Anda bisa mengubah `title` dan `description` untuk setiap slide.
-   **Gambar**:
    1.  Buka file `src/lib/placeholder-images.json`.
    2.  Cari objek dengan `id` yang sesuai (misalnya, `"hero-mekkah"`, `"hero-madinah"`).
    3.  Ganti nilai `imageUrl` dengan URL gambar baru Anda. Gambar bisa berasal dari folder `public` (misalnya, `/gambar-baru.webp`) atau dari URL eksternal.

### 2. Mengedit Rangkaian Perjalanan (Itinerary)

Jadwal perjalanan ditampilkan di halaman utama. Untuk mengeditnya:
1.  Buka file `src/lib/data.ts`.
2.  Cari variabel `itineraryData`.
3.  Ini adalah sebuah array, di mana setiap objek mewakili satu hari atau satu kegiatan dalam jadwal.
4.  Anda bisa mengubah `title`, `subtitle` (opsional), `date`, dan `time` untuk setiap item. Tambah atau hapus objek dari array ini untuk mengubah jumlah item jadwal.

### 3. Mengedit Fasilitas Paket (Include & Exclude)

Daftar fasilitas yang termasuk dan tidak termasuk dalam paket umrah juga diatur secara terpusat.
1.  Buka file `src/lib/data.ts`.
2.  Cari variabel `included` untuk fasilitas yang termasuk, atau `excluded` untuk fasilitas yang tidak termasuk.
3.  Anda bisa mengubah `title` dan `description` dari setiap item. Ikon (`icon`) juga bisa diganti dengan ikon lain dari pustaka `lucide-react`.

### 4. Mengedit Galeri Perjalanan

Gambar-gambar di galeri diatur dari file data dan folder `public`.
1.  **Menambah/Mengganti Gambar**:
    -   Letakkan file gambar baru Anda (disarankan format `.webp`) di dalam folder `public/gallery`.
    -   Buka file `src/lib/placeholder-images.json`. Tambahkan objek baru atau edit yang sudah ada di dalam array `placeholderImages`. Pastikan `id`-nya unik dan `imageUrl` menunjuk ke path gambar yang benar (misal: `/gallery/nama-gambar-baru.webp`).
2.  **Menampilkan Gambar di Galeri**:
    -   Buka file `src/lib/data.ts`.
    -   Cari variabel `galleryImages`.
    -   Tambahkan atau hapus item dari array ini menggunakan fungsi `findImage('id-gambar-anda')`, di mana `id-gambar-anda` adalah `id` yang Anda definisikan di `placeholder-images.json`. Urutan gambar di galeri ditentukan oleh urutan di array ini.

### 5. Mengedit Testimoni

Testimoni dari jamaah dapat diubah dengan cara berikut:
1.  Buka file `src/lib/data.ts`.
2.  Cari variabel `testimonials`.
3.  Edit properti `name`, `location`, dan `comment` untuk setiap testimoni.
4.  Untuk mengganti foto, ikuti langkah yang sama seperti mengganti gambar Hero Section: edit `id` gambar di `data.ts` dan perbarui `imageUrl` di `placeholder-images.json`.

### 6. Mengedit Paket Umrah

Detail paket umrah yang ditampilkan di halaman utama dapat diubah di:
1.  Buka file `src/lib/data.ts`.
2.  Cari variabel `packages`.
3.  Anda dapat mengubah semua detail di sini, termasuk `name`, `duration`, `price`, `priceDetails` (harga quad, triple, double), `features` (fasilitas utama), `airline`, dan `departure`.

### 7. Mengedit Halaman Persyaratan

Tidak seperti konten lainnya, halaman "Persyaratan" datanya ditulis langsung di dalam komponen React.
1.  Buka file `src/app/requirements/page.tsx`.
2.  Cari variabel `requirementItems`.
3.  Ini adalah sebuah array di mana setiap objek memiliki `title` (judul akordion) dan `content` (daftar poin-poin di dalamnya).
4.  Edit teks langsung di dalam array ini untuk mengubah konten halaman.
