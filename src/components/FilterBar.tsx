import React from 'react';
import { Search, Filter, ShieldAlert } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (diff: string) => void;
  unevolvedOnly: boolean;
  onUnevolvedOnlyToggle: () => void;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  unevolvedOnly,
  onUnevolvedOnlyToggle,
  totalCount,
}) => {
  const difficulties = ['전체', '쉬움', '보통', '어려움', '익스트림'];

  return (
    <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 p-4 space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="포켓몬 이름 (초라기, 피카츄...) 또는 도감 번호 검색"
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-red-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Unevolved Only Toggle */}
        <button
          onClick={onUnevolvedOnlyToggle}
          className={`flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
            unevolvedOnly
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md shadow-amber-500/10'
              : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>미진화 챌린지만</span>
        </button>
      </div>

      {/* Difficulty Tabs & Counter */}
      <div className="flex items-center justify-between pt-1 flex-wrap gap-2">
        <div className="flex items-center space-x-1 overflow-x-auto py-1">
          {difficulties.map((diff) => (
            <button
              key={diff}
              onClick={() => onDifficultyChange(diff)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedDifficulty === diff
                  ? 'bg-red-500 text-white font-bold shadow-sm shadow-red-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 font-mono">
          총 <strong className="text-slate-300 font-bold">{totalCount}</strong>마리의 클리어 가이드
        </div>
      </div>
    </div>
  );
};
