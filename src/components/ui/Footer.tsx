import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6 text-left">
            <Link to="/" className="flex items-center gap-2">
              <img src="/LOBA Scholar Consulting white.svg" alt="Loba Consulting Logo" className="h-10 w-auto object-contain scale-150 origin-left" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students and professionals with expert academic support, 
              fast turnaround, and high-quality educational consulting services.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                <FaLinkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                <FaTwitter size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/lobascholarlyconsulting" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                <FaInstagram size={18} />
              </a> 
            </div>
          </div>

          {/* Links */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider text-xs opacity-60">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Cleaned and Matched precisely with App.tsx matrix */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider text-xs opacity-60">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Data Analysis', path: '/services/data-analysis' },
                { name: 'Business Proposals', path: '/services/business' },
                { name: 'Academic Presentations', path: '/services/academic-presentations' },
                { name: 'Undergraduate Projects', path: '/services/undergrad' },
                { name: 'CV & Cover Letters', path: '/services/cover-letter' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider text-xs opacity-60">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-primary-light shrink-0" />
                <span>+234808 584 7676</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-primary-light shrink-0" />
                <span>lobaconsulting2@gmail.com</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-primary-light shrink-0" />
                <span>Ibadan, Nigeria</span>
              </li>
              <li>
                <div className="mt-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center gap-3">
                  <MessageCircle size={24} className="text-whatsapp" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Quick Chat</p>
                    <a href="https://wa.me/qr/NOG2LSMOM3A3O1" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-whatsapp transition-colors text-white">WhatsApp Support</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {currentYear} Loba Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}