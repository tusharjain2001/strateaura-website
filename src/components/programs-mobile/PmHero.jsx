import MobileContainer from "../home-mobile/MobileContainer";
import badge from "../../assets/about-mobile/phil-badge.svg";
import ellipses from "../../assets/about-mobile/phil-swirl.svg";

/**
 * Programs hero — Figma node 1295:4022.
 *
 * Notched gold badge, a two-tone 32px headline (gold line over navy line) and
 * the ellipse row (node 1295:4028). The cream wash behind it is node 1295:3965,
 * painted by ProgramsMobile because it runs past this section into the featured
 * block below.
 *
 * The badge and ellipse art are the same Figma components the About hero uses,
 * so those assets are shared rather than re-exported.
 */
export default function PmHero() {
  return (
    <section className="relative pt-[39px]">
      <MobileContainer>
        <div className="flex flex-col items-center gap-[32px]">
          <div className="relative flex h-[37px] w-[202px] items-center justify-center">
            <img
              src={badge}
              alt=""
              aria-hidden
              className="absolute inset-0 size-full -scale-y-100"
            />
            <span className="relative text-[16px] leading-normal font-medium text-white">
              Our Programs
            </span>
          </div>

          <h1 className="text-center text-[32px] leading-normal font-bold">
            <span className="block text-gold">Redefining Power,</span>
            <span className="block text-navy-2">Preserving You.</span>
          </h1>

          {/* 1295:4028 — 370x62 ellipse row under the headline. */}
          <img
            src={ellipses}
            alt=""
            aria-hidden
            className="block h-[62px] w-full"
          />
        </div>
      </MobileContainer>
    </section>
  );
}
