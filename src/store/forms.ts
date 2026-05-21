import { create } from 'zustand';
import { toast } from 'sonner';
import axios from 'axios';

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
      await axios.post('/api/send-email', data, {
        headers: {
          'Accept': 'application/json'
        }
      });
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
      await axios.post('/api/send-email', data, {
        headers: {
          'Accept': 'application/json'
        }
      });
      toast.success('Quote request sent successfully!');
      return true;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Failed to send quote request. Please try again.';
      toast.error(message);
      return false;
    } finally {
      set({ isSubmittingQuote: false });
    }
  }
}));