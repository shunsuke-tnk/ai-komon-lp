import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'brown';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed font-rounded";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-400 to-primary-500 text-white shadow-[0_4px_20px_-4px_rgba(251,146,60,0.5)] hover:shadow-[0_8px_25px_-4px_rgba(251,146,60,0.6)] hover:-translate-y-0.5 border border-transparent",
    brown: "bg-gradient-to-r from-warm-600 to-warm-700 text-white shadow-[0_4px_20px_-4px_rgba(136,110,93,0.5)] hover:shadow-[0_8px_25px_-4px_rgba(136,110,93,0.6)] hover:-translate-y-0.5 border border-transparent",
    secondary: "bg-white text-warm-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-warm-200",
    outline: "bg-transparent text-text-body border-2 border-warm-200 hover:border-primary-300 hover:text-primary-600",
    ghost: "bg-transparent text-text-body hover:bg-warm-100 hover:text-warm-800"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
    xl: "px-12 py-5 text-xl w-full md:w-auto"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};