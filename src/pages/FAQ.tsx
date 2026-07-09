import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const FAQS = [
  {
    question: 'Is the work original and plagiarism-free?',
    answer:
      'Yes, all work is written from scratch and thoroughly checked to ensure it is plagiarism-free before delivery. We can provide a plagiarism report upon request for projects and thesis work.',
  },
  {
    question: 'Do you always meet deadlines?',
    answer:
      'Yes, we prioritize timely delivery and keep you updated throughout the process. Urgent requests are accommodated with a small additional fee, provided we have the capacity to deliver without sacrificing quality.',
  },
  {
    question: 'Can I request revisions after delivery?',
    answer:
      'Absolutely. We offer free revisions until you are fully satisfied, provided the revision aligns with the original instructions given at the start of the project.',
  },
  {
    question: 'How do payments work?',
    answer:
      'For project work, we typically operate on a milestone basis (e.g., 60% upfront to begin, 40% before final delivery). For smaller tasks like CVs or essays, full payment may be required upfront. We\'ll confirm the specific structure in your quote.',
  },
  {
    question: 'Is my information kept confidential?',
    answer:
      'Yes. All client information and project details are treated with strict confidentiality. We never share your work or personal data with third parties.',
  },
  {
    question: 'Do you handle international students?',
    answer:
      'Yes, we work with students internationally. We accept various international payment methods. Please contact us directly for details if you are outside Nigeria.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply reach out via the \'Get a Quote\' form, WhatsApp, or email with your project requirements. We\'ll review your request and send a clear quote within 24 hours.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="text-left">
      <Helmet>
        <title>Frequently Asked Questions - Loba Consulting</title>
        <meta
          name="description"
          content="Find answers to common questions about Loba Consulting's academic and business writing services, payments, and revisions."
        />
      </Helmet>

      {/* Header */}
      <section className="relative overflow-hidden bg-brand-ice py-16 md:py-20 border-b border-slate-200/60">
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-5"
          >
            Need Answers?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-5"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Find quick answers to common questions about our services, process, and policies.
          </motion.p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-brand-blue/25 bg-brand-ice/60 shadow-[0_8px_24px_rgba(51,122,183,0.08)]'
                      : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-inset cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-bold pr-4 transition-colors ${
                        isOpen ? 'text-primary' : 'text-slate-900'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-primary/10 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-20 p-10 md:p-12 bg-gradient-to-br from-brand-navy to-primary rounded-[32px] text-white text-center relative overflow-hidden shadow-[0_20px_50px_rgba(22,34,53,0.2)]">
            <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
              <div className="absolute top-8 left-8 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-brand-blue rounded-full blur-3xl" />
            </div>

            <h3 className="text-2xl font-heading font-bold mb-3 relative z-10">Still have questions?</h3>
            <p className="text-white/65 mb-8 max-w-lg mx-auto relative z-10">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our team directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="white" size="lg" className="w-full rounded-full">
                  Reach Out
                </Button>
              </Link>
              <a
                href="https://wa.me/qr/NOG2LSMOM3A3O1"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-whatsapp text-white rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg shadow-whatsapp/20"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/55 border-t border-white/10 pt-7 relative z-10">
              <a
                href="mailto:lobaconsulting2@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={15} />
                <span>lobaconsulting2@gmail.com</span>
              </a>
              <a href="tel:08085847676" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} />
                <span>08085847676</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
