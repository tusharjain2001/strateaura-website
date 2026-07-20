import quoteMark from "../../assets/webinar/quote-mark-navy.png";

export default function WhyVeil() {
  return (
    <section className="bg-gradient-to-r from-[rgba(76,125,190,0.1)] via-[rgba(255,255,255,0.1)] to-[rgba(76,125,190,0.1)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:py-[110px] xl:px-[95px]">
        <div className="flex items-end gap-5 lg:gap-8">
          {/* Figma (nodes 1222:494 / 1222:496) sets the glyph at y 110-174 and
              the heading at y 146-202 — so the quote is NOT on the heading's
              baseline, it rides 28px higher, finishing around the middle of the
              letterforms. The bottom margin lifts it by that amount. */}
          <img
            src={quoteMark}
            alt=""
            className="pointer-events-none mb-3 w-11 shrink-0 lg:mb-7 lg:w-[70px]"
          />
          <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] leading-none font-bold text-navy-2">
            Why VEIL™
          </h2>
        </div>

        {/* Figma (node 1222:492) is 32px on a 44px line in a 1250px measure.
            The blocks are separated by an empty line (44px = space-y-11), but
            the two opening sentences are consecutive lines of ONE block with no
            gap between them. */}
        <div className="mt-10 max-w-[1250px] space-y-7 text-[clamp(1.125rem,2.3vw,2rem)] leading-[1.375] text-navy-2 lg:mt-14 lg:space-y-11">
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
