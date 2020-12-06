var fixedRect, movingRect;
var r1,r2,r3,r4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  r1 = createSprite(200, 100, 50, 80);
  r1.shapeColor = "yellow";
  r1.debug = true;
  r2 = createSprite(200, 800,80,30);
  r2.shapeColor = "yellow";
  r2.debug = true;

  r2.velocityY = -5;
  r1.velocityY = +5;

  r3 = createSprite(800, 100, 50, 80);
  r3.shapeColor = "purple";
  r3.debug = true;
  r4 = createSprite(800, 800,80,30);
  r4.shapeColor = "purple";
  r4.debug = true;

  r4.velocityY = -5;
  r3.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(r1,r2);
  drawSprites();
}

function bounceOff(rect1,rect2){
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2) {
  rect1.velocityX = rect1.velocityX * (-1);
  rect2.velocityX = rect2.velocityX * (-1);
}
if (rect1.y - rect2.y < rect2.height/2 + rect1.height/2
  && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
  rect1.velocityY = rect1.velocityY * (-1);
  rect2.velocityY = rect2.velocityY * (-1);
}
}