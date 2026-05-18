import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Clock, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Pricing() {
  const plans = [
    {
      title: "Short-form Academic Work",
      category: "Assignments & Articles",
      features: [
        "Assignments & Essays",
        "Academic Articles",
        "Seminar Writeups",
        "Presentations (PPTX)",
        "Free Revisions"
      ],
      delivery: "12 hrs – 5 days",
      rush: "Rush same-day option available",
      featured: false
    },
    {
      title: "Full Academic Documents",
      category: "Projects & Thesis",
      badge: "Most Popular",
      features: [
        "Undergraduate Projects",
        "Masters Thesis",
        "Dissertations",
        "Data Analysis (SPSS)",
        "Plagiarism Report",
        "Unlimited Revisions"
      ],
      delivery: "5 – 30 days",
      rush: "Chapter-by-chapter delivery available",
      featured: true
    },
    {
      title: "Professional Documents",
      category: "Business Writing",
      features: [
        "Business Proposals",
        "Business Plans",
        "Company Profiles",
        "CV & Cover Letters",
        "Professional Formatting",
        "Free Revisions"
      ],
      delivery: "24 hrs – 7 days",
      rush: "Urgent same-day available",
      featured: false
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Pricing & Packages - Loba Consulting</title>
        <meta name="description" content="Transparent pricing for academic and business writing services. Clear, fair pricing with no hidden fees." />
      </Helmet>

      {/* Hero Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            Transparent Pricing
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Pricing & Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Clear, fair pricing with no hidden fees. Final cost may vary based on 
            complexity, word count, and technical requirements.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.featured 
                    ? 'border-primary shadow-2xl shadow-primary/5 bg-white md:scale-105 z-10' 
                    : 'border-slate-100 bg-white hover:border-slate-200'
                } transition-all`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ring-4 ring-white">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-3">
                    {plan.category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1 leading-tight">
                    {plan.title}
                  </h3>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-600 text-left">
                      <div className="mt-0.5 bg-green-50 rounded-full p-0.5 text-green-600 shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-slate-50 mb-8 space-y-3">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock size={16} />
                    <span>Delivery: <span className="font-bold text-slate-900">{plan.delivery}</span></span>
                  </div>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider pl-6 italic">
                    {plan.rush}
                  </p>
                </div>

                <Link to="/quote" className="block">
                  <Button 
                    variant={plan.featured ? 'primary' : 'outline'} 
                    className="w-full"
                  >
                    Get a Quote
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50/50 rounded-2xl p-6 border border-blue-100 max-w-4xl mx-auto flex gap-4 text-left items-start">
            <Info className="text-blue-500 shrink-0 mt-1" size={20} />
            <p className="text-sm text-blue-900/70 leading-relaxed italic">
              <strong>Notice:</strong> Urgent requests may attract additional fees. All payments are final and non-refundable. 
              Revisions are free when they align with the original project instructions provided at the start of the engagement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Link CTA */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Have more questions?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Check our frequently asked questions for detailed information about how we work, 
            payment methods, and our revision policy.
          </p>
          <Link to="/faq">
            <Button variant="secondary" size="lg" className="group">
              View FAQ <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
