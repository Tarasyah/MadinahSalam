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
                            Selamat datang di Madinah Salam Wisata. Syarat dan Ketentuan ini mengatur penggunaan Anda atas situs web dan layanan kami. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.
                        </p>

                        <h3>1. Pendaftaran dan Pembayaran</h3>
                        <ul>
                            <li>Pendaftaran dianggap sah setelah calon jamaah mengisi formulir pendaftaran dan melakukan pembayaran uang muka (DP) sesuai ketentuan.</li>
                            <li>Pelunasan biaya paket harus dilakukan selambat-lambatnya 30 hari sebelum tanggal keberangkatan.</li>
                            <li>Kegagalan dalam melakukan pelunasan sesuai jadwal dapat mengakibatkan pembatalan keikutsertaan tanpa pengembalian uang muka.</li>
                        </ul>

                        <h3>2. Pembatalan dan Pengembalian Dana</h3>
                        <ul>
                            <li>Pembatalan yang dilakukan oleh jamaah akan dikenakan biaya pembatalan sesuai dengan kebijakan yang berlaku.</li>
                            <li>Uang muka (DP) tidak dapat dikembalikan (non-refundable) dengan alasan apapun.</li>
                            <li>Madinah Salam Wisata berhak membatalkan perjalanan jika terjadi hal-hal di luar kendali (force majeure) seperti bencana alam, wabah penyakit, perang, atau kebijakan pemerintah, dengan penyelesaian secara musyawarah.</li>
                        </ul>

                        <h3>3. Dokumen Perjalanan</h3>
                        <ul>
                            <li>Jamaah bertanggung jawab penuh atas keabsahan dan kelengkapan dokumen perjalanan (paspor, visa, dll).</li>
                            <li>Kami akan membantu proses pengajuan visa, namun keputusan akhir persetujuan visa sepenuhnya merupakan wewenang kedutaan negara tujuan.</li>
                        </ul>

                        <h3>4. Perubahan Jadwal</h3>
                        <p>
                            Jadwal perjalanan (itinerary) dapat berubah sewaktu-waktu tergantung pada kondisi di lapangan, kebijakan maskapai, dan pemerintah setempat tanpa mengurangi nilai ibadah.
                        </p>

                        <h3>5. Batasan Tanggung Jawab</h3>
                        <p>
                           Madinah Salam Wisata tidak bertanggung jawab atas kehilangan atau kerusakan barang bawaan pribadi, kecelakaan, atau biaya tambahan yang timbul akibat keterlambatan atau gangguan perjalanan yang disebabkan oleh pihak ketiga (maskapai, hotel, dll).
                        </p>

                        <h3>Hubungi Kami</h3>
                        <p>
                            Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
