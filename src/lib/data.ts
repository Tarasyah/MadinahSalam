import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import { Plane, Hotel, Utensils, Users, Car, Briefcase, BookOpen, ShieldCheck, BaggageClaim, ShoppingCart, Cross } from 'lucide-react';

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

export type HeroDestination = {
    id: number;
    title: string;
    description: string;
    image: ImagePlaceholder;
}

export type Package = {
  id: number;
  name: string;
  duration: string;
  price: string;
  image: ImagePlaceholder;
  features: string[];
};

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

export type Testimonial = {
    id: number;
    name: string;
    location: string;
    comment: string;
    image: ImagePlaceholder;
};

export const heroDestinations: HeroDestination[] = [
    {
        id: 1,
        title: 'Mekkah',
        description: 'Pusat spiritual Islam dan tujuan utama ibadah Umrah, tempat Ka\'bah berdiri.',
        image: findImage('hero-mekkah')
    },
    {
        id: 2,
        title: 'Madinah',
        description: 'Kota suci kedua, tempat Masjid Nabawi dan makam Nabi Muhammad SAW berada.',
        image: findImage('hero-madinah')
    },
    {
        id: 3,
        title: 'Thaif',
        description: 'Kota pegunungan yang sejuk dengan sejarah Islam yang kaya dan pemandangan indah.',
        image: findImage('hero-thaif')
    },
    {
        id: 4,
        title: 'Universitas Islam Madinah',
        description: 'Lembaga pendidikan Islam ternama di dunia, pusat ilmu dan peradaban.',
        image: findImage('hero-uim')
    }
];

export const packages: Package[] = [
    {
        id: 1,
        name: 'Paket Umrah Silver',
        duration: '9 Hari',
        price: 'Rp 25.000.000',
        image: findImage('package-1'),
        features: ['Hotel Bintang 4', 'Pesawat Direct', 'Makan 3x Sehari', 'City Tour Mekkah & Madinah'],
    },
    {
        id: 2,
        name: 'Paket Umrah Gold',
        duration: '9 Hari',
        price: 'Rp 30.000.000',
        image: findImage('package-2'),
        features: ['Hotel Bintang 5', 'Pesawat Direct', 'Makan 3x Sehari (Menu Internasional)', 'Ziarah Eksklusif'],
    },
    {
        id: 3,
        name: 'Paket Umrah Platinum',
        duration: '12 Hari',
        price: 'Rp 40.000.000',
        image: findImage('package-3'),
        features: ['Hotel Bintang 5 (Dekat Masjid)', 'Business Class', 'Makan 3x Sehari (VIP)', 'Full Ziarah & City Tour'],
    },
];

export const itinerary: ItineraryItem[] = [
    { day: 'Hari 1-4', title: 'Madinah Al Munawwarah', images: [findImage('madinah-1'), findImage('madinah-2')] },
    { day: 'Hari 5-9', title: 'Mekkah Al Mukarramah', images: [findImage('mekkah-1'), findImage('mekkah-2')] },
];

export const included: IncludedItem[] = [
    { title: 'Tiket Pesawat', description: 'Penerbangan pulang-pergi kelas ekonomi.', icon: Plane },
    { title: 'Akomodasi', description: 'Hotel bintang 4 atau 5, termasuk sarapan.', icon: Hotel },
    { title: 'Transportasi', description: 'Bus AC selama di Arab Saudi.', icon: Car },
    { title: 'Muthawif', description: 'Pembimbing ibadah yang berpengalaman.', icon: Users },
    { title: 'Visa Umrah', description: 'Pengurusan visa umrah.', icon: BookOpen },
    { title: 'Asuransi', description: 'Asuransi perjalanan selama di tanah suci.', icon: ShieldCheck },
];

export const excluded: IncludedItem[] = [
    { title: 'Paspor', description: 'Biaya pembuatan atau perpanjangan paspor.', icon: Briefcase },
    { title: 'Kelebihan Bagasi', description: 'Biaya atas kelebihan berat bagasi.', icon: BaggageClaim },
    { title: 'Pengeluaran Pribadi', description: 'Seperti laundry, telepon, dan oleh-oleh.', icon: ShoppingCart },
    { title: 'Force Majeure', description: 'Biaya tambahan akibat kejadian luar biasa.', icon: Cross },
];


export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Ahmad Subagja',
        location: 'Jakarta',
        comment: 'Pelayanan dari Madinah Salam Wisata sangat memuaskan. Pembimbingnya sabar dan hotelnya sangat nyaman. Insya Allah akan berangkat lagi bersama keluarga.',
        image: findImage('testimonial-1'),
    },
    {
        id: 2,
        name: 'Siti Aminah',
        location: 'Surabaya',
        comment: 'Alhamdulillah, perjalanan umrah saya berjalan lancar. Semua fasilitas sesuai dengan yang dijanjikan. Terima kasih Madinah Salam Wisata.',
        image: findImage('testimonial-2'),
    },
    {
        id: 3,
        name: 'Budi Santoso',
        location: 'Bandung',
        comment: 'Pengalaman spiritual yang luar biasa. Itinerarynya disusun dengan sangat baik sehingga kami bisa fokus beribadah. Sangat direkomendasikan!',
        image: findImage('testimonial-3'),
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
