import { supabase } from '@/lib/supabase';
import { Category, Product } from '@/types/database';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

async function getCategory(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', categoryId)
    .order('name');

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data || [];
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = await getCategory(params.slug);
  
  if (!category) {
    return {
      title: 'カテゴリーが見つかりません',
    };
  }

  return {
    title: `${category.name} | Concept Site`,
    description: category.description || `${category.name}の製品一覧`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategory(params.slug);
  
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.id);

  return (
    <main className="flex-1 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-charcoal/60">
            <li>
              <Link href="/" className="hover:text-crimson transition-colors">
                ホーム
              </Link>
            </li>
            <li>/</li>
            <li className="text-charcoal font-medium">{category.name}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-charcoal mb-4">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-lg text-charcoal/80 max-w-3xl">
              {category.description}
            </p>
          )}
        </section>

        {/* Products Grid */}
        <section>
          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-charcoal/60 mb-4">
                このカテゴリーには製品がありません。
              </p>
              <Link 
                href="/" 
                className="text-crimson hover:text-crimson/80 transition-colors font-medium"
              >
                ← カテゴリー一覧に戻る
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* Results count */}
              <div className="mt-12 text-center text-sm text-charcoal/60">
                {products.length}件の製品
              </div>
            </>
          )}
        </section>

        {/* CTA Section */}
        <section className="mt-24 text-center">
          <div className="inline-block">
            <div className="border-t border-charcoal/20 pt-8">
              <p className="text-sm text-charcoal/60 mb-4">
                製品についてのお問い合わせ
              </p>
              <button className="px-8 py-3 bg-crimson text-white rounded hover:bg-crimson/90 transition-colors">
                お問い合わせフォーム
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}