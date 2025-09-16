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
        <section className="relative h-[70vh] min-h-[500px] w-full flex text-white overflow-hidden" id="home">
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
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            <div className="relative z-10 flex flex-col justify-between container pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Top Spacer */}
                <div></div>

                {/* Main Content */}
                <div className="max-w-xl">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    >
                        <h1 className="font-headline text-5xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight">
                            {activeDestination.title}
                        </h1>
                        <p className="mt-4 max-w-lg text-lg md:text-xl text-white/90 drop-shadow-md">
                            {activeDestination.description}
                        </p>
                        <Button asChild size="lg" className="mt-8 rounded-full group">
                            <Link href="/#packages">
                                Jelajahi Paket
                                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Thumbnails */}
                <div className="flex justify-start md:justify-end">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {heroDestinations.map((dest, index) => (
                            <motion.div
                                key={dest.id}
                                className={cn(
                                    "relative h-40 w-32 md:h-48 md:w-36 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300",
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
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-3">
                                    <h3 className="font-semibold text-sm leading-tight">{dest.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
