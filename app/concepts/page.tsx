import Link from 'next/link';
import InquiryForm from '../components/InquiryForm';

export default function ConceptsPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl tracking-wider">OITOMI</Link>
          <div className="hidden md:flex gap-12">
            <Link href="/concepts" className="hover:opacity-70 font-semibold">CONCEPTS</Link>
            <Link href="/why-us" className="hover:opacity-70">WHY US</Link>
            <Link href="/about" className="hover:opacity-70">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-70">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="h-[70vh] flex items-center justify-center text-white text-center mt-[73px]"
        style={{ backgroundColor: '#1a1a1a' }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            The Blade Masters of Sakai:<br />
            Six Centuries of Perfection
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Forging Excellence Since the 16th Century
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">The Story</h2>
          
          <div className="space-y-12">
            {/* 産地の物語 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Where Steel Meets Soul</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                In Sakai, a city that has forged Japan's finest blades since the 16th century, the art of knife-making isn't just a trade—it's a sacred inheritance. When samurai swords were outlawed in the Meiji era, master swordsmiths channeled their centuries of knowledge into crafting kitchen knives. Today, 90% of Japan's professional chefs choose Sakai knives, a testament to 600 years of unbroken tradition.
              </p>
              <p className="text-gray-600 italic">
                The legacy of Sakai's blade mastery - where samurai sword techniques evolved into culinary perfection.
              </p>
            </div>

            {/* 製法の物語 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">The Dance of Fire and Steel</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Each knife begins its journey in the hands of three separate masters: the blacksmith who forges, the sharpener who defines, and the handle maker who completes. This division of labor, unique to Sakai, allows each craftsman to achieve a level of specialization impossible elsewhere. The forging alone involves 20 steps—heating to precisely 750°C, hammering with rhythmic precision, cooling in secret solutions passed down through generations. No machines can replicate the subtle adjustments a master's eye makes in reading the color of heated steel.
              </p>
              <p className="text-gray-600 italic">
                Three masters, twenty steps, one perfect blade - the art of specialization perfected over centuries.
              </p>
            </div>

            {/* 素材の物語 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Born from Sacred Steel</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                The steel itself tells a story. Yasuki Hagane—"Yasuki Steel"—is smelted using the ancient tatara method, where iron sand and charcoal burn for 72 hours straight in clay furnaces. This creates a steel so pure, so responsive, that it seems to have a life of its own. Combined with softer iron in a technique called "awase," the blade achieves the impossible: extreme hardness for sharpness, with enough flexibility to prevent chipping. The result is a knife that can slice a tomato paper-thin after months of use, yet strong enough to last generations.
              </p>
              <p className="text-gray-600 italic">
                Ancient tatara steel meets modern needs - where 72-hour furnaces forge blades that last generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Special */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why It's Special</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Unmatched Sharpness</h3>
              <p className="text-gray-700">
                Hardness rating of 62-63 HRC ensures the blade stays sharp 3x longer than European knives. Your customers will experience the joy of effortless cutting that transforms cooking from task to art.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Lifetime Investment</h3>
              <p className="text-gray-700">
                With proper care, these knives outlive their owners. Many in Japan pass them down as family heirlooms—a sustainable choice that resonates with conscious consumers.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Artisan Signature</h3>
              <p className="text-gray-700">
                Each knife bears the craftsman's mark—a personal guarantee of quality. This individual accountability creates an emotional connection no factory knife can match.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Perfect Balance</h3>
              <p className="text-gray-700">
                Weight distribution calculated through centuries of refinement. Professional chefs report 40% less hand fatigue, making long prep sessions a pleasure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Your Market */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">For Your Market</h2>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These knives speak to the growing segment of culinary enthusiasts who view cooking as creative expression, not mere sustenance. They appeal particularly to the "slow food" movement, professional home chefs, and those who appreciate the intersection of functionality and art. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In markets where Japanese cuisine has elevated from trend to mainstay, where customers seek authentic tools for authentic experiences, these knives become not just products but passports to a deeper understanding of Japanese culinary culture. They're perfect for boutique kitchenware stores, high-end department stores, and specialty culinary retailers who curate for discerning customers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Ready to Bring This Legacy to Your Customers?
          </h2>
          <p className="text-lg mb-4 opacity-90 max-w-3xl mx-auto">
            For detailed specifications, pricing structures, and minimum order quantities, inquire below. We'll connect you with the perfect Sakai artisan whose philosophy aligns with your brand values and customer expectations.
          </p>
          <p className="text-lg opacity-80">
            Let us match you with the perfect Sakai artisan whose philosophy aligns with your brand.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <InquiryForm productName="Sakai Kitchen Knives" />
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