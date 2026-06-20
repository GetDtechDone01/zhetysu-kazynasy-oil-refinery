/**
 * Home.jsx
 * Landing page — hero, stats, exchange ticker, about brief, product portfolio,
 * social responsibility, testimonials, and CTA.
 *
 * 100% static. All data sourced from lib/constants.js.
 */

import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Leaf, Users, Award, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ExchangeTicker from '../components/ExchangeTicker';
import { COMPANY, LOGO_URL, PRODUCTS, STATS } from '../lib/constants';

// ─── Image assets ──────────────────────────────────────────────────────────────
const IMAGES = {
  hero:     'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/17cd08a4f_generated_f2de4b81.png',
  about:    'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/d8d8f719b_generated_e0ee86d0.png',
  safety:   'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/111565cc7_generated_2c47775c.png',
  env:      'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/461e339df_generated_54b6e13e.png',
  team:     'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/e1154171e_generated_bbac9bbd.png',
  drilling: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/f77f8e8b3_generated_35435b94.png',
};

// ─── Social responsibility cards ───────────────────────────────────────────────
const RESPONSIBILITY = [
  {
    icon: Shield,
    title: 'Occupational Safety',
    img: IMAGES.safety,
    desc: 'Zero-incident target through rigorous HSE standards protecting personnel and assets at every stage.',
  },
  {
    icon: Leaf,
    title: 'Environmental Protection',
    img: IMAGES.env,
    desc: 'Committed to ecological compliance and rational use of natural resources across all operations.',
  },
  {
    icon: Users,
    title: 'Community & Social Security',
    img: IMAGES.team,
    desc: 'A socially responsible employer providing training, community support, and employee wellbeing.',
  },
  {
    icon: Award,
    title: 'High Competence',
    img: IMAGES.about,
    desc: 'Continuous professional development and certification ensuring the highest industry standards.',
  },
];

// ─── First 6 products shown on the home page ───────────────────────────────────
const HOME_PRODUCTS = PRODUCTS.slice(0, 6);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#181418] text-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#181418] overflow-hidden">
        <div className="relative min-h-screen flex items-center">

          {/* Background image */}
          <div className="absolute inset-0">
            <img src={IMAGES.hero} alt="Oil Refinery" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#181418] via-[#181418]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181418] via-transparent to-[#181418]/30" />
          </div>

          {/* Hero copy */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#a93134]" />
                <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Oil & Gas Excellence</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 font-['Playfair_Display']">
                Powering <br />
                <span className="text-[#a93134]">Kazakhstan's</span>
                <br />Energy Future
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                {COMPANY.name} is a premier oil refinery operating enterprise producing crude oil
                and associated gas in the Almaty Region of Kazakhstan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/service"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#a93134] hover:bg-[#c0404a] text-white font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#a93134]/30 hover:-translate-y-0.5"
                >
                  Our Services <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-[#a93134]/60 text-white hover:text-[#a93134] font-semibold text-sm rounded-full transition-all duration-200 hover:bg-[#a93134]/10"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-[#4a444d]/30 bg-[#181418]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#4a444d]/30">
              {STATS.map((s) => (
                <div key={s.label} className="py-6 px-4 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#a93134] font-['Playfair_Display']">{s.value}</div>
                  <div className="text-gray-400 text-xs mt-1 tracking-wider uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Exchange Ticker ────────────────────────────────────────────────────── */}
      <ExchangeTicker />

      {/* ── About Brief ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative mt-8 lg:mt-0">
              <img
                src={IMAGES.about}
                alt="About Zhetysu Kazynasy"
                className="w-full rounded-xl object-cover aspect-[4/3] border border-[#4a444d]/30"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#a93134]" />
                <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">About Us</span>
              </div>
              <h2 className="text-4xl font-black mb-6 font-['Playfair_Display'] leading-tight">
                Kazakhstan's Trusted <br />
                <span className="text-[#a93134]">Petroleum Enterprise</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {COMPANY.name} is an operating enterprise dedicated to the production of crude oil
                and associated gas, headquartered in Almaty, Kazakhstan. Under the leadership of{' '}
                <strong className="text-white">{COMPANY.head}</strong>, we uphold the highest
                standards in energy production and petroleum refining.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                With over two decades of operations, we have established ourselves as a dependable partner
                in Kazakhstan's energy sector — delivering quality, reliability, and sustainable practices
                at every step.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'ISO Certified Operations',
                  'Almaty Region Production Hub',
                  'Crude Oil & Associated Gas',
                  'Kazakhstan Republic Compliant',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-[#a93134] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#a93134] hover:bg-[#c0404a] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#a93134]/30"
              >
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Portfolio (first 6 items) ─────────────────────────────────── */}
      <section className="py-24 bg-[#0f0d0f] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#a93134]" />
              <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">What We Offer</span>
              <div className="w-8 h-px bg-[#a93134]" />
            </div>
            <h2 className="text-4xl font-black font-['Playfair_Display'] mb-4">
              Our Products & <span className="text-[#a93134]">Petroleum Portfolio</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Premium quality petroleum products and refined fuels for domestic and international energy markets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="group relative overflow-hidden rounded-xl border border-[#4a444d]/30 hover:border-[#a93134]/50 transition-all duration-300 bg-[#181418]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181418] via-[#181418]/20 to-transparent" />
                </div>
                <div className="p-5 relative">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-sm">{p.name}</h3>
                    <span className="text-[10px] text-[#a93134] bg-[#a93134]/10 px-2 py-0.5 rounded-full font-medium border border-[#a93134]/20">
                      In Stock
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/service"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#a93134]/40 text-[#a93134] hover:bg-[#a93134] hover:text-white font-semibold rounded-full transition-all duration-200"
            >
              View All Products & Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Social Responsibility ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#a93134]" />
              <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Sustainability</span>
              <div className="w-8 h-px bg-[#a93134]" />
            </div>
            <h2 className="text-4xl font-black font-['Playfair_Display'] mb-4">
              Social <span className="text-[#a93134]">Responsibility</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              We operate with a deep commitment to people, planet, and the communities we serve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESPONSIBILITY.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl overflow-hidden border border-[#4a444d]/30 hover:border-[#a93134]/40 transition-all duration-300 bg-[#0f0d0f]"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0f] to-transparent" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 bg-[#a93134]/20 rounded-full flex items-center justify-center border border-[#a93134]/40">
                    <item.icon size={15} className="text-[#a93134]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────────── */}
      <TestimonialsCarousel />

      {/* ── CTA Banner ────────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.drilling} alt="CTA background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181418] via-[#3a1016]/60 to-[#181418]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#a93134]" />
            <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Get Started</span>
            <div className="w-8 h-px bg-[#a93134]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-['Playfair_Display'] mb-6">
            Ready to Partner With <span className="text-[#a93134]">Us?</span>
          </h2>
          <p className="text-gray-300 text-base mb-10 leading-relaxed">
            Whether you need crude oil, refined petroleum products, or expert consultation,
            our team is ready to deliver tailored energy solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-service"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#a93134] hover:bg-[#c0404a] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#a93134]/40 hover:-translate-y-0.5"
            >
              Request Our Service <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-[#a93134]/60 text-white hover:text-[#a93134] font-semibold rounded-full transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}