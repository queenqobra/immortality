export const SocialMediaFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[linear-gradient(90deg,rgba(78,69,75,1)_0%,rgba(180,159,173,1)_45%,rgba(77,76,77,1)_97%)] py-6">
      <div className="w-full max-w-[1500px] mx-auto px-10 flex items-center justify-between">
        {/* Social media icons */}
        <div className="flex items-center gap-12 scale-[1.7]">
          <a href="#telegram" className="hover:opacity-80 transition-opacity">
            <img src="/Telegram.png" className="w-8 h-8 object-contain" alt="Telegram" />
          </a>
          <a href="#discord" className="hover:opacity-80 transition-opacity">
            <img src="/discord.png" className="w-8 h-8 object-contain" alt="Discord" />
          </a>
          <a href="#youtube" className="hover:opacity-80 transition-opacity">
            <img src="/youtube.png" className="w-8 h-8 object-contain" alt="YouTube" />
          </a>
          <a href="#tiktok" className="hover:opacity-80 transition-opacity">
            <img src="/tiktok.png" className="w-8 h-8 object-contain " alt="TikTok" />
          </a>
        </div>

        {/* Center logo */}
        <img
          src="/logo.png"
          alt="TOI Logo"
          className="h-[90px] object-contain scale-[1.4]"
        />

        {/* Navigation links */}
        <div className="flex items-center  gap-10 scale-[1.3]">
          <a href="#info" className="font-labor text-black text-sm tracking-[1px] hover:opacity-70 transition-opacity">
            ИНФОРМАЦИЯ
          </a>
          <a href="#rules" className="font-labor text-black text-sm tracking-[1px] hover:opacity-70 transition-opacity">
            РЕГЛАМЕНТ
          </a>

        </div>
      </div>
    </footer>
  );
};
