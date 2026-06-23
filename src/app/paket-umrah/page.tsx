import PackagesSection from '@/components/sections/packages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paket Umroh 2026 - Madinah Salam Wisata',
  description: 'Paket umroh 12 hari dengan penerbangan langsung, city tour Thaif, dan bimbingan ustadz berpengalaman. Cek jadwal & harga terbaru.',
};

export default function PaketUmrahPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <PackagesSection />
    </main>
  );
}
