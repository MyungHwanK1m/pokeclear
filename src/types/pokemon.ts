export type PokemonType =
  | '노말' | '불꽃' | '물' | '풀' | '전기' | '얼음'
  | '격투' | '독' | '땅' | '비행' | '에스퍼' | '벌레'
  | '바위' | '고스트' | '드래곤' | '악' | '강철' | '페어리';

export interface BasicPokemon {
  id: number;
  nameKo: string;
  nameEn: string;
  generation: number;
  artworkUrl: string;
  spriteUrl: string;
  types: PokemonType[];
}

export interface MoveSlot {
  slot: number;
  nameKo: string;
  type: PokemonType;
  category: '물리' | '특수' | '변화';
  power?: number | string;
  accuracy?: number | string;
  reason: string;
}

export interface EVSpread {
  hp?: number;
  attack?: number;
  defense?: number;
  spAttack?: number;
  spDefense?: number;
  speed?: number;
  summary: string;
}

export interface PokemonClearGuide {
  id: number;
  nameKo: string;
  nameEn: string;
  types: PokemonType[];
  conceptTitle: string; // 예: "진화의휘석 축전 좀비 런"
  isUnevolvedRun: boolean; // 미진화 클리어 추천 여부
  difficulty: '쉬움' | '보통' | '어려움' | '익스트림';
  spriteUrl: string;
  artworkUrl: string;
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  recommendedSetup: {
    ability: {
      nameKo: string;
      reason: string;
    };
    nature: {
      nameKo: string;
      statChange: string;
    };
    heldItem: {
      nameKo: string;
      reason: string;
    };
    evSpread: EVSpread;
    moveset: MoveSlot[];
  };
  keyStrategies: string[];
  bossTips: {
    title: string;
    content: string;
  }[];
}

export interface PartyMember {
  pokemonId: number;
  nameKo: string;
  role: string;
  types: PokemonType[];
  spriteUrl: string;
  nature: string;
  evSummary?: string;
  heldItem: string;
  keyMoves: string[];
  synergyReason: string;
}

export interface ClearPartyEntry {
  id: string;
  title: string;
  mainPokemonId: number;
  description: string;
  members: PartyMember[];
}
