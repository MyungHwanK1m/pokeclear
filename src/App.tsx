import React, { useState, useMemo } from 'react';
import allPokemonData from './data/allPokemon.json';
import { POKEMON_CLEAR_GUIDES } from './data/clearGuides';
import { BasicPokemon, PokemonClearGuide, PokemonType } from './types/pokemon';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { PokemonCard } from './components/PokemonCard';
import { DetailModal } from './components/DetailModal';
import { PartyModal } from './components/PartyModal';
import { generateDynamicClearGuide } from './utils/guideGenerator';
import { Sparkles, Compass, ChevronDown } from 'lucide-react';

const allPokemonList = allPokemonData as unknown as BasicPokemon[];
const curatedGuidesMap = new Map<number, PokemonClearGuide>();
POKEMON_CLEAR_GUIDES.forEach((guide) => {
  curatedGuidesMap.set(guide.id, guide);
});

const PAGE_SIZE = 48;

export const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<PokemonType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('전체');
  const [selectedGameAdmission, setSelectedGameAdmission] = useState('all');
  const [curatedOnly, setCuratedOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [selectedGuide, setSelectedGuide] = useState<PokemonClearGuide | null>(null);
  const [isGuideLoading, setIsGuideLoading] = useState(false);
  const [isPartyModalOpen, setIsPartyModalOpen] = useState(false);
  const [partyProtagonist, setPartyProtagonist] = useState<BasicPokemon | null>(null);

  // Filtered Pokémon
  const filteredList = useMemo(() => {
    return allPokemonList.filter((pokemon) => {
      // Search
      const search = searchTerm.trim().toLowerCase();
      const matchSearch =
        !search ||
        pokemon.nameKo.includes(search) ||
        pokemon.nameEn.toLowerCase().includes(search) ||
        String(pokemon.id) === search;

      // Generation
      const matchGen =
        selectedGeneration === 'all' || pokemon.generation === selectedGeneration;

      // Type
      const matchType =
        selectedType === 'all' || pokemon.types.includes(selectedType);

      // Clear Difficulty
      const effectiveDifficulty =
        curatedGuidesMap.get(pokemon.id)?.difficulty || pokemon.difficulty;
      const matchDifficulty =
        selectedDifficulty === '전체' || effectiveDifficulty === selectedDifficulty;

      // Game Title Admission (입국 여부)
      const matchAdmission =
        selectedGameAdmission === 'all' ||
        (pokemon.admittedGames && pokemon.admittedGames.includes(selectedGameAdmission as any));

      // Curated Special Guides
      const matchCurated = !curatedOnly || curatedGuidesMap.has(pokemon.id);

      return matchSearch && matchGen && matchType && matchDifficulty && matchAdmission && matchCurated;
    });
  }, [searchTerm, selectedGeneration, selectedType, selectedDifficulty, selectedGameAdmission, curatedOnly]);

  const displayedList = useMemo(() => {
    return filteredList.slice(0, visibleCount);
  }, [filteredList, visibleCount]);

  const handleSelectPokemon = async (pokemon: BasicPokemon, guide?: PokemonClearGuide) => {
    if (guide) {
      setSelectedGuide(guide);
      return;
    }

    if (curatedGuidesMap.has(pokemon.id)) {
      setSelectedGuide(curatedGuidesMap.get(pokemon.id)!);
      return;
    }

    // Dynamic generation from PokéAPI
    setIsGuideLoading(true);
    setSelectedGuide(null);
    try {
      const generated = await generateDynamicClearGuide(pokemon);
      setSelectedGuide(generated);
    } catch (e) {
      console.error('Failed to generate clear guide:', e);
    } finally {
      setIsGuideLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Navbar */}
      <Navbar onOpenPartyModal={() => setIsPartyModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950/60 via-slate-900 to-indigo-950/60 border border-slate-800 p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>전국도감 1~9세대 1025마리 전종 지원</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span>📱 모바일 앱(PWA) 설치 지원</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              어떤 포켓몬으로도 <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                본가 스토리 엔딩을 공략하세요!
              </span>
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              초라기·피카츄 등 특수 챌린지 전용 가이드부터, 전국도감 1025마리 전 포켓몬의 
              <strong>성격, 노력치, 4슬롯 추천 기술배치, 지닌물건</strong>을 즉시 확인할 수 있습니다.
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <span>💡 스마트폰(Safari/Chrome)에서 <strong>'홈 화면에 추가'</strong>를 누르면 전용 앱 아이콘으로 간편 실행됩니다!</span>
            </p>
          </div>

          {/* App Icon 3D Card Preview */}
          <div className="relative z-10 flex flex-col items-center p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-xl backdrop-blur-sm shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-indigo-600 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="./icon-512.svg"
                alt="PokeClear App Icon"
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-2xl border border-slate-700/50 object-cover"
              />
            </div>
            <span className="mt-2.5 text-xs font-bold text-slate-200">PokeClear 앱 아이콘</span>
            <span className="text-[10px] text-slate-400">PWA / 홈화면 바로가기 지원</span>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={(val) => {
            setSearchTerm(val);
            setVisibleCount(PAGE_SIZE);
          }}
          selectedGeneration={selectedGeneration}
          onGenerationChange={(gen) => {
            setSelectedGeneration(gen);
            setVisibleCount(PAGE_SIZE);
          }}
          selectedType={selectedType}
          onTypeChange={(type) => {
            setSelectedType(type);
            setVisibleCount(PAGE_SIZE);
          }}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={(diff) => {
            setSelectedDifficulty(diff);
            setVisibleCount(PAGE_SIZE);
          }}
          selectedGameAdmission={selectedGameAdmission}
          onGameAdmissionChange={(game) => {
            setSelectedGameAdmission(game);
            setVisibleCount(PAGE_SIZE);
          }}
          curatedOnly={curatedOnly}
          onCuratedOnlyToggle={() => {
            setCuratedOnly((prev) => !prev);
            setVisibleCount(PAGE_SIZE);
          }}
          totalCount={filteredList.length}
        />

        {/* Card Grid */}
        {displayedList.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {displayedList.map((pokemon) => {
                const guide = curatedGuidesMap.get(pokemon.id);
                return (
                  <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    guide={guide}
                    onSelect={handleSelectPokemon}
                  />
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredList.length && (
              <div className="flex justify-center pt-6 pb-2">
                <button
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500/50 hover:bg-slate-800 text-sm font-bold text-slate-200 transition-all shadow-lg hover:scale-105"
                >
                  <ChevronDown className="w-4 h-4 text-red-400" />
                  <span>포켓몬 더 보기 ({visibleCount} / {filteredList.length})</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800/80">
            <Compass className="w-12 h-12 text-slate-600 mx-auto mb-3 animate-spin" style={{ animationDuration: '6s' }} />
            <h3 className="text-base font-bold text-slate-400">일치하는 포켓몬이 없습니다</h3>
            <p className="text-xs text-slate-500 mt-1">다른 검색어 또는 필터 옵션을 선택해 보세요.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p>PokeClear • 전국도감 1~1025 본가 스토리 클리어 가이드</p>
        <p className="mt-1 text-[11px] text-slate-600">
          모든 포켓몬스터 관련 이미지와 저작권은 Nintendo, Creatures Inc., GAME FREAK inc.에 있습니다.
        </p>
      </footer>

      {/* Modals */}
      <DetailModal
        guide={selectedGuide}
        isLoading={isGuideLoading}
        onClose={() => {
          setSelectedGuide(null);
          setIsGuideLoading(false);
        }}
        onBuildParty={(pokemonId) => {
          const found = allPokemonList.find((p) => p.id === pokemonId);
          if (found) {
            setPartyProtagonist(found);
            setSelectedGuide(null);
            setIsPartyModalOpen(true);
          }
        }}
      />

      <PartyModal
        isOpen={isPartyModalOpen}
        onClose={() => setIsPartyModalOpen(false)}
        allPokemon={allPokemonList}
        initialPokemon={partyProtagonist}
      />
    </div>
  );
};
export default App;
