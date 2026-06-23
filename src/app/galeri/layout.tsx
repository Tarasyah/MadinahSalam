import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri Perjalanan Jamaah - Madinah Salam Wisata',
  description: 'Dokumentasi momen perjalanan ibadah umroh dan haji jamaah Madinah Salam Wisata dari berbagai program keberangkatan.',
};

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
