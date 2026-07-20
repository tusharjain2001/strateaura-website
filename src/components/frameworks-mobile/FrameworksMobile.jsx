import MobileNav from "../home-mobile/MobileNav";
import FwHero from "./FwHero";
import FwAlaNexus from "./FwAlaNexus";
import FwFiveCs from "./FwFiveCs";
import FwVeil from "./FwVeil";
import FwWhy from "./FwWhy";
import FwFooter from "./FwFooter";

/**
 * Mobile Frameworks page — Figma node 1296:4457 (402px frame).
 *
 * Built as its own tree, the same way the mobile Home and About pages are: the
 * desktop Frameworks sections carry their own responsive ramps tuned around the
 * 1440px design, and reworking them to hit this frame would change how they
 * render on desktop. FrameworksPage renders this below lg and the untouched
 * desktop sections at lg and up.
 */
export default function FrameworksMobile() {
  return (
    <div className="w-full overflow-x-clip bg-white text-black">
      <MobileNav />
      <main>
        <FwHero />
        <FwAlaNexus />
        <FwFiveCs />
        <FwVeil />
        <FwWhy />
      </main>
      <FwFooter />
    </div>
  );
}
