import { useNavigate } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import { ChevronDown } from "../ui/Icons";
import COUNTRIES from "../../data/countries";
import archPhoto from "../../assets/webinar/arch-photo.jpg";

// Figma 1755:1831 — 51px field, #f7f7f7 fill, #d9d9d9 border.
const inputClass =
  "h-[35px] w-full border border-[#d9d9d9] bg-[#f7f7f7] px-3 text-[15px] text-navy-2 outline-none transition-colors focus:border-gold focus-visible:outline-2 focus-visible:outline-gold sm:h-[51px] sm:px-4 sm:text-[17px]";

function Field({ label, children }) {
  return (
    <label className="flex w-full flex-col gap-[2px]">
      {/* Figma 1755:1830 — 17px label, #949494. */}
      <span className="text-[14px] leading-normal text-ink-2 sm:text-[17px]">
        {label} <span className="text-[#c80000]">*</span>
      </span>
      {children}
    </label>
  );
}

export default function RegisterSection() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // Submissions are meant to go to the email platform configured for
    // StrateAura (Mailchimp / ConvertKit), into a list tagged
    // "VEIL Webinar Pre-Registration". Wire that call here when the
    // platform credentials are available.
    navigate("/webinar/confirmation");
  }

  return (
    // The vertical rhythm compresses on shorter viewports (100svh-based
    // margins/heights) so the whole form fits in ONE viewport on a
    // 1920x1080 screen; tall screens still get the exact Figma spacing.
    <section
      id="register"
      className="scroll-mt-[80px] bg-[rgba(249,222,146,0.6)] lg:scroll-mt-[120px]"
    >
      {/* Figma 1755:1818 at 1440: photo 467 + gap 97 + form 551 inside 164px
          insets. The columns stay proportional (467:551) and the gap/padding
          ramp up to the exact Figma values at xl so the layout still reflows
          cleanly between lg and 1440 instead of collapsing the photo column. */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-end gap-x-10 px-4 sm:px-8 lg:min-h-[742px] lg:grid-cols-[467fr_551fr] lg:items-center lg:gap-x-[60px] lg:px-[80px] xl:gap-x-[97px] xl:px-[164px]">
        {/* Arch-shaped photo. Figma 1755:1819 — 467x607, vertically centred in
            the 742px section (top 67px). The absolute img inside a stretched
            wrapper keeps the photo's intrinsic size from inflating the grid row.
            Phone Figma (1296:5738): the arch photo comes FIRST at full column
            width (370x514), 59px into the section, form card 36px below it. */}
        <div className="lg:relative lg:w-full lg:max-w-[467px] lg:self-stretch">
          <img
            src={archPhoto}
            alt="Dr. Suhair Hamouri with the VEIL book"
            className="mx-auto mt-[59px] aspect-[370/514] w-full rounded-t-full object-cover sm:mt-10 sm:aspect-auto sm:w-[320px] lg:absolute lg:inset-x-0 lg:top-[67px] lg:mt-0 lg:h-[607px] lg:w-full"
          />
        </div>

        {/* Registration card — Figma 1755:1821: 551 wide, ~36px side padding,
            40px top/bottom padding, centred in the section by the grid. */}
        <div className="mt-9 mb-[60px] w-full rounded-[8px] bg-white px-6 py-8 sm:my-10 sm:px-10 lg:my-0 lg:px-[36px] lg:py-[40px]">
          {/* Figma 1755:1824 — 34px gold heading, 20px light navy subhead. */}
          <h2 className="text-[24px] leading-[1.2] font-bold text-gold sm:text-[34px]">
            Contact Us
          </h2>
          <p className="mt-1 text-[16px] leading-normal font-light text-navy-2 sm:mt-[7px] sm:text-[20px]">
            Book a Strategic Conversation
          </p>

          <form onSubmit={handleSubmit} className="mt-6 sm:mt-[38px]">
              {/* Phone Figma (1296:5747) keeps First/Last Name side by side
                  even at 402px, so the name row never stacks. */}
              <div className="flex flex-col gap-[14px] sm:gap-[20px]">
                <div className="flex gap-[17px] sm:gap-[25px]">
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

              <div className="mt-6 flex flex-col items-start gap-[10px] sm:mt-[38px] sm:gap-[15px]">
                <CtaPill type="submit" variant="goldFilled" size="mdCompact">
                  Reserve My Spot
                </CtaPill>
                <p className="text-[12px] leading-normal text-ink-2 italic sm:text-[14px]">
                  It's free. No date is confirmed yet — you will be the first to
                  know when the next session is scheduled. We will never share
                  your email.
                </p>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}
