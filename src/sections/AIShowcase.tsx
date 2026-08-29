import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import Reveal from "../components/Reveal";
import { aiPipeline } from "../data/content";

const CX = 50;
const CY = 50;
const NODE_RADIUS = 36; // percent
const COUNT = aiPipeline.length;
const CYCLE = 8; // seconds for one full data-flow loop

function polar(index: number, radius: number) {
  const angle = (-90 + (360 / COUNT) * index) * (Math.PI / 180);
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  };
}

export default function AIShowcase() {
  return (
    <section id="ai" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">04 · AI Architecture</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A query, orbiting toward a <span className="text-gradient">grounded answer</span>.
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted">Every stage feeds the core in sequence.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-square w-full max-w-[560px]">
            {/* decorative rotating orbit rings — atom aesthetic */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
            >
              <ellipse cx={CX} cy={CY} rx={40} ry={16} fill="none" stroke="rgba(0,229,255,0.12)" strokeWidth={0.4} />
            </motion.svg>
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <ellipse
                cx={CX}
                cy={CY}
                rx={40}
                ry={16}
                fill="none"
                stroke="rgba(124,58,237,0.14)"
                strokeWidth={0.4}
                transform={`rotate(60 ${CX} ${CY})`}
              />
            </motion.svg>
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
            >
              <ellipse
                cx={CX}
                cy={CY}
                rx={40}
                ry={16}
                fill="none"
                stroke="rgba(0,255,163,0.1)"
                strokeWidth={0.4}
                transform={`rotate(120 ${CX} ${CY})`}
              />
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
                    stroke="rgba(255,255,255,0.08)"
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
                    fill="#00ffa3"
                    style={{ filter: "drop-shadow(0 0 3px #00ffa3)" }}
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

              {/* core sonar pulses */}
              {[0, 1.3, 2.6].map((delay, i) => (
                <motion.circle
                  key={i}
                  cx={CX}
                  cy={CY}
                  r={7}
                  fill="none"
                  stroke="rgba(0,229,255,0.5)"
                  strokeWidth={0.5}
                  initial={{ opacity: 0.6 }}
                  animate={{ r: [7, 20], opacity: [0.5, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, delay, ease: "easeOut" }}
                />
              ))}

              <circle cx={CX} cy={CY} r={7} fill="#050505" stroke="rgba(0,229,255,0.5)" strokeWidth={0.5} />
            </svg>

            {/* AI core icon */}
            <motion.div
              className="glass absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-primary sm:h-20 sm:w-20"
              style={{ left: `${CX}%`, top: `${CY}%` }}
              animate={{ boxShadow: ["0 0 10px rgba(0,229,255,0.2)", "0 0 32px rgba(0,229,255,0.5)", "0 0 10px rgba(0,229,255,0.2)"] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <FiCpu size={26} />
              </motion.div>
            </motion.div>

            {/* orbiting nodes */}
            {aiPipeline.map((node, i) => {
              const p = polar(i, NODE_RADIUS);
              return (
                <div
                  key={node.step}
                  data-cursor-hover
                  className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <motion.div
                    className="glass flex h-11 w-11 items-center justify-center rounded-full border border-white/10 font-mono text-xs text-primary sm:h-12 sm:w-12"
                    whileHover={{ scale: 1.18, borderColor: "rgba(0,229,255,0.6)" }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(0,229,255,0)",
                        "0 0 16px rgba(0,229,255,0.4)",
                        "0 0 0px rgba(0,229,255,0)",
                      ],
                    }}
                    transition={{ duration: CYCLE, repeat: Infinity, delay: (i / COUNT) * CYCLE, ease: "easeInOut" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.div>
                  <span className="mt-2 whitespace-nowrap font-display text-[11px] font-semibold text-white sm:text-xs">
                    {node.step}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
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
