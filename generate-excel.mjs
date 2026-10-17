import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

// Load allPokemon data (now includes PLA and LGPE)
const dataPath = path.resolve('src/data/allPokemon.json');
const allPokemon = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const wb = XLSX.utils.book_new();

// Sheet 1: 1025마리 전체 입국 여부 마스터 시트
const masterRows = allPokemon.map((p) => {
  const svIn = p.admittedGames.includes('SV');
  const swshIn = p.admittedGames.includes('SwSh');
  const bdspIn = p.admittedGames.includes('BDSP');
  const usumIn = p.admittedGames.includes('USUM');
  const plaIn = p.admittedGames.includes('PLA');
  const lgpeIn = p.admittedGames.includes('LGPE');
  
  // 스위치 세대 본가 (SV, SwSh, BDSP) 완전 미입국
  const neverInMainSwitch = !svIn && !swshIn && !bdspIn;
  // 스위치 서브게임(PLA, LGPE)까지 포함해서 단 한번도 스위치에 나온 적 없는 포켓몬
  const neverInAnySwitch = neverInMainSwitch && !plaIn && !lgpeIn;

  return {
    '전국도감 번호': `No.${String(p.id).padStart(4, '0')}`,
    '포켓몬 이름 (한글)': p.nameKo,
    '포켓몬 이름 (영문)': p.nameEn,
    '출신 세대': `${p.generation}세대`,
    '타입 1': p.types[0] || '',
    '타입 2': p.types[1] || '-',
    '[본가] 9세대 SV': svIn ? '입국 (O)' : '❌ 미입국',
    '[본가] 8세대 SwSh': swshIn ? '입국 (O)' : '❌ 미입국',
    '[본가] 8세대 BDSP': bdspIn ? '입국 (O)' : '❌ 미입국',
    '[본가] 7세대 USUM': usumIn ? '입국 (O)' : '❌ 미입국',
    '[서브] 레전드 아르세우스(PLA)': plaIn ? '히스이 등장 (O)' : '❌ 미등장',
    '[서브] 레츠고 피카츄·이브이(LGPE)': lgpeIn ? '관동 등장 (O)' : '❌ 미등장',
    '본가 스위치 미입국': neverInMainSwitch ? '⚠️ 본가 미입국' : '등장 이력 있음',
    '스위치 전체 완전 미등장': neverInAnySwitch ? '🚫 스위치 전체 미등장' : '스위치 어딘가 등장',
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
  { wch: 18 }, // SV
  { wch: 18 }, // SwSh
  { wch: 18 }, // BDSP
  { wch: 18 }, // USUM
  { wch: 26 }, // PLA
  { wch: 28 }, // LGPE
  { wch: 20 }, // 본가 스위치 미입국
  { wch: 24 }, // 스위치 전체 미등장
];
XLSX.utils.book_append_sheet(wb, wsMaster, '전체 포켓몬 입국 마스터');

// Helper to create missing sheet
function createMissingSheet(gameKey, gameTitle) {
  const missing = allPokemon.filter((p) => !p.admittedGames.includes(gameKey));
  const rows = missing.map((p, idx) => ({
    '연번': idx + 1,
    '전국도감 번호': `No.${String(p.id).padStart(4, '0')}`,
    '포켓몬 이름 (한글)': p.nameKo,
    '포켓몬 이름 (영문)': p.nameEn,
    '출신 세대': `${p.generation}세대`,
    '타입': p.types.join('/'),
    '해당 타이틀 상태': '❌ 미수록 (미등장)',
  }));

  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    { wch: 8 },
    { wch: 15 },
    { wch: 20 },
    { wch: 20 },
    { wch: 12 },
    { wch: 15 },
    { wch: 24 },
  ];
  return ws;
}

// Mainline Sheets
XLSX.utils.book_append_sheet(wb, createMissingSheet('SV', '9세대 스칼렛·바이올렛'), '9세대 SV 미입국');
XLSX.utils.book_append_sheet(wb, createMissingSheet('SwSh', '8세대 소드·실드'), '8세대 SwSh 미입국');
XLSX.utils.book_append_sheet(wb, createMissingSheet('BDSP', '8세대 BDSP'), 'BDSP 미입국');

// Subgame Sheets (별도 서브게임 시트)
XLSX.utils.book_append_sheet(wb, createMissingSheet('PLA', '레전드 아르세우스'), '서브-레알세 미등장');
XLSX.utils.book_append_sheet(wb, createMissingSheet('LGPE', '레츠고 피카츄·이브이'), '서브-레츠고 미등장');

// Switch Never Appeared Sheet (스위치 콘솔 출시 이후 한번도 나오지 못한 포켓몬)
const switchNever = allPokemon.filter(
  (p) => !p.admittedGames.includes('SV') && !p.admittedGames.includes('SwSh') && !p.admittedGames.includes('BDSP') && !p.admittedGames.includes('PLA') && !p.admittedGames.includes('LGPE')
);
const switchRows = switchNever.map((p, idx) => ({
  '연번': idx + 1,
  '전국도감 번호': `No.${String(p.id).padStart(4, '0')}`,
  '포켓몬 이름 (한글)': p.nameKo,
  '포켓몬 이름 (영문)': p.nameEn,
  '출신 세대': `${p.generation}세대`,
  '타입': p.types.join('/'),
  '스위치 현황': '🚫 닌텐도 스위치 전 타이틀(본가+외전/레알세 포함) 단 한번도 미등장',
}));
const wsSwitch = XLSX.utils.json_to_sheet(switchRows);
wsSwitch['!cols'] = [
  { wch: 8 },
  { wch: 15 },
  { wch: 20 },
  { wch: 20 },
  { wch: 12 },
  { wch: 15 },
  { wch: 60 },
];
XLSX.utils.book_append_sheet(wb, wsSwitch, '스위치 전타이틀 미등장');

// Summary Sheet
const summaryRows = [
  { '타이틀 구분': '전국도감 총 등록 포켓몬', '수록/미수록 상태': '1025마리', '비율': '100%' },
  { '타이틀 구분': '[본가] 9세대 스칼렛·바이올렛 (SV) 미입국', '수록/미수록 상태': `${allPokemon.filter(p => !p.admittedGames.includes('SV')).length}마리 미입국`, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('SV')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '타이틀 구분': '[본가] 8세대 소드·실드 (SwSh) 미입국', '수록/미수록 상태': `${allPokemon.filter(p => !p.admittedGames.includes('SwSh')).length}마리 미입국`, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('SwSh')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '타이틀 구분': '[본가] 8세대 브다·샤펄 (BDSP) 미입국', '수록/미수록 상태': `${allPokemon.filter(p => !p.admittedGames.includes('BDSP')).length}마리 미입국`, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('BDSP')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '타이틀 구분': '[서브] 레전드 아르세우스 (히스이도감 외 미등장)', '수록/미수록 상태': `${allPokemon.filter(p => !p.admittedGames.includes('PLA')).length}마리 미등장 (등장 242마리)`, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('PLA')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '타이틀 구분': '[서브] 레츠고! 피카츄·이브이 (관동도감 외 미등장)', '수록/미수록 상태': `${allPokemon.filter(p => !p.admittedGames.includes('LGPE')).length}마리 미등장 (등장 153마리)`, '비율': `${((allPokemon.filter(p => !p.admittedGames.includes('LGPE')).length / allPokemon.length) * 100).toFixed(1)}%` },
  { '타이틀 구분': '닌텐도 스위치 모든 게임(본가+서브) 완전 미등장', '수록/미수록 상태': `${switchNever.length}마리 (3DS 시대 이후 유기)`, '비율': `${((switchNever.length / allPokemon.length) * 100).toFixed(1)}%` },
];
const wsSummary = XLSX.utils.json_to_sheet(summaryRows);
wsSummary['!cols'] = [{ wch: 45 }, { wch: 35 }, { wch: 15 }];
XLSX.utils.book_append_sheet(wb, wsSummary, '타이틀별 입국 통계 요약');

// Save files
const outputPathRoot = path.resolve('포켓몬_세대별_미입국_도감.xlsx');
const outputPathPublic = path.resolve('public/포켓몬_세대별_미입국_도감.xlsx');
const outputPathDist = path.resolve('dist/포켓몬_세대별_미입국_도감.xlsx');

XLSX.writeFile(wb, outputPathRoot);
XLSX.writeFile(wb, outputPathPublic);
XLSX.writeFile(wb, outputPathDist);

console.log('서브게임(PLA, LGPE) 분리 엑셀 업데이트 완료!');
