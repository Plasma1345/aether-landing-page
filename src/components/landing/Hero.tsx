'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 min-h-screen flex items-center justify-center text-center py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-tighter max-w-4xl mx-auto text-balance">
            Unleash Your Potential with <span className="text-gradient">Aether</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the next generation of workflow automation and empower your team to achieve more with less effort.
          </motion.p>
          <motion.div variants={itemVariants} className="flex justify-center pt-4">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="#pricing">Get Started For Free</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}