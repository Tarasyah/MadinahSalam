"use client";

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { InfiniteSlider } from '../ui/infinite-slider';

const soldOutPackages = [
  {
    id: 1,
    imageUrl: '/soldout/paketsoldout1.jpeg',
    alt: 'Paket Umrah Spesial yang sudah sold out',
    name: 'Program Umrah 12 Hari Keberangkatan 6 Juli 2025'
  },
  {
    id: 2,
    imageUrl: '/soldout/paketsoldout2.jpeg',
    alt: 'Paket Umrah Liburan yang sudah sold out',
    name: 'Program Umrah November 12 Hari Keberangkatan 06 November 2025'
  },
  {
    id: 3,
    imageUrl: '/soldout/paketsoldout3.jpeg',
    alt: 'Paket Umrah Liburan yang sudah sold out',
    name: 'Program Umrah Liburan Akhir Tahun Keberangkatan 15 Desember 2025'
  },
  {
    id: 4,
    imageUrl: '/soldout/paketsoldout4.jpeg',
    alt: 'Paket Umrah Awal Musim yang sudah sold out',
    name: 'Program Umrah Syawal 1447 H Keberangkatan 25 Maret 2025'
  },
  {
    id: 5,
    imageUrl: '/soldout/paketsoldout5.jpeg',
    alt: 'Paket Umrah Spesial lainnya yang sudah sold out',
    name: 'Program Umrah Awal Musim Keberangkatan 28 Juni 2025'
  },
];

const SoldOutSection = () => {
  return (
    <section id="sold-out" className="py-8 lg:py-12 bg-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Perjalanan Terdahulu
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Beberapa perjalanan yang telah kami selenggarakan dengan sukses. Nantikan paket menarik kami selanjutnya!
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <InfiniteSlider speed={1} itemClassName="gap-6 pr-6">
            {soldOutPackages.map((pkg) => (
              <div key={pkg.id} className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0">
                <div className="flex flex-col items-center">
                  <Card className="relative overflow-hidden rounded-lg group border-none shadow-lg w-full aspect-[3/4]">
                    <Image
                      src={pkg.imageUrl}
                      alt={pkg.alt}
                      fill
                      className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                      <div 
                        className={cn(
                          "border-4 border-red-500 text-red-500 rounded-lg px-6 py-3",
                          "font-headline font-bold text-3xl tracking-widest uppercase",
                          "-rotate-12 transform shadow-2xl bg-black/50 backdrop-blur-sm"
                        )}
                      >
                       Habis
                      </div>
                    </div>
                  </Card>
                  <p className="mt-4 text-center text-sm md:text-base text-muted-foreground px-2">
                    {pkg.name}
                  </p>
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default SoldOutSection;

