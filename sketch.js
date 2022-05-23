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
var afogado;
var marcontaminado;
var marcontaminadoImage;
var patrick;
var patrickImage;
var mortal;
var separadodospais;
var soprateirritar;
var frase = "Está muito frio, tomara que esquente";

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
afogado = loadAnimation("trex_collided.png");
patrickImage = loadImage("restart.png");
marcontaminadoImage = loadImage("gameOver.png");
mortal = loadSound("jump.mp3");
separadodospais = loadSound("die.mp3");
soprateirritar = loadSound("checkPoint.mp3");
}

function setup(){
createCanvas(windowWidth, windowHeight);
areia = createSprite (width/2,height-80,width,125);
areia.addImage(areia2);
areia.x= areia.width/2;
areia3 = createSprite(width/2,height-10,width,125);
areia3.visible = false;
golfinho = createSprite(50, height-70, 20, 50);
golfinho.addAnimation("nadando", golfinhoNadando);
golfinho.addAnimation("afogamento", afogado);
golfinho.scale = 0.5;
bordas = createEdgeSprites();
var aleatoria = Math.round(random(1,100));
console.log(aleatoria);
migalhas = 0;
nemo = new Group();
carnivoros = new Group();
golfinho.debug = false;
golfinho.setCollider("circle",0,0,50);
patrick = createSprite(width/2, height/2);
patrick.addImage ("patrickImage", patrickImage);
marcontaminado = createSprite(width/2, height/2-50);
marcontaminado.addImage("marcontaminadoImage", marcontaminadoImage);
patrick.scale= 0.49;
}

function draw(){
//console.log(frase);
background("AliceBlue");
//console.log (golfinho.y);
golfinho.collide(areia3);
drawSprites();
fill("Black");
stroke("AliceBlue");
textSize(24);
text("score:"+ migalhas, 270,50);   
if(estado === nadando){
marcontaminado.visible = false;
patrick.visible = false;
areia.velocityX = -(4+migalhas/100);
if(keyDown("space")&& golfinho.y >= height-130 || touches.length > 0 && golfinho.y >= height-130){
golfinho.velocityY = -13;
mortal.play();
touches = [];
}
golfinho.velocityY += 1; 
if(areia.x<0){
areia.x=areia.width/2;
}
peixes();
tubaroes();
migalhas += Math.round(frameRate()/60);
if(migalhas > 0 && migalhas % 100 === 0){
soprateirritar.play();
}
if(carnivoros.isTouching(golfinho)){
estado = afogamento;
separadodospais.play();
}
}
else if(estado === afogamento){
golfinho.changeAnimation ("afogamento");
nemo.setLifetimeEach(-45827674632);
carnivoros.setLifetimeEach(-28394621742873);
golfinho.velocityY = 0;
areia.velocityX = 0;
nemo.setVelocityXEach(0);
carnivoros.setVelocityXEach(0);
marcontaminado.visible = true;
patrick.visible = true;
if(mousePressedOver(patrick) || touches.length>0){
touches = [];
barbaNegra();
}
} 
}

function barbaNegra(){
estado = nadando;
nemo.destroyEach ();
carnivoros.destroyEach ();
golfinho.changeAnimation("nadando");
migalhas = 0;

}

function peixes(){
if(frameCount % 120 === 0 ){
peixescommedo = createSprite(width+20,height-300,40,10);
peixescommedo.velocityX = -3;
peixescommedo.addImage(peixescommedo2);
peixescommedo.y = Math.round (random(0,height/2-100));
peixescommedo.lifetime = 490;
peixescommedo.depth = golfinho.depth;
golfinho.depth += 1;
nemo.add(peixescommedo);
}
}

function tubaroes(){
if(frameCount % 60 === 0) {
var tubaroes1 = createSprite(width,height-95,10,40);
tubaroes1.velocityX = -(6+migalhas/100);
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
tubaroes1.scale = 0.5;
tubaroes1.depth = golfinho.depth;
tubaroes1.life = 220;
carnivoros.add(tubaroes1);
}
}