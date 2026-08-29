import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiSend } from "react-icons/fi";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/content";
import Magnetic from "../components/Magnetic";

const TECH = ["Java", "Vert.js", "React", "Flutter", "PostgreSQL", "Gemini", "Kong", "Azure"];

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="hero" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Available for new opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-mono text-sm text-primary"
          >
            $ whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-2 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex h-9 items-center font-mono text-xl text-muted sm:text-2xl"
          >
            <span className="mr-2 text-white/40">&gt;</span>
            {role}
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                data-cursor-hover
                className="glow-primary block rounded-full bg-primary px-6 py-3 font-mono text-sm font-semibold text-black transition hover:brightness-110"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                download
                data-cursor-hover
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-sm text-white transition hover:border-primary hover:text-primary"
              >
                <FiDownload /> Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                data-cursor-hover
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-sm text-white transition hover:border-accent hover:text-accent"
              >
                <FiSend /> Hire Me
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted/70"
          >
            {TECH.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden md:block"
        >
          <div className="glass relative overflow-hidden rounded-2xl p-5 font-mono text-xs leading-relaxed shadow-2xl">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            </div>
            <pre className="whitespace-pre-wrap text-muted">
<span className="text-secondary">class</span> <span className="text-primary">Engineer</span> {'{'}
{"\n  "}<span className="text-secondary">stack</span> = [<span className="text-accent">"Java"</span>, <span className="text-accent">"Vert.x"</span>, <span className="text-accent">"React"</span>];
{"\n  "}<span className="text-secondary">domains</span> = [<span className="text-accent">"AI"</span>, <span className="text-accent">"Cloud"</span>, <span className="text-accent">"Mobile"</span>];
{"\n\n  "}<span className="text-secondary">ship</span>() {'{'}
{"\n    "}<span className="text-muted/60">// design → build → deploy</span>
{"\n    "}<span className="text-secondary">return</span> <span className="text-accent">"production-ready"</span>;
{"\n  "}{'}'}
{"\n"}{'}'}
            </pre>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
          </div>

          <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
