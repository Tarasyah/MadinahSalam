import HeroSection from '@/components/sections/hero';
import PackagesSection from '@/components/sections/packages';
import ItinerarySection from '@/components/sections/itinerary';
import FacilitiesSection from '@/components/sections/facilities';
import GallerySection from '@/components/sections/gallery';
import TestimonialsSection from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PackagesSection />
      <ItinerarySection />
      <FacilitiesSection />
      <GallerySection />
      <TestimonialsSection />
    </div>
  );
}
