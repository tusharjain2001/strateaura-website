import PillButton from "../ui/PillButton";
import footerLogo from "../../assets/footer-logo.svg";
import footerArc from "../../assets/footer-blue-arc.png";
import ctaAura from "../../assets/cta-aura.png";
import socialTw from "../../assets/social-tw.svg";
import socialFb from "../../assets/social-fb.svg";
import socialLi from "../../assets/social-li.svg";
import socialIn from "../../assets/social-in.svg";

const COMPANY = ["Home", "VEIL™ Program", "About Us", "Our Programs", "Frameworks", "Insights & Resources"];
const FRAMEWORKS = ["ALA-Nexus™", "The 5Cs of Brand Health", "VEIL™ Leadership System"];
const SOCIALS = [
  { src: socialTw, label: "Twitter" },
  { src: socialFb, label: "Facebook" },
  { src: socialLi, label: "LinkedIn" },
  { src: socialIn, label: "Instagram" },
];

function FooterColumn({ heading, children }) {
  return (
    <div>
      <p className="text-[14px] font-bold tracking-[0.2px] text-gold">{heading}</p>
      {children}
    </div>
  );
}

export default function ClosingCTA() {
  return (
    <section className="relative h-[1051px] w-[1440px] overflow-hidden bg-white">
      {/* Navy aura arc sweeping down from the section above into the top-left corner */}
      <img
        src={footerArc}
        alt=""
        className="pointer-events-none absolute top-[-351px] left-0 h-[705px] w-[353px]"
      />

      <img
        src={ctaAura}
        alt=""
        className="pointer-events-none absolute top-[215px] right-0 h-[277px] w-[755px]"
      />

      {/* Closing call to action */}
      <h2 className="absolute top-[224px] left-[118px] w-[492px] text-[35px] font-bold text-navy">
        Ready to Work Together?
      </h2>
      <p className="absolute top-[307px] left-[118px] w-[566px] text-[24px] leading-normal font-light text-black">
        We work with those ready to think deeper, move cleaner, and lead with
        presence, not pressure.
      </p>
      <p className="absolute top-[383px] left-[121px] text-[30px] font-medium text-gold">
        Apply to work with us!
      </p>
      <PillButton
        as="a"
        href="#book"
        variant="goldOutline"
        icon="sparkle"
        className="absolute top-[468px] left-[118px]"
      >
        Book a Strategic Conversation
      </PillButton>

      {/* Footer */}
      <div className="absolute top-[603px] left-[82px] w-[1277px]">
        <div className="border-t border-black/10 pt-[66px]">
          <div className="flex items-start">
            {/* Logo + address; the box width places COMPANY at Figma x=601 */}
            <div className="w-[519px] shrink-0 pl-[23px]">
              <img src={footerLogo} alt="StrateAura" className="h-[125px] w-[188px]" />
              <p className="mt-4 max-w-[214px] text-[16px] leading-normal font-light text-[#525252]">
                StrateAura Management Development Training LLC, Iris Bay - 2205 -
                D90, Business Bay Dubai, U.A.E
              </p>
            </div>

            <div className="flex">
              <div className="w-[226px]">
                <FooterColumn heading="COMPANY">
                  <ul className="mt-2 text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
                    {COMPANY.map((item) => (
                      <li key={item}>
                        <a href="#" className="transition-colors hover:text-gold">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              </div>

              <div className="w-[265px]">
                <FooterColumn heading="FRAMEWORKS">
                  <ul className="mt-2 w-[175px] text-[14px] leading-[35px] font-medium tracking-[0.2px] text-ink">
                    {FRAMEWORKS.map((item) => (
                      <li key={item}>
                        <a href="#" className="transition-colors hover:text-gold">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              </div>

              <FooterColumn heading="CONNECT WITH US">
                <div className="mt-[10px] flex items-center gap-[12px]">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href="#" aria-label={s.label}>
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
