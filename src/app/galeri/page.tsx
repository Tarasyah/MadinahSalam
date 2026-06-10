"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const galleryImages = [
  { src: '/gallery/galeri1.jpg', title: 'Program Umrah 12 Hari Keberangkatan 6 Juli 2025' },
  { src: '/gallery/galeri2.jpg', title: 'Program Umrah November 12 Hari Keberangkatan 06 November 2025' },
  { src: '/gallery/galeri3.jpg', title: 'Program Umrah Liburan Akhir Tahun Keberangkatan 15 Desember 2025' },
  { src: '/gallery/galeri4.jpg', title: 'Program Umrah Syawal 1447 H Keberangkatan 25 Maret 2025' },
];

export default function GaleriPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-foreground">Galeri Perjalanan</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kumpulan momen indah kebersamaan jamaah Madinah Salam Wisata selama di Tanah Suci. 
            Semoga menjadi inspirasi dan pengobat rindu Baitullah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => router.push('/galeri/upload-progress')}
              className="relative rounded-xl overflow-hidden group cursor-pointer border border-border shadow-sm aspect-video"
            >
              <Image 
                src={img.src} 
                alt={img.title} 
                fill 
                unoptimized={true}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-4 md:p-6 w-full">
                  <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                    {img.title}
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium px-6 py-2 bg-black/60 backdrop-blur-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Lihat Foto Lainnya
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
