import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import { 
  FileText, 
  Database, 
  PenTool, 
  Presentation, 
  Briefcase, 
  Award,
  CheckCircle2
} from 'lucide-react';

const SERVICES_SUMMARY = [
  {
    title: 'Academic Articles',
    desc: 'Well-researched, properly cited articles for journals, seminars, and course submissions.',
    icon: FileText,
    color: 'bg-blue-50 text-blue-600',
    path: '/services/academic-article',
    category: 'ACADEMIC'
  },
  {
    title: 'Undergraduate Projects',
    desc: 'Complete final year projects — all chapters — across all departments worldwide.',
    icon: Award,
    color: 'bg-purple-50 text-purple-600',
    path: '/services/undergrad',
    category: 'ACADEMIC'
  },
  {
    title: 'Thesis & Dissertations',
    desc: 'Masters and PhD-level thesis writing with deep research and proper university formatting.',
    icon: Award,
    color: 'bg-indigo-50 text-indigo-600',
    path: '/services/thesisdissertations',
    category: 'ACADEMIC'
  },
  {
    title: 'Data Analysis',
    desc: 'SPSS, Excel, STATA — full results tables, charts, and Chapter 4 write-up included.',
    icon: Database,
    color: 'bg-emerald-50 text-emerald-600',
    path: '/services/data-analysis',
    category: 'ACADEMIC'
  },
  {
    title: 'Assignments & Essays',
    desc: 'Structured, well-referenced assignment responses with clear arguments for any course.',
    icon: PenTool,
    color: 'bg-orange-50 text-orange-600',
    path: '/services/assignments-essay',
    category: 'ACADEMIC'
  },
  {
    title: 'Academic Presentations',
    desc: 'Professional PPTX slides with design, speaker notes, and compelling visuals.',
    icon: Presentation,
    color: 'bg-rose-50 text-rose-600',
    path: '/services/academic-presentations',
    category: 'ACADEMIC'
  },
  {
    title: 'Business Proposals',
    desc: 'Investor-ready proposals, business plans, and detailed company profiles.',
    icon: Briefcase,
    color: 'bg-amber-50 text-amber-600',
    path: '/services/business',
    category: 'BUSINESS'
  },
  {
    title: 'CV & Cover Letters',
    desc: 'ATS-friendly CVs and cover letters for jobs and academic institutions worldwide.',
    icon: FileText,
    color: 'bg-cyan-50 text-cyan-600',
    path: '/services/cover-letter',
    category: 'BUSINESS'
  }
];

export default function Home({ onScheduleClick, onNavClick }: { onScheduleClick?: () => void, onNavClick?: (id: string) => void }) {
  return (
    <>
      <SEO 
        title="Expert Academic & Professional Support" 
        description="Loba Consulting helps students and professionals deliver high-quality projects, proposals, and career documents." 
      />
      <Hero onScheduleClick={onScheduleClick} />
      
      <div className="w-full mx-auto px-6 py-8">
        <TestimonialCarousel />
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="w-full mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Empowering Your Academic Success
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We offer a wide range of services specifically designed to help you excel. 
              Our experts are dedicated to delivering excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_SUMMARY.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all text-left"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon size={28} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2 block">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="primary" size="lg" className="rounded-xl px-7 py-3.5 text-sm font-bold" onClick={() => onNavClick && onNavClick('services')}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="min-h-screen flex flex-col bg-slate-50 overflow-hidden">
        <div className="flex-1 w-full mx-auto px-6 lg:max-w-7xl flex flex-col py-16 lg:py-20 transform scale-90 origin-center">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div className="relative w-full min-h-[400px] z-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl z-0" />
              <img 
                src="/images/photo-1744320911030-1ab998d994d7.jpeg" 
                alt="Expert team" 
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl z-10"
              />
              <div className="absolute -bottom-6 right-0 md:-right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[260px] border border-slate-100">
                <p className="text-primary font-bold text-2xl mb-1">100%</p>
                <p className="text-slate-800 font-semibold mb-1.5 text-sm">Satisfaction Rate</p>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Join our community of successful students and professionals.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center h-full py-8">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 lg:mb-12">
                Why Students Trust Loba Consulting
              </h2>
              <div className="space-y-8 flex-1 flex flex-col justify-center">
                {[
                  {
                    title: 'Expert Precision',
                    desc: 'Every document is handled by seasoned experts in your specific field of study.'
                  },
                  {
                    title: 'Fast Turnaround',
                    desc: 'We respect your deadlines and deliver results with incredible speed without sacrificing quality.'
                  },
                  {
                    title: 'Original & Plagiarism-Free',
                    desc: 'We provide unique, custom-written content tailored to your specific requirements.'
                  },
                  {
                    title: 'Confidentiality Guaranteed',
                    desc: 'Your privacy and academic integrity are our highest priorities.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary shrink-0 h-fit">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 text-lg">{item.title}</h4>
                      <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}