import { motion } from "framer-motion";
import {
  FiUser,
  FiEdit3,
  FiLayers,
  FiDatabase,
  FiSearch,
  FiBox,
  FiCheckCircle,
  FiCpu,
} from "react-icons/fi";
import { SiGooglegemini } from "react-icons/si";
import type { IconType } from "react-icons";
import Reveal from "../components/Reveal";
import { aiPipeline } from "../data/content";

const STEP_ICONS: Record<string, IconType> = {
  User: FiUser,
  Prompt: FiEdit3,
  "Embedding Model": FiLayers,
  "Vector Database": FiDatabase,
  Retriever: FiSearch,
  "Context Builder": FiBox,
  Gemini: SiGooglegemini,
  Response: FiCheckCircle,
};

const CX = 50;
const CY = 50;
const NODE_RADIUS = 38;
const COUNT = aiPipeline.length;
const CYCLE = 8;

function polar(index: number, radius: number) {
  const angle = (-90 + (360 / COUNT) * index) * (Math.PI / 180);
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  };
}

export default function AIShowcase() {
  return (
    <section id="ai" className="relative px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">04 · AI Architecture</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A query, orbiting toward a <span className="text-gradient">grounded answer</span>.
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted">Every stage feeds the core in sequence.</p>
        </Reveal>

        {/* Desktop / tablet: orbit visualization */}
        <Reveal delay={0.1} className="hidden sm:block">
          <div className="relative mx-auto mt-16 aspect-square w-full max-w-[480px]">
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <circle cx={CX} cy={CY} r={NODE_RADIUS} fill="none" stroke="rgba(59,130,246,0.16)" strokeWidth={0.4} strokeDasharray="1 3" />
            </motion.svg>

            {/* spokes + traveling data particles */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {aiPipeline.map((_, i) => {
                const p = polar(i, NODE_RADIUS);
                return (
                  <line
                    key={i}
                    x1={p.x}
                    y1={p.y}
                    x2={CX}
                    y2={CY}
                    stroke="rgba(148,163,184,0.12)"
                    strokeWidth={0.4}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}

              {aiPipeline.map((_, i) => {
                const p = polar(i, NODE_RADIUS);
                const delay = (i / COUNT) * CYCLE;
                return (
                  <motion.circle
                    key={i}
                    r={1.4}
                    fill="#38bdf8"
                    style={{ filter: "drop-shadow(0 0 3px #38bdf8)" }}
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [p.x, CX],
                      cy: [p.y, CY],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: CYCLE / COUNT,
                      repeat: Infinity,
                      repeatDelay: CYCLE - CYCLE / COUNT,
                      delay,
                      ease: "easeIn",
                    }}
                  />
                );
              })}

              {[0, 1.7].map((delay, i) => (
                <motion.circle
                  key={i}
                  cx={CX}
                  cy={CY}
                  r={7}
                  fill="none"
                  stroke="rgba(59,130,246,0.5)"
                  strokeWidth={0.5}
                  initial={{ opacity: 0.6 }}
                  animate={{ r: [7, 20], opacity: [0.5, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, delay, ease: "easeOut" }}
                />
              ))}

              <circle cx={CX} cy={CY} r={7} fill="#03050d" stroke="rgba(59,130,246,0.5)" strokeWidth={0.5} />
            </svg>

            {/* AI core icon */}
            <motion.div
              className="glass absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-primary sm:h-20 sm:w-20"
              style={{ left: `${CX}%`, top: `${CY}%` }}
              animate={{ boxShadow: ["0 0 10px rgba(59,130,246,0.2)", "0 0 32px rgba(59,130,246,0.5)", "0 0 10px rgba(59,130,246,0.2)"] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}>
                <FiCpu size={26} />
              </motion.div>
            </motion.div>

            {/* orbiting nodes */}
            {aiPipeline.map((node, i) => {
              const p = polar(i, NODE_RADIUS);
              const Icon = STEP_ICONS[node.step] ?? FiBox;
              return (
                <div
                  key={node.step}
                  data-cursor-hover
                  className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <motion.div
                    className="glass flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-primary sm:h-12 sm:w-12"
                    whileHover={{ scale: 1.18, borderColor: "rgba(59,130,246,0.6)" }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(59,130,246,0)",
                        "0 0 16px rgba(59,130,246,0.4)",
                        "0 0 0px rgba(59,130,246,0)",
                      ],
                    }}
                    transition={{ duration: CYCLE, repeat: Infinity, delay: (i / COUNT) * CYCLE, ease: "easeInOut" }}
                  >
                    <Icon size={16} />
                  </motion.div>
                  <span className="mt-2 whitespace-nowrap font-mono text-[10px] font-semibold text-white sm:text-[11px]">
                    {node.step}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile: vertical flow, guaranteed to fit any screen width */}
        <Reveal delay={0.1} className="sm:hidden">
          <div className="relative mt-10 space-y-5 border-l border-border pl-6">
            {aiPipeline.map((node) => {
              const Icon = STEP_ICONS[node.step] ?? FiBox;
              return (
                <div key={node.step} className="relative flex items-start gap-3">
                  <span className="glass absolute -left-[calc(1.5rem+11px)] flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Icon size={12} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-white">{node.step}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{node.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="hidden sm:block">
          <div className="mx-auto mt-16 grid max-w-3xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {aiPipeline.map((node, i) => (
              <div key={node.step} className="flex items-start gap-3">
                <span className="mt-0.5 font-mono text-xs text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-muted">
                  <span className="font-semibold text-white">{node.step}</span> — {node.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
