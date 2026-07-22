import founder from "../../assets/about/founder.png";
import founderAura from "../../assets/about/founder-aura.svg";
import founderArc from "../../assets/about/founder-arc.svg";

// Section origin global y=4045; local = global - 4045.
export default function Founder() {
  return (
    <section className="relative h-[1079px] w-[1440px] overflow-hidden bg-gradient-to-b from-navy to-blue">
      {/* decorative arcs */}
      <img
        src={founderArc}
        alt=""
        className="pointer-events-none absolute top-[222px] left-[382px] h-[352px] w-[1107px]"
      />
      {/* golden backdrop behind the founder photo */}
      <img
        src={founderAura}
        alt=""
        className="pointer-events-none absolute top-[113px] left-[-260px] h-[641px] w-[821px]"
      />
      {/* Founder photo */}
      <div className="absolute top-[-95px] left-[-152px] h-[850px] w-[908px] overflow-hidden">
        <img
          src={founder}
          alt="Dr. Suhair Hamouri"
          className="absolute top-[-0.04%] left-0 h-[142.43%] w-full max-w-none object-cover"
        />
      </div>

      <h2 className="absolute top-[133px] left-[585px] w-[788px] text-[35px] font-bold text-white">
        A Founder Who Leads From Within
      </h2>

      <div className="absolute top-[232px] left-[594px] w-[749px] space-y-[24px] text-[24px] leading-[32px] font-light text-white">
        <p>
          <span className="font-bold">Dr. Suhair Hamouri</span> is the founder of{" "}
          <span className="font-bold">VEIL</span> — a flagship strategic health
          framework for women in leadership and high-demand professional roles,
          built in the GCC, for the GCC.
        </p>
        <p>
          Her authority comes from three decades at the intersection of health,{" "}
          <span className="font-bold">pharma, academia, and leadership</span> —
          credentialed across Jordan, Australia, the United States, Singapore,
          Ireland, and the GCC. She began her career at MSD and Eli Lilly, two of
          the world's leading pharmaceutical companies, developing her
          understanding of the female biological system and what professional
          pressure does to it.
        </p>
        <p>
          She holds a{" "}
          <span className="font-bold">PhD in Business Management</span> from the
          University of Wollongong, Australia, an{" "}
          <span className="font-bold">MBA</span> from the American University of
          Sharjah (Most Outstanding Graduate), and a{" "}
          <span className="font-bold">BSc. in Pharmacy</span> from Jordan
          University of Science and Technology. She is a certified{" "}
          <span className="font-bold">Integrative Health Coach IIN, NY.</span>
        </p>
      </div>

      <p className="absolute top-[803px] left-[89px] w-[1254px] text-[24px] leading-[32px] font-light text-white">
        Dr. Hamouri has taught at Canadian University Dubai, the American
        University of Sharjah, Murdoch University, and King's Business School. She
        is currently a Non-Resident Fellow at the Mohammed Bin Rashid School of
        Government, Dubai, and a Board Member of AcceInv-Kolortrak, Canada. She is
        a Certified Online Educator{" "}
        <span className="font-bold">(COE, HBMSU UAE)</span>, a Certified Digital
        Marketing Expert{" "}
        <span className="font-bold">(CDME, DMI + AMA, Dublin)</span>, and a keynote
        speaker. She is the author of{" "}
        <span className="font-bold">Clicks, Leads, and Strategy Feeds (2024)</span>, a
        member of the American Marketing Association, and a graduate of the Dent
        Global Key Person of Influence Program, Dublin.
      </p>
    </section>
  );
}
