import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, ShieldCheck, Users, Target, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Years of Experience', value: '2+' },
    { label: 'Core Services', value: '8' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  const features = [
    {
      icon: <Clock className="text-brand-blue" size={22} />,
      title: 'On-Time Delivery, Always',
      description: 'We respect deadlines. Your work is delivered on schedule, guaranteed.',
    },
    {
      icon: <ShieldCheck className="text-brand-blue" size={22} />,
      title: 'Plagiarism-Free Work',
      description: 'Every project is original and verified for academic integrity.',
    },
    {
      icon: <CheckCircle2 className="text-brand-blue" size={22} />,
      title: 'Free Revisions',
      description: 'We revise until you are completely satisfied — at no extra cost.',
    },
    {
      icon: <ShieldCheck className="text-brand-blue" size={22} />,
      title: '100% Confidentiality',
      description: 'Your information and work are treated with strict privacy at all times.',
    },
    {
      icon: <Award className="text-brand-blue" size={22} />,
      title: 'Professional Output',
      description: 'Expert-level research and writing that meets the highest academic standards.',
    },
  ];

  const testimonials = [
    {
      quote:
        "Oluwatobiloba polished my business proposal to perfection. My supervisor said it was one of the best structured he'd seen. It landed me a major client deal!",
      author: 'Chioma Eyinnaya',
      initials: 'CE',
      color: 'bg-primary',
    },
    {
      quote:
        'Struggled with my research chapter until Oluwatobiloba stepped in. Supervisor raved about the rigorous analysis. A grade and department award.',
      author: 'Daniel Osaro',
      initials: 'DO',
      color: 'bg-success',
    },
    {
      quote:
        'From rejection risk to A grade glory! His tips on avoiding common pitfalls made my supervisor praise the clarity and originality.',
      author: 'Liasu Mobosola',
      initials: 'LM',
      color: 'bg-brand-blue',
    },
  ];

  return (
    <div className="text-left">
      <Helmet>
        <title>About Us - Loba Consulting</title>
        <meta
          name="description"
          content="Learn about Loba Consulting, our mission, our values, and the team led by Ogunleye Oluwatobiloba."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ice py-16 md:py-24 border-b border-slate-200/60">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex rounded-full bg-white border border-slate-200 shadow-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary mb-6"
            >
              Who We Are
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight"
            >
              Excellence in Academic <br /> & Professional Support
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="text-lg md:text-xl text-text-body leading-relaxed mb-10"
            >
              We are a dedicated team of academic writing consultants committed to helping students and professionals
              deliver high-quality documents with absolute confidence.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-slate-200/70">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_4px_16px_rgba(17,43,85,0.04)]"
                >
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Why */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div className="space-y-6 text-text-body leading-relaxed">
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Our Mission & Approach</h2>
              <p>
                With years of combined experience in research, writing, and academic support, our team handles thesis
                development, manuscript editing, accurate referencing including APA, and complex academic tasks across
                different fields.
              </p>
              <p>
                We understand how demanding academic work can be, so we focus on making the process easier, faster, and
                more reliable for you. Our work is guided by clarity, quality, and timely delivery.
              </p>
              <div className="bg-brand-ice p-7 rounded-3xl border border-slate-200 flex gap-5 items-start shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                  <Users className="text-primary" size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Led by Experts</h4>
                  <p className="text-sm text-text-body">
                    Our team is led by <strong className="text-primary">Ogunleye Oluwatobiloba</strong>, an experienced academic consultant with a
                    strong background in student leadership, tutoring, and research support.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Why Choose Us</h2>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_16px_rgba(17,43,85,0.03)] hover:border-brand-blue/20 hover:shadow-md transition-all"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-ice flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-text-body leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-brand-ice/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-3">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgba(17,43,85,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={15} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>
                  <p className="text-text-body italic text-base leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xs`}
                  >
                    {t.initials}
                  </div>
                  <cite className="not-italic font-bold text-primary text-sm tracking-tight">{t.author}</cite>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-brand-navy to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full mb-8">
              <Target className="text-sky-200" size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Limited Slots Weekly</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
              Let&apos;s help you deliver your work professionally and on time. Reach out today and secure your spot for
              the week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="white" size="lg" className="w-full sm:w-auto h-14 px-10 text-base rounded-full">
                  Contact Us
                </Button>
              </Link>
              <a
                href="https://wa.me/qr/NOG2LSMOM3A3O1"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-whatsapp text-white rounded-full font-bold hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-whatsapp/20"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
