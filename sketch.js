function setup(){
  createCanvas(400, 550);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

//Sets the default color of the linear pattern
colorR = 235;
colorB = 235;
colorG = 235;
ScolorR = 235;
ScolorB = 235;
ScolorG = 235;
RcolorR = 235;
RcolorB = 235;
RcolorG = 235;

function draw(){
  background(255);

  //Makes circles
  for (let i = 1;i < 5; i+= 1){
    fill(colorR,colorG,colorB);
    ellipse(0+i*80,60,20,20);
  }

  //Makes squares
  for (let i = 1;i < 4; i+= 1){
    fill(ScolorR,ScolorG,ScolorB);
    square(-120+i*160,60,20);
  }

  //Makes rectanglges
  for (let i = 1; i < 3; i += 1) {
    fill(RcolorR,RcolorG,RcolorB);
    rect(-40+i*160,60,5,20);
  }

  //seperating line
  stroke(0);
  strokeWeight(3);
  line(0,height/4,width,height/4);
  noStroke();

  //Makes radial pattern
  for (let i = 1;i < 5; i+= 1) {
    push();
    translate(width/2,height/1.65);
    rotate(i*270);
    fill(255,72,176);
    rect(0,height*0.15,width*0.015,height*0.2);
    pop();
  }

  for (let i = 1; i < 8; i += 2) {
    push();
    translate(width/2,height/1.65);
    rotate(i*135);
    fill(255,72,176);
    rect(0,100,width*0.015,height*0.15);
    pop();
  }

  for (let i = 1; i < 16; i+= 4){
    push();
    translate(width/2,height/1.65);
    rotate(i*67.5);
    fill(0);
    rect(0,100,width*0.015,height*0.1);
    pop();
  }

  for (let i = 1; i < 16; i+= 4){
    push();
    translate(width/2,height/1.65);
    rotate(i*-67.5);
    fill(0);
    rect(0,100,width*0.015,height*0.1);
    pop();
  }
}

//Changes the color of the linear pattern when the screen is pressed
function mousePressed(){
  colorR = random(255);
  colorB = random(255);
  colorG = random(255);
  ScolorR = random(255);
  ScolorB = random(255);
  ScolorG = random(255);
  RcolorR = random(255);
  RcolorB = random(255);
  RcolorG = random(255);
}
