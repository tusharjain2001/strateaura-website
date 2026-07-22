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
    wash: "bg-gradient-to-b from-[#fffdf7] to-navy-2/20",
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

  // Figma 1638:3096 (1440 reference). The image is 722 wide (50.14% of the
  // frame) and hugs the frame edge; the copy block starts 91px past the image
  // and is 485 wide, with the body/CTA indented a further 89px at 407 wide.
  // When the image is on the right the whole thing mirrors, so the copy blocks
  // are right-aligned against their column instead.
  const copyPad = imageOnRight ? "lg:order-1 lg:pr-[91px]" : "lg:order-2 lg:pl-[91px]";
  const blockOffset = imageOnRight ? "lg:ml-auto lg:mr-[89px]" : "lg:ml-[89px]";
  const headingAlign = imageOnRight ? "lg:ml-auto" : "";

  // Overlapping "In this program, you will:" card (673 x 297 at 1440, so 93.2%
  // of the image width), sitting 169px in from the image's outer edge — which
  // leaves it hanging 120px past the image's inner edge — and 97px up from the
  // image's foot. Expressed as percentages of the image so it tracks any width.
  const boxPosition = `lg:absolute lg:bottom-[11%] lg:mt-0 lg:w-[93.2%] ${
    imageOnRight ? "lg:right-[23.4%] lg:left-auto" : "lg:left-[23.4%] lg:right-auto"
  }`;

  const highlightBox = boxImage ? (
    <div className={`relative mt-6 ${boxPosition}`}>
      <img
        src={boxImage}
        alt={`In this program, you will: ${bullets.join("; ")}.`}
        className="w-full"
      />
    </div>
  ) : (
    <div
      className={`relative mt-6 rounded-[4px] p-6 sm:p-8 ${boxPosition} ${t.overlay}`}
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
      {/* Figma vertical rhythm at 1440: heading top 122, body +47, "suited
          for" +44, its copy +15, CTA +94, image top 126 and 15px of foot. */}
      <div
        className={`relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-5 py-14 sm:px-8 lg:gap-0 lg:px-0 lg:pt-[122px] lg:pb-[15px] ${
          imageOnRight ? "lg:grid-cols-[1fr_50.14%]" : "lg:grid-cols-[50.14%_1fr]"
        }`}
      >
        {/* Copy column */}
        <div className={`relative z-10 flex flex-col ${copyPad}`}>
          <h2
            className={`text-[clamp(1.5rem,2.6vw,2.1875rem)] leading-[1.2] font-bold lg:max-w-[485px] ${headingAlign} ${t.heading}`}
          >
            {Array.isArray(heading)
              ? heading.map((line, i) => (
                  <span key={i} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))
              : heading}
          </h2>

          {/* Figma sets eyebrow and paragraph as one text block separated by a
              blank line, i.e. a full 24px line of space. */}
          <div
            className={`mt-6 space-y-6 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-black/60 lg:mt-[47px] lg:max-w-[407px] ${blockOffset}`}
          >
            <p className="font-bold">{eyebrow}</p>
            <p>{paragraph}</p>
          </div>

          <p
            className={`mt-8 text-[clamp(1.125rem,1.8vw,1.5625rem)] font-bold text-black/60 lg:mt-[44px] lg:max-w-[407px] ${blockOffset}`}
          >
            This program is suited for:
          </p>
          <p
            className={`mt-2 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal font-light text-black/60 lg:mt-[15px] lg:max-w-[407px] ${blockOffset}`}
          >
            {suitedFor}
          </p>

          <div className={`mt-8 lg:mt-[94px] lg:w-fit ${blockOffset}`}>
            <CtaPill as="a" href={ctaHref} variant={t.cta} size="lg">
              {ctaLabel}
            </CtaPill>
          </div>
        </div>

        {/* Photo + highlight card column. The image fills the 722px column and
            sits flush against the frame edge, 4px below the heading's top. Per
            the page convention the 1440 content block stays centred above that
            width — only the section wash bleeds full-bleed. */}
        <div
          className={`relative lg:pt-[4px] ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}
        >
          {maskedPhoto ? (
            /* Pre-masked photo exported from Figma (the arc silhouette is baked
               into the transparent PNG), so it is placed at its natural aspect —
               not CSS-clipped or cover-cropped. The highlight box is anchored to
               this tight wrapper so it tracks the image at any width. */
            <div className="relative mx-auto w-full max-w-[480px] sm:max-w-[560px] lg:mx-0 lg:max-w-none">
              <img src={maskedPhoto} alt={photoAlt} className="block w-full" />
              {highlightBox}
            </div>
          ) : (
            <div className="relative mx-auto w-full max-w-[480px] sm:max-w-[560px] lg:mx-0 lg:max-w-none">
              {/* Figma 1638:3098 — 722x884 with a 361px (half-width) arch on
                  both top corners and a 4px foot on the inner side. */}
              <div
                className={`relative aspect-[722/884] w-full overflow-hidden rounded-[28px] lg:rounded-t-[361px] ${
                  imageOnRight ? "lg:rounded-br-[4px] lg:rounded-bl-none" : "lg:rounded-bl-[4px] lg:rounded-br-none"
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
