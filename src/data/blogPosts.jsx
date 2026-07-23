/**
 * Blog posts linked from the Home "Insights & Resources" section.
 *
 * Body copy is transcribed from the Figma "Blog Page" board (node 1755:3693).
 * It is stored as blocks rather than JSX because the two renderers need
 * different spacing: the desktop canvas reproduces the board exactly, where the
 * whole article is ONE text node on a continuous line pitch and the gaps
 * between sections are literal blank lines ({ t: "gap" }); the mobile layout
 * drops those spacers and uses real margins instead.
 *
 * Block types:
 *   { t: "p", lines: [...], w?: "bold" | "semi" }  paragraph, lines join with <br>
 *   { t: "h", text }                                section heading (semibold on the board)
 *   { t: "ul", items: [...] }                       bulleted list
 *   { t: "gap" }                                    blank line — desktop only
 */
export const BLOG_POSTS = {
  "these-arent-productivity-problems": {
    eyebrow: "Blog #1",
    title:
      "These Aren’t Productivity Problems. They’re Patterns of Misalignment.",
    blocks: [
      { t: "p", w: "bold", lines: ["We live in a world obsessed with productivity."] },
      { t: "p", w: "bold", lines: ["More tools.", "More frameworks."] },
      { t: "gap" },
      {
        t: "p",
        w: "semi",
        lines: [
          "More systems promising to help leaders do more, faster, and better.",
        ],
      },
      {
        t: "p",
        lines: [
          "Yet despite unprecedented access to resources, many high-performing leaders experience something quieter and more unsettling: persistent fatigue, mental overload, and a growing sense of disconnection from work they once mastered. This is often labeled as burnout. Or a time-management issue. Or a temporary dip in motivation.",
        ],
      },
      {
        t: "p",
        lines: [
          "In reality, most of what leaders struggle with today cannot be solved by productivity fixes. Because these aren’t productivity problems. They are patterns of misalignment.",
        ],
      },
      { t: "gap" },
      { t: "h", text: "The Misdiagnosis at the Core of Modern Leadership" },
      {
        t: "p",
        lines: [
          "Decades of organizational and psychological research show that chronic exhaustion is rarely driven by workload alone. Instead, it is strongly associated with factors such as role ambiguity, value conflict, lack of autonomy, and sustained cognitive and emotional overload. People do not burn out simply because they work hard. They burn out when what they do, how they do it, and who they are expected to be stop aligning.",
        ],
      },
      { t: "p", lines: ["This explains why:"] },
      {
        t: "ul",
        items: [
          "High achievers feel depleted despite strong performance",
          "Leaders stay busy yet lose clarity",
          "Capability remains intact while energy erodes",
        ],
      },
      {
        t: "p",
        lines: [
          "Productivity tools may increase output, but they do not restore alignment.",
        ],
      },
      { t: "gap" },
      { t: "h", text: "Why Smart Leaders Miss the Real Issue" },
      {
        t: "p",
        lines: [
          "Misalignment is difficult to detect because it does not appear as failure.",
        ],
      },
      { t: "p", lines: ["It shows up quietly:"] },
      {
        t: "ul",
        items: [
          "As constant mental noise",
          "As decision fatigue",
          "As emotional detachment disguised as professionalism",
        ],
      },
      {
        t: "p",
        lines: [
          "Leadership research consistently links self-regulation and internal coherence to decision quality. When these erode, leaders often compensate by pushing harder—mistaking effort for solution. This is why alignment is frequently dismissed as “soft,” especially by high performers.",
          "In truth, alignment is a strategic condition.",
        ],
      },
      { t: "gap" },
      { t: "h", text: "Misalignment Is Not a Personal Failure" },
      {
        t: "p",
        lines: [
          "One of the most damaging leadership narratives is the belief that exhaustion signals inadequacy.",
        ],
      },
      { t: "p", lines: ["It does not."] },
      {
        t: "p",
        lines: [
          "Misalignment is often the consequence of sustained responsibility, compressed expectations, and prolonged emotional labor. Large-scale workforce studies show that women leaders, in particular, carry disproportionate invisible labor while maintaining the same performance standards. The result is not weakness. It is unacknowledged cost.",
        ],
      },
      { t: "gap" },
      { t: "h", text: "Why Quick Fixes Don’t Work" },
      {
        t: "p",
        lines: [
          "When misalignment is the root issue, common interventions fall short:",
        ],
      },
      {
        t: "ul",
        items: [
          "Time-management courses",
          "Motivation workshops",
          "Short-term wellness initiatives",
        ],
      },
      { t: "p", lines: ["They treat symptoms, not structure."] },
      {
        t: "p",
        lines: [
          "Alignment cannot be automated or delegated.",
          "It must be designed.",
        ],
      },
      { t: "gap" },
      { t: "h", text: "The StrateAura Perspective" },
      {
        t: "p",
        lines: [
          "At StrateAura™, we don’t approach leadership strain as a performance gap. We see it as a signal. A signal that something essential is out of sync—between ambition and energy, responsibility and capacity, external success and internal coherence. When alignment is restored, leaders don’t just feel better. They think more clearly, decide more confidently, and lead more sustainably. This is not about slowing down. It’s about leading from a place that can sustain power.",
        ],
      },
      { t: "gap" },
      { t: "h", text: "A Different Conversation Begins Here" },
      {
        t: "p",
        lines: [
          "If this resonates, it’s not because something is wrong with you. It’s because you are perceptive enough to notice what many ignore. Alignment is not a luxury. It is the foundation of real leadership. And without it, no amount of productivity will ever be enough.",
        ],
      },
    ],
  },
};

/** Joins a block's lines with <br>, as the board's single text node does. */
export function renderLines(lines) {
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {line}
    </span>
  ));
}

export default BLOG_POSTS;
