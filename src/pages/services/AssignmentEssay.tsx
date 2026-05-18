import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AssignmentEssay() {
  const features = [
    { title: "Custom-Written", desc: "100% original content tailored to you" },
    { title: "Proper Formatting", desc: "APA, MLA, Harvard, or Chicago style" },
    { title: "Well-Researched", desc: "Evidence-based with credible sources" },
    { title: "Plagiarism-Free", desc: "Turnitin report provided upon request" },
    { title: "Fast Turnaround", desc: "Delivery in as little as 12 hours" },
    { title: "Unlimited Revisions", desc: "We'll tweak it until you're satisfied" }
  ];

  const steps = [
    { id: 1, title: "Submit Topic", desc: "Share your assignment guidelines" },
    { id: 2, title: "Get Quote", desc: "Quick price estimate in 24h" },
    { id: 3, title: "We Write", desc: "Quality work delivered on time" },
    { id: 4, title: "Submit", desc: "Submit your work with confidence" }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Assignment & Essay Writing - Loba Consulting</title>
        <meta name="description" content="Structured, well-referenced assignment responses with clear arguments for any course. Custom-written to meet your requirements." />
      </Helmet>

      {/* Back Button */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
          <ArrowLeft size={18} />
          <span>Back to Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-bold text-primary tracking-widest uppercase mb-4"
          >
            Academic Support
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Assignments & Essays
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Structured, well-referenced assignment responses with clear arguments 
            for any course. Custom-written to meet your specific university requirements.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-left">About This Service</h2>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-4 text-left">
                  <p>Our assignment and essay writing service provides custom-written, well-structured responses for any course or subject. Whether you need help with a short essay or a comprehensive assignment, we deliver quality work that meets academic standards.</p>
                  <p>Every piece of work is original, properly referenced, and tailored to your specific requirements and guidelines. We focus on clarity, depth, and academic integrity.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-left">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 text-left">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-left">How It Works</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {steps.map((step) => (
                    <div key={step.id} className="text-center space-y-3">
                      <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-primary/20">
                        {step.id}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{step.title}</h4>
                        <p className="text-xs text-slate-500">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm sticky top-24 text-left">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-6">Service Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Delivery Time</span>
                    <span className="font-bold text-slate-900">12h - 3 Days</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Word Count</span>
                    <span className="font-bold text-slate-900">500 - 5,000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Format</span>
                    <span className="font-bold text-slate-900">Any Style</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500">Revisions</span>
                    <span className="font-bold text-green-600">Unlimited</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/quote?service=assignments-essay" className="btn-primary w-full text-center block">
                    Get a Quote
                  </Link>
                  <a href="https://wa.me/qr/NOG2LSMOM3A3O1" className="flex items-center justify-center gap-2 w-full py-3 bg-whatsapp text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-900 mb-1">Fast Submission Help</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Have a tight deadline? We specialize in high-quality, fast-turnaround essays and assignments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
