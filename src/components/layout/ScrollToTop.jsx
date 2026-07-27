import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * A client-side route change swaps the page without moving the scroll position,
 * so navigating from halfway down one page lands you halfway down the next.
 * This resets to the top on every navigation.
 *
 * Two cases are deliberately left alone:
 * - links carrying a hash (/veil#two-pathways), which are meant to land on a
 *   section rather than the top — those are scrolled into view instead, since
 *   the browser only honours a hash on a real document load, not on a
 *   client-side route change;
 * - POP navigation (browser back/forward), where the previous scroll position
 *   is the expected behaviour and jumping to the top loses the reader's place.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP") return;

    if (hash) {
      // The target section may mount a frame later than this effect runs (the
      // canvas pages measure themselves first), so retry on the next frame if
      // it is not there yet.
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ block: "start" });
      } else {
        const raf = requestAnimationFrame(() => {
          document.querySelector(hash)?.scrollIntoView({ block: "start" });
        });
        return () => cancelAnimationFrame(raf);
      }
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);

  return null;
}
