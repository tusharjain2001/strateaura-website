import CtaPill from "../ui/CtaPill";
import veilLaurel from "../../assets/belief-laurel-right.svg";

export default function ThinkingBehindVeil() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[116px] lg:py-[80px]">
        <div className="relative overflow-hidden rounded-[12px] bg-gradient-to-b from-gold to-gold-dark px-8 py-10 sm:px-12 lg:px-[62px] lg:py-[60px]">
          <img
            src={veilLaurel}
            alt=""
            className="pointer-events-none absolute -top-[24px] right-[-40px] hidden aspect-[567/487] w-[45%] max-w-[567px] opacity-40 lg:block"
          />

          <p className="relative text-[20px] font-bold text-white/65 sm:text-[24px] lg:text-[32px]">
            The thinking behind
          </p>
          <h2 className="relative text-[44px] leading-[1.24] font-bold text-white sm:text-[52px] lg:text-[64px]">
            VEIL™
          </h2>
          <p className="relative mt-4 max-w-[626px] text-[18px] leading-normal text-white sm:text-[20px] lg:mt-6 lg:text-[24px]">
            These articles explore the research, the patterns, and the
            realities that shaped the VEIL framework. If something you read
            here lands - if you find yourself thinking{" "}
            <strong className="font-bold">
              ‘I can relate to every word of this’
            </strong>{" "}
            - that is the signal
          </p>

          <CtaPill as="a" href="/webinar" variant="whiteOutline" className="relative mt-8 lg:mt-11">
            Join the Free Live Webinar
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
