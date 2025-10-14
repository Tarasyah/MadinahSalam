import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import { Plane, Hotel, Car, Users, BookOpen, ShieldCheck, BaggageClaim, ShoppingCart, UserCheck, XCircle, Utensils, Star, Calendar, Clock, BedDouble, BedSingle, Users2, Ticket, Award, UtensilsCrossed } from 'lucide-react';

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
        title: 'Paket Umrah Liburan',
        description: 'Umrah Liburan Akhir Tahun (High Season) + Thaif. Keberangkatan 15 Desember 2025.',
        image: findImage('package-high-season')
    },
    {
        id: 2,
        title: 'Mekkah Al-Mukarramah',
        description: 'Pusat spiritual Islam dan tujuan utama ibadah Umrah, tempat Ka\'bah berdiri megah.',
        image: findImage('hero-mekkah')
    },
    {
        id: 3,
        title: 'Madinah Al-Munawwarah',
        description: 'Kota suci kedua, tempat Masjid Nabawi dan makam Nabi Muhammad ﷺ berada, penuh ketenangan.',
        image: findImage('hero-madinah')
    },
    {
        id: 4,
        title: 'Thaif',
        description: 'Menikmati kesejukan alam pegunungan Thaif yang bersejarah dan penuh kenangan.',
        image: findImage('hero-thaif')
    },
];

export const packages: Package[] = [
    {
        id: 1,
        name: 'Umrah Liburan Akhir Tahun (High Season) + Thaif',
        duration: '9 Hari',
        price: 'Rp 27.9 jt',
        priceDetails: [
            { type: 'Quad', price: 'Rp 27.990.000', icon: Users2 },
            { type: 'Triple', price: 'Rp 29.890.000', icon: Users },
            { type: 'Double', price: 'Rp 33.489.000', icon: BedDouble },
        ],
        image: findImage('package-high-season'),
        features: ['Hotel Makkah: Snood Ajyad/Setaraf', 'Hotel Madinah: Hayah Al Huda/Setaraf', 'City Tour Thaif & Museum Wahyu', 'Gratis AlBaik & Nasi Mandhi', 'Perlengkapan Premium'],
        airline: 'Saudi Airlines (Tanpa Transit)',
        departure: '15 Desember 2025'
    },
];


export const included: IncludedItem[] = [
  { title: 'Pesawat Saudia', description: 'Termasuk tiket Saudi Airlines pulang-pergi (tanpa transit).', icon: Plane },
  { title: 'Visa Umrah', description: 'Pengurusan visa umrah sudah termasuk.', icon: Ticket },
  { title: 'Hotel', description: 'Akomodasi di Makkah & Madinah (jalan kaki, tanpa shuttle).', icon: Hotel },
  { title: 'Makan 3x Sehari', description: 'Menu masakan Indonesia selama di tanah suci.', icon: Utensils },
  { title: 'Pembimbing & Muthawwif', description: 'Bimbingan ibadah oleh ustadz dan muthawwif berpengalaman.', icon: UserCheck },
  { title: 'Transportasi', description: 'Bus AC premium selama city tour dan antar kota.', icon: Car },
  { title: 'City Tour Lengkap', description: 'Makkah, Madinah, Kunjungan Museum Wahyu, UIM, dan City Tour Thaif.', icon: Calendar },
  { title: 'Perlengkapan Premium', description: 'Koper, kain ihram, jilbab, dan lainnya.', icon: BaggageClaim },
  { title: 'Manasik & Handling', description: 'Manasik umrah sebelum berangkat dan airport handling.', icon: BookOpen },
  { title: 'Gratis Zamzam & AlBaik', description: '5 liter Zamzam (jika diizinkan) & gratis AlBaik.', icon: Star },
  { title: 'Bus nyaman full AC', description: 'Transportasi bus yang nyaman selama perjalanan.', icon: Car },
  { title: 'Gratis Nasi Mandhi di Thaif', description: 'Menikmati hidangan khas Nasi Mandhi saat di Thaif.', icon: Utensils },
];

export const excluded: IncludedItem[] = [
  { title: 'Pembuatan paspor', description: 'Biaya pembuatan atau perpanjangan paspor.', icon: XCircle },
  { title: 'Kebutuhan pribadi', description: 'Seperti laundry, telepon, dan oleh-oleh.', icon: ShoppingCart },
  { title: 'Akomodasi dari daerah asal', description: 'Hotel atau transportasi dari/ke daerah asal.', icon: Hotel },
  { title: 'Kelebihan bagasi', description: 'Biaya tambahan atas kelebihan berat bagasi.', icon: BaggageClaim },
  { title: 'Vaksin Meningitis', description: 'Biaya untuk vaksin meningitis.', icon: ShieldCheck },
  { title: 'Vaksin Polio', description: 'Biaya untuk vaksin polio.', icon: ShieldCheck },
  { title: 'Kursi roda & jasa pendorong', description: 'Penyediaan kursi roda dan jasa pendorongnya.', icon: Users },
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
