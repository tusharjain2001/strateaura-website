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
      className="w-[1440px] overflow-x-clip bg-white text-black"
    >
      <Navbar />
      <main>
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
