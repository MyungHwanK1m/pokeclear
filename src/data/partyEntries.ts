import { ClearPartyEntry } from '../types/pokemon';

export const CLEAR_PARTY_ENTRIES: ClearPartyEntry[] = [
  {
    id: 'chinchou-immortal-squad',
    title: '초라기 중심 스토리 올클리어 파티 (상성 완벽 보완)',
    mainPokemonId: 170,
    description: '초라기의 유이한 약점인 [땅, 풀]을 비행/강철과 풀/격투로 완벽 봉쇄하고, 서로의 약점을 100% 흘려내는 스토리 불도저 엔트리입니다.',
    members: [
      {
        pokemonId: 170,
        nameKo: '초라기 (Chinchou)',
        role: '주인공 / 특수 딜러 & 전기/물 흡수',
        types: ['물', '전기'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
        nature: '조심 (Modest, 특공↑/공격↓)',
        evSummary: '특공 252 / 방어 252 / HP 4',
        heldItem: '진화의휘석',
        keyMoves: ['열탕', '10만볼트', '냉동빔', '비바라기'],
        synergyReason: '특성 축전으로 아머까오에게 날아오는 전기를 무료로 흡수하고 체력 회복'
      },
      {
        pokemonId: 823,
        nameKo: '아머까오 (Corviknight)',
        role: '물리 철벽 & 약점 완전 무효화',
        types: ['비행', '강철'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png',
        nature: '장난꾸러기 (Impish, 방어↑/특공↓)',
        evSummary: 'HP 252 / 방어 252 / 특방 4',
        heldItem: '울퉁불퉁멧 / 먹다남은음식',
        keyMoves: ['브레이브버드', '철벽', '날개쉬기', '유턴'],
        synergyReason: '초라기의 최대 약점인 [땅(0배 무효)]과 [풀(0.25배)]을 완벽하게 틀어막음'
      },
      {
        pokemonId: 286,
        nameKo: '버섯모 (Breloom)',
        role: '기점 마련 수면 요원 & 물리 격투',
        types: ['풀', '격투'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '기합의띠',
        keyMoves: ['버섯포자', '씨기관총', '마하펀치', '암석봉인'],
        synergyReason: '100% 명중 버섯포자로 적을 재운 뒤 초라기가 나와 스페셜업을 쌓을 턴 제공'
      },
      {
        pokemonId: 59,
        nameKo: '윈디 (Arcanine)',
        role: '풀/강철 척살 고화력 스위퍼',
        types: ['불꽃'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
        nature: '고집 (Adamant, 공격↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬 / 자뭉열매',
        keyMoves: ['플레어드라이브', '신속', '인파이트', '도깨비불'],
        synergyReason: '위협 특성으로 상대 공격을 깎고, 초라기가 부담스러워하는 풀/강철 포켓몬을 태워버림'
      },
      {
        pokemonId: 445,
        nameKo: '한카리아스 (Garchomp)',
        role: '필드 물리 파괴자',
        types: ['드래곤', '땅'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '구애머리띠 / 야체열매',
        keyMoves: ['지진', '역린', '스톤에지', '칼춤'],
        synergyReason: '초라기가 돌파하기 힘든 독, 바위, 전기 포켓몬을 지진 한 방으로 일소'
      },
      {
        pokemonId: 778,
        nameKo: '따라큐 (Mimikyu)',
        role: '만능 조커 & 드래곤/격투 저격',
        types: ['고스트', '페어리'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png',
        nature: '명랑 (Jolly, 스피드↑/특공↓)',
        evSummary: '공격 252 / 스피드 252 / HP 4',
        heldItem: '생명의구슬',
        keyMoves: ['치근거리기', '야습', '섀도클로', '칼춤'],
        synergyReason: '탈 특성으로 1타를 무조건 흘려 위기 상황에서 파티를 구출하는 안전벨트'
      }
    ]
  }
];
