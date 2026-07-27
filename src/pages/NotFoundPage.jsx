import { Link, useLocation } from "react-router-dom";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import CtaPill from "../components/ui/CtaPill";
import { ArrowRight } from "../components/ui/Icons";

// The handful of places someone landing here most likely meant to go.
const SUGGESTIONS = [
  { to: "/programs", label: "Programs" },
  { to: "/frameworks", label: "Frameworks" },
  { to: "/veil", label: "VEIL™" },
  { to: "/insights", label: "Insights & Resources" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

/**
 * 404 — catch-all for any route the app doesn't define. This page is a fluid
 * responsive layout (no 1440 zoom canvas) so it works at every width without a
 * separate mobile tree.
 */
export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <div className="bg-white text-black">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* Same cream wash the blog/article pages open with. */}
        <div className="pointer-events-none absolute top-0 left-0 h-[520px] w-full bg-gradient-to-b from-[#fee8a9] to-white opacity-40" />

        <section className="relative mx-auto flex max-w-[760px] flex-col items-center px-5 py-20 text-center sm:px-8 lg:py-28">
          <p className="text-[clamp(4rem,14vw,7.5rem)] leading-none font-bold text-gold">
            404
          </p>

          <h1 className="mt-6 text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2] font-bold text-navy">
            This page has stepped away
          </h1>

          <p className="mt-5 max-w-[560px] text-[clamp(1rem,2vw,1.125rem)] leading-[1.6] text-navy-2">
            We couldn&rsquo;t find anything at{" "}
            <span className="font-semibold break-words">{pathname}</span>. The link
            may be out of date, or the page may have moved. Let&rsquo;s get you
            back on track.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CtaPill as={Link} to="/" variant="goldFilled" size="compactLg">
              Back to Home
            </CtaPill>
            <CtaPill
              as={Link}
              to="/insights"
              variant="navyOutline"
              size="compactLg"
              icon={ArrowRight}
            >
              Explore Insights
            </CtaPill>
          </div>

          <div className="mt-14 w-full border-t border-gold-light pt-8">
            <p className="text-[14px] font-semibold tracking-[0.08em] text-ink uppercase">
              Or head somewhere else
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {SUGGESTIONS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[clamp(1rem,2vw,1.125rem)] text-navy-2 underline decoration-gold/50 underline-offset-4 transition-colors duration-300 hover:text-gold hover:decoration-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
