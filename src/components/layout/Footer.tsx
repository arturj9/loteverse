import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-light pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto border-t border-brand-light-alt pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-brand-dark-alt font-light uppercase tracking-widest text-center md:text-left">
          © {new Date().getFullYear()} LoteVerse. <span className="hidden md:inline mx-2">|</span> <br className="md:hidden" />
          <span className="text-brand-dark-alt/60 mt-2 md:mt-0 inline-block">
            Desenvolvido por <a href="https://www.arturjardel.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors font-bold">Artur Jardel</a>
          </span>
        </p>
        <div className="flex gap-8">
          <a className="text-xs text-brand-dark-alt hover:text-brand-accent font-light uppercase tracking-widest transition-colors" href="#">Privacidade</a>
          <a className="text-xs text-brand-dark-alt hover:text-brand-accent font-light uppercase tracking-widest transition-colors" href="#">Termos</a>
        </div>
      </div>
    </footer>
  );
}
