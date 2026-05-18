import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/100 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-24 h-24 bg-primary flex items-center justify-center text-white font-bold text-3xl rounded-2xl shadow-xl shadow-primary/20 overflow-hidden">
          <img 
            src="/images/IMG-20260512-WA0018[1].jpg" 
            alt="Loading" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
