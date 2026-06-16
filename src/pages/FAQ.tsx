import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Mail, Phone, 
    // ArrowLeft
 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    question: "Is the work original and plagiarism-free?",
    answer: "Yes, all work is written from scratch and thoroughly checked to ensure it is plagiarism-free before delivery. We can provide a plagiarism report upon request for projects and thesis work."
  },
  {
    question: "Do you always meet deadlines?",
    answer: "Yes, we prioritize timely delivery and keep you updated throughout the process. Urgent requests are accommodated with a small additional fee, provided we have the capacity to deliver without sacrificing quality."
  },
  {
    question: "Can I request revisions after delivery?",
    answer: "Absolutely. We offer free revisions until you are fully satisfied, provided the revision aligns with the original instructions given at the start of the project."
  },
  {
    question: "How do payments work?",
    answer: "For project work, we typically operate on a milestone basis (e.g., 60% upfront to begin, 40% before final delivery). For smaller tasks like CVs or essays, full payment may be required upfront. We'll confirm the specific structure in your quote."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes. All client information and project details are treated with strict confidentiality. We never share your work or personal data with third parties."
  },
  {
    question: "Do you handle international students?",
    answer: "Yes, we work with students internationally. We accept various international payment methods. Please contact us directly for details if you are outside Nigeria."
  },
  {
    question: "How do I get started?",
    answer: "Simply reach out via the 'Get a Quote' form, WhatsApp, or email with your project requirements. We'll review your request and send a clear quote within 24 hours."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-20 text-left">
      <Helmet>
        <title>Frequently Asked Questions - Loba Consulting</title>
        <meta name="description" content="Find answers to common questions about Loba Consulting's academic and business writing services, payments, and revisions." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            Need Answers?
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Find quick answers to common questions about our services, process, and policies.
          </motion.p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-2xl transition-all duration-300 ${
                  activeIndex === index 
                    ? 'border-primary bg-primary/5 shadow-sm' 
                    : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold transition-colors ${
                    activeIndex === index ? 'text-primary' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-400 transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180 text-primary' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-primary/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">Still have questions?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
              Can't find the answer you're looking for? Reach out to our team directly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                to="/contact"
                className="btn-primary w-full sm:w-auto"
              >
                Reach Out
              </Link>
              <a
                href="https://wa.me/qr/NOG2LSMOM3A3O1"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp text-white rounded-xl font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400 border-t border-white/5 pt-8">
                <a href="mailto:lobaconsulting2@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} />
                    <span>lobaconsulting2@gmail.com</span>
                </a>
                <a href="tel:08085847676" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone size={16} />
                    <span>08085847676</span>
                </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
