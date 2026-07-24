export default function WhyVeil() {
  return (
    <section className="bg-[#eff3f9] lg:bg-gradient-to-r lg:from-[rgba(76,125,190,0.1)] lg:via-[rgba(255,255,255,0.1)] lg:to-[rgba(76,125,190,0.1)]">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-[83px] pb-[60px] sm:px-8 sm:py-14 lg:px-[162px] lg:py-[63px]">
        {/* Figma 1755:1775 — 32px heading, no quote glyph. */}
        <h2 className="text-[32px] leading-none font-bold text-navy-2 sm:text-[32px]">
          Why VEIL™
        </h2>

        {/* Figma (node 1755:1776) is 16px on a 17px line in a 1117px measure.
            The blocks are separated by an empty line (17px), but the two opening
            sentences are consecutive lines of ONE block with no gap between
            them. Phone (1296:5716): 16px on a 24px line. */}
        <div className="mt-4 max-w-[1117px] space-y-6 text-[16px] leading-6 text-navy-2 sm:mt-6 sm:space-y-[17px] sm:text-[16px] sm:leading-[17px]">
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
            {/* Figma (1755:1776) keeps this closing line inline with the
                sentence before it. */}
            <strong className="font-bold">
              VEIL was built for this moment. Before a crisis forces your hand.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
