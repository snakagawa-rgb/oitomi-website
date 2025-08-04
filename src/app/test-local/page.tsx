export default function TestLocalPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">ローカルテストページ</h1>
      
      {/* Test 1: Inline styles */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 1: インラインスタイル</h2>
        <div 
          className="w-full h-64 border-2 border-red-500"
          style={{
            backgroundColor: '#ff0000',
            background: 'linear-gradient(to right, #ff0000, #0000ff)',
          }}
        >
          <p className="text-white p-4">グラデーション背景</p>
        </div>
      </div>

      {/* Test 2: Tailwind background colors */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 2: Tailwindクラス</h2>
        <div className="bg-blue-500 text-white p-8 mb-4">
          bg-blue-500
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8">
          Tailwind グラデーション
        </div>
      </div>

      {/* Test 3: Data URL image */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 3: Data URL画像</h2>
        <div 
          className="w-full h-64 border-2 border-green-500"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%2300ff00'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ESVG%3C/text%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="text-white p-4">Data URL背景画像</p>
        </div>
      </div>

      {/* Test 4: Hero section with gradient only */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 4: ヒーローセクション（グラデーションのみ）</h2>
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-4xl font-serif">伝統の技、現代の美</h1>
          </div>
        </div>
      </div>

      {/* Test 5: Font test */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 5: フォントテスト</h2>
        <p className="font-serif text-3xl">Hiragino Mincho ProN フォント</p>
        <p className="font-sans text-3xl">Sans-serif フォント</p>
      </div>
    </div>
  );
}