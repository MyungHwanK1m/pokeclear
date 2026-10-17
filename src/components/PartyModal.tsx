import React from 'react';
import { CLEAR_PARTY_ENTRIES } from '../data/partyEntries';
import { TYPE_COLORS } from '../utils/colors';
import { X, Users, ShieldCheck, Sparkles } from 'lucide-react';

interface PartyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartyModal: React.FC<PartyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const party = CLEAR_PARTY_ENTRIES[0]; // 초라기 중심 파티

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/40">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                {party.title}
              </h2>
              <p className="text-xs text-slate-400">{party.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 6 Party Members Grid */}
        <div className="overflow-y-auto p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {party.members.map((member, index) => (
              <div
                key={member.pokemonId}
                className="bg-slate-950/80 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Slot No & Sprite */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      ENTRY #{index + 1}
                    </span>
                    <div className="flex items-center space-x-1">
                      {member.types.map((type) => {
                        const style = TYPE_COLORS[type];
                        return (
                          <span
                            key={type}
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${style.bg} ${style.text} ${style.border}`}
                          >
                            {type}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 my-2">
                    <img
                      src={member.spriteUrl}
                      alt={member.nameKo}
                      className="w-16 h-16 object-contain bg-slate-900/80 rounded-xl p-1 border border-slate-800"
                    />
                    <div>
                      <h4 className="font-bold text-slate-100 text-sm">{member.nameKo}</h4>
                      <p className="text-[11px] text-blue-400 font-medium">{member.role}</p>
                      <p className="text-[11px] text-amber-300 mt-0.5">🎒 {member.heldItem}</p>
                    </div>
                  </div>

                  {/* Moves */}
                  <div className="mt-2 text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded-lg border border-slate-800/60">
                    <span className="text-slate-500 font-semibold block mb-0.5">핵심 기술</span>
                    <span className="text-slate-200">{member.keyMoves.join(' / ')}</span>
                  </div>
                </div>

                {/* Synergy */}
                <div className="mt-3 pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-start space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{member.synergyReason}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Synergy Notice */}
          <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-800/40 rounded-2xl p-4 text-xs text-slate-300 flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-blue-300 block mb-1">상성 순환(사이클) 팁</strong>
              초라기에게 치명적인 <strong>[땅]</strong> 타입 공격은 비행/강철 타입인 <strong>아머까오</strong>로 무효화(0배)하고, 
              아머까오의 약점인 <strong>[전기]</strong> 타입 공격은 초라기의 <strong>축전</strong> 특성으로 흡수하여 체력을 회복합니다. 
              이 둘의 교체 플레이만으로도 스토리 트레이너들의 공격을 손쉽게 무력화할 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
