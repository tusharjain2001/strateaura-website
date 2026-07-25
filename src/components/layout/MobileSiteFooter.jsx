import { Link } from "react-router-dom";
import MobilePill from "../home-mobile/MobilePill";
import footerLogo from "../../assets/footer-logo.svg";
import socialLi from "../../assets/social-li.svg";

// Node 1878:11653 — LinkedIn only, an 18px glyph.
const SOCIALS = [
  { src: socialLi, label: "LinkedIn", href: "https://www.linkedin.com/in/drsuhairhamouri" },
];

// Node 1878:11659 — "VEIL™" is set bold while "Program" stays regular.
const COMPANY = [
  { label: "Home", to: "/" },
  { label: "VEIL™ Program", to: "/veil", strong: "VEIL™ " },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Frameworks", to: "/frameworks" },
  { label: "Insights & Resources", to: "/insights" },
];

// Node 1878:11662
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
 * The mobile footer — Figma node 1878:11583, and the only one the site has
 * below lg: every mobile page tree renders this, so Home, About, Programs,
 * Frameworks and the fluid pages share one composition.
 *
 * White panel, 97px of head room and 30px under the copyright, holding a 370px
 * column (16px gutters): the CTA block, the logo + "CONNECT WITH US" row, the
 * COMPANY / FRAMEWORKS columns 38px apart, then the copyright 41px below.
 *
 * The right-hand blocks in both middle rows start at x:195 of the column in
 * Figma, so they are pinned to the column's right edge at their designed
 * widths — that lands them on the same line at the 402px frame and simply
 * closes the gap on narrower phones. COMPANY gets 160px rather than Figma's
 * 136 because "Insights & Resources" needs ~148px in Inter (the file is set in
 * Acumin Pro, which runs narrower); FRAMEWORKS still starts at 195.
 *
 * Accepts the CTA overrides SiteFooter passes, so per-page copy, buttons (e.g.
 * VEIL's two pills) and the optional contact aside carry through.
 */
export default function MobileSiteFooter({ body, tagline, buttons, aside }) {
  return (
    <footer className="bg-white pt-[97px] pb-[30px] lg:hidden">
      <div className="mx-auto w-full max-w-[430px] px-4 [--pill-col:calc(min(100vw,430px)-32px)]">
        <div className="flex flex-col gap-[38px]">
          {/* Closing CTA — node 1878:11588 */}
          <div className="flex flex-col items-start gap-[23px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="text-[28px] leading-normal font-bold text-navy">
                Ready to Work Together?
              </h2>
              <p className="text-[16px] leading-normal font-light text-black">
                {body ??
                  "We work with those ready to think deeper, move cleaner, and lead with presence, not pressure."}
              </p>
            </div>
            {tagline !== null && (
              <p className="text-[20px] leading-normal font-medium text-gold">
                {tagline ?? "Apply to work with us!"}
              </p>
            )}
            {buttons ?? (
              <MobilePill
                as="a"
                href="/contact"
                variant="goldOutline"
                size="ctaBand"
                className="max-w-full"
              >
                Book a Strategic Conversation
              </MobilePill>
            )}
            {aside && <div>{aside}</div>}
          </div>

          {/* Logo + socials — node 1878:11599 */}
          <div className="flex items-center justify-between">
            <Link to="/" aria-label="StrateAura home">
              <img
                src={footerLogo}
                alt="StrateAura"
                className="h-[54px] w-[80px]"
              />
            </Link>
            <div className="w-[175px] shrink-0">
              <p className="text-[12px] leading-[24px] font-bold whitespace-nowrap text-gold">
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

          {/* Link columns — node 1878:11656 */}
          <div className="flex items-start justify-between whitespace-nowrap">
            <div className="w-[160px] shrink-0">
              <FooterLinks heading="COMPANY" items={COMPANY} />
            </div>
            <div className="w-[175px] shrink-0">
              <FooterLinks heading="FRAMEWORKS" items={FRAMEWORKS} />
            </div>
          </div>
        </div>

        {/* Node 1878:11663 — Figma's 294px box fits the copyright in Acumin;
            Inter needs ~317px, so the block just takes the column. */}
        <div className="mt-[41px] text-[14px] leading-[24px] tracking-[0.2px] text-ink">
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
