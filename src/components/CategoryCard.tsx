'use client';

import { Category } from '@/types/database';
import Link from 'next/link';
import { logCategoryClick } from '@/lib/gtag';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const handleClick = () => {
    logCategoryClick(category.id, category.slug, category.name);
  };

  // Product-specific visual styles
  const productStyles = {
    'imabari-towel': {
      background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #90CAF9 100%)',
      pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
    },
    'magewappa': {
      background: 'linear-gradient(135deg, #8D6E63 0%, #A1887F 50%, #BCAAA4 100%)',
      pattern: 'repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(0,0,0,.05) 5px, rgba(0,0,0,.05) 10px)',
    },
    'matcha': {
      background: 'linear-gradient(135deg, #66BB6A 0%, #4CAF50 50%, #388E3C 100%)',
      pattern: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,.1) 0%, transparent 50%)',
    },
    'ceramic': {
      background: 'linear-gradient(135deg, #F5F5F5 0%, #E0E0E0 50%, #BDBDBD 100%)',
      pattern: 'repeating-radial-gradient(circle at 50% 50%, transparent, transparent 10px, rgba(0,0,0,.03) 10px, rgba(0,0,0,.03) 20px)',
    },
    'furoshiki': {
      background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 50%, #AD1457 100%)',
      pattern: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,.1) 20px, rgba(255,255,255,.1) 40px)',
    },
    'chopsticks': {
      background: 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #795548 100%)',
      pattern: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.05) 2px, rgba(255,255,255,.05) 4px)',
    },
  };

  const style = productStyles[category.slug as keyof typeof productStyles] || productStyles['ceramic'];

  return (
    <Link 
      href={`/product/${category.slug}`}
      onClick={handleClick}
      className="group block cursor-pointer"
    >
      {/* Square image container - Oitomi style */}
      <div className="aspect-square relative overflow-hidden mb-3">
        {/* Background gradient */}
        <div 
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{ background: style.background }}
        />
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: style.pattern }}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Product title - minimal text below image */}
      <div className="text-center">
        <h3 className="text-sm font-serif text-black tracking-wider mb-1">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}