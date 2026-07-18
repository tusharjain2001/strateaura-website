import useCanvasScale from "../hooks/useCanvasScale";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import SignaturePrograms from "../components/home/SignaturePrograms";
import MarketingPrograms from "../components/home/MarketingPrograms";
import WhatWeOffer from "../components/home/WhatWeOffer";
import Frameworks from "../components/home/Frameworks";
import Belief from "../components/home/Belief";
import ProblemWeAddress from "../components/home/ProblemWeAddress";
import Insights from "../components/home/Insights";
import OurEdge from "../components/home/OurEdge";
import ClosingCTA from "../components/home/ClosingCTA";

export default function HomePage() {
  const scale = useCanvasScale();

  return (
    <div
      style={{ zoom: scale }}
      className="mx-auto w-[1440px] bg-white text-black"
    >
      <Navbar />
      {/* overflow clip lives on main (not the wrapper) so the navbar's
          full-bleed band can escape the 1440px canvas */}
      <main className="overflow-x-clip">
        <Hero />
        <SignaturePrograms />
        <MarketingPrograms />
        <WhatWeOffer />
        <Frameworks />
        <Belief />
        <ProblemWeAddress />
        <Insights />
        <OurEdge />
        <ClosingCTA />
      </main>
    </div>
  );
}
