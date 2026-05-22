import { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const SERVICE_TYPES = [
  "EN590 ULSD",
  "D2 Diesel Gas Oil",
  "Urea Fertiliser",
  "D6 Virgin Fuel Oil",
  "Liquefied Petroleum Gas",
  "Kazakhstan Crude Oil (KEBCO)",
  "Fuel Oil",
  "CST-180",
  "Bitumen 60/70 & 80/100",
  "Jet A1 Fuel",
  "Aviation Kerosene (JP54)",
  "Other",
];

export default function RequestService() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: '',
    company_name: '',
    email: '',
    phone: '',
    country: '',
    service_type: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ServiceRequest.create({ ...form, status: 'new' });
    setLoading(false);
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-[#181418] text-white">
      <Navbar />

      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#a93134]" />
            <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Request Service</span>
            <div className="w-8 h-px bg-[#a93134]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-['Playfair_Display'] mb-4">
            Get In <span className="text-[#a93134]">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fill in the form below or write us directly at our email address. A representative will respond to your enquiry within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: [
                  "050012, Almaty",
                  "Nursultan Nazarbayev Ave.",
                  "Furmanova, 177, apt. 7",
                  "Almaty District, Kazakhstan",
                ],
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["info@zhetysukazynasy.kz"],
                link: "mailto:info@zhetysukazynasy.kz",
              },
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+7 (727) 300-00-00"],
                link: "tel:+77273000000",
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#0f0d0f] border border-[#4a444d]/30 hover:border-[#a93134]/40 rounded-xl p-6 transition-colors flex flex-col items-start gap-4">
                <div className="w-11 h-11 bg-[#a93134]/15 rounded-full flex items-center justify-center border border-[#a93134]/30">
                  <card.icon size={20} className="text-[#a93134]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-2 tracking-wide uppercase">{card.title}</h3>
                  {card.link ? (
                    <a href={card.link} className="text-[#a93134] hover:text-white text-sm transition-colors font-medium">
                      {card.lines[0]}
                    </a>
                  ) : (
                    card.lines.map((line, i) => (
                      <p key={i} className="text-gray-400 text-xs leading-relaxed">{line}</p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0f0d0f] border border-[#4a444d]/30 rounded-2xl p-8 sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-black font-['Playfair_Display'] mb-3">Service Request Form</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Please fill in the details below to submit your service or product enquiry. You may also reach us directly via the email address in the contact card above — our team is available and ready to assist you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Full Name *</label>
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
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Company Name</label>
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
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Email Address *</label>
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
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Phone Number</label>
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
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Country</label>
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
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Service / Product *</label>
                  <select
                    name="service_type"
                    value={form.service_type}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  >
                    <option value="" className="text-gray-600">Select a service or product</option>
                    {SERVICE_TYPES.map(s => (
                      <option key={s} value={s} className="bg-[#181418]">{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Quantity / Volume Required</label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 50,000 MT, 1 million barrels..."
                  className="w-full bg-[#181418] border border-[#4a444d]/40 focus:border-[#a93134] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Message / Additional Requirements *</label>
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
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#a93134] hover:bg-[#c0404a] disabled:opacity-60 text-white font-bold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#a93134]/30 text-sm tracking-wide uppercase"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>Submit Request <ArrowRight size={16} /></>
                )}
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