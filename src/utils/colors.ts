import { PokemonType } from '../types/pokemon';

export const TYPE_COLORS: Record<PokemonType, { bg: string; text: string; border: string }> = {
  '노말': { bg: 'bg-stone-500/20', text: 'text-stone-300', border: 'border-stone-500/40' },
  '불꽃': { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/40' },
  '물': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/40' },
  '풀': { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/40' },
  '전기': { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/40' },
  '얼음': { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/40' },
  '격투': { bg: 'bg-red-700/20', text: 'text-red-400', border: 'border-red-600/40' },
  '독': { bg: 'bg-purple-600/20', text: 'text-purple-400', border: 'border-purple-500/40' },
  '땅': { bg: 'bg-amber-600/20', text: 'text-amber-400', border: 'border-amber-600/40' },
  '비행': { bg: 'bg-indigo-400/20', text: 'text-indigo-300', border: 'border-indigo-400/40' },
  '에스퍼': { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/40' },
  '벌레': { bg: 'bg-lime-500/20', text: 'text-lime-400', border: 'border-lime-500/40' },
  '바위': { bg: 'bg-yellow-700/20', text: 'text-yellow-500', border: 'border-yellow-600/40' },
  '고스트': { bg: 'bg-violet-800/20', text: 'text-violet-300', border: 'border-violet-600/40' },
  '드래곤': { bg: 'bg-indigo-700/20', text: 'text-indigo-400', border: 'border-indigo-600/40' },
  '악': { bg: 'bg-neutral-800', text: 'text-neutral-300', border: 'border-neutral-600' },
  '강철': { bg: 'bg-slate-500/20', text: 'text-slate-300', border: 'border-slate-500/40' },
  '페어리': { bg: 'bg-rose-400/20', text: 'text-rose-300', border: 'border-rose-400/40' },
};

export const DIFFICULTY_BADGES = {
  '쉬움': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  '보통': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  '어려움': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  '익스트림': 'bg-red-500/10 text-red-400 border-red-500/30 font-bold',
};
