"use client";

import React from 'react';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

interface TestimonialsProps {
  hideTitle?: boolean;
}

const TestimonialsSection = ({ hideTitle = false }: TestimonialsProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        {!hideTitle && (
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Testimoni Jamaah</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Apa kata mereka yang telah mempercayakan perjalanannya bersama kami.
            </p>
          </div>
        )}
        
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <HoverBorderGradient
                    containerClassName="rounded-xl w-full h-full"
                    className="w-full h-full bg-background dark:bg-zinc-900"
                    as="div"
                  >
                    <Card className="h-full flex flex-col text-center shadow-md bg-transparent border-none">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <div className="flex flex-col items-center pt-2">
                          <div className="flex text-amber-500 mb-4 gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`} />
                              ))}
                          </div>
                          <p className="text-foreground/90 dark:text-gray-200 italic mb-6 text-sm leading-relaxed whitespace-pre-wrap">&quot;{testimonial.comment}&quot;</p>
                        </div>
                        <div className="text-center mt-auto">
                          <div className="font-bold text-foreground">{testimonial.name}</div>
                          <div className="text-[11px] text-muted-foreground mt-2 bg-secondary/80 dark:bg-secondary py-1 px-3 rounded-full inline-block">
                            {testimonial.packageInfo}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverBorderGradient>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16 bg-background hover:bg-secondary text-foreground border-border border shadow-sm" />
          <CarouselNext className="hidden md:flex -right-12 lg:-right-16 bg-background hover:bg-secondary text-foreground border-border border shadow-sm" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
