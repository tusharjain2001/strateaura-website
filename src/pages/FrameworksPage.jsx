import SiteHeader from "../components/layout/SiteHeader";
import FrameworksHero from "../components/frameworks/FrameworksHero";
import WhatFrameworksMean from "../components/frameworks/WhatFrameworksMean";
import AlaNexusSection from "../components/frameworks/AlaNexusSection";
import FiveCsSection from "../components/frameworks/FiveCsSection";
import VeilFrameworkSection from "../components/frameworks/VeilFrameworkSection";
import WhyStrateAura from "../components/frameworks/WhyStrateAura";
import SiteFooter from "../components/layout/SiteFooter";

// Responsive page (no fixed canvas): Figma's 1440px frame is the desktop
// reference and the layout reflows below it. Above 1440px content stays at its
// natural Figma size (each section centres a max-w-[1440px] container while
// its background bleeds full-width) — never zoom-scaled.
export default function FrameworksPage() {
  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <main>
        <FrameworksHero />
        <WhatFrameworksMean />
        <AlaNexusSection />
        <FiveCsSection />
        <VeilFrameworkSection />
        <WhyStrateAura />
      </main>
      <SiteFooter />
    </div>
  );
}
