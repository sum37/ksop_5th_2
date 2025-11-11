# Tailwind CSS 실습 프로젝트

Tailwind CSS를 사용하여 웹페이지를 꾸며보는 실습 프로젝트입니다.

## 📋 실습 목표

1. Git Clone으로 템플릿 프로젝트 받기
2. Tailwind CSS로 웹페이지 꾸미기
3. Git을 사용하여 자신만의 저장소에 올리기

---

## 🚀 시작하기

### 1단계: 프로젝트 클론 및 설치

```bash
# 템플릿 프로젝트 클론
git clone https://github.com/sum37/ksop_5th.git
cd ksop_5th

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하여 확인할 수 있습니다.

---

## 🎨 실습 미션

`src/App.tsx` 파일을 열어보면 주석으로 표시된 미션들이 있습니다.

### 미션 1: 헤더 배경색 바꾸기
- 현재: `bg-gradient-to-r from-blue-600 to-purple-600`
- 시도해볼 것: 다른 그라데이션 또는 단색 배경

### 미션 2: 버튼 스타일 바꾸기
- 색상 변경: `bg-blue-500` → `bg-red-500` 등
- 크기 변경: `py-2 px-4` → `py-3 px-6` 등
- 모서리 변경: `rounded-lg` → `rounded-full` 등
- 그라데이션 버튼도 시도해보세요!

### 미션 3: 카드에 그림자 효과 추가하기
- `shadow-md` → `shadow-lg`, `shadow-xl`, `shadow-2xl` 등
- `hover:shadow-xl`로 마우스 호버 효과도 추가 가능

### 미션 4: 표 스타일 바꾸기
- 헤더 배경: `bg-blue-500` → `bg-red-500`, `bg-green-500` 등
- 행 호버 효과: `hover:bg-gray-50` → `hover:bg-blue-50` 등
- 테두리 색상 변경

### 미션 5: 배경 그라데이션 바꾸기
- `from-blue-100 via-purple-100 to-pink-100`
- 다른 색상 조합 시도: `from-green-100 via-blue-100 to-purple-100`
- 또는 단색: `bg-yellow-100`

### 미션 6: 폼 요소 스타일 바꾸기
- 입력 필드 테두리 색상 변경
- 포커스 색상 변경: `focus:border-blue-500` → `focus:border-red-500` 등
- 배경색 변경

### 미션 7: 배지와 알림 스타일 바꾸기
- 배지 색상: `bg-green-100` → `bg-red-100`, `bg-yellow-100` 등
- 텍스트 색상: `text-green-800` → `text-red-800` 등

### 미션 8: 자유 실습 공간
- 이 섹션은 자유롭게 꾸밀 수 있는 공간입니다!

### 미션 9: 푸터 스타일 바꾸기
- 배경색과 텍스트 색상을 자유롭게 변경해보세요!
- 그라데이션도 시도해보세요: `bg-gradient-to-r from-blue-800 to-purple-800`

---

## 📚 Tailwind CSS 기본 사용법

### 색상 (Colors)
- 배경색: `bg-blue-500`, `bg-red-500`, `bg-green-500` 등
- 텍스트 색상: `text-white`, `text-gray-800`, `text-blue-600` 등

### 간격 (Spacing)
- 패딩: `p-4`, `px-6`, `py-2` 등
- 마진: `m-4`, `mt-8`, `mb-4` 등
- 갭: `gap-4`, `gap-6` 등

### 폰트 (Typography)
- 크기: `text-sm`, `text-lg`, `text-2xl`, `text-3xl` 등
- 굵기: `font-bold`, `font-semibold`, `font-normal` 등

### 레이아웃 (Layout)
- Flexbox: `flex`, `flex-col`, `items-center`, `justify-between` 등
- Grid: `grid`, `grid-cols-3`, `grid-cols-1` 등

### 효과 (Effects)
- 그림자: `shadow-md`, `shadow-lg`, `shadow-xl` 등
- 둥근 모서리: `rounded`, `rounded-lg`, `rounded-full` 등

---

## 💾 Git으로 저장소에 올리기

### 1단계: 변경사항 확인

```bash
git status
```

### 2단계: 변경사항 추가

```bash
git add .
```

### 3단계: 커밋 메시지 작성

```bash
git commit -m "Tailwind CSS로 웹페이지 꾸미기 완성"
```

### 4단계: 자신의 GitHub 저장소에 올리기

**⚠️ 중요: 원본 템플릿 저장소에 push하지 않도록 주의하세요!**

```bash
# 원본 remote 제거 (중요!)
git remote remove origin

# 자신의 GitHub 저장소 추가
git remote add origin https://github.com/본인아이디/본인저장소이름.git

# 브랜치 이름을 main으로 설정
git branch -M main

# GitHub에 push
git push -u origin main
```

---

## 📁 프로젝트 구조

```
ksop_5th/
├── src/
│   ├── App.tsx          # 메인 컴포넌트 (여기서 꾸미기!)
│   ├── main.tsx         # React 진입점
│   └── index.css        # Tailwind CSS 설정
├── public/
│   └── vite.svg
├── index.html
├── tailwind.config.js   # Tailwind 설정 파일
├── postcss.config.js    # PostCSS 설정
├── package.json
└── README.md
```

---

## 🎯 실습 팁

1. **실시간 확인**: `npm run dev`를 실행한 상태에서 파일을 수정하면 브라우저가 자동으로 새로고침됩니다.

2. **Tailwind 문서 참고**: [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)에서 더 많은 클래스를 찾아보세요!

3. **자유롭게 실험**: 미션 외에도 자유롭게 스타일을 추가하고 변경해보세요.

4. **Git 사용**: 변경사항을 자주 커밋하는 습관을 기르세요!

---

## 🛠️ 기술 스택

- React 19
- TypeScript
- Vite
- Tailwind CSS 3

---

## 📝 참고사항

- 이 프로젝트는 Tailwind CSS 실습을 위한 템플릿입니다.
- 모든 미션을 완성하지 않아도 괜찮습니다. 자유롭게 실습하세요!
- 질문이 있으면 언제든지 선생님께 물어보세요.

---

**행운을 빕니다! 🎉**

# ksop_5th_2
# ksop_5th_2
