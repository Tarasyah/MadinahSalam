import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import { Plane, Hotel, Car, Users, BookOpen, ShieldCheck, BaggageClaim, ShoppingCart, UserCheck, XCircle, Utensils, Star, Calendar, Clock, BedDouble, BedSingle, Users2, Ticket, Award, UtensilsCrossed, Gift, Landmark } from 'lucide-react';

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
  originalPrice: string;
  priceDetails: { type: string, price: string, originalPrice: string, icon: React.ComponentType<{ className?: string }>}[];
  image: ImagePlaceholder;
  features: string[];
  airline: string;
  departure: string;
  discount?: string;
};

export type ItineraryDay = {
    id: number;
    title: string;
    subtitle?: string;
    date: string;
    time: string;
}

export const itineraryData: ItineraryDay[] = [
    { id: 1, title: 'Keberangkatan Menuju Jeddah & Melaksanakan Umrah', subtitle: 'Penerbangan dari CGK menuju JED dengan Saudi Airlines, dilanjutkan perjalanan ke Makkah untuk umrah.', date: '28/06/2026', time: 'Malam' },
    { id: 2, title: 'Ibadah & Acara Bebas di Makkah', subtitle: 'Memperbanyak ibadah di Masjidil Haram.', date: '29/06/2026', time: 'Sehari Penuh' },
    { id: 3, title: 'Ibadah & Thawaf Sunnah', subtitle: 'Melaksanakan ibadah harian di Masjidil Haram.', date: '30/06/2026', time: 'Pagi - Malam' },
    { id: 4, title: 'City Tour Makkah', subtitle: 'Mengunjungi tempat bersejarah di sekitar Makkah.', date: '01/07/2026', time: 'Pagi' },
    { id: 5, title: 'City Tour Thaif', subtitle: 'Perjalanan ke Thaif, menikmati wisata alam dan sirah Nabi.', date: '02/07/2026', time: 'Pagi - Sore' },
    { id: 6, title: 'Perjalanan Menuju Madinah', subtitle: 'Check-out dari hotel Makkah dan berangkat menuju Madinah.', date: '03/07/2026', time: 'Ba\'da Dzuhur' },
    { id: 7, title: 'Ziarah & Mengenal Area Masjid Nabawi', subtitle: 'Mengunjungi Raudhah dan Museum Ash-Shafiya.', date: '04/07/2026', time: 'Sesuai Jadwal' },
    { id: 8, title: 'City Tour Madinah', subtitle: 'Mengunjungi tempat-tempat bersejarah dan Universitas Islam Madinah.', date: '05/07/2026', time: 'Pagi' },
    { id: 9, title: 'Ibadah & Acara Bebas di Madinah', subtitle: 'Memperbanyak ibadah di Masjid Nabawi.', date: '06/07/2026', time: 'Sehari Penuh' },
    { id: 10, title: 'Persiapan Pulang & Belanja Oleh-oleh', subtitle: 'Ibadah di Masjid Nabawi dan persiapan koper.', date: '07/07/2026', time: 'Pagi - Sore' },
    { id: 11, title: 'Check-out dan Menuju Bandara', subtitle: 'Berangkat dari Madinah menuju bandara Jeddah.', date: '08/07/2026', time: 'Malam' },
    { id: 12, title: 'Tiba di Tanah Air', subtitle: 'Tiba kembali di Jakarta (CGK) dengan selamat.', date: '09/07/2026', time: 'Pagi' },
];


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
        description: 'Kota suci kedua, tempat Masjid Nabawi dan makam Nabi Muhammad ﷺ berada, penuh ketenangan.',
        image: findImage('hero-madinah')
    },
    {
        id: 3,
        title: 'Thaif',
        description: 'Menikmati kesejukan alam pegunungan Thaif yang bersejarah dan penuh kenangan.',
        image: findImage('hero-thaif')
    },
    {
        id: 4,
        title: 'UMRAH AWAL MUSIM 1448 H',
        description: 'Program 12 Hari + Thaif + Museum Ash-Shafiya. Keberangkatan 28 Juni - 9 Juli 2026.',
        image: findImage('hero-paket')
    },
];

