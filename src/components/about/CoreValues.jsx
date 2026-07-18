import { ArrowRight } from "../ui/Icons";
import sparkle from "../../assets/about/sparkle.svg";
import cardAlign from "../../assets/about/card-align.svg";
import cardWave from "../../assets/about/card-wave.svg";
import cardIntegrity from "../../assets/about/card-integrity.svg";
import cardEmpower from "../../assets/about/card-empower.svg";

const CARDS = [
  {
    title: "Alignment",
    desc: "Grounding leaders in clarity and purpose.",
    pos: "top-[176px] left-[618px]",
    art: cardAlign,
    artClass: "top-[83px] left-[170px] h-[329px] w-[329px]",
  },
  {
    title: "Elevation",
    desc: "Raising the standard of how presence and power are lived.",
    pos: "top-[176px] left-[996px]",
    art: cardWave,
    artClass: "top-[150px] left-[26px] h-[130px] w-[353px]",
  },
  {
    title: "Integrity",
    desc: "Delivering evidence-based, disciplined guidance you can trust.",
    pos: "top-[492px] left-[618px]",
    art: cardIntegrity,
    artClass: "top-[165px] left-[158px] h-[127px] w-[283px]",
  },
  {
    title: "Empowerment",
    desc: "Creating spaces where leaders lead without losing themselves.",
    pos: "top-[492px] left-[996px]",
    art: cardEmpower,
    artClass: "top-[140px] left-[217px] h-[154px] w-[150px]",
  },
];

function ValueCard({ title, desc, pos, art, artClass }) {
  return (
    <div className={`absolute h-[280px] w-[336px] ${pos}`}>
      <img src={sparkle} alt="" className="absolute -top-[18px] -right-[16px] z-10 h-[37px] w-[36px]" />
      <div className="relative h-full w-full overflow-hidden rounded-[4px] bg-gradient-to-b from-gold to-gold-dark">
        <img src={art} alt="" className={`pointer-events-none absolute opacity-70 ${artClass}`} />
        <h3 className="absolute top-[39px] left-[41px] w-[258px] text-[24px] font-bold text-white">
          {title}
        </h3>
        <p className="absolute top-[83px] left-[41px] w-[258px] text-[21px] leading-[1.24] font-medium text-white">
          {desc}
        </p>
        <ArrowRight className="absolute top-[244px] left-[41px] w-[25px] text-white" />
      </div>
    </div>
  );
}

export default function CoreValues() {
  return (
    <section className="relative h-[916px] w-[1440px] overflow-hidden">
      {/* golden wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#c99400] to-[#fffdf7] opacity-30" />

      <h2 className="absolute top-[172px] left-[125px] w-[327px] text-[35px] font-bold text-navy">
        Our Core Values
      </h2>
      <p className="absolute top-[250px] left-[125px] w-[405px] text-[24px] leading-normal font-light text-black/60">
        At <span className="text-navy-2">StrateAura™</span>, our values are lived
        through a dual lens — rooted in Arabic heritage and cultural depth, yet
        shaped by global perspectives and modern leadership practice.
        <br />
        <br />
        This balance ensures that the leaders we work with{" "}
        <span className="font-medium text-navy-2">
          grow in relevance, authenticity, and impact,
        </span>{" "}
        locally and worldwide.
      </p>

      {CARDS.map((card) => (
        <ValueCard key={card.title} {...card} />
      ))}
    </section>
  );
}
