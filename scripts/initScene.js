import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer, controls;

function initScene() {
  // Check WebGL support
  if (!renderer) {
    try {
      renderer = new THREE.WebGLRenderer({ 
        canvas: document.querySelector('#viewer'), 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch (error) {
      const warning = document.createElement('div');
      warning.innerHTML = 'WebGL is not available in your browser';
      document.getElementById('viewer').appendChild(warning);
      return;
    }
  }

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1a2e);
  scene.fog = new THREE.FogExp2(0x1a1a2e, 0.035);
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(7, 7, 7);
  camera.lookAt(0, 0, 0);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.enablePan = true;
  controls.minDistance = 4;
  controls.maxDistance = 15;
  controls.maxPolarAngle = Math.PI / 1.5;
  controls.enableZoom = true;
  controls.zoomSpeed = 1.2;
  controls.rotateSpeed = 0.8;

  // Add subtle ambient occlusion
  const aoMap = new THREE.TextureLoader().load('https://threejs.org/examples/textures/ao.jpg');
  scene.environment = aoMap;

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

export { initScene, renderer, camera, controls, scene };