function setup() {
  createCanvas(400, 400);
  
  background(255, 255, 153);
  
}

function draw() {
  stroke (0,64,128);
  strokeWeight(3);
  
//Cabeza  
  fill(0,102,204);//Rojo, Verde o Azul (R, G, B)pintar rellenar
  rect(150,100,100,80);

//cuello
  fill(26,140,255);
  rect(185,180,30,20);
  
//Cuerpo
  fill(0,102,204);
  rect(130,200,140,130);

//Ojos
  stroke (179,0,179);
  strokeWeight(3);
  fill(255, 153, 255);
  circle(175,125,25);
  circle(225,125,25);
  
//Nariz 
  stroke (32,32,96);
  strokeWeight(3);
  fill(51,51,153);
  triangle(200,138,192,150,208,150);

//Boca
  stroke (0, 204, 255);
  strokeWeight(4);
  line(180,162,218,162);
  
//Brazos y piernas
  stroke (0, 163, 204);
  strokeWeight(4);
  fill(0,204,255);

  rect(99,210,28,85);
  rect(273,210,28,85);

  rect(150,333,30,60);
  rect(220,333,30,60);
  
//Antenas 
  stroke (0, 51, 0);//color de borde
  strokeWeight(4);//Aumenta el tamaño del grosor de la linea
  line(170,98,140,50);
  line(230,98,260,52);

  
}
