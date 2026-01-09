"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { heroDestinations } from '@/lib/data';

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeDestination = heroDestinations[activeIndex];

    const nextSlide = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % heroDestinations.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [activeIndex, nextSlide]);

    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="relative h-screen w-screen text-white overflow-hidden" id="home">
            <AnimatePresence initial={false}>
                <motion.div
                    key={activeIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <Image
                        src={activeDestination.image.imageUrl}
                        alt={activeDestination.image.description}
                        data-ai-hint={activeDestination.image.imageHint}
                        fill
                        className="object-cover"
                        priority={heroDestinations.indexOf(activeDestination) === 0}
                        unoptimized={activeDestination.image.imageUrl.endsWith('.jpeg')}
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            {/* Wadah untuk Teks */}
            <div className="relative container h-full flex flex-col justify-center lg:pb-8"> 
                <div className="w-full lg:w-3/5 pr-4">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    >
                        <h1 className={cn(
                            "font-headline font-bold text-white drop-shadow-lg leading-tight",
                            "text-4xl md:text-5xl lg:text-6xl",
                            "whitespace-nowrap" // Perubahan 2: Judul jadi 1 baris
                        )}>
                            {activeDestination.title}
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-white/90 drop-shadow-md max-w-lg">
                            {activeDestination.description}
                        </p>
                        <Button asChild size="sm" className="mt-8 rounded-full group">
                            <Link href="/#packages">
                                Jelajahi Paket
                                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
            
            {/* Wadah untuk Thumbnails (Tidak berubah) */}
            <div className="absolute bottom-12 right-0 pr-4 lg:pr-8 xl:pr-16 hidden lg:flex">
                <div className="grid grid-cols-4 gap-3">
                    {heroDestinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            className={cn(
                                "relative h-48 w-36 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300",
                                activeIndex === index ? 'border-primary' : 'border-transparent hover:border-white/50'
                            )}
                            onClick={() => handleThumbnailClick(index)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={dest.image.imageUrl}
                                alt={dest.image.description}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-3">
                                <h3 className="font-semibold text-sm leading-tight">{dest.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;