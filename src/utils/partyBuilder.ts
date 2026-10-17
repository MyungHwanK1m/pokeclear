import { BasicPokemon, ClearPartyEntry, PartyMember, PokemonType } from '../types/pokemon';

// Type Weaknesses Map
export const TYPE_WEAKNESSES: Record<PokemonType, PokemonType[]> = {
  '노말': ['격투'],
  '불꽃': ['물', '땅', '바위'],
  '물': ['전기', '풀'],
  '풀': ['불꽃', '얼음', '독', '비행', '벌레'],
  '전기': ['땅'],
  '얼음': ['불꽃', '격투', '바위', '강철'],
  '격투': ['비행', '에스퍼', '페어리'],
  '독': ['땅', '에스퍼'],
  '땅': ['물', '풀', '얼음'],
  '비행': ['전기', '얼음', '바위'],
  '에스퍼': ['벌레', '고스트', '악'],
  '벌레': ['불꽃', '비행', '바위'],
  '바위': ['물', '풀', '격투', '땅', '강철'],
  '고스트': ['고스트', '악'],
  '드래곤': ['얼음', '드래곤', '페어리'],
  '악': ['격투', '벌레', '페어리'],
  '강철': ['불꽃', '격투', '땅'],
  '페어리': ['독', '강철'],
};

// Type Resistances/Immunities Map
export const TYPE_RESISTS: Record<PokemonType, PokemonType[]> = {
  '노말': [],
  '불꽃': ['불꽃', '풀', '얼음', '벌레', '강철', '페어리'],
  '물': ['불꽃', '물', '얼음', '강철'],
  '풀': ['물', '전기', '풀', '땅'],
  '전기': ['전기', '비행', '강철'],
  '얼음': ['얼음'],
  '격투': ['벌레', '바위', '악'],
  '독': ['풀', '격투', '독', '벌레', '페어리'],
  '땅': ['독', '바위', '전기'], // 전기 무효
  '비행': ['풀', '격투', '벌레', '땅'], // 땅 무효
  '에스퍼': ['격투', '에스퍼'],
  '벌레': ['풀', '격투', '땅'],
  '바위': ['노말', '불꽃', '독', '비행'],
  '고스트': ['독', '벌레', '노말', '격투'], // 노말, 격투 무효
  '드래곤': ['불꽃', '물', '풀', '전기'],
  '악': ['고스트', '악', '에스퍼'], // 에스퍼 무효
  '강철': ['노말', '풀', '얼음', '비행', '에스퍼', '벌레', '바위', '드래곤', '강철', '페어리', '독'], // 독 무효
  '페어리': ['격투', '벌레', '악', '드래곤'], // 드래곤 무효
};

