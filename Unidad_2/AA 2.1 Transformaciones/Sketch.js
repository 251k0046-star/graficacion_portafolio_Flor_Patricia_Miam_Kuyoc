function setup() {
  createCanvas(900, 350);
  angleMode(DEGREES);
}

function draw() {
  background(240);

  //BEBÉ
  push();
    translate(100, 180);
    scale(0.6);
    rotate(-6)
    fill(245, 230, 210)
    dibujarConejo();

//Chupón
    stroke(0);
    strokeWeight(2);
    fill(255, 105, 180);
    ellipse(0, 6, 12, 12);
    fill(255, 215, 0);
    ellipse(0, 6, 6, 6);
   pop();

  //NIÑO
  push();
    translate(270, 180);
    scale(0.85);
    rotate(4);
  
    fill(218, 170, 120);
    dibujarConejo();

//Zanahoria
      fill(40, 180, 40);
      noStroke();
      ellipse(-25, 20, 8, 14);
      stroke(0);
      strokeWeight(2);
      fill(255, 120, 0);
      triangle(-30, 25, -15, 25, -10, 50);
    pop();


  // JOVEN
  push();
    translate(450, 180);
    scale(1.0);
    rotate(-3);
    fill(165, 105, 50);
    dibujarConejo();

// Gorra
    stroke(0);
    strokeWeight(3);
    fill(30, 144, 255);
    arc(0, -38, 65, 40, 180, 360);
    rect(-40, -40, 22, 7, 3);
  pop();

  //ADULTO
  push();
    translate(630, 180);
    scale(1.15);
    rotate(0);
    fill(100,55, 20);
    dibujarConejo();

// Corbata
    fill(0,0,180);
    quad(0,25,-10,40,0,60,10,40);

// Bigotes
    stroke(255);
    strokeWeight(3);
    line(-18, 0,-42, -4);
    line(-18,4,-42, 4);
    line(18, 0, 42,-4);
    line(18, 4, 42, 4);
  pop();

  // VIEJITO
  push();
    translate(800, 180);
    scale(1.2);
    rotate(10);
    fill(170)
    dibujarConejo();

    //Cejas
    stroke(255);
    strokeWeight(4);
    line(-22,-22, -8, -18);
    line(22, -22,8, -18);
  
    //Lentes
    noFill();
    stroke(50);
    strokeWeight(2);
    ellipse(-16, -14, 16, 16);
    ellipse(16, -14, 16, 16);
    line(-8, -14, 8, -14);

    // Bastón
    stroke(139, 69, 19);
    strokeWeight(5);
    arc(35, 35, 14, 14, 180, 360);//se manejan grados
    line(42, 35, 42, 70);
  pop();

}


function dibujarConejo() {
  stroke(0);
  strokeWeight(3);
  //Cuerpo
  ellipse(0, 40, 65, 60);
  //Patas
  ellipse(-22, 65, 30, 16);
  ellipse(22, 65, 30, 16);
  //Manos
  ellipse(-32, 38, 20, 28); // izquierdo
  ellipse(32, 38, 20, 28);  //derecho

  //Cabeza
  ellipse(0, -10, 75, 70);
  //Orejas
  ellipse(-20, -70, 22, 70);
  ellipse(20, -70, 22, 70);
  
  //Color rosa de las orejas
  fill(255, 192, 203);
  ellipse(-20, -70, 11, 49);
  ellipse(20, -70, 11, 49);

  
  //Ojos
  fill(0);
  ellipse(-16, -15, 9, 9);
  ellipse(16, -15, 9, 9);

  //Nariz
  fill(255, 245, 230);
  ellipse(0, 0, 36, 26);
  fill(80, 40, 30);
  triangle(-5, -5, 0, 2,6, -5);

  //Dientes
  fill(255);
  rect(-5, 5, 4, 7);
  rect(1, 5, 4, 7);
}