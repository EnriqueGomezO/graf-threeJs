import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear materiales con colores distintos
const materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde
const materialBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul
const materialRed = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Rojo

// Crear cubos con sus respectivos materiales
const cubeGreen = new THREE.Mesh(geometry, materialGreen);
cubeGreen.position.x = -2;
scene.add(cubeGreen);

const cubeBlue = new THREE.Mesh(geometry, materialBlue);
cubeBlue.position.x = 0;
scene.add(cubeBlue);

const cubeRed = new THREE.Mesh(geometry, materialRed);
cubeRed.position.x = 2;
scene.add(cubeRed);

// Agregar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar cámara
camera.position.z = 5;

// Función de animación
function animate() {
  // Cubo verde: rotación rápida en ambos ejes
  cubeGreen.rotation.x += 0.018;
  cubeGreen.rotation.y += 0.013;

  // Cubo azul: rotación lenta solo en el eje Y
  cubeBlue.rotation.x += 0.045;
  cubeBlue.rotation.y -= 0.035;
  // Cubo rojo: rotación media en sentido contrario
  cubeRed.rotation.x -= 0.08;
  cubeRed.rotation.y += 0.07;

  renderer.render(scene, camera);
}

// Iniciar animación
renderer.setAnimationLoop(animate);
