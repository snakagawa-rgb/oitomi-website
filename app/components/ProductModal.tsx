'use client';

import { useState, useEffect } from 'react';
import InquiryForm from './InquiryForm';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productId: string;
}

export default function ProductModal({ isOpen, onClose, productName, productId }: ProductModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Concept Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-3">
              Timeless Excellence from Japan's Artisan Hearts
            </h2>
            <p className="text-lg text-gray-600">
              日本の職人魂が生む、時を超えた逸品
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-12 space-y-8">
            <h3 className="text-xl font-semibold text-center mb-8">The Core Values</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Origin */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h4 className="font-semibold mb-2">Heritage Districts</h4>
                <p className="text-sm text-gray-600">
                  Centuries-old craft regions where tradition shapes innovation.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  伝統が革新を形作る、何世紀もの歴史を持つ工芸地域。
                </p>
              </div>

              {/* Craft */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">✋</span>
                </div>
                <h4 className="font-semibold mb-2">Handmade Mastery</h4>
                <p className="text-sm text-gray-600">
                  Each piece personally crafted by certified master artisans.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  認定された職人が一つ一つ手作りする逸品。
                </p>
              </div>

              {/* Benefit */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-semibold mb-2">Premium Positioning</h4>
                <p className="text-sm text-gray-600">
                  Elevate your brand with authentic Japanese craftsmanship stories.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  本物の日本の職人技でブランド価値を高める。
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-8">
            <p className="text-lg font-medium">
              Intrigued? Let's explore how this fits your market.
            </p>
            <p className="text-gray-600 mt-1">
              興味をお持ちですか？貴社の市場にどう適合するか、一緒に探りましょう。
            </p>
          </div>

          {/* Inquiry Form */}
          <div className="border-t pt-8">
            <InquiryForm productName={productName} />
          </div>
        </div>
      </div>
    </div>
  );
}