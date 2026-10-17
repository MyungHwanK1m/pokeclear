import ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';

// 1. 포켓몬 데이터 로드
const dataPath = path.resolve('src/data/allPokemon.json');
const allPokemon = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

async function buildWorkbook() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'PokeClear - 포켓몬 스토리 클리어 도감';
  wb.created = new Date();

  // =========================================================================
  // Sheet 1: 📖 엑셀 설명 및 이용 가이드 (첫 페이지)
  // =========================================================================
  const wsGuide = wb.addWorksheet('📖 엑셀 설명 및 가이드', {
    views: [{ showGridLines: true }],
  });

  wsGuide.columns = [
    { key: 'colA', width: 6 },
    { key: 'colB', width: 28 },
    { key: 'colC', width: 50 },
    { key: 'colD', width: 35 },
  ];

  // 타이틀 헤더
  wsGuide.mergeCells('B2:D2');
  const titleCell = wsGuide.getCell('B2');
  titleCell.value = '⚡ 포켓몬스터 시리즈별 입국 / 미입국 도감 종합 가이드';
  titleCell.font = { name: '맑은 고딕', size: 16, bold: true, color: { argb: 'FFFFFFFF' } };
  titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDC2626' } };
  titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
  wsGuide.getRow(2).height = 40;

  // 서브 타이틀
  wsGuide.mergeCells('B3:D3');
  const subCell = wsGuide.getCell('B3');
  subCell.value = '전국도감 1025마리 전종의 7~9세대 본가 및 닌텐도 스위치 외전/서브게임(레전드 Z-A 포함) 수록 현황 완벽 정리 도감';
  subCell.font = { name: '맑은 고딕', size: 10, italic: true, color: { argb: 'FF475569' } };
  subCell.alignment = { vertical: 'middle', horizontal: 'center' };
  wsGuide.getRow(3).height = 25;

  // 섹션 1: 시트 구성 안내 헤더
  wsGuide.getCell('B5').value = '1. 시트별 주요 내용 및 활용 방법';
  wsGuide.getCell('B5').font = { name: '맑은 고딕', size: 12, bold: true, color: { argb: 'FF1E293B' } };

  const guideRows = [
    ['시트 이름', '시트 설명', '필터 기능 안내'],
    ['전체 포켓몬 입국 마스터', '전국도감 No.0001 ~ No.1025 전체 포켓몬의 본가 4개작 및 서브 3개작(ZA, PLA, LGPE) 입국 매트릭스', '★ 모든 열에 자동 필터 적용. 원하는 타이틀의 [미입국]만 선택 가능'],
    ['타이틀별 입국 통계 요약', '각 게임별 미입국 마리 수 및 비율(%) 대시보드', '전체 데이터 요약 표'],
    ['9세대 SV 미입국', '스칼렛/바이올렛(본편 + DLC 남청의 원반)에 등장하지 못한 포켓몬 목록', '출신 세대별, 타입별 필터 정렬 가능'],
    ['8세대 SwSh 미입국', '소드/실드(본편 + 익스팬션 패스)에 등장하지 못한 포켓몬 목록', '출신 세대별, 타입별 필터 정렬 가능'],
    ['BDSP 미입국', '브릴리언트 다이아몬드·샤이닝 펄(4세대 도감 기준) 미수록 목록', '출신 세대별, 타입별 필터 정렬 가능'],
    ['서브-레전드 ZA 미등장', 'Pokémon LEGENDS Z-A(미르 도감)에 등장하지 않는 포켓몬 목록', '미르 도감 외 포켓몬 추출 필터'],
    ['서브-레알세 미등장', 'Pokémon LEGENDS 아르세우스(히스이 도감)에 등장하지 않는 포켓몬', '히스이 도감 외 포켓몬 추출 필터'],
    ['서브-레츠고 미등장', '레츠고! 피카츄·이브이(관동 도감)에 등장하지 않는 포켓몬', '관동 도감 외 포켓몬 추출 필터'],
    ['스위치 전타이틀 미등장', '닌텐도 스위치(본가 + ZA/레알세/레츠고) 어떤 게임에도 나오지 못한 포켓몬', '3DS 이후 단 한 번도 미등장한 비운의 포켓몬 필터'],
  ];

  let curRow = 6;
  guideRows.forEach((row, idx) => {
    const r = wsGuide.getRow(curRow);
    r.getCell('B').value = row[0];
    r.getCell('C').value = row[1];
    r.getCell('D').value = row[2];

    if (idx === 0) {
      r.height = 28;
      ['B', 'C', 'D'].forEach((col) => {
        const c = r.getCell(col);
        c.font = { name: '맑은 고딕', bold: true, color: { argb: 'FFFFFFFF' } };
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E293B' } };
        c.alignment = { vertical: 'middle', horizontal: 'center' };
        c.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
      });
    } else {
      r.height = 24;
      ['B', 'C', 'D'].forEach((col) => {
        const c = r.getCell(col);
        c.font = { name: '맑은 고딕', size: 9.5 };
        c.border = { top: { style: 'thin', color: { argb: 'FFE2E8F0' } }, bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } }, left: { style: 'thin', color: { argb: 'FFE2E8F0' } }, right: { style: 'thin', color: { argb: 'FFE2E8F0' } } };
        c.alignment = { vertical: 'middle' };
      });
      r.getCell('B').font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: 'FF0F172A' } };
    }
    curRow++;
  });

  // 섹션 2: 필터 사용법 팁 안내
  curRow += 1;
  wsGuide.getCell(`B${curRow}`).value = '2. 🔍 엑셀 필터(Filter) 기능 사용 꿀팁';
  wsGuide.getCell(`B${curRow}`).font = { name: '맑은 고딕', size: 12, bold: true, color: { argb: 'FF1E293B' } };
  curRow += 1;

  const tipRows = [
    '• 모든 시트의 1행(헤더)에 [자동 필터 드롭다운 화살표(▼)]가 기본 활성화되어 있습니다.',
    '• 특정 게임 미입국 포켓몬만 보고 싶다면: [9세대 SV] 열의 필터 화살표(▼)를 누르고 [❌ 미입국]만 체크하세요.',
    '• 레전드 Z-A 등장 포켓몬만 보고 싶다면: [서브 레전드 Z-A] 열에서 [등장 (O)]만 선택하세요.',
    '• 특정 타입만 모아보고 싶다면: [타입 1] 또는 [타입 2] 열에서 원하는 타입(예: 불꽃, 드래곤)을 필터링하세요.',
    '• 특정 세대 포켓몬만 골라보고 싶다면: [출신 세대] 열에서 (예: 1세대, 5세대 등)을 선택하세요.',
    '• 스위치 전 시리즈 미입국 포켓몬은 [스위치 전체 완전 미등장] 열에서 [🚫 스위치 전체 미등장]만 골라내면 즉시 조회됩니다.',
  ];

  tipRows.forEach((tip) => {
    wsGuide.mergeCells(`B${curRow}:D${curRow}`);
    const r = wsGuide.getCell(`B${curRow}`);
    r.value = tip;
    r.font = { name: '맑은 고딕', size: 10, color: { argb: 'FF334155' } };
    r.alignment = { vertical: 'middle' };
    wsGuide.getRow(curRow).height = 22;
    curRow++;
  });

  // =========================================================================
  // Sheet 2: 📊 타이틀별 입국 통계 요약 (Dashboard)
  // =========================================================================
  const wsSummary = wb.addWorksheet('타이틀별 입국 통계 요약');
  wsSummary.columns = [
    { header: '타이틀 구분', key: 'title', width: 45 },
    { header: '수록/미수록 현황', key: 'status', width: 35 },
    { header: '비율 (%)', key: 'ratio', width: 16 },
  ];

  const switchNeverCount = allPokemon.filter(
    (p) => !p.admittedGames.includes('SV') && !p.admittedGames.includes('SwSh') && !p.admittedGames.includes('BDSP') && !p.admittedGames.includes('PLA') && !p.admittedGames.includes('LGPE') && !p.admittedGames.includes('ZA')
  ).length;

  const summaryData = [
    { title: '전국도감 총 등록 포켓몬', status: '1025마리', ratio: '100.0%' },
    { title: '[본가] 9세대 스칼렛·바이올렛 (SV) 미입국', status: `${allPokemon.filter(p => !p.admittedGames.includes('SV')).length}마리 미입국`, ratio: `${((allPokemon.filter(p => !p.admittedGames.includes('SV')).length / allPokemon.length) * 100).toFixed(1)}%` },
    { title: '[본가] 8세대 소드·실드 (SwSh) 미입국', status: `${allPokemon.filter(p => !p.admittedGames.includes('SwSh')).length}마리 미입국`, ratio: `${((allPokemon.filter(p => !p.admittedGames.includes('SwSh')).length / allPokemon.length) * 100).toFixed(1)}%` },
    { title: '[본가] 8세대 브다·샤펄 (BDSP) 미입국', status: `${allPokemon.filter(p => !p.admittedGames.includes('BDSP')).length}마리 미입국`, ratio: `${((allPokemon.filter(p => !p.admittedGames.includes('BDSP')).length / allPokemon.length) * 100).toFixed(1)}%` },
    { title: '[서브] 레전드 Z-A (미르도감 외 미등장)', status: `${allPokemon.filter(p => !p.admittedGames.includes('ZA')).length}마리 미등장 (등장 ${allPokemon.filter(p => p.admittedGames.includes('ZA')).length}마리)`, ratio: `${((allPokemon.filter(p => !p.admittedGames.includes('ZA')).length / allPokemon.length) * 100).toFixed(1)}%` },
    { title: '[서브] 레전드 아르세우스 (히스이도감 외 미등장)', status: `${allPokemon.filter(p => !p.admittedGames.includes('PLA')).length}마리 미등장 (등장 242마리)`, ratio: `${((allPokemon.filter(p => !p.admittedGames.includes('PLA')).length / allPokemon.length) * 100).toFixed(1)}%` },
    { title: '[서브] 레츠고! 피카츄·이브이 (관동도감 외 미등장)', status: `${allPokemon.filter(p => !p.admittedGames.includes('LGPE')).length}마리 미등장 (등장 153마리)`, ratio: `${((allPokemon.filter(p => !p.admittedGames.includes('LGPE')).length / allPokemon.length) * 100).toFixed(1)}%` },
    { title: '닌텐도 스위치 모든 게임(본가+서브 전체) 완전 미등장', status: `${switchNeverCount}마리 (3DS 시대 이후 유기)`, ratio: `${((switchNeverCount / allPokemon.length) * 100).toFixed(1)}%` },
  ];

  summaryData.forEach((row) => wsSummary.addRow(row));
  styleHeader(wsSummary);
  wsSummary.autoFilter = { from: 'A1', to: 'C1' };

  // =========================================================================
  // Sheet 3: 전체 포켓몬 입국 마스터 (Master Sheet with Full AutoFilter)
  // =========================================================================
  const wsMaster = wb.addWorksheet('전체 포켓몬 입국 마스터');
  wsMaster.columns = [
    { header: '도감 번호', key: 'id', width: 14 },
    { header: '포켓몬 이름 (한글)', key: 'nameKo', width: 20 },
    { header: '포켓몬 이름 (영문)', key: 'nameEn', width: 20 },
    { header: '출신 세대', key: 'gen', width: 12 },
    { header: '타입 1', key: 'type1', width: 10 },
    { header: '타입 2', key: 'type2', width: 10 },
    { header: '[본가] 9세대 SV', key: 'sv', width: 18 },
    { header: '[본가] 8세대 SwSh', key: 'swsh', width: 18 },
    { header: '[본가] 8세대 BDSP', key: 'bdsp', width: 18 },
    { header: '[본가] 7세대 USUM', key: 'usum', width: 18 },
    { header: '[서브] 레전드 ZA', key: 'za', width: 18 },
    { header: '[서브] 레알세(PLA)', key: 'pla', width: 18 },
    { header: '[서브] 레츠고(LGPE)', key: 'lgpe', width: 18 },
    { header: '본가 스위치 미입국', key: 'mainNever', width: 20 },
    { header: '스위치 전체 완전 미등장', key: 'anyNever', width: 24 },
  ];

  allPokemon.forEach((p) => {
    const svIn = p.admittedGames.includes('SV');
    const swshIn = p.admittedGames.includes('SwSh');
    const bdspIn = p.admittedGames.includes('BDSP');
    const usumIn = p.admittedGames.includes('USUM');
    const zaIn = p.admittedGames.includes('ZA');
    const plaIn = p.admittedGames.includes('PLA');
    const lgpeIn = p.admittedGames.includes('LGPE');
    const neverInMainSwitch = !svIn && !swshIn && !bdspIn;
    const neverInAnySwitch = neverInMainSwitch && !zaIn && !plaIn && !lgpeIn;

    const row = wsMaster.addRow({
      id: `No.${String(p.id).padStart(4, '0')}`,
      nameKo: p.nameKo,
      nameEn: p.nameEn,
      gen: `${p.generation}세대`,
      type1: p.types[0] || '',
      type2: p.types[1] || '-',
      sv: svIn ? '입국 (O)' : '❌ 미입국',
      swsh: swshIn ? '입국 (O)' : '❌ 미입국',
      bdsp: bdspIn ? '입국 (O)' : '❌ 미입국',
      usum: usumIn ? '입국 (O)' : '❌ 미입국',
      za: zaIn ? '등장 (O)' : '❌ 미등장',
      pla: plaIn ? '등장 (O)' : '❌ 미등장',
      lgpe: lgpeIn ? '등장 (O)' : '❌ 미등장',
      mainNever: neverInMainSwitch ? '⚠️ 본가 미입국' : '등장 이력 있음',
      anyNever: neverInAnySwitch ? '🚫 스위치 전체 미등장' : '스위치 어딘가 등장',
    });

    // 미입국/미등장 강조 색상
    if (!svIn) colorCell(row.getCell('sv'), 'FFFEE2E2', 'FF991B1B');
    if (!swshIn) colorCell(row.getCell('swsh'), 'FFFEE2E2', 'FF991B1B');
    if (!bdspIn) colorCell(row.getCell('bdsp'), 'FFFEE2E2', 'FF991B1B');
    if (zaIn) colorCell(row.getCell('za'), 'FFCCFBF1', 'FF0F766E');
    if (neverInAnySwitch) colorCell(row.getCell('anyNever'), 'FFFEE2E2', 'FF7F1D1D');
  });

  styleHeader(wsMaster);
  wsMaster.autoFilter = { from: 'A1', to: 'O1' };

  // =========================================================================
  // Sheet 4 ~ : 각 타이틀별 미입국 전용 시트 (AutoFilter 적용)
  // =========================================================================
  function addMissingSheet(sheetName, gameKey) {
    const ws = wb.addWorksheet(sheetName);
    ws.columns = [
      { header: '연번', key: 'idx', width: 8 },
      { header: '도감 번호', key: 'id', width: 14 },
      { header: '포켓몬 이름 (한글)', key: 'nameKo', width: 20 },
      { header: '포켓몬 이름 (영문)', key: 'nameEn', width: 20 },
      { header: '출신 세대', key: 'gen', width: 12 },
      { header: '타입', key: 'types', width: 16 },
      { header: '해당 타이틀 상태', key: 'status', width: 24 },
    ];

    const missing = allPokemon.filter((p) => !p.admittedGames.includes(gameKey));
    missing.forEach((p, index) => {
      ws.addRow({
        idx: index + 1,
        id: `No.${String(p.id).padStart(4, '0')}`,
        nameKo: p.nameKo,
        nameEn: p.nameEn,
        gen: `${p.generation}세대`,
        types: p.types.join('/'),
        status: '❌ 미수록 (미등장)',
      });
    });

    styleHeader(ws);
    ws.autoFilter = { from: 'A1', to: 'G1' };
  }

  addMissingSheet('9세대 SV 미입국', 'SV');
  addMissingSheet('8세대 SwSh 미입국', 'SwSh');
  addMissingSheet('BDSP 미입국', 'BDSP');
  addMissingSheet('서브-레전드 ZA 미등장', 'ZA');
  addMissingSheet('서브-레알세 미등장', 'PLA');
  addMissingSheet('서브-레츠고 미등장', 'LGPE');

  // =========================================================================
  // Sheet: 닌텐도 스위치 전 타이틀 미등장 시트
  // =========================================================================
  const wsSwitch = wb.addWorksheet('스위치 전타이틀 미등장');
  wsSwitch.columns = [
    { header: '연번', key: 'idx', width: 8 },
    { header: '도감 번호', key: 'id', width: 14 },
    { header: '포켓몬 이름 (한글)', key: 'nameKo', width: 20 },
    { header: '포켓몬 이름 (영문)', key: 'nameEn', width: 20 },
    { header: '출신 세대', key: 'gen', width: 12 },
    { header: '타입', key: 'types', width: 16 },
    { header: '스위치 현황', key: 'status', width: 60 },
  ];

  const switchNeverList = allPokemon.filter(
    (p) => !p.admittedGames.includes('SV') && !p.admittedGames.includes('SwSh') && !p.admittedGames.includes('BDSP') && !p.admittedGames.includes('PLA') && !p.admittedGames.includes('LGPE') && !p.admittedGames.includes('ZA')
  );

  switchNeverList.forEach((p, idx) => {
    wsSwitch.addRow({
      idx: idx + 1,
      id: `No.${String(p.id).padStart(4, '0')}`,
      nameKo: p.nameKo,
      nameEn: p.nameEn,
      gen: `${p.generation}세대`,
      types: p.types.join('/'),
      status: '🚫 닌텐도 스위치 전 타이틀(본가+ZA/레알세/레츠고) 단 한번도 미등장',
    });
  });

  styleHeader(wsSwitch);
  wsSwitch.autoFilter = { from: 'A1', to: 'G1' };

  // 파일 저장
  const outputPathRoot = path.resolve('포켓몬_세대별_미입국_도감.xlsx');
  const outputPathPublic = path.resolve('public/포켓몬_세대별_미입국_도감.xlsx');
  const outputPathDist = path.resolve('dist/포켓몬_세대별_미입국_도감.xlsx');

  await wb.xlsx.writeFile(outputPathRoot);
  await wb.xlsx.writeFile(outputPathPublic);
  await wb.xlsx.writeFile(outputPathDist);

  console.log('✅ 레전드 Z-A 포함 엑셀 생성 완료!');
}

function styleHeader(ws) {
  const headerRow = ws.getRow(1);
  headerRow.height = 28;
  headerRow.eachCell((cell) => {
    cell.font = { name: '맑은 고딕', bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E293B' } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });
}

function colorCell(cell, bgArgb, textArgb) {
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgArgb } };
  cell.font = { name: '맑은 고딕', color: { argb: textArgb }, bold: true };
}

buildWorkbook();
