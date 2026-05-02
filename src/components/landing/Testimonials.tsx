'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react'; // Using Star for rating visualization
interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  quote: string;
  rating: number; // 1-5
}
const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    title: 'CEO, InnovateTech',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Sarah',
    quote: 'Aether has revolutionized how our teams collaborate. The automation features are unparalleled, saving us countless hours every week. Highly recommend!',
    rating: 5,
  },
  {
    name: 'David Lee',
    title: 'Lead Developer, WebSolutions',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=David',
    quote: 'As a developer, I appreciate the robust integrations and the seamless API. Aether fits perfectly into our existing stack and has boosted our deployment speed.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    title: 'Product Manager, GlobalCorp',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Maria',
    quote: 'The intuitive UI and powerful analytics of Aether have made managing our product roadmap a breeze. It truly is an all-in-one solution for modern product teams.',
    rating: 4,
  },
  {
    name: 'James Wilson',
    title: 'Marketing Director, Brandify',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=James',
    quote: 'Aether’s ability to automate our marketing campaigns and track performance in real-time has given us a significant competitive edge. A must-have tool!',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    title: 'Operations Lead, Streamline Co.',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Emily',
    quote: 'Our operational efficiency has skyrocketed since implementing Aether. The customizability allows us to adapt it to our unique processes with ease.',
    rating: 4,
  },
];
export function Testimonials() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  return (
    <section id="testimonials" className="py-20 md:py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-balance"
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16 text-pretty"
        >
          Hear directly from businesses who have transformed their operations with Aether.
        </motion.p>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-4 flex flex-row items-center gap-4 p-0 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-primary">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="text-lg font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow p-0">
                        <div className="flex items-center mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/30'}`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}