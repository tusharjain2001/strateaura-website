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
    heading: "text-navy",
    overlay: "bg-gradient-to-b from-navy to-blue",
    cta: "navyOutline",
  },
};

/**
 * One "individual program" section — Figma redesign 1755:2156.
 *
 * Layout (lg+ only; the desktop tree is `lg:block`): a copy column and a ~554px
 * arched photo sit at opposite edges of the ~1124px content band. Each program
 * ships its own corner-radius recipe (`imageRadius`), lifted verbatim from its
 * Figma node, so no two arches match. The "In this program, you will:" panel is
 * a solid gold/navy gradient box that overhangs the photo's inner edge toward
 * the copy. Type is a flat 30px heading / 16px body (no fluid scaling) to match
 * the board exactly.
 */
export default function ProgramDetailSection({
  id,
  theme = "gold",
  imageSide = "right",
  photo,
  photoAlt,
  photoPosition = "center",
  imageRadius = "",
  copyWidth = 457,
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

  // The gradient panel hangs off the photo's inner edge (toward the copy) and
  // sits in the lower third. Figma bleeds it ~20% past the left edge for
  // image-right programs and ~27% past the right edge for image-left ones.
  const overlayPos = imageOnRight
    ? "left-[-18%] right-auto"
    : "right-[-18%] left-auto";

  const overlay = (
    <div
      className={`absolute bottom-[8%] z-10 w-[109%] rounded-[4px] px-[24px] py-[24px] ${overlayPos} ${t.overlay}`}
    >
      <p className="ml-[20px] text-[20px] leading-normal font-bold text-white">
        In this program, you will:
      </p>
      <ul className="mt-[9px] flex flex-col gap-[2px]">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-[6px] text-[16px] leading-normal font-light text-white"
          >
            <Sparkle className="mt-[3px] size-[14px] shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const imageBlock = (
    <div className="relative w-[49%] max-w-[554px] shrink-0">
      <div className={`aspect-[554/623] w-full overflow-hidden ${imageRadius}`}>
        <img
          src={photo}
          alt={photoAlt}
          className="size-full object-cover"
          style={{ objectPosition: photoPosition }}
        />
      </div>
      {overlay}
    </div>
  );

  const copyBlock = (
    <div className="flex-1" style={{ maxWidth: copyWidth }}>
      <h2 className={`text-[30px] leading-normal font-bold ${t.heading}`}>
        {heading}
      </h2>

      <div className="mt-[25px] flex flex-col gap-[16px] text-[16px] leading-normal text-black/60">
        <div>
          <p className="font-bold">{eyebrow}</p>
          <p className="mt-[16px]">{paragraph}</p>
        </div>
        <p className="font-bold">This program is suited for:</p>
        <p className="font-light">{suitedFor}</p>
      </div>

      <div className="mt-[25px] w-fit">
        <CtaPill as="a" href={ctaHref} variant={t.cta} size="compact">
          {ctaLabel}
        </CtaPill>
      </div>
    </div>
  );

  return (
    <section
      id={id}
      className={`relative scroll-mt-[80px] lg:scroll-mt-[120px] ${t.wash}`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-[40px] px-8 py-[90px] xl:px-[158px]">
        {imageOnRight ? (
          <>
            {copyBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {copyBlock}
          </>
        )}
      </div>
    </section>
  );
}
