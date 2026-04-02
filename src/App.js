import useAnimateOnVisible from './hooks/useAnimateOnVisible';

import Navbar from './components/layout/Navbar';
import SiteFooter from './components/layout/SiteFooter';

import IntroSection from './components/sections/IntroSection';
import ServiceHighlightsSection from './components/sections/ServiceHighlightsSection';
import AboutSection from './components/sections/AboutSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ClinicSection from './components/sections/ClinicSection';
import TopicsSection from './components/sections/TopicsSection';
import FaqSection from './components/sections/FaqSection';
import CtaBanner from './components/sections/CtaBanner';
import ContactSection from './components/sections/ContactSection';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  useAnimateOnVisible();

  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main>
        <IntroSection />
        <ServiceHighlightsSection />
        <AboutSection />
        <TestimonialsSection />
        <ClinicSection />
        <TopicsSection />
        <FaqSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
