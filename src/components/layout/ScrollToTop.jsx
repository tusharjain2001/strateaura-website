import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * A client-side route change swaps the page without moving the scroll position,
 * so navigating from halfway down one page lands you halfway down the next.
 * This resets to the top on every navigation.
 *
 * Two cases are deliberately left alone:
 * - links carrying a hash (/programs#veil), which are meant to land on a
 *   section rather than the top;
 * - POP navigation (browser back/forward), where the previous scroll position
 *   is the expected behaviour and jumping to the top loses the reader's place.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (hash || navigationType === "POP") return;
    window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);

  return null;
}
