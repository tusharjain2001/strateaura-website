import { Link } from "react-router-dom";
import { Sparkle } from "../ui/Icons";
import ctaAura from "../../assets/cta-aura.png";
import logoA from "../../assets/about/foot-logo-a.svg";
import logoB from "../../assets/about/foot-logo-b.svg";
import logoC from "../../assets/about/foot-logo-c.svg";
import socialTw from "../../assets/about/social-tw.svg";
import socialFb from "../../assets/about/social-fb.svg";
import socialLi from "../../assets/about/social-li.svg";
import socialIn from "../../assets/about/social-in.svg";

const COMPANY = [
  { label: "Home", to: "/" },
  { label: "VEIL™ Program", to: "/veil" },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Frameworks", to: "/frameworks" },
  { label: "Insights & Resources", to: "/insights" },
];
const FRAMEWORKS = [
  { label: "ALA-Nexus™", to: "/frameworks" },
  { label: "The 5Cs of Brand Health", to: "/frameworks" },
  { label: "VEIL™ Leadership System", to: "/frameworks" },
];
// Board order: Tw 1050, FB 1080, LinkedIn 1110, In 1140 — Tw is the only 18x14.
const SOCIALS = [
  { src: socialTw, label: "Twitter", left: 1050, top: 490, h: 14 },
  { src: socialFb, label: "Facebook", left: 1080, top: 488, h: 18 },
  { src: socialLi, label: "LinkedIn", left: 1110, top: 488, h: 18 },
  { src: socialIn, label: "Instagram", left: 1140, top: 488, h: 18 },
];

/**
 * CTA + footer for the Blog Page board (node 1755:3767 "Group 88"), laid out at
 * coordinates relative to the group's own origin (board y − 1544), so it can
 * follow an article of any length — the board's posts are not all one height.
 *
 * This is the same design as AboutFooter but shifted 40px left (CTA at x76 vs
 * 116, the rules at x40 vs 80) and without the address paragraph under the
 * logo, so it is kept separate rather than parameterising the verified About
 * component.
 */
export default function BlogFooter() {
  return (
    <div className="relative h-[858px] w-[1440px]">
      {/* 1755:3849 — the ellipse fan, 754.62x277.28 pinned to the CTA's top */}
      <img
        src={ctaAura}
        alt=""
        className="pointer-events-none absolute top-0 left-[645px] h-[277.279px] w-[754.621px]"
      />

      <h2 className="absolute top-[4px] left-[76px] w-[492px] text-[35px] leading-[1.2] font-bold text-navy">
        Ready to Work Together?
      </h2>
      <p className="absolute top-[90px] left-[76px] w-[566px] text-[24px] leading-[1.2] font-light text-black">
        We work with those ready to think deeper, move cleaner, and lead with
        presence, not pressure.
      </p>
      <p className="absolute top-[164px] left-[79px] text-[30px] leading-[1.2] font-medium text-gold">
        Apply to work with us!
      </p>

      {/* 1755:3843 — the pill is a fixed 439x65 box: label 28 in from the left,
          50px circle 10 in from the right. */}
      <a
        href="#book"
        className="group absolute top-[253px] left-[76px] block h-[65px] w-[439px] rounded-full border border-gold"
      >
        {/* 22.3px, not the board's 24: the pill is a fixed 439 box and Inter
            sets this label ~8% wider than Acumin, which ran it under the icon.
            The 7% reduction is the same Inter/Acumin ratio used site-wide. */}
        <span className="absolute top-[21px] left-[28px] text-[22.3px] leading-[29px] font-bold whitespace-nowrap text-gold">
          Book a Strategic Conversation
        </span>
        <span className="absolute top-[8px] left-[379px] flex size-[50px] items-center justify-center rounded-full bg-gold text-cream transition-transform motion-safe:group-hover:scale-105">
          <Sparkle className="size-[35.65px]" />
        </span>
      </a>

      {/* 1755:3771 — footer block. Both rules run x40..1317. */}
      <div className="absolute top-[388px] left-[40px] h-px w-[1277px] bg-black/10" />

      <div className="absolute top-[454px] left-[63px] h-[125px] w-[188px] overflow-hidden">
        {/* Each SVG stretches (preserveAspectRatio="none"), so it needs a
            positioned wrapper box to fill — the insets cannot go on the <img>
            because preflight's `height: auto` collapses the three pieces. */}
        <span className="absolute inset-[0_28.74%_38.85%_28.37%]">
          <img src={logoA} alt="StrateAura" className="size-full" />
        </span>
        <span className="absolute inset-[70.87%_0_11.27%_0]">
          <img src={logoB} alt="" className="size-full" />
        </span>
        <span className="absolute inset-[94.52%_0.23%_0_0]">
          <img src={logoC} alt="" className="size-full" />
        </span>
      </div>

      <FooterHeading left={559}>COMPANY</FooterHeading>
      <ul className="absolute top-[483px] left-[559px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
        {COMPANY.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <FooterHeading left={785}>FRAMEWORKS</FooterHeading>
      <ul className="absolute top-[483px] left-[785px] w-[175px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
        {FRAMEWORKS.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <FooterHeading left={1050}>CONNECT WITH US</FooterHeading>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href="#"
          aria-label={s.label}
          className="absolute w-[18px]"
          style={{ left: `${s.left}px`, top: `${s.top}px` }}
        >
          <img src={s.src} alt="" className="w-[18px]" style={{ height: `${s.h}px` }} />
        </a>
      ))}
      <p className="absolute top-[521px] left-[1050px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
        <Link to="/contact" className="transition-colors hover:text-gold">
          Contact
        </Link>
      </p>

      <div className="absolute top-[735px] left-[40px] h-px w-[1277px] bg-black/10" />
      <p className="absolute top-[765px] left-[63px] text-[14px] leading-[24px] font-medium tracking-[0.2px] text-ink">
        StrateAura © 2024-2026 / All Rights Reserved
      </p>
      <a
        href="#"
        className="absolute top-[765px] left-[1175px] text-[14px] leading-[24px] font-bold tracking-[0.2px] text-ink transition-colors hover:text-gold"
      >
        Privacy Policy
      </a>
    </div>
  );
}

function FooterHeading({ left, children }) {
  return (
    <p
      className="absolute top-[449px] text-[14px] leading-[24px] font-bold tracking-[0.2px] text-gold"
      style={{ left: `${left}px` }}
    >
      {children}
    </p>
  );
}
