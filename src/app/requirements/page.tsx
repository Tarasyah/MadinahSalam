import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const RequirementsPage = () => {
    const requirementsHeroImage = PlaceHolderImages.find(img => img.id === 'requirements-hero');

    const requirementItems = [
        {
            title: "Syarat & Ketentuan Pendaftaran",
            content: [
                "Paspor berlaku minimal satu tahun dengan nama minimal 2 suku kata.",
                "Soft copy KTP, pas foto 3x6, dan Kartu Keluarga (untuk anak di bawah umur).",
                "Sertifikat vaksin meningitis dan polio.",
                "DP (Down Payment) sebesar Rp6.000.000,-.",
                "Pelunasan maksimal 1 bulan sebelum keberangkatan."
            ]
        },
        {
            title: "Alur Pembayaran",
            content: [
                "Semua transaksi ditransfer ke rekening Bank Syariah Indonesia (BSI).",
                "Nomor Rekening: 727 889 1326.",
                "Atas Nama: PT Madinah Salam Wisata.",
                "Bukti transaksi wajib dikonfirmasi ke admin di nomor (+62) 822 1000 4644."
            ]
        },
        {
            title: "Perlengkapan Umrah yang Disediakan",
            content: [
                "Koper Bagasi 24 Inci & Koper Kabin 18 Inci.",
                "Kain Ihram Premium & Sabuk (untuk laki-laki).",
                "Jilbab Premium (untuk perempuan).",
                "Tas Selempang, Tas Serut untuk Sendal, Buku Doa, Buku Dzikir, Parfum, dan ID Card."
            ]
        }
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
                {requirementsHeroImage && (
                    <Image
                        src={requirementsHeroImage.imageUrl}
                        alt={requirementsHeroImage.description}
                        data-ai-hint={requirementsHeroImage.imageHint}
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center p-4">
                    <h1 className="font-headline text-5xl md:text-6xl font-bold text-white">Persyaratan & Prosedur</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 lg:py-24">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-lg text-muted-foreground">
                            Untuk kelancaran proses pendaftaran dan keberangkatan Anda, mohon perhatikan dan lengkapi persyaratan serta prosedur berikut.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                        {requirementItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        {item.content.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
};

export default RequirementsPage;
