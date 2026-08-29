import Reveal from "../components/Reveal";
import { aboutStats, profile } from "../data/content";
import kLogo from "../assets/k_logo.png";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">01 · About</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineering that holds up in{" "}
            <span className="text-gradient">production</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1}>
            <div className="glass relative overflow-hidden rounded-2xl p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br p-2">
                <img
                  src={kLogo}
                  // alt={`${profile.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-semibold">
                {profile.name}
              </h3>
              <p className="mt-1 font-mono text-sm text-muted">
                {profile.location}
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                Two years building enterprise systems for real users — reliable
                APIs, secure data access, and AI features that are grounded, not
                gimmicky. I care about systems that are boring in the right way:
                predictable, observable, and easy to extend.
              </p>
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </Reveal>

          <div className="space-y-4">
            {aboutStats.map((item, i) => (
              <Reveal key={item.label} delay={0.1 + i * 0.08}>
                <div className="group flex items-start gap-4 rounded-xl border border-border px-6 py-5 transition hover:border-primary/40 hover:bg-white/[0.02]">
                  <span className="font-mono text-sm text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-white">
                      {item.label}
                    </h4>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
