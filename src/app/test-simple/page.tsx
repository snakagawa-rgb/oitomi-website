export default function TestSimplePage() {
  return (
    <div>
      <h1>シンプルテスト</h1>
      
      {/* Test 1: Basic HTML with inline styles */}
      <div 
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '20px',
          margin: '10px 0'
        }}
      >
        インラインスタイル - 赤背景
      </div>

      {/* Test 2: Tailwind classes */}
      <div className="bg-blue-500 text-white p-4 m-2">
        Tailwind bg-blue-500
      </div>

      {/* Test 3: CSS Variables */}
      <div 
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          padding: '20px',
          border: '2px solid green'
        }}
      >
        CSS変数テスト
      </div>

      {/* Test 4: Hero section minimal */}
      <div 
        style={{
          height: '300px',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #c3272b 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2>グラデーション背景テスト</h2>
      </div>
    </div>
  );
}