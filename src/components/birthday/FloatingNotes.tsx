import { Music, Music2, Music3, Music4 } from "lucide-react";

const notes = [
  { Icon: Music, top: "10%", left: "8%", delay: "0s", size: 28 },
  { Icon: Music2, top: "30%", left: "85%", delay: "1.2s", size: 36 },
  { Icon: Music3, top: "60%", left: "12%", delay: "2.4s", size: 24 },
  { Icon: Music4, top: "75%", left: "78%", delay: "3.6s", size: 32 },
  { Icon: Music, top: "20%", left: "50%", delay: "4.8s", size: 20 },
  { Icon: Music2, top: "85%", left: "45%", delay: "1.8s", size: 28 },
  { Icon: Music3, top: "45%", left: "92%", delay: "3s", size: 22 },
  { Icon: Music4, top: "50%", left: "3%", delay: "0.6s", size: 30 },
];

export function FloatingNotes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {notes.map(({ Icon, top, left, delay, size }, i) => (
        <Icon
          key={i}
          className="absolute animate-float-note text-[color:var(--gold)]"
          style={{
            top,
            left,
            animationDelay: delay,
            width: size,
            height: size,
            opacity: 0.55,
            filter: "drop-shadow(0 0 8px oklch(0.82 0.16 85 / 0.6))",
          }}
        />
      ))}
    </div>
  );
}