// Pool of high-tier story partners
const STORY_PARTNER_POOL: {
  pokemonId: number;
  nameKo: string;
  types: PokemonType[];
  role: string;
  spriteUrl: string;
  heldItem: string;
  keyMoves: string[];
  baseCover: string;
}[] = [
  {
    pokemonId: 823,
    nameKo: '아머까오 (Corviknight)',
    types: ['비행', '강철'],
    role: '약점 완전 무효화 물리벽',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png',
    heldItem: '울퉁불퉁멧 / 먹다남은음식',
    keyMoves: ['브레이브버드', '철벽', '날개쉬기', '유턴'],
    baseCover: '땅 무효(0배) 및 풀, 독, 벌레를 극단적으로 반감'
  },
  {
    pokemonId: 445,
    nameKo: '한카리아스 (Garchomp)',
    types: ['드래곤', '땅'],
    role: '필드 물리 파괴자 & 에이스',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
    heldItem: '구애머리띠 / 야체열매',
    keyMoves: ['지진', '역린', '스톤에지', '칼춤'],
    baseCover: '전기 무효 및 불/바위/강철/독 포켓몬을 지진으로 일소'
  },
  {
    pokemonId: 59,
    nameKo: '윈디 (Arcanine)',
    types: ['불꽃'],
    role: '위협 서포터 & 고화력 불꽃 스위퍼',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    heldItem: '생명의구슬 / 자뭉열매',
    keyMoves: ['플레어드라이브', '신속', '인파이트', '도깨비불'],
    baseCover: '풀, 얼음, 강철 타입을 태우고 특성 위협으로 상대 공격력 감소'
  },
  {
    pokemonId: 286,
    nameKo: '버섯모 (Breloom)',
    types: ['풀', '격투'],
    role: '기점 마련 100% 수면 요원',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
    heldItem: '기합의띠',
    keyMoves: ['버섯포자', '씨기관총', '마하펀치', '암석봉인'],
    baseCover: '물/땅/바위 카운터 및 100% 수면기로 주인공의 랭업 기점 확보'
  },
  {
    pokemonId: 778,
    nameKo: '따라큐 (Mimikyu)',
    types: ['고스트', '페어리'],
    role: '탈 특성 만능 조커 & 스위퍼',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png',
    heldItem: '생명의구슬',
    keyMoves: ['치근거리기', '야습', '섀도클로', '칼춤'],
    baseCover: '노말/격투/드래곤 공격을 0배로 흘리고 위기 상황 1턴 세이브'
  },
  {
    pokemonId: 94,
    nameKo: '팬텀 (Gengar)',
    types: ['고스트', '독'],
    role: '고속 특수 폭딜러 & 페어리 카운터',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    heldItem: '기합의띠 / 구애안경',
    keyMoves: ['섀도볼', '오물폭탄', '10만볼트', '기합구슬'],
    baseCover: '페어리/풀/노말/격투 견제 및 넓은 기술폭으로 스윕'
  },
  {
    pokemonId: 130,
    nameKo: '갸라도스 (Gyarados)',
    types: ['물', '비행'],
    role: '용의춤 물리 불도저 & 위협벽',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    heldItem: '자뭉열매 / 리샘열매',
    keyMoves: ['폭포오르기', '지진', '얼음엄니', '용의춤'],
    baseCover: '땅 공격 0배 무효 및 불/땅/바위 완벽 카운터'
  },
  {
    pokemonId: 448,
    nameKo: '루카리오 (Lucario)',
    types: ['격투', '강철'],
    role: '쌍두 어태커 & 바위/악/노말 저격',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    heldItem: '기합의띠 / 생명의구슬',
    keyMoves: ['인파이트', '러스터캐논', '신속', '파동탄'],
    baseCover: '독 공격 0배 무효 및 악, 얼음, 노말, 바위, 강철 5개 타입 저격'
  },
  {
    pokemonId: 468,
    nameKo: '토게키스 (Togekiss)',
    types: ['페어리', '비행'],
    role: '하늘의은총 60% 풀죽음 특수벽',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
    heldItem: '왕의징표석 / 먹다남은음식',
    keyMoves: ['에어슬래시', '매지컬샤인', '파동탄', '날개쉬기'],
    baseCover: '드래곤 및 땅 공격 0배 무효, 에어슬래시 무한 풀죽음'
  },
  {
    pokemonId: 6,
    nameKo: '리자몽 (Charizard)',
    types: ['불꽃', '비행'],
    role: '폭발적 화력의 특수 에이스',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    heldItem: '목탄 / 생명의구슬',
    keyMoves: ['화염방사', '에어슬래시', '기합구슬', '용의파동'],
    baseCover: '땅 0배 무효, 풀/벌레/강철/얼음을 한 방에 녹여버림'
  },
  {
    pokemonId: 3,
    nameKo: '이상해꽃 (Venusaur)',
    types: ['풀', '독'],
    role: '지속 회복 딜탱 & 상태이상',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    heldItem: '검은진흙 / 자뭉열매',
    keyMoves: ['기가드레인', '오물폭탄', '수면가루', '성장'],
    baseCover: '물/전기/페어리 공격 반감 및 수면가루 서포트'
  },
  {
    pokemonId: 9,
    nameKo: '거북왕 (Blastoise)',
    types: ['물'],
    role: '껍질깨기 올스윕 스위퍼',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    heldItem: '하양허브',
    keyMoves: ['파도타기', '냉동빔', '러스터캐논', '껍질깨기'],
    baseCover: '껍질깨기로 공격/특공/스피드 2배 뻥튀기 후 전장 청소'
  }
];

