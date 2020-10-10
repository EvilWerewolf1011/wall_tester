
 var bullet,bulletimage,wall,wallimage;
 var speed,weight;
 var thickness;

 function preload(){

    bulletimage = loadImage("bullet.png");   
 }

 

 function setup(){

  createCanvas(1600,400);

  

  bullet = createSprite(50,200,50,50);
  bullet.addImage(bulletimage);
  bullet.scale = 0.3;

  wall = createSprite(1300,200,thickness,height/2);
 
  wall.setCollider("rectangle",0,0,20,20);

 

  bullet.debug = true;
  wall.debug = true;

  wall.setCollider("rectangle",0,0,60,150);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  wall.shapeColor = "brown";

 }
 function draw(){

  background(0);

  bullet.velocityX = speed;
  

  
 if(hasCollide(bullet,wall))
{

  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

   
  if(damage>10)
  {

   wall.shapeColor = color(255,0,0);

  }

   if (damage<10)
   {

    wall.shapeColor = color(0,255,0);


   }

}

 

  drawSprites();
 }

 

 


