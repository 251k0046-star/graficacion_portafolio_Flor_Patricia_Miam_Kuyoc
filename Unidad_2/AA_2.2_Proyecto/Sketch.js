let esDeDia = true;

// Variables para animación
let escalaFlor = 1.0;
let florCrece = true;

let abejaX = -200; 
let alasAbeja = 0;
let alasSuben = true;

let anguloAspas = 0;
let anguloEngrane = 0;

let pezX = 0;

function setup() {
  // Lienzo adaptable
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
}

function draw() {
  // Fondo Día o Noche
  if (esDeDia) {
    background(135, 206, 235);
  } else {
    background(20, 24, 82);
  }

  // Sol o Luna
  push();
    translate(mouseX, mouseY);
    noStroke();
    if (esDeDia) {
      fill(255, 204, 0);
    } else {
      fill(220);
    }
    ellipse(0, 0, 60, 60);
  pop();

  // Nubes
  dibujarNubes();

  // Montañas
  dibujarMontanasConNieve();

  // Pasto
  fill(124, 200, 80);
  noStroke();
  rect(0, windowHeight / 2 + 50, windowWidth, windowHeight / 2);

  // Camino
  dibujarCamino();

  // Árboles del fondo
  let arbolesFondo = [
    { x: 0.08, s: 0.38, c: [40, 120, 50] },
    { x: 0.14,s: 0.32, c: [30, 100, 40] },
    { x: 0.22, s: 0.35, c: [50, 130, 60] },
    {x: 0.28,s: 0.42, c: [40, 110, 45] },
    { x: 0.50, s:0.35, c: [60, 140, 55] },
    { x: 0.55, s: 0.40, c: [40, 120, 50] },
    { x: 0.62,s: 0.32, c: [30, 100, 40] },
    {x: 0.70, s: 0.38, c: [50, 130, 60] },
    { x: 0.78, s: 0.36, c: [45,115, 48] }
  ];

  for (let a of arbolesFondo) {
    push();
      translate(windowWidth * a.x, windowHeight / 2 + 45);
      scale(a.s);
      dibujarArbol(a.c[0], a.c[1], a.c[2]);
    pop();
  }

  // Árboles enfrente
  push();
    translate(windowWidth * 0.05, windowHeight / 2 + 20);
    scale(0.85);
    dibujarArbol(80, 160, 60);
  pop();

  push();
    translate(windowWidth * 0.16, windowHeight / 2 + 10);
    scale(1.1);
    dibujarArbol(180, 200, 50);
  pop();

  push();
    translate(windowWidth * 0.2, windowHeight / 2 + 80);
    scale(1.2);
    dibujarArbol(240, 130, 180);
  pop();

  push();
    translate(windowWidth * 0.88, windowHeight / 2 + 15);
    scale(0.95);
    dibujarArbol(90, 140, 50);
  pop();

  push();
    translate(windowWidth * 0.96, windowHeight / 2 + 30);
    scale(1.2);
    dibujarArbol(140, 180, 40);
  pop();

  // Molino
  push();
    translate(windowWidth * 0.38, windowHeight / 2 + 80);
    scale(1.0);
    dibujarMolinoBaseDetallada();
    
    // Aspas
    push();
      translate(0, -175); 
      
      anguloAspas = anguloAspas + (mouseX / 150);
      rotate(anguloAspas); 
      
      dibujarAspas();

      // Engranaje
      push();
        translate(0, 0); 
        anguloEngrane = frameCount * 2; 
        rotate(anguloEngrane); 
        scale(0.45); 
        dibujarEngraneDetallado();
      pop();

    pop();
  pop();

  // Conejo
  push();
    translate(windowWidth * 0.30, windowHeight / 2 + 210);
    scale(0.85);
    dibujarConejito();
  pop();

  // Lago y peces
  push();
    translate(windowWidth * 0.68, windowHeight / 2 + 120);
    dibujarLago();
  pop();

  // Árbol sobre el lago
  push();
    translate(windowWidth * 0.9, windowHeight / 2 + 120);
    scale(1.2);
    dibujarArbol(235, 130, 50);
  pop();

  // Flores
  if (florCrece) {
    escalaFlor = escalaFlor + 0.008;
    if (escalaFlor >= 1.25) { florCrece = false; }
  } else {
    escalaFlor = escalaFlor - 0.008;
    if (escalaFlor <= 0.75) { florCrece = true; }
  }

  let posicionesFlores = [
    { x: 0.04, y: 170, s: 0.7, c: [255, 105, 180] },
    { x: 0.09, y: 210, s: 0.9, c: [255, 182, 193] },
    { x: 0.14, y: 180, s: 0.8, c: [255, 215, 0] },
    { x: 0.22, y: 200, s: 0.95, c: [147, 112, 219] },
    { x: 0.48, y: 185, s: 0.85, c: [0, 206, 209] },
    { x: 0.52, y: 220, s: 1.0, c: [255, 105, 180] },
    { x: 0.58, y: 175, s: 0.75, c: [255, 215, 0] },
    { x: 0.82, y: 200, s: 0.9, c: [255, 50, 50] },
    { x: 0.87, y: 170, s: 0.7, c: [135, 206, 250] },
    { x: 0.92, y: 215, s: 0.95, c: [255, 182, 193] }
  ];

  for (let f of posicionesFlores) {
    push();
      translate(windowWidth * f.x, windowHeight / 2 + f.y);
      scale(f.s);
      dibujarFlor(f.c[0], f.c[1], f.c[2]);
    pop();
  }

  // Abejas
  abejaX = abejaX + 3; 
  if (abejaX > windowWidth + 300) {
    abejaX = -200; 
  }

  if (alasSuben) {
    alasAbeja = alasAbeja + 5;
    if (alasAbeja >= 20) { alasSuben = false; }
  } else {
    alasAbeja = alasAbeja - 5;
    if (alasAbeja <= -20) { alasSuben = true; }
  }

  push();
    translate(abejaX, windowHeight / 3);
    scale(0.7);
    dibujarAbeja();
  pop();

  push();
    translate(abejaX - 150, windowHeight / 4);
    scale(0.5); 
    dibujarAbeja();
  pop();

  push();
    translate(abejaX - 280, windowHeight / 2.5);
    scale(0.6);
    dibujarAbeja();
  pop();
}

