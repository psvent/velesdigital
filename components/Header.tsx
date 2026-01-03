
import React from 'react';
import { CTAButton } from './CTAButton';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span
            className="text-xl font-bold tracking-tight text-gray-900"
            style={{ fontFamily: 'Chillax, sans-serif', letterSpacing: '0.01em' }}
          >
            Veles Digital
          </span>
          <span className="hidden sm:inline text-gray-400 font-light">|</span>
          <span className="hidden sm:inline text-sm text-gray-500 uppercase tracking-widest">Creative Studio</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Process</a>
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Quality Standards</a>
          <CTAButton size="sm">Request a preview</CTAButton>
        </nav>
        <div className="md:hidden">
           <CTAButton size="sm">Request</CTAButton>
        </div>
      </div>
    </header>
  );
};
