'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { trackProductClick } from './lib/gtag';
import HowItWorks from './components/HowItWorks';
import ProductModal from './components/ProductModal';

const slides = [
  { title: 'Mount Fuji', subtitle: 'Sacred Mountain', bg: '#2c3e50', image: '/images/hero/7.jpg' },
  { title: 'Kyoto', subtitle: 'Ancient Capital', bg: '#34495e', image: '/images/hero/8.jpg' },
  { title: 'Japanese Castle', subtitle: 'Historical Heritage', bg: '#1a252f', image: '/images/hero/9.jpg' },
  { title: 'Tokyo', subtitle: 'Modern Metropolis', bg: '#2c3e50', image: '/images/hero/10.jpg' },
];

const categories = [
  { 
    id: 'clothing', 
    name: '衣', 
    englishName: 'Clothing & Textiles',
    products: [
      { id: 'yukata', name: 'Yukata', englishName: 'Traditional Summer Wear', image: '/images/products/4.jpg' },
    ]
  },
  { 
    id: 'food', 
    name: '食', 
    englishName: 'Food & Beverages',
    products: [
      { id: 'udon', name: 'Udon', englishName: 'Premium Noodles', image: '/images/products/1.jpg' },
      { id: 'matcha-latte', name: 'Matcha Latte', englishName: 'Green Tea Latte', image: '/images/products/2.jpg' },
      { id: 'bento', name: 'Bento Box', englishName: 'Lunch Box', image: '/images/products/3.jpg' },
    ]
  },
  { 
    id: 'living', 
    name: '住', 
    englishName: 'Living & Lifestyle',
    products: [
      { id: 'knives', name: 'Kitchen Knives', englishName: 'Professional Cutlery', image: '/images/products/5.jpg' },
      { id: 'skincare', name: 'Skincare', englishName: 'Natural Beauty', image: '/images/products/6.jpg' },
    ]
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{id: string; name: string} | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('clothing'); // 最初から衣を選択
  const [showHeroText, setShowHeroText] = useState(false);
  const [showCategories, setShowCategories] = useState(true); // 最初から表示

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Trigger hero text animation after a short delay
    const heroTimer = setTimeout(() => {
      setShowHeroText(true);
    }, 500);
    
    // Categories are now shown immediately
    // const categoriesTimer = setTimeout(() => {
    //   setShowCategories(true);
    // }, 6000);
    
    return () => {
      clearTimeout(heroTimer);
      // clearTimeout(categoriesTimer);
    };
  }, []);

  const handleProductClick = (product: { id: string; name: string; englishName: string; image: string }) => {
    trackProductClick(product.id, product.name);
    setSelectedProduct({ id: product.id, name: product.name });
    setModalOpen(true);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl text-white tracking-wider">OITOMI</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            <Link href="/concepts" className="text-white hover:opacity-70">CONCEPTS</Link>
            <Link href="/why-us" className="text-white hover:opacity-70">WHY US</Link>
            <Link href="/about" className="text-white hover:opacity-70">ABOUT</Link>
            <Link href="/contact" className="text-white hover:opacity-70">CONTACT</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
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
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-6 py-4 space-y-6">
              <Link href="/concepts" className="block text-white hover:opacity-70" onClick={() => setMobileMenuOpen(false)}>CONCEPTS</Link>
              <Link href="/why-us" className="block text-white hover:opacity-70" onClick={() => setMobileMenuOpen(false)}>WHY US</Link>
              <Link href="/about" className="block text-white hover:opacity-70" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
              <Link href="/contact" className="block text-white hover:opacity-70" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: index === currentSlide ? 1 : 0,
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: slide.bg,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dynamic overlay that fades from dark to light */}
              <div 
                className="absolute inset-0 transition-all duration-3000"
                style={{
                  background: showHeroText ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,1)',
                  transition: 'background 4s ease-out 3s'
                }}
              />
            </div>
            
          </div>
        ))}
        
        {/* Fixed Content - Always visible */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10 px-4">
          <div className="w-full">
            {/* 日本品質 - written character by character */}
            <div className="mb-8 relative flex justify-center items-center">
              <span 
                className="inline-block"
                style={{ 
                  fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho ProN", serif',
                  fontSize: 'clamp(6rem, 20vw, 16rem)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
                  opacity: showHeroText ? 1 : 0,
                  transform: showHeroText ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) 0.5s'
                }}
              >
                日
              </span>
              <span 
                className="inline-block"
                style={{ 
                  fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho ProN", serif',
                  fontSize: 'clamp(6rem, 20vw, 16rem)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
                  opacity: showHeroText ? 1 : 0,
                  transform: showHeroText ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) 1.5s'
                }}
              >
                本
              </span>
              <span 
                className="inline-block"
                style={{ 
                  fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho ProN", serif',
                  fontSize: 'clamp(6rem, 20vw, 16rem)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
                  opacity: showHeroText ? 1 : 0,
                  transform: showHeroText ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) 2.5s'
                }}
              >
                品
              </span>
              <span 
                className="inline-block"
                style={{ 
                  fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho ProN", serif',
                  fontSize: 'clamp(6rem, 20vw, 16rem)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
                  opacity: showHeroText ? 1 : 0,
                  transform: showHeroText ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) 3.5s'
                }}
              >
                質
              </span>
            </div>
            
            {/* Made in Japan */}
            <p 
              className="text-sm md:text-base uppercase tracking-widest"
              style={{
                opacity: showHeroText ? 0.7 : 0,
                transform: showHeroText ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 1s ease-out 5s',
                letterSpacing: '0.3em'
              }}
            >
              MADE IN JAPAN
            </p>
            
            <p 
              className="text-base md:text-lg mt-12 max-w-2xl mx-auto"
              style={{
                opacity: showHeroText ? 0.8 : 0,
                transform: showHeroText ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-out 5.5s',
                color: '#ffffff'
              }}
            >
              We connect discerning global buyers with Japan's finest artisans,<br />
              serving as your trusted sourcing partner in Japan
            </p>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Categories Grid */}
          <div className="flex justify-center items-center gap-20 mb-16">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`group relative transition-all duration-300 ${selectedCategory === category.id ? 'scale-110' : 'hover:scale-105'}`}
              >
                <div 
                  className="relative font-bold transition-all duration-300"
                  style={{ 
                    fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho ProN", serif',
                    fontSize: 'clamp(5rem, 12vw, 10rem)',
                    fontWeight: 700,
                    textShadow: selectedCategory === category.id 
                      ? '3px 3px 10px rgba(0,0,0,0.3)' 
                      : '2px 2px 8px rgba(0,0,0,0.2)',
                    WebkitTextStroke: selectedCategory === category.id ? '3px #000' : '2px rgba(0,0,0,0.8)',
                    color: selectedCategory === category.id ? '#fff' : 'transparent',
                    paintOrder: 'stroke fill',
                    clipPath: showCategories 
                      ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                      : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    transition: `clip-path ${1.5 + index * 0.4}s cubic-bezier(0.4, 0.0, 0.2, 1)`,
                  }}
                >
                  {category.name}
                </div>
                <p className="text-sm text-gray-600 text-center mt-6 font-medium">{category.englishName}</p>
              </button>
            ))}
          </div>
          {/* SVG Filter for categories */}
          <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <filter id="brush2">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
          </svg>

          {/* Products Grid */}
          {selectedCategory && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-fadeIn">
              {categories
                .find(cat => cat.id === selectedCategory)
                ?.products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="group block w-full text-left"
                  >
                    {/* Image Container */}
                    <div className="aspect-square relative overflow-hidden mb-6 bg-gray-100">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"
                        style={{
                          backgroundImage: `url(${product.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-serif">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.englishName}</p>
                    </div>
                  </button>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <h3 className="text-2xl mb-6">OITOMI</h3>
        <p className="text-sm opacity-60">© 2024 OITOMI. All rights reserved.</p>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          productName={selectedProduct.name}
          productId={selectedProduct.id}
        />
      )}
    </>
  );
}