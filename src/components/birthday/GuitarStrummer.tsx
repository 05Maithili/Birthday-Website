import { useState, useRef, useEffect } from "react";
import { Music, Sparkles } from "lucide-react";

// Karplus-Strong string frequencies for different chords
// Index 0 is E string (bottom), index 5 is e string (top)
const CHORDS = {
  G: [98.00, 123.47, 146.83, 196.00, 246.94, 392.00],   // G2, B2, D3, G3, B3, G4
  C: [82.41, 130.81, 164.81, 196.00, 261.63, 329.63],   // E2, C3, E3, G3, C4, E4
  D: [110.00, 146.83, 220.00, 293.66, 369.99, 440.00],  // A2, D3, A3, D4, F#4, A4
  Em: [82.41, 110.00, 146.83, 196.00, 246.94, 329.63],  // E2, A2, D3, G3, B3, E4
  Am: [110.00, 146.83, 220.00, 261.63, 329.63, 440.00],  // A2, D3, A3, C4, E4, A4
};

export function GuitarStrummer() {
  const [selectedChord, setSelectedChord] = useState<keyof typeof CHORDS>("G");
  const [vibrating, setVibrating] = useState<boolean[]>([false, false, false, false, false, false]);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Lazy AudioContext initializer
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Karplus-Strong plucked string synthesis algorithm
  const playStringAudio = (frequency: number) => {
    try {
      const ctx = getAudioContext();
      const sampleRate = ctx.sampleRate;
      const decay = 0.993; // decay factor representing string dampening
      const period = Math.round(sampleRate / frequency);
      const duration = 1.8; // audio buffer length in seconds
      const bufferSize = sampleRate * duration;
      
      const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);

      // 1. Excite string with random noise burst
      for (let i = 0; i < period; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      // 2. Karplus-Strong feedback loop with low-pass feedback filter
      for (let i = period; i < bufferSize; i++) {
        data[i] = (data[i - period] + data[i - period + 1]) * 0.5 * decay;
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      // 3. Apply volume envelope
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration - 0.2);

      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start();
    } catch (err) {
      console.warn("Audio Context playback failed/blocked:", err);
    }
  };

  // Strum handler
  const handleStrum = (index: number) => {
    // 1. Play synthesized tone
    const frequencies = CHORDS[selectedChord];
    const freq = frequencies[5 - index]; // Invert index so bottom string is lowest pitch
    playStringAudio(freq);

    // 2. Trigger visual vibration
    setVibrating((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });

    // 3. Clear vibration after delay
    setTimeout(() => {
      setVibrating((prev) => {
        const next = [...prev];
        next[index] = false;
        return next;
      });
    }, 180);
  };

  // Mobile Touch Move handler to allow sliding finger across strings
  const lastStrummedRef = useRef<number>(-1);
  const handleTouchMove = (e: React.TouchEvent) => {
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

  return (
    <section className="relative px-4 py-24 bg-black/10 border-y border-[color:var(--gold)]/10">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]">
          Interactive Rockstar Fretboard
        </p>
        <h2 className="font-display text-3xl font-bold md:text-4xl text-gold-gradient">
          Strum Vineet's Guitar
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
          Hover or drag your cursor across the strings below to strum chords in real-time. Use the chord selector to change the harmony!
        </p>

        {/* Chord Selector */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {(Object.keys(CHORDS) as Array<keyof typeof CHORDS>).map((chord) => (
            <button
              key={chord}
              onClick={() => {
                setSelectedChord(chord);
                getAudioContext(); // Resume context on user click
              }}
              className={`h-11 px-6 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedChord === chord
                  ? "bg-[color:var(--gold)] text-black border-[color:var(--gold)] shadow-[0_0_15px_rgba(253,186,116,0.4)]"
                  : "border-white/10 text-muted-foreground hover:text-white hover:border-white/30 bg-white/5"
              }`}
            >
              {chord === "Em" ? "E Minor (Em)" : chord === "Am" ? "A Minor (Am)" : `${chord} Major`}
            </button>
          ))}
        </div>

        {/* Fretboard Strumming Area */}
        <div className="relative mx-auto mt-16 max-w-3xl rounded-2xl border border-white/10 p-6 glass shadow-[var(--shadow-glow)]">
          
          {/* Fretboard background with wood grain & golden wires */}
          <div 
            className="relative h-64 w-full rounded-xl overflow-hidden flex flex-col justify-between py-6"
            style={{ 
              background: "linear-gradient(180deg, oklch(0.18 0.015 280), oklch(0.1 0.005 280))",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.8)"
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Golden frets (Vertical lines) */}
            <div className="absolute inset-0 flex justify-around pointer-events-none px-12">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-full w-[2px] bg-gradient-to-b from-amber-500/10 via-[oklch(0.82_0.16_85/0.4)] to-amber-500/10"
                  style={{
                    boxShadow: "0 0 4px rgba(253, 186, 116, 0.2)"
                  }}
                />
              ))}
            </div>

            {/* Fret pearloid markers (in between frets) */}
            <div className="absolute inset-0 flex justify-around items-center pointer-events-none px-12">
              {[...Array(5)].map((_, i) => (
                // Show markers on 3rd, 5th, 7th fret positions
                (i === 1 || i === 3) ? (
                  <div 
                    key={i} 
                    className="h-3 w-3 rounded-full bg-[color:var(--gold)]/35 shadow-[0_0_8px_rgba(253,186,116,0.3)]"
                    style={{ transform: "translateX(50%)" }}
                  />
                ) : null
              ))}
            </div>

            {/* 6 Guitar Strings */}
            {[...Array(6)].map((_, i) => {
              // String thickness increases from E to e
              const thickness = 1.2 + (5 - i) * 0.4;
              return (
                <div
                  key={i}
                  data-string-idx={i}
                  onMouseEnter={() => handleStrum(i)}
                  className="relative w-full h-8 flex items-center cursor-pointer group"
                >
                  {/* Invisible wide hover sensor area */}
                  <div 
                    data-string-idx={i}
                    className="absolute inset-y-0 left-0 right-0 z-10" 
                  />

                  {/* Visual String */}
                  <div
                    data-string-idx={i}
                    className={`h-[1px] w-full bg-gradient-to-r from-zinc-700 via-[oklch(0.82_0.16_85)] to-zinc-700 transition-shadow ${
                      vibrating[i] ? "animate-string shadow-[0_0_12px_oklch(0.82_0.16_85)]" : "shadow-[0_0_2px_rgba(253,186,116,0.2)]"
                    }`}
                    style={{
                      height: `${thickness}px`,
                      opacity: vibrating[i] ? 1 : 0.75,
                    }}
                  />
                  
                  {/* Floating string glow nodes on strum */}
                  {vibrating[i] && (
                    <span 
                      className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[color:var(--gold)] animate-ping"
                      style={{ boxShadow: "0 0 10px oklch(0.82 0.16 85)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Strum tip banner */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Music className="h-3.5 w-3.5 text-[color:var(--gold)]" />
            <span>Currently Strumming: <strong className="text-[color:var(--gold)] uppercase">{selectedChord}</strong> Chord</span>
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
