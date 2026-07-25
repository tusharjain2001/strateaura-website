import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ChevronDown, CloseIcon, MenuIcon } from "../ui/Icons";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "VEIL™", to: "/veil" },
  { label: "Our Programs", to: "/programs", caret: true },
  { label: "Insights & Resources", to: "/insights" },
];

const CONTACT_LINK = { label: "Contact", to: "/contact" };

/**
 * Site navbar — Figma node 1755:4576 (1440 x 74).
 *
 * Exact desktop geometry at 1440: a 72/20 padded gold bar wrapping a 1296x34
 * row of three fixed groups — the 177x29.35 lockup, a 752px nav block, and a
 * 95x34 Contact pill. `justify-between` reproduces the board's two 136px gaps
 * (1296 - 177 - 752 - 95 = 272, split evenly) without hard-coding them.
 *
 * The nav block is deliberately wider than its labels: the board centres 664px
 * of links inside 752px (44px of slack either side), so `justify-center` keeps
 * the row centred even though Inter sets the labels a little wider than the
 * file's Acumin Pro. Every label is 17px bold on a 26px (1.5) line box, which
 * `items-center` centres against the 34px row exactly as in Figma.
 *
 * The board's search button and Log In pill were dropped at the client's
 * request. Below xl the links collapse into a menu panel — the mobile design is
 * unchanged from the previous board.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Nav links darken on hover, matching the live site: its Elementor rule
  // (`li:hover > a`) uses --e-global-color-f318d10 = #725300, which is this
  // project's gold-dark token.
  const linkClass =
    "flex items-center whitespace-nowrap text-[17px] leading-[1.5] font-bold text-white transition-colors duration-300 hover:text-gold-dark";

  // `carets` is off for the mobile panel: its vertical list predates this board
  // and shows bare labels, so only the desktop row draws "Our Programs"' caret.
  const renderLink = (link, { carets = false } = {}) => {
    const caret = carets && link.caret;
    return (
      <Link
        key={link.label}
        to={link.to}
        className={`${linkClass}${caret ? " gap-[8px]" : ""}`}
        onClick={() => setOpen(false)}
      >
        {link.label}
        {/* The board's caret is a 12x6 vector whose 2px stroke overhangs it to
            a 14x8 painted box, which is what we size the glyph to. */}
        {caret && <ChevronDown className="h-[8px] w-[14px] shrink-0" />}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gold select-none">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-[20px] sm:px-8 xl:h-[74px] xl:px-[72px]">
        <Link to="/" aria-label="StrateAura home" className="shrink-0">
          <img
            src={logo}
            alt="StrateAura"
            className="h-[24px] w-[142px] xl:h-[30px] xl:w-[177px]"
          />
        </Link>

        {/* Desktop nav block — the board's 752px frame with its links centred */}
        <nav className="hidden shrink-0 items-center justify-center gap-[50px] xl:flex xl:w-[752px]">
          {NAV_LINKS.map((link) => renderLink(link, { carets: true }))}
        </nav>

        {/* Contact pill — 95x34, ending flush with the bar's 72px right inset */}
        <Link
          to={CONTACT_LINK.to}
          className="hidden h-[34px] w-[95px] shrink-0 items-center justify-center rounded-[37px] border border-solid border-white text-[17px] leading-[1.5] font-bold whitespace-nowrap text-white transition-colors duration-300 hover:border-gold-dark hover:text-gold-dark xl:flex"
        >
          {CONTACT_LINK.label}
        </Link>

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
            {[...NAV_LINKS, CONTACT_LINK].map((link) => (
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
