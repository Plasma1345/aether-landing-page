'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge'; // Assuming shadcn/ui badge exists
interface PricingFeature {
  text: string;
  included: boolean;
}
interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlight?: boolean;
  buttonText: string;
  buttonLink: string;
}
const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$19',
    period: '/month',
    description: 'Perfect for individuals and small teams getting started with automation.',
    features: [
      { text: '5 Workflows', included: true },
      { text: 'Basic Analytics', included: true },
      { text: 'Email Support', included: true },
      { text: 'Community Access', included: true },
      { text: 'Priority Support', included: false },
      { text: 'Advanced Integrations', included: false },
    ],
    buttonText: 'Start Free Trial',
    buttonLink: '#',
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'Designed for growing teams needing advanced features and priority support.',
    features: [
      { text: 'Unlimited Workflows', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Email & Chat Support', included: true },
      { text: 'Community Access', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Advanced Integrations', included: true },
    ],
    highlight: true,
    buttonText: 'Choose Pro',
    buttonLink: '#',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with specific needs and scale.',
    features: [
      { text: 'Custom Workflows', included: true },
      { text: 'Dedicated Analytics', included: true },
      { text: '24/7 Premium Support', included: true },
      { text: 'On-site Training', included: true },
      { text: 'SLA Guarantee', included: true },
      { text: 'Custom Integrations', included: true },
    ],
    buttonText: 'Contact Sales',
    buttonLink: '#',
  },
];
export function Pricing() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  return (
    <section id="pricing" className="py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-balance"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16 text-pretty"
        >
          Choose the plan that fits your needs, from individual users to large enterprises.
        </motion.p>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <Card
                className={`flex flex-col h-full p-6 transition-all duration-300 ${tier.highlight ? 'border-primary shadow-xl ring-2 ring-primary bg-primary/5' : 'border-border shadow-md hover:shadow-lg'}`}
              >
                <CardHeader className="text-center p-0 mb-6">
                  {tier.highlight && (
                    <Badge variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold py-1 px-3 rounded-full mb-4 mx-auto w-fit">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
                  <p className="text-5xl font-extrabold text-foreground mt-4 mb-2">
                    {tier.price}
                    {tier.period && <span className="text-xl text-muted-foreground font-medium">{tier.period}</span>}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-base">
                        <Check className={`h-5 w-5 mr-3 ${feature.included ? 'text-primary' : 'text-muted-foreground/50'}`} />
                        <span className={`${!feature.included && 'text-muted-foreground line-through opacity-70'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-8 p-0">
                  <Button asChild className={`w-full ${tier.highlight ? 'btn-primary text-primary-foreground bg-primary hover:bg-primary/90' : 'btn-secondary bg-secondary hover:bg-secondary/80'}`} size="lg">
                    <Link href={tier.buttonLink}>{tier.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}