import * as THREE from 'three';

function addLighting(scene) {
  // Ambient light for overall scene brightness
  const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
  scene.add(ambientLight);

  // Main directional light (sun-like)
  const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
  mainLight.position.set(5, 10, 7);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 2048;
  mainLight.shadow.mapSize.height = 2048;
  mainLight.shadow.camera.near = 0.5;
  mainLight.shadow.camera.far = 50;
  mainLight.shadow.camera.left = -10;
  mainLight.shadow.camera.right = 10;
  mainLight.shadow.camera.top = 10;
  mainLight.shadow.camera.bottom = -10;
  mainLight.shadow.bias = -0.0001;
  scene.add(mainLight);

  // Fill light for softer shadows
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
  fillLight.position.set(-5, 5, -5);
  fillLight.castShadow = true;
  scene.add(fillLight);

  // Rim light for edge highlighting
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.4);
  rimLight.position.set(0, 0, -5);
  scene.add(rimLight);

  // Add subtle point lights for atmosphere
  const pointLight1 = new THREE.PointLight(0x4a90e2, 0.5, 20);
  pointLight1.position.set(3, 2, 3);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xe24a4a, 0.5, 20);
  pointLight2.position.set(-3, 2, -3);
  scene.add(pointLight2);
}

export { addLighting };