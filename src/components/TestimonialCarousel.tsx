import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Chioma Eyinnaya",
    role: "Business Student",
    text: "Oluwatobiloba polished my business proposal to perfection. My supervisor said it was one of the best structured he'd seen. It landed me a major client deal!"
  },
  {
    name: "Daniel Osaro",
    role: "Postgraduate Researcher",
    text: "Struggled with my research chapter until Oluwatobiloba stepped in. Supervisor raved about the rigorous analysis. A grade and department award."
  },
  {
    name: "Liasu Mobosola",
    role: "Undergraduate",
    text: "From rejection risk to A grade glory! His tips on avoiding common pitfalls made my supervisor praise the clarity and originality."
  },
  {
    name: "Adebayo T.",
    role: "Master's Candidate",
    text: "The data analysis chapter was a nightmare until Loba Consulting took over. The SPSS tables were immaculate and the interpretation was spot on."
  },
  {
    name: "Sarah Jenkins",
    role: "PhD Candidate",
    text: "My thesis was accepted without a single major correction. I can't recommend their meticulous editing and formatting enough."
  },
  {
    name: "Kenneth O.",
    role: "Professional Academic",
    text: "Incredible turnaround time and completely plagiarism-free. The seminar presentation they built for me was universally praised by the panel!"
  }
];

export default function TestimonialCarousel() {
  // Double the array for seamless infinite scrolling
  const carouselItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="w-full mt-auto pt-6 md:pt-10 pb-4 overflow-hidden relative z-10">
      
      {/* Fade gradients on edges to blend with the white background */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {carouselItems.map((testimonial, idx) => (
          <div 
            key={idx} 
            className="w-[280px] md:w-[340px] mx-3 flex-shrink-0 bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-brand-navy/10 shadow-[0_4px_15px_rgba(13,44,92,0.05)] transition-all duration-300 group cursor-default"
          >
            <div className="flex text-amber-400 mb-3 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-slate-700 text-[12px] md:text-[13px] italic leading-relaxed font-sans mb-4 min-h-[80px]">
              "{testimonial.text}"
            </p>
            <div className="flex items-center justify-between border-t border-slate-100 pt-3">
              <div>
                <h4 className="font-bold text-[12px] md:text-[13px] text-brand-navy">{testimonial.name}</h4>
                <span className="text-[10px] md:text-[11px] text-slate-500 font-semibold">{testimonial.role}</span>
              </div>
              <Quote size={20} className="text-brand-blue/20 group-hover:text-brand-blue/40 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
