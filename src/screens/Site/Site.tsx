import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { SocialMediaFooterSection } from "./sections/SocialMediaFooterSection";
import { TournamentBracketSection } from "./sections/TournamentBracketSection/TournamentBracketSection";
import { TournamentDetailsSection } from "./sections/TournamentDetailsSection/TournamentDetailsSection";

export const Site = (): JSX.Element => {
  return (
    <div className="relative w-full min-w-[1440px] bg-black overflow-x-hidden">
      {/* Top background image section - only visible at top */}
      <div className="relative w-full h-auto">
        <img
          className="w-full h-auto object-cover"
          alt="Background"
          src="/1background.png"
        />

        {/* Side decorative images - only at top, fixed positioning */}
        <img
          className="absolute top-0 left-0 h-full w-auto object-cover pointer-events-none z-10"
          alt="Left decoration"
          src="/side-decor.png"
        />
        <img
          className="absolute top-0 right-0 h-full w-auto object-cover pointer-events-none z-10 scale-x-[-1]"
          alt="Right decoration"
          src="/side-decor.png"
        />

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none z-5" />
      </div>

      {/* Main content stacked vertically in document flow */}
      <div className="relative flex flex-col w-full bg-black">
        <NavigationHeaderSection />
        <HeroBannerSection />
        <TournamentDetailsSection />
        <TournamentBracketSection />
        <SocialMediaFooterSection />
      </div>

      {/* Arrow scroll-to-top button */}
      <div className="fixed bottom-8 right-8 w-8 h-[31px] bg-[url(/arrow.png)] bg-[100%_100%] z-50" />
    </div>
  );
};
