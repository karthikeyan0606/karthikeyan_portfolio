import { useEffect, useRef, useState } from "react";

type Trail = {
  x: number;
  y: number;
  life: number;
  maxLife: number;
};

export default function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine);
    if (!fine) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let trail: Trail[] = [];
    let lastTrailAt = 0;
    let raf = 0;

    const resize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      if (!reducedMotion) {
        const now = performance.now();
        if (now - lastTrailAt > 22) {
          lastTrailAt = now;
          trail.push({ x: mouseX, y: mouseY, life: 0, maxLife: 26 });
          if (trail.length > 40) trail = trail.slice(-40);
        }
      }
    };

    const draw = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        trail = trail.filter((p) => p.life < p.maxLife);

        for (let i = 0; i < trail.length; i++) {
          const p = trail[i];
          p.life += 1;
          const t = p.life / p.maxLife;
          const alpha = (1 - t) * 0.35;
          const radius = 5 * (1 - t) + 1;

          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
          gradient.addColorStop(0, `rgba(0, 229, 255, ${alpha})`);
          gradient.addColorStop(0.6, `rgba(124, 58, 237, ${alpha * 0.5})`);
          gradient.addColorStop(1, "rgba(124, 58, 237, 0)");

          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[99]" />

      {/* precise inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-[width,height] duration-200 ease-out"
        style={{
          width: hovering ? 6 : 7,
          height: hovering ? 6 : 7,
          boxShadow: "0 0 8px rgba(255,255,255,0.8)",
        }}
      />

      {/* smooth trailing ring with soft glow */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color,background-color,box-shadow] duration-300 ease-out"
        style={{
          width: hovering ? 64 : 34,
          height: hovering ? 64 : 34,
          borderColor: hovering ? "rgba(0,229,255,0.7)" : "rgba(255,255,255,0.35)",
          backgroundColor: hovering ? "rgba(0,229,255,0.06)" : "transparent",
          boxShadow: hovering
            ? "0 0 28px rgba(0,229,255,0.35), inset 0 0 20px rgba(124,58,237,0.15)"
            : "0 0 12px rgba(255,255,255,0.08)",
        }}
      />
    </>
  );
}
