import React, { useState } from 'react';
import { useFormStore } from '../store/forms'; // Points to your Zustand store configuration

export const QuoteForm: React.FC = () => {
  const { submitQuote, isSubmittingQuote } = useFormStore();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Academic Consulting', // Default selection
    urgency: 'Normal',
    pageestimate: '',
    context: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Fires request directly to our relative Netlify API setup
    const success = await submitQuote(formData);
    
    if (success) {
      // Clear form inputs on clean submission delivery
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Academic Consulting',
        urgency: 'Normal',
        pageestimate: '',
        context: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800">Request a Consulting Quote</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="+234..."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            <option value="Academic Consulting">Academic Consulting</option>
            <option value="Research/Thesis Assistance">Research / Thesis Assistance</option>
            <option value="Data Analysis (SPSS/STATA)">Data Analysis (SPSS/STATA)</option>
            <option value="Professional Editing">Professional Editing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Urgency / Timeline</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            <option value="Urgent (1-3 days)">Urgent (1-3 days)</option>
            <option value="Normal">Normal</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Page Estimate (If applicable)</label>
        <input
          type="text"
          name="pageestimate"
          value={formData.pageestimate}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="e.g., 10-15 pages"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Project Details & Context</label>
        <textarea
          name="context"
          required
          rows={4}
          value={formData.context}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Provide details about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmittingQuote}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmittingQuote ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing Request...
          </>
        ) : (
          'Submit Quote Request'
        )}
      </button>
    </form>
  );
};