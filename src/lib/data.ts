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
