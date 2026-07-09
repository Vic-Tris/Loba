import { motion } from 'framer-motion';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import { FileSearch, Clock, ClipboardCheck, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFormStore } from '../store/forms';

export default function Quote() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { isSubmittingQuote, submitQuote } = useFormStore();

  useEffect(() => {
    if (serviceParam) {
      setValue('service', serviceParam);
    }
  }, [serviceParam, setValue]);

  const onSubmit = async (data: any) => {
    const payload = {
      name: data.name,
      email: data.email,
      urgency: data.urgency,
      service: data.service,
      context: data.context,
      draft: data.draft,
      pageestimate: data.pageestimate,
    };
    const success = await submitQuote(payload);
    if (success) reset();
  };

  return (
    <>
      <SEO
        title="Get a Free Quote"
        description="Request a personalized quote for your academic project or professional document from Loba Consulting."
      />

      <div className="relative overflow-hidden bg-brand-ice/40 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent -z-0 pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div className="text-left">
              <span className="inline-flex rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-6">
                Tailored Pricing
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Request a Custom <span className="text-brand-blue">Quote.</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Every project is unique. Share your requirements with us, and we&apos;ll provide a transparent,
                flat-rate quote with a guaranteed delivery date.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: '2-Hour Response', desc: 'Average time to receive your custom quote.' },
                  { icon: ClipboardCheck, title: 'No Hidden Fees', desc: 'Transparent pricing with zero surprise costs.' },
                  { icon: FileSearch, title: 'Expert Review', desc: 'Each request is reviewed by a subject matter expert.' },
                  { icon: Send, title: 'Global Delivery', desc: 'We support students and professionals worldwide.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/90 border border-white shadow-[0_6px_20px_rgba(17,43,85,0.05)] hover:shadow-md transition-shadow"
                  >
                    <item.icon size={22} className="text-brand-blue mb-3" />
                    <h4 className="font-bold text-primary mb-1.5 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[28px] border border-white shadow-[0_16px_50px_rgba(17,43,85,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl rounded-full pointer-events-none" />

              <h3 className="text-2xl font-bold text-primary mb-1 text-left relative z-10">Quote Details</h3>
              <p className="text-slate-500 text-sm mb-8 text-left relative z-10">
                Fill the form below to get an accurate estimate.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Service Category
                    </label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className="w-full bg-brand-ice/50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-800"
                    >
                      <option value="">Select Service</option>
                      <option value="data-analysis">Data Analysis</option>
                      <option value="business">Business Proposals</option>
                      <option value="academic-presentations">Academic Presentations</option>
                      <option value="undergrad">Undergraduate Projects</option>
                      <option value="cover-letter">CV & Cover Letters</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <span className="text-red-500 text-xs mt-1">{errors.service.message as string}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Urgency</label>
                    <select
                      {...register('urgency')}
                      className="w-full bg-brand-ice/50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-800"
                    >
                      <option value="standard">Standard (7-10 Days)</option>
                      <option value="urgent">Urgent (3-5 Days)</option>
                      <option value="express">Express (24-48 Hours)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Draft Link or Status
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Google Drive link or 'Not started'"
                      {...register('draft')}
                      className="w-full bg-brand-ice/50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Pages/Words (Est.)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5000 words"
                      {...register('pageestimate')}
                      className="w-full bg-brand-ice/50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Your Contact Details
                  </label>
                  <input
                    placeholder="Full Name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full bg-brand-ice/50 border ${
                      errors.name ? 'border-red-400' : 'border-slate-200'
                    } rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue placeholder:text-slate-400`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[10px] uppercase font-bold">
                      {errors.name.message as string}
                    </span>
                  )}

                  <input
                    placeholder="Email Address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                    className={`w-full bg-brand-ice/50 border ${
                      errors.email ? 'border-red-400' : 'border-slate-200'
                    } rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue placeholder:text-slate-400`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[10px] uppercase font-bold">
                      {errors.email.message as string}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Additional Context
                  </label>
                  <textarea
                    placeholder="Special requirements, research area, etc."
                    {...register('context', { required: 'Project context is required' })}
                    className={`w-full bg-brand-ice/50 border ${
                      errors.context ? 'border-red-400' : 'border-slate-200'
                    } rounded-xl py-3.5 px-4 text-sm min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-800 placeholder:text-slate-400`}
                  />
                  {errors.context && (
                    <span className="text-red-500 text-[10px] uppercase font-bold">
                      {errors.context.message as string}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full py-4 text-base rounded-full shadow-lg shadow-primary/15"
                  isLoading={isSubmittingQuote}
                >
                  Generate My Quote
                </Button>

                <p className="text-slate-400 text-[10px] text-center uppercase tracking-widest font-semibold">
                  Secure & Confidential Project Submission
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
