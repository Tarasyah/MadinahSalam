

import { itineraryData } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const ItineraryTimelinePath = () => (
    <svg width="608" height="1517" viewBox="0 0 608 1517" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto max-w-[608px] -z-10 hidden lg:block">
        <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                <stop offset="75%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                
                <animateTransform
                    attributeName="gradientTransform"
                    type="translate"
                    from="0 -1"
                    to="0 1"
                    dur="5s"
                    repeatCount="indefinite"
                />
            </linearGradient>

            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        
        <path d="M568 40.0001C568 18.4315 550.569 1 529 1H204C137.653 1 83 55.6532 83 122V152C83 204.484 40.4837 247 -12 247H-13M40 1477C40 1498.57 57.4315 1516 79 1516H404C470.347 1516 525 1461.35 525 1395V1385C525 1332.52 567.516 1290 619 1290H620M-13.0001 247H-16C-71.3923 247 -126 301.608 -126 357V385C-126 451.347 -71.3468 506 -5 506H304C370.347 506 425 560.653 425 627V655C425 721.347 479.653 776 546 776H568M568 776H546C479.653 776 425 830.653 425 897V925C425 991.347 370.347 1046 304 1046H79C12.6532 1046 -42 1100.65 -42 1167V1290H-12" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="2"/>
        
        <path d="M568 40.0001C568 18.4315 550.569 1 529 1H204C137.653 1 83 55.6532 83 122V152C83 204.484 40.4837 247 -12 247H-13M40 1477C40 1498.57 57.4315 1516 79 1516H404C470.347 1516 525 1461.35 525 1395V1385C525 1332.52 567.516 1290 619 1290H620M-13.0001 247H-16C-71.3923 247 -126 301.608 -126 357V385C-126 451.347 -71.3468 506 -5 506H304C370.347 506 425 560.653 425 627V655C425 721.347 479.653 776 546 776H568M568 776H546C479.653 776 425 830.653 425 897V925C425 991.347 370.347 1046 304 1046H79C12.6532 1046 -42 1100.65 -42 1167V1290H-12" stroke="url(#glowGradient)" strokeWidth="2" strokeLinecap="round" filter="url(#glowFilter)"/>
    </svg>
);


const ItineraryItem = ({ item, align }: { item: typeof itineraryData[0], align: 'left' | 'right' }) => {
  return (
    <>
      {/* Desktop Item */}
      <div className={cn(
        "hidden lg:flex items-center gap-4 w-auto transition-transform duration-300 ease-in-out hover:scale-105",
        "absolute",
        item.id === 1 && "top-[-40px] right-[calc(50%+40px)]",
        item.id === 2 && "top-[160px] right-[calc(50%+40px)]",
        item.id === 3 && "top-[420px] right-[calc(50%+40px)]",
        item.id === 4 && "top-[680px] right-[calc(50%+40px)]",
        item.id === 5 && "top-[940px] right-[calc(50%+40px)]",
        item.id === 6 && "top-[1200px] right-[calc(50%+40px)]",
        item.id === 7 && "top-[70px] left-[calc(50%+40px)]",
        item.id === 8 && "top-[330px] left-[calc(50%+40px)]",
        item.id === 9 && "top-[590px] left-[calc(50%+40px)]",
        item.id === 10 && "top-[850px] left-[calc(50%+40px)]",
        item.id === 11 && "top-[1110px] left-[calc(50%+40px)]",
        item.id === 12 && "top-[1370px] left-[calc(50%+40px)]",
        align === 'left' ? 'flex-row' : 'flex-row-reverse'
      )}>
        <div className={cn("text-right", align === 'left' ? 'lg:text-left' : 'lg:text-right')}>
          <p className="font-semibold text-muted-foreground">{item.date}</p>
          <p className="text-sm text-muted-foreground">{item.time}</p>
        </div>
        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
          {item.id}
        </div>
         <HoverBorderGradient
            containerClassName="rounded-lg w-64"
            className="bg-card/95 p-4"
            as="div"
          >
            <p className="font-bold text-primary">{item.title}</p>
            {item.subtitle && <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>}
        </HoverBorderGradient>
      </div>

      {/* Mobile/Tablet Item */}
      <div className="flex lg:hidden gap-4 w-full">
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
    </>
  );
}

const ItinerarySection = () => {
  const makkahItinerary = itineraryData.slice(0, 6);
  const madinahItinerary = itineraryData.slice(6);

  return (
    <section id="itinerary" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-24">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Rangkaian Perjalanan</h2>
           <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Jadwal perjalanan 12 hari yang terperinci untuk memastikan pengalaman Umrah Anda penuh makna.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden lg:block h-[1517px]">
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10 dark:opacity-20 pointer-events-none">
                <Image src="/timeline_rangkaianperjalanan.png" alt="Timeline Background" width={600} height={600} className="object-contain" />
            </div>
            <ItineraryTimelinePath />
            {itineraryData.map(item => (
                <ItineraryItem key={item.id} item={item} align={item.id > 6 ? 'left' : 'right'} />
            ))}
        </div>
        
        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden space-y-0">
          <div className="flex flex-col relative">
             <div className="absolute top-0 left-4 -translate-x-1/2 w-0.5 h-full bg-border -z-10" />
             <h3 className="font-headline text-2xl font-bold text-center text-primary border-b pb-2 mb-8">Keberangkatan & Makkah</h3>
             {makkahItinerary.map(item => (
              <ItineraryItem key={item.id} item={item} align="left" />
            ))}
          </div>
          <div className="flex flex-col relative mt-8">
             <div className="absolute top-0 left-4 -translate-x-1/2 w-0.5 h-full bg-border -z-10" />
             <h3 className="font-headline text-2xl font-bold text-center text-primary border-b pb-2 mb-8">Madinah & Kepulangan</h3>
             {madinahItinerary.map(item => (
              <ItineraryItem key={item.id} item={item} align="left" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ItinerarySection;
