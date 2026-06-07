import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Heart, Sparkles, Music, ArrowLeft, Camera, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StageBackdrop } from "@/components/birthday/StageBackdrop";
import { Confetti } from "@/components/birthday/Confetti";
import { Fireworks } from "@/components/birthday/Fireworks";
import { FloatingLilies, LilyIcon } from "@/components/birthday/FloatingLilies";

export const Route = createFileRoute("/together")({
  head: () => ({
    meta: [
      { title: "Special Moments | Happy Birthday Vineet" },
      { name: "description", content: "A special collection of family and shared moments with Vineet." },
    ],
  }),
  component: TogetherPage,
});

function Polaroid({ src, caption, rotation }: { src: string; caption: string; rotation: string }) {
  return (
    <div
      className={`relative p-4 pb-8 bg-[#fdfaf2] text-[#2c221e] shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#ebd8b7]/40 transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-20 w-72 sm:w-80 ${rotation}`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Tape Graphic */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-white/25 border-x border-dashed border-white/40 backdrop-blur-[2.5px] rotate-[-1.5deg] shadow-[0_2px_5px_rgba(0,0,0,0.05)] pointer-events-none" />

      {/* Photo frame */}
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-950 border border-[#bfa38a]/20">
        <div className="absolute inset-0 bg-amber-900/5 mix-blend-color-burn z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-neutral-950/10 mix-blend-multiply z-10 pointer-events-none" />
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover filter brightness-[1.03] contrast-[0.98] sepia-[0.08]"
        />
      </div>

      {/* Caption */}
      <p className="mt-5 text-center font-script text-2xl font-bold tracking-wide text-[#5c4a3c] drop-shadow-sm select-none">
        {caption}
      </p>
    </div>
  );
}

function TogetherPage() {
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [fireworkTrigger, setFireworkTrigger] = useState(0);

  const celebrate = () => {
    setConfettiTrigger((c) => c + 1);
    setFireworkTrigger((f) => f + 1);
  };

  // Memoized floating elements
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 7}s`,
      duration: `${12 + Math.random() * 5}s`,
      size: `${2.5 + Math.random() * 3}px`,
      drift: `${-25 + Math.random() * 50}px`,
    }));
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="film-grain" />

      {/* Celebrations */}
      <Confetti trigger={confettiTrigger} />
      <Fireworks trigger={fireworkTrigger} />

      {/* Theme Backdrops */}
      <StageBackdrop />
      <FloatingLilies />

      {/* Extra soft gold particle layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-particle bg-[color:var(--gold)]"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
              opacity: 0,
              boxShadow: "0 0 10px oklch(0.82 0.16 85 / 0.5)",
              "--drift": p.drift,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-28 pt-28">
        {/* Nav & Back Header */}
        <div className="flex items-center justify-between mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-[color:var(--gold)] transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <Button
            onClick={celebrate}
            size="sm"
            variant="outline"
            className="border-[color:var(--gold)]/30 text-[color:var(--gold)] bg-white/5 hover:bg-[color:var(--gold)] hover:text-black cursor-pointer rounded-full text-xs transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" /> Celebrate!
          </Button>
        </div>

        {/* Page Title with Lily Accents */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="flex justify-center items-center gap-3 mb-4 text-[color:var(--gold)]">
            <LilyIcon className="h-8 w-8 animate-float-slow" style={{ opacity: 0.85 }} />
            <Heart className="h-6 w-6 fill-current animate-heart text-[color:var(--gold)]" />
            <LilyIcon className="h-8 w-8 animate-float-slow" style={{ opacity: 0.85, animationDelay: "1s" }} />
          </div>
          <h1 className="font-display text-4xl font-bold md:text-6xl text-gold-gradient tracking-tight">
            Special Memories
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A beautiful chapter in our melody — celebrating family, passion, and the bonds that bring light into our lives.
          </p>
        </div>

        {/* ============ FAMILY CORNER ============ */}
        <section className="mb-24 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="glass rounded-3xl p-6 md:p-12 border border-white/10 relative overflow-hidden shadow-[var(--shadow-glow)] backdrop-blur-2xl">
            {/* Background watermarks */}
            <LilyIcon className="absolute -right-8 -bottom-8 h-40 w-40 opacity-5 rotate-12 pointer-events-none select-none" />
            <Music className="absolute -left-6 -top-6 h-32 w-32 opacity-5 -rotate-12 pointer-events-none select-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              {/* Photo Frame */}
              <div className="relative group mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-r from-[oklch(0.82_0.16_85)] to-[oklch(0.78_0.18_240)] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
                <div className="relative bg-zinc-900 border border-white/15 rounded-xl overflow-hidden shadow-2xl aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/images/image10.png"
                    alt="Vineet's Family"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* Message Box */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
                  <Heart className="h-3.5 w-3.5 fill-current" /> Family & Dreams
                </div>
                <h2 className="font-display text-3xl font-bold text-gold-gradient">
                  Where The Journey Begins
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-base sm:text-lg">
                  <p className="font-script text-2xl md:text-3xl text-amber-100/90 leading-relaxed border-l-2 border-[color:var(--gold)]/50 pl-4">
                    "Vineet, like a blooming flower, pursue your deep passion for music, and fulfill your mother's dream of seeing you as a successful engineer."
                  </p>
                  <p className="text-sm font-sans pt-2 opacity-80">
                    Behind every great musician and engineer is a foundation built on love, sacrifices, and shared dreams. Keep building your path and playing the melodies that make them proud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SHARED PHOTOS ============ */}
        <section className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden backdrop-blur-2xl">
            {/* Watermarks */}
            <LilyIcon className="absolute -left-10 -bottom-10 h-36 w-36 opacity-5 -rotate-45 pointer-events-none select-none" />
            <LilyIcon className="absolute -right-10 -top-10 h-36 w-36 opacity-5 rotate-45 pointer-events-none select-none" />

            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
                <Camera className="h-3.5 w-3.5" /> Our Scrapbook
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mt-3">
                Cutest Photos of Us
              </h2>
            </div>

            {/* Polaroid Grid */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-8">
              <Polaroid
                src="/images/image14.png"
                caption="Sweet Smiles ✨"
                rotation="rotate-[-3deg] md:rotate-[-2deg]"
              />
              <Polaroid
                src="/images/image15.png"
                caption="Special Bonds ❤️"
                rotation="rotate-[3deg] md:rotate-[2.5deg]"
              />
            </div>

            {/* Caption & Letter Note */}
            <div className="max-w-xl mx-auto mt-14 text-center">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                <p className="font-script text-2xl sm:text-3xl text-amber-100/95 leading-relaxed">
                  "Since we've clicked very few photos together, these are the only two we have. But they are the cutest, most special photos ever. Every frame is a memory I treasure."
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={celebrate}
                  className="h-12 rounded-full px-8 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-105"
                  style={{ background: "var(--gradient-button)" }}
                >
                  <Heart className="h-4 w-4 fill-current mr-2" /> Share the Love
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-[color:var(--gold)]/10 px-4 py-8 text-center text-xs text-muted-foreground z-10 bg-black/20">
        Made with <Heart className="inline h-3.5 w-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" /> and lots of 🎶 for Vineet
      </footer>
    </main>
  );
}
