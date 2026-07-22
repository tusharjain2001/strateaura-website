import { Link } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import MobileSiteFooter from "./MobileSiteFooter";
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
const SOCIALS = [
  { src: socialTw, label: "Twitter" },
  { src: socialFb, label: "Facebook" },
  { src: socialLi, label: "LinkedIn" },
  { src: socialIn, label: "Instagram" },
];

/**
 * Responsive version of the site footer (CTA + link columns) for the fluid
 * pages; the legacy canvas pages keep AboutFooter.
 *
 * The CTA block accepts per-page overrides (the Figma VEIL page ships its own
 * footer copy/buttons); defaults reproduce the shared design.
 */
export default function SiteFooter({ body, tagline, buttons, aside }) {
  return (
    <>
      {/* Below lg every fluid page shows the Home-style mobile footer so the
          footer matches across the site; the layout below is desktop-only. */}
      <MobileSiteFooter
        body={body}
        tagline={tagline}
        buttons={buttons}
        aside={aside}
      />
      <footer className="relative hidden overflow-hidden bg-white lg:block">
      {/* CTA */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-14 sm:px-8 lg:pt-[153px] xl:px-[116px]">
        {/* Landscape aura fan (753x278) anchored to the right of the CTA.
            When a contact aside is shown (VEIL page), the fan sits lower so
            the contact block reads clear above the dots, per Figma. */}
        <div
          className={`pointer-events-none absolute top-12 right-0 hidden aspect-[755/277] w-[52%] max-w-[755px] md:block ${aside ? "lg:top-[230px]" : "lg:top-[144px]"}`}
        >
          <img
            src={ctaAura}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
        <div className="relative lg:flex lg:items-start lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-[clamp(1.625rem,2.5vw,2.1875rem)] leading-[1.2] font-bold text-navy">
              Ready to Work Together?
            </h2>
            <p className="mt-4 max-w-[566px] text-[clamp(1.125rem,1.7vw,1.5rem)] leading-normal font-light text-black lg:mt-7">
              {body ??
                "We work with those ready to think deeper, move cleaner, and lead with presence, not pressure."}
            </p>
            {tagline !== null && (
              <p className="mt-5 text-[clamp(1.25rem,2.1vw,1.875rem)] font-medium text-gold lg:mt-10">
                {tagline ?? "Apply to work with us!"}
              </p>
            )}
            {buttons ?? (
              <CtaPill as="a" href="#book" variant="goldOutline" className="mt-6 lg:mt-[20px]">
                Book a Strategic Conversation
              </CtaPill>
            )}
          </div>
          {aside && <div className="mt-8 lg:mt-2 lg:shrink-0">{aside}</div>}
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[82px]">
        <div className="mt-12 border-t border-black/10 pt-10 lg:mt-[135px] lg:pt-[66px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* logo + address */}
            <div>
              {/* Each SVG stretches (preserveAspectRatio="none"), so it needs a
                  positioned wrapper box to fill. */}
              <div className="relative h-[100px] w-[150px] overflow-hidden lg:h-[125px] lg:w-[188px]">
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
              <p className="mt-3 max-w-[214px] text-[16px] leading-normal font-light text-[#525252]">
                StrateAura Management Development Training LLC, Iris Bay - 2205 -
                D90, Business Bay Dubai, U.A.E
              </p>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-8 lg:gap-[64px] lg:pr-[36px]">
              <FooterColumn heading="COMPANY">
                <ul className="mt-2 text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
                  {COMPANY.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} className="transition-colors hover:text-gold">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
              <FooterColumn heading="FRAMEWORKS">
                <ul className="mt-2 max-w-[175px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
                  {FRAMEWORKS.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} className="transition-colors hover:text-gold">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
              <FooterColumn heading="CONNECT WITH US">
                <div className="mt-[10px] flex items-center gap-[12px]">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href="#" aria-label={s.label}>
                      <img src={s.src} alt="" className="size-[18px]" />
                    </a>
                  ))}
                </div>
                <p className="mt-[18px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
                  <Link to="/contact" className="transition-colors hover:text-gold">Contact</Link>
                </p>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 py-[30px] sm:flex-row sm:items-center sm:justify-between lg:mt-[64px]">
          <p className="text-[14px] font-medium tracking-[0.2px] text-ink">
            StrateAura © 2024-2026 / All Rights Reserved
          </p>
          <a href="#" className="text-[14px] font-bold tracking-[0.2px] text-ink transition-colors hover:text-gold">
            Privacy Policy
          </a>
        </div>
      </div>
      </footer>
    </>
  );
}

function FooterColumn({ heading, children }) {
  return (
    <div>
      <p className="text-[14px] font-bold tracking-[0.2px] text-gold">{heading}</p>
      {children}
    </div>
  );
}
