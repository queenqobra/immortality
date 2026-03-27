import { useState } from "react";

interface MatchData {
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
}

const generatePlaceholderTeams = (count: number): string[] => {
  const teams: string[] = [];
  for (let i = 1; i <= count; i++) {
    teams.push(`Команда ${i}`);
  }
  return teams;
};

const MatchCard = ({ match, isCompact = false }: { match: MatchData; isCompact?: boolean }) => (
  <div className={`relative flex flex-col border border-[#333] bg-[#0a0a0a] transition-colors hover:bg-[#1a1a1a] ${isCompact ? 'w-24 md:w-32 lg:w-[140px]' : 'w-28 md:w-36 lg:w-[160px]'}`}>
    <div className="flex items-center justify-between px-1.5 md:px-2 py-1 md:py-1.5 border-b border-[#222]">
      <span className="font-labor text-[8px] md:text-[9px] text-[#ccc] tracking-wider truncate flex-1">
        {match.team1}
      </span>
      <span className="font-orbitron text-[9px] md:text-[10px] text-white ml-1 flex-shrink-0">
        {match.score1 ?? "-"}
      </span>
    </div>
    <div className="flex items-center justify-between px-1.5 md:px-2 py-1 md:py-1.5">
      <span className="font-labor text-[8px] md:text-[9px] text-[#ccc] tracking-wider truncate flex-1">
        {match.team2}
      </span>
      <span className="font-orbitron text-[9px] md:text-[10px] text-white ml-1 flex-shrink-0">
        {match.score2 ?? "-"}
      </span>
    </div>
  </div>
);

const BracketColumn = ({
  matches,
  roundLabel,
  spacing = 0,
  isCompact = false,
}: {
  matches: MatchData[];
  roundLabel: string;
  spacing?: number;
  isCompact?: boolean;
}) => {
  const mobileSpacing = Math.max(2, spacing * 0.3);
  const tabletSpacing = Math.max(4, spacing * 0.6);

  return (
    <div className="flex flex-col items-center flex-shrink-0">
      <div className="font-literature text-[8px] md:text-[10px] lg:text-[11px] text-[#888] tracking-wider mb-1.5 md:mb-2 lg:mb-3 uppercase whitespace-nowrap">
        {roundLabel}
      </div>
      <div
        className="flex flex-col items-center gap-1 md:gap-1.5"
        style={{
          gap: `clamp(0.25rem, ${mobileSpacing}px, ${spacing}px)`
        }}
      >
        {matches.map((match, i) => (
          <MatchCard key={i} match={match} isCompact={isCompact} />
        ))}
      </div>
    </div>
  );
};