export const packages: Package[] = [
    {
        id: 1,
        name: 'Umrah Awal Musim 1448 H (Program 12 Hari)',
        duration: '12 Hari',
        price: 'Rp 30.9 jt',
        originalPrice: 'Rp 31.990.000',
        discount: 'Hemat Rp 1.000.000',
        priceDetails: [
            { type: 'Quad', price: 'Rp 30.990.000', originalPrice: '31.990.000', icon: Users2 },
            { type: 'Triple', price: 'Rp 32.990.000', originalPrice: '33.990.000', icon: Users },
            { type: 'Double', price: 'Rp 34.990.000', originalPrice: '35.990.000', icon: BedDouble },
        ],
        image: findImage('hero-paket'),
        features: [
            'Hotel Makkah: Maysan Al Maqam/Zuwwar Al Bait', 
            'Hotel Madinah: Hayah Golden/Setaraf', 
            'Museum Ash - Shafiya', 
            'City Tour Thaif & Nasi Mandhi', 
            'Dibimbing oleh Ustadz Arbi & Ustadz Wahab'
        ],
        airline: 'Saudi Airlines (Tanpa Transit)',
        departure: '28 Juni - 9 Juli 2026'
    },
];


export const included: IncludedItem[] = [
  { title: 'Pesawat Saudia', description: 'Tiket Saudi Airlines pulang-pergi (tanpa transit/direct flight).', icon: Plane },
  { title: 'Visa Umrah', description: 'Pengurusan visa umrah resmi sudah termasuk.', icon: Ticket },
  { title: 'Program 12 Hari', description: 'Program perjalanan lengkap selama 12 hari penuh.', icon: Calendar },
  { title: 'Museum Ash-Shafiya', description: 'Gratis kunjungan ke Museum Ash-Shafiya di Madinah.', icon: Landmark },
  { title: 'City Tour Lengkap', description: 'Tur di Makkah, Madinah, dan Universitas Islam Madinah.', icon: Car },
  { title: 'City Tour Thaif', description: 'Kunjungan ke kota sejuk Thaif termasuk Nasi Mandhi.', icon: Utensils },
  { title: 'Hotel Tanpa Bus', description: 'Akomodasi Makkah & Madinah jarak dekat (jalan kaki).', icon: Hotel },
  { title: 'Makan 3x Sehari', description: 'Menu masakan Indonesia selama di tanah suci.', icon: Utensils },
  { title: 'Perlengkapan Premium', description: 'Koper dan perlengkapan ibadah premium Madinah Salam.', icon: Gift },
  { title: 'Zamzam & AlBaik', description: 'Gratis Zamzam 5lt (bila diizinkan) & ayam AlBaik.', icon: Star },
  { title: 'Pembimbing Berpengalaman', description: 'Bimbingan ibadah sesuai sunnah oleh ustadz lulusan Madinah.', icon: UserCheck },
  { title: 'Manasik & Bus AC', description: 'Manasik umrah dan transportasi bus AC yang nyaman.', icon: BookOpen },
];

export const excluded: IncludedItem[] = [
  { title: 'Pembuatan Paspor', description: 'Biaya pembuatan atau perpanjangan paspor jamaah.', icon: XCircle },
  { title: 'Kebutuhan Pribadi', description: 'Seperti laundry, pulsa, dan pengeluaran pribadi lainnya.', icon: ShoppingCart },
  { title: 'Akomodasi Asal', description: 'Transportasi dari daerah asal ke bandara keberangkatan.', icon: Car },
  { title: 'Kelebihan Bagasi', description: 'Biaya tambahan atas kelebihan berat bagasi pesawat.', icon: BaggageClaim },
  { title: 'Vaksinasi', description: 'Biaya suntik vaksin meningitis dan polio.', icon: ShieldCheck },
  { title: 'Jasa Pendorong', description: 'Penyediaan kursi roda dan jasa pendorong bila diperlukan.', icon: Users },
  { title: 'Kegiatan Luar Paket', description: 'Biaya tur atau agenda tambahan di luar jadwal resmi.', icon: UtensilsCrossed },
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
    findImage('gallery-7'),
    findImage('gallery-8'),
    findImage('gallery-9'),
    findImage('gallery-10'),
    findImage('gallery-11'),
    findImage('gallery-12'),
    findImage('gallery-13'),
    findImage('gallery-14'),
    findImage('gallery-15'),
];

export const infoCards: {id: number, title: string, image: ImagePlaceholder}[] = [];
