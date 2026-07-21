import { useEffect, useState } from "react";

/**
 * The design is a fixed-width canvas (every section is laid out at exact Figma
 * coordinates). This hook returns the factor needed to scale that canvas to the
 * current viewport width, so narrow windows shrink the page instead of
 * introducing a horizontal scrollbar.
 *
 * `maxScale` caps the factor. Pass 1 to stop the canvas magnifying on screens
 * wider than the design: it then renders at true Figma size (and the caller
 * should centre it), which keeps type and photography crisp. Left uncapped the
 * canvas always fills the width.
 */
export default function useCanvasScale(designWidth = 1440, { maxScale } = {}) {
  const getScale = () => {
    if (typeof document === "undefined") return 1;
    const scale = document.documentElement.clientWidth / designWidth;
    return maxScale === undefined ? scale : Math.min(scale, maxScale);
  };

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const update = () => setScale(getScale());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [designWidth, maxScale]);

  return scale;
}
