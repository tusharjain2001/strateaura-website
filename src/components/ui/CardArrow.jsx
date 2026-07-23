/**
 * The arrow rule drawn on the home cards — Figma's "Arrow" vector (node
 * 1638:947), exported verbatim: a 47x4 shaft whose chevron head has 16px arms
 * and overhangs the shaft end by 2px, with rounded joins.
 *
 * The path is authored at shaft length 47, so callers give the shaft length
 * they need and the box scales around it. The head overhang makes the box
 * taller than the shaft, so the arrow is placed by the shaft's own line —
 * `left` is where the shaft starts, `centerY` the line it sits on — rather
 * than by the box edge.
 */
const SHAFT = 47;
const BOX_W = 49;
const BOX_H = 29.4558;

export default function CardArrow({
  length = SHAFT,
  left,
  centerY,
  className = "",
}) {
  return (
    <svg
      viewBox={`0 0 ${BOX_W} ${BOX_H}`}
      width={(length * BOX_W) / SHAFT}
      height={(length * BOX_H) / SHAFT}
      fill="currentColor"
      aria-hidden="true"
      className={`absolute block -translate-y-1/2 ${className}`}
      style={{ left, top: centerY }}
    >
      <path d="M48.4142 16.1421C49.1953 15.3611 49.1953 14.0948 48.4142 13.3137L35.6863 0.585787C34.9052 -0.195262 33.6389 -0.195262 32.8579 0.585787C32.0768 1.36684 32.0768 2.63317 32.8579 3.41421L44.1716 14.7279L32.8579 26.0416C32.0768 26.8227 32.0768 28.089 32.8579 28.8701C33.6389 29.6511 34.9052 29.6511 35.6863 28.8701L48.4142 16.1421ZM0 14.7279V16.7279H47V14.7279V12.7279H0V14.7279Z" />
    </svg>
  );
}
