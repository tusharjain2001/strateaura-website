import { Link } from "react-router-dom";
import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import leadPhoto from "../../assets/insights-mobile/lead.jpg";
import artOne from "../../assets/insights-mobile/art-1.jpg";
import artTwo from "../../assets/insights-mobile/art-2.jpg";
import artThree from "../../assets/insights-mobile/art-3.jpg";
import artFour from "../../assets/insights-mobile/art-4.jpg";

// Figma nodes 1878:4962 / 4969 / 4976 / 4983 — the four article rows under the
// lead piece. Each is a 1px rule, 23px of space, then a 22px gold title, its
// published date 7px below and a full-width image plate 16px under that. The
// first plate is 223px tall; the rest are 225px. Slugs match the desktop
// Insights section, i.e. the posts in src/data/blogPosts.jsx.
const ARTICLES = [
  {
    title: "Presence Is Not Charisma. It’s Strategic Alignment.",
    date: "Published December 28, 2025.",
    height: "h-[223px]",
    slug: "presence-is-not-charisma",
    photo: artOne,
  },
  {
    title: "Why High-Performing Women Are Quietly Exhausted",
    date: "Published January 09, 2026.",
    height: "h-[225px]",
    slug: "why-high-performing-women-are-quietly-exhausted",
    photo: artTwo,
  },
  {
    title: "Self-Leadership Is Not Soft. It’s Foundational.",
    date: "Published January 22, 2026.",
    height: "h-[225px]",
    slug: "self-leadership-is-not-soft",
    photo: artThree,
  },
  {
    title: "Leadership Health Is the Next Competitive Advantage.",
    date: "Published January 30, 2026.",
    height: "h-[225px]",
    slug: "leadership-health-is-the-next-competitive-advantage",
    photo: artFour,
  },
];

const FEATURED_SLUG = "these-arent-productivity-problems";

/**
 * Insights & Resources — Figma node 1878:4998 (mobile frame, 372px column
 * inside 16px margins, 60px of section padding).
 *
 * Section head (28px gold title, then the "Browse Insights" pill) 42px above
 * the lead article: a 223px image plate, the 24px gold headline with its date,
 * and the excerpt — three bold paragraphs separated by blank lines, closing on
 * the underlined "Read the full perspective". Four rule-separated article rows
 * follow, 24px apart.
 */
export default function MobileInsights() {
  return (
    <section className="bg-white py-[60px]">
      <MobileContainer className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[42px]">
          {/* Section head — node 1878:4945 */}
          <div className="flex flex-col items-start gap-[16px]">
            <h2 className="text-[28px] leading-normal font-bold text-gold">
              Insights &amp; Resources
            </h2>
            <MobilePill as="a" href="/insights" variant="goldOutline">
              Browse Insights
            </MobilePill>
          </div>

          {/* Lead article — node 1878:4955 */}
          <div className="flex flex-col gap-[26px]">
            <Link to={`/insights/${FEATURED_SLUG}`}>
              <img
                src={leadPhoto}
                alt=""
                className="h-[223px] w-full object-cover"
              />
            </Link>
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[24px] leading-normal font-bold text-gold">
                  <Link to={`/insights/${FEATURED_SLUG}`}>
                    These Aren’t Productivity Problems. They’re Patterns of
                    Misalignment.
                  </Link>
                </h3>
                <p className="text-[16px] leading-normal text-black/60">
                  Published December 15, 2025
                </p>
              </div>
              {/* Node 1878:4961 — the blank lines between paragraphs are real
                  empty line boxes in Figma, so the rhythm is one full line. */}
              <div className="space-y-[1em] text-[16px] leading-normal font-bold text-black/60">
                <p>
                  We live in a world obsessed with productivity — more tools,
                  more systems, more ways to do more. Yet many high-performing
                  leaders feel increasingly fatigued, mentally crowded, and
                  disconnected from work they are objectively good at. This is
                  often labeled as burnout or a motivation problem. In reality,
                  it is something deeper. Most leadership strain today is not
                  caused by workload alone. Decades of organizational and
                  psychological research show that chronic exhaustion is
                  strongly linked to misalignment — between role and values,
                  responsibility and capacity, ambition and energy.
                </p>
                <p>
                  This is why capable leaders can feel depleted even when
                  performing well. Why productivity tools stop working. And why
                  effort no longer translates into clarity. Misalignment does
                  not announce itself loudly. It shows up as decision fatigue,
                  emotional detachment, and constant internal noise — all while
                  performance remains intact.
                </p>
                <p>
                  At StrateAura™, we see these signals not as personal failure,
                  but as strategic indicators...
                </p>
                <p className="font-semibold">
                  <Link to={`/insights/${FEATURED_SLUG}`} className="underline">
                    “Read the full perspective”
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article rows — nodes 1878:4962 … 1878:4989 */}
        {ARTICLES.map((article) => (
          <article
            key={article.title}
            className="flex flex-col gap-[16px] border-t border-black/20 pt-[23px]"
          >
            <div className="flex flex-col gap-[7px]">
              <h3 className="text-[22px] leading-normal font-bold text-gold">
                <Link to={`/insights/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-[16px] leading-normal text-black/60">
                {article.date}
              </p>
            </div>
            <Link to={`/insights/${article.slug}`}>
              <img
                src={article.photo}
                alt=""
                className={`w-full object-cover ${article.height}`}
              />
            </Link>
          </article>
        ))}
      </MobileContainer>
    </section>
  );
}
