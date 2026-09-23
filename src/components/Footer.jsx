/**
 * Footer.jsx
 * Site-wide footer — brand block, navigation links, and contact details.
 * All data is sourced from lib/constants.js for easy maintenance.
 */

import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { COMPANY, LOGO_URL, NAV_LINKS } from '../lib/constants';

// Social media placeholder links — replace href values with real profile URLs
const SOCIAL_LINKS = [
  { Icon: Facebook,  href: '#' },
  { Icon: Twitter,   href: '#' },
  { Icon: Linkedin,  href: '#' },
  { Icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#181418] border-t border-[#a93134]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand ─────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#a93134]/60 flex-shrink-0">
                <img src={LOGO_URL} alt="Zhetysu Kazynasy Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white font-bold text-sm font-['Playfair_Display'] leading-tight">
                  {COMPANY.name}
                </div>
                <div className="text-[#a93134] text-xs tracking-widest uppercase font-semibold">
                  {COMPANY.subtitle}
                </div>
                <div className="text-gray-500 text-[10px] mt-0.5">BIN: {COMPANY.bin}</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              An operating enterprise producing crude oil and associated gas in the Almaty Region.
              Committed to excellence, safety, and sustainable energy production in the Republic of Kazakhstan.
            </p>

            {/* Social icons — update hrefs when profiles are ready */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-[#4a444d]/60 flex items-center justify-center text-gray-400 hover:border-[#a93134] hover:text-[#a93134] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation ────────────────────────────────────────────────────── */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-[#a93134] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#a93134] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ───────────────────────────────────────────────────────── */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4">

              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-7 h-7 rounded-full bg-[#a93134]/15 flex items-center justify-center flex-shrink-0">
                  <MapPin size={13} className="text-[#a93134]" />
                </div>
                <span className="text-gray-400 text-xs leading-relaxed">{COMPANY.address}</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#a93134]/15 flex items-center justify-center flex-shrink-0">
                  <Mail size={13} className="text-[#a93134]" />
                </div>
                <a
                  href={`mailto:${COMPANY.salesEmail}`}
                  className="text-gray-400 hover:text-[#a93134] text-xs transition-colors break-all"
                >
                  {COMPANY.salesEmail}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-400 hover:text-[#a93134] text-xs transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.accountsEmail}`}
                  className="text-gray-400 hover:text-[#a93134] text-xs transition-colors break-all"
                >
                  {COMPANY.accountsEmail}
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#a93134]/15 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-[#a93134]" />
                </div>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="text-gray-400 hover:text-[#a93134] text-xs transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-[#4a444d]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} {COMPANY.name} {COMPANY.subtitle}. All rights reserved.
          </p>
          <a
            href={COMPANY.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#a93134] text-xs transition-colors"
          >
            {COMPANY.website}
          </a>
        </div>

      </div>
    </footer>
  );
}