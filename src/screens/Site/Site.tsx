import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { SocialMediaFooterSection } from "./sections/SocialMediaFooterSection";
import { TournamentBracketSection } from "./sections/TournamentBracketSection/TournamentBracketSection";
import { TournamentDetailsSection } from "./sections/TournamentDetailsSection/TournamentDetailsSection";

export const Site = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      {/* Fixed navigation */}
      <NavigationHeaderSection />
       <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

  {/* ФОН */}
  <img
    src="/1background.png"
    className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
    loading="lazy"
  />

  {/* ДЕКОР - hidden on mobile */}
  <img
    className="absolute top-0 left-0 w-[25vw] max-w-[460px] z-10 pointer-events-none hidden md:block"
    src="/side-decor.png"
    loading="lazy"
  />
  <img
    className="absolute top-0 right-0 w-[25vw] max-w-[460px] z-10 scale-x-[-1] pointer-events-none hidden md:block"
    src="/side-decor.png"
    loading="lazy"
  />

  {/* HERO */}
  <div className="relative z-20 w-full px-2">
    <HeroBannerSection />
  </div>

</section>
        {/* red pic */}
       <div className="absolute inset-0 z-0 pointer-events-none">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-40"
    loading="lazy"
  >
    <source src="/pic_red.webm" type="video/webm" />
  </video>

</div>

        {/* Side decorations - visible only on larger screens */}
        <img
          className="absolute top-0 left-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 pointer-events-none hidden md:block"
          alt="Left decoration"
          src="/side-decor.png"
          loading="lazy"
        />
        <img
          className="absolute top-0 right-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 scale-x-[-1] pointer-events-none hidden md:block"
          alt="Right decoration"
          src="/side-decor.png"
          loading="lazy"
        />

        {/* Top dark gradient */}
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-black via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Main content */}
      <main className="flex-1 relative z-10 w-full">
        <TournamentDetailsSection />
        <TournamentBracketSection />
      </main>
      <div className="relative w-full overflow-visible pointer-events-none z-0"></div>
<div className="relative">
  <button
    onClick={scrollToTop}
    className="
      fixed right-4 md:right-6
      bottom-6 md:bottom-20
      w-10 h-10 md:w-12 md:h-12
      bg-[url(/arrow.png)]
      bg-contain bg-no-repeat bg-center
      z-50
      cursor-pointer
      hover:scale-110 active:scale-95
      transition-transform duration-200
    "
    style={{
      filter: "drop-shadow(0 0 10px white)"
    }}
    aria-label="Scroll to top"
  />
</div>

<SocialMediaFooterSection />
</div>
  );
};
