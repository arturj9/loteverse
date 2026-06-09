import React from 'react';

export default function Hero() {
  return (
    <header className="min-h-[75vh] flex flex-col md:pb-32 md:px-12 overflow-hidden bg-brand-light-alt w-full relative justify-end">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-brand-light-alt"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light/80 via-transparent to-transparent"></div>
      </div>
      
      <div className="z-10 w-full max-w-[1400px] mr-auto ml-auto relative mt-32 px-6">
        <div className="max-w-4xl">
          <span className="block text-xs uppercase tracking-widest mb-6 text-brand-dark-alt font-medium">Investimento Inteligente</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-tight tracking-tight text-brand-dark mb-6">
            O futuro do seu terreno começa aqui.
          </h1>
          <p className="text-brand-dark-alt leading-relaxed max-w-2xl mb-10 text-lg">
            Simule construções, explore metragens e visualize seu investimento em 3D antes de comprar.
          </p>
          
          <a href="#catalogo" className="inline-flex bg-brand-accent text-brand-light border border-brand-accent px-10 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-brand-accent-dark hover:border-brand-accent-dark transition-all duration-300">
            Explorar Catálogo
          </a>
        </div>
      </div>
    </header>
  );
}
