
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { OfferSnapshot } from './components/OfferSnapshot';
import { HowItWorks } from './components/HowItWorks';
import { Credibility } from './components/Credibility';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <OfferSnapshot />
        <HowItWorks />
        <Credibility />
      </main>
      <Footer />
    </div>
  );
};

export default App;
