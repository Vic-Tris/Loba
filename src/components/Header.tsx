import { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavClick: (topicId: string) => void;
  onScheduleClick: () => void;
  activeTopic: string | null;
}

export default function Header({ onNavClick, onScheduleClick, activeTopic }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Get a Quote', id: 'quote' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-3 z-40 w-full mx-auto px-4 md:px-6 select-none transition-all duration-300">
      <div className="relative w-full bg-white/55 backdrop-blur-xl rounded-full border border-white/60 px-3.5 py-1 sm:px-5 sm:py-1.5 md:px-7 shadow-[0_8px_30px_rgba(17,43,85,0.05)] flex items-center justify-between">
        {/* Left: Beautiful Logo representation */}
        <div className="cursor-pointer shrink-0" onClick={() => onNavClick('home')}>
          <Logo variant="dark" />
        </div>

        {/* Right Content Group (Desktop Nav Items & Action Button packed together) */}
        <div className="hidden lg:flex items-center gap-7">
          {/* Desktop Navigation Bar */}
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeTopic === item.id || (item.id === 'home' && activeTopic === null);
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`relative py-1 text-[13px] font-bold tracking-wide transition-all duration-300 hover:text-brand-navy cursor-pointer ${
                    isActive ? 'text-brand-navy font-extrabold' : 'text-slate-800 hover:text-brand-navy'
                  }`}
                  id={`nav-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-2px] left-0 h-[2px] w-full bg-brand-blue rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* "Book Now" capsule button */}
          <button
            onClick={onScheduleClick}
            className="rounded-full bg-primary hover:bg-primary-dark px-4 py-1.5 text-[12.5px] font-bold text-white shadow-[0_4px_12px_rgba(22,34,53,0.12)] transition-all duration-300 hover:translate-y-[-1px] active:translate-y-[0.5px] cursor-pointer"
            id="btn-get-started"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full w-12 h-12 flex items-center justify-center text-brand-navy hover:bg-slate-100/50 transition-colors cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-4 right-4 md:left-6 md:right-6 bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/50 rounded-3xl p-5 flex flex-col gap-2 lg:hidden z-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavClick(item.id);
                setMobileMenuOpen(false);
              }}
              className="text-left py-3 px-2 min-h-[48px] text-[16px] font-semibold text-slate-800 hover:text-brand-blue transition-colors cursor-pointer flex items-center"
              id={`mob-nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onScheduleClick();
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 rounded-full min-h-[48px] bg-primary text-white px-5 py-3 text-[15px] font-bold shadow-md hover:bg-primary-dark transition-all text-center cursor-pointer flex items-center justify-center"
            id="mob-get-started"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
