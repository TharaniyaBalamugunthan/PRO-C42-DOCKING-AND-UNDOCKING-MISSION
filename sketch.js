var canvas, backgroundImg

var iss,spaceCraft

var issImg,spaceCraft1Img,spaceCraft2Img,spaceCraft3Img,spaceCraft4

var hasDocked = false;

function preload(){
  issImg = loadImage("images/iss.png");
  backgroundImg = loadImage("images/spacebg.jpg");
  spaceCraft1Img = loadImage("images/spacecraft1.png");
  spaceCraft2Img = loadImage("images/spacecraft2.png");
  spaceCraft3Img = loadImage("images/spacecraft3.png");
  spaceCraft4Img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  iss = createSprite();
  iss.scale = 0.05;
  spaceCraft = createSprite();
  spaceCraft.scale = 0.05;

}

function draw() {
  background("spacebgImage");  
  drawSprites();

  if (! hasDocked){
    spaceCraft = x;
    
    keyDown(LEFT_ARROW){
      this.image = loadImage ("spaceCraft3Img");
      

    }
  }

}