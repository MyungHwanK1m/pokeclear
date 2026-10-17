import { PokemonClearGuide } from '../types/pokemon';

export const POKEMON_CLEAR_GUIDES: PokemonClearGuide[] = [
  {
    id: 170,
    nameKo: '초라기',
    nameEn: 'chinchou',
    types: ['물', '전기'],
    conceptTitle: '진화의휘석 축전 불사신 런',
    isUnevolvedRun: true,
    difficulty: '보통',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png',
    baseStats: {
      hp: 75,
      attack: 38,
      defense: 38,
      spAttack: 56,
      spDefense: 56,
      speed: 67
    },
    recommendedSetup: {
      ability: {
        nameKo: '축전 (Volt Absorb)',
        reason: '전기 공격을 100% 무효화하고 체력 25% 회복! 약점이 [풀, 땅] 단 2개만 남음'
      },
      nature: {
        nameKo: '조심 (Modest)',
        statChange: '특수공격 ↑ / 공격 ↓ (부족한 화력 극대화)'
      },
      heldItem: {
        nameKo: '진화의휘석 (Eviolite)',
        reason: '미진화 상태에서 방어와 특수방어 1.5배 증가. 준수한 HP(75)와 합쳐져 사기적인 내구 형성'
      },
      evSpread: {
        spAttack: 252,
        defense: 252,
        hp: 4,
        summary: '특공 252 / 방어 252 / HP 4 (취약한 물리방어와 딜량을 완벽 보강)'
      },
      moveset: [
        {
          slot: 1,
          nameKo: '열탕 또는 파도타기',
          type: '물',
          category: '특수',
          power: 80,
          accuracy: 100,
          reason: '30% 화상 확률로 상대 물리 공격력을 반토막내거나 안정적인 90 위력 메인 웨폰',
          generationNotice: '⚠️ 9세대(SV) 기술머신 삭제: 9세대 플레이 시 "파도타기" 또는 "하이드로펌프" 사용 필수 (5~8세대는 열탕 강력 추천)'
        },
        {
          slot: 2,
          nameKo: '10만볼트 (방전)',
          type: '전기',
          category: '특수',
          power: 90,
          accuracy: 100,
          reason: '자속 주력기. 방전 채용 시 30% 마비로 상대 턴 무력화 노림',
          generationNotice: '전 세대에서 기술머신 또는 자력기로 안정적 습득 가능'
        },
        {
          slot: 3,
          nameKo: '냉동빔',
          type: '얼음',
          category: '특수',
          power: 90,
          accuracy: 100,
          reason: '초라기의 양대 약점인 [풀]과 [땅], 드래곤을 찌르는 절대 필수 서브웨폰',
          generationNotice: '1~9세대 전 시리즈 기술머신으로 습득 가능 (상대 땅/풀 카운터 핵심)'
        },
        {
          slot: 4,
          nameKo: '비바라기 (전자기파)',
          type: '물',
          category: '변화',
          power: '-',
          accuracy: '-',
          reason: '물 기술 위력 1.5배 폭증 + 번개 필중 버프, 또는 전자기파로 선공권 장악',
          generationNotice: '전자기파는 7세대부터 명중률이 100% → 90%로 하향 패치됨 (구세대는 100% 명중)'
        }
      ]
    },
    keyStrategies: [
      '진화하지 않으므로 레벨 27 이후 레벨업 시 반드시 B버튼을 눌러 진화 캔슬하기',
      '전기 포켓몬이 등장하면 초라기로 무료 교체하여 체력을 1/4 공짜로 채우는 피흡 턴 활용',
      '물리 약점(지진, 풀 기술)에 대비해 열탕 화상 먼저 걸기'
    ],
    bossTips: [
      {
        title: '사천왕/챔피언 결전 전술',
        content: '휘석 맷집을 믿고 첫 턴에 상점제 [스페셜업(X Sp. Atk)]을 1~2회 사용하면 특공 56짜리 초라기가 1타 올킬러로 변신합니다.'
      },
      {
        title: '풀/땅 타입 관장 공략',
        content: '반드시 냉동빔 기술머신을 먼저 확보하고 진입할 것. 스피드가 밀릴 경우 전자기파를 먼저 맞춘 후 냉동빔으로 저격하세요.'
      }
    ]
  },
  {
    id: 25,
    nameKo: '피카츄',
    nameEn: 'pikachu',
    types: ['전기'],
    conceptTitle: '전기구슬 종이비행기 폭탄 런',
    isUnevolvedRun: true,
    difficulty: '어려움',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    baseStats: {
      hp: 35,
      attack: 55,
      defense: 40,
      spAttack: 50,
      spDefense: 50,
      speed: 90
    },
    recommendedSetup: {
      ability: {
        nameKo: '정전기 (Static)',
        reason: '물리 접촉기를 맞았을 때 30% 확률로 상대에게 마비를 걸어 변수 창출'
      },
      nature: {
        nameKo: '천진난만 (Naive) 또는 성급 (Hasty)',
        statChange: '스피드 ↑ (유리대포이므로 무조건 먼저 때려야 생존)'
      },
      heldItem: {
        nameKo: '전기구슬 (Light Ball)',
        reason: '피카츄 전용 아이템. 공격과 특수공격을 2배로 뻥튀기하여 진화형 라이츄를 아득히 초월하는 딜을 냄'
      },
      evSpread: {
        spAttack: 252,
        speed: 252,
        attack: 4,
        summary: '특공 252 / 스피드 252 / 공격 4 (극단적 스피드 딜러 세팅)'
      },
      moveset: [
        {
          slot: 1,
          nameKo: '10만볼트 (볼트태클)',
          type: '전기',
          category: '특수',
          power: 90,
          accuracy: 100,
          reason: '전기구슬 2배 보정을 받는 메인 폭딜기',
          generationNotice: '볼트태클은 3세대 에메랄드부터 도입된 전기구슬 교배 전용기 (스토리 육성 시 10만볼트가 훨씬 간편)'
        },
        {
          slot: 2,
          nameKo: '풀묶기',
          type: '풀',
          category: '특수',
          power: '가변',
          accuracy: 100,
          reason: '전기 킬러인 무거운 땅/바위 포켓몬을 저격하는 핵심 비기',
          generationNotice: '⚠️ 4세대(DPPt) 이후 도입된 기술 (3세대 이전 FRLG/RSE 플레이 시 "아이언테일" 또는 "파도타기 이벤트 피카츄"로 대체)'
        },
        {
          slot: 3,
          nameKo: '볼트체인지',
          type: '전기',
          category: '특수',
          power: 70,
          accuracy: 100,
          reason: '불리한 상성을 만났을 때 딜을 넣고 안전하게 동료로 교체',
          generationNotice: '⚠️ 5세대(BW) 이후 도입된 기술 (4세대 이전에는 "전격파"나 "방전" 활용)'
        },
        {
          slot: 4,
          nameKo: '전광석화 또는 나쁜음모',
          type: '노말',
          category: '물리',
          power: 40,
          accuracy: 100,
          reason: '딸피 마무리용 선공기 또는 턴 벌었을 때 특공 2랭크 뻥튀기',
          generationNotice: '나쁜음모는 4세대 피츄 진화 시 자력기, 8·9세대에서는 기술머신으로 전수 가능'
        }
      ]
    },
    keyStrategies: [
      '피카츄의 내구는 스치면 빈사 수준이므로 맞을 생각을 하지 말고 선공 원턴킬을 노려야 함',
      '전기구슬 파밍(야생 피카츄 5% 확률 소지)이 이 챌린지의 시작이자 알파와 오메가'
    ],
    bossTips: [
      {
        title: '땅 타입 체육관 주의',
        content: '땅 타입은 풀묶기 2타 이내로 잡지 못하면 지진 한 방에 기절합니다. 나쁜음모 각을 보거나 서브 포켓몬의 기점이 필요합니다.'
      }
    ]
  },
  {
    id: 113,
    nameKo: '럭키',
    nameEn: 'chansey',
    types: ['노말'],
    conceptTitle: '진화의휘석 철벽 요새 런',
    isUnevolvedRun: true,
    difficulty: '쉬움',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png',
    baseStats: {
      hp: 250,
      attack: 5,
      defense: 5,
      spAttack: 35,
      spDefense: 105,
      speed: 50
    },
    recommendedSetup: {
      ability: {
        nameKo: '자연회복 (Natural Cure)',
        reason: '교체 시 독, 마비, 화상, 잠듦 등 모든 상태이상이 자동 치료'
      },
      nature: {
        nameKo: '대담 (Bold)',
        statChange: '방어 ↑ / 공격 ↓ (극도로 취약한 물리방어 극대화)'
      },
      heldItem: {
        nameKo: '진화의휘석 (Eviolite)',
        reason: 'HP 250에 휘석 보정이 들어가면 최종진화형 해피너스보다도 단단한 세계 최강의 벽이 됨'
      },
      evSpread: {
        defense: 252,
        spDefense: 252,
        hp: 4,
        summary: '방어 252 / 특방 252 / HP 4 (물리방어를 최대로 끌어올려 철벽 완성)'
      },
      moveset: [
        {
          slot: 1,
          nameKo: '지구던지기',
          type: '격투',
          category: '물리',
          power: '레벨 비례',
          accuracy: 100,
          reason: '공격/특공 스탯에 구애받지 않고 무조건 레벨 수치만큼 고정 데미지(Lv.60이면 60딜)',
          generationNotice: '⚠️ 3세대 가르침기술 / 유전기 (최신 세대에서 유전이 어려울 경우 "섀도볼"이나 "차지빔"으로 대체 가능)'
        },
        {
          slot: 2,
          nameKo: '알낳기',
          type: '노말',
          category: '변화',
          power: '-',
          accuracy: '-',
          reason: '최대 체력의 50%를 즉시 회복하는 불사신 스킬',
          generationNotice: '⚠️ 9세대(SV) 밸런스 패치: 회복기 PP가 10에서 5로 대폭 너프됨 (PP에이더 관리 필요)'
        },
        {
          slot: 3,
          nameKo: '맹독 또는 전기자석파',
          type: '독',
          category: '변화',
          power: '-',
          accuracy: 90,
          reason: '시간이 갈수록 데미지가 폭증하는 맹독으로 보스전을 말려 죽임',
          generationNotice: '⚠️ 8·9세대 맹독 TM 전면 삭제 패치: 8·9세대에서는 맹독 습득 불가! 최신작에서는 반드시 "전기자석파" 또는 "스텔스록" 사용'
        },
        {
          slot: 4,
          nameKo: '작아지기',
          type: '노말',
          category: '변화',
          power: '-',
          accuracy: '-',
          reason: '회피율 2랭크 상승. 3번 쓰면 상대 기술 명중률이 33% 이하로 떡락',
          generationNotice: '1~9세대 전 시리즈 자력기로 습득 가능'
        }
      ]
    },
    keyStrategies: [
      '보스전에서 맹독 걸고 작아지기 3번 쓴 뒤 알낳기로 버티면 모든 챔피언이 무릎을 꿇음',
      '고스트 타입은 지구던지기가 안 통하므로 맹독이나 섀도볼 서브기술 대비 필요'
    ],
    bossTips: [
      {
        title: '격투 타입 물리 몬스터 주의',
        content: '인파이트나 크로스초프 같은 4배급 고위력 물리 격투기는 아무리 휘석이라도 아픕니다. 이땐 비행/고스트 파티원과 연계하세요.'
      }
    ]
  },
  {
    id: 133,
    nameKo: '이브이',
    nameEn: 'eevee',
    types: ['노말'],
    conceptTitle: '적응력 은혜갚기 노말 마스터 런',
    isUnevolvedRun: true,
    difficulty: '보통',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    baseStats: {
      hp: 55,
      attack: 55,
      defense: 50,
      spAttack: 45,
      spDefense: 65,
      speed: 55
    },
    recommendedSetup: {
      ability: {
        nameKo: '적응력 (Adaptability)',
        reason: '자속 보정을 기존 1.5배에서 2.0배로 증가시켜 노말 기술 데미지가 폭발함'
      },
      nature: {
        nameKo: '고집 (Adamant)',
        statChange: '공격 ↑ / 특공 ↓'
      },
      heldItem: {
        nameKo: '실크스카프 (Silk Scarf) 또는 진화의휘석',
        reason: '적응력 + 실크스카프로 노말 기술 결정력을 극대화하거나 휘석으로 밸런스 유지'
      },
      evSpread: {
        attack: 252,
        speed: 252,
        hp: 4,
        summary: '공격 252 / 스피드 252 / HP 4'
      },
      moveset: [
        {
          slot: 1,
          nameKo: '이판사판태클 (은혜갚기)',
          type: '노말',
          category: '물리',
          power: 120,
          accuracy: 100,
          reason: '적응력 2배 보정 시 실질 위력 240에 달하는 이브이 궁극의 일격',
          generationNotice: '⚠️ 8·9세대 은혜갚기 완전 삭제됨: 8·9세대 플레이 시 "이판사판태클"(자력기) 또는 "돌진"을 메인기로 사용해야 함'
        },
        {
          slot: 2,
          nameKo: '전광석화',
          type: '노말',
          category: '물리',
          power: 40,
          accuracy: 100,
          reason: '적응력 보정을 받는 강력한 자속 선공기 (위력 80급 체감)',
          generationNotice: '전 세대 공통 자력기 (딸피 마무리용 완소기)'
        },
        {
          slot: 3,
          nameKo: '물기 또는 깨물어부수기',
          type: '악',
          category: '물리',
          power: 60,
          accuracy: 100,
          reason: '노말 기술이 통하지 않는 고스트 타입을 타격하는 견제기',
          generationNotice: '깨물어부수기는 8세대(소실)부터 레코드/기술머신으로 전수 가능'
        },
        {
          slot: 4,
          nameKo: '하품 또는 모래뿌리기',
          type: '노말',
          category: '변화',
          power: '-',
          accuracy: '-',
          reason: '다음 턴 상대를 잠재우거나 명중률을 깎아 딜각 확보',
          generationNotice: '하품은 3세대부터 자력 습득 가능'
        }
      ]
    },
    keyStrategies: [
      '진화의 돌이나 친밀도 진화 메시지가 뜰 때 진화하지 않도록 주의',
      '하품으로 상대를 재운 뒤 턴을 벌어 이판사판태클로 원샷원킬'
    ],
    bossTips: [
      {
        title: '바위/강철 관장 공략',
        content: '노말 기술이 반감되는 바위/강철 타입은 격투나 땅 타입 파티원에게 바통을 넘기는 것을 권장합니다.'
      }
    ]
  },
  {
    id: 129,
    nameKo: '잉어킹',
    nameEn: 'magikarp',
    types: ['물'],
    conceptTitle: '기합의띠 바둥바둥 익스트림 런',
    isUnevolvedRun: true,
    difficulty: '익스트림',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png',
    baseStats: {
      hp: 20,
      attack: 10,
      defense: 55,
      spAttack: 15,
      spDefense: 20,
      speed: 80
    },
    recommendedSetup: {
      ability: {
        nameKo: '쓱쓱 (Swift Swim)',
        reason: '비가 올 때 스피드가 2배로 상승하여 모든 상대를 추월'
      },
      nature: {
        nameKo: '고집 (Adamant)',
        statChange: '공격 ↑ / 특공 ↓ (공격 10 종족값에 한 톨이라도 더 얹기)'
      },
      heldItem: {
        nameKo: '기합의띠 (Focus Sash)',
        reason: '풀피에서 무조건 HP 1을 남기고 버티는 바둥바둥 200위력의 필수 도구'
      },
      evSpread: {
        attack: 252,
        speed: 252,
        hp: 4,
        summary: '공격 252 / 스피드 252 / HP 4'
      },
      moveset: [
        {
          slot: 1,
          nameKo: '바둥바둥 (Flail)',
          type: '노말',
          category: '물리',
          power: '체력 반비례 (최대 200)',
          accuracy: 100,
          reason: '기합의띠로 HP 1이 남았을 때 최대 위력 200의 필살기로 변모',
          generationNotice: '레벨 30에 자력 습득. 2세대부터 전 세대 공통 생명줄 기술'
        },
        {
          slot: 2,
          nameKo: '몸통박치기',
          type: '노말',
          category: '물리',
          power: 40,
          accuracy: 100,
          reason: '바둥바둥을 배우기 전까지 써야 하는 눈물의 기본기',
          generationNotice: '레벨 15에 자력 습득. 5세대부터 위력이 35에서 50, 7세대에서 40으로 조정됨'
        },
        {
          slot: 3,
          nameKo: '뛰어오르다 (Bounce)',
          type: '비행',
          category: '물리',
          power: 85,
          accuracy: 85,
          reason: '1턴 공중에 숨었다가 내려찍으며 30% 마비를 노리는 유일한 서브웨폰',
          generationNotice: '⚠️ 4세대(Pt)/8세대(SwSh) 기술가르침/레코드로 습득 가능 (9세대 SV에서는 잉어킹이 기술머신으로 습득 불가하므로 바둥바둥에 올인)'
        },
        {
          slot: 4,
          nameKo: '튀어오르기 (Splash)',
          type: '노말',
          category: '변화',
          power: '-',
          accuracy: '-',
          reason: '아무 일도 일어나지 않는 상징 기술 (Z기술 사용 시 공격 3랭크 상승)',
          generationNotice: '7세대 썬문에서 "Z튀어오르기"를 쓰면 공격력이 3랭크(2.5배) 폭등하는 전설의 비기 존재'
        }
      ]
    },
    keyStrategies: [
      '레벨 15에 몸통박치기, 레벨 30에 바둥바둥을 배우기 전까지는 학습장치로 키워야 함',
      '상점제 플러스파워(공격 상승), 디펜드업 도핑을 아끼지 말 것'
    ],
    bossTips: [
      {
        title: '바둥바둥 원킬 플랜',
        content: '기합의띠로 1타를 버텨 HP 1을 만든 후, 비바라기 서포터를 활용해 쓱쓱으로 선공 바둥바둥(위력 200)을 날리세요.'
      }
    ]
  }
];
