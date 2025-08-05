import Banner from '@/components/Banner';
import HowWeWork from '@/components/HowWeWork';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/Contact';


export default function ServicesPage() {
  return (
    <div>
      <Header />
      <main>
        <Banner title="SERVICES" backgroundImage="/images/bg-banner.jpg" />
        <HowWeWork />

      </main>
      <Footer />
    </div>

  );
}
