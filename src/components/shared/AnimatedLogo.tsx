import React from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  return (
    <svg className={className} viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="gradRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F4F1DE" />
          <stop offset="100%" stopColor="#D9D5C1" />
        </linearGradient>
        <linearGradient id="gradLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1C2541" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>
      </defs>

      <g transform="translate(15, 20)">
        <polygon 
          className="anim-poly-1"
          points="10,40 40,55 40,90 10,75" 
          fill="url(#gradLeft)" 
          stroke="#10B981" 
          strokeWidth="1.5" 
          strokeLinejoin="round"
        />
        <polygon 
          className="anim-poly-2"
          points="40,55 70,40 70,75 40,90" 
          fill="url(#gradRight)" 
          stroke="#F4F1DE" 
          strokeWidth="1.5" 
          strokeLinejoin="round"
        />
        
        <g className="anim-top-loading">
          <polygon 
            className="anim-poly-3"
            points="40,20 70,40 40,55 10,40" 
            fill="url(#gradTop)" 
            stroke="#10B981" 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
          <polygon 
            className="anim-outline"
            points="40,0 55,7 40,15 25,7" 
            fill="none" 
            stroke="#10B981" 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
          <line 
            className="anim-line"
            x1="40" y1="15" x2="40" y2="20" 
            stroke="#10B981" 
            strokeWidth="2" 
            strokeDasharray="2,2"
          />
        </g>
      </g>

      <text className="anim-text" x="105" y="80" fontFamily="'Inter', 'Roboto', sans-serif" fontSize="42" fontWeight="800" fill="#18181B" letterSpacing="-1">
        Lote<tspan fill="#10B981" fontWeight="300">Verse</tspan>
      </text>
    </svg>
  );
}
