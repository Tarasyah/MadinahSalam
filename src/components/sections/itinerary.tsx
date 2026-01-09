
import { itineraryData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const ItineraryItem = ({ item, isLast }: { item: typeof itineraryData[0], isLast: boolean }) => {
  return (
    <div className="flex gap-4 w-full">
      <div className="relative flex-shrink-0 flex flex-col items-center">
        {!isLast && <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border -z-10" />}
        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10 flex-shrink-0">
          {item.id}
        </div>
      </div>
      <div className="w-full pb-8">
        <div className="text-left">
          <p className="font-semibold text-muted-foreground">{item.date}</p>
          <p className="text-sm text-muted-foreground">{item.time}</p>
        </div>
        <Card
          className="mt-2 w-full bg-card/95 p-4 border transition-shadow hover:shadow-md"
        >
          <p className="font-bold text-primary">{item.title}</p>
          {item.subtitle && <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>}
        </Card>
      </div>
    </div>
  );
}

const ItinerarySection = () => {

  return (
    <section id="itinerary" className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Rangkaian Perjalanan</h2>
           <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Jadwal perjalanan 12 hari yang terperinci untuk memastikan pengalaman Umrah Anda penuh makna.
          </p>
        </div>

        <div className="flex flex-col relative">
             {itineraryData.map((item, index) => (
              <ItineraryItem key={item.id} item={item} isLast={index === itineraryData.length - 1} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default ItinerarySection;
