import ContactSection from '@/components/sections/contact';
import GallerySection from '@/components/sections/gallery';
import HeroSection from '@/components/sections/hero-interactive';
import IncludedSection from '@/components/sections/included';
import ItinerarySection from '@/components/sections/itinerary';
import PackagesSection from '@/components/sections/packages';
import TestimonialsSection from '@/components/sections/testimonials';


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ItinerarySection />
      <IncludedSection />
      <GallerySection />
      <TestimonialsSection />
      <PackagesSection />
      <ContactSection />
    </div>
  );
}
