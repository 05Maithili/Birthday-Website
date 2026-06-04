import { useEffect, useState } from "react";

interface Burst {
  id: number;
  x: number;
  y: number;
  color: string;
  particles: { angle: number; distance: number; delay: number }[];
}

const colors = [
  "oklch(0.88 0.16 85)",
  "oklch(0.78 0.18 240)",
  "oklch(0.85 0.01 250)",
  "oklch(0.95 0.12 90)",
];

export function Fireworks({ trigger = 0 }: { trigger?: number }) {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const next: Burst[] = Array.from({ length: 5 }).map((_, b) => ({
      id: Date.now() + b,
      x: 15 + Math.random() * 70,
      y: 15 + Math.random() * 45,
      color: colors[b % colors.length],
      particles: Array.from({ length: 22 }).map((_, p) => {
        const angle = (p / 22) * Math.PI * 2;
        return { angle, distance: 80 + Math.random() * 60, delay: b * 0.18 };
      }),
    }));
    setBursts(next);
    const t = setTimeout(() => setBursts([]), 2800);
    return () => clearTimeout(t);
  }, [trigger]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute"
          style={{ left: `${burst.x}%`, top: `${burst.y}%` }}
        >
          {burst.particles.map((p, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full animate-firework"
              style={{
                background: burst.color,
                boxShadow: `0 0 8px ${burst.color}`,
                ["--fx" as string]: `${Math.cos(p.angle) * p.distance}px`,
                ["--fy" as string]: `${Math.sin(p.angle) * p.distance}px`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
