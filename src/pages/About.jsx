import { CheckCircle, Award, MapPin, User, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const HERO_IMG = "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/1c7a0ae49_generated_17757b83.png";
const TEAM_IMG = "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/e1154171e_generated_bbac9bbd.png";
const ABOUT2_IMG = "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/d8d8f719b_generated_e0ee86d0.png";
const SAFETY_IMG = "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/111565cc7_generated_2c47775c.png";

const VALUES = [
  { title: "Integrity", desc: "We operate with complete transparency and honesty in all our business dealings, maintaining the trust of partners, clients, and stakeholders." },
  { title: "Excellence", desc: "Every barrel of crude oil and every refined product we deliver meets the strictest international quality standards." },
  { title: "Safety First", desc: "The health and safety of our employees, contractors, and surrounding communities is our non-negotiable priority." },
  { title: "Sustainability", desc: "We are committed to environmentally responsible operations, minimizing our ecological footprint with every decision we make." },
  { title: "Innovation", desc: "We embrace modern technologies and methodologies in petroleum extraction and refining to maximize efficiency and output." },
  { title: "Community", desc: "As a Kazakhstani enterprise, we invest in local communities, provide employment, and contribute to regional economic growth." },
];

const CERTIFICATIONS = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "Kazakhstan National Standards", "Republic of Kazakhstan Ministry of Energy Compliance"];

export default function About() {
  return (
    <div className="min-h-screen bg-[#181418] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Refinery" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181418]/80 via-[#181418]/60 to-[#181418]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#a93134]" />
            <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">About Us</span>
            <div className="w-8 h-px bg-[#a93134]" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black font-['Playfair_Display'] mb-6 leading-tight">
            Built on <span className="text-[#a93134]">Integrity,</span><br />Driven by <span className="text-[#a93134]">Excellence</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            A Kazakhstani oil refinery enterprise with a legacy of quality, safety, and commitment to the energy future of Central Asia.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#a93134]" />
                <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Our Story</span>
              </div>
              <h2 className="text-3xl font-black font-['Playfair_Display'] mb-6 leading-tight">
                Two Decades of <br /><span className="text-[#a93134]">Petroleum Excellence</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                LLP "Zhetysu Kazynasy" was established as an operating enterprise dedicated to the exploration, 
                extraction, and refining of petroleum resources in the Almaty Region of Kazakhstan. Since our 
                founding, we have grown into one of the region's most respected oil and gas enterprises.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Our operations encompass the full cycle of petroleum production — from crude oil extraction 
                at the wellhead to the delivery of refined petroleum products that meet the highest 
                international standards. We are proud to contribute to Kazakhstan's energy independence 
                and economic prosperity.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Under the guidance of our Head, <strong className="text-white">Zhayshibekov Askar Kanybekovich</strong>, 
                the company has maintained unwavering standards in quality, environmental stewardship, 
                and employee welfare. Our certified processes and rigorous operational protocols set us 
                apart as a leader in Kazakhstan's oil and gas industry.
              </p>
              <div className="space-y-3">
                {["Crude oil and associated gas production in Almaty Region", "Certified to international ISO standards", "Committed to local community development", "Transparent and compliant with Republic of Kazakhstan regulations"].map(item => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={15} className="text-[#a93134] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img src={ABOUT2_IMG} alt="Company" className="rounded-xl border border-[#4a444d]/30 w-full aspect-[4/3] object-cover" />
              <div className="mt-4 bg-[#3a1016] border border-[#a93134]/30 rounded-xl p-5 shadow-xl inline-block">
                <div className="text-3xl font-black text-[#a93134] font-['Playfair_Display']">20+</div>
                <div className="text-gray-300 text-xs mt-1">Years of Operational Excellence in Kazakhstan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="py-20 bg-[#0f0d0f] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#181418] rounded-xl border border-[#4a444d]/30 p-7 hover:border-[#a93134]/30 transition-colors">
              <div className="w-10 h-10 bg-[#a93134]/15 rounded-full flex items-center justify-center mb-5 border border-[#a93134]/30">
                <User size={18} className="text-[#a93134]" />
              </div>
              <h3 className="font-bold text-white mb-2 text-sm tracking-wide uppercase">Head of Enterprise</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Zhayshibekov Askar Kanybekovich</p>
              <p className="text-gray-500 text-xs mt-2">Chief Executive & Director</p>
            </div>
            <div className="bg-[#181418] rounded-xl border border-[#4a444d]/30 p-7 hover:border-[#a93134]/30 transition-colors">
              <div className="w-10 h-10 bg-[#a93134]/15 rounded-full flex items-center justify-center mb-5 border border-[#a93134]/30">
                <MapPin size={18} className="text-[#a93134]" />
              </div>
              <h3 className="font-bold text-white mb-2 text-sm tracking-wide uppercase">Registered Address</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                050012, Almaty, Nursultan Nazarbayev Ave. Furmanova, 177, apt. 7, Almaty District
              </p>
              <p className="text-gray-500 text-xs mt-2">Republic of Kazakhstan</p>
            </div>
            <div className="bg-[#181418] rounded-xl border border-[#4a444d]/30 p-7 hover:border-[#a93134]/30 transition-colors">
              <div className="w-10 h-10 bg-[#a93134]/15 rounded-full flex items-center justify-center mb-5 border border-[#a93134]/30">
                <Building size={18} className="text-[#a93134]" />
              </div>
              <h3 className="font-bold text-white mb-2 text-sm tracking-wide uppercase">Registration Details</h3>
              <p className="text-gray-400 text-sm leading-relaxed">BIN: 050740001488</p>
              <p className="text-gray-500 text-xs mt-2">OKED: Crude oil and associated gas production</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#a93134]" />
              <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Core Values</span>
              <div className="w-8 h-px bg-[#a93134]" />
            </div>
            <h2 className="text-4xl font-black font-['Playfair_Display']">
              What <span className="text-[#a93134]">Defines Us</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className="bg-[#0f0d0f] rounded-xl border border-[#4a444d]/30 p-6 hover:border-[#a93134]/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#a93134]/40 text-5xl font-black font-['Playfair_Display'] leading-none">{String(i+1).padStart(2,'0')}</span>
                  <h3 className="font-bold text-white">{v.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-[#0f0d0f] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#a93134]" />
                <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Certifications & Compliance</span>
              </div>
              <h2 className="text-3xl font-black font-['Playfair_Display'] mb-6">
                Internationally Certified, <br /><span className="text-[#a93134]">Locally Compliant</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our operations are fully certified and compliant with both international quality standards 
                and the regulatory requirements of the Republic of Kazakhstan, ensuring our clients receive 
                only the best in quality assurance and operational safety.
              </p>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map(cert => (
                  <div key={cert} className="flex items-center gap-2 bg-[#181418] border border-[#4a444d]/40 rounded-full px-4 py-2">
                    <Award size={12} className="text-[#a93134]" />
                    <span className="text-gray-300 text-xs font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={SAFETY_IMG} alt="Safety" className="w-full rounded-xl border border-[#4a444d]/30 aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black font-['Playfair_Display'] mb-6">
            Ready to Work <span className="text-[#a93134]">With Us?</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Contact us today to learn more about our products and services, or submit a service request and one of our representatives will reach out to you.
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