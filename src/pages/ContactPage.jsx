import SiteHeader from "../components/layout/SiteHeader";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import SiteFooter from "../components/layout/SiteFooter";

// Responsive page (no fixed canvas): Figma's 1440px frame is the desktop
// reference and the layout reflows below it. Above 1440px content stays at its
// natural Figma size (each section centres a max-w-[1440px] container while
// its background bleeds full-width) — never zoom-scaled.
export default function ContactPage() {
  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <main>
        <ContactHero />
        <ContactFormSection />
      </main>
      <SiteFooter />
    </div>
  );
}
