'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Assuming cn utility exists
interface NavLink {
  href: string;
  label: string;
}
const navLinks: NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
];
export function Header() {
  const { scrollY } = useScroll();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsSticky(latest > 50); // Becomes sticky after scrolling 50px
    });
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        isSticky
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-foreground font-display">Aether</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button asChild className="btn-primary">
            <Link href="#pricing">Get Started</Link>
          </Button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle navigation">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 pt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="btn-primary mt-4">
                  <Link href="#pricing">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}