import CtaPill from "../ui/CtaPill";
import evidencePhoto from "../../assets/veil/evidence-photo.jpg";
import evidenceFan from "../../assets/veil/evidence-fan.svg";
import evidenceSparkle from "../../assets/veil/evidence-sparkle.svg";

// Scallop shape (Figma node 1221:318, viewBox 1102.7x800): flat top/bottom
// edges from x234->868, the right and left edges bulge out to the frame with
// concave "bites" pulled in at the four quadrant corners. Used for BOTH the
// clip and the gold border stroke so the photo edge and the stroke coincide.
const SCALLOP =
  "M868.29 0C870.376 0 871.974 1.8376 871.712 3.90724C867.251 39.0672 868.552 116.15 922.867 180.501C977.37 245.074 1061.88 258.364 1098.96 256.016C1100.97 255.888 1102.7 257.463 1102.7 259.481V540.519C1102.7 542.537 1100.97 544.112 1098.96 543.984C1061.88 541.636 977.37 554.926 922.867 619.499C868.552 683.85 867.251 760.933 871.712 796.093C871.974 798.162 870.376 800 868.29 800H234.413C232.327 800 230.729 798.162 230.991 796.093C235.452 760.933 234.151 683.85 179.835 619.499C125.332 554.926 40.8231 541.636 3.74632 543.984C1.73235 544.112 0 542.537 0 540.519V259.481C0 257.463 1.73235 255.888 3.74631 256.016C40.8231 258.364 125.332 245.074 179.835 180.501C234.151 116.15 235.452 39.0672 230.991 3.90723C230.729 1.83759 232.327 0 234.413 0H868.29Z";

/**
 * The team photo clipped to the scalloped shape, with the gold gradient
 * border traced on the same path. Rendered as an inline SVG (clipPath) rather
 * than a CSS mask because CSS masks with these exported SVGs render
 * inconsistently — the notch would not actually cut the photo. The `id`
 * differentiates the desktop/mobile clipPath instances on one page.
 */
function ScallopPhoto({ id, className = "" }) {
  return (
    <svg
      viewBox="0 0 1102.7 800"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <clipPath id={id}>
          <path d={SCALLOP} />
        </clipPath>
        <linearGradient
          id={`${id}-border`}
          x1="551.351"
          y1="0"
          x2="551.351"
          y2="800"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3902F" />
          <stop offset="1" stopColor="#725300" />
        </linearGradient>
      </defs>
      {/* Photo covers the frame (object-cover), left-aligned so the crest and
          sign stay in view; the scallop clip bites the right edge. */}
      <image
        href={evidencePhoto}
        x="0"
        y="0"
        width="1102.7"
        height="800"
        preserveAspectRatio="xMinYMid slice"
        clipPath={`url(#${id})`}
      />
      <path
        d={SCALLOP}
        fill="none"
        stroke={`url(#${id}-border)`}
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
        <ScallopPhoto
          id="ev-scallop-m"
          className="mx-auto aspect-[1102.7/800] w-full max-w-[560px]"
        />
        <EvidenceCard className="mt-6 p-7 sm:p-9" />
      </div>

      {/* Desktop: photo bleeds off the section's left edge (its own left 25%
          sits off-canvas); the scalloped right edge bites into the pale fan,
          and the gold card overlaps its right edge. Figma section 1440x1003. */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] lg:block lg:h-[1003px]">
        {/* Fan of pale-gold ovals (Figma "Group 85", opacity 0.2 baked into
            the svg) — Figma x557,y0, 883x401, source rotated 90deg. Sits
            BEHIND the photo: the scallop notches reveal it as pale cream and
            it extends across the open right side. This IS the "circle" the
            top-right shows — the photo is cut where the circle is. */}
        <div className="pointer-events-none absolute top-0 left-[38.68%] flex h-[39.98%] w-[61.32%] items-center justify-center">
          <img
            src={evidenceFan}
            alt=""
            className="h-[220.2%] w-[45.41%] max-w-none rotate-90"
          />
        </div>

        {/* Photo + border, in the scallop's own 1102.7x800 frame at Figma's
            x-275,y102 (left -19.1%, top 10.17%, of the 1440x1003 section). */}
        <ScallopPhoto
          id="ev-scallop-d"
          className="pointer-events-none absolute top-[10.17%] left-[-19.1%] h-[79.76%] w-[76.58%]"
        />

        <EvidenceCard className="absolute top-[50.05%] left-[38.68%] w-[49.58%] max-w-[560px] p-10" />
      </div>
    </section>
  );
}
