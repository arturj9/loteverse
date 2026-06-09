import React from 'react';
import AnimatedLogo from '../shared/AnimatedLogo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-md border-b border-brand-light-alt bg-brand-light/90">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 h-auto md:h-20 flex flex-col md:flex-row items-center justify-between py-4 md:py-0 gap-4 md:gap-0">
        <div className="flex md:justify-start md:gap-8 lg:gap-12 md:w-1/3 order-2 md:order-1 flex-wrap w-full gap-x-6 gap-y-6 items-center justify-center">
          <a className="text-xs uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent transition-colors duration-300" href="#">Início</a>
          <a className="text-xs uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent transition-colors duration-300" href="#catalogo">Catálogo</a>
          <a className="text-xs uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent transition-colors duration-300" href="#">Sobre</a>
        </div>
        <div className="flex justify-center w-full md:w-1/3 order-1 md:order-2">
          <a className="flex items-center" href="#">
            <AnimatedLogo className="h-16 md:h-20 w-auto" />
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 lg:gap-12 w-full md:w-1/3 order-3">
          <a className="bg-transparent border border-brand-accent px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-brand-accent hover:bg-brand-accent hover:text-brand-light transition-all duration-300 cursor-pointer" href="#catalogo">
            Ver Lotes
          </a>
        </div>
      </div>
    </nav>
  );
}
