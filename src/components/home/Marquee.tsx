import React from 'react';

export default function Marquee() {
  const items = [
    "Investimento Seguro",
    "Tecnologia 3D Imersiva",
    "Transparência Total",
    "Planejamento Inovador",
    "Localização Estratégica",
    "Construa o Futuro"
  ];


  const allItems = [...items, ...items];
  const duplicatedItems = [...allItems, ...allItems];

  return (
    <div className="bg-brand-light-alt py-5 overflow-hidden flex items-center border-y border-brand-dark/5 whitespace-nowrap">
      <div className="animate-[marquee_120s_linear_infinite] inline-flex w-max">
        {duplicatedItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-xs uppercase tracking-widest font-medium text-brand-dark-alt px-10">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
