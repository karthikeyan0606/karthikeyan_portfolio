import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18 + 6, 100);
        if (next >= 100) {
          clearInterval(interval);
          window.setTimeout(() => setDone(true), 320);
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="font-display text-4xl font-semibold tracking-tight text-gradient"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              KK<span className="text-white">.</span>dev
            </motion.div>

            <div className="relative h-px w-56 overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="font-mono text-xs tracking-[0.3em] text-muted">
              {Math.floor(progress)}% — INITIALIZING SYSTEMS
            </div>

            <div className="absolute -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
