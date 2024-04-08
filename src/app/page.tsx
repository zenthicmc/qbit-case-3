"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Feature from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonial";
import Statistic from "@/components/Statistic";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Feature />
      <Pricing />
      <Testimonials />
      <Statistic />
      <CTA />
      <Footer />
    </>
  )
}
