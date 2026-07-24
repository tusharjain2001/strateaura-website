import PillButton from "../ui/PillButton";
import ctaAura from "../../assets/cta-aura.png";
import logoA from "../../assets/about/foot-logo-a.svg";
import logoB from "../../assets/about/foot-logo-b.svg";
import logoC from "../../assets/about/foot-logo-c.svg";
import socialLi from "../../assets/about/social-li.svg";

const COMPANY = ["Home", "VEIL™ Program", "About Us", "Our Programs", "Frameworks", "Insights & Resources"];
const FRAMEWORKS = ["ALA-Nexus™", "The 5Cs of Brand Health", "VEIL™ Leadership System"];
const SOCIALS = [{ src: socialLi, label: "LinkedIn", href: "https://www.linkedin.com/in/drsuhairhamouri" }];

export default function AboutFooter() {
  return (
    <section className="relative h-[963px] w-[1440px] overflow-hidden bg-white">
      {/* CTA */}
      <img
        src={ctaAura}
        alt=""
        className="pointer-events-none absolute top-[144px] left-[685px] h-[277px] w-[755px]"
      />
      <h2 className="absolute top-[153px] left-[116px] w-[492px] text-[35px] font-bold text-navy">
        Ready to Work Together?
      </h2>
      <p className="absolute top-[236px] left-[116px] w-[566px] text-[24px] leading-normal font-light text-black">
        We work with those ready to think deeper, move cleaner, and lead with
        presence, not pressure.
      </p>
      <p className="absolute top-[312px] left-[119px] text-[30px] font-medium text-gold">
        Apply to work with us!
      </p>
      <PillButton
        as="a"
        href="#book"
        variant="goldOutline"
        icon="sparkle"
        className="absolute top-[397px] left-[116px]"
      >
        Book a Strategic Conversation
      </PillButton>

      {/* Footer */}
      <div className="absolute top-[532px] left-[82px] w-[1277px]">
        <div className="border-t border-black/10 pt-[66px]">
          <div className="flex justify-between">
            {/* logo + address */}
            <div>
              {/* Each SVG stretches (preserveAspectRatio="none"), so it needs a
                  positioned wrapper box to fill. The insets cannot go straight
                  on the <img>: Tailwind's preflight sets `height: auto` on
                  images, which beats the height implied by top/bottom and
                  collapses the three pieces onto each other. Same markup as
                  SiteFooter.jsx. */}
              <div className="relative h-[125px] w-[188px] overflow-hidden">
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
              <p className="mt-3 w-[214px] text-[16px] leading-normal font-light text-[#525252]">
                StrateAura Management Development Training LLC, Iris Bay - 2205 -
                D90, Business Bay Dubai, U.A.E
              </p>
            </div>

            <div className="flex gap-[64px] pr-[36px]">
              <FooterColumn heading="COMPANY">
                <ul className="mt-2 text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
                  {COMPANY.map((item) => (
                    <li key={item}>
                      <a href="#" className="transition-colors hover:text-gold">{item}</a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
              <FooterColumn heading="FRAMEWORKS">
                <ul className="mt-2 w-[175px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
                  {FRAMEWORKS.map((item) => (
                    <li key={item}>
                      <a href="#" className="transition-colors hover:text-gold">{item}</a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
              <FooterColumn heading="CONNECT WITH US">
                <div className="mt-[10px] flex items-center gap-[12px]">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      <img src={s.src} alt="" className="size-[18px]" />
                    </a>
                  ))}
                </div>
                <p className="mt-[18px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
                  Contact
                </p>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="mt-[64px] flex items-center justify-between border-t border-black/10 pt-[30px]">
          <p className="text-[14px] font-medium tracking-[0.2px] text-ink">
            StrateAura © 2024-2026 / All Rights Reserved
          </p>
          <a href="#" className="text-[14px] font-bold tracking-[0.2px] text-ink transition-colors hover:text-gold">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
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
