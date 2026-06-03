import { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Static reference prices for key petroleum products (USD/barrel or per MT as labeled)
const TICKERS = [
  { label: "Brent Crude", price: "84.20", unit: "$/bbl", change: "+0.45", up: true },
  { label: "WTI Crude", price: "80.15", unit: "$/bbl", change: "+0.38", up: true },
  { label: "KEBCO Crude", price: "83.50", unit: "$/bbl", change: "+0.60", up: true },
  { label: "EN590 ULSD", price: "760.00", unit: "$/MT", change: "-2.10", up: false },
  { label: "D2 Gas Oil", price: "710.00", unit: "$/MT", change: "+1.50", up: true },
  { label: "Jet A1 Fuel", price: "790.00", unit: "$/MT", change: "-0.80", up: false },
  { label: "JP54 Kerosene", price: "785.00", unit: "$/MT", change: "+1.20", up: true },
  { label: "LPG Propane", price: "510.00", unit: "$/MT", change: "-3.00", up: false },
  { label: "Fuel Oil 180", price: "395.00", unit: "$/MT", change: "+0.90", up: true },
  { label: "Urea Fertiliser", price: "295.00", unit: "$/MT", change: "-1.40", up: false },
  { label: "Bitumen 60/70", price: "450.00", unit: "$/MT", change: "+0.00", up: true },
  { label: "USD/KZT", price: "452.30", unit: "KZT", change: "+1.20", up: false },
];

export default function ExchangeTicker() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Duplicate for seamless loop
  const items = [...TICKERS, ...TICKERS];

  return (
    <div
      className="bg-[#0f0d0f] border-y border-[#a93134]/20 overflow-hidden py-2.5 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: paused ? 'none' : 'ticker-scroll 40s linear infinite',
        }}
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
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}