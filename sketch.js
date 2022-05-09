var golfinho, golfinhoNadando;
var areia;
var areia2;
var areia3; 
var peixescommedo;
var peixescommedo2;
var tub1;
var tub2;
var tub3;
var tub4;
var tub5;
var tub6;
var migalhas;
var nemo;
var carnivoros;
var nadando = 1;
var afogamento = 0;
var estado = nadando;

function preload(){
golfinhoNadando = loadAnimation("trex1.png","trex3.png","trex4.png");
areia2= loadImage("ground2.png");
peixescommedo2= loadImage("cloud.png");
tub1 = loadImage("obstacle1.png");
tub2 = loadImage("obstacle2.png");
tub3 = loadImage("obstacle3.png");
tub4 = loadImage("obstacle4.png");
tub5 = loadImage("obstacle5.png");
tub6 = loadImage("obstacle6.png");
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
migalhas = 0;
nemo = new Group();
carnivoros = new Group();
}

function draw(){
background("AliceBlue");
//console.log (golfinho.y);
if(estado === nadando){
areia.velocityX = -2;


}
else if(estado === afogamento){
areia.velocityX = 0;


}

if(keyDown("space")&& golfinho.y >= 150){
golfinho.velocityY = -13;
}
golfinho.velocityY += 1; 
golfinho.collide(areia3);

if(areia.x<0){
areia.x=areia.width/2;
}
peixes();
tubaroes();
drawSprites();
migalhas += Math.round(frameCount/60);
fill("Black");
stroke("AliceBlue");
textSize(24);
text("score:"+ migalhas, 270,50);      
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
nemo.add(peixescommedo);
}
}

function tubaroes(){
if(frameCount % 60 === 0) {
var tubaroes1 = createSprite(600,165,10,40);
tubaroes1.velocityX = -6;
var pensamentosdechuveiro = Math.round (random(1,6));
switch(pensamentosdechuveiro){
case 1 :tubaroes1.addImage(tub1);
break;
case 2 :tubaroes1.addImage(tub2);
break;
case 3 :tubaroes1.addImage(tub3);
break;
case 4 :tubaroes1.addImage(tub4);
break;
case 5 :tubaroes1.addImage(tub5);
break;
case 6 :tubaroes1.addImage(tub6);
break;
default:break;
}
tubaroes1.scale = 0.7
tubaroes1.depth = golfinho.depth;
tubaroes1.life = 220;
carnivoros.add(tubaroes1);
}
}