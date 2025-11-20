import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero-interactive';

const PackagesSection = dynamic(() => import('@/components/sections/packages'));
const ItinerarySection = dynamic(() => import('@/components/sections/itinerary'));
const IncludedSection = dynamic(() => import('@/components/sections/included'));
const GallerySection = dynamic(() => import('@/components/sections/gallery'));
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'));
const SoldOutSection = dynamic(() => import('@/components/sections/sold-out'));


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PackagesSection />
      <ItinerarySection />
      <IncludedSection />
      <GallerySection />
      <SoldOutSection />
      {/* <TestimonialsSection /> */}
    </div>
  );
}
