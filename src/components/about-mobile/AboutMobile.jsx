import MobileNav from "../home-mobile/MobileNav";
import MobilePhilosophy from "./MobilePhilosophy";
import MobileStance from "./MobileStance";
import MobileCoreValues from "./MobileCoreValues";
import MobileWhyChoose from "./MobileWhyChoose";
import MobileFounder from "./MobileFounder";
import MobileAboutFooter from "./MobileAboutFooter";

/**
 * Mobile About Us page — Figma node 1293:3543 (402px frame).
 *
 * Built as its own tree rather than as breakpoints on the desktop sections:
 * the desktop About is a fixed 1440px canvas laid out at exact Figma
 * coordinates and scaled with `zoom`, which cannot reflow. AboutPage renders
 * this below lg and the untouched canvas at lg and up. The gold navbar is
 * shared with the mobile Home page.
 */
export default function AboutMobile() {
  return (
    <div className="w-full overflow-x-clip bg-white text-black">
      <MobileNav />
      <main>
        <MobilePhilosophy />
        <MobileStance />
        <MobileCoreValues />
        <MobileWhyChoose />
        <MobileFounder />
      </main>
      <MobileAboutFooter />
    </div>
  );
}
