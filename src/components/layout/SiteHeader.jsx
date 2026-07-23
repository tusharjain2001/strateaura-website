import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CloseIcon, MenuIcon } from "../ui/Icons";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "VEIL™", to: "/veil" },
  { label: "Our Programs", to: "/programs" },
  { label: "Insights & Resources", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

/**
 * Site navbar — Figma node 1672:324 (1440 x 74).
 *
 * Exact desktop geometry at 1440: a 72px/20px padded gold bar; the 177x30
 * lockup on the left; the nav block on the right is 1061px wide, which puts
 * the links at x=307. `grow max-w-[1061px]` reproduces that at 1440 and lets
 * it shrink below. Below xl the links collapse into a menu panel.
 *
 * The board's search button and Log In pill were dropped at the client's
 * request, so the right end of the bar is deliberately empty; the links keep
 * their Figma positions rather than spreading into the freed space.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Nav links darken on hover, matching the live site: its Elementor rule
  // (`li:hover > a`) uses --e-global-color-f318d10 = #725300, which is this
  // project's gold-dark token. The search button, Log In pill and logo keep
  // their own treatments.
  const linkClass =
    "flex items-center whitespace-nowrap text-[17px] leading-[1.5] font-bold text-white transition-colors duration-300 hover:text-gold-dark";

  const renderLink = (link) =>
    link.to ? (
      <Link to={link.to} className={linkClass} onClick={() => setOpen(false)}>
        {link.label}
      </Link>
    ) : (
      <a href={link.href} className={linkClass} onClick={() => setOpen(false)}>
        {link.label}
      </a>
    );

  return (
    <header className="sticky top-0 z-50 w-full bg-gold select-none">
      {/* The gap is a floor, not the design value: at 1440 the nav block hits
          its 1061 cap and justify-between opens the board's 58px, but on a
          1280-1439 desktop the block grows to fill the row and "Home" would
          otherwise sit flush against the lockup. */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-[20px] sm:px-8 xl:h-[74px] xl:gap-[40px] xl:px-[72px]">
        <Link to="/" aria-label="StrateAura home" className="shrink-0">
          <img
            src={logo}
            alt="StrateAura"
            className="h-[24px] w-[142px] xl:h-[30px] xl:w-[177px]"
          />
        </Link>

        {/* Desktop nav block — 1061px wide at the 1440 design width */}
        <div className="hidden grow items-center justify-between xl:flex xl:max-w-[1061px]">
          <ul className="flex items-center gap-[32px] min-[1440px]:gap-[60px]">
            {LINKS.map((link) => (
              <li key={link.label}>{renderLink(link)}</li>
            ))}
          </ul>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-white xl:hidden"
        >
          {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-white/20 bg-gold xl:hidden">
          <ul className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-5 py-4 sm:px-8">
            {LINKS.map((link) => (
              <li key={link.label} className="py-2">
                {renderLink(link)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
