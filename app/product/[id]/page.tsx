'use client';

import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import { useState } from 'react';

const products = {
  'udon': {
    name: 'Premium Udon',
    englishName: 'Sanuki Style Noodles',
    description: 'Authentic Japanese Noodles',
    price: '$28.00〜',
    detail: 'Traditional Sanuki udon from Kagawa Prefecture. Known for its perfect chewiness and smooth texture, crafted to bring out the full flavor of premium wheat.',
    features: [
      'Selected domestic wheat',
      'Traditional hand-made process',
      'No preservatives',
      'Gift set available'
    ],
    sizes: ['2 servings', '4 servings', '6 servings', 'Gift Set'],
    bg: '#2c3e50',
  },
  'matcha-latte': {
    name: 'Premium Matcha Latte',
    englishName: 'Uji Green Tea Latte',
    description: 'Luxury Green Tea Experience',
    price: '$35.00〜',
    detail: 'Premium latte made with the finest matcha from Uji, Kyoto. Features a creamy, rich flavor profile that represents the pinnacle of Japanese tea culture.',
    features: [
      'First harvest Uji tea',
      'Organic certified',
      'Low caffeine',
      'Hot & iced options'
    ],
    sizes: ['10 packets', '20 packets', '30 packets', 'Gift Box'],
    bg: '#27ae60',
  },
  'bento': {
    name: 'Artisan Bento Box',
    englishName: 'Traditional Lunch Box',
    description: 'Japanese Craftsmanship',
    price: '$60.00〜',
    detail: 'Traditional Japanese bento culture meets modern design. Beautiful craftsmanship combined with practical functionality for the contemporary lifestyle.',
    features: [
      'Natural materials',
      'Leak-proof design',
      'Microwave safe',
      'Dishwasher safe'
    ],
    sizes: ['Single tier', 'Double tier', 'Triple tier', 'Family Set'],
    bg: '#34495e',
  },
  'yukata': {
    name: 'Designer Yukata',
    englishName: 'Summer Kimono',
    description: 'Modern Traditional Wear',
    price: '$150.00〜',
    detail: 'Where tradition meets modern design. Comfortable wear and beautiful patterns create an exceptional summer experience with Japanese elegance.',
    features: [
      '100% premium cotton',
      'Traditional dyeing techniques',
      'Custom sizing available',
      'Dressing guide included'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    bg: '#8e44ad',
  },
  'knives': {
    name: 'Artisan Kitchen Knives',
    englishName: 'Professional Japanese Cutlery',
    description: 'Handcrafted Excellence',
    price: '$120.00〜',
    detail: 'Authentic knives from Japan\'s renowned blade-making regions. Exceptional sharpness and beautiful finish that represents centuries of craftsmanship.',
    features: [
      'Premium steel materials',
      'Hand-forged by artisans',
      'Sharpening service included',
      'Professional case included'
    ],
    sizes: ['Santoku', 'Gyuto', 'Deba', 'Knife Set'],
    bg: '#7f8c8d',
  },
  'skincare': {
    name: 'Botanical Skincare',
    englishName: 'Japanese Herbal Beauty',
    description: 'Natural Beauty Solutions',
    price: '$45.00〜',
    detail: 'Skincare infused with traditional Japanese botanical ingredients. Natural formulations gentle on skin, rooted in centuries of beauty wisdom.',
    features: [
      'Japanese botanical extracts',
      'Paraben-free',
      'Sensitive skin friendly',
      'Eco-friendly packaging'
    ],
    sizes: ['Trial Set', 'Basic Set', 'Full Set', 'Gift Set'],
    bg: '#e74c3c',
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const product = products[params.id as keyof typeof products];
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl tracking-wider">OITOMI</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            <Link href="/concepts" className="hover:opacity-70">CONCEPTS</Link>
            <Link href="/why-us" className="hover:opacity-70">WHY US</Link>
            <Link href="/about" className="hover:opacity-70">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-70">CONTACT</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <Link href="/concepts" className="block hover:opacity-70" onClick={() => setMobileMenuOpen(false)}>CONCEPTS</Link>
              <Link href="/why-us" className="block hover:opacity-70" onClick={() => setMobileMenuOpen(false)}>WHY US</Link>
              <Link href="/about" className="block hover:opacity-70" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
              <Link href="/contact" className="block hover:opacity-70" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        className="h-[60vh] flex items-center justify-center text-white text-center mt-[73px]"
        style={{ backgroundColor: product.bg }}
      >
        <div>
          <h1 className="text-5xl md:text-7xl mb-4">{product.name}</h1>
          <p className="text-xl opacity-90">{product.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* 商品説明 */}
          <div className="md:col-span-2">
            <h2 className="text-3xl mb-6">About This Product</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{product.detail}</p>
            
            {/* 特徴 */}
            <div className="mb-8">
              <h3 className="text-2xl mb-4">Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* サイズ展開 */}
            <div>
              <h3 className="text-2xl mb-4">Available Sizes</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* 購入情報 */}
          <div>
            <div className="sticky top-24">
              <div className="bg-gray-50 p-8 mb-6">
                <h3 className="text-2xl mb-4">Price</h3>
                <p className="text-3xl font-bold">{product.price}</p>
                <p className="text-sm text-gray-600 mt-2">Including tax · Shipping extra</p>
              </div>
              
              <InquiryForm productName={product.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <h3 className="text-2xl mb-6">OITOMI</h3>
        <p className="text-sm opacity-60">© 2024 OITOMI. All rights reserved.</p>
      </footer>
    </>
  );
}