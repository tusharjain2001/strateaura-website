import { useEffect, useState } from "react";
import CtaPill from "../ui/CtaPill";
import { postJson } from "../../lib/api";
import { CloseIcon } from "../ui/Icons";

const inputClass =
  "h-[52px] w-full border border-[#d9d9d9] bg-[#f7f7f7] px-4 text-[17px] text-navy-2 outline-none transition-colors focus:border-gold focus-visible:outline-2 focus-visible:outline-gold lg:h-[60px] lg:text-[18px]";

function Field({ label, children }) {
  return (
    <label className="flex w-full flex-col gap-[2px]">
      <span className="text-[18px] leading-normal text-ink-2 lg:text-[20px]">
        {label} <span className="text-[#c80000]">*</span>
      </span>
      {children}
    </label>
  );
}

/**
 * Book preview form popup — Figma node 1816:798.
 *
 * Opened from the Book Feature's "Download a Preview Chapter" button. On submit
 * it POSTs to /api/book-preview, which emails the team
 * (training@strateaura.com) that a visitor requested the book preview and sends
 * the visitor a confirmation. `book` names which title was requested.
 */
export default function BookPreviewModal({ onClose, book = "" }) {
  // Mounted only while open (parent renders it conditionally), so this state is
  // fresh on every open — no reset effect needed.
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    // Browser autofill / password managers can populate the hidden honeypot for
    // real people. Only non-browser bots (which never run this handler) should
    // ever send it, so strip it here to avoid false-positive spam blocks.
    delete fields.hpField;

    setSubmitting(true);
    setError("");
    try {
      await postJson("/api/book-preview", { ...fields, book });
      setDone(true);
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get Book Preview"
        className="relative my-auto w-full max-w-[830px] rounded-[8px] bg-white px-6 py-10 sm:px-10 lg:px-[54px] lg:pt-[59px] lg:pb-[81px]"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 text-ink transition-colors hover:text-navy-2"
        >
          <CloseIcon className="size-6" />
        </button>

        {done ? (
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] leading-normal font-bold text-gold">Thank you!</h2>
            <p className="text-[16px] leading-normal font-light text-navy-2">
              Your request has been received. We&apos;ve emailed your preview chapter to you — it
              should be in your inbox in a moment.
            </p>
            <div className="mt-4">
              <CtaPill as="button" type="button" variant="goldOutline" size="compact" onClick={onClose}>
                Close
              </CtaPill>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] leading-normal font-bold text-gold lg:text-[24px]">
                Please Enter Your Details
              </h2>
              <p className="text-[16px] leading-normal font-light text-navy-2">
                You&apos;ll receive an email after sharing these details with us.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 lg:mt-[44px]">
              {/* Honeypot — display:none so browser autofill and password
                  managers skip it (a real person never fills it); naive bots
                  that POST every field in the raw HTML still trip it. */}
              <input
                type="text"
                name="hpField"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="flex flex-col gap-6">
                <Field label="Full Name">
                  <input name="fullName" autoComplete="name" required className={inputClass} />
                </Field>
                <Field label="Email ID">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </Field>
              </div>

              {error && (
                <p role="alert" className="mt-4 text-[16px] leading-normal text-[#c80000]">
                  {error}
                </p>
              )}

              <div className="mt-6">
                <CtaPill
                  type="submit"
                  variant="goldOutline"
                  size="compact"
                  disabled={submitting}
                  className={submitting ? "opacity-60" : ""}
                >
                  {submitting ? "Sending…" : "Submit Details"}
                </CtaPill>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
