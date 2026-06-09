import { packages, included, excluded, itineraryData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Plane, Calendar, Clock, MapPin, CheckCircle2, 
  XCircle, Download, MessageCircle, Star, Users 
} from 'lucide-react';

export function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id.toString(),
  }));
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = packages.find((p) => p.id.toString() === params.id);

  if (!pkg) {
    notFound();
  }

  const whatsappLink = "https://wa.me/6282210004644";

  return (
    <main className="min-h-screen bg-muted/20 pb-20">
      {/* 1. Header Section */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-headline font-bold mb-6 uppercase tracking-wider leading-tight">{pkg.name}</h1>
              <div className="flex flex-wrap gap-8 text-sm font-medium opacity-90">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full"><Plane className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs opacity-75 uppercase">Maskapai</p>
                    <p className="font-bold">{pkg.airline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full"><Clock className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs opacity-75 uppercase">Durasi</p>
                    <p className="font-bold">{pkg.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full"><Calendar className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs opacity-75 uppercase">Keberangkatan</p>
                    <p className="font-bold">{pkg.departure}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 min-w-[280px] w-full lg:w-auto text-center lg:text-right">
              <p className="text-sm font-medium mb-1 opacity-80 uppercase tracking-widest">Mulai Dari</p>
              <p className="text-4xl font-black mb-1 text-accent">{pkg.price}</p>
              <p className="text-xs opacity-75 mb-4">Per Pax Jamaah</p>
              <Button variant="secondary" className="w-full rounded-xl font-bold flex items-center justify-center gap-2 h-12 hover:scale-105 transition-transform">
                <Download className="h-4 w-4" /> Unduh Paket
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-8 lg:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Poster & Itinerary */}
          <div className="lg:col-span-2 space-y-8">
            {/* Poster Section */}
            <Card className="overflow-hidden border-none shadow-xl rounded-3xl bg-white p-2">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] xl:aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={pkg.image.imageUrl}
                  alt={pkg.name}
                  fill
                  className="object-contain bg-muted/10"
                />
              </div>
            </Card>

            {/* Itinerary Section */}
            <Card className="border-none shadow-lg rounded-3xl bg-white overflow-hidden" id="itinerary">
              <div className="bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-center">
                <h3 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                  <MapPin className="h-6 w-6" /> Rencana Perjalanan
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {itineraryData.map((day, index) => (
                    <div key={day.id} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center font-bold text-lg shadow-sm border border-primary/20">
                          {day.id}
                        </div>
                        {index !== itineraryData.length - 1 && (
                          <div className="w-0.5 h-full bg-primary/20 my-3"></div>
                        )}
                      </div>
                      <div className="pb-6 pt-2 w-full">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                          <h4 className="font-bold text-lg text-foreground leading-tight">{day.title}</h4>
                          {day.time && (
                            <span className="text-xs font-bold px-3 py-1 bg-muted rounded-full text-muted-foreground whitespace-nowrap">
                              {day.time}
                            </span>
                          )}
                        </div>
                        {day.subtitle ? (
                           <p className="text-sm text-muted-foreground">{day.subtitle}</p>
                        ) : (
                           <p className="text-sm text-muted-foreground italic opacity-70">Detail aktivitas akan diinformasikan lebih lanjut menyesuaikan kondisi di lapangan.</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Pricing, Pax, Included/Excluded */}
          <div className="space-y-8 sticky top-24">
            {/* Pricing Details */}
            <Card className="border-none shadow-xl rounded-3xl bg-white overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground text-center">
                <h3 className="text-xl font-headline font-bold mb-1">Harga Paket</h3>
              </div>
              <div className="p-6 space-y-4">
                {pkg.priceDetails.map((detail, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl border-2 transition-all ${idx === 0 ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-primary/30'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg text-foreground">{detail.type}</span>
                      <detail.icon className={`h-5 w-5 ${idx === 0 ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-black text-primary">{detail.price}</span>
                      <span className="text-xs text-muted-foreground line-through decoration-red-500">Normal: {detail.originalPrice}</span>
                    </div>
                  </div>
                ))}

                <div className="pt-4 flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full rounded-2xl text-md h-14 font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all bg-emerald-600 hover:bg-emerald-700">
                    <Link href={whatsappLink} target="_blank">Daftar Sekarang</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full rounded-2xl text-md h-14 font-bold border-2 border-primary text-primary hover:bg-primary/5 hover:scale-[1.02] transition-all">
                    <Link href={whatsappLink} target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" /> Konsultasi via WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Information Pax */}
            <Card className="border-none shadow-lg rounded-3xl bg-white">
              <div className="p-6">
                <h4 className="text-lg font-bold text-primary mb-5 flex items-center gap-2 border-b border-primary/10 pb-3">
                  <Users className="h-5 w-5" /> Ketersediaan Kursi (Pax)
                </h4>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 p-3 bg-muted/40 rounded-xl">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-bold uppercase">Total Kuota</p>
                        <p className="text-xl font-black">45 <span className="text-sm font-medium opacity-70">Pax</span></p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
                      <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs text-amber-700 font-bold uppercase">Sisa Kuota</p>
                        <p className="text-xl font-black text-amber-700">Terbatas!</p>
                      </div>
                   </div>
                </div>
              </div>
            </Card>

            {/* Information Fasilitas */}
            <Card className="border-none shadow-lg rounded-3xl bg-white">
              <div className="p-6">
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 border-b border-primary/10 pb-3">
                  <Star className="h-5 w-5" /> Fasilitas Paket
                </h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-foreground mb-3 flex items-center gap-2 bg-emerald-50 text-emerald-700 p-2 rounded-lg">
                      <CheckCircle2 className="h-5 w-5" /> Termasuk (Include)
                    </h5>
                    <ul className="space-y-3 px-2">
                      {included.slice(0, 8).map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                          <span className="mt-1 text-emerald-500 text-xs shadow-sm">●</span>
                          <span className="font-medium leading-relaxed">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-foreground mb-3 flex items-center gap-2 bg-red-50 text-red-700 p-2 rounded-lg">
                      <XCircle className="h-5 w-5" /> Belum Termasuk (Exclude)
                    </h5>
                    <ul className="space-y-3 px-2">
                      {excluded.slice(0, 5).map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                          <span className="mt-1 text-red-500 text-xs shadow-sm">●</span>
                          <span className="font-medium leading-relaxed">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Paket Lainnya */}
            <Card className="border-none shadow-lg rounded-3xl bg-white overflow-hidden">
               <div className="bg-primary p-4 text-primary-foreground text-center">
                <h4 className="font-bold text-lg">Paket Rekomendasi</h4>
               </div>
               <div className="p-5 space-y-5">
                  {packages.filter(p => p.id !== pkg.id).map(other => (
                    <Link key={other.id} href={`/paket/${other.id}`} className="group block">
                      <div className="flex gap-4 items-center bg-muted/20 p-3 rounded-2xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                           <Image src={other.image.imageUrl} alt={other.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">{other.name}</h5>
                          <p className="text-sm text-primary font-black mt-2">{other.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
               </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Hide Floating WA button via CSS for this detail page */}
      <style dangerouslySetInnerHTML={{__html: `
        #floating-wa { display: none !important; }
      `}} />
    </main>
  );
}
