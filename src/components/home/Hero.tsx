import React, { useMemo } from 'react';

export default function Hero() {

  const W = 60;
  const H = 105;


  const animatedCubes = useMemo(() => {
    const arr = [];
    const W = 60;
    const H = 105;
    const cols = Math.ceil(4000 / W);
    const rows = Math.ceil(2000 / H);

    for (let i = 0; i < 60; i++) {
      const col = Math.floor(Math.random() * cols);
      const row = Math.floor(Math.random() * rows) - 2;
      const isOffset = Math.random() > 0.5;


      const x = col * W + 20 + (isOffset ? 30 : 0);
      const y = row * H + 171 + (isOffset ? 52.5 : 0);

      const delay = (Math.random() * 4).toFixed(2);
      const duration = (Math.random() * 3 + 4).toFixed(2);
      const isGreen = Math.random() > 0.3;

      arr.push({ id: i, x, y, delay, duration, isGreen });
    }
    return arr;
  }, []);

  return (

    <header className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-brand-light w-full pt-32 -mt-20">

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          15%, 85% { transform: translateY(-20px); opacity: 1; }
        }
        .animate-float-up {
          animation: floatUp ease-in-out infinite;
        }
      `}} />


      <div className="absolute inset-0 z-0 opacity-80 flex items-start justify-center overflow-hidden">

        <svg width="4000" height="2000" viewBox="0 0 4000 2000" className="flex-shrink-0">
          <defs>
            <pattern id="iso-cubes" x="2000" y="171" width="60" height="105" patternUnits="userSpaceOnUse">
              <g id="base-cube">

                <polygon points="0,0 30,-17.5 0,-35 -30,-17.5" fill="#F4F1DE" stroke="#EAE6D1" strokeWidth="0.5" />

                <polygon points="0,0 -30,-17.5 -30,17.5 0,35" fill="#EAE6D1" stroke="#EAE6D1" strokeWidth="0.5" />

                <polygon points="0,0 0,35 30,17.5 30,-17.5" fill="#E0DCC2" stroke="#EAE6D1" strokeWidth="0.5" />
              </g>

              <use href="#base-cube" x="0" y="0" />
              <use href="#base-cube" x="60" y="0" />
              <use href="#base-cube" x="0" y="105" />
              <use href="#base-cube" x="60" y="105" />
              <use href="#base-cube" x="30" y="52.5" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#iso-cubes)" />


          {animatedCubes.map((c) => (
            <g
              key={c.id}
              className="animate-float-up"
              style={{
                animationDuration: `${c.duration}s`,
                animationDelay: `${c.delay}s`,
                opacity: 0,
                transformOrigin: `${c.x}px ${c.y}px`
              }}
            >
              <g transform={`translate(${c.x}, ${c.y})`}>
                {c.isGreen ? (
                  <>
                    <polygon points="0,0 30,-17.5 0,-35 -30,-17.5" fill="#10B981" />
                    <polygon points="0,0 -30,-17.5 -30,17.5 0,35" fill="#1C2541" />
                    <polygon points="0,0 0,35 30,17.5 30,-17.5" fill="#F4F1DE" />
                  </>
                ) : (
                  <>
                    <polygon points="0,0 30,-17.5 0,-35 -30,-17.5" fill="#1C2541" />
                    <polygon points="0,0 -30,-17.5 -30,17.5 0,35" fill="#0B132B" />
                    <polygon points="0,0 0,35 30,17.5 30,-17.5" fill="#10B981" />
                  </>
                )}
              </g>
            </g>
          ))}
        </svg>


        <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-brand-light/60 to-transparent pointer-events-none"></div>
      </div>

      <div className="z-10 w-full max-w-[1400px] mr-auto ml-auto relative px-6 md:px-12 flex flex-col items-center justify-center text-center gap-12 mt-10">

        <div className="max-w-4xl w-full flex flex-col items-center">

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-normal leading-[1.1] tracking-tight text-brand-dark mb-8 drop-shadow-sm">
            Visualize o <br />
            <span className="text-brand-accent font-semibold relative inline-block">
              futuro lote
            </span> <br />
            antes de comprar.
          </h1>

          <p className="text-brand-dark-alt leading-relaxed max-w-2xl mb-12 text-lg md:text-xl font-light">
            Construa, planeje e sinta a dimensão exata do seu investimento diretamente no mapa tridimensional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a href="#catalogo" className="inline-flex justify-center items-center bg-brand-accent text-brand-light border-2 border-brand-dark px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand-accent-dark btn-3d">
              Explorar Terrenos
            </a>
            <a href="#sobre" className="inline-flex justify-center items-center bg-brand-light border-2 border-brand-dark text-brand-dark px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand-dark hover:text-brand-light btn-3d">
              Como Funciona
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
