import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

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
          <div className="fixed bottom-4 left-4 z-50">
            <Button asChild size="icon" className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600">
              <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-8 h-8" />
              </Link>
            </Button>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
