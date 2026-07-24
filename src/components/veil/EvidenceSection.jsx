import CtaPill from "../ui/CtaPill";
import evidencePhoto from "../../assets/veil/evidence-photo.jpg";
import evidenceMasked from "../../assets/veil/evidence-photo-masked.png";
import evidenceFan from "../../assets/veil/evidence-fan-v2.svg";
import evidenceSparkle from "../../assets/veil/evidence-sparkle-v2.svg";

// ---------------------------------------------------------------------------
// Mobile keeps the previous scallop treatment (the mobile Figma variant is
// unchanged); desktop below uses the new composite export.
// ---------------------------------------------------------------------------

// Scallop shapes exported from Figma "Mask group" (node 1221:320), viewBox
// 0..828 x 0..800. The clip path and the (inset) border path are the exact
// vectors from the design so the photo edge and the gold stroke coincide.
const SCALLOP_CLIP =
  "M593.29 0C595.376 0 596.974 1.8376 596.711 3.90724C592.251 39.0672 593.552 116.15 647.867 180.501C702.37 245.074 786.88 258.364 823.956 256.016C825.97 255.888 827.703 257.463 827.703 259.481V540.519C827.703 542.537 825.97 544.112 823.956 543.984C786.88 541.636 702.37 554.926 647.867 619.499C593.552 683.85 592.251 760.933 596.711 796.093C596.974 798.162 595.376 800 593.29 800H-40.5871C-42.6734 800 -44.2714 798.162 -44.0088 796.093C-39.5481 760.933 -40.8492 683.85 -95.1647 619.499C-149.668 554.926 -234.177 541.636 -271.254 543.984C-273.268 544.112 -275 542.537 -275 540.519V259.481C-275 257.463 -273.268 255.888 -271.254 256.016C-234.177 258.364 -149.668 245.074 -95.1647 180.501C-40.8492 116.15 -39.5481 39.0672 -44.0088 3.90723C-44.2714 1.83759 -42.6734 0 -40.5872 0H593.29Z";
const SCALLOP_BORDER =
  "M591.088 5.40527C586.862 42.2815 589.162 119.329 643.736 183.987C698.746 249.16 783.208 263.345 822.297 261.519V538.48C783.208 536.654 698.746 550.84 643.736 616.013C589.162 680.671 586.862 757.718 591.088 794.595H-38.3857C-34.1595 757.718 -36.4591 680.671 -91.0342 616.013C-146.044 550.84 -230.506 536.654 -269.595 538.48V261.519C-230.506 263.346 -146.044 249.16 -91.0342 183.987C-36.4591 119.329 -34.1595 42.2815 -38.3857 5.40527H591.088Z";

/** Scallop-clipped photo for the mobile block (unchanged treatment). */
function ScallopPhoto({ id, viewBox = "0 0 828 800", className = "" }) {
  return (
    <svg viewBox={viewBox} preserveAspectRatio="none" className={className}>
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

const EVIDENCE_COPY = (
  <>
    <p>The science behind VEIL.</p>
    <p>
      Internationally validated psychometric instruments · All with
      Arabic-validated versions for Gulf professional populations
    </p>
    <p>
      Pre and post measurement · Quantified evidence of change at programme
      close
    </p>
    <p className="mt-4 lg:mt-[19px]">
      Evidence-based curriculum grounded in peer-reviewed research
    </p>
    <p className="mt-4 lg:mt-[19px]">VEIL measures change across:</p>
    <p>
      Perceived Stress · Burnout · Sleep Quality · Self-Compassion ·
      Leadership Confidence
    </p>
  </>
);

/** Mobile card (previous design, unchanged). */
function EvidenceCard({ className = "" }) {
  return (
    <div
      className={`relative z-10 rounded-[4px] bg-gradient-to-b from-[#dfbc5a] to-[#a07e22] ${className}`}
    >
      <h2 className="text-[clamp(1.5rem,2.63vw,2.3643rem)] leading-[1.2] font-bold text-white">
        The Evidence
      </h2>
      <div className="mt-3 text-[clamp(0.9375rem,1.25vw,1.123rem)] leading-normal font-medium text-white">
        {EVIDENCE_COPY}
      </div>
      <CtaPill as="a" href="/webinar" variant="creamFilled" size="xs" className="mt-6">
        Join the Free Live Webinar
      </CtaPill>
    </div>
  );
}

export default function EvidenceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffdf7] to-[rgba(231,197,101,0.25)]">
      {/* Mobile/tablet: simple stack (previous treatment, unchanged). */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:hidden">
        <ScallopPhoto
          id="ev-scallop-m"
          viewBox="-275 0 1103 800"
          className="mx-auto aspect-[1103/800] w-full max-w-[560px]"
        />
        <EvidenceCard className="mt-6 p-7 sm:p-9" />
      </div>

      {/* Desktop — Figma 1755:1574 (1440x873): masked team photo flush to the
          left edge (composite export with the gold border baked in), pale
          ellipse fan across the top right, and the gold card at x:497/y:255
          overlapping the photo's curve. */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] lg:block lg:h-[873px]">
        {/* Ellipse fan (Figma Group 85): x:557..1440, 401 tall, opacity baked. */}
        <div className="pointer-events-none absolute top-0 left-[38.68%] h-[45.93%] w-[61.32%]">
          <img src={evidenceFan} alt="" className="h-full w-full" />
        </div>

        {/* Masked photo: the export's drawn bounds start at the viewport-left
            edge (the Figma node bleeds 208px off-canvas). */}
        <img
          src={evidenceMasked}
          alt="The VEIL team at University of Birmingham Dubai"
          className="pointer-events-none absolute top-[100px] left-0 h-[678px] w-[727px] max-w-none"
        />

        {/* Gold card — 574.7x~388 at x:497/y:255 (Figma 1755:1585). */}
        <div className="absolute top-[255px] left-[34.51%] z-10 w-[39.91%] rounded-[3px] bg-gradient-to-b from-[#dfbc5a] to-[#a07e22] px-[26px] py-[40px]">
          <h2 className="text-[30px] leading-[1.2] font-bold text-white">
            The Evidence
          </h2>
          <div className="mt-[7px] text-[16px] leading-[1.17] font-medium text-white">
            {EVIDENCE_COPY}
          </div>
          <CtaPill
            as="a"
            href="/webinar"
            variant="creamFilled"
            size="xs"
            className="mt-[7px]"
          >
            Join the Free Live Webinar
          </CtaPill>
        </div>

        {/* Gold sparkle straddling the card's top-right corner. The card sits
            at top:255 with its right edge at 74.42% (left 34.51% + width
            39.91%), so the 38.6px sparkle is centred on that corner point. */}
        <img
          src={evidenceSparkle}
          alt=""
          className="pointer-events-none absolute top-[236px] left-[73.08%] w-[38.6px]"
        />
      </div>
    </section>
  );
}
