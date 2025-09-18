import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const whatsappLink = "https://wa.me/6282210004644";

  const quickLinks = [
    { href: '/', label: 'Beranda', target: '_self' },
    { href: '/about', label: 'Tentang Kami', target: '_self' },
    { href: '/requirements', label: 'Persyaratan', target: '_self' },
    { href: '/#packages', label: 'Paket', target: '_self' },
    { href: whatsappLink, label: 'Kontak', target: '_blank' },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: 'Kebijakan Privasi' },
    { href: '/terms-of-service', label: 'Syarat & Ketentuan' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/madinahsalam1', label: 'Facebook', icon: Facebook },
    { href: 'https://youtube.com/@madinahsalamwisata?feature=shared', label: 'YouTube', icon: Youtube },
    { href: 'https://instagram.com/madinahsalam1', label: 'Instagram', icon: Instagram },
    { href: 'https://t.me/madinahsalam', label: 'Telegram', icon: FaTelegram },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          
          {/* Logo and Description */}
          <div className="text-left flex flex-col items-center md:items-start justify-start order-first md:order-none">
             <div className="flex justify-center md:justify-start items-center space-x-2 -mt-4">
              <div className="relative h-24 w-56">
                <Image src="/logo_lightmodebottombar.png" alt="Logo Light" fill className="object-contain block dark:hidden" />
                <Image src="/logo_darkmodebottombar.png" alt="Logo Dark" fill className="object-contain hidden dark:block" />
              </div>
            </div>
            <p className="text-muted-foreground mt-2 max-w-sm text-left">
              Your Journey Our Priority. Penyelenggara perjalanan ibadah Umrah dan Haji yang amanah dan profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="font-semibold mb-4 text-foreground">Tautan</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} target={link.target} rel={link.target === '_blank' ? 'noopener noreferrer' : ''} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="font-semibold mb-4 text-foreground">Hubungi Kami</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start justify-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Jl. Radar Auri No. 9, RT 13 RW 05, Kel. Cibubur, Kec. Ciracas, Jakarta Timur.
                </a>
              </li>
              <li className="flex items-center justify-start">
                <Mail className="h-4 w-4 mr-3" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">madinahsalamwisata@gmail.com</a>
              </li>
              <li className="flex items-center justify-start">
                <Phone className="h-4 w-4 mr-3" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">(+62) 822 1000 4644</a>
              </li>
            </ul>
          </div>
          
          {/* Social Links for Desktop */}
          <div className="hidden md:flex flex-col items-start justify-start">
              <h3 className="font-semibold mb-4 text-foreground">Media Sosial</h3>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          {/* Social Links for Mobile/Tablet */}
          <div className="flex justify-center space-x-6 mb-4 md:hidden">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
          <div className="mb-2 space-x-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} PT. Madinah Salam Wisata. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
