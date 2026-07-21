import useCanvasScale from "../hooks/useCanvasScale";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import SignaturePrograms from "../components/home/SignaturePrograms";
import MarketingPrograms from "../components/home/MarketingPrograms";
import Frameworks from "../components/home/Frameworks";
import Belief from "../components/home/Belief";
import ProblemWeAddress from "../components/home/ProblemWeAddress";
import Insights from "../components/home/Insights";
import ClosingCTA from "../components/home/ClosingCTA";
import HomeMobile from "../components/home-mobile/HomeMobile";

/**
 * The desktop Home is a fixed 1440px canvas (sections laid out at exact Figma
 * coordinates, scaled with `zoom`), so it cannot reflow for narrow screens.
 * The mobile design (Figma node 1434:405) is therefore its own component tree,
 * rendered below lg; the canvas below is untouched and takes over at lg and up.
 *
 * The scale is deliberately uncapped: the canvas always fills the viewport
 * width, magnifying past 1 on screens wider than 1440. Capping it at 1 leaves
 * white gutters either side, which the client has rejected twice.
 */
export default function HomePage() {
  const scale = useCanvasScale();

  return (
    <>
      <div className="lg:hidden">
        <HomeMobile />
      </div>

      <div
        style={{ zoom: scale }}
        className="hidden w-[1440px] overflow-x-clip bg-white text-black lg:block"
      >
        <Navbar />
        <main>
          <Hero />
          <SignaturePrograms />
          <MarketingPrograms />
          <Frameworks />
          <Belief />
          <ProblemWeAddress />
          <Insights />
          <ClosingCTA />
        </main>
      </div>
    </>
  );
}
