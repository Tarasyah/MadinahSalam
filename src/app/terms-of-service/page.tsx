import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfServicePage = () => {
    return (
        <div className="bg-background text-foreground py-16 lg:py-24">
            <div className="container max-w-4xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-4xl">Syarat & Ketentuan</CardTitle>
                        <p className="text-muted-foreground">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                        <p>
                            Selamat datang di PT. Madinah Salam Wisata. Syarat dan Ketentuan ini mengatur penggunaan Anda atas situs web dan layanan kami. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.
                        </p>

                        <h3>1. Pendaftaran dan Pembayaran</h3>
                        <ul>
                            <li>Pendaftaran dianggap sah setelah calon jamaah mengisi formulir pendaftaran dan melakukan pembayaran uang muka (DP) sebesar Rp6.000.000,-.</li>
                            <li>Pelunasan biaya paket harus dilakukan selambat-lambatnya 1 bulan sebelum tanggal keberangkatan.</li>
                            <li>Kegagalan dalam melakukan pelunasan sesuai jadwal dapat mengakibatkan pembatalan keikutsertaan.</li>
                            <li>Semua transaksi ditransfer ke rekening resmi perusahaan: Bank Syariah Indonesia (BSI) No. 727 889 1326 a/n PT Madinah Salam Wisata.</li>
                        </ul>

                        <h3>2. Ketentuan Pembatalan</h3>
                        <ul>
                            <li>DP (Down Payment) yang telah diserahkan tidak dapat dikembalikan (non-refundable).</li>
                            <li>Pembatalan di atas 30 hari sebelum keberangkatan dikenakan biaya administrasi sebesar Rp 6.000.000,-.</li>
                            <li>Pembatalan dalam 30 hari sebelum keberangkatan dikenakan potongan 50% dari harga paket.</li>
                            <li>Pembatalan dalam 15 hari sebelum keberangkatan dikenakan potongan 100% dari harga paket.</li>
                        </ul>

                        <h3>3. Dokumen Perjalanan</h3>
                        <ul>
                            <li>Jamaah bertanggung jawab penuh atas keabsahan dan kelengkapan dokumen perjalanan (paspor, KTP, KK, sertifikat vaksin, dll).</li>
                            <li>Paspor harus berlaku minimal satu tahun sebelum keberangkatan dengan nama minimal 2 suku kata.</li>
                            <li>Kami akan membantu proses pengajuan visa, namun keputusan akhir persetujuan visa sepenuhnya merupakan wewenang kedutaan negara tujuan.</li>
                        </ul>

                        <h3>4. Perubahan Jadwal & Force Majeure</h3>
                        <p>
                            Jadwal perjalanan (itinerary) dapat berubah sewaktu-waktu tergantung pada kondisi di lapangan, kebijakan maskapai, dan pemerintah setempat tanpa mengurangi nilai ibadah. PT. Madinah Salam Wisata berhak membatalkan perjalanan jika terjadi hal-hal di luar kendali (force majeure) seperti bencana alam, wabah penyakit, perang, atau kebijakan pemerintah, dengan penyelesaian secara musyawarah.
                        </p>

                        <h3>5. Batasan Tanggung Jawab</h3>
                        <p>
                           PT. Madinah Salam Wisata tidak bertanggung jawab atas kehilangan atau kerusakan barang bawaan pribadi, kecelakaan, atau biaya tambahan yang timbul akibat keterlambatan atau gangguan perjalanan yang disebabkan oleh pihak ketiga (maskapai, hotel, dll) atau kelalaian jamaah.
                        </p>

                        <h3>Hubungi Kami</h3>
                        <p>
                            Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami melalui nomor admin di (+62) 822 1000 4644.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
