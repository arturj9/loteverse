import React, { useState } from 'react';
import { Ruler, Maximize2, Map } from 'lucide-react';
import { Lote } from '../../types/lote';

interface CatalogProps {
  lotes: Lote[];
  onOpenModal: (lote: Lote) => void;
}

export default function Catalog({ lotes, onOpenModal }: CatalogProps) {

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (slug: string) => {
    setImageErrors(prev => ({ ...prev, [slug]: true }));
  };

  return (
    <section id="catalogo" className="py-24 md:py-32 bg-brand-light text-brand-dark overflow-hidden relative">
      <div className="px-8 sm:px-12 md:px-16 max-w-[1400px] mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-brand-light-alt pt-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight">Coleção curada.</h2>
        </div>
      </div>

      <div className="flex gap-6 px-8 sm:px-12 md:px-16 pb-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory max-w-[1400px] mx-auto">
        {lotes.map((lote) => (
          <div key={lote.id} className="w-[75vw] min-w-[75vw] md:min-w-[400px] max-w-[400px] shrink-0 snap-center group">
            <div
              className="aspect-[4/5] overflow-hidden relative mb-6 bg-brand-light-alt flex items-center justify-center border border-brand-light-alt cursor-pointer"
              onClick={() => onOpenModal(lote)}
            >
              {!imageErrors[lote.slug] ? (
                <img
                  src={`/previews/${lote.slug}.jpg`}
                  alt={`Preview do lote ${lote.nome}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={() => handleImageError(lote.slug)}
                />
              ) : (
                <Map className="w-24 h-24 text-brand-accent/50 group-hover:scale-110 group-hover:text-brand-accent transition-all duration-1000" />
              )}

              <div className="absolute top-4 right-4 bg-brand-light text-brand-accent-dark border border-brand-light-alt px-4 py-1.5 text-xs uppercase tracking-widest font-semibold z-10 shadow-sm">
                Disponível
              </div>
            </div>

            <div className="px-4 md:px-0">
              <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-lg font-medium mb-1 tracking-tight text-brand-dark">{lote.nome}</h4>
                <p className="text-brand-dark-alt/80 text-sm font-light">LoteVerse</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium tracking-tight text-brand-dark">{lote.preco}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-5 text-sm text-brand-dark-alt/80 border-t border-brand-dark/10 pt-5 font-light">
              <span className="flex items-center gap-2" title="Dimensões">
                <Ruler className="w-4 h-4" /> {lote.dimensoes}
              </span>
              <span className="flex items-center gap-2" title="Área Total">
                <Maximize2 className="w-4 h-4" /> {lote.area_total}
              </span>
            </div>

            <div className="mt-6">
              <button
                onClick={() => onOpenModal(lote)}
                className="w-full bg-brand-light border-2 border-brand-dark px-6 py-3 text-xs uppercase tracking-widest font-bold text-brand-dark hover:bg-brand-dark hover:text-brand-light btn-3d flex items-center justify-center gap-2"
              >
                Explorar em 3D
              </button>
            </div>
          </div>
        </div>
        ))}
        <div className="min-w-[20px] md:min-w-[48px] shrink-0"></div>
      </div>
    </section>
  );
}
