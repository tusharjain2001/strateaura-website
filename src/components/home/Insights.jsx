import PillButton from "../ui/PillButton";
import featurePhoto from "../../assets/insights2/feature.jpg";
import artOne from "../../assets/insights2/art-1.jpg";
import artTwo from "../../assets/insights2/art-2.jpg";
import artThree from "../../assets/insights2/art-3.jpg";
import artFour from "../../assets/insights2/art-4.jpg";

/**
 * Insights & Resources — "Alt/ Home" board, node 1751:108 (frame y 3491.7,
 * i.e. canvas 3417.7 once the 74px navbar is taken off).
 *
 * The wash behind the section is Rectangle 35: #ffbb00 at 20% fading up to
 * #fffefa. The board replaced the old grey placeholder thumbnails with real
 * photography and added the 563x248 lead image above the featured piece.
 */
const ARTICLES = [
  {
    title: "Presence Is Not Charisma. It’s Strategic Alignment.",
    date: "Published December 28, 2025.",
    photo: artOne,
  },
  {
    title: "Why High-Performing Women Are Quietly Exhausted",
    date: "Published January 09, 2026.",
    photo: artTwo,
  },
  {
    title: "Self-Leadership Is Not Soft. It’s Foundational.",
    date: "Published January 22, 2026.",
    photo: artThree,
  },
  {
    title: "Leadership Health Is the Next Competitive Advantage.",
    date: "Published January 30, 2026.",
    photo: artFour,
  },
];

export default function Insights() {
  return (
    // 1728:363 is 1068 tall: the last rule lands at y 973 and the board leaves
    // 95px of air under it.
    <section className="relative h-[1068px] w-[1440px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffefa] to-[#ffbb00]/20" />

      {/* 1728:366 / 1728:367 — header row, both boxes centred on y 139..187 */}
      <h2 className="absolute top-[142.5px] left-[91px] text-[30px] leading-[1.2] font-bold text-gold">
        Insights &amp; Resources
      </h2>
      <PillButton
        as="a"
        href="/insights"
        variant="goldOutline"
        icon="sparkle"
        size="xs"
        padLeft={22}
        className="absolute top-[139px] left-[1120px]"
      >
        Browse Insights
      </PillButton>

      {/* 1751:59 — featured piece: a 563x248 lead image, then the headline,
          date and body. Figma crops the photo to 130% height pulled up 22.9%. */}
      <div className="absolute top-[203.52px] left-[91px] w-[563px]">
        <div className="relative h-[248px] w-[563px] overflow-hidden rounded-[4px]">
          <img
            src={featurePhoto}
            alt=""
            className="absolute top-[-22.86%] left-0 h-[129.99%] w-full max-w-none"
          />
        </div>
        {/* 1728:375 / 1728:376 — 24px headline over a 16px date */}
        <h3 className="mt-[39px] w-[469px] text-[24px] leading-[1.2] font-bold text-gold">
          These Aren’t Productivity Problems. They’re Patterns of Misalignment.
        </h3>
        <p className="mt-[17px] text-[16px] leading-[1.2] text-black/60">
          Published December 15, 2025
        </p>
        {/* 1728:378 — 16px justified, ending on the underlined link */}
        {/* 16px per the designer's note. Inter sets this copy in more lines than
            the board's Acumin, so the leading and paragraph gaps are pulled in
            to keep the closing link flush with the section's last line. */}
        <div className="mt-[16px] space-y-[10px] text-justify text-[16px] leading-[1.13] text-black/60">
          <p>
            We live in a world obsessed with productivity — more tools, more
            systems, more ways to do more. Yet many high-performing leaders feel
            increasingly fatigued, mentally crowded, and disconnected from work
            they are objectively good at. This is often labeled as burnout or a
            motivation problem. In reality, it is something deeper. Most
            leadership strain today is not caused by workload alone. Decades of
            organizational and psychological research show that chronic
            exhaustion is strongly linked to misalignment — between role and
            values, responsibility and capacity, ambition and energy.
          </p>
          <p>
            This is why capable leaders can feel depleted even when performing
            well. Why productivity tools stop working. And why effort no longer
            translates into clarity. Misalignment does not announce itself
            loudly. It shows up as decision fatigue, emotional detachment, and
            constant internal noise — all while performance remains intact.
          </p>
          <p>
            At StrateAura™, we see these signals not as personal failure, but as
            strategic indicators. Alignment is not softness. It is a condition
            for clear thinking, sound judgment, and sustainable leadership.
            Productivity increases output. Alignment restores power. A different
            leadership conversation begins here……
          </p>
          <p className="text-left">
            <a href="/insights" className="font-semibold underline">
              “Read the full perspective”
            </a>
          </p>
        </div>
      </div>

      {/* 1728:379-388 — article list. The rules run from x 716 to x 1444, so
          they bleed past the right edge of the canvas and are clipped by it;
          the row content itself is only 651px wide.

          Rows pitch every 173px. Each li spans the full 728 so its rule runs
          the whole width. The 252x140 thumbnail sits at the row's top, 17px
          under the rule, and the text is centred against it. */}
      <ul className="absolute top-[281px] left-[716px] w-[728px]">
        {ARTICLES.map((article, i) => (
          <li
            key={article.title}
            className={`flex h-[173px] w-[728px] items-start gap-[27px] border-t pt-[17px] border-black/15 ${
              i === ARTICLES.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="mt-[22.5px] flex w-[372px] flex-col gap-[7px]">
              <h4 className="text-[22px] leading-[1.2] font-bold text-gold">
                {article.title}
              </h4>
              <p className="text-[16px] leading-[1.2] text-black/60">
                {article.date}
              </p>
            </div>
            <img
              src={article.photo}
              alt=""
              className="h-[140px] w-[252px] shrink-0 rounded-[4px] object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
