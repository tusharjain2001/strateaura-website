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

  // Figma 1638:3096 (image left) and 1638:3116 (image right), both on a 1440
  // frame. The image is always 722 wide (50.14%) and flush with the frame edge.
  // The copy blocks align to the frame's *outer* edge — 107px in when the copy
  // sits on the left, ~136px when it sits on the right — with the heading 485
  // wide and everything below it 407. Widths are explicit rather than max-w:
  // inside a flex column an auto margin makes a block shrink to its text, which
  // knocks short lines like "This program is suited for:" out of alignment.
  const copyCol = imageOnRight
    ? "lg:order-1 lg:items-start lg:pl-[107px] lg:pr-[40px]"
    : "lg:order-2 lg:items-end lg:pr-[136px] lg:pl-[40px]";
  const blockWidth = "lg:w-[407px] lg:max-w-full";

  // Overlapping "In this program, you will:" card. Each program exports its own
  // SVG (653-673 wide, i.e. ~92% of the image), hung ~17% of the image width
  // past its inner edge and ~12% up from its foot.
  const boxPosition = `lg:absolute lg:bottom-[12%] lg:mt-0 lg:w-[92%] ${
    imageOnRight ? "lg:left-[-17%] lg:right-auto" : "lg:right-[-17%] lg:left-auto"
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
      {/* The image sits 126-131px below the section top in both frames with a
          ~14px foot. The copy is centred against the image and nudged 36px up
          (a 72px bottom pad under justify-center), which lands the heading at
          Figma's y=122 for the 884-tall image and y=176 for the 813-tall one. */}
      <div
        className={`relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-5 py-14 sm:px-8 lg:gap-0 lg:px-0 lg:pt-[128px] lg:pb-[14px] ${
          imageOnRight ? "lg:grid-cols-[1fr_50.14%]" : "lg:grid-cols-[50.14%_1fr]"
        }`}
      >
        {/* Copy column */}
        <div
          className={`relative z-10 flex flex-col lg:justify-center lg:pb-[72px] ${copyCol}`}
        >
          <h2
            className={`text-[clamp(1.5rem,2.6vw,2.1875rem)] leading-[1.2] font-bold lg:w-[485px] lg:max-w-full ${t.heading}`}
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
            className={`mt-6 space-y-6 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-black/60 lg:mt-[44px] ${blockWidth}`}
          >
            <p className="font-bold">{eyebrow}</p>
            <p>{paragraph}</p>
          </div>

          <p
            className={`mt-8 text-[clamp(1.125rem,1.8vw,1.5625rem)] font-bold text-black/60 lg:mt-[40px] ${blockWidth}`}
          >
            This program is suited for:
          </p>
          <p
            className={`mt-2 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal font-light text-black/60 lg:mt-[15px] ${blockWidth}`}
          >
            {suitedFor}
          </p>

          <div className="mt-8 w-fit lg:mt-[40px]">
            <CtaPill as="a" href={ctaHref} variant={t.cta} size="lg">
              {ctaLabel}
            </CtaPill>
          </div>
        </div>

        {/* Photo + highlight card column. The image fills the 722px column and
            sits flush against the frame edge, 4px below the heading's top. Per
            the page convention the 1440 content block stays centred above that
            width — only the section wash bleeds full-bleed. */}
        <div className={`relative ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
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
