import React from 'react';
import scholarImage from '../assets/images/bgremoved.png';

interface HeroSectionProps {
  onScheduleClick: () => void;
}

export default function HeroSection({ onScheduleClick }: HeroSectionProps) {
  // Ultra premium scholar image matching the Strober professional female portrait style
  const scholarImageUrl = scholarImage;

  return (
    <section className="px-[4.26vw] lg:px-6 pt-[6vh] lg:pt-10 pb-[2.4vh] lg:pb-0 flex-1 flex flex-col justify-start lg:justify-center select-none z-10 pointer-events-none">
      
      {/* Container - flex column on mobile, grid on desktop */}
      <div className="relative mx-auto max-w-5xl w-full flex flex-col lg:grid lg:grid-cols-12 lg:items-center gap-[3.6vh] lg:gap-10 pointer-events-auto flex-1">
         
        {/* Left Content: Heading & Primary Copy */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start gap-[1.8vh] lg:gap-4 z-20 w-full relative lg:ml-10">
          
          {/* Visual Ally Pill Badge */}
          <div 
            className="inline-flex items-center gap-[2.13vw] lg:gap-2 rounded-[3.2vw] lg:rounded-full border border-brand-navy/15 bg-white/80 backdrop-blur-md px-[3.2vw] lg:px-3 py-[0.6vh] lg:py-1 shadow-[0_2px_12px_rgba(13,44,92,0.06)] opacity-0 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]"
            id="hero-badge"
          >
            <span className="h-[1.6vw] w-[1.6vw] lg:h-1.5 lg:w-1.5 rounded-full bg-brand-navy shrink-0 block" />
            <span className="text-[2.66vw] sm:text-[2.9vw] lg:text-[11px] font-bold tracking-wide text-slate-900 font-sans">
              Get Your Academic Work Done Right
            </span>
          </div>
 
          {/* Large Editorial Headline */}
          <h1 
            className="text-slate-900 font-display font-extrabold tracking-tight text-center lg:text-left leading-[1.1] w-full"
            id="hero-header-text"
          >
            <span className="text-[7.46vw] lg:text-[48px] xl:text-[52px] font-extrabold text-brand-navy tracking-tighter opacity-0 animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards] inline-block mr-[2.13vw] lg:mr-3">
              Results-driven
            </span>
            <span className="text-[7.46vw] lg:text-[48px] xl:text-[52px] font-extrabold text-brand-blue tracking-tighter opacity-0 animate-fade-in-up [animation-delay:550ms] [animation-fill-mode:forwards] inline-block whitespace-nowrap">
              Academic Support
            </span>
          </h1>

          {/* Subheader description */}
          <p 
            className="text-slate-700 font-bold text-center lg:text-left max-w-[74.6vw] lg:max-w-lg text-[3.2vw] lg:text-[14px] leading-relaxed tracking-wide opacity-0 animate-fade-in-up [animation-delay:850ms] [animation-fill-mode:forwards] font-sans drop-shadow-sm lg:drop-shadow-none"
            id="hero-subtext"
          >
            We help students and professionals deliver high-quality projects, proposals and career documents.
          </p>

          {/* Button Consultation */}
          <div className="opacity-0 animate-fade-in-up [animation-delay:1000ms] [animation-fill-mode:forwards] mt-[0.6vh] lg:mt-2">
            <button
              onClick={onScheduleClick}
              className="group rounded-[3.2vw] lg:rounded-xl min-h-[7.2vh] lg:min-h-[48px] bg-brand-navy hover:bg-brand-navy-light px-[6.4vw] lg:px-6 py-[1.8vh] lg:py-3 font-bold text-white shadow-[0_8px_20px_rgba(22,34,53,0.15)] hover:shadow-[0_12px_24px_rgba(22,34,53,0.25)] transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[0px] flex items-center justify-center gap-[2.13vw] lg:gap-2 cursor-pointer text-[3.46vw] lg:text-[13px] tracking-wide"
              id="hero-schedule-btn"
            >
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>

        {/* MOBILE Hero Image Layer - Absolute positioning prevents pushing BottomCards out of viewport */}
        {/* Positioned to overlap the carousel but allow taps to pass through (pointer-events-none) */}
        <div 
          className="absolute bottom-[-4.5vh] lg:hidden w-full flex justify-center items-end z-30 pointer-events-none"
          id="hero-image-mobile-container"
        >
          <img
            src={scholarImageUrl}
            alt="Lead Scholar Consultant"
            referrerPolicy="no-referrer"
            className="w-[140%] max-w-[120vw] h-auto max-h-[48vh] object-contain object-bottom select-none opacity-60 animate-scale-in [animation-delay:350ms] [animation-fill-mode:forwards]"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>

      </div>

      {/* DESKTOP Hero Image Layer - Fixed to viewport bottom */}
      <div 
        className="hidden lg:flex fixed bottom-0 left-1/2 translate-x-[-25%] w-[90vw] h-[110vh] justify-center items-end z-[-1] pointer-events-none origin-bottom"
        id="hero-image-desktop-container"
      >
        <img
          src={scholarImageUrl}
          alt="Lead Scholar Consultant"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-bottom select-none opacity-95 animate-scale-in [animation-delay:350ms] [animation-fill-mode:forwards]"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

    </section>
  );
}
