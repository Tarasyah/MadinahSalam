import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paket Umroh & Haji 2026 - Madinah Salam Wisata',
  description: 'Pilihan paket umroh dan haji terbaru dengan fasilitas hotel dekat Masjidil Haram & Masjid Nabawi, dibimbing ustadz, harga bersahabat.',
};

export default function PaketPage() {
  redirect('/paket-umrah');
}
