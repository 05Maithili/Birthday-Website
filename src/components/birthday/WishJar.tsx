import { useState, useMemo } from "react";
import { Sparkles, Heart } from "lucide-react";

interface WishBubble {
  id: number;
  text: string;
  left: string;
  rotation: string;
}

const WISHES = [
  "Vineet, hope this year brings you hit solos and beautiful chords! 🎸  ",
  "To the guy who makes every day feel like a rock concert. Happy Birthday! 🤘 ",
  "May your dreams play louder than any applause! ✨  ",
  "Wishing you a birthday full of music, laughter, and your favorite tea. ☕  ",
  "Vineet, keep shining and rocking the world! You're a star! 🌟  ",
  "Happy Birthday! May your life always be in perfect harmony. 🎶  ",
  "Always inspired by your strength and that golden smile. Rock on! 🎸 ",
];

export function WishJar() {
  const [bubbles, setBubbles] = useState<WishBubble[]>([]);
  const [wishIndex, setWishIndex] = useState(0);

  // Sparkles inside the jar (static layout but twinkle-animated)
  const jarSparkles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      top: `${30 + Math.random() * 50}%`,
      left: `${25 + Math.random() * 50}%`,
      delay: `${i * 0.4}s`,
      size: `${3 + Math.random() * 4}px`,
    }));
  }, []);

  const releaseWish = () => {
    const id = Date.now() + Math.random();
    const newBubble: WishBubble = {
      id,
      text: WISHES[wishIndex],
      left: `${15 + Math.random() * 70}%`, // Random horizontal spread
      rotation: `${-6 + Math.random() * 12}deg`, // Random rotation angle
    };

    setBubbles((prev) => [...prev, newBubble]);
    setWishIndex((prev) => (prev + 1) % WISHES.length);

    // Clean up bubble node after animation completes
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id));
    }, 4500);
  };

  return (
    <section className="relative px-4 py-24 bg-black/10 border-b border-[color:var(--gold)]/10">
      <style>{`
        @keyframes floatUpWish {
          0% { transform: translateY(80px) scale(0.5); opacity: 0; }
          15% { opacity: 1; transform: translateY(0) scale(1) rotate(var(--rot)); }
          85% { opacity: 1; }
          100% { transform: translateY(-280px) scale(0.8) rotate(var(--rot)); opacity: 0; }
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
      `}</style>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]">
          Send a Wish  
        </p>
        <h2 className="font-display text-3xl font-bold md:text-4xl text-gold-gradient">
          The Magic Wish Jar
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
          Click on the glowing jar to release warm birthday wishes and messages.
        </p>

        {/* Jar and floating bubbles container */}
        <div className="relative mx-auto mt-20 h-[380px] w-full max-w-md flex flex-col items-center justify-end">
          
          {/* Active Floating Message Bubbles */}
          <div className="absolute inset-x-0 bottom-[180px] top-0 pointer-events-none">
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="absolute animate-wish-bubble glass rounded-2xl p-4 border border-[color:var(--gold)]/20 shadow-[0_4px_15px_rgba(0,0,0,0.6)] text-center text-amber-100/90 text-sm md:text-base font-script w-60 sm:w-64 backdrop-blur-xl"
                style={{
                  left: `calc(${bubble.left} - 120px)`, // Offset by half bubble width
                  "--rot": bubble.rotation,
                  transformOrigin: "center bottom",
                } as React.CSSProperties}
              >
                <Heart className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)] mx-auto mb-1.5 animate-pulse" />
                <p className="leading-relaxed">"{bubble.text}"</p>
              </div>
            ))}
          </div>

          {/* Golden glowing Wish Jar */}
          <button
            onClick={releaseWish}
            className="group relative cursor-pointer outline-none border-none bg-transparent transition-transform hover:scale-105 active:scale-98 flex flex-col items-center justify-end"
            aria-label="Wish Jar"
          >
            {/* Wooden Cork */}
            <div 
              className="w-16 h-5 rounded-t-md border border-amber-950/20 shadow-inner z-10"
              style={{
                background: "linear-gradient(90deg, oklch(0.42 0.08 60), oklch(0.28 0.06 60))",
              }}
            />
            
            {/* Jar Body */}
            <div 
              className="wish-jar-glow w-36 h-48 rounded-t-3xl rounded-b-[40px] border border-white/10 relative overflow-hidden transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, oklch(1 0 0 / 0.05), oklch(1 0 0 / 0.01))",
                backdropFilter: "blur(6px)",
              }}
            >
              {/* Twinkling sparks inside */}
              {jarSparkles.map((spark, i) => (
                <span
                  key={i}
                  className="absolute rounded-full animate-twinkle bg-[color:var(--gold)] shadow-[0_0_8px_currentColor]"
                  style={{
                    top: spark.top,
                    left: spark.left,
                    width: spark.size,
                    height: spark.size,
                    animationDelay: spark.delay,
                    color: "oklch(0.82 0.16 85)",
                  }}
                />
              ))}

              {/* Glowing base gradient */}
              <div 
                className="absolute inset-x-0 bottom-0 h-16 rounded-b-[40px] blur-sm opacity-60"
                style={{
                  background: "radial-gradient(circle at 50% 100%, oklch(0.82 0.16 85 / 0.6), transparent 70%)"
                }}
              />
            </div>

            {/* Sparkles hovering outside */}
            <Sparkles className="absolute -top-6 -right-6 h-6 w-6 animate-sparkle text-[color:var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Sparkles className="absolute -bottom-2 -left-6 h-5 w-5 animate-sparkle text-[color:var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: "0.5s" }} />
          </button>

          {/* Jar Base/Table surface shadow */}
          <div 
            className="w-48 h-3 rounded-full blur-md mt-1.5 opacity-55"
            style={{
              background: "radial-gradient(ellipse, oklch(0.82 0.16 85 / 0.35), transparent 70%)"
            }}
          />
        </div>
      </div>
    </section>
  );
}
