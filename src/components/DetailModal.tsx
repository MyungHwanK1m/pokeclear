import React from 'react';
import { PokemonClearGuide } from '../types/pokemon';
import { TYPE_COLORS, DIFFICULTY_BADGES } from '../utils/colors';
import { X, Sparkles, Shield, Swords, Heart, Zap, Crosshair, HelpCircle, Trophy } from 'lucide-react';

interface DetailModalProps {
  guide: PokemonClearGuide | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ guide, onClose }) => {
  if (!guide) return null;

  const statTotal = Object.values(guide.baseStats).reduce((a, b) => a + b, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/40">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-sm font-bold text-slate-500">
              #{String(guide.id).padStart(3, '0')}
            </span>
            <h2 className="text-xl font-extrabold text-white">
              {guide.nameKo} <span className="text-sm font-normal text-slate-400 capitalize">({guide.nameEn})</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Top Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
            {/* Artwork & Types */}
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={guide.artworkUrl}
                alt={guide.nameKo}
                className="w-36 h-36 object-contain drop-shadow-xl"
              />
              <div className="flex items-center space-x-1.5 mt-3">
                {guide.types.map((type) => {
                  const style = TYPE_COLORS[type];
                  return (
                    <span
                      key={type}
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${style.bg} ${style.text} ${style.border}`}
                    >
                      {type}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Concept & Difficulty Banner */}
            <div className="md:col-span-2 flex flex-col justify-center space-y-3">
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DIFFICULTY_BADGES[guide.difficulty]}`}>
                  클리어 난이도: {guide.difficulty}
                </span>
                {guide.isUnevolvedRun && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    미진화 챌린지
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-5 h-5 text-amber-400" />
                {guide.conceptTitle}
              </h3>
              
              {/* Base Stats Quick Bar */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs">
                <div className="flex justify-between text-slate-400 font-semibold mb-1">
                  <span>기본 종족값 총합</span>
                  <span className="text-slate-200">{statTotal}</span>
                </div>
                <div className="grid grid-cols-6 gap-1 text-center font-mono">
                  <div className="bg-slate-800/50 p-1 rounded">HP {guide.baseStats.hp}</div>
                  <div className="bg-slate-800/50 p-1 rounded">공 {guide.baseStats.attack}</div>
                  <div className="bg-slate-800/50 p-1 rounded">방 {guide.baseStats.defense}</div>
                  <div className="bg-slate-800/50 p-1 rounded">특공 {guide.baseStats.spAttack}</div>
                  <div className="bg-slate-800/50 p-1 rounded">특방 {guide.baseStats.spDefense}</div>
                  <div className="bg-slate-800/50 p-1 rounded">스핏 {guide.baseStats.speed}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Setups: 특성 / 성격 / 지닌물건 */}
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-red-400" />
              핵심 3요소 추천 세팅
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">추천 특성</div>
                <div className="font-bold text-slate-100 text-sm">{guide.recommendedSetup.ability.nameKo}</div>
                <div className="text-xs text-slate-400 mt-2 leading-relaxed">{guide.recommendedSetup.ability.reason}</div>
              </div>

              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">추천 성격</div>
                <div className="font-bold text-slate-100 text-sm">{guide.recommendedSetup.nature.nameKo}</div>
                <div className="text-xs text-emerald-400 mt-2 font-medium">{guide.recommendedSetup.nature.statChange}</div>
              </div>

              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">필수 지닌물건</div>
                <div className="font-bold text-amber-300 text-sm">{guide.recommendedSetup.heldItem.nameKo}</div>
                <div className="text-xs text-slate-400 mt-2 leading-relaxed">{guide.recommendedSetup.heldItem.reason}</div>
              </div>
            </div>
          </div>

          {/* Effort Values (노력치) */}
          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              추천 노력치 (EVs) 분배
            </h4>
            <p className="text-xs text-slate-300 mb-3">{guide.recommendedSetup.evSpread.summary}</p>
          </div>

          {/* 4 Moveset Slots (스토리 불도저 기술배치 4선) */}
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Swords className="w-4 h-4 text-blue-400" />
              스토리 클리어 기술 배치 (4슬롯)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guide.recommendedSetup.moveset.map((move) => {
                const typeStyle = TYPE_COLORS[move.type];
                return (
                  <div key={move.slot} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono font-bold text-slate-500">SLOT {move.slot}</span>
                        <div className="flex items-center space-x-1.5">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${typeStyle.bg} ${typeStyle.text} ${typeStyle.border}`}>
                            {move.type}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                            {move.category}
                          </span>
                        </div>
                      </div>
                      <h5 className="font-bold text-slate-100 text-base">{move.nameKo}</h5>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed">
                      💬 {move.reason}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Boss Tips & Key Strategies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <h4 className="text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                핵심 운용 전략
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                {guide.keyStrategies.map((strat, idx) => (
                  <li key={idx} className="leading-relaxed">{strat}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <h4 className="text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-yellow-400" />
                사천왕/보스전 결전 팁
              </h4>
              <div className="space-y-3">
                {guide.bossTips.map((tip, idx) => (
                  <div key={idx} className="text-xs">
                    <strong className="text-amber-400 block mb-0.5">📌 {tip.title}</strong>
                    <p className="text-slate-300 leading-relaxed">{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
