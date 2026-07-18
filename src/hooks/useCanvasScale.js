import { useEffect, useState } from "react";

/**
 * The design is a fixed 1440px-wide canvas (every section is laid out at exact
 * Figma coordinates). This hook returns the factor needed to scale that canvas
 * so it always fills the current viewport width — the page then looks identical
 * to Figma on any screen size instead of sitting centred with empty side gaps.
 */
export default function useCanvasScale(designWidth = 1440) {
  const getScale = () =>
    typeof document !== "undefined"
      ? document.documentElement.clientWidth / designWidth
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
