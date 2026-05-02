import Head from "next/head";
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Testimonials } from '@/components/landing/Testimonials';
import { Pricing } from '@/components/landing/Pricing';
import { Footer } from '@/components/landing/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Aether - The Future of Workflow Automation</title>
        <meta name="description" content="A visually stunning, modern, and animated landing page for a fictional SaaS product, built with Next.js and Tailwind CSS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}