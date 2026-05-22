import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#181418] text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-[#a93134]/15 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#a93134]/30">
            <CheckCircle size={40} className="text-[#a93134]" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#a93134]" />
            <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Request Received</span>
            <div className="w-8 h-px bg-[#a93134]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-['Playfair_Display'] mb-6">
            Thank You for <br /><span className="text-[#a93134]">Contacting Us</span>
          </h1>
          <p className="text-gray-400 leading-relaxed mb-4">
            Your service request has been successfully submitted. A representative from LLP "Zhetysu Kazynasy" will review your enquiry and respond directly to your email address.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            We typically respond within <strong className="text-gray-300">24 business hours</strong>. If your matter is urgent, please contact us directly at{' '}
            <a href="mailto:info@zhetysukazynasy.kz" className="text-[#a93134] hover:underline">info@zhetysukazynasy.kz</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#a93134] hover:bg-[#c0404a] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#a93134]/30">
              <Home size={16} /> Back to Home
            </Link>
            <Link to="/service" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-[#a93134]/60 text-white hover:text-[#a93134] font-semibold rounded-full transition-all duration-200">
              View Our Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}