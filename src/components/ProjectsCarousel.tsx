import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub, FiPause, FiPlay } from "react-icons/fi";
import { projects, type Project } from "../data/content";

const AUTOPLAY_MS = 5200;

function wrap(i: number, len: number) {
  return ((i % len) + len) % len;
}

// Depth/position for each card relative to the active index: -2 -1 0 1 2
function cardStyle(offset: number) {
  const abs = Math.abs(offset);
  return {
    x: offset * 260,
    scale: 1 - abs * 0.16,
    rotateY: offset * -28,
    opacity: abs > 2 ? 0 : 1 - abs * 0.32,
    zIndex: 10 - abs,
    filter: `blur(${abs * 2}px) brightness(${1 - abs * 0.18})`,
  };
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-card/80 p-7 shadow-2xl">
      <div>
        <div className="mb-4 flex items-start justify-between">
          <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
          <div className="flex gap-3 text-lg text-muted">
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

        <p className="font-mono text-sm text-primary/80">{project.summary}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 space-y-1.5">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const len = projects.length;

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => wrap(i + dir, len));
  }, [len]);

  useEffect(() => {
    if (!playing || hovering) return;
    timerRef.current = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(timerRef.current);
  }, [playing, hovering, go]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="relative mx-auto h-[440px] w-full max-w-md sm:max-w-lg"
        style={{ perspective: 1400 }}
      >
        <div className="absolute inset-0">
          {projects.map((project, i) => {
            let offset = i - index;
            if (offset > len / 2) offset -= len;
            if (offset < -len / 2) offset += len;
            if (Math.abs(offset) > 2) return null;

            const style = cardStyle(offset);
            return (
              <motion.div
                key={project.id}
                className="absolute inset-0 mx-auto w-full"
                style={{ transformStyle: "preserve-3d", zIndex: style.zIndex }}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  opacity: style.opacity,
                  filter: style.filter,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => offset !== 0 && setIndex(i)}
                data-cursor-hover
              >
                <div className={offset === 0 ? "h-full w-full" : "pointer-events-none h-full w-full"}>
                  <ProjectCard project={project} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          aria-label="Previous project"
          data-cursor-hover
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-primary hover:text-primary"
        >
          <FiChevronLeft />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              aria-label={`Go to ${p.name}`}
              data-cursor-hover
              onClick={() => setIndex(i)}
              className={`relative h-1.5 rounded-full transition-all ${i === index ? "bg-primary" : "bg-white/15"}`}
              style={{ width: i === index ? 28 : 8 }}
            >
              {i === index && playing && !hovering && (
                <motion.span
                  key={index}
                  className="absolute inset-0 rounded-full bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          aria-label={playing ? "Pause autoplay" : "Resume autoplay"}
          data-cursor-hover
          onClick={() => setPlaying((p) => !p)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-primary hover:text-primary"
        >
          {playing ? <FiPause /> : <FiPlay />}
        </button>

        <button
          aria-label="Next project"
          data-cursor-hover
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-primary hover:text-primary"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
