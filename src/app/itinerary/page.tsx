import Image from 'next/image';
import ItinerarySection from '@/components/sections/itinerary';

const ItineraryPage = () => {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
                <Image
                    src="/makkah_thumbnail.webp"
                    alt="Rangkaian Perjalanan Hero Image"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center p-4">
                    <h1 className="font-headline text-5xl md:text-6xl font-bold text-white">Rangkaian Perjalanan</h1>
                    <p className="mt-4 text-xl text-white/90">Detail rencana ibadah Umrah 12 Hari Anda</p>
                </div>
            </section>

            {/* Main Content */}
            <div className="py-8">
                <ItinerarySection />
            </div>
        </div>
    );
};

export default ItineraryPage;
