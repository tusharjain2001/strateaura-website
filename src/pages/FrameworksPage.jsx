import SiteHeader from "../components/layout/SiteHeader";
import FrameworksHero from "../components/frameworks/FrameworksHero";
import WhatFrameworksMean from "../components/frameworks/WhatFrameworksMean";
import AlaNexusSection from "../components/frameworks/AlaNexusSection";
import FiveCsSection from "../components/frameworks/FiveCsSection";
import VeilFrameworkSection from "../components/frameworks/VeilFrameworkSection";
import WhyStrateAura from "../components/frameworks/WhyStrateAura";
import SiteFooter from "../components/layout/SiteFooter";
import FrameworksMobile from "../components/frameworks-mobile/FrameworksMobile";
import useCanvasScale from "../hooks/useCanvasScale";

// Between lg and 1440 the sections reflow fluidly; ABOVE 1440 the sections
// zoom up to fill the viewport, matching the Home board — per the client,
// wide screens must never show the design "shrunk" inside side margins. Like
// Home, SiteHeader and SiteFooter sit OUTSIDE the zoomed wrapper so the
// navbar and footer render at their true size on wide screens.
//
// Below lg the separate mobile tree (Figma node 1296:4457) takes over instead,
// so the desktop sections below are untouched by mobile work.
export default function FrameworksPage() {
  const scale = Math.max(1, useCanvasScale());

  return (
    <>
      <div className="lg:hidden">
        <FrameworksMobile />
      </div>

      <div className="hidden bg-white text-black lg:block">
        <SiteHeader />
        <div style={scale > 1 ? { zoom: scale } : undefined}>
          <main>
            <FrameworksHero />
            <WhatFrameworksMean />
            <AlaNexusSection />
            <FiveCsSection />
            <VeilFrameworkSection />
            <WhyStrateAura />
          </main>
        </div>
        <SiteFooter />
      </div>
    </>
  );
}
