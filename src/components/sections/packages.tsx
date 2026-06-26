import { packages } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Check, Plane, Calendar, Users, BadgePercent } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const PackagesSection = () => {
  const whatsappLink = "https://wa.me/6282210004644";

  return (
    <section id="packages" className="pt-16 pb-8 lg:pt-24 lg:pb-12 bg-background">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Paket Umrah Unggulan</h2>
        </div>
        <div className="flex flex-col items-center gap-8 w-full max-w-5xl mx-auto">
          {packages.map((pkg) => (
                <Card key={pkg.id} className="flex flex-col md:flex-row overflow-hidden bg-card border-border w-full shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                   <div className="relative w-full md:w-[320px] shrink-0 h-64 md:h-auto overflow-hidden">
                        <Link href={`/paket/${pkg.id}`} className="block relative h-full w-full cursor-pointer">
                            <Image
                            src={pkg.image.imageUrl}
                            alt={pkg.name}
                            data-ai-hint={pkg.image.imageHint}
                            fill
                            unoptimized={pkg.image.imageUrl.endsWith('.jpeg')}
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>
                        <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1.5 rounded-br-lg font-bold shadow-md text-sm">
                            {pkg.duration}
                        </div>
                        {pkg.discount && (
                            <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-bl-lg font-semibold flex items-center gap-1 shadow-md text-xs">
                                <BadgePercent className="h-4 w-4" />
                                <span>{pkg.discount}</span>
                            </div>
                        )}
                   </div>
                   
                   <div className="flex flex-col flex-grow">
                      <CardHeader className="pb-2 pt-5">
                        <CardTitle className="font-sans font-bold text-xl md:text-2xl text-primary">{pkg.name}</CardTitle>
                        <div className="flex flex-wrap items-center text-muted-foreground text-sm gap-4 pt-1">
                            <div className="flex items-center gap-1.5">
                                <Plane className="h-3.5 w-3.5" />
                                <span>{pkg.airline}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{pkg.departure}</span>
                            </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow pb-4 px-6">
                        <p className="font-semibold mb-2 text-sm">Fasilitas Utama:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <Check className="h-4 w-4 text-primary mr-1.5 shrink-0 mt-0.5"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="bg-muted/30 p-5 flex flex-col lg:flex-row items-center justify-between gap-5 border-t mt-auto">
                        <div className="flex flex-col w-full lg:w-auto text-center lg:text-left">
                            <p className="text-sm text-muted-foreground mb-0.5">Mulai dari (Quad)</p>
                            <div className="flex items-baseline justify-center lg:justify-start gap-2 whitespace-nowrap">
                                <p className="text-2xl md:text-3xl font-bold text-primary">{pkg.price}</p>
                                <p className="text-base font-medium text-muted-foreground line-through">{pkg.originalPrice}</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center lg:items-end w-full lg:w-auto gap-3">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex flex-col space-y-1 text-center lg:text-right w-full">
                                    {pkg.priceDetails.map(detail => (
                                        <div key={detail.type} className="flex items-center justify-center lg:justify-end gap-2 text-sm text-muted-foreground">
                                          <detail.icon className="h-4 w-4"/>
                                          <span>{detail.type}: <span className="font-semibold text-foreground">{detail.price}</span></span>
                                          <span className="text-xs line-through">{detail.originalPrice}</span>
                                        </div>
                                    ))}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-xs text-muted-foreground">Harga per orang berdasarkan tipe kamar.</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            
                            <Button asChild className="w-full lg:w-auto px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all font-semibold">
                                <Link href={`/paket/${pkg.id}`}>Lihat Detail Paket</Link>
                            </Button>
                        </div>
                      </CardFooter>
                   </div>
                </Card>
          ))}
        </div>
        <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">* Harga Infant (0-23 bulan): Rp 12.500.000,- (tanpa kursi, kasur, & bagasi).</p>
            <p className="text-muted-foreground text-sm">**Diskon Anak (2-11 tahun): Rp 1.000.000 (maksimal 3 anak per grup).</p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;