import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";

// 👉 Set your song details here
const SONG_FILE = "/Song.mpeg"; // Place your MP3 file (named song.mp3) in the 'public' folder
const SONG_TITLE = "Track for Vineet";
const SONG_ARTIST = "";

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      // Lazy initialize Web Audio API
      if (!audioCtxRef.current) {
        try {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          const ctx = new AudioContextClass();
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 64; // 32 frequency bins
          
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

  // Real-time animation loop for frequency visualizer
  useEffect(() => {
    const updateVisualizer = () => {
      if (!playing || !analyserRef.current || !dataArrayRef.current || !containerRef.current) return;
      
      const analyser = analyserRef.current;
      const dataArray = dataArrayRef.current;
      analyser.getByteFrequencyData(dataArray as any);
      
      const bars = containerRef.current.children;
      for (let i = 0; i < 32; i++) {
        const bar = bars[i] as HTMLSpanElement;
        if (bar) {
          const val = dataArray[i] || 0;
          // Scale value to create a nice dynamic movement
          const heightPercent = 15 + (val / 255) * 85;
          bar.style.height = `${heightPercent}%`;
          bar.style.opacity = `${0.35 + (val / 255) * 0.65}`;
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
      // Reset bar heights when paused
      if (containerRef.current) {
        const bars = containerRef.current.children;
        for (let i = 0; i < 32; i++) {
          const bar = bars[i] as HTMLSpanElement;
          if (bar) {
            bar.style.height = `${22 + (i % 6) * 12}%`;
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

  return (
    <div className="glass mx-auto w-full max-w-md rounded-3xl p-6">
      {/* Hidden HTML5 Audio element */}
      <audio ref={audioRef} src={SONG_FILE} loop crossOrigin="anonymous" />

      <div className="flex items-center gap-4">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${
            playing ? "animate-spin-slow" : ""
          }`}
          style={{ background: "var(--gradient-button)", boxShadow: "var(--shadow-glow)" }}
        >
          <Music className="h-7 w-7 text-primary-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-xl font-semibold text-gold-gradient">{SONG_TITLE}</p>
          {SONG_ARTIST && <p className="truncate text-sm text-muted-foreground">{SONG_ARTIST}</p>}
        </div>
        <button
          onClick={() => setPlaying((p) => !p)}
          className="flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          style={{ background: "var(--gradient-button)", boxShadow: "var(--shadow-glow)" }}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-0.5" />}
        </button>
      </div>

      <div ref={containerRef} className="mt-6 flex h-20 items-end justify-center gap-1.5">
        {Array.from({ length: 32 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 origin-bottom rounded-full"
            style={{
              height: `${22 + (i % 6) * 12}%`,
              background:
                i % 5 === 0
                  ? "linear-gradient(180deg, oklch(0.78 0.18 240), oklch(0.5 0.18 240))"
                  : "linear-gradient(180deg, oklch(0.95 0.12 90), oklch(0.6 0.14 65))",
              opacity: 0.35,
              boxShadow: "0 0 6px oklch(0.82 0.16 85 / 0.45)",
            }}
          />
        ))}
      </div>

      <p className="mt-6 text-center text-sm italic text-muted-foreground">
        "Life is better when played in your own rhythm."
      </p>
    </div>
  );
}

