'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PortalCanvasProps {
  className?: string;
  scrollProgress?: number;
}

export default function PortalCanvas({ className = '', scrollProgress = 0 }: PortalCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(scrollProgress);

  // Keep scroll progress ref updated without triggering re-renders
  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for WebGL Support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    // Prefers Reduced Motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x11160d, 0.05);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // GROUPS
    const portalGroup = new THREE.Group();
    const fragmentsGroup = new THREE.Group();
    scene.add(portalGroup);
    scene.add(fragmentsGroup);

    // MATERIALS
    const portalMaterial = new THREE.MeshStandardMaterial({
      color: 0x252b18,
      metalness: 0.7,
      roughness: 0.3,
    });
    const emissiveMaterial = new THREE.MeshStandardMaterial({
      color: 0x3d4425,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xc8a95b,
      emissiveIntensity: 0.15,
    });
    const darkMaterial = new THREE.MeshBasicMaterial({ color: 0x11160d });

    // 1. Concentric Torus Rings
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const radius = 2.5 + i * 0.4;
      const tube = 0.03 + (i % 2) * 0.03;
      const geometry = new THREE.TorusGeometry(radius, tube, 32, 100);
      const mesh = new THREE.Mesh(geometry, i < 2 ? emissiveMaterial : portalMaterial);
      
      mesh.rotation.x = (Math.random() - 0.5) * 0.2;
      mesh.rotation.y = (Math.random() - 0.5) * 0.2;
      
      rings.push(mesh);
      portalGroup.add(mesh);
    }

    // 2. Central Dark Disc
    const discGeo = new THREE.CircleGeometry(2.4, 64);
    const disc = new THREE.Mesh(discGeo, darkMaterial);
    disc.position.z = -0.1;
    portalGroup.add(disc);

    // 3. Logo Plane
    const textureLoader = new THREE.TextureLoader();
    const logoPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 2.2),
      new THREE.MeshStandardMaterial({ 
        transparent: true, 
        opacity: 0.95,
        emissive: 0xc8a95b,
        emissiveIntensity: 0.2,
      })
    );
    textureLoader.load(
      '/images/logo.png',
      (texture) => {
        (logoPlane.material as THREE.MeshStandardMaterial).map = texture;
        (logoPlane.material as THREE.MeshStandardMaterial).needsUpdate = true;
      },
      undefined,
      (err) => console.warn('Logo texture missing, rendering blank plane.', err)
    );
    logoPlane.position.z = 0.2;
    portalGroup.add(logoPlane);

    // 4. Orbital Lines
    const orbitLines: THREE.Line[] = [];
    const lineMat = new THREE.LineBasicMaterial({ color: 0xc8a95b, transparent: true, opacity: 0.3 });
    for (let i = 0; i < 4; i++) {
      const radius = 3.5 + Math.random() * 1.5;
      const lineGeo = new THREE.BufferGeometry();
      const points = [];
      for (let j = 0; j <= 64; j++) {
        const theta = (j / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      lineGeo.setFromPoints(points);
      const line = new THREE.Line(lineGeo, lineMat);
      line.rotation.x = Math.random() * Math.PI;
      line.rotation.y = Math.random() * Math.PI;
      orbitLines.push(line);
      portalGroup.add(line);
    }

    // 5. Floating Fragments
    const fragments: { mesh: THREE.Mesh; orbit: number; speed: number; rotSpeed: number }[] = [];
    const fragGeo = new THREE.IcosahedronGeometry(1, 0);
    for (let i = 0; i < 12; i++) {
      const mesh = new THREE.Mesh(fragGeo, emissiveMaterial);
      const size = 0.05 + Math.random() * 0.15;
      mesh.scale.set(size, size, size);
      
      const distance = 4 + Math.random() * 3;
      const orbitAngle = Math.random() * Math.PI * 2;
      
      mesh.position.x = Math.cos(orbitAngle) * distance;
      mesh.position.y = Math.sin(orbitAngle) * distance;
      mesh.position.z = (Math.random() - 0.5) * 4;
      
      fragmentsGroup.add(mesh);
      fragments.push({
        mesh,
        orbit: orbitAngle,
        speed: (0.2 + Math.random() * 0.5) * (Math.random() > 0.5 ? 1 : -1),
        rotSpeed: 0.01 + Math.random() * 0.03
      });
    }

    // 6. Particle System
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePos[i] = (Math.random() - 0.5) * 15;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc8a95b,
      size: 0.04,
      transparent: true,
      opacity: 0.4
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xe8dcc3, 0.4); // Warm low ambient
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xc8a95b, 1.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 10);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // INTERACTION & ANIMATION STATE
    let mouse = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };
    let isVisible = true;
    let time = 0;
    let reqId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Target rotation limited to ±5 degrees (~0.087 rad)
      targetRotation.x = mouse.y * 0.087;
      targetRotation.y = mouse.x * 0.087;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    // RENDER LOOP
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!isVisible) return;

      time += 0.01;
      const sp = scrollRef.current;

      // Handle Scroll Progress (scale, translate, opacity)
      const scale = 1 - (sp * 0.4);
      portalGroup.scale.set(scale, scale, scale);
      portalGroup.position.y = sp * 2;
      fragmentsGroup.scale.set(scale, scale, scale);
      fragmentsGroup.position.y = sp * 2;
      
      // Damped lerp for mouse interaction (factor ~0.03)
      if (!prefersReducedMotion) {
        portalGroup.rotation.x += (targetRotation.x - portalGroup.rotation.x) * 0.03;
        portalGroup.rotation.y += (targetRotation.y - portalGroup.rotation.y) * 0.03;

        // Animate Rings
        rings.forEach((ring, i) => {
          ring.rotation.z = time * (0.05 + i * 0.02);
        });

        // Animate Orbital Lines
        orbitLines.forEach((line, i) => {
          line.rotation.z = -time * (0.03 + i * 0.01);
        });

        // Animate Fragments
        fragments.forEach((frag) => {
          frag.orbit += frag.speed * 0.01;
          const dist = Math.sqrt(frag.mesh.position.x ** 2 + frag.mesh.position.y ** 2);
          frag.mesh.position.x = Math.cos(frag.orbit) * dist;
          frag.mesh.position.y = Math.sin(frag.orbit) * dist;
          
          frag.mesh.rotation.x += frag.rotSpeed;
          frag.mesh.rotation.y += frag.rotSpeed;
        });

        // Slow particle rotation
        particles.rotation.y = time * 0.02;
        
        // Dynamic Lighting
        dirLight.intensity = 1.2 + Math.sin(time * 2) * 0.2 + mouse.y * 0.3;
      } else {
        // Reduced motion fallback - static orientation
        portalGroup.rotation.set(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(reqId);
      
      // Dispose Three.js resources
      scene.clear();
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-screen overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
