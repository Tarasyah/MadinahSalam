import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
    const aboutHeroImage = PlaceHolderImages.find(img => img.id === 'about-us-hero');

    const values = [
        "Amanah dan Terpercaya",
        "Pelayanan Prima",
        "Kenyamanan Jamaah",
        "Bimbingan Ibadah Intensif",
        "Harga Kompetitif"
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                {aboutHeroImage && (
                    <Image
                        src={aboutHeroImage.imageUrl}
                        alt={aboutHeroImage.description}
                        data-ai-hint={aboutHeroImage.imageHint}
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center p-4">
                    <h1 className="font-headline text-5xl md:text-6xl font-bold text-white">Tentang Madinah Salam Wisata</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 lg:py-24">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="font-headline text-3xl font-bold text-primary">Siapa Kami?</h2>
                            <p>
                                Madinah Salam Wisata adalah biro perjalanan umrah resmi yang berdedikasi untuk memberikan pengalaman ibadah yang tak terlupakan bagi setiap jamaah. Didirikan dengan niat tulus untuk melayani para tamu Allah, kami berkomitmen untuk menjaga amanah dan memberikan pelayanan terbaik.
                            </p>
                            <p>
                                Tim kami terdiri dari para profesional yang berpengalaman di bidangnya, mulai dari pembimbing ibadah (muthawif) yang berilmu, hingga staf operasional yang sigap memastikan semua kebutuhan Anda terpenuhi, sejak dari pendaftaran hingga kembali ke tanah air.
                            </p>
                        </div>
                        <div>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-headline text-2xl font-bold mb-4">Nilai-Nilai Kami</h3>
                                    <ul className="space-y-3">
                                        {values.map((value, index) => (
                                            <li key={index} className="flex items-center">
                                                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                                                <span>{value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
