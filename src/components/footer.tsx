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
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-8">
            {/* Top Section: Logo + Description */}
            <div className="flex items-center gap-8">
                <div className="relative h-[50px] w-56 flex-shrink-0">
                  <Image src="/logo_lightmodebottombar.png" alt="Logo Light" fill className="object-contain block dark:hidden" />
                  <Image src="/logo_darkmodebottombar.png" alt="Logo Dark" fill className="object-contain hidden dark:block" />
                </div>
                <p className="text-muted-foreground text-sm">
                    Your Journey Our Priority. Penyelenggara perjalanan ibadah Umrah dan Haji yang amanah, profesional, dan sesuai dengan tuntunan syariat Islam, berkomitmen memberikan pelayanan terbaik untuk pengalaman spiritual Anda.
                </p>
            </div>
            
            {/* Divider */}
            <div className="border-t border-border/50"></div>

            {/* Bottom Section: Contact, Social, Links */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                 <div className="md:col-span-2">
                    <h3 className="font-semibold mb-4 text-foreground">Hubungi Kami</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" />
                        <a href="https://goo.gl/maps/iBGCTeDk4dSvmdqj8" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                          Jl. Radar Auri No. 9, RT 13 RW 05, Kel. Cibubur, Kec. Ciracas, Jakarta Timur.
                        </a>
                      </li>
                      <li className="flex items-center">
                        <Mail className="h-4 w-4 mr-3" />
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">madinahsalamwisata@gmail.com</a>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-4 w-4 mr-3" />
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">(+62) 822 1000 4644</a>
                      </li>
                    </ul>
                 </div>
                 <div>
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
                 <div>
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
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center justify-center text-center gap-8 text-sm md:hidden">
          <div className="flex flex-col items-center">
             <div className="w-auto">
                <div className="relative h-auto w-auto">
                  <Image src="/logo_lightmodebottombar.png" alt="Logo Light" width={120} height={120} className="object-contain block dark:hidden" />
                  <Image src="/logo_darkmodebottombar.png" alt="Logo Dark" width={120} height={120} className="object-contain hidden dark:block" />
                </div>
              <p className="text-muted-foreground mt-2 max-w-sm">
                Your Journey Our Priority. Penyelenggara perjalanan ibadah Umrah dan Haji yang amanah dan profesional.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-4 text-foreground">Hubungi Kami</h3>
            <ul className="space-y-3 text-muted-foreground flex flex-col items-center">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" />
                <a href="https://goo.gl/maps/iBGCTeDk4dSvmdqj8" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-left">
                  Jl. Radar Auri No. 9, RT 13 RW 05, Kel. Cibubur, Kec. Ciracas, Jakarta Timur.
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">madinahsalamwisata@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">(+62) 822 1000 4644</a>
              </li>
            </ul>
          </div>

          <div className="text-center">
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
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
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
