import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialIcons = [Facebook, Twitter, Linkedin, Instagram];

const LOGO_URL = "https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/75616e06b_generated_a1354d0d.png";

export default function Footer() {
  return (
    <footer className="bg-[#181418] border-t border-[#a93134]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#a93134]/60 flex-shrink-0">
                <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white font-bold text-sm font-['Playfair_Display'] leading-tight">LLP "ZHETYSU KAZYNASY"</div>
                <div className="text-[#a93134] text-xs tracking-widest uppercase font-semibold">OIL REFINERY</div>
                <div className="text-gray-500 text-[10px] mt-0.5">BIN: 050740001488</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              An operating enterprise producing crude oil and associated gas in the Almaty Region. 
              Committed to excellence, safety, and sustainable energy production in the Republic of Kazakhstan.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-[#4a444d]/60 flex items-center justify-center text-gray-400 hover:border-[#a93134] hover:text-[#a93134] transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/service' },
                { label: 'Request Service', path: '/request-service' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 hover:text-[#a93134] text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#a93134] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-7 h-7 rounded-full bg-[#a93134]/15 flex items-center justify-center flex-shrink-0">
                  <MapPin size={13} className="text-[#a93134]" />
                </div>
                <span className="text-gray-400 text-xs leading-relaxed">
                  050012, Almaty, Nursultan Nazarbayev Ave. Furmanova, 177, apt. 7, Almaty District, Republic of Kazakhstan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#a93134]/15 flex items-center justify-center flex-shrink-0">
                  <Mail size={13} className="text-[#a93134]" />
                </div>
                <a href="mailto:info@zhetysukazynasy.kz" className="text-gray-400 hover:text-[#a93134] text-xs transition-colors">
                  info@zhetysukazynasy.kz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#a93134]/15 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-[#a93134]" />
                </div>
                <a href="tel:+77273000000" className="text-gray-400 hover:text-[#a93134] text-xs transition-colors">
                  +7 (727) 300-00-00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#4a444d]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} LLP "ZHETYSU KAZYNASY" OIL REFINERY. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}