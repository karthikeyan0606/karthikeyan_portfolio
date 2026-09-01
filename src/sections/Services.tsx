import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import { FiArrowUpRight } from "react-icons/fi";
import { services, freelance, profile } from "../data/content";

function bestColumnCount(count: number, max: number) {
  for (let cols = Math.min(max, count); cols >= 2; cols--) {
    if (count % cols === 0) return cols;
  }
  return Math.min(max, Math.ceil(Math.sqrt(count)));
}

export default function Services() {
  const [cols, setCols] = useState(2);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const max = w >= 1024 ? 4 : w >= 640 ? 2 : 1;
      setCols(bestColumnCount(services.length, max));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <section id="services" className="relative px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">06 · Services</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            What I can <span className="text-gradient">build for you</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="glow-primary mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/[0.05] px-6 py-5 transition hover:border-primary/60 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{freelance.badge}</p>
                <p className="mt-1 font-display font-semibold text-white">{freelance.headline}</p>
                <p className="mt-1 text-sm text-muted">{freelance.detail}</p>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white transition group-hover:border-primary">
              Let's talk <FiArrowUpRight />
            </span>
          </a>
        </Reveal>

        <div
          className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04} y={12}>
              <div className="h-full bg-bg p-6 transition hover:bg-white/[0.02]">
                <span className="font-mono text-xs text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
