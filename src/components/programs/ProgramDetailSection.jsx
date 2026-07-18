import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";

const THEME = {
  gold: {
    wash: "bg-gradient-to-b from-white to-[#c99400]/25",
    heading: "text-gold",
    overlay: "bg-gradient-to-b from-gold to-gold-dark",
    cta: "goldOutline",
  },
  blue: {
    wash: "bg-gradient-to-b from-white to-navy-2/15",
    heading: "text-navy-2",
    overlay: "bg-gradient-to-b from-navy to-blue",
    cta: "navyOutline",
  },
};

/**
 * One "individual program" section: photo + overlapping highlight card on one
 * side, copy + CTA on the other. Reused for all five programs in the catalog
 * (Wellness-Centric Leadership, Strategic Marketing in Higher Education,
 * Integrated Marketing Strategy, Digital Marketing with Purpose, Marketing in
 * the Age of Digital Transformation) since they share one Figma layout that
 * simply mirrors left/right and swaps the gold/blue palette.
 */
export default function ProgramDetailSection({
  id,
  theme = "gold",
  imageSide = "right",
  photo,
  photoAlt,
  photoPosition = "center",
  eyebrow,
  paragraph,
  heading,
  bullets,
  suitedFor,
  ctaLabel,
  ctaHref = "#contact",
}) {
  const t = THEME[theme] ?? THEME.gold;
  const imageOnRight = imageSide === "right";

  return (
    <section
      id={id}
      className={`relative overflow-hidden scroll-mt-[80px] lg:scroll-mt-[120px] ${t.wash}`}
    >
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-5 py-14 sm:px-8 lg:min-h-[820px] lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:py-16 xl:px-[75px]">
        {/* Copy column */}
        <div
          className={`relative z-10 flex flex-col justify-center ${
            imageOnRight ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"
          } lg:max-w-[520px]`}
        >
          <h2
            className={`text-[clamp(1.5rem,2.6vw,2.1875rem)] leading-[1.2] font-bold ${t.heading}`}
          >
            {heading}
          </h2>

          <div className="mt-6 space-y-4 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-black/60">
            <p className="font-bold">{eyebrow}</p>
            <p>{paragraph}</p>
          </div>

          <p className="mt-8 text-[clamp(1.125rem,1.6vw,1.375rem)] font-bold text-black/60">
            This program is suited for:
          </p>
          <p className="mt-2 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal font-light text-black/60">
            {suitedFor}
          </p>

          <div className="mt-8">
            <CtaPill as="a" href={ctaHref} variant={t.cta} size="lg">
              {ctaLabel}
            </CtaPill>
          </div>
        </div>

        {/* Photo + highlight card column */}
        <div className={`relative ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
          <div
            className={`relative mx-auto aspect-[722/813] w-full max-w-[480px] overflow-hidden rounded-[28px] sm:max-w-[560px] lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none ${
              imageOnRight
                ? "lg:rounded-tl-[42%] lg:rounded-br-[42%] lg:rounded-tr-none lg:rounded-bl-[4px]"
                : "lg:rounded-tl-[42%] lg:rounded-tr-[42%] lg:rounded-bl-none lg:rounded-br-[4px]"
            }`}
          >
            <img
              src={photo}
              alt={photoAlt}
              className="size-full object-cover"
              style={{ objectPosition: photoPosition }}
            />
          </div>

          <div
            className={`relative mt-6 rounded-[4px] p-6 sm:p-8 lg:absolute lg:bottom-0 lg:mt-0 lg:w-[88%] ${
              imageOnRight ? "lg:-left-[16%]" : "lg:-right-[16%]"
            } ${t.overlay}`}
          >
            <p className="text-[clamp(1.125rem,1.6vw,1.375rem)] font-bold text-white">
              In this program, you will:
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-[clamp(1rem,1.3vw,1.25rem)] leading-normal font-light text-white"
                >
                  <Sparkle className="mt-1.5 size-3 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
