"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Scene3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Star / Particle Network
    const particlesCount = 1200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const cyanColor = new THREE.Color("#00f0ff");
    const purpleColor = new THREE.Color("#9d00ff");
    const pinkColor = new THREE.Color("#ff007a");

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Distribute in a 3D sphere / cube space
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 80;
      positions[i + 2] = (Math.random() - 0.5) * 80;

      // Random gradient colors
      const r = Math.random();
      const mixedColor =
        r < 0.4 ? cyanColor : r < 0.8 ? purpleColor : pinkColor;

      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 2. Floating 3D Cyber Polyhedra in the space
    const polyGroup = new THREE.Group();

    // Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(4, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-18, 8, -10);
    polyGroup.add(icoMesh);

    // Wireframe Torus
    const torusGeo = new THREE.TorusGeometry(3.5, 1, 16, 50);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x9d00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(18, -6, -8);
    polyGroup.add(torusMesh);

    // Wireframe Octahedron
    const octGeo = new THREE.OctahedronGeometry(3, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0xff007a,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(12, 12, -15);
    polyGroup.add(octMesh);

    scene.add(polyGroup);

    // Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 4;
      camera.position.y = -targetY * 4;
      camera.lookAt(scene.position);

      // Rotate particle network
      particlesMesh.rotation.y = elapsedTime * 0.04;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      // Rotate geometric objects
      icoMesh.rotation.x = elapsedTime * 0.2;
      icoMesh.rotation.y = elapsedTime * 0.3;

      torusMesh.rotation.x = elapsedTime * 0.25;
      torusMesh.rotation.y = elapsedTime * 0.15;

      octMesh.rotation.y = elapsedTime * 0.35;
      octMesh.rotation.z = elapsedTime * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  );
}
