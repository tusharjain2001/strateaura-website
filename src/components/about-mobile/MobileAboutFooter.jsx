import { Link } from "react-router-dom";
import MobilePill from "../home-mobile/MobilePill";
import footerLogo from "../../assets/footer-logo.svg";
import socialLi from "../../assets/social-li.svg";

// Node 1293:3822 — LinkedIn only.
const SOCIALS = [
  { src: socialLi, label: "LinkedIn", href: "https://www.linkedin.com/in/drsuhairhamouri" },
];

// Node 1293:3834 — "VEIL™" is set bold while "Program" stays regular.
const COMPANY = [
  { label: "Home", to: "/" },
  { label: "VEIL™ Program", to: "/veil", strong: "VEIL™ " },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Frameworks", to: "/frameworks" },
  { label: "Insights & Resources", to: "/insights" },
];

// Node 1293:3837
const FRAMEWORKS = [
  { label: "ALA-Nexus™", to: "/frameworks" },
  { label: "The 5Cs of Brand Health", to: "/frameworks" },
  { label: "VEIL™ Leadership System", to: "/veil" },
];

function FooterLinks({ heading, items }) {
  return (
    <div>
      <p className="text-[14px] leading-[24px] font-bold text-gold">{heading}</p>
      <ul className="text-[14px] leading-[26px] font-medium tracking-[0.2px] text-ink">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="transition-colors hover:text-gold">
              {item.strong ? (
                <>
                  <span className="font-bold">{item.strong}</span>
                  <span className="font-normal">
                    {item.label.slice(item.strong.length)}
                  </span>
                </>
              ) : (
                item.label
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Closing CTA + site footer for the mobile About page — Figma node 1293:3754.
 *
 * Same content as the Home footer (node 1434:707) but it sits on plain white
 * with no rounded overlap, and Figma adds two hairlines (nodes 1293:3842 and
 * 1293:3843) that fence the logo/links block off from the CTA above and the
 * copyright below.
 */
export default function MobileAboutFooter() {
  return (
    <footer className="bg-white pt-[100px] pb-[31px]">
      <div className="mx-auto w-full max-w-[430px] px-4">
        {/* Closing CTA — node 1293:3756 */}
        <div className="flex flex-col items-start gap-[23px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[28px] leading-normal font-bold text-navy">
              Ready to Work Together?
            </h2>
            <p className="text-[16px] leading-normal font-light text-black">
              We work with those ready to think deeper, move cleaner, and lead
              with presence, not pressure.
            </p>
          </div>
          <p className="text-[20px] leading-normal font-medium text-gold">
            Apply to work with us!
          </p>
          <MobilePill as="a" href="/contact" variant="goldOutline">
            Book a Strategic Conversation
          </MobilePill>
        </div>

        {/* Hairline — node 1293:3842 */}
        <hr className="mt-[27px] border-t border-[#cccccc]" />

        <div className="mt-[17px] flex flex-col gap-[37px]">
          {/* Logo + socials — node 1293:3768 */}
          <div className="flex w-[357px] max-w-full items-center justify-between">
            <Link to="/" aria-label="StrateAura home">
              <img
                src={footerLogo}
                alt="StrateAura"
                className="h-[54px] w-[80px]"
              />
            </Link>
            {/* Figma's 113px box measures "CONNECT WITH US" in Acumin Pro;
                Inter needs ~118px and wrapped inside it. Sized to content
                instead so the heading stays on one line. */}
            <div className="shrink-0">
              <p className="text-[12px] leading-[24px] font-bold text-gold">
                CONNECT WITH US
              </p>
              <div className="flex items-center gap-[12px]">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="transition-opacity hover:opacity-70"
                  >
                    <img src={social.src} alt="" className="size-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns — node 1293:3831 */}
          {/* Figma's 136/175px columns are Acumin measurements — "Insights &
              Resources" needs ~148px in Inter and wrapped. Both columns size to
              their content now, so the links stay on one line each while still
              being able to wrap if a very narrow screen leaves no room. */}
          <div className="flex items-start justify-between gap-[16px]">
            <FooterLinks heading="COMPANY" items={COMPANY} />
            <FooterLinks heading="FRAMEWORKS" items={FRAMEWORKS} />
          </div>
        </div>

        {/* Hairline — node 1293:3843 */}
        <hr className="mt-[17px] border-t border-[#cccccc]" />

        {/* Node 1293:3838 */}
        {/* Same as above: Figma's 294px box fits the copyright line in Acumin
            but not in Inter, which needs ~317px. */}
        <div className="mt-[20px] max-w-full text-[14px] leading-[24px] tracking-[0.2px] text-ink">
          <p className="font-medium">
            StrateAura © 2024-2026 / All Rights Reserved
          </p>
          <a href="#" className="font-bold transition-colors hover:text-gold">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
