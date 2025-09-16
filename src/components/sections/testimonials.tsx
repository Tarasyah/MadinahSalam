"use client";

import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Testimoni Jamaah</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Apa kata mereka yang telah mempercayakan perjalanannya bersama kami.
          </p>
        </div>
        
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
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <HoverBorderGradient
                    containerClassName="rounded-lg w-full h-full"
                    className="w-full h-full bg-transparent"
                    as="div"
                  >
                    <Card className="h-full flex flex-col items-center text-center shadow-md bg-transparent border-none">
                      <CardContent className="p-6 flex flex-col items-center">
                          <Image
                              src={testimonial.image.imageUrl}
                              alt={testimonial.name}
                              data-ai-hint={testimonial.image.imageHint}
                              width={80}
                              height={80}
                              className="rounded-full mb-4 border-4 border-primary/20"
                          />
                          <div className="flex text-yellow-400 mb-2">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                          </div>
                          <p className="text-muted-foreground italic mb-4">&quot;{testimonial.comment}&quot;</p>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </CardContent>
                    </Card>
                  </HoverBorderGradient>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
