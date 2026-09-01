import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Reveal from "../components/Reveal";
import { experience } from "../data/content";

type ExperienceItem = (typeof experience)[number];

function TimelineItem({
  item,
  index,
  total,
  progress,
}: {
  item: ExperienceItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const t = total > 1 ? index / (total - 1) : 0;
  const start = Math.max(t - 0.06, 0);
  const scale = useTransform(progress, [start, t], [0.5, 1]);
  const dotColor = useTransform(progress, [start, t], ["#03050d", "#3b82f6"]);
  const borderColor = useTransform(
    progress,
    [start, t],
    ["rgba(59,130,246,0.35)", "rgba(59,130,246,1)"],
  );

  return (
    <Reveal delay={index * 0.08}>
      <div className="relative">
        <motion.span
          className="absolute -left-[36.5px] top-0 h-3 w-3 rounded-full border-2"
          style={{ backgroundColor: dotColor, borderColor, scale }}
        />
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {item.period}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-white">
          {item.role} · <span className="text-primary">{item.org}</span>
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.projects.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-muted"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="experience" className="relative px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">05 · Experience</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Where I've <span className="text-gradient">built</span>.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative mt-14">
          <div
            className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-border"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-0 top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-primary via-accent to-primary]"
            style={{ scaleY: scrollYProgress }}
            aria-hidden="true"
          />

          <div className="space-y-6 pl-8">
            {experience.map((item, i) => (
              <TimelineItem
                key={item.role + item.org}
                item={item}
                index={i}
                total={experience.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
