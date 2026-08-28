import * as THREE from "three";

export function createParticleField(count: number = 250): THREE.Points {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    scales[i] = Math.random() * 0.05 + 0.02;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

  const material = new THREE.PointsMaterial({
    color: 0x6B7A3A,
    size: 0.08,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });

  return new THREE.Points(geometry, material);
}
