import {
  SiFlutter,
  SiDart,
  SiOpenjdk,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiReact,
  SiTypescript,
  SiCplusplus,
  SiKong,
} from "react-icons/si";
import { FiZap, FiSearch, FiGrid, FiTerminal } from "react-icons/fi";
import { TbVideo, TbBrandAdobePhotoshop, TbBrandAdobeIllustrator } from "react-icons/tb";
import type { IconType } from "react-icons";
import Reveal from "../components/Reveal";
import { skillCategories, techStack } from "../data/content";

const ICONS: Record<string, IconType> = {
  SiFlutter,
  SiDart,
  SiOpenjdk,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiReact,
  SiTypescript,
  SiCplusplus,
  SiKong,
  FiZap,
  FiSearch,
  FiGrid,
  FiTerminal,
  TbVideo,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">02 · Skills</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A full-stack <span className="text-gradient">toolkit</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative isolate mt-14 overflow-hidden rounded-3xl border border-border">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            >
              <source src={`${import.meta.env.BASE_URL}videos/tech-bg.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 -z-10 bg-bg/70" />

            <div className="grid grid-cols-3 gap-3 p-6 sm:grid-cols-4 sm:gap-4 sm:p-8 md:grid-cols-6">
              {techStack.map((t) => {
                const Icon = ICONS[t.icon];
                return (
                  <div
                    key={t.name}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.06]"
                  >
                    {Icon && (
                      <Icon className="h-8 w-8 text-white/40 grayscale transition duration-300 group-hover:text-primary group-hover:grayscale-0" />
                    )}
                    <span className="font-mono text-[11px] text-muted transition group-hover:text-white">
                      {t.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-card/40 p-4"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {cat.title}
              </p>
              <p className="mt-1 text-sm text-muted">
                {cat.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
