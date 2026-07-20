import CtaPill from "../ui/CtaPill";
import evidencePhoto from "../../assets/veil/evidence-photo.jpg";
import evidenceFan from "../../assets/veil/evidence-fan.svg";
import evidenceSparkle from "../../assets/veil/evidence-sparkle.svg";

// Scallop shapes exported from Figma "Mask group" (node 1221:320), viewBox
// 0..828 x 0..800. The clip path and the (inset) border path are the exact
// vectors from the design so the photo edge and the gold stroke coincide.
const SCALLOP_CLIP =
  "M593.29 0C595.376 0 596.974 1.8376 596.711 3.90724C592.251 39.0672 593.552 116.15 647.867 180.501C702.37 245.074 786.88 258.364 823.956 256.016C825.97 255.888 827.703 257.463 827.703 259.481V540.519C827.703 542.537 825.97 544.112 823.956 543.984C786.88 541.636 702.37 554.926 647.867 619.499C593.552 683.85 592.251 760.933 596.711 796.093C596.974 798.162 595.376 800 593.29 800H-40.5871C-42.6734 800 -44.2714 798.162 -44.0088 796.093C-39.5481 760.933 -40.8492 683.85 -95.1647 619.499C-149.668 554.926 -234.177 541.636 -271.254 543.984C-273.268 544.112 -275 542.537 -275 540.519V259.481C-275 257.463 -273.268 255.888 -271.254 256.016C-234.177 258.364 -149.668 245.074 -95.1647 180.501C-40.8492 116.15 -39.5481 39.0672 -44.0088 3.90723C-44.2714 1.83759 -42.6734 0 -40.5872 0H593.29Z";
const SCALLOP_BORDER =
  "M591.088 5.40527C586.862 42.2815 589.162 119.329 643.736 183.987C698.746 249.16 783.208 263.345 822.297 261.519V538.48C783.208 536.654 698.746 550.84 643.736 616.013C589.162 680.671 586.862 757.718 591.088 794.595H-38.3857C-34.1595 757.718 -36.4591 680.671 -91.0342 616.013C-146.044 550.84 -230.506 536.654 -269.595 538.48V261.519C-230.506 263.346 -146.044 249.16 -91.0342 183.987C-36.4591 119.329 -34.1595 42.2815 -38.3857 5.40527H591.088Z";

/**
 * The team photo clipped to Figma's scalloped shape, with the gold gradient
 * border traced on the matching path. Inline SVG clipPath (not a CSS mask,
 * which renders these exported shapes unreliably). The photo `<image>` is
 * placed at the design's exact transform (Figma "Mask group" pattern) so the
 * crop matches. `id` differentiates the desktop/mobile instances on one page.
 */
function ScallopPhoto({ id, className = "" }) {
  return (
    <svg viewBox="0 0 828 800" preserveAspectRatio="none" className={className}>
      <defs>
        <clipPath id={id}>
          <path d={SCALLOP_CLIP} />
        </clipPath>
        <linearGradient
          id={`${id}-b`}
          x1="276.351"
          y1="0"
          x2="276.351"
          y2="800"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3902F" />
          <stop offset="1" stopColor="#725300" />
        </linearGradient>
      </defs>
      <image
        href={evidencePhoto}
        x="-386.1"
        y="10.98"
        width="1382.7"
        height="777.3"
        preserveAspectRatio="none"
        clipPath={`url(#${id})`}
      />
      <path
        d={SCALLOP_BORDER}
        fill="none"
        stroke={`url(#${id}-b)`}
        strokeWidth="10.8108"
      />
    </svg>
  );
}

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
        The science behind VEIL 9 internationally validated instruments, all
        with:
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
      {/* Mobile/tablet: simple stack. */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:hidden">
        <ScallopPhoto
          id="ev-scallop-m"
          className="mx-auto aspect-[828/800] w-full max-w-[520px]"
        />
        <EvidenceCard className="mt-6 p-7 sm:p-9" />
      </div>

      {/* Desktop: Figma section 1440x1003, everything at exact node coords. */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] lg:block lg:h-[1003px]">
        {/* Masked photo — Figma "Mask group": scallop-clipped photo + gold
            border, 828x800 visible view. In Figma it bleeds off the artboard's
            LEFT edge, so it must hug the viewport's left with no margin. The
            centered 1440 container gains side margins above 1440px, so
            left-[calc((100%-100vw)/2)] pulls the photo back to the viewport's
            left edge at any width; the 57.5% keeps it at its natural 828px. */}
        <ScallopPhoto
          id="ev-scallop-d"
          className="pointer-events-none absolute top-[10.17%] left-[calc((100%-100vw)/2)] h-[79.76%] w-[57.5%]"
        />

        {/* Fan of pale-gold ovals — Figma "Group 85" (opacity baked in,
            already landscape). 883x401 at x557, y0, on top: fills the scallop
            notch and extends across the open right side. */}
        <img
          src={evidenceFan}
          alt=""
          className="pointer-events-none absolute top-0 left-[38.68%] h-[39.98%] w-[61.32%]"
        />

        <EvidenceCard className="absolute top-[50.05%] left-[38.68%] w-[49.58%] p-10" />
      </div>
    </section>
  );
}
