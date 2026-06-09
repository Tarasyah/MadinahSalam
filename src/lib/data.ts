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
    { id: 1, title: 'Take Off - Landing : CGK - JED SV819', date: '26/09/2026', time: '17:30 - 23:00' },
    { id: 2, title: 'Pelaksanaan Ibadah Umrah', date: '27/09/2026', time: 'Sebelum/Setelah Shubuh' },
    { id: 3, title: 'Mempelajari Sirah Nabi Sekitar Masjidil Haram', date: '28/09/2026', time: 'Pagi' },
    { id: 4, title: 'City Tour Kota Makkah: Mempelajari Sirah Nabi', date: '29/09/2026', time: 'Pagi' },
    { id: 5, title: 'City Tour Kota Thaif: Mempelajari Sirah Nabi - Tafakkur \'Alam - Menikmati Destinasi Wisata', date: '30/09/2026', time: 'Pagi' },
    { id: 6, title: 'Menuju Kota Madinah', date: '01/10/2026', time: 'Ba\'da Zhuhur' },
    { id: 7, title: 'Mempelajari Sirah Nabi Sekitar Masjid Nabawi', date: '02/10/2026', time: 'Pagi/Menyesuaikan Jadwal Raudhah' },
    { id: 8, title: 'City Tour Kota Madinah: Mempelajari Sirah Nabi + Kunjungan UIM', date: '03/10/2026', time: 'Pagi' },
    { id: 9, title: 'Museum Ash-Shafiyyah', date: '04/10/2026', time: 'Pagi' },
    { id: 10, title: 'Ibadah & Bebas', date: '05/10/2026', time: '' },
    { id: 11, title: 'Ibadah - Check Out Pagi - Take Off: Bandara Udara Internasional King Abdul Aziz - JEDDAH SV820', date: '06/10/2026', time: '20:20' },
    { id: 12, title: 'Landing: Bandara Udara Internasional Soekarno-Hatta', date: '07/10/2026', time: '10:25' },
];


export type IncludedItem = {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
};

export type Testimonial = {
    id: number;
    name: string;
    packageInfo: string;
    rating: number;
    comment: string;
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
        title: 'UMRAH RABIUL AKHIR 1448 H',
        description: 'Program 12 Hari + Thaif + Museum Ash-Shafiyyah. Keberangkatan 26 Sept - 7 Okt 2026.',
        image: findImage('hero-paket')
    },
];

