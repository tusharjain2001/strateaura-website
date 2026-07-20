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

// Geometry from Figma node 1434:3089 ("Frame 70", 1440x948). Everything below
// is a share of the 1310px content box (1440 minus the 65px gutters), so the
// composition scales as one piece between lg and the 1440 cap:
//
//   photo  (1434:3091)  924x810 at x:453  ->  70.5% wide, right-aligned
//   bubble (1434:3097)  849x483 at x:65   ->  64.8% wide, 59.6% tall, y 11.6%
//   quote  (1434:3095)  726 wide, centred on the photo, 9.4% off its bottom
//
// The bubble vector is drawn tail-on-the-LEFT and Figma flips it with
// rotate-180, putting the tail on the RIGHT where it pokes into the photo.
// That means the text inset has to clear the tail on the right (pr), not the
// left. Text sizes use clamp() tuned to land exactly on Figma's px at 1440
// (35px title = 2.43vw, 24px body = 1.67vw, 32px quote = 2.22vw) and cap there.
export default function WhyStrateAura() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[65px] lg:py-[70px]">
        <div className="relative">
          {/* Photo — right ~64% column. aspect-ratio (not a fixed height)
              keeps it at Figma's exact 924:810 ratio as the container
              scales between 1024px and the 1440px cap, so it never
              distorts or overflows at in-between widths (1366, 1536...). */}
          <div className="relative overflow-hidden rounded-[4px] lg:ml-auto lg:aspect-[924/810] lg:w-[70.5%]">
            <img
              src={portraitPhoto}
              alt="A StrateAura leadership executive"
              className="h-[280px] w-full object-cover object-[75%_center] sm:h-[380px] lg:absolute lg:inset-0 lg:h-full"
            />
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/50 to-transparent lg:block" />
            {/* Quote bar along the bottom of the photo, centred on it. Figma is
                726px (10.7% inset) at 32px, but in Inter that runs to three
                lines and climbs into the bubble — the quote is bottom-anchored,
                so extra lines grow upward. Widened to an 8% inset at 30px, which
                holds it to Figma's two lines. */}
            <p className="absolute inset-x-4 bottom-4 text-center text-[15px] leading-snug font-bold text-white italic sm:inset-x-10 sm:bottom-6 sm:text-[18px] lg:inset-x-[8%] lg:bottom-[9.4%] lg:text-[clamp(1.125rem,2.08vw,1.875rem)]">
              &ldquo;A good tactic solves a surface problem. A great framework
              reorients how you lead your life.&rdquo;
            </p>
          </div>

          {/* Gold speech-bubble — left ~60% column, overlapping the photo.
              min-height (not a fixed height) so the bubble grows with its
              own content if Inter wraps taller than Figma's Acumin Pro —
              the copy can never overflow the shape. */}
          <div className="relative mt-6 lg:absolute lg:top-[11.6%] lg:left-0 lg:z-10 lg:mt-0 lg:min-h-[59.6%] lg:w-[64.8%]">
            <img
              src={speechBubble}
              alt=""
              className="pointer-events-none absolute inset-0 hidden h-full w-full rotate-180 lg:block"
            />
            {/* Padding percentages all resolve against the bubble's WIDTH (that
                is how CSS percentage padding works, vertical included), so each
                is an offset over the 849px bubble: 8.8% = 75px top/bottom,
                9.4% = 80px left (Figma's text origin).
                The right inset is 20% (679px) rather than Figma's 23.8% (647px):
                the site renders in Inter, not the Acumin Pro the file was drawn
                in, and Inter is wider — at Figma's 567px measure the closing
                paragraph takes a third line, which grows the bubble past its
                483px height and into the quote below. The extra ~32px of measure
                keeps it at two lines while still clearing the tail, which starts
                at 691px (81.4%). */}
            <div className="relative rounded-[4px] bg-gold p-7 sm:p-9 lg:rounded-none lg:bg-transparent lg:p-0 lg:pt-[8.8%] lg:pr-[20%] lg:pb-[8.8%] lg:pl-[9.4%]">
              <h2 className="text-[clamp(1.5rem,2.43vw,2.1875rem)] leading-normal font-bold text-white">
                The Why Behind StrateAura™
              </h2>
              <div className="mt-5 text-[clamp(1.0625rem,1.67vw,1.5rem)] leading-normal text-white lg:mt-[28px]">
                <p className="font-medium">
                  We build systems of thought that help you:
                </p>
                {/* Figma sets these on consecutive single-spaced lines — no gap
                    between items, one blank line before and after the list. */}
                <ul className="mt-4 space-y-2 lg:mt-[28px] lg:space-y-0 lg:pl-[8px]">
                  {POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 lg:gap-[15px]">
                      <Sparkle className="mt-2 size-[10px] shrink-0 text-white lg:mt-[0.5em] lg:size-[13px]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-normal lg:mt-[28px]">
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
