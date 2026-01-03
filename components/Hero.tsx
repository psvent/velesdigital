
import React from 'react';
import { CTAButton } from './CTAButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
            Studio-quality photography, <span className="text-gray-400">prepared for your brand.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Veles Digital provides professional visual assets for marketing and design teams. 
            Every image is enhanced for clarity and manually reviewed by our creative directors.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <CTAButton>Request a preview</CTAButton>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Accepting new studio projects</span>
            </div>
          </div>
        </div>
      </div>
      {/* Subtle architectural background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 -skew-x-12 transform translate-x-20 hidden lg:block -z-0"></div>
    </section>
  );
};
