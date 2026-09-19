function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(255, 255, 153);
  
  stroke (0,64,128);
  strokeWeight(3);
  
//Cabeza  
  rect(150,100,100,80);
  fill(100, 255, 0); //Paso 5.Test y Renderización Test. Correr Fill después de dibujar

//cuello
  stroke(255,0,0);//Paso 6. Borde rojo
  strokeWeight(4); //Paso 7. Grosor
  fill(26,140,255); 
  rect(185,180,30,20);

//Paso 10. Test figura dentro del cuerpo
  stroke(0);
  strokeWeight(2); 
  fill(26,140,255); 
  rect(155,220,90,90);
  
//Cuerpo
  noStroke();//Paso 8. Test sin grosor
  fill(0,102,204,120);
  rect(130,200,140,130);

//Ojos
  stroke (179,0,179);
  strokeWeight(3);
  fill(255, 153, 255);
  noFill();//Paso 8. Test sin color
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
