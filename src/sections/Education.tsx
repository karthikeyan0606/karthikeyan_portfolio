import Reveal from "../components/Reveal";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">Education</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Where it <span className="text-gradient">started</span>.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.08}>
              <div className="flex flex-col justify-between gap-2 rounded-xl border border-border px-6 py-5 transition hover:border-primary/40 hover:bg-white/[0.02] sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                  {item.period && (
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">{item.period}</span>
                  )}
                  {item.detail && (
                    <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-xs text-accent">
                      {item.detail}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
