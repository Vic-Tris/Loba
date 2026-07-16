import { motion } from 'framer-motion';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import {
  Database,
  PenTool,
  Presentation,
  Briefcase,
  Award,
  FileSearch,
  CheckCircle2,
  ArrowRight,
  Info,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ALL_SERVICES = [
  {
    id: 'data-analysis',
    path: '/services/data-analysis',
    title: 'Data Analysis',
    desc: 'Turn raw data into meaningful insights. We handle SPSS, R, Python, and Excel data processing for researchers.',
    icon: Database,
    features: ['Statistical Testing', 'Visualizations', 'Methodology Support', 'Reporting'],
    color: 'bg-brand-blue',
  },
  {
    id: 'thesis',
    path: '/services/thesisdissertations',
    title: 'Thesis & Dissertations',
    desc: 'From proposal to final defense. Comprehensive academic support for PhD and Master’s candidates.',
    icon: Award,
    features: ['Topic Selection', 'Literature Review', 'Data Collection', 'Final Editing'],
    color: 'bg-primary',
  },
  {
    id: 'academic-article',
    path: '/services/academic-article',
    title: 'Academic Articles',
    desc: 'Prepare your research for world-class journals. Our experts refine your work for maximum impact.',
    icon: FileSearch,
    features: ['Journal Formatting', 'Citation Correction', 'Executive Summaries', 'Proofreading'],
    color: 'bg-success',
  },
  {
    id: 'cover-letter',
    path: '/services/cover-letter',
    title: 'CV & Cover Letters',
    desc: 'ATS-friendly CVs and professional cover letters crafted to land interviews globally.',
    icon: Briefcase,
    features: ['ATS Optimization', 'Professional Formatting', 'Tailored Cover'],
    color: 'bg-brand-navy',
  },
  {
    id: 'business-proposal',
    path: '/services/business',
    title: 'Business Proposals',
    desc: 'Win investors and clients with high-impact business documentation tailored to your industry.',
    icon: Briefcase,
    features: ['Market Analysis', 'Financial Projections', 'Executive Summary', 'Pitch Decks'],
    color: 'bg-amber-600',
  },
  {
    id: 'academic-presentations',
    path: '/services/academic-presentations',
    title: 'Academic Presentations',
    desc: 'Captivating slides and speeches for your defense or conference presentation.',
    icon: Presentation,
    features: ['PowerPoint Design', 'Speaker Notes', 'Q&A Prep', 'Visual Assets'],
    color: 'bg-rose-600',
  },
  {
    id: 'undergrad-project',
    path: '/services/undergrad',
    title: 'Undergraduate Projects',
    desc: 'Simplified project management and writing support for final year students across all faculties.',
    icon: PenTool,
    features: ['Chapter 1-5 Support', 'Reference Styling', 'Format Alignment', 'Concept Notes'],
    color: 'bg-indigo-600',
  },
  {
    id: 'assignments-essay',
    path: '/services/assignments-essay',
    title: 'Assignments & Essays',
    desc: 'Structured, well-referenced assignment responses with clear arguments for any course.',
    icon: FileText,
    features: ['Clear Structure', 'Citations', 'Argument Development', 'Proofreading'],
    color: 'bg-orange-600',
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore the wide range of academic and professional consulting services offered by Loba Consulting."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-primary to-brand-blue text-white pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-brand-blue/40 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white mb-6">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight text-white">
              Expert Services for <br />
              Academic & Career <span className="text-sky-100">Growth.</span>
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
              Precision-driven consulting that bridges academic research and professional excellence — with clear process, confidential delivery, and expert review.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-24 bg-brand-ice/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex flex-col p-8 md:p-9 rounded-[28px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(17,43,85,0.06)] hover:shadow-[0_16px_40px_rgba(17,43,85,0.1)] hover:-translate-y-1 transition-all text-left"
              >
                <div className="flex-grow">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform`}
                  >
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed mb-6">{service.desc}</p>

                  <ul className="mb-8 space-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-text-body text-sm">
                        <CheckCircle2 size={15} className="text-brand-blue-dark shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto pt-2">
                  <Link to={service.path} className="w-full block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs py-3 rounded-full border-slate-300 text-primary hover:bg-brand-ice"
                    >
                      <Info size={14} className="mr-1" /> Details
                    </Button>
                  </Link>
                  <Link to={`/quote?service=${service.id}`} className="w-full block">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full text-xs py-3 rounded-full shadow-md shadow-primary/15"
                    >
                      Quote <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-brand-navy to-primary rounded-[36px] p-10 md:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(22,34,53,0.2)]">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-brand-blue/20 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
                  Need a custom <br /> service package?
                </h2>
                <p className="text-white/90 mb-8 max-w-md leading-relaxed">
                  Our consultants can design a bespoke support plan for larger research teams or multi-stage projects.
                </p>
                <Link to="/contact">
                  <Button variant="white" size="lg" className="rounded-full">
                    Speak with an Expert
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Submit Brief', step: 1 },
                  { label: 'Get Matched', step: 2 },
                  { label: 'Review Drafts', step: 3 },
                  { label: 'Final Delivery', step: 4 },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-left"
                  >
                    <span className="text-sky-200 font-bold text-2xl opacity-70">0{item.step}</span>
                    <p className="text-white font-semibold mt-2 text-sm">{item.label}</p>
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
