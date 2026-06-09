import { Plane } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PaketHajiPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
      <div className="container py-8 flex flex-col items-center justify-center text-center max-w-xl px-4">
        
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-125 animate-pulse"></div>
          <div className="bg-primary/10 text-primary p-4 rounded-full relative shadow-sm border border-primary/20">
            <Plane className="w-10 h-10 md:w-14 md:h-14 stroke-[1.5]" />
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-black mb-3 uppercase tracking-tight text-foreground">
          To Be Announced <span className="text-primary">(TBA)</span>
        </h1>
        
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Saat ini kami sedang mempersiapkan program perjalanan ibadah Haji khusus yang paling aman, nyaman, dan tentunya sesuai dengan tuntunan sunnah untuk Anda. 
        </p>

        <p className="text-xs md:text-sm font-medium text-foreground mb-6 p-3 bg-muted/50 rounded-xl border border-border inline-block">
          Silakan nantikan informasi selengkapnya atau hubungi kami untuk mendapatkan update terbaru terkait kuota dan jadwal keberangkatan Haji.
        </p>

        <Button asChild className="rounded-full shadow-lg hover:shadow-xl transition-all">
          <Link href="https://wa.me/6282210004644" target="_blank">
            Hubungi Customer Service
          </Link>
        </Button>

      </div>
    </main>
  );
}
