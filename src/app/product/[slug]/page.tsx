import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Mock product data
const products = {
  'imabari-towel': {
    name: '今治タオル',
    description: '最高級の吸水性と肌触り',
    longDescription: `愛媛県今治市で120年の歴史を持つ今治タオル。
    
独自の品質基準により、5秒以内に水に沈む優れた吸水性を実現。
柔らかな肌触りと耐久性を兼ね備え、毎日の生活に寄り添います。

職人が一枚一枚丁寧に織り上げた、日本が誇る最高品質のタオルです。`,
    price: '¥3,500〜',
    gradient: 'from-blue-900 to-blue-700',
  },
  'magewappa': {
    name: '曲げわっぱ',
    description: '秋田杉の美しい弁当箱',
    longDescription: `秋田県大館市の伝統工芸品、曲げわっぱ。
    
天然の秋田杉を薄く削り、熱湯で柔らかくして曲げる伝統技法。
木の呼吸によりご飯の余分な水分を吸収し、美味しさを保ちます。

使い込むほどに味わいが増す、一生ものの弁当箱です。`,
    price: '¥8,000〜',
    gradient: 'from-amber-900 to-amber-700',
  },
  'matcha': {
    name: '抹茶',
    description: '京都宇治の本格抹茶',
    longDescription: `京都宇治で育まれた最高級の抹茶。
    
石臼で丁寧に挽かれた抹茶は、鮮やかな緑色と深い香りが特徴。
茶道の作法に則り、一服の抹茶に込められた日本の美意識。

現代のライフスタイルに合わせて、気軽に楽しめる抹茶セットもご用意。`,
    price: '¥2,000〜',
    gradient: 'from-green-900 to-green-700',
  },
  'ceramic': {
    name: '陶器',
    description: '美濃焼の器コレクション',
    longDescription: `岐阜県の美濃地方で作られる美濃焼。
    
1300年の歴史を持ち、日本の食器生産量の約60%を占める一大産地。
シンプルで使いやすいデザインと、優れた機能性が特徴。

毎日の食卓を彩る、美しく実用的な器をお届けします。`,
    price: '¥1,500〜',
    gradient: 'from-gray-700 to-gray-500',
  },
  'furoshiki': {
    name: '風呂敷',
    description: '京都の伝統的な包み布',
    longDescription: `京都で受け継がれる風呂敷の文化。
    
一枚の布が様々な形に変化し、贈り物を美しく包みます。
環境に優しいエコバッグとしても注目される、日本の知恵。

現代的なデザインと伝統的な文様が融合した、新しい風呂敷の形。`,
    price: '¥2,500〜',
    gradient: 'from-pink-900 to-pink-700',
  },
  'chopsticks': {
    name: '箸',
    description: '若狭塗の高級箸',
    longDescription: `福井県小浜市の伝統工芸、若狭塗の箸。
    
漆を何層にも重ね、研ぎ出すことで生まれる独特の模様。
軽くて丈夫、口当たりも優しい、毎日使いたくなる箸。

大切な人への贈り物にも最適な、日本の美が詰まった逸品。`,
    price: '¥3,000〜',
    gradient: 'from-amber-900 to-amber-700',
  },
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];
  
  if (!product) {
    return {
      title: '商品が見つかりません',
    };
  }

  return {
    title: `${product.name} | OITOMI`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];
  
  if (!product) {
    notFound();
  }

  return (
    <main className="pt-20">
      {/* Hero section */}
      <section className={`relative h-[60vh] bg-gradient-to-br ${product.gradient}`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-wider">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-black/60">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  HOME
                </Link>
              </li>
              <li>/</li>
              <li className="text-black">{product.name}</li>
            </ol>
          </nav>

          {/* Product details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">商品について</h2>
              <div className="whitespace-pre-line text-black/80 leading-relaxed">
                {product.longDescription}
              </div>
            </div>
            
            <div>
              <div className="sticky top-24">
                <div className="bg-gray-50 p-8 mb-6">
                  <h3 className="text-2xl font-serif mb-4">価格</h3>
                  <p className="text-3xl font-serif">{product.price}</p>
                </div>
                
                <div className="border border-black p-8">
                  <h3 className="text-2xl font-serif mb-4">お問い合わせ</h3>
                  <p className="text-sm text-black/70 mb-6">
                    こちらの商品についてのお問い合わせは、下記のボタンよりお願いいたします。
                  </p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-black text-white text-center py-4 hover:bg-gray-800 transition-colors"
                  >
                    お問い合わせはこちら
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}