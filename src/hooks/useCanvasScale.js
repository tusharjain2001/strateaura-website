import { useEffect, useState } from "react";

/**
 * The design is a fixed 1440px-wide canvas (every section is laid out at exact
 * Figma coordinates). This hook returns the factor needed to scale that canvas
 * down to fit narrower viewports so it looks identical to Figma.
 *
 * The scale is capped at 1: above the 1440px design width the canvas stays at
 * its natural Figma size (never magnified) and is centred with side margins —
 * magnifying past native size is not the design. Below 1440px it scales down
 * proportionally so the whole layout still fits without a horizontal scrollbar.
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
