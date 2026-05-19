import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { Button } from './Button';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Get a Quote', path: '/quote' }, // Aligned to singular path
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[90px] flex items-center',
          isScrolled || !isHome ? 'bg-white shadow-md' : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/lobalogo[1].jpg"
              alt="loba consulting logo"
              className="w-[85px] h-[85px] rounded-3xl object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary-light',
                    location.pathname === link.path 
                      ? 'text-primary font-semibold' 
                      : (isScrolled || !isHome ? 'text-slate-600' : 'text-white/90')
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button
              variant={isScrolled || !isHome ? 'primary' : 'white'}
              size="sm"
              leftIcon={<MessageCircle size={16} />}
              onClick={() => window.open('https://wa.me/qr/NOG2LSMOM3A3O1', '_blank')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              'md:hidden p-2 rounded-md',
              isScrolled || !isHome ? 'text-primary' : 'text-white'
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        'fixed inset-0 z-[60] bg-white transform transition-transform duration-300 md:hidden flex flex-col',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex items-center justify-between h-[72px] px-6 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/lobalogo[1].jpg"
              alt="Loba Consulting logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-primary p-2">
            <X size={28} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-6">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'text-2xl font-heading font-semibold block transition-colors',
                    location.pathname === link.path ? 'text-primary' : 'text-slate-800'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <Button
            variant="whatsapp"
            size="lg"
            className="w-full"
            leftIcon={<MessageCircle size={20} />}
            onClick={() => window.open('https://wa.me/qr/NOG2LSMOM3A3O1', '_blank')}
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}