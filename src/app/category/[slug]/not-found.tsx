import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-1 bg-white">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-serif font-bold text-charcoal mb-4">
            404
          </h1>
          <h2 className="text-2xl font-serif text-charcoal mb-6">
            カテゴリーが見つかりません
          </h2>
          <p className="text-charcoal/70 mb-8">
            お探しのカテゴリーは存在しないか、削除された可能性があります。
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded hover:bg-charcoal/90 transition-colors"
          >
            <span>←</span>
            <span>カテゴリー一覧に戻る</span>
          </Link>
        </div>
      </div>
    </main>
  );
}