import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as Confetti, F as Fireworks, S as StageBackdrop, a as FloatingNotes } from "./Fireworks-BM234QCX.mjs";
import { S as Sparkles, H as Heart, M as Music, G as Guitar, P as Pause, b as Play } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const DOT_COLORS = [
  "oklch(0.75 0.18 330)",
  // Neon Pink
  "oklch(0.78 0.18 240)",
  // Neon Blue
  "oklch(0.82 0.16 85)",
  // Gold
  "oklch(0.75 0.16 140)",
  // Mint Green
  "oklch(0.8 0.18 40)"
  // Orange
];
const CANDLE_COLORS = [
  "linear-gradient(90deg, oklch(0.78 0.18 240), oklch(0.5 0.18 240))",
  // Blue
  "linear-gradient(90deg, oklch(0.75 0.18 330), oklch(0.5 0.18 330))",
  // Pink
  "linear-gradient(90deg, oklch(0.82 0.16 85), oklch(0.6 0.14 65))"
  // Gold
];
function AnimatedCake({ size = "sm", onClick }) {
  const [lit, setLit] = reactExports.useState(true);
  const handleClick = () => {
    setLit((l) => !l);
    if (onClick) onClick();
  };
  const topTierBg = "linear-gradient(180deg, oklch(0.35 0.12 200), oklch(0.18 0.08 200))";
  const middleTierBg = "linear-gradient(180deg, oklch(0.35 0.18 20), oklch(0.18 0.12 20))";
  const bottomTierBg = "linear-gradient(180deg, oklch(0.32 0.15 280), oklch(0.15 0.09 280))";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: handleClick,
      className: `group relative inline-block cursor-pointer border-0 bg-transparent outline-none animate-float-slow ${size === "lg" ? "cake-lg" : "cake-sm"}`,
      style: {
        width: "calc(220px * var(--cake-scale))",
        height: "calc(300px * var(--cake-scale))"
      },
      "aria-label": "Birthday cake",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 flex -translate-x-1/2", style: { gap: "calc(14px * var(--cake-scale))" }, children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center", children: [
          lit ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "animate-flicker rounded-full",
              style: {
                width: "calc(11px * var(--cake-scale))",
                height: "calc(18px * var(--cake-scale))",
                background: "radial-gradient(circle at 50% 70%, oklch(0.95 0.18 90), oklch(0.7 0.22 40))",
                animationDelay: `${i * 0.2}s`,
                boxShadow: "0 0 calc(10px * var(--cake-scale)) oklch(0.95 0.18 90 / 0.8)"
              }
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-white/40 blur-[1px]",
              style: {
                width: "calc(12px * var(--cake-scale))",
                height: "calc(12px * var(--cake-scale))",
                animation: "smoke 1.2s ease-out forwards"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 2, height: "calc(4px * var(--cake-scale))", background: "oklch(0.3 0.05 60)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-sm",
              style: {
                width: "calc(9px * var(--cake-scale))",
                height: "calc(34px * var(--cake-scale))",
                background: CANDLE_COLORS[i % CANDLE_COLORS.length],
                boxShadow: "0 0 calc(10px * var(--cake-scale)) oklch(0.82 0.16 85 / 0.3)"
              }
            }
          )
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute left-1/2 -translate-x-1/2 rounded-t-2xl rounded-b-md transition-transform group-hover:scale-105",
            style: {
              top: "calc(78px * var(--cake-scale))",
              width: "calc(110px * var(--cake-scale))",
              height: "calc(60px * var(--cake-scale))",
              background: topTierBg,
              border: "1.5px solid oklch(0.82 0.16 85)",
              boxShadow: "inset 0 calc(-8px * var(--cake-scale)) 0 oklch(0.6 0.14 65), 0 0 calc(24px * var(--cake-scale)) oklch(0.82 0.16 85 / 0.35)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 -bottom-1.5 flex justify-around", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-2 w-2 rounded-full shadow-[0_0_6px_currentColor]", style: { background: DOT_COLORS[i % DOT_COLORS.length], color: DOT_COLORS[i % DOT_COLORS.length] } }, i)) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute left-1/2 -translate-x-1/2 rounded-t-xl rounded-b-md transition-transform group-hover:scale-105",
            style: {
              top: "calc(148px * var(--cake-scale))",
              width: "calc(150px * var(--cake-scale))",
              height: "calc(60px * var(--cake-scale))",
              background: middleTierBg,
              border: "1.5px solid oklch(0.82 0.16 85)",
              boxShadow: "inset 0 calc(-8px * var(--cake-scale)) 0 oklch(0.6 0.14 65), 0 0 calc(24px * var(--cake-scale)) oklch(0.82 0.16 85 / 0.35)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-x-0 top-0 w-full", style: { height: "calc(18px * var(--cake-scale))" }, viewBox: "0 0 150 18", preserveAspectRatio: "none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,0 Q12,16 25,5 Q38,16 50,4 Q63,16 75,5 Q88,16 100,4 Q113,16 125,5 Q138,16 150,0 L150,0 Z", fill: "url(#goldDrip)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "goldDrip", x1: "0", x2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.95 0.12 90)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.6 0.14 65)" })
              ] }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute left-1/2 -translate-x-1/2 rounded-t-xl rounded-b-md transition-transform group-hover:scale-105",
            style: {
              top: "calc(218px * var(--cake-scale))",
              width: "calc(200px * var(--cake-scale))",
              height: "calc(70px * var(--cake-scale))",
              background: bottomTierBg,
              border: "1.5px solid oklch(0.82 0.16 85)",
              boxShadow: "inset 0 calc(-10px * var(--cake-scale)) 0 oklch(0.6 0.14 65), 0 calc(20px * var(--cake-scale)) calc(50px * var(--cake-scale)) calc(-10px * var(--cake-scale)) oklch(0.82 0.16 85 / 0.5)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-2 flex justify-around px-3", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "block h-3 w-3 rounded-full shadow-[0_0_8px_currentColor]",
                style: { background: DOT_COLORS[(i + 2) % DOT_COLORS.length], color: DOT_COLORS[(i + 2) % DOT_COLORS.length] }
              },
              i
            )) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute left-1/2 -translate-x-1/2 rounded-full",
            style: {
              top: "calc(286px * var(--cake-scale))",
              width: "calc(220px * var(--cake-scale))",
              height: "calc(14px * var(--cake-scale))",
              background: "linear-gradient(180deg, oklch(0.85 0.01 250), oklch(0.4 0.01 250))"
            }
          }
        )
      ]
    }
  );
}
const SONG_FILE = "/Song.mpeg";
const SONG_TITLE = "Track for Vineet";
const SONG_ARTIST = "";
function MusicPlayer() {
  const [playing, setPlaying] = reactExports.useState(false);
  const audioRef = reactExports.useRef(null);
  const analyserRef = reactExports.useRef(null);
  const dataArrayRef = reactExports.useRef(null);
  const audioCtxRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const animationFrameRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      if (!audioCtxRef.current) {
        try {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          const ctx = new AudioContextClass();
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 64;
          const source = ctx.createMediaElementSource(audioRef.current);
          source.connect(analyser);
          analyser.connect(ctx.destination);
          audioCtxRef.current = ctx;
          analyserRef.current = analyser;
          dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
        } catch (err) {
          console.warn("Web Audio initialization failed (expected on duplicate connections):", err);
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      audioRef.current.play().catch((err) => {
        console.warn("Playback prevented or failed (user interaction might be needed first):", err);
        setPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [playing]);
  reactExports.useEffect(() => {
    const updateVisualizer = () => {
      if (!playing || !analyserRef.current || !dataArrayRef.current || !containerRef.current) return;
      const analyser = analyserRef.current;
      const dataArray = dataArrayRef.current;
      analyser.getByteFrequencyData(dataArray);
      const bars = containerRef.current.children;
      for (let i = 0; i < 32; i++) {
        const bar = bars[i];
        if (bar) {
          const val = dataArray[i] || 0;
          const heightPercent = 15 + val / 255 * 85;
          bar.style.height = `${heightPercent}%`;
          bar.style.opacity = `${0.35 + val / 255 * 0.65}`;
        }
      }
      animationFrameRef.current = requestAnimationFrame(updateVisualizer);
    };
    if (playing) {
      animationFrameRef.current = requestAnimationFrame(updateVisualizer);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current) {
        const bars = containerRef.current.children;
        for (let i = 0; i < 32; i++) {
          const bar = bars[i];
          if (bar) {
            bar.style.height = `${22 + i % 6 * 12}%`;
            bar.style.opacity = "0.35";
          }
        }
      }
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [playing]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass mx-auto w-full max-w-md rounded-3xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { ref: audioRef, src: SONG_FILE, loop: true, crossOrigin: "anonymous" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${playing ? "animate-spin-slow" : ""}`,
          style: { background: "var(--gradient-button)", boxShadow: "var(--shadow-glow)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-7 w-7 text-primary-foreground" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-display text-xl font-semibold text-gold-gradient", children: SONG_TITLE }),
        SONG_ARTIST
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setPlaying((p) => !p),
          className: "flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground transition-transform hover:scale-110 active:scale-95 cursor-pointer",
          style: { background: "var(--gradient-button)", boxShadow: "var(--shadow-glow)" },
          "aria-label": playing ? "Pause" : "Play",
          children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-5 w-5 translate-x-0.5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "mt-6 flex h-20 items-end justify-center gap-1 sm:gap-1.5", children: Array.from({ length: 32 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "w-1 sm:w-1.5 origin-bottom rounded-full",
        style: {
          height: `${22 + i % 6 * 12}%`,
          background: i % 5 === 0 ? "linear-gradient(180deg, oklch(0.78 0.18 240), oklch(0.5 0.18 240))" : "linear-gradient(180deg, oklch(0.95 0.12 90), oklch(0.6 0.14 65))",
          opacity: 0.35,
          boxShadow: "0 0 6px oklch(0.82 0.16 85 / 0.45)"
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-sm italic text-muted-foreground", children: '"Life is better when played in your own rhythm."' })
  ] });
}
const variants = {
  gold: { fill: "radial-gradient(circle at 30% 30%, oklch(0.95 0.12 90), oklch(0.6 0.14 65))", glow: "oklch(0.82 0.16 85 / 0.5)" },
  neon: { fill: "radial-gradient(circle at 30% 30%, oklch(0.9 0.12 240), oklch(0.5 0.2 240))", glow: "oklch(0.78 0.18 240 / 0.6)" },
  silver: { fill: "radial-gradient(circle at 30% 30%, oklch(0.95 0.01 250), oklch(0.55 0.01 250))", glow: "oklch(0.82 0.01 250 / 0.45)" }
};
function Balloon({ variant = "gold", delay = "0s", className = "" }) {
  const v = variants[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pointer-events-none absolute animate-float-slow ${className}`, style: { animationDelay: delay }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "relative h-20 w-16 rounded-[50%]",
        style: { background: v.fill, boxShadow: `0 10px 30px -6px ${v.glow}` },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45",
            style: { background: "oklch(0.5 0.05 70)" }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mx-auto h-20 w-px",
        style: { background: "linear-gradient(180deg, oklch(0.6 0.05 250), transparent)" }
      }
    )
  ] });
}
function ElectricGuitar({ className = "", width = 240 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 240 600",
      width,
      className,
      "aria-hidden": true,
      style: { filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.6)) drop-shadow(0 0 30px oklch(0.82 0.16 85 / 0.25))" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "bodyGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.22 0.02 280)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "oklch(0.08 0.005 280)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.15 0.015 280)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "goldGrad", x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.6 0.14 65)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "oklch(0.95 0.12 90)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.6 0.14 65)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "neckGrad", x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.25 0.04 60)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.18 0.03 60)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M95 10 L145 10 L155 70 L85 70 Z", fill: "url(#neckGrad)", stroke: "url(#goldGrad)", strokeWidth: "1.5" }),
        [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 100 + i * 20, cy: 28, r: 4, fill: "url(#goldGrad)" }, `t${i}`)),
        [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 100 + i * 20, cy: 55, r: 4, fill: "url(#goldGrad)" }, `b${i}`)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "105", y: "70", width: "30", height: "280", fill: "url(#neckGrad)", stroke: "url(#goldGrad)", strokeWidth: "0.8" }),
        Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "105", y1: 85 + i * 19, x2: "135", y2: 85 + i * 19, stroke: "oklch(0.7 0.02 250)", strokeWidth: "0.8" }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M120 340\n           C 60 340, 30 380, 30 450\n           C 30 530, 80 580, 120 580\n           C 160 580, 210 530, 210 450\n           C 210 380, 180 340, 120 340 Z",
            fill: "url(#bodyGrad)",
            stroke: "url(#goldGrad)",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M120 360 C 95 360, 80 380, 80 410 L 80 470 C 80 500, 105 510, 120 510 C 135 510, 160 500, 160 470 L 160 410 C 160 380, 145 360, 120 360 Z", fill: "oklch(0.1 0.005 280)", stroke: "url(#goldGrad)", strokeWidth: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "92", y: "395", width: "56", height: "12", rx: "2", fill: "url(#goldGrad)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "92", y: "430", width: "56", height: "12", rx: "2", fill: "oklch(0.82 0.01 250)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "95", y: "475", width: "50", height: "14", rx: "2", fill: "url(#goldGrad)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "170", cy: "480", r: "7", fill: "url(#goldGrad)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "170", cy: "500", r: "7", fill: "url(#goldGrad)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "170", cy: "520", r: "7", fill: "url(#goldGrad)" }),
        [0, 1, 2, 3, 4, 5].map((i) => {
          const x = 110 + i * 4;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: x,
              y1: 20,
              x2: x,
              y2: 485,
              stroke: "oklch(0.85 0.01 90)",
              strokeWidth: i < 3 ? 0.6 : 0.9,
              className: "animate-string",
              style: { animationDelay: `${i * 0.04}s`, transformOrigin: "center" }
            },
            `s${i}`
          );
        })
      ]
    }
  );
}
const CHORDS = {
  G: [98, 123.47, 146.83, 196, 246.94, 392],
  // G2, B2, D3, G3, B3, G4
  C: [82.41, 130.81, 164.81, 196, 261.63, 329.63],
  // E2, C3, E3, G3, C4, E4
  D: [110, 146.83, 220, 293.66, 369.99, 440],
  // A2, D3, A3, D4, F#4, A4
  Em: [82.41, 110, 146.83, 196, 246.94, 329.63],
  // E2, A2, D3, G3, B3, E4
  Am: [110, 146.83, 220, 261.63, 329.63, 440]
  // A2, D3, A3, C4, E4, A4
};
function GuitarStrummer() {
  const [selectedChord, setSelectedChord] = reactExports.useState("G");
  const [vibrating, setVibrating] = reactExports.useState([false, false, false, false, false, false]);
  const audioCtxRef = reactExports.useRef(null);
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };
  const playStringAudio = (frequency) => {
    try {
      const ctx = getAudioContext();
      const sampleRate = ctx.sampleRate;
      const decay = 0.993;
      const period = Math.round(sampleRate / frequency);
      const duration = 1.8;
      const bufferSize = sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < period; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      for (let i = period; i < bufferSize; i++) {
        data[i] = (data[i - period] + data[i - period + 1]) * 0.5 * decay;
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + duration - 0.2);
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start();
    } catch (err) {
      console.warn("Audio Context playback failed/blocked:", err);
    }
  };
  const handleStrum = (index) => {
    const frequencies = CHORDS[selectedChord];
    const freq = frequencies[5 - index];
    playStringAudio(freq);
    setVibrating((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
    setTimeout(() => {
      setVibrating((prev) => {
        const next = [...prev];
        next[index] = false;
        return next;
      });
    }, 180);
  };
  const lastStrummedRef = reactExports.useRef(-1);
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!target) return;
    const stringIdxStr = target.getAttribute("data-string-idx");
    if (stringIdxStr !== null) {
      const idx = parseInt(stringIdxStr, 10);
      if (idx !== lastStrummedRef.current) {
        handleStrum(idx);
        lastStrummedRef.current = idx;
      }
    } else {
      lastStrummedRef.current = -1;
    }
  };
  const handleTouchEnd = () => {
    lastStrummedRef.current = -1;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative px-4 py-24 bg-black/10 border-y border-[color:var(--gold)]/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]", children: "Interactive Rockstar Fretboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold md:text-4xl text-gold-gradient", children: "Strum Vineet's Guitar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base", children: "Hover or drag your cursor across the strings below to strum chords in real-time. Use the chord selector to change the harmony!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap justify-center gap-3", children: Object.keys(CHORDS).map((chord) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          setSelectedChord(chord);
          getAudioContext();
        },
        className: `h-11 px-6 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${selectedChord === chord ? "bg-[color:var(--gold)] text-black border-[color:var(--gold)] shadow-[0_0_15px_rgba(253,186,116,0.4)]" : "border-white/10 text-muted-foreground hover:text-white hover:border-white/30 bg-white/5"}`,
        children: chord === "Em" ? "E Minor (Em)" : chord === "Am" ? "A Minor (Am)" : `${chord} Major`
      },
      chord
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mt-16 max-w-3xl rounded-2xl border border-white/10 p-6 glass shadow-[var(--shadow-glow)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative h-64 w-full rounded-xl overflow-hidden flex flex-col justify-between py-6",
          style: {
            background: "linear-gradient(180deg, oklch(0.18 0.015 280), oklch(0.1 0.005 280))",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.8)"
          },
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex justify-around pointer-events-none px-12", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full w-[2px] bg-gradient-to-b from-amber-500/10 via-[oklch(0.82_0.16_85/0.4)] to-amber-500/10",
                style: {
                  boxShadow: "0 0 4px rgba(253, 186, 116, 0.2)"
                }
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex justify-around items-center pointer-events-none px-12", children: [...Array(5)].map((_, i) => (
              // Show markers on 3rd, 5th, 7th fret positions
              i === 1 || i === 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-3 w-3 rounded-full bg-[color:var(--gold)]/35 shadow-[0_0_8px_rgba(253,186,116,0.3)]",
                  style: { transform: "translateX(50%)" }
                },
                i
              ) : null
            )) }),
            [...Array(6)].map((_, i) => {
              const thickness = 1.2 + (5 - i) * 0.4;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-string-idx": i,
                  onMouseEnter: () => handleStrum(i),
                  className: "relative w-full h-8 flex items-center cursor-pointer group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "data-string-idx": i,
                        className: "absolute inset-y-0 left-0 right-0 z-10"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "data-string-idx": i,
                        className: `h-[1px] w-full bg-gradient-to-r from-zinc-700 via-[oklch(0.82_0.16_85)] to-zinc-700 transition-shadow ${vibrating[i] ? "animate-string shadow-[0_0_12px_oklch(0.82_0.16_85)]" : "shadow-[0_0_2px_rgba(253,186,116,0.2)]"}`,
                        style: {
                          height: `${thickness}px`,
                          opacity: vibrating[i] ? 1 : 0.75
                        }
                      }
                    ),
                    vibrating[i] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[color:var(--gold)] animate-ping",
                        style: { boxShadow: "0 0 10px oklch(0.82 0.16 85)" }
                      }
                    )
                  ]
                },
                i
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-3.5 w-3.5 text-[color:var(--gold)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Currently Strumming: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[color:var(--gold)] uppercase", children: selectedChord }),
          " Chord"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-[color:var(--gold)]" })
      ] })
    ] })
  ] }) });
}
const WISHES = [
  "Vineet, hope this year brings you hit solos and beautiful chords! 🎸  ",
  "To the guy who makes every day feel like a rock concert. Happy Birthday! 🤘 ",
  "May your dreams play louder than any applause! ✨  ",
  "Wishing you a birthday full of music, laughter, and your favorite tea. ☕  ",
  "Vineet, keep shining and rocking the world! You're a star! 🌟  ",
  "Happy Birthday! May your life always be in perfect harmony. 🎶  ",
  "Always inspired by your strength and that golden smile. Rock on! 🎸 "
];
function WishJar() {
  const [bubbles, setBubbles] = reactExports.useState([]);
  const [wishIndex, setWishIndex] = reactExports.useState(0);
  const jarSparkles = reactExports.useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      top: `${30 + Math.random() * 50}%`,
      left: `${25 + Math.random() * 50}%`,
      delay: `${i * 0.4}s`,
      size: `${3 + Math.random() * 4}px`
    }));
  }, []);
  const releaseWish = () => {
    const id = Date.now() + Math.random();
    const newBubble = {
      id,
      text: WISHES[wishIndex],
      left: `${-110 + Math.random() * 220}px`,
      // Random horizontal drift pixel offset
      rotation: `${-6 + Math.random() * 12}deg`
      // Random rotation angle
    };
    setBubbles((prev) => [...prev, newBubble]);
    setWishIndex((prev) => (prev + 1) % WISHES.length);
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id));
    }, 4500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative px-4 py-24 bg-black/10 border-b border-[color:var(--gold)]/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes floatUpWish {
          0% { transform: translateY(80px) scale(0.5); opacity: 0; }
          15% { opacity: 1; transform: translateY(0) scale(1) translateX(calc(-50% + var(--drift) * 0.45)) rotate(var(--rot)); }
          85% { opacity: 1; }
          100% { transform: translateY(-280px) scale(0.8) translateX(calc(-50% + var(--drift) * 0.45)) rotate(var(--rot)); opacity: 0; }
        }
        @media (min-width: 640px) {
          @keyframes floatUpWish {
            0% { transform: translateY(80px) scale(0.5); opacity: 0; }
            15% { opacity: 1; transform: translateY(0) scale(1) translateX(calc(-50% + var(--drift))) rotate(var(--rot)); }
            85% { opacity: 1; }
            100% { transform: translateY(-280px) scale(0.8) translateX(calc(-50% + var(--drift))) rotate(var(--rot)); opacity: 0; }
          }
        }
        .animate-wish-bubble {
          animation: floatUpWish 4.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .wish-jar-glow {
          box-shadow: 0 0 40px oklch(0.82 0.16 85 / 0.15), inset 0 0 20px oklch(0.82 0.16 85 / 0.1);
        }
        .wish-jar-glow:hover {
          box-shadow: 0 0 55px oklch(0.82 0.16 85 / 0.35), inset 0 0 35px oklch(0.82 0.16 85 / 0.2);
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]", children: "Send a Wish" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold md:text-4xl text-gold-gradient", children: "The Magic Wish Jar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base", children: "Click on the glowing jar to release warm birthday wishes and messages." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mt-20 h-[380px] w-full max-w-md flex flex-col items-center justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-[180px] top-0 pointer-events-none", children: bubbles.map((bubble) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute animate-wish-bubble glass rounded-2xl p-4 border border-[color:var(--gold)]/20 shadow-[0_4px_15px_rgba(0,0,0,0.6)] text-center text-amber-100/90 text-sm md:text-base font-script w-52 sm:w-64 backdrop-blur-xl",
            style: {
              left: "50%",
              "--rot": bubble.rotation,
              "--drift": bubble.left,
              transformOrigin: "center bottom"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)] mx-auto mb-1.5 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                '"',
                bubble.text,
                '"'
              ] })
            ]
          },
          bubble.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: releaseWish,
            className: "group relative cursor-pointer outline-none border-none bg-transparent transition-transform hover:scale-105 active:scale-98 flex flex-col items-center justify-end",
            "aria-label": "Wish Jar",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-16 h-5 rounded-t-md border border-amber-950/20 shadow-inner z-10",
                  style: {
                    background: "linear-gradient(90deg, oklch(0.42 0.08 60), oklch(0.28 0.06 60))"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "wish-jar-glow w-36 h-48 rounded-t-3xl rounded-b-[40px] border border-white/10 relative overflow-hidden transition-all duration-500",
                  style: {
                    background: "linear-gradient(135deg, oklch(1 0 0 / 0.05), oklch(1 0 0 / 0.01))",
                    backdropFilter: "blur(6px)"
                  },
                  children: [
                    jarSparkles.map((spark, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "absolute rounded-full animate-twinkle bg-[color:var(--gold)] shadow-[0_0_8px_currentColor]",
                        style: {
                          top: spark.top,
                          left: spark.left,
                          width: spark.size,
                          height: spark.size,
                          animationDelay: spark.delay,
                          color: "oklch(0.82 0.16 85)"
                        }
                      },
                      i
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-x-0 bottom-0 h-16 rounded-b-[40px] blur-sm opacity-60",
                        style: {
                          background: "radial-gradient(circle at 50% 100%, oklch(0.82 0.16 85 / 0.6), transparent 70%)"
                        }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "absolute -top-6 -right-6 h-6 w-6 animate-sparkle text-[color:var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "absolute -bottom-2 -left-6 h-5 w-5 animate-sparkle text-[color:var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300", style: { animationDelay: "0.5s" } })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-48 h-3 rounded-full blur-md mt-1.5 opacity-55",
            style: {
              background: "radial-gradient(ellipse, oklch(0.82 0.16 85 / 0.35), transparent 70%)"
            }
          }
        )
      ] })
    ] })
  ] });
}
const FRIEND_NAME = "Vineet";
const FRIEND_PHOTO = "/images/image3.png";
const memories = [{
  caption: "Folk Journey",
  url: "/images/image2.png"
}, {
  caption: "Rockstar",
  url: "/images/image6.png"
}, {
  caption: "Cultural Vibes",
  url: "/images/image9.png"
}];
const pickClip = "polygon(50% 0%, 95% 18%, 100% 55%, 50% 100%, 0% 55%, 5% 18%)";
function Index() {
  const [confettiTrigger, setConfettiTrigger] = reactExports.useState(0);
  const [fireworkTrigger, setFireworkTrigger] = reactExports.useState(0);
  const [cakeMessage, setCakeMessage] = reactExports.useState(false);
  const celebrate = () => {
    setConfettiTrigger((c) => c + 1);
    setFireworkTrigger((f) => f + 1);
  };
  const beginCelebration = () => {
    celebrate();
    setTimeout(() => {
      document.getElementById("photo")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 200);
  };
  const onCakeClick = () => {
    celebrate();
    setCakeMessage(true);
    setTimeout(() => setCakeMessage(false), 3500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Confetti, { trigger: confettiTrigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Fireworks, { trigger: fireworkTrigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-screen items-center justify-center px-4 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StageBackdrop, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNotes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground", children: "Happy Birthday" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-gold-gradient", children: [
              FRIEND_NAME,
              " 🎸"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground md:mx-0 md:text-lg", children: "Every great song tells a story. Today we celebrate yours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: beginCelebration, className: "mt-10 h-14 rounded-full px-10 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:brightness-110", style: {
            background: "var(--gradient-button)",
            boxShadow: "var(--shadow-glow)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
            "Begin the Celebration"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-center md:justify-end animate-fade-up", style: {
          animationDelay: "0.3s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 mx-auto h-full w-[300px] rounded-full blur-3xl", style: {
            background: "radial-gradient(circle, oklch(0.82 0.16 85 / 0.35), transparent 70%)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ElectricGuitar, { className: "w-[140px] md:w-[220px]" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "photo", className: "relative px-4 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNotes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]", children: "The Star of Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold md:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-gradient", children: "Today's Rockstar" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "The person who turns ordinary moments into unforgettable memories." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mt-16 h-64 w-64 sm:h-72 sm:w-72 animate-float-slow md:h-96 md:w-96", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 animate-pulse-glow rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full p-[6px]", style: {
            background: "conic-gradient(from 0deg, oklch(0.95 0.12 90), oklch(0.55 0.14 65), oklch(0.95 0.12 90), oklch(0.78 0.18 240), oklch(0.95 0.12 90))"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full rounded-full bg-background p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: FRIEND_PHOTO, alt: FRIEND_NAME, className: "h-full w-full rounded-full object-cover" }) }) }),
          [...Array(8)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute h-2 w-2 rounded-full animate-twinkle", style: {
            top: `${20 + Math.sin(i) * 40 + 30}%`,
            left: `${20 + Math.cos(i) * 40 + 30}%`,
            background: i % 2 ? "var(--gold)" : "var(--neon)",
            boxShadow: `0 0 12px currentColor`,
            color: i % 2 ? "var(--gold)" : "var(--neon)",
            animationDelay: `${i * 0.4}s`
          } }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "absolute -right-4 -top-4 h-8 w-8 animate-sparkle text-[color:var(--gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "absolute -bottom-4 -left-4 h-8 w-8 animate-heart fill-[color:var(--gold)] text-[color:var(--gold)]" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative px-4 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNotes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 mx-auto my-auto h-80 w-80 rounded-full blur-3xl", style: {
              background: "radial-gradient(circle, oklch(0.78 0.18 240 / 0.3), transparent 70%)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ElectricGuitar, { className: "w-[120px] md:w-[180px] transition-transform duration-500 hover:scale-105 hover:-rotate-3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MusicPlayer, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--neon)]", children: "Music & Soul" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold md:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-gradient", children: "Strings of the Soul" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass mt-8 rounded-3xl p-8 relative overflow-hidden border border-white/10 shadow-[var(--shadow-glow)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(253,186,116,0.15)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "absolute -right-6 -bottom-6 h-28 w-28 text-white/5 transform rotate-12 pointer-events-none select-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Some people come into our lives and become a beautiful part of our story." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No matter how busy life gets or how far the paths may lead, certain bonds remain untouched by time and distance. They stay alive in memories, laughter, conversations, and countless little moments that mean more than words can express." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold border-l-2 border-[color:var(--gold)] pl-4 py-1 bg-white/5 rounded-r-xl", children: "Vineet, you are one of those rare people." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your presence brings comfort, your smile brings positivity, and you bring happiness. Every memory shared with you has become a melody that continues to play in my heart." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As this song plays, I hope it reminds you of how special you are and how grateful I am for every moment we've shared." })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GuitarStrummer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative px-4 py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]", children: "Memory Wall" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold md:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-gradient", children: "Beautiful Memories" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Moments worth replaying on loop" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-none", children: memories.map((memory, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] w-full transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105", style: {
          clipPath: pickClip,
          background: "linear-gradient(135deg, oklch(0.22 0.02 280), oklch(0.08 0.005 280))",
          filter: "drop-shadow(0 0 18px oklch(0.82 0.16 85 / 0.35))"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-[3px]", style: {
            clipPath: pickClip,
            background: "linear-gradient(135deg, oklch(0.18 0.02 280), oklch(0.1 0.005 280))"
          } }),
          memory.url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: memory.url, alt: memory.caption, className: "absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] object-cover", style: {
            clipPath: pickClip
          } }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-[3px] flex flex-col items-center justify-center text-center", style: {
            clipPath: pickClip
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Guitar, { className: "h-12 w-12 text-[color:var(--gold)] transition-transform duration-500 group-hover:rotate-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 px-4 text-xs text-muted-foreground", children: "Photo placeholder" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "absolute right-3 top-3 h-4 w-4 animate-sparkle text-[color:var(--gold)]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-sm uppercase tracking-[0.2em] text-gold-gradient", children: memory.caption })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WishJar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "cake", className: "relative overflow-hidden px-4 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StageBackdrop, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Balloon, { variant: "gold", className: "left-[8%] top-[15%]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Balloon, { variant: "neon", delay: "1.2s", className: "left-[20%] top-[45%]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Balloon, { variant: "silver", delay: "0.6s", className: "right-[10%] top-[20%]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Balloon, { variant: "gold", delay: "1.8s", className: "right-[22%] top-[50%]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]", children: "Make A Wish" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold md:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-gradient", children: "A Cake Worthy of a Rockstar" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Click the cake to light up the night 🎂" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCake, { size: "lg", onClick: onCakeClick }) }),
        cakeMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 animate-fade-up font-script text-3xl text-gold-gradient md:text-5xl", children: "Make a Wish, Vineet!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: celebrate, variant: "outline", className: "mt-10 h-12 rounded-full border-2 border-[color:var(--gold)]/60 bg-white/5 px-8 text-[color:var(--gold)] backdrop-blur transition-all hover:scale-105 hover:bg-[color:var(--gold)] hover:text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          "Throw Confetti"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative px-4 py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNotes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-3xl text-center animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-8 w-8 animate-heart fill-[color:var(--gold)] text-[color:var(--gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Guitar, { className: "h-8 w-8 animate-float-slow text-[color:var(--gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-8 w-8 animate-heart fill-[color:var(--gold)] text-[color:var(--gold)]", style: {
            animationDelay: "0.3s"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold md:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-gradient", children: "A Message For Vineet ❤️" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass mt-12 rounded-3xl p-8 text-left md:p-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl leading-relaxed text-foreground md:text-3xl", children: "Dear Vineet," }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground md:text-lg", children: "On your special day, I just want to remind you how amazing you are. Your kindness, talent, smile, and positive energy make life brighter for everyone around you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg", children: "May this year bring you happiness, success, endless opportunities, beautiful memories, and countless reasons to smile." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg", children: "Keep following your dreams, keep playing your favorite guitar, and keep being the wonderful person you are." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 font-script text-3xl text-gold-gradient md:text-4xl", children: "Happy Birthday, Bala. 🎂" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: celebrate, className: "mt-10 h-14 rounded-full px-10 text-base font-semibold text-primary-foreground", style: {
          background: "var(--gradient-button)",
          boxShadow: "var(--shadow-glow)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 fill-current" }),
          "Send Love"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-4 py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StageBackdrop, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNotes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Balloon, { variant: "gold", className: "left-[6%] top-[20%]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Balloon, { variant: "neon", delay: "0.8s", className: "left-[18%] bottom-[20%]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Balloon, { variant: "silver", delay: "1.4s", className: "right-[12%] top-[18%]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Balloon, { variant: "gold", delay: "2s", className: "right-[24%] bottom-[15%]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl text-center animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: "HAPPY BIRTHDAY" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-gradient", children: "VINEET 🎸" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl", children: "May your life always be filled with beautiful music and endless happiness." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: celebrate, className: "mt-12 h-16 rounded-full px-12 text-lg font-semibold text-primary-foreground transition-all hover:scale-105", style: {
          background: "var(--gradient-button)",
          boxShadow: "var(--shadow-glow)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
          "One More Encore"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-[color:var(--gold)]/20 px-4 py-10 text-center text-sm text-muted-foreground", children: [
      "Made with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "inline h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" }),
      " and lots of 🎶 for Vineet"
    ] })
  ] });
}
export {
  Index as component
};
