import quoteMark from "../../assets/webinar/quote-mark-navy.svg";

export default function WhyVeil() {
  return (
    <section className="bg-gradient-to-r from-[rgba(76,125,190,0.1)] via-[rgba(255,255,255,0.1)] to-[rgba(76,125,190,0.1)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:py-[110px] xl:px-[95px]">
        <div className="flex items-end gap-5 lg:gap-8">
          <img
            src={quoteMark}
            alt=""
            className="pointer-events-none w-11 shrink-0 lg:w-[70px]"
          />
          <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] leading-none font-bold text-navy-2">
            Why VEIL™
          </h2>
        </div>

        <div className="mt-10 max-w-[1250px] space-y-7 text-[clamp(1.125rem,2.3vw,2rem)] leading-[1.375] text-navy-2 lg:mt-14 lg:space-y-11">
          <p>
            You are good at what you do. Possibly excellent. The people around
            you rely on you - and you deliver, consistently, in ways that most
            of them do not fully see or understand.
          </p>
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
            <strong className="font-bold">
              VEIL was built for this moment. Before a crisis forces your hand.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
