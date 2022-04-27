var golfinho, golfinhoNadando;

function preload(){
  golfinhoNadando = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);
  golfinho = createSprite(50, 160, 20, 50);
  golfinho.addAnimation("nadando", golfinhoNadando);
  golfinho.scale = 0.5;

  bordas = createEdgeSprites();
}

function draw(){
  background("lightgrey");

  if(keyDown("space")){
    golfinho.velocityY = -10;
  }
  golfinho.velocityY += 1;
  
  golfinho.collide(bordas[3]);

  drawSprites();
}
