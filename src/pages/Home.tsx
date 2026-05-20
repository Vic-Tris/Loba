import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import { 
  FileText, 
  Database, 
  PenTool, 
  Presentation, 
  Briefcase, 
  Award,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES_SUMMARY = [
  {
    title: 'Academic Articles',
    desc: 'Well-researched, properly cited articles for journals, seminars, and course submissions.',
    icon: FileText,
    color: 'bg-blue-50 text-blue-600',
    path: '/services/academic-article', // Fallback path if created later
    category: 'ACADEMIC'
  },
  {
    title: 'Undergraduate Projects',
    desc: 'Complete final year projects — all chapters — across all departments worldwide.',
    icon: Award,
    color: 'bg-purple-50 text-purple-600',
    path: '/services/undergrad', // Fixed: Aligns perfectly with App.tsx
    category: 'ACADEMIC'
  },
  {
    title: 'Thesis & Dissertations',
    desc: 'Masters and PhD-level thesis writing with deep research and proper university formatting.',
    icon: Award,
    color: 'bg-indigo-50 text-indigo-600',
    path: '/services/thesisdissertations', // Fallback path if created later
    category: 'ACADEMIC'
  },
  {
    title: 'Data Analysis',
    desc: 'SPSS, Excel, STATA — full results tables, charts, and Chapter 4 write-up included.',
    icon: Database,
    color: 'bg-emerald-50 text-emerald-600',
    path: '/services/data-analysis', // Fixed: Aligns perfectly with App.tsx
    category: 'ACADEMIC'
  },
  {
    title: 'Assignments & Essays',
    desc: 'Structured, well-referenced assignment responses with clear arguments for any course.',
    icon: PenTool,
    color: 'bg-orange-50 text-orange-600',
    path: '/services/assignments-essay', // Fallback path if created later
    category: 'ACADEMIC'
  },
  {
    title: 'Academic Presentations',
    desc: 'Professional PPTX slides with design, speaker notes, and compelling visuals.',
    icon: Presentation,
    color: 'bg-rose-50 text-rose-600',
    path: '/services/academic-presentations', // Fixed: Aligns perfectly with App.tsx
    category: 'ACADEMIC'
  },
  {
    title: 'Business Proposals',
    desc: 'Investor-ready proposals, business plans, and detailed company profiles.',
    icon: Briefcase,
    color: 'bg-amber-50 text-amber-600',
    path: '/services/business', // Fixed: Aligns perfectly with App.tsx
    category: 'BUSINESS'
  },
  {
    title: 'CV & Cover Letters',
    desc: 'ATS-friendly CVs and cover letters for jobs and academic institutions worldwide.',
    icon: FileText,
    color: 'bg-cyan-50 text-cyan-600',
    path: '/services/cover-letter', // Fixed: Aligns perfectly with App.tsx
    category: 'BUSINESS'
  }
];

export default function Home() {
  return (
    <>
      <SEO 
        title="Expert Academic & Professional Support" 
        description="Loba Consulting helps students and professionals deliver high-quality projects, proposals, and career documents." 
      />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
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
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.desc}
                </p>
                <Link 
                  to={service.path}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all"
                >
                  See Full Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="secondary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <img 
                src="./images/photo-1744320911030-1ab998d994d7.jpeg" 
                alt="Expert team" 
                className="relative rounded-3xl shadow-2xl z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs border border-slate-100">
                <p className="text-primary font-bold text-3xl mb-1">100%</p>
                <p className="text-slate-800 font-semibold mb-2 text-sm">Satisfaction Rate</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Join our community of successful students and professionals.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8">
                Why Students Trust Loba Consulting
              </h2>
              <div className="space-y-6">
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
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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