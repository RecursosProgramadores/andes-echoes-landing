import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { RositaSchool } from '@/components/RositaSchool';
import { ExtraServices } from '@/components/ExtraServices';
import { Tickets } from '@/components/Tickets';
import { Availability } from '@/components/Availability';
import { Hotels } from '@/components/Hotels';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <RositaSchool />
        <ExtraServices />
        <Tickets />
        <Availability />
        <Hotels />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
