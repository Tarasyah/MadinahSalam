import Image from 'next/image';
import { galleryImages } from '@/lib/data';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Moments from the Journey</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A visual diary of the profound spiritual experiences that await you.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden group ${
                index === 0 ? 'col-span-2 md:col-span-2' : ''
              } ${
                index === 3 ? 'md:col-span-1' : ''
              }`}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
