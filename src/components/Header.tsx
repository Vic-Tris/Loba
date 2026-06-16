import { useState } from 'react';

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
      <div className="relative z-50 w-full bg-white/80 backdrop-blur-xl rounded-full border border-white/60 px-3.5 py-1 sm:px-5 sm:py-1.5 md:px-7 shadow-[0_8px_30px_rgba(17,43,85,0.05)] flex items-center justify-between">
        {/* Left: Beautiful Logo representation */}
        <div className="cursor-pointer shrink-0" onClick={() => onNavClick('home')}>
          <img src="/LOBA Scholar Consulting.svg" alt="Loba Consulting Logo" className="h-10 md:h-12 w-auto object-contain scale-[1.25] origin-left" />
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
        <div className="fixed inset-0 bg-white/98 backdrop-blur-xl z-30 flex flex-col pt-24 px-6 pb-6 overflow-y-auto lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left py-4 px-4 min-h-[48px] text-xl font-bold text-slate-800 hover:text-brand-blue hover:bg-slate-50 rounded-2xl transition-all cursor-pointer flex items-center"
                id={`mob-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onScheduleClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-2xl min-h-[56px] bg-primary text-white px-5 py-4 text-lg font-bold shadow-lg hover:bg-primary-dark transition-all text-center cursor-pointer flex items-center justify-center"
                id="mob-get-started"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
