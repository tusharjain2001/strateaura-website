import useCanvasScale from "../hooks/useCanvasScale";
import Navbar from "../components/home/Navbar";
import AboutHero from "../components/about/AboutHero";
import Stance from "../components/about/Stance";
import CoreValues from "../components/about/CoreValues";
import WhyChoose from "../components/about/WhyChoose";
import Founder from "../components/about/Founder";
import AboutFooter from "../components/about/AboutFooter";
import AboutMobile from "../components/about-mobile/AboutMobile";

/**
 * The desktop About is a fixed 1440px canvas (sections laid out at exact Figma
 * coordinates, scaled with `zoom`), so it cannot reflow for narrow screens.
 * The mobile design (Figma node 1293:3543) is therefore its own component
 * tree, rendered below lg; the canvas below is untouched and takes over at lg.
 */
export default function AboutPage() {
  const scale = useCanvasScale();

  return (
    <>
      <div className="lg:hidden">
        <AboutMobile />
      </div>

      <div
        style={{ zoom: scale }}
        className="hidden w-[1440px] overflow-x-clip bg-white text-black lg:block"
      >
        <Navbar />
        <main>
          <AboutHero />
          <Stance />
          <CoreValues />
          <WhyChoose />
          <Founder />
          <AboutFooter />
        </main>
      </div>
    </>
  );
}
