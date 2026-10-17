import React from 'react';
import { PokemonClearGuide } from '../types/pokemon';
import { TYPE_COLORS, DIFFICULTY_BADGES } from '../utils/colors';
import { ShieldAlert, Zap, ArrowRight } from 'lucide-react';

interface PokemonCardProps {
  guide: PokemonClearGuide;
  onSelect: (guide: PokemonClearGuide) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ guide, onSelect }) => {
  const statTotal = Object.values(guide.baseStats).reduce((a, b) => a + b, 0);

  return (
    <div
      onClick={() => onSelect(guide)}
      className="group relative bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-red-500/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors" />

      {/* Top Header: Dex No & Badges */}
      <div className="flex items-center justify-between mb-3 z-10">
        <span className="text-xs font-mono font-bold text-slate-500">
          #{String(guide.id).padStart(3, '0')}
        </span>
        <div className="flex items-center space-x-1.5">
          {guide.isUnevolvedRun && (
            <span className="inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <ShieldAlert className="w-3 h-3 mr-1" />
              진화 금지
            </span>
          )}
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${DIFFICULTY_BADGES[guide.difficulty]}`}>
            {guide.difficulty}
          </span>
        </div>
      </div>

      {/* Pokémon Image & Title */}
      <div className="flex flex-col items-center my-2 z-10">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <img
            src={guide.artworkUrl}
            alt={guide.nameKo}
            className="w-28 h-28 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-red-400 transition-colors mt-2">
          {guide.nameKo}
        </h3>
        <p className="text-xs text-slate-400 capitalize">{guide.nameEn}</p>

        {/* Types */}
        <div className="flex items-center space-x-1.5 mt-2">
          {guide.types.map((type) => {
            const style = TYPE_COLORS[type];
            return (
              <span
                key={type}
                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${style.bg} ${style.text} ${style.border}`}
              >
                {type}
              </span>
            );
          })}
        </div>
      </div>

      {/* Concept Title & Highlights */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 z-10">
        <p className="text-xs font-semibold text-slate-300 text-center line-clamp-1">
          💡 {guide.conceptTitle}
        </p>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-400 bg-slate-950/60 rounded-xl px-3 py-2 border border-slate-800/60">
          <div className="flex items-center space-x-1">
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>종족값: <strong className="text-slate-200">{statTotal}</strong></span>
          </div>
          <div className="flex items-center space-x-1 text-red-400 font-medium group-hover:translate-x-0.5 transition-transform">
            <span>공략 보기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
