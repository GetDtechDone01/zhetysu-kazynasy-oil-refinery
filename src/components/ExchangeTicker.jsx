/**
 * ExchangeTicker.jsx
 * Horizontally auto-scrolling price ticker banner.
 *
 * 100% static — no API calls, no credits consumed.
 * Prices are reference/indicative values defined in lib/constants.js.
 * The list is duplicated to create a seamless infinite CSS animation loop.
 * Scrolling pauses on mouse hover for readability.
 */

import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TICKER_ITEMS } from '../lib/constants';

export default function ExchangeTicker() {
  const [paused, setPaused] = useState(false);

  // Duplicate the array so the CSS animation loops seamlessly
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="bg-[#0f0d0f] border-y border-[#a93134]/20 overflow-hidden py-2.5 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Scrolling track */}
      <div
        className="flex whitespace-nowrap"
        style={{ animation: paused ? 'none' : 'ticker-scroll 40s linear infinite' }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-xs shrink-0">
            <span className="text-gray-500 font-medium">{item.label}</span>
            <span className="text-white font-bold">{item.price}</span>
            <span className="text-gray-600 text-[10px]">{item.unit}</span>
            <span className={`flex items-center gap-0.5 font-semibold ${item.up ? 'text-green-400' : 'text-red-400'}`}>
              {item.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
              {item.change}
            </span>
            <span className="text-[#a93134]/40 ml-4">|</span>
          </span>
        ))}
      </div>

      {/* Keyframe defined inline to avoid a global CSS dependency */}
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}