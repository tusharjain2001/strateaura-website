import useCanvasScale from "../hooks/useCanvasScale";
import Navbar from "../components/home/Navbar";
import AboutHero from "../components/about/AboutHero";
import Stance from "../components/about/Stance";
import CoreValues from "../components/about/CoreValues";
import WhyChoose from "../components/about/WhyChoose";
import Founder from "../components/about/Founder";
import Different from "../components/about/Different";
import AboutFooter from "../components/about/AboutFooter";

export default function AboutPage() {
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
        <AboutHero />
        <Stance />
        <CoreValues />
        <WhyChoose />
        <Founder />
        <Different />
        <AboutFooter />
      </main>
    </div>
  );
}
