interface GuitarProps {
  className?: string;
  width?: number;
}

// Stylized electric guitar SVG with vibrating strings
export function ElectricGuitar({ className = "", width = 240 }: GuitarProps) {
  return (
    <svg
      viewBox="0 0 240 600"
      width={width}
      className={className}
      aria-hidden
      style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.6)) drop-shadow(0 0 30px oklch(0.82 0.16 85 / 0.25))" }}
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.22 0.02 280)" />
          <stop offset="50%" stopColor="oklch(0.08 0.005 280)" />
          <stop offset="100%" stopColor="oklch(0.15 0.015 280)" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.6 0.14 65)" />
          <stop offset="50%" stopColor="oklch(0.95 0.12 90)" />
          <stop offset="100%" stopColor="oklch(0.6 0.14 65)" />
        </linearGradient>
        <linearGradient id="neckGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.25 0.04 60)" />
          <stop offset="100%" stopColor="oklch(0.18 0.03 60)" />
        </linearGradient>
      </defs>

      {/* Headstock */}
      <path d="M95 10 L145 10 L155 70 L85 70 Z" fill="url(#neckGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
      {[0, 1, 2].map((i) => (
        <circle key={`t${i}`} cx={100 + i * 20} cy={28} r={4} fill="url(#goldGrad)" />
      ))}
      {[0, 1, 2].map((i) => (
        <circle key={`b${i}`} cx={100 + i * 20} cy={55} r={4} fill="url(#goldGrad)" />
      ))}

      {/* Neck */}
      <rect x="105" y="70" width="30" height="280" fill="url(#neckGrad)" stroke="url(#goldGrad)" strokeWidth="0.8" />
      {/* Frets */}
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={i} x1="105" y1={85 + i * 19} x2="135" y2={85 + i * 19} stroke="oklch(0.7 0.02 250)" strokeWidth="0.8" />
      ))}

      {/* Body */}
      <path
        d="M120 340
           C 60 340, 30 380, 30 450
           C 30 530, 80 580, 120 580
           C 160 580, 210 530, 210 450
           C 210 380, 180 340, 120 340 Z"
        fill="url(#bodyGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="2"
      />
      {/* Pickguard */}
      <path d="M120 360 C 95 360, 80 380, 80 410 L 80 470 C 80 500, 105 510, 120 510 C 135 510, 160 500, 160 470 L 160 410 C 160 380, 145 360, 120 360 Z" fill="oklch(0.1 0.005 280)" stroke="url(#goldGrad)" strokeWidth="1" />

      {/* Pickups */}
      <rect x="92" y="395" width="56" height="12" rx="2" fill="url(#goldGrad)" />
      <rect x="92" y="430" width="56" height="12" rx="2" fill="oklch(0.82 0.01 250)" />

      {/* Bridge */}
      <rect x="95" y="475" width="50" height="14" rx="2" fill="url(#goldGrad)" />

      {/* Knobs */}
      <circle cx="170" cy="480" r="7" fill="url(#goldGrad)" />
      <circle cx="170" cy="500" r="7" fill="url(#goldGrad)" />
      <circle cx="170" cy="520" r="7" fill="url(#goldGrad)" />

      {/* Strings */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 110 + i * 4;
        return (
          <line
            key={`s${i}`}
            x1={x}
            y1={20}
            x2={x}
            y2={485}
            stroke="oklch(0.85 0.01 90)"
            strokeWidth={i < 3 ? 0.6 : 0.9}
            className="animate-string"
            style={{ animationDelay: `${i * 0.04}s`, transformOrigin: "center" }}
          />
        );
      })}
    </svg>
  );
}
