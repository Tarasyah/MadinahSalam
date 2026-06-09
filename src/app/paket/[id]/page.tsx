import { packages, included, excluded, itineraryData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Plane, Calendar, Clock, MapPin, CheckCircle2, 
  XCircle, Download, MessageCircle, Star, Users, ArrowLeft,
  Info
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
    <main className="min-h-screen bg-background pb-16 pt-20">
      {/* 1. Header Section */}
      <section className="relative text-white py-12 lg:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${pkg.image.imageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply pointer-events-none"></div>
        
        <div className="container relative z-10">
          <Link href="/#packages" className="inline-flex items-center text-sm font-medium hover:underline text-white/90 mb-8 transition-colors hover:text-white bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-md w-fit">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Paket
          </Link>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-sans font-black mb-4 uppercase tracking-tight leading-tight">{pkg.name}</h1>
              <div className="flex flex-wrap gap-6 text-xs md:text-sm font-medium text-white/90">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/20 rounded-full"><Plane className="h-4 w-4" /></div>
                  <div>
                    <p className="text-[10px] text-white/70 uppercase">Maskapai</p>
                    <p className="font-bold">{pkg.airline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/20 rounded-full"><Clock className="h-4 w-4" /></div>
                  <div>
                    <p className="text-[10px] text-white/70 uppercase">Durasi</p>
                    <p className="font-bold">{pkg.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/20 rounded-full"><Calendar className="h-4 w-4" /></div>
                  <div>
                    <p className="text-[10px] text-white/70 uppercase">Keberangkatan</p>
                    <p className="font-bold">{pkg.departure}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background/10 p-5 rounded-xl backdrop-blur-sm border border-white/20 min-w-[240px] w-full lg:w-auto text-center lg:text-right">
              <p className="text-xs font-medium mb-1 text-white/80 uppercase tracking-widest">Mulai Dari</p>
              <p className="text-3xl font-bold mb-1 text-white" style={{ fontFamily: 'system-ui, sans-serif' }}>{pkg.price}</p>
              <p className="text-[10px] text-white/75 mb-3">Per Pax Jamaah</p>
              <Button asChild variant="secondary" className="w-full rounded-lg font-bold flex items-center justify-center gap-2 h-10 hover:scale-105 transition-transform text-sm">
                <a href={pkg.image.imageUrl} download target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Unduh Poster
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-6 lg:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left Column: Poster, Info & Itinerary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Poster Section */}
            <Card className="overflow-hidden border border-border shadow-md rounded-2xl bg-card p-1.5">
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] xl:aspect-[16/10] rounded-xl overflow-hidden bg-muted/30 flex items-center justify-center">
                <Image
                  src={pkg.image.imageUrl}
                  alt={pkg.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Card>

            {/* Informasi Detail Section (BC Content) */}
            <Card className="border border-border shadow-md rounded-2xl bg-card overflow-hidden text-card-foreground">
              <div className="bg-primary/5 p-4 border-b border-border flex justify-between items-center">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <Info className="h-5 w-5" /> Deskripsi Lengkap Program
                </h3>
              </div>
              <div className="p-5 md:p-6 text-sm leading-relaxed space-y-4">
                 <p className="font-bold text-base">🕋✨ UMRAH RABIULAKHIR 1448 H BERSAMA MADINAH SALAM</p>
                 <p>🤲 Alhamdulillah… program yang dinanti telah tiba</p>
                 <p>📋 Program 12 Hari + Thaif + Museum Ash-Shafiyyah<br/>
                 📅 26 September - 7 Oktober 2026</p>

                 <div>
                   <p className="font-bold mb-1">Insyaallah akan dibimbing oleh:</p>
                   <ul className="space-y-2">
                     <li className="flex items-start gap-2">
                       <span>👤</span>
                       <div>
                         <span className="font-bold">Ustadz Arbi Fadhli Nurjasmi, Lc., M.A.</span><br/>
                         <span className="text-xs text-muted-foreground">(Supervisor Madinah Salam Wisata, Mahasiswa Doktoral (S3) Prodi Ulumul Hadits Universitas Islam Madinah)</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-2">
                       <span>👤</span>
                       <div>
                         <span className="font-bold">Ustadz Abdul Wahab Mas'ud, Lc.</span><br/>
                         <span className="text-xs text-muted-foreground">(Direktur Madinah Salam Wisata, Alumnus S1 Syariah LIPIA, Mahasiswa UIM)</span>
                       </div>
                     </li>
                   </ul>
                 </div>

                 <p>✈️🛄 <span className="font-bold">Flight by:</span><br/>Saudi Airlines (direct flight tanpa transit)</p>

                 <div>
                   <p className="font-bold mb-1">HOTEL</p>
                   <ul className="list-none space-y-1">
                     <li>🏨 <span className="font-bold">Makkah:</span> Maysan Al Maqam/Setaraf (Tanpa Shuttle Bus, Jalan Kaki).</li>
                     <li>🏨 <span className="font-bold">Madinah:</span> Hayah Golden/Setaraf (Tanpa Shuttle Bus, Jalan Kaki).</li>
                   </ul>
                 </div>
                 
                 <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 text-center mt-4">
                   <p className="font-bold text-primary">🚨🚨 Segera daftarkan diri dan keluarga anda!<br/>💺 SEAT TERBATAS‼️</p>
                   <p className="text-xs mt-2 text-muted-foreground">🤲🏻 Semoga Allah Mudahkan Niat dan Perjalanan Ibadah Kita ke Tanah Suci.<br/>اللهم آمين</p>
                 </div>
              </div>
            </Card>

            {/* Itinerary Section */}
            <Card className="border border-border shadow-md rounded-2xl bg-card overflow-hidden text-card-foreground" id="itinerary">
              <div className="bg-primary/5 p-4 border-b border-border flex justify-between items-center">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" /> Rencana Perjalanan (Itinerary)
                </h3>
              </div>
              <div className="p-5 md:p-6">
                <div className="space-y-4">
                  {itineraryData.map((day, index) => (
                    <div key={day.id} className="flex gap-3 group">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center font-bold text-sm shadow-sm border border-primary/20" style={{ fontFamily: 'system-ui, sans-serif' }}>
                          {day.id}
                        </div>
                        {index !== itineraryData.length - 1 && (
                          <div className="w-px h-full bg-border my-2"></div>
                        )}
                      </div>
                      <div className="pb-4 pt-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                          <div>
                            <h4 className="font-bold text-sm text-foreground leading-tight">{day.title}</h4>
                            {day.date && (
                              <p className="text-[11px] text-primary font-bold mt-0.5" style={{ fontFamily: 'system-ui, sans-serif' }}>{day.date}</p>
                            )}
                          </div>
                          {day.time && (
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-muted rounded border border-border text-muted-foreground whitespace-nowrap mt-1 sm:mt-0">
                              {day.time}
                            </span>
                          )}
                        </div>
                        {day.subtitle ? (
                           <p className="text-xs text-muted-foreground">{day.subtitle}</p>
                        ) : (
                           <p className="text-xs text-muted-foreground italic">Detail aktivitas menyesuaikan kondisi.</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Pricing, Pax, Included/Excluded */}
          <div className="space-y-6 lg:sticky lg:top-20">
            {/* Pricing Details */}
            <Card className="border border-border shadow-lg rounded-2xl bg-card overflow-hidden">
              <div className="bg-primary p-4 text-primary-foreground text-center">
                <h3 className="text-lg font-bold mb-0.5">Harga Paket</h3>
              </div>
              <div className="p-5 space-y-3">
                {pkg.priceDetails.map((detail, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border transition-all ${idx === 0 ? 'border-primary bg-primary/10 dark:bg-primary/20' : 'border-border'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-foreground">{detail.type}</span>
                      <detail.icon className={`h-4 w-4 ${idx === 0 ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xl font-bold text-primary" style={{ fontFamily: 'system-ui, sans-serif' }}>{detail.price}</span>
                      <span className="text-[10px] text-muted-foreground line-through decoration-red-500" style={{ fontFamily: 'system-ui, sans-serif' }}>Normal: {detail.originalPrice}</span>
                    </div>
                  </div>
                ))}

                <div className="pt-2 flex flex-col gap-2">
                  <Button asChild size="lg" className="w-full rounded-xl text-sm h-11 font-bold shadow-md hover:shadow-lg transition-all bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Link href={whatsappLink} target="_blank">Daftar Sekarang</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full rounded-xl text-sm h-11 font-bold border-border hover:bg-muted text-foreground transition-all">
                    <Link href={whatsappLink} target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4 text-emerald-500" /> Konsultasi via WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Information Pax */}
            <Card className="border border-border shadow-md rounded-2xl bg-card">
              <div className="p-5">
                <h4 className="text-sm font-bold text-primary mb-3 flex items-center gap-2 border-b border-border pb-2">
                  <Users className="h-4 w-4" /> Ketersediaan Kursi (Pax)
                </h4>
                <div className="space-y-3">
                   <div className="flex items-center gap-3 p-2 bg-muted rounded-lg border border-border">
                      <div className="p-2 bg-background rounded text-foreground">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase">Total Kuota</p>
                        <p className="text-sm font-bold" style={{ fontFamily: 'system-ui, sans-serif' }}>35 <span className="text-[10px] font-normal text-muted-foreground">Pax</span></p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                      <div className="p-2 bg-amber-500/20 rounded text-amber-600 dark:text-amber-500">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-amber-700 dark:text-amber-400 font-bold uppercase">Sisa Kuota</p>
                        <p className="text-sm font-bold text-amber-700 dark:text-amber-400">31 Pax</p>
                      </div>
                   </div>
                </div>
              </div>
            </Card>

            {/* Information Fasilitas */}
            <Card className="border border-border shadow-md rounded-2xl bg-card">
              <div className="p-5">
                <h4 className="text-sm font-bold text-primary mb-3 flex items-center gap-2 border-b border-border pb-2">
                  <Star className="h-4 w-4" /> Fasilitas Paket
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5 bg-emerald-500/10 p-1.5 rounded">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Termasuk (Include)
                    </h5>
                    <ul className="space-y-1.5 px-1">
                      {included.slice(0, 8).map((item, i) => (
                        <li key={i} className="text-[11px] text-muted-foreground flex items-start gap-2">
                          <span className="mt-0.5 text-emerald-500 text-[8px]">●</span>
                          <span className="font-medium leading-tight">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-1.5 bg-red-500/10 p-1.5 rounded">
                      <XCircle className="h-3.5 w-3.5" /> Belum Termasuk (Exclude)
                    </h5>
                    <ul className="space-y-1.5 px-1">
                      {excluded.slice(0, 5).map((item, i) => (
                        <li key={i} className="text-[11px] text-muted-foreground flex items-start gap-2">
                          <span className="mt-0.5 text-red-500 text-[8px]">●</span>
                          <span className="font-medium leading-tight">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Paket Lainnya */}
            <Card className="border border-border shadow-md rounded-2xl bg-card overflow-hidden">
               <div className="bg-primary/10 p-3 text-primary text-center border-b border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider">Paket Rekomendasi</h4>
               </div>
               <div className="p-3 space-y-3">
                  {packages.filter(p => p.id !== pkg.id).map(other => (
                    <Link key={other.id} href={`/paket/${other.id}`} className="group block">
                      <div className="flex gap-3 items-center bg-muted/30 p-2 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border">
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-sm">
                           <Image src={other.image.imageUrl} alt={other.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>
                        </div>
                        <div>
                          <h5 className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">{other.name}</h5>
                          <p className="text-[11px] text-primary font-bold mt-1" style={{ fontFamily: 'system-ui, sans-serif' }}>{other.price}</p>
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
