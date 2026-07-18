import SiteHeader from "../components/layout/SiteHeader";
import VeilHero from "../components/veil/VeilHero";
import QuoteSection from "../components/veil/QuoteSection";
import ThreeConstructs from "../components/veil/ThreeConstructs";
import TwoPathways from "../components/veil/TwoPathways";
import EvidenceSection from "../components/veil/EvidenceSection";
import SiteFooter from "../components/layout/SiteFooter";
import CtaPill from "../components/ui/CtaPill";

// Responsive page (no fixed canvas): Figma's 1440px frame is the desktop
// reference and the layout reflows below it. Above 1440px content stays at its
// natural Figma size (each section centres a max-w-[1440px] container while
// its background bleeds full-width) — never zoom-scaled.
export default function VeilPage() {
  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <main>
        <VeilHero />
        <QuoteSection />
        <ThreeConstructs />
        <TwoPathways />
        <EvidenceSection />
      </main>
      <SiteFooter
        body="You do not have to be in crisis to start. You only have to be willing."
        tagline={null}
        buttons={
          <div className="mt-6 flex flex-col items-start gap-6 lg:mt-[20px]">
            <CtaPill as="a" href="/contact" variant="goldOutline">
              Request a Cohort Proposal
            </CtaPill>
            <CtaPill as="a" href="/webinar" variant="goldOutline">
              Join the Free Live Webinar
            </CtaPill>
          </div>
        }
        aside={
          <div className="text-[clamp(1.125rem,1.6vw,1.875rem)] leading-normal font-medium">
            <p className="text-navy-2">Contact Dr. Suhair Hamouri:</p>
            <a href="mailto:training@strateaura.com" className="text-gold underline">
              training@strateaura.com
            </a>
          </div>
        }
      />
    </div>
  );
}
