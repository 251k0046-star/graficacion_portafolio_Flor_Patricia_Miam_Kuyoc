import * as THREE from 'three';

// ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141826);

// CÁMARA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 6;

// WEBGL
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// ILUMINACIÓN
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// =========================================================
// DESAFÍO 1: SEMÁFORO
// =========================================================
const semaforo = new THREE.Group();

// 1. Cubo alargado con dimensiones ampliadas (Ancho: 1.6, Alto: 4.6, Profundidad: 1.2)
const cajaGeo = new THREE.BoxGeometry(1.6, 4.6, 1.2);
const cajaMat = new THREE.MeshStandardMaterial({
  color: 0x333333,
  wireframe: true // DESAFÍO 2: Malla de alambre
});
const caja = new THREE.Mesh(cajaGeo, cajaMat);
semaforo.add(caja);

// 2. Tres esferas (THREE.SphereGeometry)
const esferaGeo = new THREE.SphereGeometry(0.45, 32, 32);

// Esfera Roja (y = 1.2)
const esferaRoja = new THREE.Mesh(
  esferaGeo,
  new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true })
);
esferaRoja.position.y = 1.2;
semaforo.add(esferaRoja);

// Esfera Amarilla (y = 0)
const esferaAmarilla = new THREE.Mesh(
  esferaGeo,
  new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe: true })
);
esferaAmarilla.position.y = 0;
semaforo.add(esferaAmarilla);

// Esfera Verde (y = -1.2)
const esferaVerde = new THREE.Mesh(
  esferaGeo,
  new THREE.MeshStandardMaterial({ color: 0x00ff00, wireframe: true })
);
esferaVerde.position.y = -1.2;
semaforo.add(esferaVerde);

scene.add(semaforo);

// =========================================================
// DESAFÍO 2: CORAZÓN (LATIDO / PALPITACIÓN) Y ANIMACIÓN
// =========================================================
function animate() {
  requestAnimationFrame(animate);

  // Rotación 3D continua
  semaforo.rotation.x += 0.005;
  semaforo.rotation.y += 0.01;

  // Efecto de escala continua
  let escala = 1 + Math.sin(Date.now() * 0.003) * 0.3;
  semaforo.scale.set(escala, escala, escala);

  renderer.render(scene, camera);
}

animate();

// RESPONSIVIDAD
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});