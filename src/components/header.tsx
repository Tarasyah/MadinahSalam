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

const menuContainerVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
      duration: 0.2
    }
  }
};

const bgVariants = {
  open: {
    scaleX: 1,
    transition: { duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }
  },
  closed: {
    scaleX: 0,
    transition: { duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.2 }
  }
};

const linkVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2, ease: 'easeIn' }
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      )}>
        <div className={cn(
          "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent transition-opacity duration-300 pointer-events-none",
          (isScrolled || isMobileMenuOpen) ? "opacity-0" : "opacity-100"
        )} />
        
        <div className={cn(
          "relative mx-auto flex h-14 items-center transition-all duration-300 px-4",
          "lg:container lg:max-w-5xl"
        )}>
          <div className={cn(
            "absolute inset-0 -z-10 transition-all duration-300",
            isScrolled ? "dark:bg-background/80 bg-white/80 backdrop-blur-lg" : "",
            isScrolled && !isMobileMenuOpen && "lg:rounded-full"
          )} />
            
            <div className="flex-1 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-primary" />
                <span className={cn("font-bold font-headline text-lg", !isScrolled ? "text-white" : "text-foreground")}>Madinah Salam</span>
              </Link>
            </div>

            <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-primary',
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

              <div className="lg:hidden flex items-center">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className={cn("h-5 w-5", !isScrolled ? "text-white" : "text-foreground" )} />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </div>
            </div>
        </div>
      </header>

      <div className={cn(
        "fixed inset-0 z-[100] bg-menu-background flex-col items-center justify-center overflow-hidden",
        isMobileMenuOpen ? "flex" : "hidden"
      )}>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="relative w-full h-full flex flex-col items-center justify-center"
              variants={menuContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                className="absolute top-4 right-4 p-4"
                variants={linkVariants}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="z-10 rounded-full text-white hover:bg-primary/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-8 w-8" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </motion.div>

              <div className="relative z-10 flex w-full max-w-sm flex-col items-center justify-center text-center">
                {[...navLinks, { href: '/#contact', label: 'Hubungi Kami' }].map((link) => (
                    <motion.div key={link.href} className="w-full overflow-hidden py-2" variants={linkVariants}>
                         <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                            'text-3xl font-medium transition-colors hover:text-primary text-white',
                            pathname === link.href && 'text-primary'
                            )}
                        >
                            {link.label}
                        </Link>
                        <motion.div
                            className="mt-2 h-px w-full bg-border/20"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.4, ease: 'circOut', delay: 0.3 }}
                        />
                    </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
