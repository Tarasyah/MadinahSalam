import { packages } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

const PackagesSection = () => {
  return (
    <section id="packages" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Paket Umrah Unggulan</h2>
            <p className="text-muted-foreground mt-2">Pilih paket yang paling sesuai dengan kebutuhan dan kenyamanan Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60 w-full">
                <Image
                  src={pkg.image.imageUrl}
                  alt={pkg.name}
                  data-ai-hint={pkg.image.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{pkg.name}</CardTitle>
                <p className="text-muted-foreground">{pkg.duration}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                    {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                            <Check className="h-4 w-4 text-primary mr-2"/>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start bg-muted/50 p-6">
                <p className="text-sm text-muted-foreground">Mulai dari</p>
                <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                <Button asChild className="w-full mt-4 rounded-full">
                    <Link href="/#contact">Daftar Sekarang</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
