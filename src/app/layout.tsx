import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Madinah Salam Wisata',
  description: 'Paket perjalanan Umrah eksklusif.',
};

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}>
        <path fill="#40c351" d="M48,24C48,10.7,37.3,0,24,0S0,10.7,0,24c0,8.3,4.3,15.6,10.9,19.9L6.4,48l8.3-4.5	c2.9,1,6,1.6,9.3,1.6C37.3,45,48,34.3,48,24z" />
        <path fill="#fff" d="M35.2,31.4c-0.3-0.2-1.1-0.5-1.3-0.6c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.7,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1	c-0.2-0.1-1.4-0.5-2.6-1.6c-1-0.8-1.6-1.8-1.8-2.1c-0.2-0.3-0.1-0.4,0.1-0.6c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.2,0.3-0.4	c(0.1-0.1,0.1-0.3,0-0.4c-0.1-0.2-0.5-1.3-0.7-1.8c-0.2-0.5-0.4-0.4-0.5-0.4c-0.1,0-0.3,0-0.5,0c-0.2,0-0.5,0.1-0.7,0.3	c-0.3,0.2-1.1,1.1-1.1,2.6c0,1.5,1.1,3,1.3,3.2c0.2,0.2,2.2,3.4,5.4,4.8c3.2,1.4,3.2,0.9,3.8,0.9c0.5,0,1.6-0.7,1.8-1.3	c(0.2-0.7,0.2-1.2,0.2-1.3C35.8,31.6,35.5,31.5,35.2,31.4z" />
    </svg>
);


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
            <Button asChild size="icon" className="w-14 h-14 rounded-full bg-transparent hover:bg-transparent shadow-lg hover:shadow-xl transition-all p-0">
              <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <WhatsAppIcon className="w-full h-full" />
              </Link>
            </Button>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
