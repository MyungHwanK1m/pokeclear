import { PokemonType } from '../types/pokemon';

export interface PokemonMoveData {
  nameKo: string;
  nameEn: string;
  type: PokemonType;
  category: '물리' | '특수' | '변화';
  power: number;
  accuracy: number;
  description: string;
}

// 18개 전 타입별 대표 물리/특수/서브 공격 기술 사전
export const SIGNATURE_MOVES_BY_TYPE: Record<PokemonType, {
  physical: PokemonMoveData[];
  special: PokemonMoveData[];
}> = {
  '불꽃': {
    physical: [
      { nameKo: '플레어드라이브', nameEn: 'Flare Blitz', type: '불꽃', category: '물리', power: 120, accuracy: 100, description: '초고위력 불꽃 반동기' },
      { nameKo: '불꽃펀치', nameEn: 'Fire Punch', type: '불꽃', category: '물리', power: 75, accuracy: 100, description: '안정적인 10% 화상 물리타격' },
    ],
    special: [
      { nameKo: '화염방사', nameEn: 'Flamethrower', type: '불꽃', category: '특수', power: 90, accuracy: 100, description: '스토리 최강의 명중 100 불꽃 주력기' },
      { nameKo: '불대문자', nameEn: 'Fire Blast', type: '불꽃', category: '특수', power: 110, accuracy: 85, description: '보스전 결정력 특화 폭딜기' },
    ]
  },
  '물': {
    physical: [
      { nameKo: '아쿠아브레이크', nameEn: 'Liquidation', type: '물', category: '물리', power: 85, accuracy: 100, description: '상대 방어를 20% 확률로 깎는 주력기' },
      { nameKo: '폭포오르기', nameEn: 'Waterfall', type: '물', category: '물리', power: 80, accuracy: 100, description: '안정적인 20% 풀죽음 물리타격' },
    ],
    special: [
      { nameKo: '파도타기', nameEn: 'Surf', type: '물', category: '특수', power: 90, accuracy: 100, description: '스토리 필수 필드기이자 안정적 90 위력' },
      { nameKo: '하이드로펌프', nameEn: 'Hydro Pump', type: '물', category: '특수', power: 110, accuracy: 80, description: '단숨에 적을 쓸어담는 특수 고화력기' },
    ]
  },
  '전기': {
    physical: [
      { nameKo: '와일드볼트', nameEn: 'Wild Charge', type: '전기', category: '물리', power: 90, accuracy: 100, description: '반동을 감수하는 고화력 물리 전기기' },
      { nameKo: '번개펀치', nameEn: 'Thunder Punch', type: '전기', category: '물리', power: 75, accuracy: 100, description: '안정적인 명중 100 서브웨폰' },
    ],
    special: [
      { nameKo: '10만볼트', nameEn: 'Thunderbolt', type: '전기', category: '특수', power: 90, accuracy: 100, description: '자타공인 전기 타입 최고의 명품 주력기' },
      { nameKo: '볼트체인지', nameEn: 'Volt Switch', type: '전기', category: '특수', power: 70, accuracy: 100, description: '타격 후 유리한 동료로 교체하는 정찰기' },
    ]
  },
  '풀': {
    physical: [
      { nameKo: '우드해머', nameEn: 'Wood Hammer', type: '풀', category: '물리', power: 120, accuracy: 100, description: '풀 타입 최강의 물리 파괴기' },
      { nameKo: '씨폭탄', nameEn: 'Seed Bomb', type: '풀', category: '물리', power: 80, accuracy: 100, description: '반동 없는 안정적인 물리 주력기' },
    ],
    special: [
      { nameKo: '에너지볼', nameEn: 'Energy Ball', type: '풀', category: '특수', power: 90, accuracy: 100, description: '물/땅/바위 카운터 필수 특수기' },
      { nameKo: '기가드레인', nameEn: 'Giga Drain', type: '풀', category: '특수', power: 75, accuracy: 100, description: '적에게 입힌 피해의 절반을 흡수' },
    ]
  },
  '얼음': {
    physical: [
      { nameKo: '고드름침', nameEn: 'Icicle Spear', type: '얼음', category: '물리', power: 25, accuracy: 100, description: '기합의띠를 관통하는 연속기' },
      { nameKo: '아이스스피너', nameEn: 'Ice Spinner', type: '얼음', category: '물리', power: 80, accuracy: 100, description: '필드를 지우는 최신 고성능 얼음기' },
    ],
    special: [
      { nameKo: '냉동빔', nameEn: 'Ice Beam', type: '얼음', category: '특수', power: 90, accuracy: 100, description: '드래곤/풀/비행/땅을 2배로 찌르는 필수기' },
      { nameKo: '눈보라', nameEn: 'Blizzard', type: '얼음', category: '특수', power: 110, accuracy: 70, description: '설경 속에서 100% 명중하는 광역기' },
    ]
  },
  '격투': {
    physical: [
      { nameKo: '인파이트', nameEn: 'Close Combat', type: '격투', category: '물리', power: 120, accuracy: 100, description: '노말/바위/강철/얼음/악을 박살내는 120기' },
      { nameKo: '드레인펀치', nameEn: 'Drain Punch', type: '격투', category: '물리', power: 75, accuracy: 100, description: '체력을 흡수하며 좀비처럼 버티는 펀치' },
    ],
    special: [
      { nameKo: '파동탄', nameEn: 'Aura Sphere', type: '격투', category: '특수', power: 80, accuracy: 100, description: '절대 빗나가지 않는 필중기' },
      { nameKo: '기합구슬', nameEn: 'Focus Blast', type: '격투', category: '특수', power: 120, accuracy: 70, description: '특수형 포켓몬의 악/강철 견제 폭딜기' },
    ]
  },
  '독': {
    physical: [
      { nameKo: '독찌르기', nameEn: 'Poison Jab', type: '독', category: '물리', power: 80, accuracy: 100, description: '페어리와 풀을 제압하는 주력 물리기' },
      { nameKo: '더스트슈트', nameEn: 'Gunk Shot', type: '독', category: '물리', power: 120, accuracy: 80, description: '초고위력 오물 폭격기' },
    ],
    special: [
      { nameKo: '오물폭탄', nameEn: 'Sludge Bomb', type: '독', category: '특수', power: 90, accuracy: 100, description: '30% 중독 확률의 명품 독 특수기' },
      { nameKo: '오물웨이브', nameEn: 'Sludge Wave', type: '독', category: '특수', power: 95, accuracy: 100, description: '페어리 포켓몬을 지워버리는 고위력기' },
    ]
  },
  '땅': {
    physical: [
      { nameKo: '지진', nameEn: 'Earthquake', type: '땅', category: '물리', power: 100, accuracy: 100, description: '포켓몬 본가 역사상 최강의 국민기' },
      { nameKo: '10만마력', nameEn: 'High Horsepower', type: '땅', category: '물리', power: 95, accuracy: 95, description: '단일 대상에게 꽂아넣는 돌진 공격' },
    ],
    special: [
      { nameKo: '대지의힘', nameEn: 'Earth Power', type: '땅', category: '특수', power: 90, accuracy: 100, description: '특방을 10% 깎는 특수형 땅 주력기' },
      { nameKo: '열사의대지', nameEn: 'Scorching Sands', type: '땅', category: '특수', power: 70, accuracy: 100, description: '30% 화상 확률의 유틸리티 땅 공격' },
    ]
  },
  '비행': {
    physical: [
      { nameKo: '브레이브버드', nameEn: 'Brave Bird', type: '비행', category: '물리', power: 120, accuracy: 100, description: '상대를 일격필살로 격추하는 비행기' },
      { nameKo: '애크러뱃', nameEn: 'Acrobatics', type: '비행', category: '물리', power: 55, accuracy: 100, description: '도구가 없을 때 위력 110으로 2배 폭증' },
    ],
    special: [
      { nameKo: '에어슬래시', nameEn: 'Air Slash', type: '비행', category: '특수', power: 75, accuracy: 95, description: '30% 풀죽음 확률로 일방적 공격' },
      { nameKo: '폭풍', nameEn: 'Hurricane', type: '비행', category: '특수', power: 110, accuracy: 70, description: '비 오는 날 100% 명중하는 파괴기' },
    ]
  },
  '에스퍼': {
    physical: [
      { nameKo: '사이코커터', nameEn: 'Psycho Cut', type: '에스퍼', category: '물리', power: 70, accuracy: 100, description: '급소에 맞기 쉬운 에스퍼 칼날' },
      { nameKo: '사념의박치기', nameEn: 'Zen Headbutt', type: '에스퍼', category: '물리', power: 80, accuracy: 90, description: '물리 격투/독 저격기' },
    ],
    special: [
      { nameKo: '사이코키네시스', nameEn: 'Psychic', type: '에스퍼', category: '특수', power: 90, accuracy: 100, description: '상대 특방을 깎는 에스퍼 상징기' },
      { nameKo: '사이코쇼크', nameEn: 'Psyshock', type: '에스퍼', category: '특수', power: 80, accuracy: 100, description: '특수 공격으로 상대 물리 방어를 타격' },
    ]
  },
  '벌레': {
    physical: [
      { nameKo: '메가혼', nameEn: 'Megahorn', type: '벌레', category: '물리', power: 120, accuracy: 85, description: '거대한 뿔로 박살내는 120 물리포격' },
      { nameKo: '흡혈', nameEn: 'Leech Life', type: '벌레', category: '물리', power: 80, accuracy: 100, description: '피해의 절반을 회복하는 80 위력 명품기' },
    ],
    special: [
      { nameKo: '벌레의야단법석', nameEn: 'Bug Buzz', type: '벌레', category: '특수', power: 90, accuracy: 100, description: '대타출동을 관통하는 벌레 특수기' },
      { nameKo: '꽃가루경단', nameEn: 'Pollen Puff', type: '벌레', category: '특수', power: 90, accuracy: 100, description: '안정적인 90 위력의 단일 타격기' },
    ]
  },
  '바위': {
    physical: [
      { nameKo: '스톤에지', nameEn: 'Stone Edge', type: '바위', category: '물리', power: 100, accuracy: 80, description: '급소율이 높은 고화력 바위 일격' },
      { nameKo: '스톤샤워', nameEn: 'Rock Slide', type: '바위', category: '물리', power: 75, accuracy: 90, description: '30% 풀죽음 유발 스토리 효자기' },
    ],
    special: [
      { nameKo: '파워젬', nameEn: 'Power Gem', type: '바위', category: '특수', power: 80, accuracy: 100, description: '명중 100의 귀중한 바위 특수기' },
      { nameKo: '원시의힘', nameEn: 'Ancient Power', type: '바위', category: '특수', power: 60, accuracy: 100, description: '10% 확률로 전 스탯이 1랭크씩 상승' },
    ]
  },
  '고스트': {
    physical: [
      { nameKo: '고스트다이브', nameEn: 'Phantom Force', type: '고스트', category: '물리', power: 90, accuracy: 100, description: '방어/판별을 뚫고 꽂히는 90 타격' },
      { nameKo: '섀도클로', nameEn: 'Shadow Claw', type: '고스트', category: '물리', power: 70, accuracy: 100, description: '급소에 맞기 쉬운 고스트 손톱' },
    ],
    special: [
      { nameKo: '섀도볼', nameEn: 'Shadow Ball', type: '고스트', category: '특수', power: 80, accuracy: 100, description: '상대 특방을 20% 확률로 깎는 명기' },
      { nameKo: '병상첨병', nameEn: 'Hex', type: '고스트', category: '특수', power: 65, accuracy: 100, description: '상대가 상태이상일 때 위력 130 폭발' },
    ]
  },
  '드래곤': {
    physical: [
      { nameKo: '역린', nameEn: 'Outrage', type: '드래곤', category: '물리', power: 120, accuracy: 100, description: '2~3턴간 난동을 부리는 결전기' },
      { nameKo: '드래곤클로', nameEn: 'Dragon Claw', type: '드래곤', category: '물리', power: 80, accuracy: 100, description: '페널티 없이 깔끔하게 베어내는 주력기' },
    ],
    special: [
      { nameKo: '용성군', nameEn: 'Draco Meteor', type: '드래곤', category: '특수', power: 130, accuracy: 90, description: '드래곤 최강의 메테오 폭격' },
      { nameKo: '용의파동', nameEn: 'Dragon Pulse', type: '드래곤', category: '특수', power: 85, accuracy: 100, description: '디메리트 없는 안정적인 85 화력' },
    ]
  },
  '악': {
    physical: [
      { nameKo: '지옥찌르기', nameEn: 'Throat Chop', type: '악', category: '물리', power: 80, accuracy: 100, description: '소리 기술을 봉인하는 80 위력 주력기' },
      { nameKo: '탁쳐서떨구기', nameEn: 'Knock Off', type: '악', category: '물리', power: 65, accuracy: 100, description: '지닌물건을 떨어뜨리며 1.5배 피해' },
    ],
    special: [
      { nameKo: '악의파동', nameEn: 'Dark Pulse', type: '악', category: '특수', power: 80, accuracy: 100, description: '20% 풀죽음 확률의 안정적인 주력기' },
      { nameKo: '바크아웃', nameEn: 'Snarl', type: '악', category: '특수', power: 55, accuracy: 95, description: '상대 특공을 무조건 1랭크 하락' },
    ]
  },
  '강철': {
    physical: [
      { nameKo: '아이언헤드', nameEn: 'Iron Head', type: '강철', category: '물리', power: 80, accuracy: 100, description: '30% 풀죽음 확률로 페어리를 처단' },
      { nameKo: '헤비봄버', nameEn: 'Heavy Slam', type: '강철', category: '물리', power: 120, accuracy: 100, description: '체중 차이에 따라 최대 120 타격' },
    ],
    special: [
      { nameKo: '러스터캐논', nameEn: 'Flash Cannon', type: '강철', category: '특수', power: 80, accuracy: 100, description: '상대 특방을 10% 깎는 강철 광선' },
      { nameKo: '철제광선', nameEn: 'Steel Beam', type: '강철', category: '특수', power: 140, accuracy: 95, description: '체력 절반을 소모하는 결전의 광선' },
    ]
  },
  '페어리': {
    physical: [
      { nameKo: '치근거리기', nameEn: 'Play Rough', type: '페어리', category: '물리', power: 90, accuracy: 90, description: '드래곤과 악을 사냥하는 대표 물리페어리기' },
      { nameKo: '스피릿브레이크', nameEn: 'Spirit Break', type: '페어리', category: '물리', power: 75, accuracy: 100, description: '상대의 특공을 확정 1랭크 하락' },
    ],
    special: [
      { nameKo: '문포스', nameEn: 'Moonblast', type: '페어리', category: '특수', power: 95, accuracy: 100, description: '명중 100, 위력 95의 최상급 특수기' },
      { nameKo: '매지컬샤인', nameEn: 'Dazzling Gleam', type: '페어리', category: '특수', power: 80, accuracy: 100, description: '안정적인 전장 제압 페어리 빛줄기' },
    ]
  },
  '노말': {
    physical: [
      { nameKo: '이판사판태클', nameEn: 'Double-Edge', type: '노말', category: '물리', power: 120, accuracy: 100, description: '반동을 감수하는 120 극딜 돌진기' },
      { nameKo: '괴력', nameEn: 'Strength', type: '노말', category: '물리', power: 80, accuracy: 100, description: '스토리 필수 필드기이자 안정적 80' },
    ],
    special: [
      { nameKo: '하이퍼보이스', nameEn: 'Hyper Voice', type: '노말', category: '특수', power: 90, accuracy: 100, description: '대타출동을 꿰뚫는 고음 포격' },
      { nameKo: '파괴광선', nameEn: 'Hyper Beam', type: '노말', category: '특수', power: 150, accuracy: 90, description: '스토리 보스를 한 방에 보내는 150 광선' },
    ]
  }
};

