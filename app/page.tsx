import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Partners from '@/components/Partners';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';
import FloatingCallButton from '@/components/FloatingCallButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Faq />
      <Partners />
      <Cta />
      <Contact />
      <FloatingCallButton />
    </main>
  );
}
