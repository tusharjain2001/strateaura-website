import previewArrow from "../../assets/programs/preview-card-arrow.svg";
import decoRings from "../../assets/programs/preview-card-deco-rings.svg";
import decoBlob from "../../assets/programs/preview-card-deco-blob.svg";
import decoWave from "../../assets/programs/preview-card-deco-wave.svg";

const PROGRAMS = [
  { label: "Wellness-Centric Leadership", href: "#wellness-centric-leadership", deco: decoRings },
  {
    label: "Strategic Marketing in Higher Education",
    href: "#strategic-marketing-higher-education",
    deco: decoBlob,
  },
  {
    label: "Integrated Marketing Strategy masterclass",
    href: "#integrated-marketing-strategy",
    deco: decoRings,
  },
  { label: "Digital Marketing with Purpose", href: "#digital-marketing-purpose", deco: decoBlob },
  {
    label: "Marketing in the Age of Digital Transformation",
    href: "#digital-transformation",
    deco: decoWave,
  },
];

export default function ProgramsPreviewSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:py-[92px] xl:px-[95px]">
        <h2 className="text-center text-[clamp(1.75rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
          Our Marketing &amp; Leadership Programs.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[57px] lg:grid-cols-5">
          {PROGRAMS.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="group relative flex min-h-[193px] flex-col justify-between overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-5 transition-transform motion-safe:hover:-translate-y-1"
            >
              <p className="relative z-10 text-[clamp(0.9375rem,1.4vw,1.125rem)] leading-snug font-bold text-white">
                {p.label}
              </p>
              <img src={previewArrow} alt="" className="relative z-10 w-5" />
              <img
                src={p.deco}
                alt=""
                className="pointer-events-none absolute right-0 bottom-0 w-2/3"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
