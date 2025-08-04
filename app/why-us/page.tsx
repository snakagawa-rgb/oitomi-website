import Link from 'next/link';

export default function WhyUsPage() {
  const comparisons = [
    {
      feature: 'Discovery',
      standard: 'Endless catalogs, you search alone.',
      ours: 'Curated concepts, we propose for you.',
    },
    {
      feature: 'Negotiation',
      standard: 'You handle it all (language, culture barriers).',
      ours: 'We support you with bilingual facilitation.',
    },
    {
      feature: 'Risk',
      standard: 'Quality and reliability are your risks.',
      ours: 'We connect you with pre-vetted, trusted artisans.',
    },
    {
      feature: 'Relationship',
      standard: 'Transactional.',
      ours: 'A true partnership.',
    },
  ];

  const solutions = [
    {
      title: 'Discover Hidden Gems',
      subtitle: 'Access Japan\'s Best-Kept Secrets',
      description: 'We unveil exceptional artisans and products that never appear in standard catalogs—treasures known only to insiders.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      title: 'Stories That Sell',
      subtitle: 'Understand the Soul Behind Each Product',
      description: 'We translate not just language, but culture—helping you grasp the deep narratives that make each piece extraordinary.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: 'Negotiate with Confidence',
      subtitle: 'Find Your Perfect Terms',
      description: 'Our experts facilitate direct negotiations, ensuring optimal pricing, quantities, and conditions that work for both parties.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Save Precious Time',
      subtitle: 'Focus on What Matters',
      description: 'Skip months of research and vetting. We connect you directly with the right partners, pre-screened and ready.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Bridge Every Gap',
      subtitle: 'Seamless Cross-Cultural Communication',
      description: 'Our bilingual team ensures nothing is lost in translation—from technical specs to cultural nuances.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      ),
    },
    {
      title: 'Trust Without Doubt',
      subtitle: 'Pre-Vetted Excellence',
      description: 'Every partner in our network has been personally visited, thoroughly vetted, and consistently monitored for quality.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: 'Perfect Match Guarantee',
      subtitle: 'Aligned Expectations, Every Time',
      description: 'Our deep understanding of both sides ensures realistic expectations and successful, long-term partnerships.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl tracking-wider">OITOMI</Link>
          <div className="hidden md:flex gap-12">
            <Link href="/concepts" className="hover:opacity-70">CONCEPTS</Link>
            <Link href="/why-us" className="hover:opacity-70 font-semibold">WHY US</Link>
            <Link href="/about" className="hover:opacity-70">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-70">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-8">
            Beyond the Platform.<br />
            Your Partner in Japan.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Why partner with us instead of using a standard e-commerce platform?<br />
            Discover the transformative difference our approach makes.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">The Difference Is Clear</h2>
          
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-6">
                <span className="text-sm uppercase tracking-wide opacity-80">Feature</span>
              </div>
              <div className="p-6 border-l border-gray-800">
                <span className="text-sm uppercase tracking-wide opacity-80">Standard B2B E-commerce</span>
              </div>
              <div className="p-6 border-l border-gray-800">
                <span className="text-sm uppercase tracking-wide opacity-80">Our Service</span>
              </div>
            </div>
            
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-gray-200 last:border-b-0">
                <div className="p-6 font-semibold">
                  {item.feature}
                </div>
                <div className="p-6 border-l border-gray-200 text-gray-600">
                  {item.standard}
                </div>
                <div className="p-6 border-l border-gray-200 font-medium">
                  {item.ours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">
            Seven Ways We Solve Your Challenges
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            How we solve your business challenges in sourcing from Japan
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="group">
                <div className="mb-4 text-gray-800 group-hover:text-gray-600 transition-colors">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-1">{solution.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{solution.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-12 opacity-90">
            Let us show you how a true partnership can transform your sourcing experience.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-gray-900 px-8 py-4 text-lg hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </Link>
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