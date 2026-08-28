'use client';

import React, { useEffect, useRef } from 'react';

interface OrbitalArcsProps {
  className?: string;
  intensity?: number; // 0-1
}

interface Arc {
  rx: number;
  ry: number;
  rotation: number;
  cxOffset: number;
  cyOffset: number;
  speedMultiplier: number;
  baseOpacity: number;
}

interface DataPixel {
  arcIndex: number;
  angle: number;
  speed: number;
  color: string;
  size: number;
  history: { x: number; y: number }[];
}

interface SignalParticle {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  decay: number;
}

export default function OrbitalArcs({ className = '', intensity = 0.5 }: OrbitalArcsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intensityRef = useRef(intensity);

  useEffect(() => {
    intensityRef.current = intensity;
  }, [intensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Prefers Reduced Motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // STATE
    let reqId: number;
    let isVisible = true;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    // PALETTE
    const COLOR_GOLD = '200, 169, 91';  // #C8A95B
    const COLOR_SAGE = '105, 112, 74';  // #69704A
    
    // SETUP CONFIG
    const arcCount = isMobile ? 4 : 6;
    const pixelCount = isMobile ? 25 : 50;
    
    const arcs: Arc[] = [];
    for (let i = 0; i < arcCount; i++) {
      arcs.push({
        rx: 200 + Math.random() * 400,
        ry: 100 + Math.random() * 200,
        rotation: (Math.random() * Math.PI),
        cxOffset: (Math.random() - 0.5) * 100,
        cyOffset: (Math.random() - 0.5) * 100,
        speedMultiplier: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random()),
        baseOpacity: 0.1 + Math.random() * 0.15,
      });
    }

    const pixels: DataPixel[] = [];
    for (let i = 0; i < pixelCount; i++) {
      pixels.push({
        arcIndex: Math.floor(Math.random() * arcCount),
        angle: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.005,
        color: Math.random() > 0.3 ? COLOR_GOLD : COLOR_SAGE,
        size: 2 + Math.random() * 2,
        history: [],
      });
    }

    const signals: SignalParticle[] = [];

    // RESIZE HANDLING
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();

    // INTERACTION HANDLERS
    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      
      // Randomly spawn interaction signals
      if (Math.random() > 0.8 && !prefersReducedMotion) {
        signals.push({
          x: e.clientX,
          y: e.clientY,
          radius: 2,
          maxRadius: 15 + Math.random() * 20,
          opacity: 0.4,
          decay: 0.01 + Math.random() * 0.02
        });
      }
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && !document.hidden;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibility);

    // DRAW LOOP
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      const cx = w / 2;
      const cy = h / 2;
      const currentIntensity = intensityRef.current;

      ctx.clearRect(0, 0, w, h);

      if (!prefersReducedMotion) {
        // Damped mouse follow
        mouse.x += (targetMouse.x - mouse.x) * 0.04;
        mouse.y += (targetMouse.y - mouse.y) * 0.04;
      }

      // Draw Arcs
      arcs.forEach((arc) => {
        // Gravitational warp based on mouse distance
        const dx = mouse.x - cx;
        const dy = mouse.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const warpX = dx * 0.02;
        const warpY = dy * 0.02;

        ctx.beginPath();
        ctx.ellipse(
          cx + arc.cxOffset + warpX, 
          cy + arc.cyOffset + warpY, 
          arc.rx, 
          arc.ry, 
          arc.rotation, 
          0, 
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(${COLOR_GOLD}, ${arc.baseOpacity + currentIntensity * 0.1})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      });

      // Draw Pixels
      if (!prefersReducedMotion) {
        pixels.forEach((p) => {
          const arc = arcs[p.arcIndex];
          
          // Move pixel
          const speedMod = 1 + currentIntensity * 0.5;
          p.angle += p.speed * arc.speedMultiplier * speedMod;
          
          const warpX = (mouse.x - cx) * 0.02;
          const warpY = (mouse.y - cy) * 0.02;
          
          // Calculate parametric position
          const px = cx + arc.cxOffset + warpX + (arc.rx * Math.cos(p.angle) * Math.cos(arc.rotation)) - (arc.ry * Math.sin(p.angle) * Math.sin(arc.rotation));
          const py = cy + arc.cyOffset + warpY + (arc.rx * Math.cos(p.angle) * Math.sin(arc.rotation)) + (arc.ry * Math.sin(p.angle) * Math.cos(arc.rotation));

          // Save history for trails
          p.history.push({ x: px, y: py });
          if (p.history.length > 5) {
            p.history.shift();
          }

          // Draw trails
          if (p.history.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.history[0].x, p.history[0].y);
            for (let i = 1; i < p.history.length; i++) {
              ctx.lineTo(p.history[i].x, p.history[i].y);
            }
            ctx.strokeStyle = `rgba(${p.color}, 0.3)`;
            ctx.lineWidth = p.size * 0.5;
            ctx.stroke();
          }

          // Draw head
          ctx.fillStyle = `rgba(${p.color}, 0.9)`;
          ctx.beginPath();
          ctx.rect(px - p.size/2, py - p.size/2, p.size, p.size);
          ctx.fill();
        });
      }

      // Draw Signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i];
        sig.radius += 0.5;
        sig.opacity -= sig.decay;
        
        if (sig.opacity <= 0) {
          signals.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sig.x, sig.y, sig.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${COLOR_GOLD}, ${sig.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}
