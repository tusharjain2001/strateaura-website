import { Link } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import footerLogo from "../../assets/footer-logo.svg";
import socialTw from "../../assets/social-tw.svg";
import socialFb from "../../assets/social-fb.svg";
import socialLi from "../../assets/social-li.svg";
import socialIn from "../../assets/social-in.svg";

const SOCIALS = [
  { src: socialTw, label: "Twitter" },
  { src: socialFb, label: "Facebook" },
  { src: socialLi, label: "LinkedIn" },
  { src: socialIn, label: "Instagram" },
];

// "VEIL™" is set bold while "Program" stays regular (Figma node 1293:3834).
const COMPANY = [
  { label: "Home", to: "/" },
  { label: "VEIL™ Program", to: "/veil", strong: "VEIL™ " },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Frameworks", to: "/frameworks" },
  { label: "Insights & Resources", to: "/insights" },
];

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
 * Mobile footer for the fluid pages — the same composition as the Home mobile
 * footer (Figma node 1293:3754): CTA, a logo + socials row, side-by-side
 * COMPANY/FRAMEWORKS columns and the copyright line, on plain white with the
 * two hairlines. Rendered below lg by SiteFooter (which keeps its own desktop
 * footer at lg and up), so the mobile footer matches Home across every page.
 *
 * Accepts the same CTA overrides SiteFooter takes, so per-page copy, buttons
 * (e.g. VEIL's two pills) and the optional contact aside carry through.
 */
export default function MobileSiteFooter({ body, tagline, buttons, aside }) {
  return (
    <footer className="bg-white pt-14 pb-[31px] lg:hidden">
      <div className="mx-auto w-full max-w-[430px] px-4">
        {/* Closing CTA */}
        <div className="flex flex-col items-start">
          <h2 className="text-[28px] leading-normal font-bold text-navy">
            Ready to Work Together?
          </h2>
          <p className="mt-2 text-[16px] leading-normal font-light text-black">
            {body ??
              "We work with those ready to think deeper, move cleaner, and lead with presence, not pressure."}
          </p>
          {tagline !== null && (
            <p className="mt-[23px] text-[20px] leading-normal font-medium text-gold">
              {tagline ?? "Apply to work with us!"}
            </p>
          )}
          {buttons ?? (
            <CtaPill as="a" href="/contact" variant="goldOutline" className="mt-[23px]">
              Book a Strategic Conversation
            </CtaPill>
          )}
          {aside && <div className="mt-6">{aside}</div>}
        </div>

        <hr className="mt-[27px] border-t border-[#cccccc]" />

        <div className="mt-[17px] flex flex-col gap-[37px]">
          {/* Logo + socials */}
          <div className="flex w-[357px] max-w-full items-center justify-between">
            <Link to="/" aria-label="StrateAura home">
              <img
                src={footerLogo}
                alt="StrateAura"
                className="h-[54px] w-[80px]"
              />
            </Link>
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

          {/* Link columns */}
          <div className="flex items-start justify-between gap-[16px]">
            <FooterLinks heading="COMPANY" items={COMPANY} />
            <FooterLinks heading="FRAMEWORKS" items={FRAMEWORKS} />
          </div>
        </div>

        <hr className="mt-[17px] border-t border-[#cccccc]" />

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
