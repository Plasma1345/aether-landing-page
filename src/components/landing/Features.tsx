'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Shield, Globe, Clock, BarChart2, Lightbulb } from 'lucide-react'; // Example icons
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}
const features: Feature[] = [
  {
    icon: Zap,
    title: 'Blazing Fast Automation',
    description: 'Automate complex workflows in seconds, not hours. Save time and resources.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with industry-leading encryption and compliance standards.',
  },
  {
    icon: Globe,
    title: 'Global Collaboration',
    description: 'Connect teams across the world with seamless, real-time collaboration tools.',
  },
  {
    icon: Clock,
    title: 'Time-Saving Integrations',
    description: 'Integrate with your favorite tools and platforms for a unified experience.',
  },
  {
    icon: BarChart2,
    title: 'Insightful Analytics',
    description: 'Gain deep insights into your operations with powerful, customizable dashboards.',
  },
  {
    icon: Lightbulb,
    title: 'Intelligent AI Assistance',
    description: 'Leverage AI to suggest improvements and optimize your daily tasks automatically.',
  },
];
export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  return (
    <section id="features" className="py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-balance"
        >
          Transform Your Workflow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16 text-pretty"
        >
          Aether provides robust features designed to streamline your operations and boost productivity.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col p-6 items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-border-foreground/10 hover:border-primary/50">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}