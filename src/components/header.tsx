'use client';

import Link from 'next/link';
import { Menu, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/requirements', label: 'Persyaratan' },
  { href: '/#packages', label: 'Paket' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? '' : 'lg:top-4'
    )}>
      <div className={cn(
          "container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300",
          !isScrolled && "lg:px-4"
      )}>
        <div className={cn(
            "relative flex h-14 items-center transition-all duration-300",
            isScrolled 
              ? 'dark:bg-background/80 bg-white/80 backdrop-blur-lg rounded-none lg:rounded-full' 
              : 'bg-background/60 backdrop-blur-lg rounded-full border border-white/20'
        )}>
          {/* Background and Blur element */}
          <div className="absolute inset-0 -z-10" />

          <div className="flex-1 flex items-center pl-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">Madinah Salam</span>
            </Link>
          </div>

          <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-2 pr-2">
            <div className="hidden md:flex items-center space-x-2">
              <ThemeToggle />
              <Button asChild className="hidden lg:inline-flex rounded-full">
                <Link href="/#contact">Hubungi Kami</Link>
              </Button>
            </div>

            <div className="lg:hidden flex items-center">
              <ThemeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-hover">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                    side="top" 
                    className="h-screen w-screen bg-background/95 backdrop-blur-sm border-none flex flex-col items-center justify-center p-0"
                >
                    <div className="flex flex-col items-center justify-center text-center gap-y-8">
                        {navLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                    'text-2xl font-medium transition-colors hover:text-primary',
                                    pathname === link.href ? 'text-primary' : 'text-foreground'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </SheetClose>
                        ))}
                         <SheetClose asChild>
                            <Button asChild size="lg" className="rounded-full mt-4">
                                <Link href="/#contact">Hubungi Kami</Link>
                            </Button>
                        </SheetClose>
                    </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
