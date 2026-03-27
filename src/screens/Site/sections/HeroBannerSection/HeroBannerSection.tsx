export const HeroBannerSection = (): JSX.Element => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-2 w-full px-2">
      {/* Logo area with wings - responsive */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-4xl aspect-video md:aspect-auto h-auto md:h-[420px] bg-contain bg-center bg-no-repeat animate-[float_4s_ease-in-out_infinite]">
        {/* Right wing */}
        <div className="hidden md:block absolute top-8 md:top-[60px] right-[117%] translate-x-[260px] w-[140px] h-[190px] bg-[url(/wing.png)] bg-[100%_100%] scale-[1.5]" />
        {/* Left wing */}
        <div className="hidden md:block absolute top-8 md:top-[60px] right-[37%] translate-x-[260px] w-[140px] h-[190px] bg-[url(/wing1.png)] bg-[100%_100%] scale-[1.5]" />
        {/* Central logo - responsive scale */}
        <div className="relative md:absolute md:scale-[1.5] top-0 left-1/2 -translate-x-1/2 w-full md:w-[700px] h-auto md:h-[420px] aspect-video md:aspect-auto bg-[url(/TOIlogo.png)] bg-contain bg-center bg-no-repeat" />
      </div>

      {/* Red lines - responsive */}
      <div className="flex flex-col items-center gap-1 md:gap-2 -mt-4 md:-mt-8 md:mb-4">
        <div className="w-48 sm:w-80 md:w-[700px] h-px bg-red-600 opacity-70"></div>
        <div className="w-48 sm:w-80 md:w-[700px] h-px bg-red-600 opacity-40"></div>
      </div>

      {/* Stats section - responsive layout */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16 scale-75 sm:scale-100 md:scale-[1.5] origin-top">
        {/* КОМАНДЫ */}
        <div className="flex flex-col items-center gap-0 whitespace-nowrap">
          <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px]">
            КОМАНДЫ
          </span>
          <span className="text-[#d3d3d3] text-[32px] leading-[40px] drop-shadow-[0_0_21px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
            32
          </span>
        </div>

        {/* ПРИЗОВОЙ ФОНД */}
        <div className="flex flex-col items-center gap-0 whitespace-nowrap">
          <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px]">
            ПРИЗОВОЙ ФОНД
          </span>
          <div className="flex items-baseline">
            <span className="text-[#d3d3d3] text-[40px] tracking-[1.2px] leading-[40px] drop-shadow-[0_0_13px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
              12000
            </span>
            <span className="font-literature text-[#d3d3d3] text-[15px] ml-1">
              РУБ
            </span>
          </div>
        </div>

        {/* МАТЧЕЙ */}
        <div className="flex flex-col items-center gap-0 whitespace-nowrap">
          <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px]">
            МАТЧЕЙ
          </span>
          <span className="text-[#d3d3d3] text-[40px] leading-[40px] drop-shadow-[0_0_21px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
            62
          </span>
          <span className="font-literature text-[#d3d3d3] text-[15px]">
            +1
          </span>
        </div>
      </div>

      {/* CTA - УЧАСТВОВАТЬ - responsive */}
      <div className="mt-4 md:mt-6 scale-75 sm:scale-90 md:scale-100 origin-top">
        <span className="bg-[linear-gradient(134deg,#420200_0%,#ff0600_35%,#370000_50%,#ff0600_65%,#420200_100%)]
        bg-[length:300%_100%]
        bg-clip-text text-transparent
        font-kudry text-[85px]
         cursor-pointer animate-[shineSmooth_15s_linear_infinite]
         hover:scale-[1.08] transition-transform duration-300
        ">
          УЧАСТВОВАТЬ
        </span>
      </div>

      {/* Subtitle - responsive */}
      <div className="mt-2 md:mt-[20px]">
        <span className="font-labor text-[#a7a7a7] text-xs sm:text-sm md:text-[20px] tracking-[0.3px] md:tracking-[0.9px]">
          Докажи своё превосходство
        </span>
      </div>
    </div>
  );
};
