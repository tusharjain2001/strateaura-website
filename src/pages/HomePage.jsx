import useCanvasScale from "../hooks/useCanvasScale";
import SiteHeader from "../components/layout/SiteHeader";
import Hero from "../components/home/Hero";
import SignaturePrograms from "../components/home/SignaturePrograms";
import MarketingPrograms from "../components/home/MarketingPrograms";
import Frameworks from "../components/home/Frameworks";
import Belief from "../components/home/Belief";
import ProblemWeAddress from "../components/home/ProblemWeAddress";
import Insights from "../components/home/Insights";
import SiteFooter from "../components/layout/SiteFooter";
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
 *
 * SiteHeader sits *outside* the zoomed canvas so the navbar renders at its
 * true size — identical to the fluid pages — instead of being magnified along
 * with the canvas.
 */
export default function HomePage() {
  const scale = useCanvasScale();

  return (
    <>
      <div className="lg:hidden">
        <HomeMobile />
      </div>

      <div className="hidden bg-white text-black lg:block">
        <SiteHeader />
        <div style={{ zoom: scale }} className="w-[1440px] overflow-x-clip">
          <main>
            <Hero />
            <SignaturePrograms />
            <MarketingPrograms />
            <Frameworks />
            <Belief />
            <ProblemWeAddress />
            <Insights />
          </main>
        </div>
        {/* Shared site footer, outside the zoomed canvas like the header so it
            renders at true size. Its mobile half is lg:hidden and this wrapper
            is desktop-only, so HomeMobile's own footer is untouched. */}
        <SiteFooter />
      </div>
    </>
  );
}
