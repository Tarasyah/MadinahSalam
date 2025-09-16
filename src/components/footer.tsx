import Link from 'next/link';
import { Building2, Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/requirements', label: 'Persyaratan' },
    { href: '/#packages', label: 'Paket' },
    { href: '/#contact', label: 'Kontak' },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: 'Kebijakan Privasi' },
    { href: '/terms-of-service', label: 'Syarat & Ketentuan' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/Madinah-Salam', label: 'Madinah Salam', icon: Facebook },
    { href: 'https://www.youtube.com/Madinah-Salam', label: 'Madinah Salam', icon: Youtube },
    { href: 'https://www.instagram.com/madinahsalam_wisata', label: '@madinahsalam_wisata', icon: Instagram },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">Madinah Salam</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Wisata perjalanan umrah yang amanah, nyaman, dan berkesan.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" />
                <span>Madinah Salam Wisata Office | Jl. Radar Auri No. 9, RT 13 RW 05, Kel. Cibubur, Kec. Ciracas, Jakarta Timur.</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:madinahsalamwisata@gmail.com" className="hover:text-primary">madinahsalamwisata@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <a href="tel:+6282210004644" className="hover:text-primary">(+62) 822 1000 4644</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Media Sosial</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <link.icon className="h-4 w-4 mr-3" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Madinah Salam Wisata. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
