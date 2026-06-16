import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button'; // Fixed import path

export default function AcademicPresentations() {
  const features = [
    { title: "Custom Slide Design", desc: "Unique theme and layouts for your content" },
    { title: "Speaker Notes", desc: "Full performance script included for every slide" },
    { title: "Charts & Infographics", desc: "Visual data representation for maximum impact" },
    { title: "PPTX + PDF Format", desc: "Editable and shareable professional files" },
    { title: "Template Branding", desc: "Tailored to your institution or company brand" },
    { title: "Animation & Motion", desc: "Engaging transitions and slide animations" }
  ];

  const steps = [
    { id: 1, title: "Share Content", desc: "Send your outline or draft" },
    { id: 2, title: "Design", desc: "We create the visual slides" },
    { id: 3, title: "Review", desc: "Full review and adjustments" },
    { id: 4, title: "Deliver", desc: "Get your polished PPTX file" }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Academic Presentations & PPT - Loba Consulting</title>
        <meta name="description" content="Professional PPTX slides with stunning design, speaker notes, and compelling visuals. Impress your audience with polished academic presentations." />
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
            Visual Communication
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            Academic Presentations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Professional PPTX slides with stunning design, speaker notes, and compelling 
            visuals. Impress your audience with polished and persuasive presentations.
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
                <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-left">About This Service</h2>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-4 text-left">
                  <p>Our presentation design service creates professional PowerPoint slides that captivate your audience. Whether you need slides for a seminar, defense, or business presentation, we deliver visually stunning and well-organized content.</p>
                  <p>We don't just put text on slides; we design an experience. With custom graphics, clear layouts, and professionally written speaker notes, you'll feel confident and prepared for your presentation.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-left">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 text-left">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-left">How It Works</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {steps.map((step) => (
                    <div key={step.id} className="text-center space-y-3">
                      <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-primary/20">
                        {step.id}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{step.title}</h4>
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
                <h3 className="text-xl font-heading font-bold text-primary mb-6">Service Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Delivery Time</span>
                    <span className="font-bold text-primary">24h - 3 Days</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Slides</span>
                    <span className="font-bold text-primary">10 - 50+</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Format</span>
                    <span className="font-bold text-primary">Editable PPTX</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500">Speaker Notes</span>
                    <span className="font-bold text-green-600">Included</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Fixed structure and parameter target */}
                  <Link to="/quote?service=academic-presentations" className="block w-full">
                    <Button variant="primary" size="lg" className="w-full">
                      Get a Quote
                    </Button>
                  </Link>
                  <a 
                    href="https://wa.me/qr/NOG2LSMOM3A3O1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-3 bg-whatsapp text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-sm font-bold text-primary mb-1">Defense Ready?</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We specialize in academic defense slides. Our speaker notes guide you through every point to ensure a smooth presentation.
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