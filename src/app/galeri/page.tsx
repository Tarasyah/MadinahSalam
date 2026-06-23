"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

const galleryImages = [
  { src: '/gallery/galeri1.jpg', title: 'Program Umrah 12 Hari Keberangkatan 6 Juli 2025', href: '/galeri/6-juli-2025' },
  { src: '/gallery/galeri2.jpg', title: 'Program Umrah November 12 Hari Keberangkatan 06 November 2025', href: '/galeri/upload-progress' },
  { src: '/gallery/galeri3.jpg', title: 'Program Umrah Liburan Akhir Tahun Keberangkatan 15 Desember 2025', href: '/galeri/upload-progress' },
  { src: '/gallery/galeri4.jpg', title: 'Program Umrah Syawal 1447 H Keberangkatan 25 Maret 2025', href: '/galeri/upload-progress' },
];

export default function GaleriPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/background_tabgaleri.jpg"
          alt="Galeri Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white">Galeri Perjalanan</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Kumpulan momen indah kebersamaan jamaah Madinah Salam Wisata selama di Tanah Suci. 
            Semoga menjadi inspirasi dan pengobat rindu Baitullah.
          </p>
        </div>
      </section>

      <div className="container py-8 mt-8">
        <div className="relative max-w-7xl mx-auto">
          <InfiniteSlider speed={1.2} itemClassName="gap-6 pr-6">
            {galleryImages.map((img, idx) => (
              <Link 
                key={idx} 
                href={img.href}
                className="block w-[280px] sm:w-[350px] md:w-[400px] shrink-0"
              >
                <div className="relative rounded-xl overflow-hidden group cursor-pointer border border-border shadow-sm aspect-video h-full">
                  <Image 
                    src={img.src} 
                    alt={img.title} 
                    fill 
                    unoptimized={true}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end pointer-events-none">
                    <div className="p-4 md:p-6 w-full">
                      <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                        {img.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-white font-medium px-6 py-2 bg-black/60 backdrop-blur-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Lihat Foto Lainnya
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </main>
  );
}
