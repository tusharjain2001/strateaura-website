import useCanvasScale from "../hooks/useCanvasScale";
import NewNavbar from "../components/new/NewNavbar";
import NewHero from "../components/new/NewHero";
import NewSignaturePrograms from "../components/new/NewSignaturePrograms";
import NewMarketingPrograms from "../components/new/NewMarketingPrograms";
import NewFrameworks from "../components/new/NewFrameworks";
import NewBelief from "../components/new/NewBelief";

/**
 * Client trial of the 1920px homepage — Figma node 1638:486.
 *
 * Deliberately a fixed 1920x3198 canvas rather than a responsive layout: the
 * brief was that every alignment and size match Figma exactly, so each element
 * is absolutely positioned at its Figma coordinate and nothing reflows. That
 * also keeps it self-contained and disposable — its own route, components and
 * assets, sharing nothing with the live pages.
 *
 * Desktop only, as agreed for the trial. The canvas scales down to fit a window
 * narrower than 1920 and is capped at 1 so it never renders larger than drawn;
 * on the client's 1920px screen the factor is exactly 1, so what they see is
 * pixel-for-pixel the Figma frame.
 */
export default function NewPage() {
  const scale = useCanvasScale(1920, { maxScale: 1 });

  return (
    <div className="flex justify-center overflow-x-clip bg-white">
      <div
        style={{ zoom: scale }}
        className="relative h-[3198px] w-[1920px] text-black"
      >
        <NewHero />
        <NewNavbar />
        <NewSignaturePrograms />
        <NewMarketingPrograms />
        <NewFrameworks />
        <NewBelief />
      </div>
    </div>
  );
}
