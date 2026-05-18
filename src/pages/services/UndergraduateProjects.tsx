import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UndergraduateProjects() {
  const departments = [
    "Business Administration", "Computer Science", "Engineering", "Medicine", 
    "Law", "Social Sciences", "Education", "Economics", 
    "Mass Communication", "Accounting", "Banking & Finance"
  ];

  const features = [
    { title: "Complete Chapters 1-5", desc: "Full project from introduction to conclusion" },
    { title: "Data Analysis", desc: "Expert SPSS, Excel, or STATA analysis included" },
    { title: "Supervisor Support", desc: "Guidance through all supervisor feedback rounds" },
    { title: "Free Plagiarism Report", desc: "Complimentary Turnitin certificate included" },
    { title: "Proper Referencing", desc: "Flawless APA, Harvard, MLA, or Chicago style" },
    { title: "Unlimited Revisions", desc: "Until your supervisor gives the final approval" }
  ];

  const steps = [
    { id: 1, title: "Submit Topic", desc: "Share your topic and guidelines" },
    { id: 2, title: "Get Quote", desc: "We send you a fair project quote" },
    { id: 3, title: "We Write", desc: "Chapter-by-chapter delivery & review" },
    { id: 4, title: "Defend", desc: "Submit and defend your work confidently" }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Undergraduate Project Writing - Loba Consulting</title>
        <meta name="description" content="Complete final year undergraduate projects across all departments. Expert assistance from proposal to final defense." />
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
            Final Year Projects
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Undergraduate Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Complete final year projects — all chapters — across all departments 
            worldwide. From proposal to final defense, we support you all the way.
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
                  <p>Our undergraduate project writing service provides complete final year project assistance from proposal to final chapters. We cover all departments and fields of study, delivering well-researched, properly structured academic projects that meet your institution's standards.</p>
                  <p>Whether you're in Business Administration, Engineering, Computer Science, Social Sciences, or any other field, our expert writers have the expertise to deliver quality work that will help you defend confidently.</p>
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
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-left">Departments We Cover</h2>
                <div className="flex flex-wrap gap-2">
                  {departments.map((dept, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                      {dept}
                    </span>
                  ))}
                  <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium italic">
                    And many more...
                  </span>
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
                    <span className="font-bold text-slate-900">5 - 14 Days</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Chapters</span>
                    <span className="font-bold text-slate-900">1 - 5 (Full)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Format</span>
                    <span className="font-bold text-slate-900">APA / Harvard</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500">Revisions</span>
                    <span className="font-bold text-green-600">Unlimited</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/quote?service=undergraduate-projects" className="btn-primary w-full text-center block">
                    Get a Quote
                  </Link>
                  <a href="https://wa.me/qr/NOG2LSMOM3A3O1" className="flex items-center justify-center gap-2 w-full py-3 bg-whatsapp text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-900 mb-1">Progressive Delivery</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Get chapters as they are completed so you can get early feedback from your supervisor.
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
