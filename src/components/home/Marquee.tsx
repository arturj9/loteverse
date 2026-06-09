import React from 'react';

export default function Marquee() {
  return (
    <div className="bg-brand-light-alt py-5 overflow-hidden flex items-center border-y border-brand-light-alt">
      <div className="flex gap-12 md:gap-20 items-center text-xs uppercase tracking-widest font-medium text-brand-dark-alt whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        <span>Investimento Seguro</span>
        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
        <span>Tecnologia 3D Imersiva</span>
        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
        <span>Transparência Total</span>
        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
        <span>Planejamento Inovador</span>
        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
        <span>Investimento Seguro</span>
        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
        <span>Tecnologia 3D Imersiva</span>
      </div>
    </div>
  );
}
