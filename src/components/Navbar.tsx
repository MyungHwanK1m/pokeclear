import React from 'react';
import { ShieldAlert, Users, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPartyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartyModal }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img
            src="./icon-512.svg"
            alt="PokeClear Logo"
            className="w-10 h-10 rounded-xl shadow-lg shadow-red-500/25 transition-transform hover:scale-105"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                PokeClear
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-950/80 text-red-400 border border-red-800/50">
                스토리 클리어 도감
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              특정 포켓몬 & 미진화체로 본가 엔딩 보기
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href="./포켓몬_세대별_미입국_도감.xlsx"
            download="포켓몬_세대별_미입국_도감.xlsx"
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 font-medium text-xs sm:text-sm transition-all hover:scale-105 shadow-sm shadow-emerald-500/10"
            title="세대별 미입국 포켓몬 정리 엑셀 다운로드"
          >
            <span className="text-base">📊</span>
            <span className="hidden md:inline">미입국 정리</span>
            <span>엑셀 다운로드</span>
          </a>

          <button
            onClick={onOpenPartyModal}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">스토리 추천</span>
            <span>파티 엔트리</span>
          </button>
        </div>
      </div>
    </header>
  );
};
