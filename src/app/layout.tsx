import { Analytics } from '@vercel/analytics/next';

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { CustomThemeProvider } from '@/components/custom-theme-provider';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PBF9NQBX');
          `}
        </Script>
        <meta name="view-transition" content="same-origin" />
        <meta name="google-site-verification" content="Kj18bP29bNQQ9IMKUWNJy2uzjUE1_ARgGr3buVEfaQk" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo_lightmode.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased overflow-x-hidden')}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBF9NQBX"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FB4HYX1G52"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FB4HYX1G52');
          `}
        </Script>
        <CustomThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <div id="floating-wa" className="fixed bottom-4 right-4 z-50">
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
        </CustomThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
