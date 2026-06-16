import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { MessageCircle, Award, FolderOpen, CalendarCheck, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  { src: '/images/photo-1744320911030-1ab998d994d7.jpeg', pos: 'object-[center_25%]' },
  { src: '/images/medium-shot-smiley-graduate-student[1].jpg', pos: 'object-[85%_25%]' },
  { src: '/images/young-male-student-leaning-lawn-reading-book_(1)[1].jpg', pos: 'object-[center_25%]' }
];

export function Hero({ onScheduleClick: _onScheduleClick }: { onScheduleClick?: () => void }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full flex flex-col pt-8 pb-6 overflow-hidden bg-white">
      <div className="w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
          
          {/* Left: Text Content — 55% width, anchored to top */}
          <motion.div 
             initial={{ opacity: 0, y: 24 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
             className="w-full lg:w-[55%] text-left flex flex-col justify-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-accent text-[11px] font-bold uppercase tracking-widest mb-5 self-start">
              <Award size={13} />
              Loba Scholarly Consulting
            </span>
            
            <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-heading font-extrabold text-[#1A365D] leading-[1.2] tracking-tight mb-6">
              Academic Work Done Right
              <span className="text-[#2B6CB0] block mt-1.5 md:mt-2">No Stress, No Rewrites</span>
            </h1>
            
            {/* Body copy — clear, comfortable line length */}
            <p className="text-[1.0625rem] text-[#000000] leading-relaxed max-w-[520px] mb-6">
              We help students and professionals deliver high-quality projects, proposals, and career documents with expert precision and fast turnaround.
            </p>

            {/* Stats — horizontal strip with dividers for visual rhythm */}
            <div className="flex items-center gap-0 mb-6 border border-slate-100 rounded-2xl overflow-hidden divide-x divide-slate-100 bg-slate-50/60">
              {[
                { icon: FolderOpen, label: '100+', sub: 'Projects Completed' },
                { icon: CalendarCheck, label: '2+', sub: 'Years Experience' },
                { icon: Rocket, label: 'Fast', sub: 'Reliable Delivery' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-4 flex-1">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-lg font-extrabold text-slate-900 leading-none">{item.label}</strong>
                    <span className="text-slate-500 text-[11px] mt-0.5 leading-tight">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="primary" 
                size="lg" 
                className="rounded-xl px-7 py-3.5 text-sm font-bold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="rounded-xl px-7 py-3.5 text-sm font-bold"
                leftIcon={<MessageCircle size={18} />}
                onClick={() => window.open('https://wa.me/qr/NOG2LSMOM3A3O1', '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right: Image — 45% width, taller aspect ratio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] lg:max-w-full" style={{ aspectRatio: '1/1' }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                {HERO_IMAGES.map((img, i) => (
                  <motion.img
                    key={img.src}
                    src={img.src}
                    alt={`Gallery image ${i}`}
                    className={`absolute inset-0 w-full h-full object-cover ${img.pos}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: current === i ? 1 : 0 }}
                    transition={{ duration: 1.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
