
import { itineraryData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const ItineraryItem = ({ item }: { item: typeof itineraryData[0] }) => {
  return (
    <div className="flex gap-4 w-full">
      <div className="relative flex-shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border -z-10" />
        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10">
          {item.id}
        </div>
      </div>
      <div className="w-full pb-8">
        <div className="text-left">
          <p className="font-semibold text-muted-foreground">{item.date}</p>
          <p className="text-sm text-muted-foreground">{item.time}</p>
        </div>
        <HoverBorderGradient
          containerClassName="rounded-lg mt-2 w-full"
          className="bg-card/95 p-4"
          as="div"
        >
          <p className="font-bold text-primary">{item.title}</p>
          {item.subtitle && <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>}
        </HoverBorderGradient>
      </div>
    </div>
  );
}

const ItinerarySection = () => {
  const makkahItinerary = itineraryData.slice(0, 6);
  const madinahItinerary = itineraryData.slice(6);

  return (
    <section id="itinerary" className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Rangkaian Perjalanan</h2>
           <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Jadwal perjalanan 12 hari yang terperinci untuk memastikan pengalaman Umrah Anda penuh makna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
          {/* Kolom Makkah */}
          <div className="flex flex-col relative">
             <div className="absolute top-0 left-4 -translate-x-1/2 w-0.5 h-full bg-border -z-10" />
             <h3 className="font-headline text-2xl font-bold text-center text-primary border-b pb-2 mb-8">Keberangkatan & Makkah</h3>
             {makkahItinerary.map(item => (
              <ItineraryItem key={item.id} item={item} />
            ))}
          </div>
          
          {/* Kolom Madinah */}
          <div className="flex flex-col relative mt-8 lg:mt-0">
             <div className="absolute top-0 left-4 -translate-x-1/2 w-0.5 h-full bg-border -z-10" />
             <h3 className="font-headline text-2xl font-bold text-center text-primary border-b pb-2 mb-8">Madinah & Kepulangan</h3>
             {madinahItinerary.map(item => (
              <ItineraryItem key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ItinerarySection;
