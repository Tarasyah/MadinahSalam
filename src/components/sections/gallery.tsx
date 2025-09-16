import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { Card } from '@/components/ui/card';

const GallerySection = () => {
    return (
        <section id="gallery" className="py-16 lg:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Galeri Perjalanan</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Momen-momen indah dan spiritual dari perjalanan umrah bersama kami.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {galleryImages.map((image) => (
                        <Card key={image.id} className="relative aspect-[4/3] overflow-hidden rounded-lg group border-none shadow-lg">
                             <Image
                                src={image.imageUrl}
                                alt={image.description}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
