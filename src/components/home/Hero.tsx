import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { MessageCircle, Award, FolderOpen, CalendarCheck, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  '/images/photo-1744320911030-1ab998d994d7.jpeg',
  '/images/medium-shot-smiley-graduate-student[1].jpg',
  '/images/young-male-student-leaning-lawn-reading-book_(1)[1].jpg'
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500); // 3.5s to match expert-barnacle
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="w-full lg:w-3/5 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-accent text-xs font-bold uppercase tracking-wider mb-8">
              <Award size={14} />
              Loba Scholarly Consulting
            </span>
            
            <h1 className="text-4xl lg:text-[2.85rem] font-heading font-extrabold text-primary leading-tight mb-6">
              Get Your Academic Work Done Right; <br className="hidden md:block"/> 
              <span className="text-slate-600 ">Without Stress, Delays, or Rewrites</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              We help students and professionals deliver high-quality projects, proposals, and career documents with expert precision and fast turnaround.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: FolderOpen, label: '100+', sub: 'Projects Completed' },
                { icon: CalendarCheck, label: '2+', sub: 'Years Experience' },
                { icon: Rocket, label: 'Fast', sub: 'Reliable Delivery' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-xl font-bold text-slate-900">{item.label}</strong>
                    <span className="text-slate-500 text-xs">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="rounded-sm" // Matching expert-barnacle radius-sm
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="rounded-sm"
                leftIcon={<MessageCircle size={20} />}
                onClick={() => window.open('https://wa.me/qr/NOG2LSMOM3A3O1', '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Image Visual mirroring expert-barnacle */}
          <div className="w-full lg:w-2/5 flex justify-center">
             <div className="relative w-full max-w-[450px] aspect-[4/5]">
               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                 {HERO_IMAGES.map((img, i) => (
                   <motion.img
                     key={img}
                     src={img}
                     alt={`Gallery image ${i}`}
                     className="absolute inset-0 w-full h-full object-cover"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: current === i ? 1 : 0 }}
                     transition={{ duration: 1 }}
                   />
                 ))}
               </div>
               
               {/* Custom dots from expert-barnacle */}
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full">
                 {HERO_IMAGES.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => setCurrent(i)}
                     className={`w-2.5 h-2.5 rounded-full transition-all ${
                       current === i ? 'bg-white scale-125' : 'bg-white/40'
                     }`}
                   />
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

