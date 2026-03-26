export const TournamentBracketSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-20 bg-black">
      {/* Container for grid section */}
      <div className="relative w-full max-w-[1440px] flex flex-col items-center justify-center">
        {/* Top decorative cubes image */}
        <div className="relative w-full h-[200px] flex items-center justify-center mb-8">
          <img
            className="w-full h-auto object-contain"
            alt="Cubes decoration"
            src="/cubes.png"
          />
        </div>

        {/* Tournament grid/bracket - placeholder */}
        <div className="relative w-full flex items-center justify-center py-12 px-4">
          <div className="w-full h-[400px] border border-white/20 rounded-lg flex items-center justify-center bg-black/40 backdrop-blur-md">
            <span className="text-white/50 text-xl font-labor">Сетка турнира</span>
          </div>
        </div>

        {/* Bottom decorative cubeslines image */}
        <div className="relative w-full h-[200px] flex items-center justify-center mt-8">
          <img
            className="w-full h-auto object-contain"
            alt="Cubes lines decoration"
            src="/cubeslines.png"
          />
        </div>
      </div>
    </section>
  );
};