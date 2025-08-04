'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl tracking-wider">OITOMI</Link>
          <div className="hidden md:flex gap-12">
            <Link href="/concepts" className="hover:opacity-70">CONCEPTS</Link>
            <Link href="/why-us" className="hover:opacity-70">WHY US</Link>
            <Link href="/about" className="hover:opacity-70">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-70 font-semibold">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-8">
            Let's Start Something Extraordinary.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            The beginning of an extraordinary journey
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg text-gray-700 mb-12">
            Whether you're curious about our concepts, ready to meet Japanese artisans, 
            or have something specific in mind—we're here to listen and guide you.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="Your Company Name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                placeholder="john@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your interests, your market, or any specific products you're looking for..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-12 py-4 text-lg hover:bg-gray-800 transition-colors"
              >
                Begin Your Journey
              </button>
              
              <p className="mt-6 text-sm text-gray-600">
                We'll respond within 2 business days with insights tailored to your needs.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-8">Other Ways to Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">For General Inquiries</h3>
              <p className="text-gray-600">hello@oitomi.com</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">For Partnership Discussions</h3>
              <p className="text-gray-600">partnerships@oitomi.com</p>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-gray-600">
              Based in Tokyo, Japan<br />
              Serving partners worldwide
            </p>
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