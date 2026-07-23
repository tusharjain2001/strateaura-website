import SiteHeader from "../layout/SiteHeader";
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
      <SiteHeader />
      <main>
        <MobileHero />
        {/* Node 1434:406 — a 1593x402 rect rotated to run from the bottom of
            the hero (y=814) to y=2407, so it backs Signature Programs and the
            VEIL card as one band. Its fill is #FEE8A9 -> #FFFFFF at 40%, and
            the rotation puts the cream stop at the bottom. Both sections inside
            are transparent so this shows through. */}
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#FEE8A9_100%)] opacity-40"
          />
          <div className="relative">
            <MobileSignaturePrograms />
            <MobileVeil />
          </div>
        </div>
        <MobileMarketingPrograms />
        <MobileCtaBand />
        <MobileWhatWeOffer />
        <MobileFrameworks />
        <MobileBelief />
        <MobileProblem />
        <MobileInsights />
      </main>
      <MobileFooter />
    </div>
  );
}
