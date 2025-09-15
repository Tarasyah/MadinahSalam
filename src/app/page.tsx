import HeroSection from '@/components/sections/hero';
import IncludedSection from '@/components/sections/included';
import ItinerarySection from '@/components/sections/itinerary';
import ContactSection from '@/components/sections/contact';
import InfoCardsSection from '@/components/sections/info-cards';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <InfoCardsSection />
      <ItinerarySection />
      <IncludedSection />
      <ContactSection />
    </div>
  );
}
