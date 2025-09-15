import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-background text-foreground py-16 lg:py-24">
            <div className="container max-w-4xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-4xl">Kebijakan Privasi</CardTitle>
                        <p className="text-muted-foreground">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                        <p>
                            Madinah Salam Wisata ("kami") berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan menjaga informasi Anda saat Anda mengunjungi situs web kami.
                        </p>

                        <h3>Informasi yang Kami Kumpulkan</h3>
                        <p>
                            Kami dapat mengumpulkan informasi pribadi dari Anda seperti nama, alamat email, nomor telepon, dan informasi lain yang Anda berikan secara sukarela saat mengisi formulir kontak atau mendaftar untuk paket kami.
                        </p>

                        <h3>Penggunaan Informasi Anda</h3>
                        <p>
                            Informasi yang kami kumpulkan digunakan untuk:
                        </p>
                        <ul>
                            <li>Menyediakan, mengoperasikan, dan memelihara layanan kami.</li>
                            <li>Meningkatkan, mempersonalisasi, dan memperluas layanan kami.</li>
                            <li>Memahami dan menganalisis bagaimana Anda menggunakan layanan kami.</li>
                            <li>Berkomunikasi dengan Anda, baik secara langsung atau melalui salah satu mitra kami, termasuk untuk layanan pelanggan, untuk memberi Anda pembaruan dan informasi lain yang berkaitan dengan situs web, dan untuk tujuan pemasaran dan promosi.</li>
                            <li>Mengirimkan email kepada Anda.</li>
                        </ul>

                        <h3>Keamanan Data</h3>
                        <p>
                            Kami menggunakan berbagai langkah keamanan untuk menjaga keamanan informasi pribadi Anda. Namun, tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman, dan kami tidak dapat menjamin keamanan mutlaknya.
                        </p>

                        <h3>Perubahan pada Kebijakan Privasi Ini</h3>
                        <p>
                            Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini.
                        </p>

                        <h3>Hubungi Kami</h3>
                        <p>
                            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui email di info@madinahsalam.com.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
