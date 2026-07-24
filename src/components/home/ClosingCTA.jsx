import PillButton from "../ui/PillButton";
import footerLogo from "../../assets/footer-logo.svg";
import ctaAura from "../../assets/cta-aura.png";
import socialLi from "../../assets/social-li.svg";

/**
 * Closing CTA + footer — Figma node 1638:1077, y 5177-6140 of the frame.
 * Everything is placed at its Figma coordinate minus 5177.
 */
const COMPANY = [
  "Home",
  "VEIL™ Program",
  "About Us",
  "Our Programs",
  "Frameworks",
  "Insights & Resources",
];
const FRAMEWORKS = [
  "ALA-Nexus™",
  "The 5Cs of Brand Health",
  "VEIL™ Leadership System",
];
const SOCIALS = [{ src: socialLi, label: "LinkedIn", href: "https://www.linkedin.com/in/drsuhairhamouri" }];

function FooterList({ heading, items, left }) {
  return (
    <div className="absolute top-[571px]" style={{ left }}>
      <p className="text-[14px] leading-[24px] font-bold tracking-[0.2px] text-gold">
        {heading}
      </p>
      <ul className="mt-[11px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="transition-colors hover:text-gold">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClosingCTA() {
  return (
    <section className="relative h-[963px] w-[1440px] overflow-hidden bg-white">
      {/* 1638:1159 — aura, 754.6x277.3 at x 645 */}
      <img
        src={ctaAura}
        alt=""
        className="pointer-events-none absolute top-[121px] left-[645px] h-[277.28px] w-[754.62px]"
      />

      {/* 1638:1080 / 1078 / 1079 / 1153 */}
      <h2 className="absolute top-[125px] left-[76px] w-[492px] text-[35px] leading-[1.2] font-bold text-navy">
        Ready to Work Together?
      </h2>
      <p className="absolute top-[213px] left-[76px] w-[566px] text-[24px] leading-[1.2] font-light text-black">
        We work with those ready to think deeper, move cleaner, and lead with
        presence, not pressure.
      </p>
      <p className="absolute top-[289px] left-[79px] text-[30px] leading-[1.2] font-medium text-gold">
        Apply to work with us!
      </p>
      <PillButton
        as="a"
        href="/contact"
        variant="goldOutline"
        icon="sparkle"
        className="absolute top-[374px] left-[76px] min-w-[439px]"
      >
        Book a Strategic Conversation
      </PillButton>

      {/* 1638:1084 / 1638:1085 — the two rules, x 40 to x 1317 */}
      <div className="absolute top-[509px] left-[40px] h-px w-[1277px] bg-black/10" />
      <div className="absolute top-[856px] left-[40px] h-px w-[1277px] bg-black/10" />

      {/* 1638:1086 — lockup + registered address */}
      <img
        src={footerLogo}
        alt="StrateAura"
        className="absolute top-[575px] left-[63px] h-[125px] w-[188px]"
      />
      <p className="absolute top-[726px] left-[63px] w-[214px] text-[16px] leading-[1.2] font-light text-[#525252]">
        StrateAura Management Development Training LLC, Iris Bay - 2205 - D90,
        Business Bay Dubai, U.A.E
      </p>

      {/* 1638:1137 — link columns */}
      <FooterList heading="COMPANY" items={COMPANY} left={559} />
      <FooterList heading="FRAMEWORKS" items={FRAMEWORKS} left={785} />

      <div className="absolute top-[571px] left-[1050px]">
        <p className="text-[14px] leading-[24px] font-bold tracking-[0.2px] text-gold">
          CONNECT WITH US
        </p>
        <div className="mt-[14px] flex items-center gap-[12px]">
          {SOCIALS.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              <img src={social.src} alt="" className="size-[18px]" />
            </a>
          ))}
        </div>
        <p className="mt-[17px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
          <a href="/contact" className="transition-colors hover:text-gold">
            Contact
          </a>
        </p>
      </div>

      {/* 1638:1082 / 1638:1083 */}
      <p className="absolute top-[887px] left-[63px] text-[14px] leading-[24px] font-medium tracking-[0.2px] text-ink">
        StrateAura © 2024-2026 / All Rights Reserved
      </p>
      <a
        href="#"
        className="absolute top-[887px] left-[1175px] text-[14px] leading-[24px] font-bold tracking-[0.2px] text-ink transition-colors hover:text-gold"
      >
        Privacy Policy
      </a>
    </section>
  );
}
