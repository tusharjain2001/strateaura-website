import SiteHeader from "../components/layout/SiteHeader";
import ConfirmationSection from "../components/webinar/ConfirmationSection";
import SiteFooter from "../components/layout/SiteFooter";

export default function WebinarConfirmationPage() {
  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <main>
        <ConfirmationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
