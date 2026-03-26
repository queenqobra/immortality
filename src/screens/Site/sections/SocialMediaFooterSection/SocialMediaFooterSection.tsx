export const SocialMediaFooterSection = (): JSX.Element => {
  const navLinks = [{ label: "информация" }, { label: "регламент" }];

  return (
    <footer className="flex w-full items-center justify-center gap-[150px] pl-[45px] pr-0 pt-[3px] pb-[11px] bg-[linear-gradient(90deg,rgba(78,69,75,1)_0%,rgba(180,159,173,1)_45%,rgba(77,76,77,1)_97%)] min-h-[139px]">
      {/* Social media icons */}
       <div className="flex items-center gap-8">
        <a href="#">
          <img src="/Telegram.png" className="w-8 h-8 object-contain" />
        </a>
        <a href="#">
          <img src="/discord.png" className="w-8 h-8 object-contain" />
        </a>
        <a href="#">
          <img src="/youtube.png" className="w-8 h-8 object-contain" />
        </a>
        <a href="#">
          <img src="/tiktok.png" className="w-8 h-8 object-contain" />
        </a>
      </div>

      {/* Center logo */}
      <div className="flex items-center justify-center">
        <img
          src="/logo.png"
          alt="logo"
          className="h-[90px] object-contain"
          style={{ background: "transparent" }}
        />
      </div>


      {/* Navigation links */}
      <div className="relative w-[380px] h-[74px] flex-shrink-0">
    
        <div className="absolute top-2.5 left-0 w-[126px] h-[54px] flex">
          <div className="flex items-center font-Labor justify-center flex-1 text-black text-sm tracking-[0.42px] leading-[54px] whitespace-nowrap font-normal text-center cursor-pointer hover:opacity-80 transition-opacity">
            ИНФОРМАЦИЯ
          </div>
      
        </div>

        <div className="absolute top-0 left-[227px] w-[153px] h-[74px] flex">
        
          <div className="flex items-center font-labor justify-center flex-1  text-black text-sm tracking-[0.42px] leading-[54px] font-normal text-center cursor-pointer hover:opacity-80 transition-opacity">
            РЕГЛАМЕНТ
          </div>
        </div>
      
      </div>
    </footer>
  );
};
