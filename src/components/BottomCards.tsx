import { useState, useRef, useCallback, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 't-1',
    name: 'Chioma Eyinnaya',
    role: 'Business Student',
    text: "Oluwatobiloba polished my business proposal to perfection. My supervisor said it was one of the best structured he'd seen. It landed me a major client deal!",
    color: 'bg-brand-navy',
  },
  {
    id: 't-2',
    name: 'Daniel Osaro',
    role: 'Postgraduate Researcher',
    text: 'Struggled with my research chapter until Oluwatobiloba stepped in. Supervisor raved about the rigorous analysis. A grade and department award.',
    color: 'bg-brand-blue',
  },
  {
    id: 't-3',
    name: 'Liasu Mobosola',
    role: 'Undergraduate',
    text: 'From rejection risk to A grade glory! His tips on avoiding common pitfalls made my supervisor praise the clarity and originality.',
    color: 'bg-brand-navy-light',
  },
  {
    id: 't-4',
    name: 'Adebayo T.',
    role: "Master's Candidate",
    text: 'The data analysis chapter was a nightmare until Loba Consulting took over. SPSS tables were immaculate and the interpretation was spot on.',
    color: 'bg-brand-blue-dark',
  },
  {
    id: 't-5',
    name: 'Sarah Jenkins',
    role: 'PhD Candidate',
    text: 'My thesis was accepted without a single major correction. I cannot recommend their meticulous editing and formatting enough.',
    color: 'bg-brand-navy',
  },
  {
    id: 't-6',
    name: 'Kenneth O.',
    role: 'Academic Professional',
    text: 'Incredible turnaround time and completely plagiarism-free. The seminar presentation was universally praised by the entire review panel!',
    color: 'bg-brand-blue',
  },
];

// Triple for seamless infinite loop
const loop = [...testimonials, ...testimonials, ...testimonials];

interface BottomCardsProps {
  onCardSelected?: (card: any) => void;
}