// ---------------------------------------------
// FUNCIONES DE DIBUJO
// ---------------------------------------------

// Camino
function dibujarCamino() {
  push();
    fill(210, 180, 140);
    noStroke();
    
    let xInicio = windowWidth * 0.38;
    let yInicio = windowHeight / 2 + 80;
    
    quad(
      xInicio - 12, yInicio,
      xInicio + 12, yInicio,
      xInicio + 70, windowHeight + 50,
      xInicio - 70, windowHeight + 50
    );
  pop();

  // Piedras del camino
  let piedras = [
    { x: windowWidth * 0.38,     y: windowHeight / 2 + 90,  w: 12, h: 6 },
    { x: windowWidth * 0.378,    y: windowHeight / 2 + 108, w: 14, h: 7 },
    { x: windowWidth * 0.383,    y: windowHeight / 2 + 125, w: 16, h: 8 },
    { x: windowWidth * 0.375,    y: windowHeight / 2 + 145, w: 20, h: 10 },
    { x: windowWidth * 0.388,    y: windowHeight / 2 + 168, w: 24, h: 12 },
    { x: windowWidth * 0.37,     y: windowHeight / 2 + 195, w: 28, h: 14 },
    { x: windowWidth * 0.392,    y: windowHeight / 2 + 225, w: 32, h: 16 },
    { x: windowWidth * 0.365,    y: windowHeight / 2 + 258, w: 36, h: 18 }
  ];

  for (let p of piedras) {
    push();
      translate(p.x, p.y);
      stroke(0);
      strokeWeight(1.5);
      fill(140, 100, 75);
      ellipse(0, 0, p.w, p.h);
    pop();
  }
}

