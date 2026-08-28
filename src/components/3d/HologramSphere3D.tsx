"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HologramSphere3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Inner Glowing Icosahedron
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x9d00ff,
      emissive: 0x3d007a,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 2. Outer Wireframe Sphere
    const outerGeo = new THREE.SphereGeometry(2.3, 24, 24);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // 3. Orbiting Torus Rings
    const ring1Geo = new THREE.TorusGeometry(2.7, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.0, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xff007a,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 4. Floating Neural Node Dots on the sphere
    const dotsCount = 80;
    const dotPositions = new Float32Array(dotsCount * 3);
    for (let i = 0; i < dotsCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.3;
      dotPositions[i] = r * Math.sin(phi) * Math.cos(theta);
      dotPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      dotPositions[i + 2] = r * Math.cos(phi);
    }
    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    const dotsMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const dotsMesh = new THREE.Points(dotsGeo, dotsMat);
    group.add(dotsMesh);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 2.5, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff007a, 2.5, 50);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Mouse Drag Rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!isDragging) {
        group.rotation.y = elapsed * 0.25;
        group.rotation.x = Math.sin(elapsed * 0.2) * 0.2;
      }

      innerMesh.rotation.y = -elapsed * 0.4;
      ring1.rotation.z = elapsed * 0.5;
      ring2.rotation.x = -elapsed * 0.35;

      const scalePulse = 1 + Math.sin(elapsed * 2) * 0.05;
      innerMesh.scale.set(scalePulse, scalePulse, scalePulse);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      outerGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      dotsGeo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div ref={mountRef} className="w-full h-full flex items-center justify-center" />
      <div className="absolute bottom-2 text-[10px] text-cyan-400/80 bg-black/60 px-3 py-1 rounded-full border border-cyan-500/20 backdrop-blur-sm pointer-events-none font-mono">
        ✦ Interactive 3D AI Core • Drag to Rotate
      </div>
    </div>
  );
}
