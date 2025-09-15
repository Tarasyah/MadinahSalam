import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import { Plane, Hotel, Utensils, MapPin, CalendarDays, Star, CheckCircle2, Users, LifeBuoy, Earth, Car, Briefcase } from 'lucide-react';

const findImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        return {
            id: 'not-found',
            description: 'Image not found',
            imageUrl: 'https://placehold.co/600x400',
            imageHint: 'placeholder'
        };
    }
    return image;
};

export type Package = {
  id: number;
  name: string;
  duration: string;
  price: string;
  image: ImagePlaceholder;
  features: string[];
};

export type InfoCard = {
  id: number;
  title: string;
  subtitle: string;
  image: ImagePlaceholder;
}

export type ItineraryItem = {
    day: string;
    title: string;
    images: ImagePlaceholder[];
}

export type IncludedItem = {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const infoCards: InfoCard[] = [
    { id: 1, title: '3 cities in Japan', subtitle: '', image: findImage('card-1') },
    { id: 2, title: '10 days', subtitle: '', image: findImage('card-2') },
    { id: 3, title: 'gigabytes of photos', subtitle: '', image: findImage('card-3') },
    { id: 4, title: 'eat ramen', subtitle: '', image: findImage('card-4') },
    { id: 5, title: 'enjoy the vibe', subtitle: '', image: findImage('card-5') },
];

export const itinerary: ItineraryItem[] = [
    { day: 'Days 1-3', title: 'Osaka', images: [findImage('osaka-1'), findImage('osaka-2')] },
    { day: 'Days 4-6', title: 'Kyoto', images: [findImage('kyoto-1'), findImage('kyoto-2')] },
    { day: 'Days 7-10', title: 'Tokyo', images: [findImage('tokyo-1'), findImage('tokyo-2')] },
];

export const included: IncludedItem[] = [
    { title: 'Guides', description: '2 awesome guides who know everything about Japan!', icon: Users },
    { title: 'Flights', description: 'Routes: Moscow - Osaka, Tokyo - Moscow', icon: Plane },
    { title: 'Transfers', description: 'From the airport to the hotels', icon: Car },
    { title: 'Hotels', description: 'Comfortable accommodation, 2 people per room (breakfasts included)', icon: Hotel },
];
