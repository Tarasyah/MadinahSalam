import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Madinah Salam Wisata',
  description: 'Paket perjalanan Umrah eksklusif.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <div className="fixed bottom-6 right-6 z-50">
            <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block w-16 h-16 transition-transform hover:scale-110">
                <svg viewBox="0 0 56 56" width="60" height="60" className="drop-shadow-lg">
                    <defs>
                        <clipPath id="whatsapp-clip">
                            <path d="M28 3C12.536 3 0 14.1921 0 28C0 41.8079 12.536 53 28 53C22 53 20 56 17 56C16.5 52 17.5 45.3333 19.5 39.5C17.8373 36.1012 16.7876 32.1818 16 28C16 14.1921 28.536 3 28 3Z" />
                        </clipPath>
                    </defs>
                    <foreignObject x="0" y="0" width="56" height="56" clipPath="url(#whatsapp-clip)">
                         <Image src="/icons8-whatsapp.gif" alt="WhatsApp" width={56} height={56} unoptimized />
                    </foreignObject>
                </svg>
            </Link>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
