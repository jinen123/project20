 var car,wall,speed,weight;
 function setup() {
 createCanvas(1000,400);
 car = createSprite(100,200,50,50);
 wall = createSprite(800,200,50,200);
 wall.shapeColor = "brown"
 speed = Math.round(random(55,100));
 weight = Math.round(random(400,1600));
}

function draw() {
  background ("black");
  car.velocityX = speed;
  //car.x=World.mouseX;
  //car.y=World.mouseY;
  //console.log(wall.x -  car.x)
  if(wall.x -  car.x < 50)
  {
   car.velocityX = 0;
   var deformation = 0.5 * speed * weight * speed / 22500
   if(deformation > 180)
   {
    car.shapeColor = "red"
   }
   if(deformation < 180  &&  deformation>80)
   {
    car.shapeColor = "yellow"
   }  
   if(deformation < 100)
   {
    car.shapeColor = "green"
   }
  }
  drawSprites();
}
