import { useMemo } from "react";

// Stylized elegant lily SVG
export function LilyIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft green leaves background */}
      <path
        d="M30 70 C 12 55, 15 35, 42 45 C 32 60, 31 67, 30 70 Z"
        fill="oklch(0.58 0.11 140 / 0.55)"
      />
      <path
        d="M70 70 C 88 55, 85 35, 58 45 C 68 60, 69 67, 70 70 Z"
        fill="oklch(0.58 0.11 140 / 0.55)"
      />
      {/* Back petals */}
      <path
        d="M50 50 C 35 20, 45 8, 50 3 C 55 8, 65 20, 50 50 Z"
        fill="oklch(0.98 0.01 90)"
      />
      <path
        d="M50 50 C 20 35, 8 45, 3 L50 50 Z"
        fill="oklch(0.94 0.01 90)"
      />
      <path
        d="M50 50 C 80 35, 92 45, 97 L50 50 Z"
        fill="oklch(0.94 0.01 90)"
      />
      {/* Front petals */}
      <path
        d="M50 50 C 28 28, 12 12, 18 6 C 24 12, 38 32, 50 50 Z"
        fill="oklch(0.99 0.01 90)"
      />
      <path
        d="M50 50 C 72 28, 88 12, 82 6 C 76 12, 62 32, 50 50 Z"
        fill="oklch(0.99 0.01 90)"
      />
      <path
        d="M50 50 C 32 68, 42 88, 50 97 C 58 88, 68 68, 50 50 Z"
        fill="oklch(0.96 0.01 90)"
      />
      {/* Inner Petal Soft Gold Glow */}
      <path
        d="M50 50 C 40 38, 46 25, 50 15 C 54 25, 60 38, 50 50 Z"
        fill="oklch(0.93 0.09 85 / 0.7)"
      />
      {/* Stamens / Pistil (Center yellow/gold bits) */}
      <circle cx="50" cy="50" r="4.5" fill="oklch(0.85 0.18 85)" />
      <path d="M50 50 L45 36" stroke="oklch(0.82 0.16 85)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="45" cy="36" r="2" fill="oklch(0.75 0.15 75)" />
      <path d="M50 50 L55 36" stroke="oklch(0.82 0.16 85)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="55" cy="36" r="2" fill="oklch(0.75 0.15 75)" />
      <path d="M50 50 L50 33" stroke="oklch(0.82 0.16 85)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="50" cy="33" r="2" fill="oklch(0.75 0.15 75)" />
    </svg>
  );
}

interface LilyConfig {
  top: string;
  left: string;
  delay: string;
  size: number;
}

export function FloatingLilies() {
  const lilies: LilyConfig[] = useMemo(() => [
    { top: "8%", left: "6%", delay: "0s", size: 38 },
    { top: "28%", left: "82%", delay: "1.5s", size: 48 },
    { top: "58%", left: "10%", delay: "2.8s", size: 34 },
    { top: "72%", left: "85%", delay: "4s", size: 44 },
    { top: "18%", left: "48%", delay: "5.5s", size: 30 },
    { top: "82%", left: "40%", delay: "2s", size: 38 },
    { top: "42%", left: "90%", delay: "3.2s", size: 32 },
    { top: "48%", left: "5%", delay: "0.8s", size: 40 },
    { top: "88%", left: "12%", delay: "6.2s", size: 28 },
    { top: "68%", left: "50%", delay: "4.8s", size: 36 },
    { top: "15%", left: "75%", delay: "7.5s", size: 32 },
    { top: "90%", left: "80%", delay: "5.1s", size: 30 }
  ], []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {lilies.map(({ top, left, delay, size }, i) => (
        <LilyIcon
          key={i}
          className="absolute animate-float-note text-white"
          style={{
            top,
            left,
            animationDelay: delay,
            width: size,
            height: size,
            opacity: 0.5,
            filter: "drop-shadow(0 0 12px oklch(0.82 0.16 85 / 0.55))",
          }}
        />
      ))}
    </div>
  );
}
