import Reveal from "../components/Reveal";
import ProjectsCarousel from "../components/ProjectsCarousel";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">03 · Projects</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected <span className="text-gradient">work</span>.
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted">
            Use the arrows or dots — it auto-plays when you're not looking.
          </p>
        </Reveal>

        <div className="mt-16">
          <Reveal delay={0.1}>
            <ProjectsCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
