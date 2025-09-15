import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { facilities } from '@/lib/data';

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Facilities We Provide</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Ensuring your journey is comfortable, safe, and spiritually enriching from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="text-center p-6 border-transparent shadow-none bg-transparent">
              <CardHeader className="p-0">
                <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <facility.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold">{facility.title}</CardTitle>
                <CardDescription className="mt-2 text-base">{facility.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
