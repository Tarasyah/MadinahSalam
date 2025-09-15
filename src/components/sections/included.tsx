import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { included } from '@/lib/data';

const IncludedSection = () => {
  return (
    <section id="included" className="py-16 lg:py-24 bg-secondary">
      <div className="container max-w-5xl mx-auto">
        <div className="text-left mb-12 relative">
           <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-16 bg-primary"></div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold ml-24">WHAT'S INCLUDED</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {included.map((item, index) => (
            <Card key={index} className="p-6 bg-card rounded-lg border border-border/50">
              <CardHeader className="p-0">
                <div className="flex items-center gap-4">
                  <item.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                </div>
                <CardDescription className="mt-4 text-base text-muted-foreground">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
