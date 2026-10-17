import React from 'react';
import { BasicPokemon, PokemonClearGuide } from '../types/pokemon';
import { TYPE_COLORS, DIFFICULTY_BADGES } from '../utils/colors';
import { ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

interface PokemonCardProps {
  pokemon: BasicPokemon;
  guide?: PokemonClearGuide;
  onSelect: (pokemon: BasicPokemon, guide?: PokemonClearGuide) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, guide, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(pokemon, guide)}
      className="group relative bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-red-500/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors" />

      {/* Top Header: Dex No & Badges */}
      <div className="flex items-center justify-between mb-3 z-10">
        <span className="text-xs font-mono font-bold text-slate-500">
          #{String(pokemon.id).padStart(3, '0')}
        </span>
        <div className="flex items-center space-x-1.5">
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            {pokemon.generation}세대
          </span>
          {guide?.isUnevolvedRun && (
            <span className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <ShieldAlert className="w-3 h-3 mr-0.5" />
              진화 금지
            </span>
          )}
          {guide && (
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${DIFFICULTY_BADGES[guide.difficulty]}`}>
              {guide.difficulty}
            </span>
          )}
        </div>
      </div>

      {/* Pokémon Image & Title */}
      <div className="flex flex-col items-center my-2 z-10">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <img
            src={pokemon.artworkUrl}
            alt={pokemon.nameKo}
            className="w-24 h-24 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              // fallback to sprite if artwork 404
              (e.target as HTMLImageElement).src = pokemon.spriteUrl;
            }}
          />
        </div>
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-red-400 transition-colors mt-2 text-center">
          {pokemon.nameKo}
        </h3>
        <p className="text-xs text-slate-400 capitalize">{pokemon.nameEn}</p>

        {/* Types */}
        <div className="flex items-center space-x-1.5 mt-2">
          {pokemon.types.map((type) => {
            const style = TYPE_COLORS[type] || TYPE_COLORS['노말'];
            return (
              <span
                key={type}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${style.bg} ${style.text} ${style.border}`}
              >
                {type}
              </span>
            );
          })}
        </div>
      </div>

      {/* Footer Highlight */}
      <div className="mt-3 pt-3 border-t border-slate-800/80 z-10">
        <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/60 rounded-xl px-3 py-2 border border-slate-800/60">
          <div className="flex items-center space-x-1 text-slate-300 line-clamp-1">
            {guide ? (
              <span className="text-[11px] font-medium text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {guide.conceptTitle}
              </span>
            ) : (
              <span className="text-[11px] text-slate-400">클리어 빌드 생성</span>
            )}
          </div>
          <div className="flex items-center space-x-1 text-red-400 font-medium group-hover:translate-x-0.5 transition-transform shrink-0 ml-1">
            <span className="text-[11px]">가이드</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
