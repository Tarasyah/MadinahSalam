"use client";

import React from 'react';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { InfiniteSlider } from '../ui/infinite-slider';

interface TestimonialsProps {
  hideTitle?: boolean;
}

const TestimonialsSection = ({ hideTitle = false }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container">
        {!hideTitle && (
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Testimoni Jamaah</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Apa kata mereka yang telah mempercayakan perjalanannya bersama kami.
            </p>
          </div>
        )}
        
        <div className="w-full max-w-7xl mx-auto relative">
          <InfiniteSlider speed={0.8} itemClassName="gap-6 pr-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-[300px] sm:w-[350px] md:w-[400px] shrink-0 h-full py-4">
                <HoverBorderGradient
                  containerClassName="rounded-xl w-full h-full"
                  className="w-full h-full bg-background dark:bg-zinc-900"
                  as="div"
                >
                  <Card className="h-full flex flex-col text-center shadow-md bg-transparent border-none">
                    <CardContent className="p-6 flex flex-col justify-between h-full min-h-[220px]">
                      <div className="flex flex-col items-center pt-2">
                        <div className="flex text-amber-500 mb-4 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`} />
                            ))}
                        </div>
                        <div className="max-h-[140px] overflow-y-auto scrollbar-thin pr-2 mb-6 text-left">
                          <p className="text-foreground/90 dark:text-gray-200 italic text-sm leading-relaxed whitespace-pre-wrap select-none">&quot;{testimonial.comment}&quot;</p>
                        </div>
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
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

