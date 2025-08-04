export default function Loading() {
  return (
    <main className="flex-1 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb skeleton */}
        <div className="mb-8">
          <div className="h-4 w-48 bg-charcoal/10 rounded animate-pulse"></div>
        </div>

        {/* Category Header skeleton */}
        <section className="mb-12">
          <div className="h-12 w-64 bg-charcoal/10 rounded mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-charcoal/10 rounded animate-pulse"></div>
        </section>

        {/* Products Grid skeleton */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-charcoal/10 rounded-lg overflow-hidden">
                <div className="h-64 bg-charcoal/10 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-charcoal/10 rounded mb-3 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-charcoal/10 rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-charcoal/10 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}