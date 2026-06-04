import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Music, c as Music2, d as Music3, e as Music4 } from "../_libs/lucide-react.mjs";
const notes = [
  { Icon: Music, top: "10%", left: "8%", delay: "0s", size: 28 },
  { Icon: Music2, top: "30%", left: "85%", delay: "1.2s", size: 36 },
  { Icon: Music3, top: "60%", left: "12%", delay: "2.4s", size: 24 },
  { Icon: Music4, top: "75%", left: "78%", delay: "3.6s", size: 32 },
  { Icon: Music, top: "20%", left: "50%", delay: "4.8s", size: 20 },
  { Icon: Music2, top: "85%", left: "45%", delay: "1.8s", size: 28 },
  { Icon: Music3, top: "45%", left: "92%", delay: "3s", size: 22 },
  { Icon: Music4, top: "50%", left: "3%", delay: "0.6s", size: 30 }
];
function FloatingNotes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: notes.map(({ Icon, top, left, delay, size }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Icon,
    {
      className: "absolute animate-float-note text-[color:var(--gold)]",
      style: {
        top,
        left,
        animationDelay: delay,
        width: size,
        height: size,
        opacity: 0.55,
        filter: "drop-shadow(0 0 8px oklch(0.82 0.16 85 / 0.6))"
      }
    },
    i
  )) });
}
function StageBackdrop() {
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1 + Math.random() * 2.5,
    delay: Math.random() * 3
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.25 0.04 270 / 0.6), transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-20 left-1/4 h-[120%] w-[420px] origin-top animate-spotlight",
        style: {
          background: "linear-gradient(180deg, oklch(0.82 0.16 85 / 0.18), transparent 70%)",
          clipPath: "polygon(45% 0, 55% 0, 100% 100%, 0 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-20 right-1/4 h-[120%] w-[420px] origin-top animate-spotlight",
        style: {
          background: "linear-gradient(180deg, oklch(0.78 0.18 240 / 0.15), transparent 70%)",
          clipPath: "polygon(45% 0, 55% 0, 100% 100%, 0 100%)",
          animationDelay: "2s"
        }
      }
    ),
    stars.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute rounded-full animate-twinkle",
        style: {
          top: `${s.top}%`,
          left: `${s.left}%`,
          width: s.size,
          height: s.size,
          background: i % 4 === 0 ? "oklch(0.78 0.18 240)" : "oklch(0.92 0.1 90)",
          boxShadow: `0 0 ${s.size * 4}px currentColor`,
          color: i % 4 === 0 ? "oklch(0.78 0.18 240)" : "oklch(0.92 0.1 90)",
          animationDelay: `${s.delay}s`
        }
      },
      i
    ))
  ] });
}
const colors$1 = [
  "oklch(0.88 0.16 85)",
  "oklch(0.95 0.12 90)",
  "oklch(0.6 0.14 65)",
  "oklch(0.82 0.01 250)",
  "oklch(0.78 0.18 240)"
];
function Confetti({ trigger = 0, count = 80 }) {
  const [pieces, setPieces] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (trigger === 0) return;
    const next = Array.from({ length: count }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      color: colors$1[i % colors$1.length],
      size: 6 + Math.random() * 8
    }));
    setPieces(next);
    const t = setTimeout(() => setPieces([]), 4e3);
    return () => clearTimeout(t);
  }, [trigger, count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-50 overflow-hidden", children: pieces.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "absolute top-0 animate-confetti rounded-sm",
      style: {
        left: `${p.left}%`,
        width: p.size,
        height: p.size * 1.6,
        background: p.color,
        boxShadow: `0 0 6px ${p.color}`,
        animationDelay: `${p.delay}s`
      }
    },
    p.id
  )) });
}
const colors = [
  "oklch(0.88 0.16 85)",
  "oklch(0.78 0.18 240)",
  "oklch(0.85 0.01 250)",
  "oklch(0.95 0.12 90)"
];
function Fireworks({ trigger = 0 }) {
  const [bursts, setBursts] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (trigger === 0) return;
    const next = Array.from({ length: 5 }).map((_, b) => ({
      id: Date.now() + b,
      x: 15 + Math.random() * 70,
      y: 15 + Math.random() * 45,
      color: colors[b % colors.length],
      particles: Array.from({ length: 22 }).map((_2, p) => {
        const angle = p / 22 * Math.PI * 2;
        return { angle, distance: 80 + Math.random() * 60, delay: b * 0.18 };
      })
    }));
    setBursts(next);
    const t = setTimeout(() => setBursts([]), 2800);
    return () => clearTimeout(t);
  }, [trigger]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-40 overflow-hidden", children: bursts.map((burst) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute",
      style: { left: `${burst.x}%`, top: `${burst.y}%` },
      children: burst.particles.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "absolute h-1.5 w-1.5 rounded-full animate-firework",
          style: {
            background: burst.color,
            boxShadow: `0 0 8px ${burst.color}`,
            ["--fx"]: `${Math.cos(p.angle) * p.distance}px`,
            ["--fy"]: `${Math.sin(p.angle) * p.distance}px`,
            animationDelay: `${p.delay}s`
          }
        },
        i
      ))
    },
    burst.id
  )) });
}
export {
  Confetti as C,
  Fireworks as F,
  StageBackdrop as S,
  FloatingNotes as a
};
