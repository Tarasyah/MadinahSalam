import Image from 'next/image';
import { itinerary } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ItinerarySection = () => {
  return (
    <section id="itinerary" className="py-16 lg:py-24 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Rangkaian Perjalanan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Kami telah menyusun jadwal perjalanan 9 hari yang nyaman dan terperinci untuk memastikan pengalaman Umrah Anda berjalan lancar dan penuh makna.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {itinerary.map((item, index) => (
            <div key={index} className={`relative flex items-start my-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="absolute left-1/2 top-5 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              
              <div className="w-[calc(50%-2rem)]">
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-primary">{item.day}</CardTitle>
                    <p className="text-xl font-semibold text-foreground">{item.title}</p>
                  </CardHeader>
                  <CardContent>
                     <div className="grid grid-cols-2 gap-2">
                        {item.images.map(img => (
                            <div key={img.id} className="relative aspect-4/3 rounded-md overflow-hidden group">
                                <Image
                                    src={img.imageUrl}
                                    alt={img.description}
                                    data-ai-hint={img.imageHint}
                                    fill
                                    className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
