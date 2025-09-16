import { itineraryData } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const ItineraryTimelinePath = () => (
  <>
    <svg width="608" height="1517" viewBox="0 0 608 1517" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto max-w-[608px] -z-10 hidden lg:block">
        <path d="M568 40.0001C568 18.4315 550.569 1 529 1H204C137.653 1 83 55.6532 83 122V152C83 204.484 40.4837 247 -12 247H-13" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="2"/>
        <path d="M40 1477C40 1498.57 57.4315 1516 79 1516H404C470.347 1516 525 1461.35 525 1395V1385C525 1332.52 567.516 1290 619 1290H620" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="2"/>
        <path d="M-13.0001 247H-16C-71.3923 247 -126 301.608 -126 357V385C-126 451.347 -71.3468 506  -5 506H304C370.347 506 425 560.653 425 627V655C425 721.347 479.653 776 546 776H568" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="2"/>
        <path d="M568 776H546C479.653 776 425 830.653 425 897V925C425 991.347 370.347 1046 304 1046H79C12.6532 1046 -42 1100.65 -42 1167V1290H-12" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="2"/>
        <path d="M529 40.0001C529 18.4315 511.569 1 490 1H204C137.653 1 83 55.6532 83 122V152C83 204.484 40.4837 247 -12 247" stroke="url(#paint0_linear_3_341)" strokeWidth="10" strokeLinecap="round"/>
        <path d="M525 1477C525 1498.57 507.569 1516 486 1516H404C470.347 1516 525 1461.35 525 1395V1385C525 1332.52 567.516 1290 619 1290" stroke="url(#paint1_linear_3_341)" strokeWidth="10" strokeLinecap="round"/>
        <path d="M-12 247H-15C-70.3923 247 -125 301.608 -125 357V385C-125 451.347 -70.3468 506 -4 506H304C370.347 506 425 560.653 425 627V655C425 721.347 479.653 776 546 776" stroke="url(#paint2_linear_3_341)" strokeWidth="10" strokeLinecap="round"/>
        <path d="M546 776H546C479.653 776 425 830.653 425 897V925C425 991.347 370.347 1046 304 1046H79C12.6532 1046 -42 1100.65 -42 1167V1290" stroke="url(#paint3_linear_3_341)" strokeWidth="10" strokeLinecap="round"/>
        <defs>
            <linearGradient id="paint0_linear_3_341" x1="-12" y1="247" x2="529" y2="40.0001" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--primary))" stopOpacity="0"/>
                <stop offset="1" stopColor="hsl(var(--primary))"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3_341" x1="619" y1="1290" x2="486" y2="1516" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--primary))" stopOpacity="0"/>
                <stop offset="1" stopColor="hsl(var(--primary))"/>
            </linearGradient>
            <linearGradient id="paint2_linear_3_341" x1="-15" y1="247" x2="546" y2="776" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--primary))" stopOpacity="0"/>
                <stop offset="1" stopColor="hsl(var(--primary))"/>
            </linearGradient>
            <linearGradient id="paint3_linear_3_341" x1="-42" y1="1290" x2="546" y2="776" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--primary))" stopOpacity="0"/>
                <stop offset="1" stopColor="hsl(var(--primary))"/>
            </linearGradient>
            <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes draw-line {
                        0% { stroke-dashoffset: 2000; }
                        100% { stroke-dashoffset: 0; }
                    }
                    @keyframes glow {
                        0%, 100% { filter: drop-shadow(0 0 5px hsl(var(--primary))); }
                        50% { filter: drop-shadow(0 0 15px hsl(var(--primary))); }
                    }
                    svg path[stroke-linecap="round"] {
                        stroke-dasharray: 2000;
                        animation: draw-line 30s linear infinite, glow 3s ease-in-out infinite;
                    }
                `}} />
        </defs>
    </svg>
  </>
);


const ItineraryItem = ({ item, align }: { item: typeof itineraryData[0], align: 'left' | 'right' }) => {
  const isLeft = align === 'left';
  return (
    <div className={cn(
      "flex items-center gap-4 w-full lg:w-auto", 
      isLeft ? 'flex-row-reverse lg:flex-row' : 'flex-row',
      "lg:absolute",
      item.id === 1 && "lg:top-[-40px] lg:right-[calc(50%+40px)]",
      item.id === 2 && "lg:top-[160px] lg:right-[calc(50%+40px)]",
      item.id === 3 && "lg:top-[420px] lg:right-[calc(50%+40px)]",
      item.id === 4 && "lg:top-[680px] lg:right-[calc(50%+40px)]",
      item.id === 5 && "lg:top-[940px] lg:right-[calc(50%+40px)]",
      item.id === 6 && "lg:top-[1200px] lg-right-[calc(50%+40px)]",
      item.id === 7 && "lg:top-[70px] lg:left-[calc(50%+40px)]",
      item.id === 8 && "lg:top-[330px] lg:left-[calc(50%+40px)]",
      item.id === 9 && "lg:top-[590px] lg:left-[calc(50%+40px)]",
      item.id === 10 && "lg:top-[850px] lg:left-[calc(50%+40px)]",
      item.id === 11 && "lg:top-[1110px] lg:left-[calc(50%+40px)]",
      item.id === 12 && "lg:top-[1370px] lg:left-[calc(50%+40px)]",
    )}>
      <div className={cn("text-right", isLeft && 'lg:text-right', !isLeft && 'lg:text-left')}>
        <p className="font-semibold text-muted-foreground">{item.date}</p>
        <p className="text-sm text-muted-foreground">{item.time}</p>
      </div>
      <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
        {item.id}
      </div>
      <div className={cn("p-4 rounded-lg bg-card/80 backdrop-blur-sm border shadow-lg w-full lg:w-64", isLeft ? 'text-left' : 'text-right lg:text-left')}>
        <p className="font-bold text-primary">{item.title}</p>
        {item.subtitle && <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>}
      </div>
    </div>
  );
}

const ItinerarySection = () => {
  const leftItems = itineraryData.filter(item => item.id > 6);
  const rightItems = itineraryData.filter(item => item.id <= 6);

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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-30">
                <Image src="/logo.png" alt="logo" width={400} height={400}/>
            </div>
            <ItineraryTimelinePath />
            {itineraryData.map(item => (
                <ItineraryItem key={item.id} item={item} align={item.id > 6 ? 'left' : 'right'} />
            ))}
        </div>
        
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <div className="grid grid-cols-1 gap-8">
            <h3 className="font-headline text-2xl font-bold text-center text-primary border-b pb-2">Keberangkatan & Makkah</h3>
            {rightItems.map(item => (
              <ItineraryItem key={item.id} item={item} align="right" />
            ))}
          </div>
           <div className="grid grid-cols-1 gap-8 mt-12">
            <h3 className="font-headline text-2xl font-bold text-center text-primary border-b pb-2">Madinah & Kepulangan</h3>
            {leftItems.map(item => (
              <ItineraryItem key={item.id} item={item} align="left" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ItinerarySection;
