let x;
let y;

let blueX = 420;
let blueY = 100;

let pinkX = 100;
let pinkY = 0;

let greenX = 600;
let greenY = 500;

let greyX = 100;
let greyY = 450;

function setup() {
  createCanvas(600, 700);
  background(0);
  x = 300;
  y = 640; 
}

//The dark background represents as the Outer Space
function draw() {
  background(0);

  //Blue Planet Coordinates
  if (dist(mouseX,mouseY, blueX, blueY) < 75 && mouseIsPressed){
    blueX = mouseX;
    blueY = mouseY;
  }
  
  //Pinkish Planet Coordinates
  if (dist(mouseX, mouseY, pinkX, pinkY) < 75 && mouseIsPressed){
    pinkX = mouseX;
    pinkY = mouseY;
  }
  
  //Green Planet Coordinates
  if (dist(mouseX, mouseY, greenX, greenY) < 75 && mouseIsPressed){
    greenX = mouseX;
    greenY = mouseY;
  }
   
  //Greyish Planet Coordinates
  if (dist(mouseX, mouseY, greyX, greyY) < 75 && mouseIsPressed){
    greyX = mouseX;
    greyY = mouseY;
  }

  //--RocketShip--//
  //Thruster Flame
  noStroke();
  fill(255, 185, 0);
  ellipse(x, y + random(35, 55), 20, 60);
  fill(255, 255, 0);
  ellipse(x, y + random(35, 50), 15, 40);

  //sidefins
  fill(30, 144, 255);
  arc(x, y + 35, 50, 40, PI, 0, CHORD);
  
  //body
  fill(255, 0, 0);
  ellipse(x, y, 30, 80);
  
  //windows
  fill(255);
  ellipse(x, y - 6, 15, 15);
  
  //front fin
  fill(30, 144, 255);
  ellipse(x, y + 32, 5, 30);
  

  //Planets
  //This is Planet Greyish
  stroke(100, 150, 300);
  strokeWeight(15);
  fill(100, 100, 200);
  circle(greyX, greyY, 100);
  
  // This is Planet Blue
  stroke(50, 250, 250);
  strokeWeight(15);
  fill(0, 0, 255);
  circle(blueX, blueY, 150);

  // This is Planet Pinkish
  stroke(100, 50, 110);
  strokeWeight(15);
  fill(150, 100, 150);
  circle(pinkX, pinkY, 180);

  //This is Planet Green
  stroke(100,150, 100);
  strokeWeight(15);
  fill(100, 200, 100);
  circle(greenX, greenY, 150);
}
  
