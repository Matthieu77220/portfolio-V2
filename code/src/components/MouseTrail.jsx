import { useEffect, useRef } from "react";

function MouseTrail() {
  const canvasRef = useRef(null);
  const trail = useRef([]);
  const lastMove = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMove.current < 8) return; // throttle high-frequency events
      lastMove.current = now;
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        t: now,
      });
      if (trail.current.length > 40) trail.current.shift();
    };
    window.addEventListener("mousemove", handleMouseMove);

    let frameId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const now = performance.now();
      const ttl = 600; // ms lifetime

      trail.current = trail.current.filter((p) => now - p.t < ttl);

      for (let i = 0; i < trail.current.length; i++) {
        const p = trail.current[i];
        const life = (now - p.t) / ttl; // 0 -> 1
        const alpha = Math.max(0, 1 - life);
        const radius = 14 * (1 - life) + 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 117, 43, ${alpha * 0.7})`;
        ctx.shadowColor = "rgba(243, 117, 43, 0.8)";
        ctx.shadowBlur = 12;
        ctx.fill();

        // inner glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(2, radius * 0.35), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 124, ${alpha * 0.45})`;
        ctx.shadowColor = "rgba(255, 240, 124, 0.6)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 20,
      }}
    />
  );
}

export default MouseTrail;