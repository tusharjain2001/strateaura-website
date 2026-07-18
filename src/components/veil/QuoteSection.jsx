import quotePhoto from "../../assets/veil/why-veil-photo.jpg";
import quoteBubble from "../../assets/veil/why-veil-quote-bubble.svg";

function QuoteText({ className = "" }) {
  return (
    <div
      className={`space-y-6 text-[clamp(1.0625rem,1.6vw,1.75rem)] leading-[1.4] font-light text-white ${className}`}
    >
      <p>You are good at what you do. Possibly excellent.</p>
      <p>
        The people around you rely on you - and you deliver, consistently, in
        ways that most of them do not fully see or understand.{" "}
        <strong className="font-bold">But your body noticed.</strong> The
        tiredness that sleep does not fully fix. The sharpness in your
        thinking that used to be effortless. The moment at the end of a long
        day when someone asks how you are - and you genuinely do not know
        what to say. You have told yourself this is temporary. That you will
        slow down when things settle.{" "}
        <strong className="font-bold">
          VEIL was built for this moment. Before a crisis forces your hand.
        </strong>
      </p>
    </div>
  );
}

export default function QuoteSection() {
  return (
    <section className="bg-gradient-to-b from-[#f1dd9e] to-[#fffdf7]">
      {/* Mobile/tablet: simple stack, no overlap. */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 lg:hidden">
        <div className="rounded-2xl bg-gradient-to-b from-navy to-blue p-7 sm:p-10">
          <QuoteText />
        </div>
        <div className="relative aspect-[921/660] w-full overflow-hidden rounded-[4px]">
          {/* Source JPG is baked in mirrored — flip it back so the venue
              signage reads correctly, as in Figma. */}
          <img
            src={quotePhoto}
            alt="Dr. Suhair Hamouri presenting at Philosophy House, Fujairah"
            className="pointer-events-none absolute inset-0 size-full -scale-x-100 object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      </div>

      {/* Desktop: photo large and dominant on the right (~64% width, full
          section height); the quote bubble overlaps its left portion,
          stacked above it, tail pointing right into the photo. Percentages
          are the exact Figma node geometry (section 1440x816) converted to
          fractions so the composition scales with the section. */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] lg:block lg:h-[816px]">
        <div className="absolute top-[9.56%] left-[32.36%] h-[80.88%] w-[63.96%] overflow-hidden rounded-[4px]">
          {/* Source JPG is baked in mirrored — flip it back so the venue
              signage reads correctly, as in Figma. */}
          <img
            src={quotePhoto}
            alt="Dr. Suhair Hamouri presenting at Philosophy House, Fujairah"
            className="pointer-events-none absolute inset-0 size-full -scale-x-100 object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="absolute top-[23.04%] left-[7.29%] z-10 h-[59.56%] w-[63.89%]">
          {/* Stretchable bubble panel; its tail sits on the shape's left
              side in the source asset, so flip it horizontally to point
              right, toward the photo. */}
          <img
            src={quoteBubble}
            alt=""
            className="pointer-events-none absolute inset-0 size-full -scale-x-100"
          />
          <div className="relative flex h-full items-center py-[9%] pr-[25%] pl-[5%]">
            <QuoteText />
          </div>
        </div>
      </div>
    </section>
  );
}
