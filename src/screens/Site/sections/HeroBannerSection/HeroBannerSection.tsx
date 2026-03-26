export const HeroBannerSection = (): JSX.Element => {
  // Stats data for the three metrics displayed below the logo
  const stats = [
    {
      label: "КОМАНДЫ",
      value: "32",
      valueExtra: null,
      labelLeading: "leading-[74px]",
    },
    {
      label: "Призовой фонд",
      value: "12000",
      valueExtra: "РУБ",
      labelLeading: "leading-[33px]",
    },
    {
      label: "завершенных игр",
      value: "150+",
      valueExtra: null,
      labelLeading: "leading-[33px]",
    },
  ];

  return (
    <section className="relative w-full h-screen pt-[70px] overflow-hidden">
      {/* Clouds background image */}
      <img
        className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none bg-gradient-to-t from-black to-transparent"
        alt="Clouds background"
        src="/clouds.webp"
      />
    

      <div className="scale-[1.2] origin-top flex flex-col items-center justify-center gap-2.5 w-full max-w-[1439px] relative z-10">
        {/* Logo area with wings */}
        <div className="scale-[1.2] relative w-[580px] h-[277px] flex-shrink-0">
          {/* Right wing */}
          <div className="absolute top-[25px] left-[410px] w-[153px] h-[165px] bg-[url(/wing.png)] bg-[100%_100%]" />
          {/* Left wing */}
          <div className=" absolute top-[25px] right-[410px] w-[153px] h-[165px] bg-[url(/wing.png)] bg-[100%_100%] scale-x-[-1]" />
          {/* Central logo */}
          <div className="scale-[1.5] absolute top-0 left-[97px] w-[406px] h-[243px] bg-[url(/TOIlogo.png)] bg-cover bg-[50%_50%]" />
        </div>

        {/* Stats section */}
        <div className="flex flex-col w-full items-center relative">
       

          {/* Stats row */}
          <div className="scale-[1.2] origin-top flex items-center justify-center relative self-stretch w-full">
            {/* КОМАНДЫ stat */}
            <div className="relative w-[214px] h-[129px]">
              <div className="absolute w-[181.54%] h-[126.36%] top-[9.30%] left-[-36.92%] flex items-center justify-center [font-family:'Literature_Decor-Regular',Helvetica] text-[#ffffff57] text-[10px] tracking-[0.30px] leading-[74px] font-normal text-center">
                КОМАНДЫ
              </div>
              <div className="absolute w-[182.48%] h-[23.26%] top-[24.03%] left-[-37.38%] flex items-center justify-center [text-shadow:0px_0px_21.24px_#d3d3d3] [font-family:'Antic_Didone',Helvetica] font-normal text-[#d3d3d3] text-[40px] text-center tracking-[0] leading-[30px]">
                32
              </div>
            </div>

            {/* Призовой фонд stat */}
            <div className="relative w-[233px] h-[129px] ml-[-7px]">
              <div className="absolute w-[334.76%] h-[126.36%] top-[8.53%] left-[-116.74%] flex items-center justify-center [font-family:'Literature_Decor-Regular',Helvetica] text-[#ffffff57] text-[10px] tracking-[0.30px] leading-[33px] font-normal text-center">
                ПРИЗОВОЙ ФОНД
              </div>
              <div className="absolute w-[99.70%] h-[84.50%] top-[-6.20%] left-0 flex items-center justify-center [text-shadow:0px_0px_12.6px_#d3d3d3] [font-family:'Antic_Didone',Helvetica] text-[#d3d3d3] text-[40px] tracking-[1.20px] leading-10 font-normal text-center">
                <span className="tracking-[0.48px] leading-[0.1px]">12000</span>
                <span className="[font-family:'Literature_Decor-Regular',Helvetica] text-[15px] tracking-[0.07px] leading-[30px]">
                  РУБ
                </span>
              </div>
            </div>

            {/* Завершенных игр stat */}
            <div className="relative w-[212px] h-[129px] ml-[-7px]">
              <div className="absolute w-[183.73%] h-[126.36%] top-[9.30%] left-[-45.99%] flex items-center justify-center [font-family:'Literature_Decor-Regular',Helvetica] text-[#ffffff57] text-[10px] tracking-[0.30px] leading-[33px] font-normal text-center">
                ЗАВЕРШЕННЫХ
              </div>
              <div className="absolute w-[183.73%] h-[84.50%] top-[-6.20%] left-[-45.99%] flex items-center justify-center [text-shadow:0px_0px_21.24px_#d3d3d3] [font-family:'Antic_Didone',Helvetica] text-[#d3d3d3] text-[40px] tracking-[0] leading-[30px] font-normal text-center">
                150+
              </div>
            </div>
          </div>
        </div>

        {/* CTA - УЧАСТВОВАТЬ */}
        <div className="inline-flex h-[117px] items-center justify-center gap-2.5 px-[70px] py-[52px] relative">
          <div className="relative flex items-center justify-center w-fit mb-[-77.50px] bg-[linear-gradient(134deg,rgba(255,6,0,1)_25%,rgba(66,2,0,1)_76%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kudry-WeirdHeadline',Helvetica] text-transparent text-[70px] tracking-[2.10px] leading-[170px] whitespace-nowrap font-normal text-center">
            УЧАСТВОВАТЬ
          </div>
        </div>

        {/* Subtitle */}
        <div className="relative w-full max-w-[1174px] h-px mb-[-1.00px]">
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center [font-family:'Labor_Union-Regular',Helvetica] text-[#a7a7a7] text-[10px] tracking-[0.90px] leading-[170px] whitespace-nowrap font-normal text-center">
            Докажи своё превосходство
          </div>
        </div>
      </div>
    </section>
    
  );
};
