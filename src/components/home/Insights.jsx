import PillButton from "../ui/PillButton";

/**
 * Insights & Resources — "Alt/ Home" board, node 1728:362 (canvas y 3565).
 *
 * The wash behind the section is Rectangle 35 (1638:919): #fffefa fading down
 * to #ffbb00 at 20%. The article thumbnails are drawn in Figma as a photo with
 * a fully opaque #949494 fill over it, i.e. flat grey placeholders.
 */
const ARTICLES = [
  {
    title: "Presence Is Not Charisma. It’s Strategic Alignment.",
    date: "Published December 28, 2025.",
  },
  {
    title: "Why High-Performing Women Are Quietly Exhausted",
    date: "Published January 09, 2026.",
  },
  {
    title: "Self-Leadership Is Not Soft. It’s Foundational.",
    date: "Published January 22, 2026.",
  },
  {
    title: "Leadership Health Is the Next Competitive Advantage.",
    date: "Published January 30, 2026.",
  },
];

export default function Insights() {
  return (
    // 1728:362 is 1068 tall: the last rule lands at y 973 and the board leaves
    // 95px of air under it, not the 245 this section used to carry.
    <section className="relative h-[1068px] w-[1440px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffefa] to-[#ffbb00]/20" />

      {/* 1638:1020 / 1638:1021 — header row */}
      <h2 className="absolute top-[151px] left-[91px] text-[35px] leading-[1.2] font-bold text-gold">
        Insights &amp; Resources
      </h2>
      <PillButton
        as="a"
        href="/insights"
        variant="goldOutline"
        icon="sparkle"
        className="absolute top-[139px] left-[1059px] min-w-[282px]"
      >
        Browse Insights
      </PillButton>

      {/* 1638:1027 — featured piece, 534 wide */}
      <div className="absolute top-[302px] left-[91px] w-[534px]">
        <h3 className="w-[469px] text-[24px] leading-[1.2] font-bold text-gold">
          These Aren’t Productivity Problems. They’re Patterns of Misalignment.
        </h3>
        <p className="mt-[17px] text-[16px] leading-[1.2] text-black/60">
          Published December 15, 2025
        </p>
        <div className="mt-[28px] text-[21.5px] leading-[28px] text-black/60">
          <p>
            We believe insight should serve, not overwhelm. Access thought
            pieces, tools, and your first look into our book: These Aren’t
            Productivity Problems. They’re Patterns of Misalignment.
          </p>
          <p className="mt-[28px]">
            We live in a world obsessed with productivity — more tools, more
            systems, more ways to do more. Yet many high-performing leaders feel
            increasingly fatigued, mentally crowded, and disconnected from work
            they are objectively good at. This is often labeled as burnout or a
            motivation problem. In reality, it is something deeper.
          </p>
          <p className="mt-[28px]">
            Most leadership strain today is not caused by workload alone.
            Decades of organizational and psychological research show….
          </p>
        </div>
      </div>

      {/* 1638:1033-1061 — article list. The rules run from x 720 to x 1448, so
          they bleed past the right edge of the canvas and are clipped by it;
          the row content itself is only 651px wide.

          Rows pitch every 173px (lines 1638:1033/1040/1041). Each li spans the
          full 728 so its rule runs the whole width. The 252x140 thumbnail sits
          at the row's top, 17px under the rule, and the text 22.5px below that
          — padding the whole row instead pushed the image to 176px, past the
          173px pitch, so it covered the next row's rule. */}
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
            <div className="h-[140px] w-[252px] shrink-0 bg-ink-2" />
          </li>
        ))}
      </ul>
    </section>
  );
}
