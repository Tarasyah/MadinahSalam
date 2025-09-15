import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const RequirementsPage = () => {
    const requirementsHeroImage = PlaceHolderImages.find(img => img.id === 'requirements-hero');

    const requirementItems = [
        {
            title: "Dokumen Pribadi",
            content: [
                "Paspor yang masih berlaku minimal 7 bulan sebelum tanggal keberangkatan.",
                "Nama di paspor minimal terdiri dari 2 suku kata.",
                "Fotokopi KTP (Kartu Tanda Penduduk).",
                "Fotokopi Kartu Keluarga (KK).",
                "Fotokopi Akta Kelahiran atau Buku Nikah."
            ]
        },
        {
            title: "Dokumen Tambahan",
            content: [
                "Pas foto berwarna dengan latar belakang putih, ukuran 4x6 sebanyak 6 lembar (wajah terlihat 80%, wanita wajib berhijab).",
                "Kartu Kuning (suntik meningitis) yang masih berlaku.",
                "Surat Mahram bagi wanita yang berangkat sendiri (usia di bawah 45 tahun)."
            ]
        },
        {
            title: "Ketentuan Pembayaran",
            content: [
                "Melakukan pembayaran uang muka (DP) sebesar 50% dari total biaya paket.",
                "Pelunasan biaya paling lambat 1 bulan sebelum tanggal keberangkatan.",
                "Pembayaran dapat dilakukan melalui transfer bank ke rekening resmi perusahaan atau datang langsung ke kantor kami."
            ]
        },
        {
            title: "Lain-lain",
            content: [
                "Jamaah dalam kondisi sehat jasmani dan rohani.",
                "Mengisi formulir pendaftaran dengan lengkap dan benar.",
                "Menyerahkan semua dokumen persyaratan paling lambat 1.5 bulan sebelum keberangkatan."
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
                    <h1 className="font-headline text-5xl md:text-6xl font-bold text-white">Persyaratan Umrah</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 lg:py-24">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-lg text-muted-foreground">
                            Untuk kelancaran proses pendaftaran dan keberangkatan Anda, mohon perhatikan dan lengkapi persyaratan berikut.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
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
