"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function PortalCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Glowing Torus
    const geometry = new THREE.TorusGeometry(1.8, 0.04, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0xc8a95b,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Inner Ring
    const innerGeo = new THREE.TorusGeometry(1.2, 0.02, 16, 80);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x737c5a,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const innerTorus = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerTorus);

    // Floating particles
    const particleCount = 40;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 4;
      positions[i + 1] = (Math.random() - 0.5) * 4;
      positions[i + 2] = (Math.random() - 0.5) * 2;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc8a95b,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let reqId: number;
    function animate() {
      if (isVisible) {
        torus.rotation.x += 0.002;
        torus.rotation.y += 0.003;
        innerTorus.rotation.x -= 0.003;
        innerTorus.rotation.y -= 0.002;
        particles.rotation.y += 0.001;

        renderer.render(scene, camera);
      }
      reqId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0" />;
}
