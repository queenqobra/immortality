export const SocialMediaFooterSection = (): JSX.Element => {
  const navLinks = [{ label: "информация" }, { label: "регламент" }];

  return (
    <footer className="flex w-full items-center justify-center gap-[150px] pl-[45px] pr-0 pt-[3px] pb-[11px] bg-[linear-gradient(90deg,rgba(78,69,75,1)_0%,rgba(180,159,173,1)_45%,rgba(77,76,77,1)_97%)] min-h-[139px]">
      {/* Social media icons */}
      <div className="relative w-[335.35px] h-[45.75px] flex-shrink-0">
        <div className="absolute top-1 left-0 w-[42px] h-[42px] bg-[url(/vector-2.svg)] bg-[100%_100%]" />
        <div className="absolute top-[7px] left-[100px] w-[41px] h-[30px] bg-[url(/layer-2.svg)] bg-[100%_100%]" />
        <div className="absolute top-[7px] left-[199px] w-[45px] h-[31px] bg-[url(/vector.svg)] bg-[100%_100%]" />
        <div className="absolute top-0 left-[303px] w-8 h-[37px] bg-[url(/vector-1.svg)] bg-[100%_100%]" />
      </div>

      {/* Center logo */}
      <div className="flex w-[255px] h-[127px] items-center justify-center gap-2.5 flex-shrink-0 shadow-[0px_4px_4px_#000000eb]">
        <img
          className="w-[83.29px] h-[124.81px] object-cover"
          alt="Logo"
          src="/logo.png"
        />
      </div>

      {/* Navigation links */}
      <div className="relative w-[380px] h-[74px] flex-shrink-0">
        <div className="absolute top-2.5 left-0 w-[126px] h-[54px] flex">
          <div className="flex items-center justify-center flex-1 [font-family:'Labor_Union-Regular',Helvetica] text-black text-sm tracking-[0.42px] leading-[54px] whitespace-nowrap font-normal text-center cursor-pointer hover:opacity-80 transition-opacity">
            информация
          </div>
        </div>

        <div className="absolute top-0 left-[227px] w-[153px] h-[74px] flex">
          <div className="flex items-center justify-center flex-1 [font-family:'Labor_Union-Regular',Helvetica] text-black text-sm tracking-[0.42px] leading-[54px] font-normal text-center cursor-pointer hover:opacity-80 transition-opacity">
            регламент
          </div>
        </div>
      </div>
    </footer>
  );
};