export function buildCustomPartyForPokemon(mainPokemon: BasicPokemon): ClearPartyEntry {
  // 1. Calculate Main Pokemon's Weaknesses
  const allWeaknesses = new Set<PokemonType>();
  mainPokemon.types.forEach((type) => {
    const weaks = TYPE_WEAKNESSES[type] || [];
    weaks.forEach((w) => allWeaknesses.add(w));
  });

  const weaknessesList = Array.from(allWeaknesses);

  // 2. Score candidate partners based on how well they resist/immune the weaknesses
  const scoredPartners = STORY_PARTNER_POOL
    .filter((partner) => partner.pokemonId !== mainPokemon.id)
    .map((partner) => {
      let score = 0;
      let matchedCoverages: string[] = [];

      partner.types.forEach((pType) => {
        const resists = TYPE_RESISTS[pType] || [];
        weaknessesList.forEach((weak) => {
          if (resists.includes(weak)) {
            score += 3;
            matchedCoverages.push(`상대의 [${weak}] 공격을 [${pType}] 타입으로 반감/무효`);
          }
        });
      });

      // Avoid duplicate primary typing
      if (partner.types.includes(mainPokemon.types[0])) {
        score -= 2;
      }

      return {
        ...partner,
        score,
        matchedCoverages
      };
    })
    .sort((a, b) => b.score - a.score);

  // Pick top 5 diverse partners
  const selectedPartners: PartyMember[] = [];
  const usedTypes = new Set<PokemonType>(mainPokemon.types);

  for (const partner of scoredPartners) {
    if (selectedPartners.length >= 5) break;

    // Diversity check
    const isOverlapping = partner.types.every((t) => usedTypes.has(t));
    if (!isOverlapping || selectedPartners.length >= 4) {
      partner.types.forEach((t) => usedTypes.add(t));

      const synergy = partner.matchedCoverages.length > 0
        ? partner.matchedCoverages[0]
        : partner.baseCover;

      selectedPartners.push({
        pokemonId: partner.pokemonId,
        nameKo: partner.nameKo,
        role: partner.role,
        types: partner.types,
        spriteUrl: partner.spriteUrl,
        heldItem: partner.heldItem,
        keyMoves: partner.keyMoves,
        synergyReason: synergy
      });
    }
  }

  // Fallback if needed
  while (selectedPartners.length < 5) {
    const next = STORY_PARTNER_POOL.find(
      (p) => p.pokemonId !== mainPokemon.id && !selectedPartners.some((s) => s.pokemonId === p.pokemonId)
    );
    if (!next) break;
    selectedPartners.push({
      pokemonId: next.pokemonId,
      nameKo: next.nameKo,
      role: next.role,
      types: next.types,
      spriteUrl: next.spriteUrl,
      heldItem: next.heldItem,
      keyMoves: next.keyMoves,
      synergyReason: next.baseCover
    });
  }

  // Main Pokemon as Member 1
  const mainMember: PartyMember = {
    pokemonId: mainPokemon.id,
    nameKo: `${mainPokemon.nameKo} (${mainPokemon.nameEn})`,
    role: '👑 파티의 주인공 / 주력 에이스',
    types: mainPokemon.types,
    spriteUrl: mainPokemon.spriteUrl,
    heldItem: '진화의휘석 (미진화 시) / 생명의구슬',
    keyMoves: ['자속 주력기 1', '자속기 2', '약점 견제기', '랭업/유틸기'],
    synergyReason: `선택하신 주인공 포켓몬입니다. 약점 [${weaknessesList.join(', ')}]을 동료들이 완벽하게 방어해 줍니다.`
  };

  return {
    id: `custom-party-${mainPokemon.id}-${Date.now()}`,
    title: `${mainPokemon.nameKo} 중심 스토리 최적화 파티 엔트리`,
    mainPokemonId: mainPokemon.id,
    description: `${mainPokemon.nameKo}의 약점인 [${weaknessesList.join(', ') || '상성'}]을 보완하고 최고의 시너지를 낼 수 있도록 알고리즘이 설계한 6마리 완성형 엔트리입니다.`,
    members: [mainMember, ...selectedPartners]
  };
}
