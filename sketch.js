var golfinho, golfinhoNadando;
var areia;
var areia2;
var areia3; 
var peixescommedo;
var peixescommedo2;

function preload(){
golfinhoNadando = loadAnimation("trex1.png","trex3.png","trex4.png");
areia2= loadImage("ground2.png");
peixescommedo2= loadImage("cloud.png")
}

function setup(){
createCanvas(600,200);
areia = createSprite (200,180,600,20);
areia.addImage(areia2);
areia.x= areia.width/2;
areia3 = createSprite(0,190,400,10);
areia3.visible = false;
golfinho = createSprite(50, 160, 20, 50);
golfinho.addAnimation("nadando", golfinhoNadando);
golfinho.scale = 0.5;
bordas = createEdgeSprites();
var aleatoria = Math.round(random(1,100));
console.log(aleatoria);
}

function draw(){
background("black");
//console.log (golfinho.y);
if(keyDown("space")&& golfinho.y >= 150){
golfinho.velocityY = -9;
}
golfinho.velocityY += 1; 
golfinho.collide(areia3);
areia.velocityX = -2;
if(areia.x<0){
areia.x=areia.width/2;
}
peixes();
drawSprites();
}

function peixes(){
if(frameCount % 120 === 0 ){
peixescommedo = createSprite(600,100,40,10);
peixescommedo.velocityX = -3;
peixescommedo.addImage(peixescommedo2);
peixescommedo.y = Math.round (random(0,120));
peixescommedo.lifetime = 220;
peixescommedo.depth = golfinho.depth;
golfinho.depth += 1;
}
}
