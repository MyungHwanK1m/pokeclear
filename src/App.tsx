import React, { useState, useMemo } from 'react';
import { POKEMON_CLEAR_GUIDES } from './data/clearGuides';
import { PokemonClearGuide } from './types/pokemon';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { PokemonCard } from './components/PokemonCard';
import { DetailModal } from './components/DetailModal';
import { PartyModal } from './components/PartyModal';
import { Sparkles, Compass } from 'lucide-react';

export const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('전체');
  const [unevolvedOnly, setUnevolvedOnly] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<PokemonClearGuide | null>(null);
  const [isPartyModalOpen, setIsPartyModalOpen] = useState(false);

  // Filtered Pokémon Guides
  const filteredGuides = useMemo(() => {
    return POKEMON_CLEAR_GUIDES.filter((guide) => {
      const matchSearch =
        guide.nameKo.includes(searchTerm) ||
        guide.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(guide.id) === searchTerm;

      const matchDifficulty =
        selectedDifficulty === '전체' || guide.difficulty === selectedDifficulty;

      const matchUnevolved = !unevolvedOnly || guide.isUnevolvedRun;

      return matchSearch && matchDifficulty && matchUnevolved;
    });
  }, [searchTerm, selectedDifficulty, unevolvedOnly]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Top Navigation */}
      <Navbar onOpenPartyModal={() => setIsPartyModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950/60 via-slate-900 to-indigo-950/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>포켓몬 본가 스토리 공략 전용 도감</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              최애 포켓몬과 미진화체로 <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                챔피언 엔딩을 정복하세요!
              </span>
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              실전 랭크배틀이 아닌, 오직 <strong>본가 스토리 클리어</strong>에 특화된 성격, 
              노력치, 4슬롯 기술배치 및 파티 시너지 엔트리를 제공합니다.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          unevolvedOnly={unevolvedOnly}
          onUnevolvedOnlyToggle={() => setUnevolvedOnly((prev) => !prev)}
          totalCount={filteredGuides.length}
        />

        {/* Card Grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGuides.map((guide) => (
              <PokemonCard
                key={guide.id}
                guide={guide}
                onSelect={(selected) => setSelectedGuide(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800/80">
            <Compass className="w-12 h-12 text-slate-600 mx-auto mb-3 animate-spin" style={{ animationDuration: '6s' }} />
            <h3 className="text-base font-bold text-slate-400">일치하는 포켓몬 가이드가 없습니다</h3>
            <p className="text-xs text-slate-500 mt-1">다른 검색어 또는 필터 옵션을 선택해 보세요.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p>PokeClear • 본가 포켓몬 스토리 클리어 도감 & 챌린지 엔트리 빌더</p>
        <p className="mt-1 text-[11px] text-slate-600">
          모든 포켓몬스터 관련 이미지와 저작권은 Nintendo, Creatures Inc., GAME FREAK inc.에 있습니다.
        </p>
      </footer>

      {/* Modals */}
      <DetailModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />

      <PartyModal
        isOpen={isPartyModalOpen}
        onClose={() => setIsPartyModalOpen(false)}
      />
    </div>
  );
};
export default App;
