import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <span className="font-display text-lg font-semibold">
          KK<span className="text-primary">.</span>dev
        </span>

        <div className="flex items-center gap-5 text-lg text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" data-cursor-hover aria-label="GitHub" className="hover:text-primary">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor-hover aria-label="LinkedIn" className="hover:text-primary">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} data-cursor-hover aria-label="Email" className="hover:text-primary">
            <FiMail />
          </a>
        </div>

        <a
          href="#hero"
          data-cursor-hover
          className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:border-primary hover:text-primary"
        >
          Back to top <FiArrowUp />
        </a>
      </div>
      <p className="mt-6 text-center font-mono text-xs text-muted/70">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Framer Motion.
      </p>
    </footer>
  );
}
