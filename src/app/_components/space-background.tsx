"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  direction: number;
};

const PARTICLE_DENSITY = 100;
const PARTICLE_AREA = 10_000;
const MIN_RADIUS = 0.6;
const MAX_RADIUS = 1.4;
const TAU = Math.PI * 2;

function createParticles(width: number, height: number): Particle[] {
  const count = Math.floor(
    (width * height * (PARTICLE_DENSITY / 50)) / PARTICLE_AREA,
  );

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
    speed: Math.random() * 0.5 + 0.1,
    opacity: Math.random() * 0.8 + 0.2,
    direction: Math.random() * TAU,
  }));
}

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let particles: Particle[] = [];
    let animationFrame = 0;
    let previousTime = performance.now();
    let width = 0;
    let height = 0;

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        context.globalAlpha = particle.opacity;
        context.fillStyle = "#ffffff";
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, TAU);
        context.fill();
      }

      context.globalAlpha = 1;
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles = createParticles(width, height);
      draw();
    };

    const animate = (time: number) => {
      const frameScale = Math.min((time - previousTime) / (1000 / 60), 2);
      previousTime = time;

      for (const particle of particles) {
        particle.x +=
          Math.cos(particle.direction) * particle.speed * frameScale;
        particle.y +=
          Math.sin(particle.direction) * particle.speed * frameScale;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
      }

      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const updateAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
      draw();

      if (!reducedMotion.matches && !document.hidden) {
        previousTime = performance.now();
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    resize();
    updateAnimation();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", updateAnimation);
    reducedMotion.addEventListener("change", updateAnimation);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", updateAnimation);
      reducedMotion.removeEventListener("change", updateAnimation);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
