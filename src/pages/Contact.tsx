import { motion } from 'framer-motion';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useFormStore } from '../store/forms';
import { FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isSubmittingContact, submitContact } = useFormStore();

  const onSubmit = async (data: any) => {
    const success = await submitContact(data);
    if (success) reset();
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Loba Consulting for expert academic support and professional guidance."
      />

      <div className="relative overflow-hidden bg-brand-ice/50 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="absolute -top-20 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
              <div>
                <span className="inline-flex rounded-full bg-white border border-slate-200 shadow-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary mb-6 text-left">
                  Get In Touch
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 text-left leading-tight">
                  Let&apos;s Discuss Your <span className="text-brand-blue-dark">Success.</span>
                </h1>
                <p className="text-text-body leading-relaxed mb-10 text-left text-lg">
                  Whether you have a quick question or a complex academic project, our team is ready to provide the
                  guidance you need. Fill out the form or reach out directly.
                </p>

                <div className="space-y-5">
                  {[
                    { icon: Phone, title: 'Call/WhatsApp', value: '+234808 584 7676', sub: 'Mon - Fri, 8am - 6pm' },
                    {
                      icon: Mail,
                      title: 'Email Address',
                      value: 'lobaconsulting2@gmail.com',
                      sub: 'Replies in 24 hours',
                    },
                    {
                      icon: MapPin,
                      title: 'Our Office',
                      value: 'Ibadan, Nigeria',
                      sub: 'Available for virtual sessions',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-5 group p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-brand-ice shadow-sm border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <item.icon size={22} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-primary mb-0.5 text-sm">{item.title}</h4>
                        <p className="text-brand-blue-dark font-semibold text-sm">{item.value}</p>
                        <p className="text-slate-600 text-xs mt-0.5 font-medium">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-3xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-between gap-5">
                  <div className="text-left">
                    <p className="text-whatsapp-dark font-bold mb-1">Instant Response?</p>
                    <p className="text-text-body text-sm">Chat with our counselors directly on WhatsApp.</p>
                  </div>
                  <Button
                    variant="whatsapp"
                    className="rounded-full shrink-0"
                    onClick={() => window.open('https://wa.me/qr/NOG2LSMOM3A3O1', '_blank')}
                    leftIcon={<MessageCircle size={18} />}
                  >
                    Open Chat
                  </Button>
                </div>
                <div
                  id="ig"
                  className="mt-4 p-6 rounded-3xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-between gap-5"
                >
                  <div className="text-left">
                    <p className="text-pink-600 font-bold mb-1">Follow us</p>
                    <p className="text-text-body text-sm">Reach us on Instagram</p>
                  </div>
                  <Button
                    className="border-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 text-white rounded-full shrink-0"
                    onClick={() =>
                      window.open('https://www.instagram.com/lobascholarlyconsulting', '_blank')
                    }
                    leftIcon={<FaInstagram size={18} />}
                  >
                    Open IG
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 md:p-10 rounded-[28px] shadow-[0_16px_50px_rgba(17,43,85,0.1)] border border-slate-200"
              >
                <h3 className="text-2xl font-bold text-primary mb-7 text-left">Send a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                      error={errors.name?.message as string}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                      })}
                      error={errors.email?.message as string}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label="Phone Number" placeholder="+234..." {...register('phone')} />
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-sm font-medium text-slate-700">Service Interest</label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className={`w-full bg-white border ${
                          errors.service ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl py-3 px-4 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/15 focus:border-brand-blue`}
                      >
                        <option value="">Select a service</option>
                        <option value="Data Analysis">Data Analysis</option>
                        <option value="Thesis & Dissertation">Thesis & Dissertation</option>
                        <option value="Business Proposal">Business Proposal</option>
                        <option value="Undergraduate Project">Undergraduate Project</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.service && (
                        <span className="text-red-500 text-[10px] font-bold uppercase">
                          {errors.service.message as string}
                        </span>
                      )}
                    </div>
                  </div>

                  <Input
                    label="How can we help?"
                    isTextArea
                    placeholder="Tell us about your project..."
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message is too short' },
                    })}
                    error={errors.message?.message as string}
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-full"
                    size="lg"
                    isLoading={isSubmittingContact}
                    leftIcon={<Send size={18} />}
                  >
                    Send Message
                  </Button>

                  <p className="text-center text-slate-600 text-xs font-medium">
                    By submitting, you agree to our privacy policy and terms.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
