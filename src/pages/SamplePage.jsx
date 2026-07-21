import SampleNavbar from "../components/sample/SampleNavbar";
import SampleHero from "../components/sample/SampleHero";
import SignaturePrograms from "../components/sample/SignaturePrograms";
import MarketingPrograms from "../components/sample/MarketingPrograms";
import SignatureFrameworks from "../components/sample/SignatureFrameworks";
import Belief from "../components/sample/Belief";

// Client "sample" page: a faithful, genuinely-responsive build of the 1920px
// Figma homepage (node 1638:486). Unlike the legacy fixed-canvas Home/About,
// this reflows fluidly — faithful to the 1920 frame at desktop, adapting down
// to tablet/mobile. One responsive tree (no separate mobile tree, since the
// client only supplied the 1920 desktop design).
export default function SamplePage() {
  return (
    <div className="bg-white text-black">
      <SampleNavbar />
      <main>
        <SampleHero />
        <SignaturePrograms />
        <MarketingPrograms />
        <SignatureFrameworks />
        <Belief />
      </main>
    </div>
  );
}
