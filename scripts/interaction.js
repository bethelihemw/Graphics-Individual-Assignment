import * as THREE from 'three';

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let selectedObject = null;
let labelPanel = document.getElementById('labelPanel');

function onMouseMove(event) {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onMouseClick(event, camera, scene) {
  // Update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // Calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    const object = intersects[0].object;
    
    // Reset previous selection
    if (selectedObject) {
      selectedObject.material.emissive.setHex(0x000000);
      selectedObject.scale.set(1, 1, 1);
    }

    // Select new object
    selectedObject = object;
    
    // Visual feedback
    selectedObject.material.emissive.setHex(0x333333);
    selectedObject.scale.set(1.05, 1.05, 1.05);
    
    // Show label
    if (object.name) {
      labelPanel.textContent = object.name;
      labelPanel.style.display = 'block';
      labelPanel.style.left = event.clientX + 10 + 'px';
      labelPanel.style.top = event.clientY + 10 + 'px';
      labelPanel.classList.add('visible');
    }
  } else {
    // Reset selection when clicking empty space
    if (selectedObject) {
      selectedObject.material.emissive.setHex(0x000000);
      selectedObject.scale.set(1, 1, 1);
      selectedObject = null;
    }
    labelPanel.classList.remove('visible');
  }
}

function setupInteraction(camera, scene) {
  // Add event listeners
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('click', (event) => onMouseClick(event, camera, scene));

  // Add hover effect
  window.addEventListener('mousemove', (event) => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  });
}

export { setupInteraction };