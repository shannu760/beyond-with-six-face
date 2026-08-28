import * as THREE from "three";

export function createOrganicMesh(): { mesh: THREE.Mesh; innerCore: THREE.Mesh } {
  // Parametric organic leaf lattice geometry
  const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32, 2, 3);

  // Material with Olive Green metallic roughness and subtle transmission sheen
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x556B2F,
    emissive: 0x28301D,
    emissiveIntensity: 0.15,
    roughness: 0.2,
    metalness: 0.4,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    transmission: 0.25, // glass-like depth
    thickness: 0.5,
    wireframe: false,
    side: THREE.DoubleSide
  });

  const mesh = new THREE.Mesh(geometry, material);

  // Inner glowing core geometry
  const coreGeometry = new THREE.IcosahedronGeometry(0.7, 3);
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0xE8DDC8,
    emissive: 0x6B7A3A,
    emissiveIntensity: 0.6,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });

  const innerCore = new THREE.Mesh(coreGeometry, coreMaterial);
  mesh.add(innerCore);

  return { mesh, innerCore };
}
