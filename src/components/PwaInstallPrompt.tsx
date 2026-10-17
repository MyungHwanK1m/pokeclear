import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share2, PlusSquare } from 'lucide-react';

export const PwaInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    // 1. 이미 독립 실행형(PWA 앱)으로 실행 중인지 확인
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone;
    if (isStandalone) return;

    // 2. iOS 기기 감지
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // 3. Android / Chrome / PC 브라우저용 beforeinstallprompt 이벤트 리스너
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // 4. iOS는 이벤트가 없으므로 최초 방문 시 배너 노출 (닫은 이력 체크)
    if (isIosDevice && !localStorage.getItem('pokeclear_pwa_ios_dismissed')) {
      setShowPrompt(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      // iOS 전용 가이드 모달/안내 토글
      setShowIosGuide(true);
    } else {
      // 기타 브라우저 (Chrome 데스크톱 등에서 프롬프트가 안 뜬 경우)
      alert('브라우저 우측 상단 메뉴(⋮ 또는 주소창 우측 모니터 아이콘)에서 "앱 설치" 또는 "홈 화면에 추가"를 선택해주세요!');
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    if (isIOS) {
      localStorage.setItem('pokeclear_pwa_ios_dismissed', 'true');
    }
  };

  if (!showPrompt) return null;

  return (
    <>
      {/* Top Banner (Smart-Ledger & Digi-Feed Style) */}
      <aside aria-label="앱 설치 안내" className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-rose-600 to-indigo-700 text-white px-4 py-2.5 shadow-xl flex items-center justify-between gap-3 text-xs animate-in slide-in-from-top duration-300 border-b border-red-400/40">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm">
            <Smartphone className="w-4 h-4 text-white" />
          </div>
          <div className="truncate">
            <span className="font-extrabold text-[13px] block leading-tight text-white flex items-center gap-1.5">
              <span>⚡</span>
              <span>PokeClear 앱으로 설치하기</span>
            </span>
            <span className="text-[11px] text-red-100 font-medium">
              {isIOS
                ? '홈 화면에 추가하여 Safari 주소창 없이 1초만에 실행'
                : '스마트폰 홈 화면에 전용 앱으로 즉시 설치'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-3.5 py-1.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs shadow-md active:scale-95 transition-all flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>설치</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-lg text-red-200 hover:text-white hover:bg-white/10 transition-colors"
            title="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* iOS Safari 전용 상세 설치 모달 팝업 */}
      {showIosGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-700 p-6 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <span>🍎</span>
                <span>iOS Safari 설치 방법</span>
              </h3>
              <button
                onClick={() => setShowIosGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block mb-0.5">1단계. 공유 버튼 클릭</strong>
                  Safari 브라우저 화면 하단의 <strong>공유(네모에 화살표 ↑)</strong> 아이콘을 누릅니다.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0">
                  <PlusSquare className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block mb-0.5">2단계. '홈 화면에 추가' 선택</strong>
                  아래로 스크롤하여 <strong>[홈 화면에 추가]</strong> 버튼을 터치합니다.
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setShowIosGuide(false);
                setShowPrompt(false);
                localStorage.setItem('pokeclear_pwa_ios_dismissed', 'true');
              }}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg transition"
            >
              확인했습니다
            </button>
          </div>
        </div>
      )}
    </>
  );
};
