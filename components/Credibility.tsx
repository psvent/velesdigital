
import React from 'react';
import { CTAButton } from './CTAButton';

export const Credibility: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Service-first accountability.</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Veles Digital is a professional studio, not an automated platform. We operate with a conservative, quality-led posture, ensuring all services meet strict manual review standards and comply with European data and privacy expectations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mb-16">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold mb-2">Manual Review</h4>
              <p className="text-sm text-gray-400">Every project is handled by a human professional who oversees the enhancement process from start to finish.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold mb-2">EU Standards</h4>
              <p className="text-sm text-gray-400">We prioritize data sovereignty and professional ethics, adhering to rigorous operational frameworks.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <CTAButton variant="light">Request a preview</CTAButton>
            <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest font-medium">The Veles Quality Standard</p>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[160px]"></div>
      </div>
    </section>
  );
};
