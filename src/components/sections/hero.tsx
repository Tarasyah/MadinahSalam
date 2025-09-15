import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-white" id="home">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          Perjalanan Umrah Impian Anda
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90 drop-shadow-md">
          Nikmati pengalaman spiritual yang tak terlupakan bersama Madinah Salam Wisata.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
                <Link href="/#packages">Lihat Paket</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white/10 backdrop-blur-sm border-white/50 hover:bg-white/20 text-white">
                <Link href="/#contact">Hubungi Kami</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
