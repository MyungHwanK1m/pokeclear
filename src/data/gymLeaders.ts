import { GymLeader } from '../types/battle';

export const GYM_LEADERS: GymLeader[] = [
  // ==========================================
  // [1] 9세대 스칼렛·바이올렛 (SV)
  // ==========================================
  {
    id: 'sv_katy',
    nameKo: '단풍',
    nameEn: 'Katy',
    titleKo: '세르클체육관 관장 (벌레 파티시에)',
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
        speciesId: 917,
        nameKo: '타란툴라',
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
        speciesId: 216,
        nameKo: '깜지곰',
        nameEn: 'Teddiursa',
        types: ['노말', '벌레'],
        level: 15,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png',
        ability: '픽업',
        stats: { hp: 45, attack: 35, defense: 30, spAttack: 30, spDefense: 30, speed: 25 },
        moves: [
          { nameKo: '연속뺨치기', type: '벌레', category: '물리', power: 25, accuracy: 95 },
          { nameKo: '할퀴기', type: '노말', category: '물리', power: 40, accuracy: 100 }
        ]
      }
    ]
  },
  {
    id: 'sv_iono',
    nameKo: '모야모',
    nameEn: 'Iono',
    titleKo: '누룩스체육관 관장 (전기 스트리머)',
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
        speciesId: 939,
        nameKo: '찌리배리',
        nameEn: 'Bellibolt',
        types: ['전기'],
        level: 24,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png',
        stats: { hp: 95, attack: 55, defense: 75, spAttack: 85, spDefense: 70, speed: 40 },
        moves: [
          { nameKo: '방전', type: '전기', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '물대포', type: '물', category: '특수', power: 40, accuracy: 100 }
        ]
      },
      {
        speciesId: 429,
        nameKo: '무우마직',
        nameEn: 'Mismagius',
        types: ['고스트', '전기'],
        level: 25,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png',
        stats: { hp: 75, attack: 55, defense: 60, spAttack: 95, spDefense: 95, speed: 95 },
        moves: [
          { nameKo: '10만볼트', type: '전기', category: '특수', power: 90, accuracy: 100 },
          { nameKo: '섀도볼', type: '고스트', category: '특수', power: 80, accuracy: 100 }
        ]
      }
    ]
  },
  {
    id: 'sv_larry',
    nameKo: '청목',
    nameEn: 'Larry',
    titleKo: '참푸르체육관 관장 & 사천왕 (비범한 직장인)',
    gameSeries: 'SV',
    gameTitle: '9세대 스칼렛·바이올렛',
    generation: 9,
    badgeName: '노말 배지',
    specialtyType: '노말',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/larry.png',
    badgeIcon: '💼',
    difficulty: '어려움',
    dialogue: {
      intro: '야근은 사양이지만... 일은 일이니까요. 평범하지만 빈틈없는 배틀을 보여드리겠습니다.',
      defeat: '하아... 역시 퇴근 시간 전에 끝내기는 글렀군요. 훌륭한 실력이었습니다.'
    },
    team: [
      {
        speciesId: 775,
        nameKo: '자말라',
        nameEn: 'Komala',
        types: ['노말'],
        level: 35,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png',
        stats: { hp: 65, attack: 115, defense: 65, spAttack: 75, spDefense: 95, speed: 65 },
        moves: [
          { nameKo: '기습', type: '악', category: '물리', power: 70, accuracy: 100 },
          { nameKo: '하품', type: '노말', category: '변화', power: 0, accuracy: 100 }
        ]
      },
      {
        speciesId: 968,
        nameKo: '꿈트렁',
        nameEn: 'Orthworm',
        types: ['강철'],
        level: 35,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png',
        stats: { hp: 70, attack: 85, defense: 145, spAttack: 60, spDefense: 55, speed: 65 },
        moves: [
          { nameKo: '아이언헤드', type: '강철', category: '물리', power: 80, accuracy: 100 },
          { nameKo: '지진', type: '땅', category: '물리', power: 100, accuracy: 100 }
        ]
      },
      {
        speciesId: 855,
        nameKo: '찌르호크',
        nameEn: 'Staraptor',
        types: ['노말', '비행'],
        level: 36,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png',
        stats: { hp: 85, attack: 120, defense: 70, spAttack: 50, spDefense: 60, speed: 100 },
        moves: [
          { nameKo: '은혜갚기', type: '노말', category: '물리', power: 102, accuracy: 100 },
          { nameKo: '인파이트', type: '격투', category: '물리', power: 120, accuracy: 100 }
        ]
      }
    ]
  },
  {
    id: 'sv_geeta',
    nameKo: '테사',
    nameEn: 'Geeta',
    titleKo: '팔데아 포켓몬리그 수석 챔피언',
    gameSeries: 'SV',
    gameTitle: '9세대 스칼렛·바이올렛',
    generation: 9,
    badgeName: '팔데아 챔피언 트로피',
    specialtyType: '바위',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/geeta.png',
    badgeIcon: '💎',
    difficulty: '챔피언급',
    dialogue: {
      intro: '팔데아의 정점에 도전할 자격을 증명하십시오. 수석 챔피언으로서 전력으로 맞서겠습니다.',
      defeat: '참으로 아름다운 재능이군요. 새로운 챔피언 랭크의 탄생을 축하합니다.'
    },
    team: [
      {
        speciesId: 970,
        nameKo: '킬라플로르',
        nameEn: 'Glimmora',
        types: ['바위', '독'],
        level: 61,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png',
        stats: { hp: 83, attack: 55, defense: 90, spAttack: 130, spDefense: 81, speed: 86 },
        moves: [
          { nameKo: '오물웨이브', type: '독', category: '특수', power: 95, accuracy: 100 },
          { nameKo: '파워젬', type: '바위', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '대지의힘', type: '땅', category: '특수', power: 90, accuracy: 100 }
        ]
      },
      {
        speciesId: 983,
        nameKo: '대도각참',
        nameEn: 'Kingambit',
        types: ['악', '강철'],
        level: 62,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png',
        stats: { hp: 100, attack: 135, defense: 120, spAttack: 60, spDefense: 85, speed: 50 },
        moves: [
          { nameKo: '아이언헤드', type: '강철', category: '물리', power: 80, accuracy: 100 },
          { nameKo: '도각참', type: '악', category: '물리', power: 85, accuracy: 100 },
          { nameKo: '기습', type: '악', category: '물리', power: 70, accuracy: 100 }
        ]
      }
    ]
  },

  // ==========================================
  // [2] 8세대 소드·실드 (SwSh)
  // ==========================================
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
  {
    id: 'swsh_raihan',
    nameKo: '금랑',
    nameEn: 'Raihan',
    titleKo: '너클체육관 관장 (단델의 영원한 라이벌)',
    gameSeries: 'SwSh',
    gameTitle: '8세대 소드·실드',
    generation: 8,
    badgeName: '드래곤배지',
    specialtyType: '드래곤',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/raihan.png',
    badgeIcon: '🌪️',
    difficulty: '어려움',
    dialogue: {
      intro: '날씨를 지배하는 자가 배틀을 지배하지! 모래바람과 드래곤의 무서움을 똑똑히 봐라!',
      defeat: '하! 셀카 한 장 찍고 가야겠군. 정말 끝내주는 승부였다, 도전자!'
    },
    team: [
      {
        speciesId: 526,
        nameKo: '기가이어스',
        nameEn: 'Gigalith',
        types: ['바위'],
        level: 46,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png',
        stats: { hp: 85, attack: 135, defense: 130, spAttack: 60, spDefense: 80, speed: 25 },
        moves: [
          { nameKo: '스톤에지', type: '바위', category: '물리', power: 100, accuracy: 80 },
          { nameKo: '모래바람', type: '바위', category: '변화', power: 0, accuracy: 100 }
        ]
      },
      {
        speciesId: 842,
        nameKo: '두랄루돈',
        nameEn: 'Duraludon',
        types: ['강철', '드래곤'],
        level: 48,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png',
        stats: { hp: 70, attack: 95, defense: 115, spAttack: 120, spDefense: 50, speed: 85 },
        moves: [
          { nameKo: '용의파동', type: '드래곤', category: '특수', power: 85, accuracy: 100 },
          { nameKo: '러스터캐논', type: '강철', category: '특수', power: 80, accuracy: 100 }
        ]
      }
    ]
  },
  {
    id: 'swsh_leon',
    nameKo: '단델',
    nameEn: 'Leon',
    titleKo: '가라르 챔피언 (무패의 챔피언)',
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
          { nameKo: '섀도볼', type: '고스트', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '러스터캐논', type: '강철', category: '특수', power: 80, accuracy: 100 }
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
          { nameKo: '에어슬래시', type: '비행', category: '특수', power: 75, accuracy: 95 }
        ]
      }
    ]
  },

  // ==========================================
  // [3] 4세대 리메이크 (BDSP)
  // ==========================================
  {
    id: 'bdsp_volkner',
    nameKo: '전진',
    nameEn: 'Volkner',
    titleKo: '물가체육관 관장 (천재 전기 기술자)',
    gameSeries: 'BDSP',
    gameTitle: '4세대 브릴리언트 다이아몬드·샤이닝 펄',
    generation: 4,
    badgeName: '비콘배지',
    specialtyType: '전기',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/volkner.png',
    badgeIcon: '💡',
    difficulty: '어려움',
    dialogue: {
      intro: '따분한 배틀은 이제 지긋지긋하다. 나를 진심으로 전율시킬 수 있겠나?',
      defeat: '...대단하군. 식어있던 가슴이 다시 찌릿찌릿 타오르기 시작했다!'
    },
    team: [
      {
        speciesId: 197,
        nameKo: '블래키',
        nameEn: 'Umbreon',
        types: ['악'],
        level: 47,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
        stats: { hp: 95, attack: 65, defense: 110, spAttack: 60, spDefense: 130, speed: 65 },
        moves: [
          { nameKo: '악의파동', type: '악', category: '특수', power: 80, accuracy: 100 },
          { nameKo: '이상한빛', type: '고스트', category: '변화', power: 0, accuracy: 100 }
        ]
      },
      {
        speciesId: 466,
        nameKo: '에레키블',
        nameEn: 'Electivire',
        types: ['전기'],
        level: 49,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png',
        stats: { hp: 75, attack: 123, defense: 67, spAttack: 95, spDefense: 85, speed: 95 },
        moves: [
          { nameKo: '번개펀치', type: '전기', category: '물리', power: 75, accuracy: 100 },
          { nameKo: '불꽃펀치', type: '불꽃', category: '물리', power: 75, accuracy: 100 },
          { nameKo: '지진', type: '땅', category: '물리', power: 100, accuracy: 100 }
        ]
      }
    ]
  },
  {
    id: 'bdsp_cynthia',
    nameKo: '난천',
    nameEn: 'Cynthia',
    titleKo: '신오 챔피언 (고고학자 & 신오의 수호자)',
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
          { nameKo: '악의파동', type: '악', category: '특수', power: 80, accuracy: 100 }
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
          { nameKo: '냉동빔', type: '얼음', category: '특수', power: 90, accuracy: 100 }
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
        stats: { hp: 205, attack: 175, defense: 130, spAttack: 110, spDefense: 120, speed: 155 },
        moves: [
          { nameKo: '지진', type: '땅', category: '물리', power: 100, accuracy: 100 },
          { nameKo: '드래곤클로', type: '드래곤', category: '물리', power: 80, accuracy: 100 },
          { nameKo: '독찌르기', type: '독', category: '물리', power: 80, accuracy: 100 }
        ]
      }
    ]
  },

  // ==========================================
  // [4] 2세대 성도 지방 (GSC / HGSS)
  // ==========================================
  {
    id: 'gsc_whitney',
    nameKo: '꼭두',
    nameEn: 'Whitney',
    titleKo: '금빛체육관 관장 (초보 분쇄기 밀탱크)',
    gameSeries: 'BDSP',
    gameTitle: '2세대 성도 지방 / HGSS',
    generation: 2,
    badgeName: '레귤러배지',
    specialtyType: '노말',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/whitney.png',
    badgeIcon: '🥛',
    difficulty: '어려움',
    dialogue: {
      intro: '내 귀여운 포켓몬들 얕보면 큰코다쳐! 밀탱크야, 굴러라!',
      defeat: '으아앙~~! 져버렸어! 분해 죽겠어! ...흥, 배지나 받아 가!'
    },
    team: [
      {
        speciesId: 35,
        nameKo: '삐삐',
        nameEn: 'Clefairy',
        types: ['노말', '페어리'],
        level: 18,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
        stats: { hp: 70, attack: 45, defense: 48, spAttack: 60, spDefense: 65, speed: 35 },
        moves: [
          { nameKo: '손가락흔들기', type: '노말', category: '변화', power: 0, accuracy: 100 },
          { nameKo: '뺨치기', type: '노말', category: '물리', power: 40, accuracy: 100 }
        ]
      },
      {
        speciesId: 241,
        nameKo: '밀탱크',
        nameEn: 'Miltank',
        types: ['노말'],
        level: 20,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png',
        stats: { hp: 95, attack: 80, defense: 105, spAttack: 40, spDefense: 70, speed: 100 },
        moves: [
          { nameKo: '구르기', type: '바위', category: '물리', power: 30, accuracy: 90 },
          { nameKo: '우유마시기', type: '노말', category: '변화', power: 0, accuracy: 100 },
          { nameKo: '짓밟기', type: '노말', category: '물리', power: 65, accuracy: 100 }
        ]
      }
    ]
  },
  {
    id: 'gsc_red',
    nameKo: '레드',
    nameEn: 'Red',
    titleKo: '은빛산의 전설 (초대 챔피언)',
    gameSeries: 'BDSP',
    gameTitle: '2세대 성도·관동 / 은빛산 정상',
    generation: 2,
    badgeName: '전설의 트레이너 훈장',
    specialtyType: '노말',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/red.png',
    badgeIcon: '🏔️',
    difficulty: '챔피언급',
    dialogue: {
      intro: '...... ...... ......!',
      defeat: '...... ......'
    },
    team: [
      {
        speciesId: 25,
        nameKo: '피카츄',
        nameEn: 'Pikachu',
        types: ['전기'],
        level: 81,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        heldItem: '전기구슬',
        stats: { hp: 120, attack: 140, defense: 80, spAttack: 150, spDefense: 90, speed: 170 },
        moves: [
          { nameKo: '볼트태클', type: '전기', category: '물리', power: 120, accuracy: 100 },
          { nameKo: '10만볼트', type: '전기', category: '특수', power: 90, accuracy: 100 },
          { nameKo: '아이언테일', type: '강철', category: '물리', power: 100, accuracy: 75 }
        ]
      },
      {
        speciesId: 143,
        nameKo: '잠만보',
        nameEn: 'Snorlax',
        types: ['노말'],
        level: 75,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
        stats: { hp: 250, attack: 160, defense: 100, spAttack: 80, spDefense: 150, speed: 50 },
        moves: [
          { nameKo: '누르기', type: '노말', category: '물리', power: 85, accuracy: 100 },
          { nameKo: '지진', type: '땅', category: '물리', power: 100, accuracy: 100 },
          { nameKo: '섀도볼', type: '고스트', category: '특수', power: 80, accuracy: 100 }
        ]
      },
      {
        speciesId: 6,
        nameKo: '리자몽',
        nameEn: 'Charizard',
        types: ['불꽃', '비행'],
        level: 77,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        stats: { hp: 170, attack: 130, defense: 120, spAttack: 170, spDefense: 130, speed: 150 },
        moves: [
          { nameKo: '화염방사', type: '불꽃', category: '특수', power: 90, accuracy: 100 },
          { nameKo: '에어슬래시', type: '비행', category: '특수', power: 75, accuracy: 95 }
        ]
      }
    ]
  },

  // ==========================================
  // [5] 1세대 관동 지방 (RBY / FRLG / 레츠고)
  // ==========================================
  {
    id: 'rby_brock',
    nameKo: '웅',
    nameEn: 'Brock',
    titleKo: '회색체육관 관장 (바위벽 트레이너)',
    gameSeries: 'SV',
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
          { nameKo: '돌떨구기', type: '바위', category: '물리', power: 50, accuracy: 90 },
          { nameKo: '몸통박치기', type: '노말', category: '물리', power: 40, accuracy: 100 }
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
          { nameKo: '조이기', type: '노말', category: '물리', power: 15, accuracy: 85 }
        ]
      }
    ]
  },
  {
    id: 'rby_misty',
    nameKo: '이슬',
    nameEn: 'Misty',
    titleKo: '블루체육관 관장 (말괄량이 인어)',
    gameSeries: 'SV',
    gameTitle: '1세대 관동 지방 / 레츠고',
    generation: 1,
    badgeName: '블루배지',
    specialtyType: '물',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/misty.png',
    badgeIcon: '🌊',
    difficulty: '보통',
    dialogue: {
      intro: '내 물 포켓몬들은 귀엽기만 한 게 아니야! 호되게 당해볼래?',
      defeat: '정말 강하구나... 인정할 수밖에 없네. 이 블루배지를 줄게!'
    },
    team: [
      {
        speciesId: 120,
        nameKo: '별가사리',
        nameEn: 'Staryu',
        types: ['물'],
        level: 18,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png',
        stats: { hp: 40, attack: 35, defense: 40, spAttack: 50, spDefense: 45, speed: 65 },
        moves: [
          { nameKo: '물대포', type: '물', category: '특수', power: 40, accuracy: 100 },
          { nameKo: '몸통박치기', type: '노말', category: '물리', power: 40, accuracy: 100 }
        ]
      },
      {
        speciesId: 121,
        nameKo: '아쿠스타',
        nameEn: 'Starmie',
        types: ['물', '에스퍼'],
        level: 21,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png',
        stats: { hp: 60, attack: 55, defense: 65, spAttack: 80, spDefense: 65, speed: 85 },
        moves: [
          { nameKo: '거품광선', type: '물', category: '특수', power: 65, accuracy: 100 },
          { nameKo: '사이코키네시스', type: '에스퍼', category: '특수', power: 90, accuracy: 100 }
        ]
      }
    ]
  },
  {
    id: 'rby_giovanni',
    nameKo: '비주기',
    nameEn: 'Giovanni',
    titleKo: '상록체육관 관장 & 로켓단 보스',
    gameSeries: 'SV',
    gameTitle: '1세대 관동 지방 / 레츠고',
    generation: 1,
    badgeName: '그린배지',
    specialtyType: '땅',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/giovanni.png',
    badgeIcon: '🎩',
    difficulty: '어려움',
    dialogue: {
      intro: '감히 로켓단의 성역에 발을 들이다니... 대지의 힘으로 짓밟아주마!',
      defeat: '크윽... 나의 패배다. 완벽하게 무너졌군. 배지를 가져가라.'
    },
    team: [
      {
        speciesId: 34,
        nameKo: '니드킹',
        nameEn: 'Nidoking',
        types: ['독', '땅'],
        level: 45,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png',
        stats: { hp: 81, attack: 102, defense: 77, spAttack: 85, spDefense: 75, speed: 85 },
        moves: [
          { nameKo: '지진', type: '땅', category: '물리', power: 100, accuracy: 100 },
          { nameKo: '오물폭탄', type: '독', category: '특수', power: 90, accuracy: 100 }
        ]
      },
      {
        speciesId: 112,
        nameKo: '코뿌리',
        nameEn: 'Rhydon',
        types: ['땅', '바위'],
        level: 50,
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
        artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png',
        stats: { hp: 105, attack: 130, defense: 120, spAttack: 45, spDefense: 45, speed: 40 },
        moves: [
          { nameKo: '지진', type: '땅', category: '물리', power: 100, accuracy: 100 },
          { nameKo: '스톤에지', type: '바위', category: '물리', power: 100, accuracy: 80 }
        ]
      }
    ]
  }
];
