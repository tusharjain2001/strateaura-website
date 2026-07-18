import useCanvasScale from "../hooks/useCanvasScale";
import SiteHeader from "../components/layout/SiteHeader";
import WebinarHero from "../components/webinar/WebinarHero";
import WhyVeil from "../components/webinar/WhyVeil";
import LeaveWith from "../components/webinar/LeaveWith";
import FounderBand from "../components/webinar/FounderBand";
import RegisterSection from "../components/webinar/RegisterSection";
import SiteFooter from "../components/layout/SiteFooter";

// Responsive page (no fixed canvas): Figma's 1440px frame is the desktop
// reference and the layout reflows below it. Above 1440px the whole page is
// zoom-scaled up instead, so 1920/2K screens see the same composition as the
// design rather than a 1440px column with dead space.
export default function WebinarPage() {
  const scale = useCanvasScale();
  const zoom = Math.max(1, scale);

  return (
    <div style={{ zoom }} className="bg-white text-black">
      <SiteHeader />
      <main>
        <WebinarHero />
        <WhyVeil />
        <LeaveWith />
        <FounderBand />
        <RegisterSection />
      </main>
      <SiteFooter />
    </div>
  );
}
