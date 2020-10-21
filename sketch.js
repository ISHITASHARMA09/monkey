
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas (600,400);
  
  // monkey sprite
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1;
  
  //ground sprite
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  b= new Group ();
  o= new Group ();
  
}


function draw() {
  background(180);

  // monkey jump
  if (keyDown("space")){
    monkey.velocityY=-12
  }
  // add gravity
  monkey.velocityY = monkey.velocityY + 0.8
    
  // moving ground
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    monkey.collide(ground);
      
     food()
     obstacles()
  
  
  
  
  drawSprites();
}

 // function food
function food(){
 if(frameCount % 80 === 0){
   banana=createSprite (600,100,50,50);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.velocityX=-2
   banana.lifetime=155;
   banana.scale=0.1
   
    b.add(banana);
    }  
  
}


// function obstacles
function obstacles(){
  if(frameCount % 100 === 0){
    obstacle= createSprite (400,400,500,10);
    obstacle.y=Math.round(random(250,350));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3
    obstacle.setLifetime=155;
    obstacle.scale=0.3;
    
    o.add(obstacle);
  }
}




