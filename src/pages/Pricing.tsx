import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Clock, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Pricing() {
  const plans = [
    {
      title: 'Short-form Academic Work',
      category: 'Assignments & Articles',
      features: [
        'Assignments & Essays',
        'Academic Articles',
        'Seminar Writeups',
        'Presentations (PPTX)',
        'Free Revisions',
      ],
      delivery: '12 hrs – 5 days',
      rush: 'Rush same-day option available',
      featured: false,
    },
    {
      title: 'Full Academic Documents',
      category: 'Projects & Thesis',
      badge: 'Most Popular',
      features: [
        'Undergraduate Projects',
        'Masters Thesis',
        'Dissertations',
        'Data Analysis (SPSS)',
        'Plagiarism Report',
        'Unlimited Revisions',
      ],
      delivery: '5 – 30 days',
      rush: 'Chapter-by-chapter delivery available',
      featured: true,
    },
    {
      title: 'Professional Documents',
      category: 'Business Writing',
      features: [
        'Business Proposals',
        'Business Plans',
        'Company Profiles',
        'CV & Cover Letters',
        'Professional Formatting',
        'Free Revisions',
      ],
      delivery: '24 hrs – 7 days',
      rush: 'Urgent same-day available',
      featured: false,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Pricing & Packages - Loba Consulting</title>
        <meta
          name="description"
          content="Transparent pricing for academic and business writing services. Clear, fair pricing with no hidden fees."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ice py-16 md:py-20 border-b border-slate-200/60">
        <div className="absolute -top-20 right-0 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-5"
          >
            Transparent Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-5"
          >
            Pricing & Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Clear, fair pricing with no hidden fees. Final cost may vary based on complexity, word count, and technical
            requirements.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex flex-col p-8 rounded-[28px] border transition-all ${
                  plan.featured
                    ? 'border-brand-blue/30 shadow-[0_16px_40px_rgba(51,122,183,0.12)] bg-white md:scale-[1.03] z-10 ring-1 ring-brand-blue/15'
                    : 'border-slate-100 bg-white/90 shadow-[0_8px_24px_rgba(17,43,85,0.04)] hover:border-slate-200 hover:shadow-lg'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ring-4 ring-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-7">
                  <span className="text-[10px] font-bold text-brand-blue tracking-widest uppercase block mb-3">
                    {plan.category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-1 leading-tight">{plan.title}</h3>
                </div>

                <ul className="space-y-3.5 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-600 text-left">
                      <div className="mt-0.5 bg-emerald-50 rounded-full p-0.5 text-emerald-600 shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-100 mb-7 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock size={15} className="text-brand-blue" />
                    <span>
                      Delivery: <span className="font-bold text-primary">{plan.delivery}</span>
                    </span>
                  </div>
                  <p className="text-[10px] text-brand-blue-dark font-bold uppercase tracking-wider pl-6 italic">
                    {plan.rush}
                  </p>
                </div>

                <Link to="/quote" className="block mt-auto">
                  <Button
                    variant={plan.featured ? 'primary' : 'outline'}
                    className="w-full rounded-full"
                  >
                    Get a Quote
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 bg-brand-ice rounded-2xl p-6 border border-slate-200/60 max-w-4xl mx-auto flex gap-4 text-left items-start shadow-sm">
            <Info className="text-brand-blue shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-primary">Notice:</strong> Urgent requests may attract additional fees. All
              payments are final and non-refundable. Revisions are free when they align with the original project
              instructions provided at the start of the engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-navy to-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl font-heading font-bold mb-5">Have more questions?</h2>
          <p className="text-white/65 mb-9 max-w-2xl mx-auto leading-relaxed">
            Check our frequently asked questions for detailed information about how we work, payment methods, and our
            revision policy.
          </p>
          <Link to="/faq">
            <Button variant="white" size="lg" className="group rounded-full">
              View FAQ <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