export default function BottomCards({}: BottomCardsProps) {
  const [tooltip, setTooltip] = useState<{ t: typeof testimonials[0]; x: number } | null>(null);
  const trayRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((t: typeof testimonials[0], pillEl: HTMLDivElement) => {
    setTooltip(current => {
      if (current?.t.id === t.id) return null; // Close if tapping the same one
      
      const pillRect = pillEl.getBoundingClientRect();
      const trayRect = trayRef.current?.getBoundingClientRect();
      if (!trayRect) return current;
      
      const rawX = pillRect.left - trayRect.left + pillRect.width / 2;
      const minX = 140;
      const maxX = trayRect.width - 140;
      const safeX = Math.max(minX, Math.min(rawX, maxX));
      
      return { t, x: safeX };
    });
  }, []);

  const handleLeave = useCallback(() => setTooltip(null), []);

  // Click outside to close tooltip on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (tooltip && trayRef.current && !trayRef.current.contains(e.target as Node)) {
        setTooltip(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [tooltip]);

  return (
    <div className="w-full px-[4.26vw] lg:px-6 pb-[0.45vh] lg:pb-[3px] mt-auto select-none z-10 relative">
      <div className="mx-auto max-w-5xl">

        {/* Outer wrapper — overflow-visible so tooltip is never clipped */}
        <div className="relative" ref={trayRef}>

          {/* Shared tooltip — rendered above the tray, outside overflow-hidden */}
          {tooltip && (
            <div
              className="absolute bottom-[calc(100%+10px)] z-50 w-[69.3vw] lg:w-[260px] pointer-events-none"
              style={{
                left: `${tooltip.x}px`,
                transform: 'translateX(-50%)',
                animation: 'fadeInUp 0.18s ease-out forwards',
              }}
            >
              <div className="bg-white/97 backdrop-blur-xl rounded-[3.2vw] lg:rounded-xl border border-brand-navy/10 shadow-[0_8px_28px_rgba(13,44,92,0.14)] p-[3.7vw] lg:p-3.5 pointer-events-auto">
                <div className="flex text-amber-400 gap-[0.5vw] lg:gap-[2px] mb-[2.1vw] lg:mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-[2.9vw] h-[2.9vw] lg:w-[11px] lg:h-[11px]" fill="currentColor" />)}
                </div>
                <p className="text-[3vw] lg:text-[11.5px] text-slate-700 italic leading-relaxed font-sans mb-[2.4vh] lg:mb-3">
                  "{tooltip.t.text}"
                </p>
                <div className="flex items-center gap-[2.1vw] lg:gap-2 border-t border-slate-100 pt-[1.5vh] lg:pt-2.5">
                  <div className={`flex items-center justify-center w-[7.46vw] h-[7.46vw] lg:w-7 lg:h-7 rounded-full ${tooltip.t.color} text-white text-[2.4vw] lg:text-[9px] font-black shrink-0`}>
                    {tooltip.t.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()}
                  </div>
                  <div>
                    <span className="text-[2.93vw] lg:text-[11px] font-bold text-brand-navy block leading-tight">{tooltip.t.name}</span>
                    <span className="text-[2.53vw] lg:text-[9.5px] text-slate-400 font-semibold">{tooltip.t.role}</span>
                  </div>
                </div>
              </div>
              {/* Caret */}
              <div className="absolute bottom-[-1.3vw] lg:bottom-[-5px] left-1/2 -translate-x-1/2 w-[2.66vw] h-[2.66vw] lg:w-2.5 lg:h-2.5 bg-white rotate-45 border-r border-b border-brand-navy/10" />
            </div>
          )}

          {/* Glassmorphism tray */}
          <div
            className="bg-slate-900/10 hover:bg-slate-900/15 backdrop-blur-xl border border-white/20 rounded-[4.8vw] lg:rounded-[18px] p-[0.45vh] lg:p-[3px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden relative"
            id="featured-cards-tray"
          >
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-[8.5vw] lg:w-8 bg-gradient-to-r from-white/30 to-transparent z-10 pointer-events-none rounded-l-[4.26vw] lg:rounded-l-[16px]" />
            <div className="absolute right-0 top-0 bottom-0 w-[8.5vw] lg:w-8 bg-gradient-to-l from-white/30 to-transparent z-10 pointer-events-none rounded-r-[4.26vw] lg:rounded-r-[16px]" />

            {/* Scrolling marquee — pauses on hover or when tooltip is open */}
            <div
              className={`flex gap-[2.1vw] lg:gap-2.5 animate-marquee ${tooltip ? '[animation-play-state:paused]' : 'hover:[animation-play-state:paused]'}`}
              style={{ width: 'max-content', animationDuration: '55s' }}
              id="testimonial-marquee-track"
            >
              {loop.map((t, idx) => (
                <TestimonialPill
                  key={`${t.id}-${idx}`}
                  testimonial={t}
                  onToggle={handleToggle}
                  onLeave={handleLeave}
                  isActive={tooltip?.t.id === t.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialPill({
  testimonial,
  onToggle,
  onLeave,
  isActive,
}: {
  testimonial: typeof testimonials[0];
  onToggle: (t: typeof testimonials[0], el: HTMLDivElement) => void;
  onLeave: () => void;
  isActive: boolean;
}) {
  const pillRef = useRef<HTMLDivElement>(null);

  const initials = testimonial.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div
      ref={pillRef}
      onMouseLeave={onLeave}
      onClick={(e) => {
        // Prevent event from bubbling up if we are tapping
        e.stopPropagation();
        if (pillRef.current) onToggle(testimonial, pillRef.current);
      }}
      className={`group flex items-center justify-between gap-[1.6vw] lg:gap-1.5 rounded-[4vw] lg:rounded-[15px] bg-white/75 hover:bg-white/90 backdrop-blur-sm border ${isActive ? 'border-brand-navy/30 shadow-[0_6px_18px_-4px_rgba(13,44,92,0.1)] -translate-y-0.5' : 'border-white/60 hover:border-white/90 shadow-[0_3px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_18px_-4px_rgba(13,44,92,0.1)] hover:-translate-y-0.5'} p-[1.6vw] lg:p-1.5 pr-[2.66vw] lg:pr-2.5 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[9.3vh] lg:min-h-[62px] w-[53.3vw] sm:w-[58.6vw] lg:w-[220px] shrink-0`}
    >
      {/* Avatar + text */}
      <div className="flex items-center gap-[2.1vw] lg:gap-2 pr-[2.1vw] lg:pr-2 flex-1 min-w-0">
        {/* Avatar block */}
        <div className={`h-[5.4vh] lg:h-[36px] w-[11.7vw] lg:w-[44px] min-w-[11.7vw] lg:min-w-[44px] shrink-0 rounded-[1.6vw] lg:rounded-md flex items-center justify-center ${testimonial.color} shadow-sm`}>
          <span className="text-white text-[2.4vw] lg:text-[9px] font-black tracking-tighter leading-none">{initials}</span>
        </div>

        {/* Text column */}
        <div className="flex flex-col min-w-0">
          <div className="flex text-amber-400 gap-[0.26vw] lg:gap-[1px] mb-[0.3vh] lg:mb-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-[2.1vw] h-[2.1vw] lg:w-[8px] lg:h-[8px]" fill="currentColor" />)}
          </div>
          <span className="text-[2.53vw] lg:text-[9.5px] font-extrabold text-slate-900 tracking-tight leading-tight block truncate">
            {testimonial.name}
          </span>
          <span className="text-[2.4vw] lg:text-[9px] text-slate-600 italic font-semibold leading-tight mt-[0.3vh] lg:mt-0.5 block truncate">
            "{testimonial.text}"
          </span>
        </div>
      </div>

      {/* Shine sweep */}
      <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent to-white/15 skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000 ease-out" />
    </div>
  );
}
