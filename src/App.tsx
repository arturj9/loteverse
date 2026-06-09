import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Catalog from './components/home/Catalog';
import Marquee from './components/home/Marquee';
import Footer from './components/layout/Footer';
import UnityModal from './components/shared/UnityModal';

import { Lote } from './types/lote';
import lotesData from './data/lotes.json';

function App() {
  const [selectedLote, setSelectedLote] = useState<Lote | null>(null);

  const openUnityModal = (lote: Lote) => {
    setSelectedLote(lote);
  };

  const closeUnityModal = () => {
    setSelectedLote(null);
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans font-light text-brand-dark-alt selection:bg-brand-accent selection:text-brand-light relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Catalog lotes={lotesData as Lote[]} onOpenModal={openUnityModal} />
      <Footer />
      {selectedLote && (
        <UnityModal lote={selectedLote} onClose={closeUnityModal} />
      )}
    </div>
  );
}

export default App;
