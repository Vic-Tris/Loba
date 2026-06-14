/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BottomCards from './components/BottomCards';
import ScheduleModal from './components/ScheduleModal';
import NavigationDrawers from './components/NavigationDrawers';
import CardReaderModal from './components/CardReaderModal';
import { Sparkles, CheckCircle } from 'lucide-react';

interface SessionReceipt {
  preferredDate: string;
  preferredTime: string;
}

export default function App() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const [schedulerOpen, setSchedulerOpen] = useState(false);
  const [sessionReceipt, setSessionReceipt] = useState<SessionReceipt | null>(null);

  // Monitor custom events to trigger the schedule counselor modal from drawer CTAs
  useEffect(() => {
    const handleTriggerScheduler = () => {
      setSchedulerOpen(true);
    };

    window.addEventListener('trigger-scheduler', handleTriggerScheduler);
    return () => {
      window.removeEventListener('trigger-scheduler', handleTriggerScheduler);
    };
  }, []);

  const handleNavClick = (topicId: string) => {
    if (topicId === 'home') {
      setActiveTopic(null);
    } else {
      setActiveTopic(topicId);
    }
  };

  const handleBookSuccess = (session: SessionReceipt) => {
    setSessionReceipt(session);
    // Auto-close open drawers
    setActiveTopic(null);
    setSelectedCard(null);
  };

  return (
    <div 
      className="min-h-screen w-full relative flex flex-col font-sans overflow-x-hidden text-slate-800 transition-colors duration-500"
      id="root-viewport-container"
    >
      {/* Fullscreen Video Background with Fallback Wave Gradient and Glass Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none bg-grid-lines bg-gentle-wave">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4"
        />
        {/* Translucent glass overlay to elevate readability and blend with header glass styling */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[8px]" />
      </div>

      {/* Floating Alert if a session was just scheduled */}
      {sessionReceipt && (
        <div 
          className="fixed top-24 left-6 z-40 bg-white/90 backdrop-blur-md border border-emerald-100 shadow-lg py-3 px-4 rounded-xl flex items-center gap-3 animate-fade-in"
          id="global-receipt-toast"
        >
          <CheckCircle size={18} className="text-emerald-500 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-slate-800">Review session locked!</span>
            <p className="text-[10px] text-slate-400 font-mono">Date: {sessionReceipt.preferredDate} @ {sessionReceipt.preferredTime}</p>
          </div>
          <button 
            onClick={() => setSessionReceipt(null)}
            className="text-[10px] text-slate-300 hover:text-slate-600 font-bold ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Primary Header Segment */}
      <Header 
        onNavClick={handleNavClick} 
        onScheduleClick={() => setSchedulerOpen(true)}
        activeTopic={activeTopic}
      />

      {/* Foreground Main content body with absolute overlay structure */}
      <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col pt-2 relative" id="main-content-layout">
        <HeroSection onScheduleClick={() => setSchedulerOpen(true)} />
        <BottomCards onCardSelected={(card: any) => setSelectedCard(card)} />
      </main>

      {/* Right Drawer overlays representing navbar links: Company, Acronym, Services, etc. */}
      {activeTopic && (
        <NavigationDrawers 
          activeTopic={activeTopic}
          onClose={() => setActiveTopic(null)}
          onScheduleClick={() => {
            setActiveTopic(null);
            setSchedulerOpen(true);
          }}
        />
      )}

      {/* Expanded reading modal for Bottom Featured card contents */}
      {selectedCard && (
        <CardReaderModal 
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}

      {/* Form intake modal for Consultation scheduler */}
      <ScheduleModal 
        isOpen={schedulerOpen}
        onClose={() => setSchedulerOpen(false)}
        onBookSuccess={handleBookSuccess}
      />
    </div>
  );
}