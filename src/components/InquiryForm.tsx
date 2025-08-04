'use client';

import { useState } from 'react';
import ThankYouModal from './ThankYouModal';
import { useRecaptcha } from '@/hooks/useRecaptcha';
import { logInquirySubmit } from '@/lib/gtag';

interface InquiryFormProps {
  productId: string;
  productName: string;
}

export default function InquiryForm({ productId, productName }: InquiryFormProps) {
  const { executeRecaptcha } = useRecaptcha();
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    country: '',
    qty: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha('inquiry_form');
      
      if (!recaptchaToken) {
        throw new Error('reCAPTCHA verification failed');
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          product_id: productId,
          recaptchaToken
        }),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      // Log analytics event
      logInquirySubmit(productId, productName);

      // Reset form and show success modal
      setFormData({
        email: '',
        company: '',
        country: '',
        qty: '',
        message: ''
      });
      setShowModal(true);
    } catch (err) {
      setError('送信中にエラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            メールアドレス *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-charcoal/20 rounded focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
            会社名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-charcoal/20 rounded focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-colors"
            placeholder="株式会社サンプル"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-charcoal mb-2">
            国
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-charcoal/20 rounded focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-colors"
          >
            <option value="">選択してください</option>
            <option value="JP">日本</option>
            <option value="US">アメリカ</option>
            <option value="CN">中国</option>
            <option value="KR">韓国</option>
            <option value="TW">台湾</option>
            <option value="SG">シンガポール</option>
            <option value="OTHER">その他</option>
          </select>
        </div>

        <div>
          <label htmlFor="qty" className="block text-sm font-medium text-charcoal mb-2">
            数量
          </label>
          <input
            type="text"
            id="qty"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-charcoal/20 rounded focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-colors"
            placeholder="100個"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-charcoal/20 rounded focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-colors resize-none"
            placeholder="ご質問やご要望をお書きください"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-crimson text-white rounded font-medium hover:bg-crimson/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
        </button>
      </form>

      <ThankYouModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}