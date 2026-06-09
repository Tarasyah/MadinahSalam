'use client';

import Link from 'next/link';
import { Menu, Home, Users, FileText, Package, Phone, Image as ImageIcon } from 'lucide-react';
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
  { 
    label: 'Paket', 
    icon: Package,
    dropdown: [
      { href: '/paket-umrah', label: 'Paket Umrah' },
      { href: '/paket-haji', label: 'Paket Haji (TBA)' },
    ]
  },
  { href: '/galeri', label: 'Galeri', icon: ImageIcon },
  { href: '/about', label: 'Tentang Kami', icon: Users },
  { href: '/requirements', label: 'Persyaratan', icon: FileText },
];

const whatsappLink = "https://wa.me/6282210004644";

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
  
  const flatMobileNavLinks = navLinks.flatMap(link => {
    if (link.dropdown) {
      return link.dropdown.map(d => ({ ...d, icon: link.icon }));
    }
    return link as any;
  });
  
  const mobileNavLinks = [...flatMobileNavLinks, { href: whatsappLink, label: 'Hubungi Kami', icon: Phone }];

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
            'relative mx-auto flex h-14 items-center transition-all duration-300 px-4',
            'lg:container lg:w-10/12'
          )}
        >
          <div
            className={cn(
              'absolute inset-0 -z-10 transition-all duration-300',
              'dark:bg-background/80 bg-white/80 backdrop-blur-lg lg:rounded-full'
            )}
          />

          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
               <div className="relative h-32 w-32">
                  <Image src="/logo_lightmode.png" alt="Logo Light" fill className="object-contain block dark:hidden" />
                  <Image src="/logo_darkmode.png" alt="Logo Dark" fill className="object-contain hidden dark:block" />
              </div>
            </Link>
          </div>

          <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex flex-1 justify-center">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className={cn(
                    'transition-colors hover:text-primary whitespace-nowrap outline-none flex items-center gap-1',
                    'text-foreground/80',
                    (pathname.startsWith('/paket-')) && 'text-primary font-semibold'
                  )}>
                    {link.label}
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px]"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="mt-2 bg-background/95 backdrop-blur-md border-border/50">
                    {link.dropdown.map(drop => (
                      <DropdownMenuItem key={drop.href} asChild>
                        <Link href={drop.href} className="w-full cursor-pointer">{drop.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    'transition-colors hover:text-primary whitespace-nowrap',
                    'text-foreground/80',
                    pathname === link.href && 'text-primary font-semibold'
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
            <Button asChild className="hidden lg:inline-flex rounded-full">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">Hubungi Kami</Link>
            </Button>

            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/20"
                  >
                    <Menu className={cn('h-5 w-5', 'text-foreground')} />
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
                        <Link href={link.href} className="w-full" target={link.href.startsWith('http') ? '_blank' : '_self'} rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}>
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
