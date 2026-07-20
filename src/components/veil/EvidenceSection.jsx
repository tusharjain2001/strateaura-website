import CtaPill from "../ui/CtaPill";
import evidencePhoto from "../../assets/veil/evidence-photo.jpg";
import scallopMask from "../../assets/veil/evidence-scallop-mask.svg";
import scallopBorder from "../../assets/veil/evidence-scallop-border.svg";
import evidenceFan from "../../assets/veil/evidence-fan.svg";
import evidenceSparkle from "../../assets/veil/evidence-sparkle.svg";

const maskStyle = {
  maskImage: `url(${scallopMask})`,
  WebkitMaskImage: `url(${scallopMask})`,
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
};

function EvidenceCard({ className = "" }) {
  return (
    <div
      className={`relative z-10 rounded-[4px] bg-gradient-to-b from-[#dfbc5a] to-[#a07e22] ${className}`}
    >
      <img
        src={evidenceSparkle}
        alt=""
        className="pointer-events-none absolute -top-6 -right-6 size-[48px]"
      />
      <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold text-white">
        The Evidence
      </h2>
      <p className="mt-3 text-[clamp(0.9375rem,1.2vw,1.0625rem)] leading-normal font-light text-white">
        The science behind VEIL — 9 internationally validated instruments,
        all with:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-[clamp(0.9375rem,1.2vw,1.0625rem)] leading-normal font-light text-white">
        <li>Arabic-validated versions, 5 pre and post measures</li>
        <li>
          Quantified evidence of change at program close, 34 peer-reviewed
          sources
        </li>
        <li>Grounding every claim in the curriculum.</li>
      </ul>
      <p className="mt-4 text-[clamp(0.9375rem,1.2vw,1.0625rem)] leading-normal font-light text-white">
        VEIL measures change across:
      </p>
      <p className="text-[clamp(0.9375rem,1.2vw,1.0625rem)] leading-normal font-bold text-white">
        Perceived Stress · Burnout · Self-Compassion · Assertiveness ·
        Self-Efficacy
      </p>
      <CtaPill as="a" href="/webinar" variant="creamFilled" size="md" className="mt-6">
        Join the Free Live Webinar
      </CtaPill>
    </div>
  );
}

export default function EvidenceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffdf7] to-[rgba(231,197,101,0.25)]">
      {/* Mobile/tablet: simple stack, photo fully contained (no bleed). */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:hidden">
        <div className="relative mx-auto aspect-[1102.7/800] w-full max-w-[560px]">
          <div className="absolute inset-0" style={maskStyle}>
            <img
              src={evidencePhoto}
              alt="StrateAura team at University of Birmingham Dubai"
              className="absolute inset-0 size-full object-cover object-left"
            />
          </div>
          <img src={scallopBorder} alt="" className="pointer-events-none absolute inset-0 size-full" />
        </div>
        <EvidenceCard className="mt-6 p-7 sm:p-9" />
      </div>

      {/* Desktop: photo wide and full-height, bleeding off the section's
          left edge (the mask's own left 25% is meant to sit off-canvas);
          the gold card overlaps its right edge per the Figma node geometry
          (section 1440x1003). */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] lg:block lg:h-[1003px]">
        <div className="absolute top-[10.17%] left-0 h-[79.76%] aspect-[1102.7/800] -translate-x-[24.94%]">
          <div className="absolute inset-0" style={maskStyle}>
            <img
              src={evidencePhoto}
              alt="StrateAura team at University of Birmingham Dubai"
              className="absolute inset-0 size-full object-cover object-left"
            />
          </div>
          <img src={scallopBorder} alt="" className="pointer-events-none absolute inset-0 size-full" />
        </div>

        {/* Fan of pale-gold ovals (Figma "Group 85", opacity 0.2 baked into
            the svg) — Figma x557,y0, 883x401, source rotated 90deg. Renders
            ON TOP of the photo (last layer in Figma): it washes the photo's
            top-right pale and fills the scallop notch with pale cream. This
            is the real "gold arc" — NOT a solid disc. It clears the card
            (fan y0-401, card y502+) so the card stays crisp. */}
        <div className="pointer-events-none absolute top-0 left-[38.68%] flex h-[39.98%] w-[61.32%] items-center justify-center">
          <img
            src={evidenceFan}
            alt=""
            className="h-[220.2%] w-[45.41%] max-w-none rotate-90"
          />
        </div>

        <EvidenceCard className="absolute top-[50.05%] left-[38.68%] w-[49.58%] max-w-[560px] p-10" />
      </div>
    </section>
  );
}
