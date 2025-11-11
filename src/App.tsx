// ============================================
// Tailwind CSS 실습 프로젝트
// ============================================
// 이 프로젝트는 Tailwind CSS를 사용하여 웹페이지를 꾸미는 실습입니다.
// 아래에 있는 미션들을 하나씩 완성해보세요!
// ============================================

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* ============================================
          미션 1: 헤더 배경색 바꾸기
          ============================================
          현재 헤더는 bg-gradient-to-r from-blue-600 to-purple-600입니다.
          다른 그라데이션이나 단색으로 바꿔보세요!
          예: bg-gradient-to-r from-red-500 to-pink-500
          또는: bg-green-500 (단색)
      */} 
      <header className="bg-gradient-to-r from-blue-300 to-slate-900 text-black py-6 px-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">나의 웹사이트</h1>
          <p className="text-white">Tailwind CSS로 만든 멋진 페이지</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* ============================================
            미션 2: 버튼 스타일 바꾸기
            ============================================
            버튼의 색상, 크기, 모서리를 바꿔보세요!
            - 색상: bg-blue-500 → bg-red-500, bg-green-500 등
            - 크기: py-2 px-4 → py-3 px-6 등
            - 모서리: rounded → rounded-full, rounded-lg 등
        */}
        <div className="mb-8 flex gap-4 flex-wrap">
          <button className="bg-red-400 hover:bg-pink-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            기본 버튼
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all">
            둥근 버튼
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            그라데이션 버튼
          </button>
        </div>

        {/* ============================================
            미션 3: 카드에 그림자 효과 추가하기
            ============================================
            카드에 shadow 효과를 추가해보세요!
            - shadow-md → shadow-lg, shadow-xl 등
            - 또는 shadow-2xl로 더 강한 그림자 만들기
            - hover:shadow-xl로 마우스 올렸을 때 효과도 추가 가능!
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
              1
            </div>
            <h2 className="text-xl font-bold mb-2">카드 1</h2>
            <p className="text-gray-600">첫 번째 카드입니다. 그림자 효과를 바꿔보세요!</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg border border-purple-200 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
              2
            </div>
            <h2 className="text-xl font-bold mb-2">카드 2</h2>
            <p className="text-gray-700">두 번째 카드입니다. 배경색도 바꿔보세요!</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border-2 border-blue-300 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
              3
            </div>
            <h2 className="text-xl font-bold mb-2">카드 3</h2>
            <p className="text-gray-600">세 번째 카드입니다. 테두리 색상을 바꿔보세요!</p>
          </div>
        </div>

        {/* ============================================
            미션 4: 표 스타일 바꾸기
            ============================================
            표의 배경색, 테두리, 텍스트 색상을 바꿔보세요!
            - 헤더 배경: bg-blue-500 → bg-red-500, bg-green-500 등
            - 행 배경: hover:bg-gray-50 → hover:bg-blue-50 등
            - 테두리: border-gray-200 → border-blue-300 등
        */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">성적표</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-purple-500 text-white">
                  <th className="border border-gray-300 px-4 py-6 text-left font-semibold">과목</th>
                  <th className="border border-gray-300 px-4 py-6 text-left font-semibold">점수</th>
                  <th className="border border-gray-300 px-4 py-6 text-left font-semibold">등급</th>
                  <th className="border border-gray-300 px-4 py-6 text-left font-semibold">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-3">수학</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">95</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">A+</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">우수</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-white">
                  <td className="border border-gray-300 px-4 py-3">영어</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">88</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">A</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">양호</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-3">과학</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">92</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">A+</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">우수</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-white">
                  <td className="border border-gray-300 px-4 py-3">국어</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">85</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">B+</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">보통</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ============================================
            미션 5: 배경 그라데이션 바꾸기
            ============================================
            아래 섹션의 배경 그라데이션을 바꿔보세요!
            - from-blue-100 via-purple-100 to-pink-100
            - 다른 색상 조합 시도: from-green-100 via-blue-100 to-purple-100
            - 또는 단색: bg-yellow-100
        */}
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8 rounded-lg mb-8 border-2 border-purple-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">다양한 배경 실습</h2>
          <p className="text-gray-800 mb-4">
            이 섹션은 그라데이션 배경을 가지고 있습니다.
            배경색을 자유롭게 바꿔보세요!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🎨</div>
              <p className="text-sm font-semibold">색상</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">📐</div>
              <p className="text-sm font-semibold">레이아웃</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">✨</div>
              <p className="text-sm font-semibold">효과</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-sm font-semibold">실습</p>
            </div>
          </div>
        </div>

        {/* ============================================
            미션 6: 폼 요소 스타일 바꾸기
            ============================================
            입력 필드와 선택 박스의 스타일을 바꿔보세요!
            - 테두리 색상: border-gray-300 → border-blue-400 등
            - 포커스 색상: focus:border-blue-500 → focus:border-red-500 등
            - 배경색: bg-white → bg-gray-50 등
        */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">연락처 입력</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">관심 분야</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                <option>웹 개발</option>
                <option>디자인</option>
                <option>데이터 분석</option>
                <option>기타</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              제출하기
            </button>
          </form>
        </div>

        {/* ============================================
            미션 7: 배지와 알림 스타일 바꾸기
            ============================================
            배지의 색상과 스타일을 바꿔보세요!
            - bg-green-100 → bg-red-100, bg-yellow-100 등
            - text-green-800 → text-red-800 등
        */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">알림 배지</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              성공
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              정보
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
              경고
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              오류
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              특별
            </span>
          </div>
        </div>

        {/* ============================================
            미션 8: 자유 실습 공간
            ============================================
            이 섹션은 여러분이 자유롭게 꾸밀 수 있는 공간입니다.
            Tailwind CSS의 다양한 클래스를 사용해보세요!
        */}
        <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 rounded-lg border-2 border-orange-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">자유 실습 공간</h2>
          <p className="text-gray-800 mb-4">
            이 섹션은 여러분이 자유롭게 꾸밀 수 있는 공간입니다.
            Tailwind CSS의 다양한 클래스를 사용해보세요!
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
            <li>색상 변경 (bg-*, text-*, border-*)</li>
            <li>간격 조정 (p-*, m-*, gap-*)</li>
            <li>폰트 스타일 (font-bold, italic, underline)</li>
            <li>레이아웃 (flex, grid, hidden)</li>
            <li>그라데이션 (bg-gradient-to-r, from-*, to-*)</li>
            <li>그림자 (shadow-*, hover:shadow-*)</li>
            <li>애니메이션 (transition-all, hover:scale-*)</li>
          </ul>
          <div className="mt-6 p-4 bg-white rounded-lg shadow-inner">
            <p className="text-sm text-gray-600 italic">
              💡 팁: Tailwind CSS 공식 문서를 참고하면 더 많은 클래스를 찾을 수 있습니다!
            </p>
          </div>
        </div>
      </main>

      {/* ============================================
          미션 9: 푸터 스타일 바꾸기
          ============================================
          푸터의 배경색과 텍스트 색상을 바꿔보세요!
          예: bg-gray-800 → bg-indigo-900, text-white → text-yellow-200 등
          또는 그라데이션: bg-gradient-to-r from-blue-800 to-purple-800
      */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-6 mt-8 shadow-lg">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2025 Tailwind CSS 실습 프로젝트</p>
          <p className="text-sm text-gray-400">여러분의 창의력으로 멋진 웹사이트를 만들어보세요! 🎨</p>
        </div>
      </footer>
    </div>
  );
}

