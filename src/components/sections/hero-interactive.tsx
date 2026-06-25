"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { heroDestinations } from '@/lib/data';
import { PackageSearch } from '@/components/ui/package-search';

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
            <div className="relative container h-full flex flex-col justify-center pb-20 lg:pb-32 pt-20"> 
                <div className="w-full lg:w-1/2 pr-4 z-10">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    >
                        <h1 className={cn(
                            "font-headline font-bold text-white drop-shadow-lg leading-tight",
                            "text-3xl sm:text-4xl lg:text-5xl",
                        )}>
                            {activeDestination.title}
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-white/90 drop-shadow-md max-w-lg">
                            {activeDestination.description}
                        </p>
                        <Button asChild size="sm" className="mt-6 rounded-full group">
                            <Link href="https://wa.me/6282210004644" target="_blank" rel="noopener noreferrer">
                                Hubungi Kami
                                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <PackageSearch />
                    </motion.div>
                </div>
            </div>
            
            {/* Floating Collage for Thumbnails */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-8 xl:right-16 hidden lg:block w-[500px] h-[600px] pointer-events-none z-10">
                
                {/* Airplane */}
                <motion.div 
                  className="absolute top-8 left-8 z-10 w-48 h-28 opacity-80"
                  initial={{ x: 150, y: -50, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 0.8 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                >
                  <img 
                    src="/pesawat_saudi_airline.png" 
                    alt="Saudi Airlines" 
                    className="w-full h-full object-contain drop-shadow-md" 
                  />
                </motion.div>

                {/* Card 1 (Main/Biggest) - Paket Umrah */}
                <motion.div
                    className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] rounded-2xl overflow-hidden border-[4px] border-white/90 shadow-2xl pointer-events-auto cursor-pointer z-50 transition-all duration-500",
                        activeIndex === 3 ? 'ring-4 ring-primary scale-105' : 'hover:scale-105 hover:-translate-y-2'
                    )}
                    onClick={() => handleThumbnailClick(3)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image src={heroDestinations[3].image.imageUrl} alt={heroDestinations[3].title} fill className="object-cover" />
                </motion.div>

                {/* Card 2 - Mekkah (Top Right) */}
                <motion.div
                    className={cn(
                        "absolute top-12 right-0 w-[200px] h-[140px] rounded-2xl overflow-hidden border-[3px] border-white/80 shadow-lg pointer-events-auto cursor-pointer z-20 transition-all duration-500",
                        activeIndex === 0 ? 'ring-2 ring-primary scale-105' : 'hover:scale-105 hover:-translate-y-1'
                    )}
                    onClick={() => handleThumbnailClick(0)}
                    initial={{ opacity: 0, x: 20, rotate: 2 }}
                    animate={{ opacity: 1, x: 0, rotate: 4 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image src={heroDestinations[0].image.imageUrl} alt={heroDestinations[0].title} fill className="object-cover" />
                </motion.div>

                {/* Card 3 - Madinah (Bottom Left) */}
                <motion.div
                    className={cn(
                        "absolute bottom-16 left-4 w-[160px] h-[160px] rounded-2xl overflow-hidden border-[3px] border-white/80 shadow-lg pointer-events-auto cursor-pointer z-30 transition-all duration-500",
                        activeIndex === 1 ? 'ring-2 ring-primary scale-105' : 'hover:scale-105 hover:-translate-y-1'
                    )}
                    onClick={() => handleThumbnailClick(1)}
                    initial={{ opacity: 0, x: -20, rotate: -4 }}
                    animate={{ opacity: 1, x: 0, rotate: -6 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image src={heroDestinations[1].image.imageUrl} alt={heroDestinations[1].title} fill className="object-cover" />
                </motion.div>

                {/* Card 4 - Thaif (Bottom Right) */}
                <motion.div
                    className={cn(
                        "absolute bottom-10 right-8 w-[180px] h-[140px] rounded-2xl overflow-hidden border-[3px] border-white/80 shadow-xl pointer-events-auto cursor-pointer z-40 transition-all duration-500",
                        activeIndex === 2 ? 'ring-2 ring-primary scale-105' : 'hover:scale-105 hover:-translate-y-1'
                    )}
                    onClick={() => handleThumbnailClick(2)}
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: -2 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image src={heroDestinations[2].image.imageUrl} alt={heroDestinations[2].title} fill className="object-cover" />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
