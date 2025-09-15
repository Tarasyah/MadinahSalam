import Link from 'next/link';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

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

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <span>Jl. Contoh No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:info@madinahsalam.com" className="hover:text-primary">info@madinahsalam.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <a href="tel:+62211234567" className="hover:text-primary">(021) 123-4567</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
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
