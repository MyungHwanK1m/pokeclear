import { BasicPokemon } from '../types/pokemon';
import { GymLeader, BattleValidationResult } from '../types/battle';

/**
 * 특정 관장의 시리즈(타이틀) 규정에 맞게 내 파티의 출전 가능 여부를 검증
 */
export function validatePartyForGymLeader(
  myParty: BasicPokemon[],
  gymLeader: GymLeader
): BattleValidationResult {
  const ineligible = [];

  for (const pokemon of myParty) {
    let isAdmitted = false;
    let reason = '';

    // 1. 관장 타이틀별 출전 허용 체크
    if (gymLeader.gameSeries === 'SV') {
      isAdmitted = pokemon.admittedGames.includes('SV');
      if (!isAdmitted) reason = '스칼렛·바이올렛(9세대) 미입국 포켓몬입니다.';
    } else if (gymLeader.gameSeries === 'SwSh') {
      isAdmitted = pokemon.admittedGames.includes('SwSh');
      if (!isAdmitted) reason = '소드·실드(8세대) 미입국 포켓몬입니다.';
    } else if (gymLeader.gameSeries === 'BDSP') {
      isAdmitted = pokemon.admittedGames.includes('BDSP');
      if (!isAdmitted) reason = '브다·샤펄(4세대 도감) 미수록 포켓몬입니다.';
    } else if (gymLeader.gameSeries === 'ZA') {
      isAdmitted = pokemon.admittedGames.includes('ZA');
      if (!isAdmitted) reason = '레전드 Z-A(미르 도감) 미수록 포켓몬입니다.';
    } else {
      // 클래식 구세대 관장의 경우 (출신 세대 및 현세대 출전 가능성 체크)
      isAdmitted = pokemon.generation <= gymLeader.generation || pokemon.admittedGames.includes('SV');
      if (!isAdmitted) reason = `${gymLeader.generation}세대 당시 존재하지 않았던 포켓몬입니다.`;
    }

    if (!isAdmitted) {
      ineligible.push({
        pokemonId: pokemon.id,
        pokemonName: pokemon.nameKo,
        reason,
      });
    }
  }

  const eligibleCount = myParty.length - ineligible.length;

  return {
    canBattle: eligibleCount > 0 && ineligible.length === 0,
    eligibleCount,
    ineligiblePokemon: ineligible,
  };
}

/**
 * 턴제 데미지 계산기 (포켓몬 공식 데미지 공식 간소화 모델)
 */
export function calculateDamage(
  attackerLevel: number,
  movePower: number,
  attackerStat: number,
  defenderStat: number,
  typeMultiplier: number,
  isSTAB: boolean
): number {
  if (movePower === 0) return 0;

  const base = Math.floor(
    (Math.floor((2 * attackerLevel) / 5 + 2) * movePower * (attackerStat / defenderStat)) / 50 + 2
  );

  let total = base;
  if (isSTAB) total = Math.floor(total * 1.5);
  total = Math.floor(total * typeMultiplier);

  // Random factor 0.85 ~ 1.0
  const randomFactor = 0.85 + Math.random() * 0.15;
  return Math.max(1, Math.floor(total * randomFactor));
}

// 타입 상성 계수 (간이 매트릭스)
export const TYPE_ADVANTAGE: Record<string, { super: string[]; weak: string[]; immune?: string[] }> = {
  '불꽃': { super: ['풀', '얼음', '벌레', '강철'], weak: ['물', '바위', '불꽃', '드래곤'] },
  '물': { super: ['불꽃', '땅', '바위'], weak: ['물', '풀', '드래곤'] },
  '전기': { super: ['물', '비행'], weak: ['전기', '풀', '드래곤'], immune: ['땅'] },
  '풀': { super: ['물', '땅', '바위'], weak: ['불꽃', '풀', '독', '비행', '벌레', '드래곤', '강철'] },
  '바위': { super: ['불꽃', '얼음', '비행', '벌레'], weak: ['격투', '땅', '강철'] },
  '땅': { super: ['불꽃', '전기', '독', '바위', '강철'], weak: ['풀', '벌레'], immune: ['비행'] },
  '고스트': { super: ['에스퍼', '고스트'], weak: ['악'], immune: ['노말'] },
  '드래곤': { super: ['드래곤'], weak: ['강철'], immune: ['페어리'] },
  '벌레': { super: ['풀', '에스퍼', '악'], weak: ['불꽃', '격투', '독', '비행', '고스트', '강철', '페어리'] }
};

export function getTypeMultiplier(moveType: string, defenderTypes: string[]): number {
  let multiplier = 1.0;
  const table = TYPE_ADVANTAGE[moveType];
  if (!table) return 1.0;

  for (const defType of defenderTypes) {
    if (table.immune?.includes(defType)) return 0;
    if (table.super?.includes(defType)) multiplier *= 2.0;
    if (table.weak?.includes(defType)) multiplier *= 0.5;
  }
  return multiplier;
}
