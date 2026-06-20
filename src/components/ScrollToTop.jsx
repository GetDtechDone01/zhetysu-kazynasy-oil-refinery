/**
 * ScrollToTop.jsx
 * Floating button (bottom-left) that smoothly scrolls the page to the top.
 * Only renders when the user has scrolled more than 300px.
 */

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 left-8 z-50 w-11 h-11 bg-[#a93134] hover:bg-[#c0404a] text-white rounded-full shadow-lg shadow-[#a93134]/40 flex items-center justify-center transition-all duration-200 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}