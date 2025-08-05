
import Header from '@/components/Header';
import Hero from '@/components/Hero';

import LogoSlider from '@/components/LogoSlider';



import Services from '@/components/Services';
import ProjectsSection from '@/components/Projects';
import Footer from '@/components/Footer';
import Testimonials from "@/components/Testimonials";
import ExperienceSection from "@/components/Experience";



export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        
        <Hero />
         <LogoSlider />

       <Services />
        <ExperienceSection />
         <ProjectsSection limit={8} />
         <Testimonials />
      
        
        
      </main>
       <Footer />
    </div>
  );
}






