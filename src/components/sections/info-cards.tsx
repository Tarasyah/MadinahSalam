import Image from 'next/image';
import { infoCards } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const InfoCardsSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                    {infoCards.map((card) => (
                        <Card key={card.id} className="relative aspect-[2/3] overflow-hidden rounded-lg group border-none">
                             <Image
                                src={card.image.imageUrl}
                                alt={card.title}
                                data-ai-hint={card.image.imageHint}
                                fill
                                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <CardContent className="absolute bottom-0 left-0 p-4">
                                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoCardsSection;
