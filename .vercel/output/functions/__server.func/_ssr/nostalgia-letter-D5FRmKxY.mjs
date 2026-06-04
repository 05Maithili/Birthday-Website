import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Confetti, F as Fireworks, S as StageBackdrop, a as FloatingNotes } from "./Fireworks-BM234QCX.mjs";
import { A as ArrowLeft, H as Heart, V as Volume2, a as VolumeX } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function Polaroid({
  src,
  caption,
  rotation
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative p-4 pb-8 bg-[#fdfaf2] text-[#2c221e] shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#ebd8b7]/40 transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-20 w-64 ${rotation}`, style: {
    fontFamily: "var(--font-sans)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square w-full overflow-hidden bg-zinc-950 border border-[#bfa38a]/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-amber-900/10 mix-blend-color-burn z-10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-neutral-950/20 mix-blend-multiply z-10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: caption, className: "w-full h-full object-cover filter brightness-[1.02] contrast-[0.96] sepia-[0.15]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center font-script text-2xl font-bold tracking-wide text-[#5c4a3c] drop-shadow-sm select-none", children: caption }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/20 border-x border-dashed border-white/40 backdrop-blur-[2.5px] rotate-[-2deg] shadow-[0_2px_5px_rgba(0,0,0,0.05)] pointer-events-none" })
  ] });
}
function GuitarStringsDecoration({
  position
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full flex flex-col gap-[7px] py-6 opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer group", children: [...Array(6)].map((_, i) => {
    const thickness = position === "top" ? 1 + i * 0.25 : 2.25 - i * 0.25;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-gradient-to-r from-transparent via-[oklch(0.82_0.16_85)] to-transparent group-hover:animate-string", style: {
      height: `${thickness}px`,
      boxShadow: i >= 4 ? "0 0 8px oklch(0.82 0.16 85 / 0.6)" : "none",
      animationDelay: `${i * 0.04}s`
    } }, i);
  }) });
}
function TypingText({
  text,
  delay = 0,
  speed = 40
}) {
  const [displayedText, setDisplayedText] = reactExports.useState("");
  reactExports.useEffect(() => {
    const startTimer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [text, delay, speed]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: displayedText });
}
function FadeInParagraph({
  children,
  delay
}) {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-script text-2xl md:text-3xl leading-relaxed text-amber-100/95 transition-all duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`, children });
}
function MiniMusicPlayer() {
  const [playing, setPlaying] = reactExports.useState(false);
  const audioRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch((err) => {
        console.warn("Mini music player playback failed:", err);
        setPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [playing]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass max-w-sm rounded-full px-5 py-2.5 flex items-center gap-3 border border-[color:var(--gold)]/20 shadow-[0_0_15px_rgba(253,186,116,0.05)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { ref: audioRef, src: "/Song.mpeg", loop: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPlaying((p) => !p), className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-primary-foreground transition-transform hover:scale-105 active:scale-95 cursor-pointer", style: {
      background: "var(--gradient-button)",
      boxShadow: "0 0 10px oklch(0.82 0.16 85 / 0.3)"
    }, children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-xs font-medium tracking-wider text-gold-gradient block truncate", children: playing ? "Playing: Track for Vineet 🎶" : "Play Ambient Soundtrack" }) })
  ] });
}
function NostalgiaLetterPage() {
  const [confettiTrigger, setConfettiTrigger] = reactExports.useState(0);
  const [fireworkTrigger, setFireworkTrigger] = reactExports.useState(0);
  const particles = reactExports.useMemo(() => {
    return Array.from({
      length: 25
    }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 6}s`,
      size: `${2 + Math.random() * 3.5}px`,
      drift: `${-30 + Math.random() * 60}px`
    }));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "film-grain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Confetti, { trigger: confettiTrigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Fireworks, { trigger: fireworkTrigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StageBackdrop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNotes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden z-10", children: particles.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute rounded-full animate-particle bg-[color:var(--gold)]", style: {
      left: p.left,
      animationDelay: p.delay,
      animationDuration: p.duration,
      width: p.size,
      height: p.size,
      opacity: 0,
      boxShadow: "0 0 8px oklch(0.82 0.16 85 / 0.55)",
      color: "oklch(0.82 0.16 85)",
      "--drift": p.drift
    } }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-6xl px-4 pb-28 pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-[color:var(--gold)] transition-colors group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 transition-transform group-hover:-translate-x-1" }),
          "Back to Home"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MiniMusicPlayer, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 md:mb-20 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl text-gold-gradient", children: "Letter ✨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-xs md:text-sm font-medium tracking-widest text-muted-foreground uppercase h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypingText, { text: "Some memories never fade, they only become more special with time.", delay: 600, speed: 35 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] xl:grid-cols-[1fr_2.2fr_1fr] gap-10 xl:gap-12 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-8 lg:gap-10 lg:sticky lg:top-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image6.png", caption: "Rockstar Strumming 🎸", rotation: "rotate-[-4deg] sm:rotate-[-2deg] lg:rotate-[-5deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image2.png", caption: "The Golden Smile ✨", rotation: "rotate-[3deg] sm:rotate-[-1deg] lg:rotate-[4deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image9.png", caption: "Melody & Memories 📸", rotation: "rotate-[-2deg] sm:rotate-[3deg] lg:rotate-[-3deg]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-[var(--shadow-glow)] backdrop-blur-2xl animate-fade-up", style: {
          animationDelay: "0.2s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GuitarStringsDecoration, { position: "top" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script text-3xl md:text-4xl text-gold-gradient font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypingText, { text: "Dear Vineet ❤️", delay: 1800, speed: 65 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 md:space-y-8 text-justify font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 2600, children: "It's funny how life works sometimes." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 3600, children: "We met in February last year, and honestly, I'm not the kind of person who talks to people easily or gets comfortable with them in a short time. But you were different. You were so extroverted, friendly, and effortlessly yourself that somehow talking to you felt easy." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 4800, children: 'I still remember the little things — you calling me "Kangaroo," the cute dog kitchen set you gave me, our random conversations, silly arguments, and all those small moments that slowly brought us closer. Looking back now, I realize it was never the big moments that mattered the most. It was always the little things.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 6e3, children: "Somewhere along the way, we started liking each other. Even when we knew that life might not give us the future we imagined, we still chose to stay in each other's lives. And honestly, I will always be grateful for that." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 7200, children: "I know there were many times when I hurt you, misunderstood you, or failed to see things from your perspective. For all those moments, I am truly sorry." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 8400, children: "This year wasn't easy for you. You faced some of the toughest moments a person can go through, yet you carried yourself with incredible strength. What amazes me the most is that even while fighting your own battles, you never let the world see how much pain you were carrying. Not many people would have been able to do that." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 9600, children: "Mahitiye, mala vataycha ki mi tula khup changla samajte. Pan kharach sangaycha tar khup vela mi tujhyavar doubt ghetla. Khup vela mi bolle ki mi tujhi priority nahiye. Pan aaj mage valun baghte tevha lakshat yet ki mi chukichi hote. Khup vela mi tula samjun ghyayla chukale. Tyasathi I'm sorry." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 10800, children: "Thank you for knowing every version of me — the good, the bad, the stubborn, the emotional, the overthinking one — and still choosing to stay." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 12e3, children: "You are truly special to me, Vineet." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 13200, children: "More than anything, I just want to see you happy. I hope life gives you all the success, peace, love, and happiness that you deserve. I hope every dream you are working for comes true. I hope the coming years bring you beautiful memories, endless opportunities, and reasons to smile." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 14400, children: "And no matter where life takes us, I promise that I will always be there as your friend whenever you need me." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 15600, children: "Thank you for being a part of my story." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInParagraph, { delay: 16800, children: "Happy Birthday, bala ❤️" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6 text-left", style: {
              fontFamily: "var(--font-script)"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInParagraph, { delay: 18e3, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#ebd8b7]/70 block text-lg font-sans tracking-widest uppercase", children: "With lots of love and best wishes," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl text-gold-gradient font-bold mt-2 block", children: "Maithili ❤️" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GuitarStringsDecoration, { position: "bottom" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row xl:flex-col items-center justify-center gap-8 lg:gap-10 xl:sticky xl:top-28 lg:col-span-2 xl:col-span-1 xl:mt-0 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image12.png", caption: "Sweet Memories 🧸", rotation: "rotate-[3deg] sm:rotate-[-3deg] xl:rotate-[4deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image13.png", caption: "Little Rockstar 👶", rotation: "rotate-[-4deg] sm:rotate-[2deg] xl:rotate-[-5deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image1.jpg", caption: "Strumming Dreams 🎶", rotation: "rotate-[2deg] sm:rotate-[-2deg] xl:rotate-[3deg]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 border-t border-[color:var(--gold)]/20 pt-16 animate-fade-up", style: {
        animationDelay: "0.4s"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-gold-gradient", children: "Memory Scrapbook" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground font-sans", children: "Every picture holds a melody, every memory tells a story." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image2.png", caption: "The Birthday Boy 🎂", rotation: "rotate-[-2deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image4.png", caption: "Unstoppable Vibe ⚡", rotation: "rotate-[3deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image5.png", caption: "Viral Moments 🌟", rotation: "rotate-[-3deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image7.png", caption: "Celebration Mode 🎉", rotation: "rotate-[2deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image8.png", caption: "Studio Vibes 🎧", rotation: "rotate-[-1deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image12.png", caption: "Pure Happiness 😅", rotation: "rotate-[3deg]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { src: "/images/image11.png", caption: "Best Part ❤️", rotation: "rotate-[-2deg]" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-[color:var(--gold)]/10 px-4 py-8 text-center text-xs text-muted-foreground z-10 bg-black/20", children: [
      "Made with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "inline h-3.5 w-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" }),
      " and lots of 🎶 for Vineet"
    ] })
  ] });
}
export {
  NostalgiaLetterPage as component
};
