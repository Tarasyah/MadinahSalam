import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import { Plane, Hotel, Car, Users, BookOpen, ShieldCheck, BaggageClaim, ShoppingCart, UserCheck, XCircle, Utensils, Star, Calendar, Clock, BedDouble, BedSingle, Users2, Ticket, Award, UtensilsCrossed, Gift } from 'lucide-react';

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
    { id: 1, title: 'Keberangkatan Menuju Jeddah & Melaksanakan Umrah', subtitle: 'Penerbangan dari CGK menuju JED, dilanjutkan perjalanan ke Makkah untuk umrah.', date: '25/03/2026', time: 'Malam' },
    { id: 2, title: 'Ibadah & Acara Bebas di Makkah', subtitle: 'Memperbanyak ibadah di Masjidil Haram.', date: '26/03/2026', time: 'Sehari Penuh' },
    { id: 3, title: 'Shalat Jumat Pertama & Ibadah', subtitle: 'Melaksanakan Shalat Jumat di Masjidil Haram.', date: '27/03/2026', time: 'Pagi - Siang' },
    { id: 4, title: 'City Tour Makkah', subtitle: 'Mengunjungi tempat bersejarah di sekitar Makkah & Museum Wahyu.', date: '28/03/2026', time: 'Pagi' },
    { id: 5, title: 'City Tour Thaif', subtitle: 'Perjalanan ke Thaif, mempelajari sirah, dan menikmati wisata alam.', date: '29/03/2026', time: 'Pagi - Sore' },
    { id: 6, title: 'Perjalanan Menuju Madinah', subtitle: 'Check-out dari hotel Makkah dan berangkat menuju Madinah.', date: '30/03/2026', time: 'Ba\'da Dzuhur' },
    { id: 7, title: 'Ziarah & Mengenal Area Masjid Nabawi', subtitle: 'Mengunjungi Raudhah dan area sekitar Masjid Nabawi.', date: '31/03/2026', time: 'Sesuai Jadwal' },
    { id: 8, title: 'City Tour Madinah', subtitle: 'Mengunjungi tempat-tempat bersejarah dan Universitas Islam Madinah.', date: '01/04/2026', time: 'Pagi' },
    { id: 9, title: 'Ibadah & Acara Bebas di Madinah', subtitle: 'Memperbanyak ibadah di Masjid Nabawi.', date: '02/04/2026', time: 'Sehari Penuh' },
    { id: 10, title: 'Shalat Jumat Kedua & Persiapan Pulang', subtitle: 'Melaksanakan Shalat Jumat di Masjid Nabawi dan persiapan check-out.', date: '03/04/2026', time: 'Pagi - Sore' },
    { id: 11, title: 'Check-out dan Menuju Bandara', subtitle: 'Berangkat dari Madinah menuju bandara Jeddah.', date: '04/04/2026', time: 'Malam' },
    { id: 12, title: 'Tiba di Tanah Air', subtitle: 'Penerbangan dari Jeddah (JED) dan tiba di Jakarta (CGK).', date: '05/04/2026', time: 'Pagi - Malam' },
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
        title: 'Umrah Spesial Bulan Syawwal',
        description: 'Program 12 Hari dengan 2 kali Shalat Jumat dan City Tour Thaif. Keberangkatan 25 Maret 2026.',
        image: findImage('hero-paket')
    },
];

export const packages: Package[] = [
    {
        id: 1,
        name: 'Umrah Bulan Syawwal (Program Spesial)',
        duration: '12 Hari',
        price: 'Rp 29.9 jt',
        originalPrice: 'Rp 30.990.000',
        discount: 'Hemat Rp 1.000.000',
        priceDetails: [
            { type: 'Quad', price: 'Rp 29.990.000', originalPrice: '30.990.000', icon: Users2 },
            { type: 'Triple', price: 'Rp 31.490.000', originalPrice: '32.490.000', icon: Users },
            { type: 'Double', price: 'Rp 33.590.000', originalPrice: '34.590.000', icon: BedDouble },
        ],
        image: findImage('hero-paket'),
        features: [
            'Hotel Makkah: Zuwar Al Bait/Setaraf', 
            'Hotel Madinah: Hayah Golden/Setaraf', 
            '2 Kali Shalat Jumat', 
            'City Tour Thaif', 
            'Dibimbing oleh Ustadz S3 Univ. Madinah'
        ],
        airline: 'Saudi Airlines (Tanpa Transit)',
        departure: '25 Maret 2026'
    },
];


export const included: IncludedItem[] = [
  { title: 'Pesawat Saudia', description: 'Termasuk tiket Saudi Airlines pulang-pergi (tanpa transit).', icon: Plane },
  { title: 'Visa Umrah', description: 'Pengurusan visa umrah sudah termasuk dalam paket.', icon: Ticket },
  { title: 'Program 12 hari & 2x Jumat', description: 'Program perjalanan lengkap selama 12 hari termasuk 2 kali Shalat Jumat.', icon: Calendar },
  { title: 'City Tour Lengkap', description: 'Makkah, Madinah, Museum Wahyu, Universitas Islam Madinah, dan Thaif.', icon: Car },
  { title: 'Gratis Nasi Mandhi di Thaif', description: 'Menikmati hidangan khas Nasi Mandhi saat di Thaif.', icon: Utensils },
  { title: 'Hotel Dekat', description: 'Akomodasi di Makkah & Madinah (jalan kaki, tanpa shuttle).', icon: Hotel },
  { title: 'Makan 3x Sehari', description: 'Menu masakan Indonesia selama di tanah suci.', icon: Utensils },
  { title: 'Pembimbing & Muthawwif', description: 'Bimbingan ibadah oleh ustadz dan muthawwif berpengalaman.', icon: UserCheck },
  { title: 'Perlengkapan Premium', description: 'Koper, kain ihram, jilbab, dan perlengkapan lainnya.', icon: Gift },
  { title: 'Manasik & Handling', description: 'Manasik umrah online dan airport handling.', icon: BookOpen },
  { title: 'Gratis Zamzam & AlBaik', description: '5 liter Zamzam (jika diizinkan) & gratis AlBaik.', icon: Star },
  { title: 'Bus Nyaman', description: 'Transportasi bus AC premium selama perjalanan.', icon: Car },
];

export const excluded: IncludedItem[] = [
  { title: 'Pembuatan Paspor', description: 'Biaya pembuatan atau perpanjangan paspor.', icon: XCircle },
  { title: 'Kebutuhan Pribadi', description: 'Seperti laundry, telepon, dan oleh-oleh.', icon: ShoppingCart },
  { title: 'Akomodasi Domestik', description: 'Hotel atau transportasi dari/ke daerah asal menuju bandara.', icon: Hotel },
  { title: 'Kelebihan Bagasi', description: 'Biaya tambahan atas kelebihan berat bagasi dari maskapai.', icon: BaggageClaim },
  { title: 'Vaksin Meningitis & Polio', description: 'Biaya untuk suntik vaksin meningitis dan polio.', icon: ShieldCheck },
  { title: 'Kursi Roda & Jasa Pendorong', description: 'Penyediaan kursi roda dan jasa pendorongnya bila diperlukan.', icon: Users },
  { title: 'Kegiatan di Luar Paket', description: 'Biaya untuk tur atau aktivitas di luar jadwal yang ditentukan.', icon: UtensilsCrossed },
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

    
