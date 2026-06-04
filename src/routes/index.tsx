import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Music, Sparkles, Guitar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingNotes } from "@/components/birthday/FloatingNotes";
import { AnimatedCake } from "@/components/birthday/AnimatedCake";
import { MusicPlayer } from "@/components/birthday/MusicPlayer";
import { Confetti } from "@/components/birthday/Confetti";
import { Balloon } from "@/components/birthday/Balloon";
import { ElectricGuitar } from "@/components/birthday/ElectricGuitar";
import { StageBackdrop } from "@/components/birthday/StageBackdrop";
import { Fireworks } from "@/components/birthday/Fireworks";
import { GuitarStrummer } from "@/components/birthday/GuitarStrummer";
import { WishJar } from "@/components/birthday/WishJar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Vineet" },
      { name: "description", content: "A cinematic rockstar birthday tribute for Vineet — every great song tells a story." },
    ],
  }),
  component: Index,
});

const FRIEND_NAME = "Vineet";
// 👉 Replace with Vineet's photo URL (or drop a file in /public)
const FRIEND_PHOTO = "/images/image3.png";

const wishes = [
  "May every chord you play bring happiness into your life.",
  "May your dreams become louder than any applause.",
  "May your journey be filled with success, music, and unforgettable moments.",
  "Keep shining, smiling, and inspiring everyone around you.",
];

const memories = [
  { caption: "Folk Journey", url: "/images/image2.png" },
  { caption: "Rockstar", url: "/images/image6.png" },
  { caption: "Cultural Vibes", url: "/images/image9.png" },
];

// Guitar-pick shaped frame
const pickClip =
  "polygon(50% 0%, 95% 18%, 100% 55%, 50% 100%, 0% 55%, 5% 18%)";

