var golfinho, golfinhoNadando;
var areia;
var areia2;
function preload(){
golfinhoNadando = loadAnimation("trex1.png","trex3.png","trex4.png");
areia2= loadImage("ground2.png");
}
function setup(){
createCanvas(600,200);
golfinho = createSprite(50, 160, 20, 50);
golfinho.addAnimation("nadando", golfinhoNadando);
golfinho.scale = 0.5;
areia = createSprite (200,180,600,20);
areia.addImage(areia2);
areia.x= areia.width/2;
bordas = createEdgeSprites();
}
function draw(){
background("lightgrey");
if(keyDown("space")){
golfinho.velocityY = -10;
}
golfinho.velocityY += 1;
golfinho.collide(areia);
areia.velocityX = -2;
if(areia.x<0){
areia.x=areia.width/2;
}
drawSprites();
}