// Conejo
function dibujarConejito() {
  push();
    stroke(0);
    strokeWeight(1.5);
    
    // Orejas
    fill(240);
    ellipse(-6, -32, 8, 22);
    ellipse(6, -32, 8, 22);
    fill(255, 180, 200);
    noStroke();
    ellipse(-6, -32, 4, 15);
    ellipse(6, -32, 4, 15);

    // Cuerpo y cabeza
    stroke(0);
    fill(240);
    ellipse(0, 0, 26, 28);
    ellipse(0, -16, 20, 20);

    // Patitas
    ellipse(-10, 10, 10, 6);
    ellipse(10, 10, 10, 6);

    // Cara
    fill(0);
    ellipse(-4, -18, 3, 3);
    ellipse(4, -18, 3, 3);
    fill(255, 150, 180);
    triangle(-2, -14, 2, -14, 0, -12);

    // Cola
    fill(255);
    ellipse(12, 4, 8, 8);
  pop();
}

// Árbol
function dibujarArbol(r, g, b) {
  push();
    noStroke();
    
    fill(135, 85, 45);
    rectMode(CENTER);
    rect(0, 0, 10, 110, 4);

    stroke(120, 70, 35);
    strokeWeight(3.5);
    strokeCap(ROUND);
    
    line(0, -15, -28, -40);
    line(-20, -30, -30, -20);

    line(0, -5, 25, -25);
    line(15, -18, 22, -8);
    
    noStroke();

    fill(max(0, r - 30), max(0, g - 20), max(0, b - 20));
    ellipse(0, -75, 75, 60);

    fill(r, g, b);
    ellipse(-35, -45, 68, 55);

    fill(min(255, r + 40), min(255, g + 30), min(255, b + 20));
    ellipse(28, -30, 70, 52);

  pop();
}

// Flor
function dibujarFlor(r, g, b) {
  stroke(0);
  strokeWeight(2.5);
  
  fill(40, 180, 40);
  rect(-3, 0, 6, 60);

  push();
    translate(-3, 30);
    rotate(-35);
    ellipse(-10, 0, 18, 8);
  pop();

  push();
    translate(3, 42);
    rotate(35);
    ellipse(10, 0, 18, 8);
  pop();

  push();
    translate(0, 0);
    fill(r, g, b);
    
    let distancia = escalaFlor * 14; 
    
    ellipse(-distancia, -distancia, 28, 28);
    ellipse(distancia, -distancia, 28, 28);
    ellipse(-distancia, distancia, 28, 28);
    ellipse(distancia, distancia, 28, 28);
    
    fill(255, 215, 0);
    ellipse(0, 0, 26, 26);
  pop();
}

// Nubes
function dibujarNubes() {
  fill(255, 255, 255, 200);
  noStroke();

  let nube1X = (frameCount * 0.8) % (windowWidth + 200) - 100;
  let nube2X = (frameCount * 0.5 + 400) % (windowWidth + 200) - 100;

  push();
    translate(nube1X, windowHeight * 0.15);
    ellipse(0, 0, 60, 40);
    ellipse(25, -10, 50, 40);
    ellipse(45, 0, 50, 30);
  pop();

  push();
    translate(nube2X, windowHeight * 0.22);
    scale(0.8);
    ellipse(0, 0, 60, 40);
    ellipse(25, -10, 50, 40);
    ellipse(45, 0, 50, 30);
  pop();
}

// Montañas
function dibujarMontanasConNieve() {
  noStroke();

  fill(100, 110, 140);
  triangle(windowWidth * 0.0, windowHeight / 2 + 50, windowWidth * 0.25, windowHeight / 2 - 120, windowWidth * 0.5, windowHeight / 2 + 50);
  fill(250);
  triangle(windowWidth * 0.205, windowHeight / 2 - 89, windowWidth * 0.25, windowHeight / 2 - 120, windowWidth * 0.295, windowHeight / 2 - 89);

  fill(120, 130, 160);
  triangle(windowWidth * 0.3, windowHeight / 2 + 50, windowWidth * 0.6, windowHeight / 2 - 170, windowWidth * 0.85, windowHeight / 2 + 50);
  fill(250);
  triangle(windowWidth * 0.548, windowHeight / 2 - 132, windowWidth * 0.6, windowHeight / 2 - 170, windowWidth * 0.652, windowHeight / 2 - 132);

  fill(90, 100, 130);
  triangle(windowWidth * 0.65, windowHeight / 2 + 50, windowWidth * 0.85, windowHeight / 2 - 100, windowWidth * 1.05, windowHeight / 2 + 50);
  fill(250);
  triangle(windowWidth * 0.81, windowHeight / 2 - 70, windowWidth * 0.85, windowHeight / 2 - 100, windowWidth * 0.89, windowHeight / 2 - 70);
}

