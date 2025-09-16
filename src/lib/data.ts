import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import { Plane, Hotel, Car, Users, BookOpen, ShieldCheck, BaggageClaim, ShoppingCart, UserCheck, XCircle, Utensils, Star, Calendar, Clock, BedDouble, BedSingle, Users2 } from 'lucide-react';

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
  priceDetails: { type: string, price: string, icon: React.ComponentType<{ className?: string }>}[];
  image: ImagePlaceholder;
  features: string[];
  airline: string;
  departure: string;
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
        title: 'Mekkah Al-Mukarramah',
        description: 'Pusat spiritual Islam dan tujuan utama ibadah Umrah, tempat Ka\'bah berdiri megah.',
        image: findImage('hero-mekkah')
    },
    {
        id: 2,
        title: 'Madinah Al-Munawwarah',
        description: 'Kota suci kedua, tempat Masjid Nabawi dan makam Nabi Muhammad SAW berada, penuh ketenangan.',
        image: findImage('hero-madinah')
    },
    {
        id: 3,
        title: 'Perjalanan Penuh Makna',
        description: 'Menghadirkan pengalaman berwisata yang edukatif, berkesan, dan memperkuat iman.',
        image: findImage('hero-thaif')
    },
    {
        id: 4,
        title: 'Universitas Islam Madinah',
        description: 'Salah satu destinasi ziarah, lembaga pendidikan Islam ternama di dunia, pusat ilmu dan peradaban.',
        image: findImage('hero-uim')
    }
];

export const packages: Package[] = [
    {
        id: 1,
        name: 'Paket Umrah Awal Hijriah 1447 H',
        duration: '12 Hari',
        price: 'Rp 28.9 jt',
        priceDetails: [
            { type: 'Quad', price: 'Rp 28.900.000', icon: Users2 },
            { type: 'Triple', price: 'Rp 30.900.000', icon: Users },
            { type: 'Double', price: 'Rp 33.500.000', icon: BedDouble },
        ],
        image: findImage('package-1'),
        features: ['Hotel Makkah: Mo/Setaraf', 'Hotel Madinah: Rashed/Setaraf', 'Umrah On', 'Makan AlBaik', 'Full AC Bus'],
        airline: 'Qatar Airways',
        departure: '6 - 17 Juli 2025'
    },
    {
        id: 2,
        name: 'Paket Umrah + 2 Jumat + Thaif',
        duration: '12 Hari',
        price: 'Rp 28.9 jt',
        priceDetails: [
            { type: 'Quad', price: 'Rp 28.900.000', icon: Users2 },
            { type: 'Triple', price: 'Rp 30.900.000', icon: Users },
            { type: 'Double', price: 'Rp 33.500.000', icon: BedDouble },
        ],
        image: findImage('package-2'),
        features: ['Hotel Makkah: Maysan Al Maqam/Setaraf', 'Hotel Madinah: Jawharah Al Rasheed/Setaraf', 'Kunjungan ke UIM', 'Nasi Mandhi di Thaif', 'Perlengkapan Premium'],
        airline: 'Saudia (Tanpa Transit)',
        departure: '6 November 2025'
    },
];

export const itinerary: ItineraryItem[] = [
    { day: 'Hari 1-4', title: 'Madinah Al Munawwarah', images: [findImage('madinah-1'), findImage('madinah-2')] },
    { day: 'Hari 5-12', title: 'Mekkah Al Mukarramah & Ziarah', images: [findImage('mekkah-1'), findImage('mekkah-2')] },
];

export const included: IncludedItem[] = [
    { title: 'Tiket Pesawat', description: 'Termasuk tiket pesawat pulang-pergi.', icon: Plane },
    { title: 'Visa Umrah', description: 'Pengurusan visa umrah sudah termasuk.', icon: BookOpen },
    { title: 'Hotel', description: 'Akomodasi sesuai paket yang dipilih.', icon: Hotel },
    { title: 'Makan 3x Sehari', description: 'Menyediakan makanan selama di tanah suci.', icon: Utensils },
    { title: 'Pembimbing & Muthawwif', description: 'Bimbingan ibadah oleh tenaga profesional.', icon: UserCheck },
    { title: 'Transportasi', description: 'Bus AC selama di Arab Saudi.', icon: Car },
    { title: 'Perlengkapan Premium', description: 'Koper, kain ihram, jilbab, dan lainnya.', icon: BaggageClaim },
    { title: 'Air Zam-zam', description: 'Disediakan air Zam-zam (jika kondisi memungkinkan).', icon: Star },
];

export const excluded: IncludedItem[] = [
    { title: 'Pembuatan Paspor', description: 'Biaya pembuatan atau perpanjangan paspor.', icon: XCircle },
    { title: 'Vaksin Meningitis & Polio', description: 'Suntik vaksin tidak termasuk dalam paket.', icon: XCircle },
    { title: 'Kelebihan Bagasi', description: 'Biaya tambahan atas kelebihan berat bagasi.', icon: XCircle },
    { title: 'Pengeluaran Pribadi', description: 'Seperti laundry, telepon, dan oleh-oleh.', icon: XCircle },
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
