import { PokemonType } from './pokemon';

export interface GymLeaderPokemon {
  speciesId: number;
  nameKo: string;
  nameEn: string;
  types: PokemonType[];
  level: number;
  spriteUrl: string;
  artworkUrl: string;
  ability?: string;
  heldItem?: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  moves: {
    nameKo: string;
    type: PokemonType;
    category: '물리' | '특수' | '변화';
    power: number;
    accuracy: number;
  }[];
}

export interface GymLeader {
  id: string;
  nameKo: string;
  nameEn: string;
  titleKo: string; // 예: "회색체육관 관장"
  gameSeries: 'SV' | 'SwSh' | 'BDSP' | 'USUM' | 'ZA' | 'RBY' | 'GSC' | 'RSE' | 'BW' | 'XY';
  gameTitle: string; // 예: "9세대 스칼렛·바이올렛"
  generation: number;
  badgeName: string; // 예: "그레이배지"
  specialtyType: PokemonType;
  avatarUrl: string;
  badgeIcon: string;
  difficulty: '쉬움' | '보통' | '어려움' | '챔피언급';
  dialogue: {
    intro: string;
    defeat: string;
  };
  team: GymLeaderPokemon[];
}

export interface BattleValidationResult {
  canBattle: boolean;
  eligibleCount: number;
  ineligiblePokemon: {
    pokemonId: number;
    pokemonName: string;
    reason: string;
  }[];
}
