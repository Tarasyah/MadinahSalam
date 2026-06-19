"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

export default function Galeri6Juli2025Page() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

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
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-white">Galeri Umrah 6 Juli 2025</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Kumpulan momen kebersamaan dan ibadah jamaah Program Umrah 12 Hari.
          </p>
        </div>
      </section>

      {/* Carousel Foto-foto */}
      <div className="container py-8 mt-8 max-w-6xl mx-auto px-8 md:px-16">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((img, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-md bg-muted/50 group">
                    <Image 
                      src={img.src} 
                      alt={img.alt} 
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12 h-10 w-10 md:h-12 md:w-12 bg-background/90 shadow-md backdrop-blur z-10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all" />
          <CarouselNext className="-right-4 md:-right-12 h-10 w-10 md:h-12 md:w-12 bg-background/90 shadow-md backdrop-blur z-10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all" />
        </Carousel>
      </div>
    </main>
  );
}
