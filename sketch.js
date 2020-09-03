var bullet, wall, thickness;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 10, 50);
  wall = createSprite(1200,200,thickness,height/2);

  speed  = random(223,321);
  weight = random(30, 52);

  bullet.shapeColor = "white";

  bullet.velocityX = speed;

  thickness = random(22, 83);
}

function draw() {
  background(255,255,255); 
  
  wall.shapeColor = (80,80,80);
  
  if (wall.x - bullet.x < (bullet.width + wall.width)/2){

      bullet.velocityX = 0;

      var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)

      if (damage < 10){
          wall.shapeColor = "green";
      } else {
          wall.shapeColor = "red";
      }

  }
  drawSprites();
}