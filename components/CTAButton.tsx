
import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  variant = 'dark', 
  size = 'md',
  className = ''
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg active:scale-95";
  
  const variants = {
    dark: "bg-gray-900 text-white hover:bg-black shadow-lg shadow-gray-200",
    light: "bg-white text-gray-900 hover:bg-gray-50 shadow-lg shadow-black/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};
