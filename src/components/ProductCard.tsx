'use client';

import { Product } from '@/types/database';
import Image from 'next/image';
import Link from 'next/link';
import { logProductCardClick } from '@/lib/gtag';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleClick = () => {
    logProductCardClick(product.id, product.slug, product.name, product.category_id);
  };

  return (
    <Link 
      href={`/product/${product.id}`}
      onClick={handleClick}
      className="group cursor-pointer bg-white border border-charcoal/10 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 block"
    >
      <div className="aspect-w-4 aspect-h-3 relative h-64 bg-gray-50">
        {product.hero_img ? (
          <Image
            src={product.hero_img}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-charcoal/5">
            <span className="text-5xl text-charcoal/20 font-serif">
              {product.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-crimson transition-colors">
          {product.name}
        </h3>
        {product.short_copy && (
          <p className="text-sm text-charcoal/70 line-clamp-3 leading-relaxed">
            {product.short_copy}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-crimson text-sm font-medium group-hover:underline">
            詳細を見る →
          </span>
          {product.spec_pdf_url && (
            <span className="text-xs text-charcoal/50">
              仕様書あり
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}