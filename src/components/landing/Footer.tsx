'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
interface FooterLink {
  href: string;
  label: string;
}
interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}
const productLinks: FooterLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#developers', label: 'Developers' },
];
const companyLinks: FooterLink[] = [
  { href: '#about', label: 'About Us' },
  { href: '#careers', label: 'Careers' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];
const resourcesLinks: FooterLink[] = [
  { href: '#support', label: 'Support' },
  { href: '#docs', label: 'Documentation' },
  { href: '#api', label: 'API Reference' },
  { href: '#community', label: 'Community' },
];
const socialLinks: SocialLink[] = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];
export function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-foreground text-muted-foreground py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 border-b border-muted-foreground/20 pb-12 md:pb-16 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <Link href="#" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="font-bold text-3xl text-white font-display">Aether</span>
            </Link>
            <p className="text-sm max-w-xs leading-relaxed">
              Empowering your team with intelligent workflow automation.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-white transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-2 lg:col-span-3 gap-8 sm:gap-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-display">Product</h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-base hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-display">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-base hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-display">Resources</h3>
              <ul className="space-y-3">
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-base hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright & Legal */}
        <div className="text-center md:flex md:justify-between md:items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aether. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}