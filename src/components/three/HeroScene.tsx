"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { createSceneLights } from "./SceneLights";
import { createOrganicMesh } from "./OrganicGeometry";
import { createParticleField } from "./ParticleField";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xF3EBDD, 0.08);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Add Lights, Organic Mesh & Particle Field
    createSceneLights(scene);
    const { mesh, innerCore } = createOrganicMesh();
    scene.add(mesh);

    const particles = createParticleField(200);
    scene.add(particles);

    // 5. Mouse Interaction Handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.8;
      mouseRef.current.targetY = y * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Rotate Organic Mesh
      mesh.rotation.x = elapsedTime * 0.25 + mouseRef.current.y * 0.5;
      mesh.rotation.y = elapsedTime * 0.35 + mouseRef.current.x * 0.6;
      mesh.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // Rotate Inner Core in opposite direction
      innerCore.rotation.x = -elapsedTime * 0.4;
      innerCore.rotation.y = -elapsedTime * 0.5;

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = mouseRef.current.y * 0.1;

      // Camera micro parallax
      camera.position.x = mouseRef.current.x * 0.4;
      camera.position.y = mouseRef.current.y * 0.4;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[600px] flex items-center justify-center">
      {/* Soft ambient backdrop glow */}
      <div className="absolute inset-0 bg-radial from-[#556B2F]/15 via-transparent to-transparent blur-2xl pointer-events-none rounded-full" />
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
