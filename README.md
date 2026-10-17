# 🎮 PokeClear (포켓몬 스토리 클리어 도감 & 챌린지 엔트리 빌더)

> 특정 포켓몬(초라기, 피카츄, 럭키 등) 및 미진화체로 본가 스토리 엔딩을 보기 위한 **육성 가이드, 기술 배치(4슬롯), 노력치/성격, 지닌물건, 파티 시너지 엔트리**를 제공하는 반응형 웹 & PWA 앱입니다.

---

## 🚀 빠른 시작 가이드 (GitHub 배포)

이 프로젝트는 **GitHub Actions**를 통해 무료로 **GitHub Pages**에 자동 배포되도록 구성되어 있습니다.

### 1. GitHub 저장소(Repository) 생성 & 코드 푸시
GitHub 웹사이트에서 새 저장소(예: `pokeclear`)를 만든 후, 로컬 터미널에서 아래 명령어를 순서대로 입력하세요:

```bash
cd D:\Project\pokeclear

# git 초기화 및 첫 커밋
git init
git add .
git commit -m "feat: PokeClear 초기 프로젝트 및 초라기 엔트리 구현"

# GitHub 저장소 연결 및 푸시
git branch -M main
git remote add origin https://github.com/<본인-깃허브-아이디>/pokeclear.git
git push -u origin main
```

### 2. GitHub Pages 활성화 (단 1번만 설정)
1. 생성한 GitHub 저장소의 **[Settings]** 탭으로 이동합니다.
2. 좌측 메뉴에서 **[Pages]**를 클릭합니다.
3. **Build and deployment > Source** 항목을 `Deploy from a branch`에서 **`GitHub Actions`**로 변경합니다.
4. 이제 코드를 `main` 브랜치에 푸시할 때마다 `.github/workflows/deploy.yml`이 자동 실행되어 몇 분 내로 배포가 완료됩니다!

---

## 💻 로컬 개발 환경 실행 방법

로컬 PC에 Node.js가 설치되어 있다면 아래 명령어로 즉시 테스트할 수 있습니다:

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속합니다.

---

## 🌟 주요 기능

1. **포켓몬별 스토리 클리어 가이드 도감**
   * **초라기 (Chinchou)**: 진화의휘석 축전 불사신 런
   * **피카츄 (Pikachu)**: 전기구슬 종이비행기 폭탄 딜러
   * **럭키 (Chansey)**: 지구던지기 + 작아지기 철벽 요새
   * **이브이 (Eevee)**: 적응력 노말 자속 스위퍼
   * **잉어킹 (Magikarp)**: 기합의띠 바둥바둥 200위력 익스트림 챌린지
2. **스토리 최적화 파티 엔트리 (Party Entry)**
   * 초라기의 양대 약점인 [땅, 풀]을 완벽하게 무효화하는 6마리 완성형 파티 시너지 뷰
3. **실시간 검색 및 난이도 필터링**
   * 미진화 챌린지만 필터링하는 토글 지원
