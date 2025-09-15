import Link from 'next/link';
import { Building2 } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { href: '/#about', label: 'Tentang' },
    { href: '/#included', label: 'Fasilitas' },
    { href: '/#contact', label: 'Kontak' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-xl">UMRAH JOURNEY</span>
          </div>

          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="list-none">
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
