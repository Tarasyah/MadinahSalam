import { packages } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Check, Plane, Calendar, Users } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HoverBorderGradient } from '../ui/hover-border-gradient';

const PackagesSection = () => {
  const whatsappLink = "https://wa.me/6282210004644";

  return (
    <section id="packages" className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Paket Umrah Unggulan</h2>
        </div>
        <div className="flex justify-center">
          {packages.map((pkg) => (
              <HoverBorderGradient
                key={pkg.id}
                containerClassName="rounded-lg max-w-lg w-full"
                className="w-full h-full bg-transparent"
                as="div"
              >
                <Card className="flex flex-col overflow-hidden h-full bg-card border-none">
                  <Link href="/paket.jpeg" target="_blank" rel="noopener noreferrer" className="block relative h-60 w-full cursor-pointer">
                    <Image
                      src={pkg.image.imageUrl}
                      alt={pkg.name}
                      data-ai-hint={pkg.image.imageHint}
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-bl-lg font-bold">
                      {pkg.duration}
                    </div>
                  </Link>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">{pkg.name}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4 pt-2">
                        <div className="flex items-center gap-2">
                            <Plane className="h-4 w-4" />
                            <span>{pkg.airline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{pkg.departure}</span>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-semibold mb-3">Fasilitas Utama:</p>
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
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <p className="text-sm text-muted-foreground">Mulai dari (Quad)</p>
                            <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex flex-col items-end space-y-1 text-right">
                                {pkg.priceDetails.map(detail => (
                                    <div key={detail.type} className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <detail.icon className="h-4 w-4"/>
                                      <span>{detail.type}: <span className="font-semibold text-foreground">{detail.price}</span></span>
                                    </div>
                                ))}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs text-muted-foreground">Harga per orang berdasarkan tipe kamar.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                    </div>
                    <Button asChild className="w-full mt-4 rounded-full">
                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">Daftar Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </HoverBorderGradient>
          ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">* Harga Infant (0-23 bulan): Rp 12.500.000,- (tanpa kursi, kasur, & bagasi).</p>
            <p className="text-muted-foreground text-sm">** Diskon Anak (2-11 tahun): Rp 2.000.000,- (maksimal 4 anak per PNR).</p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
