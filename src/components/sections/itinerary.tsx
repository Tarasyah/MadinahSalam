import { itinerary } from '@/lib/data';

const ItinerarySection = () => {
  return (
    <section id="itinerary" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">A Glimpse of Your Journey</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Follow a path of devotion with our thoughtfully planned itinerary.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {itinerary.map((item, index) => (
            <div key={index} className="relative mb-12 md:mb-8">
              <div className="flex items-center md:justify-center">
                {/* Desktop Icon & Day */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="z-10 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-2 font-bold text-sm">DAY {item.day}</div>
                </div>
                
                {/* Mobile Icon & Day */}
                <div className="flex-shrink-0 md:hidden mr-4">
                  <div className="z-10 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center">
                     <item.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-5/12 p-4 rounded-lg bg-card shadow-md border md:ml-8 flex-grow">
                   <div className="font-bold text-sm md:hidden mb-2">DAY {item.day}</div>
                  <h3 className="font-bold font-headline text-xl mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
