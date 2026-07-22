import useCanvasScale from "../hooks/useCanvasScale";
import SiteHeader from "../components/layout/SiteHeader";
import AboutHero from "../components/about/AboutHero";
import Stance from "../components/about/Stance";
import CoreValues from "../components/about/CoreValues";
import WhyChoose from "../components/about/WhyChoose";
import Founder from "../components/about/Founder";
import SiteFooter from "../components/layout/SiteFooter";
import AboutMobile from "../components/about-mobile/AboutMobile";

/**
 * The desktop About is a fixed 1440px canvas (sections laid out at exact Figma
 * coordinates, scaled with `zoom`), so it cannot reflow for narrow screens.
 * The mobile design (Figma node 1293:3543) is therefore its own component
 * tree, rendered below lg; the canvas below is untouched and takes over at lg.
 *
 * SiteHeader sits *outside* the zoomed canvas so the navbar renders at its
 * true size — identical to the fluid pages — instead of being magnified along
 * with the canvas on screens wider than 1440.
 */
export default function AboutPage() {
  const scale = useCanvasScale();

  return (
    <>
      <div className="lg:hidden">
        <AboutMobile />
      </div>

      <div className="hidden bg-white text-black lg:block">
        <SiteHeader />
        <div style={{ zoom: scale }} className="w-[1440px] overflow-x-clip">
          <main>
            <AboutHero />
            <Stance />
            <CoreValues />
            <WhyChoose />
            <Founder />
          </main>
        </div>
        {/* Shared site footer, outside the zoomed canvas like the header so it
            renders at true size. Its mobile half is lg:hidden and this wrapper
            is desktop-only, so AboutMobile's own footer is untouched. */}
        <SiteFooter />
      </div>
    </>
  );
}