/**
 * 포켓몬의 타입과 물리/특수 스탯을 분석하여 최적의 실제 4개 기술배치를 완성해주는 헬퍼 함수
 */
export function getOptimizedMoveset(
  types: PokemonType[],
  isPhysical: boolean
): PokemonMoveData[] {
  const moves: PokemonMoveData[] = [];
  const primaryType = types[0] || '노말';
  const secondaryType = types[1];

  // 1. 제1타입 메인 자속기
  const primaryPool = SIGNATURE_MOVES_BY_TYPE[primaryType];
  const mainMove = isPhysical ? primaryPool.physical[0] : primaryPool.special[0];
  moves.push(mainMove);

  // 2. 제2타입 보조 자속기 (단일 타입이면 같은 타입 다른 기술이나 노말기)
  if (secondaryType && SIGNATURE_MOVES_BY_TYPE[secondaryType]) {
    const secPool = SIGNATURE_MOVES_BY_TYPE[secondaryType];
    const subMove = isPhysical ? secPool.physical[0] : secPool.special[0];
    moves.push(subMove);
  } else {
    const altMove = isPhysical ? primaryPool.physical[1] || SIGNATURE_MOVES_BY_TYPE['노말'].physical[0] : primaryPool.special[1] || SIGNATURE_MOVES_BY_TYPE['노말'].special[0];
    moves.push(altMove);
  }

  // 3. 약점 견제 서브웨폰 (냉동빔 / 지진 / 10만볼트 등)
  if (isPhysical) {
    if (primaryType !== '땅' && secondaryType !== '땅') {
      moves.push(SIGNATURE_MOVES_BY_TYPE['땅'].physical[0]); // 지진
    } else {
      moves.push(SIGNATURE_MOVES_BY_TYPE['바위'].physical[1]); // 스톤샤워
    }
  } else {
    if (primaryType !== '얼음' && secondaryType !== '얼음') {
      moves.push(SIGNATURE_MOVES_BY_TYPE['얼음'].special[0]); // 냉동빔
    } else {
      moves.push(SIGNATURE_MOVES_BY_TYPE['불꽃'].special[0]); // 화염방사
    }
  }

  // 4. 범용 랭크업 / 견제기
  if (isPhysical) {
    moves.push({
      nameKo: '칼춤',
      nameEn: 'Swords Dance',
      type: '노말',
      category: '변화',
      power: 0,
      accuracy: 100,
      description: '공격을 단숨에 2랭크 올려 결정력을 2배로 폭증시킴'
    });
  } else {
    moves.push({
      nameKo: '명상',
      nameEn: 'Calm Mind',
      type: '에스퍼',
      category: '변화',
      power: 0,
      accuracy: 100,
      description: '특수공격과 특수방어를 동시에 1랭크 올려 공수를 강화'
    });
  }

  return moves;
}
