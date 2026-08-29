import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Magnetic from "./Magnetic";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" data-cursor-hover className="font-display text-lg font-semibold">
          KK<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                data-cursor-hover
                className={`relative transition-colors hover:text-white ${
                  active === link.id ? "text-white" : ""
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-px w-full bg-primary"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <Magnetic className="hidden md:inline-block">
          <a
            href="#contact"
            data-cursor-hover
            className="block rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white transition hover:border-primary hover:text-primary"
          >
            Hire Me
          </a>
        </Magnetic>

        <button
          aria-label="Toggle menu"
          data-cursor-hover
          onClick={() => setOpen((o) => !o)}
          className="text-2xl text-white md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4 font-mono text-sm uppercase tracking-widest text-muted">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)} className="block py-2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
