import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <CardContent className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white font-semibold text-lg">{image.description}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
