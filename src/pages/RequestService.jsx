/**
 * RequestService.jsx
 * Contact / service request page.
 *
 * Fully static — no backend calls, no API credits.
 * On submit, opens the user's email client pre-filled with all form data
 * via a mailto: link, so enquiries land directly in the company inbox.
 */

import { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { COMPANY, SERVICE_TYPES } from '../lib/constants';

// ─── Initial form state ────────────────────────────────────────────────────────
const EMPTY_FORM = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  service_type: '',
  quantity: '',
  message: '',
};

export default function RequestService() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**
   * handleSubmit
   * Builds a mailto: URI pre-filled with the form data and opens the
   * user's default email client. No server or API calls required.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Service Request — ${form.service_type} | ${form.full_name}`;
    const body = [
      `Full Name:     ${form.full_name}`,
      `Company:       ${form.company_name || '—'}`,
      `Email:         ${form.email}`,
      `Phone:         ${form.phone || '—'}`,
      `Country:       ${form.country || '—'}`,
      `Service/Product: ${form.service_type}`,
      `Quantity:      ${form.quantity || '—'}`,
      ``,
      `Message:`,
      form.message,
    ].join('\n');

    const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    // Show confirmation banner (email client opening is handled by the OS)
    setSubmitted(true);
    setForm(EMPTY_FORM);
  };

  return (
    <div className="min-h-screen bg-[#181418] text-white">
      <Navbar />

      {/* ── Hero Banner ──────────────────────────────────────────────────────── */}
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-[280px] sm:h-[380px] lg:h-[450px]">
          <img
            src="https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/f7424faa9_image.png"
            alt="Oil Refinery"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181418]/70 via-[#181418]/20 to-[#181418]/80" />
        </div>
      </section>

      {/* ── Page Title + Contact Card ─────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#181418]">
        <div className="max-w-3xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#a93134]" />
              <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Request Service</span>
              <div className="w-8 h-px bg-[#a93134]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-['Playfair_Display'] mb-4 text-white">
              Get In <span className="text-[#a93134]">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Fill in the form below — it will open your email client pre-filled and ready to send.
              A representative will respond within 24 hours.
            </p>
          </div>

          {/* Contact info card — address / email / phone */}
          <div className="bg-[#0f0d0f] border border-[#4a444d]/40 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40">
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-6">

              {/* Address */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 bg-[#a93134]/15 rounded-full flex items-center justify-center border border-[#a93134]/30 flex-shrink-0 mt-0.5">
                  <MapPin size={17} className="text-[#a93134]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xs mb-2 tracking-widest uppercase">Address</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {COMPANY.addressLines.map((line, i) => (
                      <span key={i}>{line}{i < COMPANY.addressLines.length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px self-stretch bg-[#4a444d]/40 flex-shrink-0" />
              <div className="block sm:hidden w-full h-px bg-[#4a444d]/40" />

              {/* Email */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 bg-[#a93134]/15 rounded-full flex items-center justify-center border border-[#a93134]/30 flex-shrink-0 mt-0.5">
                  <Mail size={17} className="text-[#a93134]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xs mb-2 tracking-widest uppercase">Email Us</h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-[#a93134] hover:text-white text-xs transition-colors font-medium break-all"
                  >
                    {COMPANY.email}
                  </a>
                  <a
                    href={`mailto:${COMPANY.salesEmail}`}
                    className="block mt-2 text-[#a93134] hover:text-white text-xs transition-colors font-medium break-all"
                  >
                    {COMPANY.salesEmail}
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px self-stretch bg-[#4a444d]/40 flex-shrink-0" />
              <div className="block sm:hidden w-full h-px bg-[#4a444d]/40" />

              {/* Phone */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 bg-[#a93134]/15 rounded-full flex items-center justify-center border border-[#a93134]/30 flex-shrink-0 mt-0.5">
                  <Phone size={17} className="text-[#a93134]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xs mb-2 tracking-widest uppercase">Call Us</h3>
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="text-[#a93134] hover:text-white text-xs transition-colors font-medium"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Service Request Form ──────────────────────────────────────────────── */}
      <section className="pt-0 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0f0d0f] border border-[#4a444d]/30 rounded-2xl p-8 sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-black font-['Playfair_Display'] mb-3">Service Request Form</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fill in the details below. Clicking "Submit" will open your email client with all information
                pre-filled — just hit Send and we'll be in touch.
              </p>
            </div>

            {/* Success banner shown after submit */}
            {submitted && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/30 rounded-xl text-green-400 text-sm">
                ✓ Your email client should have opened with the request pre-filled. If not, please email us directly at{' '}
                <a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a>.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Row: Full Name + Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={form.company_name}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row: Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 (700) 000 0000"
                    className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row: Country + Service Type */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Your country"
                    className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Service / Product *
                  </label>
                  <select
                    name="service_type"
                    value={form.service_type}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  >
                    <option value="">Select a service or product</option>
                    {SERVICE_TYPES.map((s) => (
                      <option key={s} value={s} className="bg-[#181418]">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                  Quantity / Volume Required
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 50,000 MT, 1 million barrels..."
                  className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                  Message / Additional Requirements *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your requirements, delivery location, urgency, or any other relevant information..."
                  className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit — opens mailto: in the OS email client */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#a93134] hover:bg-[#c0404a] text-white font-bold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#a93134]/30 text-sm tracking-wide uppercase"
              >
                Submit Request <ArrowRight size={16} />
              </button>

            </form>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}