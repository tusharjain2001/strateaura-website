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
  boxImage,
  maskedPhoto,
  suitedFor,
  ctaLabel,
  ctaHref = "#contact",
}) {
  const t = THEME[theme] ?? THEME.gold;
  const imageOnRight = imageSide === "right";

  // Overlapping "In this program, you will:" card. Either the Figma-exported
  // SVG (text baked in) or a constructed gradient card. Positioned to overlap
  // the image's bottom-inner corner and hang toward the copy, matching Figma.
  const highlightBox = boxImage ? (
    <div
      className={`relative mt-6 lg:absolute lg:bottom-[10%] lg:mt-0 lg:w-[653px] lg:max-w-[calc(100%-0.5rem)] xl:max-w-none ${
        imageOnRight
          ? "lg:left-1 lg:right-auto xl:left-[-124px]"
          : "lg:right-1 lg:left-auto xl:right-[-120px]"
      }`}
    >
      <img
        src={boxImage}
        alt={`In this program, you will: ${bullets.join("; ")}.`}
        className="w-full"
      />
    </div>
  ) : (
    <div
      className={`relative mt-6 rounded-[4px] p-6 sm:p-8 lg:absolute lg:bottom-[11%] lg:mt-0 lg:w-[653px] lg:max-w-[calc(100%-0.5rem)] xl:max-w-none ${
        imageOnRight
          ? "lg:left-1 lg:right-auto xl:left-[-124px]"
          : "lg:right-1 lg:left-auto xl:right-[-120px]"
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
  );

  return (
    <section
      id={id}
      className={`relative overflow-hidden scroll-mt-[80px] lg:scroll-mt-[120px] ${t.wash}`}
    >
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-5 py-14 sm:px-8 lg:min-h-[820px] lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:py-16 xl:px-[75px]">
        {/* Copy column */}
        <div
          className={`relative z-10 flex flex-col justify-center lg:max-w-[520px] ${
            imageOnRight ? "lg:order-1" : "lg:order-2 lg:justify-self-end"
          }`}
        >
          <h2
            className={`text-[clamp(1.5rem,2.6vw,2.1875rem)] leading-[1.2] font-bold ${t.heading}`}
          >
            {Array.isArray(heading)
              ? heading.map((line, i) => (
                  <span key={i} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))
              : heading}
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
          {maskedPhoto ? (
            /* Pre-masked photo exported from Figma (the rounded/arc silhouette is
               baked into the transparent PNG), so it is placed at its natural
               722x813 aspect — not CSS-clipped or cover-cropped — and bled to the
               outer screen edge. The highlight box is anchored to this tight
               wrapper so it tracks the image at any width. */
            <div
              className={`flex justify-center lg:h-full ${
                imageOnRight
                  ? "lg:justify-end lg:mr-[-32px] xl:mr-[calc(min(50vw,720px)-50vw-75px)]"
                  : "lg:justify-start lg:ml-[-32px] xl:ml-[calc(min(50vw,720px)-50vw-75px)]"
              }`}
            >
              <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:h-full lg:w-fit lg:max-w-none">
                <img
                  src={maskedPhoto}
                  alt={photoAlt}
                  className="block w-full lg:h-full lg:w-auto"
                />
                {highlightBox}
              </div>
            </div>
          ) : (
            <>
              <div
                className={`relative mx-auto aspect-[722/813] w-full max-w-[480px] overflow-hidden rounded-[28px] sm:max-w-[560px] lg:mx-0 lg:aspect-auto lg:h-full lg:w-auto lg:max-w-none ${
                  imageOnRight
                    ? "lg:mr-[-32px] xl:mr-[calc(min(50vw,720px)-50vw-75px)] lg:rounded-tl-[42%] lg:rounded-br-[42%] lg:rounded-tr-none lg:rounded-bl-[4px]"
                    : "lg:ml-[-32px] xl:ml-[calc(min(50vw,720px)-50vw-75px)] lg:rounded-tr-[42%] lg:rounded-tl-[42%] lg:rounded-br-none lg:rounded-bl-[4px]"
                }`}
              >
                <img
                  src={photo}
                  alt={photoAlt}
                  className="size-full object-cover"
                  style={{ objectPosition: photoPosition }}
                />
              </div>
              {highlightBox}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
