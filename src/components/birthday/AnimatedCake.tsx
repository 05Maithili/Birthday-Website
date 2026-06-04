import { useState } from "react";

interface CakeProps {
  size?: "sm" | "lg";
  onClick?: () => void;
}

const DOT_COLORS = [
  "oklch(0.75 0.18 330)", // Neon Pink
  "oklch(0.78 0.18 240)", // Neon Blue
  "oklch(0.82 0.16 85)",  // Gold
  "oklch(0.75 0.16 140)", // Mint Green
  "oklch(0.8 0.18 40)",   // Orange
];

const CANDLE_COLORS = [
  "linear-gradient(90deg, oklch(0.78 0.18 240), oklch(0.5 0.18 240))",  // Blue
  "linear-gradient(90deg, oklch(0.75 0.18 330), oklch(0.5 0.18 330))",  // Pink
  "linear-gradient(90deg, oklch(0.82 0.16 85), oklch(0.6 0.14 65))",    // Gold
];

// Three-tier luxury colorful cake
export function AnimatedCake({ size = "sm", onClick }: CakeProps) {
  const [lit, setLit] = useState(true);

  const handleClick = () => {
    setLit((l) => !l);
    if (onClick) onClick();
  };

  const topTierBg = "linear-gradient(180deg, oklch(0.35 0.12 200), oklch(0.18 0.08 200))"; // Royal Teal/Cyan
  const middleTierBg = "linear-gradient(180deg, oklch(0.35 0.18 20), oklch(0.18 0.12 20))"; // Ruby Red
  const bottomTierBg = "linear-gradient(180deg, oklch(0.32 0.15 280), oklch(0.15 0.09 280))"; // Amethyst Purple

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group relative inline-block cursor-pointer border-0 bg-transparent outline-none animate-float-slow ${
        size === "lg" ? "cake-lg" : "cake-sm"
      }`}
      style={{
        width: "calc(220px * var(--cake-scale))",
        height: "calc(300px * var(--cake-scale))",
      }}
      aria-label="Birthday cake"
    >
      <style>{`
        .cake-sm {
          --cake-scale: 0.85;
        }
        .cake-lg {
          --cake-scale: 1.15;
        }
        @media (min-width: 640px) {
          .cake-sm {
            --cake-scale: 1.0;
          }
          .cake-lg {
            --cake-scale: 1.7;
          }
        }
        @keyframes smoke {
          0% { transform: translate(-50%, 0) scale(0.6); opacity: 0.8; }
          50% { opacity: 0.5; }
          100% { transform: translate(-50%, -20px) scale(1.6); opacity: 0; }
        }
      `}</style>

      {/* Candles */}
      <div className="absolute left-1/2 top-0 flex -translate-x-1/2" style={{ gap: "calc(14px * var(--cake-scale))" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            {/* Candle Flame / Smoke */}
            {lit ? (
              <div
                className="animate-flicker rounded-full"
                style={{
                  width: "calc(11px * var(--cake-scale))",
                  height: "calc(18px * var(--cake-scale))",
                  background: "radial-gradient(circle at 50% 70%, oklch(0.95 0.18 90), oklch(0.7 0.22 40))",
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: "0 0 calc(10px * var(--cake-scale)) oklch(0.95 0.18 90 / 0.8)",
                }}
              />
            ) : (
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-white/40 blur-[1px]"
                style={{
                  width: "calc(12px * var(--cake-scale))",
                  height: "calc(12px * var(--cake-scale))",
                  animation: "smoke 1.2s ease-out forwards",
                }}
              />
            )}
            <div style={{ width: 2, height: "calc(4px * var(--cake-scale))", background: "oklch(0.3 0.05 60)" }} />
            <div
              className="rounded-sm"
              style={{
                width: "calc(9px * var(--cake-scale))",
                height: "calc(34px * var(--cake-scale))",
                background: CANDLE_COLORS[i % CANDLE_COLORS.length],
                boxShadow: "0 0 calc(10px * var(--cake-scale)) oklch(0.82 0.16 85 / 0.3)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Top tier */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-t-2xl rounded-b-md transition-transform group-hover:scale-105"
        style={{
          top: "calc(78px * var(--cake-scale))",
          width: "calc(110px * var(--cake-scale))",
          height: "calc(60px * var(--cake-scale))",
          background: topTierBg,
          border: "1.5px solid oklch(0.82 0.16 85)",
          boxShadow: "inset 0 calc(-8px * var(--cake-scale)) 0 oklch(0.6 0.14 65), 0 0 calc(24px * var(--cake-scale)) oklch(0.82 0.16 85 / 0.35)",
        }}
      >
        <div className="absolute inset-x-0 -bottom-1.5 flex justify-around">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="block h-2 w-2 rounded-full shadow-[0_0_6px_currentColor]" style={{ background: DOT_COLORS[i % DOT_COLORS.length], color: DOT_COLORS[i % DOT_COLORS.length] }} />
          ))}
        </div>
      </div>

      {/* Middle tier */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-t-xl rounded-b-md transition-transform group-hover:scale-105"
        style={{
          top: "calc(148px * var(--cake-scale))",
          width: "calc(150px * var(--cake-scale))",
          height: "calc(60px * var(--cake-scale))",
          background: middleTierBg,
          border: "1.5px solid oklch(0.82 0.16 85)",
          boxShadow: "inset 0 calc(-8px * var(--cake-scale)) 0 oklch(0.6 0.14 65), 0 0 calc(24px * var(--cake-scale)) oklch(0.82 0.16 85 / 0.35)",
        }}
      >
        <svg className="absolute inset-x-0 top-0 w-full" style={{ height: "calc(18px * var(--cake-scale))" }} viewBox="0 0 150 18" preserveAspectRatio="none">
          <path d="M0,0 Q12,16 25,5 Q38,16 50,4 Q63,16 75,5 Q88,16 100,4 Q113,16 125,5 Q138,16 150,0 L150,0 Z" fill="url(#goldDrip)" />
          <defs>
            <linearGradient id="goldDrip" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.95 0.12 90)" />
              <stop offset="100%" stopColor="oklch(0.6 0.14 65)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom tier */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-t-xl rounded-b-md transition-transform group-hover:scale-105"
        style={{
          top: "calc(218px * var(--cake-scale))",
          width: "calc(200px * var(--cake-scale))",
          height: "calc(70px * var(--cake-scale))",
          background: bottomTierBg,
          border: "1.5px solid oklch(0.82 0.16 85)",
          boxShadow: "inset 0 calc(-10px * var(--cake-scale)) 0 oklch(0.6 0.14 65), 0 calc(20px * var(--cake-scale)) calc(50px * var(--cake-scale)) calc(-10px * var(--cake-scale)) oklch(0.82 0.16 85 / 0.5)",
        }}
      >
        <div className="absolute inset-x-0 bottom-2 flex justify-around px-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="block h-3 w-3 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ background: DOT_COLORS[(i + 2) % DOT_COLORS.length], color: DOT_COLORS[(i + 2) % DOT_COLORS.length] }}
            />
          ))}
        </div>
      </div>

      {/* Plate */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          top: "calc(286px * var(--cake-scale))",
          width: "calc(220px * var(--cake-scale))",
          height: "calc(14px * var(--cake-scale))",
          background: "linear-gradient(180deg, oklch(0.85 0.01 250), oklch(0.4 0.01 250))",
        }}
      />
    </button>
  );
}
