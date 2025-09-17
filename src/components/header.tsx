'use client';

import Link from 'next/link';
import { Menu, Home, Users, FileText, Package, Phone } from 'lucide-react';
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
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/about', label: 'Tentang Kami', icon: Users },
  { href: '/requirements', label: 'Persyaratan', icon: FileText },
  { href: '/#packages', label: 'Paket', icon: Package },
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
  
  const mobileNavLinks = [...navLinks, { href: '/#contact', label: 'Hubungi Kami', icon: Phone }];

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
               <div className="relative h-24 w-24">
                  <Image src="/logo_lightmode.png" alt="Logo Light" fill className="object-contain block dark:hidden" />
                  <Image src="/logo_darkmode.png" alt="Logo Dark" fill className="object-contain hidden dark:block" />
              </div>
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
                  className="mr-2 shadow-xl border-border/20"
                  data-mobile-menu-content
                  sideOffset={16}
                >
                  {mobileNavLinks.map((link, index) => (
                    <div key={link.href}>
                      <DropdownMenuItem asChild className="p-0">
                        <Link href={link.href} className="w-full">
                          <div 
                            className="flex items-center w-full px-4 py-3 text-base text-foreground/80"
                            data-mobile-menu-item
                            data-active={pathname === link.href}
                          >
                            <link.icon className="h-5 w-5 mr-4 text-foreground/60" />
                            <span>{link.label}</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      {index < mobileNavLinks.length - 1 && <DropdownMenuSeparator className="my-0" />}
                    </div>
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
