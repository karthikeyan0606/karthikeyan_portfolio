import Reveal from "../components/Reveal";
import { skillCategories } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">02 · Skills</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A full-stack <span className="text-gradient">toolkit</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40">
                <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted transition group-hover:border-primary/30 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/0 blur-2xl transition group-hover:bg-primary/10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
