import React, { useState } from 'react';
import { X, Clock, User, Heart, Share2, Bookmark } from 'lucide-react';
import { CardData } from './BottomCards';

interface CardReaderModalProps {
  card: CardData | null;
  onClose: () => void;
}

export default function CardReaderModal({ card, onClose }: CardReaderModalProps) {
  const [likes, setLikes] = useState(24);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasBookmarked, setHasBookmarked] = useState(false);

  if (!card) return null;

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-blue/35 p-4 backdrop-blur-md animate-fade-in select-none">
      <div 
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/50 flex flex-col max-h-[90vh]"
        id="card-reader-container"
      >
        {/* Banner Image */}
        <div className="h-44 w-full relative bg-slate-100 shrink-0">
          <img
            src={card.imageUrl}
            alt={card.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          
          {/* Top category pill */}
          <span className="absolute top-4 left-4 bg-brand-ice/90 backdrop-blur-sm text-brand-blue-dark font-mono text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm border border-brand-blue/20">
            {card.tag}
          </span>

          {/* Close button overhead */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-2.5 transition-all shadow-md cursor-pointer"
            id="close-reader-cross"
          >
            <X size={16} />
          </button>

          {/* Banner Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white font-sans">
            <h2 className="text-xl md:text-2xl font-black leading-tight drop-shadow-md">
              {card.title}
            </h2>
          </div>
        </div>

        {/* scrollable reading segment */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 max-h-[58vh]">
          
          {/* Author stamp / specs with clean glass container accent */}
          <div className="bg-white/40 border border-white/65 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-[10.5px] text-slate-750 font-bold font-sans">
            <div className="flex items-center gap-2">
              <User size={13} className="text-brand-blue shrink-0" />
              <span className="text-slate-800">{card.author}</span>
            </div>
            
            <div className="flex items-center gap-4 shrink-0">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {card.readingTime}
              </span>
              <span className="font-mono text-brand-blue font-bold tracking-wide">
                {card.date}
              </span>
            </div>
          </div>

          {/* Body Text */}
          <div className="text-slate-700 text-xs md:text-sm leading-relaxed whitespace-pre-line font-medium pt-2 pl-1 pr-1">
            {card.content}
          </div>

          <div className="border-t border-white/45 pt-4 flex items-center justify-between shrink-0 text-xs shadow-inner/10 mt-6 select-none font-bold">
            {/* Interactive like bar */}
            <div className="flex items-center gap-5">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1.5 font-bold text-[10.5px] transition-colors cursor-pointer ${
                  hasLiked ? 'text-rose-500' : 'text-slate-400 hover:text-rose-450'
                }`}
                id="doc-like-toggle"
              >
                <Heart size={14} className={hasLiked ? 'fill-rose-500' : ''} />
                <span>{likes} Endorsements</span>
              </button>
              
              <button
                onClick={() => setHasBookmarked(!hasBookmarked)}
                className={`flex items-center gap-1.5 font-bold text-[10.5px] transition-colors cursor-pointer ${
                  hasBookmarked ? 'text-brand-blue' : 'text-slate-400 hover:text-brand-blue-dark'
                }`}
                id="doc-bookmark-toggle"
              >
                <Bookmark size={14} className={hasBookmarked ? 'fill-brand-blue' : ''} />
                <span>{hasBookmarked ? 'Bookmarked' : 'Add to list'}</span>
              </button>
            </div>

            <button
              onClick={() => alert('Article reference code copied! Share with colleagues.')}
              className="flex items-center gap-1 text-slate-450 hover:text-slate-650 transition-colors text-[10.5px] font-bold cursor-pointer"
              id="doc-share-btn"
            >
              <Share2 size={12} />
              <span>Copy citation</span>
            </button>
          </div>

        </div>

        {/* CTA advice block inside modal */}
        <div className="bg-white/40 p-4 border-t border-white/45 flex items-center justify-between text-[11px] font-bold shrink-0">
          <span className="text-slate-600">Have an active manuscript challenge?</span>
          <button
            onClick={() => {
              onClose();
              // Trigger consultation booking
              const event = new CustomEvent('trigger-scheduler');
              window.dispatchEvent(event);
            }}
            className="rounded-full bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-4 py-1.5 transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
            id="reader-cta-schedule"
          >
            Direct Review
          </button>
        </div>

      </div>
    </div>
  );
}
