import { useLayoutEffect } from "react";

/**
 * Per-route document metadata.
 *
 * The app is a client-rendered SPA served from a single index.html, so every
 * route shipped the same <title> and no description, canonical or social tags
 * at all. Search engines and link unfurlers therefore saw one page. This sets
 * them per route.
 *
 * Done imperatively rather than by rendering <title>/<meta> in the component
 * tree (React 19 hoists those into <head> on its own): index.html already
 * carries a static <title> and default tags for the initial paint, and
 * hoisting would leave two of each in the document, where a crawler reads
 * whichever it finds first. Mutating the existing nodes keeps exactly one.
 *
 * Tags are updated, never removed on unmount — the next route immediately
 * overwrites them, and clearing them in between makes the head briefly empty.
 */
export const SITE_URL = "https://www.strateaura.com";
export const SITE_NAME = "StrateAura";

// Fallback social image. This is the favicon, which is square and small — a
// dedicated 1200x630 share image is a design asset the site does not have yet.
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

/** Creates the tag if this is the first route to ask for it. */
function setMeta(selector, attrs, content) {
  if (!content) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * @param {object}  seo
 * @param {string}  seo.title        full <title> text for the route
 * @param {string}  seo.description  meta description, ~150-160 chars
 * @param {string}  seo.path         route path, e.g. "/veil" — canonical + og:url
 * @param {string} [seo.image]       absolute URL of the share image
 * @param {string} [seo.type]        Open Graph type; "article" for blog posts
 * @param {boolean} [seo.noIndex]    keep the route out of search results
 */
export default function useSeo({ title, description, path, image, type = "website", noIndex = false }) {
  useLayoutEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image || DEFAULT_OG_IMAGE;

    document.title = title;

    setMeta('meta[name="description"]', { name: "description" }, description);
    setCanonical(url);

    setMeta('meta[property="og:site_name"]', { property: "og:site_name" }, SITE_NAME);
    setMeta('meta[property="og:type"]', { property: "og:type" }, type);
    setMeta('meta[property="og:url"]', { property: "og:url" }, url);
    setMeta('meta[property="og:title"]', { property: "og:title" }, title);
    setMeta('meta[property="og:description"]', { property: "og:description" }, description);
    setMeta('meta[property="og:image"]', { property: "og:image" }, ogImage);

    setMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    setMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
    setMeta('meta[name="twitter:image"]', { name: "twitter:image" }, ogImage);

    // Only the internal/staging routes set this; everything else must clear it
    // so a stale noindex from a previous route cannot suppress a real page.
    const robots = document.head.querySelector('meta[name="robots"]');
    if (noIndex) {
      setMeta('meta[name="robots"]', { name: "robots" }, "noindex, nofollow");
    } else if (robots) {
      robots.setAttribute("content", "index, follow");
    }
  }, [title, description, path, image, type, noIndex]);
}
