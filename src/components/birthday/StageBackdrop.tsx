// Concert stage backdrop: spotlights + twinkling stars
export function StageBackdrop() {
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1 + Math.random() * 2.5,
    delay: Math.random() * 3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Stage gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.25 0.04 270 / 0.6), transparent 70%)",
        }}
      />
      {/* Spotlights */}
      <div
        className="absolute -top-20 left-1/4 h-[120%] w-[420px] origin-top animate-spotlight"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.82 0.16 85 / 0.18), transparent 70%)",
          clipPath: "polygon(45% 0, 55% 0, 100% 100%, 0 100%)",
        }}
      />
      <div
        className="absolute -top-20 right-1/4 h-[120%] w-[420px] origin-top animate-spotlight"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.78 0.18 240 / 0.15), transparent 70%)",
          clipPath: "polygon(45% 0, 55% 0, 100% 100%, 0 100%)",
          animationDelay: "2s",
        }}
      />
      {/* Stars */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: i % 4 === 0 ? "oklch(0.78 0.18 240)" : "oklch(0.92 0.1 90)",
            boxShadow: `0 0 ${s.size * 4}px currentColor`,
            color: i % 4 === 0 ? "oklch(0.78 0.18 240)" : "oklch(0.92 0.1 90)",
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
