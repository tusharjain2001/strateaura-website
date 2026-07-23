import PillButton from "../ui/PillButton";
import featurePhoto from "../../assets/insights2/feature.jpg";
import artOne from "../../assets/insights2/art-1.jpg";
import artTwo from "../../assets/insights2/art-2.jpg";
import artThree from "../../assets/insights2/art-3.jpg";
import artFour from "../../assets/insights2/art-4.jpg";

/**
 * Insights & Resources — node 1755:4644.
 *
 * The wash (1755:4645) is a #ffbb00 → #fffefa gradient flipped vertically and
 * dropped to 20%, so it reads as near-white at the top and amber at the foot.
 * It spans 3372..4409 in the board, which is what fixes this section at 1037px;
 * every offset below is board-y minus 3372.
 *
 * Notable changes from the previous board: the lead image is 202 tall (was
 * 248), the article rows pitch every 183.06 (was 173) and the featured excerpt
 * now ends after the shortened third paragraph.
 */
const ARTICLES = [
  {
    // rule / content tops are absolute so the 183.06 pitch stays exact; the
    // first row sits 0.3px tighter than the rest in the board.
    rule: 204.23,
    top: 221.91,
    textWidth: 372,
    gap: 27,
    title: "Presence Is Not Charisma. It’s Strategic Alignment.",
    date: "Published December 28, 2025.",
    textHeight: 95,
    dateTop: 58,
    photo: artOne,
  },
  {
    rule: 386.99,
    top: 404.98,
    textWidth: 372,
    gap: 27,
    title: "Why High-Performing Women Are Quietly Exhausted",
    date: "Published January 09, 2026.",
    textHeight: 96,
    dateTop: 59,
    photo: artTwo,
  },
  {
    rule: 570.05,
    top: 588.04,
    textWidth: 340,
    gap: 59,
    title: "Self-Leadership Is Not Soft. It’s Foundational.",
    date: "Published January 22, 2026.",
    textHeight: 102,
    dateTop: 65,
    photo: artThree,
  },
  {
    rule: 753.11,
    top: 771.1,
    textWidth: 340,
    gap: 59,
    title: "Leadership Health Is the Next Competitive Advantage.",
    date: "Published January 30, 2026.",
    textHeight: 102,
    dateTop: 65,
    photo: artFour,
  },
];

// The closing rule under the last row; the board leaves 100px of wash below it.
const LAST_RULE = 936.17;

export default function Insights() {
  return (
    <section className="relative h-[1037px] w-[1440px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffefa] to-[#ffbb00] opacity-20" />

      {/* 1755:4646 — header row, justified across x 91..1341 */}
      <h2 className="absolute top-[105.7px] left-[91px] text-[30px] leading-[1.2] font-bold text-gold">
        Insights &amp; Resources
      </h2>
      <PillButton
        as="a"
        href="/insights"
        variant="goldOutline"
        icon="sparkle"
        size="xs"
        className="absolute top-[107.2px] right-[99px]"
      >
        Browse Insights
      </PillButton>

      {/* 1755:4683 — featured piece: 563x202 lead image, then headline, date and
          the excerpt. Figma renders the photo at 159.79% height, pulled up
          22.75%, inside the 202px window. */}
      <div className="absolute top-[202.11px] left-[91px] w-[563px]">
        <div className="relative h-[202px] w-[563px] overflow-hidden rounded-[4px]">
          <img
            src={featurePhoto}
            alt=""
            className="absolute top-[-22.75%] left-0 h-[159.79%] w-full max-w-none"
          />
        </div>
        {/* 1755:4685 — 24px headline, 16px date 68px below it, body 110px below */}
        <h3 className="mt-[38px] w-[469px] text-[24px] leading-[1.2] font-bold text-gold">
          These Aren’t Productivity Problems. They’re Patterns of Misalignment.
        </h3>
        <p className="mt-[9.4px] text-[16px] leading-[1.2] text-black/60">
          Published December 15, 2025
        </p>
        {/* 1755:4690 — 16px justified on a 19px pitch (Acumin's "normal" here).
            Paragraphs are separated by one blank line, i.e. one 19px line box. */}
        <div className="mt-[22.8px] space-y-[19px] text-justify text-[16px] leading-[19px] text-black/60">
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
            strategic indicators...
          </p>
          <p className="text-left">
            <a href="/insights" className="font-semibold underline">
              “Read the full perspective”
            </a>
          </p>
        </div>
      </div>

      {/* 1755:4655-4682 — article list. The rules run x 716..1444, so they bleed
          4px past the canvas and are clipped by the section. Each row is a
          148.143-tall centred flex pair sitting ~18px under its rule. */}
      {ARTICLES.map((article) => (
        <div key={article.title}>
          <div
            className="absolute left-[716px] h-px w-[728px] bg-black/15"
            style={{ top: `${article.rule}px` }}
          />
          <div
            className="absolute left-[716px] flex h-[148.143px] items-center"
            style={{ top: `${article.top}px`, gap: `${article.gap}px` }}
          >
            {/* The block carries Figma's own box height so `items-center`
                lands the text where the board has it — the title/date pair on
                its own is 16px shorter in Inter and would centre too low. */}
            <div
              className="relative shrink-0"
              style={{
                width: `${article.textWidth}px`,
                height: `${article.textHeight}px`,
              }}
            >
              <h4 className="absolute top-0 left-0 w-full text-[22px] leading-[1.2] font-bold text-gold">
                {article.title}
              </h4>
              <p
                className="absolute left-0 w-full text-[16px] leading-[1.2] text-black/60"
                style={{ top: `${article.dateTop}px` }}
              >
                {article.date}
              </p>
            </div>
            <img
              src={article.photo}
              alt=""
              className="h-[140px] w-[252px] shrink-0 rounded-[4px] object-cover"
            />
          </div>
        </div>
      ))}
      <div
        className="absolute left-[716px] h-px w-[728px] bg-black/15"
        style={{ top: `${LAST_RULE}px` }}
      />
    </section>
  );
}
