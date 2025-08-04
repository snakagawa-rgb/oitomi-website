'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <h1 className={`text-2xl font-serif font-light tracking-wider transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}>
              CONCEPT
            </h1>
          </Link>
          
          <ul className="hidden md:flex items-center gap-12">
            <li>
              <Link 
                href="/collection" 
                className={`text-sm tracking-wider transition-colors hover:opacity-70 ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                COLLECTION
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`text-sm tracking-wider transition-colors hover:opacity-70 ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`text-sm tracking-wider transition-colors hover:opacity-70 ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${scrolled ? 'text-charcoal' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}