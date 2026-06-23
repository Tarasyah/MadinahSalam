import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Persyaratan Umroh & Haji - Madinah Salam Wisata',
  description: 'Informasi lengkap dokumen dan persyaratan yang dibutuhkan untuk mendaftar paket umroh dan haji di Madinah Salam Wisata.',
};
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const RequirementsPage = () => {

    const requirementItems = [
        {
            title: "Syarat & Ketentuan Pendaftaran",
            content: (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Paspor minimal berlaku satu tahun dan nama minimal 2 suku kata.</li>
                    <li>Soft copy KTP (PDF, PNG, atau JPG).</li>
                    <li>Soft copy pas foto 4x6 (JPG atau PNG).</li>
                    <li>Soft copy KK bagi anak di bawah umur. (PDF, PNG, atau JPG).</li>
                    <li>Soft copy buku kuning vaksin/sertifikat vaksin meningitis dan polio asli (PDF, PNG, atau JPG).</li>
                    <li>DP Rp6.000.000.</li>
                    <li>Pelunasan maksimal 1 bulan sebelum keberangkatan.</li>
                </ul>
            )
        },
        {
            title: "Syarat & Ketentuan Pembatalan",
            content: (
                <div className="space-y-4 text-muted-foreground">
                    <div>
                        <span className="font-semibold text-foreground">A. DP yang telah diserahkan oleh calon jamaah umroh tidak bisa dikembalikan</span>
                    </div>
                    <div>
                        <span className="font-semibold text-foreground">B. Pelunasan:</span>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>Calon jamaah umroh wajib melakukan pelunasan selambat-lambatnya H - 30 sebelum keberangkatan</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-semibold text-foreground">C. Pembatalan:</span>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>Pembatalan diatas 30 hari sebelum keberangkatan maka dikenakan pemotongan biaya administrasi sebesar Rp. 6.000.000 (enam juta rupiah)</li>
                            <li>Pembatalan 30 hari sebelum keberangkatan maka dikenakan pemotongan sebesar 50% dari harga paket</li>
                            <li>Pembatalan 15 hari sebelum keberangkatan maka dikenakan pemotongan sebesar 100% dari harga paket.</li>
                            <li>Pembatalan secara otomatis : Apabila calon jamaah tidak melakukan pelunasan H-25 sebelum keberangkatan setelah dilakukan konfirmasi oleh pihak travel maka calon jamaah dianggap mengundurkan diri.</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-semibold text-foreground">D. Pengembalian dana:</span>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>Pengembalian Dana Jamaah yang mengundurkan diri atau membatalkan pendaftaran paling cepat adalah 7 hari setelah jamaah mengajukan surat pembatalan dan disetujui pihak travel</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Ketentuan Khusus",
            content: (
                <div className="space-y-4 text-muted-foreground">
                    <div>
                        <span className="font-semibold text-foreground">1. Klausul Force Majeure</span>
                        <p className="mt-1">
                            Dalam hal terjadi keadaan kahar (force majeure) yang berada di luar kemampuan dan kendali Para Pihak, termasuk namun tidak terbatas pada bencana alam, perang, kebijakan pemerintah, wabah penyakit, gangguan transportasi, serta keadaan lain yang sejenis, maka Pihak Travel dibebaskan dari segala tuntutan dan tanggung jawab atas kerugian, keterlambatan, maupun kegagalan pelaksanaan layanan yang timbul akibat keadaan tersebut. Segala bentuk penyelesaian lebih lanjut akan diselesaikan secara musyawarah untuk mencapai mufakat oleh Para Pihak.
                        </p>
                    </div>
                    <div>
                        <span className="font-semibold text-foreground">2. Klausul Penyesuaian Harga</span>
                        <p className="mt-1">
                            Pihak Travel berhak melakukan penyesuaian harga paket perjalanan sewaktu-waktu apabila terjadi kenaikan biaya dari pihak ketiga, termasuk namun tidak terbatas pada kenaikan harga tiket penerbangan yang ditetapkan oleh maskapai penerbangan maupun perubahan biaya operasional lainnya yang berkaitan dengan pelaksanaan perjalanan.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Alur Pembayaran",
            content: (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Semua transaksi ditransfer ke rekening Bank Syariah Indonesia (BSI).</li>
                    <li>Nomor Rekening: 727 889 1326.</li>
                    <li>Atas Nama: PT Madinah Salam Wisata.</li>
                    <li>Bukti transaksi wajib dikonfirmasi ke admin di nomor (+62) 822 1000 4644.</li>
                </ul>
            )
        },
        {
            title: "Perlengkapan Umrah yang Disediakan",
            content: (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Koper Bagasi 24 Inci & Koper Kabin 18 Inci.</li>
                    <li>Kain Ihram Premium & Sabuk (untuk laki-laki).</li>
                    <li>Jilbab Premium (untuk perempuan).</li>
                    <li>Tas Selempang, Tas Serut untuk Sendal, Buku Doa, Buku Dzikir, Parfum, dan ID Card.</li>
                </ul>
            )
        }
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
                <Image
                    src="/background_tabpersyaratan.webp"
                    alt="Persyaratan Hero Image"
                    fill
                    className="object-cover"
                />
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
                                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {item.content}
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
