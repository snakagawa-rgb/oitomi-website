import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl tracking-wider">OITOMI</Link>
          <div className="hidden md:flex gap-12">
            <Link href="/concepts" className="hover:opacity-70">CONCEPTS</Link>
            <Link href="/why-us" className="hover:opacity-70">WHY US</Link>
            <Link href="/about" className="hover:opacity-70 font-semibold">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-70">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-8">About Us</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Bridging Worlds Through Trust and Excellence
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">Our Mission</h2>
          <div className="text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light">
              To build bridges between Japan's extraordinary makers and the world,<br />
              enriching both through meaningful partnerships<br />
              that honor tradition while embracing innovation.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Connecting Japan's extraordinary makers with the world,<br />
              honoring tradition while embracing innovation,<br />
              enriching both through meaningful partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Profile */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Founder's Profile</h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Photo Column */}
            <div className="md:col-span-1">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4">
                {/* [ここに中川颯太氏の顔写真を配置] */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-sm">Photo</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Sota Nakagawa</h3>
                <p className="text-gray-600">Founder & CEO</p>
                <p className="text-sm text-gray-500 mt-1">OITOMI Inc.</p>
              </div>
            </div>
            
            {/* Profile Text Column */}
            <div className="md:col-span-2 space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg leading-relaxed">
                  "Growing up in Japan, I was surrounded by the dedication of craftspeople who pour their hearts into creating something truly special. Yet, I noticed many of these exceptional makers remained unknown beyond our borders—not because their work lacked quality, but because the bridges to connect them with the world simply didn't exist.
                </p>
                
                <p className="text-lg leading-relaxed">
                  That realization sparked OITOMI. I believe that when we connect passionate makers with equally passionate partners abroad, magic happens. It's not just about transactions—it's about creating relationships where both sides grow, learn, and prosper together.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My vision is simple yet profound: to become the trusted bridge that allows Japan's finest artisans to share their craft with the world, while helping international partners discover products that tell authentic stories. Every connection we facilitate is a step toward a future where cultural boundaries become opportunities for mutual enrichment.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At OITOMI, we don't just introduce products—we introduce people, stories, and possibilities. Because I believe that in our increasingly connected world, the most valuable currency isn't just quality or price—it's trust, understanding, and shared passion for excellence."
                </p>
              </div>
              
              <div className="border-l-4 border-gray-300 pl-6 mt-8">
                <p className="text-gray-700 italic">
                  "Deep respect for Japanese craftsmanship and a passion to become a bridge with the world—that is our driving force."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">Building relationships on a foundation of transparency and reliability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-gray-600">Growing together through meaningful, long-term collaborations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Bridge</h3>
              <p className="text-gray-600">Connecting worlds through understanding and respect</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Let's Build Something Together
          </h2>
          <p className="text-lg mb-12 opacity-90">
            Join us in creating meaningful connections between Japan and the world.
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