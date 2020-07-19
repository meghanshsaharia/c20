var box,box2;
function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 box= createSprite(200,100,30,30)
 box.shapeColor="blue"
 box2= createSprite(100,200,30,30)
 box2.shapeColor="red"
}

function draw() {
  background(255,230,200);
    box.x=World.mouseX
    box.y=World.mouseY
    if(box.x-box2.x<box.width/2+box2.width/2&&
      box2.x-box.x<box.width/2+box2.width/2&&
      box.y-box2.y<box.height/2+box2.height/2&&
      box2.y-box.y<box.height/2+box2.height/2){
    box.shapeColor="green"
    box2.shapeColor="green"

    }
    else{ 
     box.shapeColor="blue" 
     box2.shapeColor="red"
    }

  drawSprites();
}