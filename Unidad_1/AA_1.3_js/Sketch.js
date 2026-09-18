function setup() {
  createCanvas(230, 350);

  background(218, 181, 113);
}

function draw() {

  //Fondo verde
  fill(76, 186, 166)
  noStroke()
  quad (0,0, 0,65, 230, 175, 230,0) 
  
  //Detalle (línea) 
  stroke(58, 93, 98)
  strokeWeight(3)
  line (0,65, 230, 175)

  //Detalles del cielo

  strokeWeight(2) 
  line (115,25,150,35)
  
  stroke(52, 166, 158)
  line (0,30,230,130)
  line (76,0,230,70)
  line (130,0,230,35)
  
  stroke (174, 216, 209)
  line (0,0,230,90)
  

  //Fondo (inferior)
  
  fill(115, 155, 105)
  noStroke()
  triangle(0,262,0,350,172,350)

// Persona 1. Hombre

  // Torso
  stroke(1, 80, 144)
  strokeWeight(3)
  fill(1, 139, 200)
  quad(30,62,100,62,92,150,40,150)
  
  // Cuello
  fill(1, 139, 200)
  strokeWeight(2)
  quad(30,62,50,48,80,48,100,62)

  //Brazo izquierdo
  fill(1, 158, 211)
  strokeWeight(2)
  quad(30,64,34,120,20,130,12,110)

  //Sombrero
  fill(227, 202, 80)
  stroke(0)
  strokeWeight(2)
  ellipse(65,35,60,25)
  
  strokeWeight(1)
  ellipse(67,25,35,20)

  // Piernas
  stroke (0, 68, 73);
  strokeWeight(2);

  // Piernas superiores
  
  fill (48, 104, 111)
  //Izquierda
  quad (35,150,62,175,50,210,30,200)
  //Derecha
  quad (65,175,91,150,100,200,80,210)

  // Piernas inferiores  
  
  fill (172, 163, 68)
  //Izquierda
  quad (30,200,50,210,38,255,15,240)
  //Derecha
  quad (80,210,100,200,112,260,90,265)

  // Cadera
  stroke (0, 68, 73);
  strokeWeight(2);
  fill(161, 162, 86)
  ellipse(65,150,58,48)

  // Persona 2. Mujer

  stroke (0);
  strokeWeight(1);

  // hombro
  fill(149, 30, 38)
  rect(70,75,38,17)

  //brazo
  fill(202, 177, 140)
  ellipse(63,83,30,17)
  ellipse(50,59,18,25)
  ellipse(53,78,17,28)
  
  // Pecho
  fill(255)
  quad(88,92,109,93,115,125,97,125)

  //Falda
  fill(178, 21, 19)
  
  quad(115,125,162,130,182,220,112,260)
  
  quad(97,125,115,125,112,260,92,150)
   
  //Detalles de la falda  
  strokeWeight(2)
  line (120,110,130,248)
  line (133,116,168,229)

  strokeWeight(3)
  line (125,113,152,237)
  line (140,120,182,220)
   
  // Torso
  fill(194, 28, 23)
  strokeWeight(1)
  quad(90,75,143,65,168,150,115,125)

  // Cabeza
  fill(215, 199, 196)
  stroke(0)
  strokeWeight(1)
  circle(122,55,30)

  // Cabello
  fill(221, 124, 36)
  stroke(115,57,31)
  ellipse(122,48,35,23)
  circle(135,58,25)
 
}
