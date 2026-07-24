import portraitPhoto from "../../assets/frameworks/why-photo-composite.jpg";
import speechBubble from "../../assets/frameworks/why-speech-bubble-gold.svg";
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

// Geometry from Figma node 1755:3161 ("Frame 70", 1440x796). Everything is a
// share of the 1440 frame so the composition scales as one piece between lg
// and the 1440 cap:
//
//   photo  (1755:3163)  671.3x620.5 at x:589.5/y:88  ->  46.62% wide at 40.94%
//   bubble (1755:3169)  606x339 at x:191.6/y:175.5   ->  42.08% wide
//   quote  (1755:3167)  527 wide, centred on the photo, 9.4% off its bottom
//
// The photo is the Figma composite export (crop + dark bottom scrim baked in).
//
// The bubble vector is drawn tail-on-the-LEFT with gold fill baked in, and
// Figma flips it with rotate-180, putting the tail on the RIGHT where it pokes
// into the photo. The wrapper is NOT aspect-locked: the SVG stretches
// (preserveAspectRatio="none") to the text's height, so Inter wrapping taller
// than the design's Acumin Pro can never overflow the shape.
export default function WhyStrateAura() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-0 lg:pt-[88px] lg:pb-[88px]">
        <div className="relative">
          {/* Photo — right column. aspect-ratio (not a fixed height) keeps it
              at Figma's exact 708:620 ratio as the container scales between
              1024px and the 1440px cap, so it never distorts or overflows at
              in-between widths (1366, 1536...). */}
          <div className="relative overflow-hidden rounded-[3px] lg:ml-[40.94%] lg:aspect-[671/620] lg:w-[46.62%]">
            <img
              src={portraitPhoto}
              alt="A StrateAura leadership executive"
              className="h-[280px] w-full object-cover sm:h-[380px] lg:absolute lg:inset-0 lg:h-full"
            />
            {/* Quote bar along the bottom of the photo, centred on it:
                556 wide (10.7% inset each side), 20px Bold Italic, bottom
                edge 9.4% off the photo bottom. */}
            <p className="absolute inset-x-4 bottom-4 text-center text-[15px] leading-snug font-bold text-white italic sm:inset-x-10 sm:bottom-6 sm:text-[18px] lg:inset-x-[10.7%] lg:bottom-[9.4%] lg:text-[20px] lg:leading-[1.11]">
              &ldquo;A good tactic solves a surface problem. A great framework
              reorients how you lead your life.&rdquo;
            </p>
          </div>

          {/* Gold speech-bubble — left column, overlapping the photo. */}
          {/* top is % of the photo-driven wrapper (starts at y:88): the
              bubble's 175.5px frame top is 87.5px in = 14.1% of 620. */}
          <div className="relative mt-6 lg:absolute lg:top-[14.1%] lg:left-[13.3%] lg:z-10 lg:mt-0 lg:w-[42.08%]">
            <img
              src={speechBubble}
              alt=""
              className="pointer-events-none absolute top-0 left-0 hidden h-full w-[98.24%] rotate-180 lg:block"
            />
            {/* Padding percentages all resolve against the bubble's WIDTH
                (that is how CSS percentage padding works, vertical included),
                so each is an offset over the 606px bubble: 9.5% = 58px top,
                10.64% = 64.5px left, 17.64% = 107px right (Figma's 434.6px
                text measure), 8.25% = 50px bottom. */}
            <div className="relative rounded-[4px] bg-gold p-7 sm:p-9 lg:rounded-none lg:bg-transparent lg:p-0 lg:pt-[9.5%] lg:pr-[17.64%] lg:pb-[8.25%] lg:pl-[10.64%]">
              <h2 className="text-[20px] leading-none font-bold text-white">
                The Why Behind StrateAura™
              </h2>
              <div className="mt-4 text-[15px] leading-[1.19] text-white lg:mt-[33px] lg:text-[16px]">
                <p className="font-medium">
                  We build systems of thought that help you:
                </p>
                {/* Figma sets these on consecutive single-spaced lines — no
                    gap between items, one blank line before and after. */}
                <ul className="mt-3 space-y-2 lg:mt-[19px] lg:space-y-0 lg:pl-[5px]">
                  {POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 lg:gap-[9px]">
                      <Sparkle className="mt-2 size-[10px] shrink-0 text-white lg:mt-[2px] lg:size-[15px]" />
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-normal lg:mt-[19px]">
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
