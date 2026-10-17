import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

// Load allPokemon data
const dataPath = path.resolve('src/data/allPokemon.json');
const allPokemon = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const wb = XLSX.utils.book_new();

// Sheet 1: 1025마리 전체 입국 여부 마스터 시트
const masterRows = allPokemon.map((p) => {
  const svIn = p.admittedGames.includes('SV');
  const swshIn = p.admittedGames.includes('SwSh');
  const bdspIn = p.admittedGames.includes('BDSP');
  const usumIn = p.admittedGames.includes('USUM');
  
  // 스위치 세대(8세대 이후: SV, SwSh, BDSP) 중 단 한번도 등장하지 못한 포켓몬
  const neverInSwitch = !svIn && !swshIn && !bdspIn;

  return {
    '전국도감 번호': `No.${String(p.id).padStart(4, '0')}`,
    '포켓몬 이름 (한글)': p.nameKo,
    '포켓몬 이름 (영문)': p.nameEn,
    '출신 세대': `${p.generation}세대`,
    '타입 1': p.types[0] || '',
    '타입 2': p.types[1] || '-',
    '9세대 (스칼렛/바이올렛 SV)': svIn ? '입국 (O)' : '❌ 미입국',
    '8세대 (소드/실드 SwSh)': swshIn ? '입국 (O)' : '❌ 미입국',
    '8세대 리메이크 (브다/샤펄 BDSP)': bdspIn ? '입국 (O)' : '❌ 미입국',
    '7세대 (울트라썬/문 USUM)': usumIn ? '입국 (O)' : '❌ 미입국',
    '스위치 타이틀 미입국(완전미등장)': neverInSwitch ? '⚠️ 스위치 완전 미입국' : '등장 이력 있음',
  };
});

const wsMaster = XLSX.utils.json_to_sheet(masterRows);
wsMaster['!cols'] = [
  { wch: 15 }, // 도감 번호
  { wch: 20 }, // 이름 한글
  { wch: 20 }, // 이름 영문
  { wch: 12 }, // 세대
  { wch: 10 }, // 타입1
  { wch: 10 }, // 타입2
  { wch: 26 }, // SV
  { wch: 24 }, // SwSh
  { wch: 32 }, // BDSP
  { wch: 26 }, // USUM
  { wch: 28 }, // 스위치 완전미입국
];
XLSX.utils.book_append_sheet(wb, wsMaster, '전체 포켓몬 입국 마스터');

// Helper to create game-specific missing sheet
function createMissingSheet(gameKey, gameTitle) {
  const missing = allPokemon.filter((p) => !p.admittedGames.includes(gameKey));
  const rows = missing.map((p, idx) => ({
    '연번': idx + 1,
    '전국도감 번호': `No.${String(p.id).padStart(4, '0')}`,
    '포켓몬 이름 (한글)': p.nameKo,
    '포켓몬 이름 (영문)': p.nameEn,
    '출신 세대': `${p.generation}세대`,
    '타입': p.types.join('/'),
    '해당 타이틀 상태': '❌ 데이터 미수록 (미입국)',
    '비고': p.generation > (gameKey === 'USUM' ? 7 : gameKey === 'SwSh' ? 8 : gameKey === 'BDSP' ? 4 : 9) ? '이후 세대 포켓몬' : '미수록 포켓몬'
  }));

  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    { wch: 8 },
    { wch: 15 },
    { wch: 20 },
    { wch: 20 },
    { wch: 12 },
    { wch: 15 },
    { wch: 26 },
    { wch: 20 },
  ];
  return ws;
}

// Sheet 2: 9세대 SV 미입국 목록
const wsSV = createMissingSheet('SV', '스칼렛·바이올렛');
XLSX.utils.book_append_sheet(wb, wsSV, '9세대 SV 미입국 포켓몬');

// Sheet 3: 8세대 SwSh 미입국 목록
const wsSwSh = createMissingSheet('SwSh', '소드·실드');
XLSX.utils.book_append_sheet(wb, wsSwSh, '8세대 SwSh 미입국 포켓몬');

// Sheet 4: 8세대 BDSP 미입국 목록
const wsBDSP = createMissingSheet('BDSP', '브릴리언트 다이아몬드·샤이닝 펄');
XLSX.utils.book_append_sheet(wb, wsBDSP, 'BDSP 미입국 포켓몬');

// Sheet 5: 닌텐도 스위치 완전 미입국 포켓몬 (SV, SwSh, BDSP 어디에도 등장하지 못한 비운의 포켓몬)
const switchNever = allPokemon.filter(
  (p) => !p.admittedGames.includes('SV') && !p.admittedGames.includes('SwSh') && !p.admittedGames.includes('BDSP')
);
const switchRows = switchNever.map((p, idx) => ({
  '연번': idx + 1,
  '전국도감 번호': `No.${String(p.id).padStart(4, '0')}`,
  '포켓몬 이름 (한글)': p.nameKo,
  '포켓몬 이름 (영문)': p.nameEn,
  '출신 세대': `${p.generation}세대`,
  '타입': p.types.join('/'),
  '스위치 현황': '❌ Switch 본가 시리즈 전체 미입국 (3DS 시대 이후 미등장)',
}));
const wsSwitch = XLSX.utils.json_to_sheet(switchRows);
wsSwitch['!cols'] = [
  { wch: 8 },
  { wch: 15 },
  { wch: 20 },
  { wch: 20 },
  { wch: 12 },
  { wch: 15 },
  { wch: 55 },
];
XLSX.utils.book_append_sheet(wb, wsSwitch, '스위치 전타이틀 미입국');

// Sheet 6: 통계 요약 (Dashboard Summary)
const summaryRows = [
  { '구분': '전국도감 총 등록 포켓몬', '마리 수': allPokemon.length, '비율': '100%' },
  { '구분': '9세대 (스칼렛·바이올렛 SV) 미입국', '마리 수': allPokemon.filter(p => !p.admittedGames.includes('SV')).length, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('SV')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '구분': '8세대 (소드·실드 SwSh) 미입국', '마리 수': allPokemon.filter(p => !p.admittedGames.includes('SwSh')).length, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('SwSh')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '구분': '8세대 (BDSP) 미입국 (4세대 이후 미수록 등)', '마리 수': allPokemon.filter(p => !p.admittedGames.includes('BDSP')).length, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('BDSP')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '구분': '7세대 (울트라썬·문 USUM) 미입국', '마리 수': allPokemon.filter(p => !p.admittedGames.includes('USUM')).length, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('USUM')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '구분': 'Nintendo Switch 본가 전 타이틀 완전 미입국', '마리 수': switchNever.length, '비율': `${((switchNever.length / allPokemon.length) * 100).toFixed(1)}%` },
];
const wsSummary = XLSX.utils.json_to_sheet(summaryRows);
wsSummary['!cols'] = [
  { wch: 45 },
  { wch: 15 },
  { wch: 15 },
];
XLSX.utils.book_append_sheet(wb, wsSummary, '타이틀별 입국 통계 요약');

// Save file to Project root and pokeclear/public
const outputPathRoot = path.resolve('포켓몬_세대별_미입국_도감.xlsx');
const outputPathPublic = path.resolve('public/포켓몬_세대별_미입국_도감.xlsx');

XLSX.writeFile(wb, outputPathRoot);
XLSX.writeFile(wb, outputPathPublic);

console.log('엑셀 파일 생성 완료:', outputPathRoot);
console.log('Public 웹 다운로드 경로 생성 완료:', outputPathPublic);
