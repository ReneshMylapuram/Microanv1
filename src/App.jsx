/*
  Microan design system
  - Color tokens: muted green #a7c29f, charcoal #171e19, sage #b7c6c2, white, black.
  - Spacing scale: roomy section padding (72-128px), 24px card gaps, 16px compact gaps, max content width 1180px.
  - Borders: 2px black; hard offset shadows; geometric controls.
  - Motion: single IntersectionObserver reveal class; 460ms ease-out fade/slide, with reduced-motion support in CSS.
  - Data: user-supplied fund metrics and explicitly modeled savings in /src/data/fundData.js.
*/

import { useEffect } from 'react';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import TransparencyDashboard from './sections/TransparencyDashboard.jsx';
import MoneyBreakdown from './sections/MoneyBreakdown.jsx';
import VisionMission from './sections/VisionMission.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import ImpactCredibility from './sections/ImpactCredibility.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <Hero />
      <main>
        <TransparencyDashboard />
        <MoneyBreakdown />
        <VisionMission />
        <HowItWorks />
        <ImpactCredibility />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
