import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ExchangeTicker from '../components/ExchangeTicker';

const HERO_IMG = "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/aff65ea81_generated_a5caabec.png";

const PRODUCTS = [
  {
    name: "EN590 ULSD",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/00ea6e7a8_generated_d79b8b71.png",
    available: true,
    desc: "Ultra Low Sulfur Diesel conforming to EN590 European Standard. Sulfur content max 10 ppm. Suitable for modern diesel engines and heavy machinery. Used in transportation, construction, and industrial applications.",
  },
  {
    name: "D2 Diesel Gas Oil",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/88aadeb93_generated_63c131f0.png",
    available: true,
    desc: "D2 Diesel Gas Oil is a refined petroleum distillate suitable for diesel engines. Widely used in industrial machinery, ships, and power generators. Available for bulk purchase.",
  },
  {
    name: "Urea Fertiliser",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/531071dd8_generated_4d97ac95.png",
    available: true,
    desc: "High-purity agricultural-grade Urea (46% nitrogen) in granular and prilled forms. Ideal for crop farming, horticulture, and large-scale agricultural applications throughout Central Asia.",
  },
  {
    name: "D6 Virgin Fuel Oil",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/454adcc87_generated_ea7a40ee.png",
    available: true,
    desc: "D6 Virgin Fuel Oil is a type of residual fuel primarily used for power plants, industrial furnaces, and large marine vessels. High viscosity, cost-effective energy source.",
  },
  {
    name: "Liquefied Petroleum Gas (LPG)",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/9f6d2ca02_generated_de99eb1f.png",
    available: true,
    desc: "LPG includes propane and butane, used widely for heating, cooking, and as vehicle fuel. Our LPG meets international purity and pressure standards for safe commercial distribution.",
  },
  {
    name: "Kazakhstan Crude Oil (KEBCO)",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/513451350_generated_e45b2e8b.png",
    available: true,
    desc: "Kazakhstan Export Blend Crude Oil (KEBCO) is a premium crude blend produced and exported from Kazakhstan. Suitable for international refineries seeking high-quality crude for processing.",
  },
  {
    name: "Fuel Oil",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/454adcc87_generated_ea7a40ee.png",
    available: true,
    desc: "High-quality fuel oil produced from our refinery operations. Used in power generation, marine propulsion, and industrial heating applications. Available in various grades.",
  },
  {
    name: "CST-180",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/9a2b911a6_generated_442ddfb1.png",
    available: true,
    desc: "CST-180 is a heavy fuel oil with a viscosity of 180 centistokes. Ideal for large marine engines, industrial boilers, and power plants requiring heavy fuel specifications.",
  },
  {
    name: "Bitumen 60/70 & 80/100",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/9a2b911a6_generated_442ddfb1.png",
    available: true,
    desc: "Penetration grade bitumen used in road construction and waterproofing. Grades 60/70 and 80/100 are available, meeting all required asphalt specifications for infrastructure projects.",
  },
  {
    name: "Jet A1 Fuel",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/42ef3e544_generated_425e48fe.png",
    available: true,
    desc: "Jet A-1 is a kerosene-type aviation turbine fuel meeting international specification DEF STAN 91-091. Suitable for all commercial jet aircraft and transport operations globally.",
  },
  {
    name: "Aviation Kerosene (JP54)",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/42ef3e544_generated_425e48fe.png",
    available: true,
    desc: "JP54 Aviation Kerosene is a high-grade fuel used primarily in military and commercial aircraft. Contains a higher flash point and energy density, meeting NATO and FAA standards.",
  },
];

const SERVICES = [
  {
    title: "Drilling Services",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/f77f8e8b3_generated_35435b94.png",
    desc: "Advanced drilling technologies for oil and gas wells construction. We provide directional, horizontal, and vertical drilling operations with modern equipment and highly skilled crews.",
  },
  {
    title: "Refinery Operations",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/aff65ea81_generated_a5caabec.png",
    desc: "Full-cycle refinery services from crude oil processing to finished product delivery. Our refinery operations meet the highest international standards for quality and environmental compliance.",
  },
  {
    title: "Pipeline Construction",
    img: "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/cefd6eb9f_generated_4a200000.png",
    desc: "Design, construction, and maintenance of oil and gas pipeline infrastructure. We deliver robust pipeline solutions that meet international safety and environmental standards.",
  },
];

export default function Service() {
  return (
    <div className="min-h-screen bg-[#181418] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Refinery" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181418]/70 via-[#181418]/60 to-[#181418]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#a93134]" />
            <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">What We Offer</span>
            <div className="w-8 h-px bg-[#a93134]" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black font-['Playfair_Display'] mb-6 leading-tight">
            Our Products & <span className="text-[#a93134]">Services</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
            Premium quality petroleum products and comprehensive oil field services. All products are available in stock for immediate order and delivery.
          </p>
        </div>
      </section>

      <ExchangeTicker />

      {/* PRODUCTS GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-['Playfair_Display'] mb-3">
              Petroleum <span className="text-[#a93134]">Products Portfolio</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">All products available in stock. Contact us for pricing, volume, and delivery terms.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="group bg-[#0f0d0f] rounded-xl border border-[#4a444d]/30 hover:border-[#a93134]/40 transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0f] to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#a93134]/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    In Stock
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-sm mb-2">{p.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{p.desc}</p>
                  <Link to="/request-service" className="mt-3 flex items-center gap-1 text-[#a93134] text-xs font-medium hover:gap-2 transition-all">
                    Request Supply <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL SERVICES */}
      <section className="py-20 bg-[#0f0d0f] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#a93134]" />
              <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Our Services</span>
              <div className="w-8 h-px bg-[#a93134]" />
            </div>
            <h2 className="text-3xl font-black font-['Playfair_Display'] mb-3">
              Comprehensive <span className="text-[#a93134]">Energy Solutions</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">From drilling to refinery operations and pipeline construction, we deliver end-to-end petroleum services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="group rounded-xl overflow-hidden border border-[#4a444d]/30 hover:border-[#a93134]/40 transition-all duration-300 bg-[#181418]">
                <div className="aspect-video relative overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181418] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  <Link to="/request-service" className="mt-4 inline-flex items-center gap-1 text-[#a93134] text-sm font-medium hover:gap-2 transition-all">
                    Request This Service <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black font-['Playfair_Display'] mb-5">
            Need a <span className="text-[#a93134]">Custom Solution?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            Fill in our service request form and our team will contact you with tailored options for your specific petroleum and energy needs.
          </p>
          <Link to="/request-service" className="inline-flex items-center gap-2 px-8 py-4 bg-[#a93134] hover:bg-[#c0404a] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#a93134]/30">
            Request Our Service →
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}