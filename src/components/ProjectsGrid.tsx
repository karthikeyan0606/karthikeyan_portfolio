import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/content";
import ProjectCardGrid from "./ProjectCardGrid";
import ProjectsAllOverlay from "./ProjectsAllOverlay";

const GRID_LIMIT = 7; // + 1 "more" tile = 8 cells (4x2 on desktop)

export default function ProjectsGrid() {
  const [open, setOpen] = useState(false);
  const shown = projects.slice(0, GRID_LIMIT);
  const remaining = projects.length - shown.length;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((project) => (
          <ProjectCardGrid key={project.id} project={project} compact />
        ))}

        <button
          onClick={() => setOpen(true)}
          data-cursor-hover
          className="group flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-primary/30 bg-primary/[0.03] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/[0.06]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition group-hover:scale-110">
            <FiArrowUpRight size={18} />
          </span>
          <span className="font-display font-semibold text-white">
            {remaining > 0 ? `+${remaining} More` : "View All"}
          </span>
          <span className="font-mono text-[11px] text-muted">See every project</span>
        </button>
      </div>

      <ProjectsAllOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
