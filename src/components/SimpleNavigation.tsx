export default function SimpleNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-serif tracking-wider text-white" style={{ maxWidth: '115px' }}>
            OITOMI
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white hover:text-gray-300 transition-colors text-sm tracking-wider">
              HOME
            </a>
            <a href="/collections" className="text-white hover:text-gray-300 transition-colors text-sm tracking-wider">
              COLLECTIONS
            </a>
            <a href="/about" className="text-white hover:text-gray-300 transition-colors text-sm tracking-wider">
              ABOUT
            </a>
            <a href="/contact" className="text-white hover:text-gray-300 transition-colors text-sm tracking-wider">
              CONTACT
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden flex flex-col space-y-1">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}