import { useEffect, useRef } from "react";
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
  "h-[52px] w-full border border-[#d9d9d9] bg-[#f7f7f7] px-4 text-[17px] text-navy-2 outline-none transition-colors focus:border-gold focus-visible:outline-2 focus-visible:outline-gold lg:h-[60px] lg:text-[18px] [@media(max-height:1000px)]:lg:h-[52px]";

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

export default function RegistrationModal({ open, onClose }) {
  const navigate = useNavigate();
  const dialogRef = useRef(null);

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

  if (!open) return null;

  function handleSubmit(event) {
    event.preventDefault();
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
        className="relative my-auto w-full max-w-[830px] rounded-[8px] bg-white px-6 py-8 sm:px-10 lg:px-[54px] lg:pt-[59px] lg:pb-[70px] [@media(max-height:1000px)]:lg:py-8"
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

        <form onSubmit={handleSubmit} className="mt-7 lg:mt-10 [@media(max-height:1000px)]:lg:mt-6">
          <div className="flex flex-col gap-4 lg:gap-6 [@media(max-height:1000px)]:lg:gap-4">
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
              <span className="relative block w-full">
                <select
                  name="webinar"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="" disabled></option>
                  {WEBINAR_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 w-4 -translate-y-1/2 text-navy-2" />
              </span>
            </Field>
            <label className="flex w-full flex-col gap-[2px]">
              <span className="text-[18px] leading-normal text-ink-2 lg:text-[20px]">
                Anything you’d like the speaker to address?
              </span>
              <textarea
                name="message"
                className="h-[80px] w-full resize-none border border-[#d9d9d9] bg-[#f7f7f7] px-4 py-3 text-[17px] text-navy-2 outline-none transition-colors focus:border-gold focus-visible:outline-2 focus-visible:outline-gold lg:h-[107px] lg:text-[18px] [@media(max-height:1000px)]:lg:h-[72px]"
              />
            </label>
          </div>

          <p className="mt-3 text-[15px] leading-normal text-[#c80000] lg:text-[17px]">
            Fields marked * are mandatory
          </p>

          <label className="mt-5 flex items-center gap-[14px] [@media(max-height:1000px)]:lg:mt-3">
            <input
              type="checkbox"
              name="consent"
              className="size-[23px] shrink-0 appearance-auto border border-[#c7c7c7] bg-[#f7f7f7] accent-gold"
            />
            <span className="text-[16px] leading-normal text-ink-2 lg:text-[20px]">
              I agree to receive webinar updates and reminders via email.
            </span>
          </label>

          <div className="mt-6 [@media(max-height:1000px)]:lg:mt-4">
            <CtaPill type="submit" variant="goldOutline" size="md">
              Reserve My Spot
            </CtaPill>
          </div>
        </form>
      </div>
    </div>
  );
}
