import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { included, excluded } from '@/lib/data';
import { CheckCircle, XCircle } from 'lucide-react';

const IncludedSection = () => {
  return (
    <section id="included" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Fasilitas Paket</h2>
            <p className="text-muted-foreground mt-2">Berikut adalah fasilitas yang termasuk dan tidak termasuk dalam paket umrah kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CheckCircle className="h-7 w-7 text-primary" />
                <span className="text-2xl">Termasuk (Include)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <XCircle className="h-7 w-7 text-destructive" />
                <span className="text-2xl">Tidak Termasuk (Exclude)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
            <ul className="space-y-4">
                {excluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="h-6 w-6 text-muted-foreground mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
