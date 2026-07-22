import { useState } from "react";
import CtaPill from "../ui/CtaPill";
import { postJson } from "../../lib/api";
import contactPhoto from "../../assets/contact/contact-photo.jpg";

const inputClass =
  "h-[52px] w-full border border-[#d9d9d9] bg-[#f7f7f7] px-4 text-[17px] text-navy-2 outline-none transition-colors focus:border-gold focus-visible:outline-2 focus-visible:outline-gold lg:h-[60px] lg:text-[18px]";

function Field({ label, optional = false, children }) {
  return (
    <label className="flex w-full flex-col gap-[2px]">
      <span className="text-[18px] leading-normal text-ink-2 lg:text-[20px]">
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
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-end gap-x-10 px-5 sm:px-8 lg:min-h-[min(923px,calc(100svh-120px))] lg:grid-cols-[644px_1fr] lg:px-[40px] xl:gap-x-[81px] xl:pl-[76px] xl:pr-[84px]">
        {/* Contact form card */}
        <div className="mt-8 mb-[60px] w-full rounded-[8px] bg-white px-6 py-8 sm:px-10 lg:my-[clamp(20px,calc((100svh-923px)/2+87px),87px)] lg:px-[42px] lg:py-[47px] [@media(max-height:960px)]:lg:py-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] font-bold text-gold">
            Contact Us
          </h2>
          <p className="mt-2 text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal font-light text-navy-2">
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
            <form onSubmit={handleSubmit} className="mt-8 lg:mt-11">
              {/* Honeypot — hidden from people, catches bots that fill every input */}
              <input
                type="text"
                name="hpField"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute h-0 w-0 opacity-0"
              />

              <div className="flex flex-col gap-5 lg:gap-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-[29px]">
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

              <p className="mt-3 text-[15px] leading-normal text-[#c80000] lg:text-[17px]">
                Fields marked * are mandatory
              </p>

              {error && (
                <p role="alert" className="mt-3 text-[16px] leading-normal text-[#c80000]">
                  {error}
                </p>
              )}

              <div className="mt-5">
                <CtaPill
                  type="submit"
                  variant="goldOutline"
                  size="md"
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
            on lg it's anchored to SECTION geometry at any section height:
            top edge 134px into the section, bottom flush. The absolute img
            inside a stretched wrapper keeps the photo's intrinsic size from
            inflating the grid row. */}
        <div className="order-first lg:order-none lg:relative lg:w-full lg:max-w-[555px] lg:self-stretch lg:justify-self-end">
          <img
            src={contactPhoto}
            alt="Dr. Suhair Hamouri at a meeting table"
            className="mx-auto mt-[60px] aspect-[370/526] w-full max-w-[370px] rounded-t-full object-cover lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:aspect-auto lg:h-[calc(100%-134px)] lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
