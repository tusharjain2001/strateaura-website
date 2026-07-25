import settingTonePhoto from "../../assets/insights/setting-tone-photo.png";
import settingCard from "../../assets/insights/setting-card.svg";
import toneTailMobile from "../../assets/insights/setting-tone-tail-mobile.svg";

export default function SettingTheTone() {
  return (
    <section id="setting-the-tone" className="scroll-mt-[80px] bg-white lg:scroll-mt-[120px]">
      {/* Figma mobile: the VEIL card sits only ~20px below this card (942 vs
          922) — that gap lives in ThinkingBehindVeil's pt-5, so no pb here. */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-14 pb-0 lg:h-[621px] lg:px-0 lg:py-0">
        {/* Photo — bleeds to the right edge of the container on desktop */}
        {/* Percentage geometry (466/1440, 921/1440) — fixed px overflowed the
            page at container widths under 1387px (e.g. 1366 viewports). */}
        <div className="relative overflow-hidden rounded-[4px] lg:absolute lg:top-[73px] lg:left-[36.2%] lg:aspect-[663/476] lg:h-auto lg:w-[46.05%]">
          <img
            src={settingTonePhoto}
            alt="Dr. Suhair Hamouri presenting on stage"
            className="aspect-[370/289] w-full object-cover lg:aspect-auto lg:h-full"
          />
          {/* Figma (node 1136:5689): the scrim is 372.41 of the photo's 660px,
              i.e. 56.4%, not 40%. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56.4%] bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Gold speech-bubble card, overlapping the photo's left edge on desktop.
            Figma node 1755:1155 (Vector 12): 609x340 at x256, its tail on the
            right sweeping into the photo. The exported svg draws the tail on the
            left, so it is flipped horizontally (-scale-x-100). min-h keeps the
            copy from ever overflowing the shape's bottom. */}
        <div className="relative z-10 -mt-[90px] lg:absolute lg:top-[158px] lg:left-[17.78%] lg:z-auto lg:mt-0 lg:min-h-[340px] lg:w-[42.29%]">
          <img
            src={settingCard}
            alt=""
            className="pointer-events-none absolute inset-0 hidden h-full w-full -scale-x-100 lg:block"
          />
          {/* Mobile: the gold card's tail points UP into the photo (Figma node
              1434:3761). The tail svg keeps its exact curvature; the solid-gold
              body below carries the copy. Desktop keeps the blob shape. */}
          <img
            src={toneTailMobile}
            alt=""
            className="pointer-events-none -mb-px block w-full lg:hidden"
          />
          {/* Mobile metrics from Figma 1878:8675: content 97.2px below the
              shape's top (tail svg is 77.2 → pt-5), left inset 28, body block
              338 of 370 wide (right gap ~5px), h2 20/24, 8px gap, body 16px
              Acumin on a 19px pitch (15px in Inter to keep the line breaks),
              one blank line between paragraphs, 40px bottom. */}
          <div className="relative rounded-b-[4px] bg-gold pt-5 pb-10 pl-[28px] pr-[6px] text-cream lg:rounded-none lg:bg-transparent lg:px-0 lg:pt-[43px] lg:pb-[40px] lg:pl-[47px]">
            <h2 className="max-w-[666px] text-[20px] leading-[24px] font-bold lg:text-[30px] lg:leading-[1.2]">
              Setting the Tone
            </h2>
            {/* Figma's measure is 616px (node 1136:5692). Held at 22px rather
                than Figma's 24px on purpose: at 24px, Inter runs the copy to an
                11th line, which pushes the box past the shape's 473px and
                stretches the blob image out of shape. 22px in the full 616px
                keeps it at Figma's 10 lines, so the bubble sits at its drawn
                height. */}
            <p className="mt-2 text-[14px] leading-[19px] lg:mt-4 lg:max-w-[435px] lg:text-[16px] lg:leading-[1.4]">
              This is not a content dump. This is a space for thoughtful
              professionals, evolving leaders, and high-performing individuals
              to pause, reframe, and rise. We believe insight should be
              purposeful.
              <br />
              <br />
              The right idea, the right model, or the right sentence, when
              delivered at the right moment, can shift the way you lead,
              decide, and show up. At StrateAura™, we don’t flood you with
              information. We offer what brings you back to focus, energy,
              and aligned thought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
