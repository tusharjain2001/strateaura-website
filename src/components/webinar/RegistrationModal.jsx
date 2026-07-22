import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import { ChevronDown, CloseIcon } from "../ui/Icons";

const WEBINAR_OPTIONS = [
  "Learn about the topic",
  "Explore the Avail Program",
  "Professional Development",
  "Personal Growth",
  "Networking",
  "Other",
];

const inputClass =
  "h-[52px] w-full border border-[#d9d9d9] bg-[#f7f7f7] px-4 text-[17px] text-navy-2 outline-none transition-colors focus:border-gold focus-visible:outline-2 focus-visible:outline-gold lg:h-[60px] lg:text-[18px]";

function Field({ label, optional = false, children }) {
  return (
    <label className="flex w-full flex-col gap-[2px]">
      <span className="text-[18px] leading-normal text-ink-2 lg:text-[20px]">
        {label}{" "}
        {optional ? (
          <span className="italic">(Optional)</span>
        ) : (
          <span className="text-[#c80000]">*</span>
        )}
      </span>
      {children}
    </label>
  );
}

/**
 * Listbox matching Figma 1638:3511. A native <select> cannot carry the design —
 * browsers ignore padding and background on <option> — so the panel is built
 * from markup: 26px side / 28px top / 23px bottom padding, 20px navy options on
 * 16px padding (which yields Figma's 32px text-to-text rhythm), and the
 * highlighted row washed in #fff4d6.
 */
function WebinarSelect({ options, value, onChange, triggerRef }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  function choose(option) {
    onChange(option);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(e) {
    if (e.key === "Escape" && open) {
      // Stop the dialog's own Escape handler from closing the whole modal.
      e.stopPropagation();
      e.preventDefault();
      setOpen(false);
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      const step = e.key === "ArrowDown" ? 1 : options.length - 1;
      setActive((i) => (i + step) % options.length);
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (open) choose(options[active]);
      else setOpen(true);
    }
  }

  return (
    <span ref={rootRef} className="relative block w-full" onKeyDown={handleKeyDown}>
      <button
        type="button"
        ref={triggerRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setOpen((o) => !o);
          setActive(Math.max(0, options.indexOf(value)));
        }}
        className={`${inputClass} flex items-center justify-between gap-3 text-left`}
      >
        <span className="truncate">{value}</span>
        <ChevronDown className="w-4 shrink-0 text-navy-2" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-[calc(100%+4px)] left-0 z-10 max-h-[320px] w-full overflow-y-auto bg-white px-[26px] pt-[28px] pb-[23px] shadow-[0_10px_30px_rgba(35,58,88,0.18)]"
        >
          {options.map((option, i) => (
            <li
              key={option}
              role="option"
              aria-selected={value === option}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(option)}
              className={`cursor-pointer p-[16px] text-[20px] leading-normal text-navy-2 ${
                i === active ? "bg-[#fff4d6]" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
}

export default function RegistrationModal({ open, onClose }) {
  const navigate = useNavigate();
  const dialogRef = useRef(null);
  const selectRef = useRef(null);
  const [webinar, setWebinar] = useState("");

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("input")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // The form is a fixed stack of fields, so on a short window it used to run off
  // the screen. Measure it at full size and zoom it down by whatever factor
  // makes it fit the viewport, so it never needs scrolling.
  //
  // Inter loads from Google Fonts with display=swap, so the first measurement
  // after a reload can happen in the fallback face and reflow taller once Inter
  // swaps in; re-fitting when the fonts settle covers that.
  //
  // The zoom is written straight to the node rather than held in state: fitting
  // needs the element back at zoom 1 to read its natural height, and restoring
  // it through a setState would be skipped whenever the factor is unchanged,
  // leaving the dialog stuck at full size.
  useLayoutEffect(() => {
    if (!open) return undefined;
    const el = dialogRef.current;
    if (!el) return undefined;
    let cancelled = false;
    const fit = () => {
      if (cancelled) return;
      el.style.zoom = "1";
      const natural = el.offsetHeight;
      const available = window.innerHeight - 32; // the overlay's p-4 gutters
      const next = natural > available ? Math.max(0.5, available / natural) : 1;
      el.style.zoom = String(next);
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", fit);
    };
  }, [open]);

  if (!open) return null;

  function handleSubmit(event) {
    event.preventDefault();
    if (!webinar) {
      selectRef.current?.focus();
      return;
    }
    // Submissions go to the email platform configured for StrateAura
    // (Mailchimp / ConvertKit), list tagged "VEIL Webinar Pre-Registration".
    // Wire that call here when the platform credentials are available.
    navigate("/webinar/confirmation");
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Register for the Webinar"
        className="relative my-auto w-full max-w-[830px] rounded-[8px] bg-white px-6 py-8 sm:px-10 lg:px-[54px] lg:pt-[59px] lg:pb-[70px]"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 text-ink transition-colors hover:text-navy-2"
        >
          <CloseIcon className="size-6" />
        </button>

        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] font-bold text-gold">
          Register for the Webinar
        </h2>
        <p className="mt-2 text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal font-light text-navy-2">
          Reserve your spot for our upcoming live session.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 lg:mt-10">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-[29px]">
              <Field label="First Name">
                <input name="firstName" autoComplete="given-name" required className={inputClass} />
              </Field>
              <Field label="Last Name">
                <input name="lastName" autoComplete="family-name" required className={inputClass} />
              </Field>
            </div>
            <Field label="Email ID">
              <input type="email" name="email" autoComplete="email" required className={inputClass} />
            </Field>
            <Field label="Phone Number" optional>
              <input type="tel" name="phone" autoComplete="tel" className={inputClass} />
            </Field>
            <Field label="Which Webinar are you registering for?">
              <WebinarSelect
                options={WEBINAR_OPTIONS}
                value={webinar}
                onChange={setWebinar}
                triggerRef={selectRef}
              />
              <input type="hidden" name="webinar" value={webinar} />
            </Field>
            <label className="flex w-full flex-col gap-[2px]">
              <span className="text-[18px] leading-normal text-ink-2 lg:text-[20px]">
                Anything you’d like the speaker to address?
              </span>
              <textarea
                name="message"
                className="h-[80px] w-full resize-none border border-[#d9d9d9] bg-[#f7f7f7] px-4 py-3 text-[17px] text-navy-2 outline-none transition-colors focus:border-gold focus-visible:outline-2 focus-visible:outline-gold lg:h-[107px] lg:text-[18px]"
              />
            </label>
          </div>

          <p className="mt-3 text-[15px] leading-normal text-[#c80000] lg:text-[17px]">
            Fields marked * are mandatory
          </p>

          <label className="mt-5 flex items-center gap-[14px]">
            <input
              type="checkbox"
              name="consent"
              className="size-[23px] shrink-0 appearance-auto border border-[#c7c7c7] bg-[#f7f7f7] accent-gold"
            />
            <span className="text-[16px] leading-normal text-ink-2 lg:text-[20px]">
              I agree to receive webinar updates and reminders via email.
            </span>
          </label>

          <div className="mt-6">
            <CtaPill type="submit" variant="goldOutline" size="md">
              Reserve My Spot
            </CtaPill>
          </div>
        </form>
      </div>
    </div>
  );
}
