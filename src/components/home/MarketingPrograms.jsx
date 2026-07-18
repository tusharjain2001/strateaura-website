import leadershipCards from "../../assets/leadership-cards.svg";

export default function MarketingPrograms() {
  return (
    <section className="relative h-[594px] w-[1440px]">
      <h2 className="absolute top-[41px] left-[131px] w-[560px] text-[36px] leading-tight font-bold text-navy">
        Our Marketing &amp;
        <br />
        Leadership Programs.
      </h2>

      {/* Constrained to the Figma box (left 793 → right 1308) so the right edge
          lines up with the cards/flagship above; font sized to wrap in 3 lines. */}
      <p className="absolute top-[50px] left-[793px] w-[515px] text-[17.5px] leading-[1.5] text-navy">
        We also offer a suite of practical marketing and leadership programs for
        professionals, teams, and institutions. All programs carry KHDA Attested
        Attendance Certificate.
      </p>

      {/* All five program cards as one exported graphic — left edge aligns with
          the heading (matches Figma). */}
      <img
        src={leadershipCards}
        alt="Marketing & leadership programs: Wellness-Centric Leadership, Strategic Marketing in Higher Education, Integrated Marketing Strategy masterclass, Digital Marketing with Purpose, Marketing in the Age of Digital Transformation"
        className="absolute top-[183px] left-[131px] w-[1219px]"
      />
    </section>
  );
}
