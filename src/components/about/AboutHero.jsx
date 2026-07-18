import hero from "../../assets/about/hero.png";
import heroEllipses from "../../assets/about/hero-ellipses.svg";
import badge from "../../assets/about/underline.svg";
import whyArc from "../../assets/about/why-arc.svg";

// Section origin is global y=120 (just below the navbar); local = global - 120.
export default function AboutHero() {
  return (
    <section className="relative h-[1266px] w-[1440px] overflow-hidden">
      {/* cream wash band */}
      <div className="absolute top-0 left-0 h-[599px] w-[1440px] bg-gradient-to-b from-[#fee8a9] to-white opacity-40" />
      {/* faint ellipse row */}
      <img
        src={heroEllipses}
        alt=""
        className="pointer-events-none absolute top-[81px] left-[134px] h-[224px] w-[1162px]"
      />

      {/* "Our Philosophy" badge */}
      <div className="absolute top-[174px] left-1/2 flex h-[40px] w-[202px] -translate-x-1/2 items-center justify-center">
        <img src={badge} alt="" className="absolute inset-0 size-full" />
        <span className="relative text-[20px] font-bold text-white">Our Philosophy</span>
      </div>

      {/* Heading */}
      <h1 className="absolute top-[227px] left-1/2 w-[560px] -translate-x-1/2 text-center text-[50px] leading-[1.1] font-bold text-navy [&>span]:block">
        <span>We Design Presence.</span>
        <span>We Uncover Power.</span>
      </h1>

      {/* Hero image */}
      <div className="absolute top-[448px] left-[700px] h-[670px] w-[668px] overflow-hidden rounded-[8px]">
        <img
          src={hero}
          alt="StrateAura founder"
          className="absolute top-[-18.19%] left-[-0.1%] h-[156.77%] w-[104.94%] max-w-none object-cover"
        />
      </div>

      {/* "The Why" golden panel + copy */}
      <img
        src={whyArc}
        alt=""
        className="pointer-events-none absolute top-[546px] left-[96px] h-[473px] w-[845px] rotate-180"
      />
      <h2 className="absolute top-[635px] left-[171px] w-[666px] text-[35px] font-bold text-cream">
        The Why Behind StrateAura™
      </h2>
      <p className="absolute top-[698px] left-[171px] w-[616px] text-[24px] leading-normal font-light text-white">
        StrateAura™ was born from a deeper truth: That leadership isn't just about
        making decisions, it's about how you carry them. That growth isn't about
        more, it's about what aligns. And that strategy, when done right, starts far
        before the boardroom. We don't separate the human from the leader. We
        believe the most transformative shifts begin with the internal, not the
        external. Our work invites you to meet yourself before you move the world.
      </p>
    </section>
  );
}
