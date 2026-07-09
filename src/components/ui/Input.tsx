import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  isTextArea?: boolean;
}

const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, InputProps>(
  ({ label, error, leftIcon, className, isTextArea, ...props }, ref) => {
    const Component = isTextArea ? 'textarea' : ('input' as any);
    
    return (
      <div className="w-full space-y-1.5 text-left">
        {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              {leftIcon}
            </div>
          )}
          <Component
            ref={ref}
            className={cn(
              'w-full bg-white border border-slate-200 rounded-xl py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/15 focus:border-brand-blue',
              leftIcon ? 'pl-10' : 'pl-4',
              'pr-4',
              error ? 'border-red-500' : 'border-slate-200',
              isTextArea && 'min-h-[120px] resize-none pt-3',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
export { Input };
