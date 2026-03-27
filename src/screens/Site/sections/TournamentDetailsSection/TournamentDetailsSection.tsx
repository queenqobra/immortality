<section id="info"></section>
export const TournamentDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col overflow-hidden">
      {/* RED BACKGROUND */}
      <img
        src="/pic_red.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none"
        loading="lazy"
      />

      {/* Tab navigation bar */}
      <div className="relative w-full flex justify-center shadow-[0px_4px_4px_#00000040] z-20">
        <div className="w-full h-8 md:h-10 flex items-center justify-center bg-gradient-to-r from-[#2e2e2e] via-[#d9d9d9] to-[#2e2e2e]">
          <span className="font-literature text-black text-sm md:text-lg lg:text-xl tracking-[1px] md:tracking-[2px] drop-shadow-[0_0_10px_black]">
            ИНФОРМАЦИЯ
          </span>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-10 md:top-[40px] left-0 w-full h-[600px] md:h-[1500px] bg-gradient-to-b from-black/100 via-black/40 to-transparent pointer-events-none z-0" />

      {/* Main content area */}
      <div className="flex w-full relative mt-6 md:mt-12 lg:mt-16 flex-col items-center justify-center gap-8 md:gap-12 lg:gap-24 pb-8 px-2 md:px-4 z-10">
        {/* Three info cards row */}
        <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-[170px] z-10 w-full flex-wrap flex-col md:flex-row">
          {/* Card 1: Формат турнира */}
          <div className="relative w-full sm:w-64 md:w-72 lg:w-80 min-h-[300px] md:h-[478px] flex flex-col items-center justify-start pt-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-transparent backdrop-blur-[3.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.75px)_brightness(100%)]" />

            <div className="relative font-literature text-white text-sm md:text-base tracking-[0.5px] md:tracking-[1px] drop-shadow-[0_0_12px_white] text-center mb-4 md:mb-6 px-2">
              ФОРМАТ ТУРНИРА
            </div>

            <div className="absolute w-[95%] flex-1 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-labor font-normal text-white text-[9px] md:text-[10px] text-center tracking-[0.2px] md:tracking-[0.30px] leading-[16px] md:leading-[18px] px-2">
              <span className="block my-1">5X5</span>
              <span className="block my-1">DOUBLE ELIMINATION</span>
              <span className="block my-1">CAPITAINS MODE</span>
              <span className="block my-1">ИГРЫ BO1, гранд-финал BO3</span>
              <span className="block text-base md:text-xl font-bold">32 КОМАНДЫ</span>
            </div>

            <img
              src="/Star.png"
              className="absolute w-6 md:w-8 lg:w-10 top-8 md:top-12 left-1/2 -translate-x-1/2 drop-shadow-[0_0_25px_white]"
              loading="lazy"
            />
          </div>

          {/* Card 2: Даты проведения */}
          <div className="relative w-full sm:w-64 md:w-72 lg:w-80 min-h-[300px] md:h-[478px] flex flex-col items-center justify-start pt-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-transparent backdrop-blur-[3.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.75px)_brightness(100%)]" />

            <div className="relative font-literature text-white text-sm md:text-base tracking-[0.5px] md:tracking-[1px] drop-shadow-[0_0_12px_white] text-center mb-4 md:mb-6 px-2">
              ДАТЫ ПРОВЕДЕНИЯ
            </div>

            <div className="absolute w-[95%] flex-1 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-labor text-white text-[9px] md:text-[10px] text-center tracking-[0.2px] md:tracking-[0.30px] leading-[18px] md:leading-[20px] px-2">
              <span className="block my-1">НАЧАЛО</span>
              <span className="block text-xs md:text-sm font-semibold">28.04.2026 15:00 ПО МСК</span>
              <span className="block my-1">КОНЕЦ</span>
              <span className="block text-xs md:text-sm font-semibold">30.04.2026 01:00 ПО МСК</span>
            </div>

            <img
              src="/Star.png"
              className="absolute w-6 md:w-8 lg:w-10 top-8 md:top-12 left-1/2 -translate-x-1/2 drop-shadow-[0_0_25px_white]"
              loading="lazy"
            />
          </div>

          {/* Card 3: Ограничение рейтинга */}
          <div className="relative w-full sm:w-64 md:w-72 lg:w-80 min-h-[300px] md:h-[478px] flex flex-col items-center justify-start pt-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-transparent backdrop-blur-[3.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.75px)_brightness(100%)]" />

            <div className="relative font-literature text-white text-sm md:text-base tracking-[0.5px] md:tracking-[1px] drop-shadow-[0_0_12px_white] text-center mb-4 md:mb-6 px-2">
              ОГРАНИЧЕНИЕ РЕЙТИНГА
            </div>

            <div className="absolute w-[95%] flex-1 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-labor text-white text-[9px] md:text-[10px] text-center tracking-[0.2px] md:tracking-[0.30px] leading-[18px] md:leading-[20px] px-2 space-y-2">
              <div>
                <span className="block my-1">ОГРАНИЧЕНИЕ ПО РЕЙТИНГУ НА КОМАНДУ</span>
                <span className="block text-base md:text-xl font-bold">30000</span>
              </div>
              <div>
                <span className="block my-1">ИНДИВИДУАЛЬНЫЙ РЕЙТИНГ</span>
                <span className="block text-base md:text-xl font-bold">ОТСУТСТВУЕТ</span>
              </div>
            </div>

            <img
              src="/Star.png"
              className="absolute w-6 md:w-8 lg:w-10 top-8 md:top-12 left-1/2 -translate-x-1/2 drop-shadow-[0_0_25px_white]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Prize pool section */}
        <div className="relative z-10 w-full max-w-2xl lg:max-w-4xl px-2 md:px-4">
          {/* Background panel */}
          <div className="absolute inset-0 bg-[#000000b2] border border-solid border-transparent backdrop-blur-[3.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.75px)_brightness(100%)] rounded-lg" />

          {/* Title: ПРИЗОВОЙ ФОНД */}
          <div className="relative py-4 md:py-6 lg:py-8 flex items-center justify-center [text-shadow:0px_0px_9.36px_#ffffff] font-literature text-white text-2xl md:text-3xl lg:text-4xl tracking-[0.8px] md:tracking-[1px] leading-tight font-normal text-center">
            ПРИЗОВОЙ ФОНД
          </div>

          {/* Prize entries */}
          <div className="relative space-y-2 md:space-y-3 py-4 md:py-6">
            {/* 1st place */}
            <div className="flex items-center justify-center font-labor font-normal text-white text-lg md:text-2xl lg:text-3xl text-center leading-relaxed px-4">
              1 МЕСТО - 6500 РУБЛЕЙ
            </div>

            {/* 2nd place */}
            <div className="flex items-center justify-center font-labor font-normal text-white text-base md:text-xl lg:text-2xl text-center leading-relaxed px-4">
              2 МЕСТО - 3500 РУБЛЕЙ
            </div>

            {/* 3rd place */}
            <div className="flex items-center justify-center font-labor font-normal text-white text-sm md:text-lg lg:text-xl text-center leading-relaxed px-4">
              3 МЕСТО - 2000 РУБЛЕЙ
            </div>
          </div>

          {/* Decorative stars */}
          <img
            src="/Star.png"
            className="absolute w-4 md:w-6 lg:w-8 top-1/4 -left-3 md:-left-4 drop-shadow-[0_0_25px_white]"
            loading="lazy"
          />
          <img
            src="/Star.png"
            className="absolute w-4 md:w-6 lg:w-8 top-1/4 -right-3 md:-right-4 drop-shadow-[0_0_25px_white]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-48 md:h-96 bg-gradient-to-t from-black via-black/90 to-transparent z-0 pointer-events-none" />
    </section>
  );
};
