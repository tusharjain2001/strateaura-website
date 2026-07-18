import PillButton from "../ui/PillButton";
import different from "../../assets/about/different.png";
import differentMask from "../../assets/about/different-mask.svg";

// Section origin global y=5124; local = global - 5124.
export default function Different() {
  return (
    <section className="relative h-[862px] w-[1440px] overflow-hidden">
      {/* golden wash */}
      <div className="absolute top-[18px] left-0 h-[844px] w-[1440px] bg-gradient-to-b from-[#c99400] to-[#fffdf7] opacity-30" />

      {/* masked group photo */}
      <div
        className="absolute top-0 left-[682px] size-[758px]"
        style={{
          maskImage: `url(${differentMask})`,
          WebkitMaskImage: `url(${differentMask})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
        }}
      >
        <img src={different} alt="StrateAura community" className="size-full rounded-[15px] object-cover" />
      </div>

      {/* Copy */}
      <h2 className="absolute top-[124px] left-[117px] w-[507px] text-[35px] font-bold text-gold">
        What Makes This Different
      </h2>
      <p className="absolute top-[205px] left-[117px] w-[451px] text-[23px] leading-normal text-black/60">
        We're not here to fix you. We're here to show you how your power was always
        there, just hidden under noise.
      </p>
      <p className="absolute top-[313px] left-[117px] w-[507px] text-[24px] leading-normal font-bold text-black/60">
        StrateAura isn't a training firm. It's a strategic re-alignment space for
        those who are ready to stop performing and start leading with presence.
      </p>
      <p className="absolute top-[524px] left-[117px] w-[368px] text-[23px] font-bold text-navy">
        If that's you, you're already home.
      </p>
      <PillButton
        as="a"
        href="#models"
        variant="goldOutline"
        icon="sparkle"
        className="absolute top-[569px] left-[117px]"
      >
        Discover Our Signature Models
      </PillButton>
    </section>
  );
}
