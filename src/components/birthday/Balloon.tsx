interface BalloonProps {
  variant?: "gold" | "neon" | "silver";
  delay?: string;
  className?: string;
}

const variants = {
  gold: { fill: "radial-gradient(circle at 30% 30%, oklch(0.95 0.12 90), oklch(0.6 0.14 65))", glow: "oklch(0.82 0.16 85 / 0.5)" },
  neon: { fill: "radial-gradient(circle at 30% 30%, oklch(0.9 0.12 240), oklch(0.5 0.2 240))", glow: "oklch(0.78 0.18 240 / 0.6)" },
  silver: { fill: "radial-gradient(circle at 30% 30%, oklch(0.95 0.01 250), oklch(0.55 0.01 250))", glow: "oklch(0.82 0.01 250 / 0.45)" },
};

export function Balloon({ variant = "gold", delay = "0s", className = "" }: BalloonProps) {
  const v = variants[variant];
  return (
    <div className={`pointer-events-none absolute animate-float-slow ${className}`} style={{ animationDelay: delay }}>
      <div
        className="relative h-20 w-16 rounded-[50%]"
        style={{ background: v.fill, boxShadow: `0 10px 30px -6px ${v.glow}` }}
      >
        <span
          className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45"
          style={{ background: "oklch(0.5 0.05 70)" }}
        />
      </div>
      <div
        className="mx-auto h-20 w-px"
        style={{ background: "linear-gradient(180deg, oklch(0.6 0.05 250), transparent)" }}
      />
    </div>
  );
}
