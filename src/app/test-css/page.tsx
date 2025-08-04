export default function TestCSSPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold mb-8">CSS動作テスト</h1>
      
      {/* Test 1: Basic Tailwind colors */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">1. Tailwindベースカラー</h2>
        <div className="bg-red-500 text-white p-4 mb-2">bg-red-500（赤）</div>
        <div className="bg-blue-500 text-white p-4 mb-2">bg-blue-500（青）</div>
        <div className="bg-green-500 text-white p-4 mb-2">bg-green-500（緑）</div>
      </section>

      {/* Test 2: Gradients */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">2. グラデーション</h2>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 mb-2">
          bg-gradient-to-r from-blue-500 to-purple-500
        </div>
        <div className="bg-gradient-to-br from-green-400 to-blue-600 text-white p-4 mb-2">
          bg-gradient-to-br from-green-400 to-blue-600
        </div>
      </section>

      {/* Test 3: Dynamic classes */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">3. 動的クラス</h2>
        <div className={`bg-gradient-to-br from-blue-900 to-blue-700 text-white p-4 mb-2`}>
          動的：from-blue-900 to-blue-700
        </div>
        <div className={`bg-gradient-to-br from-amber-900 to-amber-700 text-white p-4 mb-2`}>
          動的：from-amber-900 to-amber-700
        </div>
        <div className={`bg-gradient-to-br from-green-900 to-green-700 text-white p-4 mb-2`}>
          動的：from-green-900 to-green-700
        </div>
      </section>

      {/* Test 4: Inline styles */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">4. インラインスタイル</h2>
        <div style={{ background: 'linear-gradient(to right, #ff0000, #0000ff)', color: 'white', padding: '16px' }}>
          インラインスタイルのグラデーション
        </div>
      </section>

      {/* Test 5: Current implementation */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">5. 現在の実装テスト</h2>
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="h-full flex items-center justify-center text-white">
              ヒーローセクションのグラデーション
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}