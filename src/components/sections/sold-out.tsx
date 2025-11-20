"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const soldOutPackages = [
  {
    id: 1,
    imageUrl: '/soldout/paketsoldout1.jpeg',
    alt: 'Paket Umrah Spesial yang sudah sold out',
  },
  {
    id: 2,
    imageUrl: '/soldout/paketsoldout2.jpeg',
    alt: 'Paket Umrah Liburan yang sudah sold out',
  },
];

const SoldOutSection = () => {
  return (
    <section id="sold-out" className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Paket Perjalanan Terdahulu
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Beberapa perjalanan yang telah kami selenggarakan dengan sukses. Nantikan paket menarik kami selanjutnya!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {soldOutPackages.map((pkg) => (
            <Card key={pkg.id} className="relative overflow-hidden rounded-lg group border-none shadow-lg">
              <Image
                src={pkg.imageUrl}
                alt={pkg.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div 
                  className={cn(
                    "border-4 border-red-500 text-red-500 rounded-lg px-8 py-4",
                    "font-headline font-bold text-4xl md:text-5xl tracking-widest uppercase",
                    "-rotate-12 transform"
                  )}
                >
                  Sold Out
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoldOutSection;
