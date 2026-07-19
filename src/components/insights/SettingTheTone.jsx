import settingTonePhoto from "../../assets/insights/setting-tone-photo.jpg";
import toneCardBlob from "../../assets/insights/tone-card-blob.png";

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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Gold speech-bubble card, overlapping the photo's left edge on desktop.
            min-h (not a fixed h) lets the box grow if the copy needs more
            room than Figma's 473px — the blob image stretches to match so the
            text never overflows past the shape's bottom edge. */}
        <div className="relative -mt-8 lg:absolute lg:top-[197px] lg:left-[98px] lg:mt-0 lg:min-h-[473px] lg:w-[845px]">
          <img
            src={toneCardBlob}
            alt=""
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          />
          <div className="relative rounded-[4px] bg-gradient-to-br from-gold-dark to-gold px-6 py-8 text-cream sm:px-10 sm:py-10 lg:rounded-none lg:bg-none lg:px-0 lg:py-[60px] lg:pl-[48px]">
            <h2 className="max-w-[666px] text-[clamp(1.5rem,3vw,2.1875rem)] leading-[1.2] font-bold">
              Setting the Tone
            </h2>
            <p className="mt-4 max-w-[600px] pr-6 text-[clamp(1.0625rem,1.7vw,1.375rem)] leading-[1.4] lg:mt-5 lg:pr-[80px]">
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
