'use client';

import Link from 'next/link';
import { Menu, Building2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';

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

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const topVariants = {
    closed: { y: '-100%' },
    open: { y: '0%' },
  };

  const bottomVariants = {
    closed: { y: '100%' },
    open: { y: '0%' },
  };

  const menuItemsVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.1 } },
  };
  
  const menuItemVariant = {
      closed: { opacity: 0, y: 20 },
      open: { opacity: 1, y: 0 }
  };


  return (
    <>
      <header className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? '' : 'top-4'
      )}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className={cn(
              "relative flex h-14 items-center transition-all duration-300",
              isScrolled 
                ? 'dark:bg-background/80 bg-white/80 backdrop-blur-lg rounded-none lg:rounded-full' 
                : 'bg-background/60 backdrop-blur-lg rounded-full border border-white/20'
          )}>
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
                <ThemeToggle />
                <Button asChild className="hidden lg:inline-flex rounded-full">
                  <Link href="/#contact">Hubungi Kami</Link>
                </Button>

              <div className="lg:hidden flex items-center">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-hover" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="absolute top-0 left-0 h-1/2 w-full bg-background/95 backdrop-blur-sm"
              variants={topVariants}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-1/2 w-full bg-background/95 backdrop-blur-sm"
              variants={bottomVariants}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 z-10 rounded-full text-foreground hover:bg-green-hover"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close Menu</span>
            </Button>
            <motion.div 
                className="relative z-10 flex flex-col items-center justify-center text-center gap-y-8"
                variants={menuItemsVariants}
            >
              {navLinks.map((link) => (
                  <motion.div key={link.href} variants={menuItemVariant}>
                      <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                          'text-3xl font-medium transition-colors hover:text-primary',
                          pathname === link.href ? 'text-primary' : 'text-foreground'
                          )}
                      >
                          {link.label}
                      </Link>
                  </motion.div>
              ))}
              <motion.div variants={menuItemVariant}>
                  <Button asChild size="lg" className="rounded-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                      <Link href="/#contact">Hubungi Kami</Link>
                  </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
