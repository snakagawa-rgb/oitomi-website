export default function HowItWorks() {
  const steps = [
    {
      number: 'STEP 1',
      title: 'Send Inquiry',
      subtitle: 'お問い合わせ',
      description: 'Browse our curated products and send an inquiry in just 30 seconds',
      image: '/images/11.png',
      alt: 'Send inquiry process'
    },
    {
      number: 'STEP 2',
      title: 'Free Consultation',
      subtitle: '無料相談（オンライン商談）',
      description: 'Meet Japanese manufacturers online with our bilingual support',
      image: '/images/12.png',
      alt: 'Online consultation meeting'
    },
    {
      number: 'STEP 3',
      title: 'Start Trading',
      subtitle: '取引開始',
      description: 'Begin your partnership with full support throughout the process',
      image: '/images/13.png',
      alt: 'Start trading partnership'
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Your journey to Japanese partnerships in 3 simple steps
          </p>
        </div>

        {/* Steps with Images - Same layout as products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Image Container - Smaller, centered image */}
              <div className="aspect-square relative overflow-hidden mb-6 bg-white rounded-lg shadow-md flex items-center justify-center">
                {/* Step Number Badge - Left top position */}
                <div className="absolute top-3 left-3 z-20">
                  <div className="bg-black text-white px-3 py-1 rounded font-bold text-xs shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                {/* Image with natural sizing - smaller and centered */}
                <img 
                  src={step.image} 
                  alt={step.alt}
                  className="max-w-[70%] max-h-[70%] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" fill="#f3f4f6"/>
                        <text x="50%" y="40%" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="14" font-weight="bold">
                          ${step.title}
                        </text>
                        <text x="50%" y="60%" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="10">
                          Image loading...
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-lg" />
              </div>
              
              {/* Text Content - Same styling as products */}
              <div className="text-center space-y-2">
                <h3 className="text-lg font-serif font-bold">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.subtitle}</p>
                <p className="text-sm text-gray-600 mt-3">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-4 text-lg hover:bg-gray-800 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}