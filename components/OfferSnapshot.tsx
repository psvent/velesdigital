
import React from 'react';

export const OfferSnapshot: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/42/1200/800" 
                alt="Professional studio photography" 
                className="w-full h-auto object-cover grayscale-[0.2] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">Delivered Asset</p>
                <p className="text-lg font-medium">Studio-quality Product Visual</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6">Current Service</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI-enhanced photos</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We transform raw concepts and standard photography into professional, studio-grade visual assets. Our process ensures that lighting, composition, and texture meet high-end commercial standards.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Enhanced color grading and lighting",
                "Brand-consistent texture and detail",
                "Manually reviewed compositions",
                "Delivered in high-resolution formats"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-gray-700">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
