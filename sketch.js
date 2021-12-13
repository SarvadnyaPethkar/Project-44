var space,spaceImg,spaceSound;
var rocket,rocketImg;

function preload(){
  spaceImg = loadImage("space.png");
  rocketImg = loadImage("rocket.png");
  spaceSound = loadSound("spacesound.mp3");
}

function setup() {
  createCanvas(1366,656);

  space = createSprite(640,330);
  space.velocityY = 3;
  space.addImage(spaceImg);
  space.scale = 3;

  rocket = createSprite(700,530);
  rocket.addImage(rocketImg);
  rocket.scale = 0.4;
 
}

function draw() {

  if(space.y>400){
    space.y = 300;
    spaceSound.play();
  }

  drawSprites();
}