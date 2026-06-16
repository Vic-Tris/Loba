import { motion } from 'framer-motion';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useFormStore } from '../store/forms';
import { FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
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

      <div className="pt-32 pb-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 text-left">
                  Get In Touch
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 text-left">
                  Let’s Discuss Your <span className="text-primary">Success.</span>
                </h1>
                <p className="text-slate-600 leading-relaxed mb-12 text-left">
                  Whether you have a quick question or a complex academic project, 
                  our team is ready to provide the guidance you need. Fill out the form or reach out directly.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: Phone, title: 'Call/WhatsApp', value: '+234808 584 7676', sub: 'Mon - Fri, 8am - 6pm' },
                    { icon: Mail, title: 'Email Address', value: 'lobaconsulting2@gmail.com', sub: 'Replies in 24 hours' },
                    { icon: MapPin, title: 'Our Office', value: 'Ibadan, Nigeria', sub: 'Available for virtual sessions' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-translate-y-1">
                        <item.icon size={24} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                        <p className="text-primary font-medium">{item.value}</p>
                        <p className="text-slate-400 text-xs">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 rounded-3xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-between gap-6">
                  <div className="text-left">
                    <p className="text-whatsapp font-bold mb-1 underline">Instant Response?</p>
                    <p className="text-slate-600 text-sm">Chat with our counselors directly on WhatsApp.</p>
                  </div>
                  <Button 
                    variant="whatsapp" 
                    onClick={() => window.open('https://wa.me/qr/NOG2LSMOM3A3O1', '_blank')}
                    leftIcon={<MessageCircle size={18} />}
                  >
                    Open Chat
                  </Button>
                </div>
                <div id='ig' className="mt-12 p-8 rounded-3xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-between gap-6">
                  <div className="text-left">
                    <p className="text-pink-500 font-bold mb-1 underline">Instant Response?</p>
                    <p className="text-slate-600 text-sm">Reach us on Intagram</p>
                  </div>
                  <Button 
                    className="border-0 bg-gradient-to-r from-pink-500 via-red-500 text-white" 
                    onClick={() => window.open('https://www.instagram.com/lobascholarlyconsulting', '_blank')}
                    leftIcon={<FaInstagram size={18} />}
                  >
                    Open IG
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 rounded-[32px] shadow-2xl shadow-primary/5 border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-primary mb-8 text-left">Send a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                      })}
                      error={errors.email?.message as string}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      label="Phone Number" 
                      placeholder="+234..." 
                      {...register('phone')}
                    />
                  <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-sm font-medium text-slate-700">Service Interest</label>
                      <select 
                        {...register('service', { required: 'Please select a service' })}
                        className={`w-full bg-white border ${errors.service ? 'border-red-500' : 'border-slate-200'} rounded-md py-3 px-4 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary`}
                      >
                        <option value="">Select a service</option>
                        <option value="Data Analysis">Data Analysis</option>
                        <option value="Thesis & Dissertation">Thesis & Dissertation</option>
                        <option value="Business Proposal">Business Proposal</option>
                        <option value="Undergraduate Project">Undergraduate Project</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.service && <span className="text-red-500 text-[10px] font-bold uppercase">{errors.service.message as string}</span>}
                    </div>
                  </div>

                  <Input 
                    label="How can we help?" 
                    isTextArea 
                    placeholder="Tell us about your project..." 
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message is too short' }
                    })}
                    error={errors.message?.message as string}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg" 
                    isLoading={isSubmittingContact}
                    leftIcon={<Send size={18} />}
                  >
                    Send Message
                  </Button>

                  <p className="text-center text-slate-400 text-xs">
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