// Molino
function dibujarMolinoBaseDetallada() {
  stroke(0);
  strokeWeight(1.5);

  fill(210, 45, 45);
  quad(-60, 0, 60, 0, 50, -60, -50, -60);
  
  fill(240);
  rectMode(CENTER);
  rect(0, -62, 105, 6);

  fill(80, 30, 20);
  rect(0, -18, 22, 34, 10, 10, 0, 0);
  fill(40, 15, 10);
  ellipse(3, -18, 3, 3);

  fill(240, 195, 90);
  quad(-48, -65, 48, -65, 30, -150, -30, -150);
  
  fill(215, 165, 60);
  quad(15, -65, 48, -65, 30, -150, 10, -150);

  drawVentana(-18, -100);
  drawVentana(0, -110);
  drawVentana(18, -100);

  fill(240);
  rect(0, -152, 64, 5);

  fill(185, 110, 50);
  quad(-30, -155, 30, -155, 18, -185, -18, -185);
  
  fill(150, 85, 35);
  triangle(0, -155, 30, -155, 18, -185);
}

// Ventanas
function drawVentana(x, y) {
  push();
    translate(x, y);
    fill(90, 40, 20);
    stroke(0);
    strokeWeight(1);
    rectMode(CENTER);
    rect(0, 0, 10, 14, 4, 4, 0, 0);
    stroke(240);
    line(-5, 0, 5, 0);
    line(0, -7, 0, 7);
  pop();
}

// Lago
function dibujarLago() {
  fill(30, 144, 255);
  noStroke();
  ellipse(0, 0, 360, 110);
  
  fill(255, 255, 255, 120);
  ellipse(-60, 15, 100, 10);
  ellipse(70, -10, 80, 8);

  pezX = (frameCount * 1.5) % 280 - 140; 

  push();
    translate(pezX, 0);
    
    push();
      translate(20, -5);
      scale(0.6);
      dibujarPez();
    pop();

    push();
      translate(-10, -15);
      scale(0.45);
      dibujarPez();
    pop();

    push();
      translate(-15, 10);
      scale(0.5);
      dibujarPez();
    pop();

    push();
      translate(-40, -2);
      scale(0.4);
      dibujarPez();
    pop();
  pop();
}

// Pez
function dibujarPez() {
  fill(255, 127, 80);
  stroke(0);
  strokeWeight(1.5);
  
  ellipse(0, 0, 30, 15);
  triangle(-15, 0, -25, -8, -25, 8);
  fill(255);
  ellipse(8, -3, 4, 4);
  fill(0);
  ellipse(9, -3, 2, 2);
}

// Aspas
function dibujarAspas() {
  fill(240);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -60, 20, 120); 
  ellipse(0, 60, 20, 120);  
  ellipse(-60, 0, 120, 20); 
  ellipse(60, 0, 120, 20);  
  fill(80);
  ellipse(0, 0, 25, 25);
}

// Engranaje
function dibujarEngraneDetallado() {
  fill(100);
  stroke(0);
  strokeWeight(2);
  
  ellipse(0, 0, 50, 50);
  
  for (let i = 0; i < 360; i += 45) {
    push();
      rotate(i);
      rectMode(CENTER);
      rect(0, -26, 8, 10);
    pop();
  }
  
  fill(40);
  ellipse(0, 0, 18, 18);
}

// Abeja
function dibujarAbeja() {
  stroke(0);
  strokeWeight(3);
  push();
    fill(200, 200, 255, 200);
    translate(0, -10);
    rotate(alasAbeja);
    ellipse(-12, -15, 20, 35);
    ellipse(12, -15, 20, 35);
  pop();
  fill(255, 204, 0);
  ellipse(0, 0, 50, 35);
  fill(0);
  rect(-10, -17, 10, 34);
  rect(5, -15, 8, 30);
  fill(255);
  ellipse(18, -5, 12, 12);
  fill(0);
  ellipse(20, -5, 5, 5);
}

// Clic del mouse
function mousePressed() {
  esDeDia = !esDeDia; 
}

// Ventana responsiva
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}
