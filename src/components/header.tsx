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

const menuVariants = {
  closed: {
    scaleX: 0,
    transformOrigin: 'center'
  },
  open: {
    scaleX: 1,
    transformOrigin: 'center',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  }
};

const linkContainerVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const linkVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 }
  }
};


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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? '' : 'pt-4'
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
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div className="absolute inset-0 bg-background" variants={menuVariants} />
            <motion.div className="absolute inset-x-0 mx-auto w-full h-full flex flex-col items-center justify-center">
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
                  className="relative z-10 flex w-full max-w-sm flex-col items-center justify-center text-center gap-y-4"
                  variants={linkContainerVariants}
              >
                {[...navLinks, { href: '/#contact', label: 'Hubungi Kami' }].map((link) => (
                    <motion.div key={link.href} className="w-full overflow-hidden py-2" variants={linkVariants}>
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
                        <motion.div
                            className="mt-2 h-px w-full bg-border"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, ease: 'circOut', delay: 0.4 }}
                        />
                    </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
