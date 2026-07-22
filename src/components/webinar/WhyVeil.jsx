import quoteMark from "../../assets/webinar/quote-mark-navy.png";

export default function WhyVeil() {
  return (
    <section className="bg-[#eff3f9] lg:bg-gradient-to-r lg:from-[rgba(76,125,190,0.1)] lg:via-[rgba(255,255,255,0.1)] lg:to-[rgba(76,125,190,0.1)]">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-[83px] pb-[60px] sm:px-8 sm:py-14 lg:py-[110px] xl:px-[95px]">
        {/* Phone Figma (1296:5712) stacks the quote glyph ABOVE the heading
            (24px apart); from sm up they sit side by side as on desktop. */}
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-5 lg:gap-8">
          {/* Figma (nodes 1222:494 / 1222:496) sets the glyph at y 110-174 and
              the heading at y 146-202 — so the quote is NOT on the heading's
              baseline, it rides 28px higher, finishing around the middle of the
              letterforms. The bottom margin lifts it by that amount. */}
          <img
            src={quoteMark}
            alt=""
            className="pointer-events-none w-10 shrink-0 sm:mb-3 sm:w-11 lg:mb-7 lg:w-[70px]"
          />
          <h2 className="text-[32px] leading-none font-bold text-navy-2 sm:text-[clamp(2.25rem,4.5vw,4rem)]">
            Why VEIL™
          </h2>
        </div>

        {/* Figma (node 1222:492) is 32px on a 44px line in a 1250px measure.
            The blocks are separated by an empty line (44px = space-y-11), but
            the two opening sentences are consecutive lines of ONE block with no
            gap between them. Phone (1296:5716): 16px on a 24px line. */}
        <div className="mt-4 max-w-[1250px] space-y-6 text-[16px] leading-6 text-navy-2 sm:mt-10 sm:space-y-7 sm:text-[clamp(1.125rem,2.3vw,2rem)] sm:leading-[1.375] lg:mt-14 lg:space-y-11">
          <div>
            <p>You are good at what you do. Possibly excellent.</p>
            <p>
              The people around you rely on you - and you deliver, consistently,
              in ways that most of them do not fully see or understand.
            </p>
          </div>
          <p>
            <strong className="font-bold">But your body noticed.</strong> The
            tiredness that sleep does not fully fix. The sharpness in your
            thinking that used to be effortless. The moment at the end of a long
            day when someone asks how you are - and you genuinely do not know
            what to say.
          </p>
          <p>
            You have told yourself this is temporary. That you will slow down
            when things settle.{" "}
            {/* Figma's natural Acumin wrap drops this closing line onto its own
                line; Inter is wider and breaks a word earlier, so it is forced
                to a new line at lg to keep the design's shape. */}
            <strong className="font-bold lg:block">
              VEIL was built for this moment. Before a crisis forces your hand.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
