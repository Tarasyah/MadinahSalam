"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { InfiniteSlider } from '../ui/infinite-slider';

const galleryImagesLocal = [
  { id: 1, imageUrl: '/gallery/galeri1.jpg', title: 'Program Umrah 12 Hari Keberangkatan 6 Juli 2025' },
  { id: 2, imageUrl: '/gallery/galeri2.jpg', title: 'Program Umrah November 12 Hari Keberangkatan 06 November 2025' },
  { id: 3, imageUrl: '/gallery/galeri3.jpg', title: 'Program Umrah Liburan Akhir Tahun Keberangkatan 15 Desember 2025' },
  { id: 4, imageUrl: '/gallery/galeri4.jpg', title: 'Program Umrah Syawal 1447 H Keberangkatan 25 Maret 2025' },
];

const GallerySection = () => {
    const router = useRouter();

    return (
        <section id="gallery" className="py-16 lg:py-24 bg-secondary overflow-hidden">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Galeri Perjalanan</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Momen-momen indah dan spiritual dari perjalanan umrah bersama kami.</p>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <InfiniteSlider speed={1.2} itemClassName="gap-6 pr-6">
                        {galleryImagesLocal.map((image) => (
                            <div key={image.id} className="w-[300px] sm:w-[400px] md:w-[450px] shrink-0">
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
                                            className="object-cover w-full h-full pointer-events-none"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end pointer-events-none">
                                          <div className="p-4 w-full">
                                            <h3 className="text-white font-bold text-sm md:text-base drop-shadow-md text-center leading-tight">
                                              {image.title}
                                            </h3>
                                          </div>
                                        </div>
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                          <span className="text-white font-medium px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            Lihat Foto
                                          </span>
                                        </div>
                                    </Card>
                                 </div>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;

