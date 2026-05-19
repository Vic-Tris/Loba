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
      await axios.post(import.meta.env.VITE_API_BASE_URL,data, {
        headers:{
         'Accept':'application/json' 
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
       await axios.post(import.meta.env.VITE_API_BASE_URL,data, {
        headers:{
          'Accept':'application/json'
        }
       });
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
