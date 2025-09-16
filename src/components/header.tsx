'use client';

import Link from 'next/link';
import { Menu, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/requirements', label: 'Persyaratan' },
  { href: '/#packages', label: 'Paket' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? '' : 'pt-4'
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent transition-opacity duration-300 pointer-events-none",
            (isScrolled) ? "opacity-0" : "opacity-100"
          )}
        />
        <div
          className={cn(
            'relative mx-auto flex h-14 items-center transition-all duration-300 px-4',
            'lg:container lg:w-10/12'
          )}
        >
          <div
            className={cn(
              'absolute inset-0 -z-10 transition-all duration-300',
              isScrolled ? 'dark:bg-background/80 bg-white/80 backdrop-blur-lg' : '',
              isScrolled && 'lg:rounded-full'
            )}
          />

          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span
                className={cn(
                  'font-bold font-headline text-lg',
                  !isScrolled ? 'text-white' : 'text-foreground'
                )}
              >
                Madinah Salam
              </span>
            </Link>
          </div>

          <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary whitespace-nowrap',
                  !isScrolled ? 'text-white/80 hover:text-white' : 'text-foreground/80',
                  pathname === link.href && (!isScrolled ? 'text-white' : 'text-primary font-semibold')
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
            <Button asChild className="hidden lg:inline-flex rounded-full">
              <Link href="/#contact">Hubungi Kami</Link>
            </Button>

            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/20"
                  >
                    <Menu className={cn('h-5 w-5', !isScrolled ? 'text-white' : 'text-foreground')} />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-56 bg-card mr-2"
                >
                  {[...navLinks, { href: '/#contact', label: 'Hubungi Kami' }].map((link) => (
                    <DropdownMenuItem key={link.href} asChild className="p-2 text-base">
                      <Link href={link.href} className="w-full">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
