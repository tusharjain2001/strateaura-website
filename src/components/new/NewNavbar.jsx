import { Link } from "react-router-dom";
import { ChevronDown, SearchIcon } from "../ui/Icons";
import logo from "../../assets/new/logo.svg";

// 1638:618-625 — x offsets inside Frame 107, which starts at x 787 of the frame.
const LINKS = [
  { label: "Home", to: "/", x: 0 },
  { label: "About Us", to: "/about", x: 107 },
  { label: "VEIL™", to: "/veil", x: 240 },
  { label: "Our Programs", to: "/programs", x: 344, dropdown: true },
  { label: "Insights & Resources", to: "/insights", x: 535 },
  { label: "Contact", to: "/contact", x: 764 },
];

/**
 * Navbar — Figma node 1638:563. An 85px gold bar over the hero, with the lockup
 * at x 72 and the link row at x 787. Positions are absolute so the row matches
 * Figma exactly rather than being distributed by a flex gap.
 */
export default function NewNavbar() {
  return (
    <div className="absolute top-0 left-0 z-20 h-[85px] w-[1920px] bg-gold">
      <Link to="/new" aria-label="StrateAura home">
        <img
          src={logo}
          alt="StrateAura"
          className="absolute top-[22px] left-[72px] h-[41px] w-auto"
        />
      </Link>

      {LINKS.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          style={{ left: 787 + link.x }}
          className="absolute top-[29px] flex items-center gap-[8px] text-[17px] leading-[26px] font-bold whitespace-nowrap text-white transition-opacity hover:opacity-80"
        >
          {link.label}
          {link.dropdown && <ChevronDown className="w-[12px]" />}
        </Link>
      ))}

      {/* 1638:626 — search + Log In, from x 1716 */}
      <button
        aria-label="Search"
        className="absolute top-[31px] left-[1716px] text-white transition-opacity hover:opacity-80"
      >
        <SearchIcon className="size-[22px]" />
      </button>
      <a
        href="#login"
        className="absolute top-[25px] left-[1766px] flex h-[34px] w-[82px] items-center justify-center rounded-[37px] border border-white text-[17px] font-bold text-white transition-colors hover:bg-white hover:text-gold"
      >
        Log In
      </a>
    </div>
  );
}
