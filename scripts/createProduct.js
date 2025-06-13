import * as THREE from 'three';

function createProduct() {
  const group = new THREE.Group();

  // Create materials
  const couchMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xb0e0e6,
    roughness: 0.7,
    metalness: 0.1
  });

  const cushionMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x87ceeb,
    roughness: 0.8,
    metalness: 0.0
  });

  const baseMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xe0f7ff,
    roughness: 0.5,
    metalness: 0.2
  });

  // Create base
  const baseGeometry = new THREE.BoxGeometry(4.5, 0.2, 2);
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = 0.1;
  base.castShadow = true;
  base.receiveShadow = true;
  base.name = "Base";
  group.add(base);

  // Create backrest
  const backrestGeometry = new THREE.BoxGeometry(4.5, 1.2, 0.4);
  const backrest = new THREE.Mesh(backrestGeometry, couchMaterial);
  backrest.position.set(0, 0.8, -0.8);
  backrest.castShadow = true;
  backrest.receiveShadow = true;
  backrest.name = "Backrest";
  group.add(backrest);

  // Create seat cushions
  const cushionGeometry = new THREE.BoxGeometry(4.3, 0.2, 1.8);
  const cushion = new THREE.Mesh(cushionGeometry, cushionMaterial);
  cushion.position.set(0, 0.3, 0);
  cushion.castShadow = true;
  cushion.receiveShadow = true;
  cushion.name = "Cushion";
  group.add(cushion);

  // Create armrests with curved design
  const armrestGeometry = new THREE.BoxGeometry(0.4, 0.7, 2);
  const armrestMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xb0e0e6,  // Powder blue
    roughness: 0.7,
    metalness: 0.1
  });
  
  const leftArmrest = new THREE.Mesh(armrestGeometry, armrestMaterial);
  leftArmrest.position.set(-2.15, 0.45, 0);
  leftArmrest.castShadow = true;
  leftArmrest.receiveShadow = true;
  leftArmrest.name = "Left Armrest";
  group.add(leftArmrest);

  const rightArmrest = new THREE.Mesh(armrestGeometry, armrestMaterial);
  rightArmrest.position.set(2.15, 0.45, 0);
  rightArmrest.castShadow = true;
  rightArmrest.receiveShadow = true;
  rightArmrest.name = "Right Armrest";
  group.add(rightArmrest);

  // Add decorative pillows with different patterns
  const pillowMaterial1 = new THREE.MeshStandardMaterial({ 
    color: 0xadd8e6,  // Light blue
    roughness: 0.9,
    metalness: 0.0
  });

  const pillowMaterial2 = new THREE.MeshStandardMaterial({ 
    color: 0x87cefa,  // Light sky blue
    roughness: 0.9,
    metalness: 0.0
  });

  // Create multiple pillows with different sizes and positions
  const pillowPositions = [
    { pos: [-1.5, 0.4, 0.4], rot: Math.PI / 4, size: 0.5, material: pillowMaterial1 },
    { pos: [0, 0.4, 0.4], rot: -Math.PI / 4, size: 0.45, material: pillowMaterial2 },
    { pos: [1.5, 0.4, 0.4], rot: Math.PI / 6, size: 0.5, material: pillowMaterial1 }
  ];

  pillowPositions.forEach((pillow, i) => {
    const pillowGeometry = new THREE.BoxGeometry(pillow.size, 0.15, pillow.size);
    const pillowMesh = new THREE.Mesh(pillowGeometry, pillow.material);
    pillowMesh.position.set(pillow.pos[0], pillow.pos[1], pillow.pos[2]);
    pillowMesh.rotation.y = pillow.rot;
    pillowMesh.castShadow = true;
    pillowMesh.receiveShadow = true;
    pillowMesh.name = `Pillow ${i + 1}`;
    group.add(pillowMesh);
  });

  // Add a ground plane to receive shadows
  const groundGeometry = new THREE.PlaneGeometry(10, 10);
  const groundMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xf0f8ff,  // Alice blue
    roughness: 0.8,
    metalness: 0.2
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  ground.receiveShadow = true;
  ground.name = "Ground";
  group.add(ground);

  return group;
}

export { createProduct };