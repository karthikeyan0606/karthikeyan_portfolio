import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // EmailJS not configured — fall back to a mailto draft.
      const data = new FormData(formRef.current);
      const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
      const body = encodeURIComponent(String(data.get("message") ?? ""));
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">07 · Contact</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's build something <span className="text-gradient">worth shipping</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5">
              <a href={`mailto:${profile.email}`} data-cursor-hover className="flex items-center gap-4 rounded-xl border border-border px-5 py-4 transition hover:border-primary/40">
                <FiMail className="text-primary" />
                <span className="text-sm text-muted">{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone}`} data-cursor-hover className="flex items-center gap-4 rounded-xl border border-border px-5 py-4 transition hover:border-primary/40">
                <FiPhone className="text-primary" />
                <span className="text-sm text-muted">{profile.phone}</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" data-cursor-hover className="flex items-center gap-4 rounded-xl border border-border px-5 py-4 transition hover:border-primary/40">
                <FiGithub className="text-primary" />
                <span className="text-sm text-muted">GitHub</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor-hover className="flex items-center gap-4 rounded-xl border border-border px-5 py-4 transition hover:border-primary/40">
                <FiLinkedin className="text-primary" />
                <span className="text-sm text-muted">LinkedIn</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <form ref={formRef} onSubmit={onSubmit} className="glass space-y-5 rounded-2xl p-8">
              <FloatingField name="name" label="Your name" type="text" required />
              <FloatingField name="email" label="Your email" type="email" required />
              <FloatingField name="message" label="Message" as="textarea" required />

              <button
                type="submit"
                disabled={status === "sending"}
                data-cursor-hover
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-mono text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
              >
                <FiSend />
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "sent" && (
                <p className="text-center font-mono text-xs text-accent">Message sent — I'll reply soon.</p>
              )}
              {status === "error" && (
                <p className="text-center font-mono text-xs text-red-400">
                  Something went wrong. Email me directly at {profile.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatingField({
  name,
  label,
  type = "text",
  as = "input",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}) {
  const shared =
    "peer w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 pt-6 pb-2 text-sm text-white outline-none transition focus:border-primary";

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea id={name} name={name} required={required} rows={4} placeholder=" " className={`${shared} resize-none`} />
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder=" " className={shared} />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-4 top-4 font-mono text-xs uppercase tracking-widest text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}
