
let r = 140;
let angle = 0;
let a = 0;

const palette = ['#ff69dc','#7859ff','#28968d']
const bgColor = '#070513';

function setup() {
  createCanvas(1080, 1920);
  rectMode(CENTER);
  angleMode(DEGREES);
  strokeWeight(4);
}


function draw(){
  push();
  translate(width/2, height/2);
  background(bgColor);
  blendMode(SCREEN);

  noFill();
  stroke(palette[1]);
  rect(0,0,980,1820);

  drawLine(0,0,angle);
  drawRing(0,0,24,a,angle,1);
  drawRing(0,0,36,3+a,-angle,2);
  drawRing(0,0,24,5+a,angle,1);
  drawRing(0,0,48,7.5+a,-angle,2);
  a = map(sin(angle),-1,1,-2,4);

  pop();
  angle++;
  
}


function drawRing(ox,oy,n,s,ang,c){
  push();
  translate(ox,oy);
  rotate(ang);

  for (let i = 0; i < 360; i+= 360/n) {
    let x = r*cos(i);
    let y = r*sin(i);
    stroke(palette[c]);
    noFill();
    circle(x*s,y*s,r*3);
   }
  pop();
}

function drawLine(ox,oy,ang){
  push();
  translate(ox,oy);
  rotate(ang);
  for (let i = 0; i < 360; i+= 360/16) {
    let x = r*cos(i);
    let y = r*sin(i);
    stroke(palette[0]);
    noFill();
    circle(x*3*a/10,y*3*a/10,300);
    line(0,0,x*20,y*20);
    fill(palette[0]);
    noStroke();
    circle(x,y,16);
    circle(x*4,y*4,20);
   }
  pop();
}

 