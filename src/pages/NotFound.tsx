import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-slate-50 relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | Loba Consulting</title>
      </Helmet>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="mb-8 relative inline-block"
        >
          <span className="text-[12rem] md:text-[16rem] font-heading font-black text-slate-200/50 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-40 h-40 bg-white rounded-full shadow-2xl shadow-primary/20 flex items-center justify-center">
                <Search size={64} className="text-primary animate-pulse" />
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto mb-12 text-lg">
            The page you're looking for might have been moved, deleted, or 
            perhaps it never existed in the first place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button variant="primary" size="lg" className="group h-14 px-8">
                <Home size={18} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="group h-14 px-8">
                Contact Support <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex justify-center gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest"
        >
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
        </motion.div>
      </div>
    </div>
  );
}
