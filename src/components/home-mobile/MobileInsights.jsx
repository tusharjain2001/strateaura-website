import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import artOne from "../../assets/insights2/art-1.jpg";
import artTwo from "../../assets/insights2/art-2.jpg";
import artThree from "../../assets/insights2/art-3.jpg";
import artFour from "../../assets/insights2/art-4.jpg";

// Figma nodes 1434:861 / 1434:868 / 1434:875 / 1434:882 — the four article rows
// under the lead piece. Each row is a hairline rule, a gold title, a published
// date and a full-width image plate (the frame ships them as flat #949494
// placeholders; the plates carry the same photos the desktop Insights uses).
const ARTICLES = [
  {
    title: "Presence Is Not Charisma. It’s Strategic Alignment.",
    date: "Published December 28, 2025.",
    height: "h-[223px]",
    photo: artOne,
  },
  {
    title: "Why High-Performing Women Are Quietly Exhausted",
    date: "Published January 09, 2026.",
    height: "h-[225px]",
    photo: artTwo,
  },
  {
    title: "Self-Leadership Is Not Soft. It’s Foundational.",
    date: "Published January 22, 2026.",
    height: "h-[225px]",
    photo: artThree,
  },
  {
    title: "Leadership Health Is the Next Competitive Advantage.",
    date: "Published January 30, 2026.",
    height: "h-[225px]",
    photo: artFour,
  },
];

/**
 * Insights & Resources block — Figma node 1434:840.
 *
 * A gold section head with the "Browse Insights" pill, then the lead article
 * (title, date and the long body excerpt), then four article rows separated by
 * the 1px black/20 hairline from node 1434:860.
 */
export default function MobileInsights() {
  return (
    <section className="bg-white pt-[66px]">
      <MobileContainer>
        {/* Section head — node 1434:842 */}
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[28px] leading-normal font-bold text-gold">
              Insights &amp; Resources
            </h2>
            <p className="text-[16px] leading-normal text-black/60">
              We believe insight should serve, not overwhelm. Access thought
              pieces, tools, and your first look into our book:
            </p>
          </div>
          <MobilePill as="a" href="/insights" variant="goldOutline">
            Browse Insights
          </MobilePill>
        </div>

        {/* Lead article — node 1434:853 */}
        <div className="mt-[42px] flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[24px] leading-normal font-bold text-gold">
              These Aren’t Productivity Problems. They’re Patterns of
              Misalignment.
            </h3>
            <p className="text-[16px] leading-normal text-black/60">
              Published December 15, 2025
            </p>
          </div>
          <div className="space-y-[1em] text-[16px] leading-normal text-black/60">
            <p>
              We believe insight should serve, not overwhelm. Access thought
              pieces, tools, and your first look into our book: These Aren’t
              Productivity Problems. They’re Patterns of Misalignment.
              <br />
              <br />
              We live in a world obsessed with productivity — more tools, more
              systems, more ways to do more. Yet many high-performing leaders
              feel increasingly fatigued, mentally crowded, and disconnected
              from work they are objectively good at. This is often labeled as
              burnout or a motivation problem. In reality, it is something
              deeper.
            </p>
            <p>
              Most leadership strain today is not caused by workload alone.
              Decades of organizational and psychological research show….
            </p>
          </div>
        </div>

        {/* Article rows — nodes 1434:859 … 1434:880 */}
        <div className="mt-[24px] flex flex-col gap-[24px]">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="flex flex-col gap-[16px] border-t border-black/20 pt-[23px]"
            >
              <div className="flex flex-col gap-[7px]">
                <h3 className="text-[22px] leading-normal font-bold text-gold">
                  {article.title}
                </h3>
                <p className="text-[16px] leading-normal text-black/60">
                  {article.date}
                </p>
              </div>
              <img
                src={article.photo}
                alt=""
                className={`w-full object-cover ${article.height}`}
              />
            </article>
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
