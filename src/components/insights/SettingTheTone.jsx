import settingTonePhoto from "../../assets/insights/setting-tone-photo.png";
import toneCardBlob from "../../assets/insights/tone-card-blob.png";
import toneTailMobile from "../../assets/insights/setting-tone-tail-mobile.svg";

export default function SettingTheTone() {
  return (
    <section id="setting-the-tone" className="scroll-mt-[80px] bg-white lg:scroll-mt-[120px]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:h-[816px] lg:px-0 lg:py-0">
        {/* Photo — bleeds to the right edge of the container on desktop */}
        {/* Percentage geometry (466/1440, 921/1440) — fixed px overflowed the
            page at container widths under 1387px (e.g. 1366 viewports). */}
        <div className="relative overflow-hidden rounded-[4px] lg:absolute lg:top-[78px] lg:left-[32.36%] lg:aspect-[921/660] lg:h-auto lg:w-[63.96%]">
          <img
            src={settingTonePhoto}
            alt="Dr. Suhair Hamouri presenting on stage"
            className="aspect-[921/660] w-full object-cover lg:aspect-auto lg:h-full"
          />
          {/* Figma (node 1136:5689): the scrim is 372.41 of the photo's 660px,
              i.e. 56.4%, not 40%. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56.4%] bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Gold speech-bubble card, overlapping the photo's left edge on desktop.
            min-h (not a fixed h) lets the box grow if the copy needs more
            room than Figma's 473px — the blob image stretches to match so the
            text never overflows past the shape's bottom edge. */}
        {/* Figma (node 1136:5690) draws the shape from x=98 to x=929 — 831px,
            which is the asset's native 832 width. The old 845 was the outer
            frame, and stretched the blob ~1.6% wider than it was drawn. */}
        <div className="relative z-10 -mt-[90px] lg:absolute lg:top-[197px] lg:left-[98px] lg:z-auto lg:mt-0 lg:min-h-[473px] lg:w-[832px]">
          <img
            src={toneCardBlob}
            alt=""
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          />
          {/* Mobile: the gold card's tail points UP into the photo (Figma node
              1434:3761). The tail svg keeps its exact curvature; the solid-gold
              body below carries the copy. Desktop keeps the blob shape. */}
          <img
            src={toneTailMobile}
            alt=""
            className="pointer-events-none -mb-px block w-full lg:hidden"
          />
          <div className="relative rounded-b-[4px] bg-gold px-6 pt-8 pb-8 text-cream sm:px-10 sm:pt-10 sm:pb-10 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-[60px] lg:pl-[48px]">
            <h2 className="max-w-[666px] text-[clamp(1.5rem,3vw,2.1875rem)] leading-[1.2] font-bold">
              Setting the Tone
            </h2>
            {/* Figma's measure is 616px (node 1136:5692). Held at 22px rather
                than Figma's 24px on purpose: at 24px, Inter runs the copy to an
                11th line, which pushes the box past the shape's 473px and
                stretches the blob image out of shape. 22px in the full 616px
                keeps it at Figma's 10 lines, so the bubble sits at its drawn
                height. */}
            <p className="mt-4 max-w-[600px] pr-6 text-[clamp(1.0625rem,1.7vw,1.375rem)] leading-[1.4] lg:mt-5 lg:max-w-[616px] lg:pr-0">
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
