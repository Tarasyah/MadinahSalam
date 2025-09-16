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
            <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block w-14 h-14 transition-transform hover:scale-110">
              <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.0002 30C23.7322 30 30.0002 23.732 30.0002 16C30.0002 8.26801 23.7322 2 16.0002 2C8.26821 2 2.00024 8.26801 2.00024 16C2.00024 20.243 3.87424 24.038 6.74924 26.691L4.35424 30.001L8.03124 28.538C10.4282 29.567 13.1302 30 16.0002 30Z" fill="#25D366"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M22.3332 9.60803C21.8472 9.12303 21.2182 8.88203 20.4632 8.87403C19.8222 8.86803 19.2462 9.00003 18.7892 9.24303C18.3322 9.48603 17.7602 9.94003 17.3912 10.309L17.1512 10.58C17.0272 10.729 16.8372 10.871 16.5822 10.771C16.3272 10.671 14.8692 10.158 13.6262 9.07003C12.0152 7.68303 11.2332 6.57403 10.9992 6.19503C10.7652 5.81603 10.5182 5.56803 10.2832 5.56803H9.49924C9.25624 5.56803 8.87524 5.65903 8.65024 6.09603C8.42524 6.53303 7.62524 7.29503 7.62524 8.52003C7.62524 9.74503 8.67524 10.911 8.82524 11.085C8.97524 11.259 10.8402 14.076 13.6252 15.353C16.4102 16.63 17.1522 16.29 17.6502 16.208C18.1482 16.126 19.3332 15.533 19.5822 14.908C19.8312 14.283 19.8312 13.784 19.7562 13.625C19.6812 13.466 19.5562 13.342 19.2992 13.216C19.0422 13.09 18.2422 12.699 18.0162 12.616C17.7902 12.533 17.6412 12.492 17.4912 12.741C17.3412 12.99 16.9412 13.491 16.8162 13.625C16.6912 13.759 16.5662 13.791 16.3412 13.666C16.1162 13.541 15.3032 13.271 14.3322 12.454C13.5622 11.808 13.0672 11.011 12.9172 10.741C12.7672 10.471 12.8952 10.334 13.0172 10.216C13.1252 10.112 13.2592 9.94803 13.3842 9.80803C13.5092 9.66803 13.5592 9.55903 13.6582 9.38403C13.7572 9.20903 13.7082 9.05903 13.6332 8.94103C13.5582 8.82303 13.1492 8.70003 12.9492 8.60803C12.7492 8.51603 12.5742 8.52403 12.4242 8.58303C12.2742 8.64203 11.8332 8.79103 11.6082 9.18303C11.3832 9.57503 11.3332 10.425 11.6082 10.741C11.6162 10.75 12.0192 11.45 12.8672 12.298C14.0752 13.506 15.0002 14.125 15.8082 14.458C16.6162 14.791 17.3082 14.741 17.7662 14.549C18.2832 14.333 19.3332 13.749 19.6832 12.858C20.0332 11.967 20.0332 11.217 19.9332 10.992C19.8332 10.767 19.3412 10.599 19.3412 10.599L19.2582 10.566C19.7832 9.90703 20.0912 9.68303 20.4662 9.48303C20.8412 9.28303 21.1492 9.24203 21.4162 9.24203C21.6832 9.24203 22.0162 9.29103 22.2582 9.38303C22.3012 9.39903 22.3242 9.41603 22.3332 9.60803Z" fill="white"/>
              </svg>
            </Link>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
