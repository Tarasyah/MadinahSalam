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

export type ItineraryDay = {
    id: number;
    title: string;
    subtitle?: string;
    date: string;
    time: string;
}

export const itineraryData: ItineraryDay[] = [
    { id: 1, title: 'Take off—Landing', subtitle: 'CGK—JED SV819', date: '6/11/2025', time: '19.05-01.05 WIB' },
    { id: 2, title: 'Pelaksanaan ibadah umrah', date: '7/11/2025', time: 'Sebelum/sesudah subuh' },
    { id: 3, title: 'Mempelajari sirah Nabi sekitar Masjidil Haram', date: '8/11/2025', time: 'Pagi' },
    { id: 4, title: 'City Tour Makkah', subtitle: 'Mempelajari sirah Nabi + Museum Wahyu', date: '9/11/2025', time: 'Pagi' },
    { id: 5, title: 'City Tour Taif', subtitle: 'Mempelajari sirah Nabi, tafakkur alam, menikmati destinasi wisata', date: '10/11/2025', time: 'Pagi' },
    { id: 6, title: 'Menuju Kota Madinah', date: '11/11/2025', time: 'Setelah zuhur' },
    { id:7, title: "Mempelajari sirah Nabi sekitar Masjid Nabawi", date: "12/11/2025", time: "Sesuai jadwal masuk Raudhah" },
    { id: 8, title: "City Tour Madinah", subtitle: "Mempelajari sirah Nabi & kunjungan UIM", date: "13/11/2025", time: "Pagi" },
    { id: 9, title: "Ibadah & aktivitas bebas", date: "14/11/2025", time: "-" },
    { id: 10, title: "Ibadah & aktivitas bebas", date: "15/11/2025", time: "-" },
    { id: 11, title: "Take Off", subtitle: "Bandara Internasional Pangeran Muhammad bin Abdul Aziz - Madinah (SV820)", date: "16/11/2025", time: "16.25 WAS" },
    { id: 12, title: "Landing", subtitle: "Bandara Internasional Soekarno-Hatta", date: "17/11/2025", time: "06.05 WIB" },
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
        description: 'Kota suci kedua, tempat Masjid Nabawi dan makam Nabi Muhammad SAW berada, penuh ketenangan.',
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
        title: 'Universitas Islam Madinah',
        description: 'Salah satu destinasi ziarah, lembaga pendidikan Islam ternama di dunia, pusat ilmu dan peradaban.',
        image: findImage('hero-uim')
    }
];

export const packages: Package[] = [
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


export const included: IncludedItem[] = [
  { title: 'Tiket Pesawat', description: 'Termasuk tiket pesawat pulang-pergi (sesuai paket).', icon: Plane },
  { title: 'Visa Umrah', description: 'Pengurusan visa umrah sudah termasuk.', icon: BookOpen },
  { title: 'Akomodasi Hotel', description: 'Hotel di Makkah dan Madinah sesuai paket.', icon: Hotel },
  { title: 'Makan 3x Sehari', description: 'Menu masakan Indonesia selama di tanah suci.', icon: Utensils },
  { title: 'Pembimbing & Muthawwif', description: 'Bimbingan ibadah oleh ustadz dan muthawwif berpengalaman.', icon: UserCheck },
  { title: 'Transportasi', description: 'Bus AC premium selama di Arab Saudi.', icon: Car },
  { title: 'Perlengkapan Premium', description: 'Koper, kain ihram, jilbab, dan lainnya.', icon: BaggageClaim },
  { title: 'Air Zam-zam', description: '5 liter per jamaah (jika diizinkan maskapai).', icon: Star },
  { title: 'City Tour', description: 'Kunjungan ke tempat-tempat bersejarah di Makkah & Madinah.', icon: Calendar },
];

export const excluded: IncludedItem[] = [
  { title: 'Pembuatan Paspor', description: 'Biaya pembuatan atau perpanjangan paspor.', icon: XCircle },
  { title: 'Kebutuhan Pribadi', description: 'Seperti laundry, telepon, dan oleh-oleh.', icon: ShoppingCart },
  { title: 'Kelebihan Bagasi', description: 'Biaya tambahan atas kelebihan berat bagasi.', icon: XCircle },
  { title: 'Vaksin Meningitis & Polio', description: 'Suntik vaksin tidak termasuk dalam paket.', icon: XCircle },
  { title: 'Akomodasi Domestik', description: 'Hotel atau transportasi dari/ke daerah asal.', icon: XCircle },
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

export const infoCards: {id: number, title: string, image: ImagePlaceholder}[] = [];
