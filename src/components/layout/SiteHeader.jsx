import { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/nav-logo-icon.svg";
import logoWord from "../../assets/nav-logo-word.svg";
import logoTag from "../../assets/nav-logo-tag.svg";
import { CloseIcon, MenuIcon } from "../ui/Icons";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "VEIL™", to: "/veil" },
  { label: "Our Programs", to: "/programs", chevron: true },
  { label: "Insights & Resources", to: "/insights" },
];

const CONTACT_LINK = { label: "Contact", to: "/contact" };

/**
 * Site navbar — Figma node 1755:4576 (1440 x 76.66, white redesign).
 *
 * Exact desktop geometry at 1440: a 72/20 padded white bar wrapping a
 * 1296x36.66 row of three fixed groups — the 190x36.66 colour lockup, a 752px
 * nav block, and a 95x29 navy Contact pill. `justify-between` reproduces the
 * board's two 129.5px gaps (1296 - 190 - 752 - 95 = 259, split evenly).
 *
 * The nav block is deliberately wider than its labels: the board centres 664px
 * of links inside 752px (44px of slack either side), so `justify-center` keeps
 * the row centred even though Inter sets the labels a little wider than the
 * file's Acumin Pro. Every label is 17px bold navy on a 26px (1.5) line box.
 *
 * The lockup is composed from the board's three vector groups with
 * percentage insets (icon 38.68x36.66 at 0,0; wordmark 142.31x16.9 at
 * 47.69,8.78; tagline 141.98x5.19 at 47.69,31.15 — all over 190x36.66) so the
 * same markup scales below xl. "Our Programs" carries the board's 12x6 chevron
 * (2px round stroke, drawn 14x8 so the caps overhang 1px per side).
 */

// Board chevron — currentColor so it follows the link's hover colour.
function NavChevron() {
  return (
    <span className="relative h-[6px] w-[12px] shrink-0">
      <svg
        viewBox="0 0 14 8"
        fill="none"
        aria-hidden
        className="absolute -inset-[1px] h-[8px] w-[14px]"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function NavLogo() {
  return (
    <span className="relative block aspect-[190/36.664] w-[150px] xl:w-[190px]">
      <img src={logoIcon} alt="StrateAura" className="absolute top-0 left-0 h-full w-[20.357%]" />
      <img src={logoWord} alt="" className="absolute top-[23.947%] left-[25.1%] h-[46.086%] w-[74.9%]" />
      <img src={logoTag} alt="" className="absolute top-[84.961%] left-[25.1%] h-[14.164%] w-[74.727%]" />
    </span>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Nav links keep the site's gold-dark hover (#725300) over the new navy.
  const linkClass =
    "flex items-center gap-[8px] whitespace-nowrap text-[17px] leading-[1.5] font-bold text-navy transition-colors duration-300 hover:text-gold-dark";

  const renderLink = (link) => (
    <Link
      key={link.label}
      to={link.to}
      className={linkClass}
      onClick={() => setOpen(false)}
    >
      {link.label}
      {link.chevron && <NavChevron />}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white select-none">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-[20px] sm:px-8 xl:h-[76.66px] xl:px-[72px]">
        <Link to="/" aria-label="StrateAura home" className="shrink-0">
          <NavLogo />
        </Link>

        {/* Desktop nav block — the board's 752px frame with its links centred */}
        <nav className="hidden shrink-0 items-center justify-center gap-[50px] xl:flex xl:w-[752px]">
          {NAV_LINKS.map(renderLink)}
        </nav>

        {/* Contact pill — 95x29 navy fill, ending flush with the 72px right inset */}
        <Link
          to={CONTACT_LINK.to}
          className="hidden h-[29px] w-[95px] shrink-0 items-center justify-center rounded-[37px] bg-navy text-[17px] leading-[21px] font-bold whitespace-nowrap text-[#fffdf8] transition-opacity duration-300 hover:opacity-90 xl:flex"
        >
          {CONTACT_LINK.label}
        </Link>

        {/* Mobile menu toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-navy xl:hidden"
        >
          {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-navy/10 bg-white xl:hidden">
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
