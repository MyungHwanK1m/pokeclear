import { ClearPartyEntry, PartyMember, PokemonType } from '../types/pokemon';

export interface MonotypeGuide {
  type: PokemonType;
  title: string;
  concept: string;
  weaknessStrategy: string;
  members: PartyMember[];
}

export const MONOTYPE_GUIDES: Partial<Record<PokemonType, MonotypeGuide>> = {
  '물': {
    type: '물',
    title: '물 타입 통일 챌린지 (수중 제국 파티)',
    concept: '약점이 [전기, 풀] 단 2개뿐인 본가 최강의 밸런스 타입. 복합 타입으로 약점을 완벽 상쇄합니다.',
    weaknessStrategy: '상대 전기는 [축전] 초라기나 [물/땅] 대짱이/트리토돈으로 무효화하고, 풀 공격은 [물/비행] 갸라도스나 [물/얼음] 라프라스로 찌릅니다.',
    members: [
      {
        pokemonId: 170,
        nameKo: '초라기 (Chinchou)',
        role: '전기 공격 100% 흡수 요원',
        types: ['물', '전기'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: '특공 252 / 방어 252 / HP 4',
        heldItem: '진화의휘석',
        keyMoves: ['열탕', '10만볼트', '냉동빔', '비바라기'],
        synergyReason: '특성 축전으로 아군 물 포켓몬을 노리는 모든 전기 기술을 흡수하여 체력 회복'
      },
      {
        pokemonId: 130,
        nameKo: '갸라도스 (Gyarados)',
        role: '풀/땅 카운터 & 용의춤 스위퍼',
        types: ['물', '비행'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '자뭉열매',
        keyMoves: ['폭포오르기', '지진', '얼음엄니', '용의춤'],
        synergyReason: '비행 복합으로 땅 공격을 0배 무효화하고 풀 포켓몬을 얼음엄니로 저격'
      },
      {
        pokemonId: 423,
        nameKo: '트리토돈 (Gastrodon)',
        role: '전기 무효 특수벽 & 마중물',
        types: ['물', '땅'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png',
        nature: '차분 (Calm, 특방↑/공격↓)',
        evSummary: 'HP 252 / 특방 252 / 방어 4',
        heldItem: '먹다남은음식',
        keyMoves: ['열탕', '대지의힘', 'HP회복', '하품'],
        synergyReason: '땅 복합으로 전기 기술을 0배 무효화하며 마중물로 물 기술도 흡수'
      },
      {
        pokemonId: 658,
        nameKo: '개굴닌자 (Greninja)',
        role: '초고속 특수 어태커',
        types: ['물', '악'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['하이드로펌프', '악의파동', '냉동빔', '유턴'],
        synergyReason: '에스퍼/고스트 타입을 악 기술로 저격하고 냉동빔으로 풀/드래곤 격파'
      },
      {
        pokemonId: 9,
        nameKo: '거북왕 (Blastoise)',
        role: '껍질깨기 결전 병기',
        types: ['물'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '하양허브',
        keyMoves: ['파도타기', '냉동빔', '파동탄', '껍질깨기'],
        synergyReason: '껍질깨기 1턴으로 랭업 후 사천왕/챔피언 포켓몬 전원 올스윕'
      },
      {
        pokemonId: 199,
        nameKo: '야도킹 (Slowking)',
        role: '재생력 특수 서포터',
        types: ['물', '에스퍼'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png',
        nature: '대담 (Bold, 방어↑/공격↓)',
        evSummary: 'HP 252 / 방어 252 / 특방 4',
        heldItem: '자뭉열매',
        keyMoves: ['열탕', '사이코키네시스', '명상', '게으름피우기'],
        synergyReason: '격투/독 타입을 에스퍼로 처리하고 단단한 내구로 안정적 교체 플레이'
      }
    ]
  },
  '불꽃': {
    type: '불꽃',
    title: '불꽃 타입 통일 챌린지 (홍련의 겁화 파티)',
    concept: '폭발적인 공격력과 6개의 반감(불꽃, 풀, 얼음, 벌레, 강철, 페어리)을 지닌 화력 특화 파티.',
    weaknessStrategy: '약점인 [물, 땅, 바위] 중 땅 공격은 [불꽃/비행] 리자몽으로 무효화하고 물/바위는 가뭄 솔라빔이나 격투 기술로 돌파합니다.',
    members: [
      {
        pokemonId: 6,
        nameKo: '리자몽 (Charizard)',
        role: '땅 무효화 & 특수 에이스',
        types: ['불꽃', '비행'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬 / 목탄',
        keyMoves: ['화염방사', '에어슬래시', '솔라빔', '기합구슬'],
        synergyReason: '비행 복합으로 불꽃 타입의 최대 천적인 땅 타입 공격(지진 등)을 0배 무효'
      },
      {
        pokemonId: 59,
        nameKo: '윈디 (Arcanine)',
        role: '위협 물리 브루저',
        types: ['불꽃'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '자뭉열매',
        keyMoves: ['플레어드라이브', '신속', '인파이트', '도깨비불'],
        synergyReason: '특성 위협으로 상대 공격을 낮추고 인파이트로 바위 타입을 역으로 파괴'
      },
      {
        pokemonId: 637,
        nameKo: '불카모스 (Volcarona)',
        role: '나비춤 특수 스윕 머신',
        types: ['벌레', '불꽃'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '리샘열매',
        keyMoves: ['불대문자', '벌레의야단법석', '기가드레인', '나비춤'],
        synergyReason: '나비춤 랭업 후 기가드레인으로 물/바위/땅 포켓몬을 흡수하며 역스윕'
      },
      {
        pokemonId: 257,
        nameKo: '번치코 (Blaziken)',
        role: '가속 물리 격투 에이스',
        types: ['불꽃', '격투'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '기합의띠',
        keyMoves: ['플레어드라이브', '무릎차기', '칼춤', '스톤샤워'],
        synergyReason: '매 턴 스피드가 오르는 가속 특성과 격투 자속으로 바위/악/노말 척살'
      },
      {
        pokemonId: 909,
        nameKo: '라우드본 (Skeledirge)',
        role: '천진 물리막이 & 플레어송',
        types: ['불꽃', '고스트'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png',
        nature: '대담 (Bold, 방어↑/공격↓)',
        evSummary: 'HP 252 / 방어 252 / 특공 4',
        heldItem: '먹다남은음식',
        keyMoves: ['플레어송', '섀도볼', '도깨비불', '태만함'],
        synergyReason: '특성 천진으로 상대 랭업을 무시하며 격투/노말 기술을 0배로 봉쇄'
      },
      {
        pokemonId: 479,
        nameKo: '히트 로토무 (Rotom-Heat)',
        role: '부유 땅 무효 & 볼트체인지',
        types: ['전기', '불꽃'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479-heat.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '구애스카프',
        keyMoves: ['오버히트', '10만볼트', '볼트체인지', '도깨비불'],
        synergyReason: '특성 부유로 땅 공격을 무효화하고 전기 자속으로 물 포켓몬을 역저격'
      }
    ]
  },
  '전기': {
    type: '전기',
    title: '전기 타입 통일 챌린지 (초전도 벼락 파티)',
    concept: '약점이 [땅] 단 하나뿐인 극강의 수비 상성! 부유와 풀/비행 복합으로 땅 약점을 지웁니다.',
    weaknessStrategy: '유일한 약점인 [땅] 타입은 [부유] 로토무나 저릴프, 그리고 [물/전기] 초라기의 냉동빔/파도타기로 완벽하게 파훼합니다.',
    members: [
      {
        pokemonId: 170,
        nameKo: '초라기 (Chinchou)',
        role: '물/얼음 땅 카운터 & 진화의휘석',
        types: ['물', '전기'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: '특공 252 / 방어 252 / HP 4',
        heldItem: '진화의휘석',
        keyMoves: ['열탕', '10만볼트', '냉동빔', '전자기파'],
        synergyReason: '물/얼음 기술로 전기 파티의 천적인 땅/바위 포켓몬을 역으로 2배 타격'
      },
      {
        pokemonId: 479,
        nameKo: '워시 로토무 (Rotom-Wash)',
        role: '부유 땅 무효 & 하이드로펌프',
        types: ['전기', '물'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479-wash.png',
        nature: '대담 (Bold, 방어↑/공격↓)',
        evSummary: 'HP 252 / 방어 252 / 특공 4',
        heldItem: '자뭉열매',
        keyMoves: ['10만볼트', '하이드로펌프', '볼트체인지', '도깨비불'],
        synergyReason: '특성 부유로 땅 0배 무효, 하이드로펌프로 땅 포켓몬 원턴킬'
      },
      {
        pokemonId: 462,
        nameKo: '자포코일 (Magnezone)',
        role: '12개 반감 강철 요새',
        types: ['전기', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: '특공 252 / HP 252 / 특방 4',
        heldItem: '돌격조끼',
        keyMoves: ['10만볼트', '러스터캐논', '볼트체인지', '바디프레스'],
        synergyReason: '강철 복합으로 독 무효 및 드래곤, 페어리, 얼음, 비행 공격을 완벽 반감'
      },
      {
        pokemonId: 604,
        nameKo: '저리더프 (Eelektross)',
        role: '약점 0개 무상성 브루저',
        types: ['전기'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: 'HP 252 / 공격 252 / 방어 4',
        heldItem: '먹다남은음식',
        keyMoves: ['와일드볼트', '드레인펀치', '화염방사', '똬리틀기'],
        synergyReason: '단일 전기 타입에 특성 부유가 더해져 본가에서 약점이 단 하나도 없음'
      },
      {
        pokemonId: 849,
        nameKo: '스트린더 (Toxtricity)',
        role: '펑크록 페어리 슬레이어',
        types: ['전기', '독'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '목구멍스프레이',
        keyMoves: ['오버드라이브', '오물폭탄', '폭음파', '볼트체인지'],
        synergyReason: '독 복합으로 풀/페어리 타입을 자속기로 강력하게 응징'
      },
      {
        pokemonId: 135,
        nameKo: '쥬피썬더 (Jolteon)',
        role: '초고속 청소부 & 볼트체인지',
        types: ['전기'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '구애안경',
        keyMoves: ['10만볼트', '볼트체인지', '섀도볼', '희망사항'],
        synergyReason: '스피드 130으로 필드의 모든 적을 추월하여 선공 유린'
      }
    ]
  },
  '풀': {
    type: '풀',
    title: '풀 타입 통일 챌린지 (대자연의 숲 파티)',
    concept: '약점이 5개로 많지만, 강철/독/격투 복합과 상태이상(수면, 씨뿌리기)으로 사기적인 진형을 짭니다.',
    weaknessStrategy: '불꽃/비행 약점은 [풀/강철] 너트령과 [풀/바위] 포켓몬으로 막고, 100% 명중 [버섯포자]로 상대를 재운 뒤 씨뿌리기로 말려 죽입니다.',
    members: [
      {
        pokemonId: 598,
        nameKo: '너트령 (Ferrothorn)',
        role: '불꽃 제외 모든 약점 극복 철벽',
        types: ['풀', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
        nature: '무사태평 (Relaxed, 방어↑/스피드↓)',
        evSummary: 'HP 252 / 방어 252 / 특방 4',
        heldItem: '울퉁불퉁멧 / 먹다남은음식',
        keyMoves: ['자이로볼', '파워휩', '씨뿌리기', '스텔스록'],
        synergyReason: '얼음, 독, 비행, 벌레 등 풀의 4대 약점을 강철 복합으로 전부 지워버림'
      },
      {
        pokemonId: 286,
        nameKo: '버섯모 (Breloom)',
        role: '100% 수면 & 테크니션 격투',
        types: ['풀', '격투'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '기합의띠',
        keyMoves: ['버섯포자', '씨기관총', '마하펀치', '암석봉인'],
        synergyReason: '버섯포자로 적을 재운 뒤 암석봉인으로 불꽃/비행 타입을 카운터'
      },
      {
        pokemonId: 3,
        nameKo: '이상해꽃 (Venusaur)',
        role: '두꺼운지방 불꽃/얼음 반감 딜탱',
        types: ['풀', '독'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: 'HP 252 / 특공 252 / 특방 4',
        heldItem: '검은진흙',
        keyMoves: ['기가드레인', '오물폭탄', '대지의힘', '성장'],
        synergyReason: '독 복합으로 벌레/독/페어리를 반감하고 대지의힘으로 불꽃/강철 저격'
      },
      {
        pokemonId: 479,
        nameKo: '커트 로토무 (Rotom-Mow)',
        role: '부유 땅 무효 & 전기 타점',
        types: ['전기', '풀'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479-mow.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '구애스카프',
        keyMoves: ['리프스톰', '10만볼트', '볼트체인지', '도깨비불'],
        synergyReason: '전기 자속기로 비행/물 포켓몬을 찌르고 부유로 땅 무효화'
      },
      {
        pokemonId: 272,
        nameKo: '루돌록 (Ludicolo)',
        role: '쓱쓱 물/얼음 저격수',
        types: ['물', '풀'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['하이드로펌프', '에너지볼', '냉동빔', '비바라기'],
        synergyReason: '물 복합으로 불꽃을 1배로 받고 역으로 비바라기 하이드로펌프로 소탕'
      },
      {
        pokemonId: 908,
        nameKo: '마스카나 (Meowscarada)',
        role: '변환자재 필중 크리티컬 에이스',
        types: ['풀', '악'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '기합의띠',
        keyMoves: ['트릭플라워', '탁쳐서떨구기', '치근거리기', '유턴'],
        synergyReason: '100% 급소 트릭플라워와 초고속 유턴으로 선공권 장악'
      }
    ]
  },
  '강철': {
    type: '강철',
    title: '강철 타입 통일 챌린지 (난공불락 강철 요새)',
    concept: '10개 타입 반감 + 독 무효라는 압도적인 방어 상성! 상대의 기술을 흠집도 안 나게 튕겨냅니다.',
    weaknessStrategy: '약점인 [땅, 격투, 불꽃] 중 땅/격투는 [비행/강철] 아머까오가 무효/반감으로 틀어막고 불꽃은 히드런이나 바위 기술로 정리합니다.',
    members: [
      {
        pokemonId: 823,
        nameKo: '아머까오 (Corviknight)',
        role: '땅 0배 무효 & 격투 반감 물리벽',
        types: ['비행', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png',
        nature: '장난꾸러기 (Impish, 방어↑/특공↓)',
        evSummary: 'HP 252 / 방어 252 / 특방 4',
        heldItem: '울퉁불퉁멧',
        keyMoves: ['브레이브버드', '철벽', '날개쉬기', '바디프레스'],
        synergyReason: '강철의 최대 약점인 땅을 0배로 흘리고 격투 포켓몬을 브레이브버드로 저격'
      },
      {
        pokemonId: 448,
        nameKo: '루카리오 (Lucario)',
        role: '고속 쌍두 어태커',
        types: ['격투', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '기합의띠',
        keyMoves: ['인파이트', '코멧펀치', '신속', '칼춤'],
        synergyReason: '격투 자속기로 상대 강철/바위/악/노말 포켓몬을 역파괴'
      },
      {
        pokemonId: 530,
        nameKo: '몰드류 (Excadrill)',
        role: '틀깨기 지진 폭격기',
        types: ['땅', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['지진', '아이언헤드', '스톤샤워', '칼춤'],
        synergyReason: '특성 틀깨기로 부유 포켓몬에게도 지진을 적중시켜 불꽃/전기 척살'
      },
      {
        pokemonId: 983,
        nameKo: '대도각참 (Kingambit)',
        role: '총대장 역전 물리 괴물',
        types: ['악', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: 'HP 252 / 공격 252 / 방어 4',
        heldItem: '검은안경',
        keyMoves: ['도각참', '아이언헤드', '기습', '칼춤'],
        synergyReason: '에스퍼/고스트 공격을 무효화하고 기습 선공기로 싹쓸이'
      },
      {
        pokemonId: 227,
        nameKo: '무장조 (Skarmory)',
        role: '스텔스록 & 날려버리기 기점',
        types: ['강철', '비행'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png',
        nature: '장난꾸러기 (Impish, 방어↑/특공↓)',
        evSummary: 'HP 252 / 방어 252 / 스피드 4',
        heldItem: '먹다남은음식',
        keyMoves: ['스텔스록', '날려버리기', '날개쉬기', '바디프레스'],
        synergyReason: '스텔스록을 깔고 강제 교체기로 상대 랭업 포켓몬 무력화'
      },
      {
        pokemonId: 462,
        nameKo: '자포코일 (Magnezone)',
        role: '특수 결전 대포',
        types: ['전기', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: '특공 252 / HP 252 / 특방 4',
        heldItem: '돌격조끼',
        keyMoves: ['10만볼트', '러스터캐논', '볼트체인지', '미러코트'],
        synergyReason: '특수방어 돌격조끼로 적의 특수공격을 버티며 10만볼트 카운터'
      }
    ]
  },
  '고스트': {
    type: '고스트',
    title: '고스트 타입 통일 챌린지 (심연의 유령 파티)',
    concept: '노말/격투 공격 0배 무효! 상태이상과 저주, 탈 특성으로 전장을 지배하는 테크니컬 파티.',
    weaknessStrategy: '약점인 [악, 고스트]는 [고스트/페어리] 따라큐로 악을 반감하고 자속 치근거리기로 응징하며, 고속 섀도볼로 선공을 잡습니다.',
    members: [
      {
        pokemonId: 778,
        nameKo: '따라큐 (Mimikyu)',
        role: '탈 특성 1회 무료 생존 & 악 저격',
        types: ['고스트', '페어리'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['치근거리기', '야습', '섀도클로', '칼춤'],
        synergyReason: '페어리 복합으로 고스트의 천적인 악 타입을 치근거리기로 분쇄'
      },
      {
        pokemonId: 94,
        nameKo: '팬텀 (Gengar)',
        role: '초고속 특수 폭딜러',
        types: ['고스트', '독'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '기합의띠',
        keyMoves: ['섀도볼', '오물폭탄', '기합구슬', '길동무'],
        synergyReason: '독 복합으로 페어리/풀을 잡고 기합구슬로 악/노말 포켓몬 원턴킬'
      },
      {
        pokemonId: 887,
        nameKo: '드래펄트 (Dragapult)',
        role: '스피드 142 필드 지배자',
        types: ['드래곤', '고스트'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '구애머리띠',
        keyMoves: ['드래곤애로', '고스트다이브', '유턴', '기습'],
        synergyReason: '모든 상대를 압도하는 스피드로 선공 유턴 및 드래곤애로 난사'
      },
      {
        pokemonId: 609,
        nameKo: '샹델라 (Chandelure)',
        role: '특공 145 홍련의 불대문자',
        types: ['고스트', '불꽃'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '구애안경',
        keyMoves: ['섀도볼', '화염방사', '에너지볼', '오버히트'],
        synergyReason: '불꽃 자속기로 강철/벌레/풀/얼음 포켓몬을 흔적도 없이 소각'
      },
      {
        pokemonId: 681,
        nameKo: '킬가르도 (Aegislash)',
        role: '배틀스위치 공방일체 요새',
        types: ['강철', '고스트'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png',
        nature: '냉정 (Quiet, 특공↑/스피드↓)',
        evSummary: 'HP 252 / 특공 252 / 방어 4',
        heldItem: '약점보험',
        keyMoves: ['섀도볼', '러스터캐논', '야습', '킹실드'],
        synergyReason: '킹실드로 상대 공격을 2랭크 깎고 약점보험 버프로 역스윕'
      },
      {
        pokemonId: 909,
        nameKo: '라우드본 (Skeledirge)',
        role: '천진 회복 탱커',
        types: ['불꽃', '고스트'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png',
        nature: '대담 (Bold, 방어↑/공격↓)',
        evSummary: 'HP 252 / 방어 252 / 특공 4',
        heldItem: '먹다남은음식',
        keyMoves: ['플레어송', '섀도볼', '도깨비불', '태만함'],
        synergyReason: '물리 공격에 도깨비불을 걸고 플레어송으로 특공을 쌓으며 버티기'
      }
    ]
  },
  '드래곤': {
    type: '드래곤',
    title: '드래곤 타입 통일 챌린지 (전설의 용군단)',
    concept: '종족값 총합 600족이 즐비한 파괴신 파티. 물, 불꽃, 풀, 전기 4대 원소를 모두 반감합니다.',
    weaknessStrategy: '약점인 [얼음, 페어리, 드래곤] 중 얼음/페어리는 [드래곤/강철] 두랄루돈/미끄래곤이 막고, 고속 드래곤애로와 지진으로 짓밟습니다.',
    members: [
      {
        pokemonId: 445,
        nameKo: '한카리아스 (Garchomp)',
        role: '필드 물리 파괴자',
        types: ['드래곤', '땅'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '구애머리띠',
        keyMoves: ['지진', '역린', '스톤에지', '칼춤'],
        synergyReason: '전기 무효 및 지진으로 페어리/얼음 포켓몬의 카운터 강철/바위 척살'
      },
      {
        pokemonId: 887,
        nameKo: '드래펄트 (Dragapult)',
        role: '스피드 142 고속 스위퍼',
        types: ['드래곤', '고스트'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['드래곤애로', '고스트다이브', '유턴', '기습'],
        synergyReason: '격투/노말 무효 및 선공권으로 상대 드래곤을 원턴킬'
      },
      {
        pokemonId: 635,
        nameKo: '삼삼드래 (Hydreigon)',
        role: '부유 땅 무효 & 특수 폭격기',
        types: ['악', '드래곤'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '구애안경',
        keyMoves: ['용성군', '악의파동', '화염방사', '러스터캐논'],
        synergyReason: '러스터캐논으로 페어리/얼음 포켓몬을 역으로 2배 타격'
      },
      {
        pokemonId: 373,
        nameKo: '보만다 (Salamence)',
        role: '위협 & 용의춤 스위퍼',
        types: ['드래곤', '비행'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '자뭉열매',
        keyMoves: ['더블윙', '역린', '지진', '용의춤'],
        synergyReason: '특성 위협으로 상대 공격을 낮추고 용의춤 후 올스윕'
      },
      {
        pokemonId: 706,
        nameKo: '미끄래곤 (Goodra)',
        role: '특수방어 150 난공불락 벽',
        types: ['드래곤'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: 'HP 252 / 특공 252 / 특방 4',
        heldItem: '돌격조끼',
        keyMoves: ['용의파동', '오물웨이브', '화염방사', '10만볼트'],
        synergyReason: '오물웨이브로 페어리를 찌르고 적의 강력한 특수기를 흡수'
      },
      {
        pokemonId: 842,
        nameKo: '애프룡 (Flapple)',
        role: '의욕 비행 물리 딜러',
        types: ['풀', '드래곤'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '광각렌즈',
        keyMoves: ['중력사과', '역린', '뛰어오르다', '유턴'],
        synergyReason: '풀 복합으로 물/전기 기술을 0.25배로 받아내는 극단적 반감벽'
      }
    ]
  },
  '격투': {
    type: '격투',
    title: '격투 타입 통일 챌린지 (권왕의 무도 파티)',
    concept: '바위, 얼음, 노말, 강철, 악 등 5개 메이저 타입을 부숴버리는 호쾌한 타격 파티.',
    weaknessStrategy: '약점인 [비행, 에스퍼, 페어리] 중 비행/페어리는 [격투/강철] 루카리오가 잡고, 에스퍼는 악/벌레 서브웨폰으로 격파합니다.',
    members: [
      {
        pokemonId: 448,
        nameKo: '루카리오 (Lucario)',
        role: '페어리 슬레이어 & 쌍두 에이스',
        types: ['격투', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '기합의띠',
        keyMoves: ['인파이트', '코멧펀치', '신속', '칼춤'],
        synergyReason: '강철 복합으로 비행/페어리 기술을 반감하고 코멧펀치로 페어리 원턴킬'
      },
      {
        pokemonId: 286,
        nameKo: '버섯모 (Breloom)',
        role: '100% 수면 & 테크니션 마하펀치',
        types: ['풀', '격투'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '기합의띠',
        keyMoves: ['버섯포자', '씨기관총', '마하펀치', '암석봉인'],
        synergyReason: '버섯포자로 상대를 재우고 테크니션 마하펀치 선공 폭딜'
      },
      {
        pokemonId: 257,
        nameKo: '번치코 (Blaziken)',
        role: '가속 특성 불꽃 스위퍼',
        types: ['불꽃', '격투'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['플레어드라이브', '무릎차기', '스톤샤워', '방어'],
        synergyReason: '불꽃 복합으로 페어리/얼음/강철을 태우고 스톤샤워로 비행 포켓몬 격추'
      },
      {
        pokemonId: 475,
        nameKo: '엘레이드 (Gallade)',
        role: '예리함 특성 에스퍼 슬레이어',
        types: ['에스퍼', '격투'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '자뭉열매',
        keyMoves: ['성스러운칼', '사이코커터', '깜짝베기', '칼춤'],
        synergyReason: '에스퍼 복합으로 독/격투를 찌르고 깜짝베기로 에스퍼 저격'
      },
      {
        pokemonId: 892,
        nameKo: '우라오스 (Urshifu)',
        role: '보이지않는손 방어 관통 에이스',
        types: ['격투', '악'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '구애머리띠',
        keyMoves: ['암흑강타', '인파이트', '유턴', '기습'],
        synergyReason: '상대의 방어를 무시하고 100% 급소 암흑강타로 에스퍼/고스트 소탕'
      },
      {
        pokemonId: 68,
        nameKo: '괴력몬 (Machamp)',
        role: '노가드 100% 폭발펀치',
        types: ['격투'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: 'HP 252 / 공격 252 / 방어 4',
        heldItem: '돌격조끼',
        keyMoves: ['폭발펀치', '스톤에지', '탁쳐서떨구기', '불릿펀치'],
        synergyReason: '노가드 특성으로 100% 혼란 폭발펀치 + 스톤에지로 비행 카운터'
      }
    ]
  },
  '페어리': {
    type: '페어리',
    title: '페어리 타입 통일 챌린지 (동화속 요정 파티)',
    concept: '드래곤 공격 0배 무효! 독과 강철 단 2개뿐인 약점을 지닌 현대 포켓몬 최강의 사기 타입.',
    weaknessStrategy: '약점인 [독, 강철]은 [페어리/강철] 입치트나 [물/페어리] 마릴리의 지진, [불꽃/페어리] 혹은 땅 서브기술로 깨끗하게 소탕합니다.',
    members: [
      {
        pokemonId: 778,
        nameKo: '따라큐 (Mimikyu)',
        role: '탈 특성 1회 무효 & 만능 조커',
        types: ['고스트', '페어리'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['치근거리기', '야습', '섀도클로', '칼춤'],
        synergyReason: '고스트 복합으로 독을 1배로 받고 노말/격투 공격을 0배 무효'
      },
      {
        pokemonId: 184,
        nameKo: '마릴리 (Azumarill)',
        role: '천하장사 배북 아쿠아제트',
        types: ['물', '페어리'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: 'HP 252 / 공격 252 / 스피드 4',
        heldItem: '자뭉열매',
        keyMoves: ['아쿠아제트', '치근거리기', '엄청난힘', '배북'],
        synergyReason: '배북으로 공격력 4배 뻥튀기 후 선공 아쿠아제트로 불꽃/강철/땅 파괴'
      },
      {
        pokemonId: 468,
        nameKo: '토게키스 (Togekiss)',
        role: '하늘의은총 60% 풀죽음 특수벽',
        types: ['페어리', '비행'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '왕의징표석',
        keyMoves: ['에어슬래시', '매지컬샤인', '파동탄', '날개쉬기'],
        synergyReason: '비행 복합으로 땅 무효 및 파동탄으로 강철 포켓몬 약점 타격'
      },
      {
        pokemonId: 700,
        nameKo: '님피아 (Sylveon)',
        role: '페어리스킨 하이퍼보이스',
        types: ['페어리'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: 'HP 252 / 특공 252 / 방어 4',
        heldItem: '구애안경',
        keyMoves: ['하이퍼보이스', '사이코쇼크', '섀도볼', '명상'],
        synergyReason: '페어리스킨 1.2배 자속 하이퍼보이스로 상대 전체를 소리공격으로 압도'
      },
      {
        pokemonId: 282,
        nameKo: '가디안 (Gardevoir)',
        role: '에스퍼 독 슬레이어',
        types: ['에스퍼', '페어리'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
        nature: '겁쟁이 (Timid, 스피드↑/공격↓)',
        evSummary: '특공 252 / 스피드 252 / HP 4',
        heldItem: '구애스카프',
        keyMoves: ['문포스', '사이코키네시스', '기합구슬', '트릭'],
        synergyReason: '에스퍼 자속으로 페어리의 천적인 독 포켓몬을 역으로 분쇄'
      },
      {
        pokemonId: 303,
        nameKo: '입치트 (Mawile)',
        role: '강철 복합 독 0배 무효벽',
        types: ['강철', '페어리'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: 'HP 252 / 공격 252 / 방어 4',
        heldItem: '기합의띠',
        keyMoves: ['치근거리기', '아이언헤드', '기습', '칼춤'],
        synergyReason: '강철 복합으로 독 공격을 0배 무효화하고 기습으로 고스트/에스퍼 견제'
      }
    ]
  }
};

// Fallback generator for remaining types
export function getMonotypeParty(type: PokemonType): MonotypeGuide {
  if (MONOTYPE_GUIDES[type]) {
    return MONOTYPE_GUIDES[type];
  }

  // Generic generator for other types
  return {
    type,
    title: `${type} 타입 통일 챌린지 파티`,
    concept: `${type} 타입 포켓몬만으로 파티를 구성하여 체육관 관장처럼 스토리 챔피언에 도전하는 로망 챌린지!`,
    weaknessStrategy: `${type} 타입의 공통 약점을 상쇄할 수 있는 이중 타입(듀얼 타입) 포켓몬을 전위에 배치하여 방어 사이클을 돌리는 것이 핵심입니다.`,
    members: [
      {
        pokemonId: 1,
        nameKo: `${type} 타입 에이스`,
        role: '파티의 메인 어태커',
        types: [type],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        nature: '고집 (Adamant) 또는 조심 (Modest)',
        evSummary: '공격/특공 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['자속 주력기', '자속 서브기', '약점 견제기', '랭업기'],
        synergyReason: `${type} 타입의 높은 화력으로 적을 쓰러뜨리는 주력 스위퍼`
      }
    ]
  };
}
