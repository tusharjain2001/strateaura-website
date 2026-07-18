import PillButton from "../ui/PillButton";
import articleThumb from "../../assets/article-thumb.png";

const ARTICLES = [
  { title: "Presence Is Not Charisma. It's Strategic Alignment.", date: "Published December 28, 2025." },
  { title: "Why High-Performing Women Are Quietly Exhausted", date: "Published January 09, 2026." },
  { title: "Self-Leadership Is Not Soft. It's Foundational.", date: "Published January 22, 2026." },
  { title: "Leadership Health Is the Next Competitive Advantage.", date: "Published January 30, 2026." },
];

function Thumb() {
  return (
    <div className="relative h-[140px] w-[252px] shrink-0 overflow-hidden rounded-[2px]">
      <img src={articleThumb} alt="" className="size-full object-cover grayscale" />
      <div className="absolute inset-0 bg-ink-2/50" />
    </div>
  );
}

export default function Insights() {
  return (
    <section className="relative h-[1067px] w-[1440px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffefa] to-[#ffbb00]/15" />

      {/* Header row */}
      <div className="absolute top-[129px] left-[95px] flex w-[1250px] items-center justify-between">
        <h2 className="text-[35px] font-bold text-gold">Insights &amp; Resources</h2>
        <PillButton as="a" href="#insights" variant="goldOutline" icon="sparkle">
          Browse Insights
        </PillButton>
      </div>

      {/* Featured article + intro */}
      <div className="absolute top-[302px] left-[95px] w-[534px]">
        <h3 className="w-[469px] text-[24px] leading-normal font-bold text-gold">
          These Aren't Productivity Problems. They're Patterns of Misalignment.
        </h3>
        <p className="mt-4 text-[16px] text-black/60">Published December 15, 2025</p>
        <div className="mt-6 space-y-5 text-[23px] leading-normal text-black/60">
          <p>
            We believe insight should serve, not overwhelm. Access thought pieces,
            tools, and your first look into our book: These Aren't Productivity
            Problems. They're Patterns of Misalignment.
          </p>
          <p>
            We live in a world obsessed with productivity — more tools, more
            systems, more ways to do more.
          </p>
          <p>
            Yet many high-performing leaders feel increasingly fatigued, mentally
            crowded, and disconnected from work they are objectively good at. This
            is often labeled as burnout or a motivation problem. In reality, it is
            something deeper.
          </p>
          <p>
            Most leadership strain today is not caused by workload alone. Decades of
            organizational and psychological research show….
          </p>
        </div>
      </div>

      {/* Article list — right-anchored with a margin so thumbnails don't touch the edge */}
      <ul className="absolute top-[281px] left-[700px] right-[92px]">
        {ARTICLES.map((a, i) => (
          <li
            key={a.title}
            className={`flex items-center justify-between gap-[27px] border-t border-black/15 py-[16px] ${
              i === ARTICLES.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="w-[372px]">
              <h4 className="text-[22px] leading-normal font-bold text-gold">{a.title}</h4>
              <p className="mt-3 text-[16px] text-black/60">{a.date}</p>
            </div>
            <Thumb />
          </li>
        ))}
      </ul>
    </section>
  );
}
