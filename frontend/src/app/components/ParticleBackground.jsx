import { useEffect, useRef } from "react";

// Particle network adapted from the original HTML app. No pointer/hover interaction.
export default function ParticleBackground({ theme }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let particles = [],
      width = 0,
      height = 0,
      frameId = 0,
      lastTime = 0;
    const dark = theme === "dark";
    function draw(time = 0) {
      const step = lastTime ? Math.min((time - lastTime) / 16.67, 3) : 0;
      lastTime = time;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dark ? "rgba(52,224,211,.45)" : "rgba(10,155,145,.35)";
      for (const p of particles) {
        if (!motion.matches) {
          p.x += p.vx * step;
          p.y += p.vy * step;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = dark ? "rgba(52,224,211,.18)" : "rgba(10,155,145,.15)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i],
            b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 130) {
            ctx.globalAlpha = 1 - distance / 130;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      if (!motion.matches && !document.hidden)
        frameId = requestAnimationFrame(draw);
    }
    function restart() {
      cancelAnimationFrame(frameId);
      lastTime = 0;
      if (!document.hidden) draw();
    }
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(
        width < 768 ? 32 : 70,
        Math.max(28, Math.floor((width * height) / 28000)),
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
      }));
      restart();
    }
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", restart);
    motion.addEventListener("change", restart);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", restart);
      motion.removeEventListener("change", restart);
    };
  }, [theme]);
  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
      aria-hidden="true"
    />
  );
}
