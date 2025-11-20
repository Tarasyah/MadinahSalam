import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { included, excluded } from '@/lib/data';
import { CircleCheckBig, CircleX } from 'lucide-react';
import { cn } from '@/lib/utils';

const IncludedSection = () => {
  return (
    <section id="included" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Fasilitas Paket</h2>
        </div>
        
        {/* Included Section */}
        <div className="mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <CircleCheckBig className="h-8 w-8 text-primary" />
            <h3 className="font-headline text-2xl md:text-3xl font-bold">Termasuk (Include)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {included.map((item, index) => (
              <Card 
                key={index}
                className={cn(
                  "h-full bg-card transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_hsl(var(--primary))]"
                )}
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm -mt-4 ml-[36px]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Excluded Section */}
        <div>
          <div className="flex justify-center items-center gap-4 mb-8">
            <CircleX className="h-8 w-8 text-muted-foreground" />
            <h3 className="font-headline text-2xl md:text-3xl font-bold">Tidak Termasuk (Exclude)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {excluded.map((item, index) => (
              <Card 
                key={index}
                className={cn(
                  "h-full bg-card transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_hsl(var(--primary))]"
                )}
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <item.icon className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm -mt-4 ml-[36px]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
