import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { focusMain } from "../../lib/visibleMain";

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
 *
 * It also takes over what a full page load would otherwise do for assistive
 * tech: a real navigation resets focus to the top of the document and the
 * screen reader announces the new page. A client-side route change does
 * neither — focus stays on <body> and nothing is announced — so focus is moved
 * to the new page's <main> and its title is pushed through a live region.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const announcerRef = useRef(null);
  // The first render is a real document load: the browser has already set
  // focus and announced the page, so only later navigations should do this.
  const isFirstRender = useRef(true);

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

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // An in-page hash link is a jump within the current page, not a new page:
    // moving focus to <main> would undo the jump the reader just asked for.
    if (hash) return;

    // useSeo runs in a layout effect, so document.title is already the new
    // page's by the time this passive effect fires.
    const raf = requestAnimationFrame(() => {
      focusMain();
      if (announcerRef.current) announcerRef.current.textContent = document.title;
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return (
    // aria-live announces the new page title after navigation. It is visually
    // hidden rather than display:none, which assistive tech ignores entirely.
    <div
      ref={announcerRef}
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );
}
