import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { packages } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const PackagesSection = () => {
  return (
    <section id="packages" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Packages</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed for your comfort and spiritual needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
              <div className="relative h-56 w-full">
                <Image
                  src={pkg.image.imageUrl}
                  alt={pkg.name}
                  data-ai-hint={pkg.image.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center bg-gray-50 dark:bg-gray-800/20 p-4">
                <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                <Button asChild>
                  <Link href={`/enquire?package=${pkg.id}`}>Enquire Now</Link>
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
