import portraitPhoto from "../../assets/frameworks/why-portrait-photo.jpg";
import speechBubble from "../../assets/frameworks/why-speech-bubble.svg";
import { Sparkle } from "../ui/Icons";

const POINTS = [
  <>
    <strong className="font-bold">Access wisdom</strong> already inside you
  </>,
  "Turn noise into signal",
  <>
    Move with <strong className="font-bold">presence instead of panic</strong>
  </>,
  "And align action with who you actually are",
];

// Geometry from Figma node 1434:3089 ("Frame 70", 1440x948): the photo
// (node 1434:3091) is 924x810 at x:453 — i.e. it occupies the RIGHT ~64.2%
// of the section, NOT a full-bleed background. The speech-bubble card
// (node 1434:3096) is 795x483 at x:65,y:163 — the LEFT ~60%, overlapping
// the photo's left edge. Both are expressed as %/aspect-ratio of the
// max-w-[1440px] container (not the raw viewport) so they scale cleanly
// between the lg breakpoint and the 1440 cap without distorting.
export default function WhyStrateAura() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[65px] lg:py-[70px]">
        <div className="relative">
          {/* Photo — right ~64% column. aspect-ratio (not a fixed height)
              keeps it at Figma's exact 924:810 ratio as the container
              scales between 1024px and the 1440px cap, so it never
              distorts or overflows at in-between widths (1366, 1536...). */}
          <div className="relative overflow-hidden rounded-[4px] lg:ml-auto lg:aspect-[924/810] lg:w-[64.2%]">
            <img
              src={portraitPhoto}
              alt="A StrateAura leadership executive"
              className="h-[280px] w-full object-cover object-[75%_center] sm:h-[380px] lg:absolute lg:inset-0 lg:h-full"
            />
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/50 to-transparent lg:block" />
            {/* Quote bar along the bottom of the photo, centred on it. */}
            <p className="absolute inset-x-4 bottom-4 text-center text-[15px] leading-snug font-bold text-white italic sm:inset-x-10 sm:bottom-6 sm:text-[18px] lg:inset-x-[11%] lg:bottom-[8%] lg:text-[clamp(1.125rem,1.7vw,1.5rem)]">
              &ldquo;A good tactic solves a surface problem. A great framework
              reorients how you lead your life.&rdquo;
            </p>
          </div>

          {/* Gold speech-bubble — left ~60% column, overlapping the photo.
              min-height (not a fixed height) so the bubble grows with its
              own content if Inter wraps taller than Figma's Acumin Pro —
              the copy can never overflow the shape. */}
          <div className="relative mt-6 lg:absolute lg:top-[17.2%] lg:left-0 lg:z-10 lg:mt-0 lg:min-h-[51%] lg:w-[60%]">
            <img
              src={speechBubble}
              alt=""
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            />
            {/* The bubble svg's tail occupies its left 18.6% (panel starts at
                x=158 of the 849 viewBox) — the text inset must clear it. */}
            <div className="relative rounded-[4px] bg-gold p-7 sm:p-9 lg:rounded-none lg:bg-transparent lg:p-0 lg:pt-16 lg:pr-16 lg:pb-14 lg:pl-[calc(18.6%+40px)]">
              <h2 className="text-[clamp(1.5rem,2.5vw,2.1875rem)] leading-normal font-bold text-white">
                The Why Behind StrateAura™
              </h2>
              <div className="mt-5 text-[clamp(1.0625rem,1.6vw,1.5rem)] leading-normal text-white">
                <p className="font-medium">
                  We build systems of thought that help you:
                </p>
                <ul className="mt-4 space-y-2">
                  {POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkle className="mt-2 size-[10px] shrink-0 text-white" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  You don&rsquo;t need more tools. You need better systems for
                  knowing yourself and leading from there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
