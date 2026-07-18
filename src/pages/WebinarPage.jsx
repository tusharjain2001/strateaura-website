import { useState } from "react";
import SiteHeader from "../components/layout/SiteHeader";
import WebinarHero from "../components/webinar/WebinarHero";
import WhyVeil from "../components/webinar/WhyVeil";
import LeaveWith from "../components/webinar/LeaveWith";
import FounderBand from "../components/webinar/FounderBand";
import RegisterSection from "../components/webinar/RegisterSection";
import RegistrationModal from "../components/webinar/RegistrationModal";
import SiteFooter from "../components/layout/SiteFooter";

// Responsive page (no fixed canvas): Figma's 1440px frame is the desktop
// reference and the layout reflows below it. Above 1440px content stays at its
// natural Figma size (each section centres a max-w-[1440px] container while
// its background bleeds full-width) — never zoom-scaled.
export default function WebinarPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <main>
        <WebinarHero onReserve={() => setModalOpen(true)} />
        <WhyVeil />
        <LeaveWith />
        <FounderBand />
        <RegisterSection />
      </main>
      <SiteFooter />
      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
