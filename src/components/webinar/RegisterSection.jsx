import { useState } from "react";
import CtaPill from "../ui/CtaPill";
import { ChevronDown } from "../ui/Icons";
import COUNTRIES from "../../data/countries";
import archPhoto from "../../assets/webinar/arch-photo.jpg";

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

export default function RegisterSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Submissions are meant to go to the email platform configured for
    // StrateAura (Mailchimp / ConvertKit), into a list tagged
    // "VEIL Webinar Pre-Registration". Wire that call here when the
    // platform credentials are available.
    setSubmitted(true);
  }

  return (
    // The vertical rhythm compresses on shorter viewports (100svh-based
    // margins/heights) so the whole form fits in ONE viewport on a
    // 1920x1080 screen; tall screens still get the exact Figma spacing.
    <section
      id="register"
      className="scroll-mt-[80px] bg-[rgba(249,222,146,0.6)] lg:scroll-mt-[120px]"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-end gap-x-10 px-5 sm:px-8 lg:min-h-[min(923px,calc(100svh-120px))] lg:grid-cols-[1fr_644px] lg:px-[40px] xl:gap-x-[83px] xl:pr-[76px]">
        {/* Arch-shaped photo, flush with the section's bottom edge */}
        <img
          src={archPhoto}
          alt="Dr. Suhair Hamouri with the VEIL book"
          className="order-2 mx-auto mt-10 w-[260px] max-w-full rounded-t-full object-cover sm:w-[320px] lg:order-1 lg:mt-[91px] lg:h-[min(832px,calc(100svh-208px))] lg:w-full lg:max-w-[597px]"
        />

        {/* Registration card */}
        <div className="order-1 my-10 w-full rounded-[8px] bg-white px-6 py-8 sm:px-10 lg:order-2 lg:my-[clamp(24px,calc((100svh-830px)/2),107px)] lg:px-[42px] lg:py-[47px]">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] font-bold text-gold">
            Contact Us
          </h2>
          <p className="mt-2 text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal font-light text-navy-2">
            Book a Strategic Conversation
          </p>

          {submitted ? (
            <div className="mt-11">
              <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-navy-2">
                You're on the list.
              </p>
              <p className="mt-3 text-[17px] leading-normal text-ink">
                We will email you as soon as the next session is scheduled.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 lg:mt-11">
              <div className="flex flex-col gap-5 lg:gap-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-[29px]">
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
                <Field label="Country">
                  <span className="relative block w-full">
                    <select
                      name="country"
                      required
                      defaultValue=""
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="" disabled></option>
                      {COUNTRIES.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-4 w-4 -translate-y-1/2 text-navy-2" />
                  </span>
                </Field>
              </div>

              <p className="mt-3 text-[15px] leading-normal text-[#c80000] lg:text-[17px]">
                Fields marked * are mandatory
              </p>

              <div className="mt-5 flex flex-col items-start gap-[18px]">
                <CtaPill type="submit" variant="goldFilled" size="md">
                  Reserve My Spot
                </CtaPill>
                <p className="text-[15px] leading-normal text-ink-2 italic lg:text-[16px]">
                  It's free. No date is confirmed yet — you will be the first to
                  know when the next session is scheduled. We will never share
                  your email.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
