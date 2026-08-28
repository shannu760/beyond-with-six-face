import * as THREE from "three";

export function createSceneLights(scene: THREE.Scene) {
  // Ambient warm beige light
  const ambientLight = new THREE.AmbientLight(0xF3EBDD, 1.2);
  scene.add(ambientLight);

  // Primary directional light from top right (Olive Accent)
  const dirLight1 = new THREE.DirectionalLight(0x556B2F, 2.5);
  dirLight1.position.set(5, 8, 5);
  scene.add(dirLight1);

  // Soft fill light from bottom left (Deep Olive)
  const dirLight2 = new THREE.DirectionalLight(0x6B7A3A, 1.5);
  dirLight2.position.set(-5, -5, -3);
  scene.add(dirLight2);

  // Highlight point light behind mesh (Warm Gold-Beige Glow)
  const pointLight = new THREE.PointLight(0xE8DDC8, 3, 20);
  pointLight.position.set(0, 0, -2);
  scene.add(pointLight);
}
