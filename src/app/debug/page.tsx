export default function DebugPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">デバッグページ</h1>
      
      {/* Test 1: Direct inline styles */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 1: インラインスタイル（直接）</h2>
        <div 
          style={{
            backgroundColor: '#ff0000',
            color: 'white',
            padding: '20px',
            height: '100px',
            width: '100%'
          }}
        >
          赤い背景 - インラインスタイル
        </div>
      </div>

      {/* Test 2: Tailwind colors */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 2: Tailwindカラー</h2>
        <div className="bg-blue-500 text-white p-4 h-24 w-full mb-4">
          青い背景 - bg-blue-500
        </div>
        <div className="bg-red-500 text-white p-4 h-24 w-full mb-4">
          赤い背景 - bg-red-500  
        </div>
        <div className="bg-green-500 text-white p-4 h-24 w-full">
          緑の背景 - bg-green-500
        </div>
      </div>

      {/* Test 3: CSS gradients */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 3: CSSグラデーション</h2>
        <div 
          className="w-full h-24 p-4 text-white mb-4"
          style={{
            background: 'linear-gradient(to right, #ff0000, #0000ff)'
          }}
        >
          赤→青グラデーション
        </div>
        <div 
          className="w-full h-24 p-4 text-white"
          style={{
            background: 'linear-gradient(45deg, #f5f5f5 25%, #cccccc 25%, #cccccc 50%, #f5f5f5 50%, #f5f5f5 75%, #cccccc 75%)',
            backgroundSize: '20px 20px'
          }}
        >
          パターン背景
        </div>
      </div>

      {/* Test 4: Hero section style test */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 4: ヒーローセクションスタイル</h2>
        <div className="relative h-64 bg-gray-100 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(-45deg, #f5f5f5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-serif text-black">
              OITOMI
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}