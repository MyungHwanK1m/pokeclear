import React, { useState } from 'react';
import { BasicPokemon } from '../types/pokemon';
import { GYM_LEADERS } from '../data/gymLeaders';
import { GymLeader } from '../types/battle';
import { validatePartyForGymLeader, calculateDamage, getTypeMultiplier } from '../utils/battleEngine';
import { Swords, ShieldAlert, Award, X, Play, RotateCcw } from 'lucide-react';

interface GymBattleModalProps {
  isOpen: boolean;
  onClose: () => void;
  myParty: BasicPokemon[];
}

export const GymBattleModal: React.FC<GymBattleModalProps> = ({ isOpen, onClose, myParty }) => {
  const [selectedLeader, setSelectedLeader] = useState<GymLeader>(GYM_LEADERS[0]);
  const [battleState, setBattleState] = useState<'prep' | 'battling' | 'victory' | 'defeat'>('prep');
  
  // Battle state
  const [myCurrentIndex, setMyCurrentIndex] = useState(0);
  const [leaderCurrentIndex, setLeaderCurrentIndex] = useState(0);
  const [myHp, setMyHp] = useState(150);
  const [leaderHp, setLeaderHp] = useState(100);
  const [battleLogs, setBattleLogs] = useState<string[]>([]);

  if (!isOpen) return null;

  // Validate party admission
  const validation = validatePartyForGymLeader(myParty, selectedLeader);

  const startBattle = () => {
    if (!validation.canBattle && myParty.length > 0) return;
    setBattleState('battling');
    setMyCurrentIndex(0);
    setLeaderCurrentIndex(0);

    const firstLeaderMon = selectedLeader.team[0];
    const initialLeaderHp = firstLeaderMon ? firstLeaderMon.stats.hp * 3 : 100;
    setLeaderHp(initialLeaderHp);
    setMyHp(160);

    setBattleLogs([
      `⚔️ ${selectedLeader.titleKo} [${selectedLeader.nameKo}]와의 배틀이 시작되었다!`,
      `"${selectedLeader.dialogue.intro}"`,
      `상대는 [${firstLeaderMon.nameKo}] (Lv.${firstLeaderMon.level})을 내보냈다!`,
      `가라! [${myParty[0]?.nameKo || '초라기'}]!`
    ]);
  };

  const handleAttack = (moveName: string, movePower: number, moveType: string) => {
    if (battleState !== 'battling') return;

    const currentLeaderMon = selectedLeader.team[leaderCurrentIndex];
    const myMon = myParty[myCurrentIndex] || { nameKo: '내 포켓몬', types: ['전기'] };

    // 1. My Attack
    const typeMult = getTypeMultiplier(moveType, currentLeaderMon.types as any);
    const damage = calculateDamage(45, movePower, 110, currentLeaderMon.stats.defense, typeMult, true);
    const newLeaderHp = Math.max(0, leaderHp - damage);
    setLeaderHp(newLeaderHp);

    let effectMsg = '';
    if (typeMult >= 2.0) effectMsg = ' (효과가 굉장했다!)';
    if (typeMult <= 0.5 && typeMult > 0) effectMsg = ' (효과가 별로인 듯하다...)';
    if (typeMult === 0) effectMsg = ' (효과가 없는 것 같다...)';

    const newLogs = [
      ...battleLogs,
      `💥 [${myMon.nameKo}]의 ${moveName}! ${damage}의 피해를 입혔다!${effectMsg}`
    ];

    // Check if leader pokemon fainted
    if (newLeaderHp <= 0) {
      if (leaderCurrentIndex + 1 < selectedLeader.team.length) {
        const nextIndex = leaderCurrentIndex + 1;
        const nextMon = selectedLeader.team[nextIndex];
        setLeaderCurrentIndex(nextIndex);
        setLeaderHp(nextMon.stats.hp * 3);
        newLogs.push(`💫 상대의 [${currentLeaderMon.nameKo}]는 쓰러졌다!`);
        newLogs.push(`상대는 [${nextMon.nameKo}] (Lv.${nextMon.level})을 내보냈다!`);
        setBattleLogs(newLogs);
        return;
      } else {
        // Leader defeated!
        newLogs.push(`🏆 ${selectedLeader.nameKo}의 모든 포켓몬이 쓰러졌다!`);
        newLogs.push(`"${selectedLeader.dialogue.defeat}"`);
        newLogs.push(`🎖️ ${selectedLeader.badgeName}을(를) 획득했다!`);
        setBattleLogs(newLogs);
        setBattleState('victory');
        return;
      }
    }

    // 2. Leader Counter-attack
    const randomMove = currentLeaderMon.moves[Math.floor(Math.random() * currentLeaderMon.moves.length)] || {
      nameKo: '몸통박치기',
      power: 40,
      type: '노말'
    };
    const enemyMult = getTypeMultiplier(randomMove.type, myMon.types as any);
    const enemyDamage = calculateDamage(currentLeaderMon.level, randomMove.power, currentLeaderMon.stats.attack, 95, enemyMult, true);
    const newMyHp = Math.max(0, myHp - enemyDamage);
    setMyHp(newMyHp);

    newLogs.push(`⚡ 상대 [${currentLeaderMon.nameKo}]의 ${randomMove.nameKo}! ${enemyDamage}의 피해를 입었다!`);

    if (newMyHp <= 0) {
      if (myCurrentIndex + 1 < myParty.length) {
        const nextMy = myCurrentIndex + 1;
        setMyCurrentIndex(nextMy);
        setMyHp(160);
        newLogs.push(`💀 [${myMon.nameKo}]는 쓰러졌다!`);
        newLogs.push(`가라! [${myParty[nextMy].nameKo}]!`);
      } else {
        newLogs.push(`눈앞이 캄캄해졌다... 패배하였습니다.`);
        setBattleState('defeat');
      }
    }

    setBattleLogs(newLogs);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center shadow-md shadow-red-500/20">
              <Swords className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>역대 체육관 관장 배틀 시뮬레이터</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-800/60 font-medium">
                  시리즈 입국 검증
                </span>
              </h2>
              <p className="text-xs text-slate-400">내 6마리 파티 엔트리로 시리즈별 정규 룰 배틀에 도전하세요</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {battleState === 'prep' ? (
            <>
              {/* Gym Leader Selection Carousel */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <span>👑 도전할 체육관 관장 / 챔피언 선택</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {GYM_LEADERS.map((leader) => (
                    <button
                      key={leader.id}
                      onClick={() => setSelectedLeader(leader)}
                      className={`flex flex-col items-center p-3 rounded-2xl border text-center transition-all ${
                        selectedLeader.id === leader.id
                          ? 'bg-red-500/15 border-red-500 shadow-md shadow-red-500/20 scale-105'
                          : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-2xl mb-1">{leader.badgeIcon}</span>
                      <span className="font-bold text-sm text-white">{leader.nameKo}</span>
                      <span className="text-[10px] text-slate-400">{leader.gameTitle.split(' ')[0]}</span>
                      <span className="text-[9px] mt-1 px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 font-semibold">
                        {leader.specialtyType}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Leader Profile & Team Info */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center text-3xl border border-slate-700">
                    {selectedLeader.badgeIcon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-extrabold text-white">{selectedLeader.nameKo}</span>
                      <span className="text-xs text-slate-400 capitalize">({selectedLeader.nameEn})</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                        {selectedLeader.gameTitle}
                      </span>
                    </div>
                    <p className="text-xs text-amber-300 font-medium mt-0.5">{selectedLeader.titleKo}</p>
                    <p className="text-xs text-slate-400 italic mt-2">"{selectedLeader.dialogue.intro}"</p>
                  </div>
                </div>

                {/* Team preview */}
                <div className="flex items-center space-x-2">
                  {selectedLeader.team.map((mon) => (
                    <div key={mon.speciesId} className="flex flex-col items-center bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                      <img src={mon.spriteUrl} alt={mon.nameKo} className="w-12 h-12 object-contain" />
                      <span className="text-[10px] font-bold text-slate-200 mt-1">{mon.nameKo}</span>
                      <span className="text-[9px] text-amber-400">Lv.{mon.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Validation Check Bar */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-purple-400" />
                    <span>[{selectedLeader.gameTitle}] 출전 적격성 검증 (입국 체크)</span>
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    validation.canBattle ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'
                  }`}>
                    {validation.canBattle ? '✅ 6마리 전원 출전 가능' : `⚠️ 출전 불가 포켓몬 ${validation.ineligiblePokemon.length}마리 존재`}
                  </span>
                </div>

                {validation.ineligiblePokemon.length > 0 && (
                  <div className="p-3 rounded-xl bg-red-950/30 border border-red-900/50 space-y-1.5 text-xs text-red-200">
                    <p className="font-bold">🚫 해당 시리즈에 미입국하여 출전할 수 없는 포켓몬:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {validation.ineligiblePokemon.map((item) => (
                        <li key={item.pokemonId}>
                          <strong className="text-red-300">{item.pokemonName}</strong>: {item.reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Start Button */}
              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  onClick={startBattle}
                  disabled={!validation.canBattle && myParty.length > 0}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold text-sm shadow-xl transition-all ${
                    validation.canBattle || myParty.length === 0
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-red-600/30 hover:scale-105 cursor-pointer'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>배틀 시작하기</span>
                </button>
              </div>
            </>
          ) : (
            /* Active Battle Screen */
            <div className="space-y-5">
              {/* Battlefield Stage */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Enemy Leader Side */}
                <div className="p-4 rounded-2xl bg-gradient-to-b from-red-950/30 to-slate-900 border border-red-900/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-red-400 font-bold">{selectedLeader.titleKo}</span>
                    <h4 className="text-base font-extrabold text-white">{selectedLeader.team[leaderCurrentIndex]?.nameKo}</h4>
                    <span className="text-xs text-slate-400">Lv.{selectedLeader.team[leaderCurrentIndex]?.level}</span>
                    {/* HP Bar */}
                    <div className="w-44 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-700 mt-2">
                      <div className="h-full bg-red-500 transition-all duration-300" style={{ width: `${Math.min(100, (leaderHp / (selectedLeader.team[leaderCurrentIndex]?.stats.hp * 3 || 100)) * 100)}%` }} />
                    </div>
                  </div>
                  <img
                    src={selectedLeader.team[leaderCurrentIndex]?.artworkUrl}
                    alt="Leader Pokemon"
                    className="w-24 h-24 object-contain drop-shadow-lg"
                  />
                </div>

                {/* Player Side */}
                <div className="p-4 rounded-2xl bg-gradient-to-b from-blue-950/30 to-slate-900 border border-blue-900/40 flex items-center justify-between">
                  <img
                    src={myParty[myCurrentIndex]?.artworkUrl || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png'}
                    alt="My Pokemon"
                    className="w-24 h-24 object-contain drop-shadow-lg"
                  />
                  <div className="text-right">
                    <span className="text-xs text-blue-400 font-bold">내 포켓몬</span>
                    <h4 className="text-base font-extrabold text-white">{myParty[myCurrentIndex]?.nameKo || '초라기'}</h4>
                    <span className="text-xs text-slate-400">Lv.50</span>
                    {/* HP Bar */}
                    <div className="w-44 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-700 mt-2 ml-auto">
                      <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${Math.min(100, (myHp / 160) * 100)}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Move Buttons */}
              {battleState === 'battling' && (
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-300">기술을 선택하세요:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <button
                      onClick={() => handleAttack('10만볼트', 90, '전기')}
                      className="p-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 text-xs font-bold text-left transition active:scale-95"
                    >
                      <span>⚡ 10만볼트</span>
                      <span className="block text-[10px] text-slate-400 font-normal">위력 90 | 전기</span>
                    </button>
                    <button
                      onClick={() => handleAttack('하이드로펌프', 110, '물')}
                      className="p-3 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-200 text-xs font-bold text-left transition active:scale-95"
                    >
                      <span>🌊 하이드로펌프</span>
                      <span className="block text-[10px] text-slate-400 font-normal">위력 110 | 물</span>
                    </button>
                    <button
                      onClick={() => handleAttack('냉동빔', 90, '얼음')}
                      className="p-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-200 text-xs font-bold text-left transition active:scale-95"
                    >
                      <span>❄️ 냉동빔</span>
                      <span className="block text-[10px] text-slate-400 font-normal">위력 90 | 얼음</span>
                    </button>
                    <button
                      onClick={() => handleAttack('볼트체인지', 70, '전기')}
                      className="p-3 rounded-xl bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/40 text-yellow-200 text-xs font-bold text-left transition active:scale-95"
                    >
                      <span>🔄 볼트체인지</span>
                      <span className="block text-[10px] text-slate-400 font-normal">위력 70 | 전기</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Logs Console */}
              <div className="p-4 rounded-2xl bg-black/50 border border-slate-800 h-40 overflow-y-auto space-y-1 text-xs font-mono">
                {battleLogs.map((log, i) => (
                  <p key={i} className={log.includes('💥') ? 'text-amber-300' : log.includes('⚡') ? 'text-red-300' : log.includes('🏆') ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                    {log}
                  </p>
                ))}
              </div>

              {/* Reset Battle */}
              {(battleState === 'victory' || battleState === 'defeat') && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setBattleState('prep')}
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>다른 관장에게 도전하기</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
