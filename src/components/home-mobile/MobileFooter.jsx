import { Link } from "react-router-dom";
import MobilePill from "./MobilePill";
import footerLogo from "../../assets/footer-logo.svg";
import socialTw from "../../assets/social-tw.svg";
import socialFb from "../../assets/social-fb.svg";
import socialLi from "../../assets/social-li.svg";
import socialIn from "../../assets/social-in.svg";

// Node 1434:776 — Twitter, Facebook, LinkedIn, Instagram on a 30px pitch.
const SOCIALS = [
  { src: socialTw, label: "Twitter" },
  { src: socialFb, label: "Facebook" },
  { src: socialLi, label: "LinkedIn" },
  { src: socialIn, label: "Instagram" },
];

// Node 1434:788 — "VEIL™" is set bold while "Program" stays regular.
const COMPANY = [
  { label: "Home", to: "/" },
  { label: "VEIL™ Program", to: "/veil", strong: "VEIL™ " },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Frameworks", to: "/frameworks" },
  { label: "Insights & Resources", to: "/insights" },
];

// Node 1434:791
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
 * Closing CTA + site footer — Figma node 1434:707.
 *
 * The board drew this as a white panel with a 121px top-left corner radius
 * riding 145px up over the navy "Our Edge" band. That band is no longer on
 * the page, so the footer sits in normal flow — the negative margin would
 * otherwise ride up over the last Insights image and cut it.
 */
export default function MobileFooter() {
  return (
    <footer className="relative bg-white pt-[97px] pb-[30px]">
      <div className="mx-auto w-full max-w-[430px] px-4">
        <div className="flex flex-col gap-[38px]">
          {/* Closing CTA — node 1434:711 */}
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

          {/* Logo + socials — node 1434:722 */}
          <div className="flex items-center justify-between">
            <Link to="/" aria-label="StrateAura home">
              <img src={footerLogo} alt="StrateAura" className="h-[54px] w-[80px]" />
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
                    href="#"
                    aria-label={social.label}
                    className="transition-opacity hover:opacity-70"
                  >
                    <img src={social.src} alt="" className="size-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns — node 1434:785 */}
          {/* Figma's 136/175px columns are Acumin measurements — "Insights &
              Resources" needs ~148px in Inter and wrapped. Both columns size to
              their content now, so the links stay on one line each while still
              being able to wrap if a very narrow screen leaves no room. */}
          <div className="flex items-start justify-between gap-[16px]">
            <FooterLinks heading="COMPANY" items={COMPANY} />
            <FooterLinks heading="FRAMEWORKS" items={FRAMEWORKS} />
          </div>
        </div>

        {/* Node 1434:792 */}
        {/* Same as above: Figma's 294px box fits the copyright line in Acumin
            but not in Inter, which needs ~317px. */}
        <div className="mt-[41px] max-w-full text-[14px] leading-[24px] tracking-[0.2px] text-ink">
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
