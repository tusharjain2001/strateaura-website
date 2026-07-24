import { Link } from "react-router-dom";
import MobilePill from "../home-mobile/MobilePill";
import footerLogo from "../../assets/footer-logo.svg";
import socialLi from "../../assets/social-li.svg";

const SOCIALS = [
  { src: socialLi, label: "LinkedIn", href: "https://www.linkedin.com/in/drsuhairhamouri" },
];

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
 * Closing CTA + footer — Figma node 1296:4737. Unlike the mobile Home footer
 * this one sits on plain white with hairline rules above the logo row and above
 * the copyright (nodes 1296:4826 / 1296:4827), and has no rounded overlap.
 */
export default function FwFooter() {
  return (
    <footer className="bg-white pt-[100px] pb-[26px]">
      <div className="mx-auto w-full max-w-[430px] px-4 [--pill-col:calc(min(100vw,430px)-32px)]">
        {/* 1296:4740 — closing CTA */}
        <h2 className="text-[28px] leading-[34px] font-bold text-navy">
          Ready to Work Together?
        </h2>
        <p className="mt-[8px] text-[16px] leading-[18.5px] font-light text-black">
          We work with those ready to think deeper, move cleaner, and lead with
          presence, not pressure.
        </p>
        <p className="mt-[23px] text-[20px] leading-normal font-medium text-gold">
          Apply to work with us!
        </p>
        <MobilePill
          as="a"
          href="/contact"
          variant="goldOutline"
          size="smFluid"
          className="mt-[23px] max-w-full"
        >
          Book a Strategic Conversation
        </MobilePill>

        <hr className="mt-[45px] border-t border-black/10" />

        {/* 1296:4752 — logo + socials */}
        <div className="mt-[17px] flex items-center justify-between">
          <Link to="/" aria-label="StrateAura home">
            <img src={footerLogo} alt="StrateAura" className="h-[40px] w-auto" />
          </Link>
          <div className="shrink-0">
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

        {/* 1296:4815 — link columns */}
        {/* Figma sizes these columns 136 / 175 with FRAMEWORKS starting at
            x:195. Inter is wider than the file's Acumin Pro, so COMPANY gets
            160px to keep "Insights & Resources" on one line — justify-between
            still lands FRAMEWORKS on Figma's x:195. */}
        <div className="mt-[37px] flex items-start justify-between whitespace-nowrap">
          <div className="w-[160px] shrink-0">
            <FooterLinks heading="COMPANY" items={COMPANY} />
          </div>
          <div className="w-[175px] shrink-0">
            <FooterLinks heading="FRAMEWORKS" items={FRAMEWORKS} />
          </div>
        </div>

        <hr className="mt-[17px] border-t border-black/10" />

        {/* 1296:4822 */}
        <div className="mt-[20px] text-[14px] leading-[24px] tracking-[0.2px] text-ink">
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