function Index() {
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [fireworkTrigger, setFireworkTrigger] = useState(0);
  const [cakeMessage, setCakeMessage] = useState(false);

  const celebrate = () => {
    setConfettiTrigger((c) => c + 1);
    setFireworkTrigger((f) => f + 1);
  };

  const beginCelebration = () => {
    celebrate();
    setTimeout(() => {
      document.getElementById("photo")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const onCakeClick = () => {
    celebrate();
    setCakeMessage(true);
    setTimeout(() => setCakeMessage(false), 3500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Confetti trigger={confettiTrigger} />
      <Fireworks trigger={fireworkTrigger} />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center justify-center px-4 py-20">
        <StageBackdrop />
        <FloatingNotes />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto]">
          <div className="animate-fade-up text-center md:text-left">
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              <span className="block text-foreground">Happy Birthday</span>
              <span className="block text-gold-gradient">{FRIEND_NAME} 🎸</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:mx-0 md:text-lg">
              Every great song tells a story. Today we celebrate yours.
            </p>

            <Button
              onClick={beginCelebration}
              className="mt-10 h-14 rounded-full px-10 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:brightness-110"
              style={{ background: "var(--gradient-button)", boxShadow: "var(--shadow-glow)" }}
            >
              <Sparkles className="h-5 w-5" />
              Begin the Celebration
            </Button>
          </div>

          <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 -z-10 mx-auto h-full w-[300px] rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.82 0.16 85 / 0.35), transparent 70%)" }} />
            <ElectricGuitar className="w-[140px] md:w-[220px]" />
          </div>
        </div>
      </section>

      {/* ============ PHOTO ============ */}
      <section id="photo" className="relative px-4 py-28">
        <FloatingNotes />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]">The Star of Today</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            <span className="text-gold-gradient">Today's Rockstar</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The person who turns ordinary moments into unforgettable memories.
          </p>

          <div className="relative mx-auto mt-16 h-64 w-64 sm:h-72 sm:w-72 animate-float-slow md:h-96 md:w-96">
            {/* Outer guitar-pick glow */}
            <div className="absolute -inset-6 animate-pulse-glow rounded-full" />
            {/* Golden ring */}
            <div
              className="absolute inset-0 rounded-full p-[6px]"
              style={{ background: "conic-gradient(from 0deg, oklch(0.95 0.12 90), oklch(0.55 0.14 65), oklch(0.95 0.12 90), oklch(0.78 0.18 240), oklch(0.95 0.12 90))" }}
            >
              <div className="h-full w-full rounded-full bg-background p-3">
                {FRIEND_PHOTO ? (
                  <img src={FRIEND_PHOTO} alt={FRIEND_NAME} className="h-full w-full rounded-full object-cover" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-full text-center"
                    style={{ background: "radial-gradient(circle, oklch(0.18 0.02 280), oklch(0.08 0.005 280))" }}>
                    <Guitar className="h-20 w-20 text-[color:var(--gold)]" />
                    <p className="mt-4 px-6 text-xs font-medium text-muted-foreground">
                      Drop {FRIEND_NAME}'s photo here
                      <br />
                      <span className="text-[10px] opacity-70">(set FRIEND_PHOTO in index.tsx)</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="absolute h-2 w-2 rounded-full animate-twinkle"
                style={{
                  top: `${20 + Math.sin(i) * 40 + 30}%`,
                  left: `${20 + Math.cos(i) * 40 + 30}%`,
                  background: i % 2 ? "var(--gold)" : "var(--neon)",
                  boxShadow: `0 0 12px currentColor`,
                  color: i % 2 ? "var(--gold)" : "var(--neon)",
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
            <Sparkles className="absolute -right-4 -top-4 h-8 w-8 animate-sparkle text-[color:var(--gold)]" />
            <Heart className="absolute -bottom-4 -left-4 h-8 w-8 animate-heart fill-[color:var(--gold)] text-[color:var(--gold)]" />
          </div>
        </div>
      </section>

      {/* ============ MUSIC & GUITAR ============ */}
      <section className="relative px-4 py-28">
        <FloatingNotes />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 -z-10 mx-auto my-auto h-80 w-80 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, oklch(0.78 0.18 240 / 0.3), transparent 70%)" }} />
              <ElectricGuitar className="w-[120px] md:w-[180px] transition-transform duration-500 hover:scale-105 hover:-rotate-3" />
            </div>
            <MusicPlayer />
          </div>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--neon)]">Music & Soul</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              <span className="text-gold-gradient">Strings of the Soul</span>
            </h2>

            <div className="glass mt-8 rounded-3xl p-8 relative overflow-hidden border border-white/10 shadow-[var(--shadow-glow)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(253,186,116,0.15)]">
              {/* Decorative background music note */}
              <Music className="absolute -right-6 -bottom-6 h-28 w-28 text-white/5 transform rotate-12 pointer-events-none select-none" />

              <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Some people come into our lives and become a beautiful part of our story.
                </p>
                <p>
                  No matter how busy life gets or how far the paths may lead, certain bonds remain untouched by time and distance. They stay alive in memories, laughter, conversations, and countless little moments that mean more than words can express.
                </p>
                <p className="text-foreground font-semibold border-l-2 border-[color:var(--gold)] pl-4 py-1 bg-white/5 rounded-r-xl">
                  Vineet, you are one of those rare people.
                </p>
                <p>
                  Your presence brings comfort, your smile brings positivity, and you bring happiness. Every memory shared with you has become a melody that continues to play in my heart.
                </p>
                <p>
                  As this song plays, I hope it reminds you of how special you are and how grateful I am for every moment we've shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GuitarStrummer />

      {/* ============ MEMORY WALL ============ */}
      <section className="relative px-4 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]">Memory Wall</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              <span className="text-gold-gradient">Beautiful Memories</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Moments worth replaying on loop</p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-none">
            {memories.map((memory, i) => (
              <div key={i} className="group relative flex flex-col items-center">
                <div
                  className="relative aspect-[4/5] w-full transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  style={{
                    clipPath: pickClip,
                    background: "linear-gradient(135deg, oklch(0.22 0.02 280), oklch(0.08 0.005 280))",
                    filter: "drop-shadow(0 0 18px oklch(0.82 0.16 85 / 0.35))",
                  }}
                >
                  {/* Golden inner border */}
                  <div
                    className="absolute inset-[3px]"
                    style={{
                      clipPath: pickClip,
                      background: "linear-gradient(135deg, oklch(0.18 0.02 280), oklch(0.1 0.005 280))",
                    }}
                  />
                  {memory.url ? (
                    <img
                      src={memory.url}
                      alt={memory.caption}
                      className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] object-cover"
                      style={{ clipPath: pickClip }}
                    />
                  ) : (
                    <div className="absolute inset-[3px] flex flex-col items-center justify-center text-center" style={{ clipPath: pickClip }}>
                      <Guitar className="h-12 w-12 text-[color:var(--gold)] transition-transform duration-500 group-hover:rotate-12" />
                      <p className="mt-3 px-4 text-xs text-muted-foreground">Photo placeholder</p>
                    </div>
                  )}
                  <Sparkles className="absolute right-3 top-3 h-4 w-4 animate-sparkle text-[color:var(--gold)]" />
                </div>
                <p className="mt-4 font-display text-sm uppercase tracking-[0.2em] text-gold-gradient">
                  {memory.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WishJar />

      {/* ============ BIG CAKE ============ */}
      <section id="cake" className="relative overflow-hidden px-4 py-28">
        <StageBackdrop />
        <Balloon variant="gold" className="left-[8%] top-[15%]" />
        <Balloon variant="neon" delay="1.2s" className="left-[20%] top-[45%]" />
        <Balloon variant="silver" delay="0.6s" className="right-[10%] top-[20%]" />
        <Balloon variant="gold" delay="1.8s" className="right-[22%] top-[50%]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]">Make A Wish</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            <span className="text-gold-gradient">A Cake Worthy of a Rockstar</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Click the cake to light up the night 🎂</p>

          <div className="mt-16 flex justify-center">
            <AnimatedCake size="lg" onClick={onCakeClick} />
          </div>

          {cakeMessage && (
            <p className="mt-10 animate-fade-up font-script text-3xl text-gold-gradient md:text-5xl">
              Make a Wish, Vineet! 
            </p>
          )}

          <Button
            onClick={celebrate}
            variant="outline"
            className="mt-10 h-12 rounded-full border-2 border-[color:var(--gold)]/60 bg-white/5 px-8 text-[color:var(--gold)] backdrop-blur transition-all hover:scale-105 hover:bg-[color:var(--gold)] hover:text-primary-foreground"
          >
            <Sparkles className="h-4 w-4" />
            Throw Confetti
          </Button>
        </div>
      </section>

      {/* ============ SPECIAL MESSAGE ============ */}
      <section className="relative px-4 py-32">
        <FloatingNotes />
        <div className="relative z-10 mx-auto max-w-3xl text-center animate-fade-up">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Heart className="h-8 w-8 animate-heart fill-[color:var(--gold)] text-[color:var(--gold)]" />
            <Guitar className="h-8 w-8 animate-float-slow text-[color:var(--gold)]" />
            <Heart className="h-8 w-8 animate-heart fill-[color:var(--gold)] text-[color:var(--gold)]" style={{ animationDelay: "0.3s" }} />
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            <span className="text-gold-gradient">A Message For Vineet ❤️</span>
          </h2>

          <div className="glass mt-12 rounded-3xl p-8 text-left md:p-12">
            <p className="font-script text-2xl leading-relaxed text-foreground md:text-3xl">
              Dear Vineet,
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              On your special day, I just want to remind you how amazing you are. Your kindness, talent, smile,
              and positive energy make life brighter for everyone around you.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              May this year bring you happiness, success, endless opportunities, beautiful memories, and
              countless reasons to smile.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Keep following your dreams, keep playing your favorite guitar, and keep being the wonderful
              person you are.
            </p>
            <p className="mt-8 font-script text-3xl text-gold-gradient md:text-4xl">
              Happy Birthday, Bala. 🎂
            </p>
          </div>

          <Button
            onClick={celebrate}
            className="mt-10 h-14 rounded-full px-10 text-base font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-button)", boxShadow: "var(--shadow-glow)" }}
          >
            <Heart className="h-5 w-5 fill-current" />
            Send Love
          </Button>
        </div>
      </section>

      {/* ============ FINAL CELEBRATION ============ */}
      <section className="relative overflow-hidden px-4 py-32">
        <StageBackdrop />
        <FloatingNotes />
        <Balloon variant="gold" className="left-[6%] top-[20%]" />
        <Balloon variant="neon" delay="0.8s" className="left-[18%] bottom-[20%]" />
        <Balloon variant="silver" delay="1.4s" className="right-[12%] top-[18%]" />
        <Balloon variant="gold" delay="2s" className="right-[24%] bottom-[15%]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center animate-fade-up">
          <h2 className="font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
            <span className="shimmer-text">HAPPY BIRTHDAY</span>
            <br />
            <span className="text-gold-gradient">VINEET 🎸</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            May your life always be filled with beautiful music and endless happiness.
          </p>
          <Button
            onClick={celebrate}
            className="mt-12 h-16 rounded-full px-12 text-lg font-semibold text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-button)", boxShadow: "var(--shadow-glow)" }}
          >
            <Sparkles className="h-5 w-5" />
            One More Encore
          </Button>
        </div>
      </section>

      <footer className="relative border-t border-[color:var(--gold)]/20 px-4 py-10 text-center text-sm text-muted-foreground">
        Made with <Heart className="inline h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" /> and lots of 🎶 for Vineet
      </footer>
    </main>
  );
}
