import Link from 'next/link';
import { Mosque, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/requirements', label: 'Requirements' },
    { href: '/#packages', label: 'Packages' },
  ];

  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Mosque className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">Umrah Journey</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for a blessed and peaceful Umrah experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
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
            <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0" />
                <span className="text-muted-foreground">123 Holy Street, Makkah, Saudi Arabia</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                <a href="mailto:info@umrahjourney.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@umrahjourney.com
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Legal</h3>
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

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Umrah Journey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
