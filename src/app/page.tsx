import CategoryCard from '@/components/CategoryCard';
import HeroSection from '@/components/HeroSection';
import { Category } from '@/types/database';

// Mock data for categories - Traditional Japanese crafts
const mockCategories: Category[] = [
  {
    id: '1',
    slug: 'imabari-towel',
    name: '今治タオル',
    description: '最高級の吸水性と肌触り',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    slug: 'magewappa',
    name: '曲げわっぱ',
    description: '秋田杉の美しい弁当箱',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    slug: 'matcha',
    name: '抹茶',
    description: '京都宇治の本格抹茶',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    slug: 'ceramic',
    name: '陶器',
    description: '美濃焼の器コレクション',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    slug: 'furoshiki',
    name: '風呂敷',
    description: '京都の伝統的な包み布',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    slug: 'chopsticks',
    name: '箸',
    description: '若狭塗の高級箸',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default async function Home() {
  const categories = mockCategories;

  return (
    <main>
      <HeroSection />
      
      {/* Categories Section - Oitomi style grid */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Grid with consistent 15px gap like Oitomi */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[15px]">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}