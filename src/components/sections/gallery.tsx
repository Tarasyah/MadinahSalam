"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { Card } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { DotButton, useDotButton } from '../ui/carousel-dots';

const GallerySection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
        Autoplay({ delay: 2000, stopOnInteraction: true })
    ]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const [scale, setScale] = useState<number[]>([]);
    const [opacity, setOpacity] = useState<number[]>([]);

    const TWEEN_FACTOR = 1.2;

    const tweenOpacity = useCallback((emblaApi: any, eventName: any) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();

        const getScrollTween = (scrollProgress: number) => {
            if (scrollProgress < 0) return 1 + scrollProgress / TWEEN_FACTOR
            if (scrollProgress > 0) return 1 - scrollProgress / TWEEN_FACTOR
            return 1
        }
        
        const newOpacity = emblaApi.scrollSnapList().map((scrollSnap: any, index: any) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInView = emblaApi.slidesInView()

            if (engine.options.loop && Math.abs(diffToTarget) > 0.5) {
                const wrap = Math.ceil(Math.abs(diffToTarget) / 1)
                diffToTarget = diffToTarget < 0 ? diffToTarget + wrap : diffToTarget - wrap
            }

            if (slidesInView.indexOf(index) === -1) return 0.3
            return getScrollTween(diffToTarget) * 1;
        })
        setOpacity(newOpacity)
    }, []);

    const tweenScale = useCallback((emblaApi: any, eventName: any) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();

        const getScrollTween = (scrollProgress: number) => {
            if (scrollProgress < 0) return 1 + scrollProgress / TWEEN_FACTOR
            if (scrollProgress > 0) return 1 - scrollProgress / TWEEN_FACTOR
            return 1
        }

        const newScale = emblaApi.scrollSnapList().map((scrollSnap: any, index: any) => {
            let diffToTarget = scrollSnap - scrollProgress;

            if (engine.options.loop && Math.abs(diffToTarget) > 0.5) {
                const wrap = Math.ceil(Math.abs(diffToTarget) / 1)
                diffToTarget = diffToTarget < 0 ? diffToTarget + wrap : diffToTarget - wrap
            }
            const tweenValue = 1 - Math.abs(diffToTarget) * 0.3
            return getScrollTween(diffToTarget) * tweenValue
        })
        setScale(newScale)
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        tweenOpacity(emblaApi, 'reInit');
        tweenScale(emblaApi, 'reInit');
        emblaApi.on('scroll', (emblaApi, eventName) => {
            tweenOpacity(emblaApi, eventName);
            tweenScale(emblaApi, eventName);
        });
        emblaApi.on('reInit', tweenOpacity);
        emblaApi.on('reInit', tweenScale);
    }, [emblaApi, tweenOpacity, tweenScale]);

    return (
        <section id="gallery" className="py-16 lg:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Galeri Perjalanan</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Momen-momen indah dan spiritual dari perjalanan umrah bersama kami.</p>
                </div>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4" style={{ perspective: '1000px' }}>
                            {galleryImages.map((image, index) => (
                                <div key={image.id} className="flex-grow-0 flex-shrink-0 basis-11/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                                     <div className="transition-transform duration-300 ease-out" style={{ transform: `scale(${scale[index] || 0})`, opacity: opacity[index] || 0 }}>
                                        <Card className="relative aspect-[4/3] overflow-hidden rounded-lg group border-none shadow-lg">
                                            <Image
                                                src={image.imageUrl}
                                                alt={image.description}
                                                data-ai-hint={image.imageHint}
                                                fill
                                                className="object-cover w-full h-full"
                                            />
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
