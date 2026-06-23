"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { InfiniteSlider } from '@/components/ui/infinite-slider';

export default function Galeri6Juli2025Page() {
  // Memuat 40 gambar sesuai penamaan
  const totalImages = 40;
  const images = Array.from({ length: totalImages }, (_, i) => ({
    src: `/gallery/6-juli-2025/Program Umrah 12 Hari Keberangkatan 6 Juli 2025 (${i + 1}).jpg`,
    alt: `Momen Galeri 6 Juli 2025 - ${i + 1}`
  }));

  return (
    <main className="min-h-screen bg-background pb-16 relative">
      {/* Tombol Kembali */}
      <div className="absolute top-24 left-4 md:left-12 z-20">
        <Link href="/galeri" className="inline-flex items-center text-sm font-medium hover:underline text-white transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Galeri
        </Link>
      </div>

      {/* Hero Section untuk Halaman Galeri Detail */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src="/gallery/galeri1.jpg"
          alt="Background Galeri Umrah 6 Juli 2025"
          fill
          priority
          className="object-cover object-[center_65%]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-white">Galeri Umrah 6 Juli 2025</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Kumpulan momen kebersamaan dan ibadah jamaah Program Umrah 12 Hari.
          </p>
        </div>
      </section>

      {/* Carousel Foto-foto */}
      <div className="container py-8 mt-8 max-w-[90rem] mx-auto px-4">
        <InfiniteSlider speed={1.2} itemClassName="gap-4 pr-4">
          {images.map((img, idx) => (
            <div key={idx} className="w-[280px] sm:w-[350px] md:w-[400px] shrink-0 py-2">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-md bg-muted/50 group cursor-pointer">
                    <Image 
                      src={img.src} 
                      alt={img.alt} 
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="text-white font-medium px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Perbesar Foto
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-2 bg-black/95 border-none shadow-2xl text-white">
                  <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                  <div className="relative w-full h-[80vh] sm:h-[85vh]">
                    <Image 
                      src={img.src} 
                      alt={img.alt} 
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </main>
  );
}

