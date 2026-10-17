import { PokemonClearGuide, PokemonType, MoveSlot } from '../types/pokemon';
import { BasicPokemon } from '../types/pokemon';
import { getOptimizedMoveset } from '../data/moveDatabase';

const typeMapKo: Record<string, PokemonType> = {
  normal: '노말', fighting: '격투', flying: '비행', poison: '독',
  ground: '땅', rock: '바위', bug: '벌레', ghost: '고스트',
  steel: '강철', fire: '불꽃', water: '물', grass: '풀',
  electric: '전기', psychic: '에스퍼', ice: '얼음', dragon: '드래곤',
  dark: '악', fairy: '페어리'
};

// Generates an automated Story Clear Guide using live PokéAPI data
export async function generateDynamicClearGuide(basic: BasicPokemon): Promise<PokemonClearGuide> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${basic.id}`);
    const data = await res.json();

    // Stats
    const statsMap: Record<string, number> = {};
    data.stats.forEach((s: any) => {
      statsMap[s.stat.name] = s.base_stat;
    });

    const hp = statsMap['hp'] || 50;
    const attack = statsMap['attack'] || 50;
    const defense = statsMap['defense'] || 50;
    const spAttack = statsMap['special-attack'] || 50;
    const spDefense = statsMap['special-defense'] || 50;
    const speed = statsMap['speed'] || 50;

    const isPhysical = attack >= spAttack;
    const isFast = speed >= 75;
    const isTank = hp >= 80 && (defense >= 80 || spDefense >= 80);

    // Nature
    let natureKo = isPhysical
      ? (isFast ? '명랑 (Jolly)' : '고집 (Adamant)')
      : (isFast ? '겁쟁이 (Timid)' : '조심 (Modest)');
    let natureStat = isPhysical
      ? (isFast ? '스피드 ↑ / 특공 ↓' : '공격 ↑ / 특공 ↓')
      : (isFast ? '스피드 ↑ / 공격 ↓' : '특공 ↑ / 공격 ↓');

    if (isTank && attack < 70 && spAttack < 70) {
      natureKo = defense >= spDefense ? '대담 (Bold)' : '차분 (Calm)';
      natureStat = defense >= spDefense ? '방어 ↑ / 공격 ↓' : '특방 ↑ / 공격 ↓';
    }

    // Ability
    const firstAbility = data.abilities.find((a: any) => !a.is_hidden) || data.abilities[0];
    const abilityName = firstAbility ? firstAbility.ability.name.replace('-', ' ') : '기본 특성';

    // Held Item
    let heldItemName = '생명의구슬 (Life Orb)';
    let heldItemReason = '모든 기술의 위력이 1.3배 증가하여 스토리 진행 시 결정력 극대화';

    if (basic.id <= 900 && (hp < 60 || (defense < 50 && spDefense < 50))) {
      heldItemName = '진화의휘석 (Eviolite)';
      heldItemReason = '미진화체인 경우 방어와 특수방어가 1.5배 상승하여 안정적 내구 확보';
    } else if (isFast && (isPhysical ? attack > 100 : spAttack > 100)) {
      heldItemName = isPhysical ? '구애머리띠 (Choice Band)' : '구애안경 (Choice Specs)';
      heldItemReason = '공격 또는 특수공격이 1.5배 증가하여 강력한 한 방 화력 발휘';
    }

    // EV Spread
    let evSummary = isPhysical
      ? `공격 252 / ${isFast ? '스피드' : 'HP'} 252 / ${isFast ? 'HP' : '방어'} 4 (물리 극딜 세팅)`
      : `특수공격 252 / ${isFast ? '스피드' : 'HP'} 252 / ${isFast ? 'HP' : '방어'} 4 (특수 극딜 세팅)`;

    // Moveset (4 Slots) - 실전 대표 기술 정확 매칭
    const optimizedMoves = getOptimizedMoveset(basic.types, isPhysical);
    const moveset: MoveSlot[] = optimizedMoves.map((m, idx) => ({
      slot: idx + 1,
      nameKo: m.nameKo,
      type: m.type,
      category: m.category,
      power: m.power,
      accuracy: m.accuracy,
      reason: m.description,
    }));

    const difficulty = (attack + spAttack + hp) > 280 ? '쉬움' : (attack + spAttack + hp) > 200 ? '보통' : '어려움';

    return {
      id: basic.id,
      nameKo: basic.nameKo,
      nameEn: basic.nameEn,
      types: basic.types,
      conceptTitle: `${basic.nameKo} 스토리 불도저 클리어 런`,
      isUnevolvedRun: false,
      difficulty: difficulty as any,
      spriteUrl: basic.spriteUrl,
      artworkUrl: basic.artworkUrl,
      baseStats: {
        hp, attack, defense, spAttack, spDefense, speed
      },
      recommendedSetup: {
        ability: {
          nameKo: abilityName,
          reason: '스토리 진행 및 보스전에서 가장 안정적으로 발동되는 주력 특성'
        },
        nature: {
          nameKo: natureKo,
          statChange: natureStat
        },
        heldItem: {
          nameKo: heldItemName,
          reason: heldItemReason
        },
        evSpread: {
          summary: evSummary
        },
        moveset
      },
      keyStrategies: [
        `${basic.nameKo}의 가장 높은 ${isPhysical ? '물리 공격' : '특수 공격'}을 살려 자속기로 선공 1타를 노리는 것이 핵심입니다.`,
        '상성상 불리한 타입이 나오면 무리하게 대면하지 않고 파티원과 교체 플레이를 하세요.',
        '체육관이나 사천왕전에서는 상점제 배틀 아이템(플러스파워 / 스페셜업)을 1회 사용해 스윕 각을 잡으세요.'
      ],
      bossTips: [
        {
          title: '사천왕/챔피언 결전 전략',
          content: '첫 상대 포켓몬이 수비적이거나 위협적이지 않을 때 랭업 기술을 쌓거나 도핑 아이템을 사용하여 전장을 장악하세요.'
        }
      ]
    };
  } catch (err) {
    // Fallback if PokéAPI fails
    return {
      id: basic.id,
      nameKo: basic.nameKo,
      nameEn: basic.nameEn,
      types: basic.types,
      conceptTitle: `${basic.nameKo} 클리어 가이드`,
      isUnevolvedRun: false,
      difficulty: '보통',
      spriteUrl: basic.spriteUrl,
      artworkUrl: basic.artworkUrl,
      baseStats: { hp: 70, attack: 70, defense: 70, spAttack: 70, spDefense: 70, speed: 70 },
      recommendedSetup: {
        ability: { nameKo: '기본 특성', reason: '기본 특성 활용' },
        nature: { nameKo: '조심 / 고집', statChange: '공격 또는 특공 상승' },
        heldItem: { nameKo: '생명의구슬', reason: '화력 1.3배 상승' },
        evSpread: { summary: '주력 공격스탯 252 / 스피드 252' },
        moveset: []
      },
      keyStrategies: ['스토리 자속기 및 견제기 위주 구성'],
      bossTips: []
    };
  }
}
