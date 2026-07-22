import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon } from "../ui/Icons";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "VEIL™", to: "/veil" },
  { label: "Our Programs", to: "/programs", dropdown: true },
  { label: "Insights & Resources", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

/**
 * Site navbar — Figma node 1672:324 (1440 x 74).
 *
 * Exact desktop geometry at 1440: a 72px/20px padded gold bar; the 177x30
 * lockup on the left; the nav block on the right is 1061px wide and
 * space-between, so the links sit at x=307 and the search + Log In cluster
 * ends flush at x=1368. `grow max-w-[1061px]` reproduces that at 1440 and
 * lets it shrink below. Below xl the links collapse into a menu panel.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "flex items-center gap-[8px] whitespace-nowrap text-[17px] leading-[1.5] font-bold text-white transition-opacity hover:opacity-80";

  const renderLink = (link) =>
    link.to ? (
      <Link to={link.to} className={linkClass} onClick={() => setOpen(false)}>
        {link.label}
        {link.dropdown && <ChevronDown className="h-[7px] w-[12px]" />}
      </Link>
    ) : (
      <a href={link.href} className={linkClass} onClick={() => setOpen(false)}>
        {link.label}
        {link.dropdown && <ChevronDown className="h-[7px] w-[12px]" />}
      </a>
    );

  return (
    <header className="sticky top-0 z-50 w-full bg-gold select-none">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-[20px] sm:px-8 xl:px-[72px]">
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

          <div className="flex shrink-0 items-center gap-[28px]">
            <button
              aria-label="Search"
              className="cursor-pointer text-white transition-opacity hover:opacity-80"
            >
              <SearchIcon className="size-[22px]" />
            </button>
            <a
              href="#login"
              className="flex items-center justify-center rounded-[37px] border border-white px-[16px] py-[4px] text-[17px] leading-[1.5] font-bold text-white transition-colors hover:bg-white hover:text-gold"
            >
              Log In
            </a>
          </div>
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
            <li className="mt-2 flex items-center gap-6 border-t border-white/20 pt-4 pb-2">
              <button
                aria-label="Search"
                className="text-white transition-opacity hover:opacity-80"
              >
                <SearchIcon className="size-[22px]" />
              </button>
              <a
                href="#login"
                className="rounded-[37px] border border-white px-[16px] py-[4px] text-[17px] leading-[1.5] font-bold text-white transition-colors hover:bg-white hover:text-gold"
              >
                Log In
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
