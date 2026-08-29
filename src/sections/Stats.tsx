import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "../hooks/useCounter";
import { stats } from "../data/content";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCounter(value, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-border px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
