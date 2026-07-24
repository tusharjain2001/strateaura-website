import { useState } from "react";
import CtaPill from "../ui/CtaPill";
import { postJson } from "../../lib/api";
import contactPhoto from "../../assets/contact/contact-photo.jpg";

// Figma 1755:2723 — 51px field, #f7f7f7 fill, #d9d9d9 border.
const inputClass =
  "h-[52px] w-full border border-[#d9d9d9] bg-[#f7f7f7] px-4 text-[17px] text-navy-2 outline-none transition-colors focus:border-gold focus-visible:outline-2 focus-visible:outline-gold lg:h-[51px] lg:text-[17px]";

function Field({ label, optional = false, children }) {
  return (
    <label className="flex w-full flex-col gap-[2px]">
      {/* Figma 1755:2722 — 17px label, #949494. */}
      <span className="text-[18px] leading-normal text-ink-2 lg:text-[17px]">
        {label} {!optional && <span className="text-[#c80000]">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));

    setSubmitting(true);
    setError("");
    try {
      // Emails the team and sends the enquirer a confirmation from
      // training@strateaura.com.
      await postJson("/api/contact", fields);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    // The vertical rhythm compresses on shorter viewports (100svh-based
    // margins/heights) so the whole form fits in ONE viewport on a
    // 1920x1080 screen; tall screens still get the exact Figma spacing.
    <section
      id="contact"
      className="scroll-mt-[80px] bg-[rgba(249,222,146,0.6)] lg:scroll-mt-[120px]"
    >
      {/* Figma 1816:733 at 1440: card 550 + gap 89 + photo 474 inside 161px
          insets, the whole block centred in the 812px section. Columns stay
          proportional (550:474) and the gap/padding ramp to the exact Figma
          values at xl so the layout still reflows cleanly between lg and 1440. */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-end gap-x-10 px-5 sm:px-8 lg:min-h-[812px] lg:grid-cols-[550fr_474fr] lg:content-center lg:items-stretch lg:gap-x-[60px] lg:px-[80px] xl:gap-x-[89px] xl:px-[161px]">
        {/* Contact form card — Figma 1755:2713: 550 wide, 640 tall, ~36px side
            padding, 37px top padding (content top-aligned, extra space below). */}
        <div className="mt-8 mb-[60px] w-full rounded-[8px] bg-white px-6 py-8 sm:px-10 lg:my-0 lg:min-h-[640px] lg:px-[36px] lg:py-[37px]">
          {/* Figma 1755:2716 — 34px gold heading, 20px light navy subhead. */}
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] font-bold text-gold lg:text-[34px]">
            Contact Us
          </h2>
          <p className="mt-2 text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal font-light text-navy-2 lg:mt-[7px] lg:text-[20px]">
            Book a Strategic Conversation
          </p>

          {submitted ? (
            <div className="mt-11">
              <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-navy-2">
                Message sent.
              </p>
              <p className="mt-3 text-[17px] leading-normal text-ink">
                Thank you for reaching out — our team will get back to you
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 lg:mt-[38px]">
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

              <div className="flex flex-col gap-5 lg:gap-[20px]">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-[25px]">
                  <Field label="First Name">
                    <input
                      name="firstName"
                      autoComplete="given-name"
                      required
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Last Name">
                    <input
                      name="lastName"
                      autoComplete="family-name"
                      required
                      className={inputClass}
                    />
                  </Field>
                </div>
                <Field label="Email ID">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field label="What are you looking for?">
                  <input name="interest" required className={inputClass} />
                </Field>
                <Field label="Is there anything else you’d like to share?" optional>
                  <input name="message" className={inputClass} />
                </Field>
              </div>

              

              {error && (
                <p role="alert" className="mt-3 text-[16px] leading-normal text-[#c80000]">
                  {error}
                </p>
              )}

              <div className="mt-5 lg:mt-[38px]">
                <CtaPill
                  type="submit"
                  variant="goldOutline"
                  size="mdContact"
                  disabled={submitting}
                  className={submitting ? "opacity-60" : ""}
                >
                  {submitting ? "Sending…" : "Begin the Conversation"}
                </CtaPill>
              </div>
            </form>
          )}
        </div>

        {/* Arch-shaped photo. Mobile shows it above the form card (order-first);
            on lg (Figma 1755:2711) it is 474x640, the same height as the card,
            filling its stretched grid column. The absolute img keeps the
            photo's intrinsic size from inflating the grid row. */}
        <div className="order-first lg:order-none lg:relative lg:w-full lg:max-w-[474px] lg:self-stretch lg:justify-self-end">
          <img
            src={contactPhoto}
            alt="Dr. Suhair Hamouri at a meeting table"
            className="mx-auto mt-[60px] aspect-[370/526] w-full max-w-[370px] rounded-t-full object-cover lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto lg:h-full lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
