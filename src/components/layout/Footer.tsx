import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-light pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto border-t border-brand-light-alt pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-brand-dark-alt font-light uppercase tracking-widest">© {new Date().getFullYear()} LoteVerse.</p>
        <div className="flex gap-8">
          <a className="text-xs text-brand-dark-alt hover:text-brand-accent font-light uppercase tracking-widest transition-colors" href="#">Privacidade</a>
          <a className="text-xs text-brand-dark-alt hover:text-brand-accent font-light uppercase tracking-widest transition-colors" href="#">Termos</a>
        </div>
      </div>
    </footer>
  );
}
