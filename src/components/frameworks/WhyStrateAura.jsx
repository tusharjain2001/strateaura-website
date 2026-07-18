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

export default function WhyStrateAura() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[65px] lg:py-[69px]">
        <div className="relative overflow-hidden rounded-[4px] lg:h-[810px]">
          {/* Photo, full-bleed within the card */}
          <img
            src={portraitPhoto}
            alt="A StrateAura leadership executive"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:absolute lg:inset-0 lg:h-full"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/40 to-transparent lg:block" />

          {/* Quote pinned over the photo */}
          <p className="relative mt-6 px-2 text-center text-[clamp(1.125rem,2vw,2rem)] leading-normal font-bold text-navy-2 italic lg:absolute lg:right-8 lg:bottom-10 lg:left-[40%] lg:mt-0 lg:text-white">
            &ldquo;A good tactic solves a surface problem. A great framework
            reorients how you lead your life.&rdquo;
          </p>

          {/* Gold speech-bubble card */}
          <div className="relative mt-6 lg:absolute lg:top-[15%] lg:left-0 lg:mt-0 lg:h-[70%] lg:w-[54%]">
            <img
              src={speechBubble}
              alt=""
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            />
            <div className="rounded-[4px] bg-gold p-7 sm:p-9 lg:absolute lg:top-[16%] lg:left-[9%] lg:w-[64%] lg:bg-transparent lg:p-0">
              <h2 className="text-[clamp(1.5rem,2.5vw,2.1875rem)] leading-normal font-bold text-white">
                The Why Behind StrateAura™
              </h2>
              <div className="mt-5 text-[clamp(1.0625rem,1.6vw,1.5rem)] leading-normal text-white">
                <p className="font-medium">
                  We build systems of thought that help you:
                </p>
                <ul className="mt-4 space-y-2">
                  {POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkle className="mt-2 size-[10px] shrink-0 text-white" />
                      <span>
                        {point.bold === "lead" ? (
                          <strong className="font-bold">{point.lead}</strong>
                        ) : (
                          point.lead
                        )}
                        {point.bold === "rest" ? (
                          <strong className="font-bold">{point.rest}</strong>
                        ) : (
                          point.rest
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
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
