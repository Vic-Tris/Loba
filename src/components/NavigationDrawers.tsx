import React, { useEffect } from 'react';
import { X, Award, CheckCircle, Info, Heart } from 'lucide-react';

export interface NavigationDrawersProps {
  activeTopic: string | null;
  onClose: () => void;
  onScheduleClick: () => void;
}

export default function NavigationDrawers({ activeTopic, onClose, onScheduleClick }: NavigationDrawersProps) {
  if (!activeTopic || activeTopic === 'home') return null;

  useEffect(() => {
    if (activeTopic && activeTopic !== 'home') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeTopic]);

  // Local interactive states
  const [quoteService, setQuoteService] = React.useState('');
  const [quoteUrgency, setQuoteUrgency] = React.useState('standard');
  const [quoteDraft, setQuoteDraft] = React.useState('');
  const [quotePageEst, setQuotePageEst] = React.useState('');
  const [quoteName, setQuoteName] = React.useState('');
  const [quoteEmail, setQuoteEmail] = React.useState('');
  const [quoteContext, setQuoteContext] = React.useState('');
  const [quoteSent, setQuoteSent] = React.useState(false);

  const [faqExpanded, setFaqExpanded] = React.useState<Record<number, boolean>>({});
  const [messageSent, setMessageSent] = React.useState(false);

  const toggleFaq = (idx: number) => {
    setFaqExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getLeftPanelContent = () => {
    switch (activeTopic) {
      case 'about':
        return {
          title: 'About Us',
          tagline: 'Loba Consulting Group',
          desc: '',
          stats: ''
        };
      case 'services':
        return {
          title: 'Our Expertise',
          tagline: 'Proven Scholarly Directives',
          desc: 'We offer robust services specifically designed to secure excellence across departments worldwide.',
          stats: '8 Core Services'
        };
      case 'pricing':
        return {
          title: 'Transparent Pricing',
          tagline: 'Pricing & Packages',
          desc: 'Clear upfront values with zero surprise surcharges or administrative overhead.',
          stats: '100% Satisfaction Rate'
        };
      case 'quote':
        return {
          title: 'Quote Generation',
          tagline: 'Request a Custom Estimate',
          desc: 'Get a comprehensive review of your project requirements by a subject matter expert in under 2 hours.',
          stats: 'Confidential & Secure'
        };
      case 'faq':
        return {
          title: 'Need Answers?',
          tagline: 'Frequently Asked Questions',
          desc: 'Read direct guidelines detailing our submission policies, modifications rules, and project guarantees.',
          stats: 'Full Transparency'
        };
      case 'contact':
        return {
          title: 'Direct Canal',
          tagline: 'Let’s Discuss Your Success',
          desc: 'Connect immediately. Fill out the contact inquiry or chat with us directly on active social channels.',
          stats: 'Instant Replies'
        };
      default:
        return {
          title: 'Loba Consulting',
          tagline: 'Excellence in Support',
          desc: 'Premium scholarly tutoring and professional corporate project design.',
          stats: 'LOBA Advisory'
        };
    }
  };

  const leftPanel = getLeftPanelContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-blue/35 p-4 backdrop-blur-md animate-fade-in select-none" onClick={onClose}>
      <div 
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/50 flex flex-col md:flex-row max-h-[90vh]"
        id="nav-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Brand Accent Column */}
        <div className="hidden md:flex w-[280px] shrink-0 bg-brand-ice text-slate-800 p-7 flex-col justify-between relative overflow-hidden border-r border-slate-200/60">
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-brand-blue/10 blur-xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider mb-5">
              <Award size={13} className="text-brand-blue" />
              LOBA ADVISING
            </div>
            <h3 className="text-xl font-display font-black leading-snug tracking-tight text-slate-900">
              {leftPanel.title}
            </h3>
            <p className="mt-2 text-sm text-brand-blue-dark font-bold tracking-wide">
              {leftPanel.tagline}
            </p>
            {leftPanel.desc && (
              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-semibold">
                {leftPanel.desc}
              </p>
            )}
          </div>
          
          {leftPanel.stats && (
            <div className="relative z-10 border-t border-slate-200 pt-4 text-xs text-slate-500 font-mono tracking-wide font-bold">
              • {leftPanel.stats}
            </div>
          )}
        </div>

        {/* Right Side: Scrollable Interactive Content */}
        <div className="flex-grow flex flex-col min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200/50 px-7 py-5 bg-white/40">
            <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
              {activeTopic === 'about' && 'About Loba Consulting'}
              {activeTopic === 'services' && 'Our Services'}
              {activeTopic === 'pricing' && 'Pricing & Packages'}
              {activeTopic === 'quote' && 'Custom Quote Details'}
              {activeTopic === 'faq' && 'Frequently Asked Questions'}
              {activeTopic === 'contact' && 'Get in Touch'}
            </h2>
            <button 
              onClick={onClose}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-200/50 hover:text-slate-700 transition-colors pointer-cursor"
              id="close-modal-btn"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-7 space-y-6 max-h-[62vh]">
            
            {/* ================================= ABOUT VIEW ================================= */}
            {activeTopic === 'about' && (
              <div className="space-y-6 text-left">
                {/* Intro */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-ice text-brand-blue-dark text-[10px] font-bold uppercase tracking-wider mb-2">Who We Are</span>
                  <h3 className="text-lg font-display font-black text-slate-900 leading-tight">
                    Excellence in Academic & Professional Support
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-semibold">
                    We are a dedicated team of academic writing consultants committed to helping students and professionals deliver high-quality documents with absolute confidence.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-100">
                  <div className="text-left">
                    <div className="text-xl font-black text-slate-900">100+</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Projects Completed</div>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-black text-slate-900">2+</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Years of Experience</div>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-black text-slate-900">8</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Core Services</div>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-black text-slate-900">100%</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Client Satisfaction</div>
                  </div>
                </div>

                {/* Mission & Approach */}
                <div className="space-y-3">
                  <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Our Mission & Approach</h4>
                  <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                    With years of combined experience in research, writing, and academic support, our team handles thesis development, manuscript editing, accurate referencing including APA, and complex academic tasks across different fields.
                  </p>
                  <p className="text-xs text-slate-655 leading-relaxed font-semibold">
                    We understand how demanding academic work can be, so we focus on making the process easier, faster, and more reliable for you. Our work is guided by clarity, quality, and timely delivery.
                  </p>
                  
                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 mt-2">
                    <h5 className="font-bold text-xs text-slate-950">Led by Experts</h5>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      Our team is led by <strong>Ogunleye Oluwatobiloba</strong>, an experienced academic consultant with a strong background in student leadership, tutoring, and research support.
                    </p>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="space-y-3">
                  <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Why Choose Us</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="flex gap-2.5 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-900">On-Time Delivery, Always</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">We respect deadlines. Your work is delivered on schedule, guaranteed.</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-900">Plagiarism-Free Work</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Every project is original and verified for academic integrity.</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-900">Free Revisions</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">We revise until you are completely satisfied — at no extra cost.</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-900">100% Confidentiality</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Your information and work are treated with strict privacy at all times.</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-900">Professional Output</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Expert-level research and writing that meets the highest academic standards.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Stories */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">What Our Clients Say</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                      <p className="text-[10.5px] text-slate-600 italic leading-relaxed mb-4">
                        "Oluwatobiloba polished my business proposal to perfection. My supervisor said it was one of the best structured he'd seen. It landed me a major client deal!"
                      </p>
                      <cite className="not-italic font-bold text-[10px] text-slate-900 block">— Chioma Eyinnaya</cite>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                      <p className="text-[10.5px] text-slate-600 italic leading-relaxed mb-4">
                        "Struggled with my research chapter until Oluwatobiloba stepped in. Supervisor raved about the rigorous analysis. A grade and department award."
                      </p>
                      <cite className="not-italic font-bold text-[10px] text-slate-900 block">— Daniel Osaro</cite>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                      <p className="text-[10.5px] text-slate-600 italic leading-relaxed mb-4">
                        "From rejection risk to A grade glory! His tips on avoiding common pitfalls made my supervisor praise the clarity and originality."
                      </p>
                      <cite className="not-italic font-bold text-[10px] text-slate-900 block">— Liasu Mobosola</cite>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================= SERVICES VIEW ================================= */}
            {activeTopic === 'services' && (
              <div className="space-y-6 text-left">
                {/* Intro */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-ice text-brand-blue-dark text-[10px] font-bold uppercase tracking-wider mb-2">Our Expertise</span>
                  <h3 className="text-lg font-display font-black text-slate-900 leading-tight">
                    Empowering Your Academic Success
                  </h3>
                  <p className="mt-2 text-xs text-slate-605 text-slate-600 leading-relaxed font-semibold">
                    We offer a wide range of services specifically designed to help you excel. Our experts are dedicated to delivering excellence in every project.
                  </p>
                </div>

                {/* 8 Core Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/20 text-left">
                    <h4 className="font-bold text-slate-950 text-xs tracking-tight">Academic Articles</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Well-researched, properly cited articles for journals, seminars, and course submissions.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/20 text-left">
                    <h4 className="font-bold text-slate-950 text-xs tracking-tight">Undergraduate Projects</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Complete final year projects — all chapters — across all departments worldwide.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/20 text-left">
                    <h4 className="font-bold text-slate-950 text-xs tracking-tight">Thesis & Dissertations</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Masters and PhD-level thesis writing with deep research and proper university formatting.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/20 text-left">
                    <h4 className="font-bold text-slate-950 text-xs tracking-tight">Data Analysis</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      SPSS, Excel, STATA — full results tables, charts, and Chapter 4 write-up included.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/20 text-left">
                    <h4 className="font-bold text-slate-950 text-xs tracking-tight">Assignments & Essays</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Structured, well-referenced assignment responses with clear arguments for any course.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/20 text-left">
                    <h4 className="font-bold text-slate-950 text-xs tracking-tight">Academic Presentations</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Professional PPTX slides with design, speaker notes, and compelling visuals.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/20 text-left">
                    <h4 className="font-bold text-slate-950 text-xs tracking-tight">Business Proposals</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Investor-ready proposals, business plans, and detailed company profiles.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/20 text-left">
                    <h4 className="font-bold text-slate-950 text-xs tracking-tight">CV & Cover Letters</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      ATS-friendly CVs and cover letters for jobs and academic institutions worldwide.
                    </p>
                  </div>
                </div>

                {/* Bottom trust segment */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Why Students Trust Loba Consulting</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="flex gap-2 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-950">Expert Precision</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Every document is handled by seasoned experts in your specific field of study.</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-950">Fast Turnaround</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">We respect your deadlines and deliver results with incredible speed without sacrificing quality.</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-950">Original & Plagiarism-Free</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">We provide unique, custom-written content tailored to your specific requirements.</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start text-left">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                      <div>
                        <h5 className="font-bold text-[11px] text-slate-950">Confidentiality Guaranteed</h5>
                        <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Your privacy and academic integrity are our highest priorities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================= PRICING VIEW ================================= */}
            {activeTopic === 'pricing' && (
              <div className="space-y-6 text-left">
                {/* Intro */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-ice text-brand-blue-dark text-[10px] font-bold uppercase tracking-wider mb-2">Transparent Pricing</span>
                  <h3 className="text-lg font-display font-black text-slate-900 leading-tight">
                    Pricing & Packages
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-semibold">
                    Clear, fair pricing with no hidden fees. Final cost may vary based on complexity, word count, and technical requirements.
                  </p>
                </div>

                {/* Plans List */}
                <div className="space-y-4">
                  {/* Plan 1 */}
                  <div className="rounded-xl border border-slate-200/60 p-4 bg-white shadow-sm text-left">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-slate-900 text-xs">Short-form Academic Work</h4>
                      <span className="text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">Assignments & Articles</span>
                    </div>
                    <ul className="space-y-1.5 mt-3 text-[10.5px] text-slate-600 font-semibold">
                      <li className="flex items-center gap-2">• Assignments & Essays</li>
                      <li className="flex items-center gap-2">• Academic Articles</li>
                      <li className="flex items-center gap-2">• Seminar Writeups</li>
                      <li className="flex items-center gap-2">• Presentations (PPTX)</li>
                      <li className="flex items-center gap-2">• Free Revisions</li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[9.5px]/none text-slate-500 font-bold">
                      <span>Delivery: 12 hrs – 5 days</span>
                      <span className="text-brand-blue-dark italic font-mono uppercase tracking-wide">Rush same-day option available</span>
                    </div>
                  </div>

                  {/* Plan 2 */}
                  <div className="rounded-xl border border-brand-blue/30 p-4 bg-slate-50 shadow-sm text-left">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-slate-900 text-xs">Full Academic Documents</h4>
                      <span className="text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded bg-brand-blue text-white font-sans shadow-sm ring-2 ring-white">Most Popular</span>
                    </div>
                    <ul className="space-y-1.5 mt-3 text-[10.5px] text-slate-655 text-slate-600 font-semibold">
                      <li className="flex items-center gap-2">• Undergraduate Projects</li>
                      <li className="flex items-center gap-2">• Masters Thesis</li>
                      <li className="flex items-center gap-2">• Dissertations</li>
                      <li className="flex items-center gap-2">• Data Analysis (SPSS)</li>
                      <li className="flex items-center gap-2">• Plagiarism Report</li>
                      <li className="flex items-center gap-2">• Unlimited Revisions</li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-[9.5px]/none text-slate-500 font-bold">
                      <span>Delivery: 5 – 30 days</span>
                      <span className="text-brand-blue-dark italic font-mono uppercase tracking-wide">Chapter-by-chapter delivery available</span>
                    </div>
                  </div>

                  {/* Plan 3 */}
                  <div className="rounded-xl border border-slate-200/60 p-4 bg-white shadow-sm text-left">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-slate-900 text-xs">Professional Documents</h4>
                      <span className="text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">Business Writing</span>
                    </div>
                    <ul className="space-y-1.5 mt-3 text-[10.5px] text-slate-600 font-semibold">
                      <li className="flex items-center gap-2">• Business Proposals</li>
                      <li className="flex items-center gap-2">• Business Plans</li>
                      <li className="flex items-center gap-2">• Company Profiles</li>
                      <li className="flex items-center gap-2">• CV & Cover Letters</li>
                      <li className="flex items-center gap-2">• Professional Formatting</li>
                      <li className="flex items-center gap-2">• Free Revisions</li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[9.5px]/none text-slate-500 font-bold">
                      <span>Delivery: 24 hrs – 7 days</span>
                      <span className="text-brand-blue-dark italic font-mono uppercase tracking-wide">Urgent same-day available</span>
                    </div>
                  </div>
                </div>

                {/* Disclosure notice directly extracted */}
                <div className="rounded-xl bg-slate-100 border border-slate-200/60 p-4 mt-2 flex gap-2.5 items-start">
                  <Info size={14} className="text-slate-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-600 leading-normal font-bold">
                    <strong>Notice:</strong> Urgent requests may attract additional fees. All payments are final and non-refundable. Revisions are free when they align with the original project instructions provided at the start of the engagement.
                  </p>
                </div>
              </div>
            )}

            {/* ================================= GET A QUOTE VIEW ================================= */}
            {activeTopic === 'quote' && (
              <div className="space-y-6 text-left">
                {quoteSent ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-sm border border-emerald-200">
                      <CheckCircle size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs">Quote Request Submitted</h4>
                    <p className="text-[11px] text-slate-655 text-slate-600 max-w-sm mx-auto font-semibold leading-relaxed">
                      Thank you, <strong className="text-slate-800">{quoteName}</strong>. Our custom service counselors are drafting your estimate package and will email a quote to <strong className="text-slate-800">{quoteEmail}</strong> within 2 hours.
                    </p>
                    <button
                      onClick={() => {
                        setQuoteSent(false);
                        setQuoteName('');
                        setQuoteEmail('');
                        setQuoteDraft('');
                        setQuotePageEst('');
                        setQuoteContext('');
                      }}
                      className="rounded-full border border-slate-250 text-slate-705 text-slate-700 hover:bg-slate-50 px-4 py-1.5 text-[11px] font-bold mt-4 transition-all cursor-pointer shadow-sm"
                    >
                      Estimate Another Document
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteSent(true);
                  }} className="space-y-4 text-left">
                    {/* Header */}
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-ice text-brand-blue-dark text-[10px] font-bold uppercase tracking-wider mb-2">Tailored Pricing</span>
                      <h3 className="text-lg font-display font-black text-slate-900 leading-tight">Request a Custom Quote</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-normal font-semibold">
                        Every project is unique. Share your requirements with us, and we'll provide a transparent, flat-rate quote with a guaranteed delivery date.
                      </p>
                    </div>

                    {/* Features columns from HTML */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="p-3 bg-slate-55 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <h5 className="font-bold text-slate-900 text-[10px] uppercase">2-Hour Response</h5>
                        <p className="text-[9.5px] text-slate-450 text-slate-500 leading-normal mt-0.5">Average time to receive your custom quote.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <h5 className="font-bold text-slate-900 text-[10px] uppercase">No Hidden Fees</h5>
                        <p className="text-[9.5px] text-slate-500 leading-normal mt-0.5">Transparent pricing with zero surprise costs.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <h5 className="font-bold text-slate-900 text-[10px] uppercase">Expert Review</h5>
                        <p className="text-[9.5px] text-slate-500 leading-normal mt-0.5">Each request is reviewed by a subject matter expert.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <h5 className="font-bold text-slate-900 text-[10px] uppercase">Global Delivery</h5>
                        <p className="text-[9.5px] text-slate-500 leading-normal mt-0.5">We support students and professionals worldwide.</p>
                      </div>
                    </div>

                    {/* Form Details */}
                    <div className="border-t border-slate-100 pt-4 space-y-4">
                      <h4 className="font-bold text-slate-950 text-xs">Quote Details</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {/* Service category */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-700 mb-1 px-0.5">Service Category *</label>
                          <select
                            required
                            value={quoteService}
                            onChange={(e) => setQuoteService(e.target.value)}
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800"
                          >
                            <option value="">Select Service</option>
                            <option value="data-analysis">Data Analysis</option>
                            <option value="business">Business Proposals</option>
                            <option value="academic-presentations">Academic Presentations</option>
                            <option value="undergrad">Undergraduate Projects</option>
                            <option value="cover-letter">CV & Cover Letters</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* Urgency */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-700 mb-1 px-0.5">Urgency *</label>
                          <select
                            required
                            value={quoteUrgency}
                            onChange={(e) => setQuoteUrgency(e.target.value)}
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800"
                          >
                            <option value="standard">Standard (7-10 Days)</option>
                            <option value="urgent">Urgent (3-5 Days)</option>
                            <option value="express">Express (24-48 Hours)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {/* Draft Link */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-700 mb-1 px-0.5">Draft Link or Status</label>
                          <input
                            type="text"
                            value={quoteDraft}
                            onChange={(e) => setQuoteDraft(e.target.value)}
                            placeholder="e.g. Google Drive link or 'Not started'"
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-400"
                          />
                        </div>

                        {/* Pages words est */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-700 mb-1 px-0.5">Pages/Words (Est.) *</label>
                          <input
                            type="text"
                            required
                            value={quotePageEst}
                            onChange={(e) => setQuotePageEst(e.target.value)}
                            placeholder="e.g. 5000 words"
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-1.5 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-400"
                          />
                        </div>
                      </div>

                      {/* Contact fields */}
                      <div className="space-y-2 px-0.5">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Your Contact Details</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          <input
                            type="text"
                            required
                            value={quoteName}
                            onChange={(e) => setQuoteName(e.target.value)}
                            placeholder="Full Name"
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-400"
                          />
                          <input
                            type="email"
                            required
                            value={quoteEmail}
                            onChange={(e) => setQuoteEmail(e.target.value)}
                            placeholder="Email Address"
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-400"
                          />
                        </div>
                      </div>

                      {/* Additional Context */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 mb-1 px-0.5">Additional Context</label>
                        <textarea
                          rows={2}
                          value={quoteContext}
                          onChange={(e) => setQuoteContext(e.target.value)}
                          placeholder="Special requirements, research area, etc."
                          className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-400 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 text-xs shadow transition-all hover:-translate-y-0.5 cursor-pointer mt-2"
                      >
                        Generate My Quote
                      </button>

                      <p className="text-center text-[10px] text-slate-405 text-slate-400 uppercase tracking-widest">
                        Secure & Confidential Project Submission
                      </p>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* ================================= FAQ VIEW ================================= */}
            {activeTopic === 'faq' && (
              <div className="space-y-6 text-left">
                {/* Intro */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-ice text-brand-blue-dark text-[10px] font-bold uppercase tracking-wider mb-2">Need Answers?</span>
                  <h3 className="text-lg font-display font-black text-slate-900 leading-tight">
                    Frequently Asked Questions
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-semibold">
                    Find quick answers to common questions about our services, process, and policies.
                  </p>
                </div>

                {/* Accordion Questions */}
                <div className="space-y-3">
                  {[
                    {
                      q: 'Is the work original and plagiarism-free?',
                      a: 'Yes, absolutely. Every project is written from scratch, verified for originality, and checked using advanced plagiarism checkers before delivery.'
                    },
                    {
                      q: 'Do you always meet deadlines?',
                      a: 'Yes. We respect deadlines. Your work is delivered on schedule, guaranteed.'
                    },
                    {
                      q: 'Can I request revisions after delivery?',
                      a: 'Yes. We offer free revisions as long as the requested adjustments align with original instructions.'
                    },
                    {
                      q: 'How do payments work?',
                      a: 'Clear, fair flat-rate pricing with zero surprise costs prior to starting the work.'
                    },
                    {
                      q: 'Is my information kept confidential?',
                      a: 'Yes, 100% confidentiality is guaranteed. Your personal information and academic materials are secure with us.'
                    },
                    {
                      q: 'Do you handle international students?',
                      a: 'Yes, we support students and professionals worldwide with strict compliance guidelines.'
                    },
                    {
                      q: 'How do I get started?',
                      a: 'Fill out our custom quote form, select your project parameters, or reach out to us directly through our direct pipelines.'
                    }
                  ].map((faq, idx) => {
                    const isExpanded = faqExpanded[idx];
                    return (
                      <div key={idx} className="rounded-xl border border-slate-100 bg-white/40 overflow-hidden shadow-sm transition-all">
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full px-4 py-3.5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <span className="font-sans font-bold text-slate-900 text-xs pr-4 leading-tight">{faq.q}</span>
                          <span className="text-brand-blue font-extrabold text-sm shrink-0">{isExpanded ? '−' : '+'}</span>
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-4 border-t border-slate-50 pt-2.5 bg-slate-50/20">
                            <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ================================= CONTACT VIEW ================================= */}
            {activeTopic === 'contact' && (
              <div className="space-y-6 text-left">
                {messageSent ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-sm border border-emerald-200">
                      <CheckCircle size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs">Message Sent Successfully</h4>
                    <p className="text-[11px] text-slate-655 text-slate-600 max-w-sm mx-auto font-semibold leading-relaxed">
                      Thank you for contacting us. Our advisory team has received your message and will reach out to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setMessageSent(false)}
                      className="rounded-full border border-slate-250 text-slate-705 text-slate-700 hover:bg-slate-50 px-4 py-1.5 text-[11px] font-bold mt-4 transition-all cursor-pointer shadow-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {/* Header */}
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-ice text-brand-blue-dark text-[10px] font-bold uppercase tracking-wider mb-2">Get In Touch</span>
                      <h3 className="text-lg font-display font-black text-slate-900 leading-tight">Let’s Discuss Your Success.</h3>
                      <p className="text-xs text-slate-505 text-slate-500 mt-1 leading-normal font-semibold">
                        Whether you have a quick question or a complex academic project, our team is ready to provide the guidance you need. Fill out the form or reach out directly.
                      </p>
                    </div>

                    {/* Direct Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <h5 className="font-bold text-slate-950 text-[10px] uppercase">Call/WhatsApp</h5>
                        <p className="text-brand-blue font-bold text-[11.5px] mt-0.5">+234808 584 7676</p>
                        <p className="text-slate-400 text-[9px] mt-0.5">Mon - Fri, 8am - 6pm</p>
                      </div>
                      <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <h5 className="font-bold text-slate-950 text-[10px] uppercase">Email Address</h5>
                        <p className="text-brand-blue font-bold text-[11.5px] mt-0.5">lobaconsulting2@gmail.com</p>
                        <p className="text-slate-400 text-[9px] mt-0.5 font-semibold">Replies in 24 hours</p>
                      </div>
                      <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <h5 className="font-bold text-slate-950 text-[10px] uppercase">Our Office</h5>
                        <p className="text-brand-blue font-bold text-[11.5px] mt-0.5">Ibadan, Nigeria</p>
                        <p className="text-slate-400 text-[9px] mt-0.5">Available for virtual sessions</p>
                      </div>
                    </div>

                    {/* Instant Action Channels from HTML */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0.5 pr-0.5">
                      <a 
                        href="https://wa.me/qr/NOG2LSMOM3A3O1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2.5 border border-slate-200/50 hover:bg-slate-100 rounded-xl text-[10.5px] font-bold text-slate-705 text-slate-750 transition-colors shadow-sm"
                      >
                        Chat with Counselors on WhatsApp
                      </a>
                      <a 
                        href="https://www.instagram.com/lobascholarlyconsulting" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2.5 border border-slate-200/50 hover:bg-slate-100 rounded-xl text-[10.5px] font-bold text-slate-705 text-slate-750 transition-colors shadow-sm"
                      >
                        Reach us on Instagram
                      </a>
                    </div>

                    {/* Message form */}
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      setMessageSent(true);
                    }} className="space-y-3.5 border-t border-slate-100 pt-4 text-left">
                      <h4 className="font-bold text-slate-955 text-xs">Send a Message</h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[9.5px] font-bold text-slate-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. John Doe"
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-402 placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-[9.5px] font-bold text-slate-700 mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. john@example.com"
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-402 placeholder-slate-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[9.5px] font-bold text-slate-700 mb-1 font-semibold">Phone Number</label>
                          <input
                            type="text"
                            placeholder="e.g. +234..."
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-[9.5px] font-bold text-slate-700 mb-1">Service Interest</label>
                          <select
                            className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 text-slate-850"
                          >
                            <option value="">Select a service</option>
                            <option value="Data Analysis">Data Analysis</option>
                            <option value="Thesis & Dissertation">Thesis & Dissertation</option>
                            <option value="Business Proposal">Business Proposal</option>
                            <option value="Undergraduate Project">Undergraduate Project</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9.5px] font-bold text-slate-700 mb-1">How can we help? *</label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Tell us about your project..."
                          className="w-full text-xs rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:border-brand-blue font-semibold text-slate-800 placeholder-slate-400 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-2.5 text-xs shadow transition-all hover:-translate-y-0.5 cursor-pointer"
                      >
                        Send Message
                      </button>

                      <p className="text-center text-[9.5px] text-slate-402 text-slate-400 font-bold uppercase tracking-wider">
                        By submitting, you agree to our privacy policy and terms.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer controls inside modal */}
          <div className="bg-white/40 border-t border-slate-200/50 px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-bold">
              <Heart size={10} className="text-rose-500 fill-rose-500" />
              <span>Fostering Research Legacy • 2026</span>
            </div>
            <button
              onClick={onScheduleClick}
              className="rounded-full bg-brand-navy hover:bg-brand-navy-light text-white text-[11px] font-bold px-4 py-1.5 transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
              id="drawer-footer-schedule"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
