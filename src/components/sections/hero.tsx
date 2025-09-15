import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white" id="home">
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
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center p-4 mt-[-10vh]">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white/80 uppercase" style={{fontFamily: "'Anton', sans-serif"}}>
          Umrah
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
