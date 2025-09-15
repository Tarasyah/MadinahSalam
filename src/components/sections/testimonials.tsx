import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Pilgrims Say</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Stories of faith and satisfaction from those who have traveled with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <CardContent className="p-0">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar.imageUrl}
                      alt={testimonial.name}
                      data-ai-hint={testimonial.avatar.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