export const TournamentBracketSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"upper" | "lower">("upper");
  const teams = generatePlaceholderTeams(32);

  // Upper bracket: 16 → 8 → 4 → 2 → 1
  const upperR1: MatchData[] = [];
  for (let i = 0; i < 16; i++) {
    upperR1.push({ team1: teams[i * 2], team2: teams[i * 2 + 1] });
  }
  const upperR2: MatchData[] = Array(8).fill(null).map((_, i) => ({
    team1: `Победитель ${i * 2 + 1}`, team2: `Победитель ${i * 2 + 2}`,
  }));
  const upperR3: MatchData[] = Array(4).fill(null).map((_, i) => ({
    team1: `UB QF ${i * 2 + 1}`, team2: `UB QF ${i * 2 + 2}`,
  }));
  const upperSF: MatchData[] = Array(2).fill(null).map((_, i) => ({
    team1: `UB SF ${i * 2 + 1}`, team2: `UB SF ${i * 2 + 2}`,
  }));
  const upperFinal: MatchData[] = [{ team1: "UB Финалист 1", team2: "UB Финалист 2" }];

  // Lower bracket
  const lowerR1: MatchData[] = Array(8).fill(null).map((_, i) => ({
    team1: `LB R1 ${i * 2 + 1}`, team2: `LB R1 ${i * 2 + 2}`,
  }));
  const lowerR2: MatchData[] = Array(4).fill(null).map((_, i) => ({
    team1: `LB R2 ${i * 2 + 1}`, team2: `LB R2 ${i * 2 + 2}`,
  }));
  const lowerR3: MatchData[] = Array(2).fill(null).map((_, i) => ({
    team1: `LB R3 ${i * 2 + 1}`, team2: `LB R3 ${i * 2 + 2}`,
  }));
  const lowerFinal: MatchData[] = [{ team1: "LB Финалист 1", team2: "LB Финалист 2" }];

  return (
    <section id="grid" className="relative w-full py-8 md:py-16 px-2 md:px-4 bg-black/30">
      {/* Section title */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="font-literature text-white text-2xl md:text-4xl lg:text-5xl tracking-[1px] drop-shadow-[0_0_10px_#ffffff55]">
          СЕТКА ТУРНИРА
        </h2>
        <div className="w-40 md:w-52 h-px bg-gradient-to-r from-transparent via-[#666] to-transparent mx-auto mt-2 md:mt-3" />
      </div>

      {/* Bracket tabs */}
      <div className="flex items-center justify-center gap-0 mb-6 md:mb-8 flex-wrap">
        <button
          onClick={() => setActiveTab("upper")}
          className={`px-4 md:px-8 py-2 md:py-2.5 font-labor text-xs md:text-sm tracking-widest transition-all border border-[#333] whitespace-nowrap ${
            activeTab === "upper"
              ? "bg-gradient-to-r from-[#8b0000] to-[#450000] text-white border-[#8b0000]"
              : "bg-[#0a0a0a] text-[#888] hover:text-white hover:border-[#555]"
          }`}
        >
          UPPER
        </button>
        <button
          onClick={() => setActiveTab("lower")}
          className={`px-4 md:px-8 py-2 md:py-2.5 font-labor text-xs md:text-sm tracking-widest transition-all border border-[#333] border-l-0 whitespace-nowrap ${
            activeTab === "lower"
              ? "bg-gradient-to-r from-[#8b0000] to-[#450000] text-white border-[#8b0000]"
              : "bg-[#0a0a0a] text-[#888] hover:text-white hover:border-[#555]"
          }`}
        >
          LOWER
        </button>
      </div>

      {/* Bracket grid - responsive container */}
      <div className="w-full overflow-x-auto pb-4 md:pb-6">
        <div className="inline-flex w-full justify-center min-w-max">
          {activeTab === "upper" ? (
            <div className="flex items-start gap-3 md:gap-6 px-4">
              <BracketColumn matches={upperR1} roundLabel="R1" spacing={2} isCompact />
              <BracketColumn matches={upperR2} roundLabel="R2" spacing={30} />
              <BracketColumn matches={upperR3} roundLabel="QF" spacing={80} />
              <BracketColumn matches={upperSF} roundLabel="SF" spacing={190} />
              <BracketColumn matches={upperFinal} roundLabel="FINAL" spacing={0} />
            </div>
          ) : (
            <div className="flex items-start gap-3 md:gap-6 px-4">
              <BracketColumn matches={lowerR1} roundLabel="LB R1" spacing={2} isCompact />
              <BracketColumn matches={lowerR2} roundLabel="LB R2" spacing={30} />
              <BracketColumn matches={lowerR3} roundLabel="LB R3" spacing={80} />
              <BracketColumn matches={lowerFinal} roundLabel="LB FINAL" spacing={0} />
            </div>
          )}
        </div>
      </div>

      {/* Grand Final */}
      <div className="flex flex-col items-center mt-8 md:mt-12 px-4">
        <div className="font-literature text-[#d4af37] text-xs md:text-sm lg:text-base tracking-widest mb-2 md:mb-3 uppercase drop-shadow-[0_0_8px_#d4af3755]">
          ГРАНД-ФИНАЛ (BO3)
        </div>
        <div className="relative w-full max-w-xs md:max-w-sm">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8b0000] via-[#d4af37] to-[#8b0000] opacity-30 blur-sm" />
          <div className="relative flex flex-col border border-[#d4af37]/40 bg-[#0a0a0a]">
            <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 border-b border-[#333]">
              <span className="font-labor text-[8px] md:text-[10px] text-[#d4af37] tracking-wider truncate">ПОБЕДИТЕЛЬ UB</span>
              <span className="font-orbitron text-[10px] md:text-[11px] text-white ml-2 flex-shrink-0">-</span>
            </div>
            <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2">
              <span className="font-labor text-[8px] md:text-[10px] text-[#ccc] tracking-wider truncate">ПОБЕДИТЕЛЬ LB</span>
              <span className="font-orbitron text-[10px] md:text-[11px] text-white ml-2 flex-shrink-0">-</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
