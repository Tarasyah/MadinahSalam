"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { InfiniteSlider } from '../ui/infinite-slider';

const galleryImagesLocal = [
  { id: 1, imageUrl: '/gallery/galeri1.jpg', title: 'Program Umrah 12 Hari Keberangkatan 6 Juli 2025', link: '/galeri/6-juli-2025' },
  { id: 2, imageUrl: '/gallery/galeri2.jpg', title: 'Program Umrah November 12 Hari Keberangkatan 06 November 2025', link: '/galeri/upload-progress' },
  { id: 3, imageUrl: '/gallery/galeri3.jpg', title: 'Program Umrah Liburan Akhir Tahun Keberangkatan 15 Desember 2025', link: '/galeri/upload-progress' },
  { id: 4, imageUrl: '/gallery/galeri4.jpg', title: 'Program Umrah Syawal 1447 H Keberangkatan 25 Maret 2025', link: '/galeri/upload-progress' },
];

const GallerySection = () => {
    const router = useRouter();

    return (
        <section id="gallery" className="py-8 lg:py-12 bg-secondary overflow-hidden">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Galeri Perjalanan</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Momen-momen indah dan spiritual dari perjalanan umrah bersama kami.</p>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <InfiniteSlider speed={1.2} itemClassName="gap-6 pr-6">
                        {galleryImagesLocal.map((image) => (
                            <Link key={image.id} href={image.link} className="block w-[300px] sm:w-[400px] md:w-[450px] shrink-0">
                                 <div className="transition-transform duration-300 ease-out h-full">
                                    <Card 
                                        className="relative aspect-[4/3] overflow-hidden rounded-lg group border-none shadow-lg cursor-pointer h-full"
                                    >
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        
                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                                            <h3 className="text-white font-semibold text-lg sm:text-xl leading-snug drop-shadow-md">
                                                {image.title}
                                            </h3>
                                        </div>
                                    </Card>
                                 </div>
                            </Link>
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;

