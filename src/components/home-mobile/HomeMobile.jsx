import MobileNav from "./MobileNav";
import MobileHero from "./MobileHero";
import MobileSignaturePrograms from "./MobileSignaturePrograms";
import MobileVeil from "./MobileVeil";
import MobileMarketingPrograms from "./MobileMarketingPrograms";
import MobileCtaBand from "./MobileCtaBand";
import MobileWhatWeOffer from "./MobileWhatWeOffer";
import MobileFrameworks from "./MobileFrameworks";
import MobileBelief from "./MobileBelief";
import MobileProblem from "./MobileProblem";
import MobileInsights from "./MobileInsights";
import MobileEdge from "./MobileEdge";
import MobileFooter from "./MobileFooter";

/**
 * Mobile Home page — Figma node 1434:405 (402px frame).
 *
 * Built as its own tree rather than as breakpoints on the desktop sections:
 * the desktop Home is a fixed 1440px canvas laid out at exact Figma
 * coordinates and scaled with `zoom`, which cannot reflow. HomePage renders
 * this below lg and the untouched canvas at lg and up.
 */
export default function HomeMobile() {
  return (
    <div className="w-full overflow-x-clip bg-white text-black">
      <MobileNav />
      <main>
        <MobileHero />
        <MobileSignaturePrograms />
        <MobileVeil />
        <MobileMarketingPrograms />
        <MobileCtaBand />
        <MobileWhatWeOffer />
        <MobileFrameworks />
        <MobileBelief />
        <MobileProblem />
        <MobileInsights />
        <MobileEdge />
      </main>
      <MobileFooter />
    </div>
  );
}
