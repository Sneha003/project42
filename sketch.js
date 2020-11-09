var hr,mn,sc,hrAngle,mnAngle,scAngle


function preload(){
  backgroundImg=loadImage("picture.jpg");
  
  }
  


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  
}

function draw() {
  background(backgroundImg);
 // text("x:"+mouseX+"y:"+mouseY,50,50);

 translate(200,200);
  rotate(-90);  

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
   mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  fill(0);
  text("12",100,5);
  fill(0);
  text("3",10,100);
  fill(0);
  text("6",-110,0);
  fill(0);
 text("9",10,-107);
 
  push();
  rotate(scAngle)
  stroke("red");
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,65,0);
  pop();

  stroke(255,0,255);
  point(0,0);

  strokeWeight(10);
  noFill();


  stroke(255,0,0);
arc(0,0,300,300,0,scAngle)

stroke(0,255,0)
arc(0,0,280,280,0,mnAngle)

stroke(0,0,255)
arc(0,0,260,260,0,hrAngle)

  
 // ellipse(1, -2, 325, 325);
  drawSprites();
}

