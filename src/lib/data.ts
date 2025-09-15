import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import { Plane, Hotel, Utensils, Users, Car, Briefcase } from 'lucide-react';

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
    { id: 1, title: '2 Kota Suci', subtitle: '', image: findImage('card-1') },
    { id: 2, title: '9 Hari Perjalanan', subtitle: '', image: findImage('card-2') },
    { id: 3, title: 'Ibadah Khusyuk', subtitle: '', image: findImage('card-3') },
    { id: 4, title: 'Ziarah Bersejarah', subtitle: '', image: findImage('card-4') },
    { id: 5, title: 'Menjaga Spiritualitas', subtitle: '', image: findImage('card-5') },
];

export const itinerary: ItineraryItem[] = [
    { day: 'Hari 1-4', title: 'Madinah', images: [findImage('madinah-1'), findImage('madinah-2')] },
    { day: 'Hari 5-9', title: 'Mekkah', images: [findImage('mekkah-1'), findImage('mekkah-2')] },
];

export const included: IncludedItem[] = [
    { title: 'Pembimbing', description: '2 pembimbing berpengalaman yang akan mendampingi Anda.', icon: Users },
    { title: 'Penerbangan', description: 'Penerbangan pulang-pergi kelas ekonomi.', icon: Plane },
    { title: 'Transportasi', description: 'Transportasi dari bandara ke hotel dan antar kota.', icon: Car },
    { title: 'Akomodasi', description: 'Hotel bintang 4 atau 5 (termasuk sarapan).', icon: Hotel },
];
