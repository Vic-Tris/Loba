import { create } from 'zustand';
import { api } from "../utils/api";
import { toast } from 'sonner';

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
      await api.post('/contact', data);
      toast.success('Message sent! Check your email for confirmation.');
      return true;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Failed to send message. Please try again.';
      toast.error(message);
      return false;
    } finally {
      set({ isSubmittingContact: false });
    }
  },

  submitQuote: async (data: any) => {
    set({ isSubmittingQuote: true });
    try {
      await api.post('/quote', data);
      toast.success('Quote request submitted! Confirmation sent to your email.');
      return true;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Failed to submit quote. Please try again.';
      toast.error(message);
      return false;
    } finally {
      set({ isSubmittingQuote: false });
    }
  },
}));
