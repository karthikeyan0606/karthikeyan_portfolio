import Reveal from "../components/Reveal";
import ProjectsGrid from "../components/ProjectsGrid";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">03 · Projects</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected <span className="text-gradient">work</span>.
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted">A snapshot of what I've shipped — tap "More" for everything.</p>
        </Reveal>

        <div className="mt-16">
          <Reveal delay={0.1}>
            <ProjectsGrid />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
