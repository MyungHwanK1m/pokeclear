import React, { useState, useEffect } from 'react';
import { BasicPokemon, ClearPartyEntry, PartyMember } from '../types/pokemon';
import { TYPE_COLORS } from '../utils/colors';
import { buildCustomPartyForPokemon } from '../utils/partyBuilder';
import { X, Users, ShieldCheck, Sparkles, Search, RefreshCw, Wand2 } from 'lucide-react';

interface PartyModalProps {
  isOpen: boolean;
  onClose: () => void;
  allPokemon: BasicPokemon[];
  initialPokemon?: BasicPokemon | null;
}

export const PartyModal: React.FC<PartyModalProps> = ({
  isOpen,
  onClose,
  allPokemon,
  initialPokemon,
}) => {
  const [selectedMain, setSelectedMain] = useState<BasicPokemon>(() => {
    // Default to initialPokemon or Chinchou (#170)
    if (initialPokemon) return initialPokemon;
    return allPokemon.find((p) => p.id === 170) || allPokemon[0];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [currentParty, setCurrentParty] = useState<ClearPartyEntry | null>(null);

  // Update when initialPokemon changes
  useEffect(() => {
    if (initialPokemon) {
      setSelectedMain(initialPokemon);
      const party = buildCustomPartyForPokemon(initialPokemon);
      setCurrentParty(party);
    } else if (!currentParty && allPokemon.length > 0) {
      const defaultPoke = allPokemon.find((p) => p.id === 170) || allPokemon[0];
      setSelectedMain(defaultPoke);
      const party = buildCustomPartyForPokemon(defaultPoke);
      setCurrentParty(party);
    }
  }, [initialPokemon, allPokemon]);

  if (!isOpen || !currentParty) return null;

  // Search filter for changing the main protagonist
  const searchResults = searchQuery.trim()
    ? allPokemon
        .filter(
          (p) =>
            p.nameKo.includes(searchQuery.trim()) ||
            p.nameEn.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
            String(p.id) === searchQuery.trim()
        )
        .slice(0, 8)
    : [];

  const handleSelectProtagonist = (pokemon: BasicPokemon) => {
    setSelectedMain(pokemon);
    const newParty = buildCustomPartyForPokemon(pokemon);
    setCurrentParty(newParty);
    setSearchQuery('');
    setIsSearching(false);
  };

  const handleRegenerate = () => {
    const newParty = buildCustomPartyForPokemon(selectedMain);
    setCurrentParty(newParty);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                맞춤형 스토리 추천 파티 엔트리
              </h2>
              <p className="text-xs text-slate-400">
                원하는 어떤 포켓몬이든 주역으로 설정하여 상성 보완 6마리 완성형 파티를 생성합니다.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Protagonist Selector Control Bar */}
        <div className="bg-slate-950/80 p-4 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Current Main Selection Display */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <img
              src={selectedMain.artworkUrl}
              alt={selectedMain.nameKo}
              className="w-12 h-12 object-contain bg-slate-900 rounded-xl p-1 border border-slate-800"
              onError={(e) => {
                (e.target as HTMLImageElement).src = selectedMain.spriteUrl;
              }}
            />
            <div>
              <div className="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                선택된 주인공 포켓몬
              </div>
              <div className="flex items-center space-x-2">
                <strong className="text-sm font-bold text-white">
                  #{String(selectedMain.id).padStart(3, '0')} {selectedMain.nameKo}
                </strong>
                <div className="flex space-x-1">
                  {selectedMain.types.map((type) => {
                    const style = TYPE_COLORS[type] || TYPE_COLORS['노말'];
                    return (
                      <span
                        key={type}
                        className={`text-[9px] font-semibold px-1.5 py-0.2 rounded border ${style.bg} ${style.text} ${style.border}`}
                      >
                        {type}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Search or Pick Another Pokemon */}
          <div className="relative flex-1 max-w-sm w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearching(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearching(true);
                }}
                placeholder="다른 포켓몬으로 파티 구성하기 (이름/번호)..."
                className="w-full bg-slate-900 border border-slate-700 focus:border-red-500 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Dropdown Results */}
            {isSearching && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden divide-y divide-slate-800 max-h-60 overflow-y-auto">
                {searchResults.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProtagonist(p)}
                    className="w-full px-3 py-2 text-left hover:bg-slate-800 flex items-center justify-between text-xs transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <img src={p.spriteUrl} alt={p.nameKo} className="w-7 h-7 object-contain" />
                      <span className="font-bold text-slate-200">
                        #{p.id} {p.nameKo}
                      </span>
                    </div>
                    <div className="flex space-x-1">
                      {p.types.map((t) => (
                        <span key={t} className="text-[10px] text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Regenerate Button */}
          <button
            onClick={handleRegenerate}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors shrink-0"
            title="현재 주인공 기준 파티 재구성"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>파티 재추천</span>
          </button>
        </div>

        {/* 6 Party Members Grid */}
        <div className="overflow-y-auto p-6 space-y-4 flex-1">
          <div className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-start gap-2">
            <Wand2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{currentParty.description}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentParty.members.map((member, index) => {
              const isLead = index === 0;
              return (
                <div
                  key={`${member.pokemonId}-${index}`}
                  className={`rounded-2xl border p-4 flex flex-col justify-between transition-all ${
                    isLead
                      ? 'bg-gradient-to-b from-amber-950/30 to-slate-950/80 border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Slot No & Types */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isLead ? 'text-amber-400' : 'text-slate-500'
                        }`}
                      >
                        {isLead ? '👑 주역 엔트리 #1' : `ENTRY #${index + 1}`}
                      </span>
                      <div className="flex items-center space-x-1">
                        {member.types.map((type) => {
                          const style = TYPE_COLORS[type] || TYPE_COLORS['노말'];
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

                    {/* Sprite & Info */}
                    <div className="flex items-center space-x-3 my-2">
                      <img
                        src={member.spriteUrl}
                        alt={member.nameKo}
                        className="w-16 h-16 object-contain bg-slate-900/80 rounded-xl p-1 border border-slate-800 shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm">{member.nameKo}</h4>
                        <p className={`text-[11px] font-medium ${isLead ? 'text-amber-300' : 'text-blue-400'}`}>
                          {member.role}
                        </p>
                        <p className="text-[11px] text-amber-300 mt-0.5">🎒 {member.heldItem}</p>
                      </div>
                    </div>

                    {/* Recommended Nature & EV Spread */}
                    <div className="mt-2 bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-[11px] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-semibold">추천 성격</span>
                        <span className="text-emerald-400 font-bold">{member.nature}</span>
                      </div>
                      {member.evSummary && (
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span>노력치 분배</span>
                          <span className="text-slate-300">{member.evSummary}</span>
                        </div>
                      )}
                    </div>

                    {/* Key Moves */}
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
              );
            })}
          </div>

          {/* Strategy Tip */}
          <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-800/40 rounded-2xl p-4 text-xs text-slate-300 flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-blue-300 block mb-1">스토리 상성 순환(사이클) 전략</strong>
              스토리 진행 중 강력한 관장이나 사천왕을 만났을 때, 주인공 포켓몬이 불리한 상성에 처하면 
              위 5마리의 동료 중 해당 공격을 <strong>0배(무효)</strong> 또는 <strong>0.5배(반감)</strong>로 받아낼 수 있는 포켓몬으로 
              안전하게 교체하여 피해 없이 전투를 주도할 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
