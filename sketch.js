var base, tower1, tower2, turret1, turret2;
var part1, part2, part3, part4;
var last, last2;

function setup() {
  createCanvas(800,800);
  base = createSprite(400, 700, 200, 100);
  turret1 = createSprite(275,650,50,200);
  turret2 = createSprite(500,650,50,200);
  tower1 = createSprite(220,650,50,200);
  part1 = createSprite(220,525,25,50);
  tower2 = createSprite(555,650,50,200);
  part2 = createSprite(555,525,25,50);
  
}

function draw() {
  background(0,0,0);  
  part3 = circle(220,505,50);
  part4 = circle(555,505,50);
  last = rect(340,550,100,100);
   


  drawSprites();
}