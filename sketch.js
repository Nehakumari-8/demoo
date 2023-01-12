var trex,trex_running,groundImg;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImg=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);

  trex=createSprite(100,180,20,50);
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  ground=createSprite(200,180,600,10);
  ground.addImage(groundImg);
  ground.velocityX=-2;
}

function draw(){
  background("pink");
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.collide(ground);
  drawSprites();
}