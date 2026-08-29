import Reveal from "../components/Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">05 · Experience</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Where I've <span className="text-gradient">built</span>.
          </h2>
        </Reveal>

        <div className="relative mt-14 space-y-10 border-l border-border pl-8">
          {experience.map((item, i) => (
            <Reveal key={item.role + item.org} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-bg" />
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{item.period}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {item.role} · <span className="text-primary">{item.org}</span>
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.projects.map((p) => (
                    <span key={p} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-muted">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
