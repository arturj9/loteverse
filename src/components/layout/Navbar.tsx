import React, { useState, useEffect } from 'react';
import AnimatedLogo from '../shared/AnimatedLogo';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled || mobileMenuOpen ? 'bg-brand-light/95 backdrop-blur-md border-b border-brand-light-alt py-2 shadow-sm' : 'bg-transparent border-transparent py-4'}`}>
      

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-row items-center md:items-end justify-between pb-2">
        

        <div className="w-1/4 md:w-1/3 flex justify-start">
          <div className="hidden md:flex md:gap-6 lg:gap-12 flex-wrap items-end transition-all duration-500 pb-1">
            <a className="text-xs uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent transition-colors duration-300" href="#">Início</a>
            <a className="text-xs uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent transition-colors duration-300" href="#catalogo">Catálogo</a>
            <a className="text-xs uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent transition-colors duration-300" href="#">Sobre</a>
          </div>
        </div>
        

        <div className="flex justify-center items-end w-1/2 md:w-1/3 transition-transform duration-500">
          <a 
            className="flex items-end cursor-pointer" 
            onClick={(e) => {
              if(scrolled) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >

            <AnimatedLogo className={`transition-all duration-500 w-auto ${scrolled ? 'h-16 md:h-20' : 'h-[120px]'}`} />
          </a>
        </div>
        

        <div className="w-1/4 md:w-1/3 flex justify-end items-center md:items-end pb-1">
          <div className="hidden md:flex justify-end gap-6 md:gap-8 lg:gap-12 w-full transition-all duration-500">
            <a className="bg-brand-light border-2 border-brand-dark px-6 py-2 text-xs uppercase tracking-widest font-bold text-brand-dark hover:bg-brand-dark hover:text-brand-light btn-3d cursor-pointer" href="#catalogo">
              Ver Lotes
            </a>
          </div>
          
          <button 
            className="md:hidden text-brand-dark hover:text-brand-accent transition-colors duration-300 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

      </div>


      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-light/95 backdrop-blur-md border-b border-brand-light-alt transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[400px] border-t border-brand-light-alt/30 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center py-8 gap-8 px-6">
          <a className="text-sm uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent w-full text-center py-2" href="#" onClick={() => setMobileMenuOpen(false)}>Início</a>
          <a className="text-sm uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent w-full text-center py-2" href="#catalogo" onClick={() => setMobileMenuOpen(false)}>Catálogo</a>
          <a className="text-sm uppercase tracking-widest font-medium text-brand-dark hover:text-brand-accent w-full text-center py-2" href="#" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
          <a className="bg-brand-accent text-brand-light border-2 border-brand-dark px-8 py-4 text-xs uppercase tracking-widest font-bold w-full text-center mt-4 btn-3d" href="#catalogo" onClick={() => setMobileMenuOpen(false)}>
            Explorar Lotes
          </a>
        </div>
      </div>

    </nav>
  );
}
