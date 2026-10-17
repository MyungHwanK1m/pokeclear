import { GymLeader } from '../types/battle';

export const GYM_LEADERS: GymLeader[] = [
  // 1. 9세대 SV 관장: 단풍 (벌레)
  {
    id: 'sv_katy',
    nameKo: '단풍',
    nameEn: 'Katy',
    titleKo: '세르클체육관 관장 (파티시에)',
    gameSeries: 'SV',
    gameTitle: '9세대 스칼렛·바이올렛',
    generation: 9,
    badgeName: '벌레 배지',
    specialtyType: '벌레',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/katy.png',
    badgeIcon: '🍰',
    difficulty: '쉬움',
    dialogue: {
      intro: '달콤한 과자처럼 부드럽지만, 제 벌레 포켓몬들의 끈기는 아주 단단하답니다!',
      defeat: '정말 훌륭한 레시피처럼 완성도 높은 승부였어요! 배지를 드립니다.'
    },
    team: [
      {
        speciesId: 179,
        nameKo: '깜지곰',
        nameEn: 'Teddiursa',
        types: ['노말'],
        level: 15,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png',
        ability: '픽업',
        stats: { hp: 45, attack: 35, defense: 30, spAttack: 30, spDefense: 30, speed: 25 },
        moves: [
          { nameKo: '할퀴기', type: '노말', category: '물리', power: 40, accuracy: 100 },
          { nameKo: '연속뺨치기', type: '벌레', category: '물리', power: 25, accuracy: 95 }
        ]
      },
      {
        speciesId: 917,
        nameKo: '타Highlighted콩',
        nameEn: 'Tarountula',
        types: ['벌레'],
        level: 14,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png',
        stats: { hp: 40, attack: 28, defense: 32, spAttack: 25, spDefense: 30, speed: 20 },
        moves: [
          { nameKo: '벌레먹음', type: '벌레', category: '물리', power: 60, accuracy: 100 },
          { nameKo: '실뿜기', type: '벌레', category: '변화', power: 0, accuracy: 95 }
        ]
      },
      {
        speciesId: 919,
        nameKo: '콩알뚜기',
        nameEn: 'Nymble',
        types: ['벌레'],
        level: 14,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png',
        stats: { hp: 38, attack: 32, defense: 28, spAttack: 25, spDefense: 25, speed: 35 },
        moves: [
          { nameKo: '몸통박치기', type: '노말', category: '물리', power: 40, accuracy: 100 },
          { nameKo: '벌레의저항', type: '벌레', category: '특수', power: 50, accuracy: 100 }
        ]
      }
    ]
  },

  // 2. 9세대 SV 관장: 모야모 (전기 스트리머)
  {
    id: 'sv_iono',
    nameKo: '모야모',
    nameEn: 'Iono',
    titleKo: '누룩스체육관 관장 (인플루언서)',
    gameSeries: 'SV',
    gameTitle: '9세대 스칼렛·바이올렛',
    generation: 9,
    badgeName: '전기 배지',
    specialtyType: '전기',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/iono.png',
    badgeIcon: '⚡',
    difficulty: '보통',
    dialogue: {
      intro: '안녕안녕~ 여러분의 모야모야 TV! 이번 도전자님과의 배틀도 전세계 생중계 간다구!',
      defeat: '우와앗! 채널 고정 팬들도 깜짝 놀랄 슈퍼 플레이! 인정인정, 배지 증정!'
    },
    team: [
      {
        speciesId: 938,
        nameKo: '빈나두',
        nameEn: 'Tadbulb',
        types: ['전기'],
        level: 23,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png',
        stats: { hp: 65, attack: 40, defense: 45, spAttack: 55, spDefense: 50, speed: 45 },
        moves: [
          { nameKo: '스파크', type: '전기', category: '물리', power: 65, accuracy: 100 },
          { nameKo: '물대포', type: '물', category: '특수', power: 40, accuracy: 100 }
        ]
      },
      {
        speciesId: 940,
        nameKo: '찌리배리',
        nameEn: 'Bellibolt',
        types: ['전기'],
        level: 24,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png',
        stats: { hp: 95, attack: 55, defense: 75, spAttack: 85, spDefense: 70, speed: 40 },
        moves: [
          { nameKo: '방전', type: '전기', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '진흙뿌리기', type: '땅', category: '특수', power: 20, accuracy: 100 }
        ]
      },
      {
        speciesId: 200,
        nameKo: '무우마직',
        nameEn: 'Mismagius',
        types: ['고스트', '전기'],
        level: 24,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png',
        stats: { hp: 75, attack: 55, defense: 60, spAttack: 95, spDefense: 95, speed: 95 },
        moves: [
          { nameKo: '섀도볼', type: '고스트', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '차지빔', type: '전기', category: '특수', power: 50, accuracy: 90 },
          { nameKo: '괴전파', type: '전기', category: '변화', power: 0, accuracy: 100 }
        ]
      }
    ]
  },

  // 3. 8세대 SwSh 관장: 야청 (물)
  {
    id: 'swsh_nessa',
    nameKo: '야청',
    nameEn: 'Nessa',
    titleKo: '바우체육관 관장 (물 모델)',
    gameSeries: 'SwSh',
    gameTitle: '8세대 소드·실드',
    generation: 8,
    badgeName: '워터배지',
    specialtyType: '물',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/nessa.png',
    badgeIcon: '💧',
    difficulty: '보통',
    dialogue: {
      intro: '제 물의 소용돌이에 휩쓸려도 침착함을 유지할 수 있을까요?',
      defeat: '거센 파도조차 길들여버렸군요. 당신의 강함을 인정합니다.'
    },
    team: [
      {
        speciesId: 119,
        nameKo: '왕콘치',
        nameEn: 'Seaking',
        types: ['물'],
        level: 23,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png',
        stats: { hp: 70, attack: 75, defense: 60, spAttack: 60, spDefense: 65, speed: 60 },
        moves: [
          { nameKo: '폭포오르기', type: '물', category: '물리', power: 80, accuracy: 100 },
          { nameKo: '뿔찌르기', type: '노말', category: '물리', power: 65, accuracy: 100 }
        ]
      },
      {
        speciesId: 834,
        nameKo: '갈가부기',
        nameEn: 'Drednaw',
        types: ['물', '바위'],
        level: 24,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png',
        stats: { hp: 85, attack: 95, defense: 85, spAttack: 45, spDefense: 60, speed: 65 },
        moves: [
          { nameKo: '아쿠아브레이크', type: '물', category: '물리', power: 85, accuracy: 100 },
          { nameKo: '암석봉인', type: '바위', category: '물리', power: 60, accuracy: 95 }
        ]
      }
    ]
  },

  // 4. 8세대 SwSh 챔피언: 단델 (무패의 챔피언)
  {
    id: 'swsh_leon',
    nameKo: '단델',
    nameEn: 'Leon',
    titleKo: '가라르지방 챔피언 (리자몽의 트레이너)',
    gameSeries: 'SwSh',
    gameTitle: '8세대 소드·실드',
    generation: 8,
    badgeName: '챔피언 트로피',
    specialtyType: '불꽃',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/leon.png',
    badgeIcon: '👑',
    difficulty: '챔피언급',
    dialogue: {
      intro: '자! 챔피언 타임의 시작이다! 네 모든 열정을 내게 쏟아부어라!',
      defeat: '하하하! 대단해! 이렇게 가슴 뛰는 승부는 처음이다! 새로운 챔피언의 탄생이다!'
    },
    team: [
      {
        speciesId: 681,
        nameKo: '킬가르도',
        nameEn: 'Aegislash',
        types: ['강철', '고스트'],
        level: 62,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png',
        stats: { hp: 160, attack: 140, defense: 140, spAttack: 140, spDefense: 140, speed: 90 },
        moves: [
          { nameKo: '새도볼', type: '고스트', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '러스터캐논', type: '강철', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '킹실드', type: '강철', category: '변화', power: 0, accuracy: 100 }
        ]
      },
      {
        speciesId: 887,
        nameKo: '드래펄트',
        nameEn: 'Dragapult',
        types: ['드래곤', '고스트'],
        level: 62,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png',
        stats: { hp: 175, attack: 150, defense: 110, spAttack: 135, spDefense: 110, speed: 180 },
        moves: [
          { nameKo: '드래곤다이브', type: '드래곤', category: '물리', power: 100, accuracy: 75 },
          { nameKo: '섀도볼', type: '고스트', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '화염방사', type: '불꽃', category: '특수', power: 90, accuracy: 100 }
        ]
      },
      {
        speciesId: 6,
        nameKo: '리자몽',
        nameEn: 'Charizard',
        types: ['불꽃', '비행'],
        level: 65,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        stats: { hp: 180, attack: 125, defense: 115, spAttack: 155, spDefense: 125, speed: 140 },
        moves: [
          { nameKo: '불대문자', type: '불꽃', category: '특수', power: 110, accuracy: 85 },
          { nameKo: '에어슬래시', type: '비행', category: '특수', power: 75, accuracy: 95 },
          { nameKo: '솔라빔', type: '풀', category: '특수', power: 120, accuracy: 100 }
        ]
      }
    ]
  },

  // 5. 4세대 BDSP 챔피언: 난천 (신오의 전설)
  {
    id: 'bdsp_cynthia',
    nameKo: '난천',
    nameEn: 'Cynthia',
    titleKo: '신오지방 챔피언 (고고학자)',
    gameSeries: 'BDSP',
    gameTitle: '4세대 브릴리언트 다이아몬드·샤이닝 펄',
    generation: 4,
    badgeName: '신오 챔피언 리본',
    specialtyType: '드래곤',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/cynthia.png',
    badgeIcon: '🐉',
    difficulty: '챔피언급',
    dialogue: {
      intro: '포켓몬과 트레이너가 교감하는 그 유대의 힘... 저와 한카리아스에게 보여주세요.',
      defeat: '정말 눈부신 승부였습니다. 신오지방의 새로운 역사가 바로 당신입니다.'
    },
    team: [
      {
        speciesId: 442,
        nameKo: '화강돌',
        nameEn: 'Spiritomb',
        types: ['고스트', '악'],
        level: 66,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png',
        stats: { hp: 155, attack: 130, defense: 145, spAttack: 130, spDefense: 145, speed: 70 },
        moves: [
          { nameKo: '섀도볼', type: '고스트', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '악의파동', type: '악', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '기습', type: '악', category: '물리', power: 70, accuracy: 100 }
        ]
      },
      {
        speciesId: 350,
        nameKo: '밀로틱',
        nameEn: 'Milotic',
        types: ['물'],
        level: 66,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
        stats: { hp: 195, attack: 90, defense: 120, spAttack: 140, spDefense: 165, speed: 115 },
        moves: [
          { nameKo: '열탕', type: '물', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '냉동빔', type: '얼음', category: '특수', power: 90, accuracy: 100 },
          { nameKo: 'HP회복', type: '노말', category: '변화', power: 0, accuracy: 100 }
        ]
      },
      {
        speciesId: 445,
        nameKo: '한카리아스',
        nameEn: 'Garchomp',
        types: ['드래곤', '땅'],
        level: 66,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png',
        heldItem: '자뭉열매',
        stats: { hp: 205, attack: 175, defense: 130, spAttack: 110, spDefense: 120, speed: 155 },
        moves: [
          { nameKo: '지진', type: '땅', category: '물리', power: 100, accuracy: 100 },
          { nameKo: '드래곤클로', type: '드래곤', category: '물리', power: 80, accuracy: 100 },
          { nameKo: '독찌르기', type: '독', category: '물리', power: 80, accuracy: 100 },
          { nameKo: '칼춤', type: '노말', category: '변화', power: 0, accuracy: 100 }
        ]
      }
    ]
  },

  // 6. 1세대 클래식 관장: 웅 (바위)
  {
    id: 'rby_brock',
    nameKo: '웅',
    nameEn: 'Brock',
    titleKo: '회색체육관 관장 (바위벽 트레이너)',
    gameSeries: 'SV', // 9세대/레츠고 등에서도 활약
    gameTitle: '1세대 관동 지방 / 레츠고',
    generation: 1,
    badgeName: '그레이배지',
    specialtyType: '바위',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/brock.png',
    badgeIcon: '🪨',
    difficulty: '쉬움',
    dialogue: {
      intro: '내 바위처럼 단단한 의지를 뚫을 수 있을까? 승부다!',
      defeat: '너의 공격... 단단한 돌이라도 뚫어버릴 기세였군! 그레이배지를 가져가라.'
    },
    team: [
      {
        speciesId: 74,
        nameKo: '꼬마돌',
        nameEn: 'Geodude',
        types: ['바위', '땅'],
        level: 12,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
        stats: { hp: 35, attack: 35, defense: 45, spAttack: 20, spDefense: 20, speed: 18 },
        moves: [
          { nameKo: '몸통박치기', type: '노말', category: '물리', power: 40, accuracy: 100 },
          { nameKo: '돌떨구기', type: '바위', category: '물리', power: 50, accuracy: 90 }
        ]
      },
      {
        speciesId: 95,
        nameKo: '롱스톤',
        nameEn: 'Onix',
        types: ['바위', '땅'],
        level: 14,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png',
        stats: { hp: 45, attack: 30, defense: 75, spAttack: 20, spDefense: 35, speed: 30 },
        moves: [
          { nameKo: '돌떨구기', type: '바위', category: '물리', power: 50, accuracy: 90 },
          { nameKo: '조이기', type: '노말', category: '물리', power: 15, accuracy: 85 },
          { nameKo: '단단해지기', type: '노말', category: '변화', power: 0, accuracy: 100 }
        ]
      }
    ]
  }
];
