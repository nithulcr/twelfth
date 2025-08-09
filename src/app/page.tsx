"use client";
import React from "react";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoSlider from '@/components/LogoSlider';
import Services from '@/components/Services';
import ProjectsSection from '@/components/Projects';
import Footer from '@/components/Footer';
import Testimonials from "@/components/Testimonials";
import ExperienceSection from "@/components/Experience";
import { useMediaQuery } from 'react-responsive';

export default function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Change the breakpoint if needed
  const limit = isMobile ? 4 : 8;

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <LogoSlider />
        <Services />
        <ExperienceSection />
        <ProjectsSection limit={limit} />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
