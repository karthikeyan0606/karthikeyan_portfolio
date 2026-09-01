import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../data/content";

export default function ProjectCardGrid({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div
      data-cursor-hover
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 ${
        compact ? "" : "p-6"
      }`}
    >
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{project.name}</h3>
          <div className="flex shrink-0 gap-3 text-base text-muted">
            {project.github && (
              <a href={project.github} data-cursor-hover aria-label={`${project.name} GitHub`} className="hover:text-primary">
                <FiGithub />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} data-cursor-hover aria-label={`${project.name} live demo`} className="hover:text-primary">
                <FiArrowUpRight />
              </a>
            )}
          </div>
        </div>

        <p className="font-mono text-xs text-primary/80">{project.summary}</p>

        {!compact && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
    </div>
  );
}
