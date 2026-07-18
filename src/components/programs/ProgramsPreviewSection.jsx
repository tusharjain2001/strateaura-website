import previewArrow from "../../assets/programs/preview-card-arrow.svg";
import decoRings from "../../assets/programs/preview-card-deco-rings.svg";
import decoBlob from "../../assets/programs/preview-card-deco-blob.svg";
import decoWave from "../../assets/programs/preview-card-deco-wave.svg";

const PROGRAMS = [
  {
    label: "Wellness-Centric Leadership",
    href: "#wellness-centric-leadership",
    deco: decoRings,
    decoType: "rings",
  },
  {
    label: "Strategic Marketing in Higher Education",
    href: "#strategic-marketing-higher-education",
    deco: decoBlob,
    decoType: "blob",
  },
  {
    label: "Integrated Marketing Strategy masterclass",
    href: "#integrated-marketing-strategy",
    deco: decoRings,
    decoType: "rings",
  },
  {
    label: "Digital Marketing with Purpose",
    href: "#digital-marketing-purpose",
    deco: decoBlob,
    decoType: "blob",
  },
  {
    label: "Marketing in the Age of Digital Transformation",
    href: "#digital-transformation",
    deco: decoWave,
    decoType: "wave",
  },
];

// Per-shape geometry lifted from Figma node 1247:910 (each card ~223x193px).
// The watermarks are fixed-size ornaments anchored to a card edge/corner in
// Figma, not proportionally-scaled fills, so fixed px keeps them faithful
// regardless of the card's actual fluid width.
const DECO_LAYOUT = {
  // "Group 69": a row of concentric rings, natural size 192.715x70.812,
  // rotated -90deg + flipped to a 70.812x192.715 strip flush to the card's
  // top-right edge (full card height).
  rings: {
    wrap: "absolute top-0 right-0 h-[192.715px] w-[70.812px] flex items-center justify-center overflow-hidden",
    img: "h-[70.812px] w-[192.715px] -rotate-90 -scale-y-100 max-w-none",
  },
  // "Vector 7" blob, bleeding past the card's bottom-right corner.
  blob: {
    wrap: "absolute -right-[20.4px] -bottom-[24.79px] h-[124.745px] w-[122.346px]",
    img: "size-full",
  },
  // "Vector 4" wave, flush to the card's bottom edge, bleeding past the
  // right edge.
  wave: {
    wrap: "absolute bottom-0 -right-[41.466px] h-[82.364px] w-[187.118px]",
    img: "size-full -scale-y-100",
  },
};

export default function ProgramsPreviewSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:py-[92px] xl:px-[95px]">
        <h2 className="text-center text-[clamp(1.75rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
          Our Marketing &amp; Leadership Programs.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[57px] lg:grid-cols-5">
          {PROGRAMS.map((p) => {
            const layout = DECO_LAYOUT[p.decoType];
            return (
              <a
                key={p.label}
                href={p.href}
                className="group relative flex min-h-[193px] flex-col justify-between overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-5 transition-transform motion-safe:hover:-translate-y-1"
              >
                <p className="relative z-10 text-[clamp(0.9375rem,1.4vw,1.125rem)] leading-snug font-bold text-white">
                  {p.label}
                </p>
                {/* The svg stretches (preserveAspectRatio=none) — both
                    dimensions must be explicit to keep the 20.8:11.8 ratio. */}
                <img src={previewArrow} alt="" className="relative z-10 h-[12px] w-5" />
                <div className={`pointer-events-none z-0 ${layout.wrap}`}>
                  <img src={p.deco} alt="" className={layout.img} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
