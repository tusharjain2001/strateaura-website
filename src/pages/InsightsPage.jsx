import SiteHeader from "../components/layout/SiteHeader";
import InsightsHero from "../components/insights/InsightsHero";
import SettingTheTone from "../components/insights/SettingTheTone";
import ThinkingBehindVeil from "../components/insights/ThinkingBehindVeil";
import FeaturedThoughtPieces from "../components/insights/FeaturedThoughtPieces";
import BookFeature from "../components/insights/BookFeature";
import VoicesAppearances from "../components/insights/VoicesAppearances";
import ToolsFrameworks from "../components/insights/ToolsFrameworks";
import NewsletterCta from "../components/insights/NewsletterCta";
import SiteFooter from "../components/layout/SiteFooter";

// Responsive page (no fixed canvas): Figma's 1440px frame is the desktop
// reference and the layout reflows below it. Above 1440px content stays at its
// natural Figma size (each section centres a max-w-[1440px] container while
// its background bleeds full-width) — never zoom-scaled.
export default function InsightsPage() {
  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <main>
        <InsightsHero />
        <SettingTheTone />
        <ThinkingBehindVeil />
        <FeaturedThoughtPieces />
        <BookFeature />
        <VoicesAppearances />
        <ToolsFrameworks />
        <NewsletterCta />
      </main>
      <SiteFooter />
    </div>
  );
}
