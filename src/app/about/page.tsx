import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, Flag } from 'lucide-react';

const AboutPage = () => {

    const missions = [
        "Menyelenggarakan perjalanan ibadah Umrah dan Haji yang sesuai dengan tuntunan syariat dan sunnah.",
        "Memberikan pelayanan yang amanah, profesional, dan penuh kepedulian kepada jamaah.",
        "Membimbing jamaah secara ruhiyah dan teknis agar meraih ibadah yang sah, khusyuk, dan mabrur.",
        "Menghadirkan pengalaman berwisata yang edukatif, berkesan, dan memperkuat iman.",
        "Menjalin kemitraan yang transparan dan berkelanjutan dengan stakeholder lokal dan internasional."
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <Image
                    src="/background_tabtentangkami.webp"
                    alt="Tentang Kami Hero Image"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center p-4">
                    <h1 className="font-headline text-5xl md:text-6xl font-bold text-white">Tentang PT. Madinah Salam Wisata</h1>
                    <p className="mt-4 text-xl text-white/90">Your Journey Our Priority</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 lg:py-24">
                <div className="container max-w-4xl mx-auto">
                    <div className="space-y-12">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="font-headline text-3xl font-bold text-primary">Siapa Kami?</h2>
                            <p>
                                PT. Madinah Salam Wisata adalah penyelenggara perjalanan ibadah Umrah dan Haji yang berfokus pada layanan yang amanah, profesional, dan sesuai dengan tuntunan syariat.
                            </p>
                        </div>
                        
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-headline text-2xl font-bold mb-4 flex items-center"><Target className="h-6 w-6 mr-3 text-primary"/> Visi Kami</h3>
                                <p className="text-muted-foreground">
                                    Menjadi penyelenggara perjalanan ibadah Umrah, Haji, dan wisata terpercaya yang berkomitmen menghadirkan layanan sesuai tuntunan sunnah Rasulullah.
                                </p>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-headline text-2xl font-bold mb-4 flex items-center"><Flag className="h-6 w-6 mr-3 text-primary"/> Misi Kami</h3>
                                <ul className="space-y-4">
                                    {missions.map((mission, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{mission}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                     <div className="mt-12 rounded-lg overflow-hidden border">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.46279932646!2d106.88371307481119!3d-6.332822861962381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed26a457c13b%3A0x6d5f76da15558121!2sMadinah%20salam%20wisata!5e0!3m2!1sen!2sid!4v1721893361545!5m2!1sen!2sid" 
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }}
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
