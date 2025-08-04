import Image from 'next/image';

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">画像テストページ</h1>
      
      {/* Test 1: Background Image with CSS */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 1: CSS Background Image</h2>
        <div 
          className="w-full h-64 bg-gray-200 border-2 border-red-500"
          style={{
            backgroundImage: 'url("https://via.placeholder.com/800x400/FF0000/FFFFFF?text=CSS+Background")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="text-white p-4">CSS背景画像テスト</p>
        </div>
      </div>

      {/* Test 2: Next.js Image Component */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 2: Next.js Image Component</h2>
        <div className="relative w-full h-64 bg-gray-200 border-2 border-blue-500">
          <Image
            src="https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Next.js+Image"
            alt="Test image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Test 3: Regular img tag */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 3: Regular img tag</h2>
        <img 
          src="https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Regular+IMG+Tag"
          alt="Test"
          className="w-full h-64 object-cover border-2 border-green-500"
        />
      </div>

      {/* Test 4: Tailwind classes */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 4: Tailwind Classes</h2>
        <div className="bg-red-500 text-white p-4 mb-2">bg-red-500</div>
        <div className="bg-blue-500 text-white p-4 mb-2">bg-blue-500</div>
        <div className="bg-green-500 text-white p-4 mb-2">bg-green-500</div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">Gradient</div>
      </div>

      {/* Test 5: Unsplash Image */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Test 5: Unsplash Image</h2>
        <div className="relative w-full h-64 bg-gray-200 border-2 border-purple-500">
          <Image
            src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop"
            alt="Unsplash test"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}