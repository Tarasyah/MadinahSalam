import { Plane } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PaketHajiPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
      <div className="container py-8 flex flex-col items-center justify-center text-center max-w-2xl px-4">
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 animate-pulse"></div>
          <div className="bg-primary/10 text-primary p-6 rounded-full relative shadow-sm border border-primary/20">
            <Plane className="w-16 h-16 md:w-24 md:h-24 stroke-[1.5]" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-foreground">
          Paket Haji <span className="text-primary">(TBA)</span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Saat ini kami sedang mempersiapkan program perjalanan ibadah Haji khusus yang paling aman, nyaman, dan tentunya sesuai dengan tuntunan sunnah untuk Anda. 
        </p>

        <p className="text-sm font-medium text-foreground mb-8 p-4 bg-muted/50 rounded-xl border border-border inline-block">
          Silakan nantikan informasi selengkapnya atau hubungi kami untuk mendapatkan update terbaru terkait kuota dan jadwal keberangkatan Haji.
        </p>

        <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
          <Link href="https://wa.me/6282210004644" target="_blank">
            Hubungi Customer Service
          </Link>
        </Button>

      </div>
    </main>
  );
}
