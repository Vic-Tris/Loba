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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ALL_SERVICES = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    desc: 'Turn raw data into meaningful insights. We handle SPSS, R, Python, and Excel data processing for researchers.',
    icon: Database,
    features: ['Statistical Testing', 'Visualizations', 'Methodology Support', 'Reporting'],
    color: 'bg-blue-600'
  },
  {
    id: 'thesis',
    title: 'Thesis & Dissertations',
    desc: 'From proposal to final defense. Comprehensive academic support for PhD and Master’s candidates.',
    icon: Award,
    features: ['Topic Selection', 'Literature Review', 'Data Collection', 'Final Editing'],
    color: 'bg-purple-600'
  },
  {
    id: 'articles',
    title: 'Academic Articles',
    desc: 'Prepare your research for world-class journals. Our experts refine your work for maximum impact.',
    icon: FileSearch,
    features: ['Journal Formatting', 'Citation Correction', 'Executive Summaries', 'Proofreading'],
    color: 'bg-green-600'
  },
  {
    id: 'business',
    title: 'Business Proposals',
    desc: 'Win investors and clients with high-impact business documentation tailored to your industry.',
    icon: Briefcase,
    features: ['Market Analysis', 'Financial Projections', 'Executive Summary', 'Pitch Decks'],
    color: 'bg-amber-600'
  },
  {
    id: 'presentations',
    title: 'Academic Presentations',
    desc: 'Captivating slides and speeches for your defense or conference presentation.',
    icon: Presentation,
    features: ['PowerPoint Design', 'Speaker Notes', 'Q&A Prep', 'Visual Assets'],
    color: 'bg-rose-600'
  },
  {
    id: 'undergrad',
    title: 'Undergraduate Projects',
    desc: 'Simplified project management and writing support for final year students across all faculties.',
    icon: PenTool,
    features: ['Chapter 1-5 Support', 'Reference Styling', 'Format Alignment', 'Concept Notes'],
    color: 'bg-indigo-600'
  }
];

export default function Services() {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore the wide range of academic and professional consulting services offered by Loba Consulting." 
      />

      {/* Header */}
      <section className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Expert Services for <br/> Academic & Career <span className="text-primary-light">Growth.</span></h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              We provide precision-driven consulting solutions that bridge the gap between academic research and professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ALL_SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col p-10 rounded-[40px] border border-slate-100 bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all text-left"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon size={30} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <ul className="mb-8 space-y-3">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={16} className="text-primary-light" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to={`/quotes?service=${service.id}`} className="w-full">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    Get a Quote <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[48px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Need a custom <br/> service package?</h2>
                <p className="text-white/60 mb-10 max-w-md">Our consultants can design a bespoke support plan for larger research teams or multi-stage projects.</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button variant="white" size="lg">Speak with an Expert</Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Submit Brief', step: 1 },
                  { label: 'Get Matched', step: 2 },
                  { label: 'Review Drafts', step: 3 },
                  { label: 'Final Delivery', step: 4 }
                ].map(item => (
                  <div key={item.step} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-left">
                    <span className="text-primary-light font-bold text-3xl opacity-40">0{item.step}</span>
                    <p className="text-white font-semibold mt-2">{item.label}</p>
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
