import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiArrowLeft } from "react-icons/fi";
import { projects } from "../data/content";
import ProjectCardGrid from "./ProjectCardGrid";

export default function ProjectsAllOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[150] overflow-y-auto bg-bg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid-noise absolute inset-0 -z-10 opacity-30" />

          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                data-cursor-hover
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:border-primary hover:text-primary"
              >
                <FiArrowLeft /> Back
              </button>
              <button
                onClick={onClose}
                data-cursor-hover
                aria-label="Close"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-primary hover:text-primary sm:hidden"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="mt-6">
              <p className="font-mono text-sm text-primary">All Projects</p>
              <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything <span className="text-gradient">I've shipped</span>.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCardGrid key={project.id} project={project} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
