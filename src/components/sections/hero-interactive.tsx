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
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-12 xl:right-24 hidden lg:block w-[550px] h-[550px] pointer-events-none z-10">
                
                {/* Airplane */}
                <motion.div 
                  className="absolute top-[35px] left-[60px] z-30 w-40 h-24 opacity-95"
                  initial={{ x: -50, y: 50, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                >
                  <img 
                    src="/pesawat_saudi_airline.png" 
                    alt="Saudi Airlines" 
                    className="w-full h-full object-contain drop-shadow-md" 
                  />
                </motion.div>

                {/* Card 1 (Main/Biggest) - Paket Umrah (Behind the 3 cards) */}
                <motion.div
                    className={cn(
                        "absolute top-[60px] left-[145px] w-[260px] h-[360px] rounded-2xl overflow-hidden border-[6px] border-white shadow-xl pointer-events-auto cursor-pointer z-20",
                        activeIndex === 3 ? 'ring-4 ring-primary' : ''
                    )}
                    onClick={() => handleThumbnailClick(3)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.05, zIndex: 50 }}
                >
                    <Image src={heroDestinations[3].image.imageUrl} alt={heroDestinations[3].title} fill className="object-cover" />
                </motion.div>

                {/* Card 2 - Mekkah (Bottom Left, Tilted Left) */}
                <motion.div
                    className={cn(
                        "absolute bottom-10 left-[20px] w-[180px] h-[180px] rounded-xl overflow-hidden border-[4px] border-white shadow-lg pointer-events-auto cursor-pointer z-30",
                        activeIndex === 0 ? 'ring-2 ring-primary' : ''
                    )}
                    onClick={() => handleThumbnailClick(0)}
                    initial={{ opacity: 0, x: -20, rotate: -10 }}
                    animate={{ opacity: 1, x: 0, rotate: -6 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                >
                    <Image src={heroDestinations[0].image.imageUrl} alt={heroDestinations[0].title} fill className="object-cover" />
                </motion.div>

                {/* Card 3 - Madinah (Bottom Center, Straight, In Front) */}
                <motion.div
                    className={cn(
                        "absolute bottom-4 left-[185px] w-[180px] h-[180px] rounded-xl overflow-hidden border-[4px] border-white shadow-xl pointer-events-auto cursor-pointer z-40",
                        activeIndex === 1 ? 'ring-2 ring-primary' : ''
                    )}
                    onClick={() => handleThumbnailClick(1)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.1, zIndex: 50 }}
                >
                    <Image src={heroDestinations[1].image.imageUrl} alt={heroDestinations[1].title} fill className="object-cover" />
                </motion.div>

                {/* Card 4 - Thaif (Bottom Right, Tilted Right) */}
                <motion.div
                    className={cn(
                        "absolute bottom-10 left-[350px] w-[180px] h-[180px] rounded-xl overflow-hidden border-[4px] border-white shadow-lg pointer-events-auto cursor-pointer z-30",
                        activeIndex === 2 ? 'ring-2 ring-primary' : ''
                    )}
                    onClick={() => handleThumbnailClick(2)}
                    initial={{ opacity: 0, x: 20, rotate: 10 }}
                    animate={{ opacity: 1, x: 0, rotate: 6 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                >
                    <Image src={heroDestinations[2].image.imageUrl} alt={heroDestinations[2].title} fill className="object-cover" />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
