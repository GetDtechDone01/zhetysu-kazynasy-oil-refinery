import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/75616e06b_generated_a1354d0d.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/service', label: 'Service' },
    { path: '/request-service', label: 'Request Service' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-[#181418]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#a93134]/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#a93134]/60 group-hover:border-[#a93134] transition-colors flex-shrink-0">
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xs sm:text-sm leading-tight tracking-wide font-['Playfair_Display']">
                LLP "ZHETYSU KAZYNASY"
              </span>
              <span className="text-[#a93134] font-semibold text-[10px] sm:text-xs tracking-widest uppercase">
                OIL REFINERY
              </span>
              <span className="text-gray-400 text-[9px] tracking-wider">BIN: 050740001488</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 relative z-50">
            {links.map(({ path, label }) =>
              label === 'Request Service' ? (
                <Link
                  key={path}
                  to={path}
                  className="ml-4 px-5 py-2 bg-[#a93134] hover:bg-[#c0404a] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#a93134]/30"
                >
                  {label}
                </Link>
              ) : (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full relative ${
                    isActive(path)
                      ? 'text-[#a93134]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#a93134] rounded-full" />
                  )}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#181418]/98 border-t border-[#a93134]/20 py-4 relative z-50">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-6 py-3 text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-[#a93134] bg-[#a93134]/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}