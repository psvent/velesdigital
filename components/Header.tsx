
import React from 'react';
import { CTAButton } from './CTAButton';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/veles-digital-logo.svg" 
            alt="Veles Digital" 
            className="h-16 w-auto max-w-[300px]"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Proces</a>
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Standardi kakovosti</a>
          <CTAButton size="sm">Zahtevaj predogled</CTAButton>
        </nav>
        <div className="md:hidden">
           <CTAButton size="sm">Predogled</CTAButton>
        </div>
      </div>
    </header>
  );
};
