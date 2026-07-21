import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";

/**
 * "Signature Programs (KHDA-certified)" heading block — Figma node 1434:491.
 * Sits between the hero photo and the VEIL flagship block.
 */
export default function MobileSignaturePrograms() {
  // No background: the cream band (node 1434:406) is painted by HomeMobile.
  return (
    <section className="pt-[60px]">
      <MobileContainer>
        <h2 className="text-[28px] leading-normal font-bold text-navy">
          Signature Programs
          <br />
          (KHDA-certified)
        </h2>
        <MobilePill
          as="a"
          href="/programs"
          variant="goldOutline"
          size="md"
          className="mt-[22px]"
        >
          View All Programs
        </MobilePill>
      </MobileContainer>
    </section>
  );
}
