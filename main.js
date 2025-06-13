import { initScene, renderer, camera, controls, scene } from './scripts/initScene.js';
import { createProduct } from './scripts/createProduct.js';
import { addLighting } from './scripts/addLighting.js';
import { setupInteraction } from './scripts/interaction.js';

let product;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function main() {
  initScene();
  product = createProduct();
  scene.add(product);
  addLighting(scene);
  setupInteraction(camera, product, scene);
  animate();
}

main();