import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'PT. Madinah Salam Wisata - Your Journey Our Priority',
  description: 'Penyelenggara perjalanan ibadah Umrah dan Haji yang amanah, profesional, dan sesuai dengan tuntunan syariat.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased overflow-x-hidden')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <div className="fixed bottom-4 right-4 z-50">
            <Link href="https://wa.me/6282210004644" target="_blank" rel="noopener noreferrer" className="block w-10 h-10 transition-transform hover:scale-110 drop-shadow-lg">
                <Image 
                  src="/icons8-whatsapp.gif" 
                  alt="WhatsApp" 
                  width={40} 
                  height={40} 
                  unoptimized 
                  className="rounded-full"
                />
            </Link>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
