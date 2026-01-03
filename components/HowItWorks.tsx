
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Zahteva",
      description: "Posredujte studiu svoje vizualne zahteve in slog znamke."
    },
    {
      number: "02",
      title: "Predogled",
      description: "V 48 urah pregledate osnutke v studijski kakovosti."
    },
    {
      number: "03",
      title: "Dostava",
      description: "Po potrditvi prejmete končne profesionalne datoteke v visoki ločljivosti."
    }
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Strukturiran proces za kakovost.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <span className="text-5xl font-bold text-gray-100 absolute top-4 left-6 -z-10">{step.number}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
