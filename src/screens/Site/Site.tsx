import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { SocialMediaFooterSection } from "./sections/SocialMediaFooterSection";
import { TournamentBracketSection } from "./sections/TournamentBracketSection/TournamentBracketSection";
import { TournamentDetailsSection } from "./sections/TournamentDetailsSection/TournamentDetailsSection";

export const Site = (): JSX.Element => {
  return (
    <div className="relative w-full bg-black">
      {/* Top background section with background image and decorations */}
      <div className="relative w-full h-screen flex flex-col items-center bg-black overflow-hidden">
        {/* Background image at top */}
        <img
          className="w-full h-auto object-cover"
          alt="Background"
          src="/1background.png"
        />

        {/* Side decorative images - only at top, not scrolling */}
        <img
          className="absolute top-0 left-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 pointer-events-none"
          alt="Left decoration"
          src="/side-decor.png"
        />
        <img
          className="absolute top-0 right-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 scale-x-[-1] pointer-events-none"
          alt="Right decoration"
          src="/side-decor.png"
        />

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black z-5 pointer-events-none" />
      </div>

      {/* Main content stacked vertically in document flow */}
      <div className="relative w-full flex flex-col bg-black">
        <NavigationHeaderSection />
        <main className="flex-1">
          <HeroBannerSection />
          <TournamentDetailsSection />
          <TournamentBracketSection />
        </main>
        <SocialMediaFooterSection />
      </div>

      {/* Clouds at bottom - fixed to bottom of viewport */}
      <div className="fixed bottom-0 left-0 w-full h-auto z-0 pointer-events-none">
        <img
          className="w-full h-auto object-cover"
          alt="Clouds background"
          src="/clouds.webp"
        />
      </div>

      {/* Arrow scroll-to-top button */}
      <div className="fixed bottom-8 right-8 w-8 h-[31px] bg-[url(/arrow.png)] bg-[100%_100%] z-50" />
    </div>
  );
};
