import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import { Plane, Hotel, Utensils, MapPin, CalendarDays, Star, CheckCircle2, Users, LifeBuoy } from 'lucide-react';

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

export type Testimonial = {
  id: number;
  name: string;
  location: string;
  avatar: ImagePlaceholder;
  comment: string;
};

export type ItineraryItem = {
    day: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

export type Facility = {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
};


export const packages: Package[] = [
  {
    id: 1,
    name: 'Economy Umrah Package',
    duration: '10 Days / 9 Nights',
    price: '$1,500',
    image: findImage('package-1'),
    features: ['Direct Flights', '3-Star Hotels', 'Group Transportation', 'Guided Ziyarat'],
  },
  {
    id: 2,
    name: 'Comfort Umrah Package',
    duration: '12 Days / 11 Nights',
    price: '$2,200',
    image: findImage('package-2'),
    features: ['Premium Airline', '4-Star Hotels near Haram', 'Private Transportation', 'Full-board Meals'],
  },
  {
    id: 3,
    name: 'Luxury Umrah Package',
    duration: '14 Days / 13 Nights',
    price: '$3,500',
    image: findImage('package-3'),
    features: ['Business Class Flights', '5-Star Hotels overlooking Kaaba', 'Personal Guide', 'Exclusive Ziyarat'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmad Abdullah',
    location: 'Dubai, UAE',
    avatar: findImage('avatar-1'),
    comment: 'An unforgettable spiritual journey. Umrah Journey team was professional and caring throughout. Everything was perfectly organized, from flights to hotels.',
  },
  {
    id: 2,
    name: 'Fatima Zahra',
    location: 'Kuala Lumpur, Malaysia',
    avatar: findImage('avatar-2'),
    comment: 'The attention to detail was incredible. Our guide was knowledgeable and patient. I highly recommend their services for a hassle-free Umrah.',
  },
  {
    id: 3,
    name: 'Yusuf Ibrahim',
    location: 'London, UK',
    avatar: findImage('avatar-3'),
    comment: 'From booking to our return, the experience was seamless. The hotels were excellent and very close to the Haram, which made a huge difference.',
  },
];

export const galleryImages: ImagePlaceholder[] = [
    findImage('gallery-1'),
    findImage('gallery-2'),
    findImage('gallery-3'),
    findImage('gallery-4'),
    findImage('gallery-5'),
    findImage('gallery-6'),
];

export const itinerary: ItineraryItem[] = [
    { day: '01', title: 'Arrival in Jeddah & Transfer to Makkah', description: 'Meet our representative at Jeddah airport and transfer to your hotel in Makkah to perform Umrah.', icon: Plane },
    { day: '02-05', title: 'Ibadah in Makkah', description: 'Spend your days in worship and prayer at the Grand Mosque. Optional Ziyarat (holy sites tour) available.', icon: MapPin },
    { day: '06', title: 'Travel to Madinah', description: 'Check out from your Makkah hotel and travel to the city of the Prophet, Madinah, via high-speed train.', icon: CalendarDays },
    { day: '07-09', title: 'Ibadah in Madinah', description: 'Visit the Prophet\'s Mosque, offer prayers in Rawdah, and explore the city. Guided tour of Madinah\'s holy sites.', icon: Star },
    { day: '10', title: 'Departure', description: 'Check out from your hotel in Madinah and transfer to Madinah airport for your flight back home.', icon: Plane },
];

export const facilities: Facility[] = [
    { title: 'Direct Flights', description: 'We partner with premium airlines to ensure a comfortable and direct flight to your destination.', icon: Plane },
    { title: 'Quality Hotels', description: 'Stay in hand-picked 3, 4, and 5-star hotels, conveniently located near the Haram.', icon: Hotel },
    { title: 'Guided Tours', description: 'Our experienced guides will lead you through the holy sites of Makkah and Madinah.', icon: Users },
    { title: '24/7 Support', description: 'Our team is available around the clock to assist you with any needs during your journey.', icon: LifeBuoy },
];
