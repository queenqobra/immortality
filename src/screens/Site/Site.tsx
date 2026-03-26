import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { SocialMediaFooterSection } from "./sections/SocialMediaFooterSection";
import { TournamentBracketSection } from "./sections/TournamentBracketSection/TournamentBracketSection";
import { TournamentDetailsSection } from "./sections/TournamentDetailsSection/TournamentDetailsSection";

export const Site = (): JSX.Element => {
  return (
    <div className="relative bg-black">
      {/* Top background image section - only visible at top */}
      <div className="flex flex-col min-h-screen bg-black">
        <img
          className="w-full h-auto object-cover"
          alt="Background"
          src="/1background.png"
        />

        {/* Side decorative images - only at top, fixed positioning */}
        <img
          className="absolute top-0 left-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 pointer-events-none"
          style={{ transformOrigin: "center" }}
          alt="Left decoration"
          src="/side-decor.png"
        />
        <img
          className="absolute top-[0px] right-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 scale-x-[-1]"
          style={{ transformOrigin: "center" }}
          alt="Right decoration"
          src="/side-decor.png"
        />

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none z-5" />
      </div>
       <div
       className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"
        />

      {/* Main content stacked vertically in document flow */}
      <div className="flex flex-col min-h-screen bg-black">
        <NavigationHeaderSection />
         <main className="flex-1">
        <HeroBannerSection />
        <TournamentDetailsSection />
        <TournamentBracketSection /> 
        </main>
       <SocialMediaFooterSection />
</div>

      {/* Arrow scroll-to-top button */}
      <div className="fixed bottom-8 right-8 w-8 h-[31px] bg-[url(/arrow.png)] bg-[100%_100%] z-50" />
    </div>
  );
};
