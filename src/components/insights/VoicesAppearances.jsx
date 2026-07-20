import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import voicesPhoto from "../../assets/insights/voices-photo.png";
import voicesAccent from "../../assets/insights/voices-accent.png";

export default function VoicesAppearances() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] lg:relative lg:h-[1002px]">
        {/* Photo — bleeds off the left edge on desktop */}
        <div className="relative overflow-hidden lg:absolute lg:top-[93px] lg:left-[-130px] lg:h-[832px] lg:w-[1110px]">
          <img
            src={voicesPhoto}
            alt="Dr. Suhair Hamouri speaking with attendees at a conference"
            className="aspect-[1010/832] w-full object-cover lg:aspect-auto lg:h-full lg:w-full"
          />
          <img
            src={voicesAccent}
            alt=""
            className="pointer-events-none absolute top-[128px] left-[208px] hidden w-5 lg:block"
          />
        </div>

        {/* Card — overlaps the photo's bottom-right corner on desktop */}
        <div className="relative z-10 mx-auto -mt-10 w-[calc(100%-40px)] max-w-[700px] rounded-[4px] bg-gradient-to-b from-navy to-blue px-8 py-10 text-white sm:px-10 lg:absolute lg:top-[338px] lg:left-[39.44%] lg:mx-0 lg:mt-0 lg:min-h-[523px] lg:w-[55.21%] lg:max-w-none lg:px-[70px] lg:py-[76px]">
          <h2 className="text-[clamp(1.75rem,3.5vw,3.125rem)] leading-[1.2] font-bold">
            Voices &amp; Appearances
          </h2>
          <p className="mt-4 text-[clamp(1.125rem,1.6vw,1.4375rem)] leading-normal">
            Explore live clips and curated reflections from:
          </p>
          {/* Figma marks each bullet with the site's 4-point sparkle glyph. */}
          <ul className="mt-4 space-y-1 text-[clamp(1.0625rem,1.5vw,1.5rem)] leading-normal font-light">
            <li className="flex items-start gap-3">
              <Sparkle className="mt-[0.55em] size-[11px] shrink-0 text-white" />
              <span>
                <strong className="font-bold">Keynotes &amp; panel events</strong>{" "}
                (GITEX, AMA Symposium, etc.)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkle className="mt-[0.55em] size-[11px] shrink-0 text-white" />
              <span>
                Podcast conversations on{" "}
                <strong className="font-bold">modern leadership</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkle className="mt-[0.55em] size-[11px] shrink-0 text-white" />
              <span>Upcoming public dialogues and future events</span>
            </li>
          </ul>
          <p className="mt-4 text-[clamp(1.0625rem,1.5vw,1.5rem)] leading-normal font-light">
            When insight meets voice, transformation follows.
          </p>
          <CtaPill as="a" href="#watch-listen" variant="whiteOutline" className="mt-6 lg:mt-9">
            Watch &amp; Listen
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
