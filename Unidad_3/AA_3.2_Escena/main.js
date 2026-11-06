// Paso 13
import * as THREE from 'three';

// Paso 14
const scene = new THREE.Scene();

// Paso 15 y 16
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//Paso 17
const canvasElement = document.querySelector('#mi-canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
renderer.setSize(window.innerWidth, window.innerHeight);

// Pasos 18, 19, 20 y 21
const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial({ color: 0xA802A8 }); 
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Paso 22
function animate() {
    requestAnimationFrame(animate);

    //Gira el cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

//Paso 23
animate();