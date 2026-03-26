export const TournamentDetailsSection = (): JSX.Element => {
  // Info cards data
  const infoCards = [
    {
      title: "формат турнира",
      titleShadow: "0px_0px_3.36px_#ffffff",
      starSrc: "/star.png",
      starAlt: "Star",
      starClass: "w-[26.95%] h-[15.38%] top-[22.58%] left-[36.17%]",
      contentClass: "top-[43.92%] h-[46.24%]",
      content: (
        <div className="[font-family:'Labor_Union-Regular',Helvetica] font-normal text-white text-[10px] text-center tracking-[0.30px] leading-[18px]">
          <span className="tracking-[0.03px]">
            <br />
          </span>
          <span className="text-xl tracking-[0.12px]">
            5X5
            <br />
          </span>
          <span className="tracking-[0.03px]">
            <br />
          </span>
          <span className="text-base tracking-[0.08px]">DOUBLE</span>
          <span className="tracking-[0.03px]">
            {" "}
            ELIMINATION
            <br />
            <br />
          </span>
          <span className="text-base tracking-[0.08px]">CAPITAINS</span>
          <span className="tracking-[0.03px]">
            {" "}
            MODE
            <br />
            <br />
            ИГРЫ{" "}
          </span>
          <span className="text-base tracking-[0.08px]">BO1</span>
          <span className="tracking-[0.03px]">, гранд-финал</span>
          <span className="text-base tracking-[0.08px]">
            {" "}
            bo3
            <br />
          </span>
          <span className="tracking-[0.03px]">
            <br />
          </span>
          <span className="text-xl tracking-[0.12px]">32</span>
          <span className="text-base tracking-[0.08px]"> КОМАНДЫ</span>
        </div>
      ),
      width: "w-[282px]",
      height: "h-[478px]",
      bgClass: "w-[99.29%] h-full top-0 left-0",
      titlePositionClass: "top-[4.47%] h-[9.87%] w-[99.29%]",
    },
    {
      title: "ДАТЫ ПРОВЕДЕНИЯ",
      titleShadow: "0px_0px_3.37px_#ffffff",
      starSrc: "/star-1.png",
      starAlt: "Star",
      starClass: "w-[25.00%] h-[14.78%] top-[25.61%] left-[37.86%]",
      contentClass: "top-[50.17%] h-[40.53%]",
      content: (
        <div className="[font-family:'Labor_Union-Regular',Helvetica] text-white text-[10px] tracking-[0.30px] leading-[30px] font-normal text-center">
          <span className="tracking-[0.03px]">
            <br />
            нАЧАЛО
            <br />
          </span>
          <span className="text-base tracking-[0.08px]">
            28.04.2026 15:00 ПО МСК
            <br />
          </span>
          <span className="tracking-[0.03px]">
            <br />
            КОНЕЦ
            <br />
          </span>
          <span className="text-base tracking-[0.08px]">
            30.04.2026 01:00 ПО МСК
          </span>
        </div>
      ),
      width: "w-[280px]",
      height: "h-[478px]",
      bgClass: "w-[98.93%] h-[96.09%] top-[3.91%] left-0",
      titlePositionClass: "top-0 h-[25.52%] w-[98.21%]",
    },
    {
      title: "ОГРАНИЧЕНИЕ РЕЙТИНГА",
      titleShadow: "0px_0px_3.36px_#ffffff",
      starSrc: "/star-2.png",
      starAlt: "Star",
      starClass: "w-[36.65%] h-[14.80%] top-[25.54%] left-[31.67%]",
      contentClass: null,
      content: null,
      width: "w-[281px]",
      height: "h-[478px]",
      bgClass: "w-full h-[96.18%] top-[3.82%] left-0",
      titlePositionClass: "top-0 h-[25.54%] w-[99.64%]",
    },
  ];

  // Prize data
  const prizes = [
    {
      place: "1 МЕСТО - 6500 РУБЛЕЙ",
      topClass: "top-[30.90%]",
      heightClass: "h-[25.83%]",
      textSizeClass: "text-[35px] tracking-[1.05px]",
    },
    {
      place: "2 МЕСТО - 3500 РУБЛЕЙ",
      topClass: "top-[45.30%]",
      heightClass: "h-[31.41%]",
      textSizeClass: "text-3xl tracking-[0.90px]",
    },
    {
      place: "3 МЕСТО - 2000 РУБЛЕЙ",
      topClass: "top-[61.80%]",
      heightClass: "h-[25.83%]",
      textSizeClass: "text-xl tracking-[0.60px]",
    },
  ];

  return (
    <section className="relative w-full flex flex-col">
      {/* Cubes and lines decorative image */}
      <img
        className="absolute top-0 left-0 w-full h-auto object-cover pointer-events-none z-0 opacity-30"
        alt="Cubes decoration"
        src="/cubeslines.png"
      />

      {/* Tab navigation bar */}
      <div className="flex w-full h-[45px] relative flex-col items-center justify-center px-[133px] py-0.5 z-10">
        {/* Gradient divider */}
        <div className="relative w-full h-[41px] shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(69,69,69,1)_2%,rgba(217,217,217,1)_50%,rgba(68,68,68,1)_100%)]" />

        {/* сетка tab */}
        <div className="flex w-[941px] items-center gap-2.5 relative flex-[0_0_auto] mt-[-45px]">
          <div className="relative flex items-center justify-center w-[279px] h-10 mt-[-1.00px] [font-family:'Literature_Decor-Regular',Helvetica] text-[#747474] text-xl tracking-[0.60px] leading-[0.1px] font-normal text-center">
            сетка
          </div>
        </div>

        {/* обзор tab */}
        <div className="absolute top-px left-[872px] w-[280px] h-[39px]">
          <div className="w-full h-full flex items-center justify-center [text-shadow:0px_0px_1.07px_#000000] [font-family:'Literature_Decor-Regular',Helvetica] text-black text-xl tracking-[0.60px] leading-[0.1px] font-normal text-center">
            обзор
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex w-full relative mt-[62px] flex-col items-center justify-center gap-[181px] pb-8">
        {/* Three info cards row */}
        <div className="flex items-center justify-center gap-[170px] relative self-stretch w-full flex-[0_0_auto]">
          {/* Card 1: Формат турнира */}
          <div className="relative w-[282px] h-[478px]">
            <div className="absolute w-[99.29%] h-full top-0 left-0 bg-[#00000078] border border-solid border-transparent backdrop-blur-[3.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.9px)_brightness(100%)] [border-image:linear-gradient(180deg,rgba(0,0,0,0.64)_0%,rgba(102,102,102,0.64)_100%)_1]" />
            <div className="absolute w-[99.29%] h-[9.87%] top-[4.47%] left-0 flex items-center justify-center [text-shadow:0px_0px_3.36px_#ffffff] [font-family:'Literature_Decor-Regular',Helvetica] text-white text-lg tracking-[0.54px] leading-[0.1px] font-normal text-center">
              формат турнира
            </div>
            <div className="absolute w-[99.29%] h-[46.24%] top-[43.92%] left-0 [font-family:'Labor_Union-Regular',Helvetica] font-normal text-white text-[10px] text-center tracking-[0.30px] leading-[18px]">
              <span className="tracking-[0.03px]">
                <br />
              </span>
              <span className="text-xl tracking-[0.12px]">
                5X5
                <br />
              </span>
              <span className="tracking-[0.03px]">
                <br />
              </span>
              <span className="text-base tracking-[0.08px]">DOUBLE</span>
              <span className="tracking-[0.03px]">
                {" "}
                ELIMINATION
                <br />
                <br />
              </span>
              <span className="text-base tracking-[0.08px]">CAPITAINS</span>
              <span className="tracking-[0.03px]">
                {" "}
                MODE
                <br />
                <br />
                ИГРЫ{" "}
              </span>
              <span className="text-base tracking-[0.08px]">BO1</span>
              <span className="tracking-[0.03px]">, гранд-финал</span>
              <span className="text-base tracking-[0.08px]">
                {" "}
                bo3
                <br />
              </span>
              <span className="tracking-[0.03px]">
                <br />
              </span>
              <span className="text-xl tracking-[0.12px]">32</span>
              <span className="text-base tracking-[0.08px]"> КОМАНДЫ</span>
            </div>
            <img
              className="absolute w-[26.95%] h-[15.38%] top-[22.58%] left-[36.17%]"
              alt="Star"
              src="/star.png"
            />
          </div>

          {/* Card 2: Даты проведения */}
          <div className="relative w-[280px] h-[478px]">
            <div className="absolute w-[98.93%] h-[96.09%] top-[3.91%] left-0 bg-[#00000078] border border-solid border-transparent backdrop-blur-[3.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.9px)_brightness(100%)] [border-image:linear-gradient(180deg,rgba(0,0,0,0.64)_0%,rgba(102,102,102,0.64)_100%)_1]" />
            <div className="absolute w-full h-[40.53%] top-[50.17%] left-0 [font-family:'Labor_Union-Regular',Helvetica] text-white text-[10px] tracking-[0.30px] leading-[30px] font-normal text-center">
              <span className="tracking-[0.03px]">
                <br />
                нАЧАЛО
                <br />
              </span>
              <span className="text-base tracking-[0.08px]">
                28.04.2026 15:00 ПО МСК
                <br />
              </span>
              <span className="tracking-[0.03px]">
                <br />
                КОНЕЦ
                <br />
              </span>
              <span className="text-base tracking-[0.08px]">
                30.04.2026 01:00 ПО МСК
              </span>
            </div>
            <div className="absolute w-[98.21%] h-[25.52%] top-0 left-0 flex items-center justify-center [text-shadow:0px_0px_3.37px_#ffffff] [font-family:'Literature_Decor-Regular',Helvetica] text-white text-lg tracking-[0.54px] leading-[0.1px] font-normal text-center">
              ДАТЫ ПРОВЕДЕНИЯ
            </div>
            <img
              className="absolute w-[25.00%] h-[14.78%] top-[25.61%] left-[37.86%]"
              alt="Star"
              src="/star-1.png"
            />
          </div>

          {/* Card 3: Ограничение рейтинга */}
          <div className="relative w-[281px] h-[478px]">
            <div className="absolute w-full h-[96.18%] top-[3.82%] left-0 bg-[#00000078] border border-solid border-transparent backdrop-blur-[3.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.9px)_brightness(100%)] [border-image:linear-gradient(180deg,rgba(0,0,0,0.64)_0%,rgba(102,102,102,0.64)_100%)_1]" />
            <div className="absolute w-[92.88%] h-[15.45%] top-[51.43%] left-[4.63%] flex items-center justify-center [font-family:'Labor_Union-Regular',Helvetica] font-normal text-white text-[10px] text-center tracking-[0.30px] leading-[30px]">
              <span className="tracking-[0.03px]">
                Ограничения по рейтингу на команду{" "}
              </span>
              <span className="text-xl tracking-[0.12px]">30000</span>
            </div>
            <div className="absolute w-[93.59%] h-[18.38%] top-[71.12%] left-[3.56%] [font-family:'Labor_Union-Regular',Helvetica] text-white text-[10px] tracking-[0.30px] leading-[30px] font-normal text-center">
              <span className="tracking-[0.03px]">
                ОГРАНИЧЕНИЯ ПО ИНДИВИДУАЛЬНОМУ РЕЙТИНГУ <br />
              </span>
              <span className="text-base tracking-[0.08px]">ОТСУТСТВУЮТ</span>
            </div>
            <div className="absolute w-[99.64%] h-[25.54%] top-0 left-0 flex items-center justify-center [text-shadow:0px_0px_3.36px_#ffffff] [font-family:'Literature_Decor-Regular',Helvetica] text-white text-lg tracking-[0.54px] leading-[0.1px] font-normal text-center">
              ОГРАНИЧЕНИЕ РЕЙТИНГА
            </div>
            <img
              className="absolute w-[36.65%] h-[14.80%] top-[25.54%] left-[31.67%]"
              alt="Star"
              src="/star-2.png"
            />
          </div>
        </div>

        {/* Prize pool section */}
        <div className="relative w-[899px] h-[395px]">
          {/* Background panel */}
          <div className="absolute w-[91.10%] h-[84.89%] top-[15.11%] left-[4.45%] bg-[#000000b2] border border-solid border-transparent backdrop-blur-[3.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.75px)_brightness(100%)] [border-image:linear-gradient(113deg,rgba(0,0,0,0.69)_0%,rgba(141,141,141,0.69)_44%,rgba(102,102,102,0.69)_100%)_1]" />

          {/* Title: ПРИЗОВОЙ ФОНД */}
          <div className="absolute w-[91.10%] h-[30.90%] top-0 left-[4.45%] flex items-center justify-center [text-shadow:0px_0px_9.36px_#ffffff] [font-family:'Literature_Decor-Regular',Helvetica] text-white text-[40px] tracking-[1.20px] leading-[0.1px] font-normal text-center">
            ПРИЗОВОЙ ФОНД
          </div>

          {/* 1st place */}
          <div className="h-[25.83%] top-[30.90%] left-[4.45%] text-[35px] tracking-[1.05px] absolute w-[91.10%] flex items-center justify-center [font-family:'Labor_Union-Regular',Helvetica] font-normal text-white text-center leading-[54px]">
            1 МЕСТО - 6500 РУБЛЕЙ
          </div>

          {/* 2nd place */}
          <div className="h-[31.41%] top-[45.30%] left-[4.34%] text-3xl tracking-[0.90px] absolute w-[91.10%] flex items-center justify-center [font-family:'Labor_Union-Regular',Helvetica] font-normal text-white text-center leading-[54px]">
            2 МЕСТО - 3500 РУБЛЕЙ
          </div>

          {/* 3rd place */}
          <div className="h-[25.83%] top-[61.80%] left-[4.45%] text-xl tracking-[0.60px] absolute w-[91.10%] flex items-center justify-center [font-family:'Labor_Union-Regular',Helvetica] font-normal text-white text-center leading-[54px]">
            3 МЕСТО - 2000 РУБЛЕЙ
          </div>

          {/* Decorative stars on prize panel */}
          <img
            className="absolute w-[9.01%] h-[26.56%] top-[44.56%] left-[90.99%]"
            alt="Star"
            src="/star1.png"
          />
          <img
            className="absolute w-[9.01%] h-[30.32%] top-[37.92%] left-0"
            alt="Star"
            src="/star2.png"
          />
        </div>
      </div>

      {/* Bottom decorative image */}
      <div className="self-center w-[92px] h-24 mt-[132px] bg-[url(/winpic.png)] bg-cover bg-[50%_50%]" />
    </section>
  );
};