export const packages: Package[] = [
    {
        id: 1,
        name: 'Umrah Rabiul Akhir 1448 H (Program 12 Hari)',
        duration: '12 Hari',
        price: 'Rp 29.5 jt',
        originalPrice: 'Rp 30.500.000',
        discount: 'Diskon Rp 1.000.000',
        priceDetails: [
            { type: 'Quad', price: 'Rp 29.500.000', originalPrice: '30.500.000', icon: Users2 },
            { type: 'Triple', price: 'Rp 31.500.000', originalPrice: '32.500.000', icon: Users },
            { type: 'Double', price: 'Rp 34.650.000', originalPrice: '35.650.000', icon: BedDouble },
        ],
        image: findImage('hero-paket'),
        features: [
            'Hotel Makkah: Maysan Al Maqam/Setaraf', 
            'Hotel Madinah: Hayah Golden/Setaraf', 
            'Museum Ash-Shafiyyah & Kampus UIM', 
            'City Tour Thaif & Nasi Mandhi', 
            'Dibimbing oleh Ustadz Arbi & Ustadz Wahab'
        ],
        airline: 'Saudi Airlines (Tanpa Transit)',
        departure: '26 Sept - 7 Okt 2026'
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
        name: 'Hamzah Bachtar /Hamzah',
        packageInfo: 'Paket Umrah Awal Tahun Hijriah 1447 H (6 Juli 2025)',
        rating: 5,
        comment: 'Sangat baik. selama perjalanan umroh bersama Madinah Salam Wisata. Saya sakit batuk, pada 3 hari terakhir. Oleh staff Madinah Salam Wisata saya, dibawa ke Clinik emergency dan dirawat sekitar 2 jam. Alhamdulillah bisa berangkat ke Jakarta bersama grup Madinah Salam Wisata sesuai dengan jadwal tgl 17 Juli 2025. Jazakallahu khayr, Terima kasih atas perhatian /bantuan perawatannya.',
    },
    {
        id: 2,
        name: 'Galih',
        packageInfo: 'Paket Umrah 12 Hari + Thaif (6 November 2025)',
        rating: 5,
        comment: 'Menambah wawasan dalam beribadah sangat nyaman beribadah ketanah suci, klo bisa sering mengadakan kajian untuk menambah ilmu bersama ustad yang dari tanah arab untuk silaturahim dan memperkenalkan travel',
    },
    {
        id: 3,
        name: 'DENNY SUKMA EKA ATMAJA',
        packageInfo: 'Paket Umrah 12 Hari + Thaif (6 November 2025)',
        rating: 5,
        comment: 'Alhamdulillaah nyaman, hotelnya juga dekat, mutowif dan tour leadernya juga ramah banget dan sabar.',
    },
    {
        id: 4,
        name: 'Ummu Athmana',
        packageInfo: 'Paket Umrah 12 Hari + Thaif (6 November 2025)',
        rating: 4,
        comment: 'Alhamdulillah secara keseluruhan menyenangkan, pelayanan sangat customer oriented, dr segi ilmu maasya Allah kami sangat tercerahkan, yg sblmnya hanya mendengar cerita, tp dengan madinahSalam kami menyaksikan langsung tempat sejarah,sirah nabawiyah,ziarah ke tanah harom, ibadah sekaligus thalabul ilmi kumplit 👍 Barakallahu fii kum tim MadinahSalam, semakin sukses kedepannya, terus ditingkatkan pelayanan dan sharing ilmu yg bermanfaatnya',
    },
    {
        id: 5,
        name: 'Indira ummu Fatih',
        packageInfo: 'Paket Umrah 12 Hari + Thaif (6 November 2025)',
        rating: 5,
        comment: '1. Awal keberangkatan disambut hangat di Bandara Soetta (snack, makan berat, tim handling bagasi sangat membantu)\n2. Selama di Mekkah Madinah tim MS sangat informatif, responsif, penuh kehangatan kekeluargaan antara jama\'ah dan tim MS.\n3. Secara keilmuan tidak perlu diragukan lagi, mantab pol lah 👍\n4. Ketika ada ketidaknyamanan langsung ditindak lanjutin (kettle di hotel rusak, lapor ustadz A.M langsung diganti, mantab 👍)\n5. Dikasih bonus kunjungan museum saffiyah free.\n6. Tidak cuma masalah ibadah, urusan shopping pun dikasih petunjuk2 yg cukup jelas dimana toko2 nya.\n7. Pelepasan pulang pun di handle dg baik oleh tim MS (dianter sampai pesan bus primajasa, MaasyaaAllah)',
    },
    {
        id: 6,
        name: 'Makawa',
        packageInfo: 'Paket Umrah 12 Hari + Thaif (6 November 2025)',
        rating: 5,
        comment: 'Alhamdulillah umroh sy kali ini sy mendapatkan banyak tambahan ilmu dan pengalaman lebih dari yg sebelumnya dengan harga yang sangat bersahabat dilihat dari paket yg didapat dibanding travel lain',
    },
    {
        id: 7,
        name: 'Wildan',
        packageInfo: 'Paket Umrah Syawal 1447 H 12 Hari (25 Maret 2026)',
        rating: 4,
        comment: 'Alhamdulillah banyak belajar ilmu agama',
    },
    {
        id: 8,
        name: 'Edi Karyadi',
        packageInfo: 'Paket Umrah Syawal 1447 H 12 Hari (25 Maret 2026)',
        rating: 5,
        comment: 'Sangat senang puas nikmat. Bermanfaat',
    },
    {
        id: 9,
        name: 'Bagas Helmi',
        packageInfo: 'Paket Umrah Syawal 1447 H 12 Hari (25 Maret 2026)',
        rating: 5,
        comment: 'Alhamdulillah semua rangkaian perjalanan umrah lancar, hotel tidak terlalu jauh dan banyak bonus bonus yang masyaAllah. Para pembimbing yang amanah dan sabar Alhamdulillah. Overall insyaAllah untuk paket dan fasilitas sudah sesuai dengan yang diharapkan.',
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
