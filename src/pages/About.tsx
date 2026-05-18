import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, ShieldCheck, Users, Target, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Years of Experience", value: "2+" },
    { label: "Core Services", value: "8" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  const features = [
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "On-Time Delivery, Always",
      description: "We respect deadlines. Your work is delivered on schedule, guaranteed."
    },
    {
      icon: <ShieldCheck className="text-primary" size={24} />,
      title: "Plagiarism-Free Work",
      description: "Every project is original and verified for academic integrity."
    },
    {
      icon: <CheckCircle2 className="text-primary" size={24} />,
      title: "Free Revisions",
      description: "We revise until you are completely satisfied — at no extra cost."
    },
    {
      icon: <ShieldCheck className="text-primary" size={24} />,
      title: "100% Confidentiality",
      description: "Your information and work are treated with strict privacy at all times."
    },
    {
      icon: <Award className="text-primary" size={24} />,
      title: "Professional Output",
      description: "Expert-level research and writing that meets the highest academic standards."
    }
  ];

  const testimonials = [
    {
      quote: "Oluwatobiloba polished my business proposal to perfection. My supervisor said it was one of the best structured he'd seen. It landed me a major client deal!",
      author: "Chioma Eyinnaya",
      initials: "CE",
      color: "bg-[#003262]"
    },
    {
      quote: "Struggled with my research chapter until Oluwatobiloba stepped in. Supervisor raved about the rigorous analysis. A grade and department award.",
      author: "Daniel Osaro",
      initials: "DO",
      color: "bg-green-700"
    },
    {
        quote: "From rejection risk to A grade glory! His tips on avoiding common pitfalls made my supervisor praise the clarity and originality.",
        author: "Liasu Mobosola",
        initials: "LM",
        color: "bg-blue-800"
    }
  ];

  return (
    <div className="pt-20 text-left">
      <Helmet>
        <title>About Us - Loba Consulting</title>
        <meta name="description" content="Learn about Loba Consulting, our mission, our values, and the team led by Ogunleye Oluwatobiloba." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
              Who We Are
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-8 leading-tight"
            >
              Excellence in Academic <br /> & Professional Support
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed mb-10"
            >
              We are a dedicated team of academic writing consultants committed to 
              helping students and professionals deliver high-quality documents 
              with absolute confidence.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-200/60">
                {stats.map((stat, i) => (
                    <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Our Mission & Approach</h2>
              <p>
                With years of combined experience in research, writing, and academic support, 
                our team handles thesis development, manuscript editing, accurate referencing 
                including APA, and complex academic tasks across different fields.
              </p>
              <p>
                We understand how demanding academic work can be, so we focus on making 
                the process easier, faster, and more reliable for you. Our work is guided 
                by clarity, quality, and timely delivery.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="text-primary" size={28} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-2 underline decoration-primary/30 decoration-4 underline-offset-4">Led by Experts</h4>
                    <p className="text-sm">
                        Our team is led by <strong>Ogunleye Oluwatobiloba</strong>, an experienced 
                        academic consultant with a strong background in student leadership, 
                        tutoring, and research support.
                    </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Why Choose Us</h2>
              <div className="grid grid-cols-1 gap-6">
                {features.map((feature, i) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="shrink-0 mt-1">{feature.icon}</div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Client Stories</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mt-4">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className="text-amber-400" />)}
                            </div>
                            <p className="text-slate-600 italic text-base leading-relaxed mb-8">"{t.quote}"</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xs`}>
                                {t.initials}
                            </div>
                            <cite className="not-italic font-bold text-slate-900 text-sm tracking-tight">{t.author}</cite>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
                    <Target className="text-primary" size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Limited Slots Weekly</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Ready to Get Started?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
                    Let's help you deliver your work professionally and on time. 
                    Reach out today and secure your spot for the week.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/contact">
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-10 text-base">
                            Contact Us
                        </Button>
                    </Link>
                    <a href="https://wa.me/qr/NOG2LSMOM3A3O1" className="flex items-center justify-center gap-3 px-10 py-4 bg-whatsapp text-white rounded-xl font-bold hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:scale-95">
                        <MessageCircle size={22} />
                        <span>Chat on WhatsApp</span>
                    </a>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
