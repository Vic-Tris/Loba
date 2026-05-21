import { create } from 'zustand';
import { toast } from 'sonner';
import { api } from '../utils/api'; // <-- Connects to our new relative routing configuration

interface FormState {
  isSubmittingContact: boolean;
  isSubmittingQuote: boolean;
  submitContact: (data: any) => Promise<boolean>;
  submitQuote: (data: any) => Promise<boolean>;
}

export const useFormStore = create<FormState>((set) => ({
  isSubmittingContact: false,
  isSubmittingQuote: false,

  submitContact: async (data: any) => {
    set({ isSubmittingContact: true });
    try {
      // Using 'api.post' routes this through '/api/send-email' relatively
      await api.post('/send-email', data);
      toast.success('Message sent! Check your email for confirmation.');
      return true;
    } catch (error: any) {
      const message = error.response?.data?.error || 'Failed to send message. Please try again.';
      toast.error(message);
      return false;
    } finally {
      set({ isSubmittingContact: false });
    }
  },

  submitQuote: async (data: any) => {
    set({ isSubmittingQuote: true });
    try {
      // Using 'api.post' routes this through '/api/send-email' relatively
      await api.post('/send-email', data);
      toast.success('Quote request sent successfully!');
      return true;
    } catch (error: any) {
      const message = error.response?.data?.error || 'Failed to send quote request. Please try again.';
      toast.error(message);
      return false;
    } finally {
      set({ isSubmittingQuote: false });
    }
  }
}));