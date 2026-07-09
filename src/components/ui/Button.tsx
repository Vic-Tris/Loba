import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'white' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark border-primary',
      secondary: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white',
      outline: 'bg-transparent text-primary border-slate-200 hover:border-primary hover:bg-slate-50',
      whatsapp: 'bg-whatsapp text-white border-whatsapp hover:bg-whatsapp-dark',
      white: 'bg-white text-primary border-white hover:bg-slate-50',
      accent: 'bg-accent text-white border-accent hover:bg-accent-dark',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-full border-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
      </button>
    );
  }
);
