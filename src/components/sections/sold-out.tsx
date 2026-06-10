"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from '../ui/carousel-dots';

const soldOutPackages = [
  {
    id: 1,
    imageUrl: '/soldout/paketsoldout1.jpeg',
    alt: 'Paket Umrah Spesial yang sudah sold out',
  },
  {
    id: 2,
    imageUrl: '/soldout/paketsoldout2.jpeg',
    alt: 'Paket Umrah Liburan yang sudah sold out',
  },
  {
    id: 3,
    imageUrl: '/soldout/paketsoldout3.jpeg',
    alt: 'Paket Umrah Liburan yang sudah sold out',
  },
  {
    id: 4,
    imageUrl: '/soldout/paketsoldout4.jpeg',
    alt: 'Paket Umrah Awal Musim yang sudah sold out',
  },
  {
    id: 5,
    imageUrl: '/soldout/paketsoldout5.jpeg',
    alt: 'Paket Umrah Spesial lainnya yang sudah sold out',
  },
];

const SoldOutSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
      autoplay.current
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section id="sold-out" className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Perjalanan Terdahulu
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Beberapa perjalanan yang telah kami selenggarakan dengan sukses. Nantikan paket menarik kami selanjutnya!
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:-ml-4">
              {soldOutPackages.map((pkg) => (
                <div key={pkg.id} className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                  <Card className="relative overflow-hidden rounded-lg group border-none shadow-lg w-full aspect-[3/4]">
                    <Image
                      src={pkg.imageUrl}
                      alt={pkg.alt}
                      fill
                      className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8">
              {scrollSnaps.map((_, index) => (
                  <DotButton
                      key={index}
                      onClick={() => onDotButtonClick(index)}
                      className={cn(
                          "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                          index === selectedIndex ? 'bg-primary w-6' : 'bg-muted'
                      )}
                  />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoldOutSection;
