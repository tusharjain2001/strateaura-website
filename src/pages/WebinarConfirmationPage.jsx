import SiteHeader from "../components/layout/SiteHeader";
import ConfirmationSection from "../components/webinar/ConfirmationSection";
import SiteFooter from "../components/layout/SiteFooter";
import useSeo from "../lib/seo";

export default function WebinarConfirmationPage() {
  useSeo({
    title: "You're Registered | StrateAura",
    description: "Your place in the StrateAura live webinar is confirmed.",
    path: "/webinar/confirmation",
    noIndex: true,
  });

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
