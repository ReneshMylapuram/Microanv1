/*
Component structure:
- App composes Header, Hero, TransparencyDashboard, MoneyBreakdown, VisionMission, HowItWorks,
  ImpactCredibility, and Footer as independent React sections.
- Shared helpers are limited to AnimatedSection for subtle scroll reveals and LogoMark for the inline
  teal/sage mutual-support motif.

Design system:
- Color tokens: deep teal #1E4B4A for primary text/actions, sage #A8C3A0 for accents, white/off-white
  (#FFFFFF / #FBFAF6) for dominant backgrounds and cards.
- Spacing scale: mobile-first generous padding using 20px page gutters, 48-72px section gaps on mobile,
  and 96-128px vertical rhythm on larger screens.
- Radius scale: 16px for small UI, 24px for cards, 32px for feature containers, full pills for nav/CTAs.
*/

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import ImpactCredibility from "./components/ImpactCredibility.jsx";
import MoneyBreakdown from "./components/MoneyBreakdown.jsx";
import TransparencyDashboard from "./components/TransparencyDashboard.jsx";
import VisionMission from "./components/VisionMission.jsx";

export default function App() {
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[#FBFAF6] text-[#1E4B4A]">
      <Header />
      <main>
        <Hero />
        <TransparencyDashboard />
        <MoneyBreakdown />
        <VisionMission />
        <HowItWorks />
        <ImpactCredibility />
      </main>
      <Footer />
    </div>
  );
}
