import Reveal from "../components/Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">06 · Services</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            What I can <span className="text-gradient">build for you</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.04}
              y={12}
              className={i === services.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
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
