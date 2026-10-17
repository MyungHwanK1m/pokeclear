import React from 'react';
import { Search, Sparkles, Filter, Gamepad2, Gauge } from 'lucide-react';
import { PokemonType } from '../types/pokemon';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedGeneration: number | 'all';
  onGenerationChange: (gen: number | 'all') => void;
  selectedType: PokemonType | 'all';
  onTypeChange: (type: PokemonType | 'all') => void;
  selectedDifficulty: string;
  onDifficultyChange: (diff: string) => void;
  selectedGameAdmission: string;
  onGameAdmissionChange: (game: string) => void;
  curatedOnly: boolean;
  onCuratedOnlyToggle: () => void;
  totalCount: number;
}

const GENERATIONS = [
  { id: 'all', label: '전체 세대' },
  { id: 1, label: '1세대 (관동)' },
  { id: 2, label: '2세대 (성도)' },
  { id: 3, label: '3세대 (호연)' },
  { id: 4, label: '4세대 (신오)' },
  { id: 5, label: '5세대 (하나)' },
  { id: 6, label: '6세대 (칼로스)' },
  { id: 7, label: '7세대 (알로라)' },
  { id: 8, label: '8세대 (가라르)' },
  { id: 9, label: '9세대 (팔데아)' },
];

const MAIN_GAME_ADMISSIONS = [
  { id: 'all', label: '전체 (전국도감)' },
  { id: 'SV', label: '9세대 스칼렛/바이올렛' },
  { id: 'SwSh', label: '8세대 소드/실드' },
  { id: 'BDSP', label: '4세대 리메이크(BDSP)' },
  { id: 'USUM', label: '7세대 이전 전원 입국' },
];

const SUB_GAME_ADMISSIONS = [
  { id: 'PLA', label: '레전드 아르세우스 (히스이 도감)' },
  { id: 'LGPE', label: '레츠고! 피카츄·이브이 (관동 도감)' },
];

const DIFFICULTIES = ['전체', '쉬움', '보통', '어려움', '익스트림'];

const POKEMON_TYPES: PokemonType[] = [
  '노말', '불꽃', '물', '풀', '전기', '얼음',
  '격투', '독', '땅', '비행', '에스퍼', '벌레',
  '바위', '고스트', '드래곤', '악', '강철', '페어리'
];

export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedGeneration,
  onGenerationChange,
  selectedType,
  onTypeChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedGameAdmission,
  onGameAdmissionChange,
  curatedOnly,
  onCuratedOnlyToggle,
  totalCount,
}) => {
  return (
    <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl">
      {/* Top Search & Toggle */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="포켓몬 이름 (초라기, 피카츄, 리자몽...) 또는 전국도감 번호 검색 (1~1025)"
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-red-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Curated Special Guides Only Toggle */}
        <button
          onClick={onCuratedOnlyToggle}
          className={`flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
            curatedOnly
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md shadow-amber-500/10'
              : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>전용 추천 가이드 보유 포켓몬만</span>
        </button>
      </div>

      {/* Game Admission Filter (본가 타이틀별 입국 여부 필터) */}
      <div className="space-y-1.5 pt-1 border-t border-slate-800/60">
        <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 text-purple-400 font-bold">
            <Gamepad2 className="w-3.5 h-3.5" />
            본가 정규 타이틀 입국(등장) 필터
          </span>
          <span className="font-mono text-slate-400">
            총 <strong className="text-red-400 font-bold">{totalCount}</strong>마리 표시 중
          </span>
        </div>
        <div className="flex items-center space-x-1 overflow-x-auto pb-1 scrollbar-thin">
          {MAIN_GAME_ADMISSIONS.map((game) => (
            <button
              key={game.id}
              onClick={() => onGameAdmissionChange(game.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedGameAdmission === game.id
                  ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20'
                  : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/80'
              }`}
            >
              {game.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-game Admission Filter (서브/외전 게임 등장 필터) */}
      <div className="space-y-1.5 pt-1 border-t border-slate-800/60">
        <div className="flex items-center space-x-1.5 text-xs text-teal-400 font-bold">
          <span>🌲 서브/외전 타이틀 등장 필터 (레알세 & 레츠고)</span>
        </div>
        <div className="flex items-center space-x-1 overflow-x-auto pb-1 scrollbar-thin">
          {SUB_GAME_ADMISSIONS.map((game) => (
            <button
              key={game.id}
              onClick={() => onGameAdmissionChange(game.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedGameAdmission === game.id
                  ? 'bg-teal-600 text-white font-bold shadow-md shadow-teal-600/20'
                  : 'bg-slate-950/60 text-teal-300 hover:text-white hover:bg-slate-800/60 border border-teal-900/60'
              }`}
            >
              {game.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Difficulty Filter (클리어 난이도 필터) */}
      <div className="space-y-1.5 pt-1 border-t border-slate-800/60">
        <div className="flex items-center space-x-1.5 text-xs text-amber-400 font-bold">
          <Gauge className="w-3.5 h-3.5" />
          <span>클리어 난이도 필터</span>
        </div>
        <div className="flex items-center space-x-1 overflow-x-auto pb-1">
          {DIFFICULTIES.map((diff) => (
            <button
              key={diff}
              onClick={() => onDifficultyChange(diff)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedDifficulty === diff
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/80'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Generation Tabs */}
      <div className="space-y-1.5 pt-1 border-t border-slate-800/60">
        <div className="text-xs text-slate-400 font-medium">세대별 필터</div>
        <div className="flex items-center space-x-1 overflow-x-auto pb-1 scrollbar-thin">
          {GENERATIONS.map((gen) => (
            <button
              key={gen.id}
              onClick={() => onGenerationChange(gen.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedGeneration === gen.id
                  ? 'bg-red-500 text-white font-bold shadow-md shadow-red-500/20'
                  : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/80'
              }`}
            >
              {gen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Type Selector Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-thin pt-1 border-t border-slate-800/60">
        <button
          onClick={() => onTypeChange('all')}
          className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
            selectedType === 'all'
              ? 'bg-slate-200 text-slate-900 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          모든 타입
        </button>
        {POKEMON_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all ${
              selectedType === type
                ? 'bg-slate-100 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};
