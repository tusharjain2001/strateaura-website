import { ArrowRight } from "../ui/Icons";
import mktWave from "../../assets/mkt-wave.svg";

const CARDS = [
  "Wellness-Centric Leadership",
  "Strategic Marketing in Higher Education",
  "Integrated Marketing Strategy masterclass",
  "Digital Marketing with Purpose",
  "Marketing in the Age of Digital Transformation",
];

function ProgramCard({ title }) {
  return (
    <div className="relative h-[193px] flex-1 overflow-hidden rounded-[3px] bg-gradient-to-b from-navy to-blue p-[18px]">
      <h4 className="w-[170px] pt-[7px] text-[21px] leading-tight font-bold text-white">
        {title}
      </h4>
      <img
        src={mktWave}
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 w-[110px] opacity-40"
      />
      <ArrowRight className="absolute bottom-[26px] left-[10px] w-5 text-white" />
    </div>
  );
}

export default function MarketingPrograms() {
  return (
    <section className="relative h-[594px] w-[1440px]">
      <h2 className="absolute top-[41px] left-[131px] w-[560px] text-[36px] leading-tight font-bold text-navy">
        Our Marketing &amp;
        <br />
        Leadership Programs.
      </h2>
      <p className="absolute top-[49px] left-[793px] w-[515px] text-[20px] leading-normal text-navy">
        We also offer a suite of practical marketing and leadership programs for
        professionals, teams, and institutions. All programs carry KHDA Attested
        Attendance Certificate.
      </p>

      <div className="absolute top-[183px] left-[132px] flex w-[1177px] gap-[16px]">
        {CARDS.map((title) => (
          <ProgramCard key={title} title={title} />
        ))}
      </div>
    </section>
  );
}
