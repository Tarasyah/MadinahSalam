import Image from 'next/image';

const galleryImages = [
  { src: '/haji1.jpeg', alt: 'Dokumentasi Perjalanan 1' },
  { src: '/1.png', alt: 'Dokumentasi Perjalanan 2' },
  { src: '/2.png', alt: 'Dokumentasi Perjalanan 3' },
  { src: '/3.png', alt: 'Dokumentasi Perjalanan 4' },
  { src: '/4.png', alt: 'Dokumentasi Perjalanan 5' },
  { src: '/5.png', alt: 'Dokumentasi Perjalanan 6' },
  { src: '/6.png', alt: 'Dokumentasi Perjalanan 7' },
  { src: '/slide1.jpeg', alt: 'Dokumentasi Perjalanan 8' },
];

export default function GaleriPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-foreground">Galeri Perjalanan</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kumpulan momen indah kebersamaan jamaah Madinah Salam Wisata selama di Tanah Suci. 
            Semoga menjadi inspirasi dan pengobat rindu Baitullah.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer border border-border shadow-sm">
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={800} 
                height={600} 
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Lihat Foto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
