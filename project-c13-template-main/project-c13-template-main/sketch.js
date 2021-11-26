var garden,rabbit;
var gardenImg,rabbitImg;
var maca 
var folhaRed
var folhaL
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;   
  drawSprites();
  

  function criarMacas(){
    maca = createSprite(random(50,350),40,10,10);
    maca.addImage(appleImg);
    maca.scale=0.07;
    maca.velocityY = 3;
    maca.lifetime = 150;
    
    criarMacas();
    
    }
}

function createFolhasl(){
  folhaL = createSprite(random(50,350),40,10,10);
folhaL.addImage(orangeImg);
folhaL.scale=0.07;
folhaL.velocityY = 3;
folhaL.lifetime = 150;
createFolhasl();
}
function createFolhasred(){
  folhaRed = createSprite(random(50,350),40,10,10);
  folhaRed.addImage(redImg);
  folhaRed.scale=0.07;
  folhaRed.velocityY = 3;
  folhaRed.lifetime = 150;
  createFolhasred();


  
}