/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Quote from './pages/Quote';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { NotFound } from './pages/NotFound';
import DataAnalysis from './pages/services/DataAnalysis';
import BusinessProposals from './pages/services/BusinessProposals';
import AcademicPresentations from './pages/services/AcademicPresentations';
import UndergraduateProjects from './pages/services/UndergraduateProjects';
import CoverLetters from './pages/services/CoverLetters';
import AcademicArticle from './pages/services/AcademicArticle';
import ThesisDissertations from './pages/services/ThesisDissertations';
import AssignmentEssay from './pages/services/AssignmentEssay';
import ScheduleModal from './components/ScheduleModal';
import NavigationDrawers from './components/NavigationDrawers';
import CardReaderModal from './components/CardReaderModal';
import { Footer } from './components/ui/Footer';
import { CheckCircle } from 'lucide-react';
import { TOPIC_ROUTES } from './utils/routes';

interface SessionReceipt {
  preferredDate: string;
  preferredTime: string;
}

export default function App() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const [schedulerOpen, setSchedulerOpen] = useState(false);
  const [sessionReceipt, setSessionReceipt] = useState<SessionReceipt | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  // Close nav modal when the route changes (e.g. See more / full-page nav)
  useEffect(() => {
    setActiveTopic(null);
  }, [location.pathname]);

  const handleNavClick = (topicId: string) => {
    if (topicId === 'home') {
      setActiveTopic(null);
      if (!isHome) navigate('/');
      return;
    }

    // Home: open popup/modal preview. Full pages: deep-link to the route.
    if (isHome) {
      setActiveTopic(topicId);
    } else {
      setActiveTopic(null);
      navigate(TOPIC_ROUTES[topicId] || '/');
    }
  };

  const handleBookSuccess = (session: SessionReceipt) => {
    setSessionReceipt(session);
    setActiveTopic(null);
    setSelectedCard(null);
  };

  return (
    <div
      className="min-h-screen w-full relative flex flex-col font-sans overflow-x-hidden text-slate-800 transition-colors duration-500"
      id="root-viewport-container"
    >
      {/* Floating Alert if a session was just scheduled */}
      {sessionReceipt && (
        <div
          className="fixed top-24 left-6 z-40 bg-white/90 backdrop-blur-md border border-emerald-100 shadow-lg py-3 px-4 rounded-xl flex items-center gap-3 animate-fade-in"
          id="global-receipt-toast"
        >
          <CheckCircle size={18} className="text-emerald-500 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-slate-800">Review session locked!</span>
            <p className="text-[10px] text-slate-400 font-mono">
              Date: {sessionReceipt.preferredDate} @ {sessionReceipt.preferredTime}
            </p>
          </div>
          <button
            onClick={() => setSessionReceipt(null)}
            className="text-[10px] text-slate-300 hover:text-slate-600 font-bold ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      <Header
        onNavClick={handleNavClick}
        onScheduleClick={() => setSchedulerOpen(true)}
        activeTopic={activeTopic}
      />

      <main className="flex-1 w-full mx-auto flex flex-col pt-2 relative" id="main-content-layout">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onScheduleClick={() => setSchedulerOpen(true)}
                onNavClick={(id) => setActiveTopic(id)}
              />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/quotes" element={<Quote />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service detail routes (linked from Services / Footer) */}
          <Route path="/services/data-analysis" element={<DataAnalysis />} />
          <Route path="/services/business" element={<BusinessProposals />} />
          <Route path="/services/academic-presentations" element={<AcademicPresentations />} />
          <Route path="/services/undergrad" element={<UndergraduateProjects />} />
          <Route path="/services/cover-letter" element={<CoverLetters />} />
          <Route path="/services/academic-article" element={<AcademicArticle />} />
          <Route path="/services/thesisdissertations" element={<ThesisDissertations />} />
          <Route path="/services/assignments-essay" element={<AssignmentEssay />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Nav topic popups — only used from Home */}
      {activeTopic && isHome && (
        <NavigationDrawers
          activeTopic={activeTopic}
          onClose={() => setActiveTopic(null)}
          onScheduleClick={() => {
            setActiveTopic(null);
            setSchedulerOpen(true);
          }}
        />
      )}

      {selectedCard && (
        <CardReaderModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}

      <ScheduleModal
        isOpen={schedulerOpen}
        onClose={() => setSchedulerOpen(false)}
        onBookSuccess={handleBookSuccess}
      />
    </div>
  );
}
