import React, { useState } from 'react';
import { X, Calendar, Clock, BookOpen, Compass, CheckCircle2, Award } from 'lucide-react';

export interface SessionData {
  id: string;
  fullName: string;
  email: string;
  academicLevel: string;
  researchField: string;
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  createdAt: string;
  status: string;
}

export interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookSuccess: (session: SessionData) => void;
}

export default function ScheduleModal({ isOpen, onClose, onBookSuccess }: ScheduleModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [academicLevel, setAcademicLevel] = useState('phd');
  const [researchField, setResearchField] = useState('');
  const [consultationType, setConsultationType] = useState('manuscript-review');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedSession, setSubmittedSession] = useState<SessionData | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !researchField || !preferredDate || !preferredTime) {
      alert('Please fill out all required fields.');
      return;
    }

    const newSession = {
      id: Math.random().toString(36).substring(2, 9),
      fullName,
      email,
      academicLevel,
      researchField,
      consultationType,
      preferredDate,
      preferredTime,
      notes,
      createdAt: new Date().toISOString(),
      status: 'scheduled',
    };

    setSubmittedSession(newSession);
    onBookSuccess(newSession);
  };

  const getServiceLabel = (type: string) => {
    switch (type) {
      case 'manuscript-review': return 'Manuscript Editorial Review';
      case 'thesis-advising': return 'Postgraduate Thesis Advising';
      case 'grant-writing': return 'Research Grant & Proposal Writing';
      case 'journal-selection': return 'High-Impact Journal Selection Advisor';
      case 'academic-writing': return 'Academic Writing Bootcamp';
      default: return 'General Advising Service';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-blue/35 p-4 backdrop-blur-md animate-fade-in select-none">
      <div 
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/50 flex flex-col md:flex-row max-h-[90vh]"
        id="schedule-modal-container"
      >
        {/* Left Side: Brand Accent Column */}
        <div className="hidden md:flex w-1/3 bg-brand-ice text-slate-800 p-5 flex-col justify-between relative overflow-hidden border-r border-slate-200/60">
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-brand-blue/10 blur-xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-1.5 text-brand-blue font-bold text-[10px] uppercase tracking-wider mb-4">
              <Award size={12} className="text-brand-blue" />
              LOBA ADVISING
            </div>
            <h3 className="text-xl font-display font-black leading-tight tracking-tight text-slate-900">
              Let's Accelerate Your Scholarly Journey.
            </h3>
            <p className="mt-3 text-[10.5px] text-slate-650 leading-relaxed font-semibold">
              Connect with leading editors and senior scholars to refine, strengthen, and publish your work worldwide.
            </p>
          </div>
          <div className="relative z-10 border-t border-slate-200 pt-3 text-[9.5px]/1.2 text-slate-500 font-mono tracking-wider font-bold">
            • Over 1,205 peer-reviewed articles published through LOBA advisory guidance.
          </div>
        </div>

        {/* Right Side: Interactive Content */}
        <div className="flex-grow flex flex-col min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/40 px-6 py-4 bg-white/40">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              {submittedSession ? 'Consultation Confirmed' : 'Consulting Intake Portal'}
            </h2>
            <button 
              onClick={onClose}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-250 hover:text-slate-700 transition-colors cursor-pointer"
              id="close-modal-btn"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto max-h-[58vh]">
            {submittedSession ? (
              /* Ticket Confirmation Visual */
              <div className="flex flex-col items-center py-4 text-center">
                <div className="rounded-full bg-emerald-50 p-2.5 text-emerald-500 mb-3 ml-1 shadow-sm border border-emerald-250">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Appointment Locked!</h3>
                <p className="text-[10.5px] text-slate-600 mt-1 max-w-sm font-semibold">
                  A confirmation invite has been dispatched to <strong className="text-slate-800">{email}</strong> describing pre-consultation manuscript requirements.
                </p>

                {/* Display Ticket / Receipt card */}
                <div className="mt-4 w-full rounded-xl bg-white/40 border border-white/60 p-4 text-left font-mono text-[10px] text-slate-700 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 bg-brand-blue/15 text-brand-blue-dark font-sans font-bold px-2.5 py-0.5 rounded-bl-lg text-[9px] tracking-wider uppercase border-l border-b border-brand-blue/10">
                    CONFIRMED
                  </div>
                  <div className="border-b border-dashed border-slate-350 pb-2 mb-2">
                    <div className="text-[9px] text-slate-400 uppercase tracking-wide font-bold">ADVISORY BOARD TICKET</div>
                    <div className="text-[12px] font-bold text-brand-navy font-display mt-0.5">{getServiceLabel(submittedSession.consultationType)}</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">SCHOLAR NAME:</span>
                      <span className="font-bold text-slate-800">{submittedSession.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">LEVEL & DEPT:</span>
                      <span className="font-bold text-slate-800 uppercase">{submittedSession.academicLevel} | {submittedSession.researchField}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">DATE:</span>
                      <span className="font-bold text-brand-blue">{submittedSession.preferredDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">UTC TIME SLOT:</span>
                      <span className="font-bold text-slate-800">{submittedSession.preferredTime} (UTC)</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-dashed border-slate-350 flex justify-between text-[8.5px] text-slate-400 font-bold">
                    <span>SESSION ID: #{submittedSession.id.toUpperCase()}</span>
                    <span>LOBA SYSTEM SECURE</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmittedSession(null);
                    setFullName('');
                    setEmail('');
                    setResearchField('');
                    setPreferredDate('');
                    setPreferredTime('');
                    setNotes('');
                    onClose();
                  }}
                  className="mt-5 rounded-full bg-brand-navy px-5 py-2 text-[11px] font-bold text-white hover:bg-brand-navy-light transition-all shadow cursor-pointer"
                  id="done-ticket-button"
                >
                  Close Portal
                </button>
              </div>
            ) : (
              /* Intaking Form */
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10.5px] font-bold text-slate-700 mb-1 px-1">Scholar Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Jane Doe"
                      className="w-full text-[11px] rounded-lg border border-white/65 bg-white/70 px-3 py-2 text-slate-900 focus:outline-none focus:bg-white focus:border-brand-blue transition-colors font-semibold placeholder-slate-400"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-[10.5px] font-bold text-slate-700 mb-1 px-1">Academic Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. j.doe@university.edu"
                      className="w-full text-[11px] rounded-lg border border-white/65 bg-white/70 px-3 py-2 text-slate-900 focus:outline-none focus:bg-white focus:border-brand-blue transition-colors font-semibold placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Academic Level */}
                  <div>
                    <label className="block text-[10.5px] font-bold text-slate-700 mb-1 px-1">Academic Credential *</label>
                    <select
                      value={academicLevel}
                      onChange={(e) => setAcademicLevel(e.target.value)}
                      className="w-full text-[11px] rounded-lg border border-white/65 bg-white/75 px-3 py-2 text-slate-900 focus:outline-none focus:bg-white focus:border-brand-blue transition-colors font-semibold"
                    >
                      <option value="undergraduate">Undergraduate Student</option>
                      <option value="graduate">Master's Student</option>
                      <option value="phd">PhD Candidate</option>
                      <option value="postdoc">Postdoctoral Researcher</option>
                      <option value="faculty">University Faculty / Professor</option>
                      <option value="other">Institutional/Other Scholar</option>
                    </select>
                  </div>

                  {/* Research Field */}
                  <div>
                    <label className="block text-[10.5px] font-bold text-slate-700 mb-1 px-1">Discipline / Field *</label>
                    <input
                      type="text"
                      required
                      value={researchField}
                      onChange={(e) => setResearchField(e.target.value)}
                      placeholder="e.g. Bioinformatics"
                      className="w-full text-[11px] rounded-lg border border-white/65 bg-white/70 px-3 py-2 text-slate-900 focus:outline-none focus:bg-white focus:border-brand-blue transition-colors font-semibold placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block text-[10.5px] font-bold text-slate-700 mb-1 flex items-center gap-1 px-1">
                    <BookOpen size={12} className="text-brand-blue" />
                    Primary Consulting Service Requested
                  </label>
                  <select
                    value={consultationType}
                    onChange={(e) => setConsultationType(e.target.value)}
                    className="w-full text-[11px] rounded-lg border border-white/65 bg-white/75 px-3 py-2 text-slate-900 focus:outline-none focus:bg-white focus:border-brand-blue transition-colors font-semibold"
                  >
                    <option value="manuscript-review">Manuscript Editorial Review (Pre-Submission)</option>
                    <option value="thesis-advising">Thesis & Dissertation Structured Advisory</option>
                    <option value="grant-writing">Grant Proposal Strategic Refinement</option>
                    <option value="journal-selection">High-Impact Journal Pathfinding & Matchmaking</option>
                    <option value="academic-writing">In-Person & Remote Academic Writing Bootcamp</option>
                  </select>
                </div>

                {/* Date & Time Select */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10.5px] font-bold text-slate-700 mb-1 flex items-center gap-1 px-1">
                      <Calendar size={12} className="text-brand-blue" />
                      Target Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-[11px] rounded-lg border border-white/65 bg-white/75 px-3 py-2 text-slate-900 focus:outline-none focus:bg-white focus:border-brand-blue transition-colors font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-bold text-slate-700 mb-1 flex items-center gap-1 px-1">
                      <Clock size={12} className="text-brand-blue" />
                      Preferred Hour Window *
                    </label>
                    <select
                      required
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full text-[11px] rounded-lg border border-white/65 bg-white/75 px-3 py-2 text-slate-900 focus:outline-none focus:bg-white focus:border-brand-blue transition-colors font-semibold"
                    >
                      <option value="">Select slot...</option>
                      <option value="09:00 - 10:00 AM">09:00 - 10:00 AM UTC</option>
                      <option value="11:00 - 12:00 PM">11:00 - 12:00 PM UTC</option>
                      <option value="02:00 - 03:00 PM">02:00 - 03:00 PM UTC</option>
                      <option value="04:00 - 05:00 PM">04:00 - 05:00 PM UTC</option>
                    </select>
                  </div>
                </div>

                {/* Special instructions */}
                <div>
                  <label className="block text-[10.5px] font-bold text-slate-700 mb-1 flex items-center gap-1 px-1">
                    <Compass size={12} className="text-brand-blue" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share details about your manuscript topic..."
                    className="w-full text-[11px] rounded-lg border border-white/65 bg-white/70 px-3 py-2 text-slate-900 focus:outline-none focus:bg-white focus:border-brand-blue transition-colors placeholder-slate-400 font-semibold resize-none"
                  />
                </div>

                {/* Form Submission Button */}
                <div className="pt-2.5 flex justify-end gap-3 border-t border-white/40 mt-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-slate-205 px-4.5 py-1.5 text-[11px] font-bold text-slate-500 hover:bg-slate-50 transition-all cursor-pointer"
                    id="cancel-book-btn"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-full bg-brand-navy hover:bg-brand-navy-light text-white px-5 py-1.5 text-[11px] font-bold shadow transition-all hover:-translate-y-0.5 cursor-pointer"
                    id="submit-book-btn"
                  >
                    Book Secure Slot
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
