import { useEffect, useState } from "react";

/**
 * The design is a fixed 1440px-wide canvas (every section is laid out at exact
 * Figma coordinates). This hook returns the factor needed to shrink that canvas
 * to fit narrower viewports. Above designWidth the scale caps at 1 — the canvas
 * centres (via mx-auto on the page wrapper) instead of magnifying, so wide
 * screens always see the UI at its natural Figma size, never zoomed.
 */
export default function useCanvasScale(designWidth = 1440) {
  const getScale = () =>
    typeof document !== "undefined"
      ? Math.min(1, document.documentElement.clientWidth / designWidth)
      : 1;

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const update = () => setScale(getScale());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [designWidth]);

  return scale;
}
