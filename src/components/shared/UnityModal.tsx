import React from 'react';
import { X } from 'lucide-react';
import { Lote } from '../../types/lote';

interface UnityModalProps {
  lote: Lote;
  onClose: () => void;
}

export default function UnityModal({ lote, onClose }: UnityModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/40 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300">
      <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] bg-brand-light rounded shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-light-alt bg-brand-light-alt">
          <div>
            <h3 className="text-lg font-sans font-medium text-brand-dark tracking-tight">{lote.nome}</h3>
            <p className="text-xs uppercase tracking-widest text-brand-accent-dark font-medium mt-1">Visualização 3D Imersiva</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 border border-brand-light-alt rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-light hover:text-brand-accent transition-colors"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Modal Body / iframe */}
        <div className="flex-1 w-full bg-brand-light-alt relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none text-brand-accent">
              <div className="w-8 h-8 border-2 border-brand-light-alt border-t-brand-accent rounded-full animate-spin mb-4"></div>
              <p className="font-sans tracking-widest uppercase text-xs font-medium">Carregando Cena...</p>
            </div>
            
            <iframe 
              src={`/build_lote/index.html?lote=${lote.slug}`}
              className="w-full h-full border-0 relative z-10"
              title={`Experiência Unity 3D para ${lote.nome}`}
              allowFullScreen
            ></iframe>
        </div>
      </div>
    </div>
  );
}
