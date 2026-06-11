"use client";

import React, { useCallback, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { DotButton, useDotButton } from '../ui/carousel-dots';

const galleryImagesLocal = [
  { id: 1, imageUrl: '/gallery/galeri1.jpg', title: 'Program Umrah 12 Hari Keberangkatan 6 Juli 2025' },
  { id: 2, imageUrl: '/gallery/galeri2.jpg', title: 'Program Umrah November 12 Hari Keberangkatan 06 November 2025' },
  { id: 3, imageUrl: '/gallery/galeri3.jpg', title: 'Program Umrah Liburan Akhir Tahun Keberangkatan 15 Desember 2025' },
  { id: 4, imageUrl: '/gallery/galeri4.jpg', title: 'Program Umrah Syawal 1447 H Keberangkatan 25 Maret 2025' },
];

const GallerySection = () => {
    const router = useRouter();
    const autoplay = useRef(
      Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
        autoplay.current
    ]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    useEffect(() => {
        if (!emblaApi) return;
    }, [emblaApi]);

    return (
        <section id="gallery" className="py-16 lg:py-24 bg-secondary">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Galeri Perjalanan</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Momen-momen indah dan spiritual dari perjalanan umrah bersama kami.</p>
                </div>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex md:-ml-4" style={{ perspective: '1000px' }}>
                            {galleryImagesLocal.map((image, index) => (
                                <div key={image.id} className="flex-grow-0 flex-shrink-0 basis-5/6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                                     <div className="transition-transform duration-300 ease-out">
                                        <Card 
                                            onClick={() => router.push('/galeri/upload-progress')}
                                            className="relative aspect-[4/3] overflow-hidden rounded-lg group border-none shadow-lg cursor-pointer"
                                        >
                                            <Image
                                                src={image.imageUrl}
                                                alt={image.title}
                                                fill
                                                unoptimized={true}
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                                              <div className="p-4 w-full">
                                                <h3 className="text-white font-bold text-sm md:text-base drop-shadow-md text-center leading-tight">
                                                  {image.title}
                                                </h3>
                                              </div>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                              <span className="text-white font-medium px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                Lihat Foto
                                              </span>
                                            </div>
                                        </Card>
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-6">
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

export default GallerySection;
