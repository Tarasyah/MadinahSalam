import Image from 'next/image';
import { itinerary } from '@/lib/data';

const ItinerarySection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container max-w-5xl mx-auto">
        <div className="text-left mb-12 relative">
           <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-16 bg-primary"></div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold ml-24">ABOUT THE TOUR</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="text-muted-foreground space-y-6">
            <p>
              We've planned a simple and convenient 10-day itinerary for your trip to Japan. You'll visit three cities: <span className="text-primary">Osaka, Kyoto, and Tokyo.</span>
            </p>
            <p>
              No need to worry about routes, schedules, or finding places – everything is already organized. We'll show you where to go, what to see, and where to eat, so you can simply enjoy the journey.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border -z-10" />

            {itinerary.map((item, index) => (
              <div key={index} className="relative pl-12 mb-8">
                <div className="absolute left-4 top-1 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="font-bold">{item.day}</div>
                <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    {item.images.map(img => {
                        const image = img;
                        return image ? (
                            <div key={image.id} className="relative aspect-video rounded-md overflow-hidden">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    data-ai-hint={image.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : null;
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
