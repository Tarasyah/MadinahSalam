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
            <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-12 xl:right-24 hidden lg:block w-[500px] h-[600px] pointer-events-none">
                
                {/* Airplane */}
                <motion.div 
                  className="absolute -top-16 -right-12 z-50 w-80 h-48 drop-shadow-2xl"
                  initial={{ x: 150, y: -50, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                >
                  <img 
                    src="/pesawat_saudi_airline.jpg" 
                    alt="Saudi Airlines" 
                    className="w-full h-full object-contain [mix-blend-mode:screen] opacity-90 brightness-110" 
                  />
                </motion.div>

                {/* Card 1 */}
                <motion.div
                    className={cn(
                        "absolute top-24 left-4 w-60 h-80 rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl pointer-events-auto cursor-pointer z-30 transition-all",
                        activeIndex === 0 ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'
                    )}
                    onClick={() => handleThumbnailClick(0)}
                    initial={{ opacity: 0, x: 50, rotate: 0 }}
                    animate={{ opacity: 1, x: 0, rotate: -6 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ zIndex: 60 }}
                >
                    <Image src={heroDestinations[0].image.imageUrl} alt={heroDestinations[0].title} fill className="object-cover" />
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    className={cn(
                        "absolute top-8 right-8 w-48 h-60 rounded-2xl overflow-hidden border-[5px] border-white shadow-xl pointer-events-auto cursor-pointer z-20 transition-all",
                        activeIndex === 1 ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'
                    )}
                    onClick={() => handleThumbnailClick(1)}
                    initial={{ opacity: 0, x: 50, rotate: 0 }}
                    animate={{ opacity: 1, x: 0, rotate: 12 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ zIndex: 60 }}
                >
                    <Image src={heroDestinations[1].image.imageUrl} alt={heroDestinations[1].title} fill className="object-cover" />
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    className={cn(
                        "absolute bottom-12 left-16 w-52 h-48 rounded-2xl overflow-hidden border-[5px] border-white shadow-xl pointer-events-auto cursor-pointer z-40 transition-all",
                        activeIndex === 2 ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'
                    )}
                    onClick={() => handleThumbnailClick(2)}
                    initial={{ opacity: 0, y: 50, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: 8 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ zIndex: 60 }}
                >
                    <Image src={heroDestinations[2].image.imageUrl} alt={heroDestinations[2].title} fill className="object-cover" />
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    className={cn(
                        "absolute bottom-4 right-12 w-48 h-56 rounded-2xl overflow-hidden border-[5px] border-white shadow-2xl pointer-events-auto cursor-pointer z-20 transition-all",
                        activeIndex === 3 ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'
                    )}
                    onClick={() => handleThumbnailClick(3)}
                    initial={{ opacity: 0, y: 50, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: -15 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ zIndex: 60 }}
                >
                    <Image src={heroDestinations[3].image.imageUrl} alt={heroDestinations[3].title} fill className="object-cover" />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
